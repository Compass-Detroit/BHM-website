# 🎨 Black History Month Color System

This document defines the official color palette and usage rules for the Black History Month website.

The palette is inspired by Pan-African symbolism and implemented as semantic Tailwind tokens to ensure accessibility, consistency, and scalability.

---

## ✊🏾 Symbolism

| Color           | Meaning                  |
| --------------- | ------------------------ |
| Red             | sacrifice & struggle     |
| Black           | identity & strength      |
| Green           | growth & future          |
| Gold (optional) | excellence & celebration |

These colors are used intentionally — not decoratively.

---

## 🎯 Design Goals

- Preserve cultural symbolism
- Maintain modern UI readability
- Support accessibility contrast standards
- Avoid overwhelming visual saturation
- Scale as a reusable design system

---

## 🎨 Palette Reference

### Core Colors

| Token         | Hex     |
| ------------- | ------- |
| bhm-black-950 | #0B0B0B |
| bhm-red-700   | #C1121F |
| bhm-green-700 | #1B7F3B |
| bhm-gold-400  | #CFAE70 |

### Neutrals

| Token           | Hex     |
| --------------- | ------- |
| bhm-neutral-50  | #F8F9FA |
| bhm-neutral-100 | #eceff2 |
| bhm-neutral-200 | #d6dce1 |
| bhm-neutral-300 | #b2bec7 |

---

## ⚙ Tailwind Implementation

The palette is defined in `tailwind.config.js` along with additional color ranges:

```js
 extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        primary: {
          50: '#fbf9f1',
          100: '#f5f0df',
          200: '#eadfbe',
          300: '#dcc795',
          400: '#cfae70',
          500: '#c2954d',
          600: '#b58041',
          700: '#966638',
          800: '#795233',
          900: '#62452c',
          950: '#352215',
          DEFAULT: '#cfae70',
        },
        bhm: {
          black: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e6e6e6',
            300: '#d3d3d3',
            400: '#a3a3a3',
            500: '#727272',
            600: '#535353',
            700: '#404040',
            800: '#272727',
            900: '#1a1a1a',
            950: '#0b0b0b',
            DEFAULT: '#0b0b0b',
          },
          red: {
            50: '#fff1f2',
            100: '#ffe0e2',
            200: '#ffc7cb',
            300: '#ffa0a7',
            400: '#ff6974',
            500: '#fa3947',
            600: '#e71b2a',
            700: '#c1121f',
            800: '#a1131e',
            900: '#85171f',
            950: '#49060b',
            DEFAULT: '#c1121f',
          },
          green: {
            50: '#f1fcf3',
            100: '#defae5',
            200: '#bef4ce',
            300: '#8beaa8',
            400: '#51d77b',
            500: '#2abd58',
            600: '#1d9c45',
            700: '#1b7f3b',
            800: '#1a6131',
            900: '#17502b',
            950: '#072c14',
            DEFAULT: '#1b7f3b',
          },
          gold: {
            50: '#fbf9f1',
            100: '#f5f0df',
            200: '#eadfbe',
            300: '#dcc795',
            400: '#cfae70',
            500: '#c2954d',
            600: '#b58041',
            700: '#966638',
            800: '#795233',
            900: '#62452c',
            950: '#352215',
            DEFAULT: '#cfae70',
          },
          neutral: {
            50: '#f8f9fa',
            100: '#eceff2',
            200: '#d6dce1',
            300: '#b2bec7',
            400: '#889ba8',
            500: '#697e8e',
            600: '#546775',
            700: '#45535f',
            800: '#3c4750',
            900: '#353d45',
            950: '#23292e',
            DEFAULT: '#f8f9fa',
          },
        },
      }
```

This snippet is documentation only. The source of truth is the actual Tailwind config file.

---

## 🧭 Usage Rules

### Background hierarchy

- Primary background → `bhm-neutral-50`
- Dark sections → `bhm-black-950`
- Cards/surfaces → neutral tones

### Accent hierarchy

- Primary action → Red
- Secondary highlight → Green
- Decorative accent → Gold

### Examples

Primary button:

```html
<button class="bg-bhm-red-500 hover:bg-bhm-red-700 text-white">Explore</button>
```

Dark hero section:

```html
<section class="bg-bhm-black-950 text-bhm-neutral-50">...</section>
```

Badge highlight:

```html
<span class="bg-bhm-green-500 text-white"> Spotlight </span>
```

---

## Where to use Red and Green

These suggestions align with the symbolism (red = sacrifice & struggle, green = growth & future) and keep usage intentional.

### Red (`bhm-red-*`)

- **Primary CTAs** — “Explore stories”, “Donate”, “Get involved” so key actions feel weighty and urgent.
- **Hero or section accents** — Underlines, short lines, or small shapes behind headlines on dark sections.
- **Links or labels for “struggle” content** — e.g. “Learn about the movement”, “History of resistance” (sparingly, with clear focus).
- **Ribbons or badges** — e.g. “Featured” or “Honoring” when you want a strong accent.
- **Focus/active states** — Red border or ring on focused buttons (already high contrast).

*Consider adding a screenshot or mockup to this PR: e.g. a hero with a red CTA, or a card with a red “Featured” ribbon.*

### Green (`bhm-green-*`)

- **Secondary CTAs** — “Sign up”, “Subscribe”, “View calendar” so growth/forward actions read as green.
- **Success and progress** — Confirmations, “Saved”, progress bars, or “New” badges.
- **Spotlight or “future” content** — Cards or badges for “Spotlight”, “Coming up”, “Youth program”, “What’s next”.
- **Calendar/events** — Event cards or “Upcoming” sections to tie green to future and growth.
- **Decorative accents** — Subtle borders, icons, or small shapes in green on neutral or dark backgrounds.

*Consider adding a screenshot or mockup to this PR: e.g. a “Spotlight” badge, an event card with green accent, or a success state.*

### Summary

- **Red** → Primary actions and “struggle/sacrifice” storytelling.
- **Green** → Secondary actions, success, and “growth/future” content.

Images in the PR (screenshots or simple mockups) will make these use cases clear for reviewers.

---

## ♿ Accessibility Requirements

- Never use red text on green backgrounds
- Maintain WCAG AA contrast minimum
- Prefer neutral backgrounds for text
- Accent colors should highlight, not carry body text

Accessibility is mandatory, not optional.

---

## 🚫 Anti-Patterns

Avoid:

- equal red/black/green layout blocks
- color-only meaning without labels
- excessive saturation
- decorative overuse of accent colors

The palette should support storytelling, not distract from it.

---

## 🔮 Future Expansion

This system is designed to support:

- dark mode variants
- additional accent shades
- themed illustrations
- component libraries

Any additions must preserve symbolic meaning and accessibility.

---

## ❤️ Purpose

This color system exists to visually honor Black history and culture while delivering a modern, inclusive web experience.

Black history is not a theme.
It is a foundation.

## 🌗 Dark Mode Usage

This color system supports dark mode using the **same palette**.  
No alternate colors are required. Dark mode is achieved by swapping roles.

Dark mode is not a second palette. It is a layout inversion. We can change this later if we want.

---

### Philosophy

- Brand accents (red / green / gold) stay the same
- Background and text invert
- Surfaces layer using black shades
- Accessibility contrast is preserved

The palette should be stable across themes.

---

### Example Root Layout Pattern

Every page should wrap content with a theme shell:

```jsx
<div
  className="
  min-h-screen
  bg-bhm-neutral-50 text-bhm-black-950
  dark:bg-bhm-black-950 dark:text-bhm-neutral-50
"
>
  {children}
</div>
```

Light mode:

- neutral background
- dark text

Dark mode:

- black background
- light text

---

### Example Surface / Card Pattern

Use layered surfaces instead of pure black:

```jsx
<div
  className="
  rounded-xl border p-6
  bg-bhm-neutral-0 border-bhm-neutral-200
  dark:bg-bhm-black-900 dark:border-bhm-black-800
"
>
  Card content
</div>
```

This creates visual depth in both modes.

---

### Example Accent Colors

Accent colors do **not** change in dark mode.

```jsx
<button
  className="
  bg-bhm-red-500 hover:bg-bhm-red-700
  text-white px-5 py-3 rounded-lg
"
>
  Explore Stories
</button>
```

Red, green, and gold remain brand anchors across themes.

---

### Accessibility Rules

- Never place red text on green backgrounds
- Prefer neutral backgrounds for body text
- Maintain WCAG AA contrast
- Avoid color-only meaning

Dark mode should remain readable first, aesthetic second.

---

### Enabling Dark Mode

Dark mode is enabled automatically and inherits system settings with the current setup. This can be changed if we want users to have more control. Manual control would require Tailwind to be configured so that the dark theme activates when the `.dark` class is present on a root element.
