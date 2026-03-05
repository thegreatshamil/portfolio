# Tutorial: Building an Ultra-Minimalist AI Portfolio (Beginner Friendly)

This tutorial walks a complete beginner through the portfolio project you now have in this repository. It explains the tech, the high-level structure, the important code pieces, how to run and build the project, and a code review with concrete code samples. At the end you'll find five practical suggestions for improving the code.

---

## Table of Contents

- Summary of technologies
- High-level walkthrough
- Setup: run locally and build
- Detailed code review (key files & snippets)
- Troubleshooting notes (common issues & fixes)
- 5 suggestions to improve the codebase

---

## Summary of the Technology

This project uses a modern, minimal frontend stack:

- Vite: fast development server and build tool
- React: UI library
- Tailwind CSS: utility-first CSS framework for styling
- Lucide React: icon library (lightweight SVG icons)
- OpenRouter (via HTTP): hosting an LLM-powered "Digital Twin" chat assistant
- Git / GitHub: source control and remote repository

Why this stack?
- Vite gives a fast dev feedback loop (HMR). React is the most common component model. Tailwind lets you design with small utility classes instead of writing lots of CSS from scratch. OpenRouter enables serverless calls to an LLM from the client (you must keep your API key safe).

---

## High-Level Walkthrough

How the app is organized and what each part does:

- `index.html`: The app entry HTML. It mounts the React app.
- `src/main.jsx`: The React entry file. It imports global CSS and renders `App`.
- `src/index.css`: Tailwind setup and some custom component classes (glass-card, heading styles).
- `src/App.jsx`: The top-level component. It renders navigation, hero, and every page section.
- `src/components/`: Contains all the UI sections as small components:
  - `Hero.jsx` — landing heading, tagline, social links.
  - `BentoSection.jsx` — the bento overview grid.
  - `Skills.jsx` — skill cards.
  - `Projects.jsx` — featured project cards.
  - `Achievements.jsx` — awards and milestones.
  - `Experience.jsx` — vertical timeline.
  - `Education.jsx` — academic info.
  - `DigitalTwin.jsx` — the chat UI that calls the LLM via `src/lib/openrouter.js`.
  - `Footer.jsx` — contact and CTA.
- `src/lib/openrouter.js`: Small API helper that posts a chat payload to OpenRouter.
- `.env` (local): contains `VITE_OPENROUTER_API_KEY` for the OpenRouter API. This is not committed.

Design system summary:
- Background: obsidian (`#050505`) with a subtle noise image.
- Glassmorphism cards: semi-transparent dark cards with `border-white/10` and `rounded-2xl`.
- Accent color: Electric blue defined as `accent` in Tailwind config.
- Typography: Inter/Geist (Grotesk style) via font-family definitions.

---

## Setup: Run locally & Build

Prerequisites:
- Node.js 16+ installed
- Git if you want to push/pull

Install dependencies and run dev server:

```bash
# from repository root
npm install
npm run dev
```

Open the site at the address Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview   # optional: preview production build locally
```

Security: put your OpenRouter API key in `.env` as follows (do NOT commit real keys):

```
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
```

Important: Vite only exposes env variables that start with `VITE_` to client code.

---

## Detailed Code Review (key files and samples)

Below we highlight important files with small, annotated excerpts and explanations.

### 1) `index.html`

This is minimal — it just provides a root element where React mounts:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shamil SJ - AI & Web Design</title>
  </head>
  <body class="bg-obsidian text-white overflow-x-hidden">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 2) `src/main.jsx`

Mounts React and imports global styles.

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 3) `src/index.css` (Tailwind + custom components)

This file configures Tailwind layers and adds a few custom utility classes.

Key excerpt:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .glass-card {
    @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300;
  }
  .glass-card:hover {
    @apply border-white/20 bg-white/10 shadow-lg;
    transform: translateY(-2px);
  }
  .accent-badge {
    @apply bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/30;
  }
}
```

Notes:
- `bg-white/5` and `bg-white/10` are Tailwind's recommended opacity forms. Earlier we had `bg-white/8`, which Tailwind rejected; `bg-white/10` is valid.
- `.glass-card:hover` slightly lifts cards and brightens the border.

### 4) `tailwind.config.js`

Contains theme extensions for `obsidian` color and `accent`:

```js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        accent: '#3b82f6',
      },
      fontFamily: {
        display: ['Inter', 'Geist', 'sans-serif'],
        body: ['Inter', 'Geist', 'sans-serif'],
      },
    }
  }
}
```

### 5) `src/lib/openrouter.js` (LLM client)

This file is a single helper that sends a chat completion request to OpenRouter. Key design choices:
- `OPENROUTER_API_KEY` read from `import.meta.env.VITE_OPENROUTER_API_KEY`.
- A `SYSTEM_PROMPT` string defines the "digital twin" persona.

Excerpt:

```js
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY

export async function askDigitalTwin(question) {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'openai/gpt-4-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: question }
      ],
      temperature: 0.7,
      max_tokens: 500
    })
  })
  if (!response.ok) {
    throw new Error('Failed to get response from AI')
  }
  const data = await response.json()
  return data.choices[0].message.content
}
```

Security note: the call is made from the browser. That means your `VITE_` key is bundled into the client at build time — anyone can extract it from the bundle if published. For production, you should proxy this request through a small server (serverless function) so the key stays secret. See suggestions below.

### 6) `src/components/DigitalTwin.jsx` (the chat UI)

This component handles messages, shows a loader while waiting, and displays responses:

```jsx
const [messages, setMessages] = useState([...])
const [input, setInput] = useState('')
const [loading, setLoading] = useState(false)

async function handleSend() {
  setLoading(true)
  setMessages(prev => [...prev, {type:'user', content: input}])
  try {
    const response = await askDigitalTwin(input)
    setMessages(prev => [...prev, {type:'bot', content: response}])
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}
```

UX note: the chat is client-side only and keeps messages in memory. Refreshing the page clears the conversation.

### 7) `src/App.jsx` (autoscroll fix)

To ensure the page does not auto-scroll to the Digital Twin on load, we added:

```jsx
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
```

This ensures the page starts at the top (Hero) when the app mounts.

---

## Troubleshooting & Common Fixes

1. Tailwind class errors (example: `bg-white/8`):
   - Tailwind supports specific fractions for opacity like `/5`, `/10`, `/20`, etc. Replace invalid opacity with a supported one.

2. Env variable not found in client:
   - Ensure it starts with `VITE_`. Example: `VITE_OPENROUTER_API_KEY`.
   - After editing `.env`, restart the dev server.

3. OpenRouter/API errors:
   - If you get `401` or `403`, verify the key. Do not commit the real key to GitHub.
   - Prefer server-side proxy if you need the key to remain secret.

4. Dev server port collisions:
   - If `5173` is busy, Vite will try another port. Use `npm run dev -- --port 5174` or configure `vite.config.js`.

5. Build errors after changes to CSS:
   - Tailwind classes used in `@apply` must map to valid utilities or you will get PostCSS errors.

---

## How to extend this project (5 suggested improvements)

1. Move the OpenRouter call to a serverless function (recommended):
   - Why: prevents exposing your API key publicly and lets you add usage limits, caching, and safety checks.
   - How: create `/api/chat` (Netlify Functions, Vercel Serverless, or Express endpoint) that forwards requests to OpenRouter using a server-side secret.

2. Persist chat history (optional):
   - Why: remember past conversations and provide context-aware replies.
   - How: store conversations in localStorage (quick) or a small DB (Supabase, Fauna) for cross-device experience.

3. Add unit & integration tests:
   - Why: catch regressions and validate behavior.
   - How: use `vitest` + `@testing-library/react` to test components and `msw` to mock network calls.

4. Improve accessibility (a11y):
   - Why: reach more users and follow best practices.
   - How: ensure keyboard navigation, proper aria labels for chat, correct contrast ratios, and semantic HTML structure.

5. Extract design tokens / theme system:
   - Why: keep styles consistent and make it easier to change the accent color, spacing, or roundedness project-wide.
   - How: move the theme-related values to `tailwind.config.js` and use variables (CSS custom props) where appropriate.

---

## Final notes for a beginner

- Start small: run `npm run dev`, open the site, and explore one component at a time in `src/components`.
- Use the browser dev tools to inspect the DOM and Tailwind classes.
- When you break something, revert or check your last commit: `git checkout -- <file>`.
- Keep your `.env` file secret and do not push API keys.

If you'd like, I can:
- Add a serverless proxy for the OpenRouter call (recommended),
- Add sample tests with `vitest`, or
- Create a small deploy workflow (GitHub Actions) to publish the site to GitHub Pages or Vercel.

---

File created: `tutorial.md` in the repository root. Open it locally or view it here:

- [tutorial.md](tutorial.md)

If you want, I can now: add a serverless proxy or generate a short deploy guide for Vercel. Which would you prefer next?