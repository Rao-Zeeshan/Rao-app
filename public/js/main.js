document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mobileToggle");
  const nav = document.getElementById("mobileNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }
});
