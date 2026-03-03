# Shamil SJ - Ultra-Minimalist Portfolio

A high-end, modern personal portfolio built with React, Tailwind CSS, and Lucide icons. Featuring a glassmorphism design system, bento grid layout, and smooth interactions.

## 🎨 Design Features

- **Obsidian Black Theme** (#050505) with subtle noise texture
- **Glassmorphism Components** - Semi-transparent cards with refined borders
- **Bento Grid Layout** - Modern, responsive grid system
- **Electric Blue Accent** - Used sparingly for hover states and badges
- **Grotesk Typography** - Inter/Geist sans-serif with tight letter-spacing
- **Smooth Interactions** - Hover transitions with subtle lift effects

## 📦 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (npm or pnpm)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will open at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with intro & social links
│   ├── BentoSection.jsx  # Status & focus areas grid
│   ├── Skills.jsx        # Skills with card layout
│   ├── Experience.jsx    # Timeline of experience
│   ├── Education.jsx     # Education details
│   └── Footer.jsx        # Footer with CTA & contact
├── App.jsx               # Main app component
├── index.css             # Global styles & Tailwind
└── main.jsx              # React entry point
```

## 🎯 Key Sections

- **Navigation** - Sticky header with smooth navigation links
- **Hero** - Large name, tagline, and social links
- **Bento Grid** - Current focus, location, experience snapshot
- **Skills** - Web Design, Software Development, Microsoft Apps
- **Experience** - Timeline of professional journey
- **Education** - BTech in AI specialization details
- **Contact** - CTA and multiple ways to connect

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  'obsidian': '#050505',
  'accent': '#3b82f6', // Change to your preferred accent
}
```

### Typography
All headings use the `heading-*` classes with Grotesk styling:
- `heading-lg` - Large section titles
- `heading-md` - Section headings
- `heading-sm` - Card titles

### Components
- `.glass-card` - Base glassmorphism component
- `.accent-badge` - Styled badges
- `.btn-glass` - Interactive buttons

## 📱 Responsive Design

The portfolio is fully responsive:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions

## ✨ Features

✓ Modern glassmorphism design
✓ Smooth hover animations
✓ Responsive layout
✓ Optimized performance
✓ Semantic HTML
✓ Accessible components
✓ SEO-friendly structure

---

**Built with precision for Shamil SJ**
