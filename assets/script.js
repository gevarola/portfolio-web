(function () {
  var state = { lang: localStorage.getItem("grlv-lang") || "en" };

  function t() { return SITE[state.lang]; }
  function esc(s) { return s; }

  function renderHeader() {
    var s = t();
    document.title = s.meta.title;
    document.documentElement.lang = state.lang;
    document.getElementById("lang-toggle").textContent = s.meta.langLabel;
    var navLinks = document.querySelectorAll("[data-nav]");
    navLinks.forEach(function (a) {
      a.textContent = s.nav[a.getAttribute("data-nav")];
    });
  }

  function renderHero() {
    var s = t().hero;
    document.getElementById("hero-eyebrow").textContent = s.eyebrow;
    document.getElementById("hero-title").textContent = s.title;
    document.getElementById("hero-subtitle").textContent = s.subtitle;
    document.getElementById("hero-cta-work").textContent = s.ctaWork;
    document.getElementById("hero-cta-contact").textContent = s.ctaContact;
    var statsEl = document.getElementById("hero-stats");
    statsEl.innerHTML = s.stats.map(function (st) {
      return '<div class="hero-stat"><span class="value">' + st.value + '</span><span class="label">' + st.label + '</span></div>';
    }).join("");
  }

  function renderAbout() {
    var s = t().about;
    document.getElementById("about-eyebrow").textContent = s.eyebrow;
    document.getElementById("about-title").textContent = s.title;
    document.getElementById("about-body").innerHTML = s.body.map(function (p) { return "<p>" + p + "</p>"; }).join("");
    document.getElementById("about-languages-label").textContent = s.languagesLabel;
    document.getElementById("about-languages").textContent = s.languages;
    document.getElementById("about-experience-label").textContent = s.experienceLabel;
    document.getElementById("about-experience").innerHTML = s.experience.map(function (e) {
      return '<li><span><span class="t-role">' + e.role + '</span><br><span class="t-org">' + e.org + '</span></span><span class="t-period">' + e.period + '</span></li>';
    }).join("");
    document.getElementById("about-education-label").textContent = s.educationLabel;
    document.getElementById("about-education").innerHTML = s.education.map(function (e) {
      return '<li><span><span class="t-role">' + e.name + '</span><br><span class="t-org">' + e.org + '</span></span><span class="t-period">' + e.year + '</span></li>';
    }).join("");
    document.getElementById("about-skills-label").textContent = s.skillsLabel;
    document.getElementById("about-skills").innerHTML = s.skillGroups.map(function (g) {
      return '<div class="skill-group"><h4>' + g.title + '</h4><p>' + g.items + '</p></div>';
    }).join("");
    var cvBtn = document.getElementById("about-cv-btn");
    cvBtn.textContent = s.cvButton;
    cvBtn.setAttribute("href", LINKS.cv);
  }

  function renderCases() {
    var s = t().work;
    document.getElementById("work-eyebrow").textContent = s.eyebrow;
    document.getElementById("work-title").textContent = s.title;
    var grid = document.getElementById("cases-grid");
    grid.innerHTML = CASES.map(function (c, i) {
      var c_l = c[state.lang];
      return (
        '<article class="case-card" data-case="' + i + '">' +
          '<div class="case-img"><img src="' + c.image + '" alt="' + c_l.title + '" loading="lazy"></div>' +
          '<div class="case-card-body">' +
            '<p class="case-org">' + c.org + ' · ' + c.period + '</p>' +
            '<h3>' + c_l.title + '</h3>' +
            '<p class="case-teaser">' + c_l.challenge + '</p>' +
            '<span class="case-view">' + s.viewCase + '</span>' +
          '</div>' +
        '</article>'
      );
    }).join("");
    grid.querySelectorAll(".case-card").forEach(function (card) {
      card.addEventListener("click", function () {
        openCaseModal(parseInt(card.getAttribute("data-case"), 10));
      });
    });
  }

  function openCaseModal(index) {
    var c = CASES[index];
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
      '<div class="modal-section"><h4>' + s.resultLabel + '</h4><p>' + c_l.result + '</p></div>';

    document.getElementById("modal-close").setAttribute("aria-label", s.close);
    document.getElementById("case-modal").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCaseModal() {
    document.getElementById("case-modal").classList.remove("open");
    document.body.style.overflow = "";
  }

  function renderCreator() {
    var s = t().creator;
    document.getElementById("creator-eyebrow").textContent = s.eyebrow;
    document.getElementById("creator-title").textContent = s.title;
    document.getElementById("creator-body").textContent = s.body;
    document.getElementById("creator-account-label").textContent = s.accountStatsLabel;
    document.getElementById("creator-stats").innerHTML = s.accountStats.map(function (st) {
      return '<span><span class="value">' + st.value + '</span><span class="label">' + st.label + '</span></span>';
    }).join("");
    document.getElementById("creator-grid").innerHTML = CREATOR_ITEMS.map(function (item) {
      var stats = item.stats.map(function (st) { return st.value + " " + st[state.lang]; }).join(" · ");
      return (
        '<a class="creator-card" href="' + item.link + '" target="_blank" rel="noopener">' +
          '<div class="creator-img"><img src="' + item.image + '" alt="' + item.brand + '" loading="lazy"></div>' +
          '<div class="creator-card-body">' +
            '<p class="creator-brand">' + item.brand + '</p>' +
            '<p class="creator-desc">' + item[state.lang] + '</p>' +
            '<div class="creator-meta"><span>' + stats + '</span></div>' +
          '</div>' +
        '</a>'
      );
    }).join("");
  }

  function renderContact() {
    var s = t().contact;
    document.getElementById("contact-eyebrow").textContent = s.eyebrow;
    document.getElementById("contact-title").textContent = s.title;
    document.getElementById("contact-body").textContent = s.body;
    document.getElementById("contact-links").innerHTML =
      '<a class="btn btn-primary" href="mailto:' + LINKS.email + '">' + s.emailLabel + '</a>' +
      '<a class="btn btn-ghost" href="' + LINKS.linkedin + '" target="_blank" rel="noopener">' + s.linkedinLabel + '</a>' +
      '<a class="btn btn-ghost" href="' + LINKS.instagram + '" target="_blank" rel="noopener">' + s.instagramLabel + '</a>';
    document.getElementById("footer-text").textContent = s.footer;
  }

  function renderAll() {
    renderHeader();
    renderHero();
    renderAbout();
    renderCases();
    renderCreator();
    renderContact();
  }

  document.getElementById("lang-toggle").addEventListener("click", function () {
    state.lang = state.lang === "en" ? "es" : "en";
    localStorage.setItem("grlv-lang", state.lang);
    renderAll();
  });

  document.getElementById("nav-toggle").addEventListener("click", function () {
    document.querySelector(".site-header").classList.toggle("nav-open");
  });

  document.querySelectorAll(".main-nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.querySelector(".site-header").classList.remove("nav-open");
    });
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
