# Persian Calendar Converter (Shamsi ↔ Gregorian)

A simple, responsive **date converter** tool that converts dates between the **Persian (Jalali/Shamsi)** calendar and the **Gregorian** calendar.

This project was built to practice JavaScript logic, DOM manipulation, and handling bilingual (Persian/English) interfaces. The core conversion logic is **written by me**, using the excellent [jalaali-js](https://github.com/jalaali/jalaali-js) library via CDN for accurate calendar calculations.

### Live Demo
- [View Live on Netlify](https://date-calculatorpro.netlify.app/)

### Features
- Bidirectional conversion: Gregorian → Shamsi and Shamsi → Gregorian
- Separate input fields for Day, Month, Year in both calendars
- **Convert** button to perform the conversion
- **Swap** button to switch the direction (quickly flip between calendars)
- Bilingual labels: English (GREGORIAN / SHAMSI) + Persian support
- Clean, two-column layout (mobile-friendly and responsive)
- Real-time conversion without page reload (vanilla JavaScript)

### What I Learned / Built From Scratch
This was an exciting personal project where I focused on writing the **core logic myself** while learning from great open-source tools.

- **Custom conversion logic**: I implemented the full flow:
  - Reading inputs from separate day/month/year fields
  - Validation of dates (valid ranges for months/days)
  - Calling `toJalaali()` or `toGregorian()` from jalaali-js
  - Displaying results back into the opposite set of inputs
  - Handling the Swap feature to reverse direction instantly
- **jalaali-js mastery**: Used via CDN (no build tools needed):
  ```html
  <script src="https://cdn.jsdelivr.net/npm/jalaali-js@1.2.8/dist/jalaali.min.js"></script>
  ```
  Relied heavily on:
  - `toJalaali(gy, gm, gd)`
  - `toGregorian(jy, jm, jd)`
  - `isValidJalaaliDate(jy, jm, jd)`
  Learned how reliable and performant this tiny library is for Persian calendar needs.
- **Bilingual UI handling**: Managed Persian text direction (RTL) and labels smoothly.
- **Vanilla JavaScript DOM skills**:
  - `querySelector` / `querySelectorAll`
  - Event listeners on buttons
  - Updating input values dynamically
  - Basic form validation and error handling (if any)
- **Deployment & iteration**: Used Netlify for free, fast hosting with automatic deploys. Fixed path issues, 404 problems, and asset uploading along the way.

This project helped me go from "I can use libraries" to "I can build a complete, functional, bilingual tool with my own logic".

### Tech Stack
- **HTML5** (semantic structure)
- **CSS** (custom styles + possibly Tailwind or plain CSS for responsiveness)
- **Vanilla JavaScript** (no frameworks)
- **jalaali-js** (via CDN – for accurate Shamsi/Gregorian conversions)
- Deployed on **Netlify** (auto-build on git push)

### Future Ideas / Possible Improvements
- Add a "Today" button to auto-fill current date
- Calculate age or difference between two dates
- Support for leap year info display
- Dark mode toggle
- Input type="number" with min/max for better UX
- Error messages for invalid dates

Feel free to use, fork, or give feedback — خوش خوشحال می‌شم اگر کسی ازش استفاده کنه یا پیشنهادی داشته باشه! 🌙✨

Thanks to the amazing **jalaali-js** community for making Persian date handling easy in JavaScript.
