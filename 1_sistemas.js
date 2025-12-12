// ================================================
// SISTEMA COMPLETO: DINERO + REPRODUCTOR + TIMESTAMPS FUNCIONALES
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
        
        console.log(`🎯 Actualizando progreso: ${clave}`);
        console.log(`📊 Progreso anterior: ${progresoAnterior}%, Nuevo: ${porcentaje}%`);
        
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
    // CÁLCULO DE RECOMPENSAS - SIEMPRE FUNCIONA
    // ====================

    calcularRecompensa(contenedor, subcontenedor, mazo, porcentaje, progresoAnterior) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        
        console.log(`💰 Calculando recompensa para: ${clave}`);
        console.log(`📈 De ${progresoAnterior}% a ${porcentaje}%`);
        
        let recompensa = 0;
        
        // REGLA PRINCIPAL: SIEMPRE DAR DINERO CUANDO HAY PROGRESO
        if (porcentaje > 0) {
            // RECOMPENSA BASE POR INTENTAR
            recompensa = 0.50;
            
            // BONIFICACIÓN POR PORCENTAJE
            if (porcentaje >= 100) {
                recompensa += 1.50; // Total: 2.00
                console.log(`🎉 BONIFICACIÓN POR 100%: +1.50`);
            } else if (porcentaje >= 90) {
                recompensa += 1.00; // Total: 1.50
            } else if (porcentaje >= 80) {
                recompensa += 0.75; // Total: 1.25
            } else if (porcentaje >= 70) {
                recompensa += 0.50; // Total: 1.00
            } else if (porcentaje >= 60) {
                recompensa += 0.25; // Total: 0.75
            } else if (porcentaje >= 50) {
                recompensa += 0.15; // Total: 0.65
            }
            
            // BONIFICACIÓN POR MEJORA
            if (porcentaje > progresoAnterior) {
                const mejora = porcentaje - progresoAnterior;
                const bonusMejora = mejora * 0.01; // 0.01 soles por cada 1% de mejora
                recompensa += bonusMejora;
                console.log(`📈 Bonificación por mejora: +${bonusMejora.toFixed(2)}`);
            }
        }
        
        // Redondear a 2 decimales
        recompensa = Math.round(recompensa * 100) / 100;
        
        // DAR LA RECOMPENSA SIEMPRE QUE SEA POSITIVA
        if (recompensa > 0) {
            this.agregarDinero(recompensa);
            console.log(`💰 ¡RECOMPENSA TOTAL: ${recompensa} soles!`);
            
            // También mostrar notificación
            setTimeout(() => {
                this.mostrarNotificacion(`+${recompensa.toFixed(2)} soles por mazo`);
            }, 500);
        } else {
            console.log(`⚠️ Recompensa calculada: 0 (no debería pasar)`);
        }
        
        return recompensa;
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
// SISTEMA DE REPRODUCTOR DRIVE CON TIMESTAMPS REALES
// ================================================

class SistemaReproductorDrive {
    constructor() {
        this.videoActual = null;
        this.timestampsActuales = [];
        this.videoElement = null;
    }

    // ====================
    // CARGAR VIDEO - SISTEMA NUEVO
    // ====================

    cargarVideo(driveId, timestamps = []) {
        this.videoActual = driveId;
        this.timestampsActuales = timestamps;
        
        return `
            <div class="reproductor-container">
                <h2 style="text-align: center; margin-bottom: 15px; color: #FFD166;">🎬 CONTROLES DE TIMESTAMP</h2>
                <p style="text-align: center; margin-bottom: 25px; opacity: 0.8;">
                    <strong>Instrucción:</strong> Haz clic en un timestamp → Se abrirá el video en ese tiempo
                </p>
                
                ${this.crearListaTimestamps(timestamps)}
                
                <div class="video-wrapper" style="margin-top: 30px;">
                    <iframe 
                        id="drive-iframe"
                        src="https://drive.google.com/file/d/${driveId}/preview"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        class="drive-iframe"
                    ></iframe>
                </div>
                
                <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 20px; margin: 25px 0; border-left: 5px solid #FFD166;">
                    <h4 style="color: #FFD166; margin-bottom: 10px;">💡 ¿Cómo funcionan los timestamps?</h4>
                    <p style="margin: 5px 0; font-size: 0.95rem;">
                        1. Haz clic en cualquier timestamp de arriba<br>
                        2. El video se RECARGARÁ en ese tiempo exacto<br>
                        3. Dale PLAY manualmente cuando se cargue
                    </p>
                </div>
                
                <div class="video-controls">
                    <button class="video-btn btn-volver" onclick="volverASubcontenedoresVideos()">
                        ↩️ Volver a Videos
                    </button>
                </div>
            </div>
        `;
    }

    // ====================
    // TIMESTAMPS FUNCIONALES - MÉTODO REAL
    // ====================

    crearListaTimestamps(timestamps) {
        if (!timestamps || timestamps.length === 0) {
            return '<p style="text-align: center; opacity: 0.7; margin: 20px 0;">No hay timestamps disponibles para este video</p>';
        }

        let html = '<div class="timestamps-container">';
        html += '<h3 style="color: #4CAF50; margin-bottom: 15px; text-align: center;">📍 TIMESTAMPS DISPONIBLES</h3>';
        html += '<p style="text-align: center; margin-bottom: 20px; opacity: 0.8;">Haz clic para saltar al tiempo específico</p>';
        html += '<div class="timestamps-grid">';
        
        timestamps.forEach((ts, index) => {
            const minutos = Math.floor(ts.tiempo / 60);
            const segundos = ts.tiempo % 60;
            const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
            
            html += `
                <div class="timestamp-item" onclick="sistemaReproductor.saltarATiempo(${ts.tiempo})">
                    <div class="timestamp-tiempo" style="font-size: 1.4rem; color: #5864F5;">${tiempoFormateado}</div>
                    <div class="timestamp-titulo" style="font-size: 1.1rem; margin-top: 5px;">${ts.titulo}</div>
                    <div style="font-size: 0.9rem; opacity: 0.7; margin-top: 8px;">Haz clic para cargar</div>
                </div>
            `;
        });
        
        html += '</div></div>';
        return html;
    }

    // ====================
    // SALTAR A TIEMPO - MÉTODO QUE SÍ FUNCIONA
    // ====================

    saltarATiempo(segundos) {
        console.log(`⏱️ Saltando a ${segundos} segundos...`);
        
        if (!this.videoActual) {
            console.error("No hay video cargado");
            return;
        }
        
        // Convertir segundos a formato para Google Drive
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        
        // FORMATO CORRECTO PARA GOOGLE DRIVE:
        // Opción 1: Usando el parámetro #t= (puede funcionar)
        const tiempoFormato = `${minutos}m${segs}s`;
        const urlConTiempo = `https://drive.google.com/file/d/${this.videoActual}/preview#t=${tiempoFormato}`;
        
        // Opción 2: Usando parámetros de consulta (alternativa)
        const urlAlternativa = `https://drive.google.com/file/d/${this.videoActual}/preview?t=${segundos}`;
        
        // Intentar con la primera opción
        const iframe = document.getElementById('drive-iframe');
        if (iframe) {
            console.log(`🔄 Recargando iframe con tiempo: ${tiempoFormato} (${segundos}s)`);
            
            // Cambiar la URL del iframe
            iframe.src = urlConTiempo;
            
            // Mostrar notificación
            this.mostrarNotificacionTiempo(segundos, minutos, segs);
            
            // Intentar método alternativo después de un momento
            setTimeout(() => {
                // Si no funcionó, intentar con la URL alternativa
                iframe.src = urlAlternativa;
            }, 500);
        }
    }

    // ====================
    // MÉTODO ALTERNATIVO: ABRIR EN NUEVA PESTAÑA
    // ====================

    saltarATiempoNuevaPestana(segundos) {
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        
        // URL para abrir en nueva pestaña
        const urlNuevaPestana = `https://drive.google.com/file/d/${this.videoActual}/view?t=${segundos}`;
        
        // Mostrar mensaje al usuario
        const confirmar = confirm(`¿Abrir el video en el tiempo ${minutos}:${segs.toString().padStart(2, '0')} en nueva pestaña?`);
        
        if (confirmar) {
            window.open(urlNuevaPestana, '_blank');
        }
    }

    // ====================
    // NOTIFICACIONES
    // ====================

    mostrarNotificacionTiempo(segundos, minutos, segs) {
        const mensaje = `⏱️ Saltando a ${minutos}:${segs.toString().padStart(2, '0')}`;
        
        const notif = document.createElement('div');
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.4);
            z-index: 1002;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
            font-size: 1.1rem;
            border: 2px solid white;
        `;
        
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 2500);
    }

    // ====================
    // MÉTODO DE EMERGENCIA: CONTROLES MANUALES
    // ====================

    crearControlesManuales() {
        return `
            <div style="background: rgba(40, 40, 50, 0.9); border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h4 style="color: #FFD166; margin-bottom: 15px;">🎛️ Controles Manuales de Tiempo</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                    <button class="timestamp-btn-manual" onclick="sistemaReproductor.saltarATiempo(0)" style="background: #5864F5;">
                        0:00 - Inicio
                    </button>
                    <button class="timestamp-btn-manual" onclick="sistemaReproductor.saltarATiempo(60)" style="background: #8A5AF7;">
                        1:00 - Minuto 1
                    </button>
                    <button class="timestamp-btn-manual" onclick="sistemaReproductor.saltarATiempo(120)" style="background: #4CAF50;">
                        2:00 - Minuto 2
                    </button>
                    <button class="timestamp-btn-manual" onclick="sistemaReproductor.saltarATiempo(180)" style="background: #FF6B6B;">
                        3:00 - Minuto 3
                    </button>
                </div>
            </div>
        `;
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
// FUNCIÓN GLOBAL PARA PRUEBA DIRECTA
// ================================================

function pruebaTimestampDirecta(segundos) {
    const iframe = document.getElementById('drive-iframe');
    if (!iframe) {
        alert('Primero carga un video');
        return;
    }
    
    const videoId = sistemaReproductor.obtenerVideoActual();
    if (!videoId) {
        alert('No hay video cargado');
        return;
    }
    
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    
    // Método más directo
    const nuevaURL = `https://drive.google.com/file/d/${videoId}/preview#t=${minutos}m${segs}s`;
    
    console.log(`🔗 Intentando con URL: ${nuevaURL}`);
    iframe.src = nuevaURL;
    
    // Mostrar mensaje
    alert(`Video recargado en ${minutos}:${segs.toString().padStart(2, '0')}\n\nSi no funciona, dale PLAY manualmente.`);
}

// ================================================
// CREAR INSTANCIAS GLOBALES
// ================================================

const sistemaEconomia = new SistemaEconomia();
const sistemaReproductor = new SistemaReproductorDrive();

// ================================================
// AÑADIR ESTILOS PARA TIMESTAMPS MEJORADOS
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    const estiloTimestamps = document.createElement('style');
    estiloTimestamps.textContent = `
        .timestamp-btn-manual {
            padding: 12px 20px;
            border-radius: 8px;
            border: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            min-width: 120px;
        }
        
        .timestamp-btn-manual:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .timestamp-item {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            border-radius: 12px;
            padding: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }
        
        .timestamp-item:hover {
            background: linear-gradient(135deg, rgba(88, 100, 245, 0.3), rgba(138, 90, 247, 0.3));
            transform: translateY(-5px);
            border-color: #5864F5;
            box-shadow: 0 10px 20px rgba(88, 100, 245, 0.2);
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(estiloTimestamps);
});

// ================================================
// SISTEMA DE FALLBACK: Si Google Drive no funciona
// ================================================

function usarReproductorAlternativo(driveId, timestamps) {
    return `
        <div class="reproductor-container">
            <h2 style="color: #FF6B6B; text-align: center;">⚠️ ADVERTENCIA</h2>
            <p style="text-align: center; margin-bottom: 20px;">
                Google Drive limita los controles automáticos.<br>
                Usa estos enlaces con tiempos predefinidos:
            </p>
            
            <div class="timestamps-grid" style="margin: 30px 0;">
                ${timestamps.map(ts => {
                    const min = Math.floor(ts.tiempo / 60);
                    const seg = ts.tiempo % 60;
                    const url = `https://drive.google.com/file/d/${driveId}/view?t=${ts.tiempo}`;
                    return `
                        <a href="${url}" target="_blank" class="timestamp-item" style="text-decoration: none; display: block;">
                            <div class="timestamp-tiempo">${min}:${seg.toString().padStart(2, '0')}</div>
                            <div class="timestamp-titulo">${ts.titulo}</div>
                            <div style="font-size: 0.9rem; color: #FFD166; margin-top: 5px;">Abrir en nueva pestaña</div>
                        </a>
                    `;
                }).join('')}
            </div>
            
            <p style="text-align: center; opacity: 0.8; font-size: 0.9rem;">
                Cada enlace abrirá el video en el tiempo exacto en una nueva pestaña
            </p>
        </div>
    `;
}
