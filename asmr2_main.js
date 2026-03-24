// ================================================
// ASMR2 - SISTEMA PRINCIPAL (Con tracks y mazos)
// ================================================

// Variables globales
let asmr2ContenedorActual = null;
let asmr2SubcontenedorActual = null;
let asmr2TrackActual = null;

// ================================================
// FUNCIÓN PRINCIPAL - CARGAR PÁGINA ASMR2
// ================================================

function cargarPaginaASMR2() {
    modoActual = 'asmr2';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresASMR2();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// ================================================
// 1. CREAR CONTENEDORES PRINCIPALES
// ================================================

function crearContenedoresASMR2() {
    if (!asmr2Data || !asmr2Data.contenedores) {
        return `<div style="text-align: center; padding: 100px;"><h2>❌ Error al cargar ASMR2</h2></div>`;
    }
    
    let html = `
        <h2 style="text-align: center; margin-bottom: 30px; color: #FF69B4;">
            🎧 ASMR2 - CATEGORÍAS
        </h2>
        <div class="manga-contenedores">
    `;
    
    for (let key in asmr2Data.contenedores) {
        const cont = asmr2Data.contenedores[key];
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresASMR2(${key})">
                <div class="contenedor-img" style="background-image: url('${cont.imagen}')"></div>
                <div class="contenedor-numero">${cont.nombre}</div>
                <p>${cont.descripcion}</p>
                <div class="card-button">Ver ASMRs</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ================================================
// 2. CREAR SUBCONTENEDORES (Personajes)
// ================================================

function cargarSubcontenedoresASMR2(contenedor) {
    asmr2ContenedorActual = contenedor;
    const contData = asmr2Data.contenedores[contenedor];
    
    if (!contData || !contData.subcontenedores) {
        mostrarNotificacionASMR2('❌ No hay ASMRs en esta categoría');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresASMR2UI(contenedor, contData);
    
    const botonVolver = crearBotonVolver(cargarPaginaASMR2);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresASMR2UI(contenedor, contData) {
    let html = `
        <h2 style="text-align: center; margin-bottom: 30px; color: #FF69B4;">
            🎧 ${contData.nombre} - PERSONAJES
        </h2>
        <div class="subcontenedores-grid">
    `;
    
    for (let key in contData.subcontenedores) {
        const sub = contData.subcontenedores[key];
        html += `
            <div class="subcontenedor-item" onclick="cargarTracksASMR2(${contenedor}, '${key}')">
                <div class="subcontenedor-img" style="background-image: url('${sub.imagen}')"></div>
                <h3>${sub.nombre}</h3>
                <p>${sub.descripcion}</p>
                <div class="card-button">🎧 ${Object.keys(sub.tracks).length} tracks disponibles</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ================================================
// 3. CREAR TRACKS (Cuadraditos de cada ASMR)
// ================================================

function cargarTracksASMR2(contenedor, subcontenedorKey) {
    asmr2ContenedorActual = contenedor;
    asmr2SubcontenedorActual = subcontenedorKey;
    
    const subData = asmr2Data.contenedores[contenedor].subcontenedores[subcontenedorKey];
    
    if (!subData || !subData.tracks) {
        mostrarNotificacionASMR2('❌ No hay tracks disponibles');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearTracksUI(contenedor, subcontenedorKey, subData);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresASMR2(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearTracksUI(contenedor, subcontenedorKey, subData) {
    let html = `
        <h2 style="text-align: center; margin-bottom: 20px; color: #FF69B4;">
            🎧 ${subData.nombre} - TRACKS
        </h2>
        <p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">
            ${subData.descripcion}
        </p>
        <div class="tracks-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
    `;
    
    for (let trackKey in subData.tracks) {
        const track = subData.tracks[trackKey];
        html += `
            <div class="track-item" onclick="cargarPantallaTrack(${contenedor}, '${subcontenedorKey}', '${trackKey}')" 
                 style="background: linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(255, 20, 147, 0.1)); 
                        border-radius: 15px; padding: 20px; cursor: pointer; 
                        border: 2px solid rgba(255, 105, 180, 0.4); transition: all 0.3s;
                        text-align: center;">
                <div style="width: 100%; height: 150px; border-radius: 10px; overflow: hidden; margin-bottom: 15px;">
                    <img src="${track.imagen}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <h3 style="color: #FFD166; margin-bottom: 10px;">${track.nombre}</h3>
                <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 10px;">${track.descripcion}</p>
                <div style="display: flex; justify-content: center; gap: 15px; margin-top: 10px;">
                    <span style="background: rgba(255, 105, 180, 0.3); padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;">
                        🎵 ${track.duracion}
                    </span>
                    <span style="background: rgba(76, 175, 80, 0.3); padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;">
                        📚 ${track.mazos.length} mazos
                    </span>
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ================================================
// 4. PANTALLA DEL TRACK (Botón escuchar + Mazos)
// ================================================

function cargarPantallaTrack(contenedor, subcontenedorKey, trackKey) {
    asmr2ContenedorActual = contenedor;
    asmr2SubcontenedorActual = subcontenedorKey;
    asmr2TrackActual = trackKey;
    
    const track = asmr2Data.contenedores[contenedor].subcontenedores[subcontenedorKey].tracks[trackKey];
    const subNombre = asmr2Data.contenedores[contenedor].subcontenedores[subcontenedorKey].nombre;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearPantallaTrackUI(contenedor, subcontenedorKey, trackKey, track, subNombre);
    
    const botonVolver = crearBotonVolver(() => cargarTracksASMR2(contenedor, subcontenedorKey));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearPantallaTrackUI(contenedor, subcontenedorKey, trackKey, track, subNombre) {
    // Botón para escuchar el ASMR
    const botonEscuchar = `
        <div style="text-align: center; margin: 20px 0 30px 0;">
            <button onclick="abrirReproductorASMR2('${track.driveId}')" 
                    style="background: linear-gradient(135deg, #FF69B4, #FF1493);
                           color: white;
                           font-size: 1.5rem;
                           padding: 18px 40px;
                           border: none;
                           border-radius: 60px;
                           cursor: pointer;
                           font-weight: bold;
                           border: 3px solid white;
                           box-shadow: 0 0 20px #FF69B4;
                           transition: all 0.3s;
                           width: 80%;
                           max-width: 400px;">
                🎧 ESCUCHAR ASMR (${track.duracion})
            </button>
            <p style="opacity: 0.7; margin-top: 10px;">${track.descripcion}</p>
        </div>
    `;
    
    // Crear cuadraditos de mazos
    let mazosHTML = '';
    if (track.mazos && track.mazos.length > 0) {
        mazosHTML = `
            <div style="margin-top: 30px;">
                <h3 style="color: #FFD166; text-align: center; margin-bottom: 20px;">📚 MAZOS DE VOCABULARIO</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
                    ${track.mazos.map(mazoNum => `
                        <div class="mazo-item" onclick="iniciarQuizASMR2(${contenedor}, '${subcontenedorKey}', '${trackKey}', ${mazoNum})"
                             style="background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(33, 150, 243, 0.2));
                                    border: 2px solid #4CAF50;
                                    border-radius: 15px;
                                    padding: 20px;
                                    text-align: center;
                                    cursor: pointer;
                                    transition: all 0.3s;">
                            <div style="font-size: 2rem; margin-bottom: 10px;">📖</div>
                            <h3 style="color: #4CAF50;">MAZO ${mazoNum}</h3>
                            <p style="opacity: 0.7; font-size: 0.9rem;">10 palabras japonesas</p>
                            <div style="margin-top: 10px; font-size: 0.8rem; color: #FFD166;">⭐ +${mazoNum * 0.5} soles</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        mazosHTML = `<p style="text-align: center; opacity: 0.5;">No hay mazos disponibles para este track</p>`;
    }
    
    return `
        <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
            <h2 style="text-align: center; color: #FF69B4; margin-bottom: 10px;">
                🎵 ${track.nombre}
            </h2>
            <p style="text-align: center; opacity: 0.7; margin-bottom: 20px;">
                ${subNombre} • Track ${trackKey.split('_')[2]}
            </p>
            
            ${botonEscuchar}
            ${mazosHTML}
            
            <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 20px; margin-top: 30px;">
                <h4 style="color: #FFD166;">💡 ¿Cómo funciona?</h4>
                <ul style="opacity: 0.8;">
                    <li>🎧 Haz clic en "ESCUCHAR ASMR" para escuchar este track</li>
                    <li>📚 Elige un mazo para practicar el vocabulario</li>
                    <li>💰 Gana dinero por cada palabra correcta</li>
                    <li>⭐ Las palabras que falles van al sistema SRS</li>
                </ul>
            </div>
        </div>
    `;
}

// ================================================
// 5. ABRIR REPRODUCTOR DEL TRACK
// ================================================

function abrirReproductorASMR2(driveId) {
    // Abrir en una nueva ventana o ventana flotante
    const ancho = 800;
    const alto = 500;
    const left = (screen.width - ancho) / 2;
    const top = (screen.height - alto) / 2;
    
    window.open(
        `https://drive.google.com/file/d/${driveId}/preview`,
        'ReproductorASMR2',
        `width=${ancho},height=${alto},top=${top},left=${left}`
    );
    
    mostrarNotificacionASMR2('🎧 Reproductor abierto en nueva ventana');
}

// ================================================
// 6. INICIAR QUIZ
// ================================================

function iniciarQuizASMR2(contenedor, subcontenedorKey, trackKey, mazoNumero) {
    // Obtener vocabulario
    const vocabularioKey = trackKey;  // Ej: "1_1_1"
    
    let palabras = [];
    if (asmr2Vocabulario && asmr2Vocabulario[vocabularioKey] && asmr2Vocabulario[vocabularioKey][mazoNumero]) {
        palabras = asmr2Vocabulario[vocabularioKey][mazoNumero];
    }
    
    if (palabras.length === 0) {
        mostrarNotificacionASMR2(`❌ No hay palabras en el mazo ${mazoNumero}`);
        return;
    }
    
    // Guardar contexto para el quiz
    asmr2ContenedorActual = contenedor;
    asmr2SubcontenedorActual = subcontenedorKey;
    asmr2TrackActual = trackKey;
    asmr2MazoActual = mazoNumero;
    asmr2PalabrasActuales = palabras;
    asmr2IndicePalabra = 0;
    asmr2Aciertos = 0;
    asmr2Errores = 0;
    asmr2EsperandoSiguiente = false;
    
    // Ocultar manga y mostrar quiz
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    mostrarPalabraASMR2();
}

// Variables del quiz
let asmr2PalabrasActuales = [];
let asmr2IndicePalabra = 0;
let asmr2Aciertos = 0;
let asmr2Errores = 0;
let asmr2EsperandoSiguiente = false;
let asmr2MazoActual = null;

function mostrarPalabraASMR2() {
    const palabra = asmr2PalabrasActuales[asmr2IndicePalabra];
    const track = asmr2Data.contenedores[asmr2ContenedorActual]?.subcontenedores[asmr2SubcontenedorActual]?.tracks[asmr2TrackActual];
    
    const quizSection = document.getElementById('quiz-section');
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FF69B4; margin-bottom: 20px;">
                🎧 ${track?.nombre || 'ASMR2'} • Mazo ${asmr2MazoActual}
                <div style="font-size: 0.9rem; color: #FFD166;">
                    Palabra ${asmr2IndicePalabra + 1}/${asmr2PalabrasActuales.length}
                </div>
            </h2>
            
            <div class="palabra-japonesa" style="border-color: #FF69B4;">
                ${palabra.japones}
            </div>
            
            <div class="romaji-debajo" id="romaji-debajo" style="display: none;">
                <div class="romaji-text">${palabra.lectura}</div>
            </div>
            
            <div id="opciones-container"></div>
            
            <div id="resultado-container" style="display: none;"></div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="cancelarQuizASMR2()">❌ Cancelar</button>
            </div>
        </div>
    `;
    
    crearOpcionesASMR2(palabra);
}

function crearOpcionesASMR2(palabra) {
    const opcionesContainer = document.getElementById('opciones-container');
    const opcionesMezcladas = [...palabra.opciones];
    
    for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
    }
    
    const posCorrecta = opcionesMezcladas.indexOf(palabra.opciones[palabra.respuesta]);
    
    opcionesContainer.innerHTML = `
        <div class="opciones-grid">
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuestaASMR2(0, ${posCorrecta})">${opcionesMezcladas[0]}</button>
                <button class="opcion-btn" onclick="verificarRespuestaASMR2(1, ${posCorrecta})">${opcionesMezcladas[1]}</button>
            </div>
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuestaASMR2(2, ${posCorrecta})">${opcionesMezcladas[2]}</button>
                <button class="opcion-btn" onclick="verificarRespuestaASMR2(3, ${posCorrecta})">${opcionesMezcladas[3]}</button>
            </div>
        </div>
    `;
}

function verificarRespuestaASMR2(opcionSeleccionada, posCorrecta) {
    if (asmr2EsperandoSiguiente) return;
    
    const palabra = asmr2PalabrasActuales[asmr2IndicePalabra];
    const correcta = opcionSeleccionada === posCorrecta;
    
    const romajiDebajo = document.getElementById('romaji-debajo');
    romajiDebajo.style.display = 'block';
    
    const btns = document.querySelectorAll('.opcion-btn');
    btns.forEach((btn, idx) => {
        if (idx === posCorrecta) btn.classList.add('correcta');
        else if (idx === opcionSeleccionada && !correcta) btn.classList.add('incorrecta');
        btn.disabled = true;
    });
    
    const resultado = document.getElementById('resultado-container');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <div class="romaji-container">
            <p>${correcta ? '✅ ¡Correcto!' : '❌ Incorrecto. Respuesta: ' + palabra.opciones[palabra.respuesta]}</p>
        </div>
    `;
    
    if (correcta) {
        asmr2Aciertos++;
        sistemaEconomia.agregarDinero(0.10);
        actualizarContadorDineroInicio();
        
        setTimeout(() => pasarSiguientePalabraASMR2(), 1500);
    } else {
        asmr2Errores++;
        const palabraData = {
            japones: palabra.japones,
            lectura: palabra.lectura,
            significado: palabra.opciones[palabra.respuesta],
            opciones: palabra.opciones,
            respuesta: palabra.respuesta
        };
        if (typeof agregarPalabraSRS === 'function') agregarPalabraSRS(palabraData);
    }
    
    const controls = document.querySelector('.quiz-controls');
    controls.innerHTML = correcta 
        ? '<div style="text-align:center;padding:20px;">✅ Pasando...</div>'
        : `<button class="quiz-btn btn-siguiente" onclick="pasarSiguientePalabraASMR2()">⏭️ Siguiente</button>`;
    
    asmr2EsperandoSiguiente = true;
}

function pasarSiguientePalabraASMR2() {
    asmr2IndicePalabra++;
    if (asmr2IndicePalabra < asmr2PalabrasActuales.length) {
        asmr2EsperandoSiguiente = false;
        mostrarPalabraASMR2();
    } else {
        finalizarQuizASMR2();
    }
}

function finalizarQuizASMR2() {
    const porcentaje = Math.round((asmr2Aciertos / asmr2PalabrasActuales.length) * 100);
    const track = asmr2Data.contenedores[asmr2ContenedorActual]?.subcontenedores[asmr2SubcontenedorActual]?.tracks[asmr2TrackActual];
    
    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FF69B4;">🎉 QUIZ COMPLETADO</h2>
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem;">${porcentaje}%</div>
                <p>${asmr2Aciertos} aciertos • ${asmr2Errores} errores</p>
            </div>
            <div style="background: rgba(255,105,180,0.1); padding: 25px; border-radius: 15px;">
                <h3>💰 Recompensa: +${(asmr2Aciertos * 0.10).toFixed(2)} soles</h3>
            </div>
            <div class="quiz-controls">
                <button class="quiz-btn" onclick="cargarPantallaTrack(${asmr2ContenedorActual}, '${asmr2SubcontenedorActual}', '${asmr2TrackActual}')">
                    ↩️ Volver al Track
                </button>
                <button class="quiz-btn" onclick="iniciarQuizASMR2(${asmr2ContenedorActual}, '${asmr2SubcontenedorActual}', '${asmr2TrackActual}', ${asmr2MazoActual})">
                    🔄 Repetir Mazo
                </button>
            </div>
        </div>
    `;
}

function cancelarQuizASMR2() {
    if (confirm('¿Cancelar quiz? Se perderá el progreso.')) {
        cargarPantallaTrack(asmr2ContenedorActual, asmr2SubcontenedorActual, asmr2TrackActual);
    }
}

function mostrarNotificacionASMR2(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed; top: 150px; right: 20px;
        background: linear-gradient(135deg, #FF69B4, #FF1493);
        color: white; padding: 12px 20px; border-radius: 50px;
        font-weight: bold; z-index: 1002;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
    `;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}

console.log('✅ ASMR2 - Sistema principal cargado');
