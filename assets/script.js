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
    document.getElementById("pillars-title").textContent = s.title;
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

  function renderAll() {
    renderHeader();
    renderIntro();
    renderDetails();
    renderPillars();
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

  renderAll();
})();
