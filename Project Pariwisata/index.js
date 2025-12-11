window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const daftar = document.querySelector(".daftar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    daftar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    daftar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navlinks = document.querySelectorAll(".nav-link");

  function activeNavLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navlinks.forEach((link) => {
      link.classList.remove("active-scroll");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active-scroll");
      }
    });
  }

  window.addEventListener("scroll", activeNavLink);
});

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector('[data-bs-target="#more"]');
  var collapse = document.getElementById("more");

  collapse.addEventListener("shown.bs.collapse", function () {
    btn.textContent = "Lihat Sedikit";
  });

  collapse.addEventListener("hidden.bs.collapse", function () {
    btn.textContent = "Lihat Lainnya";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mapButtons = document.querySelectorAll(".map-btn");
  const mapIframe = document.getElementById("maps-iframe");

  mapButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const newMapSrc = this.getAttribute("data-map-src");
      mapIframe.src = newMapSrc;

      mapButtons.forEach((btn) => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline-primary");
        btn.classList.remove("active");
      });

      this.classList.add("btn-primary");
      this.classList.remove("btn-outline-primary");
      this.classList.add("active");
    });
  });
});
