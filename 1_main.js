// ================================================
// SISTEMA PRINCIPAL DE NAVEGACIÓN Y QUIZ - VERSIÓN COMPLETAMENTE DINÁMICA
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
// FUNCIONES DINÁMICAS PARA DETECTAR CONTENEDORES Y SUBCONTENEDORES
// ====================

// Obtener todos los contenedores disponibles de un modo
function obtenerContenedoresDisponibles(modo) {
    if (!sistemaDescriptivo[modo]) return [];
    
    const contenedores = [];
    const contenedoresData = sistemaDescriptivo[modo].contenedores;
    
    // Recorrer todas las propiedades del objeto contenedores
    for (let key in contenedoresData) {
        if (contenedoresData.hasOwnProperty(key)) {
            const numero = parseInt(key);
            if (!isNaN(numero)) {
                contenedores.push(numero);
            }
        }
    }
    
    // Ordenar numéricamente
    return contenedores.sort((a, b) => a - b);
}

// Obtener el número máximo de contenedores de un modo
function obtenerMaxContenedores(modo) {
    const contenedores = obtenerContenedoresDisponibles(modo);
    return contenedores.length > 0 ? Math.max(...contenedores) : 0;
}

// Obtener todos los subcontenedores disponibles de un contenedor específico
function obtenerSubcontenedoresDisponibles(modo, contenedor) {
    if (!sistemaDescriptivo[modo]) return [];
    
    const subcontenedores = sistemaDescriptivo[modo].subcontenedores;
    const disponibles = [];
    
    for (let key in subcontenedores) {
        if (subcontenedores.hasOwnProperty(key)) {
            const [cont, sub] = key.split('_').map(Number);
            if (cont === contenedor) {
                disponibles.push(sub);
            }
        }
    }
    
    return disponibles.sort((a, b) => a - b);
}

// Obtener el número máximo de subcontenedores de un contenedor
function obtenerMaxSubcontenedores(modo, contenedor) {
    const subs = obtenerSubcontenedoresDisponibles(modo, contenedor);
    return subs.length > 0 ? Math.max(...subs) : 0;
}

// Obtener todos los mazos disponibles para un subcontenedor
function obtenerMazosDisponibles(contenedor, subcontenedor) {
    const mazos = [];
    
    if (modoActual === 'anime') {
        // Para animes, buscar hasta encontrar 5 vacíos seguidos
        let consecutivosVacios = 0;
        for (let mazo = 1; mazo <= 100; mazo++) {
            if (existeVocabularioAnime(contenedor, subcontenedor, mazo)) {
                mazos.push(mazo);
                consecutivosVacios = 0;
            } else {
                consecutivosVacios++;
                if (consecutivosVacios >= 5) break;
            }
        }
    } else if (modoActual === 'audio') {
        let consecutivosVacios = 0;
        for (let mazo = 1; mazo <= 100; mazo++) {
            if (existeVocabularioAudio(contenedor, subcontenedor, mazo)) {
                mazos.push(mazo);
                consecutivosVacios = 0;
            } else {
                consecutivosVacios++;
                if (consecutivosVacios >= 5) break;
            }
        }
    } else {
        let consecutivosVacios = 0;
        for (let mazo = 1; mazo <= 100; mazo++) {
            if (verificarVocabularioDisponible(contenedor, subcontenedor, mazo)) {
                mazos.push(mazo);
                consecutivosVacios = 0;
            } else {
                consecutivosVacios++;
                if (consecutivosVacios >= 5) break;
            }
        }
    }
    
    return mazos;
}

// Obtener el número máximo de mazos disponibles
function obtenerMaxMazos(contenedor, subcontenedor) {
    const mazos = obtenerMazosDisponibles(contenedor, subcontenedor);
    return mazos.length > 0 ? Math.max(...mazos) : 0;
}

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
        nivel: 0,
        siguienteRepeticion: new Date().toISOString(),
        intervalo: 1,
        repeticiones: 0,
        fallos: 0,
        aciertosConsecutivos: 0,
        
        // Estadísticas
        ultimaRevision: null,
        facilidad: 2.5,
        tiempoEstudio: 0
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

// Calcular siguiente intervalo basado en respuesta
function calcularSiguienteIntervalo(palabra, calidad) {
    // Calidad: 0=olvidado, 1=difícil, 2=regular, 3=fácil, 4=muy fácil
    
    // Si falló o fue difícil
    if (calidad < 3) {
        palabra.aciertosConsecutivos = 0;
        palabra.fallos++;
        
        if (calidad === 0) {
            palabra.nivel = 0;
            return 0.0167; // 1 minuto
        } else if (calidad === 1) {
            palabra.nivel = Math.max(0, palabra.nivel - 1);
            return 0.0833; // 5 minutos
        } else if (calidad === 2) {
            palabra.nivel = Math.max(0, palabra.nivel - 0.5);
            return 0.25; // 15 minutos
        }
    } 
    // Si acertó (calidad 3 o 4)
    else {
        palabra.aciertosConsecutivos++;
        palabra.repeticiones++;
        
        if (calidad === 4) {
            palabra.nivel += 1.5;
        } else if (calidad === 3) {
            palabra.nivel += 1;
        }
        
        palabra.nivel = Math.round(palabra.nivel * 10) / 10;
        
        const intervalos = [
            1,      // Nivel 0-1: 1 hora
            6,      // Nivel 1-2: 6 horas
            24,     // Nivel 2-3: 1 día
            72,     // Nivel 3-4: 3 días
            168,    // Nivel 4-5: 7 días
            336,    // Nivel 5-6: 14 días
            720,    // Nivel 6-7: 30 días
            1440,   // Nivel 7-8: 60 días
            2160,   // Nivel 8-9: 90 días
            4320    // Nivel 9+: 180 días
        ];
        
        const nivelIndex = Math.floor(palabra.nivel);
        
        if (nivelIndex < 0) {
            return intervalos[0];
        } else if (nivelIndex >= intervalos.length) {
            return intervalos[intervalos.length - 1];
        } else {
            return intervalos[nivelIndex];
        }
    }
}

// Procesar respuesta en SRS
function procesarRespuestaSRS(palabra, acerto) {
    const calidad = acerto ? 4 : 1;
    
    const intervaloHoras = calcularSiguienteIntervalo(palabra, calidad);
    
    const ahora = new Date();
    palabra.ultimaRevision = ahora.toISOString();
    palabra.siguienteRepeticion = new Date(ahora.getTime() + intervaloHoras * 60 * 60 * 1000).toISOString();
    palabra.intervalo = intervaloHoras;
    
    if (acerto) {
        if (palabra.aciertosConsecutivos >= 10 && palabra.nivel >= 7) {
            if (!palabra.dominada) {
                palabra.dominada = true;
                srsDatabase.estadisticas.totalAprendidas++;
                mostrarNotificacionSRS(`🎉 ¡Dominaste "${palabra.japones}"! (Nivel ${Math.round(palabra.nivel)})`);
            }
        }
    } else {
        palabra.fallos++;
    }
    
    if (acerto) {
        srsDatabase.estadisticas.rachaActual++;
        if (srsDatabase.estadisticas.rachaActual > srsDatabase.estadisticas.mejorRacha) {
            srsDatabase.estadisticas.mejorRacha = srsDatabase.estadisticas.rachaActual;
        }
    } else {
        srsDatabase.estadisticas.rachaActual = 0;
    }
    
    actualizarProximaRepeticionSRS();
    guardarSRS();
    
    console.log(`🔄 SRS: "${palabra.japones}" - Nivel: ${palabra.nivel.toFixed(1)}, Intervalo: ${intervaloHoras}h`);
    
    return intervaloHoras;
}

// Eliminar palabra del SRS
function eliminarPalabraSRS(id) {
    const index = srsDatabase.palabras.findIndex(p => p.id === id);
    if (index !== -1) {
        const palabra = srsDatabase.palabras[index];
        if (palabra.dominada) {
            srsDatabase.estadisticas.totalAprendidas--;
        }
        srsDatabase.palabras.splice(index, 1);
        guardarSRS();
        return true;
    }
    return false;
}

// ====================
// INTERFAZ SRS
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
                            <div><strong>Progresión:</strong></div>
                            <div>1h → 6h → 1d → 3d → 7d → 14d → 30d → 60d → 90d → 180d</div>
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
    
    modoActual = 'srs';
    palabrasActuales = palabrasParaRepasar.slice(0, 20);
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
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
                    Nivel ${palabra.nivel.toFixed(1)} • Aciertos seguidos: ${palabra.aciertosConsecutivos}
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
                        <div style="font-weight: bold;">${palabra.nivel.toFixed(1)}</div>
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
    
    crearOpcionesSRS(palabra);
}

// Crear opciones para palabra SRS
function crearOpcionesSRS(palabra) {
    const opcionesContainer = document.getElementById('opciones-container');
    
    const opcionesFalsas = [];
    
    const otrasPalabras = srsDatabase.palabras
        .filter(p => p.id !== palabra.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
        .map(p => p.significado);
    
    opcionesFalsas.push(...otrasPalabras);
    
    while (opcionesFalsas.length < 3) {
        opcionesFalsas.push(getSignificadoAleatorio());
    }
    
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
    
    const intervaloHoras = procesarRespuestaSRS(palabra, correcta);
    
    if (correcta) {
        aciertos++;
        
        let mensajeIntervalo;
        if (intervaloHoras < 24) {
            mensajeIntervalo = `${Math.round(intervaloHoras)} horas`;
        } else if (intervaloHoras < 168) {
            mensajeIntervalo = `${Math.round(intervaloHoras / 24)} días`;
        } else {
            mensajeIntervalo = `${Math.round(intervaloHoras / 24 / 7)} semanas`;
        }
        
        mostrarNotificacionSRS(`✅ ¡Correcto! Próxima repetición en ${mensajeIntervalo}`);
    } else {
        errores++;
        mostrarNotificacionSRS(`❌ Fallaste. Repetirás en ${Math.round(intervaloHoras * 60)} minutos`);
    }
    
    const controls = document.querySelector('.quiz-controls');
    controls.innerHTML = '';
    
    if (correcta) {
        controls.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #4CAF50;">
                <p>✅ ¡Correcto! Pasando a la siguiente palabra...</p>
            </div>
        `;
        
        esperandoSiguiente = true;
        
        setTimeout(() => {
            pasarSiguientePalabraSRS();
        }, 1500);
    } else {
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

function calidadRespuestaSRS(calidad) {
    const palabra = palabrasActuales[indicePalabraActual];
    
    const intervaloHoras = calcularSiguienteIntervalo(palabra, calidad);
    
    const ahora = new Date();
    palabra.ultimaRevision = ahora.toISOString();
    palabra.siguienteRepeticion = new Date(ahora.getTime() + intervaloHoras * 60 * 60 * 1000).toISOString();
    palabra.intervalo = intervaloHoras;
    
    guardarSRS();
    
    let mensaje = '';
    switch(calidad) {
        case 0: mensaje = '😞 Olvidado completamente'; break;
        case 1: mensaje = '😓 Difícil'; break;
        case 2: mensaje = '😐 Regular'; break;
        case 3: mensaje = '😊 Fácil'; break;
        case 4: mensaje = '😄 Muy fácil'; break;
    }
    
    let mensajeIntervalo;
    if (intervaloHoras < 24) {
        mensajeIntervalo = `${Math.round(intervaloHoras)} horas`;
    } else if (intervaloHoras < 168) {
        mensajeIntervalo = `${Math.round(intervaloHoras / 24)} días`;
    } else {
        mensajeIntervalo = `${Math.round(intervaloHoras / 24 / 7)} semanas`;
    }
    
    mostrarNotificacionSRS(`${mensaje} - Próxima en ${mensajeIntervalo}`);
    
    setTimeout(() => {
        pasarSiguientePalabraSRS();
    }, 1000);
}

function pasarSiguientePalabraSRS() {
    indicePalabraActual++;
    
    if (indicePalabraActual < palabrasActuales.length) {
        esperandoSiguiente = false;
        mostrarPalabraSRS();
    } else {
        finalizarSRS();
    }
}

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
            
            <div style="background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1)); padding: 25px; border-radius: 15px; margin: 20px 0; border: 2px solid #4CAF50;">
                <h3 style="color: #FFD166; margin-bottom: 15px;">💰 Recompensa por práctica intensiva</h3>
                <div style="font-size: 2rem; text-align: center; color: #FFD166;">
                    +${(aciertos * 0.5).toFixed(1)} soles
                </div>
                <p style="text-align: center; opacity: 0.8; margin-top: 10px;">
                    Ganaste ${(aciertos * 0.5).toFixed(1)} soles por repasar palabras difíciles
                </p>
            </div>
            
            <div style="background: rgba(255, 152, 0, 0.1); border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h4 style="color: #FF9800; margin-bottom: 15px;">⏰ Próxima repetición</h4>
                <p style="text-align: center; opacity: 0.8;">
                    Las palabras que acertaste volverán en intervalos más largos.
                    Las que fallaste reaparecerán pronto para reforzar.
                </p>
                <div style="text-align: center; margin-top: 15px; padding: 10px; background: rgba(255, 152, 0, 0.2); border-radius: 8px;">
                    <p style="font-size: 0.9rem; color: #FFD166;">
                        🎯 Progresión: 1h → 6h → 1d → 3d → 7d → 14d → 30d → 60d → 90d → 180d
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
    
    const recompensa = aciertos * 0.5;
    sistemaEconomia.agregarDinero(recompensa);
    actualizarContadorDineroInicio();
}

function cancelarQuizSRS() {
    if (confirm('¿Seguro que quieres cancelar la sesión SRS? El progreso se guardará.')) {
        guardarSRS();
        cargarPaginaSRS();
    }
}

function volverASRS() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('manga-section').style.display = 'block';
    cargarPaginaSRS();
}

function repetirPalabraSRS(id) {
    const palabra = srsDatabase.palabras.find(p => p.id === id);
    if (!palabra) return;
    
    palabrasActuales = [palabra];
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    mostrarPalabraSRS();
}

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
// FUNCIONES PARA NAVEGACIÓN ENTRE MAZOS DIFÍCILES
// ====================

function irAMazoDificil(direccion) {
    if (!modoMazoDificil) {
        console.log("No hay mazo difícil activo");
        return;
    }
    
    const todasPalabrasDificiles = sistemaEconomia.obtenerMazoDificil();
    
    if (todasPalabrasDificiles.length === 0) {
        mostrarNotificacionQuiz("No hay más palabras difíciles disponibles");
        cargarPaginaMisiones();
        return;
    }
    
    const mazosDificiles = [];
    for (let i = 0; i < todasPalabrasDificiles.length; i += 10) {
        mazosDificiles.push(todasPalabrasDificiles.slice(i, i + 10));
    }
    
    let indiceMazoActual = -1;
    for (let i = 0; i < mazosDificiles.length; i++) {
        if (JSON.stringify(mazosDificiles[i]) === JSON.stringify(palabrasDificilesQuiz)) {
            indiceMazoActual = i;
            break;
        }
    }
    
    if (indiceMazoActual === -1) {
        indiceMazoActual = 0;
    }
    
    let nuevoIndiceMazo = indiceMazoActual + (direccion === 'siguiente' ? 1 : -1);
    
    if (nuevoIndiceMazo < 0) {
        nuevoIndiceMazo = mazosDificiles.length - 1;
    } else if (nuevoIndiceMazo >= mazosDificiles.length) {
        nuevoIndiceMazo = 0;
    }
    
    if (mazosDificiles[nuevoIndiceMazo] && mazosDificiles[nuevoIndiceMazo].length > 0) {
        palabrasDificilesQuiz = mazosDificiles[nuevoIndiceMazo];
        indicePalabraActual = 0;
        aciertos = 0;
        errores = 0;
        esperandoSiguiente = false;
        
        mostrarPalabraMazoDificil();
        mostrarNotificacionQuiz(`Cambiando a mazo difícil ${nuevoIndiceMazo + 1}/${mazosDificiles.length}`);
    } else {
        mostrarNotificacionQuiz("No hay más mazos difíciles disponibles");
    }
}

function obtenerInfoMazosDificiles() {
    const todasPalabrasDificiles = sistemaEconomia.obtenerMazoDificil();
    
    if (todasPalabrasDificiles.length === 0) {
        return {
            totalMazos: 0,
            totalPalabras: 0,
            mazos: []
        };
    }
    
    const mazos = [];
    for (let i = 0; i < todasPalabrasDificiles.length; i += 10) {
        const mazo = todasPalabrasDificiles.slice(i, i + 10);
        mazos.push({
            indice: Math.floor(i / 10),
            palabras: mazo.length,
            progreso: 0
        });
    }
    
    return {
        totalMazos: mazos.length,
        totalPalabras: todasPalabrasDificiles.length,
        mazos: mazos
    };
}

// ====================
// FUNCIÓN AUXILIAR PARA CONTAR MAZOS DISPONIBLES
// ====================

function contarMazosDisponibles(contenedor, subcontenedor) {
    return obtenerMazosDisponibles(contenedor, subcontenedor).length;
}

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
            <span>💰</span>
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
// SISTEMA DE MISIONES
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

// ====================
// FUNCIONES PARA MAZOS DIFÍCILES
// ====================

function finalizarMazoDificil() {
    const porcentaje = Math.round((aciertos / palabrasDificilesQuiz.length) * 100);
    
    completarMazoDificil();
    
    const infoMazosDificiles = obtenerInfoMazosDificiles();
    const hayMasMazosDificiles = infoMazosDificiles.totalMazos > 1;
    
    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FF1493;">🎉 MAZO DIFÍCIL COMPLETADO</h2>
            
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem; margin-bottom: 20px; color: #FF1493;">${porcentaje}%</div>
                <p style="font-size: 1.2rem; color: #8A5AF7;">
                    ${aciertos} aciertos • ${errores} errores
                </p>
                <p style="opacity: 0.8; margin-top: 15px;">
                    🎉 ¡Has superado tus palabras difíciles! 
                    ${hayMasMazosDificiles ? 'Hay más mazos difíciles para practicar.' : 'Todas las palabras difíciles han sido superadas.'}
                </p>
            </div>
            
            <div style="background: linear-gradient(135deg, rgba(255, 20, 147, 0.1), rgba(255, 107, 107, 0.1)); padding: 25px; border-radius: 15px; margin: 20px 0; border: 2px solid #FF1493;">
                <h3 style="color: #FFD166; margin-bottom: 15px;">🏆 ¡Recompensa Especial!</h3>
                <p style="text-align: center; font-size: 1.2rem; color: #FFD166;">
                    +10 soles por completar mazo difícil
                </p>
                <p style="text-align: center; opacity: 0.8; margin-top: 10px;">
                    Has demostrado dedicación superando las palabras más difíciles
                </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 15px;">
                    ${hayMasMazosDificiles ? `
                        <button class="quiz-btn" onclick="irAMazoDificil('siguiente')" style="background: linear-gradient(135deg, #FF1493, #8A5AF7);">
                            ⚠️ Siguiente Mazo Difícil
                        </button>
                    ` : ''}
                    <button class="quiz-btn" onclick="cargarPaginaMisiones()" style="background: linear-gradient(135deg, #5864F5, #8A5AF7);">
                        🎯 Volver a Misiones
                    </button>
                </div>
                <p style="opacity: 0.7; font-size: 0.9rem;">
                    ${hayMasMazosDificiles ? 
                        `Tienes ${infoMazosDificiles.totalMazos} mazos difíciles disponibles` : 
                        '¡Felicidades! Has completado todas las palabras difíciles por ahora.'}
                </p>
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="volverAMazos()" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                    ↩️ Volver a Mazos Normales
                </button>
            </div>
        </div>
    `;
    
    sistemaEconomia.agregarDinero(10);
    actualizarContadorDineroInicio();
}

function iniciarProximoMazoDificil() {
    const infoMazosDificiles = obtenerInfoMazosDificiles();
    
    if (infoMazosDificiles.totalMazos === 0) {
        mostrarNotificacionQuiz('✅ No hay más palabras difíciles disponibles por ahora');
        cargarPaginaMisiones();
        return;
    }
    
    let indiceSiguienteMazo = 0;
    
    if (palabrasDificilesQuiz && palabrasDificilesQuiz.length > 0) {
        const todasPalabras = sistemaEconomia.obtenerMazoDificil();
        const mazos = [];
        for (let i = 0; i < todasPalabras.length; i += 10) {
            mazos.push(todasPalabras.slice(i, i + 10));
        }
        
        for (let i = 0; i < mazos.length; i++) {
            if (JSON.stringify(mazos[i]) === JSON.stringify(palabrasDificilesQuiz)) {
                indiceSiguienteMazo = (i + 1) % mazos.length;
                break;
            }
        }
    }
    
    iniciarMazoDificilDesdeUI();
}

function iniciarMazoDificilDesdeUI() {
    const palabras = iniciarMazoDificil();
    
    if (palabras && palabras.length > 0) {
        const palabrasParaMazo = palabras.slice(0, Math.min(10, palabras.length));
        
        modoMazoDificil = true;
        palabrasDificilesQuiz = palabrasParaMazo;
        
        indicePalabraActual = 0;
        aciertos = 0;
        errores = 0;
        esperandoSiguiente = false;
        
        document.getElementById('manga-section').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
        
        mostrarPalabraMazoDificil();
        
        mostrarNotificacionQuiz(`⚠️ Iniciando mazo difícil (${palabrasParaMazo.length} palabras)`);
    } else {
        mostrarNotificacionQuiz('📝 No hay palabras difíciles para practicar');
    }
}

// ====================
// ===== NUEVA FUNCIÓN: VERIFICAR EVENTO DIARIO AL COMPLETAR MAZO =====
// ====================

function verificarEventoDiarioAlCompletarMazo(porcentaje) {
    // Solo verificar cuando es 100% para eventos que requieren mazos completados
    if (porcentaje !== 100) return;
    
    // Verificar si existe el sistema de eventos
    if (typeof EventosDiarios === 'undefined') {
        console.log('📅 Sistema de eventos no disponible');
        return;
    }
    
    // Obtener evento de hoy
    const evento = EventosDiarios.obtenerEventoHoy();
    if (!evento) {
        console.log('📅 No hay evento activo hoy');
        return;
    }
    
    // Verificar si ya fue procesado o resultado mostrado
    if (EventosDiarios.eventoYaProcesado()) {
        console.log('📅 Evento ya fue procesado');
        return;
    }
    
    if (EventosDiarios.resultadoYaMostrado()) {
        console.log('📅 Resultado ya fue mostrado');
        return;
    }
    
    console.log('📅 Verificando evento diario al completar mazo 100%...');
    console.log('🎯 Evento actual:', evento.titulo);
    console.log('🎯 Requisito: Completar', evento.cantidadRequerida, 'mazo(s) al 100%');
    
    // Verificar si se cumplió el requisito
    const exito = EventosDiarios.verificarRequisito(evento);
    console.log('✅ ¿Requisito cumplido?', exito);
    
    if (exito) {
        console.log('✅ Requisito de evento cumplido al completar mazo 100%');
        
        // Aplicar consecuencias del evento
        const aplicadas = EventosDiarios.aplicarConsecuencias(evento, true);
        
        if (aplicadas) {
            EventosDiarios.marcarEventoProcesado();
            
            // Mostrar resultado después de un pequeño delay
            setTimeout(() => {
                EventosDiarios.mostrarResultadoEvento(evento, true);
                EventosDiarios.marcarResultadoMostrado();
                EventosDiarios.actualizarBarraProgreso();
            }, 1500);
        }
    } else {
        console.log('❌ Requisito aún no cumplido. Progreso actual:', 
                    sistemaEconomia.obtenerEstadisticas().completados100, 
                    'de', evento.cantidadRequerida);
    }
}

// ====================
// NAVEGACIÓN PRINCIPAL - TODOS LOS MODOS (AHORA DINÁMICA)
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

function cargarPaginaFantasiaRPG() {
    modoActual = 'fantasia';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    
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
    
    // Obtener contenedores disponibles dinámicamente
    const contenedores = obtenerContenedoresDisponibles('mangas');
    
    if (contenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay contenedores configurados</div>';
    } else {
        contenedores.forEach(numero => {
            const contenedorData = obtenerContenedorManga(numero);
            const nombre = contenedorData.nombre || `CONTAINER ${numero}`;
            const desc = contenedorData.descripcion || 'Sub-contenedores con vocabulario y manga';
            
            html += `
                <div class="contenedor-item" onclick="cargarSubcontenedores(${numero})">
                    <div class="contenedor-img" style="background-image: url('${contenedorData.imagen || obtenerImagenContenedor(numero)}')"></div>
                    <div class="contenedor-numero">${nombre}</div>
                    <p>${desc}</p>
                    <div class="card-button">Abrir</div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    return html;
}

function crearContenedoresVideos() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎬 CONTENEDORES DE VIDEOS</h2>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresDisponibles('videos');
    
    if (contenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay contenedores configurados</div>';
    } else {
        contenedores.forEach(numero => {
            const contenedorData = obtenerContenedorVideo(numero);
            const nombre = contenedorData.nombre || `VIDEO CONTAINER ${numero}`;
            const desc = contenedorData.descripcion || 'Videos privados con timestamps';
            
            html += `
                <div class="contenedor-item" onclick="cargarSubcontenedoresVideos(${numero})">
                    <div class="contenedor-img" style="background-image: url('${contenedorData.imagen || obtenerImagenContenedor(numero)}')"></div>
                    <div class="contenedor-numero">${nombre}</div>
                    <p>${desc}</p>
                    <div class="card-button">Ver videos</div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    return html;
}

function crearContenedoresAnimes() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎌 CONTENEDORES DE ANIMES</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Animes con videos en español/japonés + vocabulario</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresDisponibles('animes');
    
    if (contenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay contenedores configurados</div>';
    } else {
        contenedores.forEach(numero => {
            const contenedorData = obtenerContenedorAnime(numero);
            const tieneAnimes = obtenerSubcontenedoresDisponibles('animes', numero).length > 0;
            const desc = contenedorData.descripcion || (tieneAnimes ? 'Sub-contenedores con animes' : 'Sub-contenedores disponibles');
            
            html += `
                <div class="contenedor-item" onclick="cargarSubcontenedoresAnimes(${numero})">
                    <div class="contenedor-img" style="background-image: url('${contenedorData.imagen || obtenerImagenContenedorAnime(numero)}')"></div>
                    <div class="contenedor-numero">${contenedorData.nombre || `ANIME CONTAINER ${numero}`}</div>
                    <p>${desc}</p>
                    <div class="card-button">${tieneAnimes ? 'Ver animes' : 'Explorar'}</div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    return html;
}

function crearContenedoresAudios() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎵 CONTENEDORES DE AUDIOS</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Openings MP3 + vocabulario de letras</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresDisponibles('audios');
    
    if (contenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay contenedores configurados</div>';
    } else {
        contenedores.forEach(numero => {
            const tieneAudios = obtenerSubcontenedoresDisponibles('audios', numero).length > 0;
            const desc = tieneAudios ? 'Sub-contenedores con openings' : 'Sub-contenedores disponibles';
            
            let imagenContenedor = obtenerImagenContenedorAudio(numero);
            
            html += `
                <div class="contenedor-item" onclick="cargarSubcontenedoresAudios(${numero})">
                    <div class="contenedor-img" style="background-image: url('${imagenContenedor}')"></div>
                    <div class="contenedor-numero">${obtenerContenedorAudio(numero).nombre || `AUDIO CONTAINER ${numero}`}</div>
                    <p>${desc}</p>
                    <div class="card-button" style="background: linear-gradient(135deg, #FF6B6B, #FFD166);">
                        ${tieneAudios ? '🎵 Escuchar audios' : 'Explorar'}
                    </div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    return html;
}

function crearContenedoresASMR() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🎧 CONTENEDORES DE ASMR</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Audios relajantes para estudio y meditación</p>';
    html += '<div class="manga-contenedores">';
    
    const contenedores = obtenerContenedoresDisponibles('asmr');
    
    if (contenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay contenedores configurados</div>';
    } else {
        contenedores.forEach(numero => {
            const contenedorData = obtenerContenedorASMR(numero);
            const tieneAudios = obtenerSubcontenedoresDisponibles('asmr', numero).length > 0;
            const desc = contenedorData.descripcion || (tieneAudios ? 'Sub-contenedores con audios' : 'Sub-contenedores disponibles');
            
            html += `
                <div class="contenedor-item" onclick="cargarSubcontenedoresASMR(${numero})">
                    <div class="contenedor-img" style="background-image: url('${contenedorData.imagen}')"></div>
                    <div class="contenedor-numero">${contenedorData.nombre || `ASMR CONTAINER ${numero}`}</div>
                    <p>${desc}</p>
                    <div class="card-button" style="background: linear-gradient(135deg, #9C27B0, #673AB7);">
                        ${tieneAudios ? '🎧 Escuchar ASMR' : 'Explorar'}
                    </div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    return html;
}

// ====================
// FUNCIONES PARA SUBCONTENEDORES (AHORA DINÁMICAS)
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
    
    const subcontenedores = obtenerSubcontenedoresDisponibles('mangas', contenedor);
    
    if (subcontenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay subcontenedores configurados</div>';
    } else {
        subcontenedores.forEach(i => {
            const subData = obtenerSubcontenedorManga(contenedor, i);
            const nombre = subData.nombre || `Sub-contenedor ${i}`;
            const desc = subData.descripcion || 'Mazos de vocabulario';
            const tieneContenido = tieneVocabularioEnSubcontenedor(contenedor, i);
            const tieneManga = existeManga(contenedor, i);
            
            html += `
                <div class="subcontenedor-item">
                    <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                    <h3>${nombre}</h3>
                    <p>${desc}</p>
                    ${tieneContenido ? '' : '<p style="color: #FF6B6B; font-size: 0.9rem;">(Sin vocabulario)</p>'}
                    
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
        });
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
        🎬 ${obtenerContenedorVideo(contenedor).nombre || `CONTENEDOR ${contenedor}`} - SUB-CONTENEDORES DE VIDEOS
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const subcontenedores = obtenerSubcontenedoresDisponibles('videos', contenedor);
    
    if (subcontenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay subcontenedores configurados</div>';
    } else {
        subcontenedores.forEach(i => {
            const subData = obtenerSubcontenedorVideo(contenedor, i);
            const videoInfo = obtenerVideo(contenedor, i);
            const tieneVideo = videoInfo !== null && videoInfo.driveId && videoInfo.driveId !== "";
            
            const titulo = subData.nombre || (videoInfo ? videoInfo.titulo : `Video ${i}`);
            const descripcion = subData.descripcion || (videoInfo ? videoInfo.descripcion : 'Sin video disponible');
            
            html += `
                <div class="subcontenedor-item" onclick="${tieneVideo ? `cargarVideo(${contenedor}, ${i})` : 'mostrarNotificacionASMR(\'❌ Este sub-contenedor no tiene video disponible\')'}">
                    <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                    <h3>${titulo}</h3>
                    
                    ${tieneVideo ? 
                        `<p style="font-size: 0.9rem; opacity: 0.8;">${videoInfo.duracion} • ${videoInfo.categoria}</p>
                         <p style="font-size: 0.9rem; min-height: 40px;">${descripcion.substring(0, 60)}${descripcion.length > 60 ? '...' : ''}</p>` 
                        : `<p style="color: #FF6B6B; min-height: 40px;">${descripcion}</p>`}
                    
                    <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; ${!tieneVideo ? 'opacity: 0.5;' : ''}">
                        ${tieneVideo ? '▶️ Ver video' : '📭 Sin video'}
                    </div>
                </div>
            `;
        });
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
    
    const mazos = obtenerMazosDisponibles(contenedor, subcontenedor);
    
    if (mazos.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay mazos de vocabulario configurados</div>';
    } else {
        html += '<div class="mazos-container">';
        
        mazos.forEach(mazoNumero => {
            const tieneVocabulario = verificarVocabularioDisponible(contenedor, subcontenedor, mazoNumero);
            const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, mazoNumero);
            
            html += `
                <div class="mazo-item" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${mazoNumero})` : 'alert("Este mazo no tiene vocabulario")'}">
                    <h3>MAZO ${mazoNumero}</h3>
                    <p>${tieneVocabulario ? '10 palabras japonesas' : 'Sin vocabulario'}</p>
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
        });
        
        html += '</div>';
    }
    
    return html;
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
    const contenedorData = obtenerContenedorAnime(contenedor);
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🎌 ${contenedorData.nombre || `CONTENEDOR ${contenedor}`} - SUB-CONTENEDORES DE ANIMES
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const subcontenedores = obtenerSubcontenedoresDisponibles('animes', contenedor);
    
    if (subcontenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay subcontenedores configurados</div>';
    } else {
        subcontenedores.forEach(i => {
            const subData = obtenerSubcontenedorAnime(contenedor, i);
            const animeInfo = obtenerAnime(contenedor, i);
            const tieneAnime = animeInfo !== null && animeInfo.driveIdEspanol && animeInfo.driveIdEspanol !== "";
            
            const titulo = subData.nombre || (animeInfo ? animeInfo.titulo : `Anime ${i}`);
            const desc = subData.descripcion || (animeInfo ? animeInfo.descripcion : 'Sin anime configurado');
            
            html += `
                <div class="subcontenedor-item" onclick="${tieneAnime ? `seleccionarAccionAnime(${contenedor}, ${i})` : `cargarMazosAnimes(${contenedor}, ${i})`}">
                    <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedorAnime(contenedor, i)}')"></div>
                    <h3>${titulo}</h3>
                    
                    ${tieneAnime ? 
                        `<p style="font-size: 0.9rem; opacity: 0.8;">${animeInfo.duracion} • ${animeInfo.categoria}</p>
                         <p style="font-size: 0.9rem; min-height: 40px;">${desc.substring(0, 60)}${desc.length > 60 ? '...' : ''}</p>` 
                        : `<p style="color: #FF6B6B; min-height: 40px;">${desc}</p>`}
                    
                    <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; ${!tieneAnime ? 'opacity: 0.5;' : ''}">
                        ${tieneAnime ? '🎬 Ver opciones' : '📚 Solo vocabulario'}
                    </div>
                </div>
            `;
        });
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
    const subData = obtenerSubcontenedorAnime(contenedor, subcontenedor);
    const tituloAnime = animeInfo ? animeInfo.titulo : (subData.nombre || `Sub-contenedor ${subcontenedor}`);
    
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        📚 ${tituloAnime.toUpperCase()} - MAZOS DE VOCABULARIO
    </h2>`;
    
    if (animeInfo) {
        html += `<p style="text-align: center; margin-bottom: 30px; opacity: 0.8; max-width: 800px; margin-left: auto; margin-right: auto;">
            Practica vocabulario relacionado con este anime. Gana dinero por cada mazo completado.
        </p>`;
    }
    
    const mazos = obtenerMazosDisponibles(contenedor, subcontenedor);
    
    if (mazos.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay mazos de vocabulario configurados</div>';
    } else {
        html += '<div class="mazos-container">';
        
        mazos.forEach(mazoNumero => {
            const tieneVocabulario = existeVocabularioAnime(contenedor, subcontenedor, mazoNumero);
            const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, mazoNumero);
            
            html += `
                <div class="mazo-item" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${mazoNumero})` : 'alert("Este mazo aún no tiene vocabulario. Agrégalo en 1_animes_vocabulario.js")'}">
                    <h3>MAZO ${mazoNumero}</h3>
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
        });
        
        html += '</div>';
    }
    
    return html;
}

// ====================
// FUNCIONES PARA AUDIOS (VERSIÓN DINÁMICA)
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
        🎵 ${obtenerContenedorAudio(contenedor).nombre || `CONTENEDOR ${contenedor}`} - SUB-CONTENEDORES DE OPENINGS
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const subcontenedores = obtenerSubcontenedoresDisponibles('audios', contenedor);
    
    if (subcontenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay subcontenedores configurados</div>';
    } else {
        subcontenedores.forEach(i => {
            let imagenSubcontenedor = obtenerImagenSubcontenedorAudio(contenedor, i);
            const audioInfo = obtenerAudio(contenedor, i);
            const tieneAudio = audioInfo !== null && audioInfo.driveId && audioInfo.driveId !== "";
            
            const titulo = audioInfo ? audioInfo.titulo : `Audio ${i}`;
            const descripcion = audioInfo ? audioInfo.descripcion : 'Sin audio configurado';
            
            html += `
                <div class="subcontenedor-item" onclick="${tieneAudio ? `seleccionarAccionAudio(${contenedor}, ${i})` : `cargarMazosAudios(${contenedor}, ${i})`}">
                    <div class="subcontenedor-img" style="background-image: url('${imagenSubcontenedor}')"></div>
                    <h3>${titulo}</h3>
                    
                    ${tieneAudio ? 
                        `<p style="font-size: 0.9rem; opacity: 0.8;">${audioInfo.artista || 'Artista desconocido'} • ${audioInfo.duracion || '0:00'}</p>
                         <p style="font-size: 0.9rem; min-height: 40px;">${descripcion.substring(0, 60)}${descripcion.length > 60 ? '...' : ''}</p>` 
                        : `<p style="color: #FF6B6B; min-height: 40px;">${descripcion}</p>`}
                    
                    <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #FF6B6B, #FFD166); ${!tieneAudio ? 'opacity: 0.5;' : ''}">
                        ${tieneAudio ? '🎵 Ver opciones' : '📚 Solo vocabulario'}
                    </div>
                </div>
            `;
        });
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
    
    const mazos = obtenerMazosDisponibles(contenedor, subcontenedor);
    
    if (mazos.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay mazos de vocabulario configurados</div>';
    } else {
        html += '<div class="mazos-container">';
        
        mazos.forEach(mazoNumero => {
            const tieneVocabulario = existeVocabularioAudio(contenedor, subcontenedor, mazoNumero);
            const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, mazoNumero);
            
            html += `
                <div class="mazo-item" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${mazoNumero})` : 'alert("Este mazo aún no tiene vocabulario. Agrégalo en 1_audios_vocabulario.js")'}" style="border-color: rgba(255, 107, 107, 0.6);">
                    <h3>MAZO ${mazoNumero}</h3>
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
        });
        
        html += '</div>';
    }
    
    return html;
}

// ====================
// FUNCIONES PARA ASMR (VERSIÓN CORREGIDA)
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
        🎧 ${obtenerContenedorASMR(contenedor).nombre || `CONTENEDOR ${contenedor}`} - SUB-CONTENEDORES DE ASMR
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const subcontenedores = obtenerSubcontenedoresDisponibles('asmr', contenedor);
    
    if (subcontenedores.length === 0) {
        html += '<div style="text-align: center; padding: 50px; opacity: 0.7;">No hay subcontenedores configurados</div>';
    } else {
        subcontenedores.forEach(i => {
            const subData = obtenerSubcontenedorASMR(contenedor, i);
            const asmrInfo = obtenerASMR(contenedor, i);
            const tieneASMR = asmrInfo !== null && asmrInfo.driveId && asmrInfo.driveId !== "";
            
            const titulo = subData.nombre || (asmrInfo ? asmrInfo.titulo : `ASMR ${i}`);
            const descripcion = subData.descripcion || (asmrInfo ? asmrInfo.descripcion : 'Sin audio ASMR configurado');
            
            html += `
                <div class="subcontenedor-item" onclick="${tieneASMR ? `seleccionarAccionASMR(${contenedor}, ${i})` : 'mostrarNotificacionASMR(\'❌ Este sub-contenedor no tiene audio ASMR disponible\')'}">
                    <div class="subcontenedor-img" style="background-image: url('${subData.imagen || obtenerImagenSubcontenedorASMR(contenedor, i)}')"></div>
                    <h3>${titulo}</h3>
                    
                    ${tieneASMR ? 
                        `<p style="font-size: 0.9rem; opacity: 0.8;">${asmrInfo.duracion} • ${asmrInfo.categoria}</p>
                         <p style="font-size: 0.9rem; min-height: 40px;">${descripcion.substring(0, 60)}${descripcion.length > 60 ? '...' : ''}</p>
                         <p style="font-size: 0.8rem; opacity: 0.7;">🎤 ${asmrInfo.tipoVoz}</p>` 
                        : `<p style="color: #FF6B6B; min-height: 40px;">${descripcion}</p>`}
                    
                    <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #9C27B0, #673AB7); ${!tieneASMR ? 'opacity: 0.5;' : ''}">
                        ${tieneASMR ? '🎧 Escuchar ASMR' : '📭 Sin audio'}
                    </div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    
    const estadisticas = obtenerEstadisticasASMR();
    html += `
        <div style="background: rgba(156, 39, 176, 0.1); border-radius: 15px; padding: 20px; margin: 30px 0; border-left: 5px solid #9C27B0;">
            <h4 style="color: #FFD166; margin-bottom: 15px;">📊 Estadísticas ASMR</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                <div style="text-align: center;">
                    <div style="color: #9C27B0; font-size: 0.9rem;">🎧 Audios</div>
                    <div style="font-weight: bold; font-size: 1.2rem;">${subcontenedores.length}</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: #9C27B0; font-size: 0.9rem;">⏱️ Duración Total</div>
                    <div style="font-weight: bold; font-size: 1.2rem;">${calcularDuracionTotalASMRContenedor(contenedor)}</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: #9C27B0; font-size: 0.9rem;">📈 Disponibles</div>
                    <div style="font-weight: bold; font-size: 1.2rem;">${Object.keys(asmrDatabase).filter(key => asmrDatabase[key] && asmrDatabase[key].driveId !== "").length}</div>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

function calcularDuracionTotalASMRContenedor(contenedor) {
    let totalSegundos = 0;
    const subcontenedores = obtenerSubcontenedoresDisponibles('asmr', contenedor);
    
    subcontenedores.forEach(sub => {
        const asmrInfo = obtenerASMR(contenedor, sub);
        if (asmrInfo && asmrInfo.duracion && asmrInfo.duracion !== "0:00") {
            const partes = asmrInfo.duracion.split(':').map(Number);
            if (partes.length === 2) {
                const [minutos, segundos] = partes;
                totalSegundos += minutos * 60 + segundos;
            }
        }
    });
    
    const minutos = Math.floor(totalSegundos / 60);
    const segundosRestantes = totalSegundos % 60;
    return `${minutos}:${segundosRestantes.toString().padStart(2, '0')}`;
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
                        <div style="font-weight: bold;">${asmrInfo.tags ? asmrInfo.tags.join(', ') : 'Sin etiquetas'}</div>
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
                        <div style="font-weight: bold;">${asmrInfo.tags ? asmrInfo.tags.join(', ') : 'Sin etiquetas'}</div>
                    </div>
                </div>
            </div>
            
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
// SISTEMA DE QUIZ
// ====================

function iniciarQuiz(contenedor, subcontenedor, mazo) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    mazoActual = mazo;
    modoMazoDificil = false;
    
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

function iniciarQuizDificil(contenedor, subcontenedor, mazoId) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    mazoActual = mazoId;
    
    palabrasActuales = obtenerVocabulario(contenedor, subcontenedor, mazoId);
    
    if (palabrasActuales.length === 0) {
        alert('No hay palabras en este mazo difícil');
        return;
    }
    
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    
    modoMazoDificil = true;
    
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
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
    
    crearOpcionesQuiz(palabra);
}

function mostrarPalabraMazoDificil() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = palabrasDificilesQuiz[indicePalabraActual];
    
    const infoMazos = obtenerInfoMazosDificiles();
    const mazoActualNumero = 1;
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FF1493; margin-bottom: 20px;">
                ⚠️ MAZO DIFÍCIL • Mazo ${mazoActualNumero}/${infoMazos.totalMazos} • Palabra ${indicePalabraActual + 1}/${palabrasDificilesQuiz.length}
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
            
            ${infoMazos.totalMazos > 1 ? `
                <div style="text-align: center; margin: 20px 0; padding: 15px; background: rgba(255, 20, 147, 0.1); border-radius: 10px;">
                    <h4 style="color: #FFD166; margin-bottom: 10px;">🔀 Navegar entre mazos difíciles</h4>
                    <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
                        <button class="quiz-btn" onclick="irAMazoDificil('anterior')" style="background: rgba(255, 20, 147, 0.3); padding: 8px 15px; font-size: 0.9rem;">
                            ⬅️ Mazo Anterior
                        </button>
                        <button class="quiz-btn" onclick="irAMazoDificil('siguiente')" style="background: rgba(255, 20, 147, 0.3); padding: 8px 15px; font-size: 0.9rem;">
                            Mazo Siguiente ➡️
                        </button>
                    </div>
                    <p style="font-size: 0.8rem; opacity: 0.7; margin-top: 10px;">
                        ${infoMazos.totalMazos} mazos difíciles disponibles
                    </p>
                </div>
            ` : ''}
            
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
        
        setTimeout(() => {
            pasarSiguientePalabra();
        }, 1500);
    } else {
        errores++;
        
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

function irAMazo(direccion) {
    let nuevoMazo = parseInt(mazoActual) + (direccion === 'siguiente' ? 1 : -1);
    
    const mazos = obtenerMazosDisponibles(contenedorActual, subcontenedorActual);
    
    if (mazos.length === 0) return;
    
    const maxMazos = Math.max(...mazos);
    const minMazos = Math.min(...mazos);
    
    if (nuevoMazo < minMazos) {
        nuevoMazo = maxMazos;
    } else if (nuevoMazo > maxMazos) {
        nuevoMazo = minMazos;
    }
    
    if (!mazos.includes(nuevoMazo)) {
        let mazoEncontrado = false;
        let intentos = 0;
        let mazoActualBusqueda = nuevoMazo;
        
        while (!mazoEncontrado && intentos < 50) {
            mazoActualBusqueda += (direccion === 'siguiente' ? 1 : -1);
            
            if (mazoActualBusqueda < minMazos) mazoActualBusqueda = maxMazos;
            if (mazoActualBusqueda > maxMazos) mazoActualBusqueda = minMazos;
            
            if (mazos.includes(mazoActualBusqueda)) {
                mazoEncontrado = true;
                nuevoMazo = mazoActualBusqueda;
            }
            
            intentos++;
        }
        
        if (!mazoEncontrado) {
            alert("No hay más mazos disponibles con vocabulario en este subcontenedor.");
            return;
        }
    }
    
    iniciarQuiz(contenedorActual, subcontenedorActual, nuevoMazo);
}

// ====================
// FUNCIÓN FINALIZAR QUIZ - MODIFICADA PARA VERIFICAR EVENTO DIARIO
// ====================

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
    
    // ===== VERIFICAR EVENTO DIARIO =====
    verificarEventoDiarioAlCompletarMazo(porcentaje);
    // ===================================
    
    const dineroAhora = sistemaEconomia.obtenerDinero();
    const recompensa = dineroAhora - dineroAntes;
    
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
                    sistemaEconomia.agregarDinero(5);
                    actualizarContadorDineroInicio();
                </script>
            ` : ''}
            
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
            
            ${sistemaEconomia.obtenerMazoDificil().length > 0 ? `
                <div style="text-align: center; margin: 20px 0;">
                    <button class="boton-mazo-dificil" onclick="iniciarMazoDificilDesdeUI()">
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
    
    window.funcionVolver = funcionVolver;
    
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
    const mazos = obtenerMazosDisponibles(contenedor, subcontenedor);
    
    mazos.forEach(mazo => {
        totalProgreso += sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, mazo);
    });
    
    return mazos.length > 0 ? Math.round(totalProgreso / mazos.length) : 0;
}

function tieneVocabularioEnSubcontenedor(contenedor, subcontenedor) {
    const mazos = obtenerMazosDisponibles(contenedor, subcontenedor);
    return mazos.length > 0;
}

function verificarVocabularioDisponible(contenedor, subcontenedor, mazo) {
    const vocabulario = obtenerVocabulario(contenedor, subcontenedor, mazo);
    return vocabulario && vocabulario.length > 0;
}

function obtenerImagenSubcontenedorAudio(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    const subData = sistemaDescriptivo.audios.subcontenedores[key];
    
    if (subData && subData.imagen) {
        return subData.imagen;
    }
    
    const contenedorData = obtenerContenedorAudio(contenedor);
    return contenedorData.imagen || 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop';
}

function obtenerImagenContenedorAudio(numero) {
    const audioData = obtenerContenedorAudio(numero);
    return audioData.imagen || 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop';
}

function obtenerImagenSubcontenedorASMR(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    const subData = sistemaDescriptivo.asmr.subcontenedores[key];
    
    if (subData && subData.imagen) {
        return subData.imagen;
    }
    
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
    
    inicializarSRS();
    
    console.log('🖼️ Funciones de imágenes cargadas');
    console.log('🔄 Funciones dinámicas cargadas');
    
    if (typeof quintillizasRPG !== 'undefined') {
        quintillizasRPG.inicializar();
        console.log('🎮 RPG Quintillizas inicializado');
    }
    
    if (typeof fantasiaRPG !== 'undefined') {
        console.log('⚔️ RPG Fantasía inicializado');
    }
    
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('✅ Sistema completo cargado correctamente (VERSIÓN COMPLETAMENTE DINÁMICA)');
    console.log('📊 Modos disponibles:');
    console.log('   - Mangas: ' + obtenerContenedoresDisponibles('mangas').length + ' contenedores');
    console.log('   - Videos: ' + obtenerContenedoresDisponibles('videos').length + ' contenedores');
    console.log('   - Animes: ' + obtenerContenedoresDisponibles('animes').length + ' contenedores');
    console.log('   - Audios: ' + obtenerContenedoresDisponibles('audios').length + ' contenedores');
    console.log('   - ASMR: ' + obtenerContenedoresDisponibles('asmr').length + ' contenedores');
    console.log('');
    console.log('🔄 Sistema dinámico activado:');
    console.log('   - Detecta automáticamente TODOS los contenedores configurados');
    console.log('   - Detecta automáticamente TODOS los subcontenedores configurados');
    console.log('   - Detecta automáticamente TODOS los mazos con vocabulario');
    console.log('   - No hay límites fijos (puedes tener contenedores 1, 2, 3, 11, 12, 20, etc.)');
    
    setTimeout(() => {
        const pendientes = verificarRepeticionesPendientes();
        if (pendientes > 0) {
            mostrarNotificacionQuiz(`🔄 Tienes ${pendientes} palabras pendientes en el SRS`);
        }
    }, 2000);
    
    setTimeout(() => {
        console.log('📊 Configuración dinámica detectada:');
        console.log('   - Mangas contenedor 1: ' + obtenerSubcontenedoresDisponibles('mangas', 1).length + ' subcontenedores');
        console.log('   - Videos contenedor 1: ' + obtenerSubcontenedoresDisponibles('videos', 1).length + ' subcontenedores');
        console.log('   - Animes contenedor 1: ' + obtenerSubcontenedoresDisponibles('animes', 1).length + ' subcontenedores');
        console.log('   - Audios contenedor 1: ' + obtenerSubcontenedoresDisponibles('audios', 1).length + ' subcontenedores');
        console.log('   - ASMR contenedor 1: ' + obtenerSubcontenedoresDisponibles('asmr', 1).length + ' subcontenedores');
    }, 3000);
    
    // Verificar eventos al iniciar
    setTimeout(() => {
        if (typeof EventosDiarios !== 'undefined') {
            console.log('📅 Sistema de eventos diarios detectado');
        }
    }, 1000);
});
