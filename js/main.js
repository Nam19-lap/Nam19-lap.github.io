document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mode-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
  });
});
