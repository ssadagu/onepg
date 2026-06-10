document.addEventListener("DOMContentLoaded", function () {
  /* =========================
    close button
  ========================= */

  const closeBtn = document.querySelector(".close-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const isConfirm = confirm("결제를 취소하시겠습니까?\n입력하신 정보는 저장되지 않습니다.");

      if (isConfirm) {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = "/";
        }
      }
    });
  }

  /* =========================
    header scroll
  ========================= */

  const header = document.querySelector(".header");

  function handleHeaderScroll() {
    if (!header) return;

    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();

  /* =========================
  modal
========================= */

  const termsModal = document.querySelector(".terms-modal");
  const termsTitle = document.querySelector(".terms-modal-title");
  const termsScroll = document.querySelector(".terms-modal-scroll");
  const termsOpenBtns = document.querySelectorAll(".terms-open-btn");
  const termsCloseBtn = document.querySelector(".terms-modal-close");
  const termsConfirmBtn = document.querySelector(".terms-modal-confirm");
  const termsDim = document.querySelector(".terms-modal-dim");

  function resetConfirmButton() {
    if (!termsConfirmBtn) return;

    termsConfirmBtn.disabled = true;
    termsConfirmBtn.classList.remove("active");
  }

  function activeConfirmButton() {
    if (!termsConfirmBtn) return;

    termsConfirmBtn.disabled = false;
    termsConfirmBtn.classList.add("active");
  }

  function checkScrollBottom() {
    if (!termsScroll || !termsConfirmBtn) return;

    const isBottom = termsScroll.scrollTop + termsScroll.clientHeight >= termsScroll.scrollHeight - 5;

    if (isBottom) {
      activeConfirmButton();
    }
  }

  function openTermsModal(title, targetId) {
    const target = document.getElementById(targetId);
    if (!termsModal || !target || !termsScroll) return;

    resetConfirmButton();

    termsTitle.innerText = title;
    termsScroll.innerHTML = target.innerHTML;
    termsScroll.scrollTop = 0;

    termsModal.classList.add("active");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      termsScroll.scrollTop = 0;
      resetConfirmButton();
    }, 0);
  }

  function closeTermsModal() {
    if (!termsModal) return;

    termsModal.classList.remove("active");
    document.body.style.overflow = "";

    if (termsScroll) termsScroll.scrollTop = 0;

    resetConfirmButton();
  }

  termsOpenBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      openTermsModal(this.dataset.title, this.dataset.target);
    });
  });

  if (termsScroll) {
    termsScroll.addEventListener("scroll", checkScrollBottom);
  }

  if (termsCloseBtn) {
    termsCloseBtn.addEventListener("click", closeTermsModal);
  }

  if (termsDim) {
    termsDim.addEventListener("click", closeTermsModal);
  }

  if (termsConfirmBtn) {
    termsConfirmBtn.addEventListener("click", function () {
      if (termsConfirmBtn.disabled) return;
      closeTermsModal();
    });
  }

  /* =========================
  카드 / 간편결제 / 기타결제
========================= */

  const mainTabs = document.querySelectorAll(".pay-tabs .pay-tab");
  const mainPanels = document.querySelectorAll(".pay-panel");

  mainTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.dataset.tab;

      mainTabs.forEach((item) => item.classList.remove("active"));
      mainPanels.forEach((panel) => panel.classList.remove("active"));

      this.classList.add("active");

      const targetPanel = document.getElementById(target);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  /* =========================
  가상계좌 / 계좌이체 / 휴대폰
========================= */

  const subTabs = document.querySelectorAll(".pay-sub-tabs .pay-item");
  const subContents = document.querySelectorAll(".pay-content");

  subTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.dataset.subTab;

      subTabs.forEach((item) => item.classList.remove("active"));
      subContents.forEach((content) => content.classList.remove("active"));

      this.classList.add("active");

      const targetContent = document.getElementById(target);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });

  /* =========================
  결제수단 탭
========================= */

  const payTabs = document.querySelectorAll(".pay-tabs .pay-tab");
  const payPanels = document.querySelectorAll(".pay-panel");
  const afterContent = document.querySelector(".pay-after-content");
  const installmentWrap = document.querySelector(".installment-wrap");

  if (afterContent) {
    afterContent.classList.add("active");
    afterContent.classList.remove("show-terms");
  }

  if (installmentWrap) {
    installmentWrap.style.display = "block";
  }

  const payMoreBtn = document.querySelector(".pay-more-btn");
  const payMoreWrap = document.querySelector(".pay-more-wrap");

  function resetPaySelections() {
    document.querySelectorAll(".pay-panel .pay-item").forEach(function (item) {
      item.classList.remove("active");
    });

    document.querySelectorAll(".pay-content").forEach(function (content) {
      content.classList.remove("active");
    });

    const defaultEtcTab = document.querySelector('.pay-sub-tabs .pay-item[data-sub-tab="virtual"]');
    const defaultEtcContent = document.getElementById("virtual");

    if (defaultEtcTab) defaultEtcTab.classList.add("active");
    if (defaultEtcContent) defaultEtcContent.classList.add("active");
  }

  function resetPayMore() {
    if (payMoreWrap) {
      payMoreWrap.classList.remove("active");
    }

    if (payMoreBtn) {
      payMoreBtn.classList.remove("active");
      payMoreBtn.textContent = payMoreBtn.dataset.open;
    }
  }

  function resetTerms() {
    const agreeAll = document.getElementById("agreeAll");
    const agreeItems = document.querySelectorAll(".agree-item");
    const nextBtn = document.querySelector(".btn-next");
    const termsWrap = document.querySelector(".terms-all-wrap");

    if (agreeAll) agreeAll.checked = false;

    agreeItems.forEach(function (item) {
      item.checked = false;
    });

    if (nextBtn) nextBtn.disabled = true;
    if (termsWrap) termsWrap.classList.remove("active");
  }

  payTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const target = this.dataset.tab;

      payTabs.forEach(function (item) {
        item.classList.remove("active");
      });

      payPanels.forEach(function (panel) {
        panel.classList.remove("active");
      });

      resetPaySelections();
      resetPayMore();
      resetTerms();

      this.classList.add("active");

      const targetPanel = document.getElementById(target);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }

      if (!afterContent) return;

      afterContent.classList.remove("active", "show-terms");

      if (target === "card") {
        afterContent.classList.add("active");
      }

      if (target === "simple") {
        afterContent.classList.add("active");
      }

      if (target === "etc") {
        afterContent.classList.add("active", "show-terms");
      }
      afterContent.classList.remove("active", "show-terms");

      if (installmentWrap) {
        installmentWrap.style.display = "none";
      }

      if (target === "card") {
        afterContent.classList.add("active");

        if (installmentWrap) {
          installmentWrap.style.display = "block";
        }
      }

      if (target === "simple") {
        afterContent.classList.add("active");
      }

      if (target === "etc") {
        afterContent.classList.add("active", "show-terms");
      }
    });
  });

  /* =========================
  더보기
========================= */

  if (payMoreBtn && payMoreWrap) {
    payMoreBtn.addEventListener("click", function () {
      payMoreWrap.classList.toggle("active");
      payMoreBtn.classList.toggle("active");

      payMoreBtn.textContent = payMoreWrap.classList.contains("active") ? payMoreBtn.dataset.close : payMoreBtn.dataset.open;
    });
  }

  /* =========================
  카드 선택
========================= */

  const cardButtons = document.querySelectorAll("#card .pay-item");

  cardButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      cardButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      if (afterContent) {
        afterContent.classList.add("active", "show-terms");
      }
    });
  });

  /* =========================
  간편결제 선택
========================= */

  const simplePayBtns = document.querySelectorAll("#simple .pay-item");

  simplePayBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      simplePayBtns.forEach(function (btn) {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      if (afterContent) {
        // 간편결제 버튼 클릭 시 약관 이하 노출
        afterContent.classList.add("active", "show-terms");
      }
    });
  });

  /* =========================
  결제 선택 + scroll
========================= */

  const payItems = document.querySelectorAll(".pay-panel .pay-grid .pay-item:not([data-sub-tab])");

  function scrollToTarget(target) {
    if (!target) return;

    setTimeout(function () {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);
  }

  function scrollToNextArea(currentItem) {
    const currentSection = currentItem.closest(".pay-section");
    const afterContent = document.querySelector(".pay-after-content");

    if (currentSection) {
      const nextSection = currentSection.nextElementSibling;

      if (nextSection && nextSection.classList.contains("pay-section")) {
        scrollToTarget(nextSection);
        return;
      }
    }

    if (afterContent && afterContent.classList.contains("active")) {
      scrollToTarget(afterContent);
    }
  }

  payItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const group = this.closest(".pay-grid");

      if (!group) return;

      group.querySelectorAll(".pay-item").forEach(function (btn) {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      scrollToNextArea(this);
    });
  });

  /* =========================
  input validation / scroll
========================= */

  const nameInputs = document.querySelectorAll(".name-input");
  const phoneInputs = document.querySelectorAll(".phone-input");

  function scrollToTermsArea() {
    const afterContent = document.querySelector(".pay-after-content");

    if (afterContent && afterContent.classList.contains("active")) {
      scrollToTarget(afterContent);
    }
  }

  nameInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^가-힣a-zA-Z\s]/g, "");
    });

    input.addEventListener("focus", function () {
      scrollToTermsArea();
    });
  });

  phoneInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });

    input.addEventListener("focus", function () {
      scrollToTermsArea();
    });
  });

  /* =========================
  terms accordion
========================= */

  const termsWrap = document.querySelector(".terms-all-wrap");
  const termsToggle = document.querySelector(".terms-all-toggle");

  if (termsWrap) {
    termsWrap.classList.remove("active");
  }

  if (termsToggle) {
    termsToggle.addEventListener("click", function (e) {
      if (e.target.closest("input")) return;

      termsWrap.classList.toggle("active");

      if (termsWrap.classList.contains("active")) {
        setTimeout(function () {
          termsWrap.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }
    });
  }
  /* =========================
  terms check
========================= */

  const agreeAll = document.getElementById("agreeAll");
  const agreeItems = document.querySelectorAll(".agree-item");

  if (agreeAll && agreeItems.length) {
    agreeAll.addEventListener("change", function () {
      agreeItems.forEach(function (item) {
        item.checked = agreeAll.checked;
      });

      checkAgreeStatus();
    });

    agreeItems.forEach(function (item) {
      item.addEventListener("change", function () {
        checkAgreeStatus();
      });
    });
  }

  function checkAgreeStatus() {
    if (!agreeAll || !agreeItems.length) return;

    const allChecked = [...agreeItems].every(function (item) {
      return item.checked;
    });

    agreeAll.checked = allChecked;

    if (typeof nextBtn !== "undefined" && nextBtn) {
      nextBtn.disabled = !allChecked;
    }
  }
  /* =========================
  약관 체크 스크롤 
========================= */

  const termsChecks = document.querySelectorAll(".terms-wrap input[type='checkbox']");

  function scrollToNextButton() {
    const nextButton = document.querySelector(".btn-next");

    if (!nextButton) return;

    setTimeout(function () {
      nextButton.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);
  }

  termsChecks.forEach(function (check) {
    check.addEventListener("change", function () {
      scrollToNextButton();
    });
  });

  /* =========================
  완료
========================= */

  const completeModal = document.getElementById("completeModal");
  const completeConfirm = document.querySelector(".complete-confirm");
  const nextBtn = document.querySelector(".btn-next");

  if (nextBtn && completeModal) {
    nextBtn.addEventListener("click", function () {
      completeModal.classList.add("active");
      document.body.classList.add("modal-open");
    });
  }

  if (completeConfirm && completeModal) {
    completeConfirm.addEventListener("click", function () {
      completeModal.classList.remove("active");
      document.body.classList.remove("modal-open");
    });
  }

  /* =========================
  언어
========================= */

  const langSelect = document.querySelector(".lang-select");
  const langBtn = document.querySelector(".lang-btn");
  const langBtnText = document.querySelector(".lang-btn span");
  const langLinks = document.querySelectorAll(".lang-link");

  if (langSelect && langBtn && langLinks.length) {
    let currentPage = window.location.pathname.split("/").pop();

    if (!currentPage) {
      currentPage = "index-ko.html";
    }

    langLinks.forEach(function (item) {
      const itemLink = item.dataset.link;

      if (itemLink === currentPage) {
        item.classList.add("active");

        if (langBtnText) {
          langBtnText.textContent = item.textContent.trim();
        }
      }

      item.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const target = this.dataset.link;

        if (target) {
          window.location.href = target;
        }
      });
    });

    langBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      langSelect.classList.toggle("active");
    });

    document.addEventListener("click", function () {
      langSelect.classList.remove("active");
    });
  }

  /* =========================
  배너 swiper
========================= */

  if (document.querySelector(".benefitSwiper")) {
    const benefitSwiper = new Swiper(".benefitSwiper", {
      slidesPerView: 1,
      spaceBetween: 12,
      loop: true,
      grabCursor: true,
      touchRatio: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".benefit-pagination",
        type: "fraction",
      },
    });
  }

  /* =========================
  가상계좌
========================= */

  const receiptRadios = document.querySelectorAll("input[name='receiptType']");
  const receiptInput = document.querySelector(".receipt-input");

  receiptRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (!receiptInput) return;

      if (this.value === "phone") {
        receiptInput.placeholder = receiptInput.dataset.phonePlaceholder;
        receiptInput.style.display = "block";
      }

      if (this.value === "biz") {
        receiptInput.placeholder = receiptInput.dataset.bizPlaceholder;
        receiptInput.style.display = "block";
      }

      if (this.value === "none") {
        receiptInput.style.display = "none";
        receiptInput.value = "";
      }
    });
  });

  if (receiptInput) {
    receiptInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  }

  /* =========================
  로딩 / 공통합업
========================= */

  const loadingLayer = document.getElementById("loadingLayer");
  const confirmModal = document.getElementById("confirmModal");
  const confirmCancel = document.querySelector(".confirm-cancel");
  const confirmOk = document.querySelector(".confirm-ok");
  const testLoading = document.getElementById("testLoading");
  const testConfirm = document.getElementById("testConfirm");
  const testComplete = document.getElementById("testComplete");

  function showLoading() {
    if (!loadingLayer) return;

    loadingLayer.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function hideLoading() {
    if (!loadingLayer) return;

    loadingLayer.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  function openConfirmModal() {
    if (!confirmModal) return;

    confirmModal.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeConfirmModal() {
    if (!confirmModal) return;

    confirmModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  if (testLoading) {
    testLoading.addEventListener("click", function () {
      showLoading();

      setTimeout(function () {
        hideLoading();
      }, 2000);
    });
  }

  if (testConfirm) {
    testConfirm.addEventListener("click", function () {
      openConfirmModal();
    });
  }

  if (testComplete) {
    testComplete.addEventListener("click", function () {
      if (!completeModal) return;

      completeModal.classList.add("active");
      document.body.classList.add("modal-open");
    });
  }

  if (confirmCancel) {
    confirmCancel.addEventListener("click", function () {
      closeConfirmModal();
    });
  }

  if (confirmOk) {
    confirmOk.addEventListener("click", function () {
      closeConfirmModal();
    });
  }

  /* =========================
  installment select arrow
========================= */

  const installmentSelect = document.querySelector(".installment-select");
  const paySelect = document.querySelector(".pay-select");

  if (installmentSelect && paySelect) {
    paySelect.addEventListener("mousedown", function () {
      installmentSelect.classList.add("active");
    });

    paySelect.addEventListener("change", function () {
      installmentSelect.classList.remove("active");
    });

    paySelect.addEventListener("blur", function () {
      installmentSelect.classList.remove("active");
    });
  }
});
