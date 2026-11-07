// Generado desde github.com/Haaraanaa/alacena (scripts/precios). No editar a mano: npm run precios:publicar.

// scripts/precios/actualizar.ts
import { readFile as readFile2, writeFile as writeFile2 } from "node:fs/promises";
import { join as join2 } from "node:path";

// packages/core/src/pricing.ts
var CHAIN_INDEX = {
  alcampo: 103,
  mercadona: 105,
  lidl: 105,
  aldi: 107,
  carrefour: 109,
  dia: 112,
  eroski: 113
};

// packages/core/src/data/etiquetas.ts
var TAGS = {
  // Verdura y fruta
  cebolla: ["vegetal"],
  ajo: ["vegetal"],
  tomate: ["vegetal"],
  pimiento_rojo: ["vegetal"],
  pimiento_verde: ["vegetal"],
  calabacin: ["vegetal"],
  zanahoria: ["vegetal"],
  patata: ["vegetal"],
  lechuga: ["vegetal"],
  espinacas: ["vegetal"],
  brocoli: ["vegetal"],
  champinon: ["vegetal"],
  limon: ["vegetal"],
  aguacate: ["vegetal"],
  berenjena: ["vegetal"],
  pepino: ["vegetal"],
  coliflor: ["vegetal"],
  puerro: ["vegetal"],
  esparragos: ["vegetal"],
  calabaza: ["vegetal"],
  boniato: ["vegetal"],
  setas: ["vegetal"],
  platano: ["vegetal"],
  manzana: ["vegetal"],
  naranja: ["vegetal"],
  mandarina: ["vegetal"],
  pera: ["vegetal"],
  kiwi: ["vegetal"],
  fresas: ["vegetal"],
  melon: ["vegetal"],
  sandia: ["vegetal"],
  uvas: ["vegetal"],
  // Carne
  pechuga_pollo: ["carne"],
  muslo_pollo: ["carne"],
  pechuga_pavo: ["carne"],
  carne_picada: ["carne", ["sulfitos"]],
  // los preparados de carne picada llevan sulfitos
  hamburguesa: ["carne", ["sulfitos"]],
  lomo_cerdo: ["carne"],
  jamon_york: ["carne", ["leche", "soja"]],
  jamon_serrano: ["carne"],
  bacon: ["carne"],
  chorizo: ["carne", ["leche", "soja"]],
  salchichas: ["carne", ["leche", "soja", "gluten"]],
  caldo_pollo: ["carne", ["apio"]],
  // Pescado y marisco
  salmon: ["pescado", ["pescado"]],
  merluza_cong: ["pescado", ["pescado"]],
  bacalao_cong: ["pescado", ["pescado"]],
  atun: ["pescado", ["pescado"]],
  sardinas: ["pescado", ["pescado"]],
  gambas_cong: ["marisco", ["crustaceos"]],
  mejillon_cong: ["marisco", ["moluscos"]],
  calamar_cong: ["marisco", ["moluscos"]],
  // Lácteos y huevo
  huevo: ["huevo", ["huevo"]],
  leche: ["lacteo", ["leche"]],
  yogur_griego: ["lacteo", ["leche"]],
  yogur_natural: ["lacteo", ["leche"]],
  natillas: ["lacteo", ["leche", "huevo"]],
  queso_rallado: ["lacteo", ["leche"]],
  mozzarella: ["lacteo", ["leche"]],
  queso_lonchas: ["lacteo", ["leche"]],
  queso_fresco: ["lacteo", ["leche"]],
  queso_cabra: ["lacteo", ["leche"]],
  nata_cocinar: ["lacteo", ["leche"]],
  mantequilla: ["lacteo", ["leche"]],
  // Cereales y pan
  arroz: ["cereal"],
  arroz_basmati: ["cereal"],
  pasta: ["cereal", ["gluten"]],
  harina: ["cereal", ["gluten"]],
  cuscus: ["cereal", ["gluten"]],
  pan_rallado: ["cereal", ["gluten"]],
  avena: ["cereal", ["gluten"]],
  tortilla_trigo: ["cereal", ["gluten"]],
  masa_pizza: ["cereal", ["gluten"]],
  pan_hamburguesa: ["cereal", ["gluten", "sesamo", "leche", "huevo", "soja"]],
  pan_molde: ["cereal", ["gluten", "soja", "sesamo"]],
  // Legumbres y conservas vegetales
  lentejas: ["vegetal"],
  garbanzos: ["vegetal"],
  alubias: ["vegetal"],
  tomate_triturado: ["vegetal"],
  tomate_frito: ["vegetal"],
  piquillos: ["vegetal"],
  maiz: ["vegetal"],
  leche_coco: ["vegetal"],
  // Congelados vegetales
  patatas_cong: ["vegetal"],
  guisantes_cong: ["vegetal"],
  judias_verdes_cong: ["vegetal"],
  salteado_verduras_cong: ["vegetal"],
  // Grasas, salsas y especias
  aceite_oliva: ["grasa"],
  vinagre: ["condimento", ["sulfitos"]],
  sal: ["condimento"],
  pimienta: ["condimento"],
  pimenton: ["condimento"],
  oregano: ["condimento"],
  comino: ["condimento"],
  curry: ["condimento", ["mostaza", "apio"]],
  salsa_soja: ["condimento", ["soja", "gluten"]],
  mayonesa: ["condimento", ["huevo", "mostaza"]],
  ketchup: ["condimento"],
  miel: ["miel"],
  // Fitness
  claras_huevo: ["huevo", ["huevo"]],
  tofu: ["vegetal", ["soja"]],
  requeson: ["lacteo", ["leche"]],
  kefir: ["lacteo", ["leche"]],
  bebida_soja: ["vegetal", ["soja"]],
  ternera_filete: ["carne"],
  fiambre_pavo: ["carne", ["leche", "soja"]],
  atun_natural: ["pescado", ["pescado"]],
  quinoa: ["cereal"],
  arroz_integral: ["cereal"],
  pasta_integral: ["cereal", ["gluten"]],
  almendras: ["vegetal", ["frutos_cascara"]],
  nueces: ["vegetal", ["frutos_cascara"]],
  crema_cacahuete: ["vegetal", ["cacahuete"]],
  sesamo: ["vegetal", ["sesamo"]],
  arandanos: ["vegetal"],
  rucula: ["vegetal"],
  mango: ["vegetal"],
  pina: ["vegetal"],
  canela: ["condimento"]
};

// packages/core/src/data/ingredients.ts
var BASE = [
  // Fruta y verdura
  { id: "cebolla", name: "Cebolla", unit: "g", pack: 1e3, price: 1.45, aisle: "fruta-verdura", shelfLifeDays: 30, unitWeight: 150 },
  { id: "ajo", name: "Ajo", unit: "g", pack: 250, price: 1.5, aisle: "fruta-verdura", shelfLifeDays: 30, unitWeight: 5 },
  { id: "tomate", name: "Tomate", unit: "g", pack: 1e3, price: 2.2, aisle: "fruta-verdura", shelfLifeDays: 7, unitWeight: 150 },
  { id: "pimiento_rojo", name: "Pimiento rojo", unit: "g", pack: 500, price: 1.6, aisle: "fruta-verdura", shelfLifeDays: 10, unitWeight: 200 },
  { id: "pimiento_verde", name: "Pimiento verde", unit: "g", pack: 500, price: 1.4, aisle: "fruta-verdura", shelfLifeDays: 10, unitWeight: 150 },
  { id: "calabacin", name: "Calabac\xEDn", unit: "g", pack: 1e3, price: 1.6, aisle: "fruta-verdura", shelfLifeDays: 8, unitWeight: 300 },
  { id: "zanahoria", name: "Zanahoria", unit: "g", pack: 1e3, price: 0.95, aisle: "fruta-verdura", shelfLifeDays: 21, unitWeight: 80 },
  { id: "patata", name: "Patata", unit: "g", pack: 3e3, price: 3.5, aisle: "fruta-verdura", shelfLifeDays: 30, unitWeight: 200 },
  { id: "lechuga", name: "Lechuga / mezcla de hojas", unit: "g", pack: 250, price: 1.1, aisle: "fruta-verdura", shelfLifeDays: 5, openedLifeDays: 2 },
  { id: "espinacas", name: "Espinacas frescas", unit: "g", pack: 300, price: 1.5, aisle: "fruta-verdura", shelfLifeDays: 5, openedLifeDays: 2 },
  { id: "brocoli", name: "Br\xF3coli", unit: "g", pack: 500, price: 1.7, aisle: "fruta-verdura", shelfLifeDays: 6, unitWeight: 500 },
  { id: "champinon", name: "Champi\xF1\xF3n laminado", unit: "g", pack: 250, price: 1.25, aisle: "fruta-verdura", shelfLifeDays: 5, openedLifeDays: 2 },
  { id: "limon", name: "Lim\xF3n", unit: "ud", pack: 6, price: 1.5, aisle: "fruta-verdura", shelfLifeDays: 21, unitWeight: 130 },
  { id: "aguacate", name: "Aguacate", unit: "ud", pack: 2, price: 2, aisle: "fruta-verdura", shelfLifeDays: 5, unitWeight: 200 },
  { id: "berenjena", name: "Berenjena", unit: "g", pack: 300, price: 0.8, aisle: "fruta-verdura", shelfLifeDays: 8, unitWeight: 300 },
  { id: "pepino", name: "Pepino", unit: "g", pack: 300, price: 0.5, aisle: "fruta-verdura", shelfLifeDays: 8, unitWeight: 300 },
  { id: "coliflor", name: "Coliflor", unit: "g", pack: 800, price: 1.6, aisle: "fruta-verdura", shelfLifeDays: 7, unitWeight: 800 },
  { id: "puerro", name: "Puerro", unit: "g", pack: 500, price: 1.3, aisle: "fruta-verdura", shelfLifeDays: 14, unitWeight: 150 },
  { id: "esparragos", name: "Esp\xE1rragos verdes", unit: "g", pack: 250, price: 1.8, aisle: "fruta-verdura", shelfLifeDays: 5, unitWeight: 20 },
  { id: "calabaza", name: "Calabaza troceada", unit: "g", pack: 500, price: 1.4, aisle: "fruta-verdura", shelfLifeDays: 7, openedLifeDays: 3 },
  { id: "boniato", name: "Boniato", unit: "g", pack: 1e3, price: 1.9, aisle: "fruta-verdura", shelfLifeDays: 21, unitWeight: 300 },
  { id: "setas", name: "Setas variadas", unit: "g", pack: 250, price: 2, aisle: "fruta-verdura", shelfLifeDays: 4, openedLifeDays: 2 },
  { id: "platano", name: "Pl\xE1tano", unit: "ud", pack: 6, price: 1.6, aisle: "fruta-verdura", shelfLifeDays: 6, unitWeight: 150 },
  // Fruta de postre (precio orientativo de malla o bandeja en Mercadona, otoño de 2026)
  { id: "manzana", name: "Manzana", unit: "ud", pack: 6, price: 2.1, aisle: "fruta-verdura", shelfLifeDays: 21, unitWeight: 180 },
  { id: "naranja", name: "Naranja", unit: "ud", pack: 10, price: 2.4, aisle: "fruta-verdura", shelfLifeDays: 21, unitWeight: 200 },
  { id: "mandarina", name: "Mandarina", unit: "ud", pack: 12, price: 2.2, aisle: "fruta-verdura", shelfLifeDays: 14, unitWeight: 80 },
  { id: "pera", name: "Pera", unit: "ud", pack: 6, price: 2.2, aisle: "fruta-verdura", shelfLifeDays: 10, unitWeight: 180 },
  { id: "kiwi", name: "Kiwi", unit: "ud", pack: 6, price: 2, aisle: "fruta-verdura", shelfLifeDays: 14, unitWeight: 90 },
  { id: "fresas", name: "Fresas", unit: "g", pack: 500, price: 2.5, aisle: "fruta-verdura", shelfLifeDays: 4 },
  { id: "melon", name: "Mel\xF3n", unit: "g", pack: 2e3, price: 3.2, aisle: "fruta-verdura", shelfLifeDays: 10, openedLifeDays: 4 },
  { id: "sandia", name: "Sand\xEDa troceada", unit: "g", pack: 1500, price: 2.6, aisle: "fruta-verdura", shelfLifeDays: 5, openedLifeDays: 3 },
  { id: "uvas", name: "Uvas", unit: "g", pack: 500, price: 2.3, aisle: "fruta-verdura", shelfLifeDays: 7 },
  // Carne, pescado
  { id: "pechuga_pollo", name: "Pechuga de pollo fileteada", unit: "g", pack: 500, price: 3.6, aisle: "carne-pescado", shelfLifeDays: 4, openedLifeDays: 2 },
  { id: "muslo_pollo", name: "Contramuslo de pollo", unit: "g", pack: 600, price: 3.4, aisle: "carne-pescado", shelfLifeDays: 4, openedLifeDays: 2 },
  { id: "pechuga_pavo", name: "Filetes de pechuga de pavo", unit: "g", pack: 400, price: 3.6, aisle: "carne-pescado", shelfLifeDays: 4, openedLifeDays: 2 },
  { id: "carne_picada", name: "Carne picada mixta", unit: "g", pack: 500, price: 3.9, aisle: "carne-pescado", shelfLifeDays: 3, openedLifeDays: 1 },
  { id: "lomo_cerdo", name: "Lomo de cerdo en filetes", unit: "g", pack: 500, price: 3.8, aisle: "carne-pescado", shelfLifeDays: 4, openedLifeDays: 2 },
  { id: "salmon", name: "Salm\xF3n (lomos)", unit: "g", pack: 250, price: 4.6, aisle: "carne-pescado", shelfLifeDays: 3, openedLifeDays: 1 },
  { id: "merluza_cong", name: "Merluza congelada", unit: "g", pack: 400, price: 3.9, aisle: "congelados" },
  { id: "gambas_cong", name: "Gamba pelada congelada", unit: "g", pack: 300, price: 4.3, aisle: "congelados" },
  { id: "bacalao_cong", name: "Bacalao desalado congelado", unit: "g", pack: 400, price: 5.5, aisle: "congelados" },
  { id: "mejillon_cong", name: "Mejill\xF3n cocido congelado", unit: "g", pack: 450, price: 3.5, aisle: "congelados" },
  { id: "calamar_cong", name: "Calamar troceado congelado", unit: "g", pack: 500, price: 4.2, aisle: "congelados" },
  { id: "jamon_york", name: "Jam\xF3n cocido lonchas", unit: "g", pack: 200, price: 1.9, aisle: "carne-pescado", shelfLifeDays: 20, openedLifeDays: 4 },
  { id: "bacon", name: "Bacon en tiras", unit: "g", pack: 200, price: 1.8, aisle: "carne-pescado", shelfLifeDays: 25, openedLifeDays: 5 },
  { id: "jamon_serrano", name: "Jam\xF3n serrano lonchas", unit: "g", pack: 100, price: 1.9, aisle: "carne-pescado", shelfLifeDays: 60, openedLifeDays: 7 },
  { id: "chorizo", name: "Chorizo", unit: "g", pack: 200, price: 2.2, aisle: "carne-pescado", shelfLifeDays: 60, openedLifeDays: 15 },
  { id: "salchichas", name: "Salchichas tipo Frankfurt", unit: "g", pack: 330, price: 1.6, aisle: "carne-pescado", shelfLifeDays: 30, openedLifeDays: 4, unitWeight: 33 },
  { id: "hamburguesa", name: "Burger meat de vacuno", unit: "ud", pack: 4, price: 3.7, aisle: "carne-pescado", shelfLifeDays: 4, openedLifeDays: 1, unitWeight: 115 },
  // Lácteos y huevos
  { id: "huevo", name: "Huevos L", unit: "ud", pack: 12, price: 2.6, aisle: "lacteos-huevos", shelfLifeDays: 25, unitWeight: 60 },
  { id: "leche", name: "Leche semidesnatada", unit: "ml", pack: 1e3, price: 0.95, aisle: "lacteos-huevos", openedLifeDays: 4 },
  { id: "yogur_griego", name: "Yogur griego natural", unit: "ud", pack: 4, price: 1.9, aisle: "lacteos-huevos", shelfLifeDays: 20, unitWeight: 125 },
  { id: "yogur_natural", name: "Yogur natural", unit: "ud", pack: 8, price: 1.6, aisle: "lacteos-huevos", shelfLifeDays: 20, unitWeight: 125 },
  { id: "natillas", name: "Natillas", unit: "ud", pack: 4, price: 1.5, aisle: "lacteos-huevos", shelfLifeDays: 20, unitWeight: 125 },
  { id: "queso_rallado", name: "Queso rallado", unit: "g", pack: 200, price: 2.1, aisle: "lacteos-huevos", shelfLifeDays: 40, openedLifeDays: 10 },
  { id: "mozzarella", name: "Mozzarella rallada", unit: "g", pack: 200, price: 2, aisle: "lacteos-huevos", shelfLifeDays: 30, openedLifeDays: 5 },
  { id: "queso_lonchas", name: "Queso en lonchas", unit: "g", pack: 200, price: 2.2, aisle: "lacteos-huevos", shelfLifeDays: 30, openedLifeDays: 6 },
  { id: "queso_fresco", name: "Queso fresco batido 0%", unit: "g", pack: 500, price: 1.6, aisle: "lacteos-huevos", shelfLifeDays: 20, openedLifeDays: 4 },
  { id: "queso_cabra", name: "Rulo de queso de cabra", unit: "g", pack: 200, price: 2.3, aisle: "lacteos-huevos", shelfLifeDays: 30, openedLifeDays: 5 },
  { id: "nata_cocinar", name: "Nata para cocinar", unit: "ml", pack: 200, price: 0.75, aisle: "lacteos-huevos", openedLifeDays: 3 },
  { id: "mantequilla", name: "Mantequilla", unit: "g", pack: 250, price: 2.4, aisle: "lacteos-huevos", shelfLifeDays: 60, openedLifeDays: 30 },
  // Despensa
  { id: "arroz", name: "Arroz redondo", unit: "g", pack: 1e3, price: 1.25, aisle: "despensa", openedLifeDays: 180 },
  { id: "arroz_basmati", name: "Arroz basmati", unit: "g", pack: 1e3, price: 2.1, aisle: "despensa", openedLifeDays: 180 },
  { id: "pasta", name: "Pasta (macarrones/espaguetis)", unit: "g", pack: 500, price: 0.85, aisle: "despensa", openedLifeDays: 180 },
  { id: "lentejas", name: "Lentejas cocidas (bote)", unit: "g", pack: 400, price: 0.9, aisle: "conservas", openedLifeDays: 3 },
  { id: "garbanzos", name: "Garbanzos cocidos (bote)", unit: "g", pack: 400, price: 0.85, aisle: "conservas", openedLifeDays: 3 },
  { id: "alubias", name: "Alubias blancas cocidas (bote)", unit: "g", pack: 400, price: 0.85, aisle: "conservas", openedLifeDays: 3 },
  { id: "tomate_triturado", name: "Tomate triturado", unit: "g", pack: 400, price: 0.75, aisle: "conservas", openedLifeDays: 5 },
  { id: "tomate_frito", name: "Tomate frito", unit: "g", pack: 400, price: 1, aisle: "conservas", openedLifeDays: 6 },
  // Latas sueltas dentro del pack: abrir una no estropea las demás, y cada receta usa latas enteras.
  { id: "atun", name: "At\xFAn en aceite (pack 3)", unit: "g", pack: 156, price: 2.6, aisle: "conservas" },
  { id: "sardinas", name: "Sardinas en aceite (lata)", unit: "g", pack: 120, price: 1.3, aisle: "conservas" },
  { id: "piquillos", name: "Pimientos del piquillo", unit: "g", pack: 220, price: 1.6, aisle: "conservas", openedLifeDays: 5 },
  { id: "maiz", name: "Ma\xEDz dulce", unit: "g", pack: 280, price: 0.9, aisle: "conservas", openedLifeDays: 3 },
  { id: "caldo_pollo", name: "Caldo de pollo", unit: "ml", pack: 1e3, price: 1.15, aisle: "conservas", openedLifeDays: 4 },
  { id: "harina", name: "Harina de trigo", unit: "g", pack: 1e3, price: 0.8, aisle: "despensa", openedLifeDays: 180 },
  { id: "cuscus", name: "Cusc\xFAs", unit: "g", pack: 500, price: 1.2, aisle: "despensa", openedLifeDays: 180 },
  { id: "pan_rallado", name: "Pan rallado", unit: "g", pack: 500, price: 0.9, aisle: "despensa", openedLifeDays: 90 },
  { id: "avena", name: "Copos de avena", unit: "g", pack: 500, price: 1.1, aisle: "despensa", openedLifeDays: 90 },
  { id: "tortilla_trigo", name: "Tortillas de trigo", unit: "ud", pack: 8, price: 1.45, aisle: "panaderia", shelfLifeDays: 30, openedLifeDays: 7, unitWeight: 40 },
  { id: "masa_pizza", name: "Masa de pizza fresca", unit: "ud", pack: 1, price: 1.5, aisle: "lacteos-huevos", shelfLifeDays: 15, unitWeight: 260 },
  { id: "pan_hamburguesa", name: "Pan de hamburguesa", unit: "ud", pack: 4, price: 1.3, aisle: "panaderia", shelfLifeDays: 10, openedLifeDays: 4, unitWeight: 75 },
  { id: "pan_molde", name: "Pan de molde integral", unit: "g", pack: 460, price: 1.4, aisle: "panaderia", shelfLifeDays: 12, openedLifeDays: 6, unitWeight: 25 },
  { id: "patatas_cong", name: "Patatas prefritas congeladas", unit: "g", pack: 1e3, price: 1.6, aisle: "congelados" },
  { id: "guisantes_cong", name: "Guisantes congelados", unit: "g", pack: 1e3, price: 1.7, aisle: "congelados" },
  { id: "judias_verdes_cong", name: "Jud\xEDas verdes congeladas", unit: "g", pack: 1e3, price: 1.7, aisle: "congelados" },
  { id: "salteado_verduras_cong", name: "Salteado de verduras congelado", unit: "g", pack: 600, price: 1.8, aisle: "congelados" },
  // Especias, salsas y básicos
  { id: "aceite_oliva", name: "Aceite de oliva", unit: "ml", pack: 1e3, price: 7.5, aisle: "especias-salsas", staple: true },
  { id: "vinagre", name: "Vinagre", unit: "ml", pack: 1e3, price: 0.6, aisle: "especias-salsas", staple: true },
  { id: "sal", name: "Sal", unit: "g", pack: 1e3, price: 0.35, aisle: "especias-salsas", staple: true },
  { id: "pimienta", name: "Pimienta negra", unit: "g", pack: 50, price: 1.1, aisle: "especias-salsas", staple: true },
  { id: "pimenton", name: "Piment\xF3n", unit: "g", pack: 75, price: 1, aisle: "especias-salsas", staple: true },
  { id: "oregano", name: "Or\xE9gano", unit: "g", pack: 15, price: 0.9, aisle: "especias-salsas", staple: true },
  { id: "comino", name: "Comino", unit: "g", pack: 40, price: 1, aisle: "especias-salsas", staple: true },
  { id: "curry", name: "Curry", unit: "g", pack: 40, price: 1.1, aisle: "especias-salsas", staple: true },
  { id: "salsa_soja", name: "Salsa de soja", unit: "ml", pack: 250, price: 1.2, aisle: "especias-salsas", openedLifeDays: 180 },
  { id: "mayonesa", name: "Mayonesa", unit: "g", pack: 450, price: 1.4, aisle: "especias-salsas", openedLifeDays: 30 },
  { id: "ketchup", name: "Ketchup", unit: "g", pack: 550, price: 1.2, aisle: "especias-salsas", openedLifeDays: 60 },
  { id: "leche_coco", name: "Leche de coco", unit: "ml", pack: 400, price: 1.3, aisle: "conservas", openedLifeDays: 3 },
  { id: "miel", name: "Miel", unit: "g", pack: 500, price: 3.2, aisle: "despensa" },
  // Fitness: proteína magra, cereales integrales, frutos secos y semillas (precios orientativos, Mercadona 11-2026)
  { id: "claras_huevo", name: "Claras de huevo pasteurizadas", unit: "g", pack: 500, price: 1.95, aisle: "lacteos-huevos", shelfLifeDays: 21, openedLifeDays: 4 },
  { id: "tofu", name: "Tofu firme", unit: "g", pack: 400, price: 1.95, aisle: "lacteos-huevos", shelfLifeDays: 30, openedLifeDays: 4 },
  { id: "requeson", name: "Reques\xF3n", unit: "g", pack: 250, price: 1.6, aisle: "lacteos-huevos", shelfLifeDays: 14, openedLifeDays: 4 },
  { id: "kefir", name: "K\xE9fir natural", unit: "g", pack: 500, price: 1.45, aisle: "lacteos-huevos", shelfLifeDays: 21, openedLifeDays: 5 },
  { id: "bebida_soja", name: "Bebida de soja sin az\xFAcar", unit: "ml", pack: 1e3, price: 1.1, aisle: "lacteos-huevos", openedLifeDays: 5 },
  { id: "ternera_filete", name: "Filetes de ternera (redondo)", unit: "g", pack: 400, price: 5.8, aisle: "carne-pescado", shelfLifeDays: 3 },
  { id: "fiambre_pavo", name: "Pechuga de pavo en lonchas", unit: "g", pack: 250, price: 2.2, aisle: "carne-pescado", shelfLifeDays: 20, openedLifeDays: 5 },
  { id: "atun_natural", name: "At\xFAn al natural (pack 3)", unit: "g", pack: 156, price: 2.9, aisle: "conservas" },
  { id: "quinoa", name: "Quinoa", unit: "g", pack: 500, price: 2.6, aisle: "despensa", openedLifeDays: 180 },
  { id: "arroz_integral", name: "Arroz integral", unit: "g", pack: 1e3, price: 1.65, aisle: "despensa" },
  { id: "pasta_integral", name: "Pasta integral", unit: "g", pack: 500, price: 0.95, aisle: "despensa" },
  { id: "almendras", name: "Almendras naturales", unit: "g", pack: 200, price: 2.4, aisle: "despensa", openedLifeDays: 60 },
  { id: "nueces", name: "Nueces peladas", unit: "g", pack: 200, price: 2.6, aisle: "despensa", openedLifeDays: 60 },
  { id: "crema_cacahuete", name: "Crema de cacahuete 100 %", unit: "g", pack: 350, price: 2.5, aisle: "despensa", openedLifeDays: 90 },
  { id: "sesamo", name: "S\xE9samo", unit: "g", pack: 200, price: 1.3, aisle: "despensa", openedLifeDays: 120 },
  { id: "arandanos", name: "Ar\xE1ndanos", unit: "g", pack: 125, price: 1.9, aisle: "fruta-verdura", shelfLifeDays: 7, openedLifeDays: 3 },
  { id: "rucula", name: "R\xFAcula", unit: "g", pack: 100, price: 1.2, aisle: "fruta-verdura", shelfLifeDays: 5, openedLifeDays: 2 },
  { id: "mango", name: "Mango", unit: "ud", pack: 1, price: 1.5, aisle: "fruta-verdura", shelfLifeDays: 6, unitWeight: 300 },
  { id: "pina", name: "Pi\xF1a", unit: "ud", pack: 1, price: 2, aisle: "fruta-verdura", shelfLifeDays: 6, openedLifeDays: 3, unitWeight: 900 },
  { id: "canela", name: "Canela molida", unit: "g", pack: 40, price: 1.2, aisle: "especias-salsas", staple: true }
];
var INGREDIENTS = BASE.map((i) => {
  const tags = TAGS[i.id];
  if (!tags) throw new Error(`Falta el grupo y los al\xE9rgenos de "${i.id}" en etiquetas.ts`);
  return { ...i, group: tags[0], allergens: tags[1] ?? [] };
});

// packages/core/src/data/receta.ts
function receta(id, name, category, minutes, appliances, ingredients, steps) {
  return { id, name, category, minutes, appliances, servings: 2, ingredients: parse(id, ingredients), steps: steps.split("|").map((s) => s.trim()) };
}
function parse(id, spec) {
  return spec.split(";").map((s) => s.trim()).filter(Boolean).map((part) => {
    const m = part.match(/^([a-z_]+)([*?]?)\s+(\d+(?:\.\d+)?)\s*(g|kg|ml|l|ud|cda|cdta)$/);
    if (!m) throw new Error(`Receta ${id}: ingrediente mal escrito "${part}"`);
    const [, ingredient, mark, amount, unit] = m;
    return {
      id: ingredient,
      amount: Number(amount),
      unit,
      ...mark === "*" && { base: true },
      ...mark === "?" && { optional: true }
    };
  });
}

// packages/core/src/data/recetario-fit.ts
var RECETAS_FIT = [
  // ——— Verduras y cremas ———
  receta(
    "crema_calabaza",
    "Crema de calabaza",
    "fit",
    25,
    ["fuego", "batidora"],
    "calabaza* 500g; cebolla 1ud; patata 1ud; queso_fresco? 60g; aceite_oliva 1cda",
    "Pocha la cebolla | A\xF1ade calabaza y patata, cubre de agua y cuece 15 min | Tritura con el queso fresco"
  ),
  receta(
    "crema_calabaza_robot",
    "Crema de calabaza y zanahoria (robot)",
    "fit",
    30,
    ["robot"],
    "calabaza* 400g; zanahoria 2ud; cebolla 0.5ud; caldo_pollo 400ml; aceite_oliva 1cda",
    "Trocea la verdura y sofr\xEDe con el aceite 5 min, vel. 1, 120 \xB0C | A\xF1ade el caldo y cocina 20 min, 100 \xB0C, vel. 1 | Tritura 1 min subiendo a vel. 10"
  ),
  receta(
    "crema_esparragos",
    "Crema de esp\xE1rragos verdes",
    "fit",
    25,
    ["fuego", "batidora"],
    "esparragos* 250g; patata 1ud; puerro 1ud; leche? 100ml; aceite_oliva 1cda",
    "Pocha el puerro | A\xF1ade esp\xE1rragos troceados y patata, cubre de agua 15 min | Tritura con la leche"
  ),
  receta(
    "crema_setas",
    "Crema de setas",
    "fit",
    25,
    ["fuego", "batidora"],
    "setas* 250g; champinon 150g; cebolla 1ud; patata 1ud; nata_cocinar? 100ml; caldo_pollo 500ml",
    "Saltea cebolla y setas 6 min | A\xF1ade patata y caldo, 12 min | Tritura con la nata"
  ),
  receta(
    "crema_espinacas",
    "Crema de espinacas",
    "fit",
    20,
    ["fuego", "batidora"],
    "espinacas* 300g; patata 1ud; cebolla 0.5ud; queso_fresco? 60g; aceite_oliva 1cda",
    "Pocha la cebolla | A\xF1ade la patata con agua 12 min y las espinacas 3 min | Tritura con el queso"
  ),
  receta(
    "crema_verduras_robot",
    "Crema de verduras (robot)",
    "fit",
    30,
    ["robot"],
    "calabacin* 1ud; zanahoria 2ud; puerro 1ud; patata 1ud; aceite_oliva 1cda",
    "Trocea y sofr\xEDe 5 min, 120 \xB0C, vel. 1 | Cubre de agua y cocina 20 min, 100 \xB0C, vel. 1 | Tritura 1 min a vel. 10"
  ),
  receta(
    "vichyssoise",
    "Vichyssoise templada",
    "fit",
    25,
    ["fuego", "batidora"],
    "puerro* 3ud; patata 2ud; leche 200ml; mantequilla 15g",
    "Rehoga el puerro en la mantequilla | A\xF1ade patata y agua justa, 15 min | Tritura con la leche"
  ),
  receta(
    "calabacin_salteado_gambas",
    "Calabac\xEDn salteado con gambas",
    "fit",
    12,
    ["fuego"],
    "calabacin* 2ud; gambas_cong 200g; ajo 2ud; aceite_oliva 1cda",
    "Saltea el ajo y el calabac\xEDn en dados 6 min | A\xF1ade las gambas 3 min | Sal y pimienta"
  ),
  receta(
    "esparragos_huevo",
    "Esp\xE1rragos a la plancha con huevo",
    "fit",
    15,
    ["fuego"],
    "esparragos* 250g; huevo 2ud; jamon_serrano? 40g; aceite_oliva 1cda",
    "Plancha los esp\xE1rragos 6 min | Fr\xEDe o escalfa los huevos | Sirve con el jam\xF3n por encima"
  ),
  receta(
    "esparragos_airfryer",
    "Esp\xE1rragos y patata a la airfryer",
    "fit",
    20,
    ["airfryer"],
    "esparragos* 250g; patata 2ud; huevo? 2ud; aceite_oliva 1cda",
    "Patata en gajos finos con aceite: airfryer 200 \xB0C 10 min | A\xF1ade los esp\xE1rragos 6 min | Sirve con huevo si quieres"
  ),
  receta(
    "setas_ajillo_huevo",
    "Setas al ajillo con huevo",
    "fit",
    15,
    ["fuego"],
    "setas* 250g; ajo 3ud; huevo 2ud; aceite_oliva 2cda",
    "Dora el ajo laminado | Saltea las setas 6 min | Casca los huevos encima y tapa 3 min"
  ),
  receta(
    "revuelto_setas",
    "Revuelto de setas y jam\xF3n",
    "fit",
    12,
    ["fuego"],
    "huevo* 4ud; setas 200g; jamon_serrano? 40g; ajo 1ud",
    "Saltea ajo y setas 5 min | A\xF1ade los huevos batidos | Cuaja jugoso y termina con el jam\xF3n"
  ),
  receta(
    "brocoli_ajo_huevo",
    "Br\xF3coli al ajillo con huevo cocido",
    "fit",
    15,
    ["fuego", "microondas"],
    "brocoli* 400g; ajo 3ud; huevo 2ud; pimenton 2g; aceite_oliva 2cda",
    "Br\xF3coli al microondas 5 min tapado; cuece los huevos 10 min | Dora el ajo y a\xF1ade el piment\xF3n | Saltea el br\xF3coli y sirve con el huevo"
  ),
  receta(
    "coliflor_ajoarriero",
    "Coliflor al ajoarriero",
    "fit",
    20,
    ["fuego", "microondas"],
    "coliflor* 600g; ajo 3ud; pimenton 3g; vinagre 1cda; aceite_oliva 3cda",
    "Coliflor en ramilletes al microondas 8 min tapada | Dora el ajo, fuera del fuego a\xF1ade piment\xF3n y vinagre | Riega la coliflor"
  ),
  receta(
    "judias_verdes_ajo",
    "Jud\xEDas verdes rehogadas con ajo",
    "fit",
    15,
    ["fuego"],
    "judias_verdes_cong* 500g; ajo 3ud; jamon_serrano? 40g; aceite_oliva 2cda",
    "Cuece las jud\xEDas 8 min | Dora el ajo (y el jam\xF3n) | Rehoga las jud\xEDas 3 min"
  ),
  receta(
    "menestra_verduras",
    "Menestra de verduras con huevo",
    "fit",
    25,
    ["fuego"],
    "salteado_verduras_cong* 400g; guisantes_cong 100g; judias_verdes_cong 150g; huevo 2ud; jamon_serrano? 40g; aceite_oliva 1cda",
    "Cuece las verduras 10 min y los huevos aparte | Rehoga con el jam\xF3n | Sirve con el huevo en cuartos"
  ),
  receta(
    "pisto_microondas",
    "Pisto r\xE1pido al microondas",
    "fit",
    20,
    ["microondas"],
    "calabacin* 1ud; pimiento_rojo 1ud; cebolla 1ud; tomate_triturado 200g; aceite_oliva 2cda",
    "Verdura en dados con el aceite, tapada 8 min | A\xF1ade el tomate y sal | 6 min m\xE1s removiendo a mitad"
  ),
  receta(
    "berenjena_tomate_horno",
    "Berenjena al horno con tomate y queso de cabra",
    "fit",
    30,
    ["horno"],
    "berenjena* 2ud; tomate 2ud; queso_cabra 100g; aceite_oliva 2cda; oregano 1g",
    "Horno a 220 \xB0C | Berenjena en rodajas con aceite y sal 15 min | Pon tomate y queso de cabra y gratina 8 min"
  ),
  receta(
    "calabaza_asada_cabra",
    "Calabaza asada con queso de cabra",
    "fit",
    25,
    ["airfryer"],
    "calabaza* 500g; queso_cabra 80g; miel? 10g; lechuga 80g; aceite_oliva 1cda",
    "Calabaza en dados con aceite: airfryer 200 \xB0C 15 min | Pon el queso encima 2 min | Sirve sobre la lechuga con un hilo de miel"
  ),
  receta(
    "boniato_relleno",
    "Boniato asado relleno de garbanzos",
    "fit",
    25,
    ["microondas", "airfryer"],
    "boniato* 2ud; garbanzos 200g; yogur_griego 1ud; comino 1g; aceite_oliva 1cda",
    "Boniato al microondas 8 min y airfryer 200 \xB0C 8 min | Saltea los garbanzos con comino | Rellena y pon el yogur con sal"
  ),
  receta(
    "ensalada_boniato_pollo",
    "Ensalada templada de boniato y pollo",
    "fit",
    25,
    ["microondas", "fuego"],
    "boniato* 1ud; pechuga_pollo* 250g; espinacas 100g; queso_cabra? 60g; aceite_oliva 2cda",
    "Boniato en dados al microondas 7 min y d\xF3ralo | Haz el pollo a la plancha en tiras | Mezcla con las espinacas y el queso"
  ),
  receta(
    "tomates_rellenos_atun",
    "Tomates rellenos de at\xFAn",
    "fit",
    15,
    [],
    "tomate* 4ud; atun 104g; maiz 60g; mayonesa 30g; lechuga? 60g",
    "Vac\xEDa los tomates | Mezcla la pulpa con at\xFAn, ma\xEDz y mayonesa | Rellena y sirve fr\xEDo"
  ),
  receta(
    "pimientos_rellenos_atun",
    "Pimientos del piquillo rellenos de at\xFAn",
    "fit",
    15,
    ["microondas"],
    "piquillos* 220g; atun 104g; queso_fresco 80g; lechuga? 60g",
    "Mezcla at\xFAn y queso fresco | Rellena los pimientos | Templa 1 min en el microondas"
  ),
  receta(
    "ensalada_piquillos_huevo",
    "Ensalada de piquillos, huevo y at\xFAn",
    "fit",
    15,
    ["fuego"],
    "piquillos* 150g; huevo 2ud; atun 104g; lechuga 100g; aceite_oliva 2cda; vinagre 1cda",
    "Cuece los huevos 10 min | Corta los pimientos en tiras | Monta y ali\xF1a"
  ),
  // ——— Ensaladas completas ———
  receta(
    "ensalada_queso_cabra",
    "Ensalada de queso de cabra y nueces de la casa",
    "fit",
    10,
    ["fuego"],
    "lechuga* 150g; queso_cabra 100g; tomate 1ud; miel? 10g; aceite_oliva 2cda; vinagre 1cda",
    "Dora las rodajas de queso 1 min por lado | Monta la ensalada con el tomate | Ali\xF1a y pon un hilo de miel"
  ),
  receta(
    "ensalada_garbanzos_feta",
    "Ensalada de garbanzos con pepino y yogur",
    "fit",
    10,
    [],
    "garbanzos* 400g; pepino 1ud; tomate 1ud; cebolla 0.5ud; yogur_griego 1ud; aceite_oliva 1cda",
    "Escurre los garbanzos | Pica pepino, tomate y cebolla | Mezcla y ali\xF1a con el yogur, sal y aceite"
  ),
  receta(
    "ensalada_sardinas",
    "Ensalada de patata y sardinas",
    "fit",
    20,
    ["microondas"],
    "patata* 2ud; sardinas* 120g; tomate 1ud; cebolla 0.5ud; aceite_oliva 1cda; vinagre 1cda",
    "Patata en dados al microondas 8 min tapada | Enfr\xEDa y mezcla con tomate y cebolla | Pon las sardinas y ali\xF1a"
  ),
  receta(
    "ensalada_mejillones",
    "Ensalada de arroz con mejillones",
    "fit",
    20,
    ["fuego"],
    "arroz* 150g; mejillon_cong 200g; pimiento_rojo 0.5ud; maiz 60g; aceite_oliva 2cda; vinagre 1cda",
    "Cuece el arroz y enfr\xEDalo; calienta los mejillones 2 min | Pica el pimiento | Mezcla y ali\xF1a"
  ),
  receta(
    "ensalada_pasta_pollo",
    "Ensalada de pasta con pollo y tomate",
    "fit",
    20,
    ["fuego"],
    "pasta* 160g; pechuga_pollo 200g; tomate 1ud; lechuga? 60g; maiz 60g; aceite_oliva 2cda",
    "Cuece la pasta y enfr\xEDala | Haz el pollo a la plancha en dados | Mezcla todo y ali\xF1a"
  ),
  receta(
    "ensalada_cuscus_atun",
    "Tabul\xE9 de cusc\xFAs con at\xFAn",
    "fit",
    10,
    [],
    "cuscus* 150g; atun 104g; tomate 1ud; pepino 0.5ud; limon 0.5ud; aceite_oliva 2cda",
    "Hidrata el cusc\xFAs con agua caliente o fr\xEDa 10 min | Pica la verdura | Mezcla con el at\xFAn, lim\xF3n y aceite"
  ),
  receta(
    "ensalada_lentejas_salmon",
    "Ensalada de lentejas con salm\xF3n",
    "fit",
    15,
    ["fuego"],
    "lentejas* 400g; salmon 200g; tomate 1ud; cebolla 0.5ud; aceite_oliva 2cda; vinagre 1cda",
    "Marca el salm\xF3n en dados 3 min | Escurre las lentejas | Mezcla con la verdura y ali\xF1a"
  ),
  receta(
    "ensalada_alubias_bacalao",
    "Ensalada de alubias con bacalao",
    "fit",
    15,
    ["fuego"],
    "alubias* 400g; bacalao_cong 200g; pimiento_rojo 0.5ud; cebolla 0.5ud; aceite_oliva 2cda",
    "Cuece el bacalao 4 min y desm\xEDgalo | Escurre las alubias | Mezcla con la verdura y ali\xF1a"
  ),
  receta(
    "ensalada_espinacas_pollo",
    "Ensalada de espinacas, pollo y aguacate",
    "fit",
    15,
    ["fuego"],
    "espinacas* 150g; pechuga_pollo* 250g; aguacate 1ud; tomate? 1ud; aceite_oliva 2cda",
    "Haz el pollo a la plancha en tiras | Corta aguacate y tomate | Monta sobre las espinacas y ali\xF1a"
  ),
  // ——— Pescado ———
  receta(
    "bacalao_tomate",
    "Bacalao con tomate",
    "fit",
    20,
    ["fuego"],
    "bacalao_cong* 400g; tomate_triturado 300g; cebolla 1ud; pimiento_verde? 1ud; aceite_oliva 2cda",
    "Pocha cebolla y pimiento | A\xF1ade el tomate 8 min | Pon el bacalao descongelado y cuece 6 min tapado"
  ),
  receta(
    "bacalao_horno_patatas",
    "Bacalao al horno con patatas",
    "fit",
    30,
    ["horno", "microondas"],
    "bacalao_cong* 400g; patata 2ud; cebolla 0.5ud; piquillos? 100g; aceite_oliva 2cda",
    "Patata en rodajas al microondas 6 min | Hornea con la cebolla 10 min a 200 \xB0C | A\xF1ade bacalao y pimientos 10 min"
  ),
  receta(
    "bacalao_ajillo",
    "Bacalao al ajillo con piment\xF3n",
    "fit",
    15,
    ["fuego"],
    "bacalao_cong* 400g; ajo 4ud; pimenton 2g; aceite_oliva 3cda",
    "Dora el ajo laminado | Pon el bacalao con la piel arriba 4 min y dale la vuelta 3 | Fuera del fuego a\xF1ade el piment\xF3n"
  ),
  receta(
    "bacalao_airfryer",
    "Bacalao a la airfryer con verduras",
    "fit",
    20,
    ["airfryer"],
    "bacalao_cong* 400g; calabacin 1ud; pimiento_rojo 0.5ud; aceite_oliva 1cda",
    "Verdura en tiras con aceite: 200 \xB0C 8 min | A\xF1ade el bacalao | 8-10 min m\xE1s a 190 \xB0C"
  ),
  receta(
    "bacalao_garbanzos",
    "Garbanzos con bacalao y espinacas",
    "fit",
    20,
    ["fuego"],
    "garbanzos* 400g; bacalao_cong 200g; espinacas 150g; ajo 2ud; pimenton 2g; caldo_pollo 300ml",
    "Sofr\xEDe ajo y piment\xF3n | A\xF1ade caldo, garbanzos y bacalao en trozos 6 min | Incorpora las espinacas"
  ),
  receta(
    "merluza_verde",
    "Merluza en salsa verde con guisantes",
    "fit",
    20,
    ["fuego"],
    "merluza_cong* 400g; guisantes_cong 100g; ajo 3ud; harina 10g; caldo_pollo 250ml",
    "Dora el ajo picado y tuesta la harina 1 min | A\xF1ade el caldo poco a poco y los guisantes | Cuece la merluza 6 min tapada"
  ),
  receta(
    "merluza_limon_microondas",
    "Merluza al lim\xF3n al microondas con br\xF3coli",
    "fit",
    15,
    ["microondas"],
    "merluza_cong* 400g; brocoli 300g; limon 1ud; aceite_oliva 1cda",
    "Br\xF3coli tapado 4 min | A\xF1ade la merluza con lim\xF3n, aceite y sal | Tapa y 6 min m\xE1s"
  ),
  receta(
    "merluza_puerros",
    "Merluza con puerros y nata ligera",
    "fit",
    25,
    ["fuego"],
    "merluza_cong* 400g; puerro 2ud; nata_cocinar 100ml; aceite_oliva 1cda",
    "Pocha el puerro 8 min | A\xF1ade la nata y la merluza | Tapa y 7 min a fuego suave"
  ),
  receta(
    "salmon_plancha_esparragos",
    "Salm\xF3n a la plancha con esp\xE1rragos",
    "fit",
    15,
    ["fuego"],
    "salmon* 250g; esparragos 250g; limon 0.5ud; aceite_oliva 1cda",
    "Plancha los esp\xE1rragos 6 min | Haz el salm\xF3n 3-4 min por lado | Sirve con lim\xF3n"
  ),
  receta(
    "salmon_horno_patata",
    "Salm\xF3n al horno con patata y cebolla",
    "fit",
    30,
    ["horno", "microondas"],
    "salmon* 250g; patata 2ud; cebolla 0.5ud; limon 0.5ud; aceite_oliva 2cda",
    "Patata en rodajas al microondas 6 min | Hornea con cebolla a 200 \xB0C 10 min | A\xF1ade el salm\xF3n 12 min"
  ),
  receta(
    "salmon_espinacas_nata",
    "Salm\xF3n con espinacas a la crema",
    "fit",
    20,
    ["fuego"],
    "salmon* 250g; espinacas 200g; nata_cocinar 100ml; ajo 1ud",
    "Marca el salm\xF3n y res\xE9rvalo | Saltea ajo y espinacas, a\xF1ade la nata 2 min | Vuelve a poner el salm\xF3n 3 min"
  ),
  receta(
    "salmon_calabaza",
    "Salm\xF3n con calabaza asada",
    "fit",
    25,
    ["horno"],
    "salmon* 250g; calabaza 400g; aceite_oliva 2cda; oregano 1g",
    "Horno a 210 \xB0C | Calabaza en dados con aceite 12 min | A\xF1ade el salm\xF3n 12 min m\xE1s"
  ),
  receta(
    "mejillones_tomate",
    "Mejillones en salsa de tomate",
    "fit",
    15,
    ["fuego"],
    "mejillon_cong* 450g; tomate_triturado 200g; cebolla 0.5ud; ajo 1ud; pan_molde? 2ud",
    "Sofr\xEDe cebolla y ajo | A\xF1ade el tomate 5 min | Incorpora los mejillones 5 min y sirve con pan"
  ),
  receta(
    "mejillones_vapor",
    "Mejillones al vapor con lim\xF3n",
    "fit",
    10,
    ["fuego"],
    "mejillon_cong* 600g; limon 1ud; ajo? 1ud",
    "Pon los mejillones en una olla con un dedo de agua y el ajo | Tapa y 5 min | Sirve con lim\xF3n"
  ),
  receta(
    "sardinas_tostada_tomate",
    "Tostas de sardinas con tomate",
    "fit",
    10,
    ["fuego"],
    "pan_molde* 4ud; sardinas* 120g; tomate 2ud; aceite_oliva 1cda",
    "Tuesta el pan | Ralla el tomate con sal y aceite | Unta y pon las sardinas"
  ),
  receta(
    "calamares_encebollados",
    "Calamares encebollados",
    "fit",
    25,
    ["fuego"],
    "calamar_cong* 400g; cebolla 2ud; ajo 2ud; aceite_oliva 2cda",
    "Pocha la cebolla a fuego lento 12 min | A\xF1ade el ajo y el calamar | 8 min a fuego medio"
  ),
  receta(
    "gambas_esparragos",
    "Salteado de gambas y esp\xE1rragos",
    "fit",
    15,
    ["fuego"],
    "gambas_cong* 250g; esparragos 250g; ajo 2ud; aceite_oliva 1cda",
    "Saltea los esp\xE1rragos troceados 5 min | A\xF1ade ajo y gambas 3 min | Sal y lim\xF3n si tienes"
  ),
  // ——— Pollo, pavo y lomo ———
  receta(
    "pollo_plancha_calabaza",
    "Pollo a la plancha con pur\xE9 de calabaza",
    "fit",
    25,
    ["fuego", "microondas", "batidora"],
    "pechuga_pollo* 300g; calabaza 400g; aceite_oliva 1cda",
    "Calabaza al microondas 8 min y trit\xFArala con sal y aceite | Haz el pollo a la plancha | Sirve sobre el pur\xE9"
  ),
  receta(
    "pollo_espinacas_cabra",
    "Pechuga rellena de espinacas y queso de cabra",
    "fit",
    25,
    ["fuego"],
    "pechuga_pollo* 300g; espinacas 100g; queso_cabra 60g; aceite_oliva 1cda",
    "Abre las pechugas en libro | Rellena con espinacas y queso y cierra con palillos | D\xF3ralas tapadas 6 min por lado"
  ),
  receta(
    "pollo_yogur_airfryer",
    "Pollo marinado en yogur a la airfryer",
    "fit",
    25,
    ["airfryer"],
    "pechuga_pollo* 300g; yogur_griego 1ud; curry 3g; limon 0.5ud; lechuga? 80g",
    "Mezcla el pollo en dados con yogur, curry, lim\xF3n y sal | Airfryer 200 \xB0C 12-14 min | Sirve con ensalada"
  ),
  receta(
    "pollo_champinones_plancha",
    "Pollo con champi\xF1ones al ajillo",
    "fit",
    15,
    ["fuego"],
    "pechuga_pollo* 300g; champinon 200g; ajo 2ud; aceite_oliva 1cda",
    "Dora el pollo en dados | A\xF1ade ajo y champi\xF1ones 5 min | Sal y perejil si tienes"
  ),
  receta(
    "pollo_verduras_horno",
    "Pollo asado con verduras de bandeja",
    "fit",
    30,
    ["horno"],
    "muslo_pollo* 500g; calabacin 1ud; pimiento_rojo 1ud; cebolla 1ud; aceite_oliva 2cda",
    "Horno a 220 \xB0C | Bandeja con verdura troceada y el pollo salpimentado | 25 min, removiendo una vez"
  ),
  receta(
    "pavo_curry_ligero",
    "Pavo al curry ligero con yogur",
    "fit",
    20,
    ["fuego"],
    "pechuga_pavo* 300g; cebolla 1ud; yogur_griego 1ud; curry 4g; arroz_basmati? 120g",
    "Cuece el arroz si lo vas a poner | Dora pavo y cebolla con el curry | Fuera del fuego a\xF1ade el yogur"
  ),
  receta(
    "pavo_plancha_boniato",
    "Pavo a la plancha con boniato",
    "fit",
    25,
    ["fuego", "microondas"],
    "pechuga_pavo* 300g; boniato 1ud; lechuga? 80g; aceite_oliva 1cda",
    "Boniato en rodajas al microondas 7 min y m\xE1rcalo en la plancha | Haz el pavo 2-3 min por lado | Sirve con ensalada"
  ),
  receta(
    "wrap_pavo",
    "Wraps de pavo y aguacate",
    "fit",
    15,
    ["fuego"],
    "tortilla_trigo* 4ud; pechuga_pavo* 250g; aguacate 1ud; lechuga 60g; tomate 1ud",
    "Haz el pavo a la plancha en tiras | Chafa el aguacate con sal | Rellena las tortillas y enrolla"
  ),
  receta(
    "lomo_esparragos",
    "Lomo a la plancha con esp\xE1rragos",
    "fit",
    15,
    ["fuego"],
    "lomo_cerdo* 300g; esparragos 250g; aceite_oliva 1cda",
    "Plancha los esp\xE1rragos 6 min | Haz el lomo 2 min por lado | Sal gorda y listo"
  ),
  receta(
    "lomo_setas",
    "Lomo con setas salteadas",
    "fit",
    20,
    ["fuego"],
    "lomo_cerdo* 300g; setas 250g; ajo 2ud; aceite_oliva 1cda",
    "Saltea ajo y setas 6 min | Haz el lomo a la plancha | Sirve las setas por encima"
  ),
  // ——— Legumbres y huevo ———
  receta(
    "lentejas_verduras_curry",
    "Lentejas con calabaza y espinacas",
    "fit",
    20,
    ["fuego"],
    "lentejas* 400g; calabaza 200g; espinacas 100g; cebolla 0.5ud; comino 1g; caldo_pollo 300ml",
    "Pocha la cebolla con la calabaza en dados 8 min | A\xF1ade caldo, comino y lentejas 8 min | Incorpora las espinacas"
  ),
  receta(
    "garbanzos_calabaza",
    "Garbanzos con calabaza y comino",
    "fit",
    20,
    ["fuego"],
    "garbanzos* 400g; calabaza 250g; tomate_triturado 100g; comino 1g; caldo_pollo 250ml",
    "Sofr\xEDe la calabaza en dados 6 min | A\xF1ade tomate, comino, caldo y garbanzos | 10 min a fuego suave"
  ),
  receta(
    "alubias_espinacas",
    "Alubias con espinacas y huevo",
    "fit",
    15,
    ["fuego"],
    "alubias* 400g; espinacas 150g; huevo 2ud; ajo 2ud; pimenton 2g",
    "Sofr\xEDe ajo y piment\xF3n | A\xF1ade alubias y espinacas con un poco de agua 5 min | Casca los huevos y tapa 4 min"
  ),
  receta(
    "hummus_remolacha_pan",
    "Hummus de garbanzos con tostas y pepino",
    "fit",
    10,
    ["batidora"],
    "garbanzos* 400g; limon 0.5ud; ajo 1ud; pan_molde 4ud; pepino 1ud; aceite_oliva 3cda",
    "Tritura garbanzos, lim\xF3n, ajo, aceite y sal | Tuesta el pan | Sirve con el pepino en bastones"
  ),
  receta(
    "tortilla_esparragos",
    "Tortilla de esp\xE1rragos verdes",
    "fit",
    15,
    ["fuego"],
    "huevo* 5ud; esparragos 200g; aceite_oliva 1cda",
    "Saltea los esp\xE1rragos troceados 5 min | M\xE9zclalos con los huevos batidos | Cuaja por los dos lados"
  ),
  receta(
    "tortilla_champinones",
    "Tortilla de champi\xF1ones",
    "fit",
    15,
    ["fuego"],
    "huevo* 5ud; champinon 200g; ajo 1ud; aceite_oliva 1cda",
    "Saltea ajo y champi\xF1ones 5 min | Mezcla con los huevos | Cuaja la tortilla"
  ),
  receta(
    "huevos_espinacas_horno",
    "Huevos al horno con espinacas y tomate",
    "fit",
    20,
    ["horno", "fuego"],
    "huevo* 4ud; espinacas 200g; tomate_triturado 200g; queso_rallado? 30g",
    "Horno a 200 \xB0C | Saltea las espinacas con el tomate y ponlo en una fuente | Casca los huevos encima y hornea 10 min"
  ),
  receta(
    "shakshuka",
    "Huevos en salsa de tomate y pimiento",
    "fit",
    20,
    ["fuego"],
    "huevo* 4ud; tomate_triturado* 300g; pimiento_rojo 1ud; cebolla 0.5ud; comino 1g; pimenton 2g",
    "Pocha cebolla y pimiento 8 min | A\xF1ade tomate y especias 5 min | Casca los huevos, tapa y 5 min"
  ),
  receta(
    "huevos_microondas_verduras",
    "Huevos en taza con verduras al microondas",
    "fit",
    8,
    ["microondas"],
    "huevo* 4ud; salteado_verduras_cong 150g; queso_rallado? 30g",
    "Verduras 3 min al microondas | Reparte en 2 tazas y a\xF1ade los huevos batidos con sal | 1:30 min cada taza"
  ),
  receta(
    "tortitas_avena_platano",
    "Tortitas de avena y pl\xE1tano con yogur",
    "fit",
    15,
    ["fuego"],
    "avena* 100g; platano 2ud; huevo 2ud; yogur_griego 2ud; miel? 15g",
    "Tritura o chafa avena, pl\xE1tano y huevo | Haz tortitas en sart\xE9n 2 min por lado | Sirve con yogur y miel"
  ),
  receta(
    "bowl_cuscus_garbanzos",
    "Bowl de cusc\xFAs, garbanzos y verduras asadas",
    "fit",
    25,
    ["airfryer"],
    "cuscus* 150g; garbanzos 200g; calabacin 1ud; pimiento_rojo 1ud; yogur_griego? 1ud; aceite_oliva 2cda",
    "Verdura y garbanzos con aceite y sal: airfryer 200 \xB0C 15 min | Hidrata el cusc\xFAs con agua caliente 5 min | Monta con el yogur"
  )
];

// packages/core/src/data/recetario-veg.ts
var RECETAS_VEG = [
  receta(
    "lentejas_veganas",
    "Lentejas con verduras (veganas)",
    "fit",
    20,
    ["fuego"],
    "lentejas* 400g; zanahoria 1ud; cebolla 0.5ud; pimiento_verde 0.5ud; tomate_triturado 100g; pimenton 2g; aceite_oliva 1cda",
    "Sofr\xEDe la verdura picada | A\xF1ade tomate y piment\xF3n | Incorpora las lentejas con un vaso de agua, 10 min"
  ),
  receta(
    "alubias_tomate_pimiento",
    "Alubias con tomate y pimiento",
    "fit",
    15,
    ["fuego"],
    "alubias* 400g; pimiento_rojo 1ud; cebolla 0.5ud; tomate_triturado 150g; aceite_oliva 1cda",
    "Pocha cebolla y pimiento | A\xF1ade el tomate 5 min | Incorpora las alubias, 5 min"
  ),
  receta(
    "espaguetis_aglio_olio",
    "Espaguetis con ajo, aceite y piment\xF3n",
    "diario",
    12,
    ["fuego"],
    "pasta* 200g; ajo 3ud; pimenton 2g; aceite_oliva 3cda",
    "Cuece la pasta | Dora el ajo laminado y a\xF1ade el piment\xF3n fuera del fuego | Mezcla con un poco de agua de cocci\xF3n"
  ),
  receta(
    "curry_verduras_coco",
    "Curry de verduras con leche de coco",
    "diario",
    20,
    ["fuego"],
    "salteado_verduras_cong* 400g; leche_coco 200ml; curry 5g; arroz_basmati 150g; cebolla 0.5ud",
    "Cuece el arroz | Pocha la cebolla con el curry y a\xF1ade las verduras 6 min | Vierte la leche de coco y reduce 5 min"
  ),
  receta(
    "fajitas_vegetales",
    "Fajitas de verduras",
    "capricho",
    20,
    ["fuego"],
    "tortilla_trigo* 6ud; pimiento_rojo 1ud; pimiento_verde 1ud; cebolla 1ud; champinon 150g; comino 2g; aceite_oliva 1cda",
    "Saltea las verduras en tiras a fuego fuerte | A\xF1ade comino y sal | Sirve en las tortillas calientes"
  ),
  receta(
    "tacos_alubias",
    "Tacos de alubias y aguacate",
    "diario",
    15,
    ["fuego"],
    "tortilla_trigo* 6ud; alubias* 300g; tomate 1ud; aguacate 1ud; maiz 60g; comino 1g",
    "Saltea las alubias con comino y un poco de tomate | Chafa el aguacate con sal | Rellena las tortillas con todo"
  ),
  receta(
    "pizza_vegana",
    "Pizza de verduras sin queso",
    "capricho",
    25,
    ["horno"],
    "masa_pizza* 1ud; tomate_frito 120g; pimiento_rojo 0.5ud; champinon 100g; cebolla 0.5ud; berenjena? 0.5ud; oregano 1g",
    "Horno a 230 \xB0C | Extiende la masa con tomate y la verdura en l\xE1minas | Hornea 12-14 min con un hilo de aceite"
  ),
  receta(
    "pisto_patatas",
    "Pisto con patatas",
    "diario",
    30,
    ["fuego", "microondas"],
    "calabacin* 1ud; tomate_triturado* 250g; pimiento_rojo 1ud; cebolla 1ud; patata 2ud; aceite_oliva 2cda",
    "Patata en dados al microondas 7 min | Pocha cebolla, pimiento y calabac\xEDn 12 min | A\xF1ade tomate y patata, 8 min"
  ),
  receta(
    "crema_calabaza_coco",
    "Crema de calabaza y coco",
    "fit",
    25,
    ["fuego", "batidora"],
    "calabaza* 500g; leche_coco 150ml; cebolla 1ud; curry 2g; aceite_oliva 1cda",
    "Pocha la cebolla con el curry | A\xF1ade la calabaza, cubre de agua y cuece 15 min | Tritura con la leche de coco"
  ),
  receta(
    "falafel_airfryer",
    "Falafel a la airfryer con ensalada",
    "diario",
    25,
    ["batidora", "airfryer"],
    "garbanzos* 400g; cebolla 0.5ud; ajo 1ud; harina 30g; comino 2g; lechuga 100g; tomate 1ud",
    "Tritura garbanzos, cebolla, ajo, comino, harina y sal | Forma bolitas y airfryer 200 \xB0C 12 min con aceite en spray | Sirve con ensalada"
  ),
  receta(
    "salteado_verduras_soja",
    "Salteado de verduras con soja y arroz",
    "fit",
    20,
    ["fuego"],
    "salteado_verduras_cong* 400g; arroz_basmati 150g; salsa_soja 2cda; ajo 1ud; aceite_oliva 1cda",
    "Cuece el arroz | Saltea ajo y verduras a fuego fuerte 7 min | A\xF1ade soja y el arroz, 2 min"
  ),
  receta(
    "patatas_pobre",
    "Patatas a lo pobre",
    "diario",
    30,
    ["microondas", "fuego"],
    "patata* 3ud; pimiento_verde 1ud; cebolla 1ud; ajo 2ud; aceite_oliva 3cda",
    "Patata en rodajas al microondas 8 min tapada | Pocha cebolla, pimiento y ajo 10 min | A\xF1ade la patata y dora 6 min"
  ),
  receta(
    "coliflor_curry_coco",
    "Coliflor al curry con coco y arroz",
    "fit",
    25,
    ["fuego"],
    "coliflor* 500g; leche_coco 200ml; curry 5g; cebolla 0.5ud; arroz_basmati 120g",
    "Cuece el arroz | Pocha la cebolla con el curry y a\xF1ade la coliflor en ramilletes 5 min | Vierte la leche de coco, tapa y 10 min"
  ),
  receta(
    "tostas_aguacate",
    "Tostas de aguacate y tomate",
    "fit",
    10,
    ["fuego"],
    "pan_molde* 4ud; aguacate* 1ud; tomate 1ud; limon? 0.5ud; aceite_oliva 1cda",
    "Tuesta el pan | Chafa el aguacate con sal y lim\xF3n | Unta y pon el tomate en rodajas"
  ),
  receta(
    "arroz_setas",
    "Arroz salteado con setas",
    "diario",
    20,
    ["fuego"],
    "arroz_basmati* 150g; setas 200g; champinon 100g; ajo 2ud; salsa_soja 1cda; aceite_oliva 1cda",
    "Cuece el arroz | Saltea ajo y setas 6 min | A\xF1ade el arroz y la soja, 2 min"
  ),
  receta(
    "pizza_cabra_cebolla",
    "Pizza de queso de cabra y cebolla",
    "capricho",
    25,
    ["horno"],
    "masa_pizza* 1ud; tomate_frito 80g; queso_cabra 120g; cebolla 1ud; miel? 10g",
    "Horno a 230 \xB0C | Extiende la masa con tomate, cebolla en aros y el queso | Hornea 12 min y pon un hilo de miel"
  ),
  receta(
    "risotto_setas",
    "Arroz cremoso de setas",
    "diario",
    25,
    ["fuego"],
    "arroz* 160g; setas 200g; cebolla 0.5ud; queso_rallado 50g; mantequilla 20g",
    "Pocha la cebolla y las setas | A\xF1ade el arroz y ve echando agua caliente con sal, removiendo, 18 min | Termina con mantequilla y queso"
  ),
  receta(
    "tortitas_calabacin",
    "Tortitas de calabac\xEDn y queso",
    "fit",
    20,
    ["fuego"],
    "calabacin* 2ud; huevo 2ud; harina 40g; queso_rallado 40g; aceite_oliva 2cda",
    "Ralla el calabac\xEDn y esc\xFArrelo bien | Mezcla con huevo, harina, queso y sal | Haz tortitas en la sart\xE9n 3 min por lado"
  )
];

// packages/core/src/data/recetario-diario.ts
var RECETAS_DIARIO = [
  // ——— Pollo y pavo ———
  receta(
    "pollo_guisantes_tomate",
    "Pollo con guisantes y tomate",
    "diario",
    25,
    ["fuego"],
    "pechuga_pollo* 300g; guisantes_cong 150g; tomate_triturado 250g; cebolla 0.5ud; aceite_oliva 1cda",
    "Dora el pollo en dados con la cebolla | A\xF1ade el tomate y los guisantes | 12 min a fuego suave"
  ),
  receta(
    "pollo_chilindron",
    "Pollo al chilindr\xF3n r\xE1pido",
    "diario",
    30,
    ["fuego"],
    "muslo_pollo* 500g; pimiento_rojo 1ud; cebolla 1ud; tomate_triturado 200g; jamon_serrano? 40g; aceite_oliva 1cda",
    "Dora el pollo troceado | A\xF1ade cebolla, pimiento (y jam\xF3n) 8 min | Incorpora el tomate y cuece 12 min tapado"
  ),
  receta(
    "pechuga_salsa_queso",
    "Pechuga en salsa de queso",
    "diario",
    20,
    ["fuego"],
    "pechuga_pollo* 300g; nata_cocinar 200ml; queso_rallado 50g; arroz? 120g",
    "Cuece el arroz si lo vas a poner | Dora el pollo en tiras | A\xF1ade nata y queso y reduce 4 min"
  ),
  receta(
    "pollo_calabaza_horno",
    "Pollo con calabaza al horno",
    "fit",
    30,
    ["horno"],
    "muslo_pollo* 500g; calabaza 400g; cebolla 1ud; pimenton 2g; aceite_oliva 2cda",
    "Horno a 220 \xB0C | Bandeja con calabaza, cebolla y el pollo con piment\xF3n y sal | 25 min"
  ),
  receta(
    "sandwich_pollo_aguacate",
    "S\xE1ndwich de pollo y aguacate",
    "diario",
    15,
    ["fuego"],
    "pan_molde* 4ud; pechuga_pollo 200g; aguacate 1ud; tomate 1ud; lechuga? 40g",
    "Haz el pollo a la plancha en filetes finos | Chafa el aguacate con sal | Monta los s\xE1ndwiches"
  ),
  receta(
    "pavo_wok_verduras",
    "Wok de pavo y verduras",
    "fit",
    15,
    ["fuego"],
    "pechuga_pavo* 300g; salteado_verduras_cong 400g; salsa_soja 2cda; aceite_oliva 1cda",
    "Dora el pavo en tiras a fuego fuerte | A\xF1ade las verduras 6 min | Termina con la soja"
  ),
  receta(
    "rollitos_pavo_esparragos",
    "Rollitos de pavo con queso y esp\xE1rragos",
    "fit",
    20,
    ["airfryer"],
    "pechuga_pavo* 300g; esparragos 200g; queso_lonchas 60g; aceite_oliva 1cda",
    "Enrolla cada filete con una loncha de queso y esp\xE1rragos | Pincha con un palillo y pon aceite y sal | Airfryer 190 \xB0C 12 min"
  ),
  receta(
    "burger_pavo_cabra",
    "Burger de pavo con queso de cabra",
    "capricho",
    20,
    ["fuego"],
    "pan_hamburguesa* 2ud; pechuga_pavo* 250g; queso_cabra 60g; lechuga 40g; tomate 1ud",
    "Haz los filetes de pavo a la plancha | Pon el queso encima al final para que se temple | Monta con lechuga y tomate"
  ),
  // ——— Cerdo, carne picada y embutido ———
  receta(
    "lomo_piquillos",
    "Lomo con pimientos del piquillo",
    "diario",
    15,
    ["fuego"],
    "lomo_cerdo* 300g; piquillos 150g; ajo 2ud; aceite_oliva 1cda",
    "Confita los piquillos con el ajo 5 min | Haz el lomo a la plancha | Sirve juntos"
  ),
  receta(
    "lomo_adobado_airfryer",
    "Lomo adobado a la airfryer con patatas",
    "diario",
    25,
    ["airfryer"],
    "lomo_cerdo* 300g; patata 2ud; pimenton 3g; ajo 2ud; oregano 1g; aceite_oliva 2cda",
    "Adoba el lomo con ajo, piment\xF3n, or\xE9gano, aceite y sal | Patatas en gajos 200 \xB0C 12 min | A\xF1ade el lomo 8 min"
  ),
  receta(
    "lomo_tomate",
    "Lomo en salsa de tomate",
    "diario",
    20,
    ["fuego"],
    "lomo_cerdo* 300g; tomate_triturado 300g; cebolla 0.5ud; arroz? 120g",
    "Marca el lomo y res\xE9rvalo | Pocha la cebolla y a\xF1ade el tomate 8 min | Vuelve a poner el lomo 3 min"
  ),
  receta(
    "bocadillo_lomo_piquillos",
    "Bocadillo de lomo con piquillos",
    "capricho",
    15,
    ["fuego"],
    "pan_hamburguesa* 2ud; lomo_cerdo* 200g; piquillos 80g; queso_lonchas? 40g",
    "Haz el lomo a la plancha | Calienta los pimientos en la misma sart\xE9n | Monta los bocadillos"
  ),
  receta(
    "patatas_riojanas",
    "Patatas a la riojana r\xE1pidas",
    "diario",
    30,
    ["fuego"],
    "patata* 3ud; chorizo* 100g; cebolla 0.5ud; pimiento_verde 0.5ud; pimenton 3g; caldo_pollo? 300ml",
    "Sofr\xEDe cebolla, pimiento y chorizo | A\xF1ade las patatas chascadas y el piment\xF3n | Cubre de agua o caldo y cuece 20 min"
  ),
  receta(
    "arroz_carne_verduras",
    "Arroz salteado con carne y verduras",
    "diario",
    20,
    ["fuego"],
    "arroz* 150g; carne_picada* 250g; salteado_verduras_cong 250g; salsa_soja 2cda; huevo? 1ud",
    "Cuece el arroz | Dora la carne y a\xF1ade las verduras 6 min | Saltea con el arroz y la soja"
  ),
  receta(
    "pasta_carne_champinones",
    "Pasta con carne y champi\xF1ones a la crema",
    "diario",
    20,
    ["fuego"],
    "pasta* 200g; carne_picada* 250g; champinon 150g; nata_cocinar 150ml; cebolla 0.5ud",
    "Cuece la pasta | Dora la carne con cebolla y champi\xF1ones | A\xF1ade la nata 3 min y mezcla"
  ),
  receta(
    "salchichas_tomate_patatas",
    "Salchichas en salsa de tomate con patatas",
    "diario",
    25,
    ["fuego", "airfryer"],
    "salchichas* 250g; tomate_frito 200g; patatas_cong 300g; cebolla 0.5ud",
    "Patatas en airfryer 200 \xB0C 15 min | Pocha la cebolla y dora las salchichas | A\xF1ade el tomate 5 min"
  ),
  receta(
    "huevos_serrano_patatas",
    "Huevos con jam\xF3n serrano y patatas",
    "capricho",
    25,
    ["airfryer", "fuego"],
    "patatas_cong* 400g; huevo* 3ud; jamon_serrano 60g",
    "Patatas en airfryer 200 \xB0C 15 min | Fr\xEDe los huevos | Sirve con el jam\xF3n por encima"
  ),
  receta(
    "tortilla_jamon_queso",
    "Tortilla de jam\xF3n y queso",
    "diario",
    10,
    ["fuego"],
    "huevo* 4ud; jamon_york 60g; queso_lonchas 40g; aceite_oliva 1cda",
    "Bate los huevos con sal | Cuaja la tortilla francesa | Rellena con jam\xF3n y queso y d\xF3blala"
  ),
  // ——— Pescado y marisco ———
  receta(
    "bacalao_vizcaina",
    "Bacalao a la vizca\xEDna r\xE1pido",
    "diario",
    25,
    ["fuego"],
    "bacalao_cong* 400g; piquillos 150g; tomate_frito 200g; cebolla 1ud; aceite_oliva 1cda",
    "Pocha la cebolla | A\xF1ade tomate y piquillos y tritura si quieres | Cuece el bacalao en la salsa 8 min"
  ),
  receta(
    "merluza_romana_airfryer",
    "Merluza a la romana a la airfryer",
    "diario",
    20,
    ["airfryer"],
    "merluza_cong* 400g; harina 40g; huevo 1ud; lechuga? 100g; limon? 0.5ud",
    "Seca bien la merluza | P\xE1sala por harina y huevo | Airfryer 200 \xB0C 10-12 min con aceite en spray"
  ),
  receta(
    "salmon_costra",
    "Salm\xF3n con costra de pan y lim\xF3n",
    "fit",
    20,
    ["horno"],
    "salmon* 250g; pan_rallado 30g; limon 0.5ud; ajo 1ud; aceite_oliva 1cda",
    "Horno a 200 \xB0C | Mezcla pan rallado, ajo, ralladura de lim\xF3n y aceite | Cubre el salm\xF3n y hornea 12-15 min"
  ),
  receta(
    "atun_encebollado_arroz",
    "At\xFAn encebollado con arroz",
    "diario",
    20,
    ["fuego"],
    "atun* 208g; cebolla 2ud; tomate_frito 100g; arroz 150g; aceite_oliva 1cda",
    "Cuece el arroz | Pocha la cebolla 12 min y a\xF1ade el tomate | Incorpora el at\xFAn escurrido y sirve con el arroz"
  ),
  receta(
    "espaguetis_sardinas",
    "Espaguetis con sardinas y tomate",
    "diario",
    15,
    ["fuego"],
    "pasta* 200g; sardinas* 120g; tomate_triturado 200g; ajo 2ud; aceite_oliva 1cda",
    "Cuece la pasta | Dora el ajo y a\xF1ade el tomate 5 min | Incorpora las sardinas desmigadas y mezcla"
  ),
  receta(
    "arroz_mejillones",
    "Arroz con mejillones",
    "diario",
    30,
    ["fuego"],
    "arroz* 150g; mejillon_cong* 300g; pimiento_rojo 0.5ud; tomate_triturado 100g; ajo 2ud; pimenton 2g",
    "Sofr\xEDe ajo, pimiento, tomate y piment\xF3n | A\xF1ade el arroz y agua caliente (el doble) | Cuece 17 min y pon los mejillones al final"
  ),
  receta(
    "calamares_tomate",
    "Calamares en salsa de tomate",
    "diario",
    25,
    ["fuego"],
    "calamar_cong* 400g; tomate_triturado 250g; cebolla 1ud; ajo 2ud; arroz? 120g",
    "Pocha la cebolla y el ajo | A\xF1ade el calamar 5 min y el tomate | Cuece 12 min tapado"
  ),
  receta(
    "gambas_curry_coco",
    "Gambas al curry con coco",
    "diario",
    20,
    ["fuego"],
    "gambas_cong* 300g; leche_coco 200ml; curry 4g; cebolla 0.5ud; arroz_basmati 150g",
    "Cuece el arroz | Pocha la cebolla con el curry y a\xF1ade la leche de coco | Incorpora las gambas 3 min"
  ),
  receta(
    "ensalada_mejillones_patata",
    "Ensalada de patata y mejillones",
    "fit",
    20,
    ["microondas", "fuego"],
    "patata* 2ud; mejillon_cong* 250g; pimiento_rojo 0.5ud; cebolla 0.5ud; aceite_oliva 2cda; vinagre 1cda",
    "Patata en dados al microondas 8 min | Calienta los mejillones 2 min | Mezcla con la verdura y ali\xF1a"
  ),
  // ——— Huevo y legumbre ———
  receta(
    "lentejas_arroz",
    "Lentejas con arroz",
    "diario",
    25,
    ["fuego"],
    "lentejas* 400g; arroz 80g; cebolla 0.5ud; zanahoria 1ud; comino 1g; aceite_oliva 1cda",
    "Sofr\xEDe cebolla y zanahoria | A\xF1ade el arroz con el doble de agua 12 min | Incorpora las lentejas y el comino 5 min"
  ),
  receta(
    "garbanzos_tomate_comino",
    "Garbanzos guisados con tomate y comino",
    "fit",
    15,
    ["fuego"],
    "garbanzos* 400g; tomate_triturado 200g; cebolla 0.5ud; comino 1g; pimenton 2g; aceite_oliva 1cda",
    "Pocha la cebolla | A\xF1ade tomate y especias 5 min | Incorpora los garbanzos con un poco de agua, 6 min"
  ),
  receta(
    "huevos_aguacate",
    "Huevos rellenos de aguacate",
    "fit",
    15,
    ["fuego"],
    "huevo* 6ud; aguacate 1ud; limon 0.5ud; lechuga? 80g",
    "Cuece los huevos 10 min y enfr\xEDalos | Chafa las yemas con el aguacate, lim\xF3n y sal | Rellena las claras"
  ),
  receta(
    "tortilla_patata_calabacin",
    "Tortilla de patata y calabac\xEDn",
    "diario",
    25,
    ["microondas", "fuego"],
    "patata* 2ud; huevo* 5ud; calabacin 1ud; cebolla? 0.5ud; aceite_oliva 3cda",
    "Patata y calabac\xEDn en l\xE1minas con aceite al microondas 10 min | Mezcla con los huevos batidos | Cuaja por los dos lados"
  ),
  receta(
    "revuelto_esparragos",
    "Revuelto de esp\xE1rragos",
    "fit",
    12,
    ["fuego"],
    "huevo* 4ud; esparragos 200g; ajo 1ud; aceite_oliva 1cda",
    "Saltea los esp\xE1rragos troceados con el ajo 5 min | A\xF1ade los huevos | Cuaja jugoso"
  ),
  receta(
    "crepes_champinones",
    "Crepes de champi\xF1ones y queso",
    "diario",
    30,
    ["fuego"],
    "harina* 100g; leche 250ml; huevo 2ud; champinon 200g; queso_rallado 60g; mantequilla 15g",
    "Bate harina, leche, huevos y sal y haz 6 crepes finas | Saltea los champi\xF1ones | Rellena con champi\xF1\xF3n y queso y d\xF3ralas"
  ),
  receta(
    "pasta_calabacin_nata",
    "Pasta con calabac\xEDn y nata",
    "diario",
    15,
    ["fuego"],
    "pasta* 200g; calabacin 1ud; nata_cocinar 150ml; queso_rallado 30g; ajo 1ud",
    "Cuece la pasta | Saltea ajo y calabac\xEDn 6 min | A\xF1ade la nata y el queso y mezcla"
  ),
  receta(
    "arroz_cremoso_calabaza",
    "Arroz cremoso de calabaza",
    "diario",
    30,
    ["fuego"],
    "arroz* 160g; calabaza 300g; cebolla 0.5ud; queso_rallado 50g; mantequilla 15g",
    "Pocha la cebolla y la calabaza en dados | A\xF1ade el arroz y ve echando agua caliente con sal, removiendo, 18 min | Termina con mantequilla y queso"
  )
];

// packages/core/src/data/recetario-veg2.ts
var RECETAS_VEG2 = [
  receta(
    "burritos_lentejas",
    "Burritos de lentejas",
    "diario",
    20,
    ["fuego"],
    "tortilla_trigo* 4ud; lentejas* 300g; pimiento_rojo 0.5ud; cebolla 0.5ud; tomate_triturado 100g; comino 2g",
    "Sofr\xEDe cebolla y pimiento | A\xF1ade lentejas, tomate y comino 5 min | Rellena las tortillas y d\xF3ralas"
  ),
  receta(
    "curry_garbanzos_patata",
    "Curry de garbanzos y patata",
    "diario",
    25,
    ["fuego"],
    "garbanzos* 400g; patata 2ud; leche_coco 200ml; cebolla 0.5ud; curry 5g; espinacas? 100g",
    "Pocha la cebolla con el curry | A\xF1ade la patata en dados con un vaso de agua, 12 min | Incorpora garbanzos y leche de coco 5 min"
  ),
  receta(
    "berenjena_tomate_microondas",
    "Berenjenas con tomate al microondas",
    "fit",
    15,
    ["microondas"],
    "berenjena* 2ud; tomate_frito 200g; ajo 1ud; oregano 1g; aceite_oliva 1cda",
    "Berenjena en dados con aceite y sal, tapada 8 min | A\xF1ade tomate, ajo y or\xE9gano | 4 min m\xE1s"
  ),
  receta(
    "ensalada_garbanzos_aguacate",
    "Ensalada de garbanzos y aguacate",
    "fit",
    10,
    [],
    "garbanzos* 400g; aguacate 1ud; tomate 1ud; cebolla 0.5ud; limon 0.5ud; aceite_oliva 2cda",
    "Escurre los garbanzos | Corta aguacate, tomate y cebolla | Mezcla y ali\xF1a con lim\xF3n, aceite y sal"
  ),
  receta(
    "ensalada_cuscus_verduras",
    "Ensalada de cusc\xFAs con verduras",
    "fit",
    10,
    [],
    "cuscus* 150g; pepino 0.5ud; tomate 1ud; pimiento_rojo 0.5ud; limon 0.5ud; aceite_oliva 2cda",
    "Hidrata el cusc\xFAs con agua 10 min | Pica la verdura | Mezcla y ali\xF1a con lim\xF3n y aceite"
  ),
  receta(
    "boniato_garbanzos_especiados",
    "Boniato asado con garbanzos especiados",
    "fit",
    25,
    ["microondas", "airfryer"],
    "boniato* 2ud; garbanzos 300g; pimenton 2g; comino 1g; aceite_oliva 2cda",
    "Boniato en dados al microondas 6 min | M\xE9zclalo con los garbanzos, especias y aceite | Airfryer 200 \xB0C 12 min"
  ),
  receta(
    "crema_lentejas",
    "Crema de lentejas",
    "fit",
    15,
    ["fuego", "batidora"],
    "lentejas* 400g; zanahoria 1ud; cebolla 0.5ud; comino 1g; aceite_oliva 1cda",
    "Pocha cebolla y zanahoria | A\xF1ade lentejas, comino y agua justa, 8 min | Tritura"
  ),
  receta(
    "hamburguesas_lentejas",
    "Hamburguesas de lentejas con ensalada",
    "fit",
    25,
    ["batidora", "fuego"],
    "lentejas* 400g; avena 60g; cebolla 0.5ud; comino 1g; lechuga 100g; tomate 1ud",
    "Tritura lentejas, cebolla, comino y sal; a\xF1ade la avena | Forma 4 hamburguesas y deja reposar 5 min | D\xF3ralas 3-4 min por lado"
  ),
  receta(
    "champinones_ajillo_patatas",
    "Champi\xF1ones al ajillo con patatas",
    "diario",
    25,
    ["microondas", "fuego"],
    "champinon* 300g; patata 2ud; ajo 3ud; pimenton? 2g; aceite_oliva 2cda",
    "Patata en dados al microondas 8 min y d\xF3rala | Saltea ajo y champi\xF1ones 6 min | Junta todo"
  ),
  receta(
    "judias_verdes_tomate_vegano",
    "Jud\xEDas verdes con tomate",
    "fit",
    15,
    ["fuego"],
    "judias_verdes_cong* 400g; tomate_triturado 200g; cebolla 0.5ud; ajo 1ud; aceite_oliva 1cda",
    "Cuece las jud\xEDas 8 min | Sofr\xEDe cebolla y ajo y a\xF1ade el tomate 5 min | Mezcla con las jud\xEDas"
  ),
  receta(
    "sopa_verduras_vegana",
    "Sopa de verduras y fideos",
    "fit",
    20,
    ["fuego"],
    "salteado_verduras_cong* 300g; pasta 60g; tomate_triturado 100g; cebolla 0.5ud; aceite_oliva 1cda",
    "Sofr\xEDe la cebolla y el tomate | A\xF1ade las verduras y un litro de agua con sal, 10 min | Echa los fideos y cuece lo que indique el paquete"
  ),
  receta(
    "patatas_guisantes",
    "Patatas guisadas con guisantes",
    "diario",
    30,
    ["fuego"],
    "patata* 3ud; guisantes_cong 150g; tomate_triturado 100g; cebolla 0.5ud; pimenton 2g; aceite_oliva 1cda",
    "Sofr\xEDe cebolla, tomate y piment\xF3n | A\xF1ade la patata chascada y cubre de agua, 15 min | Incorpora los guisantes 5 min"
  ),
  receta(
    "ensalada_patata_judias",
    "Ensalada de patata y jud\xEDas verdes",
    "fit",
    20,
    ["fuego"],
    "patata* 2ud; judias_verdes_cong 250g; cebolla 0.5ud; aceite_oliva 2cda; vinagre 1cda",
    "Cuece patata en dados y jud\xEDas 12 min | Enfr\xEDa con agua | Mezcla con la cebolla y ali\xF1a"
  ),
  receta(
    "boniato_curry_espinacas",
    "Boniato al curry con espinacas",
    "fit",
    25,
    ["fuego"],
    "boniato* 2ud; garbanzos 200g; leche_coco 200ml; espinacas 100g; curry 4g; cebolla 0.5ud",
    "Pocha la cebolla con el curry | A\xF1ade el boniato en dados y un poco de agua, 12 min | Incorpora garbanzos, leche de coco y espinacas 5 min"
  ),
  receta(
    "calabacin_relleno_verduras",
    "Calabac\xEDn relleno de verduras al microondas",
    "fit",
    20,
    ["microondas"],
    "calabacin* 2ud; cebolla 0.5ud; pimiento_rojo 0.5ud; tomate_frito 100g; aceite_oliva 1cda",
    "Parte los calabacines y hazlos 5 min; vac\xEDalos | Cocina la pulpa con cebolla y pimiento 5 min y a\xF1ade el tomate | Rellena y 3 min m\xE1s"
  ),
  receta(
    "macarrones_setas_tomate",
    "Macarrones con setas y tomate",
    "diario",
    20,
    ["fuego"],
    "pasta* 200g; setas 200g; tomate_frito 200g; ajo 1ud; aceite_oliva 1cda",
    "Cuece la pasta | Saltea ajo y setas 6 min y a\xF1ade el tomate | Mezcla con la pasta"
  ),
  receta(
    "pasta_brocoli_ajo",
    "Pasta con br\xF3coli y ajo",
    "fit",
    15,
    ["fuego"],
    "pasta* 200g; brocoli 300g; ajo 3ud; aceite_oliva 3cda",
    "Cuece la pasta con el br\xF3coli los \xFAltimos 4 min | Dora el ajo en el aceite | Mezcla todo"
  ),
  receta(
    "tostas_champinones",
    "Tostas de champi\xF1ones al ajillo",
    "diario",
    15,
    ["fuego"],
    "pan_molde* 4ud; champinon* 250g; ajo 2ud; aceite_oliva 2cda",
    "Tuesta el pan | Saltea los champi\xF1ones con el ajo 6 min | Rep\xE1rtelos sobre las tostas"
  ),
  receta(
    "wrap_hummus_verduras",
    "Wraps de hummus y verduras",
    "fit",
    15,
    ["batidora"],
    "tortilla_trigo* 4ud; garbanzos* 300g; limon 0.5ud; zanahoria 1ud; lechuga 60g; pepino 0.5ud; aceite_oliva 2cda",
    "Tritura los garbanzos con lim\xF3n, aceite y sal | Ralla la zanahoria y corta el pepino | Unta las tortillas y enrolla con la verdura"
  ),
  receta(
    "arroz_tomate_verduras",
    "Arroz con tomate y verduras",
    "diario",
    20,
    ["fuego"],
    "arroz* 150g; tomate_frito 200g; guisantes_cong 80g; maiz 60g; zanahoria? 1ud",
    "Cuece el arroz con la zanahoria en dados | Calienta el tomate con guisantes y ma\xEDz | Mezcla"
  ),
  receta(
    "pizza_margarita",
    "Pizza margarita",
    "capricho",
    20,
    ["horno"],
    "masa_pizza* 1ud; tomate_frito 120g; mozzarella 150g; oregano 1g; aceite_oliva 1cda",
    "Horno a 230 \xB0C | Extiende la masa con tomate y queso | Hornea 12 min y termina con or\xE9gano y aceite"
  ),
  receta(
    "pasta_cuatro_quesos",
    "Pasta a los cuatro quesos de casa",
    "capricho",
    15,
    ["fuego"],
    "pasta* 200g; nata_cocinar 200ml; queso_rallado 40g; mozzarella 40g; queso_cabra 40g",
    "Cuece la pasta | Funde los quesos en la nata a fuego suave | Mezcla con la pasta"
  ),
  receta(
    "quesadillas_verduras",
    "Quesadillas de verduras",
    "capricho",
    15,
    ["fuego"],
    "tortilla_trigo* 4ud; mozzarella 120g; pimiento_rojo 0.5ud; champinon 100g; cebolla 0.5ud",
    "Saltea las verduras 6 min | Rellena las tortillas con verdura y queso | D\xF3ralas 2 min por lado"
  ),
  receta(
    "berenjenas_parmesana",
    "Berenjenas a la parmesana r\xE1pidas",
    "diario",
    30,
    ["microondas", "horno"],
    "berenjena* 2ud; tomate_frito 200g; mozzarella 100g; queso_rallado 30g; oregano 1g",
    "Berenjena en rodajas al microondas 6 min | En una fuente, capas de berenjena, tomate y mozzarella | Queso rallado por encima y gratina a 220 \xB0C 10 min"
  ),
  receta(
    "tomate_mozzarella",
    "Ensalada de tomate y mozzarella",
    "fit",
    10,
    [],
    "tomate* 3ud; mozzarella 120g; oregano 1g; aceite_oliva 2cda; lechuga? 60g",
    "Corta el tomate en rodajas | Reparte el queso por encima | Ali\xF1a con aceite, sal y or\xE9gano"
  ),
  receta(
    "patata_asada_yogur",
    "Patata asada con yogur y queso",
    "diario",
    15,
    ["microondas"],
    "patata* 2ud; yogur_griego 1ud; queso_rallado 40g; maiz? 60g",
    "Pincha las patatas y hazlas al microondas 9-10 min | \xC1brelas y pon el queso 1 min m\xE1s | Sirve con el yogur con sal"
  ),
  receta(
    "tostadas_huevo_aguacate",
    "Tostadas con huevo y aguacate",
    "fit",
    12,
    ["fuego"],
    "pan_molde* 4ud; huevo* 2ud; aguacate 1ud; tomate? 1ud",
    "Tuesta el pan | Haz los huevos a la plancha o pochados | Monta sobre el aguacate chafado con sal"
  ),
  receta(
    "pan_pizza_vegetal",
    "Pan pizza de verduras",
    "capricho",
    15,
    ["airfryer"],
    "pan_molde* 6ud; tomate_frito 80g; mozzarella 100g; pimiento_rojo 0.5ud; champinon 80g",
    "Unta el pan con tomate | Pon verdura en l\xE1minas finas y queso | Airfryer 180 \xB0C 7 min"
  ),
  receta(
    "huevos_rotos_pimientos",
    "Huevos rotos con pimientos",
    "capricho",
    20,
    ["airfryer", "fuego"],
    "patatas_cong* 400g; huevo* 3ud; pimiento_verde 2ud; aceite_oliva 1cda",
    "Patatas en airfryer 200 \xB0C 15 min | Fr\xEDe los pimientos en tiras y luego los huevos | Sirve todo junto y rompe las yemas"
  ),
  receta(
    "tortilla_cebolla",
    "Tortilla de cebolla",
    "diario",
    20,
    ["fuego"],
    "huevo* 5ud; cebolla* 2ud; aceite_oliva 2cda",
    "Pocha la cebolla en juliana 12 min | M\xE9zclala con los huevos batidos | Cuaja por los dos lados"
  ),
  receta(
    "coliflor_rebozada_airfryer",
    "Coliflor rebozada a la airfryer",
    "diario",
    25,
    ["microondas", "airfryer"],
    "coliflor* 500g; huevo 1ud; pan_rallado 60g; ketchup? 30g",
    "Ramilletes al microondas 5 min | P\xE1salos por huevo y pan rallado | Airfryer 200 \xB0C 12 min con aceite en spray"
  )
];

// packages/core/src/data/recetario-fitness.ts
var con = (tags, r) => ({ ...r, tags: [...r.tags ?? [], ...tags] });
var desayuno = (r) => con(["desayuno"], r);
var tentempie = (r) => con(["tentempie"], r);
var RECETAS_FITNESS = [
  // ——— Bowls y platos de pollo ———
  receta(
    "bowl_pollo_quinoa",
    "Bowl de pollo, quinoa y aguacate",
    "fit",
    20,
    ["fuego"],
    "pechuga_pollo* 300g; quinoa 120g; aguacate 1ud; tomate 2ud; lechuga 80g; limon 1ud; aceite_oliva 1cda",
    "Cuece la quinoa 12 min y esc\xFArrela | Haz el pollo en tiras a la plancha con sal y pimienta | Monta el bowl con la lechuga, el tomate, el aguacate y el lim\xF3n"
  ),
  receta(
    "pollo_teriyaki_arroz_integral",
    "Pollo teriyaki ligero con arroz integral y br\xF3coli",
    "fit",
    30,
    ["fuego", "microondas"],
    "pechuga_pollo* 300g; arroz_integral 120g; brocoli 300g; salsa_soja 3cda; miel 10g; ajo 1ud; sesamo? 10g",
    "Cuece el arroz integral 25 min | Br\xF3coli al microondas 4 min tapado | Dora el pollo en dados y glasea con la soja, la miel y el ajo 2 min | Sirve con s\xE9samo"
  ),
  receta(
    "pollo_fajitas_sarten",
    "Fajitas de pollo y pimientos a la sart\xE9n",
    "fit",
    20,
    ["fuego"],
    "pechuga_pollo* 300g; pimiento_rojo 1ud; pimiento_verde 1ud; cebolla 1ud; tortilla_trigo 4ud; pimenton 3g; comino 2g; yogur_griego? 1ud",
    "Corta todo en tiras | Saltea la cebolla y los pimientos 6 min, a\xF1ade el pollo con las especias 6 min | Rellena las tortillas y pon yogur en vez de nata agria"
  ),
  receta(
    "pollo_limon_esparragos",
    "Pollo al lim\xF3n con esp\xE1rragos",
    "fit",
    18,
    ["fuego"],
    "pechuga_pollo* 300g; esparragos 250g; limon 1ud; ajo 2ud; aceite_oliva 1cda",
    "Haz el pollo en filetes finos a la plancha | En la misma sart\xE9n, los esp\xE1rragos 5 min con el ajo | Riega todo con el zumo de lim\xF3n"
  ),
  receta(
    "pollo_airfryer_boniato",
    "Pechuga a la airfryer con boniato",
    "fit",
    25,
    ["airfryer"],
    "pechuga_pollo* 300g; boniato 400g; pimenton 3g; oregano 1g; aceite_oliva 1cda",
    "Boniato en dados con la mitad del aceite: 200 \xB0C 12 min | A\xF1ade el pollo en dados con especias y el resto del aceite 10 min, removiendo a mitad"
  ),
  receta(
    "pollo_curry_yogur_arroz",
    "Pollo al curry con yogur y arroz basmati",
    "fit",
    25,
    ["fuego"],
    "pechuga_pollo* 300g; yogur_griego 1ud; cebolla 1ud; curry 6g; tomate_triturado 150g; arroz_basmati 120g",
    "Cuece el arroz | Pocha la cebolla, dora el pollo y a\xF1ade el curry | Echa el tomate 8 min y, fuera del fuego, el yogur"
  ),
  receta(
    "ensalada_pollo_mango",
    "Ensalada de pollo, mango y r\xFAcula",
    "fit",
    15,
    ["fuego"],
    "pechuga_pollo* 250g; mango 1ud; rucula 100g; nueces? 20g; limon 1ud; aceite_oliva 1cda",
    "Pollo a la plancha en tiras | Pela y trocea el mango | Mezcla con la r\xFAcula, las nueces y vinagreta de lim\xF3n"
  ),
  receta(
    "pollo_brocoli_wok",
    "Wok de pollo, br\xF3coli y s\xE9samo",
    "fit",
    15,
    ["fuego"],
    "pechuga_pollo* 300g; brocoli 300g; zanahoria 1ud; salsa_soja 2cda; ajo 1ud; sesamo 10g; aceite_oliva 1cda",
    "Saltea el pollo en tiras a fuego fuerte 5 min y s\xE1calo | Saltea el br\xF3coli y la zanahoria 5 min | Junta todo con la soja y el s\xE9samo"
  ),
  receta(
    "pollo_espinacas_queso_fresco",
    "Pollo con espinacas y reques\xF3n",
    "fit",
    15,
    ["fuego"],
    "pechuga_pollo* 300g; espinacas 200g; requeson 100g; ajo 1ud; aceite_oliva 1cda",
    "Dora el pollo en dados | A\xF1ade el ajo y las espinacas hasta que bajen | Mezcla con el reques\xF3n y salpimienta"
  ),
  receta(
    "pollo_hamburguesa_casera",
    "Hamburguesa de pollo casera con ensalada",
    "fit",
    20,
    ["fuego"],
    "pechuga_pollo* 300g; avena 30g; huevo 1ud; cebolla 0.5ud; lechuga 100g; tomate 1ud",
    "Pica el pollo con la cebolla, mezcla con la avena y el huevo | Forma 2 hamburguesas y hazlas a la plancha 5 min por lado | Sirve con la ensalada"
  ),
  receta(
    "pollo_pasta_integral_verduras",
    "Pasta integral con pollo y verduras",
    "fit",
    20,
    ["fuego"],
    "pasta_integral* 140g; pechuga_pollo 250g; calabacin 1ud; tomate_triturado 200g; ajo 1ud; oregano 1g",
    "Cuece la pasta | Saltea el pollo en dados y el calabac\xEDn 6 min | A\xF1ade el tomate y el or\xE9gano 5 min y mezcla con la pasta"
  ),
  receta(
    "wrap_pollo_yogur",
    "Wrap de pollo con salsa de yogur",
    "fit",
    15,
    ["fuego"],
    "pechuga_pollo* 250g; tortilla_trigo 2ud; yogur_griego 1ud; lechuga 60g; tomate 1ud; pepino? 100g",
    "Pollo a la plancha en tiras | Mezcla el yogur con sal, pimienta y pepino rallado | Enrolla el pollo con la lechuga, el tomate y la salsa"
  ),
  receta(
    "pollo_tikka_airfryer",
    "Pollo tikka a la airfryer con pepino",
    "fit",
    25,
    ["airfryer"],
    "pechuga_pollo* 350g; yogur_griego 1ud; curry 5g; pimenton 2g; limon 0.5ud; pepino 150g",
    "Marina el pollo en dados con el yogur, las especias y el lim\xF3n 10 min | Airfryer 200 \xB0C 12 min | Sirve con el pepino en rodajas"
  ),
  receta(
    "pollo_quinoa_horno_verduras",
    "Bandeja de pollo, quinoa y verduras",
    "fit",
    30,
    ["horno", "fuego"],
    "pechuga_pollo* 300g; quinoa 100g; pimiento_rojo 1ud; calabacin 1ud; cebolla 1ud; aceite_oliva 1cda; pimenton 3g",
    "Horno a 210 \xB0C | Verdura y pollo en dados con aceite y piment\xF3n, 20 min | Mientras, cuece la quinoa y m\xE9zclala con todo"
  ),
  receta(
    "ensalada_cesar_ligera",
    "Ensalada c\xE9sar ligera con yogur",
    "fit",
    15,
    ["fuego"],
    "pechuga_pollo* 250g; lechuga 150g; yogur_griego 1ud; queso_rallado 20g; pan_molde 2ud; limon 0.5ud; ajo 1ud",
    "Pollo a la plancha en tiras y pan tostado en dados | Salsa: yogur, queso, lim\xF3n y ajo rallado | Mezcla con la lechuga"
  ),
  receta(
    "pollo_arroz_integral_setas",
    "Arroz integral salteado con pollo y setas",
    "fit",
    30,
    ["fuego"],
    "arroz_integral* 120g; pechuga_pollo 250g; setas 200g; ajo 2ud; salsa_soja 1cda; aceite_oliva 1cda",
    "Cuece el arroz integral 25 min | Mientras, saltea el pollo y las setas con el ajo | Mezcla con el arroz y la soja"
  ),
  // ——— Pavo y ternera ———
  receta(
    "pavo_quinoa_espinacas",
    "Pavo salteado con quinoa y espinacas",
    "fit",
    20,
    ["fuego"],
    "pechuga_pavo* 300g; quinoa 100g; espinacas 150g; ajo 1ud; limon 0.5ud; aceite_oliva 1cda",
    "Cuece la quinoa | Saltea el pavo en tiras 5 min | A\xF1ade el ajo y las espinacas, y mezcla con la quinoa y el lim\xF3n"
  ),
  receta(
    "albondigas_pavo_tomate",
    "Alb\xF3ndigas de pavo en salsa de tomate",
    "fit",
    30,
    ["fuego"],
    "pechuga_pavo* 350g; avena 30g; huevo 1ud; ajo 1ud; tomate_triturado 300g; cebolla 0.5ud",
    "Pica el pavo, m\xE9zclalo con avena, huevo y ajo y forma bolitas | D\xF3ralas | A\xF1ade la cebolla y el tomate y cuece 12 min"
  ),
  receta(
    "pavo_boniato_airfryer",
    "Pavo especiado con boniato y br\xF3coli",
    "fit",
    25,
    ["airfryer", "microondas"],
    "pechuga_pavo* 300g; boniato 300g; brocoli 250g; pimenton 3g; comino 2g; aceite_oliva 1cda",
    "Boniato en dados a la airfryer 200 \xB0C 12 min | A\xF1ade el pavo especiado 8 min | Br\xF3coli al microondas 4 min"
  ),
  receta(
    "burrito_bowl_pavo",
    "Burrito bowl de pavo, alubias y ma\xEDz",
    "fit",
    20,
    ["fuego"],
    "pechuga_pavo* 250g; alubias 200g; maiz 140g; arroz 100g; tomate 1ud; lechuga 60g; comino 2g",
    "Cuece el arroz | Saltea el pavo en dados con el comino | Monta el bowl con las alubias y el ma\xEDz escurridos, el tomate y la lechuga"
  ),
  receta(
    "ternera_wok_verduras",
    "Ternera al wok con verduras",
    "fit",
    15,
    ["fuego"],
    "ternera_filete* 300g; pimiento_rojo 1ud; cebolla 1ud; brocoli 200g; salsa_soja 2cda; ajo 1ud",
    "Ternera en tiras finas a fuego muy fuerte 2 min y fuera | Saltea las verduras 6 min | Junta todo con la soja y el ajo 1 min"
  ),
  receta(
    "ternera_plancha_ensalada",
    "Filete de ternera con ensalada de tomate",
    "fit",
    12,
    ["fuego"],
    "ternera_filete* 300g; tomate 2ud; lechuga 100g; cebolla 0.5ud; aceite_oliva 1cda; vinagre 1cda",
    "Plancha muy caliente: 2 min por lado | Ensalada de tomate, lechuga y cebolla con aceite y vinagre"
  ),
  receta(
    "ternera_quinoa_bowl",
    "Bowl de ternera, quinoa y pimientos",
    "fit",
    20,
    ["fuego"],
    "ternera_filete* 250g; quinoa 100g; pimiento_rojo 1ud; pimiento_verde 1ud; aguacate 0.5ud; limon 0.5ud",
    "Cuece la quinoa | Saltea los pimientos en tiras 6 min y la ternera 2 min | Monta con el aguacate y el lim\xF3n"
  ),
  receta(
    "ternera_patata_airfryer",
    "Ternera con patatas a la airfryer",
    "fit",
    25,
    ["airfryer", "fuego"],
    "ternera_filete* 300g; patata 400g; ajo 1ud; aceite_oliva 1cda; lechuga? 80g",
    "Patatas en gajos con el aceite: airfryer 200 \xB0C 18 min | Ternera a la plancha con ajo, 2 min por lado"
  ),
  receta(
    "ternera_pasta_integral",
    "Pasta integral con ternera y champi\xF1ones",
    "fit",
    20,
    ["fuego"],
    "pasta_integral* 140g; ternera_filete 250g; champinon 200g; tomate_triturado 200g; ajo 1ud",
    "Cuece la pasta | Saltea la ternera en tiras y el champi\xF1\xF3n | A\xF1ade el tomate 5 min y mezcla"
  ),
  receta(
    "lomo_quinoa_manzana",
    "Lomo a la plancha con quinoa y manzana",
    "fit",
    20,
    ["fuego"],
    "lomo_cerdo* 300g; quinoa 100g; manzana 1ud; espinacas 80g; aceite_oliva 1cda",
    "Cuece la quinoa | Lomo a la plancha 3 min por lado | Mezcla la quinoa con la manzana en dados y las espinacas"
  ),
  // ——— Pescado ———
  receta(
    "salmon_poke_bowl",
    "Poke de salm\xF3n, arroz y aguacate",
    "fit",
    20,
    ["fuego"],
    "salmon* 250g; arroz 120g; aguacate 1ud; pepino 150g; zanahoria 1ud; salsa_soja 2cda; sesamo 10g",
    "Cuece el arroz y deja que se temple | Salm\xF3n a la plancha en dados 4 min | Monta con aguacate, pepino, zanahoria rallada, soja y s\xE9samo"
  ),
  receta(
    "salmon_airfryer_esparragos",
    "Salm\xF3n a la airfryer con esp\xE1rragos",
    "fit",
    15,
    ["airfryer"],
    "salmon* 300g; esparragos 250g; limon 1ud; aceite_oliva 1cda",
    "Esp\xE1rragos con el aceite: airfryer 200 \xB0C 4 min | A\xF1ade el salm\xF3n con sal y lim\xF3n 8 min"
  ),
  receta(
    "salmon_quinoa_brocoli",
    "Salm\xF3n con quinoa y br\xF3coli",
    "fit",
    20,
    ["fuego", "microondas"],
    "salmon* 300g; quinoa 100g; brocoli 300g; limon 1ud",
    "Cuece la quinoa | Br\xF3coli al microondas 4 min | Salm\xF3n a la plancha 4 min por lado con lim\xF3n"
  ),
  receta(
    "salmon_boniato_horno",
    "Salm\xF3n y boniato al horno",
    "fit",
    30,
    ["horno"],
    "salmon* 300g; boniato 400g; aceite_oliva 1cda; pimenton 2g; limon 0.5ud",
    "Horno a 210 \xB0C | Boniato en rodajas con aceite y piment\xF3n 15 min | A\xF1ade el salm\xF3n 12 min"
  ),
  receta(
    "merluza_papillote_verduras",
    "Merluza en papillote con verduras",
    "fit",
    20,
    ["microondas"],
    "merluza_cong* 400g; calabacin 1ud; zanahoria 1ud; limon 1ud; aceite_oliva 1cda",
    "Verdura en juliana en un recipiente de microondas, la merluza encima con lim\xF3n y aceite | Tapa y 8 min a m\xE1xima potencia"
  ),
  receta(
    "merluza_plancha_quinoa",
    "Merluza a la plancha con quinoa y tomate",
    "fit",
    20,
    ["fuego"],
    "merluza_cong* 400g; quinoa 100g; tomate 2ud; ajo 1ud; aceite_oliva 1cda",
    "Cuece la quinoa | Merluza a la plancha con ajo 4 min por lado | Sirve con el tomate picado"
  ),
  receta(
    "bacalao_pisto_ligero",
    "Bacalao con pisto ligero",
    "fit",
    25,
    ["fuego"],
    "bacalao_cong* 400g; calabacin 1ud; pimiento_rojo 1ud; cebolla 1ud; tomate_triturado 200g; aceite_oliva 1cda",
    "Pisto: pocha la verdura en dados 10 min y a\xF1ade el tomate 5 min | Pon el bacalao encima y tapa 8 min"
  ),
  receta(
    "bacalao_airfryer_patata",
    "Bacalao a la airfryer con patata",
    "fit",
    25,
    ["airfryer"],
    "bacalao_cong* 400g; patata 300g; ajo 2ud; pimenton 2g; aceite_oliva 1cda",
    "Patata en rodajas finas con aceite: 200 \xB0C 12 min | Pon encima el bacalao con ajo y piment\xF3n 10 min"
  ),
  receta(
    "gambas_quinoa_salteado",
    "Salteado de gambas, quinoa y verduras",
    "fit",
    20,
    ["fuego"],
    "gambas_cong* 300g; quinoa 100g; salteado_verduras_cong 300g; ajo 2ud; salsa_soja 1cda",
    "Cuece la quinoa | Saltea las verduras 6 min y las gambas con el ajo 3 min | Mezcla con la quinoa y la soja"
  ),
  receta(
    "gambas_calabacin_espaguetis",
    "Espaguetis de calabac\xEDn con gambas",
    "fit",
    15,
    ["fuego"],
    "calabacin* 2ud; gambas_cong 250g; ajo 2ud; tomate 2ud; aceite_oliva 1cda",
    "Corta el calabac\xEDn en tiras finas | Saltea el ajo y las gambas 3 min | A\xF1ade el calabac\xEDn y el tomate en dados 3 min"
  ),
  receta(
    "atun_quinoa_ensalada",
    "Ensalada de quinoa con at\xFAn",
    "fit",
    15,
    ["fuego"],
    "quinoa* 120g; atun_natural 156g; tomate 2ud; pepino 150g; maiz 70g; limon 1ud; aceite_oliva 1cda",
    "Cuece la quinoa y enfr\xEDala con agua | Mezcla con el at\xFAn, el tomate, el pepino y el ma\xEDz | Ali\xF1a con lim\xF3n y aceite"
  ),
  receta(
    "atun_patata_judias",
    "Ensalada templada de at\xFAn, patata y jud\xEDas",
    "fit",
    20,
    ["microondas"],
    "atun_natural* 156g; patata 300g; judias_verdes_cong 250g; huevo 2ud; aceite_oliva 1cda; vinagre 1cda",
    "Patata en dados y jud\xEDas al microondas tapadas 10 min | Cuece los huevos 10 min | Mezcla con el at\xFAn y ali\xF1a"
  ),
  receta(
    "wrap_atun_huevo",
    "Wrap de at\xFAn, huevo y lechuga",
    "fit",
    12,
    ["fuego"],
    "atun_natural* 104g; tortilla_trigo 2ud; huevo 2ud; lechuga 60g; tomate 1ud; yogur_griego 0.5ud",
    "Cuece los huevos 10 min | Mezcla el at\xFAn con el yogur | Rellena las tortillas con todo"
  ),
  receta(
    "sardinas_ensalada_garbanzos",
    "Ensalada de garbanzos y sardinas",
    "fit",
    10,
    [],
    "garbanzos* 400g; sardinas 120g; tomate 2ud; cebolla 0.5ud; pimiento_verde 0.5ud; vinagre 1cda",
    "Escurre y enjuaga los garbanzos | Pica la verdura | Mezcla con las sardinas y ali\xF1a"
  ),
  receta(
    "salmon_ensalada_aguacate",
    "Ensalada de salm\xF3n, aguacate y r\xFAcula",
    "fit",
    15,
    ["fuego"],
    "salmon* 250g; aguacate 1ud; rucula 100g; tomate 1ud; limon 1ud",
    "Salm\xF3n a la plancha y desm\xEDgalo | Mezcla con la r\xFAcula, el aguacate y el tomate | Ali\xF1a con lim\xF3n"
  ),
  receta(
    "calamares_plancha_ensalada",
    "Calamares a la plancha con ensalada",
    "fit",
    15,
    ["fuego"],
    "calamar_cong* 400g; lechuga 100g; tomate 2ud; ajo 2ud; limon 1ud; aceite_oliva 1cda",
    "Calamares a la plancha muy caliente 4 min con ajo | Ensalada de lechuga y tomate | Riega con lim\xF3n"
  ),
  receta(
    "mejillones_arroz_integral",
    "Arroz integral con mejillones y pimiento",
    "fit",
    30,
    ["fuego"],
    "arroz_integral* 120g; mejillon_cong 400g; pimiento_rojo 1ud; cebolla 0.5ud; tomate_triturado 150g; pimenton 2g",
    "Cuece el arroz integral 25 min | Sofr\xEDe la cebolla y el pimiento con el tomate y el piment\xF3n | A\xF1ade los mejillones 5 min y mezcla"
  ),
  // ——— Huevo y claras ———
  receta(
    "tortilla_claras_espinacas",
    "Tortilla de claras con espinacas y pavo",
    "fit",
    10,
    ["fuego"],
    "claras_huevo* 300g; huevo 2ud; espinacas 100g; fiambre_pavo 60g",
    "Saltea las espinacas 2 min | A\xF1ade las claras batidas con los huevos y el pavo en tiras | Cuaja a fuego suave por los dos lados"
  ),
  receta(
    "revuelto_claras_champinon",
    "Revuelto de claras con champi\xF1ones",
    "fit",
    10,
    ["fuego"],
    "claras_huevo* 300g; huevo 2ud; champinon 200g; ajo 1ud; aceite_oliva 1cda",
    "Saltea el ajo y el champi\xF1\xF3n 5 min | A\xF1ade las claras y los huevos | Remueve hasta que cuajen jugosos"
  ),
  receta(
    "tortilla_calabacin_atun",
    "Tortilla de calabac\xEDn y at\xFAn",
    "fit",
    15,
    ["fuego"],
    "huevo* 4ud; calabacin 1ud; atun_natural 104g; cebolla 0.5ud; aceite_oliva 1cda",
    "Pocha el calabac\xEDn y la cebolla en dados 6 min | Mezcla con los huevos batidos y el at\xFAn | Cuaja por los dos lados"
  ),
  receta(
    "huevos_cocidos_ensalada",
    "Ensalada de huevo cocido, patata y at\xFAn",
    "fit",
    20,
    ["fuego"],
    "huevo* 4ud; patata 300g; atun_natural 104g; tomate 2ud; cebolla 0.5ud; aceite_oliva 1cda",
    "Cuece la patata en dados 12 min y los huevos 10 min | Mezcla con el tomate, la cebolla y el at\xFAn | Ali\xF1a"
  ),
  receta(
    "frittata_verduras_horno",
    "Frittata de verduras al horno",
    "fit",
    25,
    ["horno"],
    "huevo* 5ud; claras_huevo 150g; pimiento_rojo 1ud; calabacin 1ud; requeson 60g",
    "Horno a 190 \xB0C | Verdura en dados en una fuente con unas gotas de aceite, 8 min | Echa los huevos y las claras batidos con el queso, 15 min"
  ),
  receta(
    "huevos_escalfados_esparragos",
    "Huevos escalfados con esp\xE1rragos y jam\xF3n",
    "fit",
    15,
    ["fuego"],
    "huevo* 4ud; esparragos 250g; jamon_serrano 40g; aceite_oliva 1cda",
    "Esp\xE1rragos a la plancha 6 min | Escalfa los huevos 3 min en agua con vinagre | Sirve con el jam\xF3n"
  ),
  receta(
    "shakshuka_ligera",
    "Shakshuka ligera con espinacas",
    "fit",
    20,
    ["fuego"],
    "huevo* 4ud; tomate_triturado 400g; pimiento_rojo 1ud; cebolla 0.5ud; espinacas 80g; comino 2g",
    "Sofr\xEDe la cebolla y el pimiento | A\xF1ade el tomate y el comino 8 min y las espinacas | Haz 4 huecos, casca los huevos y tapa 6 min"
  ),
  receta(
    "tortilla_francesa_quinoa",
    "Tortilla francesa con ensalada de quinoa",
    "fit",
    15,
    ["fuego"],
    "huevo* 4ud; quinoa 80g; tomate 1ud; pepino 100g; aceite_oliva 1cda",
    "Cuece la quinoa y m\xE9zclala con el tomate y el pepino | Haz dos tortillas francesas"
  ),
  receta(
    "huevos_airfryer_aguacate",
    "Aguacates rellenos de huevo a la airfryer",
    "fit",
    15,
    ["airfryer"],
    "aguacate* 2ud; huevo 4ud; fiambre_pavo? 40g; pimenton 1g",
    "Parte los aguacates y quita el hueso | Casca un huevo en cada mitad | Airfryer 180 \xB0C 10 min y espolvorea piment\xF3n"
  ),
  // ——— Legumbre y vegetal ———
  receta(
    "lentejas_express_verduras",
    "Lentejas expr\xE9s con verduras",
    "fit",
    15,
    ["fuego"],
    "lentejas* 400g; zanahoria 1ud; pimiento_verde 0.5ud; cebolla 0.5ud; tomate_triturado 100g; pimenton 2g",
    "Sofr\xEDe la verdura picada 6 min con el piment\xF3n | A\xF1ade el tomate y las lentejas escurridas con un vaso de agua | 6 min a fuego suave"
  ),
  receta(
    "ensalada_lentejas_huevo",
    "Ensalada de lentejas con huevo y pimiento",
    "fit",
    15,
    ["fuego"],
    "lentejas* 400g; huevo 2ud; pimiento_rojo 0.5ud; cebolla 0.5ud; tomate 1ud; vinagre 1cda; aceite_oliva 1cda",
    "Cuece los huevos 10 min | Escurre las lentejas y m\xE9zclalas con la verdura picada | Pon el huevo encima y ali\xF1a"
  ),
  receta(
    "garbanzos_espinacas_huevo",
    "Garbanzos con espinacas y huevo",
    "fit",
    15,
    ["fuego"],
    "garbanzos* 400g; espinacas 200g; huevo 2ud; ajo 2ud; comino 2g; pimenton 2g",
    "Cuece los huevos 10 min | Dora el ajo con las especias y a\xF1ade las espinacas | Echa los garbanzos 5 min y sirve con el huevo"
  ),
  receta(
    "hummus_bowl_pollo",
    "Bowl de hummus casero y pollo",
    "fit",
    20,
    ["fuego", "batidora"],
    "garbanzos* 400g; pechuga_pollo 250g; limon 1ud; ajo 1ud; sesamo 15g; pepino 150g; tomate 1ud",
    "Tritura los garbanzos con el lim\xF3n, el ajo, el s\xE9samo y un chorrito de agua | Pollo a la plancha | Monta con pepino y tomate"
  ),
  receta(
    "tofu_salteado_verduras",
    "Tofu salteado con verduras y soja",
    "fit",
    15,
    ["fuego"],
    "tofu* 400g; brocoli 200g; pimiento_rojo 1ud; zanahoria 1ud; salsa_soja 2cda; ajo 1ud; sesamo 10g",
    "Tofu en dados dorado a fuego fuerte 6 min | Saltea las verduras 5 min | Junta con la soja, el ajo y el s\xE9samo"
  ),
  receta(
    "tofu_curry_arroz",
    "Curry de tofu y garbanzos con arroz",
    "fit",
    25,
    ["fuego"],
    "tofu* 300g; garbanzos 200g; tomate_triturado 200g; cebolla 1ud; curry 6g; arroz_basmati 100g; espinacas 80g",
    "Cuece el arroz | Pocha la cebolla, dora el tofu y a\xF1ade el curry | Echa el tomate y los garbanzos 8 min y las espinacas al final"
  ),
  receta(
    "tofu_airfryer_quinoa",
    "Tofu crujiente a la airfryer con quinoa",
    "fit",
    25,
    ["airfryer", "fuego"],
    "tofu* 400g; quinoa 100g; salsa_soja 2cda; pimenton 2g; pepino 150g; zanahoria 1ud",
    "Tofu en dados con la soja y el piment\xF3n: airfryer 200 \xB0C 15 min | Cuece la quinoa | Sirve con pepino y zanahoria rallada"
  ),
  receta(
    "alubias_atun_ensalada",
    "Ensalada de alubias, at\xFAn y pimiento",
    "fit",
    10,
    [],
    "alubias* 400g; atun_natural 104g; pimiento_rojo 0.5ud; cebolla 0.5ud; tomate 1ud; vinagre 1cda",
    "Escurre y enjuaga las alubias | Pica la verdura | Mezcla con el at\xFAn y ali\xF1a"
  ),
  receta(
    "buddha_bowl_garbanzos",
    "Buddha bowl de garbanzos, boniato y quinoa",
    "fit",
    25,
    ["airfryer", "fuego"],
    "garbanzos* 300g; boniato 300g; quinoa 80g; espinacas 80g; yogur_griego 1ud; comino 2g",
    "Boniato en dados y garbanzos con comino: airfryer 200 \xB0C 15 min | Cuece la quinoa | Monta con espinacas y yogur con lim\xF3n"
  ),
  receta(
    "crema_calabacin_requeson",
    "Crema de calabac\xEDn con reques\xF3n",
    "fit",
    20,
    ["fuego", "batidora"],
    "calabacin* 2ud; puerro 1ud; requeson 100g; patata? 1ud; aceite_oliva 1cda",
    "Pocha el puerro | A\xF1ade el calabac\xEDn y cubre de agua 12 min | Tritura con el reques\xF3n"
  ),
  receta(
    "crema_brocoli_proteica",
    "Crema de br\xF3coli con huevo duro",
    "fit",
    20,
    ["fuego", "batidora"],
    "brocoli* 500g; cebolla 1ud; huevo 2ud; requeson 60g; aceite_oliva 1cda",
    "Pocha la cebolla, a\xF1ade el br\xF3coli y cubre de agua 10 min | Cuece los huevos aparte | Tritura con el queso y sirve con el huevo picado"
  ),
  receta(
    "lentejas_curry_espinacas",
    "Lentejas al curry ligeras con espinacas",
    "fit",
    15,
    ["fuego"],
    "lentejas* 400g; leche_coco 100ml; curry 5g; cebolla 0.5ud; tomate_triturado 150g; espinacas 100g",
    "Pocha la cebolla con el curry | A\xF1ade el tomate, las lentejas escurridas y la leche de coco 6 min | Las espinacas al final"
  ),
  // ——— Rápidos de 10 minutos ———
  receta(
    "ensalada_pavo_queso_fresco",
    "Ensalada de pavo, reques\xF3n y nueces",
    "fit",
    8,
    [],
    "fiambre_pavo* 150g; requeson 120g; lechuga 150g; tomate 2ud; nueces 20g; aceite_oliva 1cda",
    "Trocea todo | Mezcla y ali\xF1a con aceite y sal"
  ),
  receta(
    "tosta_integral_salmon_requeson",
    "Tostas integrales de reques\xF3n y salm\xF3n",
    "fit",
    10,
    ["fuego"],
    "pan_molde* 4ud; requeson 120g; salmon 200g; rucula 40g; limon 0.5ud",
    "Salm\xF3n a la plancha y desm\xEDgalo | Tuesta el pan | Unta el reques\xF3n y pon el salm\xF3n, la r\xFAcula y el lim\xF3n"
  ),
  receta(
    "sandwich_proteico_pavo",
    "S\xE1ndwich integral de pavo, huevo y aguacate",
    "fit",
    10,
    ["fuego"],
    "pan_molde* 4ud; fiambre_pavo 100g; huevo 2ud; aguacate 0.5ud; tomate 1ud",
    "Haz los huevos a la plancha | Monta el s\xE1ndwich con el pavo, el aguacate y el tomate"
  ),
  receta(
    "ensalada_atun_aguacate",
    "Ensalada de at\xFAn, aguacate y huevo",
    "fit",
    12,
    ["fuego"],
    "atun_natural* 156g; aguacate 1ud; huevo 2ud; lechuga 120g; tomate 1ud; limon 0.5ud",
    "Cuece los huevos 10 min | Trocea todo y mezcla | Ali\xF1a con lim\xF3n"
  ),
  receta(
    "quesadilla_pollo_espinacas",
    "Quesadilla integral de pollo y espinacas",
    "fit",
    12,
    ["fuego"],
    "tortilla_trigo* 4ud; pechuga_pollo 200g; espinacas 60g; mozzarella 60g",
    "Pollo a la plancha en tiras | Rellena las tortillas con el pollo, las espinacas y la mozzarella | D\xF3ralas 2 min por lado"
  ),
  receta(
    "bowl_cuscus_pollo_yogur",
    "Cusc\xFAs con pollo, pepino y yogur",
    "fit",
    15,
    ["fuego"],
    "cuscus* 120g; pechuga_pollo 250g; pepino 150g; tomate 1ud; yogur_griego 1ud; comino 2g",
    "Hidrata el cusc\xFAs con el mismo peso de agua hirviendo 5 min | Pollo a la plancha con comino | Mezcla con pepino, tomate y yogur"
  ),
  receta(
    "arroz_atun_huevo_microondas",
    "Arroz con at\xFAn, huevo y tomate al microondas",
    "fit",
    15,
    ["microondas"],
    "arroz* 120g; atun_natural 104g; huevo 2ud; tomate_triturado 150g",
    "Arroz con el doble de agua, tapado, 12 min al microondas | Bate los huevos y cu\xE1jalos 1 min al microondas | Mezcla con el tomate y el at\xFAn"
  ),
  receta(
    "gambas_ajillo_ensalada",
    "Gambas al ajillo ligeras con ensalada",
    "fit",
    10,
    ["fuego"],
    "gambas_cong* 300g; ajo 3ud; lechuga 120g; tomate 1ud; aceite_oliva 1cda",
    "Dora el ajo y saltea las gambas 3 min | Sirve sobre la ensalada"
  ),
  // ——— Cenas ligeras ———
  receta(
    "crema_calabaza_claras",
    "Crema de calabaza con tortilla de claras",
    "fit",
    25,
    ["fuego", "batidora"],
    "calabaza* 500g; cebolla 1ud; claras_huevo 200g; aceite_oliva 1cda",
    "Pocha la cebolla, a\xF1ade la calabaza y cubre de agua 15 min y tritura | Haz una tortilla de claras y c\xF3rtala en tiras por encima"
  ),
  receta(
    "merluza_microondas_espinacas",
    "Merluza al microondas con espinacas",
    "fit",
    12,
    ["microondas"],
    "merluza_cong* 400g; espinacas 200g; ajo 1ud; limon 1ud; aceite_oliva 1cda",
    "Espinacas en la base, la merluza encima con ajo, lim\xF3n y aceite | Tapa y 7 min a m\xE1xima potencia"
  ),
  receta(
    "pavo_plancha_pisto",
    "Pavo a la plancha con pisto r\xE1pido",
    "fit",
    20,
    ["fuego", "microondas"],
    "pechuga_pavo* 300g; calabacin 1ud; pimiento_rojo 1ud; cebolla 0.5ud; tomate_triturado 150g",
    "Pisto al microondas: verdura en dados tapada 8 min, a\xF1ade el tomate 4 min | Pavo a la plancha 3 min por lado"
  ),
  receta(
    "salmon_pepino_yogur",
    "Salm\xF3n con salsa de yogur y pepino",
    "fit",
    15,
    ["fuego"],
    "salmon* 300g; yogur_griego 1ud; pepino 200g; limon 0.5ud; lechuga 80g",
    "Salm\xF3n a la plancha 4 min por lado | Salsa: yogur con pepino rallado, lim\xF3n y sal | Sirve con la lechuga"
  ),
  receta(
    "calamar_calabacin_limon",
    "Calamar salteado con calabac\xEDn y lim\xF3n",
    "fit",
    12,
    ["fuego"],
    "calamar_cong* 400g; calabacin 2ud; ajo 2ud; limon 1ud; aceite_oliva 1cda",
    "Saltea el calabac\xEDn en medias lunas 5 min | A\xF1ade el calamar y el ajo 4 min | Riega con lim\xF3n"
  ),
  receta(
    "tofu_revuelto_verduras",
    "Revuelto de tofu con verduras",
    "fit",
    12,
    ["fuego"],
    "tofu* 300g; pimiento_rojo 0.5ud; espinacas 80g; cebolla 0.5ud; curry 2g",
    "Pocha la cebolla y el pimiento | Desmiga el tofu encima con el curry | A\xF1ade las espinacas 2 min"
  ),
  receta(
    "ensalada_templada_pollo_calabaza",
    "Ensalada templada de pollo y calabaza",
    "fit",
    20,
    ["microondas", "fuego"],
    "pechuga_pollo* 250g; calabaza 300g; rucula 80g; nueces 20g; aceite_oliva 1cda",
    "Calabaza en dados al microondas tapada 6 min | Pollo a la plancha | Mezcla con la r\xFAcula y las nueces"
  ),
  receta(
    "brochetas_pollo_verduras",
    "Brochetas de pollo y verduras",
    "fit",
    20,
    ["fuego"],
    "pechuga_pollo* 300g; pimiento_rojo 1ud; cebolla 1ud; calabacin 1ud; pimenton 2g; aceite_oliva 1cda",
    "Pincha el pollo y la verdura en dados | Plancha 10 min d\xE1ndoles la vuelta"
  ),
  // ——— Desayunos ———
  desayuno(receta(
    "porridge_avena_platano",
    "Porridge de avena, pl\xE1tano y canela",
    "fit",
    8,
    ["fuego"],
    "avena* 80g; leche 400ml; platano 1ud; canela 1g; nueces? 20g",
    "Cuece la avena en la leche 5 min removiendo | Sirve con el pl\xE1tano en rodajas, la canela y las nueces"
  )),
  desayuno(receta(
    "overnight_oats_yogur",
    "Avena remojada con yogur y frutos rojos",
    "fit",
    5,
    [],
    "avena* 80g; yogur_griego 2ud; leche 150ml; arandanos 100g; miel? 10g",
    "Mezcla la avena con el yogur y la leche | Deja en la nevera toda la noche | Por la ma\xF1ana, los ar\xE1ndanos encima"
  )),
  desayuno(receta(
    "tortitas_avena_claras",
    "Tortitas de avena y claras",
    "fit",
    12,
    ["fuego", "batidora"],
    "avena* 80g; claras_huevo 200g; platano 1ud; canela 1g; arandanos? 80g",
    "Tritura la avena con las claras, el pl\xE1tano y la canela | Haz tortitas peque\xF1as en sart\xE9n antiadherente, 1 min por lado | Sirve con ar\xE1ndanos"
  )),
  desayuno(receta(
    "tostada_aguacate_huevo_desayuno",
    "Tostada integral con aguacate y huevo",
    "fit",
    10,
    ["fuego"],
    "pan_molde* 4ud; aguacate 1ud; huevo 2ud; tomate? 1ud",
    "Tuesta el pan | Aplasta el aguacate con sal | Pon el huevo a la plancha encima"
  )),
  desayuno(receta(
    "tostada_pavo_tomate",
    "Tostada integral con tomate y pavo",
    "fit",
    5,
    ["fuego"],
    "pan_molde* 4ud; tomate 1ud; fiambre_pavo 80g; aceite_oliva 1cdta",
    "Tuesta el pan | Ralla el tomate encima con un hilo de aceite | Pon el pavo"
  )),
  desayuno(receta(
    "yogur_griego_frutos_secos",
    "Yogur griego con fruta y almendras",
    "fit",
    3,
    [],
    "yogur_griego* 2ud; fresas 150g; almendras 20g; miel? 10g",
    "Sirve el yogur con las fresas troceadas y las almendras"
  )),
  desayuno(receta(
    "revuelto_claras_tostada",
    "Revuelto de claras con tostada integral",
    "fit",
    8,
    ["fuego"],
    "claras_huevo* 250g; huevo 2ud; pan_molde 4ud; espinacas? 60g",
    "Cuaja las claras y los huevos removiendo a fuego suave | Sirve con el pan tostado"
  )),
  desayuno(receta(
    "bol_requeson_fruta",
    "Bol de reques\xF3n con fruta y nueces",
    "fit",
    3,
    [],
    "requeson* 250g; kiwi 2ud; nueces 20g; miel? 10g",
    "Sirve el reques\xF3n con el kiwi en dados y las nueces"
  )),
  desayuno(receta(
    "batido_proteico_platano",
    "Batido de k\xE9fir, pl\xE1tano y avena",
    "fit",
    4,
    ["batidora"],
    "kefir* 400g; platano 1ud; avena 40g; crema_cacahuete 15g",
    "Tritura todo hasta que quede fino"
  )),
  desayuno(receta(
    "smoothie_bowl_frutos_rojos",
    "Smoothie bowl de frutos rojos",
    "fit",
    6,
    ["batidora"],
    "yogur_griego* 2ud; fresas 150g; platano 1ud; avena 30g; almendras? 15g",
    "Tritura el yogur con las fresas y el pl\xE1tano | Sirve en un bol con la avena y las almendras por encima"
  )),
  desayuno(receta(
    "tortilla_avena_salada",
    "Tortilla de avena, huevo y reques\xF3n",
    "fit",
    10,
    ["fuego"],
    "huevo* 4ud; avena 40g; requeson 80g; espinacas 40g",
    "Bate los huevos con la avena | Cuaja en sart\xE9n y rellena con el queso y las espinacas"
  )),
  desayuno(receta(
    "pan_crema_cacahuete_platano",
    "Tostada de crema de cacahuete y pl\xE1tano",
    "fit",
    5,
    ["fuego"],
    "pan_molde* 4ud; crema_cacahuete 30g; platano 1ud; canela 1g",
    "Tuesta el pan | Unta la crema de cacahuete | Pon el pl\xE1tano en rodajas y la canela"
  )),
  desayuno(receta(
    "porridge_proteico_cacahuete",
    "Porridge con claras y crema de cacahuete",
    "fit",
    8,
    ["fuego"],
    "avena* 80g; leche 300ml; claras_huevo 150g; crema_cacahuete 20g; arandanos? 60g",
    "Cuece la avena en la leche 4 min | A\xF1ade las claras removiendo sin parar 2 min, que quede cremoso | Sirve con la crema de cacahuete"
  )),
  desayuno(receta(
    "muffins_huevo_verduras",
    "Muffins de huevo y verduras (para la semana)",
    "fit",
    25,
    ["horno"],
    "huevo* 6ud; claras_huevo 150g; pimiento_rojo 1ud; espinacas 60g; fiambre_pavo 60g",
    "Horno a 180 \xB0C | Verdura y pavo picados en moldes de magdalena | Cubre con los huevos batidos y hornea 18 min"
  )),
  desayuno(receta(
    "bowl_avena_mango",
    "Bol de yogur, avena y mango",
    "fit",
    5,
    [],
    "yogur_griego* 2ud; avena 50g; mango 1ud; almendras 15g",
    "Mezcla el yogur con la avena | Pon el mango en dados y las almendras"
  )),
  desayuno(receta(
    "tostada_requeson_tomate",
    "Tostada de reques\xF3n, tomate y or\xE9gano",
    "fit",
    5,
    ["fuego"],
    "pan_molde* 4ud; requeson 120g; tomate 1ud; oregano 1g",
    "Tuesta el pan | Unta el reques\xF3n y pon el tomate en rodajas con or\xE9gano"
  )),
  desayuno(receta(
    "crepes_avena_requeson",
    "Crepes de avena rellenas de reques\xF3n y fresa",
    "fit",
    15,
    ["fuego", "batidora"],
    "avena* 60g; huevo 2ud; leche 150ml; requeson 120g; fresas 120g",
    "Tritura la avena con los huevos y la leche | Haz crepes finas en sart\xE9n | Rellena con el reques\xF3n y las fresas"
  )),
  desayuno(receta(
    "batido_soja_frutos_rojos",
    "Batido de soja, frutos rojos y avena",
    "fit",
    4,
    ["batidora"],
    "bebida_soja* 400ml; arandanos 100g; avena 40g; platano 1ud",
    "Tritura todo"
  )),
  desayuno(receta(
    "tostada_tofu_revuelto",
    "Tostada con revuelto de tofu",
    "fit",
    10,
    ["fuego"],
    "tofu* 200g; pan_molde 4ud; tomate 1ud; curry 1g",
    "Desmiga el tofu y salt\xE9alo 4 min con el curry | Sirve sobre el pan tostado con tomate"
  )),
  desayuno(receta(
    "huevos_cocidos_fruta",
    "Huevos cocidos, pan integral y naranja",
    "fit",
    12,
    ["fuego"],
    "huevo* 4ud; pan_molde 4ud; naranja 2ud",
    "Cuece los huevos 10 min | Sirve con el pan tostado y la naranja"
  )),
  desayuno(receta(
    "kefir_avena_manzana",
    "K\xE9fir con avena, manzana y canela",
    "fit",
    4,
    [],
    "kefir* 400g; avena 50g; manzana 1ud; canela 1g; nueces? 15g",
    "Ralla la manzana | M\xE9zclala con el k\xE9fir, la avena y la canela"
  )),
  desayuno(receta(
    "bocadillo_atun_tomate",
    "Bocadillo integral de at\xFAn y tomate",
    "fit",
    5,
    [],
    "pan_molde* 4ud; atun_natural 104g; tomate 1ud; lechuga 30g",
    "Monta los s\xE1ndwiches con el at\xFAn, el tomate y la lechuga"
  )),
  desayuno(receta(
    "tortitas_platano_huevo",
    "Tortitas de pl\xE1tano y huevo (2 ingredientes)",
    "fit",
    10,
    ["fuego"],
    "platano* 2ud; huevo 3ud; canela 1g",
    "Aplasta el pl\xE1tano y b\xE1telo con los huevos y la canela | Haz tortitas peque\xF1as a fuego suave, 1 min por lado"
  )),
  // ——— Tentempiés (media mañana, merienda, después de entrenar) ———
  tentempie(receta(
    "yogur_griego_nueces",
    "Yogur griego con nueces",
    "fit",
    2,
    [],
    "yogur_griego* 2ud; nueces 30g",
    "Sirve el yogur con las nueces troceadas"
  )),
  tentempie(receta(
    "requeson_canela_manzana",
    "Reques\xF3n con manzana y canela",
    "fit",
    3,
    [],
    "requeson* 200g; manzana 1ud; canela 1g",
    "Trocea la manzana y s\xEDrvela con el reques\xF3n y la canela"
  )),
  tentempie(receta(
    "rollitos_pavo_queso",
    "Rollitos de pavo y reques\xF3n",
    "fit",
    5,
    [],
    "fiambre_pavo* 120g; requeson 100g; pepino 100g",
    "Unta el queso en las lonchas, pon un bast\xF3n de pepino y enrolla"
  )),
  tentempie(receta(
    "huevos_cocidos_tentempie",
    "Huevos cocidos con tomate",
    "fit",
    12,
    ["fuego"],
    "huevo* 4ud; tomate 1ud",
    "Cuece los huevos 10 min y enfr\xEDalos | Sirve con el tomate en rodajas y sal"
  )),
  tentempie(receta(
    "platano_crema_cacahuete",
    "Pl\xE1tano con crema de cacahuete",
    "fit",
    2,
    [],
    "platano* 2ud; crema_cacahuete 30g",
    "Corta el pl\xE1tano en rodajas y \xFAntalas con la crema"
  )),
  tentempie(receta(
    "manzana_almendras",
    "Manzana y un pu\xF1ado de almendras",
    "fit",
    1,
    [],
    "manzana* 2ud; almendras 40g",
    "Lava la manzana y s\xEDrvela con las almendras"
  )),
  tentempie(receta(
    "hummus_zanahoria",
    "Hummus casero con bastones de zanahoria",
    "fit",
    8,
    ["batidora"],
    "garbanzos* 200g; zanahoria 3ud; limon 0.5ud; sesamo 10g; ajo 0.5ud",
    "Tritura los garbanzos con el lim\xF3n, el s\xE9samo, el ajo y un chorrito de agua | Corta la zanahoria en bastones"
  )),
  tentempie(receta(
    "kefir_arandanos",
    "K\xE9fir con ar\xE1ndanos",
    "fit",
    2,
    [],
    "kefir* 300g; arandanos 100g",
    "Sirve el k\xE9fir con los ar\xE1ndanos"
  )),
  tentempie(receta(
    "tostada_atun_tentempie",
    "Tostada integral con at\xFAn",
    "fit",
    4,
    ["fuego"],
    "pan_molde* 2ud; atun_natural 104g; tomate 0.5ud",
    "Tuesta el pan y pon el tomate rallado y el at\xFAn"
  )),
  tentempie(receta(
    "batido_recuperacion",
    "Batido de recuperaci\xF3n: leche, pl\xE1tano y avena",
    "fit",
    3,
    ["batidora"],
    "leche* 400ml; platano 1ud; avena 30g; canela 1g",
    "Tritura todo. T\xF3malo en las 2 horas despu\xE9s de entrenar"
  )),
  tentempie(receta(
    "yogur_mango_almendras",
    "Yogur natural con mango",
    "fit",
    3,
    [],
    "yogur_natural* 2ud; mango 0.5ud; almendras 15g",
    "Sirve el yogur con el mango en dados y las almendras"
  )),
  tentempie(receta(
    "garbanzos_crujientes_airfryer",
    "Garbanzos crujientes a la airfryer",
    "fit",
    15,
    ["airfryer"],
    "garbanzos* 400g; pimenton 2g; comino 1g; aceite_oliva 1cdta",
    "Seca bien los garbanzos | Ali\xF1a con el aceite y las especias | Airfryer 200 \xB0C 12 min, sacudiendo a mitad"
  )),
  tentempie(receta(
    "pina_requeson",
    "Pi\xF1a con reques\xF3n",
    "fit",
    4,
    [],
    "pina* 0.25ud; requeson 150g",
    "Pela y trocea la pi\xF1a | S\xEDrvela con el reques\xF3n"
  )),
  tentempie(receta(
    "pudin_avena_kefir",
    "Vasito de k\xE9fir, avena y fresas",
    "fit",
    4,
    [],
    "kefir* 250g; avena 30g; fresas 100g",
    "Mezcla el k\xE9fir con la avena | Pon las fresas troceadas por encima"
  )),
  tentempie(receta(
    "batido_soja_cacahuete",
    "Batido de soja y crema de cacahuete",
    "fit",
    3,
    ["batidora"],
    "bebida_soja* 400ml; crema_cacahuete 20g; platano 1ud",
    "Tritura todo"
  )),
  tentempie(receta(
    "naranja_nueces",
    "Naranja y nueces",
    "fit",
    2,
    [],
    "naranja* 2ud; nueces 30g",
    "Pela la naranja y s\xEDrvela con las nueces"
  )),
  // ——— Segunda tanda: más variedad para no aburrirse ———
  receta(
    "pollo_ajillo_ligero_judias",
    "Pollo al ajillo ligero con jud\xEDas verdes",
    "fit",
    20,
    ["fuego"],
    "pechuga_pollo* 300g; judias_verdes_cong 300g; ajo 4ud; vinagre 1cda; aceite_oliva 1cda",
    "Cuece las jud\xEDas 8 min | Dora el ajo laminado y el pollo en dados 6 min | Un chorrito de vinagre y mezcla con las jud\xEDas"
  ),
  receta(
    "pollo_naranja_arroz",
    "Pollo a la naranja con arroz basmati",
    "fit",
    25,
    ["fuego"],
    "pechuga_pollo* 300g; naranja 2ud; salsa_soja 1cda; ajo 1ud; arroz_basmati 120g; brocoli? 200g",
    "Cuece el arroz | Dora el pollo en dados | A\xF1ade el zumo de las naranjas, la soja y el ajo y reduce 5 min"
  ),
  receta(
    "pollo_mostaza_patata",
    "Pollo con patata y calabac\xEDn a la airfryer",
    "fit",
    25,
    ["airfryer"],
    "pechuga_pollo* 300g; patata 300g; calabacin 1ud; oregano 1g; aceite_oliva 1cda",
    "Patata en dados con aceite: 200 \xB0C 10 min | A\xF1ade el pollo y el calabac\xEDn con or\xE9gano 12 min"
  ),
  receta(
    "ensalada_quinoa_pollo_mediterranea",
    "Ensalada mediterr\xE1nea de quinoa y pollo",
    "fit",
    20,
    ["fuego"],
    "quinoa* 100g; pechuga_pollo 250g; tomate 2ud; pepino 150g; cebolla 0.5ud; oregano 1g; aceite_oliva 1cda",
    "Cuece la quinoa y enfr\xEDala | Pollo a la plancha en dados | Mezcla con la verdura picada y ali\xF1a con or\xE9gano"
  ),
  receta(
    "pollo_relleno_espinacas",
    "Pechuga rellena de espinacas y reques\xF3n",
    "fit",
    25,
    ["horno"],
    "pechuga_pollo* 350g; espinacas 100g; requeson 100g; ajo 1ud; aceite_oliva 1cda",
    "Horno a 200 \xB0C | Abre las pechugas en libro y rellena con espinacas, reques\xF3n y ajo | Cierra con palillos y hornea 20 min"
  ),
  receta(
    "pollo_tomate_aceitunas",
    "Pollo en salsa de tomate con arroz integral",
    "fit",
    30,
    ["fuego"],
    "pechuga_pollo* 300g; tomate_triturado 300g; cebolla 1ud; arroz_integral 120g; oregano 1g",
    "Cuece el arroz integral 25 min | Pocha la cebolla, dora el pollo y a\xF1ade el tomate y el or\xE9gano 12 min"
  ),
  receta(
    "pollo_hummus_wrap",
    "Wrap de pollo, hummus y verduras",
    "fit",
    12,
    ["fuego", "batidora"],
    "tortilla_trigo* 2ud; pechuga_pollo 200g; garbanzos 120g; limon 0.5ud; lechuga 50g; zanahoria 1ud",
    "Tritura los garbanzos con el lim\xF3n y un chorrito de agua | Pollo a la plancha | Enrolla con la lechuga y la zanahoria rallada"
  ),
  receta(
    "pollo_sesamo_arroz",
    "Pollo al s\xE9samo con arroz y pepino",
    "fit",
    20,
    ["fuego"],
    "pechuga_pollo* 300g; arroz 120g; sesamo 15g; salsa_soja 2cda; pepino 150g; miel? 10g",
    "Cuece el arroz | Dora el pollo en dados y glasea con la soja y el s\xE9samo | Sirve con el pepino"
  ),
  receta(
    "muslos_pollo_horno_ligero",
    "Contramuslos al horno sin piel con verduras",
    "fit",
    30,
    ["horno"],
    "muslo_pollo* 400g; pimiento_rojo 1ud; cebolla 1ud; calabacin 1ud; pimenton 3g; limon 1ud",
    "Horno a 210 \xB0C | Quita la piel y pon el pollo sobre la verdura troceada con piment\xF3n y lim\xF3n | 25 min"
  ),
  receta(
    "pavo_curry_quinoa",
    "Pavo al curry suave con quinoa",
    "fit",
    20,
    ["fuego"],
    "pechuga_pavo* 300g; quinoa 100g; yogur_griego 1ud; curry 4g; cebolla 0.5ud; espinacas 80g",
    "Cuece la quinoa | Pocha la cebolla, dora el pavo con el curry | Fuera del fuego, el yogur y las espinacas"
  ),
  receta(
    "pavo_hamburguesa_boniato",
    "Hamburguesa de pavo con boniato asado",
    "fit",
    25,
    ["airfryer", "fuego"],
    "pechuga_pavo* 300g; boniato 300g; huevo 1ud; avena 20g; lechuga 60g",
    "Boniato en bastones: airfryer 200 \xB0C 18 min | Pica el pavo con el huevo y la avena y forma hamburguesas | Plancha 4 min por lado"
  ),
  receta(
    "pavo_pimientos_arroz",
    "Salteado de pavo con pimientos y arroz",
    "fit",
    20,
    ["fuego"],
    "pechuga_pavo* 300g; pimiento_rojo 1ud; pimiento_verde 1ud; cebolla 1ud; arroz 100g; salsa_soja 1cda",
    "Cuece el arroz | Saltea las verduras en tiras y el pavo | Mezcla con el arroz y la soja"
  ),
  receta(
    "ensalada_pavo_lentejas",
    "Ensalada de lentejas con pavo y espinacas",
    "fit",
    10,
    [],
    "lentejas* 400g; fiambre_pavo 100g; espinacas 60g; tomate 1ud; cebolla 0.5ud; vinagre 1cda",
    "Escurre las lentejas | Mezcla con el pavo en tiras, las espinacas y la verdura picada | Ali\xF1a"
  ),
  receta(
    "ternera_brocoli_soja",
    "Ternera con br\xF3coli a la soja",
    "fit",
    15,
    ["fuego", "microondas"],
    "ternera_filete* 300g; brocoli 400g; salsa_soja 2cda; ajo 1ud; sesamo? 10g",
    "Br\xF3coli al microondas 4 min | Ternera en tiras a fuego fuerte 2 min | Junta con la soja y el ajo"
  ),
  receta(
    "ternera_fajitas",
    "Fajitas de ternera con pimientos",
    "fit",
    20,
    ["fuego"],
    "ternera_filete* 300g; pimiento_rojo 1ud; pimiento_verde 1ud; cebolla 1ud; tortilla_trigo 4ud; comino 2g",
    "Saltea las verduras en tiras 6 min | A\xF1ade la ternera con el comino 2 min | Rellena las tortillas"
  ),
  receta(
    "ternera_ensalada_quinoa_rucula",
    "Ensalada de ternera, r\xFAcula y quinoa",
    "fit",
    15,
    ["fuego"],
    "ternera_filete* 250g; rucula 80g; quinoa 80g; tomate 1ud; limon 0.5ud; aceite_oliva 1cda",
    "Cuece la quinoa | Ternera a la plancha y c\xF3rtala en tiras | Mezcla con la r\xFAcula, el tomate y el lim\xF3n"
  ),
  receta(
    "albondigas_ternera_calabacin",
    "Alb\xF3ndigas de ternera y calabac\xEDn al horno",
    "fit",
    30,
    ["horno", "batidora"],
    "ternera_filete* 300g; calabacin 1ud; huevo 1ud; avena 30g; tomate_triturado 200g",
    "Horno a 200 \xB0C | Tritura la ternera con el huevo y la avena, a\xF1ade el calabac\xEDn rallado y forma bolitas | 15 min, el tomate encima y 8 min m\xE1s"
  ),
  receta(
    "lomo_brocoli_airfryer",
    "Lomo a la airfryer con br\xF3coli",
    "fit",
    20,
    ["airfryer", "microondas"],
    "lomo_cerdo* 300g; brocoli 300g; ajo 1ud; pimenton 2g; aceite_oliva 1cda",
    "Lomo en filetes con ajo y piment\xF3n: airfryer 200 \xB0C 10 min | Br\xF3coli al microondas 4 min"
  ),
  receta(
    "salmon_teriyaki_quinoa",
    "Salm\xF3n teriyaki con quinoa",
    "fit",
    20,
    ["fuego"],
    "salmon* 300g; quinoa 100g; salsa_soja 2cda; miel 10g; sesamo 10g; brocoli? 200g",
    "Cuece la quinoa | Salm\xF3n a la plancha 4 min por lado | Glasea con la soja y la miel y espolvorea s\xE9samo"
  ),
  receta(
    "salmon_tartar_aguacate",
    "Bowl de salm\xF3n, aguacate y arroz integral",
    "fit",
    30,
    ["fuego"],
    "salmon* 250g; arroz_integral 120g; aguacate 1ud; pepino 100g; salsa_soja 1cda; limon 0.5ud",
    "Cuece el arroz integral 25 min | Salm\xF3n a la plancha en dados | Monta con aguacate, pepino, soja y lim\xF3n"
  ),
  receta(
    "merluza_tomate_microondas",
    "Merluza en salsa de tomate al microondas",
    "fit",
    15,
    ["microondas"],
    "merluza_cong* 400g; tomate_triturado 200g; cebolla 0.5ud; ajo 1ud; oregano 1g",
    "Cebolla y ajo picados al microondas 3 min | A\xF1ade el tomate y la merluza encima | Tapa 8 min"
  ),
  receta(
    "merluza_airfryer_calabacin_pimiento",
    "Merluza a la airfryer con calabac\xEDn y pimiento",
    "fit",
    20,
    ["airfryer"],
    "merluza_cong* 400g; calabacin 1ud; pimiento_rojo 1ud; ajo 1ud; aceite_oliva 1cda",
    "Verdura en dados con aceite: 200 \xB0C 8 min | A\xF1ade la merluza con ajo 10 min"
  ),
  receta(
    "bacalao_espinacas_garbanzos",
    "Bacalao con garbanzos y espinacas",
    "fit",
    20,
    ["fuego"],
    "bacalao_cong* 300g; garbanzos 300g; espinacas 150g; ajo 2ud; pimenton 2g; aceite_oliva 1cda",
    "Dora el ajo con el piment\xF3n y las espinacas | A\xF1ade los garbanzos con un poco de agua y el bacalao encima | Tapa 8 min"
  ),
  receta(
    "gambas_arroz_integral_verduras",
    "Arroz integral salteado con gambas",
    "fit",
    30,
    ["fuego"],
    "arroz_integral* 120g; gambas_cong 250g; guisantes_cong 100g; zanahoria 1ud; huevo 1ud; salsa_soja 1cda",
    "Cuece el arroz integral 25 min | Saltea la zanahoria, los guisantes y las gambas | A\xF1ade el huevo batido, el arroz y la soja"
  ),
  receta(
    "mejillones_ensalada_quinoa",
    "Ensalada de quinoa con mejillones",
    "fit",
    15,
    ["fuego"],
    "quinoa* 100g; mejillon_cong 300g; pimiento_rojo 0.5ud; cebolla 0.5ud; tomate 1ud; vinagre 1cda",
    "Cuece la quinoa y los mejillones al vapor 5 min | Mezcla con la verdura picada y ali\xF1a"
  ),
  receta(
    "calamar_arroz_tomate",
    "Calamar en tomate con arroz",
    "fit",
    25,
    ["fuego"],
    "calamar_cong* 400g; tomate_triturado 200g; cebolla 1ud; arroz 100g; pimenton 2g",
    "Cuece el arroz | Pocha la cebolla, a\xF1ade el calamar y el piment\xF3n 4 min | El tomate 10 min"
  ),
  receta(
    "atun_pasta_integral_tomate",
    "Pasta integral con at\xFAn y tomate",
    "fit",
    15,
    ["fuego"],
    "pasta_integral* 140g; atun_natural 156g; tomate_triturado 200g; cebolla 0.5ud; oregano 1g",
    "Cuece la pasta | Pocha la cebolla con el tomate 6 min | Mezcla con el at\xFAn y el or\xE9gano"
  ),
  receta(
    "atun_aguacate_tostas",
    "Tostas de at\xFAn, aguacate y tomate",
    "fit",
    8,
    ["fuego"],
    "pan_molde* 4ud; atun_natural 104g; aguacate 0.5ud; tomate 1ud; limon 0.5ud",
    "Tuesta el pan | Aplasta el aguacate con lim\xF3n | Pon el tomate y el at\xFAn encima"
  ),
  receta(
    "sardinas_tostas_rucula",
    "Tostas de sardinas con r\xFAcula",
    "fit",
    8,
    ["fuego"],
    "pan_molde* 4ud; sardinas 120g; rucula 40g; tomate 1ud",
    "Tuesta el pan, ralla el tomate encima y pon las sardinas y la r\xFAcula"
  ),
  receta(
    "tortilla_espinacas_claras_queso",
    "Tortilla de claras, espinacas y reques\xF3n",
    "fit",
    10,
    ["fuego"],
    "claras_huevo* 300g; huevo 1ud; espinacas 100g; requeson 80g",
    "Saltea las espinacas | Echa las claras batidas con el huevo | Rellena con el reques\xF3n y dobla"
  ),
  receta(
    "huevos_revueltos_gambas",
    "Revuelto de gambas y ajetes",
    "fit",
    10,
    ["fuego"],
    "huevo* 4ud; gambas_cong 200g; ajo 2ud; aceite_oliva 1cda",
    "Saltea el ajo y las gambas 3 min | A\xF1ade los huevos batidos y cuaja jugoso"
  ),
  receta(
    "huevos_shakshuka_garbanzos",
    "Huevos al horno con tomate y garbanzos",
    "fit",
    25,
    ["horno"],
    "huevo* 4ud; garbanzos 200g; tomate_triturado 300g; pimenton 2g; comino 1g",
    "Horno a 200 \xB0C | Tomate, garbanzos y especias en una fuente 10 min | Casca los huevos encima y hornea 8 min"
  ),
  receta(
    "tortilla_patata_ligera_airfryer",
    "Tortilla de patata ligera (patata al microondas)",
    "fit",
    20,
    ["microondas", "fuego"],
    "huevo* 4ud; claras_huevo 150g; patata 300g; cebolla 0.5ud; aceite_oliva 1cda",
    "Patata en l\xE1minas y cebolla con el aceite, tapadas, 9 min al microondas | Mezcla con los huevos y las claras | Cuaja en sart\xE9n"
  ),
  receta(
    "tofu_bowl_arroz_mango",
    "Bowl de tofu, arroz y mango",
    "fit",
    20,
    ["fuego"],
    "tofu* 300g; arroz 100g; mango 1ud; pepino 100g; salsa_soja 2cda; sesamo 10g",
    "Cuece el arroz | Dora el tofu en dados con la soja | Monta con el mango, el pepino y el s\xE9samo"
  ),
  receta(
    "tofu_tomate_espinacas",
    "Tofu guisado con tomate y espinacas",
    "fit",
    15,
    ["fuego"],
    "tofu* 400g; tomate_triturado 250g; espinacas 150g; ajo 2ud; pimenton 2g",
    "Dora el tofu en dados | A\xF1ade el ajo, el piment\xF3n y el tomate 6 min | Las espinacas al final"
  ),
  receta(
    "tofu_wrap_verduras",
    "Wrap de tofu y verduras",
    "fit",
    12,
    ["fuego"],
    "tortilla_trigo* 2ud; tofu 200g; pimiento_rojo 0.5ud; lechuga 40g; salsa_soja 1cda",
    "Saltea el tofu en tiras con el pimiento y la soja | Enrolla con la lechuga"
  ),
  receta(
    "garbanzos_salteados_pollo",
    "Garbanzos salteados con pollo y piment\xF3n",
    "fit",
    15,
    ["fuego"],
    "garbanzos* 400g; pechuga_pollo 200g; pimiento_rojo 0.5ud; ajo 2ud; pimenton 3g; aceite_oliva 1cda",
    "Dora el pollo en dados con el ajo | A\xF1ade el pimiento y los garbanzos 5 min | El piment\xF3n al final"
  ),
  receta(
    "alubias_salteadas_gambas",
    "Alubias salteadas con gambas",
    "fit",
    12,
    ["fuego"],
    "alubias* 400g; gambas_cong 200g; ajo 2ud; espinacas 80g; aceite_oliva 1cda",
    "Saltea el ajo y las gambas 3 min | A\xF1ade las alubias escurridas y las espinacas 3 min"
  ),
  receta(
    "lentejas_salmon_ensalada",
    "Ensalada templada de lentejas y salm\xF3n",
    "fit",
    15,
    ["fuego"],
    "lentejas* 400g; salmon 200g; rucula 60g; tomate 1ud; limon 1ud",
    "Salm\xF3n a la plancha y desm\xEDgalo | Mezcla con las lentejas escurridas, la r\xFAcula y el tomate | Lim\xF3n"
  ),
  receta(
    "crema_lentejas_zanahoria",
    "Crema de lentejas y zanahoria",
    "fit",
    20,
    ["fuego", "batidora"],
    "lentejas* 400g; zanahoria 3ud; cebolla 1ud; comino 2g; yogur_griego? 1ud",
    "Pocha la cebolla y la zanahoria 6 min | A\xF1ade las lentejas, el comino y agua 10 min | Tritura y sirve con yogur"
  ),
  receta(
    "ensalada_arroz_integral_atun",
    "Ensalada de arroz integral con at\xFAn y ma\xEDz",
    "fit",
    30,
    ["fuego"],
    "arroz_integral* 120g; atun_natural 156g; maiz 140g; pimiento_rojo 0.5ud; tomate 1ud; aceite_oliva 1cda",
    "Cuece el arroz integral 25 min y enfr\xEDalo | Mezcla con el at\xFAn, el ma\xEDz y la verdura picada"
  ),
  receta(
    "crema_coliflor_pavo",
    "Crema de coliflor con dados de pavo",
    "fit",
    20,
    ["fuego", "batidora"],
    "coliflor* 600g; cebolla 1ud; pechuga_pavo 200g; leche 150ml; aceite_oliva 1cda",
    "Cuece la coliflor y la cebolla 12 min | Tritura con la leche | Pavo a la plancha en dados por encima"
  ),
  receta(
    "sopa_pollo_verduras_fit",
    "Sopa de pollo y verduras",
    "fit",
    25,
    ["fuego"],
    "pechuga_pollo* 250g; zanahoria 2ud; puerro 1ud; calabacin 1ud; pasta_integral 60g",
    "Cuece el pollo y la verdura en dados en 1 litro de agua 15 min | Desmiga el pollo y a\xF1ade la pasta 8 min"
  ),
  receta(
    "calabacin_relleno_pollo",
    "Calabacines rellenos de pollo",
    "fit",
    30,
    ["horno", "fuego"],
    "calabacin* 2ud; pechuga_pollo 250g; cebolla 0.5ud; tomate_triturado 150g; mozzarella 50g",
    "Horno a 200 \xB0C | Vac\xEDa los calabacines | Saltea la pulpa con la cebolla y el pollo picado y el tomate | Rellena, pon la mozzarella y hornea 15 min"
  ),
  receta(
    "pimientos_rellenos_pavo_quinoa",
    "Pimientos rellenos de pavo y quinoa",
    "fit",
    30,
    ["horno", "fuego"],
    "pimiento_rojo* 2ud; pechuga_pavo 200g; quinoa 80g; cebolla 0.5ud; tomate_triturado 100g",
    "Horno a 200 \xB0C | Cuece la quinoa | Saltea el pavo picado con la cebolla y el tomate y mezcla con la quinoa | Rellena y hornea 20 min"
  ),
  receta(
    "berenjena_rellena_ternera",
    "Berenjena rellena de ternera",
    "fit",
    30,
    ["microondas", "fuego", "horno"],
    "berenjena* 2ud; ternera_filete 200g; cebolla 0.5ud; tomate_triturado 150g; queso_rallado 30g",
    "Berenjenas partidas al microondas 6 min y vac\xEDalas | Saltea la pulpa con la cebolla, la ternera picada y el tomate | Rellena, queso y gratina 8 min"
  ),
  receta(
    "champinones_rellenos_atun",
    "Champi\xF1ones rellenos de at\xFAn a la airfryer",
    "fit",
    15,
    ["airfryer"],
    "champinon* 250g; atun_natural 104g; requeson 60g; ajo 1ud",
    "Mezcla el at\xFAn con el reques\xF3n y el ajo | Rellena los champi\xF1ones | Airfryer 180 \xB0C 8 min"
  ),
  receta(
    "brochetas_gambas_pina",
    "Brochetas de gambas y pi\xF1a",
    "fit",
    15,
    ["fuego"],
    "gambas_cong* 300g; pina 0.25ud; pimiento_rojo 0.5ud; lechuga 80g",
    "Pincha las gambas con la pi\xF1a y el pimiento | Plancha 3 min por lado | Sirve con la lechuga"
  ),
  receta(
    "salmon_brochetas_calabacin",
    "Brochetas de salm\xF3n y calabac\xEDn",
    "fit",
    15,
    ["fuego"],
    "salmon* 300g; calabacin 1ud; limon 1ud; aceite_oliva 1cdta",
    "Pincha el salm\xF3n y el calabac\xEDn en dados | Plancha 6 min d\xE1ndoles la vuelta | Lim\xF3n"
  ),
  // ——— Más desayunos ———
  desayuno(receta(
    "tostada_salmon_requeson",
    "Tostada de reques\xF3n y salm\xF3n con r\xFAcula",
    "fit",
    8,
    ["fuego"],
    "pan_molde* 4ud; requeson 100g; salmon 120g; rucula 30g",
    "Salm\xF3n a la plancha y desm\xEDgalo | Tuesta el pan, unta el reques\xF3n y pon el salm\xF3n y la r\xFAcula"
  )),
  desayuno(receta(
    "porridge_manzana_canela",
    "Porridge de manzana y canela",
    "fit",
    8,
    ["fuego"],
    "avena* 80g; leche 400ml; manzana 1ud; canela 1g; almendras? 15g",
    "Cuece la avena en la leche con la manzana rallada 5 min | Sirve con canela y almendras"
  )),
  desayuno(receta(
    "tortilla_espinacas_desayuno",
    "Tortilla de espinacas con tostada",
    "fit",
    10,
    ["fuego"],
    "huevo* 4ud; espinacas 80g; pan_molde 2ud",
    "Saltea las espinacas, a\xF1ade los huevos y cuaja | Sirve con el pan tostado"
  )),
  desayuno(receta(
    "yogur_kiwi_avena",
    "Yogur natural con kiwi y avena",
    "fit",
    3,
    [],
    "yogur_natural* 3ud; kiwi 2ud; avena 40g; nueces? 15g",
    "Sirve el yogur con el kiwi en dados y la avena"
  )),
  desayuno(receta(
    "tostadas_francesas_proteicas",
    "Tostadas francesas con claras y fresas",
    "fit",
    10,
    ["fuego"],
    "pan_molde* 4ud; claras_huevo 150g; leche 50ml; canela 1g; fresas 150g",
    "Bate las claras con la leche y la canela | Empapa el pan y d\xF3ralo en sart\xE9n antiadherente | Sirve con las fresas"
  )),
  desayuno(receta(
    "bocadillo_tortilla_claras",
    "S\xE1ndwich integral de tortilla de claras",
    "fit",
    8,
    ["fuego"],
    "pan_molde* 4ud; claras_huevo 200g; tomate 1ud; fiambre_pavo? 40g",
    "Cuaja las claras en tortilla | Monta los s\xE1ndwiches con el tomate"
  )),
  desayuno(receta(
    "batido_mango_kefir",
    "Batido de k\xE9fir y mango",
    "fit",
    4,
    ["batidora"],
    "kefir* 400g; mango 0.5ud; avena 30g",
    "Tritura todo"
  )),
  desayuno(receta(
    "yogur_proteico_cacahuete",
    "Yogur griego con pl\xE1tano y crema de cacahuete",
    "fit",
    3,
    [],
    "yogur_griego* 2ud; platano 1ud; crema_cacahuete 15g; canela? 1g",
    "Sirve el yogur con el pl\xE1tano en rodajas y la crema de cacahuete"
  )),
  // ——— Más tentempiés ———
  tentempie(receta(
    "pavo_tortitas_tomate",
    "Tostadita integral con pavo",
    "fit",
    3,
    [],
    "pan_molde* 2ud; fiambre_pavo 60g; tomate 0.5ud",
    "Pon el tomate en rodajas y el pavo sobre el pan"
  )),
  tentempie(receta(
    "claras_cocidas_atun",
    "Huevos rellenos de at\xFAn ligeros",
    "fit",
    15,
    ["fuego"],
    "huevo* 4ud; atun_natural 104g; yogur_griego 0.5ud",
    "Cuece los huevos 10 min | Mezcla las yemas con el at\xFAn y el yogur | Rellena las claras"
  )),
  tentempie(receta(
    "fresas_yogur_griego",
    "Fresas con yogur griego",
    "fit",
    3,
    [],
    "fresas* 200g; yogur_griego 1ud",
    "Trocea las fresas y s\xEDrvelas con el yogur"
  )),
  tentempie(receta(
    "pera_requeson_nueces",
    "Pera con reques\xF3n y nueces",
    "fit",
    3,
    [],
    "pera* 1ud; requeson 120g; nueces 15g",
    "Trocea la pera y s\xEDrvela con el reques\xF3n y las nueces"
  ))
];

// packages/core/src/data/recipes.ts
var RECIPES = [
  // ——— Fit / saludable ———
  {
    id: "pollo_airfryer_verduras",
    name: "Pollo a la airfryer con verduras",
    category: "fit",
    minutes: 25,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "calabacin", amount: 1, unit: "ud" },
      { id: "pimiento_rojo", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" },
      { id: "pimenton", amount: 3, unit: "g" }
    ],
    steps: ["Trocea pollo y verduras.", "Ali\xF1a con aceite, sal y piment\xF3n.", "Airfryer 200 \xB0C 18 min, removiendo a mitad."]
  },
  {
    id: "salmon_horno_brocoli",
    name: "Salm\xF3n al horno con br\xF3coli",
    category: "fit",
    minutes: 25,
    appliances: ["horno"],
    servings: 2,
    ingredients: [
      { id: "salmon", base: true, amount: 250, unit: "g" },
      { id: "brocoli", amount: 300, unit: "g" },
      { id: "limon", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Horno a 200 \xB0C.", "Br\xF3coli en ramilletes con aceite y sal, 8 min.", "A\xF1ade el salm\xF3n con lim\xF3n y hornea 12 min m\xE1s."]
  },
  {
    id: "ensalada_garbanzos_atun",
    name: "Ensalada templada de garbanzos y at\xFAn",
    category: "fit",
    minutes: 10,
    appliances: [],
    servings: 2,
    ingredients: [
      { id: "garbanzos", base: true, amount: 400, unit: "g" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "tomate", amount: 2, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "lechuga", amount: 100, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Escurre y enjuaga los garbanzos.", "Pica tomate y cebolla.", "Mezcla todo con el at\xFAn y ali\xF1a."]
  },
  {
    id: "tortilla_espinacas",
    name: "Tortilla de espinacas y queso fresco",
    category: "fit",
    minutes: 12,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "huevo", base: true, amount: 5, unit: "ud" },
      { id: "espinacas", amount: 150, unit: "g" },
      { id: "queso_fresco", amount: 100, unit: "g" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Saltea las espinacas 2 min.", "Bate huevos con el queso fresco y sal.", "Cuaja a fuego medio por ambos lados."]
  },
  {
    id: "merluza_papillote",
    name: "Merluza en papillote al microondas",
    category: "fit",
    minutes: 15,
    appliances: ["microondas"],
    servings: 2,
    ingredients: [
      { id: "merluza_cong", base: true, amount: 400, unit: "g" },
      { id: "zanahoria", amount: 1, unit: "ud" },
      { id: "calabacin", amount: 0.5, unit: "ud" },
      { id: "limon", amount: 0.5, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Descongela la merluza.", "Verduras en juliana en un recipiente apto con la merluza encima.", "Tapa y microondas 7-8 min a m\xE1xima potencia."]
  },
  {
    id: "bowl_pollo_arroz",
    name: "Bowl de pollo, arroz y aguacate",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz_basmati", base: true, amount: 150, unit: "g" },
      { id: "pechuga_pollo", base: true, amount: 250, unit: "g" },
      { id: "aguacate", amount: 1, unit: "ud" },
      { id: "maiz", amount: 100, unit: "g" },
      { id: "salsa_soja", amount: 2, unit: "cda" }
    ],
    steps: ["Cuece el arroz 12 min.", "Dora el pollo en tiras con la soja.", "Monta el bowl con aguacate y ma\xEDz."]
  },
  {
    id: "crema_calabacin",
    name: "Crema de calabac\xEDn",
    category: "fit",
    minutes: 25,
    appliances: ["fuego", "batidora"],
    servings: 2,
    ingredients: [
      { id: "calabacin", base: true, amount: 2, unit: "ud" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "patata", amount: 1, unit: "ud" },
      { id: "queso_fresco", amount: 60, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Sofr\xEDe la cebolla.", "A\xF1ade calabac\xEDn y patata troceados, cubre de agua y cuece 15 min.", "Tritura con el queso fresco."]
  },
  // ——— Cocina rápida de diario ———
  {
    id: "lentejas_rapidas",
    name: "Lentejas r\xE1pidas con verduras",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "lentejas", base: true, amount: 400, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "zanahoria", amount: 1, unit: "ud" },
      { id: "pimiento_verde", amount: 0.5, unit: "ud" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "pimenton", amount: 3, unit: "g" },
      { id: "caldo_pollo", amount: 300, unit: "ml" }
    ],
    steps: ["Sofr\xEDe cebolla, zanahoria y pimiento.", "A\xF1ade tomate y piment\xF3n.", "Incorpora lentejas y caldo; 10 min a fuego suave."]
  },
  {
    id: "macarrones_tomate",
    name: "Macarrones con tomate y at\xFAn",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "tomate_frito", base: true, amount: 200, unit: "g" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "queso_rallado", amount: 40, unit: "g", optional: true }
    ],
    steps: ["Cuece la pasta.", "Calienta el tomate con el at\xFAn.", "Mezcla y gratina con queso si quieres."]
  },
  {
    id: "arroz_tres_delicias",
    name: "Arroz tres delicias",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz", base: true, amount: 150, unit: "g" },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "jamon_york", amount: 80, unit: "g" },
      { id: "guisantes_cong", amount: 80, unit: "g" },
      { id: "zanahoria", amount: 1, unit: "ud" },
      { id: "salsa_soja", amount: 2, unit: "cda" }
    ],
    steps: ["Cuece el arroz.", "Haz una tortilla fina y c\xF3rtala en tiras.", "Saltea todo junto con la soja."]
  },
  {
    id: "pollo_curry_coco",
    name: "Pollo al curry con leche de coco",
    category: "diario",
    minutes: 25,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "leche_coco", amount: 400, unit: "ml" },
      { id: "curry", amount: 6, unit: "g" },
      { id: "arroz_basmati", amount: 150, unit: "g" }
    ],
    steps: ["Cuece el arroz.", "Dora pollo y cebolla, a\xF1ade curry.", "Vierte la leche de coco y reduce 10 min."]
  },
  {
    id: "espaguetis_bolonesa",
    name: "Espaguetis a la bolo\xF1esa",
    category: "diario",
    minutes: 25,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "carne_picada", base: true, amount: 250, unit: "g" },
      { id: "tomate_triturado", amount: 300, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "zanahoria", amount: 1, unit: "ud" },
      { id: "oregano", amount: 1, unit: "g" }
    ],
    steps: ["Sofr\xEDe cebolla y zanahoria picadas.", "A\xF1ade la carne y d\xF3rala.", "Tomate y or\xE9gano, 12 min; sirve con la pasta."]
  },
  {
    id: "lomo_patatas_airfryer",
    name: "Lomo con patatas a la airfryer",
    category: "diario",
    minutes: 25,
    appliances: ["airfryer", "fuego"],
    servings: 2,
    ingredients: [
      { id: "lomo_cerdo", base: true, amount: 300, unit: "g" },
      { id: "patata", amount: 2, unit: "ud" },
      { id: "pimiento_verde", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Patata en gajos con aceite: airfryer 190 \xB0C 20 min.", "Plancha el lomo y el pimiento."]
  },
  {
    id: "gambas_salteado",
    name: "Salteado de gambas y verduras",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "gambas_cong", base: true, amount: 300, unit: "g" },
      { id: "salteado_verduras_cong", amount: 400, unit: "g" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "salsa_soja", amount: 1, unit: "cda" }
    ],
    steps: ["Saltea el ajo laminado.", "A\xF1ade las verduras congeladas 6 min.", "Incorpora las gambas y la soja, 3 min."]
  },
  {
    id: "huevos_rotos",
    name: "Huevos rotos con jam\xF3n",
    category: "diario",
    minutes: 25,
    appliances: ["airfryer", "fuego"],
    servings: 2,
    ingredients: [
      { id: "patatas_cong", base: true, amount: 400, unit: "g" },
      { id: "huevo", base: true, amount: 3, unit: "ud" },
      { id: "jamon_york", amount: 80, unit: "g" }
    ],
    steps: ["Patatas en airfryer 200 \xB0C 15 min.", "Fr\xEDe los huevos.", "Sirve sobre las patatas con el jam\xF3n y rompe las yemas."]
  },
  // ——— Capricho / fin de semana ———
  {
    id: "pizza_casera",
    name: "Pizza casera de jam\xF3n y champi\xF1\xF3n",
    category: "capricho",
    minutes: 25,
    appliances: ["horno"],
    servings: 2,
    ingredients: [
      { id: "masa_pizza", base: true, amount: 1, unit: "ud" },
      { id: "tomate_frito", amount: 100, unit: "g" },
      { id: "mozzarella", amount: 150, unit: "g" },
      { id: "jamon_york", amount: 80, unit: "g" },
      { id: "champinon", amount: 100, unit: "g" },
      { id: "oregano", amount: 1, unit: "g" }
    ],
    steps: ["Horno a 230 \xB0C.", "Extiende la masa, tomate, queso y toppings.", "Hornea 12-14 min."]
  },
  {
    id: "hamburguesa_casera",
    name: "Hamburguesa completa con patatas",
    category: "capricho",
    minutes: 25,
    appliances: ["fuego", "airfryer"],
    servings: 2,
    ingredients: [
      { id: "hamburguesa", base: true, amount: 2, unit: "ud" },
      { id: "pan_hamburguesa", base: true, amount: 2, unit: "ud" },
      { id: "queso_lonchas", amount: 40, unit: "g" },
      { id: "bacon", amount: 60, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "lechuga", amount: 40, unit: "g", optional: true },
      { id: "patatas_cong", amount: 300, unit: "g" },
      { id: "ketchup", amount: 30, unit: "g" }
    ],
    steps: ["Patatas en airfryer 200 \xB0C 15 min.", "Plancha la carne y el bacon; funde el queso encima.", "Monta con tomate y lechuga."]
  },
  {
    id: "quesadillas",
    name: "Quesadillas de pollo",
    category: "capricho",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "tortilla_trigo", base: true, amount: 4, unit: "ud" },
      { id: "pechuga_pollo", amount: 200, unit: "g" },
      { id: "mozzarella", amount: 120, unit: "g" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "comino", amount: 2, unit: "g" }
    ],
    steps: ["Saltea pollo, pimiento y cebolla con comino.", "Rellena las tortillas con el queso.", "D\xF3ralas en sart\xE9n 2 min por lado."]
  },
  {
    id: "carbonara",
    name: "Espaguetis carbonara (de casa)",
    category: "capricho",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "bacon", amount: 120, unit: "g" },
      { id: "huevo", base: true, amount: 2, unit: "ud" },
      { id: "queso_rallado", amount: 60, unit: "g" },
      { id: "pimienta", amount: 1, unit: "g" }
    ],
    steps: ["Cuece la pasta.", "Dora el bacon.", "Fuera del fuego mezcla con huevo y queso batidos y un poco de agua de cocci\xF3n."]
  },
  // ——— Más fit ———
  {
    id: "pechuga_plancha_ensalada",
    name: "Pechuga a la plancha con ensalada",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "lechuga", amount: 150, unit: "g" },
      { id: "tomate", amount: 2, unit: "ud" },
      { id: "pepino", amount: 0.5, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" },
      { id: "vinagre", amount: 1, unit: "cda" }
    ],
    steps: ["Salpimienta la pechuga y hazla a la plancha 4 min por lado.", "Prepara la ensalada con tomate y pepino.", "Ali\xF1a y sirve el pollo en tiras encima."]
  },
  {
    id: "merluza_horno_patatas",
    name: "Merluza al horno con patatas",
    category: "fit",
    minutes: 30,
    appliances: ["horno", "microondas"],
    servings: 2,
    ingredients: [
      { id: "merluza_cong", base: true, amount: 400, unit: "g" },
      { id: "patata", amount: 2, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "pimiento_verde", amount: 0.5, unit: "ud" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Patata en rodajas finas al microondas 6 min, tapada.", "Ponla en una bandeja con cebolla y pimiento y hornea a 200 \xB0C 10 min.", "A\xF1ade la merluza descongelada encima y hornea 10 min m\xE1s."]
  },
  {
    id: "salmon_airfryer_calabacin",
    name: "Salm\xF3n a la airfryer con calabac\xEDn",
    category: "fit",
    minutes: 15,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "salmon", base: true, amount: 250, unit: "g" },
      { id: "calabacin", amount: 1, unit: "ud" },
      { id: "limon", amount: 0.5, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Calabac\xEDn en medias lunas con aceite y sal: airfryer 190 \xB0C 5 min.", "A\xF1ade el salm\xF3n con sal y lim\xF3n.", "8-10 min m\xE1s a 190 \xB0C."]
  },
  {
    id: "crema_zanahoria",
    name: "Crema de zanahoria",
    category: "fit",
    minutes: 25,
    appliances: ["fuego", "batidora"],
    servings: 2,
    ingredients: [
      { id: "zanahoria", base: true, amount: 400, unit: "g" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "patata", amount: 1, unit: "ud" },
      { id: "queso_fresco", amount: 60, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" },
      { id: "comino", amount: 1, unit: "g" }
    ],
    steps: ["Sofr\xEDe la cebolla.", "A\xF1ade zanahoria y patata troceadas, cubre de agua y cuece 15 min.", "Tritura con el comino y el queso fresco."]
  },
  {
    id: "ensalada_cuscus_pollo",
    name: "Ensalada de cusc\xFAs con pollo",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "cuscus", base: true, amount: 150, unit: "g" },
      { id: "pechuga_pollo", amount: 200, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "pepino", amount: 0.5, unit: "ud" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "limon", amount: 0.5, unit: "ud" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Hidrata el cusc\xFAs con el mismo peso de agua hirviendo y sal, 5 min tapado.", "Haz el pollo a la plancha y c\xF3rtalo en dados.", "Mezcla con la verdura picada, lim\xF3n y aceite."]
  },
  {
    id: "pollo_limon_brocoli",
    name: "Pollo al lim\xF3n con br\xF3coli",
    category: "fit",
    minutes: 20,
    appliances: ["fuego", "microondas"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "brocoli", amount: 300, unit: "g" },
      { id: "limon", amount: 1, unit: "ud" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Br\xF3coli en ramilletes al microondas con un dedo de agua, 5 min tapado.", "Dora el pollo en dados con el ajo.", "A\xF1ade el zumo de lim\xF3n, reduce 2 min y junta con el br\xF3coli."]
  },
  {
    id: "revuelto_champinon_gambas",
    name: "Revuelto de champi\xF1ones y gambas",
    category: "fit",
    minutes: 12,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "huevo", base: true, amount: 4, unit: "ud" },
      { id: "champinon", amount: 200, unit: "g" },
      { id: "gambas_cong", amount: 150, unit: "g" },
      { id: "ajo", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Saltea el ajo y los champi\xF1ones 5 min.", "A\xF1ade las gambas 2 min.", "Incorpora los huevos batidos y cuaja a fuego suave sin dejar de remover."]
  },
  {
    id: "judias_verdes_patata",
    name: "Jud\xEDas verdes con patata y huevo",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "judias_verdes_cong", base: true, amount: 400, unit: "g" },
      { id: "patata", amount: 2, unit: "ud" },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "pimenton", amount: 2, unit: "g" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Cuece patata en dados y jud\xEDas 15 min; los huevos, 10 min en el mismo agua.", "Escurre.", "Rehoga con ajo y piment\xF3n y sirve con el huevo picado."]
  },
  {
    id: "berenjena_airfryer_queso",
    name: "Berenjena gratinada a la airfryer",
    category: "fit",
    minutes: 20,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "berenjena", base: true, amount: 2, unit: "ud" },
      { id: "tomate_triturado", amount: 150, unit: "g" },
      { id: "mozzarella", amount: 80, unit: "g" },
      { id: "oregano", amount: 1, unit: "g" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Berenjena en rodajas gruesas con aceite y sal: airfryer 200 \xB0C 10 min.", "Cubre con tomate, queso y or\xE9gano.", "4-5 min m\xE1s hasta que gratine."]
  },
  {
    id: "garbanzos_espinacas",
    name: "Garbanzos con espinacas",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "garbanzos", base: true, amount: 400, unit: "g" },
      { id: "espinacas", amount: 200, unit: "g" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "pimenton", amount: 2, unit: "g" },
      { id: "comino", amount: 1, unit: "g" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Dora el ajo, a\xF1ade piment\xF3n, comino y tomate.", "Incorpora las espinacas hasta que bajen.", "A\xF1ade los garbanzos escurridos y un poco de agua, 5 min."]
  },
  {
    id: "wrap_pollo",
    name: "Wraps de pollo con yogur",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "tortilla_trigo", base: true, amount: 4, unit: "ud" },
      { id: "pechuga_pollo", base: true, amount: 250, unit: "g" },
      { id: "lechuga", amount: 60, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "yogur_griego", amount: 1, unit: "ud" },
      { id: "limon", amount: 0.5, unit: "ud", optional: true }
    ],
    steps: ["Haz el pollo en tiras a la plancha con sal y pimienta.", "Mezcla el yogur con lim\xF3n y sal.", "Rellena las tortillas y enr\xF3llalas."]
  },
  {
    id: "ensalada_alubias_atun",
    name: "Ensalada de alubias con at\xFAn",
    category: "fit",
    minutes: 10,
    appliances: [],
    servings: 2,
    ingredients: [
      { id: "alubias", base: true, amount: 400, unit: "g" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "tomate", amount: 1, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" },
      { id: "vinagre", amount: 1, unit: "cda" }
    ],
    steps: ["Escurre y enjuaga las alubias.", "Pica pimiento, cebolla y tomate.", "Mezcla con el at\xFAn y ali\xF1a."]
  },
  {
    id: "tortilla_calabacin",
    name: "Tortilla de calabac\xEDn y cebolla",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "huevo", base: true, amount: 5, unit: "ud" },
      { id: "calabacin", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Pocha cebolla y calabac\xEDn en dados 10 min.", "M\xE9zclalos con los huevos batidos y sal.", "Cuaja la tortilla por los dos lados."]
  },
  {
    id: "merluza_tomate",
    name: "Merluza con tomate y pimientos",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "merluza_cong", base: true, amount: 400, unit: "g" },
      { id: "tomate_triturado", amount: 250, unit: "g" },
      { id: "pimiento_verde", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Sofr\xEDe cebolla y pimiento 5 min.", "A\xF1ade el tomate y cuece 5 min.", "Pon la merluza descongelada en la salsa, tapa y 8 min a fuego suave."]
  },
  {
    id: "pollo_verduras_microondas",
    name: "Pollo con verduras al microondas",
    category: "fit",
    minutes: 15,
    appliances: ["microondas"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "salteado_verduras_cong", amount: 300, unit: "g" },
      { id: "salsa_soja", amount: 1, unit: "cda" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Pollo en dados con soja y aceite en un recipiente apto.", "A\xF1ade las verduras congeladas y tapa.", "Microondas 8-10 min, removiendo a mitad."]
  },
  {
    id: "sopa_pollo_fideos",
    name: "Sopa de pollo con fideos",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "caldo_pollo", base: true, amount: 1e3, unit: "ml" },
      { id: "pasta", base: true, amount: 80, unit: "g" },
      { id: "pechuga_pollo", amount: 150, unit: "g" },
      { id: "zanahoria", amount: 1, unit: "ud", optional: true }
    ],
    steps: ["Lleva el caldo a ebullici\xF3n con la zanahoria en rodajas.", "A\xF1ade el pollo en dados peque\xF1os 5 min.", "Echa los fideos y cuece lo que indique el paquete."]
  },
  {
    id: "salteado_pollo_soja",
    name: "Salteado de pollo con verduras y soja",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "salteado_verduras_cong", amount: 400, unit: "g" },
      { id: "salsa_soja", amount: 2, unit: "cda" },
      { id: "arroz_basmati", amount: 150, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Cuece el arroz si lo vas a poner.", "Dora el pollo en tiras a fuego fuerte.", "A\xF1ade las verduras 6 min y la soja al final."]
  },
  {
    id: "cuscus_verduras_garbanzos",
    name: "Cusc\xFAs con verduras y garbanzos",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "cuscus", base: true, amount: 150, unit: "g" },
      { id: "garbanzos", amount: 200, unit: "g" },
      { id: "salteado_verduras_cong", amount: 300, unit: "g" },
      { id: "comino", amount: 1, unit: "g" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Hidrata el cusc\xFAs con el mismo peso de agua hirviendo y sal, 5 min tapado.", "Saltea las verduras con el comino y los garbanzos.", "Mezcla con el cusc\xFAs suelto."]
  },
  {
    id: "lomo_plancha_pimientos",
    name: "Lomo a la plancha con pimientos",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "lomo_cerdo", base: true, amount: 300, unit: "g" },
      { id: "pimiento_verde", amount: 2, unit: "ud" },
      { id: "pimiento_rojo", amount: 1, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Pimientos en tiras a fuego medio 10 min.", "Haz el lomo a la plancha 2 min por lado.", "Sirve junto con sal gorda."]
  },
  // ——— Más de diario ———
  {
    id: "ensalada_campera",
    name: "Ensalada campera",
    category: "diario",
    minutes: 25,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "patata", base: true, amount: 3, unit: "ud" },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "pimiento_verde", amount: 0.5, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "aceite_oliva", amount: 3, unit: "cda" },
      { id: "vinagre", amount: 1, unit: "cda" }
    ],
    steps: ["Cuece las patatas en dados 15 min y los huevos 10 min.", "Enfr\xEDa con agua fr\xEDa.", "Mezcla con la verdura picada y el at\xFAn, y ali\xF1a."]
  },
  {
    id: "lentejas_chorizo",
    name: "Lentejas con chorizo",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "lentejas", base: true, amount: 400, unit: "g" },
      { id: "chorizo", amount: 80, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "zanahoria", amount: 1, unit: "ud" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "pimenton", amount: 3, unit: "g" },
      { id: "caldo_pollo", amount: 300, unit: "ml" }
    ],
    steps: ["Sofr\xEDe cebolla, zanahoria y chorizo en rodajas.", "A\xF1ade tomate y piment\xF3n.", "Incorpora lentejas y caldo; 10 min a fuego suave."]
  },
  {
    id: "potaje_garbanzos",
    name: "Potaje r\xE1pido de garbanzos",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "garbanzos", base: true, amount: 400, unit: "g" },
      { id: "espinacas", amount: 100, unit: "g" },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "caldo_pollo", amount: 400, unit: "ml" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "pimenton", amount: 3, unit: "g" },
      { id: "tomate_triturado", amount: 100, unit: "g" }
    ],
    steps: ["Cuece los huevos 10 min.", "Sofr\xEDe ajo, piment\xF3n y tomate; a\xF1ade caldo, garbanzos y espinacas, 8 min.", "Sirve con el huevo picado."]
  },
  {
    id: "alubias_chorizo",
    name: "Alubias estofadas con chorizo",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "alubias", base: true, amount: 400, unit: "g" },
      { id: "chorizo", amount: 80, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "pimiento_verde", amount: 0.5, unit: "ud" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "caldo_pollo", amount: 250, unit: "ml" },
      { id: "pimenton", amount: 2, unit: "g" }
    ],
    steps: ["Sofr\xEDe cebolla, pimiento y chorizo.", "A\xF1ade tomate y piment\xF3n.", "Incorpora alubias y caldo; 10 min a fuego suave."]
  },
  {
    id: "arroz_cubana",
    name: "Arroz a la cubana",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz", base: true, amount: 150, unit: "g" },
      { id: "tomate_frito", amount: 200, unit: "g" },
      { id: "huevo", base: true, amount: 2, unit: "ud" },
      { id: "platano", amount: 2, unit: "ud", optional: true }
    ],
    steps: ["Cuece el arroz 15 min.", "Calienta el tomate y fr\xEDe los huevos (y el pl\xE1tano en rodajas).", "Sirve el arroz con el tomate y el huevo encima."]
  },
  {
    id: "macarrones_salchichas",
    name: "Macarrones con salchichas y tomate",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "salchichas", amount: 200, unit: "g" },
      { id: "tomate_frito", amount: 200, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud", optional: true },
      { id: "queso_rallado", amount: 40, unit: "g", optional: true }
    ],
    steps: ["Cuece la pasta.", "Dora las salchichas en rodajas (y la cebolla).", "A\xF1ade el tomate, mezcla con la pasta y pon queso."]
  },
  {
    id: "espaguetis_gambas_ajillo",
    name: "Espaguetis con gambas al ajillo",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "gambas_cong", base: true, amount: 200, unit: "g" },
      { id: "ajo", amount: 3, unit: "ud" },
      { id: "aceite_oliva", amount: 3, unit: "cda" }
    ],
    steps: ["Cuece la pasta.", "Dora el ajo laminado en el aceite y a\xF1ade las gambas 3 min.", "Mezcla con la pasta y un poco de agua de cocci\xF3n."]
  },
  {
    id: "pollo_ajillo",
    name: "Pollo al ajillo",
    category: "diario",
    minutes: 25,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "muslo_pollo", base: true, amount: 400, unit: "g" },
      { id: "ajo", amount: 5, unit: "ud" },
      { id: "caldo_pollo", amount: 100, unit: "ml" },
      { id: "aceite_oliva", amount: 2, unit: "cda" },
      { id: "pan_molde", amount: 2, unit: "ud", optional: true }
    ],
    steps: ["Dora el pollo troceado con sal 10 min.", "A\xF1ade los ajos enteros machacados 3 min.", "Moja con el caldo y reduce 8 min."]
  },
  {
    id: "filetes_empanados",
    name: "Filetes de pollo empanados con ensalada",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "huevo", amount: 1, unit: "ud" },
      { id: "pan_rallado", amount: 80, unit: "g" },
      { id: "lechuga", amount: 100, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 4, unit: "cda" }
    ],
    steps: ["Pasa los filetes por huevo batido y pan rallado.", "Fr\xEDelos en poco aceite 3 min por lado.", "Sirve con la ensalada."]
  },
  {
    id: "albondigas_tomate",
    name: "Alb\xF3ndigas r\xE1pidas en salsa de tomate",
    category: "diario",
    minutes: 30,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "carne_picada", base: true, amount: 400, unit: "g" },
      { id: "huevo", amount: 1, unit: "ud" },
      { id: "pan_rallado", amount: 40, unit: "g" },
      { id: "tomate_triturado", amount: 300, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "ajo", amount: 1, unit: "ud" }
    ],
    steps: ["Mezcla la carne con huevo, pan rallado, ajo picado y sal; forma bolitas.", "D\xF3ralas y res\xE9rvalas.", "Sofr\xEDe la cebolla, a\xF1ade el tomate y las alb\xF3ndigas, 12 min tapado."]
  },
  {
    id: "burger_plato",
    name: "Burger al plato con huevo y ensalada",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "hamburguesa", base: true, amount: 2, unit: "ud" },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "lechuga", amount: 100, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Haz las burgers a la plancha 3-4 min por lado.", "Fr\xEDe o haz a la plancha los huevos.", "Sirve con la ensalada."]
  },
  {
    id: "pisto_huevo",
    name: "Pisto con huevo",
    category: "diario",
    minutes: 30,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "calabacin", base: true, amount: 1, unit: "ud" },
      { id: "tomate_triturado", base: true, amount: 250, unit: "g" },
      { id: "pimiento_rojo", amount: 1, unit: "ud" },
      { id: "pimiento_verde", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "berenjena", amount: 0.5, unit: "ud", optional: true },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Pocha cebolla y pimientos 8 min.", "A\xF1ade calabac\xEDn (y berenjena) en dados 8 min, y el tomate 8 min m\xE1s.", "Haz huecos, casca los huevos y tapa hasta que cuajen."]
  },
  {
    id: "tortilla_patatas",
    name: "Tortilla de patatas expr\xE9s",
    category: "diario",
    minutes: 25,
    appliances: ["microondas", "fuego"],
    servings: 2,
    ingredients: [
      { id: "patata", base: true, amount: 3, unit: "ud" },
      { id: "huevo", base: true, amount: 5, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 3, unit: "cda" }
    ],
    steps: ["Patata (y cebolla) en l\xE1minas finas con aceite y sal, al microondas tapada 10 min.", "M\xE9zclala con los huevos batidos.", "Cuaja en sart\xE9n por los dos lados."]
  },
  {
    id: "arroz_pollo_verduras",
    name: "Arroz con pollo y verduras en sart\xE9n",
    category: "diario",
    minutes: 30,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz", base: true, amount: 150, unit: "g" },
      { id: "muslo_pollo", base: true, amount: 300, unit: "g" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "guisantes_cong", amount: 80, unit: "g" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "caldo_pollo", amount: 500, unit: "ml" },
      { id: "pimenton", amount: 2, unit: "g" }
    ],
    steps: ["Dora el pollo troceado y el pimiento.", "A\xF1ade tomate, piment\xF3n y el arroz; rehoga 1 min.", "Vierte el caldo caliente y cuece 17 min, con los guisantes a mitad."]
  },
  {
    id: "pasta_salmon_nata",
    name: "Pasta con salm\xF3n y nata",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "salmon", base: true, amount: 200, unit: "g" },
      { id: "nata_cocinar", amount: 200, unit: "ml" },
      { id: "cebolla", amount: 0.5, unit: "ud" }
    ],
    steps: ["Cuece la pasta.", "Pocha la cebolla y a\xF1ade el salm\xF3n en dados 3 min.", "A\xF1ade la nata, reduce 3 min y mezcla con la pasta."]
  },
  {
    id: "tallarines_champinones",
    name: "Tallarines con champi\xF1ones y nata",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "champinon", base: true, amount: 200, unit: "g" },
      { id: "nata_cocinar", amount: 200, unit: "ml" },
      { id: "bacon", amount: 80, unit: "g", optional: true },
      { id: "ajo", amount: 1, unit: "ud" }
    ],
    steps: ["Cuece la pasta.", "Saltea ajo, champi\xF1ones (y bacon) 5 min.", "A\xF1ade la nata, reduce 3 min y mezcla."]
  },
  {
    id: "lomo_champinones",
    name: "Lomo en salsa de champi\xF1ones",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "lomo_cerdo", base: true, amount: 300, unit: "g" },
      { id: "champinon", amount: 200, unit: "g" },
      { id: "nata_cocinar", amount: 200, unit: "ml" },
      { id: "cebolla", amount: 0.5, unit: "ud" }
    ],
    steps: ["Marca el lomo a la plancha y res\xE9rvalo.", "Pocha la cebolla y los champi\xF1ones 5 min.", "A\xF1ade la nata y el lomo, 5 min a fuego suave."]
  },
  {
    id: "merluza_empanada_airfryer",
    name: "Merluza empanada a la airfryer",
    category: "diario",
    minutes: 20,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "merluza_cong", base: true, amount: 400, unit: "g" },
      { id: "huevo", amount: 1, unit: "ud" },
      { id: "pan_rallado", amount: 60, unit: "g" },
      { id: "lechuga", amount: 100, unit: "g", optional: true },
      { id: "limon", amount: 0.5, unit: "ud", optional: true }
    ],
    steps: ["Descongela y seca bien la merluza.", "P\xE1sala por huevo y pan rallado, con un poco de aceite en spray.", "Airfryer 200 \xB0C 10-12 min, d\xE1ndole la vuelta a mitad."]
  },
  {
    id: "contramuslos_horno",
    name: "Contramuslos al horno con patatas",
    category: "diario",
    minutes: 30,
    appliances: ["horno", "microondas"],
    servings: 2,
    ingredients: [
      { id: "muslo_pollo", base: true, amount: 500, unit: "g" },
      { id: "patata", amount: 2, unit: "ud" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "limon", amount: 0.5, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Patata en gajos al microondas 6 min, tapada.", "Ponla en bandeja con la cebolla y el pollo salpimentado.", "Horno a 220 \xB0C 20-22 min."]
  },
  {
    id: "huevos_flamenca",
    name: "Huevos a la flamenca",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "huevo", base: true, amount: 4, unit: "ud" },
      { id: "tomate_frito", base: true, amount: 300, unit: "g" },
      { id: "guisantes_cong", amount: 100, unit: "g" },
      { id: "chorizo", amount: 50, unit: "g", optional: true },
      { id: "cebolla", amount: 0.5, unit: "ud" }
    ],
    steps: ["Pocha la cebolla (y el chorizo).", "A\xF1ade tomate y guisantes, 5 min.", "Casca los huevos encima y tapa hasta que cuaje la clara."]
  },
  {
    id: "arroz_atun_tomate",
    name: "Arroz con at\xFAn y tomate",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz", base: true, amount: 150, unit: "g" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "tomate_frito", amount: 200, unit: "g" },
      { id: "maiz", amount: 80, unit: "g", optional: true }
    ],
    steps: ["Cuece el arroz 15 min.", "Calienta el tomate con el at\xFAn (y el ma\xEDz).", "Mezcla con el arroz."]
  },
  {
    id: "burritos_carne",
    name: "Burritos de carne picada",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "tortilla_trigo", base: true, amount: 4, unit: "ud" },
      { id: "carne_picada", base: true, amount: 250, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "maiz", amount: 80, unit: "g", optional: true },
      { id: "mozzarella", amount: 60, unit: "g" },
      { id: "comino", amount: 2, unit: "g" }
    ],
    steps: ["Sofr\xEDe cebolla y pimiento, a\xF1ade la carne y d\xF3rala.", "Agrega tomate, comino (y ma\xEDz), 5 min.", "Rellena las tortillas con la carne y el queso y d\xF3ralas en la sart\xE9n."]
  },
  {
    id: "judias_verdes_jamon",
    name: "Jud\xEDas verdes salteadas con jam\xF3n",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "judias_verdes_cong", base: true, amount: 500, unit: "g" },
      { id: "jamon_york", amount: 80, unit: "g" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Cuece las jud\xEDas 8 min y esc\xFArrelas.", "Dora el ajo y el jam\xF3n en tiras.", "Saltea las jud\xEDas 3 min."]
  },
  {
    id: "salchichas_pure",
    name: "Salchichas con pur\xE9 de patata",
    category: "diario",
    minutes: 25,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "salchichas", base: true, amount: 250, unit: "g" },
      { id: "patata", base: true, amount: 3, unit: "ud" },
      { id: "leche", amount: 100, unit: "ml" },
      { id: "mantequilla", amount: 20, unit: "g" }
    ],
    steps: ["Cuece la patata en dados 15 min.", "Ch\xE1fala con leche caliente, mantequilla y sal.", "Dora las salchichas a la plancha."]
  },
  // ——— Más caprichos ———
  {
    id: "pizza_atun",
    name: "Pizza de at\xFAn y cebolla",
    category: "capricho",
    minutes: 25,
    appliances: ["horno"],
    servings: 2,
    ingredients: [
      { id: "masa_pizza", base: true, amount: 1, unit: "ud" },
      { id: "tomate_frito", amount: 100, unit: "g" },
      { id: "mozzarella", amount: 150, unit: "g" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "oregano", amount: 1, unit: "g" }
    ],
    steps: ["Horno a 230 \xB0C.", "Extiende la masa con tomate, queso, at\xFAn y cebolla en aros.", "Hornea 12-14 min."]
  },
  {
    id: "fajitas_pollo",
    name: "Fajitas de pollo",
    category: "capricho",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "tortilla_trigo", base: true, amount: 6, unit: "ud" },
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "pimiento_rojo", amount: 1, unit: "ud" },
      { id: "pimiento_verde", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "comino", amount: 2, unit: "g" },
      { id: "pimenton", amount: 2, unit: "g" },
      { id: "yogur_griego", amount: 1, unit: "ud", optional: true }
    ],
    steps: ["Saltea pollo, pimientos y cebolla en tiras a fuego fuerte.", "A\xF1ade comino, piment\xF3n y sal.", "Sirve en las tortillas calientes, con yogur si quieres."]
  },
  {
    id: "sandwich_gratinado",
    name: "S\xE1ndwich gratinado de jam\xF3n y queso",
    category: "capricho",
    minutes: 20,
    appliances: ["horno", "fuego"],
    servings: 2,
    ingredients: [
      { id: "pan_molde", base: true, amount: 4, unit: "ud" },
      { id: "jamon_york", amount: 80, unit: "g" },
      { id: "queso_lonchas", amount: 60, unit: "g" },
      { id: "mozzarella", amount: 60, unit: "g" },
      { id: "leche", amount: 200, unit: "ml" },
      { id: "harina", amount: 20, unit: "g" },
      { id: "mantequilla", amount: 20, unit: "g" }
    ],
    steps: ["Haz una bechamel r\xE1pida: mantequilla, harina y leche, removiendo 4 min.", "Monta los s\xE1ndwiches y c\xFAbrelos con bechamel y queso.", "Gratina a 220 \xB0C 8-10 min."]
  },
  {
    id: "patatas_bravas_huevo",
    name: "Patatas bravas con huevo",
    category: "capricho",
    minutes: 20,
    appliances: ["airfryer", "fuego"],
    servings: 2,
    ingredients: [
      { id: "patatas_cong", base: true, amount: 400, unit: "g" },
      { id: "tomate_frito", amount: 100, unit: "g" },
      { id: "pimenton", amount: 3, unit: "g" },
      { id: "mayonesa", amount: 40, unit: "g", optional: true },
      { id: "huevo", amount: 2, unit: "ud", optional: true }
    ],
    steps: ["Patatas en airfryer 200 \xB0C 15 min.", "Calienta el tomate con el piment\xF3n (picante si te gusta).", "Sirve con la salsa, mayonesa y un huevo frito."]
  },
  {
    id: "burger_pollo_crujiente",
    name: "Burger de pollo crujiente",
    category: "capricho",
    minutes: 25,
    appliances: ["fuego", "airfryer"],
    servings: 2,
    ingredients: [
      { id: "pan_hamburguesa", base: true, amount: 2, unit: "ud" },
      { id: "pechuga_pollo", base: true, amount: 250, unit: "g" },
      { id: "pan_rallado", amount: 60, unit: "g" },
      { id: "huevo", amount: 1, unit: "ud" },
      { id: "lechuga", amount: 40, unit: "g", optional: true },
      { id: "mayonesa", amount: 30, unit: "g" },
      { id: "patatas_cong", amount: 300, unit: "g" }
    ],
    steps: ["Patatas en airfryer 200 \xB0C 15 min.", "Empana la pechuga y fr\xEDela 3 min por lado.", "Monta la burger con lechuga y mayonesa."]
  },
  {
    id: "huevos_rotos_chorizo",
    name: "Huevos rotos con chorizo",
    category: "capricho",
    minutes: 20,
    appliances: ["airfryer", "fuego"],
    servings: 2,
    ingredients: [
      { id: "patatas_cong", base: true, amount: 400, unit: "g" },
      { id: "huevo", base: true, amount: 3, unit: "ud" },
      { id: "chorizo", amount: 80, unit: "g" }
    ],
    steps: ["Patatas en airfryer 200 \xB0C 15 min.", "Dora el chorizo en rodajas y fr\xEDe los huevos en su grasa.", "Sirve todo junto y rompe las yemas."]
  },
  {
    id: "macarrones_gratinados",
    name: "Macarrones gratinados con chorizo",
    category: "capricho",
    minutes: 30,
    appliances: ["fuego", "horno"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "tomate_frito", base: true, amount: 250, unit: "g" },
      { id: "chorizo", amount: 80, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "queso_rallado", amount: 80, unit: "g" }
    ],
    steps: ["Cuece la pasta.", "Sofr\xEDe cebolla y chorizo, a\xF1ade el tomate y mezcla con la pasta.", "Cubre de queso y gratina a 220 \xB0C 8 min."]
  },
  // ——— Sin fuego: microondas, airfryer o sin cocinar ———
  {
    id: "cuscus_pollo_microondas",
    name: "Cusc\xFAs con pollo y verduras al microondas",
    category: "fit",
    minutes: 15,
    appliances: ["microondas"],
    servings: 2,
    ingredients: [
      { id: "cuscus", base: true, amount: 150, unit: "g" },
      { id: "pechuga_pollo", amount: 200, unit: "g" },
      { id: "salteado_verduras_cong", amount: 250, unit: "g" },
      { id: "salsa_soja", amount: 1, unit: "cda" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Pollo en dados con las verduras y la soja, tapado al microondas 8 min.", "Calienta 150 ml de agua con sal 2 min y vi\xE9rtela sobre el cusc\xFAs; tapa 5 min.", "Suelta el cusc\xFAs con un tenedor y m\xE9zclalo todo."]
  },
  {
    id: "revuelto_microondas",
    name: "Revuelto de champi\xF1ones y jam\xF3n al microondas",
    category: "fit",
    minutes: 10,
    appliances: ["microondas"],
    servings: 2,
    ingredients: [
      { id: "huevo", base: true, amount: 4, unit: "ud" },
      { id: "champinon", amount: 150, unit: "g" },
      { id: "jamon_york", amount: 60, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Champi\xF1ones con el aceite, 3 min al microondas.", "A\xF1ade los huevos batidos con sal (y el jam\xF3n).", "Microondas en tandas de 40 s, removiendo cada vez, hasta que cuaje."]
  },
  {
    id: "patatas_rellenas_atun",
    name: "Patatas rellenas de at\xFAn al microondas",
    category: "diario",
    minutes: 15,
    appliances: ["microondas"],
    servings: 2,
    ingredients: [
      { id: "patata", base: true, amount: 2, unit: "ud" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "maiz", amount: 60, unit: "g", optional: true },
      { id: "mayonesa", amount: 30, unit: "g" },
      { id: "queso_rallado", amount: 30, unit: "g", optional: true }
    ],
    steps: ["Pincha las patatas y hazlas al microondas 8-10 min, d\xE1ndoles la vuelta.", "\xC1brelas y mezcla la pulpa con at\xFAn, ma\xEDz y mayonesa.", "Rellena, pon queso y 1 min m\xE1s."]
  },
  {
    id: "contramuslos_airfryer",
    name: "Contramuslos crujientes a la airfryer",
    category: "diario",
    minutes: 25,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "muslo_pollo", base: true, amount: 500, unit: "g" },
      { id: "pimenton", amount: 3, unit: "g" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "lechuga", amount: 100, unit: "g", optional: true },
      { id: "tomate", amount: 1, unit: "ud", optional: true }
    ],
    steps: ["Adoba el pollo con ajo picado, piment\xF3n, aceite y sal.", "Airfryer 200 \xB0C 20-22 min, con la piel hacia arriba al final.", "Sirve con ensalada."]
  },
  {
    id: "hamburguesa_airfryer",
    name: "Hamburguesas a la airfryer con patatas",
    category: "capricho",
    minutes: 25,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "hamburguesa", base: true, amount: 2, unit: "ud" },
      { id: "pan_hamburguesa", base: true, amount: 2, unit: "ud" },
      { id: "queso_lonchas", amount: 40, unit: "g" },
      { id: "patatas_cong", amount: 300, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud", optional: true },
      { id: "ketchup", amount: 30, unit: "g" }
    ],
    steps: ["Patatas en airfryer 200 \xB0C 12 min.", "Pon las burgers 8-10 min a 190 \xB0C, con el queso encima el \xFAltimo minuto.", "Calienta el pan 1 min y monta."]
  },
  {
    id: "salmon_microondas_cuscus",
    name: "Salm\xF3n al microondas con cusc\xFAs al lim\xF3n",
    category: "fit",
    minutes: 15,
    appliances: ["microondas"],
    servings: 2,
    ingredients: [
      { id: "salmon", base: true, amount: 250, unit: "g" },
      { id: "cuscus", amount: 120, unit: "g" },
      { id: "limon", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Salm\xF3n con sal y rodajas de lim\xF3n, tapado al microondas 4-5 min.", "Hidrata el cusc\xFAs con agua caliente, sal y zumo de lim\xF3n, 5 min tapado.", "Sirve el salm\xF3n sobre el cusc\xFAs con un hilo de aceite."]
  },
  {
    id: "pasta_microondas_atun",
    name: "Pasta al microondas con tomate y at\xFAn",
    category: "diario",
    minutes: 20,
    appliances: ["microondas"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "tomate_frito", base: true, amount: 200, unit: "g" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "queso_rallado", amount: 30, unit: "g", optional: true }
    ],
    steps: ["Pasta cubierta de agua con sal en un bol grande: microondas el tiempo del paquete + 3 min, removiendo a mitad.", "Escurre.", "Mezcla con tomate y at\xFAn y 1 min m\xE1s."]
  },
  {
    id: "lomo_airfryer_pimientos",
    name: "Lomo y pimientos a la airfryer",
    category: "fit",
    minutes: 20,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "lomo_cerdo", base: true, amount: 300, unit: "g" },
      { id: "pimiento_verde", amount: 1, unit: "ud" },
      { id: "pimiento_rojo", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Pimientos en tiras con aceite y sal: airfryer 190 \xB0C 10 min.", "A\xF1ade los filetes de lomo salpimentados.", "6-8 min m\xE1s, d\xE1ndoles la vuelta a mitad."]
  },
  {
    id: "verduras_asadas_airfryer",
    name: "Verduras asadas a la airfryer con queso fresco",
    category: "fit",
    minutes: 20,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "calabacin", base: true, amount: 1, unit: "ud" },
      { id: "berenjena", amount: 1, unit: "ud" },
      { id: "pimiento_rojo", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "queso_fresco", amount: 120, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Trocea las verduras con aceite y sal.", "Airfryer 200 \xB0C 15-18 min, removiendo a mitad.", "Sirve con el queso fresco por encima."]
  },
  {
    id: "salchichas_airfryer",
    name: "Salchichas con patatas a la airfryer",
    category: "diario",
    minutes: 20,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "salchichas", base: true, amount: 250, unit: "g" },
      { id: "patatas_cong", amount: 300, unit: "g" },
      { id: "ketchup", amount: 30, unit: "g", optional: true },
      { id: "lechuga", amount: 60, unit: "g", optional: true }
    ],
    steps: ["Patatas en airfryer 200 \xB0C 10 min.", "A\xF1ade las salchichas con unos cortes.", "6-8 min m\xE1s."]
  },
  {
    id: "ensalada_pasta",
    name: "Ensalada de pasta",
    category: "fit",
    minutes: 20,
    appliances: ["microondas"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 160, unit: "g" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "maiz", amount: 80, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "pepino", amount: 0.5, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Cuece la pasta (al microondas o en cazo) y enfr\xEDala con agua.", "Pica tomate y pepino.", "Mezcla con at\xFAn y ma\xEDz y ali\xF1a."]
  },
  {
    id: "ensalada_lentejas",
    name: "Ensalada de lentejas",
    category: "fit",
    minutes: 10,
    appliances: [],
    servings: 2,
    ingredients: [
      { id: "lentejas", base: true, amount: 400, unit: "g" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "maiz", amount: 60, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" },
      { id: "vinagre", amount: 1, unit: "cda" }
    ],
    steps: ["Escurre y enjuaga las lentejas.", "Pica las verduras muy peque\xF1as.", "Mezcla y ali\xF1a con aceite, vinagre y sal."]
  },
  {
    id: "sandwich_vegetal",
    name: "S\xE1ndwich vegetal de at\xFAn",
    category: "diario",
    minutes: 10,
    appliances: [],
    servings: 2,
    ingredients: [
      { id: "pan_molde", base: true, amount: 4, unit: "ud" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "lechuga", amount: 50, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "mayonesa", amount: 30, unit: "g" }
    ],
    steps: ["Mezcla el at\xFAn con la mayonesa.", "Monta los s\xE1ndwiches con lechuga y tomate en rodajas.", "C\xF3rtalos en tri\xE1ngulos."]
  },
  {
    id: "wrap_atun",
    name: "Wraps fr\xEDos de at\xFAn y ma\xEDz",
    category: "fit",
    minutes: 10,
    appliances: [],
    servings: 2,
    ingredients: [
      { id: "tortilla_trigo", base: true, amount: 4, unit: "ud" },
      { id: "atun", base: true, amount: 104, unit: "g" },
      { id: "lechuga", amount: 60, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "maiz", amount: 60, unit: "g" },
      { id: "yogur_griego", amount: 1, unit: "ud", optional: true }
    ],
    steps: ["Mezcla el at\xFAn con el ma\xEDz (y el yogur con sal).", "Reparte en las tortillas con lechuga y tomate.", "Enrolla bien apretado."]
  },
  {
    id: "hummus_crudites",
    name: "Hummus con crudit\xE9s",
    category: "fit",
    minutes: 10,
    appliances: ["batidora"],
    servings: 2,
    ingredients: [
      { id: "garbanzos", base: true, amount: 400, unit: "g" },
      { id: "limon", amount: 0.5, unit: "ud" },
      { id: "ajo", amount: 1, unit: "ud" },
      { id: "comino", amount: 1, unit: "g" },
      { id: "zanahoria", amount: 2, unit: "ud" },
      { id: "pepino", amount: 0.5, unit: "ud" },
      { id: "pan_molde", amount: 4, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 3, unit: "cda" }
    ],
    steps: ["Tritura los garbanzos con lim\xF3n, ajo, comino, aceite, sal y un poco de agua.", "Corta zanahoria y pepino en bastones.", "Sirve con el pan tostado si quieres."]
  },
  {
    id: "gazpacho",
    name: "Gazpacho",
    category: "fit",
    minutes: 10,
    appliances: ["batidora"],
    servings: 2,
    ingredients: [
      { id: "tomate", base: true, amount: 800, unit: "g" },
      { id: "pepino", amount: 0.5, unit: "ud" },
      { id: "pimiento_verde", amount: 0.5, unit: "ud" },
      { id: "ajo", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 3, unit: "cda" },
      { id: "vinagre", amount: 1, unit: "cda" },
      { id: "pan_molde", amount: 1, unit: "ud", optional: true }
    ],
    steps: ["Trocea todo.", "Tritura con aceite, vinagre, sal y un poco de agua fr\xEDa.", "Cuela si lo quieres fino y s\xEDrvelo muy fr\xEDo."]
  },
  {
    id: "salmorejo",
    name: "Salmorejo con jam\xF3n",
    category: "diario",
    minutes: 10,
    appliances: ["batidora"],
    servings: 2,
    ingredients: [
      { id: "tomate", base: true, amount: 800, unit: "g" },
      { id: "pan_molde", base: true, amount: 4, unit: "ud" },
      { id: "ajo", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 4, unit: "cda" },
      { id: "jamon_york", amount: 40, unit: "g", optional: true }
    ],
    steps: ["Tritura el tomate con el pan, el ajo y sal.", "A\xF1ade el aceite poco a poco hasta que espese.", "Sirve fr\xEDo con el jam\xF3n picado por encima."]
  },
  // ——— Más fuego y horno ———
  {
    id: "pollo_tomate_arroz",
    name: "Pollo en salsa de tomate con arroz",
    category: "diario",
    minutes: 25,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "tomate_triturado", amount: 300, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "arroz", amount: 150, unit: "g", optional: true },
      { id: "oregano", amount: 1, unit: "g" }
    ],
    steps: ["Cuece el arroz si lo vas a poner.", "Dora el pollo en dados con la cebolla.", "A\xF1ade el tomate y el or\xE9gano, 12 min a fuego suave."]
  },
  {
    id: "crema_champinones",
    name: "Crema de champi\xF1ones",
    category: "fit",
    minutes: 20,
    appliances: ["fuego", "batidora"],
    servings: 2,
    ingredients: [
      { id: "champinon", base: true, amount: 300, unit: "g" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "patata", amount: 1, unit: "ud" },
      { id: "nata_cocinar", amount: 100, unit: "ml", optional: true },
      { id: "caldo_pollo", amount: 500, unit: "ml" }
    ],
    steps: ["Sofr\xEDe cebolla y champi\xF1ones 5 min.", "A\xF1ade la patata en dados y el caldo, 12 min.", "Tritura (con la nata)."]
  },
  {
    id: "huevos_rellenos",
    name: "Huevos rellenos de at\xFAn",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "huevo", base: true, amount: 6, unit: "ud" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "mayonesa", amount: 60, unit: "g" },
      { id: "tomate_frito", amount: 40, unit: "g", optional: true },
      { id: "lechuga", amount: 80, unit: "g", optional: true }
    ],
    steps: ["Cuece los huevos 10 min y enfr\xEDalos.", "P\xE1rtelos y mezcla las yemas con at\xFAn, tomate y parte de la mayonesa.", "Rellena y cubre con el resto de mayonesa."]
  },
  {
    id: "merluza_guisantes",
    name: "Merluza en salsa con guisantes",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "merluza_cong", base: true, amount: 400, unit: "g" },
      { id: "guisantes_cong", amount: 100, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "harina", amount: 10, unit: "g" },
      { id: "caldo_pollo", amount: 250, unit: "ml" }
    ],
    steps: ["Pocha cebolla y ajo, a\xF1ade la harina y tu\xE9stala 1 min.", "Vierte el caldo poco a poco y a\xF1ade los guisantes.", "Mete la merluza descongelada, tapa y 8 min a fuego suave."]
  },
  {
    id: "arroz_verduras",
    name: "Arroz con verduras",
    category: "fit",
    minutes: 25,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz", base: true, amount: 150, unit: "g" },
      { id: "salteado_verduras_cong", amount: 300, unit: "g" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "caldo_pollo", amount: 450, unit: "ml" },
      { id: "pimenton", amount: 2, unit: "g" }
    ],
    steps: ["Rehoga las verduras con el tomate y el piment\xF3n.", "A\xF1ade el arroz 1 min y el caldo caliente.", "Cuece 17 min y deja reposar 3."]
  },
  {
    id: "pechuga_horno_patatas",
    name: "Pechuga al horno con patatas y cebolla",
    category: "fit",
    minutes: 30,
    appliances: ["horno", "microondas"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "patata", amount: 2, unit: "ud" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "oregano", amount: 1, unit: "g" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Patata en rodajas al microondas 6 min, tapada.", "Bandeja con patata, cebolla y la pechuga encima, con aceite, sal y or\xE9gano.", "Horno a 210 \xB0C 18-20 min."]
  },
  {
    id: "tortilla_atun",
    name: "Tortilla de at\xFAn y tomate",
    category: "diario",
    minutes: 12,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "huevo", base: true, amount: 5, unit: "ud" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "tomate_frito", amount: 100, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Bate los huevos con el at\xFAn escurrido y sal.", "Cuaja la tortilla por los dos lados.", "Sirve con el tomate caliente por encima."]
  },
  {
    id: "gambas_ajillo_arroz",
    name: "Arroz con gambas al ajillo",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz_basmati", base: true, amount: 150, unit: "g" },
      { id: "gambas_cong", base: true, amount: 250, unit: "g" },
      { id: "ajo", amount: 4, unit: "ud" },
      { id: "pimenton", amount: 2, unit: "g" },
      { id: "aceite_oliva", amount: 3, unit: "cda" }
    ],
    steps: ["Cuece el arroz 12 min.", "Dora el ajo laminado, a\xF1ade las gambas y el piment\xF3n 3 min.", "Sirve las gambas con su aceite sobre el arroz."]
  },
  // ——— Tercera tanda: pavo, calamar, coliflor, puerro y más variedad ———
  {
    id: "pavo_plancha_verduras",
    name: "Pavo a la plancha con verduras salteadas",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pavo", base: true, amount: 300, unit: "g" },
      { id: "calabacin", amount: 1, unit: "ud" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Saltea el calabac\xEDn y el pimiento en tiras 6 min.", "Haz los filetes de pavo a la plancha 2-3 min por lado.", "Sirve con sal y un hilo de aceite."]
  },
  {
    id: "brochetas_pavo_airfryer",
    name: "Brochetas de pavo y verduras a la airfryer",
    category: "fit",
    minutes: 20,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pavo", base: true, amount: 300, unit: "g" },
      { id: "pimiento_rojo", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 1, unit: "ud" },
      { id: "calabacin", amount: 0.5, unit: "ud", optional: true },
      { id: "pimenton", amount: 2, unit: "g" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Pavo y verduras en dados, con aceite, sal y piment\xF3n.", "Ens\xE1rtalos alternando.", "Airfryer 200 \xB0C 12-14 min, gir\xE1ndolas a mitad."]
  },
  {
    id: "pavo_champinones",
    name: "Pavo en salsa de champi\xF1ones",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pavo", base: true, amount: 300, unit: "g" },
      { id: "champinon", amount: 200, unit: "g" },
      { id: "nata_cocinar", amount: 200, unit: "ml" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "arroz_basmati", amount: 120, unit: "g", optional: true }
    ],
    steps: ["Cuece el arroz si lo vas a poner.", "Dora el pavo en tiras y res\xE9rvalo; pocha cebolla y champi\xF1ones.", "A\xF1ade la nata y el pavo, 5 min a fuego suave."]
  },
  {
    id: "crema_puerros",
    name: "Crema de puerros",
    category: "fit",
    minutes: 25,
    appliances: ["fuego", "batidora"],
    servings: 2,
    ingredients: [
      { id: "puerro", base: true, amount: 3, unit: "ud" },
      { id: "patata", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "leche", amount: 150, unit: "ml", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Pocha el puerro y la cebolla 5 min.", "A\xF1ade la patata en dados, cubre de agua y cuece 15 min.", "Tritura con la leche y ajusta de sal."]
  },
  {
    id: "coliflor_gratinada",
    name: "Coliflor gratinada",
    category: "diario",
    minutes: 25,
    appliances: ["microondas", "horno"],
    servings: 2,
    ingredients: [
      { id: "coliflor", base: true, amount: 600, unit: "g" },
      { id: "leche", amount: 300, unit: "ml" },
      { id: "harina", amount: 25, unit: "g" },
      { id: "mantequilla", amount: 25, unit: "g" },
      { id: "queso_rallado", amount: 60, unit: "g" }
    ],
    steps: ["Coliflor en ramilletes al microondas con un poco de agua, 8 min tapada.", "Bechamel r\xE1pida en el microondas: mantequilla, harina y leche en tandas de 1 min, removiendo.", "Cubre la coliflor con bechamel y queso y gratina a 220 \xB0C 8 min."]
  },
  {
    id: "coliflor_airfryer_curry",
    name: "Coliflor al curry a la airfryer con yogur",
    category: "fit",
    minutes: 20,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "coliflor", base: true, amount: 600, unit: "g" },
      { id: "curry", amount: 4, unit: "g" },
      { id: "garbanzos", amount: 200, unit: "g", optional: true },
      { id: "yogur_griego", amount: 1, unit: "ud" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Ramilletes (y garbanzos escurridos) con aceite, curry y sal.", "Airfryer 200 \xB0C 15 min, removiendo a mitad.", "Sirve con el yogur con sal y lim\xF3n si tienes."]
  },
  {
    id: "calamares_plancha",
    name: "Calamares a la plancha con ajo y lim\xF3n",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "calamar_cong", base: true, amount: 400, unit: "g" },
      { id: "ajo", amount: 3, unit: "ud" },
      { id: "limon", amount: 0.5, unit: "ud" },
      { id: "lechuga", amount: 100, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Descongela y seca bien el calamar.", "Plancha muy caliente 3-4 min, sin moverlo mucho.", "A\xF1ade ajo picado y lim\xF3n al final; sirve con ensalada."]
  },
  {
    id: "arroz_calamares",
    name: "Arroz con calamares",
    category: "diario",
    minutes: 30,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz", base: true, amount: 150, unit: "g" },
      { id: "calamar_cong", base: true, amount: 300, unit: "g" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "caldo_pollo", amount: 450, unit: "ml" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "pimenton", amount: 2, unit: "g" }
    ],
    steps: ["Sofr\xEDe ajo, pimiento y calamar 5 min.", "A\xF1ade tomate, piment\xF3n y el arroz 1 min.", "Vierte el caldo caliente y cuece 17 min."]
  },
  {
    id: "fideua_rapida",
    name: "Fideu\xE1 r\xE1pida de gambas y calamar",
    category: "diario",
    minutes: 25,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 180, unit: "g" },
      { id: "gambas_cong", amount: 150, unit: "g" },
      { id: "calamar_cong", amount: 150, unit: "g", optional: true },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "caldo_pollo", amount: 450, unit: "ml" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "pimenton", amount: 2, unit: "g" }
    ],
    steps: ["Tuesta los fideos en aceite 2 min y res\xE9rvalos.", "Sofr\xEDe ajo, marisco, tomate y piment\xF3n.", "A\xF1ade fideos y caldo caliente y cuece 10 min sin remover."]
  },
  {
    id: "calamares_romana_airfryer",
    name: "Calamares a la romana a la airfryer",
    category: "capricho",
    minutes: 25,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "calamar_cong", base: true, amount: 400, unit: "g" },
      { id: "harina", amount: 40, unit: "g" },
      { id: "huevo", amount: 1, unit: "ud" },
      { id: "pan_rallado", amount: 60, unit: "g" },
      { id: "limon", amount: 0.5, unit: "ud" },
      { id: "mayonesa", amount: 40, unit: "g", optional: true }
    ],
    steps: ["Seca bien el calamar y p\xE1salo por harina, huevo y pan rallado.", "Airfryer 200 \xB0C 10-12 min con un poco de aceite en spray, removiendo a mitad.", "Sirve con lim\xF3n y mayonesa."]
  },
  {
    id: "ensalada_pollo_cesar",
    name: "Ensalada de pollo tipo C\xE9sar",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 250, unit: "g" },
      { id: "lechuga", base: true, amount: 150, unit: "g" },
      { id: "queso_rallado", amount: 30, unit: "g" },
      { id: "pan_molde", amount: 2, unit: "ud", optional: true },
      { id: "mayonesa", amount: 40, unit: "g" },
      { id: "limon", amount: 0.5, unit: "ud" }
    ],
    steps: ["Haz el pollo a la plancha y c\xF3rtalo en tiras; tuesta el pan en dados.", "Mezcla la mayonesa con lim\xF3n, queso y un poco de agua.", "Monta la lechuga con el pollo, los picatostes y la salsa."]
  },
  {
    id: "merluza_airfryer_verduras",
    name: "Merluza a la airfryer con verduras",
    category: "fit",
    minutes: 20,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "merluza_cong", base: true, amount: 400, unit: "g" },
      { id: "salteado_verduras_cong", amount: 300, unit: "g" },
      { id: "limon", amount: 0.5, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Verduras congeladas con aceite y sal: airfryer 200 \xB0C 8 min.", "A\xF1ade la merluza descongelada con sal y lim\xF3n.", "8-10 min m\xE1s a 190 \xB0C."]
  },
  {
    id: "lentejas_curry_coco",
    name: "Lentejas al curry con leche de coco",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "lentejas", base: true, amount: 400, unit: "g" },
      { id: "leche_coco", amount: 200, unit: "ml" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "espinacas", amount: 100, unit: "g", optional: true },
      { id: "curry", amount: 5, unit: "g" },
      { id: "arroz_basmati", amount: 120, unit: "g", optional: true }
    ],
    steps: ["Pocha la cebolla con el curry.", "A\xF1ade tomate, leche de coco y las lentejas escurridas, 8 min.", "Incorpora las espinacas al final; sirve con arroz si quieres."]
  },
  {
    id: "garbanzos_curry",
    name: "Garbanzos al curry con arroz",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "garbanzos", base: true, amount: 400, unit: "g" },
      { id: "leche_coco", amount: 200, unit: "ml" },
      { id: "tomate_triturado", amount: 150, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "curry", amount: 5, unit: "g" },
      { id: "arroz_basmati", amount: 120, unit: "g", optional: true }
    ],
    steps: ["Cuece el arroz si lo vas a poner.", "Pocha la cebolla con el curry y a\xF1ade el tomate.", "Incorpora garbanzos y leche de coco, 8 min a fuego suave."]
  },
  {
    id: "salmon_soja_miel",
    name: "Salm\xF3n con soja y miel y arroz",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "salmon", base: true, amount: 250, unit: "g" },
      { id: "salsa_soja", amount: 3, unit: "cda" },
      { id: "miel", amount: 20, unit: "g" },
      { id: "arroz_basmati", amount: 150, unit: "g" },
      { id: "brocoli", amount: 200, unit: "g", optional: true }
    ],
    steps: ["Cuece el arroz (y el br\xF3coli al vapor).", "Marca el salm\xF3n por los dos lados.", "A\xF1ade soja y miel y deja que reduzca 2 min, ba\xF1ando el salm\xF3n."]
  },
  {
    id: "lomo_soja_miel",
    name: "Lomo con soja y miel",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "lomo_cerdo", base: true, amount: 300, unit: "g" },
      { id: "salsa_soja", amount: 3, unit: "cda" },
      { id: "miel", amount: 20, unit: "g" },
      { id: "ajo", amount: 1, unit: "ud" },
      { id: "arroz_basmati", amount: 120, unit: "g", optional: true }
    ],
    steps: ["Cuece el arroz si lo vas a poner.", "Dora el lomo en tiras con el ajo.", "A\xF1ade soja y miel y reduce 2 min hasta que brille."]
  },
  {
    id: "hamburguesas_garbanzos_avena",
    name: "Hamburguesas de garbanzos y avena",
    category: "fit",
    minutes: 25,
    appliances: ["batidora", "fuego"],
    servings: 2,
    ingredients: [
      { id: "garbanzos", base: true, amount: 400, unit: "g" },
      { id: "avena", amount: 60, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "huevo", amount: 1, unit: "ud" },
      { id: "comino", amount: 1, unit: "g" },
      { id: "lechuga", amount: 80, unit: "g", optional: true }
    ],
    steps: ["Tritura garbanzos, cebolla, huevo, comino y sal; a\xF1ade la avena.", "Forma 4 hamburguesas y deja reposar 5 min.", "D\xF3ralas en sart\xE9n 3-4 min por lado."]
  },
  {
    id: "espaguetis_calabacin_bacon",
    name: "Espaguetis con calabac\xEDn y bacon",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "calabacin", amount: 1, unit: "ud" },
      { id: "bacon", amount: 80, unit: "g" },
      { id: "queso_rallado", amount: 30, unit: "g", optional: true },
      { id: "ajo", amount: 1, unit: "ud" }
    ],
    steps: ["Cuece la pasta.", "Dora el bacon y a\xF1ade ajo y calabac\xEDn en tiras 5 min.", "Mezcla con la pasta y el queso."]
  },
  {
    id: "tortilla_paisana",
    name: "Tortilla paisana",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "huevo", base: true, amount: 5, unit: "ud" },
      { id: "patatas_cong", amount: 200, unit: "g" },
      { id: "guisantes_cong", amount: 60, unit: "g" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "chorizo", amount: 50, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Saltea las patatas, el pimiento, los guisantes (y el chorizo) 8 min.", "M\xE9zclalo con los huevos batidos y sal.", "Cuaja la tortilla por los dos lados."]
  },
  {
    id: "sopa_castellana",
    name: "Sopa castellana r\xE1pida",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "caldo_pollo", base: true, amount: 800, unit: "ml" },
      { id: "pan_molde", amount: 3, unit: "ud" },
      { id: "ajo", amount: 3, unit: "ud" },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "jamon_york", amount: 50, unit: "g", optional: true },
      { id: "pimenton", amount: 3, unit: "g" }
    ],
    steps: ["Dora el ajo laminado y el pan en dados.", "A\xF1ade piment\xF3n (y el jam\xF3n) y el caldo; 8 min.", "Casca los huevos dentro y deja que cuajen 3 min."]
  },
  {
    id: "pizza_vegetal",
    name: "Pizza vegetal",
    category: "capricho",
    minutes: 25,
    appliances: ["horno"],
    servings: 2,
    ingredients: [
      { id: "masa_pizza", base: true, amount: 1, unit: "ud" },
      { id: "tomate_frito", amount: 100, unit: "g" },
      { id: "mozzarella", amount: 150, unit: "g" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "champinon", amount: 100, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "berenjena", amount: 0.5, unit: "ud", optional: true },
      { id: "oregano", amount: 1, unit: "g" }
    ],
    steps: ["Horno a 230 \xB0C.", "Extiende la masa con tomate, queso y la verdura en l\xE1minas finas.", "Hornea 12-14 min."]
  },
  {
    id: "pan_pizza",
    name: "Pan pizza de jam\xF3n y queso",
    category: "capricho",
    minutes: 15,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "pan_molde", base: true, amount: 6, unit: "ud" },
      { id: "tomate_frito", amount: 80, unit: "g" },
      { id: "mozzarella", amount: 100, unit: "g" },
      { id: "jamon_york", amount: 60, unit: "g" },
      { id: "oregano", amount: 1, unit: "g" }
    ],
    steps: ["Unta las rebanadas con tomate.", "Pon jam\xF3n, queso y or\xE9gano.", "Airfryer 180 \xB0C 6-8 min, hasta que gratine."]
  },
  {
    id: "patatas_gratinadas_bacon",
    name: "Patatas gratinadas con bacon",
    category: "capricho",
    minutes: 30,
    appliances: ["microondas", "horno"],
    servings: 2,
    ingredients: [
      { id: "patata", base: true, amount: 4, unit: "ud" },
      { id: "bacon", amount: 100, unit: "g" },
      { id: "nata_cocinar", amount: 200, unit: "ml" },
      { id: "queso_rallado", amount: 60, unit: "g" }
    ],
    steps: ["Patata en rodajas finas al microondas 8 min, tapada.", "En una fuente, capas de patata y bacon; cubre con la nata y el queso.", "Horno a 220 \xB0C 15 min."]
  },
  {
    id: "judias_verdes_tomate",
    name: "Jud\xEDas verdes con tomate y huevo",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "judias_verdes_cong", base: true, amount: 400, unit: "g" },
      { id: "tomate_triturado", amount: 200, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "huevo", amount: 2, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Cuece las jud\xEDas 8 min (y los huevos 10).", "Sofr\xEDe la cebolla y a\xF1ade el tomate 5 min.", "Junta las jud\xEDas con la salsa y sirve con el huevo."]
  },
  {
    id: "puerros_jamon_gratinados",
    name: "Puerros gratinados con jam\xF3n",
    category: "diario",
    minutes: 25,
    appliances: ["microondas", "horno"],
    servings: 2,
    ingredients: [
      { id: "puerro", base: true, amount: 4, unit: "ud" },
      { id: "jamon_york", amount: 80, unit: "g" },
      { id: "queso_rallado", amount: 60, unit: "g" },
      { id: "nata_cocinar", amount: 100, unit: "ml", optional: true }
    ],
    steps: ["Puerros en trozos largos al microondas 6 min con un poco de agua.", "Envu\xE9lvelos en jam\xF3n y ponlos en una fuente con la nata.", "Cubre de queso y gratina a 220 \xB0C 10 min."]
  },
  // ——— Cuarta tanda: cenas ligeras, pescado y más caprichos ———
  {
    id: "crema_brocoli",
    name: "Crema de br\xF3coli",
    category: "fit",
    minutes: 25,
    appliances: ["fuego", "batidora"],
    servings: 2,
    ingredients: [
      { id: "brocoli", base: true, amount: 400, unit: "g" },
      { id: "patata", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "queso_fresco", amount: 60, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Pocha la cebolla.", "A\xF1ade br\xF3coli y patata troceados, cubre de agua y cuece 15 min.", "Tritura con el queso fresco."]
  },
  {
    id: "crema_coliflor_puerro",
    name: "Crema de coliflor y puerro",
    category: "fit",
    minutes: 25,
    appliances: ["fuego", "batidora"],
    servings: 2,
    ingredients: [
      { id: "coliflor", base: true, amount: 400, unit: "g" },
      { id: "puerro", amount: 1, unit: "ud" },
      { id: "patata", amount: 1, unit: "ud", optional: true },
      { id: "leche", amount: 100, unit: "ml", optional: true },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Pocha el puerro.", "A\xF1ade coliflor (y patata), cubre de agua y cuece 15 min.", "Tritura con la leche."]
  },
  {
    id: "sopa_verduras",
    name: "Sopa de verduras con fideos",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "caldo_pollo", base: true, amount: 900, unit: "ml" },
      { id: "salteado_verduras_cong", amount: 300, unit: "g" },
      { id: "pasta", amount: 60, unit: "g", optional: true }
    ],
    steps: ["Lleva el caldo a ebullici\xF3n.", "A\xF1ade las verduras 8 min.", "Echa los fideos y cuece lo que indique el paquete."]
  },
  {
    id: "revuelto_calabacin",
    name: "Revuelto de calabac\xEDn y cebolla",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "huevo", base: true, amount: 4, unit: "ud" },
      { id: "calabacin", base: true, amount: 1, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Pocha la cebolla y el calabac\xEDn en dados 8 min.", "A\xF1ade los huevos batidos con sal.", "Remueve a fuego suave hasta que cuajen jugosos."]
  },
  {
    id: "ensalada_tomate_huevo_atun",
    name: "Ensalada de tomate, huevo y at\xFAn",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "tomate", base: true, amount: 3, unit: "ud" },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" },
      { id: "oregano", amount: 1, unit: "g" }
    ],
    steps: ["Cuece los huevos 10 min y enfr\xEDalos.", "Corta el tomate en rodajas y la cebolla en juliana.", "Monta con el huevo y el at\xFAn y ali\xF1a con aceite, sal y or\xE9gano."]
  },
  {
    id: "ensalada_arroz",
    name: "Ensalada de arroz",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz", base: true, amount: 150, unit: "g" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "maiz", amount: 80, unit: "g" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "pepino", amount: 0.5, unit: "ud", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" },
      { id: "vinagre", amount: 1, unit: "cda" }
    ],
    steps: ["Cuece el arroz y enfr\xEDalo con agua.", "Pica pimiento y pepino.", "Mezcla con at\xFAn y ma\xEDz y ali\xF1a."]
  },
  {
    id: "ensalada_pollo_aguacate",
    name: "Ensalada de pollo y aguacate",
    category: "fit",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 250, unit: "g" },
      { id: "aguacate", amount: 1, unit: "ud" },
      { id: "lechuga", amount: 120, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud" },
      { id: "maiz", amount: 60, unit: "g", optional: true },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Haz el pollo a la plancha y c\xF3rtalo en tiras.", "Corta aguacate y tomate.", "Monta sobre la lechuga y ali\xF1a."]
  },
  {
    id: "poke_salmon",
    name: "Bowl de salm\xF3n, arroz y aguacate",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "salmon", base: true, amount: 250, unit: "g" },
      { id: "arroz_basmati", base: true, amount: 150, unit: "g" },
      { id: "aguacate", amount: 1, unit: "ud" },
      { id: "pepino", amount: 0.5, unit: "ud" },
      { id: "salsa_soja", amount: 2, unit: "cda" },
      { id: "maiz", amount: 60, unit: "g", optional: true }
    ],
    steps: ["Cuece el arroz y deja que temple.", "Marca el salm\xF3n en dados a la plancha 2-3 min.", "Monta el bowl con aguacate, pepino y soja."]
  },
  {
    id: "tacos_pescado",
    name: "Tacos de pescado con salsa de yogur",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "tortilla_trigo", base: true, amount: 6, unit: "ud" },
      { id: "merluza_cong", base: true, amount: 350, unit: "g" },
      { id: "lechuga", amount: 60, unit: "g" },
      { id: "yogur_griego", amount: 1, unit: "ud" },
      { id: "limon", amount: 0.5, unit: "ud" },
      { id: "pimenton", amount: 2, unit: "g" }
    ],
    steps: ["Saltea la merluza en trozos con piment\xF3n y sal 5 min.", "Mezcla el yogur con lim\xF3n y sal.", "Rellena las tortillas calientes con lechuga, pescado y salsa."]
  },
  {
    id: "merluza_ajillo",
    name: "Merluza al ajillo con patatas",
    category: "fit",
    minutes: 25,
    appliances: ["fuego", "microondas"],
    servings: 2,
    ingredients: [
      { id: "merluza_cong", base: true, amount: 400, unit: "g" },
      { id: "ajo", amount: 4, unit: "ud" },
      { id: "patata", amount: 2, unit: "ud", optional: true },
      { id: "pimenton", amount: 2, unit: "g" },
      { id: "aceite_oliva", amount: 3, unit: "cda" }
    ],
    steps: ["Patata en rodajas al microondas 7 min, tapada.", "Haz la merluza a la plancha y res\xE9rvala.", "Dora el ajo laminado, quita del fuego, a\xF1ade piment\xF3n y riega el pescado y las patatas."]
  },
  {
    id: "salmon_papillote_horno",
    name: "Salm\xF3n en papillote con verduras",
    category: "fit",
    minutes: 25,
    appliances: ["horno"],
    servings: 2,
    ingredients: [
      { id: "salmon", base: true, amount: 250, unit: "g" },
      { id: "calabacin", amount: 0.5, unit: "ud" },
      { id: "zanahoria", amount: 1, unit: "ud" },
      { id: "limon", amount: 0.5, unit: "ud" },
      { id: "aceite_oliva", amount: 1, unit: "cda" }
    ],
    steps: ["Horno a 200 \xB0C.", "Verduras en juliana sobre papel de horno, el salm\xF3n encima con sal, lim\xF3n y aceite.", "Cierra el paquete y hornea 15 min."]
  },
  {
    id: "gambas_ajillo",
    name: "Gambas al ajillo con pan",
    category: "capricho",
    minutes: 10,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "gambas_cong", base: true, amount: 300, unit: "g" },
      { id: "ajo", amount: 4, unit: "ud" },
      { id: "aceite_oliva", amount: 4, unit: "cda" },
      { id: "pan_molde", amount: 4, unit: "ud", optional: true }
    ],
    steps: ["Calienta el aceite con el ajo laminado sin que se queme.", "A\xF1ade las gambas y sal, 2-3 min.", "Sirve en el aceite con pan tostado para mojar."]
  },
  {
    id: "pollo_pimientos_soja",
    name: "Pollo con pimientos al estilo chino",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 300, unit: "g" },
      { id: "pimiento_rojo", amount: 1, unit: "ud" },
      { id: "pimiento_verde", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "salsa_soja", amount: 3, unit: "cda" },
      { id: "arroz_basmati", amount: 120, unit: "g", optional: true }
    ],
    steps: ["Cuece el arroz si lo vas a poner.", "Saltea a fuego fuerte el pollo en dados y luego los pimientos y la cebolla.", "A\xF1ade la soja y un chorrito de agua, 2 min."]
  },
  {
    id: "muslos_miel_soja_airfryer",
    name: "Contramuslos con miel y soja a la airfryer",
    category: "diario",
    minutes: 25,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "muslo_pollo", base: true, amount: 500, unit: "g" },
      { id: "miel", amount: 20, unit: "g" },
      { id: "salsa_soja", amount: 3, unit: "cda" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "lechuga", amount: 80, unit: "g", optional: true }
    ],
    steps: ["Mezcla miel, soja y ajo picado y embadurna el pollo.", "Airfryer 190 \xB0C 20 min, pintando con la salsa a mitad.", "Sirve con ensalada."]
  },
  {
    id: "picadillo_patatas",
    name: "Picadillo de carne con patatas",
    category: "diario",
    minutes: 25,
    appliances: ["fuego", "airfryer"],
    servings: 2,
    ingredients: [
      { id: "carne_picada", base: true, amount: 300, unit: "g" },
      { id: "patatas_cong", amount: 300, unit: "g" },
      { id: "pimiento_verde", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "tomate_frito", amount: 100, unit: "g" },
      { id: "huevo", amount: 2, unit: "ud", optional: true }
    ],
    steps: ["Patatas en airfryer 200 \xB0C 15 min.", "Sofr\xEDe cebolla y pimiento, a\xF1ade la carne y el tomate.", "Mezcla con las patatas (y un huevo frito encima)."]
  },
  {
    id: "berenjena_rellena_carne",
    name: "Berenjena rellena de carne",
    category: "diario",
    minutes: 30,
    appliances: ["microondas", "fuego", "horno"],
    servings: 2,
    ingredients: [
      { id: "berenjena", base: true, amount: 2, unit: "ud" },
      { id: "carne_picada", base: true, amount: 250, unit: "g" },
      { id: "tomate_frito", amount: 150, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "queso_rallado", amount: 60, unit: "g" }
    ],
    steps: ["Parte las berenjenas a lo largo y hazlas al microondas 7 min; vac\xEDalas.", "Sofr\xEDe cebolla, carne, la pulpa picada y el tomate 8 min.", "Rellena, cubre de queso y gratina a 220 \xB0C 8 min."]
  },
  {
    id: "calabacin_relleno_atun",
    name: "Calabac\xEDn relleno de at\xFAn al microondas",
    category: "fit",
    minutes: 20,
    appliances: ["microondas"],
    servings: 2,
    ingredients: [
      { id: "calabacin", base: true, amount: 2, unit: "ud" },
      { id: "atun", amount: 104, unit: "g" },
      { id: "tomate_frito", amount: 100, unit: "g" },
      { id: "mozzarella", amount: 60, unit: "g" }
    ],
    steps: ["Parte los calabacines a lo largo, vac\xEDalos y hazlos al microondas 5 min.", "Mezcla la pulpa picada con at\xFAn y tomate y rellena.", "Pon el queso y 3 min m\xE1s."]
  },
  {
    id: "alubias_verduras",
    name: "Alubias con verduras",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "alubias", base: true, amount: 400, unit: "g" },
      { id: "calabacin", amount: 0.5, unit: "ud" },
      { id: "zanahoria", amount: 1, unit: "ud" },
      { id: "pimiento_rojo", amount: 0.5, unit: "ud" },
      { id: "tomate_triturado", amount: 100, unit: "g" },
      { id: "caldo_pollo", amount: 250, unit: "ml" }
    ],
    steps: ["Sofr\xEDe las verduras en dados 8 min.", "A\xF1ade tomate, caldo y las alubias.", "Cuece 8 min a fuego suave."]
  },
  {
    id: "garbanzos_chorizo_salteados",
    name: "Garbanzos salteados con chorizo",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "garbanzos", base: true, amount: 400, unit: "g" },
      { id: "chorizo", amount: 80, unit: "g" },
      { id: "espinacas", amount: 100, unit: "g", optional: true },
      { id: "ajo", amount: 1, unit: "ud" },
      { id: "pimenton", amount: 2, unit: "g" }
    ],
    steps: ["Dora el chorizo en dados con el ajo.", "A\xF1ade los garbanzos escurridos y el piment\xF3n, 5 min.", "Incorpora las espinacas hasta que bajen."]
  },
  {
    id: "bolonesa_lentejas",
    name: "Pasta con bolo\xF1esa de lentejas",
    category: "fit",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 180, unit: "g" },
      { id: "lentejas", base: true, amount: 300, unit: "g" },
      { id: "tomate_triturado", amount: 300, unit: "g" },
      { id: "zanahoria", amount: 1, unit: "ud" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "oregano", amount: 1, unit: "g" }
    ],
    steps: ["Cuece la pasta.", "Sofr\xEDe cebolla y zanahoria picadas, a\xF1ade tomate y or\xE9gano 8 min.", "Incorpora las lentejas escurridas 3 min y sirve sobre la pasta."]
  },
  {
    id: "pasta_brocoli_queso",
    name: "Pasta con br\xF3coli y queso",
    category: "diario",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "brocoli", amount: 250, unit: "g" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "queso_rallado", amount: 50, unit: "g" },
      { id: "aceite_oliva", amount: 2, unit: "cda" }
    ],
    steps: ["Cuece la pasta con el br\xF3coli en ramilletes los \xFAltimos 4 min.", "Dora el ajo en el aceite.", "Mezcla todo con el queso."]
  },
  {
    id: "arroz_frito_salchichas",
    name: "Arroz frito con salchichas",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "arroz", base: true, amount: 150, unit: "g" },
      { id: "salchichas", amount: 150, unit: "g" },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "guisantes_cong", amount: 80, unit: "g" },
      { id: "salsa_soja", amount: 2, unit: "cda" }
    ],
    steps: ["Cuece el arroz.", "Dora las salchichas en rodajas y haz un revuelto con los huevos.", "Saltea todo con los guisantes y la soja."]
  },
  {
    id: "pizza_carbonara",
    name: "Pizza carbonara",
    category: "capricho",
    minutes: 25,
    appliances: ["horno"],
    servings: 2,
    ingredients: [
      { id: "masa_pizza", base: true, amount: 1, unit: "ud" },
      { id: "nata_cocinar", amount: 100, unit: "ml" },
      { id: "bacon", amount: 100, unit: "g" },
      { id: "mozzarella", amount: 150, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "champinon", amount: 80, unit: "g", optional: true }
    ],
    steps: ["Horno a 230 \xB0C.", "Extiende la masa con la nata, el queso, el bacon y la cebolla en aros.", "Hornea 12-14 min."]
  },
  {
    id: "nuggets_airfryer",
    name: "Nuggets caseros a la airfryer",
    category: "capricho",
    minutes: 25,
    appliances: ["airfryer"],
    servings: 2,
    ingredients: [
      { id: "pechuga_pollo", base: true, amount: 350, unit: "g" },
      { id: "huevo", amount: 1, unit: "ud" },
      { id: "pan_rallado", amount: 80, unit: "g" },
      { id: "patatas_cong", amount: 300, unit: "g", optional: true },
      { id: "ketchup", amount: 40, unit: "g" }
    ],
    steps: ["Corta el pollo en trozos, p\xE1salo por huevo y pan rallado.", "Airfryer 200 \xB0C 10-12 min con un poco de aceite en spray (las patatas antes, 12 min).", "Sirve con ketchup."]
  },
  {
    id: "tostadas_huevo_bacon",
    name: "Tostadas con huevo, bacon y aguacate",
    category: "capricho",
    minutes: 15,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "pan_molde", base: true, amount: 4, unit: "ud" },
      { id: "huevo", base: true, amount: 2, unit: "ud" },
      { id: "bacon", amount: 80, unit: "g" },
      { id: "aguacate", amount: 1, unit: "ud", optional: true }
    ],
    steps: ["Tuesta el pan y dora el bacon.", "Fr\xEDe o escalfa los huevos.", "Monta con el aguacate chafado con sal."]
  },
  {
    id: "quesadillas_jamon_queso",
    name: "Quesadillas de jam\xF3n y queso",
    category: "capricho",
    minutes: 10,
    appliances: ["fuego"],
    servings: 2,
    ingredients: [
      { id: "tortilla_trigo", base: true, amount: 4, unit: "ud" },
      { id: "jamon_york", amount: 100, unit: "g" },
      { id: "mozzarella", amount: 100, unit: "g" },
      { id: "tomate", amount: 1, unit: "ud", optional: true }
    ],
    steps: ["Rellena media tortilla con jam\xF3n y queso y d\xF3blala.", "D\xF3rala en sart\xE9n 2 min por lado.", "Corta en tri\xE1ngulos."]
  },
  // ——— Comodín: platos de "con lo que tengas", para calcular la autonomía y no dejarte sin cena ———
  {
    id: "comodin_tortilla_francesa",
    name: "Tortilla francesa con lo que haya",
    category: "diario",
    minutes: 8,
    appliances: ["fuego"],
    servings: 2,
    tags: ["comodin"],
    ingredients: [
      { id: "huevo", base: true, amount: 4, unit: "ud" },
      { id: "queso_rallado", amount: 40, unit: "g" },
      { id: "jamon_york", amount: 60, unit: "g" }
    ],
    steps: ["Bate los huevos con sal.", "Cuaja en sart\xE9n y rellena con lo que tengas (queso, jam\xF3n, verdura salteada)."]
  },
  {
    id: "comodin_pasta_ajo",
    name: "Pasta con ajo, aceite y queso",
    category: "diario",
    minutes: 12,
    appliances: ["fuego"],
    servings: 2,
    tags: ["comodin"],
    ingredients: [
      { id: "pasta", base: true, amount: 200, unit: "g" },
      { id: "ajo", amount: 2, unit: "ud" },
      { id: "queso_rallado", amount: 40, unit: "g" },
      { id: "aceite_oliva", amount: 3, unit: "cda" }
    ],
    steps: ["Cuece la pasta.", "Dora el ajo laminado en el aceite.", "Mezcla y termina con queso."]
  },
  {
    id: "comodin_arroz_salteado",
    name: "Arroz salteado con lo que haya",
    category: "diario",
    minutes: 20,
    appliances: ["fuego"],
    servings: 2,
    tags: ["comodin"],
    ingredients: [
      { id: "arroz", base: true, amount: 150, unit: "g" },
      { id: "huevo", amount: 2, unit: "ud" },
      { id: "zanahoria", amount: 1, unit: "ud" },
      { id: "guisantes_cong", amount: 80, unit: "g" },
      { id: "salsa_soja", amount: 2, unit: "cda" }
    ],
    steps: ["Cuece el arroz.", "Saltea la verdura que tengas y un huevo revuelto.", "Junta todo con soja."]
  },
  {
    id: "comodin_legumbres",
    name: "Legumbres salteadas con tomate",
    category: "diario",
    minutes: 12,
    appliances: ["fuego"],
    servings: 2,
    tags: ["comodin"],
    ingredients: [
      { id: "lentejas", base: true, amount: 400, unit: "g" },
      { id: "cebolla", amount: 0.5, unit: "ud" },
      { id: "tomate_triturado", amount: 150, unit: "g" },
      { id: "pimenton", amount: 3, unit: "g" }
    ],
    steps: ["Sofr\xEDe la cebolla.", "A\xF1ade tomate y piment\xF3n.", "Incorpora las legumbres escurridas 5 min."]
  },
  {
    id: "comodin_sandwich",
    name: "S\xE1ndwich mixto",
    category: "diario",
    minutes: 8,
    appliances: ["fuego"],
    servings: 2,
    tags: ["comodin"],
    ingredients: [
      { id: "pan_molde", base: true, amount: 4, unit: "ud" },
      { id: "jamon_york", amount: 80, unit: "g" },
      { id: "queso_lonchas", amount: 60, unit: "g" }
    ],
    steps: ["Monta los s\xE1ndwiches con lo que tengas.", "D\xF3ralos en sart\xE9n o sandwichera."]
  },
  ...RECETAS_FIT,
  ...RECETAS_VEG,
  ...RECETAS_DIARIO,
  ...RECETAS_VEG2,
  ...RECETAS_FITNESS
];

// packages/core/src/flex.ts
var SUBSTITUTE_GROUPS = [
  ["pechuga_pollo", "muslo_pollo", "pechuga_pavo", "lomo_cerdo", "ternera_filete"],
  ["salmon", "merluza_cong", "bacalao_cong"],
  ["gambas_cong", "calamar_cong", "mejillon_cong"],
  ["cebolla", "puerro"],
  ["tomate_triturado", "tomate_frito", "tomate"],
  ["lentejas", "garbanzos", "alubias"],
  ["atun", "atun_natural"],
  ["pasta", "pasta_integral"],
  ["quinoa", "cuscus"],
  ["almendras", "nueces"],
  ["queso_fresco", "requeson"],
  ["arroz", "arroz_basmati", "arroz_integral"],
  ["mozzarella", "queso_rallado", "queso_lonchas", "queso_cabra"],
  ["lechuga", "espinacas", "rucula"],
  ["jamon_york", "jamon_serrano", "bacon", "chorizo"],
  ["calabacin", "brocoli", "salteado_verduras_cong", "champinon", "pimiento_rojo", "pimiento_verde", "zanahoria", "guisantes_cong", "judias_verdes_cong", "berenjena", "coliflor", "esparragos", "calabaza", "setas"],
  ["patata", "patatas_cong", "boniato"],
  ["nata_cocinar", "leche_coco", "leche", "bebida_soja"]
];
var GROUP_OF = /* @__PURE__ */ new Map();
for (const g of SUBSTITUTE_GROUPS) for (const id of g) GROUP_OF.set(id, g);

// packages/core/src/data/nutrition.json
var nutrition_default = {
  source: "BEDCA, Base de Datos Espa\xF1ola de Composici\xF3n de Alimentos (AESAN) \u2014 https://www.bedca.net",
  energyNote: "Si BEDCA no da la energ\xEDa: 4 kcal/g prote\xEDna e hidratos, 9 grasa, 2 fibra (Reglamento UE 1169/2011, anexo XIV)",
  retrievedAt: "2026-10-30",
  per: "100 g de porci\xF3n comestible",
  items: {
    cebolla: {
      bedcaId: 1773,
      bedcaName: "Cebolla",
      kcal: 29,
      protein: 1.1,
      carbs: 5.3,
      fat: 0,
      fiber: 1.8,
      kcalSource: "calculada"
    },
    ajo: {
      bedcaId: 1774,
      bedcaName: "Ajo",
      kcal: 117,
      protein: 3.9,
      carbs: 24.3,
      fat: 0.2,
      fiber: 1.2,
      kcalSource: "calculada"
    },
    tomate: {
      bedcaId: 2421,
      bedcaName: "Tomate",
      kcal: 19,
      protein: 0.9,
      carbs: 3.5,
      fat: 0.1,
      fiber: 1.1,
      kcalSource: "bedca"
    },
    pimiento_rojo: {
      bedcaId: 1894,
      bedcaName: "Pimiento rojo, crudo",
      kcal: 32,
      protein: 1.3,
      carbs: 4.5,
      fat: 0.6,
      fiber: 1.8,
      kcalSource: "calculada"
    },
    pimiento_verde: {
      bedcaId: 1847,
      bedcaName: "Pimiento verde, crudo",
      kcal: 22,
      protein: 0.6,
      carbs: 2.6,
      fat: 0.6,
      fiber: 1.9,
      kcalSource: "calculada"
    },
    calabacin: {
      bedcaId: 1776,
      bedcaName: "Calabac\xEDn",
      kcal: 19,
      protein: 1.8,
      carbs: 2,
      fat: 0.2,
      fiber: 1,
      kcalSource: "calculada"
    },
    zanahoria: {
      bedcaId: 1892,
      bedcaName: "Zanahoria, cruda",
      kcal: 39,
      protein: 0.8,
      carbs: 7,
      fat: 0.3,
      fiber: 2.6,
      kcalSource: "calculada"
    },
    patata: {
      bedcaId: 1895,
      bedcaName: "Patata, cruda",
      kcal: 75,
      protein: 2.2,
      carbs: 15.2,
      fat: 0.2,
      fiber: 1.7,
      kcalSource: "calculada"
    },
    lechuga: {
      bedcaId: 1775,
      bedcaName: "Lechuga",
      kcal: 19,
      protein: 1.1,
      carbs: 1.4,
      fat: 0.6,
      fiber: 1.5,
      kcalSource: "calculada"
    },
    espinacas: {
      bedcaId: 1282,
      bedcaName: "Espinaca, congelada, cruda",
      kcal: 31,
      protein: 2.6,
      carbs: 1.2,
      fat: 0.3,
      fiber: 6.3,
      kcalSource: "calculada"
    },
    brocoli: {
      bedcaId: 312,
      bedcaName: "Br\xE9col, crudo",
      kcal: 29,
      protein: 3,
      carbs: 1.8,
      fat: 0.4,
      fiber: 3,
      kcalSource: "calculada"
    },
    champinon: {
      bedcaId: 1656,
      bedcaName: "Champi\xF1on",
      kcal: 31,
      protein: 1.8,
      carbs: 4,
      fat: 0.3,
      fiber: 2.5,
      kcalSource: "calculada"
    },
    limon: {
      bedcaId: 411,
      bedcaName: "Lim\xF3n, zumo, fresco",
      kcal: 30,
      protein: 0.4,
      carbs: 6.9,
      fat: 0.1,
      fiber: 0.1,
      kcalSource: "calculada",
      note: "zumo de lim\xF3n si no hay fruta entera"
    },
    aguacate: {
      bedcaId: 1623,
      bedcaName: "Aguacate",
      kcal: 141,
      protein: 1.5,
      carbs: 5.9,
      fat: 12,
      fiber: 1.8,
      kcalSource: "calculada"
    },
    berenjena: {
      bedcaId: 1921,
      bedcaName: "Berenjena",
      kcal: 25,
      protein: 0.7,
      carbs: 3.8,
      fat: 0.2,
      fiber: 2.4,
      kcalSource: "calculada"
    },
    pepino: {
      bedcaId: 1772,
      bedcaName: "Pepino",
      kcal: 13,
      protein: 0.7,
      carbs: 2,
      fat: 0.1,
      fiber: 0.8,
      kcalSource: "calculada"
    },
    coliflor: {
      bedcaId: 478,
      bedcaName: "Coliflor, congelada, cruda",
      kcal: 23,
      protein: 2,
      carbs: 2.1,
      fat: 0.2,
      fiber: 2.3,
      kcalSource: "calculada"
    },
    puerro: {
      bedcaId: 2411,
      bedcaName: "Puerro, crudo y congelado",
      kcal: 24,
      protein: 1.6,
      carbs: 3.7,
      fat: 0.3,
      fiber: 2.8,
      kcalSource: "bedca"
    },
    esparragos: {
      bedcaId: 151,
      bedcaName: "Esp\xE1rrago, verde",
      kcal: 28,
      protein: 2.9,
      carbs: 2,
      fat: 0.6,
      fiber: 1.7,
      kcalSource: "calculada"
    },
    calabaza: {
      bedcaId: 1920,
      bedcaName: "Calabaza, cruda",
      kcal: 37,
      protein: 1.2,
      carbs: 5.6,
      fat: 0.5,
      fiber: 2.4,
      kcalSource: "calculada"
    },
    boniato: {
      bedcaId: 492,
      bedcaName: "Boniato, crudo",
      kcal: 105,
      protein: 1.2,
      carbs: 23,
      fat: 0.3,
      fiber: 2.9,
      kcalSource: "calculada"
    },
    setas: {
      bedcaId: 1754,
      bedcaName: "Seta",
      kcal: 31,
      protein: 1.8,
      carbs: 4,
      fat: 0.3,
      fiber: 2.5,
      kcalSource: "calculada"
    },
    platano: {
      bedcaId: 1737,
      bedcaName: "Platano",
      kcal: 94,
      protein: 1.2,
      carbs: 20,
      fat: 0.3,
      fiber: 3.4,
      kcalSource: "calculada"
    },
    pechuga_pollo: {
      bedcaId: 260,
      bedcaName: "Pollo, pechuga, con piel, crudo",
      kcal: 103,
      protein: 23.1,
      carbs: 0,
      fat: 1.2,
      fiber: 0,
      kcalSource: "calculada",
      note: "BEDCA solo tiene completa la pechuga con piel"
    },
    muslo_pollo: {
      bedcaId: 1388,
      bedcaName: "Pollo, muslo, con piel, crudo",
      kcal: 183,
      protein: 20.6,
      carbs: 0,
      fat: 11.2,
      fiber: 0,
      kcalSource: "calculada"
    },
    pechuga_pavo: {
      bedcaId: 2285,
      bedcaName: "Pavo, crudo",
      kcal: 157,
      protein: 20.2,
      carbs: 0,
      fat: 8.5,
      fiber: 0,
      kcalSource: "bedca"
    },
    carne_picada: {
      bedcaId: 1931,
      bedcaName: "Carne picada",
      kcal: 234,
      protein: 22,
      carbs: 0,
      fat: 16.2,
      fiber: 0,
      kcalSource: "calculada"
    },
    lomo_cerdo: {
      bedcaId: 2259,
      bedcaName: "Cerdo, lomo, crudo",
      kcal: 152,
      protein: 18,
      carbs: 0,
      fat: 8.9,
      fiber: 0,
      kcalSource: "bedca"
    },
    salmon: {
      bedcaId: 1749,
      bedcaName: "Salm\xF3n",
      kcal: 182,
      protein: 18.4,
      carbs: 0,
      fat: 12,
      fiber: 0,
      kcalSource: "calculada"
    },
    merluza_cong: {
      bedcaId: 561,
      bedcaName: "Merluza, congelada, cruda",
      kcal: 84,
      protein: 16.7,
      carbs: 0,
      fat: 1.9,
      fiber: 0,
      kcalSource: "calculada"
    },
    gambas_cong: {
      bedcaId: 159,
      bedcaName: "Gamba roja, congelada, pelada, cruda",
      kcal: 107,
      protein: 22.6,
      carbs: 0,
      fat: 1.8,
      fiber: 0,
      kcalSource: "calculada"
    },
    bacalao_cong: {
      bedcaId: 797,
      bedcaName: "Bacalao, salado, remojado, crudo",
      kcal: 109,
      protein: 26,
      carbs: 0,
      fat: 0.4,
      fiber: 0,
      kcalSource: "bedca"
    },
    mejillon_cong: {
      bedcaId: 824,
      bedcaName: "Mejill\xF3n, hervido",
      kcal: 112,
      protein: 18.5,
      carbs: 3.2,
      fat: 2.7,
      fiber: 0,
      kcalSource: "bedca"
    },
    calamar_cong: {
      bedcaId: 87,
      bedcaName: "Calamar, congelado, crudo",
      kcal: 82,
      protein: 17,
      carbs: 0.5,
      fat: 1.3,
      fiber: 0,
      kcalSource: "calculada"
    },
    jamon_york: {
      bedcaId: 180,
      bedcaName: "Jam\xF3n cocido, categor\xEDa s/e",
      kcal: 113,
      protein: 21,
      carbs: 0.4,
      fat: 3,
      fiber: 0,
      kcalSource: "calculada"
    },
    bacon: {
      bedcaId: 602,
      bedcaName: "Bac\xF3n, ahumado, a la parrilla",
      kcal: 293,
      protein: 23.4,
      carbs: 0,
      fat: 22.1,
      fiber: 0,
      kcalSource: "calculada",
      note: "panceta si no hay bacon"
    },
    jamon_serrano: {
      bedcaId: 1814,
      bedcaName: "Jamon serrano",
      kcal: 319,
      protein: 28.8,
      carbs: 0.2,
      fat: 22.6,
      fiber: null,
      kcalSource: "calculada"
    },
    chorizo: {
      bedcaId: 1661,
      bedcaName: "Chorizo",
      kcal: 324,
      protein: 27,
      carbs: 1.9,
      fat: 23.1,
      fiber: 0,
      kcalSource: "calculada"
    },
    salchichas: {
      bedcaId: 1822,
      bedcaName: 'Salchicha, tipo "frankfurt"',
      kcal: 290,
      protein: 12.7,
      carbs: 1.3,
      fat: 26,
      fiber: 0.1,
      kcalSource: "calculada"
    },
    hamburguesa: {
      bedcaId: 1931,
      bedcaName: "Carne picada",
      kcal: 234,
      protein: 22,
      carbs: 0,
      fat: 16.2,
      fiber: 0,
      kcalSource: "calculada",
      note: "carne picada si no hay hamburguesa"
    },
    huevo: {
      bedcaId: 2127,
      bedcaName: "Huevo de gallina fresco",
      kcal: 149,
      protein: 12.5,
      carbs: 0,
      fat: 11.1,
      fiber: 0,
      kcalSource: "bedca"
    },
    leche: {
      bedcaId: 1319,
      bedcaName: "Leche de vaca, semidesnatada, pasteurizada",
      kcal: 46,
      protein: 3.4,
      carbs: 4.6,
      fat: 1.6,
      fiber: 0,
      kcalSource: "calculada"
    },
    yogur_griego: {
      bedcaId: 118,
      bedcaName: "Yogur griego",
      kcal: 118,
      protein: 3.6,
      carbs: 3.5,
      fat: 10,
      fiber: null,
      kcalSource: "calculada"
    },
    queso_rallado: {
      bedcaId: 632,
      bedcaName: "Queso Gouda",
      kcal: 355,
      protein: 24.9,
      carbs: 2.2,
      fat: 27.4,
      fiber: 0,
      kcalSource: "calculada",
      note: "queso tipo emmental/gouda"
    },
    mozzarella: {
      bedcaId: 1787,
      bedcaName: "Queso mozzarella",
      kcal: 223,
      protein: 19.5,
      carbs: 0,
      fat: 16.1,
      fiber: 0,
      kcalSource: "calculada"
    },
    queso_lonchas: {
      bedcaId: 632,
      bedcaName: "Queso Gouda",
      kcal: 355,
      protein: 24.9,
      carbs: 2.2,
      fat: 27.4,
      fiber: 0,
      kcalSource: "calculada"
    },
    queso_cabra: {
      bedcaId: 505,
      bedcaName: "Queso fresco, cabra",
      kcal: 299,
      protein: 19.8,
      carbs: 1.1,
      fat: 23.9,
      fiber: 0,
      kcalSource: "calculada",
      note: "queso fresco de cabra si no hay rulo"
    },
    nata_cocinar: {
      bedcaId: 1348,
      bedcaName: "Nata, l\xEDquida, para cocinar, 18 % de grasa",
      kcal: 125,
      protein: 3.1,
      carbs: 4.5,
      fat: 10.5,
      fiber: 0,
      kcalSource: "calculada"
    },
    mantequilla: {
      bedcaId: 202,
      bedcaName: "Mantequilla salada",
      kcal: 743,
      protein: 0.7,
      carbs: 0.5,
      fat: 82,
      fiber: 0,
      kcalSource: "calculada"
    },
    arroz: {
      bedcaId: 1630,
      bedcaName: "Arroz",
      kcal: 381,
      protein: 7,
      carbs: 86,
      fat: 0.9,
      fiber: 0.2,
      kcalSource: "calculada"
    },
    arroz_basmati: {
      bedcaId: 1630,
      bedcaName: "Arroz",
      kcal: 381,
      protein: 7,
      carbs: 86,
      fat: 0.9,
      fiber: 0.2,
      kcalSource: "calculada",
      note: "arroz blanco"
    },
    pasta: {
      bedcaId: 237,
      bedcaName: "Pasta alimenticia, cruda",
      kcal: 348,
      protein: 12,
      carbs: 68,
      fat: 2,
      fiber: 5,
      kcalSource: "calculada"
    },
    lentejas: {
      bedcaId: 488,
      bedcaName: "Lenteja, en conserva",
      kcal: 83,
      protein: 6.3,
      carbs: 11.4,
      fat: 0.2,
      fiber: 5.1,
      kcalSource: "calculada"
    },
    garbanzos: {
      bedcaId: 1292,
      bedcaName: "Garbanzo, en conserva",
      kcal: 120,
      protein: 7.2,
      carbs: 14.1,
      fat: 2.9,
      fiber: 4.1,
      kcalSource: "calculada"
    },
    alubias: {
      bedcaId: 486,
      bedcaName: "Alubia blanca, en conserva",
      kcal: 101,
      protein: 6.7,
      carbs: 15.7,
      fat: 0.2,
      fiber: 4.4,
      kcalSource: "calculada"
    },
    tomate_triturado: {
      bedcaId: 298,
      bedcaName: "Tomate, maduro, pelado y triturado, enlatado",
      kcal: 30,
      protein: 1.4,
      carbs: 5.3,
      fat: 0.1,
      fiber: 1.2,
      kcalSource: "calculada"
    },
    tomate_frito: {
      bedcaId: 1759,
      bedcaName: "Tomate frito",
      kcal: 88,
      protein: 1.5,
      carbs: 5.2,
      fat: 6.4,
      fiber: 1.6,
      kcalSource: "calculada"
    },
    atun: {
      bedcaId: 2042,
      bedcaName: "Atun en aceite vegetal",
      kcal: 204,
      protein: 23.8,
      carbs: 0,
      fat: 12.1,
      fiber: 0,
      kcalSource: "calculada"
    },
    sardinas: {
      bedcaId: 550,
      bedcaName: "Sardina, enlatada en aceite, escurrida",
      kcal: 222,
      protein: 24.2,
      carbs: 0,
      fat: 13.9,
      fiber: 0,
      kcalSource: "calculada"
    },
    piquillos: {
      bedcaId: 1381,
      bedcaName: "Pimiento morr\xF3n, en conserva",
      kcal: 32,
      protein: 1.2,
      carbs: 5.2,
      fat: 0.4,
      fiber: 1.5,
      kcalSource: "calculada",
      note: "pimiento morr\xF3n en conserva"
    },
    maiz: {
      bedcaId: 2054,
      bedcaName: "Ma\xEDz en conserva",
      kcal: 102,
      protein: 3.3,
      carbs: 18.2,
      fat: 1.3,
      fiber: 2.3,
      kcalSource: "calculada"
    },
    harina: {
      bedcaId: 1808,
      bedcaName: "Harina de trigo",
      kcal: 333,
      protein: 10,
      carbs: 71.5,
      fat: 0,
      fiber: 3.5,
      kcalSource: "calculada"
    },
    cuscus: {
      bedcaId: 445,
      bedcaName: "S\xE9mola de trigo, cruda",
      kcal: 351,
      protein: 12.6,
      carbs: 70.4,
      fat: 1.2,
      fiber: 4,
      kcalSource: "calculada"
    },
    pan_rallado: {
      bedcaId: 1926,
      bedcaName: "Pan rallado",
      kcal: 261,
      protein: 8.5,
      carbs: 51.5,
      fat: 1.6,
      fiber: 3.5,
      kcalSource: "calculada"
    },
    avena: {
      bedcaId: 59,
      bedcaName: "Avena, cruda",
      kcal: 409,
      protein: 15,
      carbs: 66.3,
      fat: 6.9,
      fiber: 10.6,
      kcalSource: "calculada"
    },
    pan_hamburguesa: {
      bedcaId: 1810,
      bedcaName: "Pan blanco, de barra",
      kcal: 243,
      protein: 8.3,
      carbs: 47,
      fat: 1.6,
      fiber: 3.5,
      kcalSource: "calculada",
      note: "pan blanco (BEDCA no tiene pan de hamburguesa)"
    },
    pan_molde: {
      bedcaId: 2163,
      bedcaName: "Pan integral",
      kcal: 250,
      protein: 10.9,
      carbs: 44,
      fat: 3,
      fiber: 6,
      kcalSource: "bedca"
    },
    patatas_cong: {
      bedcaId: 1366,
      bedcaName: "Patata, prefrita, congelada",
      kcal: 276,
      protein: 4.1,
      carbs: 32.8,
      fat: 13.5,
      fiber: 3.5,
      kcalSource: "calculada"
    },
    guisantes_cong: {
      bedcaId: 469,
      bedcaName: "Guisante, congelado, crudo",
      kcal: 71,
      protein: 5.4,
      carbs: 8.8,
      fat: 0.5,
      fiber: 4.7,
      kcalSource: "calculada"
    },
    judias_verdes_cong: {
      bedcaId: 471,
      bedcaName: "Jud\xEDa verde, congelada, cruda",
      kcal: 36,
      protein: 1.9,
      carbs: 4.1,
      fat: 0.6,
      fiber: 3.4,
      kcalSource: "calculada"
    },
    salteado_verduras_cong: {
      bedcaId: 1336,
      bedcaName: "Menestra de verduras, congelada",
      kcal: 44,
      protein: 3.3,
      carbs: 6.6,
      fat: 0.5,
      fiber: null,
      kcalSource: "calculada"
    },
    aceite_oliva: {
      bedcaId: 1771,
      bedcaName: "Aceite de oliva",
      kcal: 899,
      protein: 0,
      carbs: 0,
      fat: 99.9,
      fiber: 0,
      kcalSource: "calculada"
    },
    vinagre: {
      bedcaId: 2124,
      bedcaName: "Vinagre de vino",
      kcal: 4,
      protein: 0.4,
      carbs: 0.6,
      fat: 0,
      fiber: 0,
      kcalSource: "bedca"
    },
    pimienta: {
      bedcaId: 2590,
      bedcaName: "Pimienta, negra",
      kcal: 230,
      protein: 11,
      carbs: 38.3,
      fat: 3.3,
      fiber: 26.5,
      kcalSource: "bedca"
    },
    pimenton: {
      bedcaId: 400,
      bedcaName: "Piment\xF3n, en polvo",
      kcal: 368,
      protein: 14.8,
      carbs: 38,
      fat: 13,
      fiber: 20,
      kcalSource: "calculada"
    },
    oregano: {
      bedcaId: 1353,
      bedcaName: "Or\xE9gano, seco",
      kcal: 412,
      protein: 11,
      carbs: 68.9,
      fat: 10.3,
      fiber: null,
      kcalSource: "calculada"
    },
    comino: {
      bedcaId: 1832,
      bedcaName: "Comino",
      kcal: 438,
      protein: 17.8,
      carbs: 45.4,
      fat: 18.2,
      fiber: 10.5,
      kcalSource: "calculada"
    },
    curry: {
      bedcaId: 1992,
      bedcaName: "Curry",
      kcal: 435,
      protein: 15,
      carbs: 60,
      fat: 15,
      fiber: 0,
      kcalSource: "calculada"
    },
    salsa_soja: {
      bedcaId: 1956,
      bedcaName: "Salsa de soja",
      kcal: 66,
      protein: 8.7,
      carbs: 6.7,
      fat: 0.1,
      fiber: 1.6,
      kcalSource: "calculada"
    },
    mayonesa: {
      bedcaId: 1708,
      bedcaName: "Mayonesa con aceite de girasol",
      kcal: 709,
      protein: 1.3,
      carbs: 5.8,
      fat: 75.6,
      fiber: 0,
      kcalSource: "calculada"
    },
    ketchup: {
      bedcaId: 1842,
      bedcaName: "Ketchup",
      kcal: 104,
      protein: 3.4,
      carbs: 21.7,
      fat: 0.2,
      fiber: 0.9,
      kcalSource: "calculada"
    },
    leche_coco: {
      bedcaId: 185,
      bedcaName: "Leche de coco",
      kcal: 211,
      protein: 2,
      carbs: 2.8,
      fat: 21.3,
      fiber: null,
      kcalSource: "calculada"
    },
    miel: {
      bedcaId: 2643,
      bedcaName: "Miel",
      kcal: 314,
      protein: 0.5,
      carbs: 76.8,
      fat: 0,
      fiber: 0,
      kcalSource: "bedca"
    },
    manzana: {
      bedcaId: 0,
      bedcaName: "Manzana",
      kcal: 54,
      protein: 0.3,
      carbs: 12,
      fat: 0.1,
      fiber: 2,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    naranja: {
      bedcaId: 0,
      bedcaName: "Naranja",
      kcal: 43,
      protein: 0.8,
      carbs: 8.6,
      fat: 0.2,
      fiber: 2,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    mandarina: {
      bedcaId: 0,
      bedcaName: "Mandarina",
      kcal: 45,
      protein: 0.8,
      carbs: 9,
      fat: 0.2,
      fiber: 1.9,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    pera: {
      bedcaId: 0,
      bedcaName: "Pera",
      kcal: 50,
      protein: 0.4,
      carbs: 10.6,
      fat: 0.1,
      fiber: 2.3,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    kiwi: {
      bedcaId: 0,
      bedcaName: "Kiwi",
      kcal: 56,
      protein: 1.1,
      carbs: 10.6,
      fat: 0.5,
      fiber: 2.1,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    fresas: {
      bedcaId: 0,
      bedcaName: "Fresa",
      kcal: 40,
      protein: 0.7,
      carbs: 7,
      fat: 0.5,
      fiber: 2.2,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    melon: {
      bedcaId: 0,
      bedcaName: "Mel\xF3n",
      kcal: 30,
      protein: 0.6,
      carbs: 6,
      fat: 0.2,
      fiber: 1,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    sandia: {
      bedcaId: 0,
      bedcaName: "Sand\xEDa",
      kcal: 32,
      protein: 0.6,
      carbs: 7,
      fat: 0.1,
      fiber: 0.3,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    uvas: {
      bedcaId: 0,
      bedcaName: "Uva",
      kcal: 70,
      protein: 0.6,
      carbs: 16.1,
      fat: 0.2,
      fiber: 0.9,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    yogur_natural: {
      bedcaId: 0,
      bedcaName: "Yogur natural",
      kcal: 63,
      protein: 3.9,
      carbs: 4.7,
      fat: 3.2,
      fiber: null,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    natillas: {
      bedcaId: 0,
      bedcaName: "Natillas",
      kcal: 123,
      protein: 3.9,
      carbs: 17.7,
      fat: 4.1,
      fiber: null,
      kcalSource: "calculada",
      note: "Valores de referencia de fruta y l\xE1cteos comunes; pendiente de cotejar con la ficha de BEDCA."
    },
    claras_huevo: {
      bedcaId: 313,
      bedcaName: "Huevo de gallina, clara, cruda",
      kcal: 49,
      protein: 11,
      carbs: 0.7,
      fat: 0.2,
      fiber: 0,
      kcalSource: "calculada"
    },
    tofu: {
      bedcaId: 499,
      bedcaName: "Tofu",
      kcal: 119,
      protein: 11.5,
      carbs: 3.3,
      fat: 6.6,
      fiber: 0.3,
      kcalSource: "calculada"
    },
    requeson: {
      bedcaId: 1745,
      bedcaName: "Reques\xF3n",
      kcal: 101,
      protein: 12.3,
      carbs: 3.3,
      fat: 4.3,
      fiber: 0,
      kcalSource: "calculada"
    },
    kefir: {
      bedcaId: 182,
      bedcaName: "Kefir",
      kcal: 64,
      protein: 3.3,
      carbs: 4.8,
      fat: 3.5,
      fiber: null,
      kcalSource: "calculada"
    },
    bebida_soja: {
      bedcaId: 2491,
      bedcaName: "Bebida de soja",
      kcal: 53,
      protein: 3.2,
      carbs: 5.8,
      fat: 1.8,
      fiber: 1.3,
      kcalSource: "bedca"
    },
    fiambre_pavo: {
      bedcaId: 1670,
      bedcaName: "Pavo, fiambre, bajo en grasa",
      kcal: 99,
      protein: 19.3,
      carbs: 3.6,
      fat: 0.8,
      fiber: 0,
      kcalSource: "calculada"
    },
    atun_natural: {
      bedcaId: 1940,
      bedcaName: "At\xFAn, al natural",
      kcal: 99,
      protein: 23.5,
      carbs: 0,
      fat: 0.6,
      fiber: 0,
      kcalSource: "calculada"
    },
    quinoa: {
      bedcaId: 407,
      bedcaName: "Quinoa, cruda",
      kcal: 376,
      protein: 13.8,
      carbs: 64.2,
      fat: 5.6,
      fiber: 7,
      kcalSource: "calculada"
    },
    arroz_integral: {
      bedcaId: 56,
      bedcaName: "Arroz integral, crudo",
      kcal: 351,
      protein: 6.7,
      carbs: 73.4,
      fat: 2.8,
      fiber: 2.8,
      kcalSource: "calculada"
    },
    pasta_integral: {
      bedcaId: 238,
      bedcaName: "Pasta alimenticia, integral, cruda",
      kcal: 389,
      protein: 13.4,
      carbs: 75,
      fat: 1.4,
      fiber: 11.5,
      kcalSource: "calculada"
    },
    almendras: {
      bedcaId: 1203,
      bedcaName: "Almendra, cruda",
      kcal: 615,
      protein: 20,
      carbs: 5.4,
      fat: 54.1,
      fiber: 13.5,
      kcalSource: "calculada"
    },
    nueces: {
      bedcaId: 1722,
      bedcaName: "Nuez",
      kcal: 611,
      protein: 14,
      carbs: 3.3,
      fat: 59,
      fiber: 5.2,
      kcalSource: "calculada"
    },
    crema_cacahuete: {
      bedcaId: 539,
      bedcaName: "Crema de cacahuete",
      kcal: 619,
      protein: 25.5,
      carbs: 11.2,
      fat: 50.9,
      fiber: 7,
      kcalSource: "calculada"
    },
    sesamo: {
      bedcaId: 538,
      bedcaName: "S\xE9samo, semilla",
      kcal: 601,
      protein: 20.5,
      carbs: 11.7,
      fat: 50,
      fiber: 11,
      kcalSource: "calculada"
    },
    arandanos: {
      bedcaId: 2011,
      bedcaName: "Arandano",
      kcal: 42,
      protein: 0.6,
      carbs: 6.1,
      fat: 0.6,
      fiber: 4.9,
      kcalSource: "calculada"
    },
    rucula: {
      bedcaId: 1805,
      bedcaName: "Rucula",
      kcal: 34,
      protein: 2.6,
      carbs: 3.7,
      fat: 0.7,
      fiber: 1.6,
      kcalSource: "calculada"
    },
    mango: {
      bedcaId: 201,
      bedcaName: "Mango, sin piel, crudo",
      kcal: 62,
      protein: 0.6,
      carbs: 13.4,
      fat: 0.2,
      fiber: 2.3,
      kcalSource: "calculada"
    },
    pina: {
      bedcaId: 2242,
      bedcaName: "Pi\xF1a",
      kcal: 49,
      protein: 0.5,
      carbs: 11.5,
      fat: 0,
      fiber: 1.2,
      kcalSource: "bedca",
      note: "BEDCA no da grasa: se cuenta 0"
    },
    canela: {
      bedcaId: 2477,
      bedcaName: "Canela, en polvo",
      kcal: 372,
      protein: 3.9,
      carbs: 80.6,
      fat: 3.2,
      fiber: 54.3,
      kcalSource: "bedca"
    },
    ternera_filete: {
      bedcaId: 449,
      bedcaName: "Ternera, solomillo, sin grasa, crudo",
      kcal: 108,
      protein: 20.2,
      carbs: 0,
      fat: 3.1,
      fiber: 0,
      kcalSource: "calculada",
      note: "ternera magra (solomillo sin grasa)"
    }
  },
  missing: [
    "queso_fresco",
    "caldo_pollo",
    "tortilla_trigo",
    "masa_pizza",
    "sal"
  ]
};

// packages/core/src/nutrition.ts
var NUTRITION_SOURCE = nutrition_default.source;
var ITEMS = nutrition_default.items;

// packages/core/src/ticket.ts
var PRICE = String.raw`-?\d+[.,]\d{2}`;
var LOOSE = String.raw`-?\d{1,3}[.,][\d%€os]{2}`;
var ITEM = new RegExp(String.raw`^(?:\d\s+(?=\d))?(?:(\d{1,2})\s+)?(.*?[a-zñ].*?)\s+(${LOOSE})(?:\s+(${LOOSE}))?[a-z0-9]?\s*(?:€|eur)?\s*[a-z]?$`);
var WEIGHT = new RegExp(String.raw`(\d+[.,]\d{1,3})\s*kg\b(?:\s*x)?\s*(?:(${PRICE})\s*(?:€|eur)?\s*/\s*kg)?.*?(${PRICE})?\s*[a-z]?$`);
var TIMES = new RegExp(String.raw`^(\d{1,2})\s*x\s*(${PRICE})`);

// packages/core/src/desserts.ts
var dessert = (id, name, ingredients, kind, steps = ["Listo para servir."]) => ({ id: `postre_${id}`, name, category: kind === "capricho" ? "capricho" : "fit", minutes: kind === "fruta" ? 2 : 1, appliances: [], servings: 1, ingredients, steps, tags: ["postre", kind] });
var DESSERTS = [
  dessert("naranja", "Naranja", [{ id: "naranja", amount: 1, unit: "ud", base: true }], "fruta"),
  dessert("mandarinas", "Mandarinas", [{ id: "mandarina", amount: 2, unit: "ud", base: true }], "fruta"),
  dessert("manzana", "Manzana", [{ id: "manzana", amount: 1, unit: "ud", base: true }], "fruta"),
  dessert("pera", "Pera", [{ id: "pera", amount: 1, unit: "ud", base: true }], "fruta"),
  dessert("platano", "Pl\xE1tano", [{ id: "platano", amount: 1, unit: "ud", base: true }], "fruta"),
  dessert("kiwi", "Kiwi", [{ id: "kiwi", amount: 1, unit: "ud", base: true }], "fruta"),
  dessert("fresas", "Fresas", [{ id: "fresas", amount: 150, unit: "g", base: true }], "fruta"),
  dessert("melon", "Mel\xF3n", [{ id: "melon", amount: 250, unit: "g", base: true }], "fruta"),
  dessert("sandia", "Sand\xEDa", [{ id: "sandia", amount: 300, unit: "g", base: true }], "fruta"),
  dessert("uvas", "Uvas", [{ id: "uvas", amount: 150, unit: "g", base: true }], "fruta"),
  dessert("yogur", "Yogur natural", [{ id: "yogur_natural", amount: 1, unit: "ud", base: true }], "lacteo"),
  dessert(
    "yogur_miel",
    "Yogur griego con miel",
    [{ id: "yogur_griego", amount: 1, unit: "ud", base: true }, { id: "miel", amount: 10, unit: "g" }],
    "lacteo",
    ["Sirve el yogur y pon la miel por encima."]
  ),
  dessert("macedonia", "Macedonia de naranja, manzana y pl\xE1tano", [
    { id: "naranja", amount: 0.5, unit: "ud", base: true },
    { id: "manzana", amount: 0.5, unit: "ud" },
    { id: "platano", amount: 0.5, unit: "ud" }
  ], "fruta", ["Pela y trocea la fruta.", "M\xE9zclala con el zumo de la naranja y sirve fr\xEDa."]),
  dessert("natillas", "Natillas", [{ id: "natillas", amount: 1, unit: "ud", base: true }], "capricho")
];

// scripts/precios/fuentes.ts
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
var UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
var CACHE = join(import.meta.dirname, ".cache");
var BlockedError = class extends Error {
};
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url, accept = "application/json") {
  await mkdir(CACHE, { recursive: true });
  const file = join(CACHE, Buffer.from(url).toString("base64url").slice(0, 200));
  try {
    const cached = JSON.parse(await readFile(file, "utf8"));
    if (Date.now() - cached.at < 12 * 36e5) return cached.body;
  } catch {
  }
  await sleep(400);
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: accept, "Accept-Language": "es-ES" } });
  if (res.status === 401 || res.status === 403 || res.status === 429) throw new BlockedError(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const body = await res.text();
  if (/awsWafCookie|captcha|cf-chl/i.test(body.slice(0, 5e3))) throw new BlockedError(url);
  await writeFile(file, JSON.stringify({ at: Date.now(), body }));
  return body;
}
var decodeEntities = (s) => s.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
var MERCADONA_FOOD = /* @__PURE__ */ new Set([1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 16, 17]);
var mercadonaCatalog;
async function mercadonaAll() {
  if (mercadonaCatalog) return mercadonaCatalog;
  const root = JSON.parse(await get("https://tienda.mercadona.es/api/categories/?lang=es"));
  const out = [];
  for (const top of root.results.filter((c) => MERCADONA_FOOD.has(c.id))) {
    for (const sub of top.categories) {
      const data = JSON.parse(await get(`https://tienda.mercadona.es/api/categories/${sub.id}/?lang=es`));
      for (const p of data.categories.flatMap((c) => c.products)) {
        const pi = p.price_instructions;
        const units = pi.total_units ? `${pi.total_units} ud ` : "";
        out.push({
          name: p.display_name,
          brand: /hacendado|deliplus|bosque verde/i.test(p.display_name) ? "Hacendado" : "",
          price: Number(pi.unit_price),
          sizeText: `${units}${pi.unit_size ?? ""} ${pi.size_format} ${p.packaging ?? ""}`,
          url: p.share_url
        });
      }
    }
  }
  return mercadonaCatalog = out;
}
async function mercadona(_query) {
  return mercadonaAll();
}
async function lidl(query) {
  const url = `https://www.lidl.es/q/api/search?q=${encodeURIComponent(query)}&locale=es_ES&assortment=ES&version=v2.0.0&fetchsize=24`;
  const data = JSON.parse(await get(url));
  return (data.items ?? []).flatMap((it) => {
    const d = it.gridbox?.data;
    if (!d?.fullTitle || !d.price?.price) return [];
    return [{
      name: d.fullTitle,
      brand: d.brand?.name ?? "",
      price: d.price.price,
      sizeText: d.price.packaging?.text ?? d.fullTitle,
      url: `https://www.lidl.es${d.canonicalUrl ?? ""}`
    }];
  });
}
async function eroski(query) {
  const html = await get(`https://supermercado.eroski.es/es/search/results/?q=${encodeURIComponent(query)}`, "text/html");
  const out = [];
  const re = /class="product-title-link" data-metrics="([^"]+)" href="([^"]+)"/g;
  for (const m of html.matchAll(re)) {
    try {
      const item = JSON.parse(decodeEntities(m[1])).ecommerce.items[0];
      out.push({ name: item.item_name, brand: item.item_brand, price: item.price, sizeText: item.item_name, url: m[2].replace(":443", "") });
    } catch {
    }
  }
  return out;
}
async function alcampo(query) {
  const html = await get(`https://www.compraonline.alcampo.es/search?q=${encodeURIComponent(query)}`, "text/html");
  const m = html.match(/window.__INITIAL_STATE__\s*=\s*(\{.*?\})\s*<\/script>/s);
  if (!m) return [];
  const state = JSON.parse(m[1]);
  return Object.values(state.data?.products?.productEntities ?? {}).filter((p) => p.available !== false && p.price?.current?.amount).map((p) => ({
    name: p.name,
    brand: p.brand ?? "",
    price: Number(p.price.current.amount),
    sizeText: p.name,
    url: `https://www.compraonline.alcampo.es/products/${p.retailerProductId}`
  }));
}
var SOURCES = { mercadona, lidl, eroski, alcampo };
var WHITE_LABEL = {
  mercadona: /hacendado/i,
  lidl: /.*/,
  eroski: /^eroski/i,
  alcampo: /producto alcampo|auchan/i
};
function norm(s) {
  return s.toLowerCase().normalize("NFD").replace(new RegExp("\\p{Diacritic}", "gu"), "").replace(/\s+/g, " ").trim();
}

// scripts/precios/productos.ts
var COMMON_NOT = /\b(bio|eco|ecologic|sin lactosa|sin gluten|infantil|gourmet|seleccion|premium)\b/;
var SPECS = {
  cebolla: { q: "cebolla", match: /^cebolla(s)?\b/, not: /roja|morada|tierna|frita|crujiente|caramel|dulce|polvo|deshid|congel|troceada|picada/ },
  ajo: { q: "ajo", match: /^ajos?\b/, not: /negro|tierno|picado|troceado|congel|granulado|polvo|pelado|morado|perejil|aceite|salsa/ },
  tomate: { q: "tomate", match: /^tomate(s)?\b.*(ensalada|pera|redondo|canario|suelto|maduro|rama|granel|kg)/, not: /cherry|frito|triturado|natural|rallado|seco|untar|zumo|gazpacho|kumato|corazon|rosa/ },
  pimiento_rojo: { q: "pimiento rojo", match: /^pimiento(s)? rojo/, not: /asado|piquillo|conserva|tiras|frasco|lata|congel|y verde|tricolor/ },
  pimiento_verde: { q: "pimiento verde", match: /^pimiento(s)? (verde|italiano)/, not: /asado|frito|padron|conserva|congel|y rojo/ },
  calabacin: { q: "calabacin", match: /^calabacin(es)?\b/, not: /espiral|tallar|crema|rallado|troceado/ },
  zanahoria: { q: "zanahoria", match: /^zanahoria(s)?\b/, not: /rallada|baby|mini|bastones|zumo|tiras/ },
  patata: { q: "patata", match: /^patata(s)?\b/, not: /frita|chips|prefrita|congel|tortilla|cocida|baby|mini|nueva|asar|microondas|gajo|guarnicion|lista/ },
  lechuga: { q: "ensalada", match: /^(lechuga|ensalada (mezcla|tierna|variada|4 estaciones|cuatro estaciones|iceberg|batavia|gourmet|verde)|brotes|mezclum|canonigos|cogollos)/, not: /china|mazorquita|cesar|pasta|patata|cous|pollo|atun|quinoa|salsa|alino|kit|completa|perla|vinagreta|arroz|garbanzo|lenteja/ },
  espinacas: { q: "espinacas", match: /^espinaca(s)?\b/, not: /congel|crema|baby.*mezcla|nata|cocida|bechamel|canelon|frasco|lata|conserva/ },
  brocoli: { q: "brocoli", match: /^brocoli\b/, not: /congel|crema|arroz|steam|vapor|microondas|bimi/ },
  champinon: { q: "champinon laminado", match: /champinon(es)?.*laminado|laminado.*champinon/, not: /conserva|lata|frasco|ajillo|congel/ },
  limon: { q: "limon", match: /^limon(es)?\b/, not: /zumo|exprimido|te |helado|yogur|bebida|refresco|galleta|lima/ },
  aguacate: { q: "aguacate", match: /^aguacate(s)?\b/, not: /guacamole|untar|crema|troceado|congel/ },
  berenjena: { q: "berenjena", match: /^berenjena(s)?\b/, not: /crema|rellena|asada|congel|frita|troceada|chips/ },
  pepino: { q: "pepino", match: /^pepino(s)?\b/, not: /encurtido|pepinillo|agridulce|frasco|vinagre|snack|mini|holandes.*pack/ },
  coliflor: { q: "coliflor", match: /^coliflor(es)?\b/, not: /congel|arroz|crema|ramilletes.*vapor|gratinada|bimi/ },
  puerro: { q: "puerro", match: /^puerro(s)?\b/, not: /crema|congel|sopa|deshid/ },
  esparragos: { q: "esparragos verdes", match: /esparrago(s)? (verde(s)?|triguero(s)?)|^trigueros/, not: /blanco|lata|tarro|frasco|crema|congel|conserva|mini|puntas.*lata/ },
  calabaza: { q: "calabaza", match: /^calabaza\b/, not: /crema|pipas|semillas|pure|congel|asada|sopa/ },
  boniato: { q: "boniato", match: /^(boniato|batata)(s)?\b/, not: /chips|frit|congel|pure|asado/ },
  setas: { q: "setas", match: /^setas?\b/, not: /crema|conserva|deshidrat|congel|salteado|ajillo|risotto|caldo|shiitake.*seco/ },
  platano: { q: "platano", match: /^platano(s)?\b|^banana(s)?\b/, not: /macho|frito|chips|seco|deshid|batido|zumo|yogur/ },
  pechuga_pollo: { q: "pechuga pollo filetes", match: /(filete(s)?.*pechuga|pechuga.*filete(s)?|pechuga.*fileteada).*pollo|pollo.*pechuga.*filete/, not: /empanad|rebozad|marinad|adobad|cocida|asada|lonchas|pavo|villaroy|nugget|finas|kebab|cordon|relleno|tacos|tiras|picada/ },
  muslo_pollo: { q: "contramuslo pollo", match: /contramuslo/, not: /empanad|marinad|adobad|asado|kebab|brocheta|relleno|alitas/ },
  pechuga_pavo: { q: "filetes pechuga pavo", match: /(filete(s)?.*pechuga|pechuga.*filete(s)?|pechuga.*fileteada).*pavo|pavo.*pechuga.*filete/, not: /lonchas|fiambre|braseada|asada|cocida|empanad|rebozad|marinad|adobad|ajillo|finas hierbas|kebab|salchicha|hamburguesa|picada/ },
  carne_picada: { q: "carne picada", match: /(picada|picado).*(mixta|cerdo y vacuno|vacuno y cerdo|vacuno.*cerdo)|burger meat mixt/, not: /pollo|pavo|albondiga|hamburguesa|congel|bolonesa|pimiento/ },
  lomo_cerdo: { q: "lomo cerdo filetes", match: /lomo.*(cerdo|filete)|filete.*lomo/, not: /adobad|embuchado|curado|iberico|empanad|marinad|cinta.*adob|asado|loncha|sajonia|cana|relleno|teriyaki|pimenton/ },
  salmon: { q: "salmon lomos", match: /^(lomos?|filetes?|supremas?|rodajas?).*salmon|^salmon (fresco|noruego|lomos?|filete)/, not: /ahumado|lata|tartar|sushi|pate|marinado|nugget|hamburguesa|empanad|surimi|dados|tacos|carpaccio|perlas|untar|crema|ensalada|lasana/ },
  merluza_cong: { q: "merluza congelada", match: /merluza.*(congelad|ultracongelad|medallones|lomos|filetes)|(medallones|lomos|filetes).*merluza/, not: /fingers|bocados|al huevo|romana|empanad|rebozad|varitas|palitos|surimi|gulas|rodaja.*salsa|salsa|en aceite|fresca|hamburguesa|croqueta|pescadilla|lomos de merluza en/ },
  gambas_cong: { q: "gamba pelada", match: /gamba(s)?.*pelada|langostino(s)?.*pelado|cola(s)?.*(gamba|langostino)/, not: /ajillo|cocida|cocido|rebozad|tempura|salsa|empanad|surimi|brocheta|tigre/ },
  bacalao_cong: { q: "bacalao desalado", match: /bacalao.*(desalado|punto de sal)|lomos? de bacalao/, not: /salado.*seco|ajoarriero|croqueta|buñuelo|rebozad|empanad|pil pil|tomate|salsa|ensalada|esqueixada|migas.*lata|al ajillo|vizcaina/ },
  mejillon_cong: { q: "mejillon cocido congelado", match: /mejill(o|ó)n(es)?.*(cocido|congelad|media concha|carne)|carne de mejill/, not: /escabeche|lata|tigre|salsa|vinagreta|picante|conserva|fresco|vivo|en su jugo/ },
  calamar_cong: { q: "calamar congelado", match: /(calamar|pota|sepia).*(troceado|anillas|tiras|limpi|congelad|ultracongelad)|(anillas|tiras).*(calamar|pota)/, not: /romana|rebozad|empanad|tinta|salsa|lata|conserva|americana|ajillo|plancha.*salsa|fresca|surimi|ensalada|huevas|chipiron|patas/ },
  jamon_york: { q: "jamon cocido", match: /(jamon|fiambre).*(cocido|york)/, not: /pavo|pollo|dados|taquitos|tacos|tiras|iberico|serrano|braseado|extra.*maxi/ },
  bacon: { q: "bacon", match: /^bac(o|o)n/, not: /queso|dados|taquito|crujiente|chips|ahumado.*lonchas.*pavo|sabor/ },
  jamon_serrano: { q: "jamon serrano lonchas", match: /jamon (serrano|curado|reserva|gran reserva)/, not: /iberico|bellota|cebo|taco|paleta|cocido|york|pieza|deshuesado|hueso|virutas.*premium/ },
  chorizo: { q: "chorizo", match: /^chorizo\b/, not: /lonchas|loncheado|pavo|vegetal|vegano|iberico|cantimpalo.*sarta|parrilla|fresco|criollo|taquitos|dados|mini|snack|pizza/ },
  salchichas: { q: "salchichas frankfurt", match: /salchicha(s)?.*(frankfurt|cocida)|frankfurt/, not: /pollo y pavo.*queso|queso|vegetal|vegana|cocktail|coctel|mini|bratwurst|ahumada.*xxl/ },
  hamburguesa: { q: "burger meat vacuno", match: /(burger|hamburguesa).*(vacuno|ternera)/, not: /pollo|pavo|vegetal|vegana|mixta|cerdo|queso|picante|congel|smash/ },
  huevo: { q: "huevos", match: /^huevo(s)?\b.*(l|grandes?|medianos?|frescos?|clase)|docena huevos|huevos frescos/, not: /codorniz|cocidos|liquido|clara|camperos|ecolog|gallinas libres de|pasteurizado|chocolate|kinder/ },
  leche: { q: "leche semidesnatada", match: /leche.*semidesnatada/, not: /sin lactosa|calcio|vitamina|condensada|polvo|evaporada|batido|cacao|chocolate|fresas|vainilla|fibra|omega|proteina|soja|avena|almendra|uht.*6|pack|botella 1,5/ },
  yogur_griego: { q: "yogur griego natural", match: /griego/, not: /light|2%|azucarado|edulcorado|fresa|miel|stracciatella|limon|frutos|coco|mango|vainilla|ligero|0%|desnatado|cremoso con|tarrina|bebible|sabor|kefir|chocolate|nuez/ },
  queso_rallado: { q: "queso rallado", match: /queso.*rallado|rallado.*queso/, not: /mozzarella|parmesano|grana|polvo|vegano|light|fundir.*pizza|4 quesos|cuatro quesos|emmental.*tacos/ },
  mozzarella: { q: "mozzarella rallada", match: /(mozzarella.*rallad|rallad.*mozzarella|rallado.*pizza)/, not: /fresca|bola|bufala|light|vegano|perlas|palitos|minis|barra|bocaditos|bites/ },
  queso_lonchas: { q: "queso lonchas", match: /queso.*lonchas|lonchas.*queso/, not: /fundido|light|vegano|tierno.*curado|pavo|curado|oveja|cabra|ahumado|azul|brie|havarti|maasdam/ },
  queso_fresco: { q: "queso fresco batido", match: /^queso (fresco )?batido/, not: /fresa|frutas|edulcorado|vainilla|proteina.*sabor|mango|limon|stracciatella/ },
  queso_cabra: { q: "rulo queso cabra", match: /rulo.*cabra|cabra.*rulo|queso.*cabra.*(rulo|tierno|fresco)/, not: /curado|semicurado|leche de cabra(?!.*rulo)|untar|cremoso.*tarrina|rallado|azul|miel/ },
  nata_cocinar: { q: "nata cocinar", match: /nata.*cocinar|cocinar.*nata/, not: /vegetal|soja|avena|sin lactosa|ligera|setas|trufa|queso|vegana|15|5%/ },
  mantequilla: { q: "mantequilla", match: /^mantequilla/, not: /sal|ajo|untable|ligera|light|margarina|cacahuete|almendra|clarificada|ghee|hierbas|galleta|mantecado|bollo|croissant/ },
  arroz: { q: "arroz redondo", match: /arroz.*redondo/, not: /integral|vasito|vaso|cocido|microondas|bomba|sos|ecolog|1 kg x|vaporizado|mediterraneo.*pack/ },
  arroz_basmati: { q: "arroz basmati", match: /basmati/, not: /integral|vasito|vaso|cocido|microondas|brown|mix|tres|salvaje|quinoa/ },
  pasta: { q: "macarrones", match: /^(macarron(es)?|espagueti(s)?|spaghetti|plumas|penne|helices)\b/, not: /integral|sin gluten|lenteja|garbanzo|guisante|fresco|rellen|bolonesa|carbonara|queso|atun|bandeja|gratinad|mini|nº|n\. ?0|5 cereales|tricolor|espelta/ },
  lentejas: { q: "lentejas cocidas", match: /lenteja(s)?.*cocida|cocida.*lenteja/, not: /chorizo|verdura(s)?.*con|estofada|guisada|preparada|ensalada|plato|riojana|pardina.*seca/ },
  garbanzos: { q: "garbanzos cocidos", match: /garbanzo(s)?.*cocido|cocido.*garbanzo/, not: /espinaca|chorizo|verdura|preparado|ensalada|hummus|plato|madrileno|callos/ },
  alubias: { q: "alubia blanca cocida", match: /alubia(s)?.*(cocida|blanca)|judion(es)?.*cocido/, not: /chorizo|fabada|verdura|preparada|plato|roja|pinta|ensalada|riojana/ },
  tomate_triturado: { q: "tomate triturado", match: /tomate.*triturado|triturado.*tomate/, not: /albahaca|ajo|cebolla|oregano|bio|ecolog|tropezones|piel|hierbas/ },
  tomate_frito: { q: "tomate frito", match: /tomate frito/, not: /albahaca|cebolla|ajo|picante|sin azucar|casero|ecolog|bio|0%|light|estilo|receta|gourmet|oliva virgen|8 x|brik.*3/ },
  atun: { q: "atun aceite girasol", match: /atun.*aceite|atun claro/, not: /oliva virgen|escabeche|natural|tomate|bonito|ventresca|picante|ensalada|pate|lomos|migas|ahumado|mayonesa|sin sal|limon/ },
  sardinas: { q: "sardinas aceite", match: /sardina(s|illas)?.*aceite/, not: /tomate|escabeche|picante|limon|sin piel.*limon|pack 6|frescas|pate/ },
  piquillos: { q: "pimientos piquillo", match: /piquillo/, not: /relleno|crema|salsa|lodosa.*extra.*400|confitado|caramelizado|tiras/ },
  maiz: { q: "maiz dulce", match: /maiz.*(dulce|grano|cocido)/, not: /palomitas|tortilla|harina|mazorca|copos|fritos|tostado|nachos|crema|pollo|ensalada|congel|aceite/ },
  caldo_pollo: { q: "caldo pollo", match: /caldo.*pollo/, not: /pastilla|cubito|tableta|polvo|concentrado|sin sal|bajo en sal|ecolog|bio|casero.*verdura|jamon|cocido|ave.*verdura|gallina.*fideo|fideos|sopa/ },
  harina: { q: "harina trigo", match: /harina.*trigo|harina de trigo|^harina\b/, not: /integral|fuerza|reposteria|bizcocho|maiz|garbanzo|arroz|avena|espelta|sin gluten|fritos|freir|rebozar|tempura|centeno|almendra|levadura/ },
  cuscus: { q: "cuscus", match: /^(cuscus|cous ?cous)\b/, not: /integral|preparado|verduras|ensalada|perlas|quinoa|vasito|sabor/ },
  pan_rallado: { q: "pan rallado", match: /^pan rallado/, not: /ajo|perejil|sin gluten|panko|integral|tempura/ },
  avena: { q: "copos avena", match: /^copos (finos |suaves |integrales )*de avena|^avena en copos/, not: /chocolate|miel|frutas|integral.*sin|sin gluten|crunchy|granola|muesli|bebida|bio|ecolog|fina.*instant|bizcocho|galleta|tortitas/ },
  tortilla_trigo: { q: "tortillas trigo", match: /tortilla(s)?.*(trigo|wrap)|wrap(s)?.*trigo|tortitas.*trigo/, not: /integral|maiz|espinaca|tomate|mini|nachos|chips|sin gluten|avena|proteina|kit|fajita.*kit|burrito.*kit|xxl|bajas/ },
  masa_pizza: { q: "masa pizza", match: /masa.*pizza|base.*pizza/, not: /integral|sin gluten|congelada|harina|preparado|espelta|kit|mini|coliflor|calabacin|preparada con|rectangular.*tomate/ },
  pan_hamburguesa: { q: "pan hamburguesa", match: /pan.*(hamburguesa|burger)|burger.*bun/, not: /integral|sin gluten|nutrifree|brioche.*mini|mini|perrito|hot dog|sesamo negro|cereales|xxl|xl|maxi|sin corteza/ },
  pan_molde: { q: "pan molde integral", match: /pan.*molde/, not: /sin gluten|sin corteza|brioche|mini|tostado|blanco|centeno|espelta|semillas|proteinas|avena|multicereal|sin azucar|leche/ },
  patatas_cong: { q: "patatas prefritas", match: /patata(s)?.*(prefrita|corte|congelada|airfryer|horno|gajo|bastones|fritas congel)/, not: /deluxe|especiada|ajo|queso|bravas|panaderia|dados|paja|chips|bolsa.*snack|rejilla|onduladas|rustica|sazonadas/ },
  guisantes_cong: { q: "guisantes congelados", match: /guisante(s)?/, not: /lata|conserva|tarro|frasco|tierno.*jamon|jamon|zanahoria|ecolog|bio|menestra|harina|snack|tostado|wasabi|lagrima/ },
  judias_verdes_cong: { q: "judia verde congelada", match: /judia(s)? verde(s)?.*(congelad|ultracongelad|plana|redonda)/, not: /conserva|tarro|lata|salteado|con patata|fresca/ },
  salteado_verduras_cong: { q: "salteado verduras", match: /(salteado|wok|menestra|verduras).*(verdura|congel|wok|salteado)/, not: /quinoa|cuscus|pollo|gamba|arroz|tallarines|fideos|langostino|ternera|setas|champinon|asadas|soja.*salsa|fresca|lata|conserva|crema|caldo|carne|bacalao|pasta|asadas.*bandeja/ },
  aceite_oliva: { q: "aceite oliva", match: /^aceite (de )?oliva/, not: /virgen|orujo|spray|girasol|sabor|0,4|intenso|garrafa.*5|5 l/ },
  vinagre: { q: "vinagre", match: /^vinagre (de )?(vino|manzana|jerez)/, not: /modena|balsamico|crema|reserva|spray/ },
  sal: { q: "sal fina", match: /^sal\b.*(fina|mesa|marina)/, not: /escamas|gruesa|ajo|yodada.*potasio|baja|hierbas|himalaya|rosa|maldon|negra|apio|nitrificada/ },
  pimienta: { q: "pimienta negra molida", match: /pimienta negra.*molida|pimienta molida/, not: /grano|blanca|limon|mezcla|cuatro|4 pimientas|molinillo|rosa|cayena/ },
  pimenton: { q: "pimenton dulce", match: /pimenton.*dulce|pimenton$/, not: /picante|ahumado|agridulce|vera/ },
  oregano: { q: "oregano", match: /^oregano/, not: /aceite|picante|tomate|mezcla|pizza.*hierbas/ },
  comino: { q: "comino molido", match: /comino/, not: /grano|semilla|entero|negro/ },
  curry: { q: "curry", match: /^curry|curry.*(polvo|molido|especia)/, not: /salsa|pollo|pasta|verde|rojo|thai|plato|arroz|leche coco|madras.*salsa|ketchup|mayonesa|frasco.*salsa/ },
  salsa_soja: { q: "salsa soja", match: /salsa.*soja|soja.*salsa/, not: /sin sal|baja|reducida|dulce|teriyaki|agridulce|sin gluten|tamari|light|0%|ajo|jengibre|setas|limon|wok/ },
  mayonesa: { q: "mayonesa", match: /^mayonesa/, not: /light|ligera|sin huevo|vegana|ajo|lima|kimchi|chipotle|wasabi|trufa|alioli|sriracha|limon|0%|mostaza|sabor|picante|cebolla|ketchup|aguacate|bocabajo.*light|sin azucar|huevo cocido/ },
  ketchup: { q: "ketchup", match: /^ketchup/, not: /light|ligero|sin azucar|picante|barbacoa|chipotle|curry|0%|reducido|bajo|mostaza|mayonesa/ },
  leche_coco: { q: "leche coco", match: /^(leche de coco|leche coco|crema de coco)/, not: /gel|champu|corporal|bebida|light|ligera|chocolate|sin azucar|yogur|postre|helado|vaso|chupito|sabor|batido/ },
  miel: { q: "miel", match: /^miel/, not: /mostaza|cana|limon|jengibre|eucalipto|propoleo|caramelo|cereales|yogur|galleta|salsa|crema|azahar|romero|brezo|manuka|tomillo|bosque|bocabajo.*mini|monodosis/ },
  // Ingredientes de las recetas fitness (07-11-2026).
  claras_huevo: { q: "claras de huevo", match: /^claras?( de huevo)?\b/, not: /polvo|cocid|tortilla|merengue/ },
  tofu: { q: "tofu", match: /^tofu\b/, not: /ahumado|marinado|sedoso|seda|frito|hamburguesa|salchicha|especiado|curry|teriyaki/ },
  requeson: { q: "requeson", match: /^requeson\b/, not: /miel|postre|dulce/ },
  kefir: { q: "kefir", match: /^kefir\b/, not: /sabor|fresa|frutos|mango|vainilla|bebible.*sabor|desnatado.*sabor|cabra|oveja/ },
  bebida_soja: { q: "bebida soja", match: /^bebida (de )?soja/, not: /chocolate|cacao|vainilla|calcio.*sabor|cafe|fresa|batido|edulcorada|azucarada|original|clasica/ },
  ternera_filete: { q: "filete ternera", match: /^filete(s)?( fino(s)?)? (de )?(ternera|añojo|anojo)/, not: /empanad|picad|hamburguesa|lomo|solomillo|entrecot|marinad|vacuno.*(mayor|buey)/ },
  fiambre_pavo: { q: "pechuga pavo lonchas", match: /^(pechuga|fiambre) de pavo/, not: /braseada.*finas hierbas|ahumada|trufa|queso|tacos|dados|sandwich/ },
  atun_natural: { q: "atun natural", match: /^atun.*natural/, not: /aceite|escabeche|tomate|ventresca|bonito|ensalada|light.*aceite/ },
  quinoa: { q: "quinoa", match: /^quinoa\b/, not: /cocida|vasito|ensalada|copos|hinchada|harina|tricolor|roja|negra|microondas|lista/ },
  arroz_integral: { q: "arroz integral", match: /^arroz.*integral/, not: /vasito|microondas|cocido|basmati|tortitas|redondo.*vaporizado|bebida|salvaje|largo vaporizado/ },
  pasta_integral: { q: "pasta integral", match: /(macarron|espaguet|spaghetti|penne|fusilli|plum|tallar|hélice|helice).*integral/, not: /fresca|rellena|sin gluten|lenteja|garbanzo/ },
  almendras: { q: "almendra natural", match: /^almendra(s)?\b/, not: /frita|tostada.*sal|salada|chocolate|garrapiñ|garrapin|laminada|molida|bebida|harina|crema|marcona.*frita|caramel|miel/ },
  nueces: { q: "nuez pelada", match: /^nue(z|ces)\b/, not: /macadamia|pecana|brasil|anacardo|moscada|cascara|garrapiñ|caramel|mezcla|cocktail|coctel|india/ },
  crema_cacahuete: { q: "crema cacahuete", match: /^crema de cacahuete/, not: /chocolate|cacao|caramel|miel|azucar|crunchy.*miel/ },
  sesamo: { q: "sesamo", match: /^(semillas? de )?sesamo\b/, not: /aceite|negro|tostado.*salsa|barrita|pan|tahin|galleta|mezcla/ },
  arandanos: { q: "arandanos", match: /^arandano(s)?\b/, not: /deshidrat|seco|rojo|congel|zumo|mermelada|yogur|cranberr/ },
  rucula: { q: "rucula", match: /^rucula\b/, not: /mezcla.*canon|pesto|pizza/ },
  mango: { q: "mango", match: /^mango(s)?\b/, not: /troceado|dados|deshidrat|zumo|bebida|nectar|congel|mermelada|chutney|batido|yogur|laminas|vaso/ },
  pina: { q: "pi\xF1a", match: /^pi[nñ]a\b/, not: /troceada|rodajas|almibar|zumo|lata|deshidrat|colada|nectar|mini|vaso|tarrina|cortada/ },
  canela: { q: "canela molida", match: /canela.*molida|molida.*canela/, not: /rama|azucar|galleta|infusion|te\b|leche/ }
};

// scripts/precios/actualizar.ts
function parseSize2(text) {
  const t = norm(text).replace(/(\d),(\d)/g, "$1.$2");
  const size = {};
  const multi = t.match(/(\d+)\s*x\s*(\d+(?:\.\d+)?)\s*(kg|grs?|g|ml|cl|l)\b/);
  const single = t.match(/(\d+(?:\.\d+)?)\s*(kg|kilos?|grs?|gramos|g|ml|cl|litros?|l)\b/);
  const factor = (u) => u.startsWith("k") ? 1e3 : u === "cl" ? 10 : u.startsWith("l") ? 1e3 : 1;
  if (multi) size.weight = Number(multi[1]) * Number(multi[2]) * factor(multi[3]);
  else if (single) size.weight = Number(single[1]) * factor(single[2]);
  const count = t.match(/(\d+)\s*(ud|uds|unidades|unid|u|huevos|piezas|rebanadas|tortillas|panes|burgers?|hamburguesas)\b/);
  if (count) size.count = Number(count[1]);
  else if (/docena/.test(t)) size.count = 12;
  else if (multi) size.count = Number(multi[1]);
  return size;
}
function packIn(ing, s) {
  if (ing.unit === "ud") {
    if (s.count) return s.count;
    if (s.weight && ing.unitWeight) return Math.round(s.weight / ing.unitWeight * 10) / 10;
    return void 0;
  }
  if (s.weight) return s.weight;
  if (s.count && ing.unitWeight) return s.count * ing.unitWeight;
  return void 0;
}
function pick(ing, chain, cands) {
  const spec = SPECS[ing.id];
  const ok = cands.filter((c) => c.price > 0).filter((c) => spec.match.test(norm(c.name)) && !spec.not?.test(norm(c.name)) && !COMMON_NOT.test(norm(c.name))).map((c) => ({ c, pack: packIn(ing, parseSize2(c.sizeText)) })).filter((x) => !!x.pack && x.pack > 0);
  if (ok.length === 0) return void 0;
  const within = (lo, hi) => ok.filter((x) => x.pack / ing.pack >= lo && x.pack / ing.pack <= hi);
  const tight = within(0.5, 2);
  const loose = within(0.3, 3);
  const pool = tight.length ? tight : loose.length ? loose : ok;
  const white = pool.filter((x) => WHITE_LABEL[chain].test(`${x.c.brand} ${x.c.name}`));
  const best = (white.length ? white : pool).sort((a, b) => a.c.price / a.pack - b.c.price / b.pack)[0];
  return { product: best.c.name, price: best.c.price, pack: best.pack, url: best.c.url };
}
async function main() {
  const chains = Object.keys(SOURCES);
  const out = { mercadona: {}, lidl: {}, eroski: {}, alcampo: {} };
  const missing = {};
  const blocked = /* @__PURE__ */ new Set();
  for (const ing of INGREDIENTS) {
    const spec = SPECS[ing.id];
    if (!spec) {
      console.warn(`Sin b\xFAsqueda definida para ${ing.id}`);
      continue;
    }
    for (const chain of chains) {
      if (blocked.has(chain)) {
        (missing[chain] ??= []).push(ing.id);
        continue;
      }
      try {
        const found = pick(ing, chain, await SOURCES[chain](spec.q));
        if (found) out[chain][ing.id] = found;
        else (missing[chain] ??= []).push(ing.id);
      } catch (e) {
        (missing[chain] ??= []).push(ing.id);
        if (e instanceof BlockedError) {
          blocked.add(chain);
          console.warn(`${chain}: la web bloquea consultas autom\xE1ticas; se estimar\xE1 con el \xEDndice OCU.`);
        } else console.warn(`${chain} ${ing.id}: ${e.message}`);
      }
    }
    const line = chains.map((c) => out[c][ing.id] ? `${c} ${out[c][ing.id].price}\u20AC/${out[c][ing.id].pack}${ing.unit}` : `${c} \u2014`).join(" \xB7 ");
    console.log(`${ing.id.padEnd(24)} ${line}`);
  }
  const file = process.env.PRECIOS_OUT ?? join2(import.meta.dirname, "../../packages/core/src/data/prices.json");
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  let kept = 0;
  try {
    const prev = JSON.parse(await readFile2(file, "utf8"));
    for (const chain of chains) {
      for (const [id, p] of Object.entries(prev.web?.[chain] ?? {})) {
        if (out[chain][id]) continue;
        const seen = p.seen ?? "2026-10-30";
        if ((Date.parse(today) - Date.parse(seen)) / 864e5 > 56) continue;
        out[chain][id] = { ...p, seen };
        kept++;
      }
    }
  } catch {
  }
  for (const chain of chains) for (const p of Object.values(out[chain])) p.seen ??= today;
  console.log(`Precios anteriores conservados: ${kept}`);
  const reference = {};
  for (const ing of INGREDIENTS) {
    const perUnit = chains.flatMap((c) => {
      const p = out[c][ing.id];
      return p ? [p.price / p.pack / (CHAIN_INDEX[c] / 100)] : [];
    });
    if (perUnit.length) reference[ing.id] = Math.round(perUnit.reduce((a, b) => a + b, 0) / perUnit.length * 1e6) / 1e6;
  }
  await writeFile2(
    file,
    JSON.stringify({ updatedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), web: out, blocked: [...blocked], reference, missing }, null, 1) + "\n"
  );
  const total = chains.map((c) => `${c}: ${Object.keys(out[c]).length}/${INGREDIENTS.length}`).join(", ");
  console.log(`
Guardado ${file}
${total}`);
}
await main();
export {
  parseSize2 as parseSize
};
