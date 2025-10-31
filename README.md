# TCDS-Σ — Business Plan & Dossier (Dual License + GA4)

Este paquete incluye:
- **Landing page ultra ligera** optimizada para Lighthouse/PageSpeed (objetivo 100/100).
- **Google Analytics 4 (GA4)** + **Consent Mode v2** + envío de **Web Vitals** a GA.
- **Estructura de licencia dual** (CC BY-NC-SA + TCDS Σ Open Lab).
- **Capa económica auditable**: `economics/ledger.json`, `prices.yaml`, recibos hash.
- **Plantillas** para Zenodo (`.zenodo.json`) y GitHub Pages.
- **Dossiers** LaTeX listos para compilar.
- **Eventos GA** para `donation`, `license_purchase`, `hardware_purchase` y `outbound_click`.

## Cómo desplegar en GitHub Pages
1. Crea el repo `TCDS-BUSINESS-PLAN`.
2. Sube el contenido de este paquete al *branch* `main`.
3. En Settings → Pages, selecciona Source: `Deploy from a branch` → `main` (root).
4. Reemplaza tu ID de GA4 en `index.html` (`G-XXXXXXXXXX`) y verifica el tráfico.
5. Ajusta `sitemap.xml` con la URL real del sitio (`https://geozunac3536-jpg.github.io/TCDS-BUSINESS-PLAN`).

## Botones y eventos
- Botón **Apoyar ahora** (Flujo B): lanza `donation` a GA y redirige al enlace de pago (cámbialo en `index.html`).
- Botón **Comprar Licencia** (Flujo A): lanza `license_purchase`.
- Botón **Comprar Dev-Kit ΣFET**: lanza `hardware_purchase`.

Contacto: **Genaro Carrasco Ozuna** · ORCID 0009-0005-6358-9910 · <geozunac3536@gmail.com>
