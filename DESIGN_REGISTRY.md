# Design Registry & Style Architecture &bull; ApricotTreat

## 1. Brand Identity & Aesthetic
- **Brand Name:** ApricotTreat
- **Category / Niche:** Artisanal Apricot Pâtisserie &bull; Stone Fruit Confections &bull; Confitures &bull; Food
- **Design Philosophy:** Warm apricot sunset amber, roasted crust honey brown, velvety almond cream, and elegant French culinary typography.

## 2. Color Palette & Design Tokens
- `--color-bg`: `#FFFDF8` (Warm Marzipan Cream)
- `--color-surface`: `#FFFFFF` (Pristine Salon White)
- `--color-surface-subtle`: `#FAF4E8` (Soft Biscuit Crust)
- `--color-border`: `#EFE4D2` (Pastry Flour Seam)
- `--color-text`: `#1F1A17` (Deep Roasted Charcoal)
- `--color-text-muted`: `#6B5E55` (Caramelized Vanilla Bark)
- `--color-primary`: `#3E2314` (Dark Honey Butter Brown)
- `--color-primary-dark`: `#2B170B` (French Hearth Shadow)
- `--color-accent`: `#FF8A3D` (Sun-Ripened Apricot Amber)
- `--color-accent-hover`: `#F06B1D` (Blazing Orange Glaze)
- `--color-sage`: `#6E8B3D` (Apricot Orchard Foliage)

## 3. Typography Hierarchy
- **Primary Display / Serif:** `'Playfair Display', Georgia, serif` &mdash; Luxurious gourmet pâtisserie branding and recipe headers.
- **Modern Sans:** `'Plus Jakarta Sans', sans-serif` &mdash; Clean, legible narrative text, menus, and tasting salon booking forms.
- **Monospace Telemetry:** `'JetBrains Mono', monospace` &mdash; Sugar Brix levels (66&deg;), pH acidity, oven temperatures (200&deg;C), and contact phone numbers.

## 4. Navigation & Layout
- Exactly 1 `<header class="site-header">` per page with sticky backdrop-filter blur.
- Exactly 1 `<div class="mobile-drawer" id="mobile-drawer">` per page synchronized in `assets/js/main.js`.
- Fully responsive across desktop, tablet, and mobile breakpoints.
