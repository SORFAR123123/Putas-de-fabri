// ================================================
// SISTEMA PRINCIPAL DE NAVEGACIÓN Y QUIZ - VERSIÓN DINÁMICA
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
let modoMazoDificil = false;
let palabrasDificilesQuiz = [];

// Variables para videos y animes
let modoActual = 'manga'; // 'manga', 'video', 'anime', 'audio', 'asmr', 'rpg', 'misiones', 'fantasia', 'srs'
let idiomaVideoActual = 'espanol'; // 'espanol', 'japones'

// ====================
// NUEVO: SISTEMA SRS (Spaced Repetition System)
// ====================

// Almacenamiento local para palabras SRS
let srsDatabase = {
    palabras: [], // Array de objetos palabra SRS
    estadisticas: {
        totalAprendidas: 0,
        totalRepasadas: 0,
        proximaRepeticion: null,
        rachaActual: 0,
        mejorRacha: 0
    }
};

// Inicializar SRS desde localStorage
function inicializarSRS() {
    const savedSRS = localStorage.getItem('japonesSRS');
    if (savedSRS) {
        srsDatabase = JSON.parse(savedSRS);
        console.log('📊 SRS cargado:', srsDatabase.palabras.length, 'palabras');
    }
    
    // Verificar repeticiones pendientes
    verificarRepeticionesPendientes();
}

// Guardar SRS en localStorage
function guardarSRS() {
    localStorage.setItem('japonesSRS', JSON.stringify(srsDatabase));
    console.log('💾 SRS guardado:', srsDatabase.palabras.length, 'palabras');
}

// Agregar palabra al sistema SRS cuando se falla
function agregarPalabraSRS(palabraData) {
    // Verificar si ya existe
    const existe = srsDatabase.palabras.some(p => 
        p.japones === palabraData.japones && 
        p.contenedor === palabraData.contenedor &&
        p.subcontenedor === palabraData.subcontenedor &&
        p.mazo === palabraData.mazo
    );
    
    if (existe) {
        console.log('⚠️ Palabra ya está en SRS:', palabraData.japones);
        return false;
    }
    
    // Crear objeto palabra SRS
    const palabraSRS = {
        id: Date.now() + Math.random(),
        japones: palabraData.japones,
        lectura: palabraData.lectura,
        significado: palabraData.significado,
        opciones: palabraData.opciones,
        respuesta: palabraData.respuesta,
        
        // Metadatos de origen
        contenedor: palabraData.contenedor,
        subcontenedor: palabraData.subcontenedor,
        mazo: palabraData.mazo,
        fechaAgregada: new Date().toISOString(),
        
        // Sistema de repeticiones
        nivel: 0, // 0=nueva, 1=fácil, 2=medio, 3=dura
        siguienteRepeticion: new Date().toISOString(), // Repetir en 1 hora
        intervalo: 1, // horas hasta próxima repetición
        repeticiones: 0,
        fallos: 0,
        aciertosConsecutivos: 0,
        
        // Estadísticas
        ultimaRevision: null,
        facilidad: 2.5, // Factor de facilidad (2.5 = estándar)
        tiempoEstudio: 0 // segundos totales estudiando esta palabra
    };
    
    srsDatabase.palabras.push(palabraSRS);
    srsDatabase.estadisticas.totalRepasadas++;
    
    // Actualizar próxima repetición más temprana
    actualizarProximaRepeticionSRS();
    
    guardarSRS();
    
    console.log('✅ Palabra agregada a SRS:', palabraData.japones);
    mostrarNotificacionSRS(`📝 "${palabraData.japones}" agregada al SRS`);
    
    return true;
}

// Actualizar próxima repetición más temprana
function actualizarProximaRepeticionSRS() {
    const palabrasPendientes = srsDatabase.palabras.filter(p => 
        new Date(p.siguienteRepeticion) <= new Date()
    );
    
    if (palabrasPendientes.length > 0) {
        // Ordenar por fecha más antigua
        palabrasPendientes.sort((a, b) => 
            new Date(a.siguienteRepeticion) - new Date(b.siguienteRepeticion)
        );
        srsDatabase.estadisticas.proximaRepeticion = palabrasPendientes[0].siguienteRepeticion;
    } else {
        srsDatabase.estadisticas.proximaRepeticion = null;
    }
}

// Verificar repeticiones pendientes
function verificarRepeticionesPendientes() {
    const ahora = new Date();
    const palabrasPendientes = srsDatabase.palabras.filter(p => 
        new Date(p.siguienteRepeticion) <= ahora
    );
    
    if (palabrasPendientes.length > 0) {
        console.log('⏰ SRS: Hay', palabrasPendientes.length, 'palabras para repasar');
        mostrarNotificacionSRS(`⏰ ${palabrasPendientes.length} palabras pendientes en SRS`);
    }
    
    return palabrasPendientes.length;
}

// Obtener palabras para repasar ahora
function obtenerPalabrasParaRepasar() {
    const ahora = new Date();
    return srsDatabase.palabras.filter(p => 
        new Date(p.siguienteRepeticion) <= ahora
    ).sort((a, b) => 
        new Date(a.siguienteRepeticion) - new Date(b.siguienteRepeticion)
    );
}

// Calcular siguiente intervalo basado en respuesta - ¡CORREGIDO!
function calcularSiguienteIntervalo(palabra, calidad) {
    // Calidad: 0=olvidado, 1=difícil, 2=regular, 3=fácil, 4=muy fácil
    
    if (calidad < 3) {
        // Falló o fue difícil, repetir pronto
        palabra.nivel = Math.max(0, palabra.nivel - 1);
        palabra.aciertosConsecutivos = 0;
        palabra.fallos++;
        
        if (calidad === 0) {
            // Olvidado completamente, empezar de nuevo
            return 0.0167; // 1 minuto
        } else if (calidad === 1) {
            return 0.0833; // 5 minutos
        } else {
            return 0.25; // 15 minutos
        }
    } else {
        // Acertó
        palabra.aciertosConsecutivos++;
        palabra.repeticiones++;
        
        if (palabra.nivel === 0) {
            // Primera vez que acierta
            palabra.nivel = 1;
            return 1; // 1 hora
        } else if (palabra.nivel === 1) {
            palabra.nivel = 2;
            return 6; // 6 horas
        } else if (palabra.nivel === 2) {
            palabra.nivel = 3;
            return 24; // 1 día
        } else if (palabra.nivel === 3) {
            palabra.nivel = 4;
            return 72; // 3 días
        } else if (palabra.nivel === 4) {
            palabra.nivel = 5;
            return 168; // 1 semana (7 días) ← ¡AQUÍ PASA DE 3 A 7 DÍAS!
        } else if (palabra.nivel === 5) {
            palabra.nivel = 6;
            return 336; // 2 semanas (14 días)
        } else if (palabra.nivel === 6) {
            palabra.nivel = 7;
            return 720; // 1 mes (~30 días)
        } else if (palabra.nivel === 7) {
            palabra.nivel = 8;
            return 1440; // 2 meses
        } else if (palabra.nivel === 8) {
            palabra.nivel = 9;
            return 2160; // 3 meses
        } else {
            // Máximo: 6 meses para palabras totalmente dominadas
            return 4320; // 6 meses
        }
    }
}

// Procesar respuesta en SRS - ¡ACTUALIZADO!
function procesarRespuestaSRS(palabra, acerto) {
    const calidad = acerto ? 4 : 1; // 4=muy fácil (si acertó), 1=difícil (si falló)
    
    // Calcular nuevo intervalo
    const intervaloHoras = calcularSiguienteIntervalo(palabra, calidad);
    
    // Calcular nueva fecha de repetición
    const ahora = new Date();
    palabra.ultimaRevision = ahora.toISOString();
    palabra.siguienteRepeticion = new Date(ahora.getTime() + intervaloHoras * 60 * 60 * 1000).toISOString();
    
    // Actualizar estadísticas
    if (acerto) {
        palabra.aciertosConsecutivos++;
        // Cambiar a 10 aciertos seguidos para considerar "dominada"
        if (palabra.aciertosConsecutivos >= 10 && palabra.nivel >= 7) {
            srsDatabase.estadisticas.totalAprendidas++;
            mostrarNotificacionSRS(`🎉 ¡Dominaste "${palabra.japones}"! (Nivel ${palabra.nivel})`);
        }
    } else {
        palabra.fallos++;
    }
    
    // Actualizar racha
    if (acerto) {
        srsDatabase.estadisticas.rachaActual++;
        if (srsDatabase.estadisticas.rachaActual > srsDatabase.estadisticas.mejorRacha) {
            srsDatabase.estadisticas.mejorRacha = srsDatabase.estadisticas.rachaActual;
        }
    } else {
        srsDatabase.estadisticas.rachaActual = 0;
    }
    
    // Actualizar próxima repetición
    actualizarProximaRepeticionSRS();
    
    guardarSRS();
    
    return intervaloHoras;
}

// Eliminar palabra del SRS (cuando se domina)
function eliminarPalabraSRS(id) {
    const index = srsDatabase.palabras.findIndex(p => p.id === id);
    if (index !== -1) {
        srsDatabase.palabras.splice(index, 1);
        guardarSRS();
        return true;
    }
    return false;
}

// ====================
// NUEVO: INTERFAZ SRS
// ====================

function cargarPaginaSRS() {
    modoActual = 'srs';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearUISRS();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearUISRS() {
    const palabrasParaRepasar = obtenerPalabrasParaRepasar();
    const totalPalabras = srsDatabase.palabras.length;
    const aprendidas = srsDatabase.estadisticas.totalAprendidas;
    
    let html = `
        <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
            <h1 style="text-align: center; color: #4CAF50; margin-bottom: 10px;">📚 SISTEMA SRS INTENSIVO</h1>
            <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">
                Repetición espaciada para dominar palabras difíciles
            </p>
            
            <!-- RESUMEN ESTADÍSTICAS -->
            <div style="background: rgba(76, 175, 80, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #4CAF50;">
                <h3 style="color: #4CAF50; margin-bottom: 20px;">📊 ESTADÍSTICAS SRS</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;">
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; color: #4CAF50; font-weight: bold;">${totalPalabras}</div>
                        <div style="font-size: 0.9rem; opacity: 0.8;">Palabras en SRS</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; color: #2196F3; font-weight: bold;">${palabrasParaRepasar.length}</div>
                        <div style="font-size: 0.9rem; opacity: 0.8;">Para repasar ahora</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; color: #FF9800; font-weight: bold;">${aprendidas}</div>
                        <div style="font-size: 0.9rem; opacity: 0.8;">Dominadas</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; color: #9C27B0; font-weight: bold;">${srsDatabase.estadisticas.rachaActual}</div>
                        <div style="font-size: 0.9rem; opacity: 0.8;">Racha actual</div>
                    </div>
                </div>
                
                ${palabrasParaRepasar.length > 0 ? 
                    `<div style="margin-top: 20px; text-align: center;">
                        <div style="background: #4CAF50; color: white; padding: 10px 20px; border-radius: 50px; display: inline-block; font-weight: bold;">
                            ⏰ ${palabrasParaRepasar.length} palabras esperando
                        </div>
                    </div>` 
                    : ''}
            </div>
            
            <!-- BOTÓN INICIAR REPASO -->
            <div style="text-align: center; margin: 30px 0;">
                <button class="boton-srs-iniciar" onclick="iniciarRepasoSRS()" 
                        ${palabrasParaRepasar.length === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                    ${palabrasParaRepasar.length === 0 ? 
                        '✅ No hay palabras para repasar ahora' : 
                        `🚀 INICIAR REPASO SRS (${palabrasParaRepasar.length} palabras)`}
                </button>
                <p style="opacity: 0.7; margin-top: 10px; font-size: 0.9rem;">
                    El sistema SRS te mostrará palabras en intervalos inteligentes
                </p>
            </div>
            
            <!-- LISTA DE PALABRAS EN SRS -->
            <div style="background: rgba(33, 150, 243, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #2196F3;">
                <h3 style="color: #2196F3; margin-bottom: 20px;">
                    📝 PALABRAS EN SISTEMA SRS
                    <span style="font-size: 0.9rem; opacity: 0.8; margin-left: 10px;">
                        Total: ${totalPalabras}
                    </span>
                </h3>
                
                ${totalPalabras === 0 ? 
                    `<div style="text-align: center; padding: 40px;">
                        <div style="font-size: 4rem; opacity: 0.3;">📚</div>
                        <h4 style="color: #FF9800; margin: 20px 0;">No hay palabras en el SRS</h4>
                        <p style="opacity: 0.7;">Las palabras que falles en los quizzes se agregarán automáticamente aquí.</p>
                    </div>` 
                    : `
                    <div style="max-height: 400px; overflow-y: auto; padding-right: 10px;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px;">
                            ${srsDatabase.palabras.slice(0, 50).map(palabra => {
                                const siguiente = new Date(palabra.siguienteRepeticion);
                                const ahora = new Date();
                                const pendiente = siguiente <= ahora;
                                const horasRestantes = Math.max(0, (siguiente - ahora) / (1000 * 60 * 60));
                                
                                return `
                                    <div class="palabra-srs-item" style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px; border-left: 5px solid ${pendiente ? '#FF9800' : '#4CAF50'};">
                                        <div style="font-weight: bold; color: #FFD166; font-size: 1.1rem; margin-bottom: 5px;">
                                            ${palabra.japones}
                                        </div>
                                        <div style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 5px;">
                                            ${palabra.lectura}
                                        </div>
                                        <div style="font-size: 0.9rem; color: #4CAF50; margin-bottom: 10px;">
                                            ${palabra.significado}
                                        </div>
                                        
                                        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; opacity: 0.7;">
                                            <div>
                                                <span style="color: #${palabra.aciertosConsecutivos >= 3 ? '4CAF50' : 'FF9800'};">✓${palabra.aciertosConsecutivos}</span>
                                                <span style="margin-left: 10px; color: #F44336;">✗${palabra.fallos}</span>
                                            </div>
                                            <div style="color: ${pendiente ? '#FF9800' : '#2196F3'}">
                                                ${pendiente ? '⏰ AHORA' : `en ${Math.round(horasRestantes)}h`}
                                            </div>
                                        </div>
                                        
                                        <div style="margin-top: 10px; display: flex; gap: 10px;">
                                            <button class="btn-srs-accion" onclick="eliminarPalabraSRS(${palabra.id}); location.reload();" 
                                                    style="background: rgba(244, 67, 54, 0.2); color: #F44336; padding: 5px 10px; border-radius: 5px; border: none; font-size: 0.8rem; cursor: pointer;">
                                                Eliminar
                                            </button>
                                            <button class="btn-srs-accion" onclick="repetirPalabraSRS(${palabra.id})" 
                                                    style="background: rgba(33, 150, 243, 0.2); color: #2196F3; padding: 5px 10px; border-radius: 5px; border: none; font-size: 0.8rem; cursor: pointer;">
                                                Repetir
                                            </button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    
                    ${totalPalabras > 50 ? 
                        `<div style="text-align: center; margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
                            <p style="opacity: 0.7; font-size: 0.9rem;">
                                Mostrando 50 de ${totalPalabras} palabras. Continúa practicando para ver más.
                            </p>
                        </div>` 
                        : ''}
                `}
            </div>
            
            <!-- CÓMO FUNCIONA -->
            <div style="background: rgba(255, 152, 0, 0.1); border-radius: 15px; padding: 25px; border: 2px solid #FF9800;">
                <h3 style="color: #FF9800; margin-bottom: 20px;">ℹ️ ¿CÓMO FUNCIONA EL SRS?</h3>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">1️⃣</div>
                        <h4 style="color: #FFD166; margin-bottom: 10px;">Fallar palabra</h4>
                        <p style="font-size: 0.9rem; opacity: 0.8;">Cuando fallas en un quiz, se agrega automáticamente al SRS</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">2️⃣</div>
                        <h4 style="color: #FFD166; margin-bottom: 10px;">Repetición inteligente</h4>
                        <p style="font-size: 0.9rem; opacity: 0.8;">El sistema calcula cuándo la olvidarás y te la muestra justo antes</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">3️⃣</div>
                        <h4 style="color: #FFD166; margin-bottom: 10px;">Intervalos crecientes</h4>
                        <div style="font-size: 0.8rem; opacity: 0.8; background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; margin-top: 5px;">
                            <div>1h → 6h → 1d → 3d → 1sem → 2sem → 1mes</div>
                            <div style="color: #FF9800; margin-top: 3px;">¡Ahora con progresión completa!</div>
                        </div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">4️⃣</div>
                        <h4 style="color: #FFD166; margin-bottom: 10px;">Dominio completo</h4>
                        <p style="font-size: 0.9rem; opacity: 0.8;">Después de 10 aciertos seguidos, la palabra se considera dominada</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// Función para iniciar repaso SRS
function iniciarRepasoSRS() {
    const palabrasParaRepasar = obtenerPalabrasParaRepasar();
    
    if (palabrasParaRepasar.length === 0) {
        mostrarNotificacionSRS('✅ No hay palabras para repasar ahora. ¡Buen trabajo!');
        return;
    }
    
    // Configurar variables para el quiz SRS
    modoActual = 'srs';
    palabrasActuales = palabrasParaRepasar.slice(0, 20); // Máximo 20 por sesión
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    
    // Ocultar sección de mangas, mostrar quiz
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    // Cargar primera palabra del SRS
    mostrarPalabraSRS();
}

// Mostrar palabra en quiz SRS
function mostrarPalabraSRS() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = palabrasActuales[indicePalabraActual];
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #4CAF50; margin-bottom: 20px;">
                📚 SRS INTENSIVO • Palabra ${indicePalabraActual + 1}/${palabrasActuales.length}
                <div style="font-size: 0.9rem; color: #FFD166; margin-top: 5px;">
                    Nivel ${palabra.nivel} • Aciertos seguidos: ${palabra.aciertosConsecutivos}
                </div>
            </h2>
            
            <div class="palabra-japonesa" id="palabra-japonesa" style="border-color: #4CAF50;">
                ${palabra.japones}
            </div>
            
            <div class="romaji-debajo" id="romaji-debajo" style="display: none;">
                <div class="romaji-text">${palabra.lectura}</div>
            </div>
            
            <div id="opciones-container">
                <!-- Opciones se cargan dinámicamente -->
            </div>
            
            <!-- INFO PALABRA SRS -->
            <div style="background: rgba(76, 175, 80, 0.1); border-radius: 10px; padding: 15px; margin: 20px 0; text-align: center;">
                <div style="display: flex; justify-content: space-around; font-size: 0.9rem;">
                    <div>
                        <div style="color: #4CAF50;">Repeticiones</div>
                        <div style="font-weight: bold;">${palabra.repeticiones}</div>
                    </div>
                    <div>
                        <div style="color: #4CAF50;">Aciertos</div>
                        <div style="font-weight: bold; color: #4CAF50;">${palabra.aciertosConsecutivos}</div>
                    </div>
                    <div>
                        <div style="color: #F44336;">Fallos</div>
                        <div style="font-weight: bold; color: #F44336;">${palabra.fallos}</div>
                    </div>
                    <div>
                        <div style="color: #FF9800;">Nivel</div>
                        <div style="font-weight: bold;">${palabra.nivel}</div>
                    </div>
                </div>
            </div>
            
            <div id="resultado-container" style="display: none;">
                <!-- Resultado se muestra después de responder -->
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="cancelarQuizSRS()">
                    ❌ Cancelar SRS
                </button>
            </div>
        </div>
    `;
    
    // Crear opciones para la palabra SRS
    crearOpcionesSRS(palabra);
}

// Crear opciones para palabra SRS
function crearOpcionesSRS(palabra) {
    const opcionesContainer = document.getElementById('opciones-container');
    
    // Crear opciones falsas (distractores)
    const opcionesFalsas = [];
    
    // Obtener algunas palabras aleatorias del SRS para opciones falsas
    const otrasPalabras = srsDatabase.palabras
        .filter(p => p.id !== palabra.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
        .map(p => p.significado);
    
    // Agregar opciones genéricas
    opcionesFalsas.push(...otrasPalabras);
    
    // Si no hay suficientes opciones falsas, agregar algunas genéricas
    while (opcionesFalsas.length < 3) {
        opcionesFalsas.push(getSignificadoAleatorio());
    }
    
    // Mezclar todas las opciones
    const todasOpciones = [palabra.significado, ...opcionesFalsas.slice(0, 3)];
    for (let i = todasOpciones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [todasOpciones[i], todasOpciones[j]] = [todasOpciones[j], todasOpciones[i]];
    }
    
    const posicionCorrecta = todasOpciones.indexOf(palabra.significado);
    
    opcionesContainer.innerHTML = `
        <div class="opciones-grid">
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuestaSRS(0, ${posicionCorrecta})" style="border-color: #4CAF50;">
                    ${todasOpciones[0]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuestaSRS(1, ${posicionCorrecta})" style="border-color: #4CAF50;">
                    ${todasOpciones[1]}
                </button>
            </div>
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuestaSRS(2, ${posicionCorrecta})" style="border-color: #4CAF50;">
                    ${todasOpciones[2]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuestaSRS(3, ${posicionCorrecta})" style="border-color: #4CAF50;">
                    ${todasOpciones[3]}
                </button>
            </div>
        </div>
    `;
}

// MODIFICADO: Ahora pasa automáticamente si la respuesta es correcta
function verificarRespuestaSRS(opcionSeleccionada, posicionCorrecta) {
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
                ${correcta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
            </p>
            <p style="margin-top: 10px; font-size: 1.1rem; color: #FFD166;">
                ${palabra.lectura}
            </p>
            <p style="margin-top: 5px; font-size: 1rem; color: #4CAF50;">
                Significado: ${palabra.significado}
            </p>
        </div>
    `;
    
    // Procesar respuesta en el sistema SRS
    const intervaloHoras = procesarRespuestaSRS(palabra, correcta);
    
    if (correcta) {
        aciertos++;
        mostrarNotificacionSRS(`✅ ¡Correcto! Próxima repetición en ${intervaloHoras >= 24 ? Math.round(intervaloHoras/24) + ' días' : Math.round(intervaloHoras) + ' horas'}`);
    } else {
        errores++;
        mostrarNotificacionSRS(`❌ Fallaste. Repetirás en ${Math.round(intervaloHoras*60)} minutos`);
    }
    
    const controls = document.querySelector('.quiz-controls');
    controls.innerHTML = '';
    
    // MODIFICACIÓN CLAVE: Si es correcta, pasar automáticamente después de 1.5 segundos
    if (correcta) {
        controls.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #4CAF50;">
                <p>✅ ¡Correcto! Pasando a la siguiente palabra...</p>
            </div>
        `;
        
        esperandoSiguiente = true;
        
        // Pasar automáticamente después de 1.5 segundos
        setTimeout(() => {
            pasarSiguientePalabraSRS();
        }, 1500);
    } else {
        // Si falla, mostrar botones de calidad
        controls.innerHTML = `
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 15px;">
                <button class="quiz-btn" onclick="calidadRespuestaSRS(0)" style="background: #F44336;">
                    😞 Olvidado
                </button>
                <button class="quiz-btn" onclick="calidadRespuestaSRS(1)" style="background: #FF9800;">
                    😓 Difícil
                </button>
            </div>
            <button class="quiz-btn btn-siguiente" onclick="pasarSiguientePalabraSRS()">
                ⏭️ Siguiente Palabra
            </button>
        `;
        
        esperandoSiguiente = true;
    }
}

// Calidad de respuesta para SRS (más preciso)
function calidadRespuestaSRS(calidad) {
    const palabra = palabrasActuales[indicePalabraActual];
    
    // Recalcular intervalo basado en calidad específica
    const intervaloHoras = calcularSiguienteIntervalo(palabra, calidad);
    
    // Actualizar palabra
    const ahora = new Date();
    palabra.ultimaRevision = ahora.toISOString();
    palabra.siguienteRepeticion = new Date(ahora.getTime() + intervaloHoras * 60 * 60 * 1000).toISOString();
    
    guardarSRS();
    
    let mensaje = '';
    switch(calidad) {
        case 0: mensaje = '😞 Olvidado completamente'; break;
        case 1: mensaje = '😓 Difícil'; break;
    }
    
    mostrarNotificacionSRS(`${mensaje} - Próxima en ${intervaloHoras >= 24 ? Math.round(intervaloHoras/24) + ' días' : Math.round(intervaloHoras) + ' horas'}`);
    
    // Pasar automáticamente después de seleccionar calidad
    setTimeout(() => {
        pasarSiguientePalabraSRS();
    }, 1000);
}

// Pasar a siguiente palabra en SRS
function pasarSiguientePalabraSRS() {
    indicePalabraActual++;
    
    if (indicePalabraActual < palabrasActuales.length) {
        esperandoSiguiente = false;
        mostrarPalabraSRS();
    } else {
        finalizarSRS();
    }
}

// Finalizar sesión SRS
function finalizarSRS() {
    const porcentaje = Math.round((aciertos / palabrasActuales.length) * 100);
    
    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #4CAF50;">🎉 SESIÓN SRS COMPLETADA</h2>
            
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem; margin-bottom: 20px; color: #4CAF50;">${porcentaje}%</div>
                <p style="font-size: 1.2rem; color: #8A5AF7;">
                    ${aciertos} aciertos • ${errores} errores
                </p>
                <p style="opacity: 0.8; margin-top: 15px; max-width: 600px; margin-left: auto; margin-right: auto;">
                    Has repasado ${palabrasActuales.length} palabras difíciles
                </p>
            </div>
            
            <!-- RECOMPENSA POR SRS -->
            <div style="background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1)); padding: 25px; border-radius: 15px; margin: 20px 0; border: 2px solid #4CAF50;">
                <h3 style="color: #FFD166; margin-bottom: 15px;">💰 Recompensa por práctica intensiva</h3>
                <div style="font-size: 2rem; text-align: center; color: #FFD166;">
                    +${(aciertos * 0.5).toFixed(1)} soles
                </div>
                <p style="text-align: center; opacity: 0.8; margin-top: 10px;">
                    Ganaste ${(aciertos * 0.5).toFixed(1)} soles por repasar palabras difíciles
                </p>
            </div>
            
            <!-- PRÓXIMA REPETICIÓN -->
            <div style="background: rgba(255, 152, 0, 0.1); border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h4 style="color: #FF9800; margin-bottom: 15px;">⏰ Próxima repetición</h4>
                <p style="text-align: center; opacity: 0.8;">
                    Las palabras que acertaste volverán en intervalos más largos.
                    Las que fallaste reaparecerán pronto para reforzar.
                </p>
                <div style="text-align: center; margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.2); border-radius: 8px;">
                    <p style="font-size: 0.9rem; color: #FFD166;">
                        🎯 Progresión de intervalos: 1h → 6h → 1d → 3d → 1sem → 2sem → 1mes
                    </p>
                </div>
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="volverASRS()" style="background: linear-gradient(135deg, #4CAF50, #2196F3);">
                    ↩️ Volver al SRS
                </button>
                <button class="quiz-btn btn-siguiente" onclick="iniciarRepasoSRS()">
                    🔄 Otra sesión SRS
                </button>
            </div>
        </div>
    `;
    
    // Dar recompensa
    const recompensa = aciertos * 0.5;
    sistemaEconomia.agregarDinero(recompensa);
    actualizarContadorDineroInicio();
}

// Cancelar quiz SRS
function cancelarQuizSRS() {
    if (confirm('¿Seguro que quieres cancelar la sesión SRS? El progreso se guardará.')) {
        guardarSRS();
        cargarPaginaSRS();
    }
}

// Volver al menú SRS
function volverASRS() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('manga-section').style.display = 'block';
    cargarPaginaSRS();
}

// Repetir palabra específica del SRS
function repetirPalabraSRS(id) {
    const palabra = srsDatabase.palabras.find(p => p.id === id);
    if (!palabra) return;
    
    // Crear quiz con solo esta palabra
    palabrasActuales = [palabra];
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    
    // Ocultar sección de mangas, mostrar quiz
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    // Mostrar palabra
    mostrarPalabraSRS();
}

// Notificación para SRS
function mostrarNotificacionSRS(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 150px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #2196F3);
        color: white;
        padding: 12px 20px;
        border-radius: 50px;
        font-weight: bold;
        box-shadow: 0 5px 15px rgba(0,0,0,0.4);
        z-index: 1002;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
        font-size: 1rem;
        border: 2px solid white;
        white-space: nowrap;
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        if (notif.parentNode) {
            notif.parentNode.removeChild(notif);
        }
    }, 2500);
}

// Obtener significado aleatorio para opciones falsas
function getSignificadoAleatorio() {
    const significados = [
        'Casa', 'Escuela', 'Libro', 'Mesa', 'Silla', 'Ventana',
        'Puerta', 'Comida', 'Agua', 'Tiempo', 'Persona', 'Lugar',
        'Día', 'Noche', 'Año', 'Mes', 'Semana', 'Hora',
        'Minuto', 'Segundo', 'País', 'Ciudad', 'Calle', 'Parque'
    ];
    return significados[Math.floor(Math.random() * significados.length)];
}

// ====================
// FUNCIÓN AUXILIAR PARA CONTAR MAZOS DISPONIBLES
// ====================

// Función para contar mazos disponibles en un subcontenedor
function contarMazosDisponibles(contenedor, subcontenedor) {
    let count = 0;
    
    if (modoActual === 'anime') {
        for (let mazo = 1; mazo <= 100; mazo++) { // Hasta 100 como máximo
            if (existeVocabularioAnime(contenedor, subcontenedor, mazo)) {
                count++;
            } else {
                // Si encontramos un mazo vacío, seguimos buscando por si hay más adelante
                continue;
            }
        }
    } else if (modoActual === 'audio') {
        for (let mazo = 1; mazo <= 100; mazo++) {
            if (existeVocabularioAudio(contenedor, subcontenedor, mazo)) {
                count++;
            }
        }
    } else {
        // Modo manga/video normal
        for (let mazo = 1; mazo <= 100; mazo++) {
            if (verificarVocabularioDisponible(contenedor, subcontenedor, mazo)) {
                count++;
            }
        }
    }
    
    return count || 10; // Mínimo 10 para mantener compatibilidad
}

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
// NUEVO: SISTEMA DE MISIONES
// ====================

function cargarPaginaMisiones() {
    modoActual = 'misiones';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearUIMisiones();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearUIMisiones() {
    const misiones = sistemaEconomia.obtenerProgresoMisiones();
    const estadisticas = sistemaEconomia.obtenerEstadisticas();
    const palabrasDificiles = estadisticas.palabrasDificiles;
    
    let html = `
        <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
            <h1 style="text-align: center; color: #FFD166; margin-bottom: 10px;">🎯 SISTEMA DE MISIONES</h1>
            <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">
                Completa misiones para ganar dinero extra. Se reinician diariamente/semanalmente.
            </p>
            
            <!-- RESUMEN -->
            <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 20px; margin-bottom: 30px; border: 2px solid #FF1493;">
                <h3 style="color: #FF1493; margin-bottom: 15px;">📊 RESUMEN DE PROGRESO</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; color: #FFD166;">${estadisticas.completados100}</div>
                        <div style="font-size: 0.9rem; opacity: 0.8;">Mazos 100%</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; color: #4CAF50;">${palabrasDificiles}</div>
                        <div style="font-size: 0.9rem; opacity: 0.8;">Palabras Difíciles</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; color: #5864F5;">${estadisticas.dinero.toFixed(2)}</div>
                        <div style="font-size: 0.9rem; opacity: 0.8;">Soles</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; color: #8A5AF7;">${estadisticas.porcentajeTotal}%</div>
                        <div style="font-size: 0.9rem; opacity: 0.8;">Progreso Total</div>
                    </div>
                </div>
            </div>
            
            <!-- BOTÓN MAZO DIFÍCIL -->
            <div style="text-align: center; margin: 30px 0;">
                <button class="boton-mazo-dificil" onclick="iniciarMazoDificilDesdeUI()" 
                        ${palabrasDificiles === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                    ${palabrasDificiles === 0 ? 
                        '📝 No hay palabras difíciles' : 
                        `📝 PRACTICAR MAZO DIFÍCIL (${palabrasDificiles} palabras)`}
                </button>
                <p style="opacity: 0.7; margin-top: 10px; font-size: 0.9rem;">
                    El mazo difícil se reinicia diariamente a las 3 AM y al completarlo
                </p>
            </div>
            
            <!-- MISIONES DIARIAS -->
            <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #FFD166;">
                <h3 style="color: #FFD166; margin-bottom: 20px;">
                    📅 MISIONES DIARIAS 
                    <span style="font-size: 0.9rem; opacity: 0.8; margin-left: 10px;">
                        Se reinician: ${new Date().toLocaleDateString()}
                    </span>
                </h3>
                
                <div style="display: flex; flex-direction: column; gap: 15px;">
    `;
    
    // Misiones diarias
    Object.entries(misiones.diarias.misiones).forEach(([clave, mision]) => {
        const porcentaje = (mision.progreso / mision.objetivo) * 100;
        const nombreMision = {
            'completar_3_mazos': 'Completar 3 mazos',
            'practicar_50_palabras': 'Practicar 50 palabras',
            'obtener_100_exp': 'Obtener 100 EXP',
            'mazo_100_porciento': 'Completar 1 mazo al 100%',
            'palabras_dificiles': 'Marcar 5 palabras difíciles'
        }[clave];
        
        html += `
            <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px; border-left: 5px solid ${mision.completada ? '#4CAF50' : '#FFD166'};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <div style="font-weight: bold; color: ${mision.completada ? '#4CAF50' : '#FFD166'}">
                        ${nombreMision}
                    </div>
                    <div style="font-weight: bold; color: #4CAF50;">+${mision.recompensa} soles</div>
                </div>
                <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; margin-bottom: 10px;">
                    <div style="background: ${mision.completada ? '#4CAF50' : '#FFD166'}; width: ${Math.min(porcentaje, 100)}%; height: 100%; border-radius: 4px;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                    <span>${mision.progreso}/${mision.objetivo}</span>
                    <span>${mision.completada ? '✅ COMPLETADA' : `${Math.round(porcentaje)}%`}</span>
                </div>
            </div>
        `;
    });
    
    html += `
                </div>
            </div>
            
            <!-- MISIONES SEMANALES -->
            <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 25px; border: 2px solid #5864F5;">
                <h3 style="color: #5864F5; margin-bottom: 20px;">
                    📆 MISIONES SEMANALES
                    <span style="font-size: 0.9rem; opacity: 0.8; margin-left: 10px;">
                        Semana del: ${misiones.semanales.inicio_semana}
                    </span>
                </h3>
                
                <div style="display: flex; flex-direction: column; gap: 15px;">
    `;
    
    // Misiones semanales
    Object.entries(misiones.semanales.misiones).forEach(([clave, mision]) => {
        const porcentaje = (mision.progreso / mision.objetivo) * 100;
        const nombreMision = {
            'completar_20_mazos': 'Completar 20 mazos',
            'practicar_300_palabras': 'Practicar 300 palabras',
            'obtener_1000_exp': 'Obtener 1000 EXP',
            'mazos_100_porciento': 'Completar 10 mazos al 100%',
            'mazos_dificiles_completados': 'Completar 3 mazos difíciles'
        }[clave];
        
        html += `
            <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px; border-left: 5px solid ${mision.completada ? '#4CAF50' : '#5864F5'};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <div style="font-weight: bold; color: ${mision.completada ? '#4CAF50' : '#5864F5'}">
                        ${nombreMision}
                    </div>
                    <div style="font-weight: bold; color: #FFD166;">+${mision.recompensa} soles</div>
                </div>
                <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; margin-bottom: 10px;">
                    <div style="background: ${mision.completada ? '#4CAF50' : '#5864F50'}; width: ${Math.min(porcentaje, 100)}%; height: 100%; border-radius: 4px;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                    <span>${mision.progreso}/${mision.objetivo}</span>
                    <span>${mision.completada ? '✅ COMPLETADA' : `${Math.round(porcentaje)}%`}</span>
                </div>
            </div>
        `;
    });
    
    html += `
                </div>
            </div>
            
            <!-- INFORMACIÓN ADICIONAL -->
            <div style="background: rgba(76, 175, 80, 0.1); border-radius: 15px; padding: 20px; margin-top: 30px; border-left: 5px solid #4CAF50;">
                <h4 style="color: #4CAF50; margin-bottom: 15px;">💡 Cómo funcionan las misiones</h4>
                <ul style="padding-left: 20px; opacity: 0.8;">
                    <li>Las misiones diarias se reinician cada día a las 3 AM</li>
                    <li>Las misiones semanales se reinician cada lunes</li>
                    <li>Las recompensas se suman automáticamente a tu dinero</li>
                    <li>Los mazos difíciles se reinician diariamente y al completarlos</li>
                    <li>Ganas más dinero completando mazos al 100%</li>
                </ul>
            </div>
        </div>
    `;
    
    return html;
}

function iniciarMazoDificilDesdeUI() {
    const palabras = iniciarMazoDificil();
    
    if (palabras) {
        modoMazoDificil = true;
        palabrasDificilesQuiz = palabras;
        
        // Resetear contadores
        indicePalabraActual = 0;
        aciertos = 0;
        errores = 0;
        esperandoSiguiente = false;
        
        // Ocultar sección de mangas, mostrar quiz
        document.getElementById('manga-section').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
        
        // Cargar primera palabra del mazo difícil
        mostrarPalabraMazoDificil();
    }
}

// ====================
// NAVEGACIÓN PRINCIPAL - TODOS LOS MODOS
// ====================

function cargarPaginaMangas() {
    modoActual = 'manga';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresMangas();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarPaginaVideos() {
    modoActual = 'video';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresVideos();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarPaginaAnimes() {
    modoActual = 'anime';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresAnimes();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarPaginaAudios() {
    modoActual = 'audio';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresAudios();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarPaginaASMR() {
    modoActual = 'asmr';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresASMR();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function cargarPaginaRPG() {
    modoActual = 'rpg';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    
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

// ====================
// NUEVO: FUNCIÓN PARA RPG FANTASÍA
// ====================

function cargarPaginaFantasiaRPG() {
    modoActual = 'fantasia';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    
    // Verificar si el sistema está cargado
    if (typeof fantasiaRPG !== 'undefined') {
        mangaSection.innerHTML = fantasiaRPG.cargarUI();
    } else {
        mangaSection.innerHTML = `
            <div style="text-align: center; padding: 100px 20px;">
                <h2 style="color: #FF1493; margin-bottom: 20px;">⚔️ RPG FANTASÍA</h2>
                <p style="opacity: 0.8; margin-bottom: 30px;">El sistema RPG Fantasía no se cargó correctamente.</p>
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
    
    const lectorContainer = document.getElementById('lector-manga-container');
    if (lectorContainer) {
        lectorContainer.style.display = 'none';
    }
    
    modoMazoDificil = false;
    palabrasDificilesQuiz = [];
}

// ====================
// CREACIÓN DE UI - MANGAS (VERSIÓN DINÁMICA)
// ====================

function crearContenedoresMangas() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">📚 CONTENEDORES DE MANGAS</h2>';
    html += '<div class="manga-contenedores">';
    
    for (let i = 1; i <= 10; i++) {
        const contenedorData = obtenerContenedorManga(i);
        const nombre = contenedorData.nombre || `CONTAINER ${i}`;
        const desc = contenedorData.descripcion || '5 sub-contenedores con vocabulario y manga';
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedores(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen || obtenerImagenContenedor(i)}')"></div>
                <div class="contenedor-numero">${nombre}</div>
                <p>${desc}</p>
                <div class="card-button">Abrir</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function crearContenedoresVideos() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎬 CONTENEDORES DE VIDEOS</h2>';
    html += '<div class="manga-contenedores">';
    
    for (let i = 1; i <= 10; i++) {
        const contenedorData = obtenerContenedorVideo(i);
        const nombre = contenedorData.nombre || `VIDEO CONTAINER ${i}`;
        const desc = contenedorData.descripcion || 'Videos privados con timestamps';
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresVideos(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen || obtenerImagenContenedor(i)}')"></div>
                <div class="contenedor-numero">${nombre}</div>
                <p>${desc}</p>
                <div class="card-button">Ver videos</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

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

function crearContenedoresAudios() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎵 CONTENEDORES DE AUDIOS</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Openings MP3 + vocabulario de letras</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresAudiosDisponibles();
    const totalContenedores = Object.keys(contenedores).length || 10;
    
    for (let i = 1; i <= Math.max(totalContenedores, 10); i++) {
        const tieneAudios = contenedores[i] && contenedores[i].length > 0;
        const desc = tieneAudios ? contenedores[i].length + ' sub-contenedores con openings' : '5 sub-contenedores disponibles';
        
        // Usar función específica para audio
        let imagenContenedor = obtenerImagenContenedorAudio(i);
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresAudios(${i})">
                <div class="contenedor-img" style="background-image: url('${imagenContenedor}')"></div>
                <div class="contenedor-numero">${obtenerContenedorAudio(i).nombre || `AUDIO CONTAINER ${i}`}</div>
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
                <div class="contenedor-numero">${contenedorData.nombre || `ASMR CONTAINER ${i}`}</div>
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
// FUNCIONES DINÁMICAS PARA SUBCONTENEDORES
// ====================

// FUNCIÓN DINÁMICA PARA CONTAR SUBCONTENEDORES CONFIGURADOS
function contarSubcontenedoresConfigurados(modo, contenedor) {
    if (!sistemaDescriptivo[modo]) return 0;
    
    const subcontenedores = sistemaDescriptivo[modo].subcontenedores;
    let count = 0;
    
    // Contar cuántos subcontenedores tienen configuración para este contenedor
    for (let i = 1; i <= 100; i++) { // Revisar hasta 100 como máximo
        const key = `${contenedor}_${i}`;
        if (subcontenedores.hasOwnProperty(key)) {
            count = i; // Guardar el número más alto encontrado
        }
    }
    
    return Math.max(count, 5); // Mínimo 5 para compatibilidad
}

// FUNCIÓN DINÁMICA PARA OBTENER SUBCONTENEDORES DISPONIBLES
function obtenerSubcontenedoresDisponibles(modo, contenedor) {
    if (!sistemaDescriptivo[modo]) return [];
    
    const subcontenedores = sistemaDescriptivo[modo].subcontenedores;
    const disponibles = [];
    
    for (let i = 1; i <= 100; i++) {
        const key = `${contenedor}_${i}`;
        if (subcontenedores.hasOwnProperty(key)) {
            disponibles.push(i);
        }
    }
    
    return disponibles;
}

// ====================
// FUNCIONES PARA ANIMES (VERSIÓN DINÁMICA)
// ====================

function cargarSubcontenedoresAnimes(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'anime';
    modoMazoDificil = false;
    
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
    
    // Obtener subcontenedores configurados dinámicamente
    const subcontenedoresConfigurados = contarSubcontenedoresConfigurados('animes', contenedor);
    const subcontenedoresDisponibles = obtenerSubcontenedoresDisponibles('animes', contenedor);
    
    for (let i = 1; i <= subcontenedoresConfigurados; i++) {
        const tieneConfiguracion = subcontenedoresDisponibles.includes(i);
        const subData = obtenerSubcontenedorAnime(contenedor, i);
        const animeInfo = tieneConfiguracion ? obtenerAnime(contenedor, i) : null;
        const tieneAnime = tieneConfiguracion && animeInfo !== null; // ← CORRECCIÓN CLAVE
        
        const desc = subData.descripcion || (tieneAnime ? 'Anime disponible' : '(Sin anime configurado)');
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneAnime ? `seleccionarAccionAnime(${contenedor}, ${i})` : `cargarMazosAnimes(${contenedor}, ${i})`}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedorAnime(contenedor, i)}')"></div>
                <h3>${tieneAnime ? animeInfo.titulo.split(' ')[0] : `Anime ${i}`}</h3>
                ${tieneAnime ? 
                    `<p><strong>${animeInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${animeInfo.duracion} • ${animeInfo.categoria}</p>` 
                    : `<p style="color: #FF6B6B;">${desc}</p>`}
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
    modoMazoDificil = false;
    
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
    
    // Contar mazos disponibles
    const mazosDisponibles = contarMazosDisponibles(contenedor, subcontenedor);
    const maxMazos = Math.max(10, mazosDisponibles); // Mostrar al menos 10 o los que haya
    
    html += '<div class="mazos-container">';
    
    for (let i = 1; i <= maxMazos; i++) {
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
// FUNCIONES DINÁMICAS PARA AUDIOS
// ====================

function cargarSubcontenedoresAudios(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'audio';
    modoMazoDificil = false;
    
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
    
    // Obtener subcontenedores configurados dinámicamente
    const subcontenedoresConfigurados = contarSubcontenedoresConfigurados('audios', contenedor);
    const subcontenedoresDisponibles = obtenerSubcontenedoresDisponibles('audios', contenedor);
    
    for (let i = 1; i <= subcontenedoresConfigurados; i++) {
        const tieneConfiguracion = subcontenedoresDisponibles.includes(i);
        let imagenSubcontenedor = obtenerImagenSubcontenedorAudio(contenedor, i);
        const audioInfo = tieneConfiguracion ? obtenerAudio(contenedor, i) : null;
        const tieneAudio = tieneConfiguracion && audioInfo !== null; // ← CORRECCIÓN CLAVE
        
        const desc = tieneAudio ? audioInfo.descripcion : '(Sin audio configurado)';
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneAudio ? `seleccionarAccionAudio(${contenedor}, ${i})` : `cargarMazosAudios(${contenedor}, ${i})`}">
                <div class="subcontenedor-img" style="background-image: url('${imagenSubcontenedor}')"></div>
                <h3>${tieneAudio ? audioInfo.titulo.split('-')[0] : `Audio ${i}`}</h3>
                ${tieneAudio ? 
                    `<p><strong>${audioInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${audioInfo.artista} • ${audioInfo.duracion}</p>` 
                    : `<p style="color: #FF6B6B;">${desc}</p>`}
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
    modoMazoDificil = false;
    
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
    
    // Contar mazos disponibles
    const mazosDisponibles = contarMazosDisponibles(contenedor, subcontenedor);
    const maxMazos = Math.max(10, mazosDisponibles); // Mostrar al menos 10 o los que haya
    
    html += '<div class="mazos-container">';
    
    for (let i = 1; i <= maxMazos; i++) {
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
// FUNCIONES DINÁMICAS PARA ASMR
// ====================

function cargarSubcontenedoresASMR(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'asmr';
    modoMazoDificil = false;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearSubcontenedoresASMRUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaASMR);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresASMRUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🎧 CONTENEDOR ${contenedor} - SUB-CONTENEDORES DE ASMR
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    // Obtener subcontenedores configurados dinámicamente
    const subcontenedoresConfigurados = contarSubcontenedoresConfigurados('asmr', contenedor);
    const subcontenedoresDisponibles = obtenerSubcontenedoresDisponibles('asmr', contenedor);
    
    for (let i = 1; i <= subcontenedoresConfigurados; i++) {
        const tieneConfiguracion = subcontenedoresDisponibles.includes(i);
        const subData = obtenerSubcontenedorASMR(contenedor, i);
        const asmrInfo = tieneConfiguracion ? obtenerASMR(contenedor, i) : null;
        const tieneASMR = tieneConfiguracion && asmrInfo !== null; // ← CORRECCIÓN CLAVE
        
        const desc = subData.descripcion || (tieneASMR ? 'ASMR disponible' : '(Sin audio ASMR configurado)');
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneASMR ? `seleccionarAccionASMR(${contenedor}, ${i})` : 'alert("Este sub-contenedor no tiene audio ASMR disponible")'}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedorASMR(contenedor, i)}')"></div>
                <h3>${tieneASMR ? asmrInfo.titulo.split(' ')[0] : `ASMR ${i}`}</h3>
                ${tieneASMR ? 
                    `<p><strong>${asmrInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${asmrInfo.duracion} • ${asmrInfo.categoria}</p>
                     <p style="font-size: 0.8rem; opacity: 0.7;">🎤 ${asmrInfo.tipoVoz}</p>` 
                    : `<p style="color: #FF6B6B;">${desc}</p>`}
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
                    <div style="font-weight: bold; font-size: 1.2rem;">${subcontenedoresDisponibles.length}/${subcontenedoresConfigurados}</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: #9C27B0; font-size: 0.9rem;">⏱️ Duración Total</div>
                    <div style="font-weight: bold; font-size: 1.2rem;">${calcularDuracionTotalASMRContenedor(contenedor)}</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: #9C27B0; font-size: 0.9rem;">📈 Completado</div>
                    <div style="font-weight: bold; font-size: 1.2rem;">${Math.round((subcontenedoresDisponibles.length / subcontenedoresConfigurados) * 100)}%</div>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

function calcularDuracionTotalASMRContenedor(contenedor) {
    let totalSegundos = 0;
    const subcontenedoresDisponibles = obtenerSubcontenedoresDisponibles('asmr', contenedor);
    
    subcontenedoresDisponibles.forEach(sub => {
        const asmrInfo = obtenerASMR(contenedor, sub);
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
// FUNCIONES DINÁMICAS PARA MANGAS/VIDEOS
// ====================

function cargarSubcontenedores(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'manga';
    modoMazoDificil = false;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaMangas);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        📦 ${obtenerNombreContenedor('manga', contenedor)} - SUB-CONTENEDORES
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    // Obtener subcontenedores configurados dinámicamente
    const subcontenedoresConfigurados = contarSubcontenedoresConfigurados('mangas', contenedor);
    
    for (let i = 1; i <= subcontenedoresConfigurados; i++) {
        const subData = obtenerSubcontenedorManga(contenedor, i);
        const nombre = subData.nombre || `Sub-contenedor ${i}`;
        const desc = subData.descripcion || '10 mazos de vocabulario';
        const tieneContenido = tieneVocabularioEnSubcontenedor(contenedor, i);
        const tieneManga = existeManga(contenedor, i);
        
        html += `
            <div class="subcontenedor-item">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                <h3>${nombre}</h3>
                <p>${desc}</p>
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
    modoMazoDificil = false;
    
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
    
    // Obtener subcontenedores configurados dinámicamente
    const subcontenedoresConfigurados = contarSubcontenedoresConfigurados('videos', contenedor);
    const subcontenedoresDisponibles = obtenerSubcontenedoresDisponibles('videos', contenedor);
    
    for (let i = 1; i <= subcontenedoresConfigurados; i++) {
        const tieneConfiguracion = subcontenedoresDisponibles.includes(i);
        const subData = obtenerSubcontenedorVideo(contenedor, i);
        const videoInfo = tieneConfiguracion ? obtenerVideo(contenedor, i) : null;
        const tieneVideo = tieneConfiguracion && videoInfo !== null; // ← CORRECCIÓN CLAVE
        
        const desc = tieneVideo ? videoInfo.descripcion : subData.descripcion || '(Sin video)';
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneVideo ? `cargarVideo(${contenedor}, ${i})` : 'alert("Este sub-contenedor no tiene video disponible")'}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                <h3>${tieneVideo ? videoInfo.titulo.split(' ')[0] : `Video ${i}`}</h3>
                ${tieneVideo ? 
                    `<p><strong>${videoInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${videoInfo.duracion} • ${videoInfo.categoria}</p>` 
                    : `<p style="color: #FF6B6B;">${desc}</p>`}
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
    modoMazoDificil = false;
    
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
    
    // SECCIÓN DE MAZOS DIFÍCILES ESPECIALES
    const mazosDificiles = obtenerMazosDificilesSubcontenedor(contenedor, subcontenedor);
    if (mazosDificiles.length > 0) {
        html += `
            <div style="background: linear-gradient(135deg, rgba(255, 20, 147, 0.1), rgba(255, 107, 107, 0.1)); 
                      border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 3px solid #FF1493;">
                <h3 style="color: #FFD166; margin-bottom: 20px; text-align: center;">
                    ⚠️ MAZOS DIFÍCILES ESPECIALES
                </h3>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 20px;">
                    Vocabulario avanzado y expresiones complejas. ¡Doble recompensa!
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        `;
        
        mazosDificiles.forEach(mazo => {
            html += `
                <div class="mazo-item" onclick="iniciarQuizDificil(${contenedor}, ${subcontenedor}, '${mazo.id}')" 
                      style="border-color: #FF1493; background: rgba(255, 20, 147, 0.05);">
                    <h3 style="color: #FF1493;">${mazo.nombre}</h3>
                    <p style="color: #FF6B6B;">${mazo.palabras.length} palabras avanzadas</p>
                    <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 10px;">
                        ⭐ Expresiones complejas
                    </p>
                    <div style="margin-top: 15px; padding: 8px 12px; background: rgba(255, 20, 147, 0.2); 
                              border-radius: 8px; font-size: 0.9rem; text-align: center; color: #FFD166;">
                        +5 soles de bonificación
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Contar mazos disponibles
    const mazosDisponibles = contarMazosDisponibles(contenedor, subcontenedor);
    const maxMazos = Math.max(10, mazosDisponibles); // Mostrar al menos 10 o los que haya
    
    html += '<div class="mazos-container">';
    
    for (let i = 1; i <= maxMazos; i++) {
        const tieneVocabulario = verificarVocabularioDisponible(contenedor, subcontenedor, i);
        const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, i);
        
        html += `
            <div class="mazo-item" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${i})` : 'alert("Este mazo aún no tiene vocabulario. Agrégalo en 1_vocabulario.js")'}">
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

function crearBotonVolver(funcionClick) {
    const boton = document.createElement('button');
    boton.className = 'btn-atras-especifico';
    boton.innerHTML = '← Volver';
    boton.onclick = funcionClick;
    return boton;
}

// ====================
// SISTEMA DE QUIZ (CON PALABRAS DIFÍCILES Y SRS)
// ====================

function iniciarQuiz(contenedor, subcontenedor, mazo) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    mazoActual = mazo;
    modoMazoDificil = false;
    
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

// FUNCIÓN PARA INICIAR QUIZ DE MAZOS DIFÍCILES ESPECIALES
function iniciarQuizDificil(contenedor, subcontenedor, mazoId) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    mazoActual = mazoId;
    
    // Obtener palabras del mazo difícil
    palabrasActuales = obtenerVocabulario(contenedor, subcontenedor, mazoId);
    
    if (palabrasActuales.length === 0) {
        alert('No hay palabras en este mazo difícil');
        return;
    }
    
    // Resetear contadores
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    
    // Marcar como mazo difícil para dar bonificación extra
    modoMazoDificil = true;
    
    // Ocultar sección de mangas, mostrar quiz
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    // Cargar primera palabra del mazo difícil
    mostrarPalabraQuizDificil();
}

function mostrarPalabraQuiz() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = palabrasActuales[indicePalabraActual];
    
    let icono = '📚';
    if (modoActual === 'anime') icono = '🎌';
    if (modoActual === 'audio') icono = '🎵';
    if (modoActual === 'asmr') icono = '🎧';
    if (modoActual === 'rpg') icono = '🎮';
    if (modoActual === 'fantasia') icono = '⚔️';
    if (modoActual === 'srs') icono = '🔄';
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #8A5AF7; margin-bottom: 20px;">
                ${icono} ${modoActual === 'asmr' ? 'ASMR' : modoActual === 'audio' ? 'AUDIO' : modoActual === 'rpg' ? 'RPG' : modoActual === 'fantasia' ? 'FANTASÍA' : modoActual === 'srs' ? 'SRS' : modoActual.toUpperCase()} • Mazo ${mazoActual} • Palabra ${indicePalabraActual + 1}/${palabrasActuales.length}
            </h2>
            
            <div class="palabra-japonesa" id="palabra-japonesa">
                ${palabra.japones}
            </div>
            
            <div class="romaji-debajo" id="romaji-debajo" style="display: none;">
                <div class="romaji-text">${palabra.lectura}</div>
            </div>
            
            <div id="opciones-container">
                <!-- Opciones se cargan dinámicamente -->
            </div>
            
            <!-- BOTÓN PARA MARCAR COMO DIFÍCIL -->
            <div style="text-align: center; margin: 20px 0;">
                <button class="boton-dificil" onclick="marcarPalabraActualComoDificil()">
                    ⚠️ Marcar como difícil
                </button>
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
    
    // Crear opciones
    crearOpcionesQuiz(palabra);
}

function mostrarPalabraQuizDificil() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = palabrasActuales[indicePalabraActual];
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FF1493; margin-bottom: 20px;">
                ⚠️ MAZO DIFÍCIL ESPECIAL • ${mazoActual} • Palabra ${indicePalabraActual + 1}/${palabrasActuales.length}
                <div style="font-size: 0.9rem; color: #FFD166; margin-top: 5px;">
                    Vocabulario avanzado - ¡Doble recompensa!
                </div>
            </h2>
            
            <div class="palabra-japonesa" id="palabra-japonesa" style="border-color: #FF1493; background: rgba(255, 20, 147, 0.05);">
                ${palabra.japones}
            </div>
            
            <div class="romaji-debajo" id="romaji-debajo" style="display: none;">
                <div class="romaji-text">${palabra.lectura}</div>
            </div>
            
            <div id="opciones-container">
                <!-- Opciones se cargan dinámicamente -->
            </div>
            
            <div style="text-align: center; margin: 20px 0; padding: 15px; background: rgba(255, 20, 147, 0.1); border-radius: 10px;">
                <p style="color: #FFD166; font-size: 0.9rem;">
                    ⭐ Este mazo difícil otorga <strong>+5 soles</strong> de bonificación adicional
                </p>
            </div>
            
            <div id="resultado-container" style="display: none;">
                <!-- Resultado se muestra después de responder -->
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="cancelarQuiz()" style="background: linear-gradient(135deg, #FF1493, #8A5AF7);">
                    ❌ Cancelar
                </button>
            </div>
        </div>
    `;
    
    // Crear opciones
    crearOpcionesQuiz(palabra);
}

function mostrarPalabraMazoDificil() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = palabrasDificilesQuiz[indicePalabraActual];
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FF1493; margin-bottom: 20px;">
                ⚠️ MAZO DIFÍCIL • Palabra ${indicePalabraActual + 1}/${palabrasDificilesQuiz.length}
                <div style="font-size: 0.9rem; color: #FF6B6B; margin-top: 5px;">
                    Palabras que marcaste como difíciles
                </div>
            </h2>
            
            <div class="palabra-japonesa" id="palabra-japonesa" style="border-color: #FF1493;">
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
                <button class="quiz-btn btn-volver" onclick="cancelarQuizMazoDificil()">
                    ❌ Cancelar mazo difícil
                </button>
            </div>
        </div>
    `;
    
    // Crear opciones
    crearOpcionesMazoDificil(palabra);
}

function marcarPalabraActualComoDificil() {
    const palabra = palabrasActuales[indicePalabraActual];
    
    const palabraData = {
        contenedor: contenedorActual,
        subcontenedor: subcontenedorActual,
        mazo: mazoActual,
        indice: indicePalabraActual,
        japones: palabra.japones,
        lectura: palabra.lectura,
        significado: palabra.opciones[palabra.respuesta],
        opciones: palabra.opciones,
        respuesta: palabra.respuesta
    };
    
    const marcada = marcarPalabraComoDificil(palabraData);
    
    if (marcada) {
        mostrarNotificacionQuiz(`⚠️ Palabra marcada como difícil: ${palabra.japones}`);
    } else {
        mostrarNotificacionQuiz('⚠️ Esta palabra ya estaba marcada como difícil');
    }
}

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

function crearOpcionesMazoDificil(palabra) {
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
                <button class="opcion-btn" onclick="verificarRespuestaMazoDificil(0, ${nuevaPosicionCorrecta})" style="border-color: #FF1493;">
                    ${opcionesMezcladas[0]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuestaMazoDificil(1, ${nuevaPosicionCorrecta})" style="border-color: #FF1493;">
                    ${opcionesMezcladas[1]}
                </button>
            </div>
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuestaMazoDificil(2, ${nuevaPosicionCorrecta})" style="border-color: #FF1493;">
                    ${opcionesMezcladas[2]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuestaMazoDificil(3, ${nuevaPosicionCorrecta})" style="border-color: #FF1493;">
                    ${opcionesMezcladas[3]}
                </button>
            </div>
        </div>
    `;
}

// MODIFICADA: Ahora detecta cuando fallas y agrega al SRS
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
                ${correcta ? '✅ ¡Correcto!' : '❌ Incorrecto. La respuesta correcta era: ' + palabra.opciones[palabra.respuesta]}
            </p>
        </div>
    `;
    
    if (correcta) {
        aciertos++;
        darExpPorPalabraCorrecta(true);
        
        // Pasar automáticamente si es correcta
        setTimeout(() => {
            pasarSiguientePalabra();
        }, 1500);
    } else {
        errores++;
        
        // NUEVO: Agregar palabra fallada al sistema SRS
        const palabraData = {
            contenedor: contenedorActual,
            subcontenedor: subcontenedorActual,
            mazo: mazoActual,
            indice: indicePalabraActual,
            japones: palabra.japones,
            lectura: palabra.lectura,
            significado: palabra.opciones[palabra.respuesta],
            opciones: palabra.opciones,
            respuesta: palabra.respuesta
        };
        
        agregarPalabraSRS(palabraData);
        
        // Mostrar notificación
        mostrarNotificacionQuiz(`📝 Palabra agregada al SRS: ${palabra.japones}`);
    }
    
    const controls = document.querySelector('.quiz-controls');
    controls.innerHTML = '';
    
    if (correcta) {
        controls.innerHTML = `<div style="text-align: center; padding: 20px; color: #4CAF50;">
            <p>✅ ¡Correcto! Pasando a la siguiente palabra...</p>
        </div>`;
        
        esperandoSiguiente = true;
    } else {
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

function verificarRespuestaMazoDificil(opcionSeleccionada, posicionCorrecta) {
    if (esperandoSiguiente) return;
    
    const palabra = palabrasDificilesQuiz[indicePalabraActual];
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
        aciertos++;
        
        // Pasar automáticamente si es correcta
        setTimeout(() => {
            pasarSiguientePalabraMazoDificil();
        }, 1500);
    } else {
        errores++;
    }
    
    const controls = document.querySelector('.quiz-controls');
    controls.innerHTML = '';
    
    if (correcta) {
        controls.innerHTML = `<div style="text-align: center; padding: 20px; color: #4CAF50;">
            <p>✅ ¡Correcto! Pasando a la siguiente palabra...</p>
        </div>`;
        
        esperandoSiguiente = true;
    } else {
        controls.innerHTML = `
            <button class="quiz-btn btn-volver" onclick="cancelarQuizMazoDificil()">
                ❌ Cancelar mazo difícil
            </button>
            <button class="quiz-btn btn-siguiente" onclick="pasarSiguientePalabraMazoDificil()">
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
        finalizarQuiz();
    }
}

function pasarSiguientePalabraMazoDificil() {
    indicePalabraActual++;
    
    if (indicePalabraActual < palabrasDificilesQuiz.length) {
        esperandoSiguiente = false;
        mostrarPalabraMazoDificil();
    } else {
        finalizarMazoDificil();
    }
}

// ====================
// FUNCIÓN PARA NAVEGAR A MAZOS ADYACENTES
// ====================

function irAMazo(direccion) {
    let nuevoMazo = parseInt(mazoActual) + (direccion === 'siguiente' ? 1 : -1);
    
    // Determinar el número máximo de mazos disponibles
    const mazosDisponibles = contarMazosDisponibles(contenedorActual, subcontenedorActual);
    const maxMazos = Math.max(10, mazosDisponibles);
    
    // Verificar límites
    if (nuevoMazo < 1) {
        nuevoMazo = maxMazos;
    } else if (nuevoMazo > maxMazos) {
        nuevoMazo = 1;
    }
    
    // Verificar si el mazo tiene vocabulario
    const tieneVocabulario = verificarVocabularioDisponible(contenedorActual, subcontenedorActual, nuevoMazo);
    
    if (tieneVocabulario) {
        iniciarQuiz(contenedorActual, subcontenedorActual, nuevoMazo);
    } else {
        // Buscar el siguiente mazo con vocabulario
        let mazoEncontrado = false;
        let intentos = 0;
        
        while (!mazoEncontrado && intentos < maxMazos) {
            nuevoMazo += (direccion === 'siguiente' ? 1 : -1);
            
            if (nuevoMazo < 1) nuevoMazo = maxMazos;
            if (nuevoMazo > maxMazos) nuevoMazo = 1;
            
            if (verificarVocabularioDisponible(contenedorActual, subcontenedorActual, nuevoMazo)) {
                mazoEncontrado = true;
            }
            
            intentos++;
        }
        
        if (mazoEncontrado) {
            iniciarQuiz(contenedorActual, subcontenedorActual, nuevoMazo);
        } else {
            alert("No hay más mazos disponibles con vocabulario en este subcontenedor.");
        }
    }
}

// MODIFICADA: Ahora también funciona para mazos difíciles
function irAMazoDificil(direccion) {
    if (!modoMazoDificil || !palabrasDificilesQuiz || palabrasDificilesQuiz.length === 0) {
        console.log("No hay mazo difícil activo");
        return;
    }
    
    // Aquí puedes implementar lógica para navegar entre mazos difíciles
    // Por ahora, simplemente mostramos un mensaje
    alert("Navegación entre mazos difíciles - Esta funcionalidad está en desarrollo.");
    
    // Ejemplo de implementación futura:
    // 1. Obtener lista de todos los mazos difíciles disponibles
    // 2. Encontrar el índice actual
    // 3. Navegar al siguiente/anterior
    // 4. Reiniciar quiz con el nuevo mazo difícil
}

function finalizarQuiz() {
    const porcentaje = Math.round((aciertos / palabrasActuales.length) * 100);
    
    console.log(`Quiz finalizado: ${aciertos} aciertos de ${palabrasActuales.length} = ${porcentaje}%`);
    
    darExpPorCompletarMazo(porcentaje);
    
    const dineroAntes = sistemaEconomia.obtenerDinero();
    
    sistemaEconomia.actualizarProgreso(
        contenedorActual, 
        subcontenedorActual, 
        mazoActual, 
        porcentaje
    );
    
    const dineroAhora = sistemaEconomia.obtenerDinero();
    const recompensa = dineroAhora - dineroAntes;
    
    // Definir función de volver aquí mismo para evitar problemas de scope
    const funcionVolver = () => {
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
        } else if (modoActual === 'fantasia') {
            cargarPaginaFantasiaRPG();
        } else if (modoActual === 'srs') {
            cargarPaginaSRS();
        } else {
            cargarMazos(contenedorActual, subcontenedorActual);
        }
    };
    
    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FFD166;">🎉 QUIZ COMPLETADO</h2>
            
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem; margin-bottom: 20px;">${porcentaje}%</div>
                <p style="font-size: 1.2rem; color: #8A5AF7;">
                    ${aciertos} aciertos • ${errores} errores
                </p>
                <p style="opacity: 0.8; margin-top: 10px;">
                    Mazo ${mazoActual} completado
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
            
            <!-- BONIFICACIÓN EXTRA POR MAZO DIFÍCIL -->
            ${modoMazoDificil ? `
                <div style="background: linear-gradient(135deg, rgba(255, 20, 147, 0.1), rgba(255, 107, 107, 0.1)); padding: 25px; border-radius: 15px; margin: 20px 0; border: 2px solid #FF1493;">
                    <h3 style="color: #FFD166; margin-bottom: 15px;">🏆 ¡Bonificación por Mazo Difícil!</h3>
                    <p style="text-align: center; font-size: 1.5rem; color: #FFD166;">
                        +5 soles adicionales
                    </p>
                    <p style="text-align: center; opacity: 0.8; margin-top: 10px;">
                        Has completado un mazo difícil con vocabulario avanzado
                    </p>
                </div>
                <script>
                    // Dar bonificación extra
                    sistemaEconomia.agregarDinero(5);
                    actualizarContadorDineroInicio();
                </script>
            ` : ''}
            
            <!-- NAVEGACIÓN ENTRE MAZOS -->
            <div style="text-align: center; margin: 30px 0;">
                <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 15px;">
                    <button class="quiz-btn" onclick="irAMazo('anterior')" style="background: linear-gradient(135deg, #5864F5, #8A5AF7);">
                        ⬅️ Mazo Anterior
                    </button>
                    <button class="quiz-btn" onclick="irAMazo('siguiente')" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                        Mazo Siguiente ➡️
                    </button>
                </div>
                <p style="opacity: 0.7; font-size: 0.9rem;">
                    Navega rápidamente entre mazos sin volver al menú
                </p>
            </div>
            
            <!-- BOTÓN PARA SRS SI HAY PALABRAS FALLADAS -->
            ${srsDatabase.palabras.length > 0 ? `
                <div style="text-align: center; margin: 20px 0;">
                    <button class="boton-srs-iniciar" onclick="cargarPaginaSRS()">
                        🔄 IR AL SRS (${srsDatabase.palabras.length} palabras para repasar)
                    </button>
                    <p style="opacity: 0.7; margin-top: 10px; font-size: 0.9rem;">
                        Tienes palabras en el sistema de repetición espaciada
                    </p>
                </div>
            ` : ''}
            
            <!-- BOTÓN PARA MAZO DIFÍCIL SI HAY PALABRAS MARCADAS -->
            ${sistemaEconomia.obtenerMazoDificil().length > 0 ? `
                <div style="text-align: center; margin: 20px 0;">
                    <button class="boton-mazo-dificil" onclick="iniciarMazoDificilDesdeFinalizacion()">
                        📝 PRACTICAR MAZO DIFÍCIL (${sistemaEconomia.obtenerMazoDificil().length} palabras)
                    </button>
                    <p style="opacity: 0.7; margin-top: 10px; font-size: 0.9rem;">
                        ¡Tienes palabras marcadas como difíciles para practicar!
                    </p>
                </div>
            ` : ''}
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="funcionVolver()">
                    ↩️ Volver a Mazos
                </button>
                <button class="quiz-btn btn-siguiente" onclick="repetirQuiz()">
                    🔄 Repetir Mazo Actual
                </button>
            </div>
        </div>
    `;
    
    // Hacer que las funciones sean accesibles globalmente
    window.funcionVolver = funcionVolver;
    
    actualizarContadorDineroInicio();
}

function finalizarMazoDificil() {
    const porcentaje = Math.round((aciertos / palabrasDificilesQuiz.length) * 100);
    
    // Completar mazo difícil
    completarMazoDificil();
    
    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FF1493;">🎉 MAZO DIFÍCIL COMPLETADO</h2>
            
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem; margin-bottom: 20px; color: #FF1493;">${porcentaje}%</div>
                <p style="font-size: 1.2rem; color: #8A5AF7;">
                    ${aciertos} aciertos • ${errores} errores
                </p>
                <p style="opacity: 0.8; margin-top: 15px;">
                    🎉 ¡Has superado tus palabras difíciles! El mazo se ha reiniciado.
                </p>
            </div>
            
            <!-- RECOMPENSA ESPECIAL POR MAZO DIFÍCIL -->
            <div style="background: linear-gradient(135deg, rgba(255, 20, 147, 0.1), rgba(255, 107, 107, 0.1)); padding: 25px; border-radius: 15px; margin: 20px 0; border: 2px solid #FF1493;">
                <h3 style="color: #FFD166; margin-bottom: 15px;">🏆 ¡Recompensa Especial!</h3>
                <p style="text-align: center; font-size: 1.2rem; color: #FFD166;">
                    +10 soles por completar mazo difícil
                </p>
                <p style="text-align: center; opacity: 0.8; margin-top: 10px;">
                    Has demostrado dedicación superando las palabras más difíciles
                </p>
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="volverAMazos()" style="background: linear-gradient(135deg, #FF1493, #8A5AF7);">
                    ↩️ Volver a Mazos
                </button>
                <button class="quiz-btn btn-siguiente" onclick="cargarPaginaMisiones()">
                    🎯 Ver más misiones
                </button>
            </div>
        </div>
    `;
    
    // Dar recompensa especial
    sistemaEconomia.agregarDinero(10);
    actualizarContadorDineroInicio();
    
    // Resetear modo mazo difícil
    modoMazoDificil = false;
    palabrasDificilesQuiz = [];
}

function iniciarMazoDificilDesdeFinalizacion() {
    const palabras = iniciarMazoDificil();
    
    if (palabras) {
        modoMazoDificil = true;
        palabrasDificilesQuiz = palabras;
        
        indicePalabraActual = 0;
        aciertos = 0;
        errores = 0;
        esperandoSiguiente = false;
        
        mostrarPalabraMazoDificil();
    }
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
        } else if (modoActual === 'fantasia') {
            cargarPaginaFantasiaRPG();
        } else if (modoActual === 'srs') {
            cargarPaginaSRS();
        } else {
            cargarMazos(contenedorActual, subcontenedorActual);
        }
    }
}

function cancelarQuizMazoDificil() {
    if (confirm('¿Seguro que quieres cancelar el mazo difícil? Podrás volver a intentarlo más tarde.')) {
        cargarPaginaMisiones();
    }
}

function volverAMazos() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('manga-section').style.display = 'block';
    
    if (modoMazoDificil) {
        cargarPaginaMisiones();
        modoMazoDificil = false;
        palabrasDificilesQuiz = [];
    } else if (modoActual === 'anime') {
        cargarMazosAnimes(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'audio') {
        cargarMazosAudios(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'asmr') {
        volverAlInicio();
    } else if (modoActual === 'rpg') {
        cargarPaginaRPG();
    } else if (modoActual === 'fantasia') {
        cargarPaginaFantasiaRPG();
    } else if (modoActual === 'srs') {
        cargarPaginaSRS();
    } else {
        cargarMazos(contenedorActual, subcontenedorActual);
    }
}

function repetirQuiz() {
    if (modoMazoDificil) {
        iniciarMazoDificilDesdeUI();
    } else {
        iniciarQuiz(contenedorActual, subcontenedorActual, mazoActual);
    }
}

// ====================
// SISTEMA EXP RPG EN QUIZ
// ====================

function darExpPorPalabraCorrecta(esCorrecta) {
    if (!esCorrecta) return false;
    
    if (typeof quintillizasRPG === 'undefined' || 
        !quintillizasRPG.personajeSeleccionado) {
        return false;
    }
    
    const expPorPalabra = 20;
    
    const expDada = quintillizasRPG.agregarEXP(
        quintillizasRPG.personajeSeleccionado, 
        expPorPalabra
    );
    
    if (expDada) {
        const personaje = quintillizasRPG.datosPersonajes[quintillizasRPG.personajeSeleccionado];
        mostrarNotificacionQuiz(`💖 +${expPorPalabra} EXP para ${personaje.nombre.split(' ')[0]}`);
    }
    
    return expDada;
}

function darExpPorCompletarMazo(porcentaje) {
    if (typeof quintillizasRPG === 'undefined' || 
        !quintillizasRPG.personajeSeleccionado) {
        return false;
    }
    
    let expAdicional = 0;
    
    if (porcentaje >= 100) {
        expAdicional = 100;
    } else if (porcentaje >= 90) {
        expAdicional = 75;
    } else if (porcentaje >= 80) {
        expAdicional = 50;
    } else if (porcentaje >= 70) {
        expAdicional = 30;
    } else if (porcentaje >= 50) {
        expAdicional = 15;
    }
    
    if (expAdicional > 0) {
        const expDada = quintillizasRPG.agregarEXP(
            quintillizasRPG.personajeSeleccionado, 
            expAdicional
        );
        
        if (expDada) {
            mostrarNotificacionQuiz(`🎯 +${expAdicional} EXP por completar mazo`);
        }
        
        return expDada;
    }
    
    return false;
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
        white-space: nowrap;
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        if (notif.parentNode) {
            notif.parentNode.removeChild(notif);
        }
    }, 2500);
}

// ====================
// FUNCIONES AUXILIARES
// ====================

function calcularProgresoSubcontenedor(contenedor, subcontenedor) {
    let totalProgreso = 0;
    let mazosConVocabulario = 0;
    
    for (let mazo = 1; mazo <= 100; mazo++) { // Buscar hasta 100 mazos
        if (verificarVocabularioDisponible(contenedor, subcontenedor, mazo)) {
            totalProgreso += sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, mazo);
            mazosConVocabulario++;
        }
    }
    
    return mazosConVocabulario > 0 ? Math.round(totalProgreso / mazosConVocabulario) : 0;
}

function tieneVocabularioEnSubcontenedor(contenedor, subcontenedor) {
    for (let mazo = 1; mazo <= 100; mazo++) { // Buscar hasta 100 mazos
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
// FUNCIONES ESPECÍFICAS PARA AUDIOS (FALTANTES)
// ====================

// Función para obtener imagen de subcontenedor de audio
function obtenerImagenSubcontenedorAudio(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    const subData = sistemaDescriptivo.audios.subcontenedores[key];
    
    if (subData && subData.imagen) {
        return subData.imagen;
    }
    
    // Si no hay imagen específica, usar la del contenedor
    const contenedorData = obtenerContenedorAudio(contenedor);
    return contenedorData.imagen || 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop';
}

// Función para obtener imagen de contenedor de audio
function obtenerImagenContenedorAudio(numero) {
    const audioData = obtenerContenedorAudio(numero);
    return audioData.imagen || 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop';
}

// ====================
// FUNCIONES ESPECÍFICAS PARA ASMR (FALTANTES)
// ====================

// Función para obtener imagen de subcontenedor de ASMR
function obtenerImagenSubcontenedorASMR(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    const subData = sistemaDescriptivo.asmr.subcontenedores[key];
    
    if (subData && subData.imagen) {
        return subData.imagen;
    }
    
    // Si no hay imagen específica, usar la del contenedor
    const contenedorData = obtenerContenedorASMR(contenedor);
    return contenedorData.imagen || 'https://images.unsplash.com/photo-1572860177022-8fda92a90b95?w=300&h=300&fit=crop';
}

// ====================
// INICIALIZACIÓN COMPLETA (ACTUALIZADA CON SRS Y DINÁMICA)
// ====================

document.addEventListener('DOMContentLoaded', function() {
    crearContadorDineroInicio();
    
    const botonCasa = document.getElementById('boton-casa');
    if (botonCasa) {
        botonCasa.onclick = volverAlInicio;
    }
    
    // Inicializar sistema SRS
    inicializarSRS();
    
    // Verificar que las funciones de imágenes estén disponibles
    console.log('🖼️ Funciones de imágenes cargadas:');
    console.log('- obtenerImagenSubcontenedorAudio:', typeof obtenerImagenSubcontenedorAudio);
    console.log('- obtenerImagenContenedorAudio:', typeof obtenerImagenContenedorAudio);
    console.log('- obtenerImagenSubcontenedorASMR:', typeof obtenerImagenSubcontenedorASMR);
    
    // Verificar funciones dinámicas
    console.log('🔄 Funciones dinámicas cargadas:');
    console.log('- contarSubcontenedoresConfigurados:', typeof contarSubcontenedoresConfigurados);
    console.log('- obtenerSubcontenedoresDisponibles:', typeof obtenerSubcontenedoresDisponibles);
    
    if (typeof quintillizasRPG !== 'undefined') {
        quintillizasRPG.inicializar();
        console.log('🎮 RPG Quintillizas inicializado');
    }
    
    if (typeof fantasiaRPG !== 'undefined') {
        console.log('⚔️ RPG Fantasía inicializado');
    }
    
    // Efectos hover en tarjetas
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('✅ Sistema completo cargado correctamente (VERSIÓN DINÁMICA)');
    console.log('📚 Mangas: 10 contenedores, subcontenedores dinámicos');
    console.log('🎬 Videos: 10 contenedores, subcontenedores dinámicos');
    console.log('🎌 Animes: 10 contenedores, subcontenedores dinámicos');
    console.log('🎵 Audios: 10 contenedores, subcontenedores dinámicos');
    console.log('🎧 ASMR: 4 contenedores, subcontenedores dinámicos');
    console.log('🎮 RPG, ⚔️ Fantasía, 🎯 Misiones, 🔄 SRS');
    console.log('');
    console.log('🔄 Sistema dinámico activado:');
    console.log('   - Detecta automáticamente cuántos subcontenedores hay configurados');
    console.log('   - Soporta hasta 100 subcontenedores por contenedor');
    console.log('   - Muestra solo los subcontenedores que tienen configuración');
    console.log('');
    console.log('🎯 Sistema de misiones activo');
    console.log('⚠️ Sistema de palabras difíciles activo');
    console.log('🔄 Sistema SRS activo: ' + srsDatabase.palabras.length + ' palabras para repasar');
    console.log('💖 EXP por quiz activado: +20 EXP/palabra correcta, +15-100 EXP/mazo completo');
    console.log('💰 Recompensas: 2-3 soles por mazo al 100%');
    
    // Mostrar notificación si hay palabras pendientes en SRS
    setTimeout(() => {
        const pendientes = verificarRepeticionesPendientes();
        if (pendientes > 0) {
            mostrarNotificacionQuiz(`🔄 Tienes ${pendientes} palabras pendientes en el SRS`);
        }
    }, 2000);
    
    // Mostrar información sobre configuración dinámica
    setTimeout(() => {
        console.log('📊 Configuración dinámica detectada:');
        
        // Verificar cuántos subcontenedores hay configurados para manga contenedor 1
        const mangasSubs = contarSubcontenedoresConfigurados('mangas', 1);
        const animesSubs = contarSubcontenedoresConfigurados('animes', 1);
        const audiosSubs = contarSubcontenedoresConfigurados('audios', 1);
        const asmrSubs = contarSubcontenedoresConfigurados('asmr', 1);
        const videosSubs = contarSubcontenedoresConfigurados('videos', 1);
        
        console.log(`   - Mangas contenedor 1: ${mangasSubs} subcontenedores configurados`);
        console.log(`   - Animes contenedor 1: ${animesSubs} subcontenedores configurados`);
        console.log(`   - Audios contenedor 1: ${audiosSubs} subcontenedores configurados`);
        console.log(`   - ASMR contenedor 1: ${asmrSubs} subcontenedores configurados`);
        console.log(`   - Videos contenedor 1: ${videosSubs} subcontenedores configurados`);
    }, 3000);
});
