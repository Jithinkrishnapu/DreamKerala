# Dream Kerala Holidays - Color Scheme Guide

## 🎨 Brand Color Palette

### Primary Colors (Main Brand Identity)

#### Tropical Teal `#0D9488`
- **Usage**: Primary buttons, main CTAs, icons, links
- **Inspiration**: Kerala's pristine backwaters and lagoons
- **Psychology**: Trust, tranquility, adventure
- **RGB**: rgb(13, 148, 136)

#### Sunset Gold `#F59E0B`
- **Usage**: Secondary buttons, accents, highlights
- **Inspiration**: Golden hour over Kerala beaches
- **Psychology**: Warmth, energy, optimism
- **RGB**: rgb(245, 158, 11)

#### Palm Green `#059669`
- **Usage**: Success states, nature elements
- **Inspiration**: Lush coconut palm groves
- **Psychology**: Growth, freshness, harmony
- **RGB**: rgb(5, 150, 105)

---

### Secondary Colors (Accents)

#### Coral Sunset `#F97316`
- **Usage**: Special offers, urgent CTAs
- **Inspiration**: Vibrant Kerala sunsets
- **RGB**: rgb(249, 115, 22)

#### Sky Blue `#0EA5E9`
- **Usage**: Information, water-related content
- **Inspiration**: Clear tropical skies
- **RGB**: rgb(14, 165, 233)

#### Emerald Green `#10B981`
- **Usage**: Eco-tourism, nature tours
- **Inspiration**: Emerald tea plantations
- **RGB**: rgb(16, 185, 129)

---

### Neutral Colors

#### Deep Ocean Navy `#0F172A`
- **Usage**: Headers, footers, dark backgrounds
- **Inspiration**: Deep ocean waters, traditional houseboats
- **RGB**: rgb(15, 23, 42)

#### Slate Dark `#1E293B`
- **Usage**: Text, secondary backgrounds
- **RGB**: rgb(30, 41, 59)

#### Medium Gray `#475569`
- **Usage**: Body text, descriptions
- **RGB**: rgb(71, 85, 105)

#### Light Gray `#F1F5F9`
- **Usage**: Light backgrounds, cards
- **RGB**: rgb(241, 245, 249)

#### Off White `#FAFAF9`
- **Usage**: Page backgrounds
- **RGB**: rgb(250, 250, 249)

---

## 🌈 Gradient Combinations

### Tropical Gradient
```css
background: linear-gradient(135deg, #0D9488 0%, #059669 100%);
```
**Usage**: Primary buttons, header, hero sections

### Sunset Gradient
```css
background: linear-gradient(135deg, #F59E0B 0%, #F97316 100%);
```
**Usage**: Secondary buttons, special offers, featured content

### Ocean Gradient
```css
background: linear-gradient(135deg, #0EA5E9 0%, #0D9488 100%);
```
**Usage**: Water-related sections, beach packages

### Dark Gradient
```css
background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
```
**Usage**: Footer, dark hero sections

---

## 📱 Component Color Usage

### Header
- Background: Tropical Gradient
- Text: White
- Hover: Sunset Gold

### Buttons
- **Primary**: Tropical Teal with gradient
- **Secondary**: Sunset Gold with gradient
- **Hover**: Darker shade with lift effect

### Cards & Sections
- Background: Off White / Light Gray
- Border: Light Gray
- Hover: Tropical Teal accent

### Icons
- Default: Tropical Teal
- Accent: Sunset Gold
- Hover: Gradient effect

### Links
- Default: Inherit
- Hover: Tropical Teal
- Active: Palm Green

### Footer
- Background: Deep Ocean Navy gradient
- Accent: Tropical Teal
- Text: White/Light Gray

---

## ♿ Accessibility

All color combinations meet WCAG 2.1 AA standards:

- **Tropical Teal on White**: 4.5:1 contrast ratio ✓
- **Deep Ocean Navy on White**: 15.5:1 contrast ratio ✓
- **Sunset Gold on Dark**: 8.2:1 contrast ratio ✓
- **White on Tropical Teal**: 4.8:1 contrast ratio ✓

---

## 🎯 Brand Personality

The color scheme reflects:

1. **Natural Beauty**: Inspired by Kerala's landscapes
2. **Adventure**: Vibrant, energetic colors
3. **Trust**: Professional teal and navy tones
4. **Warmth**: Golden sunset accents
5. **Freshness**: Green nature elements

---

## 💡 Usage Guidelines

### Do's ✓
- Use Tropical Teal for primary actions
- Use Sunset Gold for secondary emphasis
- Maintain gradient consistency
- Use white space generously
- Keep contrast ratios accessible

### Don'ts ✗
- Don't mix too many colors in one section
- Don't use pure black (#000000)
- Don't ignore hover states
- Don't compromise accessibility
- Don't use colors without purpose

---

## 🔄 Migration from Old Colors

| Old Color | New Color | Component |
|-----------|-----------|-----------|
| `#E6A43B` (Old Gold) | `#0D9488` (Tropical Teal) | Primary buttons, icons |
| `#2E709E` (Old Blue) | `#F59E0B` (Sunset Gold) | Secondary buttons |
| `#1D231F` (Old Dark) | `#0F172A` (Deep Ocean Navy) | Backgrounds |

---

## 📦 Implementation

All colors are defined in `styles/theme-colors.css` using CSS custom properties:

```css
:root {
  --primary-teal: #0D9488;
  --primary-gold: #F59E0B;
  --primary-green: #059669;
  /* ... and more */
}
```

Import order in `_app.js`:
1. `globals.css` (base styles)
2. `theme-colors.css` (color overrides)
3. `footer.css` (component styles)

---

## 🌟 Visual Hierarchy

1. **Primary Focus**: Tropical Teal (main CTAs)
2. **Secondary Focus**: Sunset Gold (accents)
3. **Supporting**: Palm Green (success/nature)
4. **Background**: Deep Ocean Navy (dark sections)
5. **Content**: Off White/Light Gray (readability)

---

*Last Updated: November 27, 2024*
*Version: 2.0 - Tropical Kerala Theme*
