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
    if (item.icon) {
      var d = ICON_PATHS[item.icon];
      return '<span class="badge-chip" title="' + item.name + '"><svg viewBox="0 0 24 24" width="19" height="19"><path fill="' + item.color + '" d="' + d + '"/></svg></span>';
    }
    if (item.img) {
      return '<span class="badge-chip" title="' + item.name + '"><img src="' + item.img + '" alt="' + item.name + '"></span>';
    }
    return '<span class="badge-chip badge-chip-word" title="' + item.name + '" style="color:' + item.color + '">' + item.word + '</span>';
  }

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
    document.getElementById("pillars-list").innerHTML = s.items.map(function (item) {
      return (
        '<div class="index-item">' +
          '<span class="index-num">' + item.num + '</span>' +
          '<span class="index-item-title">' + item.title + '</span>' +
          '<span class="index-item-body">' + item.body + '</span>' +
        '</div>'
      );
    }).join("");
  }

  function projectCard(c) {
    var c_l = c[state.lang];
    var c_tag = c.tag[state.lang];
    var s = t().work;
    var posStyle = c.imgPos ? ' style="object-position:' + c.imgPos + '"' : '';
    return (
      '<article class="project-card" data-case="' + c.id + '">' +
        '<div class="reveal-mask" aria-hidden="true"></div>' +
        '<div class="project-card-img"><img src="' + c.image + '" alt="' + c_l.title + '" loading="lazy"' + posStyle + '></div>' +
        '<div class="project-card-body">' +
          '<p class="project-card-meta">' + c.org + ' · ' + c_tag + ' · ' + c.period + '</p>' +
          '<h4 class="project-card-title">' + c_l.title + '</h4>' +
          '<p class="project-card-teaser">' + c_l.challenge + '</p>' +
          '<span class="project-card-link">' + s.viewCase + ' →</span>' +
        '</div>' +
      '</article>'
    );
  }

  function renderWork() {
    var s = t().work;
    document.getElementById("work-heading").textContent = s.heading;
    var listEl = document.getElementById("clients-list");
    listEl.innerHTML = '<div class="project-grid">' + CASES.map(projectCard).join("") + '</div>';
    listEl.querySelectorAll(".project-card").forEach(function (card) {
      card.addEventListener("click", function () {
        openCaseModal(card.getAttribute("data-case"));
      });
    });
  }

  function creatorCard(item) {
    var statsHtml = item.stats
      ? '<p class="creator-card-stats">' + item.stats.map(function (st) { return st.value + ' ' + st[state.lang]; }).join(" · ") + '</p>'
      : '';
    var brandLine = '<span class="creator-card-handle">' + item.brand + '</span>' + (item.type ? ' · ' + item.type[state.lang] : '');
    return (
      '<a class="creator-card" href="' + item.link + '" target="_blank" rel="noopener">' +
        '<div class="creator-card-img"><img src="' + item.image + '" alt="' + item.brand + '" loading="lazy"></div>' +
        '<div class="creator-card-body">' +
          '<p class="creator-card-brand">' + brandLine + '</p>' +
          '<p class="creator-card-desc">' + item[state.lang] + '</p>' +
          statsHtml +
        '</div>' +
      '</a>'
    );
  }

  function renderOtherWork() {
    var s = t().otherWork;
    document.getElementById("other-work-eyebrow").textContent = s.eyebrow;
    document.getElementById("other-work-body").textContent = s.body;
    document.getElementById("other-work-grid").innerHTML = OTHER_CLIENTS.map(function (c) {
      return (
        '<a class="other-work-item" href="' + c.link + '" target="_blank" rel="noopener">' +
          '<div class="other-work-logo"><img src="' + c.logo + '" alt="' + c.name + '" loading="lazy"></div>' +
          '<span class="other-work-name">' + c.name + '</span>' +
          '<span class="other-work-stage">' + c.stage[state.lang] + '</span>' +
        '</a>'
      );
    }).join("");
  }

  function renderCreator() {
    var s = t().creator;
    document.getElementById("creator-eyebrow").textContent = s.eyebrow;
    document.getElementById("creator-body").textContent = s.body;
    document.getElementById("creator-grid").innerHTML = CREATOR_ITEMS.map(creatorCard).join("");
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

      gsap.utils.toArray("#clients-list .project-card").forEach(function (card) {
        var mask = card.querySelector(".reveal-mask");
        gsap.set(mask, { display: "block" });
        gsap.timeline({ scrollTrigger: { trigger: card, start: "top 85%" } })
          .from(card, { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" })
          .fromTo(mask, { scaleY: 1 }, { scaleY: 0, duration: 0.7, ease: "power3.inOut" }, "-=0.25");
      });

      gsap.from("#other-work-grid .other-work-item", {
        scrollTrigger: {
          trigger: "#other-work-grid", start: "top bottom", end: "bottom 60%", scrub: 0.6
        },
        opacity: 0, scale: 0.85, filter: "blur(8px)", stagger: 0.12
      });
    });
  }

  function renderAll() {
    renderHeader();
    renderIntro();
    renderTicker();
    renderDetails();
    renderPillars();
    renderWork();
    renderOtherWork();
    renderCreator();
    renderAI();
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

  renderAll();
})();
