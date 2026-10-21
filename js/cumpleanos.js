/* =====================================================
   KPRICHITOS · Artículos de Cumpleaños
   -----------------------------------------------------
   Agrega o edita productos aquí. Cada producto debe
   estar separado por coma. No olvides la coma después
   del último campo de cada objeto excepto el último.

   Campo `categoria` (opcional):
     · Solo para agrupar visualmente. No se muestra.
     · Si lo omites, el producto cae en "Otros".

   Campo `productoMadre` (opcional):
     · Agrupa varios productos en un carrusel horizontal
       con divisor. Ej: productoMadre: 'Globos'.
   ===================================================== */

PRODUCTOS.cumpleanos = [
  {
    id: 'cum-001',
    nombre: 'Adornos para el Kake',
    categoria: 'decoracion',
    precioCUP: 1000,
    imagen: 'img/cumpleanos/adornoKake.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-002',
    nombre: 'Adornos de Pastel para Niña. Cintillo y Barita',
    categoria: 'decoracion',
    precioCUP: 4200,
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/adornosPastel.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-003',
    nombre: 'Alfileres. Decoración para Baby Showers',
    categoria: 'baby shower',
    precioCUP: 1500,
    imagen: 'img/cumpleanos/alfileres.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-004',
    nombre: 'Banderín de Cumpleaños',
    categoria: 'banderines',
    precioCUP: 1600,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Antes era -$1 USD. Ajusta el valor en CUP.
    imagen: 'img/cumpleanos/banderin.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-005',
    nombre: 'Banner para Baby Showers',
    categoria: 'baby shower',
    precioCUP: 3000,
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/bannerBabySh.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-006',
    nombre: 'Set de Globos',
    categoria: 'globos',
    precioCUP: 3000,
    imagen: 'img/cumpleanos/banderinesMixtos.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-007',
    nombre: 'Banderines de Feliz Cumpleaños',
    categoria: 'banderines',
    precioCUP: 2500,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/banderinHappyB.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-008',
    nombre: 'Bolsa de Sorpresas de Capibara',
    categoria: 'bolsas',
    precioCUP: 800,
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/bolsaCapibara.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-009',
    nombre: 'Bolsas de Regalos para Cumpleaños',
    categoria: 'bolsas',
    precioCUP: 1500,
    imagen: 'img/cumpleanos/bolsaGift.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-010',
    nombre: 'Bolsitas de Regalos',
    categoria: 'bolsas',
    precioCUP: 1500,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/bolsaGift2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-011',
    nombre: 'Bolsa de Regalos de Dragon Ball',
    categoria: 'bolsas',
    precioCUP: 800,
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/bolsaGoku.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-012',
    nombre: 'Bolsa de Regalos de La Granja',
    categoria: 'bolsas',
    precioCUP: 800,
    imagen: 'img/cumpleanos/bolsaGranja.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-013',
    nombre: 'Bolsa de Regalos de Masha y el Oso',
    categoria: 'bolsas',
    precioCUP: 800,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/bolsaMasha.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-014',
    nombre: 'Calcomanías para Baby Showers',
    categoria: 'baby shower',
    precioCUP: 10,                          // ⚠️ REVISAR — es muy bajo para CUP
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/calcomaniaBabySh.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-015',
    nombre: 'Confeti Shooter',
    categoria: 'decoracion',
    precioCUP: 2000,
    imagen: 'img/cumpleanos/confetiShooter.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-016',
    nombre: 'Cortinas de Colores para Cumpleaños',
    categoria: 'decoracion',
    precioCUP: 1600,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/corfinas.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-017',
    nombre: 'Globos para Baby Showers',
    categoria: 'baby shower',
    precioCUP: 4,                           // ⚠️ REVISAR — es muy bajo para CUP
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/globosBabySh.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-018',
    nombre: 'Globos de Foil',
    categoria: 'globos',
    precioCUP: 2500,
    imagen: 'img/cumpleanos/globosFoil.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-019',
    nombre: 'Globos de Números. Dorados y Plateados',
    categoria: 'globos',
    precioCUP: 1000,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/globosNum.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-020',
    nombre: 'Lazos para Baby Showers',
    categoria: 'baby shower',
    precioCUP: 1500,
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/lazosBabySh.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-021',
    nombre: 'Ligas para Baby Showers',
    categoria: 'baby shower',
    precioCUP: 350,
    imagen: 'img/cumpleanos/ligas.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-022',
    nombre: 'Manteles para Cumpleaños',
    categoria: 'decoracion',
    precioCUP: 1500,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/mantelesCumple.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-023',
    nombre: 'Moños para Baby Showers',
    categoria: 'baby shower',
    precioCUP: 1500,
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/monosBabySh.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-024',
    nombre: 'Piñata para Fiestas. Among Us',
    categoria: 'pinatas',
    precioCUP: 2500,
    imagen: 'img/cumpleanos/pinataAmongUs.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-025',
    nombre: 'Piñata para Fiestas. La Granja',
    categoria: 'pinatas',
    precioCUP: 2500,
    imagen: 'img/cumpleanos/pinataGranja.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-026',
    nombre: 'Piñata para Fiestas. Jurassic World',
    categoria: 'pinatas',
    precioCUP: 2500,
    imagen: 'img/cumpleanos/pinataJurassicW.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-027',
    nombre: 'Piñata para Fiestas. Miraculous',
    categoria: 'pinatas',
    precioCUP: 2500,
    imagen: 'img/cumpleanos/pinataMiraculous.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-028',
    nombre: 'Set de Cumpleaños del Real Madrid',
    categoria: 'sets',
    precioCUP: 7000,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/setCumpleRM.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-029',
    nombre: 'Vasos de Cumpleaños',
    categoria: 'vasos',
    precioCUP: 2500,
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/vasosCumple.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-030',
    nombre: 'Vasos de Cumpleaños',
    categoria: 'vasos',
    precioCUP: 1500,
    rebaja: { tipo: 'porcentaje', valor: 10 },
    imagen: 'img/cumpleanos/vasosCumple2.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'cum-031',
    nombre: 'Velas para Momentos Especiales',
    categoria: 'velas',
    precioCUP: 360,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/velasEspeciales.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-032',
    nombre: 'Velas para Pastel',
    categoria: 'velas',
    precioCUP: 900,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/velasKake.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-033',
    nombre: 'Velas de Número',
    categoria: 'velas',
    precioCUP: 900,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/velasNum.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-034',
    nombre: 'Velas con Diseño para Cumpleaños',
    categoria: 'velas',
    precioCUP: 1600,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/velasToys.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'cum-035',
    nombre: 'Velas con Diseño para Cumpleaños',
    categoria: 'velas',
    precioCUP: 1600,
    rebaja: { tipo: 'efectivo', valor: 1 },  // ⚠️ Ajustar en CUP
    imagen: 'img/cumpleanos/velasToysF.jpg',
    nuevo: false,
    agotado: false
  }
];