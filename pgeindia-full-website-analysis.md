# PGE India (pgeindia.com) – Complete Website Analysis

**Part 1:** Home page (§1–15) · **Part 2:** About, Services, Contact, Blog, Product hubs, SEO metadata, and all 57 product detail pages (§16–27).

Source analysed: **every page of https://pgeindia.com** (70 working pages found by crawling every internal link) plus `css/style.css` and all images referenced. Part 1 below is the home page (`index.html`).
Company: **PGE Industries Pvt. Ltd. (Pilot Gaskets & Engineers)** – tagline **"SEALING SOLUTIONS SIMPLIFIED"** (from the logo artwork).

> Method note: text, structure, links, CSS values and scripts are read directly from the page source. Image descriptions come from viewing the actual image files. Image-only content (logos, banner text) is transcribed from the pictures. Hex colours not in CSS (e.g. banner photography) are approximate samples.

---

## 1. Page Overview & Tech Stack

| Item | Detail |
|---|---|
| Layout | Single long scrolling home page, centred Bootstrap container (some `container-fluid` full-bleed sections) |
| Framework | Bootstrap 4.1.1 (grid, navbar, carousel, modal, dropdown) |
| JS libs | jQuery 3.2.1 slim + local jQuery, Popper, Owl Carousel 1.3.3 & 2.3.1, WOW.js (scroll animations) + animate.css, dnSlide.js (loaded, not visibly used on home page) |
| Fonts | **Poppins** (weights 200, 300, 400, 500, 600, 700; set as `body` font) and Open Sans (stylesheet loaded; not used by the main rules) |
| Icons | Font Awesome (`css/all.css`) – used for carousel arrows, but arrows are hidden/replaced by image masks |
| Analytics | Google Tag Manager / gtag `G-3F8FEPGZS1` |
| Facebook | `<div id="fb-root">` present (Facebook SDK placeholder) |
| Responsive | Separate desktop and mobile banner blocks (`banner_desktop` / `banner_mobile`), many `@media` breakpoints (≤520, 501–599, 600–676, 677–767, 768–867, 868–991, 1192–1367, 1200–1367, 1500–1600, 1601–1921) |
| Credit | "Developed by Scinotic Solutions Pvt Ltd." (https://scinotic.com/) |

### Section order (top → bottom)
1. Black top contact bar
2. Floating white navbar with logo
3. Hero banner carousel (desktop) / square banner carousel (mobile)
4. "What Makes Us Special" – About blurb + hand/logo graphic + 3 red capability tags
5. "Our Products" – 3 image cards
6. "Our Services" – 2 image cards with Read More buttons
7. "Our Clients" – logo carousel + 2 video thumbnails
8. "Our Testimonials" – full-width red band carousel
9. "Type Approval" – certification logo carousel
10. Thin border section (empty spacer)
11. Dark footer (logo, quick links, address/contact/social)
12. Black-text copyright strip
13. Floating red "back to top" button

---

## 2. Colour Theme (in great detail)

The identity is **PGE Red + Black + White**, with neutral greys from photography. It is an industrial, high-contrast, "engineering brand" palette. Red is the single accent colour and carries almost all emphasis.

### 2.1 Palette extracted from `style.css` (frequency = number of times used in the stylesheet)

| Swatch (hex) | Name | Uses | Where it appears |
|---|---|---|---|
| `#DD2D1F` | **PGE Primary Red** (brand colour) | ~65 | Highlighted heading words ("Special", "Products", "Services", "Clients", "Approval"), "PRODUCTS" in banner text, nav hover/active colour, the three capability tags' background, 15px red bottom border under capability row, entire Testimonials band background, back-to-top button (image), table headers/borders, dropdown outlines, card backgrounds on inner pages |
| `#FFFFFF` | White | ~57 | Navbar background, page background, text on red/black areas, footer text & link colour, testimonials text, tag text |
| `#000000` / `#000` | Black | ~27 | Top header bar background, nav link text, body copy, copyright strip text, "Developed by" link |
| `#E55E54` | Soft red / coral | 6 | Lighter red used on inner-page states |
| `#E35145` | Lighter red | 2 | **Service titles** ("Cutting Facilities", "Testing Facilities") and video captions ("Gasket Installation By PGE", "PGE (PILOT Gasket) Corporate Video") – a slightly softer red than the headings |
| `#DB2D1F` | Red (near-duplicate of primary) | 2 | Inner-page `.content` band; practically the same as primary |
| `#FFC9CB` | Pale pink | 2 | Dropdown menu border and the divider line between dropdown items |
| `#DD2D1F63` | Primary red @ ~39% opacity | 1 | `<hr>` rule colour |
| `#38383875` | Charcoal @ ~46% opacity | 5 | Soft drop-shadows (inner-page navbar, contact card) |
| `#030303BD` | Near-black @ ~74% opacity | 1 | `.bg-dark` overlay utility |
| `#FFFFFFD4` | White @ ~83% opacity | 1 | Milestones box on About page |
| `#A74300` | Burnt orange/brown | 1 | Footer submit-button icon chip (not visible on home) |
| `#997D4A` | Muted gold | 1 | Footer social list item colour (not visible on home) |
| `#4EA3EA` | Light blue | 1 | Footer paragraph text (`.product_PL p`, not present on home) |
| `#455A64` | Blue-grey | 1 | Breadcrumb active text on dark-font inner pages |
| `rgb(25,25,25)` | Near-black | 1 | Lightbox close button background |

### 2.2 Colour roles

- **Brand / accent:** `#DD2D1F` – used for emphasis words in every H1, hover/active state, and every filled block (tags, testimonial band, buttons).
- **Primary text:** pure black on white backgrounds.
- **Inverse text:** pure white on red, black or dark photographic backgrounds.
- **Secondary red:** `#E35145` for sub-titles beneath images (slightly lighter, less aggressive).
- **Borders / dividers:** pale pink `#FFC9CB` (dropdown), translucent red (hr), solid red (15px strip).
- **Page background:** white (`#fff`); no off-white or grey page backgrounds are declared.
- **Heading pattern:** every section title is **two-tone** – first word(s) black, key word red – e.g. "What Makes Us **Special**", "Our **Products**". The Testimonials title flips this: "Our" and "Testimonials" both white on the red band.

### 2.3 Colours inside images (not CSS)
- **Hero banner 1:** vertical gradient from strong coral-red (~`#E0402F` at top) fading to pale pink/cream at the bottom, with dark-grey (~`#3A3A3A`) oil-rig, ship and hills silhouettes; hexagon logo tiles are white; "MAKE IN INDIA" lion is charcoal gear-texture with white text.
- **Hero banner 2:** very dark navy/black night industrial refinery (`#101030`–`#303030`), man's red-and-white check shirt, **safety-yellow helmet** (~`#F2C200`) bearing PGE logo, white rounded label tiles, red arrows pointing up.
- **Mobile banner 1:** warm cream/peach background (`#FDF1E8`-ish) with charcoal lion, red script text and dark grey rig silhouette.
- **Hand-logo:** vivid red arrow (~`#D83018`) with a human hand, PGE logo in red and black.
- **Footer background (`footer-bg.webp`):** very dark brown-black (~`#301010`/`#101010`) photograph of an offshore oil platform at dusk with faint orange glow – gives the footer a dark reddish-black tone.
- **Type-approval strip background (`type-bg.png`):** transparent PNG with a very faint pattern (nearly invisible).
- **Services strip background (`Group197.png`):** transparent PNG with a faint dotted-circle/ring red pattern (visible as a subtle watermark behind the services section).

### 2.4 Typography & text styling

| Element | Size | Weight | Colour | Other |
|---|---|---|---|---|
| Body | – | – | black | Poppins, sans-serif |
| Nav links | 15px | 500 | `#000`, hover/active `#DD2D1F` | 27px left margin between items |
| Dropdown items | 14px | – | black | 7px/20px padding |
| Top bar text | 12–13px | – | white | on black |
| Banner heading ("INDUSTRY LEADING APPROVED PRODUCTS") | 35px | 500 | white, "PRODUCTS" `#DD2D1F` | Uppercase, centred, ~62% wide, placed ~34% from top; WOW `zoomIn` animation |
| Section H1s | 30px | 600 | black + red span | Centred (About blurb left-aligned on desktop) with 25px bottom padding |
| About paragraphs | 12px | – | black | Justified |
| Capability tags | – | – | white on red | Centred text |
| Product captions | 16px | 500 | black | Centred |
| Service titles | 16px | 500 | `#E35145` | Centred |
| Service descriptions | 13px | – | black | Justified, last line centred |
| Video captions | default | 500 | `#E35145` | Centred |
| Testimonial heading ("What our clients say") | 22px | 300 | white | Centred |
| Testimonial quote | 16px | 200 | white | 0.4px letter-spacing |
| Testimonial attribution | 17px | – | white | 20px top padding |
| Footer heading ("Quick Links") | 20px | – | white | |
| Footer links | 14px | – | white | |
| Footer list text | 13px | – | white | |
| Footer tagline | 11px | 200 | white | 0.9px letter-spacing |
| Copyright | 15px | 400 | black | |

---

## 3. Header

### 3.1 Top contact bar (black strip, absolute-positioned at very top, `z-index 9999`)
- Background `#000`, text white, 12–13px.
- **Phone:** icon (`selfie.png`, small red handset outline, 17×17) + **+91 80808 90022**
- **Email:** icon (`email.png`, small red envelope outline, 17×17) + **info@pilotgaskets.com**
- **Social icons** (18×18 each): 
  - LinkedIn (round blue "in") → https://www.linkedin.com/company/pilot-gaskets-and-engineers/
  - Facebook (round blue "f") → https://www.facebook.com/PGEIndia/
  - YouTube (round red play) → YouTube channel `UC_wrWzk0BPyWh3PnMfx3dN` *(the href is malformed – the channel URL is duplicated/concatenated – and `target` is typo'd as `arget`, so it opens in same tab)*
- Right-aligned; left half of the bar is empty.

### 3.2 Main navbar
- White floating bar: absolute, `left:71px`, `top:35px`, width `calc(100% − 142px)`, 10px padding, sits over the banner, `z-index 999`.
- **Logo** `images/logo.png` (168×96; PGE red/black wordmark, "PGE Industries Pvt. Ltd.", "SEALING SOLUTIONS SIMPLIFIED"), shown at 125px width, links to `index.html`.
- **Menu (right-aligned):** Home (active – red) · About Us (`about-us.html`) · **Products ▾** · Services (`service.html`) · Blog (`blog.php`) · Contact Us (`contact-us.html`)
- **Products dropdown:** Sealings (`sealings-product.html`) · Insulation (`insulation-product.html`) · Miscellaneous (`miscellaneous.html`). Square corners, 1px pale-pink border, pale-pink separators.
- Mobile: hamburger toggler using `menu.png` (three thin gold/tan horizontal lines).
- JS: clicking any link sets it `.active` (red).

---

## 4. Hero Banner Carousel

Bootstrap carousel, auto-advance every **3000 ms**, 2 indicator dots, prev/next arrows.

### Desktop (1920×950 images)
**Slide 1 – `banner-1.jpg` (1920×950 JPG)** – no overlaid HTML text (the heading in HTML is commented out). Image content:
- Red-to-pink gradient sky.
- Left: six-/seven-hexagon honeycomb of white tiles with client logos: **TATA, Indian Oil, Mazagon Dock (md), HP (Hindustan Petroleum), Asian Paints, ITC Limited, ONGC**.
- Centre: charcoal gear-textured **lion** with the words **"MAKE IN INDIA"** in white, and below it script text **"The Pride is Ours"** in red with thin red lines either side.
- Right/bottom: dark-grey silhouettes of an **offshore oil rig with cranes** and an **oil tanker ship**, plus rolling hill silhouettes.

**Slide 2 – `banner.png` (1920×950 PNG)** – with live HTML text:
- Heading: **"INDUSTRY LEADING / APPROVED PRODUCTS"** (white, 35px, "PRODUCTS" in red), WOW zoomIn.
- Image: dark night refinery skyline; right side shows a man in red/white checked shirt holding a **yellow hard hat printed with the PGE logo ("PGE Industries Pvt Ltd – Sealing Solutions Simplified")**. Eight white rounded label tiles with approval logos: **WRAS, BAM, ABS, DVGW, TA-Luft (green seal), API (energy API), GL** with **red upward arrows** under them (symbolising approvals/growth).

### Mobile (800×800 images, shown instead of desktop below the responsive breakpoint)
- **Slide 1 – `banner-mobile-1.jpg`**: cream background; vertical column of 7 hex logo tiles on left (TATA, Indian Oil, asianpaints, ONGC, MDL, HP, ITC); large lion "MAKE IN INDIA"; red script "The Pride is Ours"; rig silhouette at bottom.
- **Slide 2 – `banner-mobile.png`**: the same night refinery + helmet man; baked-in text "INDUSTRY LEADING APPROVED PRODUCTS" (white, with "PRODUCTS" red); vertical stack of approval tiles (WRAS, BAM, ABS, GL, DVGW, API, TA-Luft) with red arrows.

---

## 5. Section: "What Makes Us **Special**"

Layout: 4/12 left column image, 8/12 right column text (stacks on mobile). WOW animations: image `fadeInLeft`, text `fadeInRight` (2 s).

**Image:** `hand-logo.png` (677×552, transparent PNG) – a big vivid red upward arrow with an open palm held beneath the **PGE logo (red PGE letters, black "PGE Industries Pvt. Ltd." plate, "SEALING SOLUTIONS SIMPLIFIED")**. Offset slightly (top 26px, right 15px).

**Heading:** What Makes Us *Special* (30px/600; "Special" red)

**Body text (verbatim, including original typos):**

> PGE has always stood in the forefront executing challenging projects in India and worldwIde. PGE is a EIL (Engineers India Ltd) registered company and a part of Government organization supporting for indigenisation of various spare parts. Our team of engineers strive to provide the best economical solution to our clients delivering best sustainable quality gaskets.

> PGE has successfully implemented KANBAN system in its well equipped factory at **Bhiwandi** *(red)*, the plant capacity is of manufacturing over **10000 gaskets** *(red)* per day.

> Today our name is more than an assurance of quality for our clients with a well equipped team we are here to provide world class product and services to our clients.

*(A commented-out line in the source reads "We have all kinds of in-house manufacturing facilities" – not displayed.)*

**Three red capability tags** (solid `#DD2D1F`, white text, sitting on a 15px solid red bottom border line, WOW zoomIn):
1. Cut Gaskets Facilities
2. Spiral Wound Gasket
3. KammProfile Gasket

*(On mobile they become stacked full-width red bars with 30px side margins.)*

Key facts here: EIL-registered; supports indigenisation; KANBAN system; factory in **Bhiwandi**; capacity **10,000+ gaskets/day**.

---

## 6. Section: "Our **Products**"

Three equal cards (4 columns each, 60px side margin), each an image + caption, linking to a product page. Animations: left card `fadeInLeft`, centre `zoomIn`, right `fadeInRight`.

| # | Caption | Link | Image | Image description |
|---|---|---|---|---|
| 1 | **Sealings** | `sealings-product.html` | `p-1.webp` (439×251) | Close-up of a grey **industrial flange coupling** with hex bolts and nuts on a shaft, yellow safety guard behind, a pinkish/red background tint |
| 2 | **Insulations** | `insulation-product.html` | `p-2.webp` (439×251) | Stacks of **rolled grey fibrous insulation blankets/tapes** on warehouse racks, brownish-grey tones |
| 3 | **Miscellaneous** | `miscellaneous.html` | `p-3.png` (439×251) | **Cardboard boxes of various sizes** with coloured labels and two white **rolls of sheet material** in front, on a soft lavender-grey background |

Captions: 16px, weight 500, black, centred. Section padding 45px top / 60px bottom. Heading "Our *Products*" in 30px/600 with red span.

---

## 7. Section: "Our **Services**"

Faint dotted-ring pattern background (`Group197.png`) behind the section. Two cards centred (5 columns each with 1-column gutters). WOW fadeInLeft / fadeInRight.

### 7.1 Cutting Facilities
- **Image:** `s-1.png` (652×368) – a **laser/CNC cutting head** lasering sheet material on a dark bed; glowing yellow-green beam and sparks, dark green/black tones.
- **Title** (red `#E35145`): *Cutting Facilities*
- **Text:** "The in-house availability of cutting facilities and the engineering abilities in designing along with proper nesting skills have made us more efficient in serviceability."
- **Button:** `btn.png` (155×48) – "**Read** **More**" (red text "Read" + white "More" on a red arrow-shaped tag), shown at 99px; links to `service.html#cutting`.

### 7.2 Testing Facilities
- **Image:** `s-2.webp` (652×368) – a **universal tensile testing machine** with a specimen clamped between two grips, yellow/red control knob and handheld controller, bright white/blue lab setting.
- **Title:** *Testing Facilities*
- **Text:** "Our quality system complies with ISO 9001. We focus on delivering quality products as per standards to meet the most significant testing and quality parameters."
- **Button:** same Read More → `service.html#testing`.

Text styling: 13px, justified with the last line centred.

---

## 8. Section: "Our **Clients**"

### 8.1 Client logo carousel (Owl, loop, autoplay 9.5 s, nav arrows, no dots)
Items shown per breakpoint: default 7, ≥1000px 6, ≥768px 5, ≥520px 2, ≥360px 1. Images at 80% width; arrows are image masks (`MaskGroup1/2.png`) placed at left −38px / right −27px.

Seven 178×178 logos (white backgrounds):

| File | Logo |
|---|---|
| `c-1.png` | **TATA** (blue globe-T mark with wordmark) |
| `c-2.png` | **ONGC / MRPL** (olive-green square, ONGC white logo, "MRPL" in Hindi and English) |
| `c-3.png` | **Indian Oil** (orange-and-blue roundel, Hindi "इंडियनऑयल") |
| `c-4.png` | **Mazagon Dock (MDL)** (gold gear with blue shield "md") |
| `c-5.png` | **HP – Hindustan Petroleum** (blue box, red "HP" mark, Hindi title) |
| `c-6.png` | **Asian Paints** (orange/purple "ap" glyph) |
| `c-7.png` | **ITC Limited** (navy triangular ITC mark) |

*(All `alt` text is just "image" – an accessibility gap.)*

### 8.2 Two video thumbnails (657×336, WOW zoomIn)
Clicking opens a Bootstrap modal with an embedded YouTube iframe. **Both modals embed the same video ID `qrzTDSlfVZQ`**, even though the captions differ (likely a content mistake).

1. **`y-1.png`** – grey gradient thumbnail with the PGE logo ("PGE Industries – Pilot Gaskets, Maintenance Specialists") and bold text **"GASKET INSTALLATION PROCEDURES"** with a red YouTube play button. Caption: **"Gasket Installation By PGE"**.
2. **`y-2.webp`** – grey thumbnail showing crowd of small stylised people walking in a diagonal, the "Make in India" lion + PGE logo, the quote **"You Were Born With Wings. Don't Crawl. To Use Them To Fly And Fly. – Dr. Abdul J. Kalam"**, and a red banner **"CORPORATE PROFILE"** with a play button. Caption: **"PGE (PILOT Gasket) Corporate Video"**.

Captions are `#E35145`, centred, weight 500.

---

## 9. Section: "Our **Testimonials**"

Full-width **solid red band (`#DD2D1F`)**, 35px top padding; all text white. Owl carousel (1 item, loop, autoplay every 9.5 s, side arrows using `Path14/Path13.png` image masks at ±62px). Each slide has the small heading **"What our clients say"** (22px, light weight 300).

| # | Quote | Attribution |
|---|---|---|
| 1 | "The PGE team has been instrumental in Indigenizing various critical spares under "Make in India'' initiative and reducing our dependence on foreign supplies." | **Indian Navy** |
| 2 | "We thank the PGE team for their problem solving approach and material knowledge. Their young team is always eager to help develop new products and help with "Atmanirbhar Bharat"." | **Mazagon Dock Shipbuilders Limited** |
| 3 | "We appreciate the support of PGE during shutdowns with their swift reply and ability to develop Sealing Solutions swiftly." | **Indian Oil Corporation Limited** |
| 4 | "The PGE team has a strong focus on providing environmentally safe sealing and insulation solutions in accordance to stringent emission norms." | **Tata Steel Limited** |

Themes: indigenisation / "Make in India" / "Atmanirbhar Bharat", fast shutdown support, environmental compliance.

---

## 10. Section: "Type **Approval**"

Sits on a faint background image (`type-bg.png`, 1920×433, essentially transparent). Owl carousel of seven 170×102 logos (items: ≥1000px 6, ≥768 5, ≥520 2, ≥360 2). Same logos appear on banner slide 2.

| File | Certification body |
|---|---|
| `c-c-1.png` | **WRAS** (Water Regulations Advisory Scheme – blue water-drop + "WRAS") |
| `c-c-2.png` | **BAM** (German Federal Institute for Materials Research and Testing – red/blue chevron + "BAM") |
| `c-c-3.png` | **ABS** (American Bureau of Shipping – navy eagle/anchor mark) |
| `c-c-4.png` | **DVGW** (German Technical and Scientific Association for Gas and Water – orange/blue mark) |
| `c-c-5.png` | **TA-Luft** (green circular seal "Certified for Low Emissions", VDI 2440 / Sec. 5.3.6.4) |
| `c-c-6.png` | **API** (American Petroleum Institute – red "API" with grey "energy") |
| `c-c-7.png` | **GL** (Germanischer Lloyd – white "GL" on teal-blue box with a seal) |

---

## 11. Footer

**Background:** `footer-bg.webp` (1920×421) – dark, reddish-black photograph of an offshore oil platform at sunset, covers the footer. Content is in three columns:

### Column 1 (5/12) – Brand
`footer-logo.png` (339×195): large **red PGE letters**, a **white plate "PGE Industries Pvt. Ltd."**, and white **"SEALING SOLUTIONS SIMPLIFIED"** below; displayed ~236px (362px on mid-size screens).

### Column 2 (3/12) – **Quick Links** (white, 20px)
Home · About Us · Services · Contact US *(Products link is commented out)*.

### Column 3 (4/12) – Contact (white, with round icon badges)
Icons: `f-add.png`, `f-num.png`, `f-mail.png` – 76×76 white-centre circles with grey ring and red line icons (map pin-in-hand, hand-phone, envelope with @).
- **Address:** A-5, 2nd Floor, A Wing, Vimal Apartment, Juhu Lane, C.D. Barfiwala Marg, Above Canara Bank, Andheri (West), Mumbai-400058
- **Phone:** +91 80808 90022
- **Email:** info@pilotgaskets.com
- **Tagline (small, light, widely tracked):** "Connect with us for simplified solutions to your Sealings, Insulation, and Maintenance requirements."
- Social icons again (LinkedIn, Facebook, YouTube), 25px.

### Bottom strip (white, black text)
- Left: "© Copyright 2021 by Pilot Gaskets. All Rights Reserved."
- Right: "Developed by [Scinotic Solutions Pvt Ltd.](https://scinotic.com/)"

### Back-to-top button
Fixed bottom-right (30px / 25px), `arrow-up.png` 72×72 → shown at 45px: **red circle with a white upward chevron/arrow**. Fades in after scrolling 50px, scrolls to top in 400 ms.

---

## 12. Image Inventory (every file referenced on the page)

| File | Size | Use |
|---|---|---|
| `logo.png` | 168×96 | Navbar logo (red PGE + black plate) |
| `footer-logo.png` | 339×195 | Footer logo (red PGE + white plate) |
| `small-Logo.png` | – | Favicon (`<link href>`) |
| `banner-1.jpg` | 1920×950 | Desktop hero slide 1 (Make in India, client hexagons) |
| `banner.png` | 1920×950 | Desktop hero slide 2 (approvals + helmet man) |
| `banner-mobile-1.jpg` | 800×800 | Mobile hero slide 1 |
| `banner-mobile.png` | 800×800 | Mobile hero slide 2 |
| `hand-logo.png` | 677×552 | Special section – hand + red arrow + logo |
| `p-1.webp` / `p-2.webp` / `p-3.png` | 439×251 | Product cards |
| `s-1.png` / `s-2.webp` | 652×368 | Service cards (laser cutting / tensile test) |
| `btn.png` | 155×48 | "Read More" arrow button |
| `c-1…c-7.png` | 178×178 | Client logos |
| `y-1.png` / `y-2.webp` | 657×336 | Video thumbnails |
| `c-c-1…c-c-7.png` | ~170×102 | Type-approval logos |
| `selfie.png`, `email.png` | 17×17 | Top-bar phone & email icons (red outline) |
| `linkedin(2).png`, `facebook(4).png`, `youtube(5).png` | 18×18 | Social icons |
| `f-add.png`, `f-num.png`, `f-mail.png` | 76×76 | Footer contact icons |
| `arrow-up.png` | 72×72 | Back-to-top |
| `menu.png` | 50×50 | Mobile hamburger (tan lines) |
| `footer-bg.webp` | 1920×421 | Footer background |
| `type-bg.png` | 1920×433 | Type-approval background |
| `Group197.png` | 1920×393 | Services background pattern |
| `MaskGroup1/2.png`, `Path13/14.png` | – | Carousel prev/next arrow graphics |

---

## 13. Interactions & Animations

- **WOW.js + animate.css:** `zoomIn`, `fadeInLeft`, `fadeInRight` on headings, cards, tags (2 s duration).
- **Hero carousel:** 3 s auto-slide, indicators + arrows.
- **Owl carousels:** clients, testimonials, type approvals – loop + autoplay (9.5 s); their Font Awesome chevrons are made transparent (`opacity:0`) and replaced by image-mask arrows.
- **Modals:** two YouTube video lightboxes (lazy-loaded iframe).
- **Back-to-top:** fade in after 50px scroll.
- **Nav:** dropdown on click (Bootstrap), red active/hover colour.
- **dnSlide:** script initialised on `.dnSlide-main` (none exist on home page; leftover code with alert popups "HIDEEN!!!" / "SHOW!!!" if triggered).

---

## 14. Observations / Issues Spotted

1. YouTube social link URL is malformed (duplicated `https:/www.youtube.com/...`) and `target="blank"` is typo'd `arget="blank"` on YouTube, footer LinkedIn/Facebook/YouTube links.
2. Both video modals play the same video (`qrzTDSlfVZQ`).
3. Typos in copy: "worldwIde", "a EIL", "KammProfile" (vs "Kamm Profile"), "Indigenizing … 'Make in India''" mismatched quotes.
4. `alt` text is empty or generic ("image", "First slide") on nearly all images – poor accessibility/SEO.
5. jQuery loaded twice (slim 3.2.1 + local) and Bootstrap JS loaded three times, plus two Owl versions – redundant weight.
6. Copyright reads 2021 (stale).
7. Hero slide 1 has no text overlay in HTML (commented out) – the heading exists only on slide 2.
8. Home-page copy is small (12–13px) for body text.
9. Body CSS uses `position:absolute; width:100%` which can complicate layouts.

---

## 15. Quick Brand Summary

- **Brand:** PGE Industries Pvt. Ltd. – gaskets, sealing & insulation, Mumbai (Andheri W. office, Bhiwandi factory).
- **Positioning:** Indigenised, approval-certified industrial sealing for oil & gas, shipbuilding, steel, defence, paints, FMCG.
- **Proof points:** EIL registered · KANBAN · 10,000 gaskets/day · ISO 9001 · API / ABS / GL / BAM / DVGW / WRAS / TA-Luft approvals · clients TATA, ONGC/MRPL, Indian Oil, Mazagon Dock, HP, Asian Paints, ITC, Indian Navy, Tata Steel.
- **Look & feel:** Bold red `#DD2D1F` on white and black, Poppins typography, flat industrial photography, honeycomb hexagons, "Make in India" lion motif, dotted-ring watermark patterns.

---
---

# PART 2 – ALL OTHER PAGES

The site has **70 working pages**: the home page (Part 1), **7 section pages**, **5 product-family list pages** and **57 product detail pages** (see counts below). `product.html` (linked in the nav JS/footer comments) returns **404**.

## 16. Site Map (every URL found by crawling)

```
index.html                         Home (Part 1)
├─ about-us.html                   About Us
├─ service.html                    Services
├─ blog.php                        Blog (empty – "Blog Not Found")
├─ contact-us.html                 Contact Us
├─ sealings-product.html           Products ▸ Sealings   (hub: 5 CNAF family cards + 20 product cards)
│   ├─ tesnit-list.html            → 12 Tesnit pages  (TesnitBA-50, -55, -202, -203, -CF, -GL, -M, -R, -R300, -R302, -REM, -U)
│   ├─ doniflon-list.html          → 4 pages  (Doniflon900E, 2010, 2020, 2030)
│   ├─ grafilit-list.html          → 4 pages  (Grafilit-EM, -SF, -SL, -SP)
│   ├─ micalit-list.html           → 2 pages  (Micalit-F, -P)
│   ├─ doniflex-list.html          → 6 pages  (Doniflex-GCP, -GEM, -GHD, -GLD, -GMD, -GSP)
│   ├─ PiloSeal(SWG).html · SealPro.html · Double-Jacketed.html · RTJ.html
│   ├─ Graphite.html · Aramid.html · Aramid-with-ePTFE.html · Hollow-Rubber-Core.html
│   │   Graphite-with-Inconel-Jacketed.html · gPTFE.html · PTFE.html
│   ├─ Cut-Gaskets.html · Machined-Components.html · Sheets-and-Rods.html · Adhesive-Tapes.html
│   ├─ Rubber-Gaskets.html · O-Rings.html · Rubber-Sheets.html
│   └─ Insulating-Gaskets-Kits.html · PTFE-Envelope-Gaskets.html
├─ insulation-product.html         Products ▸ Insulation (6 cards)
│   └─ Ceramic-Thermal-Insulation · Fiberglass-Thermal-Insulation · Non-Asbestos-MillBoard
│      Silica-Cloth · Welding-Fire-Safety-Furnax-Felt · Aerogel   (.html)
├─ miscellaneous.html              Products ▸ Miscellaneous (3 cards)
│   └─ Break-and-Friction-Liner · FujiFilm-Pre-Scales · Engineering-Plastic  (.html)
└─ product.html                    404 – not found
```

Totals: 1 home + 7 section pages (about, service, contact, blog, sealings, insulation, misc) + 5 family list pages + **57 product detail pages** (28 under the five CNAF families, 4 semi-metallic, 7 gland packing, 4 PTFE, 3 rubber, 2 others, 6 insulation, 3 miscellaneous = 57) = **70 working pages** (+1 broken link).

### Shared elements on every inner page
- Same black top bar, white floating navbar, footer, copyright strip and back-to-top button as the home page (Part 1 §3, §11). Footer Quick Links on inner pages are the same four.
- Inner pages use a **page banner** (full-width image with H1) instead of the carousel; each banner has a separate **mobile banner image** (800×800) shown on small screens.
- Product pages use `navbar.product-nav` style – a *relative* white navbar with a soft grey drop-shadow (`0 0 10px #38383875`) instead of the transparent floating one.
- Page `<title>` and meta tags are page-specific on section pages (see §23) but **all 57 product detail pages and the 5 list pages share the generic title "PGE Industries Pvt Ltd"** and have no meta description.

---

## 17. About Us (`about-us.html`)

**SEO title:** Industrial Gaskets Manufacturers | Gasket Company in India · **Keywords:** Gasket Company in India, Gasket Engineering, Industrial Gaskets Manufacturers · **Description:** "PGE Industries is the best Gasket Company in India. We are Industrial Gaskets Manufacturers and offer a wide range of gaskets."

### 17.1 Banner
- Image `about-us-banner.jpg` (1920×797): a **coral-red tinted** photo of a side-profile engineer in a white hard hat, with a double-exposure of a **refinery/petrochemical plant** (orange glowing towers) inside his head; red tower silhouettes at left.
- Heading (white, 600 weight, right-aligned/offset ~46% from right): **"WE PROVIDE THE INNOVATIVE & ECONOMICAL INDUSTRIAL SOLUTIONS"**.
- Mobile: `about-banner-mobile.png` (800×800) with H1 "About Us".

### 17.2 "About Us" text (13px, justified, last line centred; H1 30px/600 "About **Us**" with red word)
> Established in **1981**, PGE India (PILOT Gaskets) is the prominent manufacturer of Sealing and Insulating products. We are dedicated to being customer-oriented and proactively providing solutions to their needs. We specialise in a variety of high-quality **Non-Asbestos Gaskets, Metallic Gaskets and Semi-Metallic Gaskets** along with a myriad of insulating products. With an array of the latest in-house manufacturing facilities, we have come to the fore as the fastest suppliers in the gasket industries. We strive towards being environmentally conscious and showcase it in our work and our products. Our work spans diverse sectors, aiming at customer satisfaction and sustainable development.

> Our promise towards customer satisfaction has made us a pioneer in several products ranging from Non-Metallic Gaskets to Metal Jacketed Gaskets, to name a few. We aim to make **India Asbestos-Free**, reduce fugitive emissions and ensure there is consistent quality in our deliverables.

### 17.3 Mission / Vision (tab pills on a solid red band `#DB2D1F`)
Bootstrap **nav-pills**: two buttons – "Our Mission" (active: white pill with red text) and "Our Vision" (black bold text on red). Square corners, text below in white, centred, 50px top padding.
- **Mission:** "To provide innovative, economical and environmentally friendly industrial solutions to ensure a holistic and incremental satisfaction of our clients"
- **Vision:** "Our vision is to become the industry leader by being customer-centric, growth-oriented and consistent in our mission to make India Asbestos free and contribute towards Occupational Health and Safety at the factory level."

### 17.4 Certificates & Registration (heading "Certificates & **Registration**")
Six certificate thumbnails (`f1…f6.png`, 331×422; each is a certificate image mounted in a **light-wood picture frame**) that open a **lightbox** with the full-size scan (`w1…w6.jpg`, ~1000×1415–2830):

| Caption | Thumb → Full image | What the certificate shows |
|---|---|---|
| **ISO 9001:2015** | `f2.png` → `w3.jpg` | **IRCLASS Systems and Solutions** "Certificate of Approval" – Quality Management System of *Pilot Gaskets and Engineers*, Bhiwandi factory address, scope: manufacture & supply of non-asbestos cut gaskets, PTFE gaskets, spiral wound gaskets, gland packing, rubber & PTFE sheets, millboard, thermal insulation, furnax felt, etc. Standard ISO 9001:2015; signed by the IRQS head; issue/expiry dates are printed on the scan |
| **ISO 14001:2015** | `f5.png` → `w5.jpg` | IRCLASS certificate – Environmental Management System, corporate office at Vimal Apartment, Andheri (W); two-page document with annexure |
| **ISO 45001:2018** | `f6.png` → `w6.jpg` | IRCLASS certificate – Occupational Health & Safety Management System |
| **MSME** | `f3.png` → `w4.jpg` | Government of India **Udyog Aadhaar Registration Certificate** (MSME) |
| **NSIC** | `f4.png` → `w1.jpg` | **National Small Industries Corporation** "Government Purchase Enlistment Certificate" (pink/green security-printed document) for Pilot Gaskets & Engineers, Mumbai |
| **Engineers India Ltd.** | `f1.png` → `w2.jpg` | **EIL "Procurement Development Department"** letter enlisting the firm for gasket items (Cut gaskets – Asbestos/PTFE (Glass Filled)) |

Layout: caption text (600 weight, 15px, centred) beneath each; section sits on a faint decorative background (`Union4.jpg`, positioned 20% 85%). Lightbox close button = dark circle `rgb(25,25,25)` with white border and white ✕.

### 17.5 "Product We Deal In"
- Desktop image `deals-bg1.png` (1920×612): pale-grey, washed-out macro photo of machinery with a **hub-and-spoke diagram** – the **PGE logo (red/black/white)** in the centre with red dashed arrows to ten product names: **Rubber Sheets · PTFE Moulded Items · Cut Gasket · Welding Blanket · Graphite Sheets · Spiral Wound Gaskets · Ceramic Insulation · Engineering Plastics · Furnax Insulation · Non Asbestos Gland Packing**.
- Mobile image `deals-mobile.png` (360×318) – same diagram.

### 17.6 "PGE Milestones" (timeline, 12 entries)
Desktop: a vertical **3-D hexagonal ribbon timeline** (`mile-bg.png`, 1493×1800) in multi-colour (yellow, orange, pink, purple, blue, light-blue, yellow, blue, green, orange-red, orange, red) with years **1981 · 1989 · 1995 · 2000 · 2005 · 2014 · 2015 · 2016 · 2017 · 2018 · 2019 · 2020**; entries alternate left/right (right-aligned / left-aligned) over a white `#FFFFFFD4` box. Mobile: `milestone-mobile.png` (446×2065) single-column version with tiny thumbnails.
Each entry has a 227×143 photo (`m-1…m-12.jpg`) and 14px/500 caption. In year order:

| # | Year | Caption (verbatim) | Photo |
|---|---|---|---|
| 1 | 1981 | Establishment for Sealing Products | `m-1.jpg` – stainless pipework, flanges & valves in a plant |
| 2 | 1989 | Contract With India's Largest Shipment Line | `m-2.jpg` – large red-hulled cargo ship at dusk |
| 3 | 1995 | Export To Saudi Arabia, Bahrain, & Middle East | `m-3.jpg` – container ship at sea |
| 4 | 2000 | Contact With India's Leading Cement Company | `m-4.jpg` – cement plant towers at blue hour |
| 5 | 2005 | Introduced Insulation Solutions Into Portfolio | `m-5.jpg` – insulated, foil-clad pipe with a worker |
| 6 | 2014 | Established A Non-Asbestos Policy Across Company | `m-6.jpg` – green/blue "100% ASBESTOS FREE PRODUCT" laurel seal |
| 7 | 2015 | Technology Tie-Up With DONIT Tesnit D.O.O, Slovenia. | `m-7.jpg` – **DONIT** wordmark (maroon/navy) |
| 8 | 2016 | Centralized All Occupation At Andheri, Mumbai. | `m-8.jpg` – modern white office |
| 9 | 2017 | Set-Up A 7000sqft Manufacturing Unit In Thane, Maharashtra. | `m-9.jpg` – two engineers in hard hats inside a warehouse/factory |
| 10 | 2018 | Indigenization Of Critical Spares Under Make In India | `m-10.jpg` – submarine wrapped in the Indian tricolour at launch |
| 11 | 2019 | Major Expansion In Production With The CNC Automation | `m-11.jpg` – CNC milling a metal block |
| 12 | 2020 | Approval From Engineers India Ltd. | `m-12.jpg` – **Engineers India Limited** logo ("A Navratna Company") |

> Note: image-to-year mapping is by order of appearance; years are read from the timeline graphic. Milestone 9 says the *factory* was set up in **Thane**; the contact page lists the factory in **Bhiwandi, Thane district**.

---

## 18. Services (`service.html`)

**SEO title:** Indian Gasket Company | Gasket manufacturers in India · **Description:** "Indian Gasket Company PGE Industries is Located in Mumbai. We are Gasket Manufacturers in India, we offer Laser & CNC Cutting services."

- **Banner:** `service-banner.jpg` (1920×797) – cool grey/white **CNC machining centre**: a spindle with blue coolant hoses and orange nozzles cutting a metal part. H1 **"Our Service"** in white (600 weight, large top margin 310px). Mobile: `service-banner-mobile.png` 800×800.
- Heading: "Our **Service**" (30px/600, red word). Three alternating image/text rows, each image framed with **thin red L-shaped corner brackets** (top-left / bottom-right) from `line-div` backgrounds (`s-s-1-bg.png`, `s-s-2-bg.png`). Service headings are **20px, red `#DD2D1F`, weight 600**; descriptions **12px, weight 500**.

| # | Anchor | Image | Heading | Copy |
|---|---|---|---|---|
| 1 | `#cutting` (target of home "Cutting Facilities" button) | `s-s-1.png` (695×435) – laser cutting head with a red beam on a dark bed | **Laser and CNC Cutting** | "The in-house availability of cutting facilities and the engineering abilities in designing along with proper nesting skills have made us more efficient in serviceability. These modern types of equipment have not only helped us to reduce the lead time but also minimizes the wastage of raw material, thereby reducing the scrap generated." |
| 2 | `#testing` | `s-s-2.png` – tensile testing machine with specimen in grips, yellow/red handset | **Inhouse Testing Facilities** | "Our quality system complies with ISO 9001. We focus on delivering quality products as per standards to meet the most significant testing and quality parameters. This in-house testing facilities enable us to test the materials under **ASTM F36J, ASTM F146, ASTM F152, and DIN standards**. Our Research and Development team. We also have **fire safety testing** capability for any products as per requirement" *(sentence "Our Research and Development team." is left unfinished in the source)* |
| 3 | – | `s-s-3.png` – operator pressing the touch panel / E-stop console of a **teal industrial machine** | **Technical Support and Design** | "Our vision is to make India asbestos-free. We also provide **seminars and workshops** to promote asbestos awareness and provide consultation on changing to safer **nonAsbestos alternatives** with required third party approval. We are keen to provide **training on gasket installation** techniques and methods. For our clients, we have developed **special software to ease the selection of gaskets** at their end. Feel free to contact us or reach us via email to share further details." |

Icon `pin(3).png`-style line icons are not used here; the red corner brackets are the only decorative element.

---

## 19. Contact Us (`contact-us.html`)

**SEO title:** Manufactured Engineering Gaskets | PGE Industries · **Description:** "PGE Industries Pvt Ltd is one of the best Manufactured Engineering Gaskets, we manufacture over 10000 gaskets per day."

- **Banner:** `contact-us-banner.png` (1920×797) – soft beige/cream background with **four wooden spheres** carrying white icons: phone, envelope, "@" and chat bubble. H1 **"Contact Us"** in **black** (the only banner with a black title besides the product ones). Mobile: `contact-us-banner-mobile.png`.
- **Red band** (`#DD2D1F`, white, weight 100 / thin, centred, 10px padding): **"Need a Gasket ? Get In Touch"**.
- Heading "Contact **Us**".
- **Details panel** (white card, `box-shadow: 0 0 10px 6px #38383875`, 20px padding), headings **16px / 600 / red `#DD2D1F`**, text 13px/500:
  - 📍 (`pin(3).png`, 58×58 line icon) **Corporate office:** A-5, 2nd Floor, A Wing, Vimal Apartment, Juhu Lane, C.D.Barfiwala Marg, Above Canara Bank, Andheri (West), Mumbai-400058 – link **"View on map"** → `https://goo.gl/maps/MHmegr6ZTqUWCNHr7`
  - **Factory:** Gala 101/102 E-Block, Krishna Complex, Valgoan, Dapoda, Anujur Mankoli Road, Bhiwandi, Thane 421302, Maharashtra, India.
  - 📞 (`selfie-1.png`) **Tel:** +91 80808 90022
  - ✉️ (`email-1.png`) **Email Address:** info@pilotgaskets.com
- **Enquiry Form** (heading "Enquiry Form"): HTML form, `method=POST`, `action="#"` (not wired to any server – submission goes nowhere):

| Field | Type | Details |
|---|---|---|
| Name * | text | `name`, max 20 chars, required |
| Mobile * | `mobile` (non-standard) | `phone`, required |
| Email ID | email | optional |
| Product | select | placeholder "Product" (disabled/selected) → **Sealings · Insulation · Other** |
| Your Message | textarea | 4 rows |
| **Send** | submit button | red button with a white arrow image `caro-right.png` |

---

## 20. Blog (`blog.php`)

**SEO title:** Engineering Gasket Company | Gasket suppliers in India
- **Banner:** `blog-banner.png` (1920×567) – warm sepia photo of hands typing on a laptop; H1 **"Blog"** in white. Mobile reuses `service-banner-mobile.png`.
- Sidebar-style heading **"Recent post"**, newsletter block: **"Subscribe to our newsletter and stay updated on the latest news"** + **Subscribe** button + small text "We Promise not to spam your inbox!"
- Body: illustration `Blog-not-found.png` (1200×890) – flat vector of a tired person slumped over a desk with plants, gears, a monitor and a PC tower in **pale blue/grey with red and green accents**, captioned **"Blog Not Found"** in bold black Poppins. i.e. **no blog posts are published**.

---

## 21. Product Hub Pages

All three use the same layout: banner → page H1 → cards grid (image + title) with a breadcrumb "Home > Product > …" on detail pages. Card images have **rounded corners (20px) and a bottom white→red gradient** that carries the white 10px/600 caption (`.product-div p`); `product-div.small img` is 198px wide.

### 21.1 Sealings (`sealings-product.html`)
**Title:** Industrial Sealing Products | EPTFE | Non Asbestos Gasket · **Description:** "PGE Industries is a Manufacturer of Industrial Sealing Products. We specialize in PTFE, Rubber, Non-Asbestos Gaskets, and Gland Packing."
- **Banner** `product-banner.png` (1920×561): **pale pink `#FFCCCC`-ish** background with a 3-D render of three **grey/steel gasket rings** at lower-right; H1 "Sealings **Products**" – black with red accent. Mobile `product-banner-mobile.png`.
- **Group headings** in black 3rd-level: **Gasket** (sub-line "CNAF Cut Gaskets and Sheets"), **Semi Metallic and Metallic Gaskets**, **Gland Packing**, **Sealing Solutions** (sub-labels *PTFE*, *Rubber*, *Others*). Sub-headings in red 600.

| Group | Card | Thumb | Looks like | Links to |
|---|---|---|---|---|
| Gasket (CNAF) | Tesnit | `p-p1.png` | stack of **light-green** non-asbestos sheets stamped DONIT/TESNIT BA-50 | `tesnit-list.html` |
| | Doniflon | `p-p-2.png` | **mauve-grey** PTFE sheets stamped DONIT/DONIFLON | `doniflon-list.html` |
| | Grafilit | `p-p-3.png` | **black** graphite sheets stamped GRAFILIT | `grafilit-list.html` |
| | Micalit | `p-p-4.png` | **golden/ochre** mica sheets stamped MICALIT | `micalit-list.html` |
| | Doniflex | `p-p-5.png` | **dark grey** sheets stamped DONIFLEX | `doniflex-list.html` |
| Semi-Metallic & Metallic | PiloSeal (SWG) | `pro-1.png` | gold/silver **spiral wound** gaskets | `PiloSeal(SWG).html` |
| | SealPro | `pro-2.png` | steel serrated ring gasket | `SealPro.html` |
| | Double Jacketed | `pro-3.png` | flat silver metal-jacketed rings | `Double-Jacketed.html` |
| | RTJ | `pro-4.png` | oval polished **ring-type joint** ring | `RTJ.html` |
| Gland Packing | Graphite | `pro-5.png` | black braided graphite square packing | `Graphite.html` |
| | Aramid | `pro-6.png` | **yellow** braided aramid packing | `Aramid.html` |
| | Aramid with ePTFE | `pro-7.png` | white-and-yellow braided packing | `Aramid-with-ePTFE.html` |
| | Hollow Rubber Core | `pro-8.png` | black braided packing with hollow core | `Hollow-Rubber-Core.html` |
| | Graphite with Inconel Jacketed | `pro-9.png` | metallic-mesh jacketed packing | `Graphite-with-Inconel-Jacketed.html` |
| | gPTFE | `pro-10.png` | black braided packing (labelled "Pilot Gaskets") | `gPTFE.html` |
| | PTFE | `pro-11.png` | white braided PTFE packing | `PTFE.html` |
| Sealing Solutions · PTFE | Cut Gaskets | `pro-12.png` | white PTFE flat gaskets/rings | `Cut-Gaskets.html` |
| | Machined Components | `pro-13.png` | white machined PTFE rings, seats, plugs | `Machined-Components.html` |
| | Sheets & Rods | `pro-14.png` | white PTFE rods & sheets | `Sheets-and-Rods.html` |
| | Adhesive Tapes | `pro-15.png` | brass/bronze housing with white ePTFE tape | `Adhesive-Tapes.html` |
| · Rubber | Rubber Gaskets | `pro-16.png` | black rubber flange gaskets | `Rubber-Gaskets.html` |
| | O Rings | `pro-17.png` | coloured (red, green, black, orange) O-rings | `O-Rings.html` |
| | Rubber Sheets | `pro-18.png` | roll of black rubber sheet | `Rubber-Sheets.html` |
| · Others | Insulating Gaskets Kits | `pro-19.png` | grey/black/yellow gasket-kit components | `Insulating-Gaskets-Kits.html` |
| | PTFE Envelope Gaskets | `pro-20.png` | white/pale-blue envelope gaskets | `PTFE-Envelope-Gaskets.html` |

The Sealings page background uses a faint red pattern (`pro-bg.png`, `xp_div_product`).

### 21.2 Insulations (`insulation-product.html`)
**Title:** Insulation Products | Insulation sheets · **Description:** "PGE Industries Pvt Ltd manufacturer and supplier of Insulation Products like ceramic, fiberglass, silica cloth, welding, and Insulation sheets."
- Banner `product-banner-1.png` (1920×561): extreme close-up of a **woven fabric (pale yellow/green/white threads)**; H1 "Insulations **Products**".
- Cards: Ceramic Thermal Insulation (`cti.png`, white blanket roll on blue), Fiberglass Thermal Insulation (`fti.png`, white woven cloth), Non-Asbestos MillBoard (`nam.png`, stacked grey boards), Silica Cloth (`sc.png`, beige cloth), Welding & Fire Safety Furnax Felt (`wfsff.png`, red-hot spot on a welding blanket), Aerogel (`Aerogel.png`, hand pressing a white aerogel sheet).

### 21.3 Miscellaneous (`miscellaneous.html`)
**Title:** Donit Gasket | Expanded PTFE · **Description:** "PGE Industries Pvt Ltd is a leading manufacturer of Industrial Miscellaneous Products. We manufacture all types of EPTFE, Donit (Doniflon)."
- Banner `product-banner-2.png` (1920×561): pale pink background with a **film-reel/roll of pressure film** at centre-right; H1 "Miscellaneous **Product**".
- Cards: Break and Friction Liner (`Break-and-Friction-Liner.png`, tan friction band), FujiFilm Pre-Scales (`FujiFil- Pre-Scales.png` – stacked brown cartons with white film rolls), Engineering Plastic (`Engineering-Plastic.png`, coloured plastic rods/sheets).

---

## 22. Product Family List Pages (5)

Each list page (`tesnit-list`, `doniflon-list`, `grafilit-list`, `micalit-list`, `doniflex-list`) is: breadcrumb → family H3 → grid of rounded cards (image + name + link) → (Tesnit, Doniflon, Grafilit, Micalit only) a **YouTube banner `pro-list-you.png`** with embedded video `https://www.youtube.com/embed/qrzTDSlfVZQ` (same video as the home page). Doniflex list has no video. Page title for all: "PGE Industries Pvt Ltd".

| Page | Cards (thumb file) |
|---|---|
| Tesnit | BA-50 (`pro-list-1`), BA-55 (`-2`), BA-202 (`-3`), BA-203 (`-4`), BA-CF (`-5`), BA-GL (`-6`), BA-M (`-7`), BA-R (`-8`), BA-R300 (`-9`), BA-R302 (`-10`), BA-REM (`-11`), BA-U (`-12`) |
| Doniflon | 900E, 2010, 2020, 2030 (`Doniflon900E.png`, `Doniflon2010.png`, …) |
| Grafilit | EM, SF, SL, SP (`GrafilitEM.png`, …) |
| Micalit | F (`MicalitF.png`), P (`Micalitp.png`) |
| Doniflex | GCP, GEM, GHD, GLD, GMD, GSP (`Doniflex-GCP.png`, …) |

---

## 23. SEO Metadata Summary

| Page | `<title>` | Keywords | Description |
|---|---|---|---|
| index | PGE Industries Pvt Ltd \| Pilot Gasket | PGE Gasket, Pilot Gasket, PGE | PGE Industries is a leading gasket manufacturing company in India. We manufacture and supply Pilot Gasket all Over World. |
| about-us | Industrial Gaskets Manufacturers \| Gasket Company in India | Gasket Company in India, Gasket Engineering, Industrial Gaskets Manufacturers | PGE Industries is the best Gasket Company in India… |
| service | Indian Gasket Company \| Gasket manufacturers in India | Indian Gasket Company, Gasket manufacturers, Gasket manufacturers in India | …Located in Mumbai… Laser & CNC Cutting services. |
| contact-us | Manufactured Engineering Gaskets \| PGE Industries | Manufactured Engineering Gaskets | …manufacture over 10000 gaskets per day. |
| sealings-product | Industrial Sealing Products \| EPTFE \| Non Asbestos Gasket | Industrial Sealing Products, Non Asbestos Gasket, EPTFE | …PTFE, Rubber, Non-Asbestos Gaskets, and Gland Packing. |
| insulation-product | Insulation Products \| Insulation sheets | Insulation Products, Insulation sheets | …ceramic, fiberglass, silica cloth, welding, and Insulation sheets. |
| miscellaneous | Donit Gasket \| Expanded PTFE | Donit Gasket, Expanded PTFE | …Industrial Miscellaneous Products… EPTFE, Donit (Doniflon). |
| blog.php | Engineering Gasket Company \| Gasket suppliers in India | Engineering Gasket Company, Gasket suppliers, Gasket suppliers in India | …Engineering Gasket Company that manufactures and Gasket suppliers in India. |
| 5 list pages + 57 detail pages | **PGE Industries Pvt Ltd** (generic) | none | none |

---

## 24. Product Detail Page Template & Styling

Every product detail page shares one template:

1. **Breadcrumb** (white background): `Home > Product > <Family>` – "Home" in red-black link style, active item red/600 (`.bc-icons-2 .breadcrumb-item.active`).
2. **Spec card section** (`list-div`, over a red dotted-ring strip `Rectangle136.png` repeated across the top at 40px high):
   - **Left (5/12):** product photo (PNG, ~293×350 cut-out, transparent).
   - **Right (7/12):** a **solid red `#DD2D1F` rounded card** (`border-radius: 20px`) with title in white H3, then label/value pairs – each label has a small **white circle-mask bullet icon `MaskGroup16.png`**, label in **black 600** (`.desc-name`), value in **white 13px** (`.desc-loop`, 28px indent).
   - Label sets vary: *Material, Composition, Colour, Properties, Industries, Certificates, Equivalent* (CNAF sheets) · *+ Application* (Doniflon, Grafilit EM) · *Construction, Temperature, Pressure, pH, Advantages* (gland packing) · *Information* (generic products) · *Temperature, Applications* (ceramic).
3. **Table section** (CNAF sheets only): centred red H4 "Download Technical Document" + red square **"Click Here"** button (`#DD2D1F`, no radius, 600 weight) → modal "To receive brochure, please fill credentials. *All fields are mandatory." with fields Full Name*, Company Name*, Email ID*, Mobile Number*, **Submit** (form `action="#"`, no backend). Below: spec table – 14px/600 text, **red bottom borders `1px solid #DD2D1F`**, rows: Density (DIN 28090-2, g/cm³), Stress Resistance (DIN 52913, MPa, at 175 °C / 300 °C / 150 °C), Specific Leak Rate (DIN 3535-6, mg/(s·m)), **Max OperatinG** (sic) Peak Temp, Continuous Temp, Steam, Pressure.
4. **"Need More info or Got Queries ? Contact Us"** call-to-action (→ `contact-us.html`) on CNAF pages.
5. Standard footer.

---

## 25. Complete Product Catalog (all 57 detail pages, verbatim specs)

Source = each product's own page. Typos in the source are preserved (e.g. "uitable", "hollo", "Max OperatinG").


### Sealings → Gasket → CNAF Cut Gaskets and Sheets

#### Tesnit® BA-50  
`TesnitBA-50.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-50.png`

- **Material:** BA-50
- **Composition:** Aramid fibers bonded with NBR. Available with wire reinforcement on request.
- **Colour:** Light green
- **Properties:** Excellent chemical resistance and good dynamic resistance; Good resistance to water, gases, fuels, and oils.
- **Industries:** Gas supply, food industry, chemical industry, potable water supply, shipbuilding.
- **Certificates:** DIN-DVGW DIN 3535-6, DVGW KTW, Germanischer Lloyd, TA-Luft (VDI 2440), WRAS, EC 1935/2004, DVGW W270, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.8 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 25 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.08 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 280 |
| Continuous Temp |  | °C | 220 |
| Steam |  | °C | 180 |
| Pressure |  | Bar | 80 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-55  
`TesnitBA-55.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-55.png`

- **Material:** BA-55
- **Composition:** Special synthetic fibers bonded with NBR. Available with wire reinforcement on request.
- **Colour:** Dark green
- **Properties:** Excellent thermal properties and very good steam resistance.
- **Industries:** Potable water supply, gas supply, pumps.
- **Certificates:** BAM (Oxygen), DIN-DVGW DIN 3535-6, DVGW KTW, DVGW W270, DVGW VP 401, DVGW VP 401 (5 bar), EC 1935/2004, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.8 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 35 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 30 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.08 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 350 |
| Continuous Temp |  | °C | 270 |
| Steam |  | °C | 230 |
| Pressure |  | Bar | 100 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-202  
`TesnitBA-202.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-202.png`

- **Material:** BA-202
- **Composition:** Organic fibers bonded with NBR. Available with wire reinforcement on request.
- **Colour:** Pink / Red
- **Properties:** Very good chemical resistance against gases, oils, and fuels. Also highly water-resistant.
- **Industries:** Pipeline systems, water supply industry, machine building
- **Certificates:** 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** NonAsbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on the above-listed certificates to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.8 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 20 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa |  |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.06 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 180 |
| Continuous Temp |  | °C | 140 |
| Steam |  | °C | 120 |
| Pressure |  | Bar | 40 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-203  
`TesnitBA-203.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-203.png`

- **Material:** BA-203
- **Composition:** Aramid fibers bonded with NBR. Available with wire reinforcement on request.
- **Colour:** Yellow
- **Properties:** Good resistance to water, gases, oils, and fuels.
- **Industries:** Shipbuilding, the water supply industry.
- **Certificates:** Germanischer Lloyd, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on the above-listed certificates to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.8 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 25 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.08 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 250 |
| Continuous Temp |  | °C | 200 |
| Steam |  | °C | 160 |
| Pressure |  | Bar | 50 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-CF  
`TesnitBA-CF.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-cf.png`

- **Material:** BA-CF
- **Composition:** Carbon fibers bonded with NBR. On request available with wire reinforcement or expanded stainless steel.
- **Colour:** Black
- **Properties:** Excellent resistance to steam and strong alkaline media.
- **Industries:** Chemical industry, petrochemicals, steam supply.
- **Certificates:** BAM (Oxygen), DIN-DVGW DIN 3535-6, DVGW VP 401, DVGW KTW, Germanischer Lloyd, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.7 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 35 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 30 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.1 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 400 |
| Continuous Temp |  | °C | 300 |
| Steam |  | °C | 280 |
| Pressure |  | Bar | 100 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-GL  
`TesnitBA-GL.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-gl.png`

- **Material:** BA-GL
- **Composition:** Synthetic fibers bonded with NBR. On request available with wire reinforcement of expanded stainless steel
- **Colour:** Green
- **Properties:** Superior torque retention and good steam resistance. Excellent thermal resistance in combination with low gas permeability.
- **Industries:** Steam supply, potable water supply, gas supply, shipbuilding, power plants.
- **Certificates:** DIN-DVGW DIN 3535-6, DVGW VP 401, DVGW KTW, BAM (Oxygen), WRAS, TA-Luft (VDI 2440), GermanischerLloyd, EC 1935/2004, API 607, 100% Asbestos- FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.8 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 38 |
| 16 h, 50 MPa, 300°C | DIN 52913 | MPa | 33 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.03 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 440 |
| Continuous Temp |  | °C | 350 |
| Steam |  | °C | 250 |
| Pressure |  | Bar | 120 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-M  
`TesnitBA-M.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-m.png`

- **Material:** BA-M
- **Composition:** Aramid and engineered mineral fibers bonded with NBR. On request is available with wire reinforcement of expanded stainless steel.
- **Colour:** Grey / Green
- **Properties:** Excellent resistance to steam, oils, fuels, gases, freons, solvents, non-aggressive chemicals, hot water, and other substances.
- **Industries:** Heat exchangers, boilers, radiators, steam supply, power plants.
- **Certificates:** BAM (Oxygen), DIN-DVGW DIN 3535-6, DVGW VP 401, DVGW KTW, TA-Luft (VDI 2440), WRAS, EC 1935/2004, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.7 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 35 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 27 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.05 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 440 |
| Continuous Temp |  | °C | 350 |
| Steam |  | °C | 300 |
| Pressure |  | Bar | 120 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-R  
`TesnitBA-R.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-r.png`

- **Material:** BA-R
- **Composition:** Aramid fibers bonded with NBR, wire reinforcement.
- **Colour:** Black
- **Properties:** Excellent mechanical, dynamic, and thermal resistance and blow-out safety.
- **Industries:** The automotive industry, petrochemicals, shipbuilding.
- **Certificates:** Germanischer Lloyd, BAM (Oxygen), 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 2.0 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 30 |
| 16 h, 50 MPa, 300°C | DIN 52913 | MPa | 25 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.08 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 400 |
| Continuous Temp |  | °C | 350 |
| Steam |  | °C |  |
| Pressure |  | Bar | 140 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-R300  
`TesnitBA-R300.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-r300.png`

- **Material:** BA-R300
- **Composition:** Inorganic fibers, NBR bonded with a strong wire mesh reinforcement.
- **Colour:** Black
- **Properties:** Extreme dynamic and thermal resistance.
- **Industries:** The automotive industry, petrochemicals, shipbuilding.
- **Certificates:** Germanischer Lloyd, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 3.2 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 46 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 40 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 550 |
| Continuous Temp |  | °C | 450 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-R302  
`TesnitBA-R302.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-r302.png`

- **Material:** BA-R302
- **Composition:** Inorganic fibers, NBR bonded with a strong wire mesh reinforcement.
- **Colour:** Black
- **Properties:** Superior dynamic and thermal resistance. Excellent blow-out safety.
- **Industries:** The automotive industry, petrochemicals, shipbuilding.
- **Certificates:** Germanischer Lloyd, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 3.7 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 48 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 45 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 650 |
| Continuous Temp |  | °C | 600 |
| Steam |  | °C | 180 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-REM  
`TesnitBA-REM.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-rem.png`

- **Material:** BA-REM
- **Composition:** A balanced mixture of fibers reinforced by expanded stainless steel.
- **Colour:** Green
- **Properties:** This material combines a high blow-out resistance with very high pressure, temperature, and surface stress resistance. Whilst at the same time maintaining high torque retention with good chemical resistance.
- **Industries:** Gas supply, steam supply, power plants.
- **Certificates:** 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 2.2 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 43 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 38 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.05 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 460 |
| Continuous Temp |  | °C | 370 |
| Steam |  | °C | 250 |
| Pressure |  | Bar | 150 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Tesnit® BA-U  
`TesnitBA-U.html` · breadcrumb: Home > Product > Tesnit · image: `images/TesnitBA-u.png`

- **Material:** BA-U
- **Composition:** Aramid fibers bonded with NBR. Available with wire reinforcement or expanded stainless steel on request.
- **Colour:** Blue
- **Properties:** Excellent chemical resistance, good mechanical and thermal properties, and low gas permeability.
- **Industries:** The food industry, gas supply, potable water supply, compressors, pumps, general-purpose usage.
- **Certificates:** BAM (Oxygen), DIN-DVGW DIN 3535-6, SVGW DIN 3535-6, DVGW VP 401, DVGW KTW, DVGW W270, TA-Luft (VDI 2440), WRAS, Germanischer Lloyd, ABS, EC 1935/2004, AGA 8140 G (Class III), 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.7 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 27 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 23 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.05 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 350 |
| Continuous Temp |  | °C | 250 |
| Steam |  | °C | 200 |
| Pressure |  | Bar | 100 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflon® 900E  
`Doniflon900E.html` · breadcrumb: Home > Product > Doniflon · image: `images/D-900.png`

- **Material:** 900E
- **Composition:** Expanded PTFE or Soft PTFE
- **Colour:** White
- **Properties:** It is suitable for nearly all media and for many applications including pressure-sensitive connections like Glass Lined Piping.
- **Industries:** Food & beverage industry, pharmaceutical industry, chemical industry, pulp & paper industry.
- **Application:** Performance is far far superior to Virgin PTFE Gaskets, PTFE Envelope Gaskets and PTFE Filled Seals.
- **Certificates:** On request, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 0.9 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 150 °C | DIN 52913 | MPa | 16 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.002 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | -200 |
| Continuous Temp |  | °C | 260 |
| Pressure |  | Bar | 100 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflon® 2010  
`Doniflon2010.html` · breadcrumb: Home > Product > Doniflon · image: `images/D-2010.png`

- **Material:** 2010
- **Composition:** Modified PTFE resin filled with hollo micro-glass beads
- **Colour:** Blue
- **Properties:** Suitable for pressure sensitive flanges such as glass lined, ceramic flanges, glass reinforced plastic flanges and uneven or distorted flanges. Chemically suitable for almost all chemicals with the exception of molten alkali metals and fluorine compounds.
- **Industries:** Food & beverage industry, pharmaceutical industry, chemical industry, pulp & paper industry.
- **Application:** Performance is far superior to Virgin PTFE Gaskets, PTFE Envelope Gaskets and PTFE Filled Seals. Replaces Glass Filled PTFE.
- **Certificates:** On request, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Insist on all the above listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.5 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 150 °C | DIN 52913 | MPa | 14 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.14 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | -200 |
| Continuous Temp |  | °C | 260 |
| Pressure |  | Bar | 60 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflon® 2020  
`Doniflon2020.html` · breadcrumb: Home > Product > Doniflon · image: `images/D-2020.png`

- **Material:** 2020
- **Composition:** Modified PTFE resin filled with silica
- **Colour:** Fawn
- **Properties:** Suitable for concentrated acids, alkalis, solvents, fuels and steam. Not suitable for molten alkali metals and fluorine compounds. Very low gas permeability.
- **Industries:** Food & beverage industry, pharmaceutical industry, chemical industry, pulp & paper industry.
- **Application:** Performance is far superior to Virgin PTFE Gaskets, PTFE Envelope Gaskets and PTFE Filled Seals.
- **Certificates:** On request, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Insist on all the above listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 2.1 |
| **Stress Resistance** | | | |
| 16 h, 50 MPa, 150 °C | DIN 52913 | MPa | 13 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.002 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | -200 |
| Continuous Temp |  | °C | 260 |
| Pressure |  | Bar | 80 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflon® 2030  
`Doniflon2030.html` · breadcrumb: Home > Product > Doniflon · image: `images/D-2030.png`

- **Material:** 2030
- **Composition:** Modified PTFE resin filled with barium sulphate.
- **Colour:** White
- **Properties:** uitable for concentrated acids, strong alkalis, solvents, fuels, refrigerants, and steam. Not suitable for molten alkali metals and fluorine compounds. Low gas permeability.
- **Industries:** Food industry, pharmaceutical industry, chemical industry, pulp & paper industry.
- **Application:** Performance is far superior to Virgin PTFE Gaskets, PTFE Envelope Gaskets and PTFE Filled Seals.
- **Certificates:** On request, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Insist on all the above listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 3.0 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.002 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | -200 |
| Continuous Temp |  | °C | 260 |
| Pressure |  | Bar | 80 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Grafilit® EM  
`Grafilit-EM.html` · breadcrumb: Home > Product > Grafilit · image: `images/g-em.png`

- **Material:** EM
- **Composition:** Flexible graphite sheet with a Nickel-Chromium Special Mesh.
- **Colour:** Black
- **Properties:** An excellent media resistance and the safety aspect, even in applications with cycling loads makes this material superior.
- **Industries:** Oil and gas industry, chemical industry, petrochemical industry, power generation industry, pulp and paper industry, shipbuilding, heat exchangers.
- **Application:** Can replace Spiral Wound Gaskets depending upon the application. Consult our Engineering Team for a solution.
- **Certificates:** On Request, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.4 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 49 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.05 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | -200 |
| Continuous Temp |  | °C | 450 |
| Pressure |  | Bar | 200 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Grafilit® SF  
`Grafilit-SF.html` · breadcrumb: Home > Product > Grafilit · image: `images/g-sf.png`

- **Material:** SF
- **Composition:** Flexible graphite sheets without an insert.
- **Colour:** Black
- **Properties:** Suitable for almost all chemicals, in the food industry and in contact with drinking water. Applicable in all industries, especially for valves, pumps, and load sensitive equipment.
- **Industries:** Chemical industry, food industry, OEM industry.
- **Certificates:** BAM (Oxygen), DIN-DVGW DIN 3535-6, DVGW KTW, DVGW VP 401, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Non-Asbestos can only be Manufactured in an Asbestos-FREE Certified Manufacturing Plant. Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.0 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 49 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.05 |
| **Max OperatinG** | | | |
| Pressure |  | Bar | 80 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Grafilit® SL  
`Grafilit-SL.html` · breadcrumb: Home > Product > Grafilit · image: `images/g-sl.png`

- **Material:** SL
- **Composition:** Flexible graphite sheets laminated with flat stainless steel Foil insertion (AISI 316; 0.05mm).
- **Colour:** Black
- **Properties:** Suitable for a wide range of applications especially for higher operating pressures such as in gas supply, compressors, pumps, and valves.
- **Industries:** Chemical industry, petrochemical industry, OEM industry.
- **Certificates:** BAM (Oxygen), DIN-DVGW DIN 3535-6, DVGW KTW, DVGW VP 401, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.3 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 49 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.05 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | -200 |
| Continuous Temp |  | °C | 450 |
| Pressure |  | Bar | 100 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Grafilit® SP  
`Grafilit-SP.html` · breadcrumb: Home > Product > Grafilit · image: `images/g-sp.png`

- **Material:** SP
- **Composition:** Flexible graphite sheets mechanically bonded to a tanged stainless-steel insertion (AISI 316; 0.1mm).
- **Colour:** Black
- **Properties:** Suitable to be used in the chemical and petrochemical industries, at high surface loads or high operating pressures.
- **Industries:** Chemical industry, petrochemical industry, power generation industry.
- **Certificates:** BAM (Oxygen), Germanischer Lloyd, DIN-DVGW DIN 3535-6, DVGW KTW, Fire safe API 607, DVGW VP 401, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Insist on all the above-listed certificates and approvals to assess Equivalence.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.4 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 49 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.05 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | -200 |
| Continuous Temp |  | °C | 450 |
| Pressure |  | Bar | 200 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Micalit® F  
`Micalit-F.html` · breadcrumb: Home > Product > Micalit · image: `images/mi-f.png`

- **Material:** F
- **Composition:** Aluminosilicate (phlogopite) impregnated with silicon. It is available as pure mica (MICALIT F) or with stainless steel insertion AISI 316 0.1 mm (MICALIT P).
- **Colour:** Golden
- **Properties:** Very high resistance to temperature (up to 950 °C in the oxidizing atmosphere). Good chemical resistance. Good electrical insulation and low thermal conductivity properties.
- **Industries:** The automotive industry, petrochemical industry, power generation industry, steel industry, heat exchangers, oven and furnace construction.
- **Certificates:** On Request, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Insist on all the above-listed certificates and approvals to assess Equivalence. May replace Flexitallic® Thermiculate depending upon the application. Consult our Engineering Team with application details.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.9 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 42 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 950 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Micalit® P  
`Micalit-P.html` · breadcrumb: Home > Product > Micalit · image: `images/mi-P.png`

- **Material:** P
- **Composition:** Aluminosilicate (phlogopite) impregnated with silicon. It is available as pure mica (MICALIT F) or with stainless steel insertion AISI 316 0.1 mm (MICALIT P).
- **Colour:** Golden
- **Properties:** Very high resistance to temperature (up to 950 °C in the oxidizing atmosphere). Good chemical resistance. Good electrical insulation and low thermal conductivity properties.
- **Industries:** The automotive industry, petrochemical industry, power generation industry, steel industry, heat exchangers, oven and furnace construction.
- **Certificates:** On Request, 100% Asbestos-FREE Certified Manufacturing Plant (to avoid contamination) and Product (certified 100%)
- **Equivalent:** Insist on all the above-listed certificates and approvals to assess Equivalence. May replace Flexitallic® Thermiculate depending upon the application. Consult our Engineering Team with application details.

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 2.0 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 42 |
| **Max OperatinG** | | | |
| Peak Temp |  | °C | 950 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflex® GCP  
`Doniflex-GCP.html` · breadcrumb: Home > Product > Doniflex · image: `images/D-gcp.png`

- **Material:** GCP
- **Composition:** Graphite, Aramid Fibers, NBR
- **Colour:** Grey
- **Properties:** Due to outstanding chemicals and thermal resistance it is a good choice for applications in flanges, valves, pumps and heat exchangers.
- **Industries:** Power Plants, Heating Systems, Chemical Industry, OEM Industry
- **Equivalent:** WRAS, TA-LUFT (VDI 2440), DVGW W270

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.8 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 42 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 38 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.15 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflex® GEM  
`Doniflex-GEM.html` · breadcrumb: Home > Product > Doniflex · image: `images/D-gem.png`

- **Material:** GEM
- **Composition:** Graphite, Aramid Fibers, NBR. Reinforced by Expanded Sheet.
- **Colour:** Grey
- **Properties:** The expanded metal reinforcement permits the optimization of surface pressure distribution on the assembled gaskets. The Gasket material also exhibits high sealing performance against gases at elevated temperatures.
- **Industries:** Pipeline System, Gas Supply, Chemicals Industry, Machine Building, Power Plants, Valves
- **Equivalent:** On request

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.7 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 40 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 35 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.1 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflex® GHD  
`Doniflex-GHD.html` · breadcrumb: Home > Product > Doniflex · image: `images/D-ghd.png`

- **Material:** GHD
- **Composition:** Graphite, aramid fibers, NBR
- **Colour:** Grey
- **Properties:** Compressed gasket material with high temperature resistance, good adaptability and excellent long-term stability.
- **Industries:** General use, chemical industry, heating systems
- **Equivalent:** On request

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.5 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 42 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 38 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.1 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflex® GLD  
`Doniflex-GLD.html` · breadcrumb: Home > Product > Doniflex · image: `images/D-gld.png`

- **Material:** GLD
- **Composition:** Graphite, Aramid Fibers, NBR
- **Colour:** Grey
- **Properties:** Due to outstanding chemicals and thermal resistance, it is a good choice for applications in flanges, valves, pumps, and heat exchangers.
- **Industries:** Power Plants, Heating Systems, Chemical Industry, OEM Industry
- **Equivalent:** WRAS, TA-LUFT (VDI 2440), DVGW W270

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.2 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 40 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 35 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.5 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflex® GMD  
`Doniflex-GMD.html` · breadcrumb: Home > Product > Doniflex · image: `images/D-gmd.png`

- **Material:** GMD
- **Composition:** Graphite, Aramid Fibers, NBR
- **Colour:** Grey
- **Properties:** Gasket material with excellent resistance to hot water, steam, and oils.
- **Industries:** Pipeline system, chemical industry, shipbuilding, machine building, power plants, valves, compressors.
- **Equivalent:** On request

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.4 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 45 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 40 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.3 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.

#### Doniflex® GSP  
`Doniflex-GSP.html` · breadcrumb: Home > Product > Doniflex · image: `images/D-gsp.png`

- **Material:** GSP
- **Composition:** Graphite, Aramid Fibers, NBR
- **Colour:** Grey
- **Properties:** Due to outstanding chemicals and thermal resistance it is a good choice for applications in flanges, valves, pumps and heat exchangers.
- **Industries:** Power Plants, Heating Systems, Chemical Industry, OEM Industry
- **Equivalent:** WRAS, TA-LUFT (VDI 2440), DVGW W270

_Technical table:_

| Property | Standard | Unit | Value |
|---|---|---|---|
| Density | DIN 28090-2 | g/cm3 | 1.8 |
| Stress Resistance |  |  |  |
| 16 h, 50 MPa, 175 °C | DIN 52913 | MPa | 42 |
| 16 h, 50 MPa, 300 °C | DIN 52913 | MPa | 38 |
| Specific Leak Rate | DIN 3535-6 | mg/(s.m) | 0.15 |

- **"Download Technical Document"** button → modal form (Full Name*, Company Name*, Email ID*, Mobile Number*, Submit); `action="#"` so it submits nowhere.


### Sealings → Semi Metallic and Metallic Gaskets

#### PGE® PiloSeal (SWG)  
`PiloSeal(SWG).html` · breadcrumb: Home > Product > PiloSeal · image: `images/PiloSeal(SWG).png`

- **Information:**
  - Available in a full range of styles and materials, our spiral-wound gaskets are manufactured in accordance with ASME B 16.20 for use in all industry flanges, including ASME B16.5 and ASME B 16.47, Series A&B. Leader GT assures strict adherence to these specifications as routine inspection procedures are applied throughout the manufacturing process. In addition, we maintain traceability of all materials used in our gasket construction to provide material certifications as required
  - Spiral wound gasket (SWG) consists of a thin metal hoop and nonmetal filler material that is simultaneously wound. The metal hoop is pre-formed in V or W-shaped profile, which allows the gasket to act as a spring between the flanges. The hoop also provides the basic structural element for the gasket while the nonmetal filler material seals the flange surfaces that are with small imperfections.
  - Depending on its excellent compression resilience, it is suitable for sealing spots where the alteration of temperature and pressure are frequent. It can be used as the static sealing element of pipe, valve, pump, thermal exchange, condensing tower, plain hole and man hole of flange, etc.
  - It has been widely applied in the fields of petrochemical, mechanical manufactory, power station, metallurgy, shipbuilding, pharmaceutical, nuclear power station, and navigation, etc

#### PGE® SealPro  
`SealPro.html` · breadcrumb: Home > Product > SealPro · image: `images/SealPro.png`

- **Information:**
  - The PGE® SealProTM is a Reusable Gasket consisting of a Solid Metal Core with Serrations with a specialized flexible face consisting of various options for High Temperature, Chemical
  - Resistance, and Exhaust Gases etc.
  - Once the gasket is installed, the soft non-metallic material is forced into the metal core serrated grooves. As a result, the compressive stress increases, and multiple concentric high-pressure seals are created along the gasket face surface.
  - Unlike traditional spiral-wound gasket, all of the compressive force is exerted on the PGE® SealProTM facing, thus resulting in a very tight seal. Since the PGE® SealProTM is basically a solid metal, as opposed to alternating plies ofmetal and filler applied at spiral-wound gaskets; it is extremely resilient and easy to handle even in large diameters (2000mm)

#### PGE® Double Jacketed  
`Double-Jacketed.html` · breadcrumb: Home > Product > Double Jacketed · image: `images/DoubleJacketed.png`

- **Information:** Our metal jacketed gaskets (MJG) take expanded graphite, non-asbestos or ceramic fibers etc as the filler material, and thin stainless steel foil, carbon steel foil or copper foil etc as the covering metal jacket. This kind of structure effectively protects the filler against pressure conditions, fluctuating temperatures and corrosion, providing outstanding resilience and efficient sealing

#### PGE® RTJ  
`RTJ.html` · breadcrumb: Home > Product > RTJ · image: `images/RTJ.png`

- **Information:**
  - Ring Joint Gaskets are used with Ring Type Joint (RTJ) flanges.
  - The Ring Type Joint (RTJ) gasket is a forged ring that fits into the machined groove of an RTJ flange. The ring-type joint gaskets are either octagonal or oval in cross-section.
  - RTJ gaskets are generally used for high-pressure and high-temperature applications. It is widely used in refinery, petrochemical, pressure vessel joints, and oil field drilling industries.
  - The Ring type joints are manufactured as per ASME B16.20. They are dimensionally suitable for use with flanges manufactured as per standards ASME B 16.5, ASME B16.47, and API 6A
  - These gaskets can be used for high pressures up to 20,000 PSI
  - RTJ is an extremely reliable and robust sealing and can be manufactured from a variety of metals based on the pressure application and flange grade.


### Sealings → Gland Packing

#### PGE® 2210 Pure Graphite Gland Packing  
`Graphite.html` · breadcrumb: Home > Product > Graphite · image: `images/Graphite.png`

- **Construction:** PGE® 2210 is a braided packing made from Expanded Flexible Natural high carbon( >98.5%)content Graphite Yarns
- **Temperature:** -200°C to +650°C
- **Pressure:** 275 Bar
- **pH:** 0 to 14
- **Advantages:** Asbestos Free, resist extreme temperature, Naturally lubricious, Very high resilient, Excellent pressure resistance, Universal in application

#### PGE® 2160 Aramid with ePTFE Gland Packing  
`Aramid.html` · breadcrumb: Home > Product > Aramid · image: `images/Aramid.png`

- **Construction:** PGE® 2160 is a braided packing made from Aramid Yarns at the edge and PTFE with lubricant in the center.
- **Temperature:** -200°C to +260°C
- **Pressure:** 485 Bar
- **pH:** 2 to 12
- **Advantages:** very good Abrasion resistance, Excellent pressure resistance, low wear & tear.

#### PGE® 3001 Aramid Gland Packing  
`Aramid-with-ePTFE.html` · breadcrumb: Home > Product > Aramid Gland Packing · image: `images/Aramid-Gland-Packing.png`

- **Construction:** PGE® 3001 is a braided packing made from Aramid Yarns, pre-treated with PTFE and lubricant.
- **Temperature:** -200°C to +280°C
- **Pressure:** 550 Bar
- **pH:** 2 to 14
- **Advantages:** Very good Abrasion resistance, Excellent pressure resistance, High Chemical & Temperature Resistance, uniquely lubricated.

#### PGE® 2150 Black Rubber Core Gland Packing  
`Hollow-Rubber-Core.html` · breadcrumb: Home > Product > Black Rubber Core Gland Packing · image: `images/hollow-Rubber-Core.png`

- **Construction:** PGE® 2150 is a braided packing made from ePTFE yarns bonded with high carbon content Graphite and has a hollow rubber core.
- **Temperature:** -200°C to +280°C
- **Pressure:** 225 Bar
- **pH:** 0 to 14
- **Advantages:** Asbestos Free, very low wear & tear, does not harden & withstand high temperature, resist most aggressive chemicals and acids, Excellent pressure resistance, Universal in application

#### PGE® 2730I Pure Graphite With Inconel Jacketed  
`Graphite-with-Inconel-Jacketed.html` · breadcrumb: Home > Product > Graphite With Inconel Jacketed · image: `images/Graphite-With-Inconel.png`

- **Construction:** PGE® 2730I is a braided packing made from Expanded Flexible Natural high carbon( >98.5%)content Graphite Yarns reinforced with high tensile Inconel wire and further jacketed with Inconel wire mesh.
- **Temperature:** -240°C to +650°C
- **Pressure:** 550 Bar
- **pH:** 0 to 14
- **Advantages:** Asbestos Free, resist extreme temperature, Very high resilient, High structural strength, Universal in application

#### PGE® 2140 Pure ePTFE with Graphite Packing  
`gPTFE.html` · breadcrumb: Home > Product > ePTFE · image: `images/ePTFE.png`

- **Construction:** PGE® 2140 is a braided packing made from pure ePTFE yarns and Graphite
- **Temperature:** -200° C to +280° C
- **Pressure:** 225 Bar
- **pH:** 0 to 14
- **Advantages:** Asbestos Free, Self lubricated, does not harden & withstand high temperature, resist most aggressive chemicals and acids, Excellent pressure resistance, Universal in application

#### PGE® 2120 Pure PTFE Gland Packing  
`PTFE.html` · breadcrumb: Home > Product > PTFE · image: `images/PTFE.png`

- **Construction:** PGE® 2120 is a braided packing made from pure PTFE yarns impregnated with lubricant.
- **Temperature:** -200° C to +270° C
- **Pressure:** 350 Bar
- **pH:** 0 to 14
- **Advantages:** Asbestos Free, No use of wet lubricant, Self-lubricated, resist most aggressive fluids, Excellent pressure resistance, problem-free installation & removal.


### Sealings → Sealing Solutions → PTFE

#### PTFE Cut Gaskets  
`Cut-Gaskets.html` · breadcrumb: Home > Product > Cut Gaskets · image: `images/CutGaskets.png`

- **Information:**
  - PTFE Gaskets are cut from virgin PTFE sheets, or molded rods, tubes, etc.PTFE has the best chemical resistance among known plastics. It also has good aging stability, electrical insulation, wear resistance, and an extremely low friction coefficient. The unloaded operating temperature range is -180~+260°C.
  - PTFE gasket is one of the most suitable types of gaskets for a variety of sealing applications. Different types of PTFE gaskets are available to meet various application demands.

_Technical table (PTFE compound properties):_

| Sr. | Property | Unit | Virgin PTFE | Glass Filled PTFE (25%) | Carbon Filled PTFE (25%) | Bronze Filled PTFE (40%) | Graphite Filled PTFE (15%) |
|---|---|---|---|---|---|---|---|
| 1 | Density | g/cc | 2.1-2.2 | 2.22-2.25 | 2.0-2.2 | 3.0-3.2 | 2.10-2.16 |
| 2 | Tensile Strength | kg/cm2 | 210-375 | 125-200 | 125-200 | 125-225 | 150-200 |
| 3 | Elongation At Break | % | 250-400 | 200-300 | 80-150 | 200-350 | 150-250 |
| 4 | Compressive Strength | kg/cm2 | 40-50 | 75-85 | 75-85 | 85-100 | 65-75 |
| 5 | Impact Strength | J/cm | 1.4-1.5 | 1.0-1.1 | 0.7-0.8 | 0.9-1.0 | 0.8-0.9 |
| 6 | Hardness | Shore D | 58-62 | 58-63 | 60-65 | 62-66 | 60-65 |
| 7 | Coefficient of Friction |  |  |  |  |  |  |
|  | a. Dynamic P- 7kg/cm2 V-0.5 |  | 0.04-0.06 | 0.5-0.54 | 0.12-0.17 | 0.11-0.15 | 0.11-0.16 |
|  | b. Static P-35 kg/cm2 |  | 0.05-0.08 | 0.11-0.13 | 0.06-0.11 | 0.08-0.10 | 0.08-0.10 |
| 8 | Water absorption (max.) | % | 0 | 0.013 | 0 | 0 | 0 |
| 9 | Continuous Service Temperature | °C | +260 | +260 | +260 | +260 | +260 |
| 10 | Di-electric Strength | Kv/mm | 22-24 | 11-12 | 1-2 | Conductive | 1-2 |

**11. Chemical Resistance:** PTFE is chemically inert & unaffected by all known chemicals except molten or dissolved alkali metals- Sodium, Potassium, Rubidium, Cesium, Francium & Fluorine Gas, certain fluorine compounds and complexes at elevated temperatures. Filled PTFE has inferior chemical resistance depending upon the particular filler.

#### PTFE Machined Components  
`Machined-Components.html` · breadcrumb: Home > Product > Machined Components · image: `images/MachinedComponents.png`

- **Information:** It is a PTFE gasket with filler materials such as glass fiber, carbon fiber, and graphite, etc. Improved mechanical and processing properties can be additionally reached by a combination of virgin PTFE and different fillers.

_Technical table (PTFE compound properties):_

| Sr. | Property | Unit | Virgin PTFE | Glass Filled PTFE (25%) | Carbon Filled PTFE (25%) | Bronze Filled PTFE (40%) | Graphite Filled PTFE (15%) |
|---|---|---|---|---|---|---|---|
| 1 | Density | g/cc | 2.1-2.2 | 2.22-2.25 | 2.0-2.2 | 3.0-3.2 | 2.10-2.16 |
| 2 | Tensile Strength | kg/cm2 | 210-375 | 125-200 | 125-200 | 125-225 | 150-200 |
| 3 | Elongation At Break | % | 250-400 | 200-300 | 80-150 | 200-350 | 150-250 |
| 4 | Compressive Strength | kg/cm2 | 40-50 | 75-85 | 75-85 | 85-100 | 65-75 |
| 5 | Impact Strength | J/cm | 1.4-1.5 | 1.0-1.1 | 0.7-0.8 | 0.9-1.0 | 0.8-0.9 |
| 6 | Hardness | Shore D | 58-62 | 58-63 | 60-65 | 62-66 | 60-65 |
| 7 | Coefficient of Friction |  |  |  |  |  |  |
|  | a. Dynamic P- 7kg/cm2 V-0.5 |  | 0.04-0.06 | 0.5-0.54 | 0.12-0.17 | 0.11-0.15 | 0.11-0.16 |
|  | b. Static P-35 kg/cm2 |  | 0.05-0.08 | 0.11-0.13 | 0.06-0.11 | 0.08-0.10 | 0.08-0.10 |
| 8 | Water absorption (max.) | % | 0 | 0.013 | 0 | 0 | 0 |
| 9 | Continuous Service Temperature | °C | +260 | +260 | +260 | +260 | +260 |
| 10 | Di-electric Strength | Kv/mm | 22-24 | 11-12 | 1-2 | Conductive | 1-2 |

**11. Chemical Resistance:** PTFE is chemically inert & unaffected by all known chemicals except molten or dissolved alkali metals- Sodium, Potassium, Rubidium, Cesium, Francium & Fluorine Gas, certain fluorine compounds and complexes at elevated temperatures. Filled PTFE has inferior chemical resistance depending upon the particular filler.

#### PTFE Sheets & Rods  
`Sheets-and-Rods.html` · breadcrumb: Home > Product > Sheets & Rods · image: `images/SheetsRods.png`

- **Information:**
  - Sizes available : 300 x 300 mm to 900 x 900 mm
  - Thickness : 3 – 25 mm

_Technical table (PTFE compound properties):_

| Sr. | Property | Unit | Virgin PTFE | Glass Filled PTFE (25%) | Carbon Filled PTFE (25%) | Bronze Filled PTFE (40%) | Graphite Filled PTFE (15%) |
|---|---|---|---|---|---|---|---|
| 1 | Density | g/cc | 2.1-2.2 | 2.22-2.25 | 2.0-2.2 | 3.0-3.2 | 2.10-2.16 |
| 2 | Tensile Strength | kg/cm2 | 210-375 | 125-200 | 125-200 | 125-225 | 150-200 |
| 3 | Elongation At Break | % | 250-400 | 200-300 | 80-150 | 200-350 | 150-250 |
| 4 | Compressive Strength | kg/cm2 | 40-50 | 75-85 | 75-85 | 85-100 | 65-75 |
| 5 | Impact Strength | J/cm | 1.4-1.5 | 1.0-1.1 | 0.7-0.8 | 0.9-1.0 | 0.8-0.9 |
| 6 | Hardness | Shore D | 58-62 | 58-63 | 60-65 | 62-66 | 60-65 |
| 7 | Coefficient of Friction |  |  |  |  |  |  |
|  | a. Dynamic P- 7kg/cm2 V-0.5 |  | 0.04-0.06 | 0.5-0.54 | 0.12-0.17 | 0.11-0.15 | 0.11-0.16 |
|  | b. Static P-35 kg/cm2 |  | 0.05-0.08 | 0.11-0.13 | 0.06-0.11 | 0.08-0.10 | 0.08-0.10 |
| 8 | Water absorption (max.) | % | 0 | 0.013 | 0 | 0 | 0 |
| 9 | Continuous Service Temperature | °C | +260 | +260 | +260 | +260 | +260 |
| 10 | Di-electric Strength | Kv/mm | 22-24 | 11-12 | 1-2 | Conductive | 1-2 |

**11. Chemical Resistance:** PTFE is chemically inert & unaffected by all known chemicals except molten or dissolved alkali metals- Sodium, Potassium, Rubidium, Cesium, Francium & Fluorine Gas, certain fluorine compounds and complexes at elevated temperatures. Filled PTFE has inferior chemical resistance depending upon the particular filler.

#### ePTFE Adhesive Tapes  
`Adhesive-Tapes.html` · breadcrumb: Home > Product > Adhesive Tapes · image: `images/AdhesiveTapes.png`

- **Information:**
  - EPTFE tape is especially suitable for sealing flange connections, pipe systems, hydraulic and pneumatic systems, etc. In addition, it’s also ideal for seals in glass, enamel, and plastic flanges, vessels, and special shaped sealing surface.EPTFE tape saves money and time. Since there is no scrap or waste, it costs less than other gasket materials. By using only a few sizes, large inventories of sheet gasket and costly precut gaskets can be eliminated. Installation time is kept to a minimum since there are no templates, precutting, or special fitting requirements.
  - 100% pure, especially processed PTFE sealant provides soft, highly compressible gasket on a roll for long-life, trouble-free sealing that cuts maintenance and storing costs. Underpressure, PTFE sealant provides a very thin and wide ribbon-like joint sealant so that the smallest possible gasket surface area is exposed to the harmful effects of corrosive media.


### Sealings → Sealing Solutions → Rubber

#### Rubber Gaskets  
`Rubber-Gaskets.html` · breadcrumb: Home > Product > Rubber Gaskets · image: `images/RubberGaskets.png`

- **Information:**
  - Rubber has good resistance to mild acids and alkalis, salts, and chlorine solutions. It has poor resistance to oils and solvents and is not recommended for use with ozone. Its temperature range is very limited.
  - Rubber with textile inserts suitable for current applications, without specific heat-resistance characteristics. Good resistance to ozone and atmospheric agents. It is usually cut and used for industrial lining. It is the most popularly used rubber on the market.

#### Rubber O Rings  
`O-Rings.html` · breadcrumb: Home > Product > Rubber O Rings · image: `images/ORings.png`

- **Information:**
  - Rubber has good resistance to mild acids and alkalis, salts, and chlorine solutions. It has poor resistance to oils and solvents and is not recommended for use with ozone. Its temperature range is very limited.
  - Rubber with textile inserts suitable for current applications, without specific heat-resistance characteristics. Good resistance to ozone and atmospheric agents. It is usually cut and used for industrial lining. It is the most popularly used rubber on the market.

#### Rubber Sheets  
`Rubber-Sheets.html` · breadcrumb: Home > Product > Rubber Sheets · image: `images/RubberSheets.png`

- **Information:**
  - Rubber has good resistance to mild acids and alkalis, salts, and chlorine solutions. It has poor resistance to oils and solvents and is not recommended for use with ozone. Its temperature range is very limited.
  - Rubber with textile inserts suitable for current applications, without specific heat-resistance characteristics. Good resistance to ozone and atmospheric agents. It is usually cut and used for industrial lining. It is the most popularly used rubber on the market.


### Sealings → Sealing Solutions → Others

#### Insulating Gaskets Kits  
`Insulating-Gaskets-Kits.html` · breadcrumb: Home > Product > Insulating Gaskets Kits · image: `images/InsulatingGaskets.png`

- **Information:**
  - Flange insulated gasket kits isolate and block the flow of electric current and also seals the system from leakages. Flange the most common trouble area needed to be sealed to prevent the leakages of the carrier system and also prevents the leakage of current, which causes undue corrosion and electric break down of metal.
  - We offer a variety of DONIT TESNIT Materials as Insulating Gasket Kits adhering to applications and sealing requirements. Our Primary Gaskets are made from DONIT Tesnit (Made in Europe) Certified Materials only.
  - Each Insulating Gasket Kit contains
  - a) One DONIT Certified Gasket
  - b) One insulating Bolt Sleeves per Bolt.
  - c) Two SS Washers per Bolt
  - d)Two Insulating Washers per Bolt
  - No of Bolts required decided by the ASME Std.

#### PTFE Envelope Gaskets  
`PTFE-Envelope-Gaskets.html` · breadcrumb: Home > Product > Envelope Gaskets · image: `images/PTFE-Envelope.png`

- **Information:**
  - PTFE envelope gaskets consist of a PTFE envelope with a nonasbestos fiber gasket insert.
  - These gaskets exhibit chemical resistance of the PTFE and strength and resilience of the insert. These gaskets are the best possible solution for aggressive chemicals where the normal fiber gasket should not come in contact with the medium. PTFE has good chemical resistance and is safe to be used with food, hence these gaskets are majorly used in chemical and food industries.


### Insulations

#### Ceramic Thermal Insulation  
`Ceramic-Thermal-Insulation.html` · breadcrumb: Home > Product > Insulations · image: `images/insulation-1.png`

- **Information:**
  - Pilot Brand of Ceramic Yarn is the foundation for our Ceramic products with superior quality yarn that offers the maximum thermal resistivity.
  - PCC [Pilot Brand Ceramic Cloth] is a woven fabric made with superior quality ceramic fiber yarn.
- **Temperature:**
  - 1440 Deg C
  - Applications
  - Furnace / Boiler Door insulation & seal, Coke Oven door jam seal, Expansion Joint packing, High-Temperature Gasketing & Packing, Maintenance in Foundries, Refineries, Power Plants & Steel Plants

#### Fiberglass Thermal Insulation  
`Fiberglass-Thermal-Insulation.html` · breadcrumb: Home > Product > Insulations · image: `images/insulation-2.png`

- **Information:** Pilot Fiberglass offers an economical alternative to Ceramic Cloth, however, at the expense of temperature resistivity. FibreGlass offers thermal protection of a maximum of 600℃ and extremely useful for general thermal insulation
- **Temperature:**
  - 600℃
  - Fiberglass tape is widely used as an insulation and protective material to wrap or seal various equipment or installations for temperatures up to 600℃; for example, pipe/hose/cable wrapping, door seals, flange seals (gasket). Fiberglass tape offers a cost-effective solution for various high-temperature applications.

#### Non-Asbestos MillBoard  
`Non-Asbestos-MillBoard.html` · breadcrumb: Home > Product > Insulations · image: `images/insulation-3.png`

- **Information:**
  - We offer Non-Asbestos, Non-Ceramic Millboard Sheets for high-temperature applications. The millboards are available in both sheet and cut gasket form. The millboards can withstand temperatures up to 1000°C and have low thermal conductivity.
  - These millboards are used for Heatshields in molten metal casting, General gaskets in domestic appliances, Sacrificial linings in aluminum melting pots, High-temperature gaskets and seals, Ovens, and Furnaces applications.

#### Silica Cloth  
`Silica-Cloth.html` · breadcrumb: Home > Product > Insulations · image: `images/insulation-4.png`

- **Information:**
  - Manufactured from High purity Silica Glass Fiber yarn, it exhibits high tensile strength & is extremely suitable for abrasive applications.
  - Silica fabrics are often used as heat shields to prevent surrounding components from overheating and significantly help reduce thermal loss in the process. Silica fabrics offer high chemical stability to alkali and acid media, are fungi-proof, and resistant to other attacking microorganisms. It also provides great insulation for exhaust systems.

#### PGE® Furnax™ Welding Blankets  
`Welding-Fire-Safety-Furnax-Felt.html` · breadcrumb: Home > Product > Insulations · image: `images/insulation-5.png`

- **Information:**
  - PGE® India in collaboration with our Japanese Partner has developed PGE® Furnax™ Welding Splatter Blanket made with Graphene Fiber. This unique product is available in nonWoven or Felt Form and offers a lightweight easy to carry Blanket that offers far superior performance than Ceramic and Asbestos. Best of all, it is itch-free.
  - Furnax™ Fabric is the trademark of PGE® offers astonishing Flame Protection, Heat Insulation, Heat Dissipation, and Thermal Resistivity even against naked flames. Unlike other traditional sources of Insulation, PGE® Furnax™ doesn’t burn or melt or disintegrate with a subject to a flame. Along with its excellent properties of heat dissipation, this offers a secure and new approach to Factory Safety. Available in sizes as per your requirement and in the thickness of 4mm and 6mm, we offer the Blanket in two forms: Woven and nonWoven with an additional option of one side Aluminized,
- **Features:**
  - 1. Unlike Ceramic, PGE® Furnax™ does not itch. Itch-FREE
  - 2. Soft and Luxurious Feel without any discomfort
  - 3. Heat Dissipation far superior to most Fabrics. Fine finish
  - 4. Handles temperatures of up to 1000℃ in Oxidizing Environment and 3000℃ in Vacum

#### Aerogel  
`Aerogel.html` · breadcrumb: Home > Product > Insulations · image: `images/insulation-6.png`

- **Information:** Aerogel is the lightest solid material. The main features of aerogel are superior thermal resistance, shock absorption, fireproof, waterproof, sound insulation, it has good flexibility and high tensile strength. All these special features make it suitable for use in mechanics, thermal, aerospace, military, medical. Construction areas. It can be used for temperatures up to 650° C.


### Miscellaneous

#### Break and Friction Liner  
`Break-and-Friction-Liner.html` · breadcrumb: Home > Product > Miscellaneous · image: `images/mes-1.png`

- **Information:** Asbestos brake liner are harmful for human health. We offer environmentally friendly and durable non asbestos brake liners. We offer asbestos free brake liner and friction sheets in both sheet and cut form.

#### FujiFilm Prescales  
`FujiFilm-Pre-Scales.html` · breadcrumb: Home > Product > Miscellaneous · image: `images/mes-2.png`

- **Information:**
  - Prescale film can precisely measure pressure, pressure distribution, and pressure balance.
  - Fujifilm’s advanced technology in color film manufacturing enables Fuji to produce extremely thin and stable Prescale films of less than 200μm(100μmx2)
  - It is used in automobiles, LCD, Semiconductors, Printed board circuits, and many such applications.

#### Engineering Plastic  
`Engineering-Plastic.html` · breadcrumb: Home > Product > Miscellaneous · image: `images/mes-3.png`

- **Information:**
  - Engineering plastics have wide applications due to their improved mechanical and thermal properties. Engineering plastics offer good mechanical characteristics, excellent machinability, and dimensional stability, good chemical resistance, good wear resistance
  - We offer machined components, rods, and sheets of engineering plastics like Nylon, Peek, PTFE, etc.


---

## 26. Inner-Page Colour & Style Notes (beyond home)

| Element | Style |
|---|---|
| Page banners | Full-width background images: About = **coral-red tint** engineer/refinery; Service = cool **grey/blue CNC**; Contact = **beige with wooden spheres**; Blog = **sepia laptop**; Sealings/Misc = **pale pink `#FFCCCC`-ish with product render**; Insulations = **woven fabric texture** |
| Banner H1 | 600 weight; **white** on About/Service/Blog banners, **black** (with red accent word) on Contact/Product banners |
| Section H1s | 30px/600, black + red `#DD2D1F` key word, centred (same pattern as home) |
| Product spec card | Solid `#DD2D1F`, 20px radius, white text, black labels |
| Tables | 14px/600, red `#DD2D1F` underline rows; PTFE comparison table 8 columns |
| Buttons | Red `#DD2D1F` square (Click Here / Submit / Send); no border radius, 600 weight |
| Contact CTA band | `#DD2D1F`, white thin (100) text |
| Mission/Vision band | `#DB2D1F` with white nav-pill for active tab |
| Breadcrumb | White bg; active item red (About/Product) or `#455A64` blue-grey (dark-font variant) |
| Shadows | `0 0 10px 0 #38383875` on product navbar; `0 0 10px 6px #38383875` on contact card |
| Lightbox (certificates) | Dark close chip `rgb(25,25,25)`, white border |

---

## 27. Additional Observations on the Inner Pages

1. **Title swap on gland-packing pages:** the card labelled **"Aramid"** (`Aramid.html`) opens a page titled **"PGE® 2160 Aramid with ePTFE Gland Packing"**, while **"Aramid with ePTFE"** (`Aramid-with-ePTFE.html`) opens **"PGE® 3001 Aramid Gland Packing"** – the two titles/descriptions look swapped.
2. **Copy-paste from another vendor:** `PiloSeal(SWG).html` says "Leader GT assures strict adherence to these specifications…" – "Leader GT" is another gasket company's name.
3. **Rubber pages duplicate text:** Rubber Gaskets, Rubber Sheets and O Rings share the *same two paragraphs* word-for-word.
4. **PTFE tables duplicate:** Cut Gaskets, Machined Components and Sheets & Rods carry an identical PTFE compound property table (verified identical).
5. **Typos:** "uitable" (Doniflon 2030), "hollo micro-glass beads" (Doniflon 2010), "Max OperatinG" (all spec tables), "Vacum" (Furnax), "far far superior" (Doniflon 900E), "Our Research and Development team." (unfinished sentence on Services), "Contact With India's Leading Cement Company" (likely "Contract").
6. **Forms go nowhere:** the contact enquiry form and every "Download Technical Document" form use `action="#"` – no server endpoint; the technical document is not actually downloadable from the markup.
7. **Same YouTube video** (`qrzTDSlfVZQ`) on every family list page and the home page.
8. **Doniflon 2030 table** omits the *Stress Resistance* row present on the other Doniflon pages; Grafilit SF omits Peak/Continuous Temp rows; Tesnit rows differ per grade (see catalog).
9. **Breadcrumb inconsistencies:** Hollow Rubber Core shows "Black Rubber Core Gland Packing"; gPTFE shows "ePTFE"; Welding/Furnax lives under "Insulations"; O Rings shows "Rubber O Rings"; the middle crumb "Product" links nowhere (`#`).
10. **Blog is empty** ("Blog Not Found") yet linked prominently in the main menu.
11. **Footer on inner pages** omits "Products" (commented out), same as home.
12. The certificate scans are dated documents (validity dates are printed on them) and may be out of date – check the originals.
