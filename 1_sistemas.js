// ================================================
// SISTEMA COMPLETO: DINERO + REPRODUCTOR + TIMESTAMPS + MISIONES + PALABRAS DIFÍCILES
// ================================================

class SistemaEconomia {
    constructor() {
        this.dinero = this.cargarDinero() || 0;
        this.progreso = this.cargarProgreso() || {};
        this.palabrasDificiles = this.cargarPalabrasDificiles() || {};
        this.misionesDiarias = this.cargarMisionesDiarias() || this.inicializarMisionesDiarias();
        this.misionesSemanales = this.cargarMisionesSemanales() || this.inicializarMisionesSemanales();
        this.ultimoReinicio = this.cargarUltimoReinicio() || new Date().toISOString();
        this.videosEspeciales = this.obtenerVideosEspeciales();
        this.verificarReinicioAutomatico();
    }

    // ====================
    // NUEVO: SISTEMA DE PALABRAS DIFÍCILES
    // ====================

    marcarPalabraComoDificil(contenedor, subcontenedor, mazo, palabraIndex, palabraData) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        
        if (!this.palabrasDificiles[clave]) {
            this.palabrasDificiles[clave] = [];
        }
        
        // Verificar si ya está marcada
        const yaMarcada = this.palabrasDificiles[clave].some(p => 
            p.index === palabraIndex && 
            p.japones === palabraData.japones
        );
        
        if (!yaMarcada) {
            this.palabrasDificiles[clave].push({
                index: palabraIndex,
                ...palabraData,
                fechaMarcado: new Date().toISOString()
            });
            
            this.guardarPalabrasDificiles();
            this.mostrarNotificacion(`⚠️ Palabra marcada como difícil: ${palabraData.japones}`);
            return true;
        }
        
        return false;
    }

    obtenerPalabrasDificilesMazo(contenedor, subcontenedor, mazo) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        return this.palabrasDificiles[clave] || [];
    }

    obtenerMazosConPalabrasDificiles() {
        const mazosConDificiles = {};
        
        Object.keys(this.palabrasDificiles).forEach(clave => {
            const palabras = this.palabrasDificiles[clave];
            if (palabras.length > 0) {
                mazosConDificiles[clave] = palabras;
            }
        });
        
        return mazosConDificiles;
    }

    crearMazoTemporalDificil(contenedor, subcontenedor, mazo) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        const palabras = this.palabrasDificiles[clave] || [];
        
        if (palabras.length === 0) {
            return null;
        }
        
        // Convertir palabras difíciles a formato de quiz
        const mazoTemporal = palabras.map(p => ({
            japones: p.japones,
            lectura: p.lectura,
            opciones: p.opciones || [
                p.espanol,
                "Opción incorrecta 1",
                "Opción incorrecta 2",
                "Opción incorrecta 3"
            ],
            respuesta: 0,
            esPalabraDificil: true,
            fechaMarcado: p.fechaMarcado
        }));
        
        return mazoTemporal;
    }

    limpiarPalabrasDificilesMazo(contenedor, subcontenedor, mazo) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        if (this.palabrasDificiles[clave]) {
            delete this.palabrasDificiles[clave];
            this.guardarPalabrasDificiles();
            return true;
        }
        return false;
    }

    // ====================
    // NUEVO: SISTEMA DE MISIONES DIARIAS/SEMANALES
    // ====================

    inicializarMisionesDiarias() {
        return {
            completados: 0,
            fecha: new Date().toISOString().split('T')[0],
            misiones: [
                { id: 'completar_1_mazo', objetivo: 1, completado: 0, recompensa: 5, descripcion: "Completar 1 mazo al 100%" },
                { id: 'completar_3_mazos', objetivo: 3, completado: 0, recompensa: 15, descripcion: "Completar 3 mazos al 100%" },
                { id: 'completar_5_mazos', objetivo: 5, completado: 0, recompensa: 30, descripcion: "Completar 5 mazos al 100%" },
                { id: 'ganar_50_soles', objetivo: 50, completado: 0, recompensa: 20, descripcion: "Ganar 50 soles estudiando" },
                { id: 'practicar_30_min', objetivo: 30, completado: 0, recompensa: 25, descripcion: "Practicar 30 minutos" }
            ]
        };
    }

    inicializarMisionesSemanales() {
        return {
            completados: 0,
            semana: this.obtenerNumeroSemana(),
            misiones: [
                { id: 'completar_20_mazos', objetivo: 20, completado: 0, recompensa: 100, descripcion: "Completar 20 mazos al 100%" },
                { id: 'completar_todas_misiones_diarias', objetivo: 5, completado: 0, recompensa: 150, descripcion: "Completar todas las misiones diarias" },
                { id: 'ganar_200_soles', objetivo: 200, completado: 0, recompensa: 200, descripcion: "Ganar 200 soles" },
                { id: 'subir_nivel_rpg_3', objetivo: 3, completado: 0, recompensa: 300, descripcion: "Subir 3 niveles en el RPG" },
                { id: 'practicar_5_horas', objetivo: 300, completado: 0, recompensa: 250, descripcion: "Practicar 5 horas esta semana" }
            ]
        };
    }

    obtenerNumeroSemana() {
        const fecha = new Date();
        const inicioAno = new Date(fecha.getFullYear(), 0, 1);
        const diferenciaMs = fecha - inicioAno;
        const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
        return Math.ceil((dias + inicioAno.getDay() + 1) / 7);
    }

    actualizarMisionDiaria(idMision, cantidad = 1) {
        const hoy = new Date().toISOString().split('T')[0];
        
        // Verificar si es nuevo día
        if (this.misionesDiarias.fecha !== hoy) {
            this.misionesDiarias = this.inicializarMisionesDiarias();
            this.guardarMisionesDiarias();
        }
        
        const mision = this.misionesDiarias.misiones.find(m => m.id === idMision);
        if (mision && !mision.completado) {
            mision.completado += cantidad;
            
            if (mision.completado >= mision.objetivo) {
                mision.completado = mision.objetivo;
                this.entregarRecompensaMision(mision.recompensa, `Misión diaria: ${mision.descripcion}`);
                this.misionesDiarias.completados++;
                this.mostrarNotificacion(`✅ Misión diaria completada: +${mision.recompensa} soles`);
            }
            
            this.guardarMisionesDiarias();
            return true;
        }
        return false;
    }

    actualizarMisionSemanal(idMision, cantidad = 1) {
        const semanaActual = this.obtenerNumeroSemana();
        
        // Verificar si es nueva semana
        if (this.misionesSemanales.semana !== semanaActual) {
            this.misionesSemanales = this.inicializarMisionesSemanales();
            this.guardarMisionesSemanales();
        }
        
        const mision = this.misionesSemanales.misiones.find(m => m.id === idMision);
        if (mision && !mision.completado) {
            mision.completado += cantidad;
            
            if (mision.completado >= mision.objetivo) {
                mision.completado = mision.objetivo;
                this.entregarRecompensaMision(mision.recompensa, `Misión semanal: ${mision.descripcion}`);
                this.misionesSemanales.completados++;
                this.mostrarNotificacion(`🎯 Misión semanal completada: +${mision.recompensa} soles`);
            }
            
            this.guardarMisionesSemanales();
            return true;
        }
        return false;
    }

    entregarRecompensaMision(cantidad, motivo) {
        this.agregarDinero(cantidad);
        console.log(`💰 Recompensa de misión: ${cantidad} soles - ${motivo}`);
    }

    verificarReinicioAutomatico() {
        const ahora = new Date();
        const hora = ahora.getHours();
        
        // Reiniciar a las 3 AM si ha pasado ese tiempo
        if (hora >= 3) {
            const ultimaFecha = new Date(this.ultimoReinicio);
            const hoy = new Date();
            
            // Si la última vez fue antes de hoy y ya pasó las 3 AM
            if (ultimaFecha.getDate() < hoy.getDate() || 
                ultimaFecha.getMonth() < hoy.getMonth() ||
                ultimaFecha.getFullYear() < hoy.getFullYear()) {
                
                this.reiniciarSistema();
                this.ultimoReinicio = ahora.toISOString();
                this.guardarUltimoReinicio();
            }
        }
    }

    reiniciarSistema() {
        console.log('🔄 Reiniciando sistema automático (3 AM)...');
        
        // Reiniciar palabras difíciles
        this.palabrasDificiles = {};
        this.guardarPalabrasDificiles();
        
        // Reiniciar misiones diarias
        this.misionesDiarias = this.inicializarMisionesDiarias();
        this.guardarMisionesDiarias();
        
        this.mostrarNotificacion('🔄 Sistema reiniciado (nuevo día)');
    }

    // ====================
    // NUEVO: VIDEOS ESPECIALES POR MAZO 100%
    // ====================

    obtenerVideosEspeciales() {
        return [
            { id: 1, probabilidad: 20, driveId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', titulo: "🎬 Video Especial 1", descripcion: "Recompensa por excelente trabajo" },
            { id: 2, probabilidad: 30, driveId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', titulo: "🎬 Video Especial 2", descripcion: "¡Felicidades por tu dedicación!" },
            { id: 3, probabilidad: 20, driveId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', titulo: "🎬 Video Especial 3", descripcion: "Recompensa secreta" },
            { id: 4, probabilidad: 10, driveId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', titulo: "🎬 Video Especial 4", descripcion: "¡Increíble desempeño!" },
            { id: 5, probabilidad: 5, driveId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', titulo: "🎬 Video Especial 5", descripcion: "Premio ultra raro" },
            { id: 6, probabilidad: 15, driveId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', titulo: "🎬 Video Especial 6", descripcion: "Recompensa de dedicación" },
            { id: 7, probabilidad: 25, driveId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', titulo: "🎬 Video Especial 7", descripcion: "¡Buen trabajo!" },
            { id: 8, probabilidad: 20, driveId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', titulo: "🎬 Video Especial 8", descripcion: "Premio especial" },
            { id: 9, probabilidad: 15, driveId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', titulo: "🎬 Video Especial 9", descripcion: "Recompensa aleatoria" },
            { id: 10, probabilidad: 10, driveId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', titulo: "🎬 Video Especial 10", descripcion: "¡Excelente!" },
            { id: 11, probabilidad: 5, driveId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', titulo: "🎬 Video Especial 11", descripcion: "Premio super raro" },
            { id: 12, probabilidad: 20, driveId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', titulo: "🎬 Video Especial 12", descripcion: "Recompensa motivacional" },
            { id: 13, probabilidad: 15, driveId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', titulo: "🎬 Video Especial 13", descripcion: "¡Sigue así!" },
            { id: 14, probabilidad: 10, driveId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', titulo: "🎬 Video Especial 14", descripcion: "Premio de esfuerzo" },
            { id: 15, probabilidad: 20, driveId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', titulo: "🎬 Video Especial 15", descripcion: "Recompensa especial" },
            { id: 16, probabilidad: 25, driveId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', titulo: "🎬 Video Especial 16", descripcion: "¡Increíble!" },
            { id: 17, probabilidad: 15, driveId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', titulo: "🎬 Video Especial 17", descripcion: "Premio de dedicación" },
            { id: 18, probabilidad: 10, driveId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', titulo: "🎬 Video Especial 18", descripcion: "Recompensa sorpresa" },
            { id: 19, probabilidad: 5, driveId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', titulo: "🎬 Video Especial 19", descripcion: "Premio ultra especial" },
            { id: 20, probabilidad: 30, driveId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', titulo: "🎬 Video Especial 20", descripcion: "¡Felicidades!" }
        ];
    }

    intentarMostrarVideoEspecial() {
        const random = Math.random() * 100;
        let acumulado = 0;
        
        for (const video of this.videosEspeciales) {
            acumulado += video.probabilidad;
            if (random <= acumulado) {
                return video;
            }
        }
        
        return null; // No mostrar video esta vez
    }

    mostrarVideoEspecialSiAplica(porcentaje) {
        if (porcentaje === 100) {
            const videoEspecial = this.intentarMostrarVideoEspecial();
            if (videoEspecial) {
                setTimeout(() => {
                    this.mostrarModalVideoEspecial(videoEspecial);
                }, 2000);
                return videoEspecial;
            }
        }
        return null;
    }

    mostrarModalVideoEspecial(video) {
        const modal = document.createElement('div');
        modal.className = 'modal-video-especial';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 2000;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.3s ease;
        `;
        
        modal.innerHTML = `
            <div style="background: rgba(30, 30, 40, 0.95); padding: 30px; border-radius: 20px; max-width: 800px; width: 90%; border: 3px solid #FFD166; position: relative;">
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="position: absolute; top: 15px; right: 15px; background: #FF6B6B; border: none; color: white; width: 30px; height: 30px; border-radius: 50%; font-weight: bold; cursor: pointer;">×</button>
                
                <h2 style="color: #FFD166; text-align: center; margin-bottom: 20px;">${video.titulo}</h2>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 25px;">${video.descripcion}</p>
                
                <div style="margin: 20px 0;">
                    <iframe 
                        src="https://drive.google.com/file/d/${video.driveId}/preview"
                        width="100%"
                        height="400"
                        frameborder="0"
                        style="border-radius: 15px;"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                    ></iframe>
                </div>
                
                <p style="text-align: center; opacity: 0.7; font-size: 0.9rem;">
                    🎉 ¡Felicidades por completar un mazo al 100%! Este es tu premio especial.
                </p>
                
                <div style="text-align: center; margin-top: 25px;">
                    <button onclick="this.parentElement.parentElement.remove()" 
                            style="background: linear-gradient(135deg, #4CAF50, #2E7D32); color: white; padding: 12px 30px; border: none; border-radius: 10px; cursor: pointer; font-weight: bold;">
                        ✅ Cerrar y Continuar
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    // ====================
    // DINERO (MODIFICADO PARA MISIONES)
    // ====================

    agregarDinero(cantidad) {
        this.dinero += cantidad;
        this.guardarDinero();
        
        if (cantidad > 0) {
            this.mostrarNotificacion(`+${cantidad.toFixed(2)} soles`);
            
            // Actualizar misiones de ganar dinero
            this.actualizarMisionDiaria('ganar_50_soles', cantidad);
            this.actualizarMisionSemanal('ganar_200_soles', cantidad);
        }
    }

    // ====================
    // PROGRESO DE MAZOS (MODIFICADO PARA MISIONES)
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
            
            // Actualizar misiones si es 100%
            if (porcentaje === 100) {
                this.actualizarMisionesPorMazoCompletado();
                
                // Intentar mostrar video especial
                this.mostrarVideoEspecialSiAplica(porcentaje);
            }
        }
        
        return this.progreso[clave];
    }

    actualizarMisionesPorMazoCompletado() {
        // Misiones diarias
        this.actualizarMisionDiaria('completar_1_mazo');
        this.actualizarMisionDiaria('completar_3_mazos');
        this.actualizarMisionDiaria('completar_5_mazos');
        
        // Misiones semanales
        this.actualizarMisionSemanal('completar_20_mazos');
        
        // Actualizar misión de completar todas las diarias
        const diariasCompletadas = this.misionesDiarias.completados;
        this.actualizarMisionSemanal('completar_todas_misiones_diarias', diariasCompletadas);
    }

    // ====================
    // LOCAL STORAGE NUEVO
    // ====================

    guardarPalabrasDificiles() {
        try {
            localStorage.setItem('palabras_dificiles', JSON.stringify(this.palabrasDificiles));
        } catch (e) {
            console.warn('No se pudo guardar palabras difíciles:', e);
        }
    }

    cargarPalabrasDificiles() {
        try {
            const palabras = localStorage.getItem('palabras_dificiles');
            return palabras ? JSON.parse(palabras) : {};
        } catch (e) {
            console.warn('No se pudo cargar palabras difíciles:', e);
            return {};
        }
    }

    guardarMisionesDiarias() {
        try {
            localStorage.setItem('misiones_diarias', JSON.stringify(this.misionesDiarias));
        } catch (e) {
            console.warn('No se pudo guardar misiones diarias:', e);
        }
    }

    cargarMisionesDiarias() {
        try {
            const misiones = localStorage.getItem('misiones_diarias');
            return misiones ? JSON.parse(misiones) : null;
        } catch (e) {
            console.warn('No se pudo cargar misiones diarias:', e);
            return null;
        }
    }

    guardarMisionesSemanales() {
        try {
            localStorage.setItem('misiones_semanales', JSON.stringify(this.misionesSemanales));
        } catch (e) {
            console.warn('No se pudo guardar misiones semanales:', e);
        }
    }

    cargarMisionesSemanales() {
        try {
            const misiones = localStorage.getItem('misiones_semanales');
            return misiones ? JSON.parse(misiones) : null;
        } catch (e) {
            console.warn('No se pudo cargar misiones semanales:', e);
            return null;
        }
    }

    guardarUltimoReinicio() {
        try {
            localStorage.setItem('ultimo_reinicio', this.ultimoReinicio);
        } catch (e) {
            console.warn('No se pudo guardar último reinicio:', e);
        }
    }

    cargarUltimoReinicio() {
        try {
            return localStorage.getItem('ultimo_reinicio');
        } catch (e) {
            console.warn('No se pudo cargar último reinicio:', e);
            return null;
        }
    }

    // ====================
    // MÉTODOS EXISTENTES (MANTENIDOS)
    // ====================

    obtenerDinero() {
        return this.dinero;
    }

    obtenerProgreso(contenedor, subcontenedor, mazo) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        return this.progreso[clave] || 0;
    }

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
        
        /* Estilos para modal de video especial */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        /* Estilos para palabras difíciles */
        .palabra-dificil-marcada {
            border-left: 5px solid #FF6B6B !important;
            background: rgba(255, 107, 107, 0.1) !important;
        }
        
        .btn-dificil {
            background: linear-gradient(135deg, #FF6B6B, #FFD166) !important;
            color: white !important;
            border: none !important;
            padding: 8px 15px !important;
            border-radius: 5px !important;
            cursor: pointer !important;
            font-size: 0.9rem !important;
            margin-top: 10px !important;
            transition: all 0.3s ease !important;
        }
        
        .btn-dificil:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3) !important;
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
