# Full.Support — Sitio web de Ezequiel Sánchez

## El negocio

**Full.Support** es el negocio de Ezequiel Sánchez, técnico IT independiente en Rosario, Santa Fe, Argentina.

- **Modalidad:** cliente trae el equipo o Ezequiel lo retira a domicilio (Rosario)
- **Horarios:** L-V desde las 18hs, Sábados 8-16hs, Domingos solo emergencias
- **WhatsApp:** 5493416022238 → https://wa.me/5493416022238
- **Teléfono:** 341 602-2238
- **Email:** ezedsanchez@outlook.com
- **Diagnóstico:** $20.000, descontable si avanza el trabajo

## Stack

HTML5 + CSS3 + JS vanilla. Sin frameworks, sin build tools, sin npm.
Funciona abriendo los HTML directamente en el browser o en GitHub Pages.

**Hosting:** GitHub Pages en https://geekybear.github.io

## Arquitectura de archivos

```
/
├── index.html          ← Página principal (hero, servicios resumidos, por qué yo)
├── about.html          ← Perfil profesional (CRÍTICO para Google Ads compliance)
├── servicios.html      ← Lista completa de servicios IT y web + FAQ
├── contacto.html       ← Datos de contacto, horarios y formulario
├── css/
│   ├── variables.css   ← Tokens: colores, fuentes, espaciado
│   ├── base.css        ← Reset, body, tipografía, animaciones, container
│   ├── components.css  ← Nav, buttons, marquee, banner, footer, floating WA, FAQ
│   └── layout.css      ← Hero, sections, tablas, grids, about/contact/services layouts, responsive
├── js/
│   └── main.js         ← Hamburger menu, active nav, fadeUp IntersectionObserver, form submit
├── assets/
│   ├── photo.png       ← Foto de Ezequiel (reemplazar con foto real)
│   └── favicon.svg     ← Iniciales "ES" en naranja sobre fondo cream
├── google56684a87931a9838.html  ← Verificación Google Search Console
├── sitemap.xml
├── robots.txt
└── CLAUDE.md
```

## Sistema de diseño

### Colores (css/variables.css)
| Variable        | Valor                 | Uso                          |
|-----------------|-----------------------|------------------------------|
| `--cream`       | `#F4EFE6`             | Fondo principal              |
| `--cream2`      | `#EDE7DA`             | Fondo secciones alternas     |
| `--cream3`      | `#E2DAC9`             | Hover en tablas              |
| `--ink`         | `#1A1612`             | Texto principal, fondo dark  |
| `--ink2`        | `#3D342A`             | Hover en celdas oscuras      |
| `--ink3`        | `#6B5C4E`             | Texto secundario, labels     |
| `--orange`      | `#C4622D`             | Acento, CTA, punto del logo  |
| `--orange2`     | `#A84E22`             | Hover en orange              |
| `--orange-light`| `#F0D5C4`             | Hover sutil en celdas        |
| `--rule`        | `rgba(26,22,18,0.12)` | Bordes y separadores         |

### Tipografía
- **DM Serif Display** → Títulos, H1, H2, números grandes
- **DM Mono** → Labels, precios, nav, badges, monospace
- **Barlow** → Cuerpo de texto

### Convenciones CSS
- **BEM** para todas las clases: `.block__element--modifier`
- Max 400 líneas por archivo CSS
- Variables CSS en `variables.css`, no hardcodeadas en otros archivos

### Componentes clave
- `.hero__badge` — badge superior naranja con línea
- `.btn--primary` — botón relleno ink, hover naranja
- `.btn--ghost` — link con underline
- `.marquee` — banda animada fondo ink
- `.services-table` — tabla de servicios con hover
- `.timeline` — grid 2 col en fondo oscuro
- `.why-grid` — grid 2 col con número grande de fondo
- `.banner` — bloque CTA fondo ink
- `.floating-wa` — botón fijo WhatsApp verde

## URLs importantes

- **Sitio:** https://geekybear.github.io
- **About:** https://geekybear.github.io/about.html
- **Servicios:** https://geekybear.github.io/servicios.html
- **Contacto:** https://geekybear.github.io/contacto.html
- **LinkedIn:** https://www.linkedin.com/in/ezequiel-sanchez-dev/
- **GitHub:** https://github.com/geekybear
- **Dev portfolio:** https://ezequielsanchez.dev
- **WhatsApp:** https://wa.me/5493416022238

## Google Ads Compliance

`about.html` es la página crítica para la política "Third Party Consumer Technical Support" de Google Ads.

**Reglas:**
- Evitar en todo el sitio: "virus removal", "repair", "technical support" (en inglés)
- Usar en español: "mantenimiento", "optimización", "configuración", "técnico local", "servicio de PC"
- El negocio debe verse como **local e independiente**: una persona real en Rosario, no un call center
- `about.html` debe dejar claro que Ezequiel es el profesional que trabaja directamente

## Google Tag Manager

ID: `AW-779045094` — presente en el `<head>` de **todas** las páginas.

## SEO técnico

Cada página tiene:
- `<title>` único con ciudad
- `<meta name="description">` única (~155 caracteres)
- Open Graph completo (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`)
- `<link rel="canonical">`
- `lang="es"` en el tag `<html>`
- Schema.org JSON-LD:
  - `index.html` → `LocalBusiness` + `WebSite`
  - `about.html` → `Person`
  - `servicios.html` → `FAQPage`

## Agregar una nueva página

1. Copiar la estructura de `contacto.html` (la más simple)
2. Actualizar: `<title>`, `<meta description>`, `og:*`, `<link rel="canonical">`
3. Cambiar la clase `.nav__link--active` al link correspondiente en nav y mobile menu
4. Agregar la URL al `sitemap.xml`
5. Agregar el Schema.org JSON-LD apropiado si aplica
