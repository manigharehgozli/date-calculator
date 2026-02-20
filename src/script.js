const inputDay = document.querySelector(`.input-day`);
const inputMonth = document.querySelector(`.input-month`);
const inputYear = document.querySelector(`.input-year`);

const outputDay = document.querySelector(`.output-day`);
const outputMonth = document.querySelector(`.output-month`);
const outputYear = document.querySelector(`.output-year`);

const card = document.getElementById("glassCard");
let timeoutId;
let checkSwap = false;

const convertBtn = document.querySelector(`.convert-btn`);
const swapBtn = document.querySelector(`.swap-btn`);

let calculateCalendar = document.querySelector(`.calculate-calendar`);
let calculatedCalendar = document.querySelector(`.calculated-calendar`);

// Apply constraints to inputs
inputDay.addEventListener("input", function () {
  validateDay(this);
});

inputMonth.addEventListener("input", function () {
  validateMonth(this);
});

inputYear.addEventListener("input", function () {
  validateYear(this);
});

card.addEventListener("mousemove", (e) => {
  // Clear previous timer
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  // Store the value
  card.style.setProperty("--mouse-x", `${x}%`);
  card.style.setProperty("--mouse-y", `${y}%`);

  // Ensure light effect is shown
  card.classList.add("hover");
});

card.addEventListener("mouseleave", (e) => {
  // Get the last mouse exit point coordinates
  const rect = card.getBoundingClientRect();
  let x, y;

  // Detect which side the mouse exited from
  if (e.clientX <= rect.left) {
    // Exiting from left
    x = 0;
    y = ((e.clientY - rect.top) / rect.height) * 100;
  } else if (e.clientX >= rect.right) {
    // Exiting from right
    x = 100;
    y = ((e.clientY - rect.top) / rect.height) * 100;
  } else if (e.clientY <= rect.top) {
    // Exiting from top
    x = ((e.clientX - rect.left) / rect.width) * 100;
    y = 0;
  } else if (e.clientY >= rect.bottom) {
    // Exiting from bottom
    x = ((e.clientX - rect.left) / rect.width) * 100;
    y = 100;
  } else {
    // If none, use the last point
    x = ((e.clientX - rect.left) / rect.width) * 100;
    y = ((e.clientY - rect.top) / rect.height) * 100;
  }

  // Constrain values
  x = Math.max(0, Math.min(100, x));
  y = Math.max(0, Math.min(100, y));

  // Set last point coordinates
  card.style.setProperty("--mouse-x", `${x}%`);
  card.style.setProperty("--mouse-y", `${y}%`);

  // Fade out light with delay
  timeoutId = setTimeout(() => {
    // No need to change coordinates here
    // Let CSS control the effect with hover
  }, 100);
});

// For when mouse re-enters
card.addEventListener("mouseenter", () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});

// Only accept Persian and English numbers
function onlyNumbers(event) {
  const key = event.key;
  // Allow backspace, delete, tab, enter and arrow keys
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

  // Only accept English (0-9) and Persian (۰-۹) numbers
  const englishNumbers = /[0-9]/;
  const persianNumbers = /[۰-۹]/;

  if (englishNumbers.test(key) || persianNumbers.test(key)) {
    return true;
  }

  event.preventDefault();
  return false;
}

function validateDay(input) {
  // First remove all non-numeric characters
  input.value = input.value.replace(/[^0-9۰-۹]/g, "");

  if (input.value === "") return;

  // Convert Persian numbers to English for comparison
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
  // First remove all non-numeric characters
  input.value = input.value.replace(/[^0-9۰-۹]/g, "");

  if (input.value === "") return;

  // Convert Persian numbers to English for comparison
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
  // First remove all non-numeric characters
  input.value = input.value.replace(/[^0-9۰-۹]/g, "");

  if (input.value === "") return;

  // Convert Persian numbers to English for comparison
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

  // Allow any 4-digit number, just ensure it doesn't exceed 4 digits
  if (englishValue.length > 4) {
    let sliced = englishValue.slice(0, 4);
    // Convert back to Persian if input was in Persian
    if (/[۰-۹]/.test(input.value)) {
      let englishToPersian = {
        0: "۰",
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
      };
      input.value = sliced.replace(/[0-9]/g, function (d) {
        return englishToPersian[d];
      });
    } else {
      input.value = sliced;
    }
  }
}

const reset = function () {
  inputDay.value = ``;
  inputMonth.value = ``;
  inputYear.value = ``;
  outputDay.value = `-`;
  outputMonth.value = `-`;
  outputYear.value = `-`;
};

swapBtn.addEventListener(`click`, function () {
  if (checkSwap) {
    calculateCalendar.textContent = `GREGORIAN`;
    calculatedCalendar.textContent = `SHAMSI`;
    checkSwap = false;
    reset();
  } else {
    calculateCalendar.textContent = `SHAMSI`;
    calculatedCalendar.textContent = `GREGORIAN`;
    checkSwap = true;
    reset();
  }
});

convertBtn.addEventListener("click", function () {
  const year = +inputYear.value;
  const month = +inputMonth.value;
  const day = +inputDay.value;

  // Check what's written on top
  const topTitle = calculateCalendar.textContent;
  console.log("top title:", topTitle);

  if (topTitle === "GREGORIAN") {
    // Top is Gregorian, convert to Jalali
    const result = jalaali.toJalaali(year, month, day);
    // toJalaali output: { jy, jm, jd }
    outputDay.value = result.jd;
    outputMonth.value = result.jm;
    outputYear.value = result.jy;
  } else {
    // Top is Jalali, convert to Gregorian
    const result = jalaali.toGregorian(year, month, day);
    // toGregorian output: { gy, gm, gd }
    outputDay.value = result.gd;
    outputMonth.value = result.gm;
    outputYear.value = result.gy;
  }
});
