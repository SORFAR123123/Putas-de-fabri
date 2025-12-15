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
        año: 2024,
        autor: "Chikell ",
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
        titulo: "Ichika y Nino zorras putas",
        descripcion: "Estan despechadas y entregan el culo a cualquiera",
        paginas: 43,
        año: 2015,
        autor: "Akira Toriyama",
        paginasUrls: [
            "https://pbs.twimg.com/media/G8F_PvmXAAM_4S_?format=png&name=large",
            "https://pbs.twimg.com/media/G8F_RCLWQAARnWG?format=png&name=large",
            "https://pbs.twimg.com/media/G8F_Tp-WsAMZ3dl?format=png&name=large",
            "https://pbs.twimg.com/media/G8GAiYTXwAAYFEC?format=png&name=large",
            "https://s4.3hentai.net/d654238/7.jpg",
            "https://s4.3hentai.net/d654238/8.jpg",
            "https://s4.3hentai.net/d654238/9.jpg",
            "https://s4.3hentai.net/d654238/10.jpg",
            "https://s4.3hentai.net/d654238/11.jpg",
            "https://s4.3hentai.net/d654238/12.jpg",
            "https://s4.3hentai.net/d654238/13.jpg",
            "https://s4.3hentai.net/d654238/14.jpg",
            "https://s4.3hentai.net/d654238/15.jpg",
            "https://s4.3hentai.net/d654238/16.jpg",
            "https://s4.3hentai.net/d654238/17.jpg",
            "https://s4.3hentai.net/d654238/18.jpg",
            "https://s4.3hentai.net/d654238/19.jpg",
            "https://s4.3hentai.net/d654238/20.jpg",
            "https://s4.3hentai.net/d654238/21.jpg",
            "https://s4.3hentai.net/d654238/22.jpg",
            "https://s4.3hentai.net/d654238/23.jpg",
            "https://s4.3hentai.net/d654238/24.jpg",
            "https://s4.3hentai.net/d654238/25.jpg",
            "https://s4.3hentai.net/d654238/26.jpg",
            "https://s4.3hentai.net/d654238/27.jpg",
            "https://s4.3hentai.net/d654238/28.jpg",
            "https://s4.3hentai.net/d654238/29.jpg",
            "https://s4.3hentai.net/d654238/30.jpg",
            "https://s4.3hentai.net/d654238/31.jpg",
            "https://s4.3hentai.net/d654238/32.jpg",
            "https://s4.3hentai.net/d654238/33.jpg",
            "https://s4.3hentai.net/d654238/34.jpg",
            "https://s4.3hentai.net/d654238/35.jpg",
            "https://s4.3hentai.net/d654238/36.jpg",
            "https://s4.3hentai.net/d654238/37.jpg",
            "https://s4.3hentai.net/d654238/38.jpg",
            "https://s4.3hentai.net/d654238/39.jpg",
            "https://s4.3hentai.net/d654238/40.jpg",
            "https://s4.3hentai.net/d654238/41.jpg",
            "https://s4.3hentai.net/d654238/42.jpg",
            "https://s4.3hentai.net/d654238/43.jpg",
            "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/48.jpg"
        ]
    },
    
    // Sub-contenedor 1.3 (VACÍO - EJEMPLO)
    '1_3': {
        titulo: "Naruto Shippuden - Volumen 25",
        descripcion: "¡Agrega tus propias imágenes de manga aquí!",
        paginas: 0,
        año: 2007,
        autor: "Masashi Kishimoto",
        paginasUrls: [
            "https://n1.kemono.cr/data/fe/6e/fe6e2e72678907ddde2603a33211bedcda7b7ee0cb9ef310ef0bb9cf3261443d.jpg?f=JW6sEhEFq2IjpF7pplmHtIep.jpeg",
            "https://n1.kemono.cr/data/f8/8b/f88b23d9c5e1b2c55e4f0b3a3b9204b0abb4191248ed5db6bfaccfe6e5852141.jpg?f=X7uEbXgS1EqPj6aEJwLrVhXk.jpeg",
            "https://n4.kemono.cr/data/e1/f2/e1f24bf0ef7d10d9fc51a1d791985a04ed2dcba97f176f5f96c259c3bffe6086.jpg?f=MabLqYU0DJyBINbbutc0S5L2.jpeg",
            "https://n1.kemono.cr/data/73/4f/734f6c65dfff67019fb9e25a1e19d340b8b4d63f1f45b00641f41755bf24e4df.jpg?f=jakkYWZFAI3zXJLEDtndsvDj.jpeg",
            "https://n3.kemono.cr/data/55/a8/55a8b608a8667f2575244bdb0ef490d4a8e25d1d0482c0ae388be52e9cbc3c61.jpg?f=Nw87jbOR13VHDLdTr14Nb2nc.jpeg",
            "https://n4.kemono.cr/data/e2/e7/e2e7e97b948ea5a82ce75d3aed0e81ac4a3a8ef33c3c2c077d9baae194bbfeb1.jpg?f=xgqkwmvLE7f7vhIxjMdfkcSd.jpeg",
            "https://pbs.twimg.com/media/G8O88ThWgCw0LZQ?format=jpg&name=large",
            "https://pbs.twimg.com/media/G8O8-NaWMAgc4jo?format=jpg&name=large",
             "https://pbs.twimg.com/media/G8O8_bIWgAwR-o8?format=jpg&name=large",
             "https://pbs.twimg.com/media/G8O9AotWAAI_etC?format=jpg&name=large",
             "https://pbs.twimg.com/media/G8O9CttWgK0aIHg?format=jpg&name=large",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/48.jpg"
            
        ]
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

window.iniciarLectorManga = function(contenedor, subcontenedor) {
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
    
    // Quitar zoom si existe en la imagen anterior
    const imagenActual = document.getElementById('manga-imagen');
    if (imagenActual && imagenActual.classList.contains('zoom-activo')) {
        imagenActual.classList.remove('zoom-activo');
    }
    
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
            
            // Agregar evento click para zoom
            imagen.onclick = function() {
                if (imagen.classList.contains('zoom-activo')) {
                    imagen.classList.remove('zoom-activo');
                } else {
                    imagen.classList.add('zoom-activo');
                }
            };
        };
        
        imagen.onerror = function() {
            if (cargando) cargando.innerHTML = '<p>❌ Error al cargar la página</p>';
            imagen.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=1800&fit=crop&auto=format';
            
            // Aún así agregar evento click para zoom en caso de error
            imagen.onclick = function() {
                if (imagen.classList.contains('zoom-activo')) {
                    imagen.classList.remove('zoom-activo');
                } else {
                    imagen.classList.add('zoom-activo');
                }
            };
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
