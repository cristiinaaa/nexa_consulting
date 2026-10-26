(() => {
  "use strict";

  // Mobile navigation: accessible state is reflected in aria-expanded.
  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector("#site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuButton.textContent = isOpen ? "×" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.textContent = "☰";
      });
    });
  }

  // Keep footer years current without hard-coding the year into every page.
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  // Important: this static GitHub Pages site does not send or store form submissions.
  // Connect a real form endpoint before launch. Do not silently pretend a message was sent.
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent =
        "Your form has not been sent. The site owner must connect a form-processing service before this form can receive messages.";
      status.classList.add("status-warning");
    });
  }
})();
