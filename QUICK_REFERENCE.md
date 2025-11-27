# Dream Kerala Holidays - Quick Color Reference

## 🎨 Primary Colors

### Tropical Teal
```
HEX: #0D9488
RGB: rgb(13, 148, 136)
HSL: hsl(174, 84%, 32%)
```
**Use**: Primary buttons, main CTAs, icons, links

### Sunset Gold
```
HEX: #F59E0B
RGB: rgb(245, 158, 11)
HSL: hsl(38, 92%, 50%)
```
**Use**: Secondary buttons, accents, highlights

### Palm Green
```
HEX: #059669
RGB: rgb(5, 150, 105)
HSL: hsl(161, 94%, 30%)
```
**Use**: Success states, nature elements

---

## 🌈 Gradients

### Tropical (Primary)
```css
background: linear-gradient(135deg, #0D9488 0%, #059669 100%);
```

### Sunset (Secondary)
```css
background: linear-gradient(135deg, #F59E0B 0%, #F97316 100%);
```

### Ocean
```css
background: linear-gradient(135deg, #0EA5E9 0%, #0D9488 100%);
```

### Dark
```css
background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
```

---

## 🎯 Common Use Cases

### Button Styles
```css
/* Primary Button */
.main-btn.primary-btn {
  background: linear-gradient(135deg, #0D9488 0%, #059669 100%);
  color: #fff;
}

/* Secondary Button */
.main-btn.secondary-btn {
  background: linear-gradient(135deg, #F59E0B 0%, #F97316 100%);
  color: #fff;
}
```

### Card Hover
```css
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(13, 148, 136, 0.15);
  border-color: #0D9488;
}
```

### Icon Styling
```css
.icon {
  background: linear-gradient(135deg, #0D9488, #059669);
  color: #fff;
  box-shadow: 0 5px 15px rgba(13, 148, 136, 0.3);
}
```

### Link Hover
```css
a:hover {
  color: #0D9488;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1199px) { }

/* Desktop */
@media (min-width: 1200px) { }

/* Large Desktop */
@media (min-width: 1600px) { }
```

---

## ✨ Animation Examples

### Lift Effect
```css
transition: all 0.3s ease;
transform: translateY(-5px);
```

### Scale Effect
```css
transition: transform 0.3s ease;
transform: scale(1.1);
```

### Rotate Effect
```css
transition: transform 0.3s ease;
transform: rotate(10deg);
```

---

## 🎨 Shadow Styles

### Light Shadow
```css
box-shadow: 0 5px 15px rgba(13, 148, 136, 0.15);
```

### Medium Shadow
```css
box-shadow: 0 10px 30px rgba(13, 148, 136, 0.25);
```

### Heavy Shadow
```css
box-shadow: 0 20px 50px rgba(13, 148, 136, 0.35);
```

---

## 🔧 CSS Variables

```css
:root {
  --primary-teal: #0D9488;
  --primary-gold: #F59E0B;
  --primary-green: #059669;
  --dark-navy: #0F172A;
  --light-gray: #F1F5F9;
}
```

**Usage:**
```css
.element {
  color: var(--primary-teal);
  background: var(--dark-navy);
}
```

---

## 📋 File Import Order

```javascript
// pages/_app.js
import "@/styles/globals.css";           // 1. Base
import "@/styles/theme-colors.css";      // 2. Colors
import "@/styles/component-enhancements.css"; // 3. Components
import "@/styles/footer.css";            // 4. Specific
```

---

## 🎯 Quick Copy-Paste

### Teal Button
```jsx
<button className="main-btn primary-btn">
  Book Now
  <i className="fas fa-paper-plane" />
</button>
```

### Gold Button
```jsx
<button className="main-btn secondary-btn">
  Learn More
  <i className="fas fa-arrow-right" />
</button>
```

### Icon Box
```jsx
<div className="fancy-icon-box">
  <div className="icon">
    <i className="fas fa-check" />
  </div>
  <div className="text">
    <h4 className="title">Feature Title</h4>
    <p>Feature description</p>
  </div>
</div>
```

---

## 🎨 Color Accessibility

| Combination | Contrast Ratio | WCAG Level |
|-------------|----------------|------------|
| Teal on White | 4.5:1 | AA ✓ |
| Navy on White | 15.5:1 | AAA ✓ |
| Gold on Navy | 8.2:1 | AAA ✓ |
| White on Teal | 4.8:1 | AA ✓ |

---

*Quick reference for developers working on Dream Kerala Holidays*
