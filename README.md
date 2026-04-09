# 💍 Marry Me

> **Modern matrimony for a modern generation.**

A mobile-first React matrimonial web app built from a Figma design, featuring profile creation, partner preference matching, and a curated matches dashboard.

---

## 📱 Screens

| Screen | Route | Description |
|---|---|---|
| **Splash** | `/` | Animated rings logo with auto-redirect |
| **Register** | `/register` | Full profile creation form |
| **Welcome** | `/welcome` | Personalized onboarding greeting |
| **Partner Preferences** | `/partner-preferences` | Age/Height sliders + multi-select filters |
| **Matches** | `/matches` | Scrollable profile cards + bottom nav |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (Vite) |
| Routing | React Router v6 |
| Styling | Vanilla CSS (custom design tokens) |
| Fonts | Playfair Display + Inter (Google Fonts) |
| State | React `useState` + `localStorage` |
| Version Control | Git |

---

## 🎨 Design System

The design was taken from the [Figma file](https://www.figma.com/design/KyKenZj6Z2LLg6cr08yHFg/Marry-Me-Trail?node-id=0-1) and implemented using a custom CSS design system.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-gold` | `#C5A059` | Primary / Brand |
| `--color-gold-dark` | `#9C7B3A` | Hover states, buttons |
| `--color-gold-pale` | `#F5EDD8` | Chip backgrounds, surfaces |
| `--color-bg` | `#FDFAF6` | Page background |
| `--color-surface` | `#F9F5EF` | Cards |
| `--color-input-bg` | `#F3EDE3` | Form inputs |
| `--color-text-primary` | `#1C1814` | Headings, body |
| `--color-text-secondary` | `#6B6050` | Subtitles, labels |

### Typography

- **Headings / Logo**: `Playfair Display` — elegant serif for a premium feel
- **Body / Forms**: `Inter` — clean sans-serif for readability

---

## 🗂️ Project Structure

```
MarryMe-Project/
├── public/
├── src/
│   ├── components/
│   │   ├── AppLogo.jsx          # Gold rings SVG + "marry me" wordmark
│   │   ├── BottomNav.jsx        # 5-icon bottom navigation bar
│   │   ├── MultiSelectChip.jsx  # Removable chip tag selector
│   │   └── ScreenHeader.jsx     # Sticky header with logo + title
│   ├── pages/
│   │   ├── SplashPage.jsx       # Animated splash + auto-redirect
│   │   ├── RegisterPage.jsx     # Profile creation form
│   │   ├── WelcomePage.jsx      # Personalized welcome screen
│   │   ├── PartnerPreferencesPage.jsx  # Match filter preferences
│   │   └── MatchesPage.jsx      # Matches grid + bottom nav
│   ├── styles/
│   │   └── index.css            # Global design tokens & utilities
│   ├── App.jsx                  # React Router setup
│   └── main.jsx                 # App entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Git](https://git-scm.com/) v2.37+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd MarryMe-Project

# Install dependencies
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## ✨ Key Features

- **Mobile-first layout** — max-width 430px centered frame with dark gold outer glow
- **Animated splash screen** — floating rings SVG with pulsing dot loader
- **Profile registration** — full form with validation (name, DOB, height, education, income, etc.)
- **Partner preferences** — dual-handle age & height range sliders, multi-select chip dropdowns
- **Matches dashboard** — color-coded profile cards with like / decline / chat / profile actions
- **Persistent state** — form data saved to `localStorage` across page navigations
- **Smooth animations** — `fadeInUp`, `scaleIn`, `float` keyframe animations throughout

---

## 📁 Git History

```
feat: initial MarryMe React app scaffold with all 5 screens matching Figma design
```

---

## 🔗 References

- **Figma Design**: [Marry Me Trail](https://www.figma.com/design/KyKenZj6Z2LLg6cr08yHFg/Marry-Me-Trail?node-id=0-1)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **React Router**: [reactrouter.com](https://reactrouter.com)

---

## 📄 License

This project is for demonstration and development purposes.
