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

function closeLangDropdown(langSelect) {
  if (langSelect) {
    langSelect.classList.remove("active");
  }
}

function initLanguageSelector() {
  var langSelect = document.querySelector(".lang-select");
  if (!langSelect) return;

  var newLangSelect = langSelect.cloneNode(true);
  langSelect.parentNode.replaceChild(newLangSelect, langSelect);
  langSelect = newLangSelect;

  var langBtn = langSelect.querySelector(".lang-btn");
  var langBtnText = langSelect.querySelector(".lang-btn span");
  var langLinks = langSelect.querySelectorAll(".lang-link");

  function setActiveLangLink(lang) {
    langLinks.forEach(function (item) {
      item.classList.toggle("active", item.dataset.lang === lang);
    });

    if (langBtnText) {
      langBtnText.textContent = window.I18n.LANG_LABELS[lang] || lang.toUpperCase();
    }
  }

  if (langBtn) {
    langBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      langSelect.classList.toggle("active");
    });
  }

  langLinks.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var targetLang = this.dataset.lang;
      if (!targetLang) return;

      window.I18n.setLanguage(targetLang);
      setActiveLangLink(targetLang);
      closeLangDropdown(langSelect);
    });
  });

  langSelect.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  document.addEventListener("click", function () {
    closeLangDropdown(langSelect);
  });

  document.addEventListener("languageChanged", function (e) {
    setActiveLangLink(e.detail.lang);
    closeLangDropdown(langSelect);
  });

  setActiveLangLink(window.I18n.getLanguage());
}
