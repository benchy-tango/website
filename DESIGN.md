---
name: Aaron Benchimol
description: Tango dancer, teacher, DJ and painter; a milonga at night, lit low.
colors:
  obsidian-black: "#0b0b0b"
  warm-ivory: "#f5efdf"
  muted-gold: "#c9a96e"
  gold-lifted: "#d8bd88"
  burgundy: "#7a2e35"
  charcoal-grey: "#4a4444"
  night-surface: "#151412"
  ivory-muted: "#c4bfb4"
  ivory-rule: "rgba(245, 239, 223, 0.22)"
  ivory-rule-soft: "rgba(245, 239, 223, 0.12)"
  error-rose: "#e3a2a8"
  error-line: "rgba(217, 138, 145, 0.6)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(3rem, 1.6rem + 6vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.7rem + 3.4vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.875rem, 1.5rem + 1.6vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title-card:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.18em"
  action:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  sm: "3px"
spacing:
  "1": "0.5rem"
  "2": "1rem"
  "3": "1.5rem"
  "4": "2rem"
  "5": "3rem"
  "6": "4rem"
  "7": "6rem"
  "8": "8rem"
  section-y: "clamp(4.5rem, 3rem + 6vw, 8rem)"
  gutter: "clamp(1.25rem, 0.8rem + 2vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.muted-gold}"
    textColor: "{colors.obsidian-black}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-lifted}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.warm-ivory}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
    height: "3rem"
  button-secondary-hover:
    textColor: "{colors.muted-gold}"
  text-link:
    textColor: "{colors.muted-gold}"
    typography: "{typography.action}"
    padding: "0.4rem 0"
  nav-link:
    textColor: "{colors.ivory-muted}"
    typography: "{typography.action}"
    padding: "0.75rem 0"
  nav-link-active:
    textColor: "{colors.warm-ivory}"
  nav-contact:
    backgroundColor: "transparent"
    textColor: "{colors.warm-ivory}"
    rounded: "{rounded.sm}"
    padding: "0 1.1rem"
    height: "2.5rem"
  input-field:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.warm-ivory}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 0.95rem"
    height: "3rem"
---

# Design System: Aaron Benchimol

## Overview

**Creative North Star: "The Milonga at Night"**

One artist's world, lit low. The page is an obsidian room; Warm Ivory type sits in it like programme text under stage light, and photographs carry the atmosphere. Playfair Display sets his name and every title the way a printed milonga programme would; Montserrat does all the quiet work underneath. Gold is not decoration but the one lit object in each view: the primary action, the fine hairline under a title, a label, an active state.

Density is editorial and generous: tall fluid section padding, large full-bleed or 4:5 photographs, asymmetric two-column splits (7fr/5fr, 5fr/6fr) instead of card rows. Everything is flat. Depth comes from photography graded dark where type must read, from a single burgundy stage-light glow behind the closing band, and from 1px ivory rules at low opacity.

The world refuses the dance-school template: no icon-card grids, no stock dancers, no gold flourishes or ornamental frames, no brand-coloured overlays on paintings.

**Key Characteristics:**
- Obsidian ground, Warm Ivory type, Muted Gold as the single lit accent per view.
- Playfair Display at weight 400 for names and titles; Montserrat for everything else.
- Near-square 3px corners, 1px hairline rules, no shadows.
- Photographs as the atmosphere: full-bleed with directional dark grading, or 4:5 portrait frames.
- Signature motion: the gold compás hairline draws once from left to right; photographs open with a clip-path curtain.

## Colors

A night palette: near-black ground, warm paper-ivory type, one muted metallic accent, and a burgundy reserved for stage light.

### Primary
- **Muted Gold** (muted-gold): the primary action fill in each section, the title hairline, letter-spaced labels, text links, active nav and language states, focus outline, selection, caret, and small icons in contact lists. Its hover is **Gold Lifted** (gold-lifted), one step lighter.

### Secondary
- **Burgundy** (burgundy): only as a low stage light, a radial glow at 42% opacity from the top of the closing contact band. Never a fill, never text.

### Neutral
- **Obsidian Black** (obsidian-black): page, header, footer, mobile menu, and the text colour on gold.
- **Night Surface** (night-surface): a barely lifted panel for the art-teaser band, form fields, and image frames before load.
- **Warm Ivory** (warm-ivory): headings, primary text, and hero copy over photographs.
- **Ivory Muted** (ivory-muted): lead and body copy, captions, footer text, resting nav links.
- **Charcoal Grey** (charcoal-grey): scrollbar thumb; the brand's divider tone.
- **Ivory Rule** (ivory-rule) and **Ivory Rule Soft** (ivory-rule-soft): 1px dividers, field borders, the language-switch separator, the example-frame outline. Secondary buttons and the header Contact link use ivory at 45% for their outline.
- **Error Rose** (error-rose) with **Error Line** (error-line): burgundy lifted for legible error text and invalid-field borders on black.

### Named Rules
**The One Lit Object Rule.** Gold fills the primary action of a section and nothing competes with it: never two gold fills in one view. The header Contact link stays an ivory outline in every state so each page's own primary action owns the gold.

**The Stage Light Rule.** Burgundy appears only as diffuse light behind content (a radial glow on obsidian), never as a surface, border, or type colour.

## Typography

**Display Font:** Playfair Display (with Georgia, serif)
**Body Font:** Montserrat (with Arial, sans-serif)

**Character:** A high-contrast transitional serif set at regular weight, like a programme or gallery card, over a clean geometric sans that carries labels, actions, and copy without competing.

### Hierarchy
- **Display** (400, 48 to 88px fluid, line-height 1, -0.015em): the artist's name in the home hero only, max 8.5em wide.
- **Headline** (400, 40 to 64px fluid, 1.1): page titles (h1) and the closing contact band title.
- **Title** (400, 30 to 40px fluid, 1.1): section titles (h2).
- **Title Card** (400, 22 to 28px fluid, 1.2): panel and service titles (h3), the About pull quote at line-height 1.45.
- **Lead** (400, 17 to 20px fluid, 1.7): intro paragraphs in Ivory Muted, max 34em.
- **Body** (400, 16 to 17px fluid, 1.65): running copy, max 36em.
- **Label** (500, 12px, 0.18em, uppercase, gold): metadata and descriptors, the hero subtitle beneath the name, contact definition terms, and programme-style offer lists (in ivory).
- **Action** (500, 13px, 0.08em, uppercase): buttons and text links; nav uses 0.06em. On phones under 480px buttons drop to 12px at 0.04em so Spanish labels hold one line.

Headings use balanced wrapping; paragraphs use pretty wrapping.

### Named Rules
**The Programme Rule.** Playfair is for names and titles only, always at weight 400; never bold, never for UI or labels.

**The Label Below Rule.** Letter-spaced labels are metadata and descriptors; they sit beside or beneath what they describe, never as a kicker above a heading.

## Layout

A single 1240px container (760px narrow variant) with a fluid gutter (20 to 40px). Sections breathe with fluid vertical padding (72 to 128px). Spacing follows an 8px rhythm (0.5rem to 8rem).

Compositions are asymmetric two-column splits at 960px and up (7fr/5fr for photo-led offers, 5fr/6fr for portrait-and-story), alternating sides with a mirrored variant. On home, the DJ panel drops 8rem below the classes panel so the two read as panels in conversation, not a card row. Full-bleed photo moments (hero at full viewport height, the dance floor at 88svh) anchor their type lower-left with a bottom-and-left dark grade.

Galleries hang salon-style in CSS columns: two columns on phones, three from 960px, works of mixed aspect ratios stacking without gaps. The fixed header is 4.5rem tall; inner pages open with the title below it plus 6rem.

Breakpoints in use: 480px (button compaction), 600/640px (gallery and form rows), 760px (footer grid), 960px (desktop nav, two-column splits).

## Elevation & Depth

Flat, with no box-shadows anywhere. Depth is photographic and tonal: dark linear grades over full-bleed photographs only where type needs them, the Night Surface panel one step above Obsidian, a 92% obsidian header bar once the page scrolls, and the burgundy radial glow behind the closing band.

### Named Rules
**The Lit Room Rule.** Surfaces never lift. If something needs separation, use a 1px ivory rule, a tonal step to Night Surface, or light (a grade or glow), not a shadow.

## Shapes

Near-square: one radius (3px) on buttons, the header Contact link, form fields, and status messages. Photographs and art frames are unrounded and clipped, in fixed ratios (4:5 portrait, 4:3 landscape, 1:1). Lines are 1px throughout: section borders, programme-list dividers, the gold title hairline (4.5rem wide, 1px). The select chevron is a 1.5px gold corner stroke. Icons are inline SVG at one consistent 1.5px round stroke on a 24px grid.

**The No Pill Rule.** Corners stay at 3px; no pill-shaped buttons or chips.

## Components

### Buttons
Restrained and confident: a small, letter-spaced uppercase label in a near-square block.
- **Shape:** near-square corners (3px), min-height 3rem, 1px border.
- **Primary:** Muted Gold fill with Obsidian text, padding 0.85rem 1.6rem; hover lifts to Gold Lifted.
- **Secondary:** transparent with an ivory outline at 45% and Warm Ivory text; hover turns border and text gold.
- **Press:** scales to 0.97 on a 140ms ease-out curve. An optional trailing arrow icon nudges 4px right on hover.
- **Text link:** gold uppercase action type with a 1px underline resting at 35% width that draws to full width on hover.

### Cards / Containers
There are no generic cards. Service and offer panels are a photograph above or beside a heading, text, and one action, with no border, background, or radius. Artwork entries are a clipped frame on Night Surface with a Playfair title and muted details caption below; images scale to 1.025 on hover over 700ms. Placeholder frames are a transparent panel with a 1px Ivory Rule outline and a centred gold label, so they never pass as real work.

### Inputs / Fields
- **Style:** Night Surface fill, 1px Ivory Rule border, 3px corners, min-height 3rem, 16px text, gold caret. Labels sit above in 14px Montserrat 500.
- **Focus:** border turns gold plus the global 2px gold outline at offset.
- **Error:** Error Line border with Error Rose message text; form status boxes use a 1px Error Line or gold border.

### Navigation
- **Desktop (960px and up):** Playfair wordmark left; uppercase Montserrat links in Ivory Muted at 13px/0.06em, turning ivory on hover with a gold 1px underline drawn from the left; the current page holds the underline. Contact is an ivory-outline 2.5rem block. EN/ES switch sits behind a 1px rule, active language in gold.
- **Header:** fixed, 92% obsidian with a soft bottom rule; transparent over full-bleed hero photography until scroll.
- **Mobile:** a full-screen obsidian dialog with links set in Playfair at 32 to 44px, current page in gold, staggered rise-in (45ms per link); language switch at the foot behind a rule.

### Title Hairline (signature)
Every page title carries a 1px gold line beneath it (4.5rem wide; up to 18rem under the hero name), drawn once from left to right over 900ms on the in-out curve after the page opens. It is the brand's one recurring motif, the 2x4 beat of the compás.

### Closing Contact Band
A centred band under a soft top rule, obsidian with the burgundy stage-light glow from above, a Headline title, a lead line, and a single gold primary action.

## Do's and Don'ts

### Do:
- **Do** give each section one gold primary action and pair it, if needed, with an ivory-outline secondary.
- **Do** set names and titles in Playfair Display 400 with the gold hairline under page titles.
- **Do** let photographs carry atmosphere: full-bleed with dark grading only where type sits, or clipped 4:5 and 4:3 frames.
- **Do** separate with 1px ivory rules at 12 to 22% opacity and tonal steps to Night Surface.
- **Do** keep motion short and singular: reveals of 18px rise over 560ms, the clip-path curtain on photographs, and nothing at all under reduced motion.
- **Do** show paintings at full colour with their title, medium, dimensions, and year.

### Don't:
- **Don't** place two gold fills in one view or turn the header Contact link gold.
- **Don't** use box-shadows, pill shapes, or radii beyond 3px.
- **Don't** use burgundy as a fill, border, or text colour; it is stage light only.
- **Don't** build icon-card grids, gold flourishes, or ornamental frames around images.
- **Don't** apply brand-coloured overlays or filters to paintings.
- **Don't** put a letter-spaced label above a heading as a kicker.
