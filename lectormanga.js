// ================================================
// LECTOR DE MANGA - SISTEMA COMPLETAMENTE SEPARADO
// ================================================

// Base de datos de mangas por contenedor/subcontenedor
const mangaDatabase = {
    // ================================================
    // CONTENEDOR 1
    // ================================================
    
    // Sub-contenedor 1.1
    '1_1': {
        titulo: "🎌 Quintillizas Porneras",
        descripcion: "Miku la mas puta quiere hacer porno con sus hermanas culonas.",
        paginas: 15,
        año: 2017,
        autor: "Ken Wakui",
        paginasUrls: [
            "https://pbs.twimg.com/media/G75WPTWXgAARV2h?format=png&name=large", // Página 1
            "https://pbs.twimg.com/media/G75WQvSWMAEmFMf?format=png&name=large", // Página 2
            "https://pbs.twimg.com/media/G75WS8fW8AEldTx?format=png&name=large", // Página 3
            "https://pbs.twimg.com/media/G75WagZXUAMh8pQ?format=png&name=large", // Página 4
            "https://pbs.twimg.com/media/G75Wc1bXsAALyNr?format=png&name=large", // Página 5
            "https://pbs.twimg.com/media/G75Wfl3WUAEYOfy?format=png&name=large", // Página 6
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=1800&fit=crop&auto=format", // Página 7
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1800&fit=crop&auto=format", // Página 8
            "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&h=1800&fit=crop&auto=format", // Página 9
            "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=1800&fit=crop&auto=format", // Página 10
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=1800&fit=crop&auto=format", // Página 11
            "https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=1200&h=1800&fit=crop&auto=format", // Página 12
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=1800&fit=crop&auto=format", // Página 13
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1800&fit=crop&auto=format", // Página 14
            "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&h=1800&fit=crop&auto=format"  // Página 15
        ]
    },
    
    // Sub-contenedor 1.2
    '1_2': {
        titulo: "🐉 Dragon Ball Super - Arco del Torneo del Poder",
        descripcion: "Goku y sus amigos luchan por la supervivencia del universo 7.",
        paginas: 10,
        año: 2015,
        autor: "Akira Toriyama",
        paginasUrls: [
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=1800&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1800&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=1800&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=1200&h=1800&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&h=1800&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=1800&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=1800&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1800&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=1800&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=1200&h=1800&fit=crop&auto=format"
        ]
    },
    
    // Sub-contenedor 1.3 (VACÍO - EJEMPLO)
    '1_3': {
        titulo: "Naruto Shippuden - Volumen 25",
        descripcion: "¡Agrega tus propias imágenes de manga aquí!",
        paginas: 0,
        año: 2007,
        autor: "Masashi Kishimoto",
        paginasUrls: []
    },
    
    // ================================================
    // CONTENEDOR 2 (VACÍO - LISTO PARA RELLENAR)
    // ================================================
    '2_1': {
        titulo: "One Piece - Arco de Wano",
        descripcion: "Luffy y la tripulación del Sombrero de Paja llegan a Wano.",
        paginas: 0,
        año: 2018,
        autor: "Eiichiro Oda",
        paginasUrls: []
    },
    
    '2_2': {
        titulo: "Jujutsu Kaisen - Volumen 3",
        descripcion: "Yuji Itadori continúa su entrenamiento como hechicero.",
        paginas: 0,
        año: 2018,
        autor: "Gege Akutami",
        paginasUrls: []
    },
    
    // ================================================
    // MÁS CONTENEDORES VACÍOS (LISTOS PARA RELLENAR)
    // ================================================
    '3_1': { titulo: "Manga disponible próximamente", descripcion: "", paginas: 0, año: "", autor: "", paginasUrls: [] },
    '4_1': { titulo: "Manga disponible próximamente", descripcion: "", paginas: 0, año: "", autor: "", paginasUrls: [] },
    '5_1': { titulo: "Manga disponible próximamente", descripcion: "", paginas: 0, año: "", autor: "", paginasUrls: [] }
};

// ================================================
// VARIABLES DEL LECTOR
// ================================================
let lectorActivo = false;
let mangaActual = null;
let paginaActual = 0;
let totalPaginas = 0;
let contenedorManga = null;
let subcontenedorManga = null;

// ================================================
// FUNCIONES PRINCIPALES
// ================================================

function iniciarLectorManga(contenedor, subcontenedor) {
    contenedorManga = contenedor;
    subcontenedorManga = subcontenedor;
    
    const key = `${contenedor}_${subcontenedor}`;
    mangaActual = mangaDatabase[key];
    
    if (!mangaActual || mangaActual.paginas === 0 || mangaActual.paginasUrls.length === 0) {
        alert(`Este sub-contenedor aún no tiene manga disponible.\n\nAgrega las URLs de las páginas en lectormanga.js\nBusca la clave: '${key}'`);
        return;
    }
    
    lectorActivo = true;
    paginaActual = 1; // Empezar en página 1
    totalPaginas = mangaActual.paginas;
    
    // Ocultar todo y mostrar el lector
    ocultarTodoParaLector();
    mostrarLectorManga();
    cargarPaginaManga();
}

function ocultarTodoParaLector() {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.especial-section').style.display = 'none';
    document.querySelector('.additional-section').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    
    // Ocultar botón casa también
    const btnCasa = document.getElementById('boton-casa');
    if (btnCasa) btnCasa.style.display = 'none';
}

function mostrarLectorManga() {
    // Crear contenedor del lector si no existe
    if (!document.getElementById('lector-manga-container')) {
        const lectorDiv = document.createElement('div');
        lectorDiv.id = 'lector-manga-container';
        lectorDiv.className = 'lector-manga-container';
        document.body.appendChild(lectorDiv);
    }
    
    const lectorContainer = document.getElementById('lector-manga-container');
    lectorContainer.style.display = 'block';
    
    // Scroll al inicio
    window.scrollTo(0, 0);
    
    // Crear interfaz del lector
    lectorContainer.innerHTML = `
        <!-- BARRA SUPERIOR -->
        <div class="lector-header">
            <button class="lector-btn volver-btn" onclick="cerrarLectorManga()">
                ❌ Cerrar Lector
            </button>
            <div class="lector-info">
                <h2>${mangaActual.titulo}</h2>
                <p>Página <span id="pagina-actual">${paginaActual}</span> / ${totalPaginas}</p>
            </div>
            <div class="lector-metadata">
                <span>📖 ${mangaActual.autor}</span>
                <span>📅 ${mangaActual.año}</span>
            </div>
        </div>
        
        <!-- VISOR DE MANGA (OCUPA CASI TODA LA PANTALLA) -->
        <div class="visor-manga">
            <div class="manga-imagen-container">
                <img id="manga-imagen" src="" alt="Página ${paginaActual}" class="manga-imagen">
                <div class="manga-cargando" id="manga-cargando">
                    <div class="spinner"></div>
                    <p>Cargando página...</p>
                </div>
            </div>
            
            <!-- CONTROLES FLOTANTES -->
            <div class="controles-flotantes">
                <button class="control-btn btn-anterior" onclick="paginaAnterior()" ${paginaActual === 1 ? 'disabled' : ''}>
                    ← Anterior
                </button>
                <div class="contador-pagina">
                    ${paginaActual} / ${totalPaginas}
                </div>
                <button class="control-btn btn-siguiente" onclick="paginaSiguiente()" ${paginaActual === totalPaginas ? 'disabled' : ''}>
                    Siguiente →
                </button>
            </div>
            
            <!-- MENÚ INFERIOR -->
            <div class="menu-inferior">
                <button class="menu-btn" onclick="irAPagina(1)" ${paginaActual === 1 ? 'disabled' : ''}>
                    ⏮️ Primera
                </button>
                <button class="menu-btn" onclick="irAPagina(Math.max(1, paginaActual - 5))">
                    -5 Páginas
                </button>
                <button class="menu-btn" onclick="irAPagina(Math.min(totalPaginas, paginaActual + 5))">
                    +5 Páginas
                </button>
                <button class="menu-btn" onclick="irAPagina(totalPaginas)" ${paginaActual === totalPaginas ? 'disabled' : ''}>
                    Última ⏭️
                </button>
                <select class="menu-select" onchange="irAPagina(parseInt(this.value))" id="selector-pagina">
                    <!-- Opciones se llenan dinámicamente -->
                </select>
            </div>
            
            <!-- DESCRIPCIÓN -->
            <div class="manga-descripcion">
                <p>${mangaActual.descripcion}</p>
                <p class="manga-aviso">💡 Cada página nueva comienza desde arriba automáticamente</p>
            </div>
        </div>
    `;
    
    // Llenar selector de páginas
    const selector = document.getElementById('selector-pagina');
    if (selector) {
        for (let i = 1; i <= totalPaginas; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Página ${i}`;
            if (i === paginaActual) option.selected = true;
            selector.appendChild(option);
        }
    }
}

function cargarPaginaManga() {
    if (!mangaActual || !lectorActivo) return;
    
    // Scroll al inicio (IMPORTANTE: cada página empieza desde arriba)
    window.scrollTo(0, 0);
    
    // Mostrar cargando
    const cargando = document.getElementById('manga-cargando');
    const imagen = document.getElementById('manga-imagen');
    
    if (cargando) cargando.style.display = 'flex';
    if (imagen) imagen.style.opacity = '0';
    
    // Cargar imagen
    const urlImagen = mangaActual.paginasUrls[paginaActual - 1];
    
    if (imagen) {
        imagen.src = urlImagen;
        imagen.onload = function() {
            // Ocultar cargando
            if (cargando) cargando.style.display = 'none';
            imagen.style.opacity = '1';
            
            // Actualizar controles
            actualizarControlesLector();
        };
        
        imagen.onerror = function() {
            if (cargando) cargando.innerHTML = '<p>❌ Error al cargar la página</p>';
            imagen.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=1800&fit=crop&auto=format';
        };
    }
    
    // Actualizar contador
    const contador = document.getElementById('pagina-actual');
    if (contador) contador.textContent = paginaActual;
    
    // Actualizar selector
    const selector = document.getElementById('selector-pagina');
    if (selector) selector.value = paginaActual;
}

function actualizarControlesLector() {
    // Actualizar botones anterior/siguiente
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnSiguiente = document.querySelector('.btn-siguiente');
    const contador = document.querySelector('.contador-pagina');
    
    if (btnAnterior) {
        btnAnterior.disabled = paginaActual === 1;
    }
    
    if (btnSiguiente) {
        btnSiguiente.disabled = paginaActual === totalPaginas;
    }
    
    if (contador) {
        contador.textContent = `${paginaActual} / ${totalPaginas}`;
    }
}

// ================================================
// NAVEGACIÓN DE PÁGINAS
// ================================================

function paginaAnterior() {
    if (paginaActual > 1) {
        paginaActual--;
        cargarPaginaManga();
    }
}

function paginaSiguiente() {
    if (paginaActual < totalPaginas) {
        paginaActual++;
        cargarPaginaManga();
    }
}

function irAPagina(numero) {
    if (numero >= 1 && numero <= totalPaginas) {
        paginaActual = numero;
        cargarPaginaManga();
    }
}

// ================================================
// CERRAR LECTOR Y VOLVER
// ================================================

function cerrarLectorManga() {
    lectorActivo = false;
    
    // Ocultar lector
    const lectorContainer = document.getElementById('lector-manga-container');
    if (lectorContainer) {
        lectorContainer.style.display = 'none';
    }
    
    // Mostrar botón casa
    const btnCasa = document.getElementById('boton-casa');
    if (btnCasa) btnCasa.style.display = 'flex';
    
    // Volver al subcontenedor de manga
    if (contenedorManga && subcontenedorManga) {
        cargarMazos(contenedorManga, subcontenedorManga);
    }
}

// ================================================
// TECLAS DEL TECLADO PARA NAVEGACIÓN
// ================================================

document.addEventListener('keydown', function(event) {
    if (!lectorActivo) return;
    
    switch(event.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
            paginaAnterior();
            break;
            
        case 'ArrowRight':
        case 'd':
        case 'D':
        case ' ':
            paginaSiguiente();
            break;
            
        case 'Escape':
            cerrarLectorManga();
            break;
            
        case 'Home':
            irAPagina(1);
            break;
            
        case 'End':
            irAPagina(totalPaginas);
            break;
    }
});

// ================================================
// FUNCIONES DE UTILIDAD PARA AGREGAR MANGAS
// ================================================

function agregarManga(contenedor, subcontenedor, titulo, descripcion, paginasUrls, año, autor) {
    const key = `${contenedor}_${subcontenedor}`;
    
    mangaDatabase[key] = {
        titulo: titulo || `Manga ${contenedor}-${subcontenedor}`,
        descripcion: descripcion || "",
        paginas: paginasUrls.length,
        año: año || new Date().getFullYear(),
        autor: autor || "Desconocido",
        paginasUrls: paginasUrls
    };
    
    return true;
}

function existeManga(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return mangaDatabase[key] && mangaDatabase[key].paginas > 0;
}

// ================================================
// INICIALIZAR ESTILOS DEL LECTOR
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    // Los estilos están en 1_style.css
    console.log('📖 Lector de Manga cargado y listo');
});
