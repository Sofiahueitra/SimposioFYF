document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("lang-toggle");

  // Mantener idioma entre páginas
  let currentLang = localStorage.getItem("language") || "es";

  function activarAcordeones() {
    document.querySelectorAll(".talk-title").forEach(title => {
      title.addEventListener("click", () => {
        const talk = title.parentElement;
        talk.classList.toggle("active");
      });
    });
  }

  function updateLanguage() {

    // Guardar idioma
    localStorage.setItem("language", currentLang);

    document.querySelectorAll("[data-es]").forEach(el => {

      const translation = el.dataset[currentLang];
      if (!translation) return;

      // INPUT o TEXTAREA → placeholder
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translation;
      }

      // OPTION → texto normal
      else if (el.tagName === "OPTION") {
        el.textContent = translation;
      }

      // TODO lo demás → permitir HTML (<br>, <strong>, etc.)
      else {
        el.innerHTML = translation;
      }

    });

    // Cambiar texto del botón
    if (toggleBtn) {
      toggleBtn.textContent = currentLang === "es" ? "EN" : "ES";
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      updateLanguage();
    });
  }

  activarAcordeones();
  updateLanguage();

});


// Mostrar campo "Otro"
function mostrarOtro(selectId, inputId) {
  const select = document.getElementById(selectId);
  const input = document.getElementById(inputId);

  if (select.value === "Otro") {
    input.style.display = "block";
    input.required = true;
  } else {
    input.style.display = "none";
    input.required = false;
    input.value = "";
  }
}

const inputFile = document.getElementById("comprobante");
const fileName = document.getElementById("file-name");

inputFile.addEventListener("change", function() {
  if (this.files.length > 0) {
    fileName.textContent = this.files[0].name;
  }
});