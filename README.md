# Stone Research Foundation Library

A research library website for the Stone Research Foundation, built with Astro and Tailwind CSS.

## About

The Stone Research Foundation, led by Kevin R. Stone, MD, pioneers orthopaedic treatments that accelerate healing. This library catalogs 30+ years of peer-reviewed research in biologic joint repair.

### Research Areas

- **Articular Cartilage** — Paste graft technique with 10-23 year outcomes
- **Meniscus Cartilage** — Allograft transplantation in arthritic knees
- **Ligaments & Tendons** — ACL reconstruction including xenograft research
- **Anabolic Therapies** — Injection protocols (research ongoing)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Stack

- [Astro](https://astro.build) — Static site generator
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- Google Fonts — Playfair Display, Source Sans 3

## Structure

```
src/
├── layouts/
│   └── Layout.astro        # Main layout with nav/footer
├── pages/
│   ├── index.astro         # Homepage
│   └── research/
│       ├── index.astro     # All papers with filters
│       ├── articular-cartilage.astro
│       ├── meniscus.astro
│       ├── ligaments.astro
│       └── anabolic-therapies.astro
└── styles/
    └── global.css          # Global styles + Tailwind
```

## Deployment

Build outputs static HTML to `/dist`. Deploy to Netlify, Vercel, or any static host.

## License

© Stone Research Foundation
