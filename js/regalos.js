/* =====================================================
   KPRICHITOS · Regalos
   -----------------------------------------------------
   Agrega o edita productos aquí. Cada producto debe
   estar separado por coma. No olvides la coma después
   del último campo de cada objeto excepto el último.

   Campo `categoria` (opcional):
     · Solo para agrupar visualmente. No se muestra.
     · Si lo omites, el producto cae en "Otros".

   Campo `productoMadre` (opcional):
     · Agrupa varios productos en un carrusel horizontal
       con divisor. Ej: productoMadre: 'Cestas'.
   ===================================================== */

PRODUCTOS.regalos = [
  {
    id: 'reg-001',
    nombre: 'Brochas de Maquillaje',
    categoria: 'belleza',
    precioCUP: 3700,
    imagen: 'img/regalos/brochasMaquillaje.jpg',
    nuevo: true,
    agotado: false
  },
  {
    id: 'reg-002',
    nombre: 'Chupón para Bebé',
    categoria: 'bebes',
    precioCUP: 1500,
    imagen: 'img/regalos/chuponBebe.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-003',
    nombre: 'Jarras Personalizada',
    categoria: 'hogar',
    precioCUP: 3000,
    imagen: 'img/regalos/jarrasPersonalizadas.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-004',
    nombre: 'Juguetes para Bebé',
    categoria: 'bebes',
    precioCUP: 3000,
    imagen: 'img/regalos/jugueteBebe.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-005',
    nombre: 'Perfumes de Hombre y de Mujer',
    categoria: 'belleza',
    precioCUP: 4,                            // ⚠️ REVISAR — era 4 USD (≈ 2800 CUP)
    imagen: 'img/regalos/perfumes.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-006',
    nombre: 'Cesta de Regalos',
    categoria: 'cestas',
    precioCUP: 12000,
    imagen: 'img/regalos/regalo1.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-007',
    nombre: 'Cesta de Regalos',
    categoria: 'cestas',
    precioCUP: 12000,
    imagen: 'img/regalos/regalo2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-008',
    nombre: 'Cesta de Regalos',
    categoria: 'cestas',
    precioCUP: 8000,
    imagen: 'img/regalos/regalo3.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-009',
    nombre: 'Cesta de Regalos',
    categoria: 'cestas',
    precioCUP: 12000,
    imagen: 'img/regalos/regalo4.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-010',
    nombre: 'Ropa y Mantas para Bebé',
    categoria: 'bebes',
    precioCUP: 1,                            // ⚠️ REVISAR — es muy bajo
    imagen: 'img/regalos/ropaMantaBebe.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-011',
    nombre: 'Set de Cuidado para Bebé',
    categoria: 'bebes',
    precioCUP: 5000,
    imagen: 'img/regalos/setCuidadoBebe.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-012',
    nombre: 'Vasos Plásticos para Bebé',
    categoria: 'hogar',
    precioCUP: 1500,
    imagen: 'img/regalos/termosAgua.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-013',
    nombre: 'Velas Aromáticas',
    categoria: 'hogar',
    precioCUP: 600,
    imagen: 'img/regalos/velasAromaticas.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'reg-014',
    nombre: 'Portaminas con Diseños',
    categoria: 'regalo',
    precioCUP: 500,
    imagen: 'img/regalos/portaminas.jpg',
    nuevo: false,
    agotado: false
  }
];