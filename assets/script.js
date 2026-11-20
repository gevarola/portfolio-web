(function () {
  "use strict";

  // ---------- State ----------
  function initialLang() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "es" || param === "en") return param;
    try {
      var saved = localStorage.getItem("grlv-lang");
      if (saved === "es" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }
  var state = { lang: initialLang(), tab: "cases", ugcFilter: "all", ugcYear: "all" };
  var TABS = ["cases", "brands", "ugc"];

  function T() { return SITE[state.lang]; }
  function $(id) { return document.getElementById(id); }
  function L(obj) { return obj[state.lang]; }

  var ARROW = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function icon(name, size) {
    return '<svg viewBox="' + (ICON_VIEWBOX[name] || "0 0 24 24") + '" width="' + (size || 14) + '" height="' + (size || 14) + '" aria-hidden="true"><path fill="currentColor" d="' + ICON_PATHS[name] + '"/></svg>';
  }

  // ---------- Metric helpers ----------
  function parseMetric(str) {
    var clean = String(str).replace(/[+,]/g, "").trim();
    var mult = 1;
    if (/M$/i.test(clean)) { mult = 1e6; clean = clean.slice(0, -1); }
    else if (/K$/i.test(clean)) { mult = 1e3; clean = clean.slice(0, -1); }
    var n = parseFloat(clean);
    return isNaN(n) ? 0 : n * mult;
  }
  function viewsOf(item) {
    var v = (item.stats || []).filter(function (s) { return s.en === "views"; })[0];
    return v || null;
  }

  // ---------- Header ----------
  function renderHeader() {
    var s = T();
    document.title = s.meta.title;
    document.documentElement.lang = state.lang;
    document.querySelectorAll(".lang-option").forEach(function (b) {
      var on = b.getAttribute("data-lang") === state.lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.textContent = s.nav[a.getAttribute("data-nav")];
    });
    $("nav-toggle").setAttribute("aria-label", s.nav.menu);
  }

  // ---------- Hero ----------
  function renderHero() {
    var s = T(), i = s.intro;
    $("hero-status").textContent = s.ui.status;
    // Name is already the H1, so drop the "Hi, I'm Germán." opener from the lead
    $("hero-title").innerHTML = i.title.replace(/^[^.]+\.\s*/, "").replace(/\[\[(.+?)\]\]/g, "<em>$1</em>");
    $("hero-sub").textContent = i.subtitle;
    $("hero-kicker").innerHTML = i.roleLine.split(" · ").join(' <span class="sep">//</span> ');
    $("hero-kicker-short").textContent = s.ui.kickerShort;
    $("hero-cta-work").textContent = i.ctaWork;
    $("hero-cta-contact").textContent = i.ctaContact;

    $("metrics").innerHTML = s.highlights.items.map(function (h) {
      return '<li class="metric reveal"><span class="metric-value" data-target="' + h.value + '">' + h.value + '</span><span class="metric-label">' + h.label + '</span></li>';
    }).join("");

    // Marquee band: two copies so the loop is seamless
    var words = s.ui.marquee.map(function (w) { return '<span>' + w + '</span><i class="mq-dot"></i>'; }).join("");
    $("marquee").innerHTML = words + '<span aria-hidden="true" style="display:contents">' + words + '</span>';

    $("brands-label").textContent = s.ui.brandsLabel;
    $("brands-list").innerHTML = BRANDS.map(function (b) {
      return '<li class="brand' + (b.raw ? ' brand-raw' : '') + '"><img src="' + b.logo + '" alt="' + b.name + '" loading="lazy" style="height:' + (b.h || 32) + 'px"></li>';
    }).join("");
  }

  // ---------- Work ----------
  function renderWork() {
    var s = T(), w = s.work;
    $("work-eyebrow").textContent = s.ui.workEyebrow;
    $("work-title").textContent = s.ui.workTitle;

    var labels = { cases: w.tabCases, brands: w.tabBrands, ugc: w.tabUgc };
    $("work-tabs").innerHTML = TABS.map(function (tab) {
      return '<button type="button" class="tab" role="tab" id="tab-' + tab + '" aria-controls="panel-' + tab + '" data-tab="' + tab + '">' + labels[tab] + '</button>';
    }).join("");
    $("work-tabs").querySelectorAll(".tab").forEach(function (btn) {
      btn.addEventListener("click", function () { setTab(btn.getAttribute("data-tab")); });
      btn.addEventListener("keydown", function (e) {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        var i = TABS.indexOf(btn.getAttribute("data-tab"));
        var next = TABS[(i + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length];
        setTab(next);
        $("tab-" + next).focus();
      });
    });

    // Cases
    $("case-grid").innerHTML = CASES.map(function (c, idx) {
      var lead = viewsOf(c) || (c.stats && c.stats[0]);
      var pos = c.imgPos ? ' style="object-position:' + c.imgPos + '"' : "";
      return (
        '<a class="case-card reveal' + '" href="#case-' + c.id + '" data-case="' + c.id + '">' +
          '<div class="case-media"><img src="' + c.image + '" alt="" loading="lazy" decoding="async"' + pos + '></div>' +
          '<div class="case-body">' +
            '<p class="case-meta"><b>' + c.org.split(" · ")[0] + '</b> · ' + L(c.tag) + '</p>' +
            '<h3 class="case-title">' + L(c).title + '</h3>' +
            '<div class="case-foot">' +
              (lead ? '<span class="case-metric"><strong>' + lead.value + '</strong>' + L(lead) + '</span>' : '<span></span>') +
              '<span class="case-arrow" aria-hidden="true">' + ARROW + '</span>' +
            '</div>' +
          '</div>' +
        '</a>'
      );
    }).join("");
    $("case-grid").querySelectorAll(".case-card").forEach(function (card) {
      card.addEventListener("click", function (e) {
        e.preventDefault();
        openCase(card.getAttribute("data-case"), card);
      });
    });

    // Accounts
    var ow = s.otherWork;
    $("accounts-intro").textContent = ow.body;
    function accountCard(c) {
      return (
        '<button type="button" class="account-card" data-client="' + c.id + '">' +
          '<div class="account-head">' +
            '<div class="account-logo"><img src="' + c.logo + '" alt="" loading="lazy"></div>' +
            '<div><div class="account-name">' + c.name + '</div><div class="account-stage">' + L(c.stage) + '</div></div>' +
          '</div>' +
          '<div class="account-stats">' + (c.stats || []).map(function (st) {
            return '<div><strong>' + st.value + '</strong><span>' + L(st) + '</span></div>';
          }).join("") + '</div>' +
          '<span class="account-link">' + ow.cta + ' →</span>' +
        '</button>'
      );
    }
    var current = OTHER_CLIENTS.filter(function (c) { return !c.past; });
    var past = OTHER_CLIENTS.filter(function (c) { return c.past; });
    $("account-grid").innerHTML =
      '<h4 class="col-title">' + ow.currentHeading + '</h4>' +
      '<div class="account-grid">' + current.map(accountCard).join("") + '</div>' +
      (past.length ? '<h4 class="col-title col-title-gap">' + ow.pastHeading + '</h4>' +
        '<div class="account-grid account-grid-past">' + past.map(accountCard).join("") + '</div>' : '');
    $("account-grid").querySelectorAll(".account-card").forEach(function (btn) {
      btn.addEventListener("click", function () { openAccount(btn.getAttribute("data-client"), btn); });
    });

    // UGC
    $("ugc-intro").textContent = w.ugcBody;
    $("rail-prev").setAttribute("aria-label", s.ui.prev);
    $("rail-next").setAttribute("aria-label", s.ui.next);
    renderUgc();
    setTab(state.tab);
  }

  function ugcCard(item) {
    var v = viewsOf(item);
    var platform = item.link.indexOf("tiktok.com") > -1 ? "tiktok" : "instagram";
    return (
      '<a class="ugc-card" href="' + item.link + '" target="_blank" rel="noopener">' +
        '<div class="ugc-media">' +
          '<span class="ugc-platform">' + icon(platform, 13) + '</span>' +
          '<img src="' + item.image + '" alt="" loading="lazy" decoding="async">' +
          (v ? '<span class="ugc-views"><strong>' + v.value + '</strong>' + L(v) + '</span>' : '') +
        '</div>' +
        '<span class="ugc-brand">' + item.brand + '</span>' +
        '<span class="ugc-type">' + (item.type ? L(item.type) : "") + '</span>' +
      '</a>'
    );
  }

  // Handles of the accounts I run, taken from their Instagram links
  var MANAGED = OTHER_CLIENTS.map(function (c) {
    var m = c.link.match(/instagram\.com\/([^\/?]+)/);
    return m ? "@" + m[1] : null;
  });
  function ugcCategory(item) {
    if (item.brand === "@gevarola") return "own";
    if (item.client || MANAGED.indexOf(item.brand) > -1) return "accounts";
    return "brands";
  }
  var UGC_CATS = ["all", "brands", "accounts", "own"];
  // The UGC tab only shows videos where I'm on camera; account videos without me stay in the Accounts tab
  function ugcPool() { return CREATOR_ITEMS.filter(function (x) { return ugcCategory(x) !== "accounts" || x.onCamera; }); }

  // Publish year, read from the post ID itself (both Instagram and TikTok IDs carry a timestamp).
  // An explicit item.year wins if set.
  var IG_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  function yearOf(item) {
    if (item.year) return item.year;
    if (item._year) return item._year;
    var y = 0, m;
    try {
      if ((m = item.link.match(/instagram\.com\/(?:[^\/]+\/)?(?:p|reel)\/([A-Za-z0-9_-]{11})/))) {
        var id = BigInt(0);
        for (var i = 0; i < m[1].length; i++) id = id * BigInt(64) + BigInt(IG_ALPHABET.indexOf(m[1][i]));
        y = new Date(Number((id >> BigInt(23)) + BigInt(1314220021721))).getUTCFullYear();
      } else if ((m = item.link.match(/tiktok\.com\/.*\/video\/(\d+)/))) {
        y = new Date(Number(BigInt(m[1]) >> BigInt(32)) * 1000).getUTCFullYear();
      }
    } catch (e) { y = 0; }
    item._year = y;
    return y;
  }
  function byViews(a, b) {
    var va = viewsOf(a), vb = viewsOf(b);
    return (vb ? parseMetric(vb.value) : 0) - (va ? parseMetric(va.value) : 0);
  }

  function renderUgc() {
    var w = T().work, ui = T().ui, cats = ui.ugcCats;
    if (UGC_CATS.indexOf(state.ugcFilter) === -1) state.ugcFilter = "all";
    var pool = ugcPool();

    // Level 1: category
    $("ugc-filters").setAttribute("aria-label", w.filterLabel);
    $("ugc-filters").innerHTML = UGC_CATS.map(function (k) {
      var n = k === "all" ? pool.length : pool.filter(function (x) { return ugcCategory(x) === k; }).length;
      return '<button type="button" class="seg-btn" aria-pressed="' + (state.ugcFilter === k) + '" data-cat="' + k + '">' +
        cats[k] + '<span class="seg-count">' + n + '</span></button>';
    }).join("");
    $("ugc-filters").querySelectorAll(".seg-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.ugcFilter = btn.getAttribute("data-cat");
        renderUgc();
      });
    });

    var items = state.ugcFilter === "all" ? pool : pool.filter(function (x) { return ugcCategory(x) === state.ugcFilter; });

    // Level 2: year, counted inside the chosen category
    var years = [];
    items.forEach(function (x) { var y = yearOf(x); if (y && years.indexOf(y) === -1) years.push(y); });
    years.sort(function (a, b) { return b - a; });
    if (state.ugcYear !== "all" && years.indexOf(state.ugcYear) === -1) state.ugcYear = "all";
    $("ugc-years").setAttribute("aria-label", ui.ugcYears.label);
    $("ugc-years").innerHTML =
      '<span class="years-label">' + ui.ugcYears.label + '</span>' +
      ["all"].concat(years).map(function (y) {
        var n = y === "all" ? items.length : items.filter(function (x) { return yearOf(x) === y; }).length;
        return '<button type="button" class="year-btn" aria-pressed="' + (state.ugcYear === y) + '" data-year="' + y + '">' +
          (y === "all" ? ui.ugcYears.all : y) + '<sup>' + n + '</sup></button>';
      }).join("");
    $("ugc-years").querySelectorAll(".year-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var v = btn.getAttribute("data-year");
        state.ugcYear = v === "all" ? "all" : parseInt(v, 10);
        renderUgc();
      });
    });

    if (state.ugcYear !== "all") items = items.filter(function (x) { return yearOf(x) === state.ugcYear; });

    // Newest year first, highest-view pieces first inside each year, with a marker where each year starts
    var html = "";
    years.forEach(function (y) {
      var group = items.filter(function (x) { return yearOf(x) === y; }).sort(byViews);
      if (!group.length) return;
      html += '<div class="rail-year"><span class="rail-year-num">' + y + '</span>' +
        '<span class="rail-year-count">' + group.length + ' ' + ui.ugcYears.videos + '</span></div>';
      html += group.map(ugcCard).join("");
    });
    var undated = items.filter(function (x) { return !yearOf(x); }).sort(byViews);
    html += undated.map(ugcCard).join("");

    $("ugc-rail").innerHTML = html;
    $("ugc-rail").scrollLeft = 0;
    updateRail();
  }

  function updateRail() {
    var r = $("ugc-rail");
    $("rail-prev").disabled = r.scrollLeft <= 4;
    $("rail-next").disabled = r.scrollLeft + r.clientWidth >= r.scrollWidth - 4;
  }

  function setTab(tab) {
    if (TABS.indexOf(tab) === -1) tab = "cases";
    state.tab = tab;
    TABS.forEach(function (name) { $("panel-" + name).hidden = name !== tab; });
    document.querySelectorAll(".tab").forEach(function (b) {
      var on = b.getAttribute("data-tab") === tab;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.setAttribute("tabindex", on ? "0" : "-1");
    });
    if (tab === "ugc") updateRail();
    revealNow($("panel-" + tab));
  }

  // ---------- Tools ----------
  function renderTools() {
    var s = T();
    $("tools-eyebrow").textContent = s.ui.toolsEyebrow;
    $("tools-title").textContent = s.ui.toolsTitle;
    $("tools-lead").textContent = s.ui.toolsLead;
    var STACK_NAMES = { anthropic: "Claude Code", instagram: "Instagram", tiktok: "TikTok", vercel: "Vercel", supabase: "Supabase", github: "GitHub" };
    $("tool-grid").innerHTML = TOOL_CARDS.map(function (t, i) {
      return (
        '<a class="tool-card reveal" href="' + t.link + '" target="_blank" rel="noopener">' +
          '<div class="tool-top"><span class="tool-num">0' + (i + 1) + '</span><span class="tool-live">' + s.ui.live + '</span></div>' +
          '<div class="tool-logo">' + (t.logo ? '<img class="tool-logo-' + t.logoStyle + '" src="' + t.logo + '" alt="' + t.name + '" loading="lazy">' : '<span class="tool-wordmark">' + t.wordmark + '</span>') + '</div>' +
          '<div class="tool-bottom">' +
            '<div class="tool-kind">' + L(t.kind) + '</div>' +
            '<div class="tool-name">' + t.name + '</div>' +
            '<p class="tool-desc">' + L(t.desc) + '</p>' +
            '<div class="tool-stack">' + t.stack.map(function (k) {
              return '<span class="tool-chip" title="' + STACK_NAMES[k] + '">' + icon(k, 13) + STACK_NAMES[k] + '</span>';
            }).join("") + '</div>' +
          '</div>' +
        '</a>'
      );
    }).join("");
  }

  // ---------- About ----------
  function renderAbout() {
    var s = T(), d = s.details;
    $("about-eyebrow").textContent = s.ui.aboutEyebrow;
    $("about-title").textContent = s.ui.aboutTitle;
    $("skills-grid").innerHTML = s.pillars.items.map(function (p) {
      return '<div class="skill reveal"><div class="skill-num">' + p.num + '</div><h3 class="skill-title">' + p.title + '</h3><p class="skill-body">' + p.body + '</p></div>';
    }).join("");

    $("exp-title").textContent = d.experienceHeading;
    $("exp-list").innerHTML = d.experience.map(function (e) {
      return '<li><span class="t-role">' + e.role + '</span><span class="t-org">' + e.org + '</span><span class="t-period">' + e.period + '</span></li>';
    }).join("");
    $("edu-title").textContent = d.educationHeading;
    $("edu-list").innerHTML = d.education.map(function (e) {
      return '<li><span class="t-role">' + e.name + '</span><span class="t-org">' + e.org + '</span><span class="t-period">' + e.year + '</span></li>';
    }).join("");
    $("lang-title").textContent = d.languagesLabel;
    $("lang-text").textContent = d.languages;

    $("stack-title").textContent = s.ui.stackTitle;
    $("stack").innerHTML = PLATFORMS.concat(TOOLS).map(function (t) {
      var ic = t.icon ? icon(t.icon, 15) : (t.img ? '<img src="' + t.img + '" alt="">' : "");
      return '<span class="stack-item">' + ic + t.name + '</span>';
    }).join("");
    $("cv-row").innerHTML =
      '<a class="btn btn-dark btn-sm" href="' + LINKS.cvEs + '" download>' + d.cvButtonEs + '</a>' +
      '<a class="btn btn-line btn-sm" href="' + LINKS.cvEn + '" download>' + d.cvButtonEn + '</a>';
  }

  // ---------- Contact ----------
  function renderContact() {
    var s = T(), c = s.contact;
    $("contact-eyebrow").textContent = s.ui.contactEyebrow;
    $("contact-title").textContent = c.title;
    $("contact-body").textContent = c.body;
    var email = $("email-link");
    email.textContent = LINKS.email;
    email.href = "mailto:" + LINKS.email;
    $("copy-email").textContent = c.copyLabel;
    $("social-row").innerHTML = [
      { label: c.linkedinLabel, href: LINKS.linkedin, icon: "linkedin" },
      { label: c.instagramLabel, href: LINKS.instagram, icon: "instagram" },
      { label: c.githubLabel, href: LINKS.github, icon: "github" }
    ].map(function (r) {
      return '<a class="social-link" href="' + r.href + '" target="_blank" rel="noopener">' + icon(r.icon, 15) + r.label + '</a>';
    }).join("") +
      '<a class="social-link" href="' + LINKS.cvEs + '" download>CV ES ↓</a>' +
      '<a class="social-link" href="' + LINKS.cvEn + '" download>CV EN ↓</a>';
    $("footer-text").textContent = "© " + new Date().getFullYear() + " · " + c.footer;
    $("footer-top").textContent = c.backToTop;
  }

  // ---------- Modal ----------
  var lastFocus = null, modalHash = null;

  function showModal(html, trigger, hash) {
    lastFocus = trigger || document.activeElement;
    $("modal-body").innerHTML = html;
    $("modal-close").setAttribute("aria-label", T().work.close);
    var overlay = $("modal");
    overlay.classList.add("open");
    overlay.scrollTop = 0;
    document.documentElement.classList.add("modal-open");
    document.querySelectorAll("main, header, footer").forEach(function (el) { el.inert = true; });
    if (hash && location.hash !== hash) history.pushState({ modal: hash }, "", hash);
    modalHash = hash || null;
    $("modal-close").focus();
  }

  function closeModal(fromHistory) {
    var overlay = $("modal");
    if (!overlay.classList.contains("open")) return;
    overlay.classList.remove("open");
    document.documentElement.classList.remove("modal-open");
    document.querySelectorAll("main, header, footer").forEach(function (el) { el.inert = false; });
    if (!fromHistory && modalHash && location.hash === modalHash) {
      history.replaceState(null, "", location.pathname + location.search);
    }
    modalHash = null;
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
  }

  function openCase(id, trigger) {
    var c = CASES.filter(function (x) { return x.id === id; })[0];
    if (!c) return;
    var w = T().work, cl = L(c);
    var imgs = [c.image].concat(c.image2 ? [c.image2] : []);
    var html =
      '<p class="m-meta">' + c.org + ' · ' + L(c.tag) + ' · ' + c.period + '</p>' +
      '<h3 class="m-title" id="modal-title">' + cl.title + '</h3>' +
      '<div class="m-images">' + imgs.map(function (src) { return '<img src="' + src + '" alt="" decoding="async">'; }).join("") + '</div>' +
      '<div class="m-stats">' + c.stats.map(function (st) { return '<div><strong>' + st.value + '</strong><span>' + L(st) + '</span></div>'; }).join("") + '</div>' +
      '<p class="m-quote">' + cl.strategicThinking + '</p>' +
      '<div class="m-section"><h4>' + w.challengeLabel + '</h4><p>' + cl.challenge + '</p></div>' +
      '<div class="m-section"><h4>' + w.processLabel + '</h4><ul>' + cl.process.map(function (p) { return "<li>" + p + "</li>"; }).join("") + '</ul></div>' +
      '<div class="m-section"><h4>' + w.resultLabel + '</h4><p>' + cl.result + '</p></div>' +
      '<div class="m-section"><h4>' + w.learnedLabel + '</h4><p>' + cl.whatWeLearned + '</p></div>';
    showModal(html, trigger, "#case-" + c.id);
  }

  function openAccount(id, trigger) {
    var c = OTHER_CLIENTS.filter(function (x) { return x.id === id; })[0];
    if (!c) return;
    var ow = T().otherWork;
    var items = CREATOR_ITEMS.filter(function (x) { return x.client === id; });
    var html =
      '<div class="m-head">' +
        '<div class="m-logo"><img src="' + c.logo + '" alt=""></div>' +
        '<div><h3 class="m-title" id="modal-title">' + c.name + '</h3><p class="m-meta">' + L(c.stage) + '</p></div>' +
      '</div>' +
      '<p class="m-desc">' + L(c.description) + '</p>' +
      '<p style="margin-top:12px"><a class="m-profile" href="' + c.link + '" target="_blank" rel="noopener">' + ow.viewProfile + ' ↗</a></p>' +
      ((c.stats && c.stats.length) ? '<div class="m-stats">' + c.stats.map(function (st) { return '<div><strong>' + st.value + '</strong><span>' + L(st) + '</span></div>'; }).join("") + '</div>' : '') +
      '<h4 class="col-title">' + ow.featuredHeading + '</h4>' +
      (items.length ? '<div class="m-grid">' + items.map(ugcCard).join("") + '</div>' : '<p class="m-empty">' + ow.empty + '</p>');
    showModal(html, trigger, null);
  }

  // ---------- Reveal on scroll ----------
  var io = null;
  function initReveal() {
    var els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target;
          var siblings = Array.prototype.indexOf.call(el.parentNode.children, el);
          el.style.transitionDelay = Math.min(siblings, 6) * 50 + "ms";
          el.classList.add("in");
          io.unobserve(el);
        });
      }, { rootMargin: "0px 0px -8% 0px" });
    }
    els.forEach(function (el) { io.observe(el); });
  }
  function revealNow(scope) {
    if (!scope) return;
    scope.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  // Headlines wipe up once, the first time they enter the viewport
  function initTitleReveal() {
    var titles = document.querySelectorAll(".section-title, .contact-title, .hero-name");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        obs.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -6% 0px" });
    titles.forEach(function (el) { el.classList.add("reveal-title"); obs.observe(el); });
  }

  // Numbers count up the first time they show; after a language switch they render final
  var counted = false;
  function countUp(el) {
    var raw = el.getAttribute("data-target");
    var m = raw && raw.match(/^([+]?)([\d.]+)([MK]?)(\+?)$/);
    if (!m) return;
    var end = parseFloat(m[2]), dec = (m[2].split(".")[1] || "").length, t0 = performance.now(), D = 1600;
    (function tick(t) {
      var p = Math.min((t - t0) / D, 1), e = 1 - Math.pow(1 - p, 4);
      el.textContent = m[1] + (end * e).toFixed(dec) + m[3] + m[4];
      if (p < 1) requestAnimationFrame(tick); else el.textContent = raw;
    })(t0);
  }
  function initCounters() {
    if (counted || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    counted = true;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        countUp(en.target);
        obs.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll("[data-target]").forEach(function (el) { obs.observe(el); });
  }

  // ---------- Render all ----------
  function renderAll() {
    renderHeader();
    renderHero();
    renderWork();
    renderTools();
    renderAbout();
    renderContact();
    initReveal();
  }

  // ---------- Events ----------
  document.querySelectorAll(".lang-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (lang === state.lang) return;
      state.lang = lang;
      try { localStorage.setItem("grlv-lang", lang); } catch (e) {}
      renderAll();
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    });
  });

  var header = document.querySelector(".site-header");
  var toggle = $("nav-toggle");
  function setMenu(open) {
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  toggle.addEventListener("click", function () { setMenu(!header.classList.contains("nav-open")); });
  $("main-nav").addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("click", function (e) {
    if (header.classList.contains("nav-open") && !header.contains(e.target)) setMenu(false);
  });

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  $("ugc-rail").addEventListener("scroll", updateRail, { passive: true });
  $("rail-prev").addEventListener("click", function () { var r = $("ugc-rail"); r.scrollBy({ left: -r.clientWidth * 0.8, behavior: "smooth" }); });
  $("rail-next").addEventListener("click", function () { var r = $("ugc-rail"); r.scrollBy({ left: r.clientWidth * 0.8, behavior: "smooth" }); });

  $("copy-email").addEventListener("click", function () {
    var btn = this, c = T().contact;
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(LINKS.email).then(function () {
      btn.textContent = c.copiedLabel;
      setTimeout(function () { btn.textContent = c.copyLabel; }, 1800);
    }, function () {});
  });

  $("modal-close").addEventListener("click", function () { closeModal(false); });
  $("modal").addEventListener("click", function (e) { if (e.target === this) closeModal(false); });
  $("modal").addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    var f = this.querySelectorAll("a[href], button:not([disabled])");
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeModal(false);
    if (header.classList.contains("nav-open")) { setMenu(false); toggle.focus(); }
  });

  // Hash routing: #case-<id> opens a case, #ugc opens the UGC tab
  function handleHash(fromHistory) {
    var h = location.hash;
    if (h.indexOf("#case-") === 0) {
      openCase(h.slice(6), document.querySelector('[data-case="' + h.slice(6) + '"]'));
      return;
    }
    closeModal(fromHistory);
    if (h === "#ugc") setTab("ugc");
  }
  window.addEventListener("popstate", function () { handleHash(true); });
  window.addEventListener("hashchange", function () { handleHash(true); });
  document.querySelectorAll('a[href="#work"]').forEach(function (a) {
    a.addEventListener("click", function () { if (state.tab === "ugc") setTab("cases"); });
  });

  // Active nav item
  function initActiveNav() {
    if (!("IntersectionObserver" in window)) return;
    var links = document.querySelectorAll(".main-nav a[data-nav]");
    var current = null;
    function paint() {
      var key = current === "work" && state.tab === "ugc" ? "ugc" : current;
      links.forEach(function (a) {
        var on = a.getAttribute("data-nav") === key;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { current = en.target.id; paint(); } });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ["work", "tools", "about", "contact"].forEach(function (id) { obs.observe($(id)); });
    $("work-tabs").addEventListener("click", paint);
  }

  renderAll();
  initActiveNav();
  initTitleReveal();
  initCounters();
  if (location.hash) handleHash(false);
})();
