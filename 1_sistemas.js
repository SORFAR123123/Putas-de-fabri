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
    // MÉTODO UNIFICADO PARA CREAR REPRODUCTOR (Usado en 1_main.js)
    // ====================
    
    crearReproductorVideo(driveId, timestamps = [], titulo = "Video", descripcion = "", tipo) {
        this.videoActual = driveId;
        this.timestampsActuales = timestamps;
        
        let headerHTML = `
            <div style="text-align: center; margin-bottom: 25px;">
                <h2 style="color: ${tipo === 'anime' ? '#8A5AF7' : '#FFD166'}; margin-bottom: 10px;">
                    ${tipo === 'anime' ? '🎌' : '🎬'} ${titulo}
                </h2>
                <p style="opacity: 0.8; max-width: 700px; margin: 0 auto;">${descripcion}</p>
            </div>
        `;
        
        let videoEmbed = `
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
        `;
        
        let infoHTML = `
            <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 20px; margin: 25px 0; border-left: 5px solid #FFD166;">
                <h4 style="color: #FFD166; margin-bottom: 10px;">💡 ¿Cómo funcionan los timestamps?</h4>
                <p style="margin: 5px 0; font-size: 0.95rem;">
                    1. Haz clic en cualquier timestamp de abajo<br>
                    2. El video se **RECARGARÁ** en ese tiempo exacto (Google Drive puede ser lento, ¡ten paciencia!)<br>
                    3. Dale **PLAY** manualmente cuando se cargue
                </p>
            </div>
        `;
        
        return `<div class="reproductor-container">${headerHTML}${videoEmbed}${this.crearListaTimestamps(timestamps, driveId, tipo)}${infoHTML}</div>`;
    }

    crearVideoDiv(contenido) {
        const div = document.createElement('div');
        div.innerHTML = contenido;
        return div;
    }

    // ====================
    // TIMESTAMPS FUNCIONALES - MÉTODO REAL
    // ====================

    crearListaTimestamps(timestamps, driveId, tipo) {
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
            
            // Se usa el driveId pasado para asegurar que se usa el correcto
            html += `
                <div class="timestamp-item" onclick="sistemaReproductor.saltarATiempo(${ts.tiempo}, '${driveId}')">
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
    // SALTAR A TIEMPO - MÉTODO QUE SÍ FUNCIONA (Actualizado para DriveId dinámico)
    // ====================

    saltarATiempo(segundos, driveIdOverride = null) {
        const driveId = driveIdOverride || this.videoActual;
        
        if (!driveId) {
            console.error("No hay video cargado");
            return;
        }
        
        console.log(`⏱️ Saltando a ${segundos} segundos en ID: ${driveId}`);
        
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        
        // Formato para Google Drive usando fragment identifier
        const tiempoFormato = `${minutos}m${segs}s`;
        const urlConTiempo = `https://drive.google.com/file/d/${driveId}/preview#t=${tiempoFormato}`;
        
        // Formato alternativo usando query parameter
        const urlAlternativa = `https://drive.google.com/file/d/${driveId}/preview?t=${segundos}`;
        
        const iframe = document.getElementById('drive-iframe');
        if (iframe) {
            console.log(`🔄 Recargando iframe con tiempo: ${tiempoFormato} (${segundos}s)`);
            
            // 1. Intentar con la URL #t= (más probable que funcione)
            iframe.src = urlConTiempo;
            
            // Mostrar notificación
            this.mostrarNotificacionTiempo(segundos, minutos, segs);
            
            // 2. Fallback: Intentar con la URL ?t= después de un momento
            setTimeout(() => {
                if (iframe.src !== urlAlternativa) {
                    iframe.src = urlAlternativa;
                    console.log(`🔄 Fallback: Intentando con URL alternativa`);
                }
            }, 500);
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
    // Métodos Auxiliares
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
        
        .timestamps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px 0;
            max-width: 900px;
            margin: 0 auto;
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
        
        .drive-iframe {
            width: 100%;
            height: 450px; /* Tamaño fijo */
            border-radius: 15px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.5);
            background: #222;
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
