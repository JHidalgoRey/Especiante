# Spice Atlas Shopify Theme (OS 2.0)

Tema Shopify compatible con suscripciones para caja mensual de especias.

## Estructura

- `layout/theme.liquid`: layout principal + tokens globales.
- `config/settings_schema.json`: personalización global (colores, tipografías, pre-lanzamiento).
- `assets/theme.css`: estilos globales.
- `assets/theme.js`: acordeones, selector de planes, animaciones ligeras, sticky CTA móvil.
- `sections/`: módulos totalmente editables (Home, PDP, páginas informativas, clientes).
- `templates/*.json`: composición por página con secciones/bloques.

## Templates incluidos

- Home: `templates/index.json`
- Producto suscripción: `templates/product.subscription.json` (y `templates/product.json` por defecto)
- How it works: `templates/page.how-it-works.json`
- Past boxes/countries: `templates/page.past-boxes.json`
- Gift: `templates/page.gift.json`
- FAQ: `templates/page.faq.json`
- About: `templates/page.about.json`
- Contact: `templates/page.contact.json`
- Account: `templates/customers/account.json`
- Login: `templates/customers/login.json`
- Register: `templates/customers/register.json`

## Pre-lanzamiento

En **Theme settings → Modo pre-lanzamiento**:

- Activa `prelaunch_mode` para cambiar CTAs a lista de espera.
- Muestra mensaje de lote fundador (`founder_batch_text`).
- Añade link principal de waitlist (`waitlist_link`).

## Integraciones de apps

Secciones con `@app` blocks para conectar:

- Suscripciones (Recharge / Appstle / Skio) en PDP.
- Reseñas en Home y PDP.
- Captura email (Klaviyo / Omnisend / Mailchimp).
