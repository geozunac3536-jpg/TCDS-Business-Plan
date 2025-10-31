[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17494368.svg)(https://doi.org/10.5281/zenodo.17494368)
# 🌐 TCDS-Σ — Business Plan & Dossier
Repositorio maestro del **Canon Económico y Científico 2025–2030** del proyecto TCDS-Σ.  
Licencia dual: CC BY-NC-SA 4.0 + TCDS Σ Open Lab License v1.0  
Autor: **Genaro Carrasco Ozuna** · [ORCID 0009-0005-6358-9910](https://orcid.org/0009-0005-6358-9910)
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
## 🧩 Documentos científicos y legales (reproducibilidad abierta)

| Documento | Descripción |
|------------|--------------|
| [Conciencia_operativa.pdf](./docs/Conciencia_operativa.pdf) | Dossier consolidado de conciencia operativa (control Q_ctrl, KPIs, sincronograma CSL-IA). |
| [dossier_conciencia_tcds.tex](./docs/dossier_conciencia_tcds.tex) | Código fuente LaTeX auditable — reproducibilidad total desde Overleaf o compilador local. |
| [DECLARACION_AUTONOMIA.pdf](./docs/DECLARACION_AUTONOMIA.pdf) | Declaración formal de autonomía y propiedad intelectual del proyecto TCDS-Σ. |
