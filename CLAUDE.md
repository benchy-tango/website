# CLAUDE.md — Web de Aaron Benchimol (benchy-tango)

Documento vivo del proyecto. **Léelo primero en cada sesión** y **actualízalo con cada cambio** (sección "Registro de cambios" al final). Resume arquitectura, diseño, navegación y estado, para no tener que releer los documentos de origen completos.

## Enfoque (desde 2026-10-17)

**Es una web de tango, y dentro del tango el DJ es el protagonista.** Contratar a Aaron como DJ es siempre la acción más clara (hero, primera sección de la Home y banda final). Las clases son la segunda línea. El arte tiene su página, pero no aparece como sección en la Home: solo como enlace discreto en "Sobre mí".

## 0. Fuentes de verdad

| Archivo | Qué manda |
|---|---|
| `../wesite-info/marca.md` | Identidad, posicionamiento, público, tono, CTAs (antes `brand-benchy.md`) |
| `../wesite-info/diseno.md` | **Fuente única del sistema visual**: colores, tipografía, botones, layout, fotografía, movimiento (antes `brand-benchy.md`) |
| `../wesite-info/navegacion.md` | Páginas, orden de secciones y texto base en español |
| `../wesite-info/tango-dj.md` | Perfil de DJ: estilo, formatos, repertorio (y algunas milongas por año) |
| `../wesite-info/formacion.md` | Formación de Aaron (sección "Training" de About): fuente de `src/data/training.ts` |
| `../wesite-info/aaron_benchimol_dj-history.md` | **Experiencia por país** (DJ, profesor, shows): fuente principal de `src/data/experience.ts` |
| `../wesite-info/architecture-benchy.md` | Arquitectura técnica, reglas de conversión, dependencias (las prioridades se actualizaron el 2026-10-17) |
| `../wesite-info/imagenes/` | Fotos originales del cliente |
| `PRODUCT.md` | Hechos de producto confirmados (contexto de Impeccable) |
| `DESIGN.md` + `.impeccable/design.json` | Documentación del diseño **derivada del código** por Impeccable. Si contradice `diseno.md`, gana `diseno.md` |

`brand-benchy.md` ya no existe: donde antes se citaba, ahora es `marca.md` (identidad y tono) o `diseno.md` (visual).

Reglas que no se rompen: **no inventar** biografía, testimonios, festivales, precios, títulos de obras ni fechas (solo lo que está en `tango-dj.md` y `navegacion.md`); **no añadir librerías** (solo Astro); **DJ primero, clases después**.

## 0b. Skills: cada una tiene UN dueño

Igual que en `../../_plantilla-web/CLAUDE.md`. Cada decisión tiene una sola skill responsable y ninguna cambia lo que es de otra.

| Decisión | Dueño | Las demás skills NO pueden |
|---|---|---|
| Colores, tipografía, espaciado, radios | `ui-ux-pro-max` | Inventar o cambiar colores y fuentes |
| Layout, componentes, estética general | `impeccable` | Cambiar tokens de `diseno.md` |
| Animaciones y microinteracciones | `emil-design-eng` / `animate` (Emil Kowalski) | Cambiar layout, colores o textos |
| Revisión de accesibilidad y UX | `web-design-guidelines` | Rediseñar; solo reporta |

**Reglas:**
- La fuente única del sistema visual es `../wesite-info/diseno.md`. Ninguna skill crea otro archivo de diseño. `DESIGN.md` existe porque Impeccable lo genera desde el código; no es fuente de verdad. Si Impeccable propone cambiar el sistema, el cambio se hace primero en `diseno.md` y luego en `tokens.css`.
- Si una skill necesita algo que no es de su responsabilidad, se detiene y lo indica.
- Invocar la skill por su nombre al empezar cada tarea (`/impeccable`, `/ui-ux-pro-max`, `/emil-design-eng`, `/animate`, `/web-design-guidelines`). No depender de que se active sola.
- No usar `frontend-design` (se solapa con Impeccable) ni otras skills de estilo (`design-taste-frontend`, `minimalist-ui`, `high-end-visual-design`, `redesign-existing-projects`…) salvo petición expresa.
- Revisión final: primero `/web-design-guidelines` (reporta archivo:línea), luego `/impeccable polish`. Corregir solo lo aprobado.

**Instalación** (si falta alguna; en `Het Waterwerk Websites/.claude/skills/` ya están `impeccable`, `ui-ux-pro-max`, `emil-design-eng`, `animate` y `web-design-guidelines`):

| Skill | Comando |
|---|---|
| ui-ux-pro-max | `npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max` |
| impeccable | `npx impeccable install` |
| web-design-guidelines | `npx skills add vercel-labs/agent-skills --skill web-design-guidelines` (instalada 2026-10-17) |
| emil-design-eng + animate | `npx skills add emilkowalski/skills --skill emil-design-eng animate` |

## 1. Stack y comandos

- **Astro 7** (salida estática), CSS propio, sin Tailwind ni frameworks UI. Única dependencia: `astro` (incluye `sharp` para imágenes).
- Fuentes **Bodoni Moda** (400, 500) y **Jost** (400, 500, 600) con la Fonts API de Astro (`astro.config.mjs`): se descargan al compilar y se sirven desde la propia web.
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
    [...lang]/            # cada página se genera 3 veces: EN en /, ES en /es/ y DE en /de/
      index.astro         # Home (liderada por el DJ)
      dj.astro            # Tango DJ (página principal del negocio)
      classes.astro       # Clases
      about.astro         # About
      art.astro           # Visual Art
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
    ExperienceMap.astro   # mapa mundo + Europa con círculos por país, chips con bandera y lista filtrable
    Icon.astro            # iconos SVG propios (trazo 1.5px): arrow, menu, close, instagram, facebook, whatsapp, mail, pin
  i18n/
    languages.ts          # idiomas, slugs, pageUrl(), enquiryUrl(), ENQUIRY_TYPES, getStaticPaths
    en.ts                 # TODOS los textos en inglés
    es.ts                 # TODOS los textos en español (misma forma que en.ts)
    de.ts                 # TODOS los textos en alemán (misma forma que en.ts; tuteo "du")
  data/
    contact.ts            # email, WhatsApp, redes (url vacía = oculta)
    dj.ts                 # lugares destacados de la Home (con país) y orquestas
    experience.ts         # TODA la experiencia (DJ, profesor, escenario) con país, ciudad, año y rol
    artworks.ts           # obras de la galería (vacío → marcos de ejemplo)
  styles/
    tokens.css            # ÚNICO sitio con valores de color/tamaño (tokens de diseno.md)
    global.css            # base, tipografía, botones, foco, selección, reveal, línea dorada, .programme-list
  assets/photos/          # fotos optimizadas (procedencia incrustada en cada JPG)
public/favicon.svg        # monograma "AB" oro sobre negro
public/flags/*.webp       # banderas 60×45 (de flag-icons, MIT; licencia en LICENSE-flag-icons.txt)
public/maps/world-land.svg # tierra Natural Earth 110m (dominio público), equirectangular x=lon+180, y=84-lat
```

**Los componentes no contienen texto**: todo el copy está en `src/i18n/en.ts`, `es.ts` y `de.ts`. Para cambiar un texto, cámbialo en los tres. Los datos con versión por idioma (`{ en, es, de }`) en `src/data/` también necesitan los tres.

## 3. Idiomas y URLs

- **Inglés** por defecto en la raíz; **español** bajo `/es/` y **alemán** bajo `/de/`. Mismos slugs: `/`, `/dj/`, `/classes/`, `/about/`, `/art/`, `/contact/` (y `/es/...`, `/de/...`). Todas las URLs terminan en `/`.
- `/dance-music/` y `/es/dance-music/` redirigen (301) a `/dj/` y `/es/dj/` (`netlify.toml`).
- `pageUrl(lang, page, suffix?)` construye cualquier enlace; `enquiryUrl(lang, type)` lleva al formulario con el tipo de consulta preseleccionado (`/contact/?enquiry=dj#contact-form`).
- Selector **EN / ES / DE** en el header (escritorio), en el menú móvil y en el footer; enlaza a la misma página en el otro idioma.
- Español: texto de `navegacion.md` (con tildes). Inglés: traducción, usando los CTAs del brief de arquitectura.

## 4. Navegación y contenido por página

**Marca: Benchy Tango** (`meta.siteName` en `en.ts` / `es.ts`): logo del header, menú móvil, footer, título del hero de la Home, títulos de pestaña y `og:site_name`; favicon "BT". El nombre de Aaron va en la etiqueta del hero, en el copy, el copyright y el JSON-LD (`Person` con `alternateName: Benchy Tango`).

Menú: **Tango DJ · Classes · About · Contact** (Contact con contorno marfil) + EN/ES. **Arte no está en el menú** (decisión 2026-10-17, "por ahora"): solo en el footer y como enlace discreto en Home y About. Para volver a ponerlo, añadir `{ page: 'art', label: t.art }` a `links` en `SiteHeader.astro`. El nombre "Aaron Benchimol" (Bodoni Moda) lleva a Home. Descriptor: "Tango DJ · Argentine Tango Dancer & Teacher".

### Home `/`
1. **Hero** con el retrato de DJ (`aaron-dj.jpg`). En escritorio la foto ocupa el 58% derecho y se funde con la obsidiana (`--shade-hero-pane`; el fondo de estudio oscuro hace invisible la costura); en móvil llena la pantalla con `--shade-hero-tall` para que el texto no quede sobre la camisa blanca. Nombre grande, línea dorada, etiqueta "Tango DJ · Dancer · Teacher", texto. CTAs: oro "Book Aaron as a DJ" → form `dj`; contorno "Discover the DJ Profile" → `/dj/`.
2. **Music for the Dance Floor**: sin foto. Título y texto a la izquierda; los 3 formatos (título + descripción) entre líneas finas y CTA oro a la derecha.
3. **Where I’ve Played**: 8 lugares de `DJ_HIGHLIGHTS` (Bodoni Moda + bandera + ciudad) y enlace "See All Countries" a `/dj/#experience-dj`.
4. **Tango Classes & Workshops** (banda `--color-surface`, más discreta): texto + CTA **contorno** "Enquire About Classes" (sin oro: el DJ manda) + foto de clase grupal (`aaron-class.jpg`, máx. 31rem: el original mide 496 px).
5. **From Buenos Aires to Berlin**: retrato + texto + "Read My Story" + enlace discreto "I also paint · See my paintings" → `/art/`.
6. **Banda final**: "Bring the music to your milonga" → "Book Aaron as a DJ".

### Tango DJ `/dj/`
PageIntro "Tango DJ" + CTA oro → **From the dance floor to the booth** (retrato DJ, filosofía, "How I play" en lista tipo programa) → **Formats** (`#formats`: milongas tradicionales, neo y 50/50, maratones y festivales, en 3 columnas entre líneas finas) → **The Golden Age** (banda surface, orquestas en Bodoni Moda separadas por punto dorado; en móvil una por línea) → **Where I’ve Played** (`#experience-dj`, `ExperienceMap` con `tag="dj"`) → banda final "Book Aaron for your event".

### Classes `/classes/`
**Hero** con `aaron-professor.jpg` (retrato con esmoquin; Aaron a la izquierda, título y CTA oro sobre el lado oscuro derecho con `--shade-hero-right`; en móvil texto abajo con `--shade-hero-tall`; header transparente) → **Learn to Dance Tango** (foto de clase grupal `aaron-class.jpg` a su tamaño real, formatos, CTA contorno → form `classes`) → **Where I’ve Taught** (`ExperienceMap` con `tag="teacher"`) → banda final "Ready to dance?" → form `classes`.

### About `/about/`
Retrato + h1 "Meet Aaron Benchimol" + texto (Buenos Aires → Berlín) + CTA oro "Talk to Aaron" → **Training** (filas tipo programa: años en oro, título, institución; formación continua con sus maestros y formación complementaria; fecha de egreso con `Intl.DateTimeFormat`) → **On Stage** (`ExperienceMap` con `tag="stage"`: shows, giras, bailarín) → **Art and Movement** (cita) + CTA "Discover the DJ Profile" → `/dj/` + enlace discreto "See my paintings".

### Visual Art `/art/`
Sin cambios: PageIntro "Art Collection" + CTA → galería de las 8 obras → **How I Create My Art** + CTA + Instagram `@benchy.art`. Ya no sale en la Home.

### Contact `/contact/`
PageIntro "Get in Touch" (texto con el DJ primero) → formulario + **Other Ways to Reach Me**: email, ubicación ("Based in Berlin. Available for international travel and events."), redes y botón **WhatsApp**.

## 5. WhatsApp flotante

Círculo verde fijo abajo a la derecha en **todas las páginas** (petición del cliente), añadido en `BaseLayout`. Abre `wa.me/491795299525` con un saludo ya escrito según el idioma (`whatsappButton` en `en.ts` / `es.ts`). Colores en tokens: `--color-whatsapp` `#25D366` (verde oficial; no es color de marca), `--color-whatsapp-strong` (hover), `--shadow-float`. Respeta el área segura del móvil; aparece suave a los 600 ms (sin animación con reducir movimiento).

## 5b. Formulario de contacto (Netlify Forms)

- Formulario `name="contact"`, `data-netlify="true"`, honeypot `bot-field`, campo oculto `form-name`. Ambos idiomas envían al mismo formulario; campo oculto `language` dice desde qué página llegó.
- Campos: name*, email*, enquiry (select: `dj` (primero y opción por defecto), `classes`, `workshop`, `performance`, `art`, `other` — **valores en inglés**, etiquetas traducidas), details (lugar/fecha del evento, opcional — lo pide el brief §4), message*.
- `novalidate` lo añade el script (no está en el HTML): sin JS el navegador valida los campos obligatorios.
- Con JS: validación propia, envío por `fetch` a `/`, **mensaje de éxito solo si Netlify responde OK**; si falla, error con el email. Sin JS: POST normal y página de confirmación de Netlify.
- `?enquiry=<tipo>` en la URL preselecciona el tipo.
- **Pendiente en Netlify** (no está en el código): *Site configuration → Notifications → Emails and webhooks → Form submission notifications* → email donde llegan las consultas. Solo funciona con la web publicada en Netlify (en local da error, es normal).

## 6. Datos editables

- **Contacto y redes** (`src/data/contact.ts`): email `benchimol.fi@gmail.com`; WhatsApp `+49 179 5299525`; Instagram tango `@benchytango`, Instagram arte `@benchy.art`, Facebook `https://www.facebook.com/share/1RGFGtS3h5/`. Una `url` vacía oculta esa red en todo el sitio.
- **Obras** (`src/data/artworks.ts`): 8 pinturas de `../wesite-info/imagenes/arte/` (fotos de 700×700, copiadas sin cambios a `src/assets/artworks/`). Seis con título de la serie *Energiebild* tomado del nombre de archivo (Explosion des Lichts, Engel des Mutes, Rückkehr zur Quelle, Dein Licht bricht hervor, Insel des inneren Friedens, Tempel der Glückseligkeit) y dos pequeñas firmadas de 15 × 15 cm sin título. Año, técnica, medidas de las grandes y disponibilidad: desconocidos, no se muestran. Para añadir una obra: foto en `src/assets/artworks/`, importarla y añadir entrada (`image`, `alt` en/es y solo los datos conocidos). El orden de la lista es el de la web (ya no salen en Home). Si la lista quedara vacía, vuelven los marcos de ejemplo.
- **Experiencia** (`src/data/experience.ts`): una entrada por milonga/evento con `country` (código ISO), `city`, `event`, `years` y `role`. El `role` (clave de `ROLES`) decide en qué página sale: `dj` → Tango DJ, `teacher` → Clases, `stage` → Sobre mí (una entrada puede salir en varias). Nombres propios como texto plano (no se traducen); textos descriptivos como `{ en, es }`. Etiquetas de rol en `experience.roles` de `en.ts` / `es.ts`. Nombres de país con `Intl.DisplayNames` (automático por idioma). Para un país nuevo: coordenadas y región en `COUNTRIES` y bandera en `public/flags/<código>.webp` (SVG 4x3 de flag-icons convertido a 60×45 con `sharp`). Solo entradas reales de las fuentes.
- **Mapa** (`ExperienceMap.astro`): círculo por país (tamaño = nº de entradas, color = región: Europa oro, América burdeos aclarado, Asia y Oceanía marfil; tokens `--color-map-*`). Panel Mundo (sin los países europeos, con recuadro discontinuo) + panel "Europa en detalle". Clic en círculo o chip = filtra; otro clic o "Todos los países" = quita el filtro. El país queda en la URL (`?country=de`). Sin filtro se ven 12 filas y "Ver todas". Sin JS: mapa y lista completa, sin filtros.
- `DJ_HIGHLIGHTS` (`src/data/dj.ts`) = los 8 de la Home (con país para la bandera); `GOLDEN_AGE_ORCHESTRAS` = orquestas.
- **Fotos nuevas**: optimizar a máx. 2400px con `sharp` (aplicar `.rotate()` por la orientación EXIF) y guardar en `src/assets/photos/`; incrustar su procedencia con `impeccable embed-prompt <foto> --prompt "SOURCED: …"`.

## 7. Sistema de diseño (resumen; fuente de verdad `../wesite-info/diseno.md`)

**Concepto:** "milonga de noche": fondo obsidiana, fotos con carácter, el nombre en Bodoni Moda como un programa; nada de plantilla de escuela de baile.

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
| `--shade-hero-pane/-tall/-bottom/-side`, `--shade-floor` | degradados obsidiana | oscurecen las fotos solo donde hay texto encima (`-pane`: hero escritorio; `-tall`: hero móvil) |
| `--stage-light` | resplandor burdeos | luz de escenario de la banda final |

Excepción: `<meta name="theme-color">` lleva `#0b0b0b` literal (el navegador no lee variables CSS ahí).

Nunca dos rellenos dorados compitiendo en la misma vista (por eso el "Contact" del header es contorno marfil).

**Tipografía:** Bodoni Moda Regular para nombre, títulos y citas; Jost para todo lo demás. Escala fluida en tokens (`--text-hero` 48→88px, `--text-page` 40→64px, `--text-section` 30→40px, `--text-card` 22→28px, cuerpo 16–17px, interlineado 1.65). Etiquetas en mayúsculas espaciadas solo para metadatos, **nunca encima de un título**.

**Botones:** primario oro con texto negro; secundario contorno marfil 45% → oro al pasar el ratón; radio 3px (sin píldoras); `:active` escala 0.97. En pantallas ≤480px se reduce el espaciado para que los CTAs largos en español quepan en una línea.

**Motivo de marca:** línea dorada fina de 1px bajo los títulos (`.hairline-title`), "el compás", se dibuja una vez al cargar.

**Layout:** contenedor 1240px + gutter fluido; secciones con `--section-y`; paneles editoriales asimétricos en vez de filas de tarjetas; líneas finas con moderación. `.programme-list` (global) = lista tipo programa de milonga, un elemento por línea entre líneas finas.

**Movimiento** (solo `transform`/`opacity`/`clip-path`, curvas `--ease-out` y `--ease-in-out`):
- Hero: el nombre sube, la línea dorada se dibuja y el resto entra escalonado (≈0,1–0,9 s).
- Al hacer scroll: textos con fade + subida de 18px (`data-reveal`); fotos que se abren como un telón con `clip-path` (`data-reveal-image`). **Importante:** el `clip-path` se aplica a la imagen hija, nunca al contenedor observado (si el contenedor está recortado del todo, IntersectionObserver no lo detecta y la foto no aparece nunca).
- Al revisar con capturas, probar también **sin** reducir movimiento: con reducir movimiento todo se ve aunque el reveal esté roto.
- Hover solo con ratón (`@media (hover: hover) and (pointer: fine)`).
- `prefers-reduced-motion: reduce` → todo visible sin movimiento. Sin JS, todo el contenido visible.

**Accesibilidad:** foco dorado visible, skip link, `aria-current` en navegación, alt descriptivos, objetivos táctiles ≥44px, menú móvil con `<dialog>` (Escape cierra), errores de formulario junto al campo.

## 7b. Legal (Alemania: Aaron vive en Berlín)

Revisado el 2026-10-17 sobre lo que hace realmente el sitio: **sin cookies, sin almacenamiento local, sin analítica, sin recursos de terceros** (fuentes, imágenes y mapa servidos desde el propio dominio); Instagram, Facebook y WhatsApp son solo enlaces.

| Requisito | Estado |
|---|---|
| **Impressum** (§ 5 DDG), accesible desde todas las páginas | `/impressum/` (EN "Legal Notice", ES "Aviso legal"), enlace en el pie |
| **Política de privacidad** (art. 13 RGPD) | `/privacy/` (Datenschutz): Netlify (hosting y Forms), Gmail, WhatsApp, enlaces a redes, derechos, autoridad de Berlín |
| **Banner de cookies** (§ 25 TDDDG) | **No hace falta** mientras no haya cookies ni rastreo. Si se añade analítica, un vídeo incrustado (YouTube, Vimeo), un mapa de Google, un píxel o un newsletter: actualizar la privacidad y **entonces sí** hará falta un banner de consentimiento |
| AGB / derecho de desistimiento | No: no se vende nada online, solo consultas |
| Declaración de accesibilidad (BFSG) | No: sin venta online, microempresa |

- Datos del responsable en `src/data/legal.ts` (nombre, **dirección postal**, email, teléfono, nº de IVA opcional). Textos en `src/i18n/legal.ts` (el alemán es la versión jurídicamente relevante). Componente `LegalPage.astro`.
- **Mientras falte la dirección**, las páginas muestran "Angabe fehlt" en rojo y un aviso de borrador, y el build escribe `[legal] … Do not publish`. **No publicar así.**
- El formulario de contacto enlaza a la política de privacidad.
- No es asesoramiento jurídico: si Aaron factura como autónomo, conviene que lo revise un asesor (por ejemplo, el nº de IVA y si actividad y dirección coinciden con el registro mercantil o el alta fiscal).

## 8. SEO

- Título y descripción únicos por página y por idioma (en `en.ts` / `es.ts`).
- JSON-LD `Person` con datos confirmados (nombre, rol, email, redes).
- Títulos orientados a la búsqueda de DJ: "Tango DJ from Buenos Aires, based in Berlin" / "DJ de tango de Buenos Aires, afincado en Berlín".
- Open Graph con imagen 1200×630 generada de `aaron-dj.jpg` recortada desde arriba (`position: 'top'`) para que salgan la cara y los auriculares.
- **Pendiente: dominio de producción.** Cuando se confirme, poner `site` en `astro.config.mjs`: se activan solos canonical, `hreflang` y las URLs absolutas de OG. Entonces añadir `sitemap.xml` y `robots.txt` (con un endpoint propio, sin librerías).

## 9. Pendientes

- [ ] Datos de las pinturas que faltan (año, técnica, medidas de las grandes, disponibilidad) y fotos a más resolución que 700px si las hay.
- [ ] **Dirección postal de Aaron** (calle, número, código postal) en `src/data/legal.ts`: obligatoria en el Impressum. Sin ella no se puede publicar. Nº de IVA solo si tiene.
- [ ] Dominio de producción → `site` + sitemap + robots.
- [ ] Configurar en Netlify el email de notificación del formulario.
- [ ] Que Aaron confirme la trayectoria de `tango-dj.md` (lugares, años, notas) antes de publicar: ahora es contenido visible.
- [ ] Más fotos de cabina (DJ tocando en una milonga) y, si las hay, muestras de audio o vídeo de sets (solo con su aprobación; sin autoplay).

## 10. Flujo de trabajo de diseño

Ver **0b** para qué skill decide qué. Herramientas: Impeccable (contexto: `.claude/skills/impeccable/scripts/impeccable context`; detector: `impeccable detect --json src/...`); ui-ux-pro-max sin Python instalado (solo su referencia rápida). Capturas de revisión en `.impeccable/review/` (no se suben a git). Para capturas de página completa con los revelados visibles: Playwright vía `npx -p playwright` con `channel: 'msedge'` y `reducedMotion: 'reduce'`, recorriendo la página antes para que carguen las imágenes `lazy`.

## 11. Registro de cambios

- **2026-10-17** — **Estética de DJ y vinilo, bordó como tercer color.** Sin subtítulos con puntos (·): la etiqueta del hero es ahora un crédito de disco ("by Aaron Benchimol"), descriptor y resumen del mapa en frase normal, eventos unidos con guion. Bordó (`--color-burgundy`) como tercer color de marca (regla nueva en `diseno.md`): etiqueta del vinilo, relleno de botones secundarios, paradas del viaje. Botones: suben 2 px y crecen 3 % al pasar el ratón; el secundario se rellena de bordó; el icono es un **vinilo** que gira (prop `disc` en `Button.astro`, sustituye a la flecha). **`VinylSleeve.astro`**: fotos como portada de disco con el vinilo que sale al aparecer y gira al pasar el ratón (DJ, Sobre mí, Home). Época de Oro como **lista de temas de un LP** en dos columnas (sin numeración A1–B2, a petición del cliente). **`DjJourney.astro`** en la página DJ: un avión recorre al hacer scroll una ruta curva por los países donde pinchó (primer año en cada uno, desde `experience.ts`) hasta Berlín; cada parada enlaza al mapa filtrado. **Contacto**: casilla obligatoria de aceptación de la política de privacidad (campo `privacy` en Netlify). Movimiento reducido: todo estático y visible.

- **2026-10-17** — **Fuente de texto: Jost** (sustituye a Montserrat, demasiado vista en webs genéricas; elegida con `ui-ux-pro-max` y aprobada por el cliente). Heredera de Futura: con Bodoni Moda forma la pareja clásica de los carteles y programas de los años 30. Pesos 400/500/600, autoalojada.

- **2026-10-17** — **Fuente de marca y títulos: Bodoni Moda** (sustituye a Playfair Display; elegida con `ui-ux-pro-max` y aprobada por el cliente). Didone de alto contraste, como las partituras y carteles de tango de la Época de Oro. Jost sigue para el texto. Cambiado en `diseno.md` (fuente de verdad), `astro.config.mjs`, `tokens.css`, `BaseLayout` y el favicon.

- **2026-10-17** — Sección **Formación** en About (EN "Training", DE "Ausbildung"): UNTREF, CADEF, Centro Integral de Natación A-1459, formación continua en tango salón y escenario con sus maestros y formación complementaria. Datos en `src/data/training.ts`, fuente `../wesite-info/formacion.md`.

- **2026-10-17** — **Páginas legales**: Impressum (`/impressum/`) y política de privacidad (`/privacy/`) en EN, ES y DE, con enlaces en el pie de todas las páginas y junto al formulario. Sin banner de cookies (no hace falta: el sitio no usa cookies ni rastreo). Datos en `src/data/legal.ts`; **falta la dirección postal de Aaron**. 25 páginas.

- **2026-10-17** — **Versión en alemán** en `/de/` (`src/i18n/de.ts`, tuteo "du"), con el alemán añadido a los datos por idioma (experiencias, ciudades, textos alternativos de las obras). Selector EN · ES · DE. Los nombres de país del mapa salen en alemán con `Intl.DisplayNames`. 19 páginas (6 × 3 + 404).

- **2026-10-17** — **Marca Benchy Tango** en el logo (header, menú móvil, footer), el título del hero de la Home, los títulos de pestaña y el favicon (BT). La etiqueta del hero pasa a "Aaron Benchimol · Tango DJ · Dancer · Teacher".

- **2026-10-17** — Filtro por **continente**: la leyenda de colores (Europa, América, Asia y Oceanía) son botones que filtran la lista y atenúan en el mapa los países de fuera (`?region=europe` en la URL). Un solo filtro a la vez (país o continente). **Fotos de clases nuevas** (`Teaching.jpg` → `aaron-class.jpg`, `tango-professor.jpg` → `aaron-professor.jpg`, con procedencia incrustada): el retrato es la cabecera de Clases y la foto de grupo sustituye al selfie de clase en Clases y en la Home. `aaron-teaching.jpg` (selfie) ya no se usa y se quitó de `src/assets`. **Pendiente:** `Teaching.jpg` mide solo 496×231 px; pedir una versión más grande.

- **2026-10-17** — **Experiencia por país con mapa y banderas.** Nuevo `src/data/experience.ts` con la tabla de `aaron_benchimol_dj-history.md` más las entradas de `tango-dj.md` que no estaban (mismo lugar y año). Nuevo `ExperienceMap.astro` en Tango DJ (DJ), Clases (profesor) y Sobre mí (shows, giras, bailarín); sustituye a la trayectoria anterior de la página DJ. Banderas de flag-icons (MIT) en WebP y mapa de Natural Earth (dominio público), sin dependencias nuevas. **Quitada la foto de baile con pareja** (`aaron-dancing.jpg`) a petición del cliente: fuera de la Home ("Music for the Dance Floor" ahora es solo tipografía), fuera de Clases (se quitó "Moments on the Dance Floor") y como imagen para redes (ahora el retrato de DJ). Destacados de la Home con bandera.

- **2026-10-17** — Revisión final: `/web-design-guidelines` y `/impeccable polish`. Correcciones: scroll suave solo sin reducir movimiento; formulario con `spellcheck="false"` en email, `autocomplete="off"` en campos no personales y errores con `aria-live`; `translate="no"` en el nombre, lugares y orquestas; `overscroll-behavior: contain` y hover en el menú móvil; hover en los enlaces de contacto; años con cifras tabulares; apóstrofos tipográficos (’) y Title Case en los títulos en inglés. Hero entre 960 y 1199px: panel de foto al 50% con `--shade-hero-pane-narrow` para que el nombre no toque la foto. Excepciones intencionadas (no se corrigen): primera persona en el copy (voz de marca), `clip-path` en el revelado de fotos (`diseno.md` §6), títulos en español en su capitalización actual.

- **2026-10-17** — **Enfoque tango con el DJ como protagonista.** `brand-benchy.md` se dividió en `../wesite-info/marca.md` (identidad, tono, CTAs) y `../wesite-info/diseno.md` (sistema visual, fuente única); referencias actualizadas en código, `PRODUCT.md`, brief de arquitectura y este archivo. Añadida la sección 0b (skills y responsabilidades, como la plantilla). Nueva página `/dj/` (perfil, formatos, Época de Oro, trayectoria de `tango-dj.md` en `src/data/dj.ts`); `/dance-music/` pasa a `/classes/` (solo clases) con redirección 301 a `/dj/`. Home rehecha: hero con retrato de DJ, "Music for the dance floor", "Where I've played", clases en banda discreta, About con enlace discreto al arte; el arte sale de la Home y del menú (queda en el footer). Formulario con "DJ booking" primero. `navegacion.md` reescrito con la nueva estructura.
- **2026-10-11** — Formulario revisado (HTML para Netlify, envío, errores, sin JS). `novalidate` lo pone ahora el script: sin JavaScript el navegador exige los campos obligatorios. En Netlify hay que activar *Forms → Enable form detection* antes del primer despliegue.
- **2026-10-11** — Botón flotante de WhatsApp en todas las páginas. Corregido el reveal de fotos: el telón `clip-path` estaba en el contenedor observado y las fotos de clases, DJ y About no llegaban a mostrarse con movimiento activado.
- **2026-10-11** — Galería con las 8 pinturas reales de `imagenes/arte` (sustituyen a los marcos de ejemplo); la tarjeta usa la proporción real de cada obra.
- **2026-10-11** — Primera versión: 5 páginas en EN y ES, header/footer, formulario Netlify, galería con marcos de ejemplo, tokens de marca, movimiento con reducción de movimiento, revisión final de Impeccable y DESIGN.md.
