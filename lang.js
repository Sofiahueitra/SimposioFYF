document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("lang-toggle");
  let currentLang = "es";

  if (!toggleBtn) return;

  const updateLanguage = () => {
    document.querySelectorAll("[data-es]").forEach(el => {
      const text = el.dataset[currentLang];
      if (text !== undefined) {
        el.innerHTML = text;
      }
    });

    toggleBtn.textContent = currentLang === "es" ? "EN" : "ES";
  };

  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    updateLanguage();
  });

  // Inicializa el idioma al cargar
  updateLanguage();
});
