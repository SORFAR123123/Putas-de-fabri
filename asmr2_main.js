// ================================================
// ASMR2 - SISTEMA PRINCIPAL
// Hermanas, Novias, Yanderes y más
// ================================================

// Variable global para el estado actual
let asmr2ContenedorActual = null;
let asmr2SubcontenedorActual = null;
let asmr2ModoQuiz = false;

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
// CREAR CONTENEDORES PRINCIPALES
// ================================================

function crearContenedoresASMR2() {
    if (!asmr2Data || !asmr2Data.contenedores) {
        return `
            <div style="text-align: center; padding: 100px 20px;">
                <h2 style="color: #FF69B4;">❌ Error al cargar ASMR2</h2>
                <p>No se encontraron los datos. Verifica que asmr2_datos.js esté cargado.</p>
                <button class="btn-atras-especifico" onclick="volverAlInicio()">↩️ Volver al inicio</button>
            </div>
        `;
    }
    
    let html = `
        <h2 style="text-align: center; margin-bottom: 30px; color: #FF69B4;">
            🎧 ASMR2 - HERMANAS & NOVIAS
        </h2>
        <p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">
            Elige una categoría y disfruta de ASMR en japonés mientras practicas vocabulario
        </p>
        <div class="manga-contenedores">
    `;
    
    const contenedores = asmr2Data.contenedores;
    
    for (let key in contenedores) {
        const contenedor = contenedores[key];
        const numero = parseInt(key);
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresASMR2(${numero})">
                <div class="contenedor-img" style="background-image: url('${contenedor.imagen || 'https://images.unsplash.com/photo-1572860177022-8fda92a90b95?w=400&h=400&fit=crop'}')"></div>
                <div class="contenedor-numero">${contenedor.nombre}</div>
                <p>${contenedor.descripcion || 'Disfruta de ASMR con esta categoría'}</p>
                <div class="card-button">Ver ASMRs</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ================================================
// CARGAR SUBCONTENEDORES (ASMRs individuales)
// ================================================

function cargarSubcontenedoresASMR2(contenedor) {
    asmr2ContenedorActual = contenedor;
    
    const contenedorData = asmr2Data.contenedores[contenedor];
    if (!contenedorData || !contenedorData.subcontenedores) {
        mostrarNotificacionASMR2('❌ No hay ASMRs en esta categoría');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresASMR2UI(contenedor, contenedorData);
    
    const botonVolver = crearBotonVolver(cargarPaginaASMR2);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresASMR2UI(contenedor, contenedorData) {
    let html = `
        <h2 style="text-align: center; margin-bottom: 30px; color: #FF69B4;">
            🎧 ${contenedorData.nombre} - ASMRs DISPONIBLES
        </h2>
        <p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">
            ${contenedorData.descripcion || 'Elige un ASMR para escuchar y practicar vocabulario'}
        </p>
        <div class="subcontenedores-grid">
    `;
    
    const subcontenedores = contenedorData.subcontenedores;
    
    for (let key in subcontenedores) {
        const sub = subcontenedores[key];
        const subNumero = parseInt(key.split('_')[1]);
        
        html += `
            <div class="subcontenedor-item" onclick="cargarASMR2Track(${contenedor}, ${subNumero})">
                <div class="subcontenedor-img" style="background-image: url('${sub.imagen || 'https://images.unsplash.com/photo-1572860177022-8fda92a90b95?w=300&h=300&fit=crop'}')"></div>
                <h3>${sub.nombre}</h3>
                <p>${sub.descripcion || 'Audio ASMR con vocabulario'}</p>
                <div style="margin: 10px 0;">
                    <span style="background: rgba(255, 105, 180, 0.3); padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;">
                        🎵 ${sub.audio?.duracion || '??:??'}
                    </span>
                </div>
                <div class="card-button" style="background: linear-gradient(135deg, #FF69B4, #FF1493); margin-top: 10px;">
                    🎧 Escuchar ASMR
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ================================================
// CARGAR ASMR ESPECÍFICO (con reproductor + mazos)
// ================================================

function cargarASMR2Track(contenedor, subcontenedor) {
    asmr2ContenedorActual = contenedor;
    asmr2SubcontenedorActual = subcontenedor;
    
    const subData = asmr2Data.contenedores[contenedor]?.subcontenedores[`${contenedor}_${subcontenedor}`];
    
    if (!subData || !subData.audio) {
        mostrarNotificacionASMR2('❌ No hay audio disponible');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearReproductorASMR2UI(contenedor, subcontenedor, subData);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresASMR2(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearReproductorASMR2UI(contenedor, subcontenedor, subData) {
    const audio = subData.audio;
    const mazos = subData.mazos || [];
    
    // Crear timestamps HTML si existen
    let timestampsHTML = '';
    if (audio.timestamps && audio.timestamps.length > 0) {
        timestampsHTML = `
            <div style="background: rgba(255, 105, 180, 0.1); border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h4 style="color: #FF69B4; margin-bottom: 15px;">📍 SECCIONES DEL AUDIO</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                    ${audio.timestamps.map(ts => {
                        const minutos = Math.floor(ts.tiempo / 60);
                        const segundos = ts.tiempo % 60;
                        return `
                            <div class="timestamp-item" onclick="saltarEnASMR2(${ts.tiempo})" 
                                 style="background: rgba(255, 105, 180, 0.15); cursor: pointer; padding: 12px; border-radius: 10px; text-align: center;">
                                <div style="font-size: 1.2rem; color: #FF69B4; font-weight: bold;">
                                    ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}
                                </div>
                                <div style="font-size: 0.9rem;">${ts.titulo}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    
    // Crear lista de mazos
    let mazosHTML = '';
    if (mazos.length > 0) {
        mazosHTML = `
            <div style="background: rgba(76, 175, 80, 0.1); border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h4 style="color: #4CAF50; margin-bottom: 15px;">📚 MAZOS DE VOCABULARIO</h4>
                <p style="opacity: 0.8; margin-bottom: 15px;">Practica las palabras de este ASMR</p>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    ${mazos.map(mazoNum => `
                        <button class="card-button" onclick="iniciarQuizASMR2(${contenedor}, ${subcontenedor}, ${mazoNum})" 
                                style="background: linear-gradient(135deg, #4CAF50, #2E7D32); margin: 0; padding: 10px 20px;">
                            📖 Mazo ${mazoNum}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    return `
        <div class="reproductor-container" style="max-width: 1000px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 25px;">
                <h2 style="color: #FF69B4; margin-bottom: 10px;">${subData.nombre}</h2>
                <p style="opacity: 0.8;">${subData.descripcion || 'Disfruta de este ASMR'}</p>
                <div style="display: inline-block; background: rgba(255, 105, 180, 0.2); padding: 5px 15px; border-radius: 20px; margin-top: 10px;">
                    🎵 Duración: ${audio.duracion || '??:??'}
                </div>
            </div>
            
            <div style="background: rgba(30, 30, 40, 0.95); border-radius: 25px; padding: 30px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); border: 2px solid #FF69B4;">
                <h3 style="text-align: center; color: #FFD166; margin-bottom: 20px;">🎧 REPRODUCTOR ASMR</h3>
                <div style="margin: 20px 0; text-align: center;">
                    <iframe 
                        src="https://drive.google.com/file/d/${audio.driveId}/preview"
                        width="100%"
                        height="120"
                        frameborder="0"
                        style="border-radius: 15px; background: rgba(0, 0, 0, 0.5);"
                        allow="autoplay"
                    ></iframe>
                </div>
                <p style="text-align: center; opacity: 0.7; font-size: 0.9rem;">
                    🎧 Recomendación: Usa auriculares para mejor experiencia
                </p>
            </div>
            
            ${timestampsHTML}
            ${mazosHTML}
            
            <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 20px; margin: 20px 0; border-left: 5px solid #FFD166;">
                <h4 style="color: #FFD166; margin-bottom: 15px;">💡 ¿Cómo funciona?</h4>
                <ul style="padding-left: 20px; opacity: 0.8;">
                    <li>🎧 Escucha el ASMR mientras te relajas</li>
                    <li>📚 Practica los mazos de vocabulario relacionados</li>
                    <li>⏰ Usa los timestamps para saltar a secciones específicas</li>
                    <li>💰 Gana dinero por cada mazo completado</li>
                    <li>⭐ Las palabras que falles irán al sistema SRS</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button class="quiz-btn" onclick="cargarSubcontenedoresASMR2(${contenedor})" style="background: linear-gradient(135deg, #8A5AF7, #5864F5);">
                    ↩️ Volver a ASMRs
                </button>
            </div>
        </div>
    `;
}

// ================================================
// FUNCIONES DEL REPRODUCTOR
// ================================================

function saltarEnASMR2(segundos) {
    const iframe = document.querySelector('.reproductor-container iframe');
    if (iframe) {
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        const urlConTiempo = iframe.src.split('#')[0] + `#t=${minutos}m${segs}s`;
        iframe.src = urlConTiempo;
        mostrarNotificacionASMR2(`⏱️ Saltando a ${minutos}:${segs.toString().padStart(2, '0')}`);
    } else {
        mostrarNotificacionASMR2('❌ No se pudo encontrar el reproductor');
    }
}

// ================================================
// SISTEMA DE QUIZ PARA ASMR2
// ================================================

function iniciarQuizASMR2(contenedor, subcontenedor, mazoNumero) {
    // Obtener vocabulario del archivo asmr2_vocabulario.js
    const key = `${contenedor}_${subcontenedor}`;
    const vocabularioKey = `${contenedor}_${subcontenedor}`;
    
    let palabras = [];
    
    if (asmr2Vocabulario && asmr2Vocabulario[vocabularioKey] && asmr2Vocabulario[vocabularioKey][mazoNumero]) {
        palabras = asmr2Vocabulario[vocabularioKey][mazoNumero];
    }
    
    if (palabras.length === 0) {
        mostrarNotificacionASMR2(`❌ No hay palabras en el mazo ${mazoNumero} de este ASMR`);
        return;
    }
    
    // Guardar contexto para el quiz
    asmr2ContenedorActual = contenedor;
    asmr2SubcontenedorActual = subcontenedor;
    asmr2MazoActual = mazoNumero;
    asmr2PalabrasActuales = palabras;
    asmr2IndicePalabra = 0;
    asmr2Aciertos = 0;
    asmr2Errores = 0;
    asmr2EsperandoSiguiente = false;
    
    // Ocultar sección de manga y mostrar quiz
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    mostrarPalabraASMR2();
}

// Variables globales para el quiz ASMR2
let asmr2PalabrasActuales = [];
let asmr2IndicePalabra = 0;
let asmr2Aciertos = 0;
let asmr2Errores = 0;
let asmr2EsperandoSiguiente = false;
let asmr2MazoActual = null;

function mostrarPalabraASMR2() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = asmr2PalabrasActuales[asmr2IndicePalabra];
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FF69B4; margin-bottom: 20px;">
                🎧 ASMR2 • ${asmr2Data.contenedores[asmr2ContenedorActual]?.subcontenedores[`${asmr2ContenedorActual}_${asmr2SubcontenedorActual}`]?.nombre || 'ASMR'} • Mazo ${asmr2MazoActual}
                <div style="font-size: 0.9rem; color: #FFD166; margin-top: 5px;">
                    Palabra ${asmr2IndicePalabra + 1}/${asmr2PalabrasActuales.length}
                </div>
            </h2>
            
            <div class="palabra-japonesa" id="palabra-japonesa" style="border-color: #FF69B4;">
                ${palabra.japones}
            </div>
            
            <div class="romaji-debajo" id="romaji-debajo" style="display: none;">
                <div class="romaji-text">${palabra.lectura}</div>
            </div>
            
            <div id="opciones-container">
                <!-- Opciones se cargan dinámicamente -->
            </div>
            
            <div id="resultado-container" style="display: none;">
                <!-- Resultado se muestra después de responder -->
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="cancelarQuizASMR2()">
                    ❌ Cancelar
                </button>
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
    
    const nuevaPosicionCorrecta = opcionesMezcladas.indexOf(palabra.opciones[palabra.respuesta]);
    
    opcionesContainer.innerHTML = `
        <div class="opciones-grid">
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuestaASMR2(0, ${nuevaPosicionCorrecta})" style="border-color: #FF69B4;">
                    ${opcionesMezcladas[0]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuestaASMR2(1, ${nuevaPosicionCorrecta})" style="border-color: #FF69B4;">
                    ${opcionesMezcladas[1]}
                </button>
            </div>
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuestaASMR2(2, ${nuevaPosicionCorrecta})" style="border-color: #FF69B4;">
                    ${opcionesMezcladas[2]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuestaASMR2(3, ${nuevaPosicionCorrecta})" style="border-color: #FF69B4;">
                    ${opcionesMezcladas[3]}
                </button>
            </div>
        </div>
    `;
}

function verificarRespuestaASMR2(opcionSeleccionada, posicionCorrecta) {
    if (asmr2EsperandoSiguiente) return;
    
    const palabra = asmr2PalabrasActuales[asmr2IndicePalabra];
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
                ${correcta ? '✅ ¡Correcto!' : '❌ Incorrecto. La respuesta correcta era: ' + palabra.opciones[palabra.respuesta]}
            </p>
        </div>
    `;
    
    if (correcta) {
        asmr2Aciertos++;
        // Dar experiencia y dinero
        sistemaEconomia.agregarDinero(0.10);
        actualizarContadorDineroInicio();
        
        setTimeout(() => {
            pasarSiguientePalabraASMR2();
        }, 1500);
    } else {
        asmr2Errores++;
        
        // Agregar al SRS si falló
        const palabraData = {
            contenedor: asmr2ContenedorActual,
            subcontenedor: asmr2SubcontenedorActual,
            mazo: asmr2MazoActual,
            indice: asmr2IndicePalabra,
            japones: palabra.japones,
            lectura: palabra.lectura,
            significado: palabra.opciones[palabra.respuesta],
            opciones: palabra.opciones,
            respuesta: palabra.respuesta
        };
        
        if (typeof agregarPalabraSRS === 'function') {
            agregarPalabraSRS(palabraData);
            mostrarNotificacionASMR2(`📝 Palabra agregada al SRS: ${palabra.japones}`);
        }
    }
    
    const controls = document.querySelector('.quiz-controls');
    controls.innerHTML = '';
    
    if (correcta) {
        controls.innerHTML = `<div style="text-align: center; padding: 20px; color: #4CAF50;">
            <p>✅ ¡Correcto! Pasando a la siguiente palabra...</p>
        </div>`;
        asmr2EsperandoSiguiente = true;
    } else {
        controls.innerHTML = `
            <button class="quiz-btn btn-volver" onclick="cancelarQuizASMR2()">
                ❌ Cancelar
            </button>
            <button class="quiz-btn btn-siguiente" onclick="pasarSiguientePalabraASMR2()">
                ⏭️ Siguiente Palabra
            </button>
        `;
        asmr2EsperandoSiguiente = true;
    }
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
    const recompensa = asmr2Aciertos * 0.10;
    
    // Dar recompensa adicional por completar el mazo
    if (porcentaje >= 80) {
        sistemaEconomia.agregarDinero(1);
        mostrarNotificacionASMR2(`🎉 ¡Mazo completado! +1 sol extra`);
    }
    
    const subData = asmr2Data.contenedores[asmr2ContenedorActual]?.subcontenedores[`${asmr2ContenedorActual}_${asmr2SubcontenedorActual}`];
    const subNombre = subData?.nombre || 'ASMR';
    
    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FF69B4;">🎉 QUIZ COMPLETADO</h2>
            
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem; margin-bottom: 20px;">${porcentaje}%</div>
                <p style="font-size: 1.2rem; color: #FF69B4;">
                    ${asmr2Aciertos} aciertos • ${asmr2Errores} errores
                </p>
                <p style="opacity: 0.8; margin-top: 10px;">
                    Mazo ${asmr2MazoActual} de "${subNombre}" completado
                </p>
            </div>
            
            <div style="background: rgba(255, 105, 180, 0.1); padding: 25px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: #4CAF50; margin-bottom: 15px;">💰 Recompensa Obtenida</h3>
                <div style="font-size: 2rem; text-align: center; color: #FFD166;">
                    +${recompensa.toFixed(2)} soles
                </div>
                <p style="text-align: center; margin-top: 10px; opacity: 0.8;">
                    ¡Sigue practicando para ganar más!
                </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <div style="display: flex; justify-content: center; gap: 15px;">
                    <button class="quiz-btn" onclick="cargarASMR2Track(${asmr2ContenedorActual}, ${asmr2SubcontenedorActual})" style="background: linear-gradient(135deg, #FF69B4, #FF1493);">
                        🎧 Volver al ASMR
                    </button>
                    <button class="quiz-btn" onclick="iniciarQuizASMR2(${asmr2ContenedorActual}, ${asmr2SubcontenedorActual}, ${asmr2MazoActual})" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                        🔄 Repetir Mazo
                    </button>
                </div>
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="cargarSubcontenedoresASMR2(${asmr2ContenedorActual})">
                    ↩️ Volver a ASMRs
                </button>
            </div>
        </div>
    `;
    
    actualizarContadorDineroInicio();
}

function cancelarQuizASMR2() {
    if (confirm('¿Seguro que quieres cancelar el quiz? Se perderá el progreso actual.')) {
        cargarASMR2Track(asmr2ContenedorActual, asmr2SubcontenedorActual);
    }
}

// ================================================
// NOTIFICACIONES
// ================================================

function mostrarNotificacionASMR2(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 150px;
        right: 20px;
        background: linear-gradient(135deg, #FF69B4, #FF1493);
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
    
    setTimeout(() => {
        if (notif.parentNode) {
            notif.parentNode.removeChild(notif);
        }
    }, 2500);
}

// ================================================
// FUNCIÓN PARA VERIFICAR QUE LOS DATOS ESTÉN CARGADOS
// ================================================

console.log('✅ ASMR2 - Sistema cargado correctamente');
console.log('📦 Contenedores disponibles:', asmr2Data ? Object.keys(asmr2Data.contenedores).length : 0);