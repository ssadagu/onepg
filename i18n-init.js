document.addEventListener("DOMContentLoaded", function () {
  if (!window.I18n) return;

  initCloseButton();
  initLanguageSelector();
});

function initCloseButton() {
  var closeBtn = document.querySelector(".close-btn");
  if (!closeBtn) return;

  var newCloseBtn = closeBtn.cloneNode(true);
  closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

  newCloseBtn.addEventListener("click", function () {
    var message = window.I18n.getMessage("closeConfirm");
    var isConfirm = confirm(message);

    if (!isConfirm) return;

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.href = "/";
  });
}

function initLanguageSelector() {
  var langSelect = document.querySelector(".lang-select");
  var langBtnText = document.querySelector(".lang-btn span");
  var langLinks = document.querySelectorAll(".lang-link");

  if (!langLinks.length) return;

  langLinks.forEach(function (item) {
    var newItem = item.cloneNode(true);
    item.parentNode.replaceChild(newItem, item);
  });

  var freshLangLinks = document.querySelectorAll(".lang-link");

  function setActiveLangLink(lang) {
    freshLangLinks.forEach(function (item) {
      item.classList.toggle("active", item.dataset.lang === lang);
    });

    if (langBtnText) {
      langBtnText.textContent = window.I18n.LANG_LABELS[lang] || lang.toUpperCase();
    }
  }

  setActiveLangLink(window.I18n.getLanguage());

  freshLangLinks.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var targetLang = this.dataset.lang;
      if (!targetLang) return;

      window.I18n.setLanguage(targetLang);
      setActiveLangLink(targetLang);

      if (langSelect) {
        langSelect.classList.remove("active");
      }
    });
  });

  document.addEventListener("languageChanged", function (e) {
    setActiveLangLink(e.detail.lang);
  });
}
