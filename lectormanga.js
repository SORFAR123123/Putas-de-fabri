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
// VARIABLES DE ZOOM PROFESIONAL
// ================================================
let zoomActivo = false;
let lupaVisible = false;
let zoomScale = 1;
let modoZoomCompleto = false;
let isDragging = false;
let startX = 0, startY = 0;
let translateX = 0, translateY = 0;

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
    
    // Resetear variables de zoom
    zoomActivo = false;
    modoZoomCompleto = false;
    zoomScale = 1;
    
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
            <div class="manga-imagen-container" id="manga-contenedor">
                <img id="manga-imagen" src="" alt="Página ${paginaActual}" class="manga-imagen">
                <div class="manga-cargando" id="manga-cargando">
                    <div class="spinner"></div>
                    <p>Cargando página...</p>
                </div>
                
                <!-- Lupa para zoom -->
                <div class="lupa-container" id="lupa-container">
                    <img class="lupa-imagen" id="lupa-imagen" src="" alt="Zoom">
                </div>
                
                <!-- Botón zoom completo -->
                <button class="btn-zoom-completo" id="btn-zoom-completo" title="Modo zoom completo (Z)">
                    🔍
                </button>
                
                <!-- Indicador de zoom -->
                <div class="zoom-indicador" id="zoom-indicador">
                    Zoom: 1x
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
                <p class="manga-aviso">💡 Click en la imagen para zoom | Rueda para ajustar | Tecla Z para zoom completo</p>
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
    
    // Resetear zoom al cambiar de página
    zoomActivo = false;
    modoZoomCompleto = false;
    zoomScale = 1;
    
    // Mostrar cargando
    const cargando = document.getElementById('manga-cargando');
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const lupaContainer = document.getElementById('lupa-container');
    const zoomIndicador = document.getElementById('zoom-indicador');
    
    if (cargando) cargando.style.display = 'flex';
    if (imagen) imagen.style.opacity = '0';
    if (contenedor) {
        contenedor.classList.remove('modo-zoom-completo');
        contenedor.style.cursor = 'crosshair';
    }
    if (lupaContainer) lupaContainer.style.display = 'none';
    if (zoomIndicador) zoomIndicador.style.display = 'none';
    
    // Resetear posición de arrastre
    translateX = 0;
    translateY = 0;
    
    // Cargar imagen
    const urlImagen = mangaActual.paginasUrls[paginaActual - 1];
    
    if (imagen) {
        imagen.src = urlImagen;
        imagen.onload = function() {
            // Ocultar cargando
            if (cargando) cargando.style.display = 'none';
            imagen.style.opacity = '1';
            
            // Resetear transformación de imagen
            imagen.style.transform = 'scale(1)';
            
            // Actualizar controles
            actualizarControlesLector();
            
            // INICIALIZAR ZOOM PROFESIONAL
            inicializarZoomProfesional();
        };
        
        imagen.onerror = function() {
            if (cargando) cargando.innerHTML = '<p>❌ Error al cargar la página</p>';
            imagen.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=1800&fit=crop&auto=format';
            
            // Inicializar zoom incluso con imagen de error
            setTimeout(() => {
                inicializarZoomProfesional();
            }, 100);
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
    zoomActivo = false;
    modoZoomCompleto = false;
    
    // Remover event listeners de arrastre
    document.removeEventListener('mousemove', manejarArrastre);
    document.removeEventListener('mouseup', detenerArrastre);
    
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
// SISTEMA DE ZOOM PROFESIONAL
// ================================================

function inicializarZoomProfesional() {
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const lupaContainer = document.getElementById('lupa-container');
    const lupaImagen = document.getElementById('lupa-imagen');
    const btnZoomCompleto = document.getElementById('btn-zoom-completo');
    const zoomIndicador = document.getElementById('zoom-indicador');
    
    if (!imagen || !contenedor) return;
    
    // Configurar cursor inicial
    contenedor.style.cursor = 'crosshair';
    
    // Configurar lupa
    if (lupaImagen && imagen.src) {
        lupaImagen.src = imagen.src;
    }
    
    // Evento para mostrar lupa al mover ratón
    contenedor.addEventListener('mousemove', function(e) {
        if (!modoZoomCompleto && zoomActivo) {
            mostrarLupa(e);
        }
    });
    
    // Evento para entrar/salir del contenedor
    contenedor.addEventListener('mouseenter', function() {
        if (!modoZoomCompleto && zoomActivo) {
            lupaVisible = true;
            if (lupaContainer) lupaContainer.style.display = 'block';
        }
    });
    
    contenedor.addEventListener('mouseleave', function() {
        lupaVisible = false;
        if (lupaContainer) lupaContainer.style.display = 'none';
    });
    
    // Click para activar/desactivar zoom con lupa
    contenedor.addEventListener('click', function(e) {
        if (!modoZoomCompleto) {
            zoomActivo = !zoomActivo;
            
            if (zoomActivo) {
                contenedor.style.cursor = 'crosshair';
                lupaVisible = true;
                if (lupaContainer) lupaContainer.style.display = 'block';
                mostrarLupa(e);
                if (zoomIndicador) {
                    zoomIndicador.style.display = 'block';
                    const zoomTotal = (3 * zoomScale).toFixed(1);
                    zoomIndicador.textContent = `Zoom: ${zoomTotal}x (Click para quitar)`;
                }
            } else {
                contenedor.style.cursor = 'crosshair';
                lupaVisible = false;
                if (lupaContainer) lupaContainer.style.display = 'none';
                if (zoomIndicador) zoomIndicador.style.display = 'none';
            }
        }
    });
    
    // Botón zoom completo
    if (btnZoomCompleto) {
        btnZoomCompleto.onclick = function(e) {
            e.stopPropagation();
            toggleZoomCompleto();
        };
    }
    
    // Rueda del ratón para ajustar zoom
    contenedor.addEventListener('wheel', function(e) {
        if (zoomActivo && !modoZoomCompleto) {
            e.preventDefault();
            ajustarZoomRueda(e.deltaY);
        }
    });
}

function mostrarLupa(e) {
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const lupaContainer = document.getElementById('lupa-container');
    const lupaImagen = document.getElementById('lupa-imagen');
    
    if (!lupaVisible || !imagen || !contenedor || !lupaContainer || !lupaImagen) return;
    
    // Posición del ratón relativa al contenedor
    const rect = contenedor.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    // Asegurar que las coordenadas estén dentro del contenedor
    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(0, Math.min(y, rect.height));
    
    // Tamaño de la lupa
    const lupaSize = 300;
    
    // Posicionar lupa (centrada en el cursor)
    let lupaX = x - lupaSize / 2;
    let lupaY = y - lupaSize / 2;
    
    // Mantener lupa dentro de los límites del contenedor
    lupaX = Math.max(10, Math.min(lupaX, rect.width - lupaSize - 10));
    lupaY = Math.max(10, Math.min(lupaY, rect.height - lupaSize - 10));
    
    lupaContainer.style.left = lupaX + 'px';
    lupaContainer.style.top = lupaY + 'px';
    
    // Calcular zoom (3x por defecto, ajustable con rueda)
    const zoomLevel = 3 * zoomScale;
    
    // Calcular posición relativa en la imagen original
    const imgRect = imagen.getBoundingClientRect();
    const relativeX = x / rect.width;
    const relativeY = y / rect.height;
    
    // Calcular posición de la imagen dentro de la lupa
    const imgX = relativeX * imgRect.width;
    const imgY = relativeY * imgRect.height;
    
    // Aplicar zoom a la imagen dentro de la lupa
    lupaImagen.style.width = (imgRect.width * zoomLevel) + 'px';
    lupaImagen.style.height = (imgRect.height * zoomLevel) + 'px';
    
    // Posicionar la imagen dentro de la lupa para mostrar el área correcta
    lupaImagen.style.left = -(imgX * zoomLevel - lupaSize / 2) + 'px';
    lupaImagen.style.top = -(imgY * zoomLevel - lupaSize / 2) + 'px';
}

function ajustarZoomRueda(deltaY) {
    // Ajustar nivel de zoom con rueda
    if (deltaY > 0) {
        // Rueda hacia abajo = reducir zoom
        zoomScale = Math.max(0.5, zoomScale - 0.2);
    } else {
        // Rueda hacia arriba = aumentar zoom
        zoomScale = Math.min(5, zoomScale + 0.2); // Hasta 15x de zoom total (3 x 5)
    }
    
    const zoomIndicador = document.getElementById('zoom-indicador');
    if (zoomIndicador) {
        const zoomTotal = (3 * zoomScale).toFixed(1);
        zoomIndicador.textContent = `Zoom: ${zoomTotal}x (Click para quitar)`;
    }
}

function toggleZoomCompleto() {
    const contenedor = document.getElementById('manga-contenedor');
    const imagen = document.getElementById('manga-imagen');
    const btnZoomCompleto = document.getElementById('btn-zoom-completo');
    const lupaContainer = document.getElementById('lupa-container');
    const zoomIndicador = document.getElementById('zoom-indicador');
    
    if (!contenedor || !imagen) return;
    
    modoZoomCompleto = !modoZoomCompleto;
    
    if (modoZoomCompleto) {
        // Activar zoom completo
        contenedor.classList.add('modo-zoom-completo');
        contenedor.style.cursor = 'grab';
        
        // Desactivar lupa normal
        zoomActivo = false;
        lupaVisible = false;
        
        if (lupaContainer) lupaContainer.style.display = 'none';
        
        if (btnZoomCompleto) {
            btnZoomCompleto.textContent = '✕';
            btnZoomCompleto.title = 'Salir del zoom completo (Z)';
        }
        
        if (zoomIndicador) {
            zoomIndicador.style.display = 'block';
            zoomIndicador.textContent = 'Modo zoom completo - Arrastra para mover (Z para salir)';
            zoomIndicador.style.top = '10px';
            zoomIndicador.style.right = '10px';
        }
        
        // Resetear posición de arrastre
        translateX = 0;
        translateY = 0;
        imagen.style.transform = 'scale(3)';
        
        // Configurar arrastre
        configurarArrastreZoomCompleto();
        
    } else {
        // Desactivar zoom completo
        contenedor.classList.remove('modo-zoom-completo');
        contenedor.style.cursor = 'crosshair';
        
        // Resetear imagen
        imagen.style.transform = 'scale(1)';
        
        if (btnZoomCompleto) {
            btnZoomCompleto.textContent = '🔍';
            btnZoomCompleto.title = 'Modo zoom completo (Z)';
        }
        
        if (zoomIndicador) {
            zoomIndicador.style.display = 'none';
            zoomIndicador.style.top = '20px';
            zoomIndicador.style.right = '20px';
        }
        
        // Remover event listeners de arrastre
        document.removeEventListener('mousemove', manejarArrastre);
        document.removeEventListener('mouseup', detenerArrastre);
    }
}

function configurarArrastreZoomCompleto() {
    const contenedor = document.getElementById('manga-contenedor');
    const imagen = document.getElementById('manga-imagen');
    
    if (!contenedor || !imagen) return;
    
    // Remover listeners anteriores si existen
    contenedor.removeEventListener('mousedown', iniciarArrastre);
    document.removeEventListener('mousemove', manejarArrastre);
    document.removeEventListener('mouseup', detenerArrastre);
    
    contenedor.addEventListener('mousedown', iniciarArrastre);
    
    function iniciarArrastre(e) {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        contenedor.style.cursor = 'grabbing';
        e.preventDefault();
    }
    
    window.manejarArrastre = function(e) {
        if (!isDragging) return;
        e.preventDefault();
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        imagen.style.transform = `scale(3) translate(${translateX}px, ${translateY}px)`;
    }
    
    window.detenerArrastre = function() {
        isDragging = false;
        contenedor.style.cursor = 'grab';
    }
    
    document.addEventListener('mousemove', manejarArrastre);
    document.addEventListener('mouseup', detenerArrastre);
}

// ================================================
// TECLAS DEL TECLADO PARA NAVEGACIÓN Y ZOOM
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
            
        case 'z':
        case 'Z':
            event.preventDefault();
            toggleZoomCompleto();
            break;
            
        case '+':
        case '=':
            if (zoomActivo && !modoZoomCompleto) {
                zoomScale = Math.min(5, zoomScale + 0.2);
                const zoomIndicador = document.getElementById('zoom-indicador');
                if (zoomIndicador) {
                    const zoomTotal = (3 * zoomScale).toFixed(1);
                    zoomIndicador.textContent = `Zoom: ${zoomTotal}x (Click para quitar)`;
                }
            }
            break;
            
        case '-':
        case '_':
            if (zoomActivo && !modoZoomCompleto) {
                zoomScale = Math.max(0.5, zoomScale - 0.2);
                const zoomIndicador = document.getElementById('zoom-indicador');
                if (zoomIndicador) {
                    const zoomTotal = (3 * zoomScale).toFixed(1);
                    zoomIndicador.textContent = `Zoom: ${zoomTotal}x (Click para quitar)`;
                }
            }
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
    console.log('📖 Lector de Manga con Zoom Profesional cargado y listo');
});
