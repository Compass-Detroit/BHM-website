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
| bhm-black-900 | #111111 |
| bhm-red-500   | #C1121F |
| bhm-red-700   | #8E0C15 |
| bhm-green-500 | #1B7F3B |
| bhm-green-700 | #125B2A |
| bhm-gold-500  | #CFAE70 |

### Neutrals

| Token           | Hex     |
| --------------- | ------- |
| bhm-neutral-50  | #F8F9FA |
| bhm-neutral-200 | #E9ECEF |
| bhm-neutral-700 | #343A40 |
| bhm-neutral-900 | #212529 |

---

## ⚙ Tailwind Implementation

The palette is defined in `tailwind.config.js`:

```js
extend: {
  colors: {
    bhm: {
      black: {
        950: "#0B0B0B",
        900: "#111111",
      },
      red: {
        500: "#C1121F",
        700: "#8E0C15",
      },
      green: {
        500: "#1B7F3B",
        700: "#125B2A",
      },
      gold: {
        500: "#CFAE70",
      },
      neutral: {
        50: "#F8F9FA",
        200: "#E9ECEF",
        700: "#343A40",
        900: "#212529",
      },
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
No alternate colors are required Dark mode is achieved by swapping roles.

Dark mode is not a second palette. It is a layout inversion. We can change this later if we wanted.

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
  bg-white border-bhm-neutral-200
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

Dark mode enabled aoutmatically and inherits system settings right now according to our current settings but this can be changed if we wanted users to have more control requires Tailwind to be configured with:

Dark theme activates when the `.dark` class is present:
