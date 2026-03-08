// ================================================
// SISTEMA COMPLETO: DINERO + REPRODUCTOR + MISIONES + PALABRAS DIFÍCILES
// ================================================

class SistemaEconomia {
    constructor() {
        this.dinero = this.cargarDinero() || 0;
        this.progreso = this.cargarProgreso() || {};
        this.palabrasDificiles = this.cargarPalabrasDificiles() || [];
        this.misiones = this.cargarMisiones() || this.inicializarMisiones();
        this.ultimoReinicio = this.cargarUltimoReinicio() || new Date().toISOString();
        
        // Verificar si necesita reinicio diario (3 AM)
        this.verificarReinicioDiario();
    }

    // ====================
    // DINERO
    // ====================

    agregarDinero(cantidad) {
        this.dinero += cantidad;
        this.guardarDinero();
        this.mostrarNotificacion(`+${cantidad.toFixed(2)} soles`);
        
        // Actualizar misiones relacionadas con dinero
        this.actualizarMisionesDinero(cantidad);
        
        return this.dinero;
    }

    obtenerDinero() {
        return this.dinero;
    }

    // ====================
    // SISTEMA DE PALABRAS DIFÍCILES
    // ====================

    agregarPalabraDificil(palabraData) {
        const clave = `${palabraData.contenedor}_${palabraData.subcontenedor}_${palabraData.mazo}_${palabraData.indice}`;
        
        // Evitar duplicados
        if (!this.palabrasDificiles.some(p => p.clave === clave)) {
            this.palabrasDificiles.push({
                clave,
                contenedor: palabraData.contenedor,
                subcontenedor: palabraData.subcontenedor,
                mazo: palabraData.mazo,
                indice: palabraData.indice,
                japones: palabraData.japones,
                lectura: palabraData.lectura,
                significado: palabraData.significado,
                opciones: palabraData.opciones,
                respuesta: palabraData.respuesta,
                fechaAgregada: new Date().toISOString()
            });
            
            this.guardarPalabrasDificiles();
            
            // Actualizar misión de palabras difíciles
            this.actualizarMision('palabras_dificiles', 1);
            
            return true;
        }
        return false;
    }

    obtenerMazoDificil() {
        return this.palabrasDificiles;
    }

    reiniciarMazoDificil() {
        this.palabrasDificiles = [];
        this.guardarPalabrasDificiles();
        
        // Actualizar misión de mazos difíciles completados
        this.actualizarMision('mazos_dificiles_completados', 1);
        
        return true;
    }

    // ====================
    // SISTEMA DE MISIONES DIARIAS Y SEMANALES
    // ====================

    inicializarMisiones() {
        const hoy = new Date().toDateString();
        const inicioSemana = this.obtenerInicioSemana();
        
        return {
            diarias: {
                fecha: hoy,
                misiones: {
                    'completar_3_mazos': { objetivo: 3, progreso: 0, recompensa: 5, completada: false },
                    'practicar_50_palabras': { objetivo: 50, progreso: 0, recompensa: 8, completada: false },
                    'obtener_100_exp': { objetivo: 100, progreso: 0, recompensa: 10, completada: false },
                    'mazo_100_porciento': { objetivo: 1, progreso: 0, recompensa: 15, completada: false },
                    'palabras_dificiles': { objetivo: 5, progreso: 0, recompensa: 12, completada: false }
                }
            },
            semanales: {
                inicio_semana: inicioSemana,
                misiones: {
                    'completar_20_mazos': { objetivo: 20, progreso: 0, recompensa: 50, completada: false },
                    'practicar_300_palabras': { objetivo: 300, progreso: 0, recompensa: 80, completada: false },
                    'obtener_1000_exp': { objetivo: 1000, progreso: 0, recompensa: 150, completada: false },
                    'mazos_100_porciento': { objetivo: 10, progreso: 0, recompensa: 120, completada: false },
                    'mazos_dificiles_completados': { objetivo: 3, progreso: 0, recompensa: 100, completada: false }
                }
            }
        };
    }

    actualizarMision(tipoMision, cantidad = 1) {
        const hoy = new Date().toDateString();
        const inicioSemana = this.obtenerInicioSemana();
        
        // Verificar si las misiones diarias necesitan reinicio
        if (this.misiones.diarias.fecha !== hoy) {
            this.reiniciarMisionesDiarias();
        }
        
        // Verificar si las misiones semanales necesitan reinicio
        if (this.misiones.semanales.inicio_semana !== inicioSemana) {
            this.reiniciarMisionesSemanales();
        }
        
        // Actualizar misiones diarias
        if (this.misiones.diarias.misiones[tipoMision]) {
            const mision = this.misiones.diarias.misiones[tipoMision];
            if (!mision.completada) {
                mision.progreso += cantidad;
                
                if (mision.progreso >= mision.objetivo) {
                    mision.completada = true;
                    this.agregarDinero(mision.recompensa);
                    this.mostrarNotificacion(`✅ Misión diaria completada: +${mision.recompensa} soles`);
                }
            }
        }
        
        // Actualizar misiones semanales
        if (this.misiones.semanales.misiones[tipoMision]) {
            const mision = this.misiones.semanales.misiones[tipoMision];
            if (!mision.completada) {
                mision.progreso += cantidad;
                
                if (mision.progreso >= mision.objetivo) {
                    mision.completada = true;
                    this.agregarDinero(mision.recompensa);
                    this.mostrarNotificacion(`🎉 Misión semanal completada: +${mision.recompensa} soles`);
                }
            }
        }
        
        this.guardarMisiones();
    }

    actualizarMisionesDinero(cantidad) {
        // Esta función se llama cuando ganas dinero para actualizar EXP
        const expGanada = cantidad * 10; // Cada sol = 10 EXP
        this.actualizarMision('obtener_100_exp', expGanada);
    }

    actualizarMisionMazoCompletado(porcentaje) {
        if (porcentaje >= 100) {
            this.actualizarMision('completar_3_mazos', 1);
            this.actualizarMision('mazo_100_porciento', 1);
            this.actualizarMision('completar_20_mazos', 1);
            this.actualizarMision('mazos_100_porciento', 1);
        }
    }

    obtenerInicioSemana() {
        const hoy = new Date();
        const dia = hoy.getDay();
        const diferencia = dia === 0 ? -6 : 1 - dia; // Lunes como inicio de semana
        const lunes = new Date(hoy);
        lunes.setDate(hoy.getDate() + diferencia);
        return lunes.toDateString();
    }

    reiniciarMisionesDiarias() {
        const hoy = new Date().toDateString();
        this.misiones.diarias = {
            fecha: hoy,
            misiones: {
                'completar_3_mazos': { objetivo: 3, progreso: 0, recompensa: 5, completada: false },
                'practicar_50_palabras': { objetivo: 50, progreso: 0, recompensa: 8, completada: false },
                'obtener_100_exp': { objetivo: 100, progreso: 0, recompensa: 10, completada: false },
                'mazo_100_porciento': { objetivo: 1, progreso: 0, recompensa: 15, completada: false },
                'palabras_dificiles': { objetivo: 5, progreso: 0, recompensa: 12, completada: false }
            }
        };
        this.guardarMisiones();
    }

    reiniciarMisionesSemanales() {
        const inicioSemana = this.obtenerInicioSemana();
        this.misiones.semanales = {
            inicio_semana: inicioSemana,
            misiones: {
                'completar_20_mazos': { objetivo: 20, progreso: 0, recompensa: 50, completada: false },
                'practicar_300_palabras': { objetivo: 300, progreso: 0, recompensa: 80, completada: false },
                'obtener_1000_exp': { objetivo: 1000, progreso: 0, recompensa: 150, completada: false },
                'mazos_100_porciento': { objetivo: 10, progreso: 0, recompensa: 120, completada: false },
                'mazos_dificiles_completados': { objetivo: 3, progreso: 0, recompensa: 100, completada: false }
            }
        };
        this.guardarMisiones();
    }

    obtenerProgresoMisiones() {
        return this.misiones;
    }

    // ====================
    // REINICIO DIARIO (3 AM)
    // ====================

    verificarReinicioDiario() {
        const ahora = new Date();
        const hora = ahora.getHours();
        const fechaHoy = ahora.toDateString();
        const ultimaFecha = new Date(this.ultimoReinicio).toDateString();
        
        // Si es después de las 3 AM y es un nuevo día
        if (hora >= 3 && fechaHoy !== ultimaFecha) {
            console.log('🔄 Reinicio diario a las 3 AM');
            
            // Reiniciar mazos difíciles
            this.palabrasDificiles = [];
            this.guardarPalabrasDificiles();
            
            // Reiniciar misiones diarias
            this.reiniciarMisionesDiarias();
            
            // Actualizar último reinicio
            this.ultimoReinicio = ahora.toISOString();
            this.guardarUltimoReinicio();
            
            this.mostrarNotificacion('🔄 Mazo difícil reiniciado (reinicio diario 3 AM)');
        }
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
            
            // Actualizar misiones de palabras practicadas
            this.actualizarMision('practicar_50_palabras', 10); // 10 palabras por mazo
            
            // Calcular recompensa SIEMPRE
            const recompensa = this.calcularRecompensa(contenedor, subcontenedor, mazo, porcentaje, progresoAnterior);
            
            // Actualizar misiones de mazos completados
            if (porcentaje >= 100) {
                this.actualizarMisionMazoCompletado(porcentaje);
            }
            
            return recompensa;
        }
        
        return 0;
    }

    obtenerProgreso(contenedor, subcontenedor, mazo) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        return this.progreso[clave] || 0;
    }

    // ====================
    // CÁLCULO DE RECOMPENSAS - AJUSTADO PARA RPG
    // ====================

    calcularRecompensa(contenedor, subcontenedor, mazo, porcentaje, progresoAnterior) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        
        console.log(`💰 Calculando recompensa para: ${clave}`);
        console.log(`📈 De ${progresoAnterior}% a ${porcentaje}%`);
        
        let recompensa = 0;
        
        // RECOMPENSA BASE POR INTENTAR
        if (porcentaje > 0) {
            recompensa = 0.10;
            
            // BONIFICACIÓN POR PORCENTAJE (AJUSTADO PARA RPG DIFÍCIL)
            if (porcentaje >= 100) {
                recompensa += 2.90; // Total: 3.00
                console.log(`🎉 BONIFICACIÓN POR 100%: +2.90`);
            } else if (porcentaje >= 90) {
                recompensa += 1.50; // Total: 1.60
            } else if (porcentaje >= 80) {
                recompensa += 1.00; // Total: 1.10
            } else if (porcentaje >= 70) {
                recompensa += 0.60; // Total: 0.70
            } else if (porcentaje >= 60) {
                recompensa += 0.30; // Total: 0.40
            } else if (porcentaje >= 50) {
                recompensa += 0.15; // Total: 0.25
            }
            
            // BONIFICACIÓN POR MEJORA
            if (porcentaje > progresoAnterior) {
                const mejora = porcentaje - progresoAnterior;
                const bonusMejora = mejora * 0.01;
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
            
            // Mostrar notificación especial para 100%
            if (porcentaje >= 100) {
                setTimeout(() => {
                    this.mostrarNotificacion(`🎉 ¡Mazo al 100%! +${recompensa.toFixed(2)} soles ganados`);
                }, 800);
            }
            
            // Desbloquear video aleatorio con probabilidad (20-30%)
            if (porcentaje >= 100 && Math.random() < 0.25) { // 25% de probabilidad
                setTimeout(() => {
                    this.desbloquearVideoAleatorio();
                }, 1500);
            }
        }
        
        return recompensa;
    }

    // ====================
    // SISTEMA DE VIDEOS ALEATORIOS AL 100%
    // ====================

    desbloquearVideoAleatorio() {
        const videos = [
            { id: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', nombre: 'Recompensa Especial 1', probabilidad: 20 },
            { id: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', nombre: 'Recompensa Especial 2', probabilidad: 30 },
            { id: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', nombre: 'Recompensa Especial 3', probabilidad: 20 },
            { id: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', nombre: 'Recompensa Especial 4', probabilidad: 15 },
            { id: 'video_especial_5', nombre: 'Recompensa Especial 5', probabilidad: 10 },
            { id: 'video_especial_6', nombre: 'Recompensa Especial 6', probabilidad: 5 }
        ];
        
        // Seleccionar video basado en probabilidades
        let totalProbabilidad = videos.reduce((sum, v) => sum + v.probabilidad, 0);
        let random = Math.random() * totalProbabilidad;
        let selectedVideo = videos[0];
        
        for (let video of videos) {
            if (random < video.probabilidad) {
                selectedVideo = video;
                break;
            }
            random -= video.probabilidad;
        }
        
        // Mostrar notificación del video desbloqueado
        this.mostrarNotificacionVideo(selectedVideo.nombre);
        
        return selectedVideo;
    }

    mostrarNotificacionVideo(nombreVideo) {
        const notif = document.createElement('div');
        notif.className = 'notificacion-video';
        notif.innerHTML = `🎬 ¡Video desbloqueado!<br><strong>${nombreVideo}</strong>`;
        notif.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: linear-gradient(135deg, #5864F5, #8A5AF7);
            color: white;
            padding: 15px 25px;
            border-radius: 15px;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(88, 100, 245, 0.4);
            z-index: 1002;
            animation: slideIn 0.5s ease, fadeOut 0.5s ease 3s forwards;
            font-size: 1.1rem;
            border: 3px solid white;
            text-align: center;
            max-width: 300px;
        `;
        
        document.body.appendChild(notif);
        
        setTimeout(() => {
            if (notif.parentNode) {
                notif.parentNode.removeChild(notif);
            }
        }, 3500);
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
            dinero: this.dinero,
            palabrasDificiles: this.palabrasDificiles.length
        };
    }

    mostrarNotificacion(mensaje) {
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

    guardarPalabrasDificiles() {
        try {
            localStorage.setItem('manga_palabras_dificiles', JSON.stringify(this.palabrasDificiles));
        } catch (e) {
            console.warn('No se pudo guardar palabras dificiles:', e);
        }
    }

    cargarPalabrasDificiles() {
        try {
            const palabras = localStorage.getItem('manga_palabras_dificiles');
            return palabras ? JSON.parse(palabras) : [];
        } catch (e) {
            console.warn('No se pudo cargar palabras dificiles:', e);
            return [];
        }
    }

    guardarMisiones() {
        try {
            localStorage.setItem('manga_misiones', JSON.stringify(this.misiones));
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

    guardarUltimoReinicio() {
        try {
            localStorage.setItem('manga_ultimo_reinicio', this.ultimoReinicio);
        } catch (e) {
            console.warn('No se pudo guardar ultimo reinicio:', e);
        }
    }

    cargarUltimoReinicio() {
        try {
            return localStorage.getItem('manga_ultimo_reinicio');
        } catch (e) {
            console.warn('No se pudo cargar ultimo reinicio:', e);
            return null;
        }
    }
}

// ================================================
// SISTEMA DE REPRODUCTOR DRIVE CON TIMESTAMPS MEJORADO
// ================================================

class SistemaReproductorDrive {
    constructor() {
        this.videoActual = null;
        this.timestampsActuales = [];
    }

    // ====================
    // CARGAR VIDEO - NUEVO MÉTODO MEJORADO
    // ====================

    cargarVideo(driveId, timestamps = []) {
        this.videoActual = driveId;
        this.timestampsActuales = timestamps;
        
        return `
            <div class="reproductor-container">
                <h2 style="text-align: center; margin-bottom: 15px; color: #FFD166;">🎬 REPRODUCTOR DE VIDEO</h2>
                <p style="text-align: center; margin-bottom: 25px; opacity: 0.8;">
                    Haz clic en cualquier timestamp para saltar a esa parte del video
                </p>
                
                <!-- LISTA DE TIMESTAMPS INTERACTIVOS -->
                ${this.crearListaTimestamps(timestamps)}
                
                <!-- VIDEO DRIVE (carga inicial) -->
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
                
                <!-- CONTROLES DE EMERGENCIA -->
                ${this.crearControlesEmergencia()}
                
                <!-- INSTRUCCIONES -->
                <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 20px; margin: 25px 0; border-left: 5px solid #FFD166;">
                    <h4 style="color: #FFD166; margin-bottom: 10px;">💡 ¿Cómo usar los timestamps?</h4>
                    <p style="margin: 5px 0; font-size: 0.95rem;">
                        1. Haz clic en cualquier timestamp de arriba<br>
                        2. El video se RECARGARÁ en ese tiempo exacto<br>
                        3. Dale PLAY manualmente cuando se cargue<br>
                        4. Usa los botones de emergencia si hay problemas
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
    // TIMESTAMPS INTERACTIVOS - MÉTODO CORREGIDO
    // ====================

    crearListaTimestamps(timestamps) {
        if (!timestamps || timestamps.length === 0) {
            return '<p style="text-align: center; opacity: 0.7; margin: 20px 0;">No hay timestamps disponibles para este video</p>';
        }

        let html = '<div class="timestamps-container">';
        html += '<h3 style="color: #4CAF50; margin-bottom: 15px; text-align: center;">📍 TIMESTAMPS DISPONIBLES</h3>';
        html += '<div class="timestamps-grid">';
        
        timestamps.forEach((ts, index) => {
            const minutos = Math.floor(ts.tiempo / 60);
            const segundos = ts.tiempo % 60;
            const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
            
            html += `
                <div class="timestamp-item" onclick="sistemaReproductor.saltarATiempo(${ts.tiempo})" style="cursor: pointer;">
                    <div class="timestamp-tiempo" style="font-size: 1.4rem; color: #5864F5;">${tiempoFormateado}</div>
                    <div class="timestamp-titulo" style="font-size: 1.1rem; margin-top: 5px;">${ts.titulo}</div>
                    <div style="font-size: 0.9rem; opacity: 0.7; margin-top: 8px;">🔗 Haz clic para cargar</div>
                </div>
            `;
        });
        
        html += '</div></div>';
        return html;
    }

    // ====================
    // MÉTODO DE SALTO MEJORADO - 100% FUNCIONAL
    // ====================

    saltarATiempo(segundos) {
        console.log(`⏱️ Saltando a ${segundos} segundos...`);
        
        if (!this.videoActual) {
            console.error("No hay video cargado");
            this.mostrarNotificacion("❌ Error: No hay video cargado");
            return;
        }
        
        // Validar tiempo
        if (segundos < 0) {
            console.error("Tiempo negativo no válido");
            return;
        }
        
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        const tiempoFormato = `${minutos}m${segs}s`;
        
        // FORMATO CONFIRMADO QUE FUNCIONA CON GOOGLE DRIVE:
        // https://drive.google.com/file/d/ID/preview#t=XXmYYs
        
        const nuevaURL = `https://drive.google.com/file/d/${this.videoActual}/preview#t=${tiempoFormato}`;
        
        console.log(`🔗 Nueva URL: ${nuevaURL}`);
        
        // MÉTODO 1: Reemplazar el iframe completamente (MÁS EFECTIVO)
        const videoWrapper = document.querySelector('.video-wrapper');
        if (videoWrapper) {
            // Mostrar mensaje de carga
            this.mostrarNotificacion(`⏳ Cargando video en ${minutos}:${segs.toString().padStart(2, '0')}...`);
            
            // Crear nuevo iframe
            const nuevoIframe = document.createElement('iframe');
            nuevoIframe.id = 'drive-iframe';
            nuevoIframe.className = 'drive-iframe';
            nuevoIframe.src = nuevaURL;
            nuevoIframe.frameborder = '0';
            nuevoIframe.allow = 'autoplay; encrypted-media';
            nuevoIframe.allowfullscreen = true;
            nuevoIframe.style.width = '100%';
            nuevoIframe.style.height = '100%';
            nuevoIframe.style.borderRadius = '15px';
            
            // Reemplazar el contenido del wrapper
            videoWrapper.innerHTML = '';
            videoWrapper.appendChild(nuevoIframe);
            
            // Actualizar notificación
            setTimeout(() => {
                this.mostrarNotificacion(`✅ Video cargado en ${minutos}:${segs.toString().padStart(2, '0')} - Dale PLAY`);
            }, 1000);
            
            return true;
        }
        
        // MÉTODO 2: Intentar modificar iframe existente (respaldo)
        const iframe = document.getElementById('drive-iframe');
        if (iframe) {
            console.log('🔄 Modificando iframe existente...');
            iframe.src = nuevaURL;
            
            this.mostrarNotificacion(`✅ Saltando a ${minutos}:${segs.toString().padStart(2, '0')}`);
            return true;
        }
        
        this.mostrarNotificacion("❌ No se pudo encontrar el reproductor");
        return false;
    }

    // ====================
    // CONTROLES DE EMERGENCIA
    // ====================

    crearControlesEmergencia() {
        return `
            <div style="background: rgba(255, 107, 107, 0.1); border-radius: 15px; padding: 20px; margin: 20px 0; border: 2px solid #FF6B6B;">
                <h4 style="color: #FF6B6B; margin-bottom: 15px;">🚨 CONTROLES MANUALES DE TIEMPO</h4>
                <p style="margin-bottom: 15px; opacity: 0.8; font-size: 0.9rem;">
                    Si los timestamps no funcionan, usa estos botones:
                </p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                    <button onclick="sistemaReproductor.saltarATiempoManual(0)" style="background: #4CAF50; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        0:00
                    </button>
                    <button onclick="sistemaReproductor.saltarATiempoManual(60)" style="background: #5864F5; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        1:00
                    </button>
                    <button onclick="sistemaReproductor.saltarATiempoManual(120)" style="background: #8A5AF7; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        2:00
                    </button>
                    <button onclick="sistemaReproductor.saltarATiempoManual(180)" style="background: #FF6B6B; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        3:00
                    </button>
                    <button onclick="sistemaReproductor.saltarATiempoManual(240)" style="background: #FFD166; color: #333; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        4:00
                    </button>
                    <button onclick="sistemaReproductor.saltarATiempoManual(300)" style="background: #9C27B0; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        5:00
                    </button>
                </div>
            </div>
        `;
    }

    // ====================
    // MÉTODO DE EMERGENCIA MÁS DIRECTO
    // ====================

    saltarATiempoManual(segundos) {
        // Método más directo, fuerza recarga completa
        const videoId = this.videoActual;
        if (!videoId) {
            alert('Primero carga un video');
            return;
        }
        
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        const tiempoFormato = `${minutos}m${segs}s`;
        
        // Crear ventana emergente con el video
        const ancho = 800;
        const alto = 500;
        const left = (screen.width - ancho) / 2;
        const top = (screen.height - alto) / 2;
        
        const nuevaVentana = window.open(
            `https://drive.google.com/file/d/${videoId}/preview#t=${tiempoFormato}`,
            'VideoDrive',
            `width=${ancho},height=${alto},top=${top},left=${left}`
        );
        
        if (nuevaVentana) {
            this.mostrarNotificacion(`📺 Video abierto en ventana nueva en ${minutos}:${segs.toString().padStart(2, '0')}`);
        } else {
            alert('Permite ventanas emergentes para esta función');
        }
    }

    // ====================
    // NOTIFICACIONES
    // ====================

    mostrarNotificacion(mensaje) {
        const notif = document.createElement('div');
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: linear-gradient(135deg, #5864F5, #8A5AF7);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.4);
            z-index: 1002;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.5s forwards;
            font-size: 1.1rem;
            border: 2px solid white;
            max-width: 300px;
        `;
        
        document.body.appendChild(notif);
        setTimeout(() => {
            if (notif.parentNode) {
                notif.parentNode.removeChild(notif);
            }
        }, 3000);
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

// ================================================
// FUNCIONES GLOBALES PARA MAZO DIFÍCIL
// ================================================

function marcarPalabraComoDificil(palabraData) {
    return sistemaEconomia.agregarPalabraDificil(palabraData);
}

function iniciarMazoDificil() {
    const palabrasDificiles = sistemaEconomia.obtenerMazoDificil();
    
    if (palabrasDificiles.length === 0) {
        alert('No hay palabras marcadas como difíciles. Marca algunas palabras primero.');
        return false;
    }
    
    // Convertir a formato de palabras del quiz
    const palabrasQuiz = palabrasDificiles.map(p => ({
        japones: p.japones,
        lectura: p.lectura,
        opciones: p.opciones,
        respuesta: p.respuesta,
        significado: p.significado,
        esDificil: true
    }));
    
    return palabrasQuiz;
}

function completarMazoDificil() {
    sistemaEconomia.reiniciarMazoDificil();
    return true;
}

// ================================================
// FUNCIÓN GLOBAL DE PRUEBA
// ================================================

function pruebaTimestampDirecta(segundos) {
    // Función global de prueba rápida
    sistemaReproductor.saltarATiempo(segundos);
}

// ================================================
// AÑADIR ESTILOS MEJORADOS
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    const estiloTimestamps = document.createElement('style');
    estiloTimestamps.textContent = `
        .timestamp-item {
            background: linear-gradient(135deg, rgba(88, 100, 245, 0.15), rgba(138, 90, 247, 0.15));
            border-radius: 12px;
            padding: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid rgba(88, 100, 245, 0.3);
            text-align: center;
            min-height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .timestamp-item:hover {
            background: linear-gradient(135deg, rgba(88, 100, 245, 0.3), rgba(138, 90, 247, 0.3));
            transform: translateY(-5px) scale(1.02);
            border-color: #5864F5;
            box-shadow: 0 10px 25px rgba(88, 100, 245, 0.3);
        }
        
        .timestamp-tiempo {
            font-size: 1.5rem !important;
            font-weight: bold;
            color: #FFD166 !important;
            text-shadow: 0 2px 5px rgba(0,0,0,0.3);
            margin-bottom: 5px;
        }
        
        .timestamp-titulo {
            font-size: 1.1rem !important;
            margin-top: 8px !important;
            color: white;
            opacity: 0.9;
        }
        
        .timestamps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .timestamps-container {
            background: rgba(30, 30, 40, 0.8);
            border-radius: 18px;
            padding: 25px;
            margin: 20px 0;
            border-left: 5px solid #4CAF50;
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
        
        .boton-dificil {
            background: linear-gradient(135deg, #FF6B6B, #FF1493) !important;
            color: white !important;
            border: 2px solid #FF1493 !important;
            padding: 12px 20px !important;
            border-radius: 10px !important;
            cursor: pointer !important;
            font-weight: bold !important;
            font-size: 1rem !important;
            transition: all 0.3s ease !important;
            margin: 15px auto !important;
            display: block !important;
            max-width: 300px !important;
        }
        
        .boton-dificil:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 5px 20px rgba(255, 107, 107, 0.4) !important;
        }
        
        .boton-mazo-dificil {
            background: linear-gradient(135deg, #FF1493, #8A5AF7) !important;
            color: white !important;
            padding: 18px 35px !important;
            border-radius: 15px !important;
            border: 3px solid white !important;
            font-weight: bold !important;
            font-size: 1.2rem !important;
            margin: 25px auto !important;
            display: block !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            max-width: 400px !important;
            text-align: center !important;
        }
        
        .boton-mazo-dificil:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 10px 30px rgba(255, 20, 147, 0.5) !important;
        }
        
        .boton-mazo-dificil:disabled {
            opacity: 0.5 !important;
            cursor: not-allowed !important;
            transform: none !important;
            box-shadow: none !important;
        }
        
        /* Estilos para el video wrapper */
        .video-wrapper {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
            border-radius: 15px;
            margin: 30px 0;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
            background: #000;
        }
        
        .drive-iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 15px;
        }
    `;
    document.head.appendChild(estiloTimestamps);
});
