import "../css/reset.css";
import "../css/main.css";
import "./main.js";

// Thema wisselen
document.querySelectorAll("[data-theme]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", btn.dataset.theme);
  });
});

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// View Transitions API voorbeeld
if (document.startViewTransition) {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      document.startViewTransition(() => {
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
}
