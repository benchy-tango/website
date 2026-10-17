# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), plain CSS, no extra libraries (architecture brief §8–9). Contact form: Netlify Forms (confirmed by the owner, 2026-10-11), so the site is deployed on Netlify.

## Users

- **Organisers of milongas, festivals and tango marathons** looking for a tango DJ (primary).
- **Hosts of private events** with tango who need a DJ.
- **Tango dancers and learners** looking for private lessons, group classes or workshops.
- **Schools and communities** looking to book workshops.
- **Art buyers and galleries** interested in Aaron's abstract paintings (secondary, own page only).

## Product Purpose

The personal website of Aaron Benchimol, a **tango website led by his work as a tango DJ**. It exists to turn organisers into DJ bookings first, and dancers into students second. Success = clear DJ booking enquiries (and class enquiries) through the contact form.

## Positioning

Argentine tango DJ (TDJ) from Buenos Aires, based in Berlin, who also dances and teaches. His DJ work comes from his life as a dancer on the floors of Buenos Aires. Painting is a complementary practice with its own quiet page. Changed on 2026-10-17 from "dancer · teacher · DJ · artist with equal weight".

## Capabilities and Constraints

- Six pages: Home, Tango DJ (`/dj/`), Classes (`/classes/`), About, Art, Contact. `/dance-music/` redirects to `/dj/` (netlify.toml).
- Languages: English (default, at `/`), Spanish (at `/es/`) and German (at `/de/`, informal "du"). Spanish copy comes from `../wesite-info/navegacion.md`; English and German are its translations.
- DJ facts (formats, repertoire, venues by year) come from `../wesite-info/tango-dj.md` and live in `src/data/dj.ts`.
- Contact form via Netlify Forms; enquiry types with **DJ booking first**; service CTAs preselect the type.
- Visual Art: 8 paintings (700×700). Year, medium and availability unknown. Not shown on the homepage.
- Contact: WhatsApp +49 179 5299525, Instagram @benchytango (tango) and @benchy.art (visual art), Facebook.
- **Undecided / missing:** production domain; audio/video samples of DJ sets.

## Brand Commitments

The brand is **Benchy Tango** (logo, home hero, site name, favicon "BT"); Aaron Benchimol is the person behind it and stays in the copy, the hero label and the copyright.

`../wesite-info/diseno.md` (visual system) and `../wesite-info/marca.md` (identity, voice, CTAs) are binding; they replace the former `brand-benchy.md`. Palette: Obsidian Black, Warm Ivory, Muted Gold, Burgundy, Charcoal Grey. Bodoni Moda + Jost. Gold primary buttons, outline secondary buttons. Voice: "confident but not boastful, artistic but clear", tango vocabulary used naturally.

## Evidence on Hand

- Photos: `aaron-dj.jpg` (DJ portrait in tuxedo with headphones, dark studio backdrop: the hero and the share image), `aaron-professor.jpg` (studio portrait in tuxedo: the Classes hero), `aaron-class.jpg` (group class, only 496×231 px: never shown wider than 31rem), `aaron-portrait.jpg`. The photo of Aaron dancing with a partner was removed at the owner's request (2026-10-17); do not use it.
- Experience by country (DJ, teacher, stage): `../wesite-info/aaron_benchimol_dj-history.md` → `src/data/experience.ts`, shown as a filterable map on the DJ, Classes and About pages.
- DJ profile and venue history: `../wesite-info/tango-dj.md`.
- **Absent, must not be fabricated:** testimonials, prices, future event dates, audio/video samples, artwork years/media/prices.

## Product Principles

1. Booking Aaron as a DJ is always the clearest action; classes come second.
2. Everything is tango: the art page exists but never competes with tango on the homepage.
3. Only real content: missing facts stay missing, never invented.
4. Every enquiry path leads to the contact form with the right enquiry type already chosen.

## Accessibility & Inclusion

Visible keyboard focus, readable contrast on the dark palette, descriptive alt text, reduced-motion support, usable without JavaScript (architecture brief §7, §12).
