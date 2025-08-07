# 🍋 Little Lemon Capstone Project

Final project for the Meta Frontend Developer Specialization on Coursera.

This React-based application lays the groundwork for a table reservation feature on the Little Lemon restaurant website. The project starts from a customized boilerplate, with a cleaned structure and developer tooling optimized for clarity, modularity, and workflow efficiency.

---

## 🚀 Key Features

- React project initialized via `create-react-app`
- Removal of default boilerplate elements (`App.js`, `logo.svg`)
- Modular structure prepared for reservation functionality
- VS Code extensions configured for a smoother dev experience:
  - ES7+ React/Redux/GraphQL/React-Native snippets
  - `Auto Rename Tag` for paired tag editing
  - `Trailing Spaces` for whitespace hygiene

---

## ✅ Semantic HTML Foundation

This section fulfills the semantic layout exercise by:

- Replacing non-semantic root `<div>` with a React fragment
- Structuring the app with semantic tags: `<header>`, `<nav>`, `<main>`, `<footer>`
- Modularizing each section into reusable components
- Adding accessible navigation using `NavLink` and `aria-label`
- Including brand logo with descriptive `alt` text
- Wrapping routed content inside `<main>` for clarity and accessibility
- Providing editorial closure in `<footer>`

> 🧾 _This structure improves onboarding, accessibility, and emotional clarity across the app._

---

## 🌐 Metadata & Open Graph Optimization

The `index.html` file includes semantic and editorial metadata to support SEO and social sharing:

- `description`, `author`, and `keywords` for search engine clarity
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) for rich previews on social platforms
- Uses `%PUBLIC_URL%` for build-safe asset referencing
- Editorial tone aligned with brand voice and Mediterranean warmth

> 🧾 _This setup ensures the app appears correctly across search engines, social media, and mobile devices._

---

## 🧱 CSS Layout System

This layout system transforms wireframes into responsive, reusable sections using semantic HTML and Flexbox. It adapts fluidly across devices, ensuring clarity and warmth.

### 🔧 Key Layout Decisions

- Flexbox layout with `gap`, `justify-content`, and `align-items`
- Media queries at `768px` for mobile stacking
- Relative units (`rem`, `%`, `vh`) for fluid scaling
- Modular CSS per component + shared rules in `layout.css`

> 🧾 _Layout decisions support emotional readability and onboarding clarity across screen sizes._

---

## 🎨 Visual Styling System

This section establishes the visual styling system for the Little Lemon web app, based on the Figma design and editorial tone. It defines reusable CSS rules for core HTML elements, ensuring consistency, warmth, and accessibility.

### 🔧 Key Styling Decisions

- **Typography**: Styled `h1–h6`, `p`, and `span` with responsive `font-size`, `line-height`, and editorial spacing
- **Navigation**: Styled `nav`, `ul`, and `li` with spacing, hover states, and semantic clarity
- **Images**: Applied `max-width`, `height: auto`, and `border-radius` for visual softness and responsiveness
- **Color System**: Used brand-aligned colors from Figma, applied via CSS variables and tokens
- **Shadows & Borders**: Rounded corners and soft shadows applied selectively for warmth and depth

> 🧾 _Styling choices reflect Mediterranean warmth and editorial clarity across components._

---

## 🧩 Booking Page & Form

This section fulfills the “Defining the Bookings page” exercise by creating a modular, accessible, and editorially documented booking flow.

### ✅ Components

- `BookingPage`: Contains the page layout and title
- `BookingForm`: Controlled form with modular fields

### 🧱 Form Fields

- `Date`: `<input type="date">`
- `Time`: `<select>` populated from context
- `Guests`: `<input type="number">`
- `Occasion`: `<select>` with fixed options
- `Submit`: `<button type="submit">`

### ⚙️ Behavior

- Controlled state via `useFormReducer`
- Validation on blur with emotional feedback
- Time options fetched from context on open
- Navigation to `/booking-confirmed` on submit

> 🧾 _This implementation exceeds the exercise requirements by modularizing form logic, styling, and validation. It’s ready for API integration and unit testing in future steps._

---
