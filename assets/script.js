(function () {
  var state = { lang: localStorage.getItem("grlv-lang") || "en" };

  function t() { return SITE[state.lang]; }

  function renderHeader() {
    var s = t();
    document.title = s.meta.title;
    document.documentElement.lang = state.lang;
    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === state.lang);
    });
    var navLinks = document.querySelectorAll("[data-nav]");
    navLinks.forEach(function (a) {
      a.textContent = s.nav[a.getAttribute("data-nav")];
    });
  }

  function chip(item) {
    var inner;
    if (item.icon) {
      var d = ICON_PATHS[item.icon];
      inner = '<span class="badge-chip"><svg viewBox="0 0 24 24" width="19" height="19"><path fill="currentColor" d="' + d + '"/></svg></span>';
    } else if (item.img) {
      inner = '<span class="badge-chip"><img src="' + item.img + '" alt="' + item.name + '"></span>';
    } else {
      inner = '<span class="badge-chip badge-chip-word">' + item.word + '</span>';
    }
    return '<span class="badge-chip-wrap">' + inner + '<span class="badge-tooltip" role="tooltip">' + item.name + '</span></span>';
  }

  function pad2(n) { return n < 10 ? "0" + n : String(n); }

  function renderIntro() {
    var s = t().intro;
    document.getElementById("intro-status").textContent = s.roleLine;
    document.getElementById("intro-title").innerHTML = s.title.replace(/(\S+)([.?!])?\s*$/, '<span class="highlight">$1</span>$2');
    document.getElementById("intro-subtitle").textContent = s.subtitle;
    document.getElementById("intro-cta-work").textContent = s.ctaWork;
    document.getElementById("intro-cta-contact").textContent = s.ctaContact;
  }

  function renderTicker() {
    var words = TICKER_KEYWORDS[state.lang];
    var itemsHtml = words.map(function (w) {
      return '<span class="ticker-word">' + w + '</span><span class="ticker-dot">·</span>';
    }).join("");
    document.getElementById("ticker-track").innerHTML = itemsHtml + itemsHtml;
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
          '<button type="button" class="index-item-toggle" aria-expanded="false" data-index="' + i + '">' +
            '<span class="index-num">' + item.num + '</span>' +
            '<span class="index-item-title">' + item.title + '</span>' +
            '<span class="index-item-icon" aria-hidden="true">+</span>' +
          '</button>' +
          '<div class="index-item-panel">' +
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

  function projectCard(c, i) {
    var c_l = c[state.lang];
    var c_tag = c.tag[state.lang];
    var s = t().work;
    var posStyle = c.imgPos ? ' style="object-position:' + c.imgPos + '"' : '';
    return (
      '<button type="button" class="row-item" data-case="' + c.id + '" data-preview="' + c.image + '">' +
        '<span class="row-num">' + pad2(i + 1) + '</span>' +
        '<span class="row-thumb"><img src="' + c.image + '" alt="" loading="lazy"' + posStyle + '></span>' +
        '<span class="row-body">' +
          '<span class="row-title">' + c_l.title + '</span>' +
          '<span class="row-meta">' + c.org + ' · ' + c_tag + ' · ' + c.period + '</span>' +
        '</span>' +
        '<span class="row-cta"><span class="row-cta-label">' + s.viewCase + '</span> →</span>' +
      '</button>'
    );
  }

  var workTab = "cases";

  function renderWork() {
    var s = t().work;
    document.getElementById("work-heading").textContent = s.heading;

    var tabsEl = document.getElementById("work-tabs");
    tabsEl.innerHTML =
      '<button type="button" class="work-tab" data-tab="cases">' + s.tabCases + '</button>' +
      '<button type="button" class="work-tab" data-tab="brands">' + s.tabBrands + '</button>';
    tabsEl.querySelectorAll(".work-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setWorkTab(btn.getAttribute("data-tab"));
      });
    });

    var listEl = document.getElementById("clients-list");
    listEl.innerHTML = CASES.map(projectCard).join("");
    listEl.querySelectorAll(".row-item").forEach(function (card) {
      card.addEventListener("click", function () {
        openCaseModal(card.getAttribute("data-case"));
      });
    });

    renderOtherWork();
    setWorkTab(workTab);
  }

  function setWorkTab(tab) {
    workTab = tab;
    document.getElementById("work-panel-cases").hidden = tab !== "cases";
    document.getElementById("work-panel-brands").hidden = tab !== "brands";
    document.querySelectorAll(".work-tab").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tab);
    });
    initScrollReveals();
  }

  function platformOf(link) {
    return link.indexOf("tiktok.com") > -1 ? "tiktok" : "instagram";
  }

  function platformBadge(link) {
    var p = platformOf(link);
    var label = p === "tiktok" ? "TikTok" : "Instagram";
    return (
      '<span class="creator-card-platform" title="' + label + '" aria-label="' + label + '">' +
        '<svg viewBox="0 0 24 24" width="12" height="12"><path fill="currentColor" d="' + ICON_PATHS[p] + '"/></svg>' +
      '</span>'
    );
  }

  function creatorCard(item, i) {
    var platform = platformOf(item.link) === "tiktok" ? "TikTok" : "Instagram";
    var typeLine = item.brand + (item.type ? " · " + item.type[state.lang] : "");
    var statsLine = item.stats
      ? combineEngagementStats(item.stats).map(function (st) { return st.value + " " + st[state.lang]; }).join(" · ")
      : "";
    var metaLine = platform + (statsLine ? " · " + statsLine : "");
    return (
      '<a class="row-item" href="' + item.link + '" target="_blank" rel="noopener" data-preview="' + item.image + '">' +
        '<span class="row-num">' + pad2(i + 1) + '</span>' +
        '<span class="row-thumb"><img src="' + item.image + '" alt="" loading="lazy"></span>' +
        '<span class="row-body">' +
          '<span class="row-title">' + typeLine + '</span>' +
          '<span class="row-meta">' + metaLine + '</span>' +
        '</span>' +
        '<span class="row-cta">↗</span>' +
      '</a>'
    );
  }

  function renderOtherWork() {
    var s = t().otherWork;
    document.getElementById("other-work-body").textContent = s.body;
    var listEl = document.getElementById("other-work-list");
    listEl.innerHTML = OTHER_CLIENTS.map(function (c, i) {
      return (
        '<button type="button" class="row-item" data-client="' + c.id + '" data-preview="' + c.logo + '">' +
          '<span class="row-num">' + pad2(i + 1) + '</span>' +
          '<span class="row-thumb"><img src="' + c.logo + '" alt="" loading="lazy"></span>' +
          '<span class="row-body">' +
            '<span class="row-title">' + c.name + '</span>' +
            '<span class="row-meta">' + c.stage[state.lang] + '</span>' +
          '</span>' +
          '<span class="row-cta"><span class="row-cta-label">' + s.cta + '</span> →</span>' +
        '</button>'
      );
    }).join("");
    listEl.querySelectorAll(".row-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openBrandModal(btn.getAttribute("data-client"));
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
    var statsHtml = item.stats
      ? '<div class="creator-card-stats">' + combineEngagementStats(item.stats).map(function (st) { return "<span>" + st.value + " " + st[state.lang] + "</span>"; }).join("") + "</div>"
      : "";
    return (
      '<a class="creator-card" href="' + item.link + '" target="_blank" rel="noopener">' +
        '<div class="creator-card-img">' + platformBadge(item.link) + '<img src="' + item.image + '" alt="' + item.brand + '" loading="lazy"></div>' +
        '<div class="creator-card-body">' +
          '<p class="creator-card-desc">' + item[state.lang] + "</p>" +
          statsHtml +
        "</div>" +
      "</a>"
    );
  }

  function pendingSlotCard(label) {
    return (
      '<div class="creator-card creator-card-pending" aria-hidden="true">' +
        '<div class="creator-card-img creator-card-pending-img"><span class="creator-card-pending-plus">+</span></div>' +
        '<div class="creator-card-body"><p class="creator-card-pending-label">' + label + "</p></div>" +
      "</div>"
    );
  }

  function openBrandModal(clientId) {
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
      // Only the views total is shown here, not every metric type each piece happens to carry.
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

    var pendingHtml = "";
    for (var i = 0; i < (c.pendingSlots || 0); i++) pendingHtml += pendingSlotCard(s.pendingLabel);

    var featuredHtml = (items.length || pendingHtml)
      ? '<div class="creator-grid brand-modal-grid">' + items.map(brandFeaturedCard).join("") + pendingHtml + '</div>'
      : '<p class="brand-modal-empty">' + s.empty + ' <a href="' + c.link + '" target="_blank" rel="noopener">' + s.viewProfile + ' ↗</a></p>';

    document.getElementById("modal-body").innerHTML =
      '<div class="brand-modal-head">' +
        '<div class="brand-modal-logo"><img src="' + c.logo + '" alt="' + c.name + '"></div>' +
        '<div>' +
          '<h3 class="brand-modal-name">' + c.name + '</h3>' +
          '<span class="other-work-stage">' + c.stage[state.lang] + '</span>' +
        '</div>' +
        '<a class="brand-modal-profile" href="' + c.link + '" target="_blank" rel="noopener">' + s.viewProfile + ' ↗</a>' +
      '</div>' +
      '<p class="brand-modal-desc">' + c.description[state.lang] + '</p>' +
      (statsHtml ? '<div class="modal-stats">' + statsHtml + '</div>' : '') +
      '<div class="modal-section"><h4>' + s.featuredHeading + '</h4>' + featuredHtml + '</div>';

    document.getElementById("modal-close").setAttribute("aria-label", t().work.close);
    document.getElementById("case-modal").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function renderCreator() {
    var s = t().creator;
    document.getElementById("creator-eyebrow").textContent = s.eyebrow;
    document.getElementById("creator-body").textContent = s.body;
    document.getElementById("creator-list").innerHTML = CREATOR_ITEMS.filter(function (item) { return !item.client; }).map(creatorCard).join("");
  }

  function renderAI() {
    var s = t().ai;
    document.getElementById("ai-eyebrow").textContent = s.eyebrow;
    document.getElementById("ai-body").textContent = s.body;
    document.getElementById("ai-tools").innerHTML = AI_TOOLS.map(function (tool) {
      return (
        '<div class="ai-tool-card">' +
          '<div class="ai-tool-img"><img src="' + tool.image + '" alt="' + tool.name + '" loading="lazy"></div>' +
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
    document.getElementById("contact-title").textContent = s.title;
    document.getElementById("contact-body").textContent = s.body;
    var rows = [
      { label: s.emailLabel, href: "mailto:" + LINKS.email, icon: "mail" },
      { label: s.linkedinLabel, href: LINKS.linkedin, icon: "linkedin" },
      { label: s.instagramLabel, href: LINKS.instagram, icon: "instagram" },
      { label: s.githubLabel, href: LINKS.github, icon: "github" }
    ];
    document.getElementById("contact-links").innerHTML = rows.map(function (r) {
      var isExternal = r.href.indexOf("mailto:") !== 0;
      return (
        '<a class="contact-icon-btn" href="' + r.href + '"' + (isExternal ? ' target="_blank" rel="noopener"' : '') +
        ' aria-label="' + r.label + '" title="' + r.label + '">' +
        '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="' + ICON_PATHS[r.icon] + '"/></svg>' +
        '</a>'
      );
    }).join("");
    document.getElementById("site-footer-text").textContent = s.footer;
  }

  function openCaseModal(caseId) {
    var c = CASES.filter(function (x) { return x.id === caseId; })[0];
    var c_l = c[state.lang];
    var s = t().work;
    var images = [c.image];
    if (c.image2) images.push(c.image2);
    var imgHtml = images.map(function (src) { return '<img src="' + src + '" alt="' + c_l.title + '">'; }).join("");
    var statsHtml = c.stats.map(function (st) {
      return '<div><span class="value">' + st.value + '</span><span class="label">' + st[state.lang] + '</span></div>';
    }).join("");
    var processHtml = c_l.process.map(function (p) { return "<li>" + p + "</li>"; }).join("");

    document.getElementById("modal-body").innerHTML =
      '<div class="modal-img">' + imgHtml + '</div>' +
      '<p class="modal-org">' + c.org + ' · ' + c.period + '</p>' +
      '<h3>' + c_l.title + '</h3>' +
      '<div class="modal-stats">' + statsHtml + '</div>' +
      '<div class="modal-section"><h4>' + s.challengeLabel + '</h4><p>' + c_l.challenge + '</p></div>' +
      '<div class="modal-section"><h4>' + s.processLabel + '</h4><ul>' + processHtml + '</ul></div>' +
      '<div class="modal-section"><h4>' + s.resultLabel + '</h4><p>' + c_l.result + '</p></div>' +
      '<div class="modal-section"><h4>' + s.strategicLabel + '</h4><p>' + c_l.strategicThinking + '</p></div>' +
      '<div class="modal-section"><h4>' + s.learnedLabel + '</h4><p>' + c_l.whatWeLearned + '</p></div>';

    document.getElementById("modal-close").setAttribute("aria-label", s.close);
    document.getElementById("case-modal").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCaseModal() {
    document.getElementById("case-modal").classList.remove("open");
    document.body.style.overflow = "";
  }

  var revealCtx = null;

  function initScrollReveals() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (revealCtx) revealCtx.revert();

    revealCtx = gsap.context(function () {
      gsap.from("#pillars-list .index-item", {
        scrollTrigger: { trigger: "#pillars-list", start: "top 82%" },
        opacity: 0, y: 24, duration: 0.6, ease: "power2.out", stagger: 0.08
      });

      gsap.from("#clients-list .row-item", {
        scrollTrigger: { trigger: "#clients-list", start: "top 85%" },
        opacity: 0, y: 18, duration: 0.5, ease: "power2.out", stagger: 0.06
      });

      gsap.from("#other-work-list .row-item", {
        scrollTrigger: { trigger: "#other-work-list", start: "top 85%" },
        opacity: 0, y: 18, duration: 0.5, ease: "power2.out", stagger: 0.05
      });

      gsap.from("#creator-list .row-item", {
        scrollTrigger: { trigger: "#creator-list", start: "top 85%" },
        opacity: 0, y: 18, duration: 0.5, ease: "power2.out", stagger: 0.05
      });
    });
  }

  function setupHoverPreview() {
    var el = document.getElementById("hover-preview");
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var img = el.querySelector("img");
    var active = null;

    function position(e) {
      var gap = 20, margin = 16;
      var w = el.offsetWidth, h = el.offsetHeight;
      var left = e.clientX + gap;
      var top = e.clientY + gap;
      if (left + w > window.innerWidth - margin) left = e.clientX - gap - w;
      if (top + h > window.innerHeight - margin) top = e.clientY - gap - h;
      el.style.left = Math.max(margin, left) + "px";
      el.style.top = Math.max(margin, top) + "px";
    }

    document.addEventListener("mouseover", function (e) {
      var row = e.target.closest(".row-item[data-preview]");
      if (!row || row === active) return;
      active = row;
      img.src = row.getAttribute("data-preview");
      position(e);
      el.classList.add("visible");
    });
    document.addEventListener("mouseout", function (e) {
      var row = e.target.closest(".row-item[data-preview]");
      if (!row || (e.relatedTarget && row.contains(e.relatedTarget))) return;
      active = null;
      el.classList.remove("visible");
    });
    document.addEventListener("mousemove", function (e) {
      if (!active) return;
      position(e);
    });
  }

  function renderAll() {
    renderHeader();
    renderIntro();
    renderTicker();
    renderDetails();
    renderPillars();
    renderWork();
    renderCreator();
    renderAI();
    renderWebDev();
    renderContact();
    initScrollReveals();
  }

  document.querySelectorAll(".lang-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (lang === state.lang) return;
      state.lang = lang;
      localStorage.setItem("grlv-lang", state.lang);
      renderAll();
    });
  });

  var navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      document.querySelector(".site-header").classList.toggle("nav-open");
    });
  }
  document.getElementById("main-nav").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      document.querySelector(".site-header").classList.remove("nav-open");
    }
  });

  document.getElementById("modal-close").addEventListener("click", closeCaseModal);
  document.getElementById("case-modal").addEventListener("click", function (e) {
    if (e.target === this) closeCaseModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeCaseModal();
  });

  setupHoverPreview();
  renderAll();
})();
