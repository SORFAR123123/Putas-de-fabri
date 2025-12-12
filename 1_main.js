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
                <p>5 sub-contenedores con vocabulario y manga</p>
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

// ====================
// CREACIÓN DE UI - AUDIOS
// ====================

function crearContenedoresAudios() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎵 CONTENEDORES DE AUDIOS</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Openings MP3 + vocabulario de letras</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresAudiosDisponibles();
    const totalContenedores = Object.keys(contenedores).length || 10;
    
    for (let i = 1; i <= Math.max(totalContenedores, 10); i++) {
        const tieneAudios = contenedores[i] && contenedores[i].length > 0;
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresAudios(${i})">
                <div class="contenedor-img" style="background-image: url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop')"></div>
                <div class="contenedor-numero">AUDIO CONTAINER ${i}</div>
                <p>${tieneAudios ? contenedores[i].length + ' sub-contenedores con openings' : '5 sub-contenedores disponibles'}</p>
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
// CREACIÓN DE UI - ASMR
// ====================

function crearContenedoresASMR() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎧 CONTENEDORES DE ASMR</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Audios relajantes para estudio y meditación</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresASMRDisponibles();
    const totalContenedores = Object.keys(contenedores).length || 4;
    
    for (let i = 1; i <= Math.max(totalContenedores, 4); i++) {
        const tieneAudios = contenedores[i] && contenedores[i].length > 0;
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresASMR(${i})">
                <div class="contenedor-img" style="background-image: url('https://images.unsplash.com/photo-1572860177022-8fda92a90b95?w=300&h=300&fit=crop')"></div>
                <div class="contenedor-numero">ASMR CONTAINER ${i}</div>
                <p>${tieneAudios ? contenedores[i].length + ' sub-contenedores con audios' : '3 sub-contenedores disponibles'}</p>
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
// FUNCIONES PARA ANIMES
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
// FUNCIONES PARA AUDIOS
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
        const audioInfo = tieneAudio ? obtenerAudio(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneAudio ? `seleccionarAccionAudio(${contenedor}, ${i})` : `cargarMazosAudios(${contenedor}, ${i})`}">
                <div class="subcontenedor-img" style="background-image: url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop')"></div>
                <h3>${tieneAudio ? audioInfo.titulo.split('-')[0] : `Audio ${i}`}</h3>
                ${tieneAudio ? 
                    `<p><strong>${audioInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${audioInfo.artista} • ${audioInfo.duracion}</p>` 
                    : '<p style="color: #FF6B6B;">(Sin audio configurado)</p>'}
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #FF6B6B, #FFD166);">
                    ${tieneAudio ? '🎵 Ver opciones' : '📚 Solo vocabulario'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function seleccionarAccionAudio(contenedor, subcontenedor) {
    const audioInfo = obtenerAudio(contenedor, subcontenedor);
    
    const accionesHTML = `
        <div style="text-align: center; margin: 40px 0;">
            <h3 style="color: #FFD166; margin-bottom: 30px;">${audioInfo.titulo}</h3>
            <p style="opacity: 0.8; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto;">
                ${audioInfo.descripcion}
            </p>
            <div style="display: flex; flex-direction: column; gap: 20px; max-width: 400px; margin: 0 auto;">
                <button class="card-button" onclick="cargarReproductorAudio(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #FF6B6B, #FFD166);">
                    🎵 Escuchar Opening
                </button>
                <button class="card-button" onclick="cargarMazosAudios(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #5864F5, #8A5AF7);">
                    📚 Practicar Vocabulario
                </button>
                <button class="btn-atras-especifico" onclick="cargarSubcontenedoresAudios(${contenedor})">
                    ↩️ Volver
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('manga-section').innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; padding: 40px 20px;">
            ${crearBotonVolver(() => cargarSubcontenedoresAudios(contenedor)).outerHTML}
            ${accionesHTML}
        </div>
    `;
}

function cargarReproductorAudio(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    
    const audioInfo = obtenerAudio(contenedor, subcontenedor);
    if (!audioInfo || !audioInfo.driveId) {
        alert('No hay audio disponible en este sub-contenedor');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearReproductorAudioUI(audioInfo);
    
    const botonVolver = crearBotonVolver(() => seleccionarAccionAudio(contenedor, subcontenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearReproductorAudioUI(audioInfo) {
    return `
        <div class="reproductor-audio-container" style="max-width: 800px; margin: 40px auto; background: rgba(30, 30, 40, 0.95); border-radius: 25px; padding: 40px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); border: 3px solid #FF6B6B;">
            <h2 style="text-align: center; color: #FFD166; margin-bottom: 10px;">${audioInfo.titulo}</h2>
            <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">
                ${audioInfo.descripcion}
            </p>
            
            <!-- REPRODUCTOR DE AUDIO DRIVE -->
            <div style="background: rgba(0, 0, 0, 0.3); border-radius: 15px; padding: 25px; margin: 30px 0; text-align: center;">
                <h3 style="color: #FFD166; margin-bottom: 20px;">🎵 Reproductor</h3>
                <div style="margin: 20px 0;">
                    <iframe 
                        src="https://drive.google.com/file/d/${audioInfo.driveId}/preview"
                        width="100%"
                        height="100"
                        frameborder="0"
                        style="border-radius: 10px;"
                        allow="autoplay"
                    ></iframe>
                </div>
                <p style="opacity: 0.7; font-size: 0.9rem; margin-top: 15px;">
                    Si no se reproduce automáticamente, haz clic en el botón de play
                </p>
            </div>
            
            <!-- INFORMACIÓN DEL AUDIO -->
            <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h4 style="color: #8A5AF7; margin-bottom: 15px;">📊 Información del Opening</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 10px;">
                        <div style="color: #FF6B6B; font-size: 0.9rem;">🎤 Artista</div>
                        <div style="font-weight: bold;">${audioInfo.artista || 'No especificado'}</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 10px;">
                        <div style="color: #FF6B6B; font-size: 0.9rem;">⏱️ Duración</div>
                        <div style="font-weight: bold;">${audioInfo.duracion}</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 10px;">
                        <div style="color: #FF6B6B; font-size: 0.9rem;">📅 Año</div>
                        <div style="font-weight: bold;">${audioInfo.año || 'N/A'}</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 10px;">
                        <div style="color: #FF6B6B; font-size: 0.9rem;">🎌 Anime</div>
                        <div style="font-weight: bold;">${audioInfo.anime || 'N/A'}</div>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button class="card-button" onclick="cargarMazosAudios(${contenedorActual}, ${subcontenedorActual})" style="background: linear-gradient(135deg, #5864F5, #8A5AF7); max-width: 300px; margin: 0 auto;">
                    📚 Practicar Vocabulario de esta Canción
                </button>
            </div>
        </div>
    `;
}

function cargarMazosAudios(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    modoActual = 'audio';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearMazosAudiosUI(contenedor, subcontenedor);
    
    const botonVolver = crearBotonVolver(() => {
        if (obtenerAudio(contenedor, subcontenedor)) {
            seleccionarAccionAudio(contenedor, subcontenedor);
        } else {
            cargarSubcontenedoresAudios(contenedor);
        }
    });
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearMazosAudiosUI(contenedor, subcontenedor) {
    const audioInfo = obtenerAudio(contenedor, subcontenedor);
    const tituloAudio = audioInfo ? audioInfo.titulo : `Sub-contenedor ${subcontenedor}`;
    
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        📚 ${tituloAudio.toUpperCase()} - MAZOS DE VOCABULARIO
    </h2>`;
    
    if (audioInfo) {
        html += `<p style="text-align: center; margin-bottom: 30px; opacity: 0.8; max-width: 800px; margin-left: auto; margin-right: auto;">
            Practica vocabulario de la letra de este opening. Gana dinero por cada mazo completado.
        </p>`;
    }
    
    html += '<div class="mazos-container">';
    
    for (let i = 1; i <= 10; i++) {
        const tieneVocabulario = existeVocabularioAudio(contenedor, subcontenedor, i);
        const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, i);
        
        html += `
            <div class="mazo-item" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${i})` : 'alert("Este mazo aún no tiene vocabulario. Agrégalo en 1_audios_vocabulario.js")'}" style="border-color: rgba(255, 107, 107, 0.6);">
                <h3>MAZO ${i}</h3>
                <p>10 palabras japonesas de la letra</p>
                ${progreso > 0 ? 
                    `<div style="margin-top: 10px;">
                        <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
                            <div style="background: linear-gradient(135deg, #FF6B6B, #FFD166); width: ${progreso}%; height: 100%;"></div>
                        </div>
                        <p style="font-size: 0.9rem; margin-top: 5px; color: #FF6B6B;">${progreso}% completado</p>
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
// FUNCIONES PARA ASMR
// ====================

function cargarSubcontenedoresASMR(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'asmr';
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresASMRUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaASMR);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresASMRUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🎧 CONTENEDOR ${contenedor} - SUB-CONTENEDORES DE ASMR
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresASMRDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    for (let i = 1; i <= 3; i++) {
        const tieneASMR = subcontenedoresDisponibles.includes(i.toString());
        const asmrInfo = tieneASMR ? obtenerASMR(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneASMR ? `seleccionarAccionASMR(${contenedor}, ${i})` : 'alert("Este sub-contenedor no tiene audio ASMR disponible")'}">
                <div class="subcontenedor-img" style="background-image: url('https://images.unsplash.com/photo-1572860177022-8fda92a90b95?w=300&h=300&fit=crop')"></div>
                <h3>${tieneASMR ? asmrInfo.titulo.split(' ')[0] : `ASMR ${i}`}</h3>
                ${tieneASMR ? 
                    `<p><strong>${asmrInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${asmrInfo.duracion} • ${asmrInfo.categoria}</p>
                     <p style="font-size: 0.8rem; opacity: 0.7;">🎤 ${asmrInfo.tipoVoz}</p>` 
                    : '<p style="color: #FF6B6B;">(Sin audio ASMR configurado)</p>'}
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #9C27B0, #673AB7);">
                    ${tieneASMR ? '🎧 Escuchar ASMR' : 'Vacío'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    
    // Información sobre el contenedor
    const estadisticas = obtenerEstadisticasASMR();
    html += `
        <div style="background: rgba(156, 39, 176, 0.1); border-radius: 15px; padding: 20px; margin: 30px 0; border-left: 5px solid #9C27B0;">
            <h4 style="color: #FFD166; margin-bottom: 15px;">📊 Estadísticas ASMR</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                <div style="text-align: center;">
                    <div style="color: #9C27B0; font-size: 0.9rem;">🎧 Audios</div>
                    <div style="font-weight: bold; font-size: 1.2rem;">${subcontenedoresDisponibles.length}/3</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: #9C27B0; font-size: 0.9rem;">⏱️ Duración Total</div>
                    <div style="font-weight: bold; font-size: 1.2rem;">${calcularDuracionTotalASMRContenedor(contenedor)}</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: #9C27B0; font-size: 0.9rem;">📈 Completado</div>
                    <div style="font-weight: bold; font-size: 1.2rem;">${Math.round((subcontenedoresDisponibles.length / 3) * 100)}%</div>
                </div>
            </div>
        </div>
    `;
    
    return html;
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

function seleccionarAccionASMR(contenedor, subcontenedor) {
    const asmrInfo = obtenerASMR(contenedor, subcontenedor);
    
    const accionesHTML = `
        <div style="text-align: center; margin: 40px 0;">
            <h3 style="color: #9C27B0; margin-bottom: 20px;">${asmrInfo.titulo}</h3>
            <p style="opacity: 0.8; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto;">
                ${asmrInfo.descripcion}
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 20px; max-width: 400px; margin: 0 auto;">
                <button class="card-button" onclick="cargarReproductorASMR(${contenedor}, ${subcontenedor})" style="background: linear-gradient(135deg, #9C27B0, #673AB7);">
                    🎧 Escuchar ASMR
                </button>
                
                <button class="btn-atras-especifico" onclick="cargarSubcontenedoresASMR(${contenedor})">
                    ↩️ Volver
                </button>
            </div>
            
            <!-- INFORMACIÓN DETALLADA -->
            <div style="background: rgba(156, 39, 176, 0.1); border-radius: 15px; padding: 20px; margin-top: 40px; text-align: left;">
                <h4 style="color: #FFD166; margin-bottom: 15px;">📋 Detalles del Audio</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <span style="color: #9C27B0; font-size: 0.9rem;">🎵 Categoría:</span>
                        <div style="font-weight: bold;">${asmrInfo.categoria}</div>
                    </div>
                    <div>
                        <span style="color: #9C27B0; font-size: 0.9rem;">⏱️ Duración:</span>
                        <div style="font-weight: bold;">${asmrInfo.duracion}</div>
                    </div>
                    <div>
                        <span style="color: #9C27B0; font-size: 0.9rem;">🎤 Tipo de Voz:</span>
                        <div style="font-weight: bold;">${asmrInfo.tipoVoz}</div>
                    </div>
                    <div>
                        <span style="color: #9C27B0; font-size: 0.9rem;">🏷️ Tags:</span>
                        <div style="font-weight: bold;">${asmrInfo.tags.join(', ')}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('manga-section').innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; padding: 40px 20px;">
            ${crearBotonVolver(() => cargarSubcontenedoresASMR(contenedor)).outerHTML}
            ${accionesHTML}
        </div>
    `;
}

function cargarReproductorASMR(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    
    const asmrInfo = obtenerASMR(contenedor, subcontenedor);
    if (!asmrInfo || !asmrInfo.driveId) {
        alert('No hay audio ASMR disponible en este sub-contenedor');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearReproductorASMRUI(asmrInfo);
    
    const botonVolver = crearBotonVolver(() => seleccionarAccionASMR(contenedor, subcontenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearReproductorASMRUI(asmrInfo) {
    return `
        <div class="reproductor-audio-container" style="max-width: 800px; margin: 40px auto; background: rgba(30, 30, 40, 0.95); border-radius: 25px; padding: 40px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); border: 3px solid #9C27B0;">
            <h2 style="text-align: center; color: #FFD166; margin-bottom: 10px;">${asmrInfo.titulo}</h2>
            <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">
                ${asmrInfo.descripcion}
            </p>
            
            <!-- REPRODUCTOR DE AUDIO DRIVE -->
            <div style="background: rgba(156, 39, 176, 0.1); border-radius: 15px; padding: 25px; margin: 30px 0; text-align: center; border: 2px solid rgba(156, 39, 176, 0.3);">
                <h3 style="color: #FFD166; margin-bottom: 20px;">🎧 Reproductor ASMR</h3>
                <div style="margin: 20px 0;">
                    <iframe 
                        src="https://drive.google.com/file/d/${asmrInfo.driveId}/preview"
                        width="100%"
                        height="100"
                        frameborder="0"
                        style="border-radius: 10px; background: rgba(0, 0, 0, 0.5);"
                        allow="autoplay"
                    ></iframe>
                </div>
                <p style="opacity: 0.7; font-size: 0.9rem; margin-top: 15px;">
                    🎯 Recomendación: Usa auriculares para mejor experiencia ASMR
                </p>
            </div>
            
            <!-- TIMESTAMPS PARA ASMR -->
            ${asmrInfo.timestamps && asmrInfo.timestamps.length > 0 ? `
                <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 25px; margin: 30px 0; border-left: 5px solid #FFD166;">
                    <h4 style="color: #FFD166; margin-bottom: 20px;">📍 Secciones del Audio</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        ${asmrInfo.timestamps.map(ts => {
                            const minutos = Math.floor(ts.tiempo / 60);
                            const segundos = ts.tiempo % 60;
                            return `
                                <div class="timestamp-item" onclick="saltarASeccionASMR(${ts.tiempo})" style="background: rgba(156, 39, 176, 0.15); cursor: pointer;">
                                    <div style="font-size: 1.3rem; color: #FFD166; margin-bottom: 5px;">
                                        ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}
                                    </div>
                                    <div>${ts.titulo}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- INFORMACIÓN DEL ASMR -->
            <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h4 style="color: #9C27B0; margin-bottom: 15px;">📊 Información del Audio ASMR</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 10px;">
                        <div style="color: #9C27B0; font-size: 0.9rem;">🎵 Categoría</div>
                        <div style="font-weight: bold;">${asmrInfo.categoria}</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 10px;">
                        <div style="color: #9C27B0; font-size: 0.9rem;">⏱️ Duración</div>
                        <div style="font-weight: bold;">${asmrInfo.duracion}</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 10px;">
                        <div style="color: #9C27B0; font-size: 0.9rem;">🎤 Tipo de Voz</div>
                        <div style="font-weight: bold;">${asmrInfo.tipoVoz}</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 10px;">
                        <div style="color: #9C27B0; font-size: 0.9rem;">🏷️ Tags</div>
                        <div style="font-weight: bold;">${asmrInfo.tags.join(', ')}</div>
                    </div>
                </div>
            </div>
            
            <!-- CONSEJOS PARA ASMR -->
            <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 20px; margin: 20px 0; border-left: 5px solid #FFD166;">
                <h4 style="color: #FFD166; margin-bottom: 15px;">💡 Consejos para disfrutar el ASMR</h4>
                <ul style="padding-left: 20px; opacity: 0.8;">
                    <li>Usa auriculares de buena calidad</li>
                    <li>Encuentra un lugar tranquilo y cómodo</li>
                    <li>Ajusta el volumen a un nivel agradable</li>
                    <li>Cierra los ojos para mayor inmersión</li>
                    <li>Practica respiración profunda mientras escuchas</li>
                </ul>
            </div>
        </div>
    `;
}

function saltarASeccionASMR(segundos) {
    const iframe = document.querySelector('.reproductor-audio-container iframe');
    if (iframe) {
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        const urlConTiempo = iframe.src.split('#')[0] + `#t=${minutos}m${segs}s`;
        iframe.src = urlConTiempo;
        
        // Mostrar notificación
        mostrarNotificacionASMR(`⏱️ Saltando a ${minutos}:${segs.toString().padStart(2, '0')}`);
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
// FUNCIONES COMPARTIDAS MANGAS/VIDEOS/ASMR
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
        const tieneManga = existeManga(contenedor, i);
        
        html += `
            <div class="subcontenedor-item">
                <div class="subcontenedor-img" style="background-image: url('${obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                <h3>Sub-contenedor ${i}</h3>
                <p>10 mazos de vocabulario</p>
                ${tieneContenido ? '' : '<p style="color: #FF6B6B; font-size: 0.9rem;">(Sin vocabulario)</p>'}
                
                <!-- BOTONES PARA ESTE SUB-CONTENEDOR -->
                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <button class="card-button" onclick="cargarMazos(${contenedor}, ${i})" style="padding: 10px 15px; font-size: 0.9rem;">
                        📚 Vocabulario
                    </button>
                    ${tieneManga ? 
                        `<button class="card-button" onclick="iniciarLectorManga(${contenedor}, ${i})" style="padding: 10px 15px; font-size: 0.9rem; background: linear-gradient(135deg, #8A5AF7, #FF6B6B);">
                            📖 Leer Manga
                        </button>` 
                        : '<button class="card-button" style="padding: 10px 15px; font-size: 0.9rem; background: rgba(255,255,255,0.1); opacity: 0.5; cursor: not-allowed;">📖 (Sin manga)</button>'}
                </div>
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
    
    // BOTÓN PARA LEER MANGA EN CABECERA
    const tieneManga = existeManga(contenedor, subcontenedor);
    if (tieneManga) {
        const mangaInfo = mangaDatabase[`${contenedor}_${subcontenedor}`];
        html += `
            <div style="text-align: center; margin-bottom: 25px; background: rgba(138, 90, 247, 0.1); padding: 20px; border-radius: 15px; border: 2px solid #8A5AF7;">
                <h3 style="color: #FFD166; margin-bottom: 10px;">📖 ${mangaInfo.titulo}</h3>
                <p style="opacity: 0.8; margin-bottom: 15px; font-size: 0.95rem;">${mangaInfo.descripcion}</p>
                <button class="card-button" onclick="iniciarLectorManga(${contenedor}, ${subcontenedor})" 
                        style="background: linear-gradient(135deg, #8A5AF7, #FF6B6B); max-width: 300px; margin: 0 auto;">
                    📖 LEER MANGA COMPLETO (${mangaInfo.paginas} páginas)
                </button>
                <p style="opacity: 0.7; font-size: 0.9rem; margin-top: 10px;">
                    Autor: ${mangaInfo.autor} • Año: ${mangaInfo.año}
                </p>
            </div>
        `;
    }
    
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
    } else if (modoActual === 'audio') {
        palabrasActuales = obtenerVocabularioAudio(contenedor, subcontenedor, mazo);
    } else {
        palabrasActuales = obtenerVocabulario(contenedor, subcontenedor, mazo);
    }
    
    if (palabrasActuales.length === 0) {
        const archivo = modoActual === 'anime' ? '1_animes_vocabulario.js' : 
                      (modoActual === 'audio' ? '1_audios_vocabulario.js' : '1_vocabulario.js');
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
    
    // Determinar el ícono según el modo
    let icono = '📚';
    if (modoActual === 'anime') icono = '🎌';
    if (modoActual === 'audio') icono = '🎵';
    if (modoActual === 'asmr') icono = '🎧';
    if (modoActual === 'rpg') icono = '🎮';
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #8A5AF7; margin-bottom: 20px;">
                ${icono} ${modoActual === 'asmr' ? 'ASMR' : modoActual === 'audio' ? 'AUDIO' : modoActual === 'rpg' ? 'RPG' : modoActual.toUpperCase()} • Mazo ${mazoActual} • Palabra ${indicePalabraActual + 1}/${palabrasActuales.length}
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
    // OBTENER DINERO DESPUÉS (con la recompensa ya añadida)
const dineroAhora = sistemaEconomia.obtenerDinero();
const recompensa = dineroAhora - dineroAntes;

// OBTENER DINERO DESPUÉS (con la recompensa ya añadida)
const dineroAhora = sistemaEconomia.obtenerDinero();
const recompensa = dineroAhora - dineroAntes;

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// NUEVO CÓDIGO PARA DAR EXP
// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

// DAR EXP BASADA EN PORCENTAJE (100% = 100 EXP, 50% = 50 EXP, etc.)
if (window.quintillizasRPG && window.quintillizasRPG.personajeSeleccionado) {
    // Fórmula: porcentaje = EXP (100% = 100 EXP, 80% = 80 EXP)
    const expGanada = porcentaje;
    
    window.quintillizasRPG.agregarEXP(
        window.quintillizasRPG.personajeSeleccionado, 
        expGanada
    );
    
    console.log(`🎮 MAZO ${porcentaje}%: +${expGanada} EXP para ${window.quintillizasRPG.datosPersonajes[window.quintillizasRPG.personajeSeleccionado].nombre}`);
    
    // Mostrar notificación
    window.quintillizasRPG.mostrarNotificacion(`📚 +${expGanada} EXP para ${window.quintillizasRPG.datosPersonajes[window.quintillizasRPG.personajeSeleccionado].nombre.split(' ')[0]}`);
}

    
    // ✅✅✅ NUEVO: CALCULAR EXP BASADA EN DINERO (1 SOL = 5 EXP)
    let expGanada = 0;
    if (recompensa > 0 && window.quintillizasRPG && window.quintillizasRPG.personajeSeleccionado) {
        expGanada = Math.round(recompensa * 5); // 1 SOL = 5 EXP
        
        // Dar la EXP a la chica seleccionada
        window.quintillizasRPG.agregarEXP(
            window.quintillizasRPG.personajeSeleccionado, 
            expGanada
        );
        
        console.log(`🎮 EXP: +${expGanada} (${recompensa} soles × 5)`);
    }
    
    // Determinar a dónde volver según el modo
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
            
            ${expGanada > 0 ? `
                <div style="background: rgba(255, 20, 147, 0.1); padding: 25px; border-radius: 15px; margin: 20px 0; border: 2px solid #FF1493;">
                    <h3 style="color: #FF1493; margin-bottom: 15px;">💖 EXP para tu Chica</h3>
                    <div style="font-size: 2.5rem; text-align: center; color: #FF69B4;">
                        +${expGanada} EXP
                    </div>
                    <p style="text-align: center; margin-top: 10px; opacity: 0.8;">
                        ${recompensa.toFixed(2)} soles × 5 = ${expGanada} EXP
                    </p>
                    <p style="text-align: center; font-size: 0.9rem; opacity: 0.7;">
                        ¡Sigue estudiando para subir de nivel!
                    </p>
                </div>
            ` : ''}
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="${modoActual === 'anime' ? `cargarMazosAnimes(${contenedorActual}, ${subcontenedorActual})` : (modoActual === 'audio' ? `cargarMazosAudios(${contenedorActual}, ${subcontenedorActual})` : (modoActual === 'rpg' ? `cargarPaginaRPG()` : `cargarMazos(${contenedorActual}, ${subcontenedorActual})`))}">
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
        } else if (modoActual === 'audio') {
            cargarMazosAudios(contenedorActual, subcontenedorActual);
        } else if (modoActual === 'asmr') {
            volverAlInicio();
        } else if (modoActual === 'rpg') {
            cargarPaginaRPG();
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
    } else if (modoActual === 'audio') {
        cargarMazosAudios(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'asmr') {
        volverAlInicio();
    } else if (modoActual === 'rpg') {
        cargarPaginaRPG();
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
});
