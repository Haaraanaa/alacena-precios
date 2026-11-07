# Precios de Alacena

Precios de la compra que usa la app **Alacena** (menús semanales y lista de la compra).

- `prices.json`: precios leídos de las tiendas online de los supermercados, más un precio de referencia
  por ingrediente. Lo que una web no deja consultar se estima en la app con el índice de precios OCU.
- `precios.mjs`: el buscador (generado desde el repositorio de la app con `npm run precios:publicar`).
- Se actualiza solo cada lunes con GitHub Actions (`.github/workflows/precios.yml`), o a mano desde la pestaña
  *Actions* → *Precios semanales* → *Run workflow*.

Los precios son orientativos y pueden no coincidir con los de cada tienda.
