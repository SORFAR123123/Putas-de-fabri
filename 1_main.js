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
let modoActual = 'manga'; // 'manga', 'video', 'anime'
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
// NAVEGACIÓN PRINCIPAL
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

function volverAlInicio() {
    mostrarHeader();
    actualizarContadorDineroInicio();
    
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
}

// ====================
// CREACIÓN DE UI - MANGAS
// ====================

function crearContenedoresMangas() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">📚 CONTENEDORES DE MANGAS</h2>';
    html += '<div class="manga-contenedores">';
    
    for (let i = 1; i <= 10; i++) {
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedores(${i})">
                <div class="contenedor-img" style="background-image: url('${obtenerImagenContenedor(i)}')"></div>
                <div class="contenedor-numero">CONTAINER ${i}</div>
                <p>5 sub-contenedores con vocabulario</p>
                <div class="card-button">Abrir</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function crearContenedoresVideos() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎬 CONTENEDORES DE VIDEOS</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Videos privados con timestamps en Google Drive</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresDisponibles();
    const totalContenedores = Object.keys(contenedores).length || 3;
    
    for (let i = 1; i <= Math.max(totalContenedores, 10); i++) {
        const tieneVideos = contenedores[i] && contenedores[i].length > 0;
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresVideos(${i})">
                <div class="contenedor-img" style="background-image: url('${obtenerImagenContenedor(i)}')"></div>
                <div class="contenedor-numero">VIDEO CONTAINER ${i}</div>
                <p>${tieneVideos ? contenedores[i].length + ' sub-contenedores con videos' : 'Sin videos aún'}</p>
                <div class="card-button">${tieneVideos ? 'Ver videos' : 'Vacío'}</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// CREACIÓN DE UI - ANIMES
// ====================

function crearContenedoresAnimes() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎌 CONTENEDORES DE ANIMES</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Animes con videos en español/japonés + vocabulario</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresAnimesDisponibles();
    const totalContenedores = Object.keys(contenedores).length || 10;
    
    for (let i = 1; i <= Math.max(totalContenedores, 10); i++) {
        const tieneAnimes = contenedores[i] && contenedores[i].length > 0;
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresAnimes(${i})">
                <div class="contenedor-img" style="background-image: url('${obtenerImagenContenedorAnime(i)}')"></div>
                <div class="contenedor-numero">ANIME CONTAINER ${i}</div>
                <p>${tieneAnimes ? contenedores[i].length + ' sub-contenedores con animes' : '5 sub-contenedores disponibles'}</p>
                <div class="card-button">${tieneAnimes ? 'Ver animes' : 'Explorar'}</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

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
        const animeInfo = tieneAnime ? obtenerAnime(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneAnime ? `seleccionarAccionAnime(${contenedor}, ${i})` : `cargarMazosAnimes(${contenedor}, ${i})`}">
                <div class="subcontenedor-img" style="background-image: url('${obtenerImagenSubcontenedorAnime(contenedor, i)}')"></div>
                <h3>${tieneAnime ? animeInfo.titulo.split(' ')[0] : `Anime ${i}`}</h3>
                ${tieneAnime ? 
                    `<p><strong>${animeInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${animeInfo.duracion} • ${animeInfo.categoria}</p>` 
                    : '<p style="color: #FF6B6B;">(Sin anime configurado)</p>'}
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">
                    ${tieneAnime ? '🎬 Ver opciones' : '📚 Solo vocabulario'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function seleccionarAccionAnime(contenedor, subcontenedor) {
    const accionesHTML = `
        <div style="text-align: center; margin: 40px 0;">
            <h3 style="color: #8A5AF7; margin-bottom: 30px;">¿Qué quieres hacer?</h3>
            <div style="display: flex; flex-direction: column; gap: 20px; max-width: 400px; margin: 0 auto;">
                <button class="card-button" onclick="cargarVideoAnime(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                    🎬 Ver Anime (Español)
                </button>
                <button class="card-button" onclick="cambiarIdiomaYVerAnime(${contenedor}, ${subcontenedor}, 'japones')" style="background: linear-gradient(135deg, #5864F5, #8A5AF7);">
                    🎌 Ver Anime (Japonés)
                </button>
                <button class="card-button" onclick="cargarMazosAnimes(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #FF6B6B, #FFD166);">
                    📚 Practicar Vocabulario
                </button>
                <button class="btn-atras-especifico" onclick="cargarSubcontenedoresAnimes(${contenedor})">
                    ↩️ Volver
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('manga-section').innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; padding: 40px 20px;">
            ${crearBotonVolver(() => cargarSubcontenedoresAnimes(contenedor)).outerHTML}
            ${accionesHTML}
        </div>
    `;
}

function cambiarIdiomaYVerAnime(contenedor, subcontenedor, idioma) {
    idiomaVideoActual = idioma;
    cargarVideoAnime(contenedor, subcontenedor);
}

function cargarVideoAnime(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    
    const animeInfo = obtenerAnime(contenedor, subcontenedor);
    if (!animeInfo) {
        alert('No hay anime disponible en este sub-contenedor');
        return;
    }
    
    const driveId = obtenerDriveIdPorIdioma(animeInfo, idiomaVideoActual);
    const timestamps = obtenerTimestampsPorIdioma(animeInfo, idiomaVideoActual);
    
    if (!driveId) {
        alert(`No hay versión en ${idiomaVideoActual === 'japones' ? 'japonés' : 'español'} disponible`);
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = sistemaReproductor.cargarVideo(driveId, timestamps);
    
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
                <strong>Duración:</strong> ${animeInfo.duracion} | 
                <strong>Categoría:</strong> ${animeInfo.categoria} | 
                <strong>Año:</strong> ${animeInfo.año || 'N/A'}
            </p>
        </div>
    `;
    
    mangaSection.querySelector('.reproductor-container').insertAdjacentHTML('afterbegin', tituloDesc);
    
    const botonVolver = crearBotonVolver(() => seleccionarAccionAnime(contenedor, subcontenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarMazosAnimes(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    modoActual = 'anime';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearMazosAnimesUI(contenedor, subcontenedor);
    
    const botonVolver = crearBotonVolver(() => {
        if (obtenerAnime(contenedor, subcontenedor)) {
            seleccionarAccionAnime(contenedor, subcontenedor);
        } else {
            cargarSubcontenedoresAnimes(contenedor);
        }
    });
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearMazosAnimesUI(contenedor, subcontenedor) {
    const animeInfo = obtenerAnime(contenedor, subcontenedor);
    const tituloAnime = animeInfo ? animeInfo.titulo : `Sub-contenedor ${subcontenedor}`;
    
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        📚 ${tituloAnime.toUpperCase()} - MAZOS DE VOCABULARIO
    </h2>`;
    
    if (animeInfo) {
        html += `<p style="text-align: center; margin-bottom: 30px; opacity: 0.8; max-width: 800px; margin-left: auto; margin-right: auto;">
            Practica vocabulario relacionado con este anime. Gana dinero por cada mazo completado.
        </p>`;
    }
    
    html += '<div class="mazos-container">';
    
    for (let i = 1; i <= 10; i++) {
        const tieneVocabulario = existeVocabularioAnime(contenedor, subcontenedor, i);
        const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, i);
        
        html += `
            <div class="mazo-item" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${i})` : 'alert("Este mazo aún no tiene vocabulario. Agrégalo en 1_animes_vocabulario.js")'}">
                <h3>MAZO ${i}</h3>
                <p>10 palabras japonesas</p>
                ${progreso > 0 ? 
                    `<div style="margin-top: 10px;">
                        <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
                            <div style="background: linear-gradient(135deg, #4CAF50, #2E7D32); width: ${progreso}%; height: 100%;"></div>
                        </div>
                        <p style="font-size: 0.9rem; margin-top: 5px; color: #4CAF50;">${progreso}% completado</p>
                    </div>` 
                    : ''}
                ${!tieneVocabulario ? '<p style="color: #FF6B6B; font-size: 0.9rem; margin-top: 5px;">(Vacío)</p>' : ''}
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// FUNCIONES COMPARTIDAS MANGAS/VIDEOS
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
        📦 CONTENEDOR ${contenedor} - SUB-CONTENEDORES
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    for (let i = 1; i <= 5; i++) {
        const tieneContenido = tieneVocabularioEnSubcontenedor(contenedor, i);
        
        html += `
            <div class="subcontenedor-item" onclick="cargarMazos(${contenedor}, ${i})">
                <div class="subcontenedor-img" style="background-image: url('${obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                <h3>Sub-contenedor ${i}</h3>
                <p>10 mazos de vocabulario</p>
                ${tieneContenido ? '' : '<p style="color: #FF6B6B; font-size: 0.9rem;">(Sin vocabulario)</p>'}
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

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
        const videoInfo = tieneVideo ? obtenerVideo(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneVideo ? `cargarVideo(${contenedor}, ${i})` : 'alert("Este sub-contenedor no tiene video disponible")'}">
                <div class="subcontenedor-img" style="background-image: url('${obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                <h3>Video ${i}</h3>
                ${tieneVideo ? 
                    `<p><strong>${videoInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${videoInfo.duracion} • ${videoInfo.categoria}</p>` 
                    : '<p style="color: #FF6B6B;">(Sin video)</p>'}
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">
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
    
    const videoInfo = obtenerVideo(contenedor, subcontenedor);
    if (!videoInfo || !videoInfo.driveId) {
        alert('No hay video disponible en este sub-contenedor');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = sistemaReproductor.cargarVideo(videoInfo.driveId, videoInfo.timestamps);
    
    const tituloDesc = `
        <div style="text-align: center; margin-bottom: 25px;">
            <h2 style="color: #8A5AF7; margin-bottom: 10px;">${videoInfo.titulo}</h2>
            <p style="opacity: 0.8; max-width: 700px; margin: 0 auto;">${videoInfo.descripcion}</p>
        </div>
    `;
    
    mangaSection.querySelector('.reproductor-container').insertAdjacentHTML('afterbegin', tituloDesc);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresVideos(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function volverASubcontenedoresVideos() {
    if (modoActual === 'video') {
        cargarSubcontenedoresVideos(contenedorActual);
    }
}

function cargarMazos(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearMazosUI(contenedor, subcontenedor);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedores(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearMazosUI(contenedor, subcontenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        📚 CONTENEDOR ${contenedor} • SUB-CONTENEDOR ${subcontenedor} - MAZOS
    </h2>`;
    html += '<div class="mazos-container">';
    
    for (let i = 1; i <= 10; i++) {
        const tieneVocabulario = verificarVocabularioDisponible(contenedor, subcontenedor, i);
        
        html += `
            <div class="mazo-item" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${i})` : 'alert("Este mazo aún no tiene vocabulario. Agrégalo en 1_vocabulario.js")'}">
                <h3>MAZO ${i}</h3>
                <p>10 palabras japonesas</p>
                ${tieneVocabulario ? '' : '<p style="color: #FF6B6B; font-size: 0.9rem; margin-top: 5px;">(Vacío)</p>'}
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function crearBotonVolver(funcionClick) {
    const boton = document.createElement('button');
    boton.className = 'btn-atras-especifico';
    boton.innerHTML = '← Volver';
    boton.onclick = funcionClick;
    return boton;
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
    } else {
        palabrasActuales = obtenerVocabulario(contenedor, subcontenedor, mazo);
    }
    
    if (palabrasActuales.length === 0) {
        const archivo = modoActual === 'anime' ? '1_animes_vocabulario.js' : '1_vocabulario.js';
        alert(`No hay palabras en este mazo. Agrega vocabulario en ${archivo}`);
        return;
    }
    
    // Resetear contadores
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    
    // Ocultar sección de mangas, mostrar quiz
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    // Cargar primera palabra
    mostrarPalabraQuiz();
}

function mostrarPalabraQuiz() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = palabrasActuales[indicePalabraActual];
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #8A5AF7; margin-bottom: 20px;">
                ${modoActual === 'anime' ? '🎌 ANIME' : '📚 MANGA'} • Mazo ${mazoActual} • Palabra ${indicePalabraActual + 1}/${palabrasActuales.length}
            </h2>
            
            <div class="palabra-japonesa" id="palabra-japonesa">
                ${palabra.japones}
            </div>
            
            <!-- ROMAJI JUSTO DEBAJO DE LA PALABRA -->
            <div class="romaji-debajo" id="romaji-debajo" style="display: none;">
                <div class="romaji-text">${palabra.lectura}</div>
            </div>
            
            <div class="opciones-grid" id="opciones-container">
                <!-- Opciones se cargan dinámicamente -->
            </div>
            
            <div id="resultado-container" style="display: none;">
                <!-- Resultado se muestra después de responder -->
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="cancelarQuiz()">
                    ❌ Cancelar
                </button>
            </div>
        </div>
    `;
    
    // Crear opciones (2 arriba, 2 abajo)
    crearOpcionesQuiz(palabra);
}

function crearOpcionesQuiz(palabra) {
    const opcionesContainer = document.getElementById('opciones-container');
    
    // Mezclar opciones (pero mantener la correcta)
    const opcionesMezcladas = [...palabra.opciones];
    for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
    }
    
    // Encontrar nueva posición de la respuesta correcta
    const nuevaPosicionCorrecta = opcionesMezcladas.indexOf(palabra.opciones[palabra.respuesta]);
    
    // Crear estructura 2x2 (2 arriba, 2 abajo)
    opcionesContainer.innerHTML = `
        <div class="opciones-grid">
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuesta(0, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[0]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuesta(1, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[1]}
                </button>
            </div>
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuesta(2, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[2]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuesta(3, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[3]}
                </button>
            </div>
        </div>
    `;
}

function verificarRespuesta(opcionSeleccionada, posicionCorrecta) {
    if (esperandoSiguiente) return;
    
    const palabra = palabrasActuales[indicePalabraActual];
    const opcionesBtns = document.querySelectorAll('.opcion-btn');
    const correcta = opcionSeleccionada === posicionCorrecta;
    
    // Mostrar romaji debajo de la palabra
    const romajiDebajo = document.getElementById('romaji-debajo');
    romajiDebajo.style.display = 'block';
    
    // Marcar botones
    opcionesBtns.forEach((btn, index) => {
        if (index === posicionCorrecta) {
            btn.classList.add('correcta');
        } else if (index === opcionSeleccionada && !correcta) {
            btn.classList.add('incorrecta');
        }
        btn.disabled = true;
    });
    
    // Mostrar resultado
    const resultadoContainer = document.getElementById('resultado-container');
    resultadoContainer.style.display = 'block';
    resultadoContainer.innerHTML = `
        <div class="romaji-container">
            <p style="margin-top: 10px; opacity: 0.8; font-size: 1.2rem;">
                ${correcta ? '✅ ¡Correcto!' : '❌ Incorrecto. La respuesta correcta era: ' + palabra.opciones[palabra.respuesta]}
            </p>
        </div>
    `;
    
    // Actualizar contadores
    if (correcta) {
        aciertos++;
    } else {
        errores++;
    }
    
    // Actualizar controles
    const controls = document.querySelector('.quiz-controls');
    controls.innerHTML = '';
    
    if (correcta) {
        // Respuesta correcta: pasar automáticamente después de 1.5 segundos
        controls.innerHTML = `<div style="text-align: center; padding: 20px; color: #4CAF50;">
            <p>✅ ¡Correcto! Pasando a la siguiente palabra...</p>
        </div>`;
        
        esperandoSiguiente = true;
        setTimeout(pasarSiguientePalabra, 1500);
    } else {
        // Respuesta incorrecta: mostrar botón manual
        controls.innerHTML = `
            <button class="quiz-btn btn-volver" onclick="cancelarQuiz()">
                ❌ Cancelar
            </button>
            <button class="quiz-btn btn-siguiente" onclick="pasarSiguientePalabra()">
                ⏭️ Siguiente Palabra
            </button>
        `;
        esperandoSiguiente = true;
    }
}

function pasarSiguientePalabra() {
    indicePalabraActual++;
    
    if (indicePalabraActual < palabrasActuales.length) {
        esperandoSiguiente = false;
        mostrarPalabraQuiz();
    } else {
        // Quiz terminado
        finalizarQuiz();
    }
}

function finalizarQuiz() {
    const porcentaje = Math.round((aciertos / palabrasActuales.length) * 100);
    
    console.log(`Quiz finalizado: ${aciertos} aciertos de ${palabrasActuales.length} = ${porcentaje}%`);
    
    // OBTENER DINERO ANTES DE ACTUALIZAR
    const dineroAntes = sistemaEconomia.obtenerDinero();
    
    // Actualizar progreso en sistema (ESTE MÉTODO DA LA RECOMPENSA)
    sistemaEconomia.actualizarProgreso(
        contenedorActual, 
        subcontenedorActual, 
        mazoActual, 
        porcentaje
    );
    
    // OBTENER DINERO DESPUÉS (con la recompensa ya añadida)
    const dineroAhora = sistemaEconomia.obtenerDinero();
    const recompensa = dineroAhora - dineroAntes;
    
    // Determinar a dónde volver según el modo
    const funcionVolver = modoActual === 'anime' ? 
        () => cargarMazosAnimes(contenedorActual, subcontenedorActual) : 
        () => cargarMazos(contenedorActual, subcontenedorActual);
    
    // Mostrar resultados
    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FFD166;">🎉 QUIZ COMPLETADO</h2>
            
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem; margin-bottom: 20px;">${porcentaje}%</div>
                <p style="font-size: 1.2rem; color: #8A5AF7;">
                    ${aciertos} aciertos • ${errores} errores
                </p>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.05); padding: 25px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: #4CAF50; margin-bottom: 15px;">💰 Recompensa Obtenida</h3>
                <div style="font-size: 2.5rem; text-align: center; color: #FFD166;">
                    ${dineroAhora.toFixed(2)} soles
                </div>
                <p style="text-align: center; margin-top: 10px; opacity: 0.8;">
                    ${recompensa > 0 ? `+${recompensa.toFixed(2)} soles ganados` : 'Continúa practicando para ganar más'}
                </p>
                <p style="text-align: center; font-size: 0.9rem; opacity: 0.7;">
                    (Antes: ${dineroAntes.toFixed(2)} soles)
                </p>
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="${modoActual === 'anime' ? `cargarMazosAnimes(${contenedorActual}, ${subcontenedorActual})` : `cargarMazos(${contenedorActual}, ${subcontenedorActual})`}">
                    ↩️ Volver a Mazos
                </button>
                <button class="quiz-btn btn-siguiente" onclick="repetirQuiz()">
                    🔄 Repetir Mazo
                </button>
            </div>
        </div>
    `;
    
    // Actualizar contador de dinero en el inicio
    actualizarContadorDineroInicio();
}

function cancelarQuiz() {
    if (confirm('¿Seguro que quieres cancelar el quiz? Se perderá el progreso actual.')) {
        if (modoActual === 'anime') {
            cargarMazosAnimes(contenedorActual, subcontenedorActual);
        } else {
            cargarMazos(contenedorActual, subcontenedorActual);
        }
    }
}

function volverAMazos() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('manga-section').style.display = 'block';
    if (modoActual === 'anime') {
        cargarMazosAnimes(contenedorActual, subcontenedorActual);
    } else {
        cargarMazos(contenedorActual, subcontenedorActual);
    }
}

function repetirQuiz() {
    iniciarQuiz(contenedorActual, subcontenedorActual, mazoActual);
}

// ====================
// FUNCIONES AUXILIARES
// ====================

function calcularProgresoSubcontenedor(contenedor, subcontenedor) {
    let totalProgreso = 0;
    let mazosConVocabulario = 0;
    
    for (let mazo = 1; mazo <= 10; mazo++) {
        if (verificarVocabularioDisponible(contenedor, subcontenedor, mazo)) {
            totalProgreso += sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, mazo);
            mazosConVocabulario++;
        }
    }
    
    return mazosConVocabulario > 0 ? Math.round(totalProgreso / mazosConVocabulario) : 0;
}

function tieneVocabularioEnSubcontenedor(contenedor, subcontenedor) {
    for (let mazo = 1; mazo <= 10; mazo++) {
        if (verificarVocabularioDisponible(contenedor, subcontenedor, mazo)) {
            return true;
        }
    }
    return false;
}

function verificarVocabularioDisponible(contenedor, subcontenedor, mazo) {
    const vocabulario = obtenerVocabulario(contenedor, subcontenedor, mazo);
    return vocabulario && vocabulario.length > 0;
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
    
    // Efectos hover para cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('✅ Sistema de animes cargado correctamente');
    console.log('🏠 Botón casa configurado');
    console.log('💰 Sistema de dinero activo');
});
