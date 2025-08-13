# Styling Guide

This guide explains how to customize the appearance of the SARDINE Lab website.

**NOTE: You don't need to worry about this if you just want to add news, publications, projects, etc.**


## 🎨 Color System

The website uses a consistent color palette defined in the Tailwind configuration.

### Primary Colors
```javascript
// In tailwind.config (in each HTML file)
colors: {
    'sardine-blue': '#1e40af',    // Main brand color
    'sardine-light': '#3b82f6',   // Lighter variant
    'ocean': '#0369a1'            // Accent color
}
```

### Usage Examples
```css
/* Text colors */
.text-sardine-blue      /* Links, highlights */
.text-sardine-light     /* Hover states */

/* Background colors */
.bg-sardine-blue        /* Buttons, badges */
.bg-sardine-blue/5      /* Light backgrounds */
.bg-sardine-blue/10     /* Subtle highlights */

/* Border colors */
.border-sardine-blue    /* Active states */
```

### Changing Brand Colors

To change the main colors, edit the `tailwind.config` in **each** HTML file:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'sardine-blue': '#your-primary-color',
                'sardine-light': '#your-secondary-color', 
                'ocean': '#your-accent-color'
            }
        }
    }
}
```

## 🖼️ Logo and Images

### Updating the Logo
1. Replace `assets/logo-sardine.png` with your logo
2. Update metadata in `assets/metadata.js`:

```javascript
logo: {
    path: "assets/your-logo.png",
    alt: "Your Lab Logo",
    width: "128"  // Adjust size as needed
}
```

### Adding Images
```html
<!-- In news/content -->
<img src="assets/figs/your-image.jpg" alt="Description" />

<!-- Team photos -->
<!-- Add to assets/figs/ and reference in index.html -->
```

### Image Guidelines
- **Format**: PNG for logos, JPG for photos
- **Size**: Optimize for web (< 2MB recommended)
- **Dimensions**: 1200px width max for good quality
- **Alt text**: Always include descriptive alt text

---

For customization, refer to [Tailwind CSS Documentation](https://tailwindcss.com/docs) and [Font Awesome Icons](https://fontawesome.com/icons).