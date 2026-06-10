(function () {
  "use strict";

  var STORAGE_KEY = "pg-ui-lang";
  var DEFAULT_LANG = "ko";
  var SUPPORTED_LANGS = ["ko", "en", "ja", "zh"];

  var I18N = {
    ko: {
      htmlLang: "ko",
      meta: {
        title: "CJ올리브네트웍스",
        description: "올리브네트웍스",
        keywords: "올리브네트웍스",
        author: "올리브네트웍스",
        ogLocale: "ko_KR",
        ogSiteName: "올리브네트웍스 - 국문",
      },
      logo: "CJ 올리브네트웍스",
      closeAria: "닫기",
      closeConfirm: "결제를 취소하시겠습니까?\n입력하신 정보는 저장되지 않습니다.",
      info: {
        amount: "결제금액",
        currency: "원",
        productName: "상품명",
        productValue: "상품명",
        merchant: "가맹점명",
        servicePeriod: "제공기간",
      },
      pay: {
        title: "결제 수단",
        card: "카드",
        simple: "간편결제",
        etc: "기타결제",
      },
      cards: {
        kb: "국민",
        bc: "비씨",
        hyundai: "현대",
        samsung: "삼성",
        shinhan: "신한",
        hana: "하나",
        nh: "농협",
        woori: "우리",
        lotte: "롯데",
        kakaobank: "카카오뱅크",
        citi: "씨티",
        kj: "광주",
        jeonbuk: "전북",
        suhyup: "수협",
        jeju: "제주",
        cu: "신협",
      },
      payMore: { open: "더 보기", close: "접기" },
      etc: {
        virtual: "가상계좌",
        transfer: "계좌이체",
        phone: "휴대폰",
      },
      virtual: {
        guideTitle: "ⓘ 가상계좌 안내",
        guideDesc: "입금 기한 내에 계좌로 입금하시면 결제가 완료됩니다.<br>미입금 시 자동 취소됩니다.",
        selectBank: "입금은행 선택",
        depositor: "입금자명",
        namePlaceholder: "이름을 입력해 주세요",
        receiptTitle: "현금영수증 발행정보",
        receiptPhone: "소득공제용",
        receiptBiz: "지출증빙용",
        receiptNone: "미발행",
        phonePlaceholder: "휴대폰번호를 입력해주세요",
        bizPlaceholder: "사업자 등록번호를 입력해주세요",
      },
      transfer: {
        guideTitle: "② 계좌이체 안내",
        guideDesc: "입금 기한 내에 계좌로 입금하시면 결제가 완료됩니다.<br>미입금 시 자동 취소됩니다.",
        selectBank: "입금은행 선택",
        depositor: "입금자명",
        namePlaceholder: "이름을 입력해 주세요",
        cashReceipt: "현금영수증 발급",
      },
      phonePay: {
        guideTitle: "③ 휴대폰 안내",
        guideDesc: "휴대폰 요금에 합산되어 청구됩니다.<br /> 결제 후 취소 시 다음 달 요금에서 차감됩니다.",
        selectCarrier: "통신사 선택",
        mobileNumber: "휴대폰 번호",
        cashReceipt: "현금영수증 발급",
      },
      banks: {
        ibk: "기업",
        kb: "국민",
        nh: "농협",
        hana: "하나",
        woori: "우리",
        shinhan: "신한",
        bnk: "경남",
        post: "우체국",
        busan: "부산",
      },
      banners: [
        {
          highlight: "무이자",
          title: " 할부 혜택",
          desc: "이제 부담없이 구매하세요<br>카드사 무이자 할부 혜택을 확인하세요.",
          alt: "무이자 할부",
        },
        {
          highlight: "간편결제",
          title: " 혜택",
          desc: "간편결제로 더 빠르고 편리하게<br>결제 혜택을 확인하세요.",
          alt: "간편결제 혜택",
        },
        {
          highlight: "카드사",
          title: " 이벤트",
          desc: "진행 중인 카드사 이벤트와<br>할부 혜택을 확인하세요.",
          alt: "카드사 이벤트",
        },
      ],
      installment: {
        title: "할부선택",
        options: ["일시불", "2개월", "3개월", "4개월", "5개월", "6개월", "12개월"],
        useCardPoint: "카드포인트 사용",
      },
      terms: {
        title: "이용약관",
        agreeAll: "모든 약관에 동의합니다.",
        terms1: "전자금융거래 이용약관",
        terms2: "개인정보수집 이용안내",
        terms3: "개인정보 제공 및 위탁 동의",
        view: "보기",
        next: "다음",
        confirm: "확인",
        modalTitle: "전자금융거래 이용약관",
      },
      complete: {
        title: "결제 완료",
        desc: "주문하신 상품의 결제가<br>성공적으로 완료되었습니다.",
        amount: "결제금액",
        amountValue: "125,000 원",
        method: "결제수단",
        methodValue: "네이버페이",
        confirm: "확인",
      },
    },
    en: {
      htmlLang: "en",
      meta: {
        title: "CJ Olive Networks",
        description: "CJ Olive Networks",
        keywords: "CJ Olive Networks",
        author: "CJ Olive Networks",
        ogLocale: "en_US",
        ogSiteName: "CJ Olive Networks - English",
      },
      logo: "CJ olivenetworks",
      closeAria: "Close",
      closeConfirm: "Do you want to cancel the payment?\nYour entered information will not be saved.",
      info: {
        amount: "Amount Due",
        currency: "KRW",
        productName: "Product name",
        productValue: "Product name",
        merchant: "Merchant",
        servicePeriod: "Service period",
      },
      pay: {
        title: "Order Summary",
        card: "Card",
        simple: "Quick Pay",
        etc: "Other",
      },
      cards: {
        kb: "KB",
        bc: "BC",
        hyundai: "Hyundai",
        samsung: "Samsung",
        shinhan: "Shinhan",
        hana: "Hana",
        nh: "NH",
        woori: "Woori",
        lotte: "lotte",
        kakaobank: "KakaoBank",
        citi: "Citi",
        kj: "Kwangju",
        jeonbuk: "Jeonbuk",
        suhyup: "Suhyup",
        jeju: "Jeju",
        cu: "CU",
      },
      payMore: { open: "More", close: "Close" },
      etc: {
        virtual: "Virtual Account",
        transfer: "Bank Transfer",
        phone: "Mobile Payment",
      },
      virtual: {
        guideTitle: "ⓘ Virtual Account Guide",
        guideDesc: "Your payment will be completed after the deposit is made within the payment deadline.<br>Orders will be automatically canceled if payment is not received.",
        selectBank: "Select Bank",
        depositor: "Depositor Name",
        namePlaceholder: "Please enter your name",
        receiptTitle: "Cash Receipt",
        receiptPhone: "Personal",
        receiptBiz: "Business",
        receiptNone: "None",
        phonePlaceholder: "Phone Number",
        bizPlaceholder: "Business Number",
      },
      transfer: {
        guideTitle: "② Bank Transfer Guide",
        guideDesc: "Your payment will be completed after the deposit is made within the payment deadline.<br>Orders will be automatically canceled if payment is not received.",
        selectBank: "Select Bank",
        depositor: "Depositor Name",
        namePlaceholder: "Please enter your name",
        cashReceipt: "Issue Cash Receipt",
      },
      phonePay: {
        guideTitle: "③ Mobile Payment Guide",
        guideDesc: "Charges will be added to your mobile phone bill.<br>Refunds after cancellation will be reflected in next month's bill.",
        selectCarrier: "Select Carrier",
        mobileNumber: "Mobile Number",
        cashReceipt: "Issue Cash Receipt",
      },
      banks: {
        ibk: "IBK",
        kb: "KB",
        nh: "NH",
        hana: "Hana",
        woori: "Woori",
        shinhan: "Shinhan",
        bnk: "Kyongnamk",
        post: "Korea Post",
        busan: "Busan",
      },
      banners: [
        {
          highlight: "Interest-Free",
          title: " Installments",
          desc: "Enjoy easy monthly payments.<br>Check available card benefits.",
          alt: "Interest-Free Installments",
        },
        {
          highlight: "Quick Pay",
          title: " Benefits",
          desc: "Pay faster and easier<br>with quick payment benefits.",
          alt: "Quick Pay Benefits",
        },
        {
          highlight: "Card",
          title: " Events",
          desc: "Check ongoing card events<br>and installment benefits.",
          alt: "Card Events",
        },
      ],
      installment: {
        title: "Installment Plan",
        options: ["Lump Sum", "2 Months", "3 Months", "4 Months", "5 Months", "6 Months", "12 Months"],
        useCardPoint: "Use Card Point",
      },
      terms: {
        title: "Terms & Conditions",
        agreeAll: "I agree to all terms and conditions.",
        terms1: "Terms and Conditions for Electronic Financial Transactions",
        terms2: "Notice on the Collection and Use of Personal Information",
        terms3: "Consent to the Provision and Entrustment of Personal Information",
        view: "View",
        next: "Next",
        confirm: "Confirm",
        modalTitle: "Terms and Conditions for Electronic Financial Transactions",
      },
      complete: {
        title: "Payment Completed",
        desc: "Your order has been<br>successfully paid.",
        amount: "Amount",
        amountValue: "125,000 KRW",
        method: "Payment Method",
        methodValue: "NaverPay",
        confirm: "Confirm",
      },
    },
    ja: {
      htmlLang: "ja",
      meta: {
        title: "CJオリーブネットワークス",
        description: "CJオリーブネットワークス",
        keywords: "CJオリーブネットワークス",
        author: "CJオリーブネットワークス",
        ogLocale: "ja_JP",
        ogSiteName: "CJオリーブネットワークス - 日本語",
      },
      logo: "CJ olivenetworks",
      closeAria: "閉じる",
      closeConfirm: "決済をキャンセルしますか？\n入力した情報は保存されません。",
      info: {
        amount: "決済金額",
        currency: "ウォン",
        productName: "商品名",
        productValue: "商品名",
        merchant: "加盟店名",
        servicePeriod: "提供期間",
      },
      pay: {
        title: "お支払い方法",
        card: "カード",
        simple: "簡単決済",
        etc: "その他の決済",
      },
      cards: {
        kb: "KB",
        bc: "BC",
        hyundai: "Hyundai",
        samsung: "Samsung",
        shinhan: "Shinhan",
        hana: "Hana",
        nh: "NH",
        woori: "Woori",
        lotte: "lotte",
        kakaobank: "KakaoBank",
        citi: "Citi",
        kj: "Kwangju",
        jeonbuk: "Jeonbuk",
        suhyup: "Suhyup",
        jeju: "Jeju",
        cu: "CU",
      },
      payMore: { open: "もっと見る", close: "閉じる" },
      etc: {
        virtual: "バーチャル口座",
        transfer: "銀行振込",
        phone: "携帯電話決済",
      },
      virtual: {
        guideTitle: "ⓘ バーチャル口座のご案内",
        guideDesc: "入金期限内に口座へお振込みいただくと、決済が完了します。<br>未入金の場合は自動的にキャンセルされます。",
        selectBank: "入金銀行を選択",
        depositor: "入金者名",
        namePlaceholder: "お名前を入力してください",
        receiptTitle: "領収書",
        receiptPhone: "個人",
        receiptBiz: "法人",
        receiptNone: "不要",
        phonePlaceholder: "携帯番号",
        bizPlaceholder: "法人番号",
      },
      transfer: {
        guideTitle: "② 銀行振込のご案内",
        guideDesc: "入金期限内に口座へお振込みいただくと、決済が完了します。<br>未入金の場合は自動的にキャンセルされます。",
        selectBank: "入金銀行を選択",
        depositor: "入金者名",
        namePlaceholder: "お名前を入力してください",
        cashReceipt: "現金領収書の発行",
      },
      phonePay: {
        guideTitle: "③ 携帯電話決済のご案内",
        guideDesc: "携帯電話料金と合算して請求されます。<br />決済後にキャンセルした場合は、翌月の料金から差し引かれます。",
        selectCarrier: "通信会社を選択",
        mobileNumber: "携帯電話番号",
        cashReceipt: "現金領収書の発行",
      },
      banks: {
        ibk: "IBK",
        kb: "KB",
        nh: "NH",
        hana: "Hana",
        woori: "Woori",
        shinhan: "Shinhan",
        bnk: "Kyongnamk",
        post: "Korea Post",
        busan: "Busan",
      },
      banners: [
        {
          highlight: "無利息",
          title: " 分割払い特典",
          desc: "今なら負担なくご購入いただけます<br>カード会社の無利息分割払い特典をご確認ください。",
          alt: "無利息分割払い",
        },
        {
          highlight: "簡単決済",
          title: " 特典",
          desc: "より速く便利に<br>決済特典をご確認ください。",
          alt: "簡単決済特典",
        },
        {
          highlight: "カード会社",
          title: " イベント",
          desc: "進行中のカード会社イベントと<br>分割払い特典をご確認ください。",
          alt: "カード会社イベント",
        },
      ],
      installment: {
        title: "分割払い選択",
        options: ["一括払い", "2ヶ月", "3ヶ月", "4ヶ月", "5ヶ月", "6ヶ月", "12ヶ月"],
        useCardPoint: "カードポイント使用",
      },
      terms: {
        title: "利用規約",
        agreeAll: "すべての規約に同意します。",
        terms1: "電子金融取引利用規約",
        terms2: "個人情報収集・利用案内",
        terms3: "個人情報提供および委託同意",
        view: "表示",
        next: "次へ",
        confirm: "確認",
        modalTitle: "電子金融取引利用規約",
      },
      complete: {
        title: "決済完了",
        desc: "ご注文の決済が<br>正常に完了しました。",
        amount: "決済金額",
        amountValue: "125,000 ウォン",
        method: "決済手段",
        methodValue: "NaverPay",
        confirm: "確認",
      },
    },
    zh: {
      htmlLang: "zh",
      meta: {
        title: "CJ Olive Networks",
        description: "CJ Olive Networks",
        keywords: "CJ Olive Networks",
        author: "CJ Olive Networks",
        ogLocale: "zh_CN",
        ogSiteName: "CJ Olive Networks - 中文",
      },
      logo: "CJ olivenetworks",
      closeAria: "关闭",
      closeConfirm: "是否取消支付？\n您输入的信息将不会被保存。",
      info: {
        amount: "支付金额",
        currency: "韩元",
        productName: "商品名称",
        productValue: "商品名称",
        merchant: "商户名称",
        servicePeriod: "提供期限",
      },
      pay: {
        title: "支付方式",
        card: "银行卡",
        simple: "快捷支付",
        etc: "其他支付",
      },
      cards: {
        kb: "KB",
        bc: "BC",
        hyundai: "Hyundai",
        samsung: "Samsung",
        shinhan: "Shinhan",
        hana: "Hana",
        nh: "NH",
        woori: "Woori",
        lotte: "lotte",
        kakaobank: "KakaoBank",
        citi: "Citi",
        kj: "Kwangju",
        jeonbuk: "Jeonbuk",
        suhyup: "Suhyup",
        jeju: "Jeju",
        cu: "CU",
      },
      payMore: { open: "更多", close: "收起" },
      etc: {
        virtual: "虚拟账户",
        transfer: "银行转账",
        phone: "手机支付",
      },
      virtual: {
        guideTitle: "ⓘ 虚拟账户说明",
        guideDesc: "请在指定期限内完成转账，支付即可完成。<br>若未入账，订单将自动取消。",
        selectBank: "选择汇款银行",
        depositor: "汇款人姓名",
        namePlaceholder: "请输入姓名",
        receiptTitle: "现金收据",
        receiptPhone: "个人",
        receiptBiz: "企业",
        receiptNone: "不需要",
        phonePlaceholder: "手机号",
        bizPlaceholder: "企业编号",
      },
      transfer: {
        guideTitle: "② 银行转账说明",
        guideDesc: "请在指定期限内完成转账，支付即可完成。<br>若未入账，订单将自动取消。",
        selectBank: "选择汇款银行",
        depositor: "汇款人姓名",
        namePlaceholder: "请输入姓名",
        cashReceipt: "申请现金收据",
      },
      phonePay: {
        guideTitle: "③ 手机支付说明",
        guideDesc: "费用将合并至手机账单中收取。<br>付款后取消时，将于下个月账单中扣除。",
        selectCarrier: "选择通信运营商",
        mobileNumber: "手机号码",
        cashReceipt: "申请现金收据",
      },
      banks: {
        ibk: "IBK",
        kb: "KB",
        nh: "NH",
        hana: "Hana",
        woori: "Woori",
        shinhan: "Shinhan",
        bnk: "Kyongnamk",
        post: "Korea Post",
        busan: "Busan",
      },
      banners: [
        {
          highlight: "免息",
          title: " 分期优惠",
          desc: "现在轻松购买<br>查看各银行卡的免息分期优惠。",
          alt: "免息分期",
        },
        {
          highlight: "快捷支付",
          title: " 优惠",
          desc: "更快更便捷地支付<br>查看支付优惠。",
          alt: "快捷支付优惠",
        },
        {
          highlight: "银行卡",
          title: " 活动",
          desc: "查看进行中的银行卡活动<br>及分期优惠。",
          alt: "银行卡活动",
        },
      ],
      installment: {
        title: "分期选择",
        options: ["一次性付款", "2个月", "3个月", "4个月", "5个月", "6个月", "12个月"],
        useCardPoint: "使用卡积分",
      },
      terms: {
        title: "使用条款",
        agreeAll: "同意所有条款。",
        terms1: "电子金融交易使用条款",
        terms2: "个人信息收集与使用说明",
        terms3: "个人信息提供及委托同意",
        view: "查看",
        next: "下一步",
        confirm: "确认",
        modalTitle: "电子金融交易使用条款",
      },
      complete: {
        title: "支付完成",
        desc: "您订购的商品<br>已成功完成支付。",
        amount: "支付金额",
        amountValue: "125,000 韩元",
        method: "支付方式",
        methodValue: "NaverPay",
        confirm: "确认",
      },
    },
  };

  var LANG_LABELS = { ko: "KOR", en: "ENG", ja: "JPN", zh: "CHN" };

  var currentLang = DEFAULT_LANG;

  function getNestedValue(obj, key) {
    return key.split(".").reduce(function (acc, part) {
      if (acc == null) return undefined;
      var index = parseInt(part, 10);
      if (!isNaN(index) && String(index) === part) {
        return acc[index];
      }
      return acc[part];
    }, obj);
  }

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.indexOf(stored) !== -1) {
      return stored;
    }

    var browserLang = (navigator.language || navigator.userLanguage || DEFAULT_LANG).toLowerCase();
    if (browserLang.indexOf("ko") === 0) return "ko";
    if (browserLang.indexOf("ja") === 0) return "ja";
    if (browserLang.indexOf("zh") === 0) return "zh";
    if (browserLang.indexOf("en") === 0) return "en";
    return DEFAULT_LANG;
  }

  function updateMeta(messages) {
    document.title = messages.meta.title;
    document.documentElement.lang = messages.htmlLang;

    var metaMap = {
      description: messages.meta.description,
      keywords: messages.meta.keywords,
      author: messages.meta.author,
    };

    Object.keys(metaMap).forEach(function (name) {
      var el = document.querySelector('meta[name="' + name + '"]');
      if (el) el.setAttribute("content", metaMap[name]);
    });

    var ogMap = {
      "og:locale": messages.meta.ogLocale,
      "og:title": messages.meta.title,
      "og:description": messages.meta.description,
      "og:site_name": messages.meta.ogSiteName,
    };

    Object.keys(ogMap).forEach(function (property) {
      var el = document.querySelector('meta[property="' + property + '"]');
      if (el) el.setAttribute("content", ogMap[property]);
    });
  }

  function applyTermsContent(lang) {
    if (!window.TERMS_I18N || !window.TERMS_I18N[lang]) return;

    ["terms1", "terms2", "terms3"].forEach(function (id) {
      var container = document.getElementById(id);
      if (!container) return;
      container.innerHTML = '<div class="terms-scroll">' + window.TERMS_I18N[lang][id] + "</div>";
    });
  }

  function applyI18nElements(messages) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = getNestedValue(messages, key);
      if (value == null) return;

      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", value);
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var value = getNestedValue(messages, key);
      if (value != null) {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var pairs = el.getAttribute("data-i18n-attr").split(";");
      pairs.forEach(function (pair) {
        var parts = pair.split(":").map(function (s) {
          return s.trim();
        });
        if (parts.length !== 2) return;
        var value = getNestedValue(messages, parts[1]);
        if (value != null) {
          el.setAttribute(parts[0], value);
        }
      });
    });

    var payMoreBtn = document.querySelector(".pay-more-btn");
    if (payMoreBtn) {
      payMoreBtn.dataset.open = messages.payMore.open;
      payMoreBtn.dataset.close = messages.payMore.close;
      if (!payMoreBtn.classList.contains("active")) {
        payMoreBtn.textContent = messages.payMore.open;
      }
    }

    var receiptInput = document.querySelector(".receipt-input");
    if (receiptInput) {
      receiptInput.dataset.phonePlaceholder = messages.virtual.phonePlaceholder;
      receiptInput.dataset.bizPlaceholder = messages.virtual.bizPlaceholder;
      var checkedReceipt = document.querySelector("input[name='receiptType']:checked");
      if (checkedReceipt && checkedReceipt.value === "phone") {
        receiptInput.placeholder = messages.virtual.phonePlaceholder;
      }
      if (checkedReceipt && checkedReceipt.value === "biz") {
        receiptInput.placeholder = messages.virtual.bizPlaceholder;
      }
    }

    document.querySelectorAll(".terms-open-btn").forEach(function (btn) {
      var target = btn.getAttribute("data-target");
      if (target === "terms1") btn.dataset.title = messages.terms.terms1;
      if (target === "terms2") btn.dataset.title = messages.terms.terms2;
      if (target === "terms3") btn.dataset.title = messages.terms.terms3;
    });

    var installmentSelect = document.querySelector(".pay-select");
    if (installmentSelect && messages.installment.options) {
      var selectedIndex = installmentSelect.selectedIndex >= 0 ? installmentSelect.selectedIndex : 0;
      installmentSelect.innerHTML = messages.installment.options
        .map(function (option) {
          return "<option>" + option + "</option>";
        })
        .join("");
      installmentSelect.selectedIndex = Math.min(selectedIndex, messages.installment.options.length - 1);
    }
  }

  function setLanguage(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }

    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    var messages = I18N[lang];
    updateMeta(messages);
    applyTermsContent(lang);
    applyI18nElements(messages);

    document.dispatchEvent(
      new CustomEvent("languageChanged", {
        detail: { lang: lang, messages: messages },
      })
    );
  }

  function getLanguage() {
    return currentLang;
  }

  function getMessage(key) {
    return getNestedValue(I18N[currentLang], key);
  }

  window.I18n = {
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    getMessage: getMessage,
    LANG_LABELS: LANG_LABELS,
    SUPPORTED_LANGS: SUPPORTED_LANGS,
    detectLang: detectLang,
  };

  function initI18n() {
    setLanguage(detectLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initI18n);
  } else {
    initI18n();
  }
})();
