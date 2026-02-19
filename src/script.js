console.log(jalaali.toJalaali(2016, 4, 11)); // { jy: 1395, jm: 1, jd: 23 }

const card = document.getElementById("glassCard");
let timeoutId;

card.addEventListener("mousemove", (e) => {
  // پاک کردن تایمر قبلی
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  // مقدار رو ذخیره می‌کنیم
  card.style.setProperty("--mouse-x", `${x}%`);
  card.style.setProperty("--mouse-y", `${y}%`);

  // اطمینان از نمایش نور
  card.classList.add("hover");
});

card.addEventListener("mouseleave", (e) => {
  // مختصات آخرین نقطه خروج موس رو می‌گیریم
  const rect = card.getBoundingClientRect();
  let x, y;

  // تشخیص اینکه موس از کدوم سمت خارج شده
  if (e.clientX <= rect.left) {
    // خارج شدن از چپ
    x = 0;
    y = ((e.clientY - rect.top) / rect.height) * 100;
  } else if (e.clientX >= rect.right) {
    // خارج شدن از راست
    x = 100;
    y = ((e.clientY - rect.top) / rect.height) * 100;
  } else if (e.clientY <= rect.top) {
    // خارج شدن از بالا
    x = ((e.clientX - rect.left) / rect.width) * 100;
    y = 0;
  } else if (e.clientY >= rect.bottom) {
    // خارج شدن از پایین
    x = ((e.clientX - rect.left) / rect.width) * 100;
    y = 100;
  } else {
    // اگر هیچکدوم، همون نقطه آخر
    x = ((e.clientX - rect.left) / rect.width) * 100;
    y = ((e.clientY - rect.top) / rect.height) * 100;
  }

  // محدود کردن مقادیر
  x = Math.max(0, Math.min(100, x));
  y = Math.max(0, Math.min(100, y));

  // ست کردن مختصات آخرین نقطه
  card.style.setProperty("--mouse-x", `${x}%`);
  card.style.setProperty("--mouse-y", `${y}%`);

  // با تأخیر نور رو محو کن (همون جایی که بود)
  timeoutId = setTimeout(() => {
    // اینجا دیگه نیازی به تغییر مختصات نیست
    // فقط اجازه می‌دیم CSS با hover افکت رو کنترل کنه
  }, 100);
});

// برای وقتی که موس دوباره وارد شد
card.addEventListener("mouseenter", () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});

// فقط عدد فارسی و انگلیسی قبول کنه
function onlyNumbers(event) {
  const key = event.key;
  // اجازه بک‌اسپیس، دیلیت، تب، انتر و箭头‌ها رو بده
  if (
    key === "Backspace" ||
    key === "Delete" ||
    key === "Tab" ||
    key === "Enter" ||
    key === "ArrowLeft" ||
    key === "ArrowRight" ||
    key === "ArrowUp" ||
    key === "ArrowDown"
  ) {
    return true;
  }

  // فقط اعداد ۰-۹ انگلیسی و فارسی قبول کن
  const englishNumbers = /[0-9]/;
  const persianNumbers = /[۰-۹]/;

  if (englishNumbers.test(key) || persianNumbers.test(key)) {
    return true;
  }

  event.preventDefault();
  return false;
}

function validateDay(input) {
  // اول همه کاراکترهای غیرعددی رو پاک کن
  input.value = input.value.replace(/[^0-9۰-۹]/g, "");

  if (input.value === "") return;

  // تبدیل اعداد فارسی به انگلیسی برای مقایسه
  let persianToEnglish = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  let englishValue = input.value.replace(/[۰-۹]/g, function (d) {
    return persianToEnglish[d];
  });

  let value = parseInt(englishValue);

  if (value > 30) {
    input.value = "30";
  } else if (value < 1 && input.value !== "") {
    input.value = "1";
  }
}

function validateMonth(input) {
  // اول همه کاراکترهای غیرعددی رو پاک کن
  input.value = input.value.replace(/[^0-9۰-۹]/g, "");

  if (input.value === "") return;

  // تبدیل اعداد فارسی به انگلیسی برای مقایسه
  let persianToEnglish = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  let englishValue = input.value.replace(/[۰-۹]/g, function (d) {
    return persianToEnglish[d];
  });

  let value = parseInt(englishValue);

  if (value > 12) {
    input.value = "12";
  } else if (value < 1 && input.value !== "") {
    input.value = "1";
  }
}

function validateYear(input) {
  // اول همه کاراکترهای غیرعددی رو پاک کن
  input.value = input.value.replace(/[^0-9۰-۹]/g, "");

  if (input.value === "") return;

  // تبدیل اعداد فارسی به انگلیسی برای مقایسه
  let persianToEnglish = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  let englishValue = input.value.replace(/[۰-۹]/g, function (d) {
    return persianToEnglish[d];
  });

  // اینجا دیگه محدودیت 1 تا 4 رو برمی‌داریم و می‌ذاریم هر 4 رقمی وارد شه
  // فقط مطمئن میشیم بیشتر از 4 رقم نزنه
  if (englishValue.length > 4) {
    input.value = englishValue.slice(0, 4);
    // اگه عدد فارسی بود دوباره تبدیلش کنیم به فارسی؟
    // نه ولش کن همون انگلیسی بمونه
  }
}
