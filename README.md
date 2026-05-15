# LIMOVA - Fashion E-commerce Website

## Overview

LIMOVA is a modern, modular e-commerce website built with **Astro** framework. The site showcases a collection of ultra-lightweight, eco-friendly footwear with a focus on comfortable yet fashionable design.

## Features

- 🎨 **Modern Design**: Clean, responsive layout with purple accent colors
- 🧩 **Modular Components**: Reusable Astro components for maintainability
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Astro for optimal speed
- 🌍 **Bilingual Support**: English and Chinese content throughout
- 💜 **Accessible**: Semantic HTML and ARIA labels

## Project Structure

```
src/
├── components/
│   ├── Header.astro           # Navigation header with logo and actions
│   ├── HeroSection.astro      # Main hero section with CTA
│   ├── FeaturesSection.astro  # Product features showcase
│   ├── CollectionsSection.astro # Product collections grid
│   ├── AboutSection.astro     # About LIMOVA and newsletter signup
│   └── Footer.astro           # Footer with links and social media
├── layouts/
│   └── Layout.astro           # Main page layout wrapper
├── pages/
│   └── index.astro            # Homepage
└── styles/
    └── global.css             # Global styles and CSS variables
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/unme6784-afk/dg.git
cd dg
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Available Commands

| Command        | Action                                    |
| :------------- | :---------------------------------------- |
| `npm run dev`  | Starts local dev server at `localhost:3000` |
| `npm run build`| Build your production site to `./dist/`   |
| `npm run preview` | Preview your build locally, before deploying |

## Design System

### Color Palette

- **Primary Purple**: `#b89ddb`
- **Light Background**: `#f5f0f0`
- **Dark Text**: `#1a1a1a`
- **Gray Placeholder**: `#d3d3d3`
- **White**: `#ffffff`
- **Muted Text**: `#666666`

### Typography

- **Font Stack**: System fonts (San Francisco, Segoe UI, etc.)
- **Headings**: Font weight 700
- **Body**: Line height 1.6

## Components

### Header

Sticky header with:
- LIMOVA logo
- Navigation menu
- Search, account, and cart buttons

### Hero Section

Eye-catching hero with:
- Large headline with italic styling
- Bilingual description
- Shop Now CTA button
- Customer testimonials
- Decorative badge

### Features Section

4-column grid showcasing:
- Ultra Lightweight
- Curve Design
- EVA Eco-Friendly
- Water Ready

### Collections Section

Product showcase grid with:
- 4 featured collections
- Product images and descriptions
- Navigation arrows
- View All button

### About Section

Gradient section with:
- About LIMOVA content
- Newsletter signup form
- Trust badges
- Responsive design

### Footer

Simple footer with:
- Links (Privacy, Terms, Shipping, Contact)
- Social media links (Instagram, TikTok, Pinterest)
- Copyright information

## Responsive Breakpoints

- **Desktop**: 1400px max-width
- **Tablet**: 1024px breakpoint
- **Mobile**: 768px breakpoint

## Future Enhancements

- [ ] Product detail pages
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product search and filtering
- [ ] Blog/Journal section
- [ ] Customer reviews
- [ ] Integration with e-commerce backend

## License

© 2026 LIMOVA. All Rights Reserved.

## Support

For issues or questions, please open an issue on GitHub.
