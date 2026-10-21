/* =====================================================
   KPRICHITOS · Juguetes
   -----------------------------------------------------
   Agrega o edita productos aquí. Cada producto debe
   estar separado por coma. No olvides la coma después
   del último campo de cada objeto excepto el último.

   Campo `categoria` (opcional):
     · Solo para agrupar visualmente. No se muestra.
     · Si lo omites, el producto cae en "Otros".

   Campo `productoMadre` (opcional):
     · Agrupa varios productos en un carrusel horizontal
       con divisor. Ej: productoMadre: 'Jeeps'.
   ===================================================== */

PRODUCTOS.juguetes = [
  {
    id: 'jug-001',
    nombre: 'Camión Mezcladora Realista',
    categoria: 'vehiculos',
    precioCUP: 18000,
    rebaja: { tipo: 'porcentaje', valor: 15 },
    imagen: 'img/juguetes/truck.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-002',
    nombre: 'Set de Tren de Avengers',
    categoria: 'vehiculos',
    precioCUP: 4000,
    rebaja: { tipo: 'efectivo', valor: 2 },  // ⚠️ Ajustar en CUP
    imagen: 'img/juguetes/trainAvenger.jpg',
    nuevo: false,
    agotado: true
  },
  {
    id: 'jug-003',
    nombre: 'Mochila de Toad',
    categoria: 'mochilas',
    precioCUP: 5000,
    imagen: 'img/juguetes/toadBag.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-004',
    nombre: 'Set de Figuras de Acción de Super Héroes',
    categoria: 'figuras',
    precioCUP: 5000,
    rebaja: { tipo: 'porcentaje', valor: 15 },
    imagen: 'img/juguetes/setSuperHero.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-005',
    nombre: 'Set de Maquillaje para Niñas',
    categoria: 'sets',
    precioCUP: 1600,
    rebaja: { tipo: 'efectivo', valor: 2 },  // ⚠️ Ajustar en CUP
    imagen: 'img/juguetes/setMaquillaje.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-006',
    nombre: 'Set de Bloques y Figuras',
    categoria: 'bloques',
    precioCUP: 880,
    imagen: 'img/juguetes/setBloquesFiguras.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-007',
    nombre: 'Set de Figuras de Avenger',
    categoria: 'figuras',
    precioCUP: 4000,
    rebaja: { tipo: 'porcentaje', valor: 15 },
    imagen: 'img/juguetes/setAvenger.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-008',
    nombre: 'Perrito de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 5000,
    rebaja: { tipo: 'efectivo', valor: 2 },  // ⚠️ Ajustar en CUP
    imagen: 'img/juguetes/perritoPeluche.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-009',
    nombre: 'Osito de Peluche de Color Rojo',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 5000,
    imagen: 'img/juguetes/osoPelucheRojo.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-010',
    nombre: 'Osito de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 10000,
    rebaja: { tipo: 'porcentaje', valor: 15 },
    imagen: 'img/juguetes/osoPelucheN.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-011',
    nombre: 'Peluche de Mickey Mouse',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 12000,
    rebaja: { tipo: 'efectivo', valor: 2 },  // ⚠️ Ajustar en CUP
    imagen: 'img/juguetes/mickey.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-012',
    nombre: 'Llaveros y Monederos se Stitch',
    categoria: 'llaveros',
    precioCUP: 1,                            // ⚠️ REVISAR — es muy bajo
    imagen: 'img/juguetes/llaveroMonederoStitch.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-013',
    nombre: 'Jeep Todoterreno de Spider-Man',
    categoria: 'vehiculos',
    productoMadre: 'Control Remoto',
    precioCUP: 19000,
    rebaja: { tipo: 'porcentaje', valor: 15 },
    imagen: 'img/juguetes/jeepSpider.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-014',
    nombre: 'Jeep Todoterreno de Hulk',
    categoria: 'vehiculos',
    productoMadre: 'Control Remoto',
    precioCUP: 19000,
    rebaja: { tipo: 'efectivo', valor: 2 },  // ⚠️ Ajustar en CUP
    imagen: 'img/juguetes/jeepHulk.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-015',
    nombre: 'Jeep Todoterreno de Iron-Man',
    categoria: 'vehiculos',
    productoMadre: 'Control Remoto',
    precioCUP: 19000,
    imagen: 'img/juguetes/jeepIronMan.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-016',
    nombre: 'Jeep Todoterreno del Capitán América',
    categoria: 'vehiculos',
    productoMadre: 'Control Remoto',
    precioCUP: 19000,
    rebaja: { tipo: 'porcentaje', valor: 15 },
    imagen: 'img/juguetes/jeepCap.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-017',
    nombre: 'Donut Shop. Set de Dulces de Juguete',
    categoria: 'sets',
    precioCUP: 3000,
    rebaja: { tipo: 'efectivo', valor: 2 },  // ⚠️ Ajustar en CUP
    imagen: 'img/juguetes/donutShop.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-018',
    nombre: 'Arma de Juguete. ¡Apunta y Dispara!',
    categoria: 'armas',
    productoMadre: 'Pistolas de Juguete',
    precioCUP: 3500,
    imagen: 'img/juguetes/gun.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-019',
    nombre: 'Mono de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 8000,
    rebaja: { tipo: 'porcentaje', valor: 15 },
    imagen: 'img/juguetes/monoPeluche.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-020',
    nombre: 'Marcadores de Colores',
    categoria: 'didacticos',
    precioCUP: 2500,
    rebaja: { tipo: 'efectivo', valor: 2 },  // ⚠️ Ajustar en CUP
    imagen: 'img/juguetes/marcadores.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-021',
    nombre: 'Pelotas Divertidas',
    categoria: 'didacticos',
    precioCUP: 550,
    imagen: 'img/juguetes/pelotas.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-022',
    nombre: 'Set de Piezas de Lego',
    categoria: 'bloques',
    precioCUP: 4000,
    rebaja: { tipo: 'porcentaje', valor: 15 },
    imagen: 'img/juguetes/legos.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-023',
    nombre: 'Helicopterós de Juguete',
    categoria: 'vehiculos',
    precioCUP: 3000,
    rebaja: { tipo: 'efectivo', valor: 2 },  // ⚠️ Ajustar en CUP
    imagen: 'img/juguetes/helicopteros.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-024',
    nombre: 'Relojes pars Niños',
    categoria: 'didacticos',
    precioCUP: 3000,
    imagen: 'img/juguetes/relojes.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-025',
    nombre: 'Luna de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 6,                            // ⚠️ REVISAR — es muy bajo
    imagen: 'img/juguetes/lunaPeluche.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-026',
    nombre: 'Set de Herramientas de Construcción',
    categoria: 'sets',
    precioCUP: 2000,
    imagen: 'img/juguetes/herramientas.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-027',
    nombre: 'Pistola de Juguete. Prueba tú Puntería',
    categoria: 'armas',
    productoMadre: 'Pistolas de Juguete',
    precioCUP: 3500,
    imagen: 'img/juguetes/shooting.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-028',
    nombre: 'Tanque de Guerra Clariot',
    categoria: 'vehiculos',
    precioCUP: 3000,
    imagen: 'img/juguetes/tankC.jpg',
    nuevo: false,
    agotado: true
  },
  {
    id: 'jug-029',
    nombre: 'Pistola de Juguete',
    categoria: 'armas',
    productoMadre: 'Pistolas de Juguete',
    precioCUP: 3500,
    imagen: 'img/juguetes/gun2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-030',
    nombre: 'Osito de Peluche Rosa',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 3000,
    imagen: 'img/juguetes/osoPelucheRosa.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-031',
    nombre: 'Osito de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 24000,
    imagen: 'img/juguetes/osoPeluche.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-032',
    nombre: 'Osito de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 24000,
    imagen: 'img/juguetes/osoPeluche2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-033',
    nombre: 'Pulpo de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 1,                            // ⚠️ REVISAR — es muy bajo
    imagen: 'img/juguetes/pulpoPeluche.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-034',
    nombre: 'Elefante de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 1,                            // ⚠️ REVISAR — es muy bajo
    imagen: 'img/juguetes/elefantePeluche.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-035',
    nombre: 'Patines para Niños',
    categoria: 'ruedas',
    productoMadre: 'Ruedas',
    precioCUP: 60000,
    imagen: 'img/juguetes/patines.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-036',
    nombre: 'Set de Cocina',
    categoria: 'sets',
    precioCUP: 3500,
    imagen: 'img/juguetes/setCocina.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-037',
    nombre: 'Set de Figuras de Acción',
    categoria: 'sets',
    precioCUP: 4000,
    imagen: 'img/juguetes/heroesGo.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-038',
    nombre: 'Caja de Crayones de 12 Colores',
    categoria: 'didacticos',                 // ⚠️ Antes decía 'peluches' — lo cambié
    precioCUP: 1500,
    imagen: 'img/juguetes/crayones.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-039',
    nombre: 'Camión de Policia a Control Remoto',
    categoria: 'vehiculos',
    productoMadre: 'Control Remoto',
    precioCUP: 20000,
    imagen: 'img/juguetes/comionCR.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-040',
    nombre: 'Burbujeros',
    categoria: 'otros',
    precioCUP: 500,
    imagen: 'img/juguetes/burbujeros.jpg',
    nuevo: false,
    agotado: true
  },
  {
    id: 'jug-041',
    nombre: 'Set Médico de Juguete',
    categoria: 'sets',
    precioCUP: 3500,
    imagen: 'img/juguetes/setMedico.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-042',
    nombre: 'Flotadores Coloridos con Diseños',
    categoria: 'sets',
    precioCUP: 5000,
    imagen: 'img/juguetes/flotadores.jpg',
    nuevo: false,
    agotado: false
  },
    {
    id: 'jug-043',
    nombre: 'Andador',
    categoria: 'didacticos',
    productoMadre: 'Ruedas',
    precioCUP: 20000,
    imagen: 'img/juguetes/andador.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-044',
    nombre: 'Aviones',
    categoria: 'juguetes',
    precioCUP: 1500,
    imagen: 'img/juguetes/aviones.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-045',
    nombre: 'Peluche de Capybara',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 4200,
    imagen: 'img/juguetes/capybaraPeluche.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-046',
    nombre: 'Gimnasio',
    categoria: 'sets',
    precioCUP: 15000,
    imagen: 'img/juguetes/gym.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-047',
    nombre: 'Monopoly',
    categoria: 'mesa',
    productoMadre: 'Juegos de Mesa',
    precioCUP: 1000,
    imagen: 'img/juguetes/monopoly.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-048',
    nombre: 'Monopoly',
    categoria: 'mesa',
    productoMadre: 'Juegos de Mesa',
    precioCUP: 1000,
    imagen: 'img/juguetes/monopoly2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-049',
    nombre: 'Pistola de Agua',
    categoria: 'armas',
    productoMadre: 'Pistolas de Juguete',
    precioCUP: 8000,
    imagen: 'img/juguetes/xShoot.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-050',
    nombre: 'Soldaditos de Combate',
    categoria: 'army',
    precioCUP: 3000,
    imagen: 'img/juguetes/soldaditos.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-051',
    nombre: 'Pistola de Balas de Gel',
    categoria: 'armas',
    productoMadre: 'Pistolas de Juguete',
    precioCUP: 3500,
    imagen: 'img/juguetes/shooting2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-052',
    nombre: 'Pistola de Dardos Pegajosos',
    categoria: 'armas',
    productoMadre: 'Pistolas de Juguete',
    precioCUP: 3500,
    imagen: 'img/juguetes/shooting3.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-053',
    nombre: 'Cubo Rugby',
    categoria: 'didactico',
    precioCUP: 1500,
    imagen: 'img/juguetes/cuboRugby.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-054',
    nombre: 'Carro de Control Remoto. Italian Brain Rot',
    categoria: 'armas',
    productoMadre: 'Vehiculos',
    precioCUP: 16000,
    imagen: 'img/juguetes/italianBrainRot.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-055',
    nombre: 'Osito de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 5000,
    imagen: 'img/juguetes/osoPelucheCorazon.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-056',
    nombre: 'Osito de Peluche',
    categoria: 'peluches',
    productoMadre: 'Peluches',
    precioCUP: 5000,
    imagen: 'img/juguetes/osoPelucheCorazon2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-057',
    nombre: 'Scooter',
    categoria: 'ruedas',
    productoMadre: 'Ruedas',
    precioCUP: 28000,
    imagen: 'img/juguetes/scooter.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-058',
    nombre: 'Auto a Control Remoto Rojo',
    categoria: 'vehiculos',
    productoMadre: 'Control Remoto',
    precioCUP: 31500,
    imagen: 'img/juguetes/carroCR2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-059',
    nombre: 'Auto a Control Remoto Amarillo',
    categoria: 'vehiculos',
    productoMadre: 'Control Remoto',
    precioCUP: 31500,
    imagen: 'img/juguetes/carroCR.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-060',
    nombre: 'Jeep Todo Terreno a Control Remoto',
    categoria: 'vehiculos',
    productoMadre: 'Control Remoto',
    precioCUP: 12600,
    imagen: 'img/juguetes/carroCR3.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-061',
    nombre: 'Auto a Control Remoto',
    categoria: 'vehiculos',
    productoMadre: 'Control Remoto',
    precioCUP: 16000,
    imagen: 'img/juguetes/carroCR4.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-062',
    nombre: 'Rompecabezas',
    categoria: 'didactico',
    productoMadre: 'Juegos de Mesa',
    precioCUP: 1500,
    imagen: 'img/juguetes/rompecab.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-063',
    nombre: 'Set Médico de Juguete',
    categoria: 'sets',
    precioCUP: 3500,
    imagen: 'img/juguetes/setMedico2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-064',
    nombre: 'Set de Bomberos',
    categoria: 'sets',
    precioCUP: 2000,
    imagen: 'img/juguetes/setBombero.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-065',
    nombre: 'Set de Bomberos',
    categoria: 'sets',
    precioCUP: 3500,
    imagen: 'img/juguetes/setBombero2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-066',
    nombre: 'Set de Doctor',
    categoria: 'sets',
    precioCUP: 3500,
    imagen: 'img/juguetes/setDoctor.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-067',
    nombre: 'Set de Compras de Capybara',
    categoria: 'sets',
    precioCUP: 4160,
    imagen: 'img/juguetes/setCompras.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-068',
    nombre: 'Set de Cocina',
    categoria: 'sets',
    precioCUP: 7800,
    imagen: 'img/juguetes/setCocina4.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-069',
    nombre: 'Set Mágico',
    categoria: 'sets',
    precioCUP: 3500,
    imagen: 'img/juguetes/setMagico.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-070',
    nombre: 'Scuichis',
    categoria: 'scuichis',
    precioCUP: 3000,
    imagen: 'img/juguetes/scuichis.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-084',
    nombre: 'Scuichis',
    categoria: 'scuichis',
    precioCUP: 3000,
    imagen: 'img/juguetes/scuichis.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-071',
    nombre: 'Set de Cocina',
    categoria: 'sets',
    precioCUP: 3500,
    imagen: 'img/juguetes/setCocina3.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-072',
    nombre: 'Set de Cocina',
    categoria: 'sets',
    precioCUP: 3500,
    imagen: 'img/juguetes/setCocina2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-073',
    nombre: 'Set de Cocina',
    categoria: 'sets',
    precioCUP: 3500,
    imagen: 'img/juguetes/setCocina5.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-074',
    nombre: 'Set de Cocina',
    categoria: 'sets',
    precioCUP: 6300,
    imagen: 'img/juguetes/setCocina6.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-075',
    nombre: 'Set de Frozen',
    categoria: 'set',
    precioCUP: 10000,
    imagen: 'img/juguetes/frozen.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-076',
    nombre: 'Muñeca',
    categoria: 'muñecas',
    productoMadre: 'Muñecas',
    precioCUP: 5000,
    imagen: 'img/juguetes/muneca.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-077',
    nombre: 'Muñeca Hada',
    categoria: 'muñecas',
    productoMadre: 'Muñecas',
    precioCUP: 5000,
    imagen: 'img/juguetes/muneca2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-078',
    nombre: 'Muñeca Fashion',
    categoria: 'muñecas',
    productoMadre: 'Muñecas',
    precioCUP: 4500,
    imagen: 'img/juguetes/muneca3.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-079',
    nombre: 'Muñeca',
    categoria: 'muñecas',
    productoMadre: 'Muñecas',
    precioCUP: 12000,
    imagen: 'img/juguetes/muneca4.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-080',
    nombre: 'Muñecas Fashion',
    categoria: 'muñecas',
    productoMadre: 'Muñecas',
    precioCUP: 4500,
    imagen: 'img/juguetes/munecasFash2.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-081',
    nombre: 'Guerreras del K-Pop',
    categoria: 'muñecas',
    productoMadre: 'Muñecas',
    precioCUP: 4900,
    imagen: 'img/juguetes/munecasFash4.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-082',
    nombre: 'Guerreras del K-Pop',
    categoria: 'muñecas',
    productoMadre: 'Muñecas',
    precioCUP: 4900,
    imagen: 'img/juguetes/munecasFash3.jpg',
    nuevo: false,
    agotado: false
  },
  {
    id: 'jug-083',
    nombre: 'Muñecas',
    categoria: 'muñecas',
    productoMadre: 'Muñecas',
    precioCUP: 5000,
    imagen: 'img/juguetes/munecas5.jpg',
    nuevo: false,
    agotado: false
  },
];
