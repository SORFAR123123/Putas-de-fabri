// ================================================
// SISTEMA PRINCIPAL CON TODAS LAS MEJORAS
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
// 1. SISTEMA DE PALABRAS DIFÍCILES
// ====================

let palabrasDificiles = JSON.parse(localStorage.getItem('palabras_dificiles')) || [];
let mazoDificilActivo = [];
let mazoDificilOriginalInfo = null;

function agregarPalabraDificil(palabraInfo) {
    const palabraKey = `${palabraInfo.japones}-${palabraInfo.significado}`;
    
    // Verificar si ya existe
    if (!palabrasDificiles.some(p => p.key === palabraKey)) {
        palabrasDificiles.push({
            ...palabraInfo,
            key: palabraKey,
            fechaAgregada: new Date().toISOString(),
            vecesFallada: 0,
            vecesPracticada: 0,
            contexto: {
                contenedor: contenedorActual,
                subcontenedor: subcontenedorActual,
                mazo: mazoActual,
                modo: modoActual
            }
        });
        
        localStorage.setItem('palabras_dificiles', JSON.stringify(palabrasDificiles));
        mostrarNotificacion(`⭐ "${palabraInfo.japones}" añadida a palabras difíciles`);
        return true;
    }
    return false;
}

function removerPalabraDificil(palabraKey) {
    palabrasDificiles = palabrasDificiles.filter(p => p.key !== palabraKey);
    localStorage.setItem('palabras_dificiles', JSON.stringify(palabrasDificiles));
}

function crearMazoDificil() {
    mazoDificilActivo = [...palabrasDificiles];
    mazoDificilOriginalInfo = {
        contenedor: contenedorActual,
        subcontenedor: subcontenedorActual,
        mazo: mazoActual,
        modo: modoActual
    };
    
    if (mazoDificilActivo.length > 0) {
        // Mezclar palabras
        mazoDificilActivo = mazoDificilActivo.sort(() => Math.random() - 0.5);
        return mazoDificilActivo;
    }
    return [];
}

function limpiarMazoDificilCompletado() {
    palabrasDificiles = [];
    localStorage.setItem('palabras_dificiles', JSON.stringify(palabrasDificiles));
    mazoDificilActivo = [];
    mazoDificilOriginalInfo = null;
}

// ====================
// 2. SISTEMA DE MISIONES
// ====================

class SistemaMisiones {
    constructor() {
        this.misiones = this.cargarMisiones() || this.inicializarMisiones();
        this.comprobarResetAutomatico();
    }

    inicializarMisiones() {
        return {
            diarias: {
                completadas: 0,
                fechaUltimoReset: this.obtenerFechaHoy(),
                reclamadas: []
            },
            semanales: {
                completadas: 0,
                fechaUltimoReset: this.obtenerInicioSemana(),
                reclamadas: []
            },
            registro: []
        };
    }

    obtenerFechaHoy() {
        const hoy = new Date();
        return hoy.toISOString().split('T')[0];
    }

    obtenerInicioSemana() {
        const hoy = new Date();
        const dia = hoy.getDay();
        const diff = hoy.getDate() - dia + (dia === 0 ? -6 : 1);
        const inicioSemana = new Date(hoy.setDate(diff));
        return inicioSemana.toISOString().split('T')[0];
    }

    comprobarResetAutomatico() {
        const hoy = this.obtenerFechaHoy();
        const inicioSemana = this.obtenerInicioSemana();
        
        // Reset diario a las 3 AM
        if (this.misiones.diarias.fechaUltimoReset !== hoy) {
            this.misiones.diarias.completadas = 0;
            this.misiones.diarias.fechaUltimoReset = hoy;
            this.misiones.diarias.reclamadas = [];
            console.log('🔄 Misiones diarias reseteadas');
        }
        
        // Reset semanal los lunes
        if (this.misiones.semanales.fechaUltimoReset !== inicioSemana) {
            this.misiones.semanales.completadas = 0;
            this.misiones.semanales.fechaUltimoReset = inicioSemana;
            this.misiones.semanales.reclamadas = [];
            console.log('🔄 Misiones semanales reseteadas');
        }
        
        this.guardarMisiones();
    }

    registrarMazoCompletado(porcentaje) {
        if (porcentaje === 100) {
            this.misiones.diarias.completadas += 1;
            this.misiones.semanales.completadas += 1;
            
            this.misiones.registro.push({
                fecha: new Date().toISOString(),
                porcentaje: porcentaje,
                contenedor: contenedorActual,
                subcontenedor: subcontenedorActual,
                mazo: mazoActual
            });
            
            this.guardarMisiones();
            console.log(`🎯 Mazo 100% registrado en misiones`);
        }
    }

    obtenerRecompensasDisponibles() {
        const recompensas = {
            diarias: [],
            semanales: []
        };

        // Diarias
        const metasDiarias = [1, 3, 5, 10];
        metasDiarias.forEach((meta, index) => {
            if (this.misiones.diarias.completadas >= meta && 
                !this.misiones.diarias.reclamadas.includes(meta)) {
                recompensas.diarias.push({
                    meta: meta,
                    recompensa: index === 0 ? 0.50 : (index === 1 ? 1.00 : (index === 2 ? 2.00 : 5.00)),
                    completado: true
                });
            }
        });

        // Semanales
        const metasSemanales = [5, 10, 20, 30];
        metasSemanales.forEach((meta, index) => {
            if (this.misiones.semanales.completadas >= meta && 
                !this.misiones.semanales.reclamadas.includes(meta)) {
                recompensas.semanales.push({
                    meta: meta,
                    recompensa: index === 0 ? 2.00 : (index === 1 ? 5.00 : (index === 2 ? 10.00 : 20.00)),
                    completado: true
                });
            }
        });

        return recompensas;
    }

    reclamarRecompensa(tipo, meta) {
        if (tipo === 'diaria') {
            if (!this.misiones.diarias.reclamadas.includes(meta)) {
                this.misiones.diarias.reclamadas.push(meta);
                
                // Encontrar la recompensa
                const recompensa = [0.50, 1.00, 2.00, 5.00][[1, 3, 5, 10].indexOf(meta)];
                sistemaEconomia.agregarDinero(recompensa);
                
                this.guardarMisiones();
                mostrarNotificacion(`💰 +${recompensa.toFixed(2)} soles por misión diaria`);
                return recompensa;
            }
        } else if (tipo === 'semanal') {
            if (!this.misiones.semanales.reclamadas.includes(meta)) {
                this.misiones.semanales.reclamadas.push(meta);
                
                // Encontrar la recompensa
                const recompensa = [2.00, 5.00, 10.00, 20.00][[5, 10, 20, 30].indexOf(meta)];
                sistemaEconomia.agregarDinero(recompensa);
                
                this.guardarMisiones();
                mostrarNotificacion(`💰 +${recompensa.toFixed(2)} soles por misión semanal`);
                return recompensa;
            }
        }
        return 0;
    }

    obtenerEstadisticas() {
        return {
            diarias: {
                completadas: this.misiones.diarias.completadas,
                reclamadas: this.misiones.diarias.reclamadas.length,
                fechaReset: this.misiones.diarias.fechaUltimoReset
            },
            semanales: {
                completadas: this.misiones.semanales.completadas,
                reclamadas: this.misiones.semanales.reclamadas.length,
                fechaReset: this.misiones.semanales.fechaUltimoReset
            },
            totalRegistros: this.misiones.registro.length
        };
    }

    guardarMisiones() {
        localStorage.setItem('sistema_misiones', JSON.stringify(this.misiones));
    }

    cargarMisiones() {
        const data = localStorage.getItem('sistema_misiones');
        return data ? JSON.parse(data) : null;
    }
}

// ====================
// 3. SISTEMA DE VIDEOS RECOMPENSA
// ====================

const videosRecompensa = [
    { id: 1, driveId: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe", titulo: "🎬 Recompensa Especial #1", probabilidad: 20, duracion: "1:30" },
    { id: 2, driveId: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K", titulo: "🎁 Video Bonus #2", probabilidad: 15, duracion: "2:00" },
    { id: 3, driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", titulo: "✨ Contenido Exclusivo #3", probabilidad: 12, duracion: "1:45" },
    { id: 4, driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl", titulo: "🌟 Regalo Especial #4", probabilidad: 10, duracion: "2:15" },
    { id: 5, driveId: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe", titulo: "🎯 Recompensa Premium #5", probabilidad: 8, duracion: "3:00" },
    { id: 6, driveId: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K", titulo: "💎 Video Raro #6", probabilidad: 7, duracion: "1:20" },
    { id: 7, driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", titulo: "🔥 Contenido Ultra #7", probabilidad: 6, duracion: "2:30" },
    { id: 8, driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl", titulo: "⚡ Bonus Sorpresa #8", probabilidad: 5, duracion: "1:50" },
    { id: 9, driveId: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe", titulo: "🌙 Video Nocturno #9", probabilidad: 4, duracion: "2:10" },
    { id: 10, driveId: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K", titulo: "☀️ Regalo Matutino #10", probabilidad: 3, duracion: "1:40" },
    { id: 11, driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", titulo: "🌈 Arcoíris #11", probabilidad: 2.5, duracion: "2:20" },
    { id: 12, driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl", titulo: "🎪 Circo Mágico #12", probabilidad: 2, duracion: "1:35" },
    { id: 13, driveId: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe", titulo: "🏆 Campeón #13", probabilidad: 1.5, duracion: "2:45" },
    { id: 14, driveId: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K", titulo: "👑 Realeza #14", probabilidad: 1, duracion: "1:55" },
    { id: 15, driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", titulo: "💫 Estrella Fugaz #15", probabilidad: 0.8, duracion: "2:05" },
    { id: 16, driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl", titulo: "🌌 Galaxia #16", probabilidad: 0.6, duracion: "3:10" },
    { id: 17, driveId: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe", titulo: "🌀 Torbellino #17", probabilidad: 0.5, duracion: "1:25" },
    { id: 18, driveId: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K", titulo: "🎇 Fuegos Artificiales #18", probabilidad: 0.4, duracion: "2:15" },
    { id: 19, driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", titulo: "🌠 Cometa #19", probabilidad: 0.3, duracion: "1:50" },
    { id: 20, driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl", titulo: "⚛️ Átomo #20", probabilidad: 0.2, duracion: "2:30" }
];

function mostrarVideoRecompensa() {
    // Calcular probabilidad acumulativa
    let random = Math.random() * 100;
    let acumulado = 0;
    let videoSeleccionado = null;
    
    for (const video of videosRecompensa) {
        acumulado += video.probabilidad;
        if (random <= acumulado) {
            videoSeleccionado = video;
            break;
        }
    }
    
    // Si no se selecciona ninguno (muy improbable), usar el primero
    if (!videoSeleccionado) {
        videoSeleccionado = videosRecompensa[0];
    }
    
    // Mostrar modal de video recompensa
    const modalHTML = `
        <div id="modal-video-recompensa" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; display: flex; justify-content: center; align-items: center;">
            <div style="background: #1a1a2e; border-radius: 20px; padding: 30px; max-width: 800px; width: 90%; border: 3px solid #FFD166; position: relative;">
                <h2 style="color: #FFD166; text-align: center; margin-bottom: 20px;">🎉 ¡VIDEO RECOMPENSA DESBLOQUEADO!</h2>
                <p style="text-align: center; margin-bottom: 25px; opacity: 0.8; font-size: 1.1rem;">
                    ${videoSeleccionado.titulo}<br>
                    <span style="color: #FFD166; font-size: 0.9rem;">Probabilidad: ${videoSeleccionado.probabilidad}%</span>
                </p>
                
                <div style="margin: 25px 0;">
                    <iframe 
                        src="https://drive.google.com/file/d/${videoSeleccionado.driveId}/preview"
                        width="100%"
                        height="400"
                        frameborder="0"
                        style="border-radius: 15px;"
                        allow="autoplay"
                    ></iframe>
                </div>
                
                <div style="display: flex; gap: 15px; justify-content: center; margin-top: 25px;">
                    <button onclick="saltarVideoRecompensa()" style="padding: 12px 30px; background: rgba(255,255,255,0.1); border: 2px solid #FF6B6B; border-radius: 10px; color: #FF6B6B; font-weight: bold; cursor: pointer;">
                        ⏭️ Saltar Video
                    </button>
                    <button onclick="cerrarModalVideo()" style="padding: 12px 30px; background: #FFD166; border: none; border-radius: 10px; color: #333; font-weight: bold; cursor: pointer;">
                        ✅ Continuar
                    </button>
                </div>
                
                <p style="text-align: center; margin-top: 20px; opacity: 0.6; font-size: 0.9rem;">
                    ¡Felicidades! Has desbloqueado un video especial
                </p>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function saltarVideoRecompensa() {
    cerrarModalVideo();
}

function cerrarModalVideo() {
    const modal = document.getElementById('modal-video-recompensa');
    if (modal) {
        modal.remove();
    }
}

// ====================
// 4. SISTEMA RPG MEJORADO
// ====================

function comprarActividadRPG(personajeId, actividadId) {
    if (typeof quintillizasRPG === 'undefined') return false;
    return quintillizasRPG.comprarActividad(personajeId, actividadId);
}

// ====================
// 5. FUNCIÓN VOLVER A MAZOS REPARADA
// ====================

function volverAMazos() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('manga-section').style.display = 'block';
    
    // Determinar qué función de volver usar según el modo
    if (modoActual === 'anime') {
        cargarMazosAnimes(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'audio') {
        cargarMazosAudios(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'asmr') {
        volverAlInicio();
    } else if (modoActual === 'rpg') {
        cargarPaginaRPG();
    } else {
        // Modo manga o video
        cargarMazos(contenedorActual, subcontenedorActual);
    }
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
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius= 10px;">
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
// SISTEMA DE QUIZ MEJORADO CON PALABRAS DIFÍCILES
// ====================

function iniciarQuiz(contenedor, subcontenedor, mazo) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    mazoActual = mazo;
    
    // Verificar si estamos en mazo difícil
    if (mazoDificilActivo.length > 0 && mazoDificilOriginalInfo) {
        palabrasActuales = mazoDificilActivo;
    } else {
        // Obtener palabras según el modo actual
        if (modoActual === 'anime') {
            palabrasActuales = obtenerVocabularioAnime(contenedor, subcontenedor, mazo);
        } else if (modoActual === 'audio') {
            palabrasActuales = obtenerVocabularioAudio(contenedor, subcontenedor, mazo);
        } else {
            palabrasActuales = obtenerVocabulario(contenedor, subcontenedor, mazo);
        }
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
    mostrarPalabraQuizMejorado();
}

function mostrarPalabraQuizMejorado() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = palabrasActuales[indicePalabraActual];
    
    // Determinar el ícono según el modo
    let icono = '📚';
    if (modoActual === 'anime') icono = '🎌';
    if (modoActual === 'audio') icono = '🎵';
    if (modoActual === 'asmr') icono = '🎧';
    if (modoActual === 'rpg') icono = '🎮';
    
    // Verificar si es mazo difícil
    const esMazoDificil = mazoDificilActivo.length > 0;
    const tituloMazo = esMazoDificil ? '⭐ MAZO DE PALABRAS DIFÍCILES' : `${modoActual.toUpperCase()} • Mazo ${mazoActual}`;
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #8A5AF7; margin-bottom: 20px;">
                ${icono} ${tituloMazo} • Palabra ${indicePalabraActual + 1}/${palabrasActuales.length}
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
            
            <!-- BOTÓN PARA MARCAR COMO DIFÍCIL -->
            ${!esMazoDificil ? `
                <div style="text-align: center; margin: 20px 0;">
                    <button id="btn-marcar-dificil" onclick="marcarPalabraActualComoDificil()" 
                            style="padding: 10px 20px; background: rgba(255, 215, 0, 0.1); border: 2px solid #FFD700; border-radius: 10px; color: #FFD700; cursor: pointer; font-weight: bold;">
                        ⭐ Marcar como difícil
                    </button>
                </div>
            ` : ''}
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="cancelarQuiz()">
                    ❌ Cancelar
                </button>
            </div>
        </div>
    `;
    
    // Crear opciones (2 arriba, 2 abajo)
    crearOpcionesQuizMejorado(palabra);
}

function crearOpcionesQuizMejorado(palabra) {
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
                <button class="opcion-btn" onclick="verificarRespuestaMejorada(0, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[0]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuestaMejorada(1, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[1]}
                </button>
            </div>
            <div class="opcion-fila">
                <button class="opcion-btn" onclick="verificarRespuestaMejorada(2, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[2]}
                </button>
                <button class="opcion-btn" onclick="verificarRespuestaMejorada(3, ${nuevaPosicionCorrecta})">
                    ${opcionesMezcladas[3]}
                </button>
            </div>
        </div>
    `;
}

function marcarPalabraActualComoDificil() {
    const palabra = palabrasActuales[indicePalabraActual];
    agregarPalabraDificil(palabra);
    
    // Actualizar botón
    const btn = document.getElementById('btn-marcar-dificil');
    if (btn) {
        btn.innerHTML = '✅ Marcada como difícil';
        btn.style.background = 'rgba(76, 175, 80, 0.1)';
        btn.style.borderColor = '#4CAF50';
        btn.style.color = '#4CAF50';
        btn.disabled = true;
    }
}

function verificarRespuestaMejorada(opcionSeleccionada, posicionCorrecta) {
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
    
    // Deshabilitar botón de marcar como difícil
    const btnMarcar = document.getElementById('btn-marcar-dificil');
    if (btnMarcar) {
        btnMarcar.disabled = true;
    }
    
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
        darExpPorPalabraCorrecta(true);
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
        setTimeout(pasarSiguientePalabraMejorada, 1500);
    } else {
        // Respuesta incorrecta: mostrar botón manual
        controls.innerHTML = `
            <button class="quiz-btn btn-volver" onclick="cancelarQuiz()">
                ❌ Cancelar
            </button>
            <button class="quiz-btn btn-siguiente" onclick="pasarSiguientePalabraMejorada()">
                ⏭️ Siguiente Palabra
            </button>
        `;
        esperandoSiguiente = true;
    }
}

function pasarSiguientePalabraMejorada() {
    indicePalabraActual++;
    
    if (indicePalabraActual < palabrasActuales.length) {
        esperandoSiguiente = false;
        mostrarPalabraQuizMejorado();
    } else {
        // Quiz terminado
        finalizarQuizMejorado();
    }
}

function finalizarQuizMejorado() {
    const porcentaje = Math.round((aciertos / palabrasActuales.length) * 100);
    const esMazoDificil = mazoDificilActivo.length > 0;
    
    console.log(`Quiz finalizado: ${aciertos} aciertos de ${palabrasActuales.length} = ${porcentaje}%`);
    
    // Registrar en sistema de misiones
    if (!esMazoDificil && porcentaje === 100) {
        const misiones = new SistemaMisiones();
        misiones.registrarMazoCompletado(porcentaje);
        
        // Mostrar video recompensa con probabilidad
        if (Math.random() * 100 < 30) { // 30% de probabilidad
            setTimeout(mostrarVideoRecompensa, 500);
        }
    }
    
    // DAR EXP ADICIONAL POR COMPLETAR MAZO
    darExpPorCompletarMazo(porcentaje);
    
    // OBTENER DINERO ANTES DE ACTUALIZAR
    const dineroAntes = sistemaEconomia.obtenerDinero();
    
    // Actualizar progreso en sistema (ESTE MÉTODO DA LA RECOMPENSA)
    if (!esMazoDificil) {
        sistemaEconomia.actualizarProgreso(
            contenedorActual, 
            subcontenedorActual, 
            mazoActual, 
            porcentaje
        );
    }
    
    // OBTENER DINERO DESPUÉS (con la recompensa ya añadida)
    const dineroAhora = sistemaEconomia.obtenerDinero();
    const recompensa = dineroAhora - dineroAntes;
    
    // Determinar a dónde volver según el modo
    let funcionVolver;
    if (modoActual === 'anime') {
        funcionVolver = () => cargarMazosAnimes(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'audio') {
        funcionVolver = () => cargarMazosAudios(contenedorActual, subcontenedorActual);
    } else if (modoActual === 'asmr') {
        funcionVolver = () => volverAlInicio();
    } else if (modoActual === 'rpg') {
        funcionVolver = () => cargarPaginaRPG();
    } else {
        funcionVolver = () => cargarMazos(contenedorActual, subcontenedorActual);
    }
    
    // Si es mazo difícil y se completó con buen porcentaje, limpiarlo
    if (esMazoDificil && porcentaje >= 80) {
        limpiarMazoDificilCompletado();
    }
    
    // Mostrar resultados
    const resultadosHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FFD166;">${esMazoDificil ? '⭐ ' : ''}🎉 QUIZ COMPLETADO</h2>
            
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem; margin-bottom: 20px;">${porcentaje}%</div>
                <p style="font-size: 1.2rem; color: #8A5AF7;">
                    ${aciertos} aciertos • ${errores} errores
                </p>
            </div>
            
            ${esMazoDificil && porcentaje >= 80 ? `
                <div style="background: rgba(255, 215, 0, 0.1); border-radius: 15px; padding: 20px; margin: 20px 0; border: 2px solid #FFD700;">
                    <h3 style="color: #FFD700; text-align: center;">⭐ ¡MAZO DIFÍCIL SUPERADO!</h3>
                    <p style="text-align: center; opacity: 0.8;">
                        Has dominado las palabras difíciles. Se eliminarán del sistema.
                    </p>
                </div>
            ` : ''}
            
            ${!esMazoDificil && recompensa > 0 ? `
                <div style="background: rgba(255, 255, 255, 0.05); padding: 25px; border-radius: 15px; margin: 20px 0;">
                    <h3 style="color: #4CAF50; margin-bottom: 15px;">💰 Recompensa Obtenida</h3>
                    <div style="font-size: 2.5rem; text-align: center; color: #FFD166;">
                        ${dineroAhora.toFixed(2)} soles
                    </div>
                    <p style="text-align: center; margin-top: 10px; opacity: 0.8;">
                        +${recompensa.toFixed(2)} soles ganados
                    </p>
                </div>
            ` : ''}
            
            <!-- BOTÓN PARA PRACTICAR MAZO DIFÍCIL -->
            ${!esMazoDificil && palabrasDificiles.length > 0 ? `
                <div style="text-align: center; margin: 25px 0;">
                    <button class="card-button" onclick="iniciarMazoDificil()" 
                            style="background: linear-gradient(135deg, #FFD700, #FF8C00); padding: 15px 30px; font-size: 1.1rem; font-weight: bold;">
                        🔰 Practicar Mazo de Palabras Difíciles (${palabrasDificiles.length})
                    </button>
                    <p style="opacity: 0.7; font-size: 0.9rem; margin-top: 10px;">
                        ${palabrasDificiles.length} palabras marcadas como difíciles
                    </p>
                </div>
            ` : ''}
            
            <!-- BOTÓN PARA VER MISIONES -->
            ${!esMazoDificil ? `
                <div style="text-align: center; margin: 20px 0;">
                    <button class="card-button" onclick="mostrarMisiones()" 
                            style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 12px 25px; font-size: 1rem;">
                        🎯 Ver Misiones y Recompensas
                    </button>
                </div>
            ` : ''}
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="${esMazoDificil ? 'volverAMazos()' : (modoActual === 'anime' ? `cargarMazosAnimes(${contenedorActual}, ${subcontenedorActual})` : (modoActual === 'audio' ? `cargarMazosAudios(${contenedorActual}, ${subcontenedorActual})` : (modoActual === 'rpg' ? `cargarPaginaRPG()` : `cargarMazos(${contenedorActual}, ${subcontenedorActual})`))}">
                    ↩️ Volver a Mazos
                </button>
                <button class="quiz-btn btn-siguiente" onclick="repetirQuiz()">
                    🔄 ${esMazoDificil ? 'Repetir Mazo Difícil' : 'Repetir Mazo'}
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('quiz-section').innerHTML = resultadosHTML;
    
    // Actualizar contador de dinero en el inicio
    actualizarContadorDineroInicio();
}

function iniciarMazoDificil() {
    const mazoDificil = crearMazoDificil();
    if (mazoDificil.length > 0) {
        // Usar contenedor/subcontenedor actual, pero con mazo especial
        palabrasActuales = mazoDificil;
        indicePalabraActual = 0;
        aciertos = 0;
        errores = 0;
        esperandoSiguiente = false;
        
        document.getElementById('quiz-section').innerHTML = '';
        mostrarPalabraQuizMejorado();
    } else {
        alert('No hay palabras difíciles para practicar');
    }
}

function mostrarMisiones() {
    const misiones = new SistemaMisiones();
    const recompensas = misiones.obtenerRecompensasDisponibles();
    const estadisticas = misiones.obtenerEstadisticas();
    
    const modalHTML = `
        <div id="modal-misiones" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px;">
            <div style="background: #1a1a2e; border-radius: 20px; padding: 30px; max-width: 800px; width: 90%; border: 3px solid #FFD166; position: relative; max-height: 90vh; overflow-y: auto;">
                <h2 style="color: #FFD166; text-align: center; margin-bottom: 25px;">🎯 SISTEMA DE MISIONES</h2>
                
                <!-- ESTADÍSTICAS -->
                <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; margin-bottom: 25px;">
                    <h3 style="color: #8A5AF7; margin-bottom: 15px;">📊 Tu Progreso</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="color: #FFD166; font-size: 0.9rem;">📅 Mazos Hoy</div>
                            <div style="font-size: 1.8rem; font-weight: bold;">${estadisticas.diarias.completadas}</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #FFD166; font-size: 0.9rem;">📆 Mazos Semana</div>
                            <div style="font-size: 1.8rem; font-weight: bold;">${estadisticas.semanales.completadas}</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #FFD166; font-size: 0.9rem;">💰 Total</div>
                            <div style="font-size: 1.8rem; font-weight: bold;">${estadisticas.totalRegistros}</div>
                        </div>
                    </div>
                    <p style="text-align: center; opacity: 0.7; font-size: 0.9rem; margin-top: 15px;">
                        Reseteo diario: 3:00 AM • Reseteo semanal: Lunes
                    </p>
                </div>
                
                <!-- MISIONES DIARIAS -->
                <div style="background: rgba(76, 175, 80, 0.1); border-radius: 15px; padding: 20px; margin-bottom: 25px; border: 2px solid rgba(76, 175, 80, 0.3);">
                    <h3 style="color: #4CAF50; margin-bottom: 15px;">🌞 Misiones Diarias</h3>
                    <p style="opacity: 0.8; margin-bottom: 15px;">Completa mazos al 100% para ganar recompensas diarias</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 15px;">
                        ${[1, 3, 5, 10].map((meta, index) => {
                            const recompensa = [0.50, 1.00, 2.00, 5.00][index];
                            const completado = estadisticas.diarias.completadas >= meta;
                            const reclamado = misiones.misiones.diarias.reclamadas.includes(meta);
                            
                            return `
                                <div style="background: rgba(255,255,255,0.08); border-radius: 10px; padding: 15px; text-align: center;">
                                    <div style="font-weight: bold; margin-bottom: 10px;">${meta} Mazo${meta > 1 ? 's' : ''}</div>
                                    <div style="color: #FFD166; font-size: 1.2rem; margin-bottom: 10px;">${recompensa.toFixed(2)} soles</div>
                                    <div style="margin-bottom: 10px;">
                                        <span style="color: ${completado ? '#4CAF50' : '#FF6B6B'}">${completado ? '✅ Completado' : '❌ Pendiente'}</span>
                                    </div>
                                    <button onclick="reclamarMision('diaria', ${meta})" 
                                            style="padding: 8px 15px; background: ${reclamado ? 'rgba(255,255,255,0.1)' : (completado ? '#4CAF50' : '#FF6B6B')}; 
                                                   border: none; border-radius: 8px; color: white; font-weight: bold; width: 100%; cursor: ${reclamado ? 'not-allowed' : (completado ? 'pointer' : 'not-allowed')};"
                                            ${reclamado || !completado ? 'disabled' : ''}>
                                        ${reclamado ? '✅ Reclamado' : (completado ? '💰 Reclamar' : '🔒 Bloqueado')}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <!-- MISIONES SEMANALES -->
                <div style="background: rgba(138, 90, 247, 0.1); border-radius: 15px; padding: 20px; margin-bottom: 25px; border: 2px solid rgba(138, 90, 247, 0.3);">
                    <h3 style="color: #8A5AF7; margin-bottom: 15px;">📅 Misiones Semanales</h3>
                    <p style="opacity: 0.8; margin-bottom: 15px;">Recompensas mayores por completar más mazos en la semana</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 15px;">
                        ${[5, 10, 20, 30].map((meta, index) => {
                            const recompensa = [2.00, 5.00, 10.00, 20.00][index];
                            const completado = estadisticas.semanales.completadas >= meta;
                            const reclamado = misiones.misiones.semanales.reclamadas.includes(meta);
                            
                            return `
                                <div style="background: rgba(255,255,255,0.08); border-radius: 10px; padding: 15px; text-align: center;">
                                    <div style="font-weight: bold; margin-bottom: 10px;">${meta} Mazo${meta > 1 ? 's' : ''}</div>
                                    <div style="color: #FFD166; font-size: 1.2rem; margin-bottom: 10px;">${recompensa.toFixed(2)} soles</div>
                                    <div style="margin-bottom: 10px;">
                                        <span style="color: ${completado ? '#4CAF50' : '#FF6B6B'}">${completado ? '✅ Completado' : '❌ Pendiente'}</span>
                                    </div>
                                    <button onclick="reclamarMision('semanal', ${meta})" 
                                            style="padding: 8px 15px; background: ${reclamado ? 'rgba(255,255,255,0.1)' : (completado ? '#8A5AF7' : '#FF6B6B')}; 
                                                   border: none; border-radius: 8px; color: white; font-weight: bold; width: 100%; cursor: ${reclamado ? 'not-allowed' : (completado ? 'pointer' : 'not-allowed')};"
                                            ${reclamado || !completado ? 'disabled' : ''}>
                                        ${reclamado ? '✅ Reclamado' : (completado ? '💰 Reclamar' : '🔒 Bloqueado')}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <!-- INSTRUCCIONES -->
                <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 20px; border-left: 5px solid #FFD166;">
                    <h4 style="color: #FFD166; margin-bottom: 10px;">📖 ¿Cómo funciona?</h4>
                    <ul style="padding-left: 20px; opacity: 0.8; font-size: 0.95rem;">
                        <li>Completa mazos de vocabulario al <strong>100%</strong></li>
                        <li>Cada mazo completo cuenta para misiones diarias y semanales</li>
                        <li>Las recompensas se acumulan automáticamente</li>
                        <li>Reclama tus recompensas cuando completes los objetivos</li>
                        <li>Las misiones se reinician: <strong>Diarias a las 3:00 AM</strong> • <strong>Semanales los lunes</strong></li>
                    </ul>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="cerrarModalMisiones()" 
                            style="padding: 12px 30px; background: #FFD166; border: none; border-radius: 10px; color: #333; font-weight: bold; cursor: pointer;">
                        ✅ Cerrar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function reclamarMision(tipo, meta) {
    const misiones = new SistemaMisiones();
    const reclamada = misiones.reclamarRecompensa(tipo, meta);
    
    if (reclamada > 0) {
        // Actualizar modal
        setTimeout(() => {
            const modal = document.getElementById('modal-misiones');
            if (modal) modal.remove();
            mostrarMisiones();
        }, 500);
    }
}

function cerrarModalMisiones() {
    const modal = document.getElementById('modal-misiones');
    if (modal) {
        modal.remove();
    }
}

function cancelarQuiz() {
    if (confirm('¿Seguro que quieres cancelar el quiz? Se perderá el progreso actual.')) {
        // Si es mazo difícil, regresar al mazo original
        if (mazoDificilActivo.length > 0 && mazoDificilOriginalInfo) {
            const { contenedor, subcontenedor, mazo, modo } = mazoDificilOriginalInfo;
            contenedorActual = contenedor;
            subcontenedorActual = subcontenedor;
            mazoActual = mazo;
            modoActual = modo;
            
            // Limpiar mazo difícil temporal
            mazoDificilActivo = [];
            mazoDificilOriginalInfo = null;
        }
        
        // Volver a mazos según el modo
        volverAMazos();
    }
}

function repetirQuiz() {
    // Si es mazo difícil, mantenerlo
    if (mazoDificilActivo.length > 0) {
        palabrasActuales = mazoDificilActivo;
    }
    
    iniciarQuiz(contenedorActual, subcontenedorActual, mazoActual);
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
    console.log('💖 EXP por quiz activado: +20 EXP/palabra correcta, +15-100 EXP/mazo completo');
    console.log('⭐ Sistema de palabras difíciles activo');
    console.log('🎯 Sistema de misiones activo');
    console.log('🎬 Sistema de videos recompensa activo (20 videos, 20% a 0.5%)');
});
