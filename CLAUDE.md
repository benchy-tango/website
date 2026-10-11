# CLAUDE.md — Web de Aaron Benchimol (benchy-tango)

Documento vivo del proyecto. **Léelo primero en cada sesión** y **actualízalo con cada cambio** (sección "Registro de cambios" al final). Resume arquitectura, diseño, navegación y estado, para no tener que releer los documentos de origen completos.

## 0. Fuentes de verdad

| Archivo | Qué manda |
|---|---|
| `../wesite-info/architecture-benchy.md` | Arquitectura, páginas, reglas de conversión, movimiento, dependencias |
| `../wesite-info/brand-benchy.md` | Colores, tipografías, botones, tono (gana en tokens de marca si hay conflicto) |
| `../wesite-info/navegacion.md` | Contenido y orden de las secciones (en español; es la base del texto ES) |
| `../wesite-info/imagenes/` | Fotos originales del cliente |
| `PRODUCT.md` | Hechos de producto confirmados (Impeccable) |
| `.impeccable/surfaces/src-pages-lang-index-astro.md` | Contrato de dirección visual (Impeccable) |
| `DESIGN.md` + `.impeccable/design.json` | Sistema de diseño documentado desde el código construido |

Reglas que no se rompen: **no inventar** biografía, testimonios, festivales, precios, títulos de obras ni fechas; **no añadir librerías** (solo Astro); clases y DJ siempre son la acción más clara.

## 1. Stack y comandos

- **Astro 7** (salida estática), CSS propio, sin Tailwind ni frameworks UI. Única dependencia: `astro` (incluye `sharp` para imágenes).
- Fuentes **Playfair Display** (400, 500) y **Montserrat** (400, 500, 600) con la Fonts API de Astro (`astro.config.mjs`): se descargan al compilar y se sirven desde la propia web.
- Despliegue: **Netlify** (`netlify.toml`: build `npm run build`, publica `dist/`, Node 22). Repo: `https://github.com/benchy-tango/website.git`.

```
npm install        # dependencias (Node ≥ 22.12)
npm run dev        # servidor local (usamos --port 4330: npx astro dev --port 4330)
npm run build      # genera dist/
npm run preview    # sirve dist/ en local
```

## 2. Estructura de archivos

```
src/
  pages/
    [...lang]/            # cada página se genera 2 veces: EN en / y ES en /es/
      index.astro         # Home
      dance-music.astro   # Dance & Music
      art.astro           # Visual Art
      about.astro         # About
      contact.astro       # Contact (formulario Netlify)
    404.astro             # noindex
  layouts/BaseLayout.astro   # <head> (SEO, OG, JSON-LD, fuentes), header, footer, script de reveal
  components/
    SiteHeader.astro      # header fijo + menú móvil (<dialog>) + selector EN/ES
    SiteFooter.astro      # nombre, enlaces, contacto, redes, idioma, crédito Waterwerk
    Button.astro          # enlace con estilo de botón (primary oro / secondary contorno)
    PageIntro.astro       # cabecera de páginas interiores (h1 + línea dorada + lead)
    ArtworkCard.astro     # obra real o "marco de ejemplo" rotulado
    ContactCTA.astro      # banda final de contacto con luz burdeos
    WhatsAppButton.astro  # botón flotante de WhatsApp (círculo verde abajo a la derecha, en todas las páginas)
    Icon.astro            # iconos SVG propios (trazo 1.5px): arrow, menu, close, instagram, facebook, whatsapp, mail, pin
  i18n/
    languages.ts          # idiomas, slugs, pageUrl(), enquiryUrl(), ENQUIRY_TYPES, getStaticPaths
    en.ts                 # TODOS los textos en inglés
    es.ts                 # TODOS los textos en español (misma forma que en.ts)
  data/
    contact.ts            # email, WhatsApp, redes (url vacía = oculta)
    artworks.ts           # obras de la galería (vacío → marcos de ejemplo)
  styles/
    tokens.css            # ÚNICO sitio con valores de color/tamaño (tokens de marca)
    global.css            # base, tipografía, botones, foco, selección, reveal, línea dorada
  assets/photos/          # fotos optimizadas (procedencia incrustada en cada JPG)
public/favicon.svg        # monograma "AB" oro sobre negro
```

**Los componentes no contienen texto**: todo el copy está en `src/i18n/en.ts` y `es.ts`. Para cambiar un texto, cámbialo en los dos.

## 3. Idiomas y URLs

- **Inglés** por defecto en la raíz; **español** bajo `/es/`. Mismos slugs: `/`, `/dance-music/`, `/art/`, `/about/`, `/contact/` (y `/es/...`). Todas las URLs terminan en `/`.
- `pageUrl(lang, page, suffix?)` construye cualquier enlace; `enquiryUrl(lang, type)` lleva al formulario con el tipo de consulta preseleccionado (`/contact/?enquiry=dj#contact-form`).
- Selector **EN / ES** en el header (escritorio), en el menú móvil y en el footer; enlaza a la misma página en el otro idioma.
- Español: texto de `navegacion.md` (con tildes). Inglés: traducción, usando los CTAs del brief de arquitectura.

## 4. Navegación y contenido por página

Menú: **Dance & Music · Visual Art · About · Contact** (Contact con contorno marfil) + EN/ES. El nombre "Aaron Benchimol" (Playfair) lleva a Home.

### Home `/`
1. **Hero** a sangre completa (`aaron-dancing.jpg`), header transparente encima. "Aaron Benchimol" grande abajo a la izquierda, línea dorada que se dibuja, subtítulo "Tango, DJ & Visual Art", texto de bienvenida. CTAs: oro "Explore Dance & Music" → `/dance-music/`; contorno "Discover My Art" → `/art/`.
2. **Dance & Music**: dos paneles editoriales desplazados (no tarjetas iguales): *Tango Classes & Workshops* (`aaron-teaching.jpg`, CTA "Enquire About Classes" → form `classes`) y *Tango DJ* (`aaron-dj.jpg`, CTA "Book Aaron as a DJ" → form `dj`).
3. **My Art** (fondo `--color-surface`, más discreto): las 3 primeras obras de `artworks.ts` (en móvil 2), enlace "Explore Visual Art".
4. **About Me**: retrato (`aaron-portrait.jpg`) + texto, CTA contorno "Meet Aaron".
5. **Banda final** (ContactCTA): "Shall we work together?" → "Get in Touch".

### Dance & Music `/dance-music/`
PageIntro → **Tango Classes** (foto clases; listado tipo programa: Private lessons / Group classes / Special workshops; CTA → form `classes`) → **Tango DJ** (espejado; Milongas / Festivals / Private events; CTA → form `dj`) → **Moments on the Dance Floor** (foto a sangre completa, CTA "Reserve Your Spot" → form `classes`) → banda final.

### Visual Art `/art/`
PageIntro "Art Collection" + CTA "Enquire About an Artwork" → galería en columnas (2 en móvil, 3 en escritorio) con las 8 obras de `artworks.ts`, cada una con su proporción real y su título o medida debajo → **How I Create My Art** + CTA "Request a Custom Painting" + enlace a Instagram `@benchy.art`.

### About `/about/`
Retrato + h1 "Meet Aaron Benchimol" + texto + CTA oro "Talk to Aaron" → sección **Art and Movement** (h2 + cita) + CTA "See Current Projects" → `/dance-music/`.

### Contact `/contact/`
PageIntro "Get in Touch" → formulario (izquierda) + **Other Ways to Reach Me** (derecha): email, ubicación ("Available for international travel and events."), redes (Instagram ×2, Facebook) y botón **WhatsApp**.

## 5. WhatsApp flotante

Círculo verde fijo abajo a la derecha en **todas las páginas** (petición del cliente), añadido en `BaseLayout`. Abre `wa.me/491795299525` con un saludo ya escrito según el idioma (`whatsappButton` en `en.ts` / `es.ts`). Colores en tokens: `--color-whatsapp` `#25D366` (verde oficial; no es color de marca), `--color-whatsapp-strong` (hover), `--shadow-float`. Respeta el área segura del móvil; aparece suave a los 600 ms (sin animación con reducir movimiento).

## 5b. Formulario de contacto (Netlify Forms)

- Formulario `name="contact"`, `data-netlify="true"`, honeypot `bot-field`, campo oculto `form-name`. Ambos idiomas envían al mismo formulario; campo oculto `language` dice desde qué página llegó.
- Campos: name*, email*, enquiry (select: `classes`, `workshop`, `dj`, `performance`, `art`, `other` — **valores en inglés**, etiquetas traducidas), details (lugar/fecha del evento, opcional — lo pide el brief §4), message*.
- `novalidate` lo añade el script (no está en el HTML): sin JS el navegador valida los campos obligatorios.
- Con JS: validación propia, envío por `fetch` a `/`, **mensaje de éxito solo si Netlify responde OK**; si falla, error con el email. Sin JS: POST normal y página de confirmación de Netlify.
- `?enquiry=<tipo>` en la URL preselecciona el tipo.
- **Pendiente en Netlify** (no está en el código): *Site configuration → Notifications → Emails and webhooks → Form submission notifications* → email donde llegan las consultas. Solo funciona con la web publicada en Netlify (en local da error, es normal).

## 6. Datos editables

- **Contacto y redes** (`src/data/contact.ts`): email `info@aaronbenchimol.com`; WhatsApp `+49 179 5299525`; Instagram tango `@benchytango`, Instagram arte `@benchy.art`, Facebook `https://www.facebook.com/share/1RGFGtS3h5/`. Una `url` vacía oculta esa red en todo el sitio.
- **Obras** (`src/data/artworks.ts`): 8 pinturas de `../wesite-info/imagenes/arte/` (fotos de 700×700, copiadas sin cambios a `src/assets/artworks/`). Seis con título de la serie *Energiebild* tomado del nombre de archivo (Explosion des Lichts, Engel des Mutes, Rückkehr zur Quelle, Dein Licht bricht hervor, Insel des inneren Friedens, Tempel der Glückseligkeit) y dos pequeñas firmadas de 15 × 15 cm sin título. Año, técnica, medidas de las grandes y disponibilidad: desconocidos, no se muestran. Para añadir una obra: foto en `src/assets/artworks/`, importarla y añadir entrada (`image`, `alt` en/es y solo los datos conocidos). El orden de la lista es el de la web; las 3 primeras salen en Home. Si la lista quedara vacía, vuelven los marcos de ejemplo.
- **Fotos nuevas**: optimizar a máx. 2400px con `sharp` (aplicar `.rotate()` por la orientación EXIF) y guardar en `src/assets/photos/`; incrustar su procedencia con `impeccable embed-prompt <foto> --prompt "SOURCED: …"`.

## 7. Sistema de diseño (resumen; detalle en `DESIGN.md`)

**Concepto:** "milonga de noche": fondo obsidiana, fotos con carácter, el nombre en Playfair como un programa; nada de plantilla de escuela de baile.

**Colores** (`tokens.css`, nunca hex en componentes):

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#0B0B0B` Obsidian | fondo, header, footer |
| `--color-text` | `#F5EFDF` Warm Ivory | texto principal |
| `--color-accent` | `#C9A96E` Muted Gold | botón principal (uno por sección) y acentos pequeños: línea dorada, etiquetas, estados activos |
| `--color-burgundy` | `#7A2E35` | solo la luz de escenario de la banda final |
| `--color-charcoal` | `#4A4444` | detalles secundarios |
| `--color-surface` | `#151412` | campos, banda de arte |
| `--color-text-muted` | `#C4BFB4` | textos secundarios |
| `--color-border(-soft)` | marfil 22% / 12% | líneas finas |
| `--color-error(-line)` | `#E3A2A8` | errores del formulario |
| `--color-outline` | marfil 45% | contorno de botones secundarios y del "Contact" del header |
| `--color-header-bg` | obsidiana 92% | header sólido al hacer scroll |
| `--shade-hero-side/-bottom`, `--shade-floor` | degradados obsidiana | oscurecen las fotos solo donde hay texto encima |
| `--stage-light` | resplandor burdeos | luz de escenario de la banda final |

Excepción: `<meta name="theme-color">` lleva `#0b0b0b` literal (el navegador no lee variables CSS ahí).

Nunca dos rellenos dorados compitiendo en la misma vista (por eso el "Contact" del header es contorno marfil).

**Tipografía:** Playfair Display Regular para nombre, títulos y citas; Montserrat para todo lo demás. Escala fluida en tokens (`--text-hero` 48→88px, `--text-page` 40→64px, `--text-section` 30→40px, `--text-card` 22→28px, cuerpo 16–17px, interlineado 1.65). Etiquetas en mayúsculas espaciadas solo para metadatos, **nunca encima de un título**.

**Botones:** primario oro con texto negro; secundario contorno marfil 45% → oro al pasar el ratón; radio 3px (sin píldoras); `:active` escala 0.97. En pantallas ≤480px se reduce el espaciado para que los CTAs largos en español quepan en una línea.

**Motivo de marca:** línea dorada fina de 1px bajo los títulos (`.hairline-title`), "el compás", se dibuja una vez al cargar.

**Layout:** contenedor 1240px + gutter fluido; secciones con `--section-y`; paneles editoriales asimétricos en vez de filas de tarjetas; líneas finas con moderación.

**Movimiento** (solo `transform`/`opacity`/`clip-path`, curvas `--ease-out` y `--ease-in-out`):
- Hero: el nombre sube, la línea dorada se dibuja y el resto entra escalonado (≈0,1–0,9 s).
- Al hacer scroll: textos con fade + subida de 18px (`data-reveal`); fotos que se abren como un telón con `clip-path` (`data-reveal-image`). **Importante:** el `clip-path` se aplica a la imagen hija, nunca al contenedor observado (si el contenedor está recortado del todo, IntersectionObserver no lo detecta y la foto no aparece nunca).
- Al revisar con capturas, probar también **sin** reducir movimiento: con reducir movimiento todo se ve aunque el reveal esté roto.
- Hover solo con ratón (`@media (hover: hover) and (pointer: fine)`).
- `prefers-reduced-motion: reduce` → todo visible sin movimiento. Sin JS, todo el contenido visible.

**Accesibilidad:** foco dorado visible, skip link, `aria-current` en navegación, alt descriptivos, objetivos táctiles ≥44px, menú móvil con `<dialog>` (Escape cierra), errores de formulario junto al campo.

## 8. SEO

- Título y descripción únicos por página y por idioma (en `en.ts` / `es.ts`).
- JSON-LD `Person` con datos confirmados (nombre, rol, email, redes).
- Open Graph con imagen 1200×630 generada del hero.
- **Pendiente: dominio de producción.** Cuando se confirme, poner `site` en `astro.config.mjs`: se activan solos canonical, `hreflang` y las URLs absolutas de OG. Entonces añadir `sitemap.xml` y `robots.txt` (con un endpoint propio, sin librerías).

## 9. Pendientes

- [ ] Datos de las pinturas que faltan (año, técnica, medidas de las grandes, disponibilidad) y fotos a más resolución que 700px si las hay.
- [ ] Dominio de producción → `site` + sitemap + robots.
- [ ] Configurar en Netlify el email de notificación del formulario.
- [ ] Opcional: fotos específicas que menciona `navegacion.md` y aún no existen (galería en vivo, proceso creativo, filosofía, contacto).

## 10. Flujo de trabajo de diseño

Este proyecto aplica los skills **Impeccable** (contexto: `.claude/skills/impeccable/scripts/impeccable context`; detector: `impeccable detect --json src/...`), **emil-design-eng**, **animate** y **ui-ux-pro-max** (sin Python instalado: solo su referencia rápida). Capturas de revisión en `.impeccable/review/` (no se suben a git).

## 11. Registro de cambios

- **2026-10-11** — Formulario revisado (HTML para Netlify, envío, errores, sin JS). `novalidate` lo pone ahora el script: sin JavaScript el navegador exige los campos obligatorios. En Netlify hay que activar *Forms → Enable form detection* antes del primer despliegue.
- **2026-10-11** — Botón flotante de WhatsApp en todas las páginas. Corregido el reveal de fotos: el telón `clip-path` estaba en el contenedor observado y las fotos de clases, DJ y About no llegaban a mostrarse con movimiento activado.
- **2026-10-11** — Galería con las 8 pinturas reales de `imagenes/arte` (sustituyen a los marcos de ejemplo); la tarjeta usa la proporción real de cada obra.
- **2026-10-11** — Primera versión: 5 páginas en EN y ES, header/footer, formulario Netlify, galería con marcos de ejemplo, tokens de marca, movimiento con reducción de movimiento, revisión final de Impeccable y DESIGN.md.
