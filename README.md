# Persian Calendar Converter (Shamsi ↔ Gregorian)

A simple, responsive date converter that switches between Persian (Jalali/Shamsi) and Gregorian calendars.

**This is 100% my own original project** — the entire idea, core logic, structure, validation, swap feature, and most of the code were created by me from scratch with my own thinking and effort. The UI design was built with help from AI (for faster styling and layout suggestions), but all functionality and key decisions are mine.

If anyone wants to use, fork, modify, or share any part of this project, **please credit me** (manigharehgozli) as the original creator and link back to this repo or the live demo: https://date-calculatorpro.netlify.app/

### Live Demo
https://date-calculatorpro.netlify.app/

### Features
- Two-way conversion: Gregorian to Shamsi and Shamsi to Gregorian
- Separate inputs for day, month, year in both calendars
- "Convert" button to run the conversion
- "Swap" button to flip direction instantly
- Bilingual English/Persian labels
- Clean two-column layout, fully responsive (mobile-first)
- Instant results with pure vanilla JavaScript (no page reload)

### What I Learned & Cool Things I Mastered
This was one of my favorite personal projects because I built almost everything myself and learned a ton of practical, real-world JavaScript skills:

- **Writing custom date logic from scratch**: Handling separate day/month/year inputs, validating ranges (e.g., 1–31 days, 1–12 months, leap years in both calendars), and making sure conversions are accurate without relying on built-in Date quirks.
- **Deep use of jalaali-js library via CDN**: No build tools needed — just `<script src="https://cdn.jsdelivr.net/npm/jalaali-js@1.2.8/dist/jalaali.min.js"></script>`. Mastered key functions like:
  - `toJalaali(gy, gm, gd)`
  - `toGregorian(jy, jm, jd)`
  - `isValidJalaaliDate(jy, jm, jd)`
  Understood how reliable and lightweight it is for Persian dates.
- **Advanced vanilla JavaScript DOM manipulation**:
  - Selecting multiple elements efficiently (`querySelector`, `querySelectorAll`)
  - Adding event listeners to buttons
  - Reading/updating input values dynamically
  - Implementing the "Swap" feature by exchanging values between two sets of fields
  - Basic form/input validation (prevent invalid dates)
- **Bilingual & RTL handling**: Managed Persian text direction (right-to-left), label switching, and clean UI for both languages without frameworks.
- **Responsive design & CSS best practices**: Built a mobile-friendly two-column layout that looks good on any screen size.
- **Deployment real-world lessons**: Used Netlify for free hosting, fixed common issues like 404 errors, asset paths (e.g., images if added later), caching, and manual drag & drop deploys when needed.
- **Problem-solving mindset**: Debugged conversion edge cases (leap years, month boundaries), handled user input errors gracefully, and iterated until everything felt smooth and reliable.

Overall, this project took me from basic JS knowledge to confidently building a complete, useful, bilingual tool entirely on my own (with AI helping only on UI polish).

### Tech Stack
- HTML5 (semantic & accessible markup)
- CSS (custom responsive styles)
- Vanilla JavaScript (zero frameworks)
- jalaali-js (via CDN – only external library)
- Deployed on Netlify (auto-deploys from git)

### License & Usage
My original work (manigharehgozli).  
You’re welcome to view, learn from, fork, or use it **with proper credit**:

- Say: "Built by manigharehgozli" or "Original project by manigharehgozli"
- Link: https://date-calculatorpro.netlify.app/ or this repo

Questions, suggestions, or collaborations? Feel free to reach out — I'd love to hear if it's useful to anyone! 🌙✨

Big thanks to the jalaali-js creators for making Persian calendar math accurate and simple in JavaScript.
