window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const cart = document.querySelector(".cart1");
  const daftar = document.querySelector(".daftar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    cart.classList.add("scrolled");
    daftar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    cart.classList.remove("scrolled");
    daftar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector('[data-bs-target="#more"]');
  var collapse = document.getElementById("more");

  collapse.addEventListener("shown.bs.collapse", function () {
    btn.textContent = "Lihat Lebih Sedikit";
  });

  collapse.addEventListener("hidden.bs.collapse", function () {
    btn.textContent = "Lihat Lainnya";
  });
});

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navlinks = document.querySelectorAll(".nav-link");

  function activateNavLink() {
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

  // activateNavLink();
  window.addEventListener("scroll", activateNavLink);
});
