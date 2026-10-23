/* =====================================================
   KPRICHITOS · Lógica principal
   ===================================================== */

/* ---------- Configuración del negocio ---------- */
const CONFIG = {
  nombre:    'Kprichitos',
  telefono:  '+53 55555555',
  whatsapp:  '5355555555',
  instagram: 'https://instagram.com/kprichitos',
  maps:      'https://www.google.com/maps/search/?api=1&query=Kprichitos',
  direccion: 'Calle Ejemplo #123, Ciudad'
};

/* ---------- Estado de la app ---------- */
const estado = {
  seccion:   localStorage.getItem('kp_seccion')   || 'articulos',
  categoria: localStorage.getItem('kp_categoria') || 'juguetes'
};

/* ---------- Claves de almacenamiento ---------- */
const CARRITO_KEY = 'kp_carrito';

/* ---------- Etiquetas de categorías ---------- */
const CATEGORIAS_LABEL = {
  juguetes:   'Juguetes',
  regalos:    'Regalos',
  cumpleanos: 'Cumpleaños',
  escuela:    'Escuela'
};

/* ---------- Monedas permitidas ---------- */
const MONEDAS = ['CUP', 'USD'];

/* ---------- Helpers ---------- */
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
      <rect width='200' height='200' fill='#FADADD'/>
      <text x='100' y='118' font-size='64' text-anchor='middle'
            fill='#E85D8F' font-family='sans-serif'>?</text>
    </svg>`
  );

function normalizarMoneda(m) {
  const up = String(m || 'CUP').toUpperCase().trim();
  return MONEDAS.includes(up) ? up : 'CUP';
}

function formatearNumero(n) {
  return Number(n).toLocaleString('es-ES');
}

function formatoMonedaNum(n, moneda) {
  const m = normalizarMoneda(moneda);
  if (m === 'USD') {
    return Number.isInteger(n)
      ? formatearNumero(n)
      : n.toFixed(2).replace('.', ',');
  }
  return formatearNumero(Math.round(n));
}

function renderPrecioLineHTML(precio, moneda) {
  const m = normalizarMoneda(moneda);
  const cls = m === 'USD' ? 'moneda usd' : 'moneda';
  return `<strong>$${formatoMonedaNum(precio, m)}</strong> <span class="${cls}">${m}</span>`;
}

function renderPrecioHTML(precio, moneda) {
  const m = normalizarMoneda(moneda);
  const cls = m === 'USD' ? 'moneda usd' : 'moneda';
  return `$${formatoMonedaNum(precio, m)} <span class="${cls}">${m}</span>`;
}

/* =====================================================
   CÁLCULO DE PRECIOS (solo CUP)
   ===================================================== */
function calcularPrecios(prod) {
  const precioCUP = Math.round(Number(prod.precioCUP) || 0);

  if (precioCUP === 0) {
    console.warn(`[Kprichitos] Producto "${prod.nombre}" sin precioCUP válido.`);
  }

  let finalCUP = precioCUP;
  let badge = null;
  let tieneRebaja = false;

  if (prod.rebaja) {
    const tipo    = String(prod.rebaja.tipo || '').toLowerCase();
    const valor   = Number(prod.rebaja.valor);
    const cupFijo = Number(prod.rebaja.cupFijo);

    let aplicoDescuento = false;
    let motivo = '';

    if (tipo === 'porcentaje') {
      if (valor > 0 && valor < 100) {
        const factor = 1 - valor / 100;
        finalCUP = Math.round(precioCUP * factor);
        badge = `-${valor}%`;
        aplicoDescuento = true;
      } else {
        motivo = `el porcentaje debe estar entre 1 y 99 (recibido: ${valor})`;
      }
    } else if (tipo === 'efectivo') {
      if (valor > 0 && valor < precioCUP) {
        finalCUP = Math.max(0, Math.round(precioCUP - valor));
        badge = `-$${formatoMonedaNum(valor, 'CUP')}`;
        aplicoDescuento = true;
      } else {
        motivo = `el descuento ($${valor}) debe ser mayor a 0 y menor al precio ($${precioCUP})`;
      }
    } else if (tipo) {
      motivo = `tipo de rebaja desconocido: "${prod.rebaja.tipo}"`;
    }

    if (Number.isFinite(cupFijo) && cupFijo > 0) {
      if (cupFijo < precioCUP) {
        finalCUP = Math.round(cupFijo);
        if (!aplicoDescuento) tieneRebaja = true;
      } else {
        console.warn(
          `[Kprichitos] cupFijo inválido en "${prod.nombre}": ` +
          `$${cupFijo} debe ser menor al precio CUP ($${precioCUP}).`
        );
      }
    }

    if (aplicoDescuento) tieneRebaja = true;

    if (finalCUP < 0) {
      console.warn(
        `[Kprichitos] Rebaja ignorada en "${prod.nombre}": precios negativos.`,
        prod.rebaja
      );
      finalCUP = precioCUP;
      badge = null;
      tieneRebaja = false;
    }

    if (motivo) {
      console.warn(
        `[Kprichitos] Rebaja ignorada en "${prod.nombre}": ${motivo}.`,
        prod.rebaja
      );
    }
  }

  return { precioCUP, finalCUP, badge, tieneRebaja };
}

/* Crea una imagen clicable que abre el lightbox */
function crearImagen(src, alt, esAmpliable = true) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || '';
  img.loading = 'lazy';
  img.onerror = () => { img.onerror = null; img.src = PLACEHOLDER; };

  if (esAmpliable) {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      abrirLightbox(src, alt || '');
    });
  }
  return img;
}

function crearBadgeNew() {
  const b = document.createElement('span');
  b.className = 'badge badge-new';
  b.textContent = 'NEW';
  return b;
}

function crearBadgeRebaja(texto) {
  const b = document.createElement('span');
  b.className = 'badge badge-rebaja';
  b.textContent = texto;
  return b;
}

function normalizar(str) {
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Fecha y hora en formato largo ---------- */
function formatearFecha() {
  const ahora = new Date();
  const dias  = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const meses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  const d  = dias[ahora.getDay()];
  const n  = ahora.getDate();
  const me = meses[ahora.getMonth()];
  const a  = ahora.getFullYear();
  const hh = String(ahora.getHours()).padStart(2, '0');
  const mm = String(ahora.getMinutes()).padStart(2, '0');
  return `${d}, ${n} de ${me} de ${a} · ${hh}:${mm}`;
}

/* =====================================================
   MENSAJE DE WHATSAPP
   ===================================================== */
function generarMensajePedido(items) {
  const SEP = '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';

  let msg = '';

  msg += `*NUEVO PEDIDO - ${CONFIG.nombre}*\n`;
  msg += `${formatearFecha()}\n`;
  msg += `${SEP}\n\n`;

  msg += `*DETALLE DEL PEDIDO*\n\n`;

  items.forEach((it, idx) => {
    const m = normalizarMoneda(it.moneda);
    const subtotal = it.precio * it.cantidad;

    msg += `*${idx + 1}. ${it.nombre || 'Oferta especial'}*\n`;
    msg += `   ${it.cantidad} × $${formatoMonedaNum(it.precio, m)} ${m}\n`;
    msg += `   Subtotal: $${formatoMonedaNum(subtotal, m)} ${m}\n\n`;
  });

  msg += `${SEP}\n`;
  msg += `*RESUMEN*\n\n`;

  const totales = {};
  items.forEach(it => {
    const m = normalizarMoneda(it.moneda);
    totales[m] = (totales[m] || 0) + it.precio * it.cantidad;
  });

  Object.entries(totales).forEach(([moneda, monto]) => {
    msg += `   Total ${moneda}: $${formatoMonedaNum(monto, moneda)}\n`;
  });

  const totalArticulos = items.reduce((s, i) => s + i.cantidad, 0);
  msg += `   Artículos: ${totalArticulos}\n`;

  msg += `\n${SEP}\n`;
  msg += ` ¡Pedido enviado!\n`;
  msg += ` Gracias por tu preferencia\n`;
  msg += ` Te responderemos pronto\n\n`;
  msg += ` *¡Disfruta tus regalos!*`;

  return msg;
}

/* =====================================================
   ALTURA DINÁMICA DEL HEADER
   ===================================================== */
function ajustarAlturaHeader() {
  const header = document.querySelector('.app-header');
  if (!header) return;
  document.documentElement.style.setProperty(
    '--header-h',
    header.offsetHeight + 'px'
  );
}

/* =====================================================
   SUB-NAV · Sincronizado con el header
   ===================================================== */
function configurarScrollSubNav() {
  const subNav = document.querySelector('.sub-nav');
  if (!subNav) return;

  const UMBRAL_MOSTRAR = 80;
  const UMBRAL_OCULTAR = 150;

  let ticking = false;

  const actualizar = () => {
    const y = window.scrollY;
    if (y < UMBRAL_MOSTRAR) {
      subNav.classList.remove('oculto');
    } else if (y > UMBRAL_OCULTAR) {
      subNav.classList.add('oculto');
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(actualizar);
  }, { passive: true });

  actualizar();
}

/* =====================================================
   SUB-NAV · Visibilidad
   ===================================================== */
function actualizarSubNav() {
  const subNav = document.querySelector('.sub-nav');
  const buscando = $('#searchInput').value.trim().length > 0;

  if (estado.seccion === 'articulos' && !buscando) {
    subNav.classList.remove('hidden');
  } else {
    subNav.classList.add('hidden');
  }
}

/* =====================================================
   LIGHTBOX
   ===================================================== */
function abrirLightbox(src, alt) {
  const lb = $('#lightbox');
  const img = $('#lightboxImg');

  img.src = src;
  img.alt = alt || '';
  img.onerror = function () {
    this.onerror = null;
    this.src = PLACEHOLDER;
  };

  lb.classList.remove('hidden');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function cerrarLightbox() {
  const lb = $('#lightbox');
  lb.classList.add('hidden');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* =====================================================
   CARRITO · Persistencia
   ===================================================== */
let carrito = cargarCarrito();

function cargarCarrito() {
  try {
    const data = JSON.parse(localStorage.getItem(CARRITO_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function guardarCarrito() {
  localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
  actualizarBadgeCarrito();
}

function totalesPorMoneda() {
  const totales = {};
  carrito.forEach(i => {
    const m = normalizarMoneda(i.moneda);
    totales[m] = (totales[m] || 0) + i.precio * i.cantidad;
  });
  return totales;
}

function cantidadTotalCarrito() {
  return carrito.reduce((s, i) => s + i.cantidad, 0);
}

function claveCarrito(item) {
  return `${item.id}__${normalizarMoneda(item.moneda)}`;
}

function agregarAlCarrito(item, cantidad = 1) {
  const clave = claveCarrito(item);
  const existente = carrito.find(i => claveCarrito(i) === clave);

  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.push({
      id: item.id,
      nombre: item.nombre || 'Oferta especial',
      precio: item.precio,
      moneda: normalizarMoneda(item.moneda),
      imagen: item.imagen,
      cantidad
    });
  }

  guardarCarrito();
  mostrarToast('Añadido al carrito');
  lanzarConfeti(36);

  const badge = $('#cartBadge');
  badge.classList.remove('pop');
  void badge.offsetWidth;
  badge.classList.add('pop');
}

function eliminarDelCarrito(clave) {
  const el = document.querySelector(`[data-cart-key="${clave}"]`);
  const quitar = () => {
    carrito = carrito.filter(i => claveCarrito(i) !== clave);
    guardarCarrito();
    renderCarrito();
  };

  if (el) {
    el.classList.add('leaving');
    setTimeout(quitar, 260);
  } else {
    quitar();
  }
}

function cambiarCantidad(clave, delta) {
  const item = carrito.find(i => claveCarrito(i) === clave);
  if (!item) return;

  item.cantidad += delta;
  if (item.cantidad <= 0) {
    eliminarDelCarrito(clave);
    return;
  }

  guardarCarrito();
  renderCarrito();
}

function vaciarCarrito() {
  if (!carrito.length) return;
  if (!confirm('¿Seguro que quieres vaciar el carrito?')) return;
  carrito = [];
  guardarCarrito();
  renderCarrito();
  mostrarToast('Carrito vaciado');
}

function actualizarBadgeCarrito() {
  const badge = $('#cartBadge');
  const total = cantidadTotalCarrito();

  if (total <= 0) {
    badge.classList.add('hidden');
  } else {
    badge.classList.remove('hidden');
    badge.textContent = total > 99 ? '99+' : total;
  }
}

/* =====================================================
   CARRITO · Render
   ===================================================== */
function renderCarrito() {
  const cont = $('#cartItems');
  const empty = $('#cartEmpty');
  const footer = $('#cartFooter');
  const totals = $('#cartTotals');
  cont.innerHTML = '';

  if (!carrito.length) {
    empty.classList.remove('hidden');
    footer.classList.add('hidden');
    return;
  }

  empty.classList.add('hidden');
  footer.classList.remove('hidden');

  carrito.forEach(item => {
    const clave = claveCarrito(item);

    const el = document.createElement('div');
    el.className = 'cart-item';
    el.dataset.cartKey = clave;

    const imgWrap = document.createElement('div');
    imgWrap.className = 'cart-item-img';
    imgWrap.appendChild(crearImagen(item.imagen, item.nombre, false));

    const info = document.createElement('div');
    info.className = 'cart-item-info';

    const nombre = document.createElement('div');
    nombre.className = 'cart-item-name';
    nombre.textContent = item.nombre;

    const precio = document.createElement('div');
    precio.className = 'cart-item-price';
    precio.innerHTML = renderPrecioHTML(item.precio, item.moneda);

    const acciones = document.createElement('div');
    acciones.className = 'cart-item-actions';

    const btnMinus = document.createElement('button');
    btnMinus.className = 'qty-btn';
    btnMinus.innerHTML = '<i class="fas fa-minus"></i>';
    btnMinus.setAttribute('aria-label', 'Quitar uno');
    btnMinus.addEventListener('click', () => cambiarCantidad(clave, -1));

    const qty = document.createElement('span');
    qty.className = 'qty-value';
    qty.textContent = item.cantidad;

    const btnPlus = document.createElement('button');
    btnPlus.className = 'qty-btn';
    btnPlus.innerHTML = '<i class="fas fa-plus"></i>';
    btnPlus.setAttribute('aria-label', 'Añadir uno');
    btnPlus.addEventListener('click', () => cambiarCantidad(clave, 1));

    const btnDel = document.createElement('button');
    btnDel.className = 'delete-btn';
    btnDel.innerHTML = '<i class="fas fa-trash-can"></i>';
    btnDel.setAttribute('aria-label', 'Eliminar del carrito');
    btnDel.addEventListener('click', () => eliminarDelCarrito(clave));

    acciones.append(btnMinus, qty, btnPlus, btnDel);
    info.append(nombre, precio, acciones);

    el.append(imgWrap, info);
    cont.appendChild(el);
  });

  totals.innerHTML = '';
  const totales = totalesPorMoneda();
  Object.entries(totales).forEach(([moneda, monto]) => {
    const row = document.createElement('div');
    row.className = 'cart-total';
    row.innerHTML = `
      <span>Total <span class="moneda">${moneda}</span></span>
      <strong>$${formatoMonedaNum(monto, moneda)}</strong>
    `;
    totals.appendChild(row);
  });
}

/* =====================================================
   CARRITO · Checkout por WhatsApp
   ===================================================== */
function checkoutCarrito() {
  if (!carrito.length) {
    mostrarToast('Tu carrito está vacío');
    return;
  }

  const msg = generarMensajePedido(carrito);
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  lanzarConfeti(70);
  mostrarToast('Pedido enviado');

  carrito = [];
  guardarCarrito();
  renderCarrito();
}

/* =====================================================
   ORDEN + AGRUPACIÓN
   ===================================================== */
function prepararBloques(lista) {
  const conCat = lista.map(p => ({
    ...p,
    _cat: String(p.categoria || 'otros').trim().toLowerCase() || 'otros'
  }));

  conCat.sort((a, b) => {
    if (a._cat === 'otros' && b._cat !== 'otros') return 1;
    if (b._cat === 'otros' && a._cat !== 'otros') return -1;

    const cmpCat = a._cat.localeCompare(b._cat, 'es');
    if (cmpCat !== 0) return cmpCat;

    return String(a.nombre || '').localeCompare(String(b.nombre || ''), 'es');
  });

  const bloques = [];
  const gruposHechos = new Set();

  conCat.forEach(prod => {
    if (prod.productoMadre) {
      const key = String(prod.productoMadre);
      if (gruposHechos.has(key)) return;
      gruposHechos.add(key);

      const hijos = conCat.filter(p => String(p.productoMadre) === key);

      if (hijos.length >= 2) {
        bloques.push({ tipo: 'grupo', nombre: key, productos: hijos });
      } else {
        bloques.push({ tipo: 'producto', producto: prod });
      }
    } else {
      bloques.push({ tipo: 'producto', producto: prod });
    }
  });

  return bloques;
}

/* =====================================================
   SECCIÓN PRODUCTOS
   ===================================================== */
function renderProductos(categoria) {
  const grid = $('#grid-productos');
  grid.innerHTML = '';

  const lista = PRODUCTOS[categoria] || [];

  if (!lista.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;opacity:.6;padding:40px 0;">
                        No hay artículos en esta categoría todavía.
                      </p>`;
    return;
  }

  const bloques = prepararBloques(lista);

  bloques.forEach(bloque => {
    if (bloque.tipo === 'producto') {
      grid.appendChild(crearCardProducto(bloque.producto));
    } else {
      grid.appendChild(crearBloqueGrupo(bloque.nombre, bloque.productos));
    }
  });
}

/* Bloque con divisor + carrusel horizontal */
function crearBloqueGrupo(nombreMadre, productos) {
  const wrap = document.createElement('div');
  wrap.className = 'producto-madre-bloque';

  const divisor = document.createElement('div');
  divisor.className = 'producto-madre-divisor';
  divisor.innerHTML = `
    <span class="producto-madre-nombre">${escapeHtml(nombreMadre)}</span>
    <span class="producto-madre-linea"></span>
  `;
  wrap.appendChild(divisor);

  const carrusel = document.createElement('div');
  carrusel.className = 'producto-madre-carrusel';

  productos.forEach(prod => {
    const card = crearCardProducto(prod);
    card.classList.add('card-carrusel');
    carrusel.appendChild(card);
  });

  wrap.appendChild(carrusel);

  const actualizarFin = () => {
    const atEnd = carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth - 15;
    wrap.classList.toggle('at-end', atEnd);
  };

  carrusel.addEventListener('scroll', () => {
    requestAnimationFrame(actualizarFin);
  }, { passive: true });

  setTimeout(actualizarFin, 100);

  return wrap;
}

function crearCardProducto(prod, catLabel) {
  const calc = calcularPrecios(prod);

  const card = document.createElement('article');
  card.className = 'card' + (prod.agotado ? ' agotado' : '');

  const media = document.createElement('div');
  media.className = 'card-media';
  media.appendChild(crearImagen(prod.imagen, prod.nombre));

  if (prod.nuevo && !prod.agotado) media.appendChild(crearBadgeNew());

  if (calc.tieneRebaja && calc.badge && !prod.agotado) {
    media.appendChild(crearBadgeRebaja(calc.badge));
  }

  if (catLabel) {
    const chip = document.createElement('span');
    chip.className = 'cat-chip';
    chip.textContent = catLabel;
    media.appendChild(chip);
  }

  if (prod.agotado) {
    const b = document.createElement('span');
    b.className = 'badge-agotado';
    b.textContent = 'AGOTADO';
    media.appendChild(b);
  }

  const body = document.createElement('div');
  body.className = 'card-body';

  const nombre = document.createElement('h3');
  nombre.className = 'card-nombre';
  nombre.textContent = prod.nombre;

  const precios = document.createElement('div');
  precios.className = 'card-precios';

  const lineCUP = document.createElement('div');
  lineCUP.className = 'card-precio-line';
  if (calc.tieneRebaja && calc.finalCUP !== calc.precioCUP) {
    lineCUP.innerHTML = `
      <span class="precio-viejo">$${formatoMonedaNum(calc.precioCUP, 'CUP')}</span>
      <span class="precio-nuevo">$${formatoMonedaNum(calc.finalCUP, 'CUP')}</span>
      <span class="moneda">CUP</span>
    `;
  } else {
    lineCUP.innerHTML = renderPrecioLineHTML(calc.precioCUP, 'CUP');
  }
  precios.appendChild(lineCUP);

  const btn = document.createElement('button');
  btn.className = 'btn-comprar';
  btn.innerHTML = `<i class="fas fa-cart-plus"></i><span>${
    prod.agotado ? 'Agotado' : 'Comprar'
  }</span>`;
  if (prod.agotado) {
    btn.disabled = true;
  } else {
    btn.addEventListener('click', () => abrirModal(prod, false));
  }

  body.append(nombre, precios, btn);
  card.append(media, body);
  return card;
}

/* =====================================================
   SECCIÓN OFERTAS
   ===================================================== */
function renderOfertas() {
  const grid = $('#grid-ofertas');
  grid.innerHTML = '';

  OFERTAS.forEach(par => {
    const wrap = document.createElement('div');
    wrap.className = 'oferta-par';
    wrap.appendChild(crearOfertaCard(par.cara));
    wrap.appendChild(crearOfertaCard(par.barata));
    grid.appendChild(wrap);
  });
}

function crearOfertaCard(item) {
  const card = document.createElement('article');
  card.className = 'oferta-card' + (item.agotada ? ' agotada' : '');

  card.appendChild(crearImagen(item.imagen, 'Oferta'));

  if (item.nueva && !item.agotada) card.appendChild(crearBadgeNew());

  const tag = document.createElement('span');
  tag.className = 'precio-tag';
  tag.innerHTML = `$${formatoMonedaNum(item.precio, 'USD')} <span class="moneda">USD</span>`;
  card.appendChild(tag);

  if (item.agotada) {
    const b = document.createElement('span');
    b.className = 'badge-agotado';
    b.textContent = 'AGOTADO';
    card.appendChild(b);
  }

  if (!item.agotada) {
    card.addEventListener('click', () => abrirModal(item, true));
  }

  return card;
}

/* =====================================================
   BUSCADOR INTELIGENTE
   ===================================================== */
function buscarTodo(query) {
  const q = normalizar(query);
  if (!q) return [];

  const palabras = q.split(/\s+/).filter(Boolean);
  const resultados = [];

  Object.entries(PRODUCTOS).forEach(([cat, lista]) => {
    const catLabel = CATEGORIAS_LABEL[cat] || cat;

    lista.forEach(p => {
      const calc = calcularPrecios(p);
      const blob = normalizar(
        [
          p.nombre,
          p.categoria || '',
          p.productoMadre || '',
          String(calc.precioCUP),
          String(calc.finalCUP),
          'cup',
          catLabel,
          cat,
          calc.tieneRebaja ? 'rebaja descuento oferta' : '',
          p.nuevo ? 'nuevo new' : '',
          p.agotado ? 'agotado sin stock' : 'disponible'
        ].join(' ')
      );

      if (palabras.every(pal => blob.includes(pal))) {
        resultados.push({ ...p, tipo: 'producto', catLabel });
      }
    });
  });

  OFERTAS.forEach(par => {
    [par.cara, par.barata].forEach(o => {
      const blob = normalizar(
        [
          'oferta ofertas descuento especial promocion',
          String(o.precio),
          'usd',
          o.nueva ? 'nuevo new' : '',
          o.agotada ? 'agotado sin stock' : 'disponible'
        ].join(' ')
      );

      if (palabras.every(pal => blob.includes(pal))) {
        resultados.push({ ...o, tipo: 'oferta' });
      }
    });
  });

  return resultados;
}

function renderBusqueda(resultados, query) {
  const grid = $('#grid-productos');
  grid.innerHTML = '';

  if (!resultados.length) {
    grid.innerHTML = `
      <div class="no-resultados">
        <i class="fas fa-magnifying-glass"></i>
        <p>Sin resultados para "<strong>${escapeHtml(query)}</strong>"</p>
        <span>Prueba con otro nombre, precio o tipo</span>
      </div>
    `;
    return;
  }

  const header = document.createElement('div');
  header.className = 'resultado-header';
  header.innerHTML = `<i class="fas fa-circle-check"></i>
    ${resultados.length} resultado${resultados.length !== 1 ? 's' : ''}
    para "<strong>${escapeHtml(query)}</strong>"`;
  grid.appendChild(header);

  resultados.forEach(item => {
    if (item.tipo === 'producto') {
      grid.appendChild(crearCardProducto(item, item.catLabel));
    } else {
      grid.appendChild(crearCardOfertaBusqueda(item));
    }
  });
}

function crearCardOfertaBusqueda(o) {
  const card = document.createElement('article');
  card.className = 'card' + (o.agotada ? ' agotado' : '');

  const media = document.createElement('div');
  media.className = 'card-media';
  media.appendChild(crearImagen(o.imagen, 'Oferta'));

  if (o.nueva && !o.agotada) media.appendChild(crearBadgeNew());

  const chip = document.createElement('span');
  chip.className = 'cat-chip cat-chip-oferta';
  chip.textContent = 'Oferta';
  media.appendChild(chip);

  if (o.agotada) {
    const b = document.createElement('span');
    b.className = 'badge-agotado';
    b.textContent = 'AGOTADO';
    media.appendChild(b);
  }

  const body = document.createElement('div');
  body.className = 'card-body';

  const nombre = document.createElement('h3');
  nombre.className = 'card-nombre';
  nombre.textContent = 'Oferta especial';

  const precios = document.createElement('div');
  precios.className = 'card-precios';
  const line = document.createElement('div');
  line.className = 'card-precio-line';
  line.innerHTML = renderPrecioLineHTML(o.precio, 'USD');
  precios.appendChild(line);

  const btn = document.createElement('button');
  btn.className = 'btn-comprar';
  btn.innerHTML = `<i class="fas fa-tags"></i><span>${
    o.agotada ? 'Agotado' : 'Ver oferta'
  }</span>`;
  if (o.agotada) {
    btn.disabled = true;
  } else {
    btn.addEventListener('click', () => abrirModal(o, true));
  }

  body.append(nombre, precios, btn);
  card.append(media, body);
  return card;
}

/* ---------- Control de la búsqueda ---------- */
function aplicarBusqueda(query) {
  const q = String(query).trim();
  const searchClear = $('#searchClear');
  const subNav = document.querySelector('.sub-nav');

  if (!q) {
    searchClear.classList.add('hidden');
    subNav.classList.remove('hidden');
    subNav.classList.remove('oculto');
    if (estado.seccion !== 'articulos') cambiarSeccion('articulos');
    renderProductos(estado.categoria);
    actualizarSubNav();
    return;
  }

  searchClear.classList.remove('hidden');
  subNav.classList.add('hidden');

  if (estado.seccion !== 'articulos') cambiarSeccion('articulos');

  const resultados = buscarTodo(q);
  renderBusqueda(resultados, q);
  actualizarSubNav();
}

/* =====================================================
   NAVEGACIÓN
   ===================================================== */
function cambiarSeccion(nombre) {
  estado.seccion = nombre;
  localStorage.setItem('kp_seccion', nombre);

  $$('.nav-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.section === nombre)
  );
  $$('.seccion').forEach(s =>
    s.classList.toggle('active', s.id === `seccion-${nombre}`)
  );

  actualizarSubNav();
}

function cambiarCategoria(cat) {
  estado.categoria = cat;
  localStorage.setItem('kp_categoria', cat);

  $$('.sub-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat)
  );

  const subNav = document.querySelector('.sub-nav');
  if (subNav) subNav.classList.remove('oculto');

  renderProductos(cat);
}

/* =====================================================
   MODAL DE PRODUCTO
   ===================================================== */
let compraActual = null;

function abrirModal(item, esOferta = false) {
  const esProducto = !esOferta;

  if (esProducto) {
    const calc = calcularPrecios(item);
    compraActual = {
      id: item.id,
      nombre: item.nombre,
      imagen: item.imagen,
      esOferta: false,
      cantidad: 1,
      moneda: 'CUP',
      precio: calc.finalCUP
    };

    $('#monedaSelector').classList.add('hidden');
    const priceEl = $('#modalPrice');
    priceEl.classList.remove('hidden');
    priceEl.innerHTML = renderPrecioHTML(calc.finalCUP, 'CUP');
  } else {
    compraActual = {
      id: item.id,
      nombre: 'Oferta especial',
      imagen: item.imagen,
      esOferta: true,
      cantidad: 1,
      moneda: 'USD',
      precio: item.precio
    };

    $('#monedaSelector').classList.add('hidden');
    const priceEl = $('#modalPrice');
    priceEl.classList.remove('hidden');
    priceEl.innerHTML = renderPrecioHTML(item.precio, 'USD');
  }

  const modalImg = $('#modalImg');
  modalImg.src = item.imagen;
  modalImg.alt = compraActual.nombre;
  modalImg.onerror = function () {
    this.onerror = null;
    this.src = PLACEHOLDER;
  };

  $('#modalTitle').textContent = compraActual.nombre;

  $('#qtyValue').textContent = '1';
  actualizarTotal();

  const modal = $('#modal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  const modal = $('#modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  compraActual = null;
}

function actualizarTotal() {
  if (!compraActual) return;
  const total = compraActual.precio * compraActual.cantidad;
  const m = normalizarMoneda(compraActual.moneda);
  $('#modalTotal').textContent = `$${formatoMonedaNum(total, m)} ${m}`;
  $('#qtyValue').textContent = compraActual.cantidad;
}

function enviarWhatsAppDirecto() {
  if (!compraActual) return;

  const item = {
    id: compraActual.id,
    nombre: compraActual.nombre,
    precio: compraActual.precio,
    moneda: normalizarMoneda(compraActual.moneda),
    cantidad: compraActual.cantidad
  };

  const msg = generarMensajePedido([item]);
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  lanzarConfeti(50);
  mostrarToast('Pedido enviado a WhatsApp');
  cerrarModal();
}

function añadirAlCarritoDesdeModal() {
  if (!compraActual) return;

  agregarAlCarrito(
    {
      id: compraActual.id,
      nombre: compraActual.nombre,
      precio: compraActual.precio,
      moneda: compraActual.moneda,
      imagen: compraActual.imagen
    },
    compraActual.cantidad
  );
  cerrarModal();
}

/* =====================================================
   MODAL CARRITO
   ===================================================== */
function abrirCarrito() {
  renderCarrito();
  const modal = $('#cartModal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function cerrarCarrito() {
  const modal = $('#cartModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* =====================================================
   MODAL DIRECCIÓN
   ===================================================== */
function abrirDireccionModal() {
  $('#dirText').textContent = CONFIG.direccion;
  $('#dirMapBtn').href = CONFIG.maps;

  const modal = $('#direccionModal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function cerrarDireccionModal() {
  const modal = $('#direccionModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* =====================================================
   INFO FAB
   ===================================================== */
function configurarFAB() {
  const btn = $('#infoBtn');
  const panel = $('#infoPanel');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const abierto = panel.classList.toggle('open');
    panel.setAttribute('aria-hidden', !abierto);
  });

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && e.target !== btn) {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    }
  });

  $('#infoPanel [data-net="instagram"]').href = CONFIG.instagram;
  $('#infoPanel [data-net="whatsapp"]').href  = `https://wa.me/${CONFIG.whatsapp}`;
  $('#infoPanel [data-net="tel"]').href       = `tel:${CONFIG.telefono.replace(/\s/g, '')}`;

  $('#infoPanel [data-net="maps"]').addEventListener('click', () => {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    abrirDireccionModal();
  });
}

/* =====================================================
   TOAST
   ===================================================== */
let toastTimer;
function mostrarToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.classList.add('hidden'), 300);
  }, 2400);
}

/* =====================================================
   CONFETTI SUAVE
   ===================================================== */
const canvasConf = document.getElementById('confetti');
const ctxConf = canvasConf.getContext('2d');
let particulas = [];
let confRaf = null;

const CONFETTI_COLORS = [
  '#F8BBD0', '#FADADD', '#D8C4F1', '#B39DDB',
  '#BDE0FE', '#B8E6D5', '#FFE7A9', '#E85D8F', '#8E6BBE'
];

function ajustarCanvasConfetti() {
  const dpr = window.devicePixelRatio || 1;
  canvasConf.width = window.innerWidth * dpr;
  canvasConf.height = window.innerHeight * dpr;
  canvasConf.style.width = window.innerWidth + 'px';
  canvasConf.style.height = window.innerHeight + 'px';
  ctxConf.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function lanzarConfeti(cantidad = 40) {
  const w = window.innerWidth;
  for (let i = 0; i < cantidad; i++) {
    particulas.push({
      x: Math.random() * w,
      y: -20 - Math.random() * 60,
      size: 6 + Math.random() * 8,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.15,
      vx: (Math.random() - 0.5) * 1.6,
      vy: 1.4 + Math.random() * 2.2,
      life: 1,
      forma: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }
  if (!confRaf) animarConfeti();
}

function animarConfeti() {
  ctxConf.clearRect(0, 0, canvasConf.width, canvasConf.height);
  const h = window.innerHeight;

  particulas.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.035;
    p.rot += p.vrot;
    p.life -= 0.0035;
  });

  particulas = particulas.filter(p => p.y < h + 40 && p.life > 0);

  particulas.forEach(p => {
    ctxConf.save();
    ctxConf.globalAlpha = Math.max(0, Math.min(1, p.life));
    ctxConf.translate(p.x, p.y);
    ctxConf.rotate(p.rot);
    ctxConf.fillStyle = p.color;

    if (p.forma === 'rect') {
      ctxConf.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.55);
    } else {
      ctxConf.beginPath();
      ctxConf.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      ctxConf.fill();
    }
    ctxConf.restore();
  });

  if (particulas.length > 0) {
    confRaf = requestAnimationFrame(animarConfeti);
  } else {
    confRaf = null;
    ctxConf.clearRect(0, 0, canvasConf.width, canvasConf.height);
  }
}

/* =====================================================
   INSTALACIÓN PWA
   ===================================================== */
let deferredPrompt = null;

function configurarInstalacion() {
  const btn = $('#installBtn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btn.classList.remove('hidden');
    setTimeout(ajustarAlturaHeader, 50);
  });

  btn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') mostrarToast('¡Aplicación instalada!');
    deferredPrompt = null;
    btn.classList.add('hidden');
    setTimeout(ajustarAlturaHeader, 50);
  });

  window.addEventListener('appinstalled', () => {
    btn.classList.add('hidden');
    deferredPrompt = null;
    setTimeout(ajustarAlturaHeader, 50);
  });
}

/* =====================================================
   SERVICE WORKER
   ===================================================== */
function registrarSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then((reg) => { reg.update(); })
        .catch(console.warn);
    });
  }
}

/* =====================================================
   INIT
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  
  /* =====================================================
     TEMA HALLOWEEN (Automático en Octubre)
     ===================================================== */
  const mesActual = new Date().getMonth(); // 0 = Enero, 9 = Octubre
  if (mesActual === 9) {
    const linkHalloween = document.createElement('link');
    linkHalloween.rel = 'stylesheet';
    linkHalloween.href = 'styles/halloween.css';
    document.head.appendChild(linkHalloween);
  }
  
  const searchInput = $('#searchInput');
  const searchClear = $('#searchClear');
  const subNav = document.querySelector('.sub-nav');

  $$('.nav-btn').forEach(b =>
    b.addEventListener('click', () => {
      if (searchInput.value.trim()) {
        searchInput.value = '';
        searchClear.classList.add('hidden');
        subNav.classList.remove('hidden');
        renderProductos(estado.categoria);
      }
      cambiarSeccion(b.dataset.section);
    })
  );

  $$('.sub-btn').forEach(b =>
    b.addEventListener('click', () => cambiarCategoria(b.dataset.cat))
  );

  let searchTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => aplicarBusqueda(e.target.value), 120);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      aplicarBusqueda('');
    }
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    aplicarBusqueda('');
    searchInput.focus();
  });

  $('#modalClose').addEventListener('click', cerrarModal);
  $('#modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') cerrarModal();
  });
  $('#qtyMinus').addEventListener('click', () => {
    if (compraActual && compraActual.cantidad > 1) {
      compraActual.cantidad--;
      actualizarTotal();
    }
  });
  $('#qtyPlus').addEventListener('click', () => {
    if (compraActual) {
      compraActual.cantidad++;
      actualizarTotal();
    }
  });
  $('#modalAddCart').addEventListener('click', añadirAlCarritoDesdeModal);
  $('#modalConfirm').addEventListener('click', enviarWhatsAppDirecto);

  $('#modalImg').addEventListener('click', (e) => {
    e.stopPropagation();
    if (compraActual) {
      abrirLightbox(compraActual.imagen, compraActual.nombre);
    }
  });

  $('#cartBtn').addEventListener('click', abrirCarrito);
  $('#cartClose').addEventListener('click', cerrarCarrito);
  $('#cartModal').addEventListener('click', (e) => {
    if (e.target.id === 'cartModal') cerrarCarrito();
  });
  $('#cartCheckout').addEventListener('click', checkoutCarrito);
  $('#cartClear').addEventListener('click', vaciarCarrito);

  $('#dirClose').addEventListener('click', cerrarDireccionModal);
  $('#direccionModal').addEventListener('click', (e) => {
    if (e.target.id === 'direccionModal') cerrarDireccionModal();
  });

  $('#lightboxClose').addEventListener('click', (e) => {
    e.stopPropagation();
    cerrarLightbox();
  });
  $('#lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') cerrarLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lb = $('#lightbox');
      if (!lb.classList.contains('hidden')) {
        cerrarLightbox();
        return;
      }
      cerrarModal();
      cerrarCarrito();
      cerrarDireccionModal();
    }
  });

  configurarFAB();
  configurarInstalacion();
  configurarScrollSubNav();

  ajustarCanvasConfetti();
  window.addEventListener('resize', ajustarCanvasConfetti);

  ajustarAlturaHeader();
  window.addEventListener('resize', ajustarAlturaHeader);

  cambiarSeccion(estado.seccion);
  cambiarCategoria(estado.categoria);
  renderOfertas();
  renderCarrito();
  actualizarBadgeCarrito();

  registrarSW();
});
