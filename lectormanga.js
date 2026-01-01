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
        paginas: 20,
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
             "https://n4.kemono.cr/data/00/f9/00f951633f096c61b5957dcb2b633fbed1691d1f330470c30b41baa4d89cd804.jpg?f=kzNQl2uK60J0dseMab8YoXPc.jpeg",
             "https://n2.kemono.cr/data/0b/a7/0ba7742c700ad2650a07d60cfe23528b0e4a2b28578a7c7f6244f2225cd75b52.jpg?f=6wdCEGMWGZHQtu2Fuaga0s5n.jpeg",
             "https://n2.kemono.cr/data/1a/db/1adb814b1584fcbb959b74cb76d4387bf6c05b0811654518a00ce6b500173e30.jpg?f=wHBYoWJm7tecBvGJxZlbsSYi.jpeg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/48.jpg"
        ]
    },

      // Sub-contenedor 1.4 (VACÍO - EJEMPLO)
    '1_4': {
        titulo: "[鍋屋敷 (ナベシキ)] ニノラレ×ミクラレ 加筆版 (五等分の花嫁) [DL版]",
        descripcion: "¡Agrega tus propias imágenes de manga aquí!",
        paginas: 37,
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
             "https://n4.kemono.cr/data/00/f9/00f951633f096c61b5957dcb2b633fbed1691d1f330470c30b41baa4d89cd804.jpg?f=kzNQl2uK60J0dseMab8YoXPc.jpeg",
             "https://n2.kemono.cr/data/0b/a7/0ba7742c700ad2650a07d60cfe23528b0e4a2b28578a7c7f6244f2225cd75b52.jpg?f=6wdCEGMWGZHQtu2Fuaga0s5n.jpeg",
             "https://n2.kemono.cr/data/1a/db/1adb814b1584fcbb959b74cb76d4387bf6c05b0811654518a00ce6b500173e30.jpg?f=wHBYoWJm7tecBvGJxZlbsSYi.jpeg",
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
    '3_1': {
        titulo: "妹の同級生が推しのKカップ配信者で竿役に選ばれてしまった僕",
        descripcion: "amiga trola",
        paginas: 51,
        año: "",
        autor: "",
        paginasUrls: [
        "https://i2.nhentai.net/galleries/3711976/1.webp",
        "https://i1.nhentai.net/galleries/3711976/2.webp",  
        "https://i2.nhentai.net/galleries/3711976/3.webp",
        "https://i2.nhentai.net/galleries/3711976/4.webp",
        "https://i2.nhentai.net/galleries/3711976/5.webp",
        "https://i2.nhentai.net/galleries/3711976/6.webp",
        "https://i2.nhentai.net/galleries/3711976/7.webp",
        "https://i1.nhentai.net/galleries/3711976/8.webp",
        "https://i3.nhentai.net/galleries/3711976/9.webp",
        "https://i4.nhentai.net/galleries/3711976/10.webp",
        "https://i4.nhentai.net/galleries/3711976/11.webp",
        "https://i2.nhentai.net/galleries/3711976/12.webp",
        "https://i2.nhentai.net/galleries/3711976/13.webp",
        "https://i1.nhentai.net/galleries/3711976/14.webp",  
        "https://i2.nhentai.net/galleries/3711976/15.webp",
        "https://i2.nhentai.net/galleries/3711976/16.webp",
        "https://i3.nhentai.net/galleries/3711976/17.webp",
        "https://i1.nhentai.net/galleries/3711976/18.webp",
        "https://i3.nhentai.net/galleries/3711976/19.webp",
        "https://i1.nhentai.net/galleries/3711976/20.webp",
        "https://i2.nhentai.net/galleries/3711976/21.webp",
        "https://i3.nhentai.net/galleries/3711976/22.webp",
        "https://i4.nhentai.net/galleries/3711976/23.webp",
        "https://i4.nhentai.net/galleries/3711976/24.webp",
        "https://i1.nhentai.net/galleries/3711976/25.webp",
        "https://i2.nhentai.net/galleries/3711976/26.webp",  
        "https://i4.nhentai.net/galleries/3711976/27.webp",
        "https://i3.nhentai.net/galleries/3711976/28.webp",
        "https://i2.nhentai.net/galleries/3711976/29.webp",
        "https://i4.nhentai.net/galleries/3711976/30.webp",
        "https://i4.nhentai.net/galleries/3711976/31.webp",
        "https://i3.nhentai.net/galleries/3711976/32.webp",
        "https://i4.nhentai.net/galleries/3711976/33.webp",
        "https://i2.nhentai.net/galleries/3711976/34.webp",
        "https://i4.nhentai.net/galleries/3711976/35.webp",
        "https://i1.nhentai.net/galleries/3711976/36.webp",
        "https://i3.nhentai.net/galleries/3711976/37.webp",
        "https://i1.nhentai.net/galleries/3711976/38.webp",  
        "https://i2.nhentai.net/galleries/3711976/39.webp",
        "https://i4.nhentai.net/galleries/3711976/40.webp",
        "https://i3.nhentai.net/galleries/3711976/41.webp",
        "https://i1.nhentai.net/galleries/3711976/42.webp",
        "https://i3.nhentai.net/galleries/3711976/43.webp",
        "https://i3.nhentai.net/galleries/3711976/44.webp",
        "https://i3.nhentai.net/galleries/3711976/45.webp",
        "https://i4.nhentai.net/galleries/3711976/46.webp",
        "https://i1.nhentai.net/galleries/3711976/47.webp",
        "https://i4.nhentai.net/galleries/3711976/48.webp",  
        "https://i2.nhentai.net/galleries/3711976/49.webp",
        "https://i4.nhentai.net/galleries/3711976/50.webp", 
        "https://i1.nhentai.net/galleries/3711976/51.webp" 
       
        



            
        ]
    },
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
// VARIABLES DE ZOOM Y ARRASTRE
// ================================================
let zoomLevel = 1; // 1 = normal, 2 = 2x, 3 = 3x, 4 = 4x
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let scrollStartLeft = 0;
let scrollStartTop = 0;

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
    zoomLevel = 1; // Resetear zoom
    
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
        
        <!-- VISOR DE MANGA -->
        <div class="visor-manga">
            <div class="manga-imagen-container" id="manga-contenedor">
                <img id="manga-imagen" src="" alt="Página ${paginaActual}" class="manga-imagen">
                <div class="manga-cargando" id="manga-cargando">
                    <div class="spinner"></div>
                    <p>Cargando página...</p>
                </div>
                
                <!-- Indicador de zoom -->
                <div class="zoom-level" id="zoom-level">
                    Zoom: 1x
                </div>
                
                <!-- Botón de reset zoom -->
                <button class="reset-zoom-btn" id="reset-zoom-btn" title="Resetear zoom (R)">
                    ↺
                </button>
                
                <!-- Mensaje de ayuda para arrastre -->
                <div class="zoom-help" id="zoom-help">
                    Arrastra para moverte por la imagen
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
                <p class="manga-aviso">💡 Click en imagen para zoom | Arrastra para moverte | R para resetear</p>
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
    
    // Resetear zoom y arrastre
    zoomLevel = 1;
    isDragging = false;
    
    // Mostrar cargando
    const cargando = document.getElementById('manga-cargando');
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const zoomLevelDisplay = document.getElementById('zoom-level');
    const resetBtn = document.getElementById('reset-zoom-btn');
    const zoomHelp = document.getElementById('zoom-help');
    
    if (cargando) cargando.style.display = 'flex';
    if (imagen) {
        imagen.style.opacity = '0';
        imagen.classList.remove('zoom-2x', 'zoom-3x', 'zoom-4x');
    }
    if (contenedor) {
        contenedor.style.cursor = 'zoom-in';
        contenedor.scrollLeft = 0;
        contenedor.scrollTop = 0;
    }
    if (zoomLevelDisplay) zoomLevelDisplay.style.display = 'none';
    if (resetBtn) resetBtn.style.display = 'none';
    if (zoomHelp) zoomHelp.style.display = 'none';
    
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
            
            // Configurar eventos de zoom y arrastre
            configurarZoomYArrastre();
        };
        
        imagen.onerror = function() {
            if (cargando) cargando.innerHTML = '<p>❌ Error al cargar la página</p>';
            imagen.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=1800&fit=crop&auto=format';
            
            // Configurar zoom incluso con imagen de error
            setTimeout(() => {
                configurarZoomYArrastre();
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

function configurarZoomYArrastre() {
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const zoomLevelDisplay = document.getElementById('zoom-level');
    const resetBtn = document.getElementById('reset-zoom-btn');
    const zoomHelp = document.getElementById('zoom-help');
    
    if (!imagen || !contenedor) return;
    
    // Configurar eventos de arrastre
    function iniciarArrastre(e) {
        if (zoomLevel > 1) {
            isDragging = true;
            contenedor.style.cursor = 'grabbing';
            
            // Guardar posición inicial
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            scrollStartLeft = contenedor.scrollLeft;
            scrollStartTop = contenedor.scrollTop;
            
            e.preventDefault();
        }
    }
    
    function hacerArrastre(e) {
        if (!isDragging) return;
        
        // Calcular distancia arrastrada
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        
        // Aplicar scroll inverso (arrastrar hacia la derecha = mover imagen a la izquierda)
        contenedor.scrollLeft = scrollStartLeft - deltaX;
        contenedor.scrollTop = scrollStartTop - deltaY;
    }
    
    function detenerArrastre() {
        isDragging = false;
        contenedor.style.cursor = zoomLevel > 1 ? 'grab' : 'zoom-in';
    }
    
    // Asignar eventos de arrastre
    contenedor.addEventListener('mousedown', iniciarArrastre);
    contenedor.addEventListener('mousemove', hacerArrastre);
    contenedor.addEventListener('mouseup', detenerArrastre);
    contenedor.addEventListener('mouseleave', detenerArrastre);
    
    // Click para zoom
    imagen.addEventListener('click', function(e) {
        if (zoomLevel > 1) {
            // Si ya hay zoom, click simple no hace nada (solo arrastre)
            return;
        }
        
        e.stopPropagation();
        
        // Rotar entre niveles: 1x → 2x → 3x → 4x → 1x
        if (zoomLevel === 1) {
            aplicarZoom(2, e);
        } else if (zoomLevel === 2) {
            aplicarZoom(3, e);
        } else if (zoomLevel === 3) {
            aplicarZoom(4, e);
        } else {
            quitarZoom();
        }
    });
    
    // Doble click para zoom máximo
    imagen.addEventListener('dblclick', function(e) {
        e.stopPropagation();
        if (zoomLevel === 1) {
            aplicarZoom(4, e); // Doble click = zoom máximo
        } else {
            quitarZoom(); // Doble click con zoom activo = quitar zoom
        }
    });
    
    // Botón de reset
    if (resetBtn) {
        resetBtn.onclick = function(e) {
            e.stopPropagation();
            quitarZoom();
        };
    }
    
    // Configurar cursor inicial
    contenedor.style.cursor = 'zoom-in';
}

function aplicarZoom(nivel, clickEvent = null) {
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const zoomLevelDisplay = document.getElementById('zoom-level');
    const resetBtn = document.getElementById('reset-zoom-btn');
    const zoomHelp = document.getElementById('zoom-help');
    
    if (!imagen || !contenedor) return;
    
    // Quitar clases anteriores
    imagen.classList.remove('zoom-2x', 'zoom-3x', 'zoom-4x');
    
    // Aplicar nueva clase
    if (nivel === 2) {
        imagen.classList.add('zoom-2x');
        zoomLevel = 2;
    } else if (nivel === 3) {
        imagen.classList.add('zoom-3x');
        zoomLevel = 3;
    } else if (nivel === 4) {
        imagen.classList.add('zoom-4x');
        zoomLevel = 4;
    }
    
    // Cambiar cursor
    contenedor.style.cursor = 'grab';
    
    // Calcular posición de scroll si hay click
    if (clickEvent && contenedor) {
        // Obtener dimensiones
        const contenedorRect = contenedor.getBoundingClientRect();
        const imagenRect = imagen.getBoundingClientRect();
        
        // Calcular posición relativa del click
        const clickX = clickEvent.clientX - contenedorRect.left;
        const clickY = clickEvent.clientY - contenedorRect.top;
        
        // Calcular porcentajes
        const percentX = clickX / contenedorRect.width;
        const percentY = clickY / contenedorRect.height;
        
        // Calcular nueva posición de scroll para centrar en el click
        const nuevoScrollLeft = (percentX * imagenRect.width) - (contenedorRect.width / 2);
        const nuevoScrollTop = (percentY * imagenRect.height) - (contenedorRect.height / 2);
        
        // Aplicar scroll suavemente
        setTimeout(() => {
            contenedor.scrollLeft = Math.max(0, nuevoScrollLeft);
            contenedor.scrollTop = Math.max(0, nuevoScrollTop);
        }, 10);
    }
    
    // Mostrar indicador
    if (zoomLevelDisplay) {
        zoomLevelDisplay.textContent = `Zoom: ${nivel}x (Arrastra para moverte)`;
        zoomLevelDisplay.style.display = 'block';
    }
    
    // Mostrar botón reset
    if (resetBtn) {
        resetBtn.style.display = 'flex';
    }
    
    // Mostrar ayuda de arrastre
    if (zoomHelp) {
        zoomHelp.style.display = 'block';
        // Ocultar ayuda después de 5 segundos
        setTimeout(() => {
            if (zoomHelp) zoomHelp.style.display = 'none';
        }, 5000);
    }
}

function quitarZoom() {
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const zoomLevelDisplay = document.getElementById('zoom-level');
    const resetBtn = document.getElementById('reset-zoom-btn');
    const zoomHelp = document.getElementById('zoom-help');
    
    if (!imagen || !contenedor) return;
    
    // Quitar todas las clases de zoom
    imagen.classList.remove('zoom-2x', 'zoom-3x', 'zoom-4x');
    contenedor.style.cursor = 'zoom-in';
    zoomLevel = 1;
    isDragging = false;
    
    // Resetear scroll suavemente
    contenedor.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    
    // Ocultar indicador
    if (zoomLevelDisplay) {
        zoomLevelDisplay.style.display = 'none';
    }
    
    // Ocultar botón reset
    if (resetBtn) {
        resetBtn.style.display = 'none';
    }
    
    // Ocultar ayuda
    if (zoomHelp) {
        zoomHelp.style.display = 'none';
    }
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
    zoomLevel = 1;
    isDragging = false;
    
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
            
        case 'r':
        case 'R':
            event.preventDefault();
            quitarZoom();
            break;
            
        case '+':
        case '=':
            event.preventDefault();
            if (zoomLevel < 4) {
                aplicarZoom(zoomLevel + 1);
            }
            break;
            
        case '-':
        case '_':
            event.preventDefault();
            if (zoomLevel > 1) {
                aplicarZoom(zoomLevel - 1);
            }
            break;
            
        case '1':
            event.preventDefault();
            quitarZoom();
            break;
            
        case '2':
            event.preventDefault();
            aplicarZoom(2);
            break;
            
        case '3':
            event.preventDefault();
            aplicarZoom(3);
            break;
            
        case '4':
            event.preventDefault();
            aplicarZoom(4);
            break;
    }
});

// Zoom con rueda del ratón (Ctrl + Rueda)
document.addEventListener('wheel', function(event) {
    if (!lectorActivo || !event.ctrlKey) return;
    
    event.preventDefault();
    
    if (event.deltaY < 0) {
        // Rueda hacia arriba = más zoom
        if (zoomLevel < 4) {
            aplicarZoom(zoomLevel + 1);
        }
    } else {
        // Rueda hacia abajo = menos zoom
        if (zoomLevel > 1) {
            aplicarZoom(zoomLevel - 1);
        }
    }
}, { passive: false });

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
    console.log('📖 Lector de Manga con Zoom y Arrastre cargado y listo');
});
