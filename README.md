# Akdenis Niaziev | Developer Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, and professional experience as a front-end web developer. It's built with performance, accessibility, and modern web standards in mind.

## 📌 Overview

This portfolio serves as my digital business card — designed to reflect both technical ability and creativity. Visitors can explore my work, view my resume, and contact me easily.

### Features

- ✅ Responsive design across all screen sizes
- 🌙 Light/Dark mode toggle
- 🍔 Mobile hamburger menu navigation
- 📁 Project showcase with live links
- 📬 Contact form integrated with Salesforce Web-To-Lead
- ♿ ARIA roles and accessibility support (WCAG 2.1 AA)
- 🧠 Scroll spy navigation with active state tracking
- 🚀 Performance optimized with modern CSS techniques
- 🎨 Built using BEM methodology and CSS nesting
- 🔒 Semantically structured HTML5 with meta tags and favicons

---

## 💻 Tech Stack

- HTML5
- CSS3 (Custom Properties, Grid/Flexbox, Pseudo-selectors)
- JavaScript (ES6+)
- BEM naming convention
- Webpack
- AOS (Animate on Scroll)
- Salesforce integration (form handling)

---

## 📁 Folder Structure

```bash
portfolio/
│
├── assets/              # fonts, icons, media
├── node_modules/
├── public/
├── ├── index.html
├── src/
│   ├── css/
│   │   ├── _home.css
│   │   ├── _nav.css
│   │   ├── _projects.css
│   │   ├── _skills.css
│   │   ├── _resume.css
│   │   ├── _contact.css
│   │   ├── _theme.css
│   │   └── main.css
│   ├── js/
│   │    ├── app.js
│   │    └── main.js
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── robots.txt
└── webpack.config.js
```

## 🛠 Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — BEM, CSS variables, grid, flexbox, subgrid, nesting
- **JavaScript (ES6+)** — DOM interaction, navigation, toggles
- **Webpack** — Bundling and dev server
- **PostCSS** — For future CSS syntax and optimizations
- **Salesforce Web-To-Lead** — For form handling

---

## ✨ Features

- 🎨 Light/Dark mode toggle
- 🍔 Hamburger menu
- 📱 Fully responsive layout with media & container queries
- 💌 Contact form powered by Salesforce
- ⚡ Scroll spy navigation
- ♿ WCAG 2.1 AA compliant
- 🧠 BEM methodology for maintainable CSS
- 📦 Webpack + PostCSS config for modular development
- 🖼️ Lazy loaded & optimized assets
- 🗃️ ARIA roles and semantic HTML5 tags
- 🛡️ Relative paths only
- 🔍 Google Lighthouse tested for performance & accessibility

---

## 🚀 Getting Started

### 1. Clone and install dependencies

```bash
git clone https://github.com/akdenisniaziev/portfolio.git
cd portfolio
npm init -y
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader postcss postcss-loader autoprefixer postcss-nesting cssnano
npm run dev
```

---

```json
"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack serve --open --mode development"
}
```

---

## 📝 License

This portfolio is open-source and intended for educational, personal branding, and project showcasing purposes.
