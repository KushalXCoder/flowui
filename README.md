# <img src="public/logo.svg" width="32" height="32" align="center" /> Flow UI

**Beautifully designed, copy-paste components for your next project.**

A professional [shadcn/ui](https://ui.shadcn.com/) extension registry featuring production-ready components, common UI patterns, and elegant animations.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js-black.svg)](https://nextjs.org/)
[![Styling: Tailwind](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC.svg)](https://tailwindcss.com/)

---

## ✨ Features

- **Beautiful by Default**: Expertly crafted with a focus on micro-interactions and typography.
- **Copy & Paste**: Zero lock-in. You own the code in your own repository.
- **Animated**: Powered by [Framer Motion](https://www.framer.com/motion/) for silky smooth transitions.
- **Type Safe**: First-class TypeScript support for a better developer experience.
- **Customizable**: Built with Tailwind CSS, making it easy to adapt to your design system.

## 🚀 Quick Start

Flow UI acts as a registry extension to Shadcn UI.

### 1. Initialize Shadcn UI
If you haven't already, initialize Shadcn UI in your project:
```bash
npx shadcn@latest init
```

### 2. Configure Registry
Add the Flow UI registry to your `components.json`:
```json
{
  "registries": {
    "@flowui": "https://flowui-ten.vercel.app/r/{name}.json"
  }
}
```

### 3. Add Components
Install any component directly via CLI:
```bash
npx shadcn@latest add @flowui/copy-button
```

## 📦 Components

| Standard Components | Animated Components |
| :--- | :--- |
| Auth Buttons | Changing Text |
| Copy Button | Scrollbar |
| File Select | Stacked Card |
| Lift Button | |
| Speaker | |
| Text Divider | |

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Docs**: [FumaDocs](https://fumadocs.com/)

## 📄 License

Licensed under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/KushalXCoder">KushalXCoder</a>
</p>
