/* =====================================================
   KPRICHITOS · Ofertas
   -----------------------------------------------------
   Cada oferta es un PAR:
     - cara   : producto caro (izquierda)
     - barata : producto barato (derecha)
   Se muestran siempre de dos en dos.

   IMPORTANTE: Las ofertas SIEMPRE son en USD.
   No tienen selector de moneda.
   ===================================================== */

const OFERTAS = [
  {
    id: 'par-001',
    cara: {
      id: 'of-001',
      precio: 15,
      imagen: 'img/ofertas/ofertC1.jpg',
      nueva: false,
      agotada: false
    },
    barata: {
      id: 'of-002',
      precio: 5,
      imagen: 'img/ofertas/ofertB1.jpg',
      nueva: true,
      agotada: false
    }
  },
  {
    id: 'par-002',
    cara: {
      id: 'of-003',
      precio: 25,
      imagen: 'img/ofertas/OfertC2.jpg',
      nueva: false,
      agotada: false
    },
    barata: {
      id: 'of-004',
      precio: 8,
      imagen: 'img/ofertas/ofertB2.jpg',
      nueva: false,
      agotada: false
    }
  },
  {
    id: 'par-003',
    cara: {
      id: 'of-005',
      precio: 32,
      imagen: 'img/ofertas/ofertC3.jpg',
      nueva: false,
      agotada: false
    },
    barata: {
      id: 'of-006',
      precio: 12,
      imagen: 'img/ofertas/ofertB3.jpg',
      nueva: false,
      agotada: false
    }
  },
  {
    id: 'par-004',
    cara: {
      id: 'of-007',
      precio: 25,
      imagen: 'img/ofertas/ofertC4.jpg',
      nueva: false,
      agotada: false
    },
    barata: {
      id: 'of-008',
      precio: 8,
      imagen: 'img/ofertas/ofertB4.jpg',
      nueva: false,
      agotada: false
    }
  },
  {
    id: 'par-005',
    cara: {
      id: 'of-009',
      precio: 25,
      imagen: 'img/ofertas/OfertC5.jpg',
      nueva: false,
      agotada: false
    },
    barata: {
      id: 'of-010',
      precio: 8,
      imagen: 'img/ofertas/ofertB5.jpg',
      nueva: false,
      agotada: false
    }
  },
  {
    id: 'par-006',
    cara: {
      id: 'of-011',
      precio: 25,
      imagen: 'img/ofertas/OfertC6.jpg',
      nueva: false,
      agotada: false
    },
    barata: {
      id: 'of-012',
      precio: 8,
      imagen: 'img/ofertas/ofertB6.jpg',
      nueva: false,
      agotada: false
    }
  },
  {
    id: 'par-007',
    cara: {
      id: 'of-013',
      precio: 25,
      imagen: 'img/ofertas/OfertC7.jpg',
      nueva: false,
      agotada: false
    },
    barata: {
      id: 'of-014',
      precio: 8,
      imagen: 'img/ofertas/ofertB7.jpg',
      nueva: false,
      agotada: false
    }
  },
];
