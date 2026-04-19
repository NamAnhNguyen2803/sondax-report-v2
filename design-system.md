# Design System — Báo Cáo Inbound VN (Sondax-v2)

> Editorial Magazine System · Vite + React · CSS Custom Properties

---

## 1. Triết lý thiết kế

**Editorial Magazine** — không phải dashboard SaaS. Cảm giác giống tạp chí nghiên cứu hơn là phần mềm. Typography nặng, whitespace rộng, màu sắc tối giản và có chủ ý.

- Serif làm chủ (Source Serif 4) — tiêu đề, dek, body, pullquote
- Mono cho số liệu và nhãn (IBM Plex Mono) — label, num, folio, kicker
- Sans chỉ cho UI nhỏ (IBM Plex Sans) — nav, chip, kv-v

---

## 2. Color Tokens

### Base Palette (CSS Custom Properties)

| Token | Light | Dark | Dùng cho |
|-------|-------|------|----------|
| `--paper` | `#FAF8F3` | `#1A1814` | Background chính |
| `--paper-2` | `#F2EEE4` | `#231F1A` | Section alt, callout bg |
| `--paper-3` | `#E8E2D2` | `#2C2722` | Bar track, hover bg |
| `--rule` | `#D9D1BE` | `#3D3833` | Border, divider |
| `--rule-soft` | `#E8E2D2` | `#2C2722` | Subtle divider |
| `--ink` | `#1A1814` | `#FAF8F3` | Primary text, stroke |
| `--ink-2` | `#3D3833` | `#E8E2D2` | Body text |
| `--ink-3` | `#6B645B` | `#9A9185` | Label, soft text |
| `--ink-4` | `#9A9185` | `#6B645B` | Placeholder, disabled |

### Semantic / Accent

| Token | Value | Dùng cho |
|-------|-------|----------|
| `--accent` | `#A03321` (light) / `#D4634F` (dark) | Headlines, key numbers, CTA border |
| `--accent-soft` | `#C9A878` | Shoulder month bg, warm highlight |
| `--gold` | `#8A6E2F` | Premium badge (dùng ít) |
| `--ok` | `#5C7A4E` | Green status (điểm đến tốt) |
| `--warn` | `#B8822F` | Yellow status (cẩn thận) |
| `--bad` | `#9C3A2A` | Red status (tránh) |

### Tone Variants (Tweaks Panel)

| Class | Ảnh hưởng |
|-------|-----------|
| `body.dark` | Full dark mode (tất cả tokens flip) |
| `body.tone-warm` | Paper ngả vàng ấm hơn |
| `body.tone-cool` | Paper trung tính, accent xanh slate |
| `body.density-compact` | stage-max 1440px, section padding nhỏ hơn |
| `body.type-sans` | Display/dek chuyển sang IBM Plex Sans |

---

## 3. Typography Scale

### Fonts
```css
--serif: 'Source Serif 4', 'Source Serif Pro', Georgia, serif
--sans:  'IBM Plex Sans', -apple-system, sans-serif
--mono:  'IBM Plex Mono', ui-monospace, monospace
```

### Display Headings (`.h-display`)

| Selector | Size | Weight | Dùng cho |
|----------|------|--------|----------|
| `h1.h-display` | 72px | 400 | Page hero title |
| `h2.h-display` | 44px | 500 | Section heading |
| `h3.h-display` | 28px | 500 | Sub-section |
| `h4.h-display` | 20px | 600 | Card/row title |
| Custom large | 88–96px | 400 | Hero month title |

- Font: `--serif` · Line-height: 1.05 · Letter-spacing: -0.015em
- Responsive: dùng inline `style={{ fontSize: N }}` cho hero scale
- `text-wrap: balance` mặc định

### Text Classes

| Class | Font | Size | Weight | Dùng cho |
|-------|------|------|--------|----------|
| `.h-kicker` | mono | 11px | 500 | Section label (ALL CAPS + `::before` line) |
| `.dek` | serif | 22px | 300 | Subtitle italic |
| `.body` | serif | 17px | 400 | Paragraph text |
| `.label` | mono | 10.5px | 500 | UI label (ALL CAPS) |
| `.num` | mono | variable | — | Tabular numbers |
| `.bigtext` | serif | 64px | 400 | Stat number (home) |
| `.folio` | mono | 10.5px | — | Page corner marker |
| `.pullquote` | serif | 30px | 400 italic | Blockquote feature |
| `.dropcap::first-letter` | serif | 5.2em | 400 | Feature opener |

---

## 4. Layout System

### Stage (max-width container)
```css
.stage { max-width: var(--stage-max); /* 1280px */ margin: 0 auto; padding: 0 40px; }
```
Compact density: `--stage-max: 1440px`.

### Section
```css
.section       { padding-block: 56px; border-bottom: 1px solid var(--rule); }
.section.thin  { padding-block: 32px; }
```
Cuối page: `.section:last-child { border-bottom: none }`

### Grid Classes

| Class | Columns | Gap | Dùng cho |
|-------|---------|-----|----------|
| `.grid-2` | 1fr 1fr | 48px | Two-column editorial |
| `.grid-3` | repeat(3, 1fr) | 32px | Three cards |
| `.grid-4` | repeat(4, 1fr) | 24px | Stat row |
| `.grid-12` | repeat(12, 1fr) | 24px | Free span (span N) |

Span helpers: `.col-4`, `.col-5`, `.col-7`, `.col-8`

---

## 5. Component Library

### Panel
```css
.panel { background: var(--paper); border: 1px solid var(--rule); padding: 24px; }
.panel-tight { padding: 16px; }
```
Tăng border weight (`border: 2px solid var(--ink)`) cho highlighted card.

### Callout
```css
.callout {
  background: var(--paper-2);
  border-left: 3px solid var(--accent);
  padding: 20px 24px;
}
.callout .callout-label { /* mono 10px, ALL CAPS, accent color, block display */ }
```
Dùng cho insight blocks (cơ hội / rủi ro).

### Bar (horizontal)
```css
.bar       { height: 6px; background: var(--paper-3); }
.bar > span { display: block; height: 100%; background: var(--ink); }
.bar.accent > span { background: var(--accent); }
.bar.ok    > span { background: var(--ok); }
```

### Bar Row (OTA share row)
```css
.bar-row { display: grid; grid-template-columns: 140px 1fr 60px; gap: 16px; }
.bar-row-label /* sans 13px */
.bar-row-val   /* mono 13px, text-align: right */
```

### Chip (cross-link entity tag)
- `<Chip to={route} go={go}>` → mono 11px tag với `↗` suffix
- Hover: background flip to `var(--ink)`, text flip to `var(--paper)`
- `.chip.placeholder` → italic, disabled

### XLink (prose inline link)
- Underline `var(--accent)`, hover background fill accent

### Dot / StatusPill
```jsx
<Dot status="green|yellow|red|gray" />
<StatusPill status="green" label="Push mạnh" />
```
Sizes: 8×8px circle.

### Month Strip (heatmap)
```css
.month-strip { display: grid; grid-template-columns: repeat(12, 1fr); gap: 3px; }
.month-strip-cell.peak     { background: var(--accent); color: var(--paper); }
.month-strip-cell.shoulder { background: var(--accent-soft); color: var(--ink); }
.month-strip-cell.cur      { outline: 2px solid var(--ink); } /* current month */
```

### Stat Cell (home stats)
```css
.stat-cell { padding: 28px 0; border-top: 1.5px solid var(--ink); }
```
Structure: `.label` → `.bigtext` → `.note`

### KV Row (key-value pairs)
```css
.kv { display: grid; grid-template-columns: 140px 1fr; padding: 12px 0; }
.kv-k /* mono 10.5px label */
.kv-v /* sans 14px value */
```

### Placeholder Block
```css
.placeholder-block {
  border: 1px dashed var(--rule);
  background: repeating-linear-gradient(-45deg, ...);
}
```

### Tweaks Panel
- Fixed bottom-right, 280px wide
- Segmented controls cho: Tone / Font / Mật độ / Chế độ
- Classes toggled on `body`: `dark`, `tone-warm`, `tone-cool`, `density-compact`, `type-sans`

---

## 6. Navigation System

### Masthead
- Sticky top, `backdrop-filter: blur(8px)`
- Brand left (`Báo Cáo · Inbound VN` + edition sub)
- Nav right: tabs cho Tháng / Tour / Khách / Sàn OTA
- Active state: `border-bottom: 2px solid var(--accent)`

### Breadcrumb
- Sticky bar bên dưới masthead (`background: var(--paper-2)`)
- Mono 11px, last 5 steps visible
- "← Quay lại" button + slash-separated path

### Router (SPA)
```js
route = { tab: 'home'|'months'|'tours'|'markets'|'otas', id?: string|number }
```
- `go(route)` — navigate + scroll to top
- `back()` — pop history
- `goBreadcrumb(idx)` — jump to history point

---

## 7. Animation

```css
@keyframes pageIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.page-anim { animation: pageIn 0.35s ease both; }
```
Apply `.page-anim` to page root `<div>`.

---

## 8. Status Semantics (Destination Traffic Light)

| Status | Color token | CSS class | Meaning |
|--------|-------------|-----------|---------|
| `green` | `--ok` `#5C7A4E` | `.dot.green` | Push mạnh — thời tiết tốt, demand cao |
| `yellow` | `--warn` `#B8822F` | `.dot.yellow` | Cẩn thận — có risk, push có điều kiện |
| `red` | `--bad` `#9C3A2A` | `.dot.red` | Tránh — mùa bão / mưa / experience kém |

---

## 9. Phase Badges

| Mode | Background | Text color | Label prefix |
|------|------------|------------|--------------|
| `execute` | `var(--ink)` | `var(--paper)` | `▶ ĐANG CHẠY` |
| `book` | `var(--accent)` | `var(--paper)` | `◎ ĐANG MỞ BOOK` |
| `prepare` | `var(--paper-2)` | `var(--ink)` | `○ CHUẨN BỊ` |

---

## 10. Naming Conventions

| Pattern | Ví dụ | Dùng khi |
|---------|-------|----------|
| `h-kicker` + `h-display` | Section opener | Mọi section đều có |
| `folio` | `T7 / 2026 · ẤN BẢN` | Page corner (top of detail page) |
| `label` before `bigtext` | Stat cells | Bất kỳ số lớn nào |
| `callout` pair | Cơ hội + Rủi ro | Insight blocks |
| `pullquote` | Trích dẫn editorial | 1 per page max |
| `dropcap` | Feature opener | T7 essay, feature story |

---

## 11. File Structure

```
Projects/Sondax-v2/
├── src/
│   ├── styles.css        ← tất cả CSS tokens + components
│   ├── shell.jsx         ← Masthead, Breadcrumb, Chip, XLink, Dot, SectionHeader, TweaksPanel
│   ├── data.js           ← DATA export (months, tours, markets, otas)
│   ├── main.jsx          ← App root, routing wiring
│   ├── page_home.jsx     ← Trang chủ
│   ├── page_months.jsx   ← Tháng (index + detail)
│   ├── page_tours.jsx    ← Tour
│   ├── page_markets.jsx  ← Thị trường
│   ├── page_otas.jsx     ← Sàn OTA
│   └── page_halong.jsx   ← Hạ Long cruise special
├── design-system.md      ← (this file)
└── reports/
    └── monthly-briefs/   ← T01.md – T12.md (source truth)
```
