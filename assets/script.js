(function () {
  // Language: ?lang= link param > saved choice > browser language
  function initialLang() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "es" || param === "en") return param;
    try {
      var saved = localStorage.getItem("grlv-lang");
      if (saved === "es" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }

  var state = { lang: initialLang(), ugcFilter: "all" };

  function t() { return SITE[state.lang]; }

  function renderHeader() {
    var s = t();
    document.title = s.meta.title;
    document.documentElement.lang = state.lang;
    document.querySelectorAll(".lang-option").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === state.lang;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.textContent = s.nav[a.getAttribute("data-nav")];
    });
    document.getElementById("nav-toggle").setAttribute("aria-label", s.nav.menu);
  }

  function chip(item) {
    var inner;
    if (item.icon) {
      var d = ICON_PATHS[item.icon];
      inner = '<span class="badge-chip"><svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path fill="currentColor" d="' + d + '"/></svg></span>';
    } else if (item.img) {
      inner = '<span class="badge-chip badge-chip-logo"><img src="' + item.img + '" alt=""></span>';
    } else {
      inner = '<span class="badge-chip badge-chip-word">' + item.word + '</span>';
    }
    return '<span class="badge-chip-wrap" tabindex="0" aria-label="' + item.name + '">' + inner + '<span class="badge-tooltip" role="tooltip">' + item.name + '</span></span>';
  }

  function renderIntro() {
    var s = t().intro;
    document.getElementById("intro-status").textContent = s.roleLine;
    var titleHtml = /\[\[.+\]\]/.test(s.title)
      ? s.title.replace(/\[\[(.+?)\]\]/g, '<span class="highlight">$1</span>')
      : s.title.replace(/(\S+)([.?!])?\s*$/, '<span class="highlight">$1</span>$2');
    document.getElementById("intro-title").innerHTML = titleHtml;
    document.getElementById("intro-subtitle").textContent = s.subtitle;
    document.getElementById("intro-cta-work").textContent = s.ctaWork;
    document.getElementById("intro-cta-contact").textContent = s.ctaContact;
  }

  function renderHighlights() {
    var s = t().highlights;
    document.getElementById("highlights-label").textContent = s.label;
    document.getElementById("highlights-list").innerHTML = s.items.map(function (h) {
      return '<li class="highlight-item"><span class="highlight-value">' + h.value + '</span><span class="highlight-label">' + h.label + '</span></li>';
    }).join("");
  }

  function renderBrands() {
    var s = t().brands;
    document.getElementById("brands-heading").textContent = s.heading;
    var item = function (b, dup) {
      return '<li class="brand-logo' + (dup ? ' brand-logo-dup" aria-hidden="true' : '') + '">' +
        '<img src="' + b.logo + '" alt="' + (dup ? '' : b.name) + '" loading="lazy">' +
        (b.ugc ? '<span class="brand-ugc-tag">' + s.ugcTag + '</span>' : '') +
        '</li>';
    };
    // Second copy only shows on mobile, where the row scrolls as a seamless marquee
    document.getElementById("brands-list").innerHTML =
      BRANDS.map(function (b) { return item(b, false); }).join("") +
      BRANDS.map(function (b) { return item(b, true); }).join("");
  }

  function renderDetails() {
    var s = t().details;
    document.getElementById("details-experience-heading").textContent = s.experienceHeading;
    document.getElementById("details-experience").innerHTML = s.experience.map(function (e) {
      return '<li><span class="t-role">' + e.role + '</span><span class="t-org">' + e.org + '</span><span class="t-period">' + e.period + '</span></li>';
    }).join("");
    document.getElementById("details-education-heading").textContent = s.educationHeading;
    document.getElementById("details-education").innerHTML = s.education.map(function (e) {
      return '<li><span class="t-role">' + e.name + '</span><span class="t-org">' + e.org + '</span><span class="t-period">' + e.year + '</span></li>';
    }).join("");
    document.getElementById("details-languages-label").textContent = s.languagesLabel;
    document.getElementById("details-languages").textContent = s.languages;
    var cvBtnEs = document.getElementById("details-cv-btn-es");
    cvBtnEs.textContent = s.cvButtonEs;
    cvBtnEs.setAttribute("href", LINKS.cvEs);
    var cvBtnEn = document.getElementById("details-cv-btn-en");
    cvBtnEn.textContent = s.cvButtonEn;
    cvBtnEn.setAttribute("href", LINKS.cvEn);
    document.getElementById("details-tools-heading").textContent = s.toolsHeading;
    document.getElementById("details-platforms-label").textContent = s.platformsLabel;
    document.getElementById("details-tools-label").textContent = s.toolsLabel;
    document.getElementById("details-platforms").innerHTML = PLATFORMS.map(chip).join("");
    document.getElementById("details-tools").innerHTML = TOOLS.map(chip).join("");
  }

  function renderPillars() {
    var s = t().pillars;
    document.getElementById("pillars-eyebrow").textContent = s.eyebrow;
    var listEl = document.getElementById("pillars-list");
    listEl.innerHTML = s.items.map(function (item, i) {
      return (
        '<div class="index-item">' +
          '<button type="button" class="index-item-toggle" aria-expanded="false" aria-controls="pillar-panel-' + i + '" data-index="' + i + '">' +
            '<span class="index-num">' + item.num + '</span>' +
            '<span class="index-item-title">' + item.title + '</span>' +
            '<span class="index-item-icon" aria-hidden="true">+</span>' +
          '</button>' +
          '<div class="index-item-panel" id="pillar-panel-' + i + '">' +
            '<div class="index-item-panel-inner">' +
              '<p class="index-item-body">' + item.body + '</p>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    listEl.querySelectorAll(".index-item-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".index-item");
        var wasOpen = item.classList.contains("open");
        listEl.querySelectorAll(".index-item.open").forEach(function (openItem) {
          openItem.classList.remove("open");
          openItem.querySelector(".index-item-toggle").setAttribute("aria-expanded", "false");
        });
        if (!wasOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function projectCard(c) {
    var c_l = c[state.lang];
    var c_tag = c.tag[state.lang];
    var s = t().work;
    var posStyle = c.imgPos ? ' style="object-position:' + c.imgPos + '"' : '';
    var lead = c.stats && c.stats[0];
    return (
      '<a class="project-card" href="#case-' + c.id + '" data-case="' + c.id + '">' +
        '<div class="project-card-img"><img src="' + c.image + '" alt="" loading="lazy" decoding="async"' + posStyle + '></div>' +
        '<div class="project-card-body">' +
          '<p class="project-card-meta">' + c.org + ' · ' + c_tag + ' · ' + c.period + '</p>' +
          (lead ? '<p class="project-card-metric"><span>' + lead.value + '</span> ' + lead[state.lang] + '</p>' : '') +
          '<h3 class="project-card-title">' + c_l.title + '</h3>' +
          '<p class="project-card-teaser">' + c_l.challenge + '</p>' +
          '<span class="project-card-link">' + s.viewCase + ' →</span>' +
        '</div>' +
      '</a>'
    );
  }

  var workTab = "cases";
  var TABS = ["cases", "brands", "ugc"];

  function renderWork() {
    var s = t().work;
    document.getElementById("work-heading").textContent = s.heading;

    var labels = { cases: s.tabCases, brands: s.tabBrands, ugc: s.tabUgc };
    var tabsEl = document.getElementById("work-tabs");
    tabsEl.innerHTML = TABS.map(function (tab) {
      return '<button type="button" class="work-tab" role="tab" id="tab-' + tab + '" aria-controls="work-panel-' + tab + '" data-tab="' + tab + '">' + labels[tab] + '</button>';
    }).join("");
    tabsEl.querySelectorAll(".work-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setWorkTab(btn.getAttribute("data-tab"));
      });
      btn.addEventListener("keydown", function (e) {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        var i = TABS.indexOf(btn.getAttribute("data-tab"));
        var next = TABS[(i + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length];
        setWorkTab(next);
        document.getElementById("tab-" + next).focus();
      });
    });

    var listEl = document.getElementById("clients-list");
    listEl.className = "project-grid";
    listEl.innerHTML = CASES.map(projectCard).join("");
    listEl.querySelectorAll(".project-card").forEach(function (card) {
      card.addEventListener("click", function (e) {
        e.preventDefault();
        openCaseModal(card.getAttribute("data-case"), card);
      });
    });

    renderOtherWork();
    renderUgc();
    setWorkTab(workTab);
  }

  function setWorkTab(tab) {
    if (TABS.indexOf(tab) === -1) tab = "cases";
    workTab = tab;
    TABS.forEach(function (name) {
      document.getElementById("work-panel-" + name).hidden = name !== tab;
    });
    document.querySelectorAll(".work-tab").forEach(function (btn) {
      var on = btn.getAttribute("data-tab") === tab;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
      btn.setAttribute("tabindex", on ? "0" : "-1");
    });
    // Recalculate trigger positions for the panel that just became visible,
    // without tearing down and re-arming reveals that already played.
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  }

  function platformOf(link) {
    return link.indexOf("tiktok.com") > -1 ? "tiktok" : "instagram";
  }

  function platformBadge(link) {
    var p = platformOf(link);
    var label = p === "tiktok" ? "TikTok" : "Instagram";
    return (
      '<span class="creator-card-platform" title="' + label + '" aria-label="' + label + '">' +
        '<svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="' + ICON_PATHS[p] + '"/></svg>' +
      '</span>'
    );
  }

  function statsHtmlFor(item) {
    return item.stats
      ? '<div class="creator-card-stats">' + combineEngagementStats(item.stats).map(function (st) { return "<span>" + st.value + " " + st[state.lang] + "</span>"; }).join("") + "</div>"
      : "";
  }

  function creatorCard(item) {
    var brandLine = '<span class="creator-card-handle">' + item.brand + '</span>' + (item.type ? " · " + item.type[state.lang] : "");
    return (
      '<a class="creator-card" href="' + item.link + '" target="_blank" rel="noopener">' +
        '<div class="creator-card-img">' + platformBadge(item.link) + '<img src="' + item.image + '" alt="" loading="lazy" decoding="async"></div>' +
        '<div class="creator-card-body">' +
          '<p class="creator-card-brand">' + brandLine + '</p>' +
          '<p class="creator-card-desc">' + item[state.lang] + '</p>' +
          statsHtmlFor(item) +
        '</div>' +
      '</a>'
    );
  }

  // UGC tab: every on-camera piece, filterable by brand handle
  function renderUgc() {
    var s = t().work;
    document.getElementById("ugc-body").textContent = s.ugcBody;
    var brands = [];
    CREATOR_ITEMS.forEach(function (item) {
      if (brands.indexOf(item.brand) === -1) brands.push(item.brand);
    });
    if (state.ugcFilter !== "all" && brands.indexOf(state.ugcFilter) === -1) state.ugcFilter = "all";
    var filtersEl = document.getElementById("ugc-filters");
    filtersEl.setAttribute("aria-label", s.filterLabel);
    filtersEl.innerHTML = ["all"].concat(brands).map(function (b) {
      var count = b === "all" ? CREATOR_ITEMS.length : CREATOR_ITEMS.filter(function (x) { return x.brand === b; }).length;
      var on = state.ugcFilter === b;
      return '<button type="button" class="ugc-filter' + (on ? ' active' : '') + '" aria-pressed="' + on + '" data-brand="' + b + '">' +
        (b === "all" ? s.filterAll : b) + ' <span class="ugc-filter-count">' + count + '</span></button>';
    }).join("");
    filtersEl.querySelectorAll(".ugc-filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.ugcFilter = btn.getAttribute("data-brand");
        renderUgc();
      });
    });
    var items = state.ugcFilter === "all" ? CREATOR_ITEMS : CREATOR_ITEMS.filter(function (x) { return x.brand === state.ugcFilter; });
    document.getElementById("ugc-list").innerHTML = items.map(creatorCard).join("");
  }

  function renderOtherWork() {
    var s = t().otherWork;
    document.getElementById("other-work-body").textContent = s.body;
    var listEl = document.getElementById("other-work-list");
    listEl.className = "other-work-grid";
    listEl.innerHTML = OTHER_CLIENTS.map(function (c) {
      return (
        '<button type="button" class="other-work-item" data-client="' + c.id + '">' +
          '<div class="other-work-logo"><img src="' + c.logo + '" alt="" loading="lazy"></div>' +
          '<span class="other-work-name">' + c.name + '</span>' +
          '<span class="other-work-stage">' + c.stage[state.lang] + '</span>' +
          '<span class="other-work-cta">' + s.cta + ' →</span>' +
        '</button>'
      );
    }).join("");
    listEl.querySelectorAll(".other-work-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openBrandModal(btn.getAttribute("data-client"), btn);
      });
    });
  }

  // Parses "6.3M" / "84K" / "+250" / "500" into a plain number.
  function parseMetric(str) {
    var clean = String(str).replace(/[+,]/g, "").trim();
    var mult = 1;
    if (/M$/i.test(clean)) { mult = 1e6; clean = clean.slice(0, -1); }
    else if (/K$/i.test(clean)) { mult = 1e3; clean = clean.slice(0, -1); }
    var n = parseFloat(clean);
    return isNaN(n) ? 0 : n * mult;
  }

  function formatMetric(n) {
    if (n >= 1e6) return (Math.round(n / 1e5) / 10) + "M";
    if (n >= 1e3) return (Math.round(n / 100) / 10) + "K";
    return String(Math.round(n));
  }

  // Folds separate "likes" and "comments" stats into a single rounded "engagement" stat.
  function combineEngagementStats(stats) {
    var likes = null, comments = null, rest = [];
    stats.forEach(function (st) {
      if (st.en === "likes") likes = st;
      else if (st.en === "comments") comments = st;
      else rest.push(st);
    });
    if (!likes || !comments) return stats;
    var total = parseMetric(likes.value) + parseMetric(comments.value);
    var rounded = total >= 1000 ? formatMetric(total)
      : total >= 100 ? Math.round(total / 10) * 10
      : total >= 20 ? Math.round(total / 5) * 5
      : Math.round(total);
    rest.push({ value: "+" + rounded, en: "engagement", es: "engagement" });
    return rest;
  }

  function brandFeaturedCard(item) {
    return (
      '<a class="creator-card" href="' + item.link + '" target="_blank" rel="noopener">' +
        '<div class="creator-card-img">' + platformBadge(item.link) + '<img src="' + item.image + '" alt="" loading="lazy" decoding="async"></div>' +
        '<div class="creator-card-body">' +
          '<p class="creator-card-desc">' + item[state.lang] + "</p>" +
          statsHtmlFor(item) +
        "</div>" +
      "</a>"
    );
  }

  // ---------- Modal (focus handling, inert background, deep links) ----------
  var lastFocus = null;
  var modalHash = null;

  function showModal(trigger, hash) {
    lastFocus = trigger || document.activeElement;
    var overlay = document.getElementById("case-modal");
    document.getElementById("modal-close").setAttribute("aria-label", t().work.close);
    overlay.classList.add("open");
    overlay.scrollTop = 0;
    document.documentElement.classList.add("modal-open");
    document.querySelectorAll("main, header, footer").forEach(function (el) { el.inert = true; });
    if (hash && location.hash !== hash) history.pushState({ modal: hash }, "", hash);
    modalHash = hash || null;
    document.getElementById("modal-close").focus();
  }

  function closeCaseModal(fromHistory) {
    var overlay = document.getElementById("case-modal");
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

  function openBrandModal(clientId, trigger) {
    var c = OTHER_CLIENTS.filter(function (x) { return x.id === clientId; })[0];
    if (!c) return;
    var s = t().otherWork;
    var items = CREATOR_ITEMS.filter(function (x) { return x.client === clientId; });

    var statsHtml = "";
    if (c.stats && c.stats.length) {
      statsHtml = c.stats.map(function (st) {
        return '<div><span class="value">' + st.value + '</span><span class="label">' + st[state.lang] + "</span></div>";
      }).join("");
    } else if (items.length) {
      var viewsTotal = 0, viewsStat = null;
      items.forEach(function (item) {
        (item.stats || []).forEach(function (st) {
          if (st.en === "views") { viewsTotal += parseMetric(st.value); viewsStat = st; }
        });
      });
      statsHtml =
        '<div><span class="value">' + items.length + '</span><span class="label">' + s.piecesLabel + '</span></div>' +
        (viewsStat ? '<div><span class="value">' + formatMetric(viewsTotal) + '</span><span class="label">' + viewsStat[state.lang] + '</span></div>' : '');
    }

    var featuredHtml = items.length
      ? '<div class="creator-grid brand-modal-grid">' + items.map(brandFeaturedCard).join("") + '</div>'
      : '<p class="brand-modal-empty">' + s.empty + ' <a href="' + c.link + '" target="_blank" rel="noopener">' + s.viewProfile + ' ↗</a></p>';

    document.getElementById("modal-body").innerHTML =
      '<div class="brand-modal-head">' +
        '<div class="brand-modal-logo"><img src="' + c.logo + '" alt=""></div>' +
        '<div>' +
          '<h3 class="brand-modal-name" id="modal-title">' + c.name + '</h3>' +
          '<span class="other-work-stage">' + c.stage[state.lang] + '</span>' +
        '</div>' +
        '<a class="brand-modal-profile" href="' + c.link + '" target="_blank" rel="noopener">' + s.viewProfile + ' ↗</a>' +
      '</div>' +
      '<p class="brand-modal-desc">' + c.description[state.lang] + '</p>' +
      (statsHtml ? '<div class="modal-stats">' + statsHtml + '</div>' : '') +
      '<div class="modal-section"><h4>' + s.featuredHeading + '</h4>' + featuredHtml + '</div>';

    showModal(trigger, null);
  }

  function openCaseModal(caseId, trigger) {
    var c = CASES.filter(function (x) { return x.id === caseId; })[0];
    if (!c) return;
    var c_l = c[state.lang];
    var s = t().work;
    var images = [c.image];
    if (c.image2) images.push(c.image2);
    var imgHtml = images.map(function (src) { return '<img src="' + src + '" alt="" decoding="async">'; }).join("");
    var statsHtml = c.stats.map(function (st) {
      return '<div><span class="value">' + st.value + '</span><span class="label">' + st[state.lang] + '</span></div>';
    }).join("");
    var processHtml = c_l.process.map(function (p) { return "<li>" + p + "</li>"; }).join("");

    document.getElementById("modal-body").innerHTML =
      '<div class="modal-img">' + imgHtml + '</div>' +
      '<p class="modal-org">' + c.org + ' · ' + c.period + '</p>' +
      '<h3 id="modal-title">' + c_l.title + '</h3>' +
      '<div class="modal-stats">' + statsHtml + '</div>' +
      '<div class="modal-section"><h4>' + s.challengeLabel + '</h4><p>' + c_l.challenge + '</p></div>' +
      '<div class="modal-section"><h4>' + s.processLabel + '</h4><ul>' + processHtml + '</ul></div>' +
      '<div class="modal-section"><h4>' + s.resultLabel + '</h4><p>' + c_l.result + '</p></div>' +
      '<div class="modal-section"><h4>' + s.strategicLabel + '</h4><p>' + c_l.strategicThinking + '</p></div>' +
      '<div class="modal-section"><h4>' + s.learnedLabel + '</h4><p>' + c_l.whatWeLearned + '</p></div>';

    showModal(trigger, "#case-" + c.id);
  }

  function renderAI() {
    var s = t().ai;
    document.getElementById("ai-eyebrow").textContent = s.eyebrow;
    document.getElementById("ai-body").textContent = s.body;
    document.getElementById("ai-tools").innerHTML = AI_TOOLS.map(function (tool) {
      return (
        '<div class="ai-tool-card">' +
          '<div class="ai-tool-img"><img src="' + tool.image + '" alt="' + tool.name + '" loading="lazy" decoding="async"></div>' +
          '<div class="ai-tool-footer">' +
            '<span class="ai-tool-name">' + tool.name + '</span>' +
            '<a class="btn btn-primary ai-tool-cta" href="' + tool.link + '" target="_blank" rel="noopener">' + s.ctaLabel + '</a>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  function renderWebDev() {
    var s = t().webdev;
    var p = WEBDEV_PROJECT;
    document.getElementById("webdev-eyebrow").textContent = s.eyebrow;
    document.getElementById("webdev-body").textContent = s.body;
    document.getElementById("webdev-stats").innerHTML = p.stats.map(function (st) {
      return '<div><span class="value">' + st.value + '</span><span class="label">' + st[state.lang] + '</span></div>';
    }).join("");
    var cta = document.getElementById("webdev-cta");
    cta.textContent = s.ctaLabel;
    cta.setAttribute("href", p.link);
    var img = document.getElementById("webdev-image");
    img.setAttribute("src", p.image);
    img.setAttribute("alt", p.name);
  }

  function renderContact() {
    var s = t().contact;
    var d = t().details;
    document.getElementById("contact-title").textContent = s.title;
    document.getElementById("contact-body").textContent = s.body;
    document.getElementById("contact-email").innerHTML =
      '<a class="contact-email-link" href="mailto:' + LINKS.email + '">' + LINKS.email + '</a>' +
      '<button type="button" class="btn btn-ghost contact-copy" id="contact-copy">' + s.copyLabel + '</button>';
    document.getElementById("contact-copy").addEventListener("click", function () {
      var btn = this;
      var done = function () {
        btn.textContent = s.copiedLabel;
        setTimeout(function () { btn.textContent = s.copyLabel; }, 1800);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(LINKS.email).then(done, function () {});
    });
    var rows = [
      { label: s.linkedinLabel, href: LINKS.linkedin, icon: "linkedin" },
      { label: s.instagramLabel, href: LINKS.instagram, icon: "instagram" },
      { label: s.githubLabel, href: LINKS.github, icon: "github" }
    ];
    document.getElementById("contact-links").innerHTML = rows.map(function (r) {
      return (
        '<a class="contact-icon-btn" href="' + r.href + '" target="_blank" rel="noopener"' +
        ' aria-label="' + r.label + '" title="' + r.label + '">' +
        '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="' + ICON_PATHS[r.icon] + '"/></svg>' +
        '</a>'
      );
    }).join("");
    document.getElementById("contact-cv").innerHTML =
      '<a href="' + LINKS.cvEs + '" class="btn btn-ghost" download>' + d.cvButtonEs + '</a>' +
      '<a href="' + LINKS.cvEn + '" class="btn btn-ghost" download>' + d.cvButtonEn + '</a>';
    document.getElementById("site-footer-text").textContent = "© " + new Date().getFullYear() + " · " + s.footer;
    document.getElementById("back-to-top").textContent = s.backToTop;
  }

  var revealCtx = null;

  function initScrollReveals() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (revealCtx) revealCtx.revert();

    revealCtx = gsap.context(function () {
      gsap.from("#highlights-list .highlight-item", {
        scrollTrigger: { trigger: "#highlights-list", start: "top 90%" },
        opacity: 0, y: 14, duration: 0.5, ease: "power2.out", stagger: 0.07
      });

      gsap.from("#brands-list .brand-logo", {
        scrollTrigger: { trigger: "#brands-list", start: "top 88%" },
        opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.06
      });

      gsap.from("#pillars-list .index-item", {
        scrollTrigger: { trigger: "#pillars-list", start: "top 82%" },
        opacity: 0, y: 24, duration: 0.6, ease: "power2.out", stagger: 0.08
      });

      gsap.from("#clients-list .project-card", {
        scrollTrigger: { trigger: "#clients-list", start: "top 85%" },
        opacity: 0, y: 18, duration: 0.5, ease: "power2.out", stagger: 0.06
      });
    });
  }

  function renderAll() {
    renderHeader();
    renderIntro();
    renderHighlights();
    renderBrands();
    renderWork();
    renderAI();
    renderWebDev();
    renderPillars();
    renderDetails();
    renderContact();
    initScrollReveals();
  }

  document.querySelectorAll(".lang-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (lang === state.lang) return;
      state.lang = lang;
      try { localStorage.setItem("grlv-lang", state.lang); } catch (e) {}
      renderAll();
    });
  });

  // ---------- Mobile menu ----------
  var header = document.querySelector(".site-header");
  var navToggle = document.getElementById("nav-toggle");
  function setMenu(open) {
    header.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  navToggle.addEventListener("click", function () {
    setMenu(!header.classList.contains("nav-open"));
  });
  document.getElementById("main-nav").addEventListener("click", function (e) {
    if (e.target.tagName === "A") setMenu(false);
  });
  document.addEventListener("click", function (e) {
    if (header.classList.contains("nav-open") && !header.contains(e.target)) setMenu(false);
  });

  document.getElementById("modal-close").addEventListener("click", function () { closeCaseModal(false); });
  document.getElementById("case-modal").addEventListener("click", function (e) {
    if (e.target === this) closeCaseModal(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeCaseModal(false);
    if (header.classList.contains("nav-open")) { setMenu(false); navToggle.focus(); }
  });
  // Keep Tab focus inside the open modal
  document.getElementById("case-modal").addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    var f = this.querySelectorAll('a[href], button:not([disabled])');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // ---------- Hash routing: #case-<id> opens a case, #ugc opens the UGC tab ----------
  function handleHash(fromHistory) {
    var h = location.hash;
    if (h.indexOf("#case-") === 0) {
      openCaseModal(h.slice(6), document.querySelector('[data-case="' + h.slice(6) + '"]'));
      return;
    }
    closeCaseModal(fromHistory);
    if (h === "#ugc") setWorkTab("ugc");
  }
  window.addEventListener("popstate", function () { handleHash(true); });
  window.addEventListener("hashchange", function () { handleHash(true); });
  document.querySelectorAll('a[href="#work"]').forEach(function (a) {
    a.addEventListener("click", function () { if (workTab === "ugc") setWorkTab("cases"); });
  });

  // ---------- Active nav state ----------
  function initActiveNav() {
    if (!("IntersectionObserver" in window)) return;
    var links = document.querySelectorAll(".main-nav a[data-nav]:not(.nav-cta)");
    var map = { work: "work", tools: "tools", about: "about", details: "about", contact: "contact", webdev: "tools" };
    var setActive = function (key) {
      if (key === "work" && workTab === "ugc") key = "ugc";
      links.forEach(function (a) {
        var on = a.getAttribute("data-nav") === key;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) setActive(map[en.target.id] || null);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["work", "tools", "webdev", "about", "details", "contact"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
    document.getElementById("work-tabs").addEventListener("click", function () { setActive("work"); });
  }

  renderAll();
  initActiveNav();
  if (location.hash) handleHash(false);
})();
