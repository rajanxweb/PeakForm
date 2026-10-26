---
name: Kinetic Discipline
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f1eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#5c4037'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0e9'
  outline: '#907065'
  outline-variant: '#e5beb2'
  surface-tint: '#aa3600'
  primary: '#a63500'
  on-primary: '#ffffff'
  primary-container: '#d04400'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59c'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#005ea3'
  on-tertiary: '#ffffff'
  tertiary-container: '#0077cd'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#822700'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#a1c9ff'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#004880'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 58px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Archivo Narrow
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  mono-metric-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.03em
  mono-metric-md:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-performance athletic rigor informed by Swiss International Typographic precision. The aesthetic rejects decorative softness, artificial gradients, and ambient blurs in favor of raw structural clarity, stark high-contrast hierarchy, and purposeful tension. 

Designed for high-intensity strength coaching and performance diagnostics, the interface communicates authority, precision, and physical focus. The visual language evokes printed technical manuals, architectural strength plans, and trackside timing equipment: utilitarian, stark, uncompromising, and exceptionally legible under pressure.

Key Principles:
- **Absolute Rectilinearity**: Every boundary is rigid and unrounded.
- **Architectural Contrast**: Content relies on scale, heavy tabular weight, and structural ink lines to define hierarchy.
- **Editorial Utility**: Functional, clear data presentation prioritized over decorative ornamentation.

## Colors

The palette operates with strict functional boundaries. The canvas is grounded in raw Bone (`#F4F1EA`), offering a physical, tactile paper quality that minimizes visual glare while maintaining high contrast against dense typography.

### Palette Architecture
- **Primary / Signal Accent (`#FF5500`)**: Used surgically for active sets, critical alerts, primary interactive triggers, and high-priority progress metrics. In accordance with strict readability rules, text or iconography set directly over this accent is always deep charcoal Ink (`#111111`), never white.
- **Secondary / Ink (`#111111`)**: Deep charcoal black used for core structural frames, primary typography, and filled inverted containers.
- **Canvas / Bone (`#F4F1EA`)**: The default background plane across all light-mode screens.
- **Hairline / Border (`#E5E2DA`)**: Ultra-clean 1px structural dividing rules on Bone surfaces.
- **Muted / Technical Slate (`#6E6D68`)**: Secondary metrics, unit labels, inactive states, and timestamp markers.
- **Inverse Surface / Heavy Ink (`#141414`)**: Used for inverted modules, with `#262626` utilized for interior dividing rules.

## Typography

The typographic hierarchy enforces clear structural separation:
- **Headlines (Archivo Narrow)**: Set in heavy weights (700/800) with condensed metrics, creating high-impact display moments reminiscent of physical weight plates, scoreboards, and industrial athletic posters. All headlines are left-aligned and feature tight line heights.
- **Body Text (Inter)**: Clean, neutral, and utilitarian. Body copy remains consistently left-aligned across all viewports to preserve clean vertical anchor lines. Centered body text is strictly prohibited.
- **Data & Telemetry (JetBrains Mono)**: Employed for all numerical metrics, timestamps, split times, rep tempos, load values (KG/LBS), and micro-labels. All numerical values must use tabular alignment to guarantee vertical comparison across grid rows.

## Layout & Spacing

The layout is built upon an uncompromising modular grid with visible structural baselines. It relies on strict columnar alignments, sharp edge flushness, and mathematical vertical cadence.

### Grid Systems
- **Mobile (< 768px)**: 4 columns, 1rem (16px) margins, 1rem (16px) gutters. Single-column stacked metrics, with horizontal split-cells for set/rep combinations.
- **Tablet (768px - 1023px)**: 8 columns, 2rem (32px) margins, 1rem (16px) gutters.
- **Desktop (1024px+)**: 12 columns, 3rem (48px) outer margins, 1.5rem (24px) gutters. Maximized viewport width caps at 1440px with content pinned or justified to grid lines.

### Spacing Model
Whitespace is purposeful and deliberate rather than expansive or floaty. Spacing behaves like physical padding in ledger sheets: uniform, compact, and aligned directly to structural 1px borders.

## Elevation & Depth

This system avoids simulated light sources, drop shadows, and Gaussian blurs entirely. All depth is structural, planar, and graphic.

### Elevation Hierarchy
1. **Flat Plane Ground**: Default screen surface set in Bone (`#F4F1EA`).
2. **Hairline Delimitation**: Sections and internal card cells are separated by continuous 1px solid borders in `#E5E2DA` (or `#262626` on dark modules).
3. **Inversion & Cutout**: Depth and prominence are achieved by completely shifting a module's background from Bone (`#F4F1EA`) to Ink (`#111111`) or Accent Orange (`#FF5500`).
4. **Hard Offset Overlays (Drawers & Modals)**: Modals and context menus do not project soft shadows. Instead, they use a solid 1px or 2px `#111111` perimeter line, optionally anchored by a flat, unblurred 4px offset shadow (`box-shadow: 4px 4px 0px #111111`).

## Shapes

The geometric framework is strictly zero-radius (`0px`). Curves, circular chips, and rounded buttons are prohibited. Every surface, button, tag, input field, and visual container ends in clean 90-degree right angles. 

Corners meet with razor-sharp precision to evoke architectural blueprints, calibrated instruments, and raw physical hardware.

## Components

### Buttons
- **Primary**: Solid Accent Orange (`#FF5500`) fill, solid `#111111` text, zero border-radius. Font is Archivo Narrow Bold, uppercase, with 0.05em tracking. Hover state shifts to inverted Ink background (`#111111`) with white text.
- **Secondary**: Transparent background, 1px solid `#111111` stroke, `#111111` text. Hover fills background with `#111111` and flips text to `#F4F1EA`.
- **Destructive**: Transparent background, 1px solid `#D8000C`, red text.
- **Padding**: Vertical 12px, horizontal 20px (compact); vertical 16px, horizontal 28px (large display).

### Badges & Chips
- **Status Chips**: Boxed containers with 1px border. Always set in JetBrains Mono (`label-caps`), uppercase.
- **Active / Accent Tag**: Solid `#FF5500` fill with `#111111` typography (never white on orange).
- **Muted Tag**: Bone background (`#F4F1EA`) with 1px `#E5E2DA` border and `#6E6D68` text.

### Cards & Grid Modules
- Cards do not float. They are framed boxes with a 1px solid `#E5E2DA` border on Bone canvas.
- Modular ledger cards feature internal 1px horizontal and vertical split rules dividing metrics (e.g., Target Load | Actual RPE | Tempo).
- Highlighted workout cards use a 2px solid `#111111` stroke or a solid `#111111` header block with white Archivo Narrow headlines.

### Data Tables & Workout Logs
- Built with monospace numbers (`mono-metric-*`) aligned strictly to the right or to tabular decimals.
- Row dividers use 1px hairlines (`#E5E2DA`). Hovering over a table row fills the entire horizontal row with a subtle tint (`#EAE6DC`).
- Column headers are set in `label-caps`, uppercase, `#6E6D68`, left-aligned for labels and right-aligned for numeric metrics.

### Input Fields
- Flat rectangular field, 1px solid `#111111` border, Bone background (`#F4F1EA`).
- Zero border radius. Focus state thickens border to 2px solid `#FF5500` without exterior focus rings or glowing outlines.
- Input labels sit pinned directly above the input, formatted in `label-caps` in uppercase.

### Checkboxes & Segmented Controls
- **Checkboxes**: 18x18px square box, 1px solid `#111111`, no rounded corners. Checked state is filled `#111111` with a stark white architectural checkmark or solid square insert.
- **Segmented Control**: Full-width bordered container divided into equal rectilinear segments. The active segment is filled with solid `#111111` (white text) or solid `#FF5500` (`#111111` text).