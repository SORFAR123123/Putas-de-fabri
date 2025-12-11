// ================================================
// SISTEMA COMPLETO: DINERO + REPRODUCTOR + TIMESTAMPS
// ================================================

class SistemaEconomia {
    constructor() {
        this.dinero = this.cargarDinero() || 0;
        this.progreso = this.cargarProgreso() || {};
    }

    // ====================
    // DINERO
    // ====================

    agregarDinero(cantidad) {
        this.dinero += cantidad;
        this.guardarDinero();
        this.mostrarNotificacion(`+${cantidad.toFixed(2)} soles`);
    }

    obtenerDinero() {
        return this.dinero;
    }

    // ====================
    // PROGRESO DE MAZOS
    // ====================

    actualizarProgreso(contenedor, subcontenedor, mazo, porcentaje) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        const progresoAnterior = this.progreso[clave] || 0;
        
        console.log(`Actualizando progreso: ${clave}`);
        console.log(`Progreso anterior: ${progresoAnterior}%, Nuevo: ${porcentaje}%`);
        
        // SIEMPRE actualizar si es mejor
        if (porcentaje >= progresoAnterior) {
            this.progreso[clave] = porcentaje;
            this.guardarProgreso();
            
            // Calcular recompensa SIEMPRE
            this.calcularRecompensa(contenedor, subcontenedor, mazo, porcentaje, progresoAnterior);
        }
        
        return this.progreso[clave];
    }

    obtenerProgreso(contenedor, subcontenedor, mazo) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        return this.progreso[clave] || 0;
    }

    // ====================
    // CÁLCULO DE RECOMPENSAS - FIJO Y SIEMPRE FUNCIONA
    // ====================

    calcularRecompensa(contenedor, subcontenedor, mazo, porcentaje, progresoAnterior) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        
        console.log(`🎯 Calculando recompensa para: ${clave}`);
        console.log(`📊 De ${progresoAnterior}% a ${porcentaje}%`);
        
        // FÓRMULA FIJA QUE SIEMPRE DA DINERO:
        let recompensa = 0;
        
        // 1. SI ES EL PRIMER INTENTO (progresoAnterior = 0)
        if (progresoAnterior === 0 && porcentaje > 0) {
            if (porcentaje === 100) {
                recompensa = 2.00;  // 2 soles por 100% en primer intento
            } else if (porcentaje >= 50) {
                recompensa = 1.00;  // 1 sol por 50-99%
            } else {
                recompensa = 0.50;  // 0.5 soles por menos de 50%
            }
        }
        // 2. SI ES UN MEJOR INTENTO
        else if (porcentaje > progresoAnterior) {
            if (porcentaje === 100) {
                recompensa = 2.00;  // Siempre 2 soles por llegar al 100%
            } else {
                recompensa = 0.25;  // 0.25 soles por mejorar
            }
        }
        
        // Redondear a 2 decimales
        recompensa = Math.round(recompensa * 100) / 100;
        
        // DAR LA RECOMPENSA SI HAY ALGO
        if (recompensa > 0) {
            this.agregarDinero(recompensa);
            console.log(`💰 ¡RECOMPENSA OBTENIDA! ${recompensa} soles`);
        } else {
            console.log(`⚠️ No hay recompensa esta vez`);
        }
    }

    // ====================
    // ESTADÍSTICAS
    // ====================

    obtenerEstadisticas() {
        const claves = Object.keys(this.progreso);
        const totalMazos = claves.length;
        const completados100 = claves.filter(clave => this.progreso[clave] === 100).length;
        const porcentajeTotal = totalMazos > 0 ? 
            (completados100 / totalMazos) * 100 : 0;
        
        return {
            totalMazos,
            completados100,
            porcentajeTotal: Math.round(porcentajeTotal),
            dinero: this.dinero
        };
    }

    mostrarNotificacion(mensaje) {
        // Crear notificación
        const notif = document.createElement('div');
        notif.className = 'notificacion-dinero';
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #FFD166, #FF6B6B);
            color: #333;
            padding: 12px 25px;
            border-radius: 50px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.4);
            z-index: 1001;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
            font-size: 1.1rem;
            border: 2px solid white;
        `;
        
        document.body.appendChild(notif);
        
        // Eliminar después de 2.5 segundos
        setTimeout(() => {
            if (notif.parentNode) {
                notif.parentNode.removeChild(notif);
            }
        }, 2500);
    }

    // ====================
    // LOCAL STORAGE
    // ====================

    guardarDinero() {
        try {
            localStorage.setItem('manga_dinero', this.dinero.toString());
        } catch (e) {
            console.warn('No se pudo guardar dinero:', e);
        }
    }

    cargarDinero() {
        try {
            const dinero = localStorage.getItem('manga_dinero');
            return dinero ? parseFloat(dinero) : 0;
        } catch (e) {
            console.warn('No se pudo cargar dinero:', e);
            return 0;
        }
    }

    guardarProgreso() {
        try {
            localStorage.setItem('manga_progreso', JSON.stringify(this.progreso));
        } catch (e) {
            console.warn('No se pudo guardar progreso:', e);
        }
    }

    cargarProgreso() {
        try {
            const progreso = localStorage.getItem('manga_progreso');
            return progreso ? JSON.parse(progreso) : {};
        } catch (e) {
            console.warn('No se pudo cargar progreso:', e);
            return {};
        }
    }
}

// ================================================
// SISTEMA DE REPRODUCTOR DRIVE CON TIMESTAMPS FUNCIONALES
// ================================================

class SistemaReproductorDrive {
    constructor() {
        this.videoActual = null;
        this.timestampsActuales = [];
        this.iframeReproductor = null;
    }

    // ====================
    // CARGAR VIDEO
    // ====================

    cargarVideo(driveId, timestamps = []) {
        this.videoActual = driveId;
        this.timestampsActuales = timestamps;
        
        return `
            <div class="reproductor-container">
                <div class="video-wrapper">
                    <iframe 
                        id="drive-iframe"
                        src="https://drive.google.com/file/d/${driveId}/preview"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        class="drive-iframe"
                    ></iframe>
                </div>
                
                ${this.crearListaTimestamps(timestamps)}
                
                <div class="video-controls">
                    <button class="video-btn" onclick="sistemaReproductor.pausarVideo()">
                        ⏸️ Pausar
                    </button>
                    <button class="video-btn" onclick="sistemaReproductor.reanudarVideo()">
                        ▶️ Reanudar
                    </button>
                    <button class="video-btn btn-volver" onclick="volverASubcontenedoresVideos()">
                        ↩️ Volver
                    </button>
                </div>
            </div>
        `;
    }

    // ====================
    // TIMESTAMPS - TRUCO FUNCIONAL PARA DRIVE
    // ====================

    crearListaTimestamps(timestamps) {
        if (!timestamps || timestamps.length === 0) {
            return '<p style="text-align: center; opacity: 0.7; margin: 20px 0;">No hay timestamps disponibles</p>';
        }

        let html = '<div class="timestamps-container">';
        html += '<h3 style="color: #8A5AF7; margin-bottom: 15px;">📍 Timestamps:</h3>';
        html += '<div class="timestamps-grid">';
        
        timestamps.forEach((ts, index) => {
            const minutos = Math.floor(ts.tiempo / 60);
            const segundos = ts.tiempo % 60;
            const tiempoFormateado = `${minutos}:${segundos.toString().padStart(2, '0')}`;
            
            html += `
                <div class="timestamp-item" onclick="sistemaReproductor.saltarATiempo(${ts.tiempo})">
                    <div class="timestamp-tiempo">${tiempoFormateado}</div>
                    <div class="timestamp-titulo">${ts.titulo}</div>
                </div>
            `;
        });
        
        html += '</div></div>';
        return html;
    }

    // TRUCO FUNCIONAL PARA SALTAR EN DRIVE
    saltarATiempo(segundos) {
        const iframe = document.getElementById('drive-iframe');
        if (!iframe) return;
        
        console.log(`Saltando a ${segundos} segundos...`);
        
        // MÉTODO FUNCIONAL: Cambiar el src del iframe con el timestamp
        // Formato correcto para Google Drive: #t=XmYs (minutos y segundos)
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        
        // Crear nueva URL con el timestamp
        const nuevoSrc = `https://drive.google.com/file/d/${this.videoActual}/preview#t=${minutos}m${segs}s`;
        
        // Forzar recarga del iframe
        iframe.src = nuevoSrc;
        
        // También intentar con parámetros de URL (alternativa)
        setTimeout(() => {
            iframe.contentWindow.postMessage({
                event: 'command',
                func: 'seekTo',
                args: [segundos, true]
            }, '*');
        }, 1000);
        
        // Mostrar notificación
        this.mostrarNotificacionTiempo(segundos);
    }

    mostrarNotificacionTiempo(segundos) {
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        const mensaje = `Saltando a ${minutos}:${segs.toString().padStart(2, '0')}`;
        
        const notif = document.createElement('div');
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 150px;
            right: 20px;
            background: linear-gradient(135deg, #5864F5, #8A5AF7);
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            font-weight: bold;
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
            z-index: 1002;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 1.5s forwards;
        `;
        
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 2000);
    }

    // ====================
    // CONTROLES BÁSICOS
    // ====================

    pausarVideo() {
        const iframe = document.getElementById('drive-iframe');
        try {
            iframe.contentWindow.postMessage({
                event: 'command',
                func: 'pauseVideo',
                args: []
            }, '*');
        } catch (e) {
            console.log("No se pudo pausar:", e);
        }
    }

    reanudarVideo() {
        const iframe = document.getElementById('drive-iframe');
        try {
            iframe.contentWindow.postMessage({
                event: 'command',
                func: 'playVideo',
                args: []
            }, '*');
        } catch (e) {
            console.log("No se pudo reanudar:", e);
        }
    }

    // ====================
    // UTILIDADES
    // ====================

    obtenerVideoActual() {
        return this.videoActual;
    }

    obtenerTimestampsActuales() {
        return this.timestampsActuales;
    }
}

// ================================================
// CREAR INSTANCIAS GLOBALES
// ================================================

const sistemaEconomia = new SistemaEconomia();
const sistemaReproductor = new SistemaReproductorDrive();
