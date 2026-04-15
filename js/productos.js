// Base de datos de productos con galería de imágenes
// Generado automáticamente desde Google Sheets
// Última actualización: 15/4/2026, 01:50:15

const productos = [
    {
        id: 1,
        nombre: "Corte de cabello clásico",
        descripcion: "Corte tradicional con tijera o máquina, adaptado al estilo del cliente.",
        descripcionDetallada: "Corte tradicional con tijera o máquina, adaptado al estilo del cliente y su tipo de cabello, logrando un acabado prolijo, equilibrado y fácil de mantener en el día a día.",
        precio: 10000,
        imagen: "https://lh3.googleusercontent.com/d/1SVClO1iVb6WxjkVvnKUPDu_Hdt7RVu1l",
        galeria: [
            "https://lh3.googleusercontent.com/d/1SVClO1iVb6WxjkVvnKUPDu_Hdt7RVu1l"
        ],
        categoria: "corte",
        stock: 6,
        caracteristicas: [
            "asesoramiento",
            "herramientas profesionales",
            "protocolo de higiene",
            "acabado prolijo"
        ]
    },
    {
        id: 2,
        nombre: "Fade (degradado)",
        descripcion: "Corte moderno con transición progresiva en los laterales (low, mid, high fade).",
        descripcionDetallada: "Corte moderno con transición progresiva en los laterales (low, mid, high fade), trabajado con precisión para lograr un degradado limpio, uniforme y perfectamente integrado con la parte superior.",
        precio: 12000,
        imagen: "https://lh3.googleusercontent.com/d/1dc8WcqHMgbJrZ0I-7DnftxkOPJOdW2fV",
        galeria: [
            "https://lh3.googleusercontent.com/d/1dc8WcqHMgbJrZ0I-7DnftxkOPJOdW2fV"
        ],
        categoria: "corte",
        stock: 2,
        caracteristicas: [
            "asesoramiento",
            "herramientas profesionales",
            "protocolo de higiene",
            "acabado prolijo"
        ]
    },
    {
        id: 3,
        nombre: "Arreglo de barba",
        descripcion: "Perfilado, recorte y definición de la barba según la forma del rostro.",
        descripcionDetallada: "Perfilado, recorte y definición de la barba según la forma del rostro, respetando proporciones y estilo personal para un resultado prolijo, simétrico y bien marcado.",
        precio: 7000,
        imagen: "https://lh3.googleusercontent.com/d/1jOuQO_IvmsFF8E3G3cxZBoIE39uFxtSh",
        galeria: [
            "https://lh3.googleusercontent.com/d/1jOuQO_IvmsFF8E3G3cxZBoIE39uFxtSh"
        ],
        categoria: "corte",
        stock: 6,
        caracteristicas: [
            "asesoramiento",
            "herramientas profesionales",
            "protocolo de higiene",
            "acabado prolijo"
        ]
    },
    {
        id: 4,
        nombre: "Afeitado clásico con navaja",
        descripcion: "Rasurado al ras con toalla caliente, espuma y navaja para un acabado profesional.",
        descripcionDetallada: "Rasurado al ras con toalla caliente, espuma y navaja, acompañado de técnicas tradicionales que reducen la irritación y dejan la piel suave, limpia y con un acabado profesional.",
        precio: 8000,
        imagen: "https://lh3.googleusercontent.com/d/1LW81Uq-jK89HOZyFLckfGUx4nXaIbJx-",
        galeria: [
            "https://lh3.googleusercontent.com/d/1LW81Uq-jK89HOZyFLckfGUx4nXaIbJx-"
        ],
        categoria: "corte",
        stock: 6,
        caracteristicas: [
            "asesoramiento",
            "herramientas profesionales",
            "protocolo de higiene",
            "acabado prolijo"
        ]
    },
    {
        id: 5,
        nombre: "Corte + barba (combo)",
        descripcion: "Servicio completo que incluye corte de cabello y arreglo de barba.",
        descripcionDetallada: "Servicio completo que incluye corte de cabello y arreglo de barba, ideal para lograr un look integral, prolijo y alineado entre cabello y barba en una sola sesión.",
        precio: 16000,
        imagen: "https://lh3.googleusercontent.com/d/1Pb6XfOFG98LJ41Hvs_cUYCGpN-6wdJnn",
        galeria: [
            "https://lh3.googleusercontent.com/d/1Pb6XfOFG98LJ41Hvs_cUYCGpN-6wdJnn"
        ],
        categoria: "otros",
        stock: 3,
        caracteristicas: [
            "asesoramiento",
            "herramientas profesionales",
            "protocolo de higiene",
            "acabado prolijo"
        ]
    },
    {
        id: 6,
        nombre: "Diseños o líneas (hair design)",
        descripcion: "Trazos o dibujos personalizados realizados con máquina o navaja.",
        descripcionDetallada: "Trazos o dibujos personalizados realizados con máquina o navaja, adaptados al estilo del cliente para aportar un detalle distintivo, moderno y creativo al corte.",
        precio: 4000,
        imagen: "https://lh3.googleusercontent.com/d/1GJ98pUNwk_jBYXQcKEHe2I9wsWet6GvB",
        galeria: [
            "https://lh3.googleusercontent.com/d/1GJ98pUNwk_jBYXQcKEHe2I9wsWet6GvB"
        ],
        categoria: "otros",
        stock: 6,
        caracteristicas: [
            "asesoramiento",
            "herramientas profesionales",
            "protocolo de higiene",
            "acabado prolijo"
        ]
    },
    {
        id: 7,
        nombre: "Lavado capilar",
        descripcion: "Limpieza del cabello con productos específicos antes o después del corte.",
        descripcionDetallada: "Limpieza del cabello con productos específicos antes o después del corte, eliminando residuos y preparando el cabello para un mejor acabado y mayor duración del peinado.",
        precio: 3000,
        imagen: "https://lh3.googleusercontent.com/d/1vMacYyHGyelijuog6JZqg1Nehk8vAJwm",
        galeria: [
            "https://lh3.googleusercontent.com/d/1vMacYyHGyelijuog6JZqg1Nehk8vAJwm"
        ],
        categoria: "otros",
        stock: 2,
        caracteristicas: [
            "asesoramiento",
            "herramientas profesionales",
            "protocolo de higiene",
            "acabado prolijo"
        ]
    },
    {
        id: 8,
        nombre: "Tratamiento capilar",
        descripcion: "Hidratación, fortalecimiento o control de caspa/caída con productos especializados.",
        descripcionDetallada: "Hidratación, fortalecimiento o control de caspa/caída con productos especializados, enfocados en mejorar la salud del cuero cabelludo y la apariencia del cabello.",
        precio: 6000,
        imagen: "https://lh3.googleusercontent.com/d/1mrCPBrgGHvWDJl5c6zMjQ7Gor4w1mE7r",
        galeria: [
            "https://lh3.googleusercontent.com/d/1mrCPBrgGHvWDJl5c6zMjQ7Gor4w1mE7r"
        ],
        categoria: "otros",
        stock: 6,
        caracteristicas: [
            "asesoramiento",
            "herramientas profesionales",
            "protocolo de higiene",
            "acabado prolijo"
        ]
    },
    {
        id: 9,
        nombre: "Pomada para cabello efecto mate",
        descripcion: "Fijación fuerte con acabado natural sin brillo.",
        descripcionDetallada: "Pomada profesional ideal para lograr peinados definidos con un acabado mate y sin sensación grasosa. Se retira fácilmente con agua y no deja residuos, opción cómoda para el uso diario.",
        precio: 8500,
        imagen: "img/productos/placeholder.png",
        galeria: [
            "img/productos/placeholder.png"
        ],
        categoria: "productos",
        stock: 35,
        caracteristicas: [
            "Fijación alta",
            "Acabado mate",
            "Base acuosa (fácil de lavar)",
            "No deja residuos",
            "Apta para todo tipo de cabello",
            ""
        ]
    },
    {
        id: 10,
        nombre: "Aceite para barba premium",
        descripcion: "Hidratación profunda y aroma masculino duradero.",
        descripcionDetallada: "Aceite diseñado para nutrir, suavizar y dar brillo a la barba sin dejar sensación aceitosa. Reduce la picazón y la irritación de la piel, ayudando a mantener una barba saludable y prolija. ",
        precio: 6200,
        imagen: "img/productos/placeholder.png",
        galeria: [
            "img/productos/placeholder.png"
        ],
        categoria: "productos",
        stock: 50,
        caracteristicas: [
            "Hidratación profunda",
            "Reduce picazón y caspa",
            "Aroma amaderado",
            "Rápida absorción",
            "Envase con gotero",
            ""
        ]
    },
    {
        id: 11,
        nombre: "Máquina cortadora profesional inalámbrica",
        descripcion: "Precisión profesional con máxima libertad de movimiento.",
        descripcionDetallada: "Máquina de corte de alto rendimiento diseñada para uso intensivo en barberías. Cuenta con cuchillas de acero inoxidable de alta precisión, batería de larga duración y funcionamiento silencioso.",
        precio: 95000,
        imagen: "img/productos/placeholder.png",
        galeria: [
            "img/productos/placeholder.png"
        ],
        categoria: "productos",
        stock: 12,
        caracteristicas: [
            "Inalámbrica",
            "Autonomía de hasta 120 minutos",
            "Cuchillas de acero inoxidable",
            "Incluye peines guía",
            "Motor silencioso y potente",
            ""
        ]
    },
    {
        id: 12,
        nombre: "Shampoo masculino fortalecedor",
        descripcion: "Limpieza profunda con efecto fortalecedor.",
        descripcionDetallada: "Shampoo especialmente formulado para hombres que buscan mantener su cabello limpio, fuerte y saludable. Sensación fresca y revitalizante.",
        precio: 4900,
        imagen: "img/productos/placeholder.png",
        galeria: [
            "img/productos/placeholder.png"
        ],
        categoria: "productos",
        stock: 60,
        caracteristicas: [
            "Fortalece el cabello",
            "Limpieza profunda",
            "Aroma fresco",
            "Uso diario",
            "Apto para todo tipo de cabello",
            ""
        ]
    }
];


// ============================================
// FUNCIONES DEL CLIENTE (Navegador)
// ============================================

// Renderizar productos
function renderizarProductos() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = productos.map(producto => `
        <article class="product-card">
            <a href="producto.html?id=${producto.id}" class="product-link">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <p class="product-price">${formatearPrecio(producto.precio)}</p>
                </div>
            </a>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="window.location.href='producto.html?id=${producto.id}'" aria-label="Ver detalles de ${producto.nombre}">
                    Ver producto
                </button>

                <button class="add-to-cart-btn" onclick="agregarAlCarrito(${producto.id})" aria-label="Agregar ${producto.nombre} al carrito">
                    Agregar al Carrito
                </button>
            </div>
        </article>
    `).join('');
}

// Agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    actualizarContadorCarrito();
    mostrarNotificacion('Producto agregado al carrito');
}

// Formatear precio
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #22c55e;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', renderizarProductos);
