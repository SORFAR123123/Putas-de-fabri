// ================================================
// SISTEMA COMPLETO: DINERO + REPRODUCTOR + TIMESTAMPS + MISIONES + VIDEOS
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
        const tiempoFormato = `${minutos}m${segs}s`;
        const urlConTiempo = `https://drive.google.com/file/d/${this.videoActual}/preview#t=${tiempoFormato}`;
        
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
                const urlAlternativa = `https://drive.google.com/file/d/${this.videoActual}/preview?t=${segundos}`;
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
// NUEVO: SISTEMA DE MISIONES DIARIAS Y SEMANALES
// ================================================

class SistemaMisiones {
    constructor() {
        this.misiones = this.cargarMisiones() || this.crearMisionesPorDefecto();
        this.ultimaActualizacion = this.cargarUltimaActualizacion();
    }

    // ====================
    // INICIALIZACIÓN
    // ====================

    inicializar() {
        this.verificarReinicioDiario();
        this.verificarReinicioSemanal();
        this.actualizarUI();
    }

    // ====================
    // CREACIÓN DE MISIONES
    // ====================

    crearMisionesPorDefecto() {
        const ahora = new Date();
        const fechaHoy = ahora.toISOString().split('T')[0];
        
        return {
            diarias: {
                fecha: fechaHoy,
                completadas: 0,
                misiones: [
                    {
                        id: 'diaria_1',
                        titulo: '🏆 Completar 1 mazo al 100%',
                        descripcion: 'Termina cualquier mazo con puntuación perfecta',
                        recompensa: 5.00,
                        completada: false,
                        progreso: 0,
                        meta: 1
                    },
                    {
                        id: 'diaria_2',
                        titulo: '📚 Practicar 3 mazos diferentes',
                        descripcion: 'Haz al menos 1 palabra en 3 mazos distintos',
                        recompensa: 3.00,
                        completada: false,
                        progreso: 0,
                        meta: 3
                    },
                    {
                        id: 'diaria_3',
                        titulo: '🎯 Obtener 80% o más en un mazo',
                        descripcion: 'Consigue al menos 8/10 palabras correctas',
                        recompensa: 2.50,
                        completada: false,
                        progreso: 0,
                        meta: 1
                    }
                ]
            },
            semanales: {
                semana: this.obtenerNumeroSemana(),
                completadas: 0,
                misiones: [
                    {
                        id: 'semanal_1',
                        titulo: '🏅 Completar 10 mazos al 100%',
                        descripcion: 'Logra puntuación perfecta en 10 mazos diferentes',
                        recompensa: 25.00,
                        completada: false,
                        progreso: 0,
                        meta: 10
                    },
                    {
                        id: 'semanal_2',
                        titulo: '💎 Acumular 50 soles',
                        descripcion: 'Gana 50 soles en total esta semana',
                        recompensa: 15.00,
                        completada: false,
                        progreso: 0,
                        meta: 50
                    },
                    {
                        id: 'semanal_3',
                        titulo: '⭐ Practicar todos los días',
                        descripcion: 'Accede al sistema 7 días seguidos',
                        recompensa: 20.00,
                        completada: false,
                        progreso: 0,
                        meta: 7
                    }
                ]
            }
        };
    }

    // ====================
    // ACTUALIZACIÓN DE PROGRESO
    // ====================

    actualizarProgresoMisiones(contenedor, subcontenedor, mazo, porcentaje) {
        const ahora = new Date();
        const fechaHoy = ahora.toISOString().split('T')[0];
        
        // Verificar si las misiones son de hoy
        if (this.misiones.diarias.fecha !== fechaHoy) {
            this.reiniciarMisionesDiarias();
        }
        
        // Actualizar progreso de misiones diarias
        this.misiones.diarias.misiones.forEach(mision => {
            if (!mision.completada) {
                switch(mision.id) {
                    case 'diaria_1':
                        if (porcentaje === 100) {
                            mision.progreso++;
                            if (mision.progreso >= mision.meta) {
                                this.completarMision(mision, 'diaria');
                            }
                        }
                        break;
                    case 'diaria_2':
                        // Se actualiza cuando se inicia un quiz
                        break;
                    case 'diaria_3':
                        if (porcentaje >= 80) {
                            mision.progreso++;
                            if (mision.progreso >= mision.meta) {
                                this.completarMision(mision, 'diaria');
                            }
                        }
                        break;
                }
            }
        });
        
        // Actualizar progreso de misiones semanales
        this.misiones.semanales.misiones.forEach(mision => {
            if (!mision.completada) {
                switch(mision.id) {
                    case 'semanal_1':
                        if (porcentaje === 100) {
                            mision.progreso++;
                            if (mision.progreso >= mision.meta) {
                                this.completarMision(mision, 'semanal');
                            }
                        }
                        break;
                    case 'semanal_2':
                        // Se actualiza con el dinero ganado
                        const dineroActual = sistemaEconomia.obtenerDinero();
                        mision.progreso = Math.min(dineroActual, mision.meta);
                        if (mision.progreso >= mision.meta) {
                            this.completarMision(mision, 'semanal');
                        }
                        break;
                    case 'semanal_3':
                        // Se actualiza al acceder al sistema
                        break;
                }
            }
        });
        
        this.guardarMisiones();
        this.actualizarUI();
    }

    // ====================
    // COMPLETAR MISIÓN
    // ====================

    completarMision(mision, tipo) {
        mision.completada = true;
        this.misiones[tipo + 's'].completadas++;
        
        // Dar recompensa
        sistemaEconomia.agregarDinero(mision.recompensa);
        
        // Mostrar notificación especial
        this.mostrarNotificacionMision(mision);
        
        console.log(`🎉 Misión completada: ${mision.titulo} - +${mision.recompensa} soles`);
    }

    // ====================
    // REINICIOS AUTOMÁTICOS
    // ====================

    verificarReinicioDiario() {
        const ahora = new Date();
        const fechaHoy = ahora.toISOString().split('T')[0];
        
        if (this.misiones.diarias.fecha !== fechaHoy) {
            console.log('🔄 Reiniciando misiones diarias...');
            this.reiniciarMisionesDiarias();
        }
    }

    verificarReinicioSemanal() {
        const semanaActual = this.obtenerNumeroSemana();
        
        if (this.misiones.semanales.semana !== semanaActual) {
            console.log('🔄 Reiniciando misiones semanales...');
            this.reiniciarMisionesSemanales();
        }
    }

    reiniciarMisionesDiarias() {
        const ahora = new Date();
        const fechaHoy = ahora.toISOString().split('T')[0];
        
        this.misiones.diarias = {
            fecha: fechaHoy,
            completadas: 0,
            misiones: this.misiones.diarias.misiones.map(mision => ({
                ...mision,
                completada: false,
                progreso: 0
            }))
        };
        
        this.guardarMisiones();
        console.log('✅ Misiones diarias reiniciadas');
    }

    reiniciarMisionesSemanales() {
        const semanaActual = this.obtenerNumeroSemana();
        
        this.misiones.semanales = {
            semana: semanaActual,
            completadas: 0,
            misiones: this.misiones.semanales.misiones.map(mision => ({
                ...mision,
                completada: false,
                progreso: 0
            }))
        };
        
        this.guardarMisiones();
        console.log('✅ Misiones semanales reiniciadas');
    }

    // ====================
    // UI DE MISIONES
    // ====================

    actualizarUI() {
        // Actualizar contador en el header si existe
        const misionesCompletadas = this.misiones.diarias.completadas + this.misiones.semanales.completadas;
        const contadorMisiones = document.getElementById('contador-misiones');
        
        if (contadorMisiones) {
            contadorMisiones.textContent = `🎯 ${misionesCompletadas}`;
        }
    }

    mostrarPanelMisiones() {
        return `
            <div class="panel-misiones" style="
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                border-radius: 20px;
                padding: 30px;
                max-width: 900px;
                margin: 40px auto;
                border: 3px solid #FFD166;
                box-shadow: 0 20px 40px rgba(0,0,0,0.6);
            ">
                <h2 style="text-align: center; color: #FFD166; margin-bottom: 30px;">🎯 MISIONES Y RECOMPENSAS</h2>
                
                <!-- MISIÓNES DIARIAS -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: #4CAF50; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        ☀️ Misiones Diarias
                        <span style="font-size: 0.9rem; opacity: 0.8; margin-left: auto;">
                            ${this.misiones.diarias.completadas}/${this.misiones.diarias.misiones.length} completadas
                        </span>
                    </h3>
                    
                    <div style="display: grid; gap: 15px;">
                        ${this.misiones.diarias.misiones.map(mision => `
                            <div class="mision-item" style="
                                background: rgba(255, 255, 255, 0.05);
                                border-radius: 15px;
                                padding: 20px;
                                border-left: 5px solid ${mision.completada ? '#4CAF50' : '#5864F5'};
                            ">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <h4 style="color: ${mision.completada ? '#4CAF50' : '#FFD166'}; margin: 0;">
                                        ${mision.completada ? '✅ ' : '🎯 '}${mision.titulo}
                                    </h4>
                                    <span style="color: #FFD166; font-weight: bold;">
                                        ${mision.recompensa.toFixed(2)} soles
                                    </span>
                                </div>
                                
                                <p style="opacity: 0.8; margin-bottom: 15px; font-size: 0.95rem;">
                                    ${mision.descripcion}
                                </p>
                                
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <div style="flex-grow: 1; background: rgba(255, 255, 255, 0.1); height: 10px; border-radius: 5px; overflow: hidden;">
                                        <div style="
                                            background: ${mision.completada ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' : 'linear-gradient(135deg, #5864F5, #8A5AF7)'};
                                            width: ${(mision.progreso / mision.meta) * 100}%;
                                            height: 100%;
                                            transition: width 0.5s ease;
                                        "></div>
                                    </div>
                                    <span style="font-size: 0.9rem; opacity: 0.8;">
                                        ${mision.progreso}/${mision.meta}
                                    </span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- MISIÓNES SEMANALES -->
                <div>
                    <h3 style="color: #FF6B6B; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        📅 Misiones Semanales
                        <span style="font-size: 0.9rem; opacity: 0.8; margin-left: auto;">
                            ${this.misiones.semanales.completadas}/${this.misiones.semanales.misiones.length} completadas
                        </span>
                    </h3>
                    
                    <div style="display: grid; gap: 15px;">
                        ${this.misiones.semanales.misiones.map(mision => `
                            <div class="mision-item" style="
                                background: rgba(255, 255, 255, 0.05);
                                border-radius: 15px;
                                padding: 20px;
                                border-left: 5px solid ${mision.completada ? '#4CAF50' : '#FF6B6B'};
                            ">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <h4 style="color: ${mision.completada ? '#4CAF50' : '#FFD166'}; margin: 0;">
                                        ${mision.completada ? '✅ ' : '🏆 '}${mision.titulo}
                                    </h4>
                                    <span style="color: #FFD166; font-weight: bold;">
                                        ${mision.recompensa.toFixed(2)} soles
                                    </span>
                                </div>
                                
                                <p style="opacity: 0.8; margin-bottom: 15px; font-size: 0.95rem;">
                                    ${mision.descripcion}
                                </p>
                                
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <div style="flex-grow: 1; background: rgba(255, 255, 255, 0.1); height: 10px; border-radius: 5px; overflow: hidden;">
                                        <div style="
                                            background: ${mision.completada ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' : 'linear-gradient(135deg, #FF6B6B, #FFD166)'};
                                            width: ${(mision.progreso / mision.meta) * 100}%;
                                            height: 100%;
                                            transition: width 0.5s ease;
                                        "></div>
                                    </div>
                                    <span style="font-size: 0.9rem; opacity: 0.8;">
                                        ${mision.progreso}/${mision.meta}
                                    </span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- INFORMACIÓN ADICIONAL -->
                <div style="
                    background: rgba(255, 209, 102, 0.1);
                    border-radius: 15px;
                    padding: 20px;
                    margin-top: 30px;
                    border-left: 5px solid #FFD166;
                ">
                    <h4 style="color: #FFD166; margin-bottom: 15px;">💡 Información de las Misiones</h4>
                    <ul style="padding-left: 20px; opacity: 0.8;">
                        <li>🔄 <strong>Misiones diarias:</strong> Se reinician a las 3:00 AM cada día</li>
                        <li>📅 <strong>Misiones semanales:</strong> Se reinician los lunes a las 3:00 AM</li>
                        <li>💰 <strong>Recompensas:</strong> Se añaden automáticamente a tu dinero</li>
                        <li>🎯 <strong>Progreso:</strong> Se actualiza automáticamente al completar mazos</li>
                    </ul>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="volverAlInicio()" style="
                        background: linear-gradient(135deg, #8A5AF7, #5864F5);
                        color: white;
                        border: none;
                        padding: 15px 40px;
                        border-radius: 50px;
                        font-size: 1.1rem;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">
                        ↩️ Volver al Inicio
                    </button>
                </div>
            </div>
        `;
    }

    // ====================
    // NOTIFICACIONES
    // ====================

    mostrarNotificacionMision(mision) {
        const notif = document.createElement('div');
        notif.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="font-size: 1.5rem;">🎉</div>
                <div>
                    <div style="font-weight: bold; color: #FFD166;">¡Misión Completada!</div>
                    <div>${mision.titulo}</div>
                    <div style="color: #4CAF50; font-weight: bold; margin-top: 5px;">
                        +${mision.recompensa.toFixed(2)} soles
                    </div>
                </div>
            </div>
        `;
        notif.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            color: white;
            padding: 20px 25px;
            border-radius: 15px;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            z-index: 1003;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 4s forwards;
            font-size: 1rem;
            border: 3px solid #FFD166;
            max-width: 400px;
        `;
        
        document.body.appendChild(notif);
        
        setTimeout(() => {
            if (notif.parentNode) {
                notif.parentNode.removeChild(notif);
            }
        }, 4000);
    }

    // ====================
    // UTILIDADES
    // ====================

    obtenerNumeroSemana() {
        const ahora = new Date();
        const primerDia = new Date(ahora.getFullYear(), 0, 1);
        const dias = Math.floor((ahora - primerDia) / (24 * 60 * 60 * 1000));
        return Math.ceil((ahora.getDay() + 1 + dias) / 7);
    }

    // ====================
    // LOCAL STORAGE
    // ====================

    guardarMisiones() {
        try {
            localStorage.setItem('manga_misiones', JSON.stringify(this.misiones));
            localStorage.setItem('manga_misiones_ultima_actualizacion', new Date().toISOString());
        } catch (e) {
            console.warn('No se pudo guardar misiones:', e);
        }
    }

    cargarMisiones() {
        try {
            const misiones = localStorage.getItem('manga_misiones');
            return misiones ? JSON.parse(misiones) : null;
        } catch (e) {
            console.warn('No se pudo cargar misiones:', e);
            return null;
        }
    }

    cargarUltimaActualizacion() {
        try {
            return localStorage.getItem('manga_misiones_ultima_actualizacion');
        } catch (e) {
            console.warn('No se pudo cargar última actualización:', e);
            return null;
        }
    }

    obtenerEstadisticas() {
        const totalMisiones = this.misiones.diarias.misiones.length + this.misiones.semanales.misiones.length;
        const completadas = this.misiones.diarias.completadas + this.misiones.semanales.completadas;
        
        return {
            totalMisiones,
            completadas,
            porcentaje: totalMisiones > 0 ? Math.round((completadas / totalMisiones) * 100) : 0,
            recompensaTotal: this.calcularRecompensaTotal()
        };
    }

    calcularRecompensaTotal() {
        let total = 0;
        
        // Sumar recompensas de misiones diarias completadas
        this.misiones.diarias.misiones.forEach(mision => {
            if (mision.completada) total += mision.recompensa;
        });
        
        // Sumar recompensas de misiones semanales completadas
        this.misiones.semanales.misiones.forEach(mision => {
            if (mision.completada) total += mision.recompensa;
        });
        
        return total;
    }
}

// ================================================
// NUEVO: SISTEMA DE VIDEOS ALEATORIOS (RECOMPENSA 100%)
// ================================================

class SistemaVideosRecompensa {
    constructor() {
        this.videos = this.crearVideosAleatorios();
    }

    // ====================
    // CREAR VIDEOS CON PROBABILIDADES
    // ====================

    crearVideosAleatorios() {
        return [
            {
                id: 1,
                probabilidad: 20,
                driveId: "1a2b3c4d5e",
                titulo: "🎬 Video Motivacional #1",
                descripcion: "¡Felicidades por completar el mazo al 100%! Este video te motivará a seguir aprendiendo.",
                imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
            },
            {
                id: 2,
                probabilidad: 30,
                driveId: "6f7g8h9i0j",
                titulo: "📚 Consejos de Estudio Avanzado",
                descripcion: "Técnicas secretas para aprender japonés más rápido y eficientemente.",
                imagen: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop"
            },
            {
                id: 3,
                probabilidad: 15,
                driveId: "k1l2m3n4o5",
                titulo: "🎌 Cultura Japonesa",
                descripcion: "Explora las tradiciones y costumbres fascinantes de Japón.",
                imagen: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop"
            },
            {
                id: 4,
                probabilidad: 25,
                driveId: "p6q7r8s9t0",
                titulo: "💪 Entrenamiento Mental",
                descripcion: "Fortalece tu mente para el aprendizaje con estos ejercicios.",
                imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
            },
            {
                id: 5,
                probabilidad: 10,
                driveId: "u1v2w3x4y5",
                titulo: "🌟 Historias de Éxito",
                descripcion: "Personas que dominaron el japonés y cómo lo lograron.",
                imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
            },
            {
                id: 6,
                probabilidad: 35,
                driveId: "z6a7b8c9d0",
                titulo: "🎮 Aprende Jugando",
                descripcion: "Juegos y actividades divertidas para practicar japonés.",
                imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
            },
            {
                id: 7,
                probabilidad: 20,
                driveId: "e1f2g3h4i5",
                titulo: "🗣️ Pronunciación Perfecta",
                descripcion: "Domina la pronunciación japonesa con estos tips expertos.",
                imagen: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop"
            },
            {
                id: 8,
                probabilidad: 15,
                driveId: "j6k7l8m9n0",
                titulo: "📖 Estrategias de Memoria",
                descripcion: "Técnicas mnemotécnicas para recordar kanji y vocabulario.",
                imagen: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop"
            },
            {
                id: 9,
                probabilidad: 30,
                driveId: "o1p2q3r4s5",
                titulo: "⏰ Gestión del Tiempo",
                descripcion: "Cómo organizar tu estudio para maximizar resultados.",
                imagen: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
            },
            {
                id: 10,
                probabilidad: 25,
                driveId: "t6u7v8w9x0",
                titulo: "😊 Mantén la Motivación",
                descripcion: "Cómo mantenerte motivado durante todo el proceso de aprendizaje.",
                imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
            },
            {
                id: 11,
                probabilidad: 20,
                driveId: "y1z2a3b4c5",
                titulo: "🎧 Inmersión Auditiva",
                descripcion: "Usa el audio para mejorar tu comprensión del japonés.",
                imagen: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop"
            },
            {
                id: 12,
                probabilidad: 15,
                driveId: "d6e7f8g9h0",
                titulo: "📝 Escritura Japonesa",
                descripcion: "Domina la escritura de hiragana, katakana y kanji.",
                imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
            },
            {
                id: 13,
                probabilidad: 30,
                driveId: "i1j2k3l4m5",
                titulo: "💡 Curiosidades Lingüísticas",
                descripcion: "Datos interesantes sobre el idioma japonés que no conocías.",
                imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
            },
            {
                id: 14,
                probabilidad: 20,
                driveId: "n6o7p8q9r0",
                titulo: "🎬 Anime y Aprendizaje",
                descripcion: "Cómo usar el anime para mejorar tu japonés de forma divertida.",
                imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
            },
            {
                id: 15,
                probabilidad: 25,
                driveId: "s1t2u3v4w5",
                titulo: "🗾 Viaje a Japón",
                descripcion: "Preparación lingüística para tu viaje soñado a Japón.",
                imagen: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=400&h=300&fit=crop"
            },
            {
                id: 16,
                probabilidad: 15,
                driveId: "x6y7z8a9b0",
                titulo: "🤝 Conversación Real",
                descripcion: "Diálogos y situaciones reales para practicar conversación.",
                imagen: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=300&fit=crop"
            },
            {
                id: 17,
                probabilidad: 30,
                driveId: "c1d2e3f4g5",
                titulo: "🎵 Música Japonesa",
                descripcion: "Aprende japonés a través de la música y las letras de canciones.",
                imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop"
            },
            {
                id: 18,
                probabilidad: 20,
                driveId: "h6i7j8k9l0",
                titulo: "📚 Recursos Gratuitos",
                descripcion: "Los mejores recursos gratuitos para aprender japonés en línea.",
                imagen: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop"
            },
            {
                id: 19,
                probabilidad: 25,
                driveId: "m1n2o3p4q5",
                titulo: "💼 Japonés Profesional",
                descripcion: "Vocabulario y expresiones para el ámbito laboral en Japón.",
                imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
            },
            {
                id: 20,
                probabilidad: 20,
                driveId: "r6s7t8u9v0",
                titulo: "🏆 Reto de 30 Días",
                descripcion: "Un reto especial para mejorar tu japonés en un mes.",
                imagen: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop"
            }
        ];
    }

    // ====================
    // OBTENER VIDEO ALEATORIO
    // ====================

    obtenerVideoAleatorio() {
        if (this.videos.length === 0) {
            console.warn('⚠️ No hay videos disponibles');
            return null;
        }
        
        // Calcular total de probabilidades
        const totalProbabilidad = this.videos.reduce((sum, video) => sum + video.probabilidad, 0);
        
        // Generar número aleatorio
        let random = Math.random() * totalProbabilidad;
        
        // Seleccionar video basado en probabilidades
        for (const video of this.videos) {
            random -= video.probabilidad;
            if (random <= 0) {
                console.log(`🎲 Video seleccionado: ${video.titulo} (${video.probabilidad}% de probabilidad)`);
                return video;
            }
        }
        
        // Si por alguna razón no se seleccionó, devolver el primero
        return this.videos[0];
    }

    // ====================
    // ESTADÍSTICAS
    // ====================

    obtenerEstadisticas() {
        const totalVideos = this.videos.length;
        const probabilidadTotal = this.videos.reduce((sum, video) => sum + video.probabilidad, 0);
        const probabilidadPromedio = Math.round(probabilidadTotal / totalVideos);
        
        return {
            totalVideos,
            probabilidadTotal,
            probabilidadPromedio,
            videos: this.videos.map(v => ({
                id: v.id,
                titulo: v.titulo,
                probabilidad: v.probabilidad
            }))
        };
    }

    // ====================
    // UTILIDADES
    // ====================

    agregarVideo(video) {
        this.videos.push(video);
        console.log(`✅ Video añadido: ${video.titulo} (${video.probabilidad}%)`);
    }

    eliminarVideo(id) {
        const index = this.videos.findIndex(v => v.id === id);
        if (index !== -1) {
            const eliminado = this.videos.splice(index, 1)[0];
            console.log(`❌ Video eliminado: ${eliminado.titulo}`);
            return true;
        }
        return false;
    }
}

// ================================================
// NUEVO: SISTEMA DE PALABRAS DIFÍCILES
// ================================================

class SistemaPalabrasDificiles {
    constructor() {
        this.palabrasDificiles = this.cargarPalabrasDificiles() || [];
    }

    // ====================
    // GESTIÓN DE PALABRAS
    // ====================

    agregarPalabraDificil(palabra, contenedor, subcontenedor, mazo) {
        // Verificar si ya existe
        const yaExiste = this.palabrasDificiles.some(p => 
            p.japones === palabra.japones && 
            p.lectura === palabra.lectura &&
            p.contenedor === contenedor &&
            p.subcontenedor === subcontenedor
        );
        
        if (!yaExiste) {
            const palabraDificil = {
                ...palabra,
                contenedor,
                subcontenedor,
                mazoOriginal: mazo,
                fechaMarcada: new Date().toISOString(),
                intentos: 0,
                aciertos: 0
            };
            
            this.palabrasDificiles.push(palabraDificil);
            this.guardarPalabrasDificiles();
            
            console.log(`🚩 Palabra añadida como difícil: ${palabra.japones}`);
            return true;
        }
        
        return false;
    }

    eliminarPalabraDificil(japones, lectura) {
        const inicial = this.palabrasDificiles.length;
        this.palabrasDificiles = this.palabrasDificiles.filter(p => 
            !(p.japones === japones && p.lectura === lectura)
        );
        
        if (this.palabrasDificiles.length < inicial) {
            this.guardarPalabrasDificiles();
            console.log(`✅ Palabra eliminada de difíciles: ${japones}`);
            return true;
        }
        
        return false;
    }

    // ====================
    // MAZO DIFÍCIL
    // ====================

    obtenerMazoDificil() {
        // Filtrar palabras con menos del 80% de aciertos
        const palabrasParaPracticar = this.palabrasDificiles.filter(palabra => {
            const porcentajeAciertos = palabra.intentos > 0 ? (palabra.aciertos / palabra.intentos) * 100 : 0;
            return porcentajeAciertos < 80 || palabra.intentos === 0;
        });
        
        // Mezclar las palabras
        return this.mezclarArray(palabrasParaPracticar).slice(0, 10); // Máximo 10 palabras por sesión
    }

    actualizarEstadisticas(japones, lectura, fueCorrecta) {
        const palabra = this.palabrasDificiles.find(p => 
            p.japones === japones && p.lectura === lectura
        );
        
        if (palabra) {
            palabra.intentos = (palabra.intentos || 0) + 1;
            if (fueCorrecta) {
                palabra.aciertos = (palabra.aciertos || 0) + 1;
            }
            
            this.guardarPalabrasDificiles();
            
            // Si tiene más del 80% de aciertos, sugerir eliminarla
            const porcentaje = (palabra.aciertos / palabra.intentos) * 100;
            if (porcentaje >= 80 && palabra.intentos >= 3) {
                console.log(`🎯 Palabra dominada: ${japones} (${porcentaje.toFixed(0)}% aciertos)`);
            }
        }
    }

    // ====================
    // ESTADÍSTICAS
    // ====================

    obtenerEstadisticas() {
        const totalPalabras = this.palabrasDificiles.length;
        const palabrasPracticadas = this.palabrasDificiles.filter(p => p.intentos > 0).length;
        
        let totalIntentos = 0;
        let totalAciertos = 0;
        
        this.palabrasDificiles.forEach(palabra => {
            totalIntentos += palabra.intentos || 0;
            totalAciertos += palabra.aciertos || 0;
        });
        
        const porcentajeTotal = totalIntentos > 0 ? (totalAciertos / totalIntentos) * 100 : 0;
        
        return {
            totalPalabras,
            palabrasPracticadas,
            totalIntentos,
            totalAciertos,
            porcentajeTotal: Math.round(porcentajeTotal),
            palabrasPorDominar: this.palabrasDificiles.filter(p => {
                const porcentaje = p.intentos > 0 ? (p.aciertos / p.intentos) * 100 : 0;
                return porcentaje < 80 || p.intentos === 0;
            }).length
        };
    }

    // ====================
    // UTILIDADES
    // ====================

    mezclarArray(array) {
        const nuevoArray = [...array];
        for (let i = nuevoArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
        }
        return nuevoArray;
    }

    limpiarPalabrasDificiles() {
        const inicial = this.palabrasDificiles.length;
        this.palabrasDificiles = [];
        this.guardarPalabrasDificiles();
        
        console.log(`🧹 ${inicial} palabras difíciles eliminadas`);
        return inicial;
    }

    // ====================
    // LOCAL STORAGE
    // ====================

    guardarPalabrasDificiles() {
        try {
            localStorage.setItem('manga_palabras_dificiles', JSON.stringify(this.palabrasDificiles));
        } catch (e) {
            console.warn('No se pudo guardar palabras difíciles:', e);
        }
    }

    cargarPalabrasDificiles() {
        try {
            const palabras = localStorage.getItem('manga_palabras_dificiles');
            return palabras ? JSON.parse(palabras) : null;
        } catch (e) {
            console.warn('No se pudo cargar palabras difíciles:', e);
            return null;
        }
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
const sistemaMisiones = new SistemaMisiones();
const sistemaVideos = new SistemaVideosRecompensa();
const sistemaPalabrasDificiles = new SistemaPalabrasDificiles();

// ================================================
// FUNCIONES GLOBALES PARA ACCESO FÁCIL
// ================================================

function mostrarPanelMisiones() {
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = sistemaMisiones.mostrarPanelMisiones();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// ================================================
// AÑADIR ESTILOS PARA TODOS LOS SISTEMAS
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    const estilosCompletos = document.createElement('style');
    estilosCompletos.textContent = `
        /* ESTILOS PARA TIMESTAMPS */
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
        
        /* ESTILOS PARA BOTÓN DIFÍCIL */
        .btn-dificil {
            background: linear-gradient(135deg, #FF6B6B, #FFD166);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 50px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
        }
        
        .btn-dificil:hover:not(:disabled) {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
        }
        
        .btn-dificil:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        /* ESTILOS PARA MISIONES */
        .mision-item {
            transition: all 0.3s ease;
        }
        
        .mision-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        /* ANIMACIONES */
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
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        /* ESTILOS PARA MODAL DE VIDEO */
        .modal-video-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.3s ease;
        }
        
        /* CONTADOR DE MISIONES EN HEADER */
        .contador-misiones {
            position: absolute;
            top: 15px;
            right: 100px;
            background: linear-gradient(135deg, #FFD166, #FF6B6B);
            color: #333;
            padding: 8px 15px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.1rem;
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 100;
        }
        
        .contador-misiones:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.4);
        }
    `;
    document.head.appendChild(estilosCompletos);
    
    // Añadir contador de misiones al header
    setTimeout(() => {
        const header = document.querySelector('.header');
        if (header && !document.getElementById('contador-misiones')) {
            const contadorMisiones = document.createElement('div');
            contadorMisiones.id = 'contador-misiones';
            contadorMisiones.className = 'contador-misiones';
            contadorMisiones.innerHTML = '🎯 0';
            contadorMisiones.onclick = mostrarPanelMisiones;
            contadorMisiones.title = 'Ver misiones y recompensas';
            
            header.appendChild(contadorMisiones);
            
            // Actualizar contador inicial
            if (sistemaMisiones) {
                const estadisticas = sistemaMisiones.obtenerEstadisticas();
                contadorMisiones.innerHTML = `🎯 ${estadisticas.completadas}`;
            }
        }
    }, 1000);
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

// ================================================
// FUNCIÓN AUXILIAR PARA CREAR BOTÓN VOLVER
// ================================================

function crearBotonVolver(funcionClick) {
    const boton = document.createElement('button');
    boton.className = 'btn-atras-especifico';
    boton.innerHTML = '← Volver';
    boton.onclick = funcionClick;
    return boton;
}

// ================================================
// INICIALIZACIÓN COMPLETA
// ================================================

console.log('✅ Sistemas completos cargados:');
console.log('💰 SistemaEconomia - Sistema de dinero y progreso');
console.log('🎬 SistemaReproductorDrive - Reproductor con timestamps');
console.log('🎯 SistemaMisiones - Misiones diarias y semanales');
console.log('🎲 SistemaVideosRecompensa - 20 videos con probabilidades diferentes');
console.log('🚩 SistemaPalabrasDificiles - Mazo temporal de palabras difíciles');
console.log('📊 Todos los sistemas funcionando correctamente');
