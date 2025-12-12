// ================================================
// SISTEMA PRINCIPAL DE NAVEGACIÓN Y QUIZ - VERSIÓN FINAL CON MAZO DIFÍCIL
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
    
    const dineroContador = document.getElementById('dinero-inicio');
    if (dineroContador) {
        dineroContador.classList.remove('hidden');
    }
}

function crearContadorDineroInicio() {
    if (!document.getElementById('dinero-inicio')) {
        const dineroDiv = document.createElement('div');
        dineroDiv.id = 'dinero-inicio';
        dineroDiv.className = 'dinero-inicio-container';
        dineroDiv.innerHTML = `
            <span>Money</span>
            <span id="dinero-cantidad-inicio">${sistemaEconomia.obtenerDinero().toFixed(2)}</span>
            <span>soles</span>
        `;
        
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

function cargarPaginaRPG() {
    modoActual = 'rpg';
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    
    if (typeof quintillizasRPG !== 'undefined') {
        mangaSection.innerHTML = quintillizasRPG.cargarPaginaPrincipal();
    } else {
        mangaSection.innerHTML = `
            <div style="text-align: center; padding: 100px 20px;">
                <h2 style="color: #FF1493; margin-bottom: 20px;">RPG QUINTILLIZAS</h2>
                <p style="opacity: 0.8; margin-bottom: 30px;">El sistema RPG no se cargó correctamente.</p>
                <button class="btn-atras-especifico" onclick="volverAlInicio()">
                    Volver al inicio
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
    
    const lectorContainer = document.getElementById('lector-manga-container');
    if (lectorContainer) {
        lectorContainer.style.display = 'none';
    }
}

// ====================
// CREACIÓN DE UI - MANGAS (CORREGIDO: DESCRIPCIONES DINÁMICAS)
// ====================

function crearContenedoresMangas() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">CONTENEDORES DE MANGAS</h2>';
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
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">CONTENEDORES DE VIDEOS</h2>';
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
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">CONTENEDORES DE ANIMES</h2>';
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
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">CONTENEDORES DE AUDIOS</h2>';
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
                    ${tieneAudios ? 'Escuchar audios' : 'Explorar'}
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
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">CONTENEDORES DE ASMR</h2>';
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
                    ${tieneAudios ? 'Escuchar ASMR' : 'Explorar'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
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
        CONTENEDOR ${contenedor} - SUB-CONTENEDORES DE ANIMES
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresAnimesDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    for (let i = 1; i <= 5; i++) {
        const tieneAnime = subcontenedoresDisponibles.includes(i.toString());
        const subData = obtenerSubcontenedorAnime(contenedor, i);
        const desc = subData.descripcion || (tieneAnime ? 'Anime disponible' : '(Sin anime configurado)');
        const animeInfo = tieneAnime ? obtenerAnime(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneAnime ? `seleccionarAccionAnime(${contenedor}, ${i})` : `cargarMazosAnimes(${contenedor}, ${i})`}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedorAnime(contenedor, i)}')"></div>
                <h3>${tieneAnime ? animeInfo.titulo.split(' ')[0] : `Anime ${i}`}</h3>
                ${tieneAnime ? 
                    `<p><strong>${animeInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${animeInfo.duracion} • ${animeInfo.categoria}</p>` 
                    : `<p style="color: #FF6B6B;">${desc}</p>`}
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">
                    ${tieneAnime ? 'Ver opciones' : 'Solo vocabulario'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ====================
// SISTEMA DE QUIZ - CON MAZO DIFÍCIL INCLUIDO
// ====================

function iniciarQuiz(contenedor, subcontenedor, mazo) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    mazoActual = mazo;
    
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
    
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    mostrarPalabraQuiz();
}

function mostrarPalabraQuiz() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = palabrasActuales[indicePalabraActual];
    
    let icono = 'Libro';
    if (modoActual === 'anime') icono = 'Anime';
    if (modoActual === 'audio') icono = 'Música';
    if (modoActual === 'asmr') icono = 'ASMR';
    if (modoActual === 'rpg') icono = 'RPG';
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #8A5AF7; margin-bottom: 20px;">
                ${icono} ${modoActual.toUpperCase()} • Mazo ${mazoActual} • ${indicePalabraActual + 1}/${palabrasActuales.length}
            </h2>
            
            <div class="palabra-japonesa">${palabra.japones}</div>
            
            <div class="romaji-debajo" id="romaji-debajo" style="display: none;">
                <div class="romaji-text">${palabra.lectura}</div>
            </div>

            <!-- BOTÓN MARCAR COMO DIFÍCIL -->
            <div style="text-align:center; margin:25px 0;">
                <button onclick="marcarPalabraDificil()" style="background:#FF1744; color:white; padding:12px 28px; border:none; border-radius:12px; font-weight:bold; font-size:1.1rem; cursor:pointer; box-shadow:0 4px 15px rgba(255,23,68,0.4);">
                    Marcar como DIFÍCIL
                </button>
            </div>
            
            <div class="opciones-grid" id="opciones-container"></div>
            <div id="resultado-container" style="display: none;"></div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="cancelarQuiz()">Cancelar</button>
            </div>
        </div>
    `;
    
    crearOpcionesQuiz(palabra);
}

// ====================
// NUEVAS FUNCIONES: MAZO DIFÍCIL
// ====================

function marcarPalabraDificil() {
    const palabra = palabrasActuales[indicePalabraActual];
    sistemaEconomia.marcarComoDificil(palabra);
}

function iniciarMazoDificil() {
    const mazo = sistemaEconomia.obtenerMazoDificil();
    if (!mazo || mazo.length === 0) {
        alert("No tienes palabras marcadas como difíciles aún");
        return;
    }

    palabrasActuales = mazo;
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;

    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    mostrarPalabraQuiz();
}

function cancelarQuiz() {
    if (confirm('¿Cancelar el quiz?')) {
        if (palabrasActuales === sistemaEconomia.obtenerMazoDificil()) {
            sistemaEconomia.limpiarMazoDificil();
        }
        volverAMazos();
    }
}

function finalizarQuiz() {
    const porcentaje = Math.round((aciertos / palabrasActuales.length) * 100);
    
    darExpPorCompletarMazo(porcentaje);
    
    const dineroAntes = sistemaEconomia.obtenerDinero();
    sistemaEconomia.actualizarProgreso(contenedorActual, subcontenedorActual, mazoActual, porcentaje);
    const dineroAhora = sistemaEconomia.obtenerDinero();
    const recompensa = dineroAhora - dineroAntes;

    // Si era mazo difícil → se borra
    if (palabrasActuales === sistemaEconomia.obtenerMazoDificil()) {
        sistemaEconomia.limpiarMazoDificil();
    }

    const tieneDificiles = sistemaEconomia.obtenerMazoDificil()?.length > 0;

    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FFD166;">QUIZ COMPLETADO</h2>
            <div style="font-size: 4.5rem; margin: 30px 0; color:#FFD166;">${porcentaje}%</div>
            <p style="font-size:1.5rem;">${aciertos} aciertos • ${errores} errores</p>
            <p style="font-size:2.5rem; color:#FFD166; margin:20px 0;">+${recompensa.toFixed(2)} soles</p>

            <div class="quiz-controls" style="margin-top:40px; display:flex; flex-direction:column; gap:15px; align-items:center;">
                <button class="quiz-btn btn-volver" onclick="volverAMazos()" style="padding:18px 50px; font-size:1.3rem;">
                    Volver a Mazos
                </button>
                
                ${tieneDificiles ? `
                <button class="quiz-btn" onclick="iniciarMazoDificil()" style="background:#FF1744; padding:20px 50px; font-size:1.5rem; font-weight:bold; box-shadow:0 8px 25px rgba(255,23,68,0.5);">
                    JUGAR MAZO DIFÍCIL (${sistemaEconomia.obtenerMazoDificil().length} palabras)
                </button>` : ''}
                
                <button class="quiz-btn btn-siguiente" onclick="repetirQuiz()" style="margin-top:10px;">
                    Repetir Mazo
                </button>
            </div>
        </div>
    `;

    actualizarContadorDineroInicio();
}

function volverAMazos() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('manga-section').style.display = 'block';
    
    if (modoActual === 'anime') {
        cargarMazosAnimes(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'audio') {
        cargarMazosAudios(contenedorActual, subcontenedorActual);
    } else {
        cargarMazos(contenedorActual, subcontenedorActual);
    }
}

// ====================
// RESTO DE FUNCIONES ORIGINALES (CREAR OPCIONES, VERIFICAR, ETC.
// ====================

function crearOpcionesQuiz(palabra) {
    const opcionesContainer = document.getElementById('opciones-container');
    
    const opcionesMezcladas = [...palabra.opciones];
    for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
    }
    
    const nuevaPosicionCorrecta = opcionesMezcladas.indexOf(palabra.opciones[palabra.respuesta]);
    
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
    
    const romajiDebajo = document.getElementById('romaji-debajo');
    romajiDebajo.style.display = 'block';
    
    opcionesBtns.forEach((btn, index) => {
        if (index === posicionCorrecta) {
            btn.classList.add('correcta');
        } else if (index === opcionSeleccionada && !correcta) {
            btn.classList.add('incorrecta');
        }
        btn.disabled = true;
    });
    
    const resultadoContainer = document.getElementById('resultado-container');
    resultadoContainer.style.display = 'block';
    resultadoContainer.innerHTML = `
        <div class="romaji-container">
            <p style="margin-top: 10px; opacity: 0.8; font-size: 1.2rem;">
                ${correcta ? 'Correcto!' : 'Incorrecto. La respuesta correcta era: ' + palabra.opciones[palabra.respuesta]}
            </p>
        </div>
    `;
    
    if (correcta) {
        aciertos++;
        darExpPorPalabraCorrecta(true);
    } else {
        errores++;
    }
    
    const controls = document.querySelector('.quiz-controls');
    controls.innerHTML = '';

    if (correcta) {
        controls.innerHTML = `<div style="text-align: center; padding: 20px; color: #4CAF50;">
            <p>Correcto! Pasando...</p>
        </div>`;
        esperandoSiguiente = true;
        setTimeout(pasarSiguientePalabra, 1500);
    } else {
        controls.innerHTML = `
            <button class="quiz-btn btn-volver" onclick="cancelarQuiz()">Cancelar</button>
            <button class="quiz-btn btn-siguiente" onclick="pasarSiguientePalabra()">Siguiente</button>
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
        finalizarQuiz();
    }
}

function repetirQuiz() {
    iniciarQuiz(contenedorActual, subcontenedorActual, mazoActual);
}

// ====================
// RPG EXP
// ====================

function darExpPorPalabraCorrecta(esCorrecta) {
    if (!esCorrecta) return false;
    if (typeof quintillizasRPG === 'undefined' || !quintillizasRPG.personajeSeleccionado) return;

    const expPorPalabra = 20;
    quintillizasRPG.agregarEXP(quintillizasRPG.personajeSeleccionado, expPorPalabra);
    
    const personaje = quintillizasRPG.datosPersonajes[quintillizasRPG.personajeSeleccionado];
    mostrarNotificacionQuiz(`+${expPorPalabra} EXP para ${personaje.nombre.split(' ')[0]}`);
}

function darExpPorCompletarMazo(porcentaje) {
    if (typeof quintillizasRPG === 'undefined' || !quintillizasRPG.personajeSeleccionado) return;

    let expAdicional = 0;
    if (porcentaje >= 100) expAdicional = 100;
    else if (porcentaje >= 90) expAdicional = 75;
    else if (porcentaje >= 80) expAdicional = 50;
    else if (porcentaje >= 70) expAdicional = 30;
    else if (porcentaje >= 50) expAdicional = 15;

    if (expAdicional > 0) {
        quintillizasRPG.agregarEXP(quintillizasRPG.personajeSeleccionado, expAdicional);
        const personaje = quintillizasRPG.datosPersonajes[quintillizasRPG.personajeSeleccionado];
        mostrarNotificacionQuiz(`+${expAdicional} EXP por completar mazo`);
    }
}

function mostrarNotificacionQuiz(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 150px;
        right: 20px;
        background: linear-gradient(135deg, #FF1493, #FF69B4);
        color: white;
        padding: 12px 20px;
        border-radius: 50px;
        font-weight: bold;
        box-shadow: 0 5px 15px rgba(0,0,0,0.4);
        z-index: 1002;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
        font-size: 1rem;
        border: 2px solid white;
    `;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}

// ====================
// INICIALIZACIÓN
// ====================

document.addEventListener('DOMContentLoaded', function() {
    crearContadorDineroInicio();
    
    const botonCasa = document.getElementById('boton-casa');
    if (botonCasa) {
        botonCasa.onclick = volverAlInicio;
    }
    
    if (typeof quintillizasRPG !== 'undefined') {
        quintillizasRPG.inicializar();
        console.log('RPG Quintillizas inicializado');
    }
    
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('Sistema completo cargado correctamente');
    console.log('MAZO DIFÍCIL 100% FUNCIONAL');
});
