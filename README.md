# Mohamed Tarek — Portfolio

Personal portfolio website for Mohamed Tarek, a backend and full-stack developer based in Cairo, Egypt.

**Live:** [mohamed-tarekportofolio.netlify.app](https://mohamed-tarekportofolio.netlify.app)

---

## What's inside

A static portfolio site built with plain HTML, CSS, and JavaScript — no frameworks, no build step. It covers projects, skills, and experience, and is designed to be easy to read and update.

```
portfolio/
├── index.html        # Structure and sections
├── css/
│   └── style.css     # All styles, organized in labeled blocks
├── js/
│   └── main.js       # Data + rendering logic
└── assets/           # Screenshots (optional)
```

---

## Run locally

Just open `index.html` in your browser. No server or install needed.

```bash
git clone https://github.com/Mohamed-tarek107/portfolio
cd portfolio
open index.html        # macOS
# or double-click index.html on Windows/Linux
```

---

## Deploy

**Netlify (drag and drop):** Go to [app.netlify.com](https://app.netlify.com), drag the `portfolio/` folder into the drop zone. Done.

**Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --dir . --prod
```

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

---

## Update content

All content lives at the top of `js/main.js` in three arrays — `PROJECTS`, `SKILLS`, and `EXPERIENCE`. Edit those objects and the page updates automatically. You never need to touch the HTML.

**Add a project:**
```js
{
  title: "Project Name",
  badge: "Live",           // or "GitHub" or "WIP"
  desc: "What it does.",
  highlights: [
    "Key backend detail",
    "Auth / security detail",
  ],
  stack: ["Node.js", "PostgreSQL"],
  github: "https://github.com/...",
  demo: "https://..."      // set to null if no live demo
}
```

**Change the accent color:** edit `--accent` in the `:root` block at the top of `css/style.css`.

---

## Tech

- HTML5 / CSS3 / Vanilla JS
- Fonts: DM Sans + DM Mono (Google Fonts)
- Hosted on Netlify

---

## Author

Mohamed Tarek — [mohamedtarekk710@gmail.com](mailto:mohamedtarekk710@gmail.com)
