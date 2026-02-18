document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("lang-toggle");
  let currentLang = "es";

  if (!toggleBtn) return;

  const updateLanguage = () => {

    // Traduce textos normales
    document.querySelectorAll("[data-es]").forEach(el => {
      const text = el.dataset[currentLang];
      if (text !== undefined) {
        el.innerHTML = text;
      }
    });

    // 👇 Traduce placeholders de inputs
    document.querySelectorAll("input[data-es]").forEach(el => {
      el.placeholder = el.dataset[currentLang];
    });

    toggleBtn.textContent = currentLang === "es" ? "EN" : "ES";
  };

  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    updateLanguage();
  });

  updateLanguage();
});



  document.querySelectorAll(".talk-title").forEach(title => {
    title.addEventListener("click", () => {
      const talk = title.parentElement;
      talk.classList.toggle("active");
    });
  });

