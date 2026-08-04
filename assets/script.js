(function () {
  var state = { lang: localStorage.getItem("grlv-lang") || "en" };

  function t() { return SITE[state.lang]; }

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
    var cvBtn = document.getElementById("details-cv-btn");
    cvBtn.textContent = s.cvButton;
    cvBtn.setAttribute("href", LINKS.cv);
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

  function projectCard(c, index) {
    var c_l = c[state.lang];
    return (
      '<article class="project-card" data-case="' + c.id + '">' +
        '<span class="project-card-tag">' + c.tag[state.lang] + '</span>' +
        '<span class="project-card-num" aria-hidden="true">' + String(index + 1).padStart(2, "0") + '</span>' +
        '<span class="project-card-title">' + c_l.title + '</span>' +
      '</article>'
    );
  }

  function renderWork() {
    var s = t().work;
    document.getElementById("work-heading").textContent = s.heading;
    var listEl = document.getElementById("clients-list");
    listEl.innerHTML = CLIENTS.map(function (client) {
      var cl = client[state.lang];
      var projects = CASES.filter(function (c) { return c.client === client.id; });
      return (
        '<div class="client-block">' +
          '<div class="client-header">' +
            '<h3 class="client-name">' + cl.name + '</h3>' +
            '<p class="client-meta">' + cl.meta + '</p>' +
            '<p class="client-intro">' + cl.intro + '</p>' +
          '</div>' +
          '<div class="project-grid">' + projects.map(projectCard).join("") + '</div>' +
        '</div>'
      );
    }).join("");
    listEl.querySelectorAll(".project-card").forEach(function (card) {
      card.addEventListener("click", function () {
        openCaseModal(card.getAttribute("data-case"));
      });
    });
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
      '<div class="modal-section"><h4>' + s.resultLabel + '</h4><p>' + c_l.result + '</p></div>';

    document.getElementById("modal-close").setAttribute("aria-label", s.close);
    document.getElementById("case-modal").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCaseModal() {
    document.getElementById("case-modal").classList.remove("open");
    document.body.style.overflow = "";
  }

  function renderAll() {
    renderHeader();
    renderIntro();
    renderDetails();
    renderPillars();
    renderWork();
  }

  document.getElementById("lang-toggle").addEventListener("click", function () {
    state.lang = state.lang === "en" ? "es" : "en";
    localStorage.setItem("grlv-lang", state.lang);
    renderAll();
  });

  var navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      document.querySelector(".site-header").classList.toggle("nav-open");
    });
  }

  document.getElementById("modal-close").addEventListener("click", closeCaseModal);
  document.getElementById("case-modal").addEventListener("click", function (e) {
    if (e.target === this) closeCaseModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeCaseModal();
  });

  renderAll();
})();
