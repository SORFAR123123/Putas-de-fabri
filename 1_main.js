// ================================================
// SISTEMA PRINCIPAL DE NAVEGACIÓN Y QUIZ
// ================================================

// Variables globales
let contenedorActual = null;
let subcontenedorActual = null;
let mazoActual = null;
let palabrasActuales = [];
let indicePalabraActual = 0;
let aciertos = 0;
let errores = 0;
let esperandoSiguiente = false;

// Variables para videos y animes
let modoActual = 'manga'; // 'manga', 'video', 'anime', 'audio', 'asmr', 'rpg'
let idiomaVideoActual = 'espanol'; // 'espanol', 'japones'

// ====================
// FUNCIONES HEADER Y DINERO
// ====================

function ocultarHeader() {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.especial-section').style.display = 'none';
    document.querySelector('.additional-section').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    
    // Ocultar contador de dinero cuando no estemos en inicio
    const dineroContador = document.getElementById('dinero-inicio');
    if (dineroContador) {
        dineroContador.classList.add('hidden');
    }
}

function mostrarHeader() {
    document.querySelector('.header').style.display = 'block';
    document.querySelector('.especial-section').style.display = 'block';
    document.querySelector('.additional-section').style.display = 'block';
    document.querySelector('.footer').style.display = 'block';
    
    // Mostrar contador de dinero solo en inicio
    const dineroContador = document.getElementById('dinero-inicio');
    if (dineroContador) {
        dineroContador.classList.remove('hidden');
    }
}

function crearContadorDineroInicio() {
    // Crear contenedor de dinero SOLO para inicio
    if (!document.getElementById('dinero-inicio')) {
        const dineroDiv = document.createElement('div');
        dineroDiv.id = 'dinero-inicio';
        dineroDiv.className = 'dinero-inicio-container';
        dineroDiv.innerHTML = `
            <span>💰</span>
            <span id="dinero-cantidad-inicio">${sistemaEconomia.obtenerDinero().toFixed(2)}</span>
            <span>soles</span>
        `;
        
        // Insertar al principio del header
        const header = document.querySelector('.header');
        header.insertBefore(dineroDiv, header.firstChild);
    }
}

function actualizarContadorDineroInicio() {
    const dineroElement = document.getElementById('dinero-cantidad-inicio');
    if (dineroElement) {
        dineroElement.textContent = sistemaEconomia.obtenerDinero().toFixed(2);
    }
}

// ====================
// NAVEGACIÓN PRINCIPAL - TODOS LOS MODOS
// ====================

function cargarPaginaMangas() {
    modoActual = 'manga';
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresMangas();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarPaginaVideos() {
    modoActual = 'video';
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresVideos();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarPaginaAnimes() {
    modoActual = 'anime';
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresAnimes();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarPaginaAudios() {
    modoActual = 'audio';
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresAudios();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarPaginaASMR() {
    modoActual = 'asmr';
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresASMR();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// ====================
// NUEVA: FUNCIÓN PARA RPG QUINTILLIZAS
// ====================

function cargarPaginaRPG() {
    modoActual = 'rpg';
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    
    // Verificar si el RPG está cargado
    if (typeof quintillizasRPG !== 'undefined') {
        mangaSection.innerHTML = quintillizasRPG.cargarPaginaPrincipal();
    } else {
        mangaSection.innerHTML = `
            <div style="text-align: center; padding: 100px 20px;">
                <h2 style="color: #FF1493; margin-bottom: 20px;">🎮 RPG QUINTILLIZAS</h2>
                <p style="opacity: 0.8; margin-bottom: 30px;">El sistema RPG no se cargó correctamente.</p>
                <button class="btn-atras-especifico" onclick="volverAlInicio()">
                    ↩️ Volver al inicio
                </button>
            </div>
        `;
    }
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function volverAlInicio() {
    mostrarHeader();
    actualizarContadorDineroInicio();
    
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    
    // También ocultar lector de manga si está activo
    const lectorContainer = document.getElementById('lector-manga-container');
    if (lectorContainer) {
        lectorContainer.style.display = 'none';
    }
}

// ====================
// CREACIÓN DE UI - MANGAS (CORREGIDO: DESCRIPCIONES DINÁMICAS)
// ====================

function crearContenedoresMangas() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">📚 CONTENEDORES DE MANGAS</h2>';
    html += '<div class="manga-contenedores">';
    
    for (let i = 1; i <= 10; i++) {
        const contenedorData = obtenerContenedorManga(i);
        const desc = contenedorData.descripcion || '5 sub-contenedores con vocabulario y manga';
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedores(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen || obtenerImagenContenedor(i)}')"></div>
                <div class="contenedor-numero">CONTAINER ${i}</div>
                <p>${desc}</p>
                <div class="card-button">Abrir</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// CREACIÓN DE UI - VIDEOS (CORREGIDO: DESCRIPCIONES DINÁMICAS)
// ====================

function crearContenedoresVideos() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎬 CONTENEDORES DE VIDEOS</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Videos privados con timestamps en Google Drive</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresDisponibles();
    const totalContenedores = Object.keys(contenedores).length || 3;
    
    for (let i = 1; i <= Math.max(totalContenedores, 10); i++) {
        const contenedorData = obtenerContenedorVideo(i);
        const tieneVideos = contenedores[i] && contenedores[i].length > 0;
        const desc = contenedorData.descripcion || (tieneVideos ? contenedores[i].length + ' sub-contenedores con videos' : 'Sin videos aún');
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresVideos(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen || obtenerImagenContenedor(i)}')"></div>
                <div class="contenedor-numero">VIDEO CONTAINER ${i}</div>
                <p>${desc}</p>
                <div class="card-button">${tieneVideos ? 'Ver videos' : 'Vacío'}</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// CREACIÓN DE UI - ANIMES (CORREGIDO: DESCRIPCIONES DINÁMICAS)
// ====================

function crearContenedoresAnimes() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎌 CONTENEDORES DE ANIMES</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Animes con videos en español/japonés + vocabulario</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresAnimesDisponibles();
    const totalContenedores = Object.keys(contenedores).length || 10;
    
    for (let i = 1; i <= Math.max(totalContenedores, 10); i++) {
        const contenedorData = obtenerContenedorAnime(i);
        const tieneAnimes = contenedores[i] && contenedores[i].length > 0;
        const desc = contenedorData.descripcion || (tieneAnimes ? contenedores[i].length + ' sub-contenedores con animes' : '5 sub-contenedores disponibles');
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresAnimes(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen || obtenerImagenContenedorAnime(i)}')"></div>
                <div class="contenedor-numero">ANIME CONTAINER ${i}</div>
                <p>${desc}</p>
                <div class="card-button">${tieneAnimes ? 'Ver animes' : 'Explorar'}</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// CREACIÓN DE UI - AUDIOS (CORREGIDO: DESCRIPCIONES DINÁMICAS)
// ====================

function crearContenedoresAudios() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎵 CONTENEDORES DE AUDIOS</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Openings MP3 + vocabulario de letras</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresAudiosDisponibles();
    const totalContenedores = Object.keys(contenedores).length || 10;
    
    for (let i = 1; i <= Math.max(totalContenedores, 10); i++) {
        const contenedorData = obtenerContenedorAudio(i);
        const tieneAudios = contenedores[i] && contenedores[i].length > 0;
        const desc = contenedorData.descripcion || (tieneAudios ? contenedores[i].length + ' sub-contenedores con openings' : '5 sub-contenedores disponibles');
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresAudios(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen}')"></div>
                <div class="contenedor-numero">AUDIO CONTAINER ${i}</div>
                <p>${desc}</p>
                <div class="card-button" style="background: linear-gradient(135deg, #FF6B6B, #FFD166);">
                    ${tieneAudios ? '🎵 Escuchar audios' : 'Explorar'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// CREACIÓN DE UI - ASMR (CORREGIDO: DESCRIPCIONES DINÁMICAS)
// ====================

function crearContenedoresASMR() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎧 CONTENEDORES DE ASMR</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Audios relajantes para estudio y meditación</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresASMRDisponibles();
    const totalContenedores = Object.keys(contenedores).length || 4;
    
    for (let i = 1; i <= Math.max(totalContenedores, 4); i++) {
        const contenedorData = obtenerContenedorASMR(i);
        const tieneAudios = contenedores[i] && contenedores[i].length > 0;
        const desc = contenedorData.descripcion || (tieneAudios ? contenedores[i].length + ' sub-contenedores con audios' : '3 sub-contenedores disponibles');
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresASMR(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen}')"></div>
                <div class="contenedor-numero">ASMR CONTAINER ${i}</div>
                <p>${desc}</p>
                <div class="card-button" style="background: linear-gradient(135deg, #9C27B0, #673AB7);">
                    ${tieneAudios ? '🎧 Escuchar ASMR' : 'Explorar'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// FUNCIONES PARA MANGAS
// ====================

function cargarSubcontenedores(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'manga';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaMangas);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        📚 CONTENEDOR ${contenedor} - SUB-CONTENEDORES DE MANGA
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    for (let i = 1; i <= 5; i++) {
        const progreso = sistemaEconomia.obtenerProgreso(contenedor, i, 1);
        const subData = obtenerSubcontenedorManga(contenedor, i);
        
        html += `
            <div class="subcontenedor-item" onclick="cargarMazos(${contenedor}, ${i})">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                <h3>Sub-Contenedor ${i}</h3>
                <p>${subData.descripcion || 'Mazos de vocabulario y lector de manga'}</p>
                <div style="margin-top: 10px;">
                    <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
                        <div style="background: linear-gradient(135deg, #FFD166, #FF6B6B); width: ${progreso}%; height: 100%;"></div>
                    </div>
                    <p style="font-size: 0.9rem; margin-top: 5px; color: #FFD166;">${progreso}% completado</p>
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function cargarMazos(contenedor, subcontenedor) {
    subcontenedorActual = subcontenedor;
    modoActual = 'manga';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearMazosUI(contenedor, subcontenedor);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedores(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearMazosUI(contenedor, subcontenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        📚 C${contenedor}-SC${subcontenedor} - MAZOS DISPONIBLES
    </h2>`;
    
    // Botón para ir al Lector de Manga (NUEVO)
    const subData = obtenerSubcontenedorManga(contenedor, subcontenedor);
    if (subData && subData.manga) {
        html += `
            <div style="text-align: center; margin-bottom: 30px;">
                <button class="btn-manga-especial" onclick="cargarLectorManga(${contenedor}, ${subcontenedor})">
                    📖 ¡IR AL LECTOR DE MANGA!
                </button>
            </div>
        `;
    } else {
        html += `<p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">(Lector de manga no disponible para este sub-contenedor)</p>`;
    }

    html += '<div class="mazos-grid">';
    
    for (let i = 1; i <= 5; i++) {
        const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, i);
        const tieneVocabulario = verificarExistenciaVocabulario(contenedor, subcontenedor, i);
        
        html += `
            <div class="mazo-item ${!tieneVocabulario ? 'disabled' : ''}" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${i})` : 'alert(\'Mazo vacío\')'}">
                <h3>Mazo ${i}</h3>
                <p>Vocabulario y Quiz</p>
                ${progreso > 0 ? `
                    <div style="margin-top: 10px;">
                        <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
                            <div style="background: linear-gradient(135deg, #FFD166, #FF6B6B); width: ${progreso}%; height: 100%;"></div>
                        </div>
                        <p style="font-size: 0.9rem; margin-top: 5px; color: #FFD166;">${progreso}% completado</p>
                    </div>
                ` : ''}
                ${!tieneVocabulario ? '<p style="color: #FF6B6B; font-size: 0.9rem; margin-top: 5px;">(Vacío)</p>' : ''}
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// FUNCIONES PARA VIDEOS
// ====================

function cargarSubcontenedoresVideos(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'video';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresVideosUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaVideos);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresVideosUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🎬 CONTENEDOR ${contenedor} - SUB-CONTENEDORES DE VIDEOS
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    for (let i = 1; i <= 5; i++) {
        const tieneVideo = subcontenedoresDisponibles.includes(i.toString());
        const subData = obtenerSubcontenedorVideo(contenedor, i); // Para desc
        const desc = subData.descripcion || (tieneVideo ? 'Video disponible' : '(Sin video configurado)');
        const videoInfo = tieneVideo ? obtenerVideo(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneVideo ? `cargarVideo(${contenedor}, ${i})` : 'alert("Este sub-contenedor no tiene video disponible")'}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                <h3>Video ${i}</h3>
                ${tieneVideo ? `<p><strong>${videoInfo.titulo}</strong></p> <p style="font-size: 0.9rem; opacity: 0.8;">${videoInfo.duracion} • ${videoInfo.categoria}</p>` : `<p style="color: #FF6B6B;">${desc}</p>`} <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">
                    ${tieneVideo ? '▶️ Ver video' : 'Vacío'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function cargarVideo(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    modoActual = 'video';
    
    const videoInfo = obtenerVideo(contenedor, subcontenedor);
    const driveId = videoInfo.driveId;
    const timestamps = videoInfo.timestamps || [];
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = ''; // Limpiar
    
    const botonVolver = crearBotonVolver(cargarPaginaVideos);
    mangaSection.appendChild(botonVolver);
    
    const videoPlayerHTML = sistemaReproductor.crearReproductorVideo(driveId, timestamps, videoInfo.titulo, videoInfo.descripcion, 'video');
    
    const videoDiv = document.createElement('div');
    videoDiv.innerHTML = videoPlayerHTML;
    mangaSection.appendChild(videoDiv);
    
    // Inicializar listeners del reproductor (si los hay en 1_sistemas.js)
    if (typeof sistemaReproductor.inicializarListeners === 'function') {
        sistemaReproductor.inicializarListeners(driveId, 'video');
    }
}

// ====================
// FUNCIONES PARA ANIMES (CORREGIDO: DESCRIPCIONES EN SUBCONTENEDORES)
// ====================

function cargarSubcontenedoresAnimes(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'anime';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresAnimesUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaAnimes);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresAnimesUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🎌 CONTENEDOR ${contenedor} - SUB-CONTENEDORES DE ANIMES
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresAnimesDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    for (let i = 1; i <= 5; i++) {
        const tieneAnime = subcontenedoresDisponibles.includes(i.toString());
        const subData = obtenerSubcontenedorAnime(contenedor, i); // ← NUEVO: Para desc
        const desc = subData.descripcion || (tieneAnime ? 'Anime disponible' : '(Sin anime configurado)'); // ← Fallback
        const animeInfo = tieneAnime ? obtenerAnime(contenedor, i) : null;
        const progreso = tieneAnime ? sistemaEconomia.obtenerProgreso(contenedor, i, 1) : 0;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneAnime ? `seleccionarAccionAnime(${contenedor}, ${i})` : `cargarMazosAnimes(${contenedor}, ${i})`}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenContenedorAnime(contenedor)}')"></div>
                <h3>${tieneAnime ? animeInfo.titulo : 'Anime ' + i}</h3>
                <p style="opacity: 0.8; font-size: 0.9rem;">${desc}</p>
                
                ${progreso > 0 ? `
                    <div style="margin-top: 10px;">
                        <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
                            <div style="background: linear-gradient(135deg, #FF6B6B, #FFD166); width: ${progreso}%; height: 100%;"></div>
                        </div>
                        <p style="font-size: 0.9rem; margin-top: 5px; color: #FF6B6B;">${progreso}% completado</p>
                    </div>
                ` : ''}
                
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">
                    ${tieneAnime ? 'Abrir' : 'Explorar Vocabulario'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function seleccionarAccionAnime(contenedor, subcontenedor) {
    const animeInfo = obtenerAnime(contenedor, subcontenedor);
    const accionesHTML = `
        <div style="text-align: center; margin: 40px 0;">
            <h3 style="color: #FFD166; margin-bottom: 20px;">Selecciona una acción para ${animeInfo.titulo}</h3>
            
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <button class="card-button" onclick="verAnime(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px 30px;">
                    ▶️ Ver Video
                </button>
                <button class="card-button" onclick="cargarMazosAnimes(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 15px 30px;">
                    📖 Vocabulario/Quiz
                </button>
            </div>
        </div>
    `;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = accionesHTML;
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresAnimes(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function verAnime(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    modoActual = 'anime';
    
    // Por defecto, usa el idioma actual (espanol o japones)
    cambiarIdiomaYVerAnime(contenedor, subcontenedor, idiomaVideoActual);
}

function cambiarIdiomaYVerAnime(contenedor, subcontenedor, idioma) {
    idiomaVideoActual = idioma;
    const animeInfo = obtenerAnime(contenedor, subcontenedor);
    const driveId = (idioma === 'espanol' ? animeInfo.driveIdEs : animeInfo.driveIdJp);
    const timestamps = animeInfo.timestamps || [];
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = ''; // Limpiar
    
    const botonVolver = crearBotonVolver(() => seleccionarAccionAnime(contenedor, subcontenedor));
    mangaSection.appendChild(botonVolver);
    
    // Crear el reproductor de video
    const videoPlayerHTML = sistemaReproductor.crearReproductorVideo(driveId, timestamps, animeInfo.titulo, animeInfo.descripcion, 'anime');
    
    const videoDiv = document.createElement('div');
    videoDiv.innerHTML = videoPlayerHTML;
    mangaSection.appendChild(videoDiv);
    
    // Agregar controles de idioma
    const tituloDesc = `
        <div style="text-align: center; margin-bottom: 25px;">
            <h2 style="color: #8A5AF7; margin-bottom: 10px;">${animeInfo.titulo}</h2>
            <p style="opacity: 0.8; max-width: 700px; margin: 0 auto;">${animeInfo.descripcion}</p>
            <div class="controles-idioma">
                <button class="boton-idioma ${idiomaVideoActual === 'espanol' ? 'activo' : ''}" onclick="cambiarIdiomaYVerAnime(${contenedor}, ${subcontenedor}, 'espanol')">
                    🇪🇸 Español
                </button>
                <button class="boton-idioma ${idiomaVideoActual === 'japones' ? 'activo' : ''}" onclick="cambiarIdiomaYVerAnime(${contenedor}, ${subcontenedor}, 'japones')">
                    🇯🇵 Japonés
                </button>
            </div>
            <p style="margin-top: 10px; opacity: 0.7; font-size: 0.9rem;">
                Actualmente viendo en: <strong>${idiomaVideoActual === 'espanol' ? 'Español' : 'Japonés'}</strong>
            </p>
        </div>
    `;
    mangaSection.insertBefore(sistemaReproductor.crearVideoDiv(tituloDesc), videoDiv);
    
    // Inicializar listeners del reproductor (si los hay)
    if (typeof sistemaReproductor.inicializarListeners === 'function') {
        sistemaReproductor.inicializarListeners(driveId, 'anime');
    }
}

function cargarMazosAnimes(contenedor, subcontenedor) {
    subcontenedorActual = subcontenedor;
    modoActual = 'anime';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearMazosAnimesUI(contenedor, subcontenedor);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresAnimes(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearMazosAnimesUI(contenedor, subcontenedor) {
    const animeInfo = obtenerAnime(contenedor, subcontenedor);
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🎌 ${animeInfo.titulo} - MAZOS DE VOCABULARIO
    </h2>`;
    
    // Botón para ir al Video
    html += `
        <div style="text-align: center; margin-bottom: 30px;">
            <button class="btn-manga-especial" onclick="verAnime(${contenedor}, ${subcontenedor})">
                ▶️ VOLVER A VER VIDEO
            </button>
        </div>
    `;

    html += '<div class="mazos-grid">';
    
    for (let i = 1; i <= 5; i++) {
        const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, i);
        const tieneVocabulario = verificarExistenciaVocabularioAnime(contenedor, subcontenedor, i);
        
        html += `
            <div class="mazo-item ${!tieneVocabulario ? 'disabled' : ''}" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${i})` : 'alert(\'Mazo vacío\')'}">
                <h3>Episodio ${i} - Vocabulario</h3>
                <p>Palabras clave y Quiz</p>
                ${progreso > 0 ? `
                    <div style="margin-top: 10px;">
                        <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
                            <div style="background: linear-gradient(135deg, #FF6B6B, #FFD166); width: ${progreso}%; height: 100%;"></div>
                        </div>
                        <p style="font-size: 0.9rem; margin-top: 5px; color: #FF6B6B;">${progreso}% completado</p>
                    </div>
                ` : ''}
                ${!tieneVocabulario ? '<p style="color: #FF6B6B; font-size: 0.9rem; margin-top: 5px;">(Vacío)</p>' : ''}
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// FUNCIONES PARA AUDIOS (CORREGIDO: DESCRIPCIONES EN SUBCONTENEDORES)
// ====================

function cargarSubcontenedoresAudios(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'audio';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresAudiosUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaAudios);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresAudiosUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🎵 CONTENEDOR ${contenedor} - SUB-CONTENEDORES DE OPENINGS
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresAudiosDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    for (let i = 1; i <= 5; i++) {
        const tieneAudio = subcontenedoresDisponibles.includes(i.toString());
        const subData = obtenerSubcontenedorAudio(contenedor, i); // ← NUEVO
        const desc = subData.descripcion || (tieneAudio ? 'Opening disponible' : '(Sin audio configurado)'); // ← Fallback
        const audioInfo = tieneAudio ? obtenerAudio(contenedor, i) : null;
        const progreso = tieneAudio ? sistemaEconomia.obtenerProgreso(contenedor, i, 1) : 0;
        const tieneVocabulario = tieneAudio ? verificarExistenciaVocabularioAudio(contenedor, i, 1) : false;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneAudio ? `seleccionarAccionAudio(${contenedor}, ${i})` : `cargarMazosAudios(${contenedor}, ${i})`}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen}')"></div>
                <h3>${tieneAudio ? audioInfo.titulo.split('-')[0] : 'Opening ' + i}</h3>
                <p style="opacity: 0.8; font-size: 0.9rem;">${tieneAudio ? audioInfo.titulo.split('-')[1].trim() : desc}</p>
                <p style="font-size: 0.9rem; color: #FFD166;">${tieneAudio ? audioInfo.duracion : ''}</p>
                
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #FF6B6B, #FFD166);">
                    ${tieneAudio ? '🎵 Escuchar y Estudiar' : (tieneVocabulario ? '📖 Vocabulario' : 'Explorar')}
                </div>
                ${progreso > 0 ? `<div style="margin-top: 10px;"> <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;"> <div style="background: linear-gradient(135deg, #FF6B6B, #FFD166); width: ${progreso}%; height: 100%;"></div> </div> <p style="font-size: 0.9rem; margin-top: 5px; color: #FF6B6B;">${progreso}% completado</p> </div>` : ''}
                ${!tieneAudio && !tieneVocabulario ? '<p style="color: #FF6B6B; font-size: 0.9rem; margin-top: 5px;">(Vacío)</p>' : ''}
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function seleccionarAccionAudio(contenedor, subcontenedor) {
    const audioInfo = obtenerAudio(contenedor, subcontenedor);
    const tieneVocabulario = verificarExistenciaVocabularioAudio(contenedor, subcontenedor, 1);
    
    const accionesHTML = `
        <div style="text-align: center; margin: 40px 0;">
            <h3 style="color: #FFD166; margin-bottom: 20px;">Selecciona una acción para ${audioInfo.titulo}</h3>
            
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <button class="card-button" onclick="reproducirAudio(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px 30px;">
                    ▶️ Escuchar Audio
                </button>
                <button class="card-button" onclick="cargarMazosAudios(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 15px 30px;">
                    📖 ${tieneVocabulario ? 'Vocabulario/Quiz' : 'No hay Vocabulario'}
                </button>
            </div>
        </div>
    `;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = accionesHTML;
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresAudios(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function reproducirAudio(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    modoActual = 'audio';
    
    const audioInfo = obtenerAudio(contenedor, subcontenedor);
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = ''; // Limpiar
    
    const botonVolver = crearBotonVolver(() => seleccionarAccionAudio(contenedor, subcontenedor));
    mangaSection.appendChild(botonVolver);
    
    const html = `
        <div style="max-width: 600px; margin: 50px auto; padding: 25px; background: rgba(255, 255, 255, 0.05); border-radius: 20px; text-align: center;">
            <h2 style="color: #FFD166; margin-bottom: 20px;">🎵 Reproductor</h2>
            <p style="color: white; font-size: 1.2rem; margin-bottom: 15px;">${audioInfo.titulo}</p>
            <div style="margin: 20px 0;">
                <iframe src="https://drive.google.com/file/d/${audioInfo.driveId}/preview" width="100%" height="100" frameborder="0" style="border-radius: 10px;" allow="autoplay" ></iframe>
            </div>
            <p style="opacity: 0.7; font-size: 0.9rem; margin-top: 15px;">
                Si no se reproduce automáticamente, haz clic en el botón de play
            </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <button class="card-button" onclick="cargarMazosAudios(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 15px 30px;">
                📖 Ir a Vocabulario/Quiz
            </button>
        </div>
    `;
    
    const audioDiv = document.createElement('div');
    audioDiv.innerHTML = html;
    mangaSection.appendChild(audioDiv);
}

function cargarMazosAudios(contenedor, subcontenedor) {
    subcontenedorActual = subcontenedor;
    modoActual = 'audio';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearMazosAudiosUI(contenedor, subcontenedor);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresAudios(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearMazosAudiosUI(contenedor, subcontenedor) {
    const audioInfo = obtenerAudio(contenedor, subcontenedor);
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🎵 ${audioInfo.titulo} - VOCABULARIO
    </h2>`;
    
    // Botón para ir al Reproductor
    html += `
        <div style="text-align: center; margin-bottom: 30px;">
            <button class="btn-manga-especial" onclick="reproducirAudio(${contenedor}, ${subcontenedor})">
                ▶️ VOLVER AL REPRODUCTOR
            </button>
        </div>
    `;

    html += '<div class="mazos-grid">';
    
    for (let i = 1; i <= 5; i++) {
        const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, i);
        const tieneVocabulario = verificarExistenciaVocabularioAudio(contenedor, subcontenedor, i);
        
        html += `
            <div class="mazo-item ${!tieneVocabulario ? 'disabled' : ''}" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${i})` : 'alert(\'Mazo vacío\')'}">
                <h3>Parte ${i} - Letra y Vocabulario</h3>
                <p>Palabras clave y Quiz de la letra</p>
                ${progreso > 0 ? `
                    <div style="margin-top: 10px;">
                        <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
                            <div style="background: linear-gradient(135deg, #FF6B6B, #FFD166); width: ${progreso}%; height: 100%;"></div>
                        </div>
                        <p style="font-size: 0.9rem; margin-top: 5px; color: #FF6B6B;">${progreso}% completado</p>
                    </div>
                ` : ''}
                ${!tieneVocabulario ? '<p style="color: #FF6B6B; font-size: 0.9rem; margin-top: 5px;">(Vacío)</p>' : ''}
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// FUNCIONES PARA ASMR (CORREGIDO: DESCRIPCIONES EN SUBCONTENEDORES)
// ====================

function cargarSubcontenedoresASMR(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'asmr';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresASMRUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaASMR);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function calcularDuracionTotalASMRContenedor(contenedor) {
    let totalSegundos = 0;
    const contenedores = obtenerContenedoresASMRDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    subcontenedoresDisponibles.forEach(sub => {
        const asmrInfo = obtenerASMR(contenedor, parseInt(sub));
        if (asmrInfo && asmrInfo.duracion !== "0:00") {
            const [minutos, segundos] = asmrInfo.duracion.split(':').map(Number);
            totalSegundos += minutos * 60 + segundos;
        }
    });
    const minutos = Math.floor(totalSegundos / 60);
    return `${minutos} min`;
}

function crearSubcontenedoresASMRUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #9C27B0;">
        🎧 CONTENEDOR ${contenedor} - AUDIOS ASMR
    </h2>`;
    html += `<p style="text-align: center; margin-bottom: 30px; opacity: 0.8; color: #673AB7;">Duración total aproximada: ${calcularDuracionTotalASMRContenedor(contenedor)}</p>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresASMRDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    for (let i = 1; i <= 5; i++) {
        const tieneAudio = subcontenedoresDisponibles.includes(i.toString());
        const subData = obtenerSubcontenedorASMR(contenedor, i); // ← NUEVO
        const desc = subData.descripcion || (tieneAudio ? 'Audio disponible' : '(Sin audio configurado)'); // ← Fallback
        const asmrInfo = tieneAudio ? obtenerASMR(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneAudio ? `seleccionarAccionASMR(${contenedor}, ${i})` : 'alert(\'Audio no disponible\')'}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen}')"></div>
                <h3>${tieneAudio ? asmrInfo.titulo : 'ASMR Audio ' + i}</h3>
                <p style="opacity: 0.8; font-size: 0.9rem;">${desc}</p>
                <p style="font-size: 0.9rem; color: #9C27B0;">${tieneAudio ? asmrInfo.duracion : ''}</p>
                
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #9C27B0, #673AB7);">
                    ${tieneAudio ? '🎧 Escuchar' : 'Vacío'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function seleccionarAccionASMR(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    modoActual = 'asmr';
    
    const asmrInfo = obtenerASMR(contenedor, subcontenedor);
    
    const accionesHTML = `
        <div style="text-align: center; margin: 40px 0;">
            <h3 style="color: #9C27B0; margin-bottom: 20px;">${asmrInfo.titulo}</h3>
            <p style="opacity: 0.8; margin-bottom: 30px;">Duración: ${asmrInfo.duracion}</p>
            
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <button class="card-button" onclick="reproducirASMR(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px 30px;">
                    ▶️ Reproducir Audio
                </button>
                <button class="card-button" onclick="mostrarNotificacionASMR('🎧 ¡En un futuro, podrías estudiar vocabulario de este audio!')" style="background: linear-gradient(135deg, #FFD166, #FF6B6B); padding: 15px 30px;">
                    📖 Vocabulario (Futuro)
                </button>
            </div>
        </div>
    `;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = accionesHTML;
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresASMR(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function reproducirASMR(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    modoActual = 'asmr';
    
    const asmrInfo = obtenerASMR(contenedor, subcontenedor);
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = ''; // Limpiar
    
    const botonVolver = crearBotonVolver(() => seleccionarAccionASMR(contenedor, subcontenedor));
    mangaSection.appendChild(botonVolver);
    
    const html = `
        <div style="max-width: 800px; margin: 50px auto; padding: 25px; background: rgba(0, 0, 0, 0.3); border-radius: 20px; text-align: center; border: 2px solid #9C27B0;">
            <h2 style="color: #9C27B0; margin-bottom: 20px;">🎧 Reproductor ASMR</h2>
            <p style="color: white; font-size: 1.2rem; margin-bottom: 15px;">${asmrInfo.titulo}</p>
            <div style="margin: 20px 0;">
                <iframe src="https://drive.google.com/file/d/${asmrInfo.driveId}/preview" width="100%" height="100" frameborder="0" style="border-radius: 10px; background: rgba(0, 0, 0, 0.5);" allow="autoplay" ></iframe>
            </div>
            <p style="opacity: 0.7; font-size: 0.9rem; margin-top: 15px;">
                🎯 Recomendación: Usa auriculares para mejor experiencia ASMR
            </p>
        </div>
        ${asmrInfo.timestamps && asmrInfo.timestamps.length > 0 ? `
            <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 25px; margin: 30px auto; max-width: 800px; border-left: 5px solid #FFD166;">
                <h4 style="color: #FFD166; margin-bottom: 15px;">⏱️ Timestamps Sugeridos</h4>
                ${sistemaReproductor.crearListaTimestamps(asmrInfo.timestamps, asmrInfo.driveId, 'asmr')}
            </div>
        ` : ''}
    `;
    
    const audioDiv = document.createElement('div');
    audioDiv.innerHTML = html;
    mangaSection.appendChild(audioDiv);
    
    // Inicializar listeners para timestamps si existen
    if (asmrInfo.timestamps && asmrInfo.timestamps.length > 0) {
        // No hay un inicializador de listeners para ASMR en sistemas.js, pero se deja el patrón
        // si se implementa una función de manejo de clicks de timestamps específica para ASMR.
    }
}

function mostrarNotificacionASMR(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #9C27B0, #673AB7);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: bold;
        box-shadow: 0 5px 15px rgba(0,0,0,0.4);
        z-index: 1001;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
        font-size: 1.1rem;
        border: 2px solid white;
    `;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}

// ====================
// FUNCIONES COMPARTIDAS MANGAS/VIDEOS/ASMR (CORREGIDO: REUTILIZADAS)
// ====================

function cargarLectorManga(contenedor, subcontenedor) {
    // Implementación del lector de manga... (el contenido se asume que está en otro archivo)
    
    const subData = obtenerSubcontenedorManga(contenedor, subcontenedor);
    const mangaData = subData.manga;
    
    if (!mangaData) {
        alert('Lector de manga no configurado para este sub-contenedor.');
        return;
    }
    
    // Ocultar sección principal y quiz
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    
    // Mostrar contenedor del lector
    const lectorContainer = document.getElementById('lector-manga-container');
    if (!lectorContainer) {
        // Asumimos que el div principal para el lector existe en el HTML
        console.error("Contenedor 'lector-manga-container' no encontrado");
        return;
    }
    lectorContainer.style.display = 'block';
    lectorContainer.innerHTML = '';
    
    // Título y botón de volver
    const headerHtml = `
        <div style="text-align: center; padding: 20px; background: rgba(0,0,0,0.2); border-bottom: 2px solid #FFD166;">
            <button class="btn-atras-especifico" onclick="volverDeLectorManga(${contenedor}, ${subcontenedor})" style="position: absolute; left: 20px; top: 20px;">
                ← Volver a Mazos
            </button>
            <h2 style="color: #FFD166; margin-top: 0;">📖 LECTOR DE MANGA</h2>
            <p style="opacity: 0.8; margin: 0;">${subData.titulo || `Manga C${contenedor}-SC${subcontenedor}`}</p>
        </div>
        <div id="manga-viewer" style="text-align: center; padding: 20px;">
            </div>
        <div style="text-align: center; padding: 20px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <button class="card-button" onclick="cambiarPaginaManga(-1)" style="background: linear-gradient(135deg, #FF6B6B, #FFD166);">
                ← Anterior
            </button>
            <span id="contador-paginas" style="color: white; font-size: 1.2rem; align-self: center;">Página 1 / ${mangaData.paginas.length}</span>
            <button class="card-button" onclick="cambiarPaginaManga(1)" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                Siguiente →
            </button>
        </div>
    `;
    
    lectorContainer.innerHTML = headerHtml;
    
    // Variables locales para el lector
    window.mangaPaginas = mangaData.paginas;
    window.paginaActual = 0;
    
    cargarPaginaManga(window.paginaActual);
}

function cargarPaginaManga(indice) {
    if (indice >= 0 && indice < window.mangaPaginas.length) {
        window.paginaActual = indice;
        const viewer = document.getElementById('manga-viewer');
        const contador = document.getElementById('contador-paginas');
        
        viewer.innerHTML = `
            <img src="${window.mangaPaginas[indice]}" alt="Página ${indice + 1}" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">
        `;
        contador.textContent = `Página ${indice + 1} / ${window.mangaPaginas.length}`;
        
        // Desplazar al inicio del contenido del lector
        document.getElementById('lector-manga-container').scrollTop = 0;
    }
}

function cambiarPaginaManga(direccion) {
    const nuevaPagina = window.paginaActual + direccion;
    cargarPaginaManga(nuevaPagina);
}

function volverDeLectorManga(contenedor, subcontenedor) {
    const lectorContainer = document.getElementById('lector-manga-container');
    if (lectorContainer) {
        lectorContainer.style.display = 'none';
        lectorContainer.innerHTML = ''; // Limpiar el contenido del lector
    }
    
    // Volver a la sección de mazos
    cargarMazos(contenedor, subcontenedor);
    document.getElementById('manga-section').style.display = 'block';
}


// FUNCIONES COMUNES
function crearBotonVolver(funcionClick) {
    const boton = document.createElement('button');
    boton.className = 'btn-atras-especifico';
    boton.innerHTML = '← Volver';
    boton.onclick = funcionClick;
    return boton;
}

function verificarExistenciaVocabulario(contenedor, subcontenedor, mazo) {
    const vocabulario = obtenerVocabulario(contenedor, subcontenedor, mazo);
    return vocabulario && vocabulario.length > 0;
}

function verificarExistenciaVocabularioAnime(contenedor, subcontenedor, mazo) {
    const vocabulario = obtenerVocabularioAnime(contenedor, subcontenedor, mazo);
    return vocabulario && vocabulario.length > 0;
}

function verificarExistenciaVocabularioAudio(contenedor, subcontenedor, mazo) {
    const vocabulario = obtenerVocabularioAudio(contenedor, subcontenedor, mazo);
    return vocabulario && vocabulario.length > 0;
}

// ====================
// SISTEMA DE QUIZ (CON ROMAJI DEBAJO DE LA PALABRA)
// ====================

function iniciarQuiz(contenedor, subcontenedor, mazo) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    mazoActual = mazo;
    
    // Obtener palabras según el modo actual
    if (modoActual === 'anime') {
        palabrasActuales = obtenerVocabularioAnime(contenedor, subcontenedor, mazo);
    } else if (modoActual === 'audio') {
        palabrasActuales = obtenerVocabularioAudio(contenedor, subcontenedor, mazo);
    } else {
        palabrasActuales = obtenerVocabulario(contenedor, subcontenedor, mazo);
    }
    
    if (palabrasActuales.length === 0) {
        const modoNombre = modoActual.charAt(0).toUpperCase() + modoActual.slice(1);
        alert(`No hay vocabulario disponible en el mazo ${mazo} de ${modoNombre}.`);
        return;
    }
    
    // Inicializar quiz
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    palabrasActuales = shuffleArray(palabrasActuales); // Mezclar para variar el orden
    
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    cargarPalabraActual();
}

function cargarPalabraActual() {
    if (indicePalabraActual >= palabrasActuales.length) {
        finalizarQuiz();
        return;
    }
    
    const palabra = palabrasActuales[indicePalabraActual];
    const quizSection = document.getElementById('quiz-section');
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #4CAF50;">📝 QUIZ DE VOCABULARIO</h2>
            
            <div style="text-align: center; margin-bottom: 20px; opacity: 0.8;">
                Palabra ${indicePalabraActual + 1} de ${palabrasActuales.length}
            </div>
            
            <div class="palabra-pregunta">
                <h1 style="color: #FFD166; margin-bottom: 5px;">${palabra.palabra}</h1>
                <p style="color: #FF6B6B; font-size: 1.5rem; margin-top: 0; opacity: 0.8;">
                    ${palabra.romaji || ''}
                </p>
                <p style="opacity: 0.7; font-size: 0.9rem; margin-top: 10px;">
                    Selecciona el significado correcto
                </p>
            </div>
            
            <div id="opciones-container">
                </div>
            
            <div id="resultado-mensaje" class="resultado-mensaje"></div>
            
            <button id="siguiente-btn" class="card-button" style="display: none; background: linear-gradient(135deg, #5864F5, #8A5AF7); margin-top: 20px;" onclick="cargarSiguientePalabra()">
                Siguiente Palabra →
            </button>
            
            <button id="info-btn" class="card-button" style="display: none; background: linear-gradient(135deg, #FF6B6B, #FFD166); margin-top: 10px;" onclick="mostrarInfoPalabra()">
                ℹ️ Ver Info Completa
            </button>
        </div>
    `;
    
    generarOpciones(palabra);
}

function generarOpciones(palabra) {
    const opcionesContainer = document.getElementById('opciones-container');
    
    // Copiar y mezclar las opciones
    let opcionesMezcladas = shuffleArray([...palabra.opciones]);
    
    // Encontrar la nueva posición de la respuesta correcta
    const nuevaPosicionCorrecta = opcionesMezcladas.indexOf(palabra.opciones[palabra.respuesta]);
    
    // Crear estructura 2x2 (2 arriba, 2 abajo)
    opcionesContainer.innerHTML = `
        <div class="opciones-grid">
            <div class="opcion-fila">
                <button class="opcion-btn" data-index="0" onclick="verificarRespuesta(0, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[0]}
                </button>
                <button class="opcion-btn" data-index="1" onclick="verificarRespuesta(1, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[1]}
                </button>
            </div>
            <div class="opcion-fila">
                <button class="opcion-btn" data-index="2" onclick="verificarRespuesta(2, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[2]}
                </button>
                <button class="opcion-btn" data-index="3" onclick="verificarRespuesta(3, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[3]}
                </button>
            </div>
        </div>
    `;
}

function verificarRespuesta(indiceOpcionClickeada, indiceRespuestaCorrecta) {
    if (esperandoSiguiente) return;
    
    const botones = document.querySelectorAll('.opcion-btn');
    const mensaje = document.getElementById('resultado-mensaje');
    const siguienteBtn = document.getElementById('siguiente-btn');
    const infoBtn = document.getElementById('info-btn');

    esperandoSiguiente = true;
    
    botones.forEach(btn => btn.disabled = true); // Deshabilitar todos
    
    if (indiceOpcionClickeada === indiceRespuestaCorrecta) {
        // Respuesta Correcta
        botones[indiceOpcionClickeada].classList.add('correcta');
        mensaje.textContent = '✅ ¡Correcto!';
        mensaje.classList.add('correcta');
        aciertos++;
        
        // Dar recompensa de RPG si aplica
        otorgarRecompensaRPG();
        
    } else {
        // Respuesta Incorrecta
        botones[indiceOpcionClickeada].classList.add('incorrecta');
        botones[indiceRespuestaCorrecta].classList.add('correcta'); // Marcar la correcta
        mensaje.textContent = '❌ Incorrecto. La respuesta correcta está marcada.';
        mensaje.classList.add('incorrecta');
        errores++;
    }
    
    siguienteBtn.style.display = 'block';
    infoBtn.style.display = 'block';
    
    // Scroll hacia el botón siguiente si es necesario
    siguienteBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function otorgarRecompensaRPG() {
    // Solo dar EXP si el RPG está cargado y un personaje seleccionado
    if (typeof quintillizasRPG === 'undefined' || !quintillizasRPG.personajeSeleccionado) {
        return false;
    }
    
    // Dar EXP por cada palabra correcta
    const expPorPalabra = 20; // EXP por cada acierto
    const expDada = quintillizasRPG.agregarEXP(
        quintillizasRPG.personajeSeleccionado,
        expPorPalabra
    );
    
    if (expDada) {
        const personaje = quintillizasRPG.datosPersonajes[quintillizasRPG.personajeSeleccionado];
        mostrarNotificacionQuiz(`💖 +${expPorPalabra} EXP para ${personaje.nombre.split(' ')[0]}!`);
    }
}

function mostrarNotificacionQuiz(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 160px;
        right: 20px;
        background: linear-gradient(135deg, #FF1493, #FF6B6B);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: bold;
        box-shadow: 0 5px 15px rgba(0,0,0,0.4);
        z-index: 1001;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
        font-size: 1rem;
        border: 2px solid white;
    `;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}

function mostrarInfoPalabra() {
    const palabra = palabrasActuales[indicePalabraActual];
    const mensaje = document.getElementById('resultado-mensaje');
    
    mensaje.classList.remove('correcta', 'incorrecta');
    
    mensaje.innerHTML = `
        <h4 style="color: #FFD166; margin-bottom: 5px;">Información de la palabra:</h4>
        <p style="margin: 5px 0;"><strong>Traducción:</strong> ${palabra.traduccion}</p>
        <p style="margin: 5px 0;"><strong>Lectura:</strong> ${palabra.romaji}</p>
        <p style="margin: 5px 0;"><strong>Ejemplo:</strong> <em>${palabra.ejemplo || 'No hay ejemplo disponible'}</em></p>
    `;
}

function cargarSiguientePalabra() {
    indicePalabraActual++;
    esperandoSiguiente = false;
    cargarPalabraActual();
}

function finalizarQuiz() {
    const totalPalabras = palabrasActuales.length;
    const porcentaje = totalPalabras > 0 ? Math.round((aciertos / totalPalabras) * 100) : 0;
    
    // Actualizar progreso
    sistemaEconomia.actualizarProgreso(contenedorActual, subcontenedorActual, mazoActual, porcentaje);
    actualizarContadorDineroInicio();
    
    let funcionVolver;
    if (modoActual === 'anime') {
        funcionVolver = () => cargarMazosAnimes(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'audio') {
        funcionVolver = () => cargarMazosAudios(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'asmr') {
        funcionVolver = () => volverAlInicio(); // ASMR no tiene quiz por ahora
    } else if (modoActual === 'rpg') {
        funcionVolver = () => cargarPaginaRPG(); // Volver al RPG
    } else {
        funcionVolver = () => cargarMazos(contenedorActual, subcontenedorActual);
    }
    
    // Mostrar resultados
    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FFD166;">🎉 QUIZ COMPLETADO</h2>
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem; font-weight: bold; color: ${porcentaje >= 80 ? '#4CAF50' : '#FFD166'};">
                    ${porcentaje}%
                </div>
                <p style="font-size: 1.5rem; opacity: 0.9;">Tasa de Aciertos</p>
            </div>
            
            <div class="resultados-grid">
                <div>
                    <span class="resultado-numero correcta">${aciertos}</span>
                    <span class="resultado-label">Aciertos</span>
                </div>
                <div>
                    <span class="resultado-numero incorrecta">${errores}</span>
                    <span class="resultado-label">Errores</span>
                </div>
            </div>
            
            <button class="card-button" style="background: linear-gradient(135deg, #4CAF50, #2E7D32); margin-top: 30px;" onclick="iniciarQuiz(${contenedorActual}, ${subcontenedorActual}, ${mazoActual})">
                🔄 Repetir Quiz
            </button>
            <button class="card-button" style="background: linear-gradient(135deg, #5864F5, #8A5AF7); margin-top: 15px;" onclick="${funcionVolver.name}()">
                ${modoActual === 'rpg' ? '🎮 Volver al RPG' : '↩️ Volver a Mazos'}
            </button>
        </div>
    `;
}

// Función de utilidad para mezclar arrays (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ====================
// INICIALIZACIÓN
// ====================

document.addEventListener('DOMContentLoaded', function() {
    // Crear contador de dinero SOLO en inicio
    crearContadorDineroInicio();
    
    // Inicializar botón casa
    const botonCasa = document.getElementById('boton-casa');
    if (botonCasa) {
        botonCasa.onclick = volverAlInicio;
    }
    
    // Inicializar RPG si existe
    if (typeof quintillizasRPG !== 'undefined') {
        quintillizasRPG.inicializar();
        console.log('🎮 RPG Quintillizas inicializado');
    }
    
    // Efectos hover para cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('✅ Sistema completo cargado correctamente');
    console.log('📚 Mangas, 🎬 Videos, 🎌 Animes, 🎵 Audios, 🎧 ASMR, 🎮 RPG');
    console.log('📖 Lector de manga integrado');
    console.log('🏠 Botón casa configurado');
    console.log('💰 Sistema de dinero activo');
    console.log('🎮 Sistema RPG Quintillizas activo');
    console.log('💖 EXP desde quiz al RPG integrada');
});
