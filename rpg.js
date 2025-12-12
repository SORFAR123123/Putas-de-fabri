// ================================================
// RPG COMPLETO: LAS QUINTILLIZAS NAKANO - REBALANCEADO
// ================================================

class QuintillizasRPG {
    constructor() {
        this.personajeSeleccionado = this.cargarPersonajeSeleccionado() || null;
        this.datosPersonajes = this.cargarDatosPersonajes() || this.inicializarDatosPersonajes();
        this.condones = this.cargarCondones() || 0;
        this.condonesEspeciales = this.cargarCondonesEspeciales() || 0;
        this.ultimaInteraccion = null;
    }

    // ====================
    // INICIALIZACIÓN CON IMÁGENES
    // ====================

    inicializar() {
        console.log('🎮 RPG Quintillizas REBALANCEADO inicializado');
        
        // Exponer funciones al global scope
        window.seleccionarPersonajeRPG = (personajeId) => this.seleccionarPersonajeUI(personajeId);
        window.intentarMomentoIntimoRPG = (personajeId, momentoId, tipoCondon = 'normal') => this.intentarMomentoIntimo(personajeId, momentoId, tipoCondon);
        window.comprarActividadRPG = (personajeId, actividadId) => this.comprarActividad(personajeId, actividadId);
        window.comprarCondonesRPG = (cantidad, tipo = 'normal') => this.comprarCondones(cantidad, tipo);
        window.cargarVideoNivel = (personajeId, nivel) => this.cargarVideoNivel(personajeId, nivel);
    }

    inicializarDatosPersonajes() {
        return {
            'ichika': {
                nombre: 'Ichika Nakano',
                color: '#FF6B8B',
                imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 1000, // Aumentado significativamente
                estadoAnimo: 'neutral',
                afinidad: 0,
                descripcion: 'La hermana mayor, responsable y coqueta. Le gusta cuidar a los demás.',
                dificultad: 'alta',
                probabilidadBase: 50,
                nivelRequeridoParaMomento: {
                    'beso': 5,
                    'abrazo': 3,
                    'caricia': 2,
                    'levantar_aire': 10,
                    'confesion_amor': 15,
                    'sexo_oral': 20, // NUEVO: Requiere nivel 20
                    'sexo_completo': 25 // NUEVO: Requiere nivel 25
                },
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'cafe_romantico', nombre: '☕ Café Romántico', costo: 500, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 50, exp: 200, descripcion: 'Tómate un café íntimo con Ichika', nivelRequerido: 5 },
                    { id: 'estudio_juntos', nombre: '📚 Estudio Juntos', costo: 300, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 40, exp: 150, descripcion: 'Estudia con Ichika después de clases', nivelRequerido: 3 },
                    { id: 'paseo_noche', nombre: '🌙 Paseo Nocturno', costo: 800, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 70, exp: 300, descripcion: 'Un romántico paseo bajo las estrellas', nivelRequerido: 10 }
                ],
                momentosIntimos: [
                    { 
                        id: 'beso', 
                        nombre: '💋 Beso Apasionado', 
                        condonesRequeridos: 1,
                        condonesEspecialesRequeridos: 0,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 50, 
                        exp: 100, 
                        descripcion: 'Un beso tierno y apasionado',
                        probabilidadExito: 60,
                        probabilidadBase: 50,
                        efectosEspeciales: []
                    },
                    { 
                        id: 'abrazo', 
                        nombre: '🤗 Abrazo Cálido', 
                        condonesRequeridos: 1,
                        condonesEspecialesRequeridos: 0,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 30, 
                        exp: 80, 
                        descripcion: 'Un abrazo largo y reconfortante',
                        probabilidadExito: 70,
                        probabilidadBase: 60
                    },
                    { 
                        id: 'caricia', 
                        nombre: '👐 Caricia Tierna', 
                        condonesRequeridos: 1,
                        condonesEspecialesRequeridos: 0,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 20, 
                        exp: 60, 
                        descripcion: 'Una caricia suave en la mejilla',
                        probabilidadExito: 80,
                        probabilidadBase: 70
                    },
                    { 
                        id: 'sexo_oral', 
                        nombre: '👅 Sexo Oral (Mamada)', 
                        condonesRequeridos: 2,
                        condonesEspecialesRequeridos: 1,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 120, 
                        exp: 400, 
                        descripcion: 'Ichika te da una mamada profunda',
                        probabilidadExito: 40,
                        probabilidadBase: 30,
                        efectosEspeciales: ['+50% probabilidad por 24h', '+100 EXP extra']
                    },
                    { 
                        id: 'sexo_completo', 
                        nombre: '🔥 Sexo Completo Anal', 
                        condonesRequeridos: 3,
                        condonesEspecialesRequeridos: 2,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 200, 
                        exp: 800, 
                        descripcion: 'Coito anal intenso con Ichika',
                        probabilidadExito: 30,
                        probabilidadBase: 20,
                        efectosEspeciales: ['+100% afinidad por 48h', '+500 EXP extra', 'Desbloquea escena especial']
                    }
                ]
            },
            'nino': {
                nombre: 'Nino Nakano',
                color: '#FFB347',
                imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 1200, // Aún más difícil
                estadoAnimo: 'tsundere',
                afinidad: -50,
                descripcion: 'Tsundere clásica, difícil de conquistar. Cocina increíblemente bien.',
                dificultad: 'muy-alta',
                probabilidadBase: 30,
                nivelRequeridoParaMomento: {
                    'beso': 8,
                    'abrazo': 5,
                    'caricia': 3,
                    'masaje_hombros': 12,
                    'declaracion': 20,
                    'sexo_oral': 25,
                    'sexo_completo': 30
                },
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'clases_cocina', nombre: '👩‍🍳 Clases de Cocina', costo: 600, videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', afinidad: 80, exp: 250, descripcion: 'Aprende a cocinar con Nino', nivelRequerido: 8 },
                    { id: 'pelicula_hogar', nombre: '🎬 Película en Casa', costo: 400, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 50, exp: 180, descripcion: 'Ve una película romántica en el sofá', nivelRequerido: 5 },
                    { id: 'concierto', nombre: '🎵 Concierto Juntos', costo: 1000, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 100, exp: 400, descripcion: 'Llévala a ver su banda favorita', nivelRequerido: 15 }
                ],
                momentosIntimos: [
                    { 
                        id: 'beso', 
                        nombre: '💋 Beso Tsundere', 
                        condonesRequeridos: 1,
                        condonesEspecialesRequeridos: 0,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 60, 
                        exp: 120, 
                        descripcion: 'Un beso a regañadientes',
                        probabilidadExito: 30,
                        probabilidadBase: 20
                    },
                    { 
                        id: 'sexo_oral', 
                        nombre: '👅 Sexo Oral Forzado', 
                        condonesRequeridos: 2,
                        condonesEspecialesRequeridos: 1,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 150, 
                        exp: 500, 
                        descripcion: 'Nino te chupa mientras se queja',
                        probabilidadExito: 25,
                        probabilidadBase: 15,
                        efectosEspeciales: ['+75% probabilidad por 24h', '+150 EXP extra']
                    },
                    { 
                        id: 'sexo_completo', 
                        nombre: '🔥 Sexo Duro Vaginal', 
                        condonesRequeridos: 3,
                        condonesEspecialesRequeridos: 2,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 250, 
                        exp: 1000, 
                        descripcion: 'Sexo vaginal intenso con Nino gritando',
                        probabilidadExito: 20,
                        probabilidadBase: 10,
                        efectosEspeciales: ['+150% afinidad por 48h', '+800 EXP extra', 'Desbloquea final especial']
                    }
                ]
            },
            'miku': {
                nombre: 'Miku Nakano',
                color: '#6A5ACD',
                imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 900,
                estadoAnimo: 'tímida',
                afinidad: 20,
                descripcion: 'Tímida y reservada, le gusta la historia japonesa y los audífonos.',
                dificultad: 'media',
                probabilidadBase: 60,
                nivelRequeridoParaMomento: {
                    'beso': 4,
                    'abrazo': 2,
                    'caricia': 1,
                    'manos_tomadas': 6,
                    'confesion_timida': 12,
                    'sexo_oral': 18,
                    'sexo_completo': 22
                },
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'visita_templo', nombre: '⛩️ Visita al Templo', costo: 200, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 30, exp: 120, descripcion: 'Visita un templo histórico con Miku', nivelRequerido: 2 },
                    { id: 'biblioteca', nombre: '📖 Tarde en Biblioteca', costo: 150, videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', afinidad: 20, exp: 80, descripcion: 'Estudia historia en la biblioteca', nivelRequerido: 1 },
                    { id: 'concierto_tradicional', nombre: '🎶 Concierto Tradicional', costo: 500, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 70, exp: 250, descripcion: 'Asiste a un concierto de música tradicional', nivelRequerido: 8 }
                ],
                momentosIntimos: [
                    { 
                        id: 'sexo_oral', 
                        nombre: '👅 Mamada Tímida', 
                        condonesRequeridos: 2,
                        condonesEspecialesRequeridos: 1,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 100, 
                        exp: 350, 
                        descripcion: 'Miku tímidamente te da una mamada',
                        probabilidadExito: 50,
                        probabilidadBase: 40,
                        efectosEspeciales: ['+40% probabilidad por 24h', '+80 EXP extra']
                    },
                    { 
                        id: 'sexo_completo', 
                        nombre: '🔥 Sexo Virginal', 
                        condonesRequeridos: 3,
                        condonesEspecialesRequeridos: 2,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 180, 
                        exp: 700, 
                        descripcion: 'Tomas la virginidad de Miku con cuidado',
                        probabilidadExito: 35,
                        probabilidadBase: 25,
                        efectosEspeciales: ['+80% afinidad por 48h', '+600 EXP extra', 'Desbloquea escena especial']
                    }
                ]
            },
            'yotsuba': {
                nombre: 'Yotsuba Nakano',
                color: '#4CAF50',
                imagen: 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 800,
                estadoAnimo: 'energica',
                afinidad: 60,
                descripcion: 'La más enérgica y deportista. Siempre lista para ayudar.',
                dificultad: 'media-baja',
                probabilidadBase: 70,
                nivelRequeridoParaMomento: {
                    'beso': 3,
                    'abrazo': 1,
                    'caricia': 1,
                    'levantar_aire': 5,
                    'confesion_alegre': 10,
                    'sexo_oral': 15,
                    'sexo_completo': 18
                },
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'partido_futbol', nombre: '⚽ Partido de Fútbol', costo: 250, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 40, exp: 150, descripcion: 'Juega un partido de fútbol con Yotsuba', nivelRequerido: 3 },
                    { id: 'voluntariado', nombre: '🤝 Día de Voluntariado', costo: 120, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 30, exp: 100, descripcion: 'Ayuda a otros junto a Yotsuba', nivelRequerido: 1 },
                    { id: 'carrera_atletismo', nombre: '🏃‍♀️ Carrera de Atletismo', costo: 400, videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', afinidad: 60, exp: 200, descripcion: 'Participa en una carrera juntos', nivelRequerido: 6 }
                ],
                momentosIntimos: [
                    { 
                        id: 'sexo_oral', 
                        nombre: '👅 Mamada Energética', 
                        condonesRequeridos: 2,
                        condonesEspecialesRequeridos: 1,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 90, 
                        exp: 300, 
                        descripcion: 'Yotsuba te da una mamada llena de energía',
                        probabilidadExito: 55,
                        probabilidadBase: 45,
                        efectosEspeciales: ['+60% probabilidad por 24h', '+120 EXP extra']
                    },
                    { 
                        id: 'sexo_completo', 
                        nombre: '🔥 Sexo Salvaje', 
                        condonesRequeridos: 3,
                        condonesEspecialesRequeridos: 2,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 160, 
                        exp: 600, 
                        descripcion: 'Sexo salvaje y lleno de energía con Yotsuba',
                        probabilidadExito: 45,
                        probabilidadBase: 35,
                        efectosEspeciales: ['+90% afinidad por 48h', '+500 EXP extra', 'Desbloquea logro especial']
                    }
                ]
            },
            'itsuki': {
                nombre: 'Itsuki Nakano',
                color: '#FFD166',
                imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 850,
                estadoAnimo: 'glotona',
                afinidad: 40,
                descripcion: 'La más glotona, le encanta comer. Es estudiosa y honesta.',
                dificultad: 'media-baja',
                probabilidadBase: 65,
                nivelRequeridoParaMomento: {
                    'beso': 3,
                    'abrazo': 1,
                    'caricia': 1,
                    'alimentacion': 5,
                    'confesion_dulce': 11,
                    'sexo_oral': 16,
                    'sexo_completo': 20
                },
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'buffet_ilimitado', nombre: '🍣 Buffet Ilimitado', costo: 700, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 80, exp: 280, descripcion: 'Llévala a un buffet de sushi', nivelRequerido: 7 },
                    { id: 'cocina_postres', nombre: '🍰 Clase de Postres', costo: 350, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 50, exp: 180, descripcion: 'Aprende a hacer postres con Itsuki', nivelRequerido: 4 },
                    { id: 'picnic_parque', nombre: '🧺 Picnic en el Parque', costo: 300, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 40, exp: 150, descripcion: 'Un picnic con mucha comida', nivelRequerido: 3 }
                ],
                momentosIntimos: [
                    { 
                        id: 'sexo_oral', 
                        nombre: '👅 Mamada con Sabor', 
                        condonesRequeridos: 2,
                        condonesEspecialesRequeridos: 1,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 85, 
                        exp: 320, 
                        descripcion: 'Itsuki te da una mamada mientras come algo dulce',
                        probabilidadExito: 60,
                        probabilidadBase: 50,
                        efectosEspeciales: ['+50% probabilidad por 24h', '+100 EXP extra']
                    },
                    { 
                        id: 'sexo_completo', 
                        nombre: '🔥 Sexo con Comida', 
                        condonesRequeridos: 3,
                        condonesEspecialesRequeridos: 2,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 170, 
                        exp: 650, 
                        descripcion: 'Sexo mientras Itsuki come, muy caliente',
                        probabilidadExito: 40,
                        probabilidadBase: 30,
                        efectosEspeciales: ['+100% afinidad por 48h', '+550 EXP extra', 'Desbloquea video especial']
                    }
                ]
            }
        };
    }

    // ====================
    // SISTEMA DE EXP Y NIVELES REBALANCEADO
    // ====================

    agregarEXP(personajeId, cantidad) {
        if (!this.personajeSeleccionado || this.personajeSeleccionado !== personajeId) {
            console.log(`⚠️ No se puede añadir EXP: Personaje ${personajeId} no coincide con seleccionado ${this.personajeSeleccionado}`);
            return false;
        }

        const personaje = this.datosPersonajes[personajeId];
        personaje.exp += cantidad;
        
        console.log(`🎮 ${personaje.nombre} +${cantidad} EXP (Total: ${personaje.exp}/${personaje.expNecesaria})`);
        
        if (personaje.exp >= personaje.expNecesaria) {
            this.subirNivel(personajeId);
        }
        
        this.guardarDatosPersonajes();
        
        // Actualizar misión semanal de subir nivel
        sistemaEconomia.actualizarMisionSemanal('subir_nivel_rpg_3');
        
        return true;
    }

    subirNivel(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        personaje.nivel += 1;
        personaje.exp = personaje.exp - personaje.expNecesaria;
        personaje.expNecesaria = Math.round(personaje.expNecesaria * 1.8); // Más difícil
        
        console.log(`🎉 ¡${personaje.nombre} subió al nivel ${personaje.nivel}!`);
        this.mostrarNotificacion(`🎉 ${personaje.nombre} nivel ${personaje.nivel}!`);
        
        this.desbloquearVideo(personajeId);
        this.guardarDatosPersonajes();
    }

    desbloquearVideo(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        const nivel = personaje.nivel;
        
        const videosPorNivel = {
            5: { id: 'primer_beso', nombre: 'Primer Beso', videoId: this.obtenerVideoIdPorNivel(personajeId, 1) },
            10: { id: 'primer_sexo_oral', nombre: 'Primera Mamada', videoId: this.obtenerVideoIdPorNivel(personajeId, 2) },
            15: { id: 'primer_sexo', nombre: 'Primera Vez', videoId: this.obtenerVideoIdPorNivel(personajeId, 3) },
            20: { id: 'sexo_especial', nombre: 'Sexo Especial', videoId: this.obtenerVideoIdPorNivel(personajeId, 4) },
            25: { id: 'final_especial', nombre: 'Final Especial', videoId: this.obtenerVideoIdPorNivel(personajeId, 5) }
        };
        
        if (videosPorNivel[nivel] && !personaje.videosDisponibles.some(v => v.id === videosPorNivel[nivel].id)) {
            personaje.videosDisponibles.push(videosPorNivel[nivel]);
            console.log(`🎥 Video desbloqueado: ${videosPorNivel[nivel].nombre}`);
            this.mostrarNotificacion(`🎬 ¡Video desbloqueado: ${videosPorNivel[nivel].nombre}!`);
        }
    }

    obtenerVideoIdPorNivel(personajeId, nivel) {
        const videos = {
            'ichika': ['1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe'],
            'nino': ['1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K'],
            'miku': ['1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS'],
            'yotsuba': ['1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl'],
            'itsuki': ['1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe']
        };
        
        return videos[personajeId][nivel - 1] || videos[personajeId][0];
    }

    // ====================
    // NUEVO: SISTEMA DE MOMENTOS ÍNTIMOS CON CONDONES ESPECIALES
    // ====================

    intentarMomentoIntimo(personajeId, momentoId, tipoCondon = 'normal') {
        const personaje = this.datosPersonajes[personajeId];
        const momento = personaje.momentosIntimos.find(m => m.id === momentoId);
        
        if (!momento) {
            this.mostrarNotificacion('❌ Momento íntimo no encontrado');
            return false;
        }
        
        // Verificar nivel requerido
        const nivelRequerido = personaje.nivelRequeridoParaMomento[momentoId];
        if (personaje.nivel < nivelRequerido) {
            this.mostrarNotificacion(`❌ Necesitas nivel ${nivelRequerido} para ${momento.nombre}`);
            return false;
        }
        
        // Verificar condones según tipo
        let tieneCondones = false;
        let condonesUsados = 0;
        
        if (tipoCondon === 'especial') {
            if (this.condonesEspeciales >= momento.condonesEspecialesRequeridos) {
                tieneCondones = true;
                condonesUsados = momento.condonesEspecialesRequeridos;
            }
        } else {
            if (this.condones >= momento.condonesRequeridos) {
                tieneCondones = true;
                condonesUsados = momento.condonesRequeridos;
            }
        }
        
        if (!tieneCondones) {
            const requeridos = tipoCondon === 'especial' ? 
                momento.condonesEspecialesRequeridos : momento.condonesRequeridos;
            this.mostrarNotificacion(`❌ Necesitas ${requeridos} condones ${tipoCondon === 'especial' ? 'especiales' : 'normales'}`);
            return false;
        }
        
        // Calcular probabilidad real con modificadores
        let probabilidadReal = this.calcularProbabilidadMomento(personaje, momento);
        
        // Bonificación por condones especiales
        if (tipoCondon === 'especial') {
            probabilidadReal += 40; // +40% de probabilidad
            this.mostrarNotificacion('✨ ¡Condón especial activado! +40% probabilidad');
        }
        
        const exito = Math.random() * 100 < probabilidadReal;
        
        if (exito) {
            // ÉXITO
            if (tipoCondon === 'especial') {
                this.condonesEspeciales -= condonesUsados;
            } else {
                this.condones -= condonesUsados;
            }
            this.guardarCondones();
            
            // Calcular recompensas
            let expGanada = momento.exp;
            let afinidadGanada = momento.afinidad;
            
            // Bonificación por condones especiales
            if (tipoCondon === 'especial') {
                expGanada = Math.round(expGanada * 1.5);
                afinidadGanada = Math.round(afinidadGanada * 1.3);
                this.mostrarNotificacion('✨ ¡Efecto especial! +50% EXP, +30% afinidad');
            }
            
            this.agregarEXP(personajeId, expGanada);
            personaje.afinidad += afinidadGanada;
            personaje.estadoAnimo = 'feliz';
            
            console.log(`✅ ¡${momento.nombre} exitoso con ${personaje.nombre}!`);
            this.mostrarNotificacion(`💖 ¡${momento.nombre} exitoso! +${afinidadGanada} afinidad, +${expGanada} EXP`);
            
            this.cargarVideoMomentoIntimo(personajeId, momento);
            
            return true;
        } else {
            // FALLO
            if (tipoCondon === 'especial') {
                this.condonesEspeciales -= condonesUsados;
            } else {
                this.condones -= condonesUsados;
            }
            this.guardarCondones();
            
            personaje.estadoAnimo = 'enojada';
            personaje.afinidad -= Math.floor(momento.afinidad / 3);
            
            console.log(`❌ ${momento.nombre} falló con ${personaje.nombre}`);
            this.mostrarNotificacion(`😠 ${momento.nombre} falló. ${personaje.nombre} se enojó.`);
            
            this.actualizarVistaConPersonaje();
            
            return false;
        }
    }

    // ====================
    // SISTEMA DE CONDONES ESPECIALES
    // ====================

    comprarCondones(cantidad, tipo = 'normal') {
        let costoPorCondon, costoTotal;
        
        if (tipo === 'especial') {
            costoPorCondon = 100; // 100 soles por condón especial
            costoTotal = cantidad * costoPorCondon;
        } else {
            costoPorCondon = 20;
            costoTotal = cantidad * costoPorCondon;
        }
        
        const dineroActual = sistemaEconomia.obtenerDinero();
        if (dineroActual < costoTotal) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return false;
        }
        
        sistemaEconomia.agregarDinero(-costoTotal);
        
        if (tipo === 'especial') {
            this.condonesEspeciales += cantidad;
            this.mostrarNotificacion(`✨ +${cantidad} condones especiales comprados (${costoTotal} soles)`);
        } else {
            this.condones += cantidad;
            this.mostrarNotificacion(`🛍️ +${cantidad} condones comprados (${costoTotal} soles)`);
        }
        
        this.guardarCondones();
        
        // Actualizar vista si estamos en vista de personaje
        if (this.personajeSeleccionado) {
            this.actualizarVistaConPersonaje();
        }
        
        return true;
    }

    // ====================
    // UI MODIFICADA PARA CONDONES ESPECIALES
    // ====================

    crearUIPersonaje() {
        if (!this.personajeSeleccionado) return '<p>Selecciona un personaje primero</p>';
        
        const personaje = this.datosPersonajes[this.personajeSeleccionado];
        const dinero = sistemaEconomia.obtenerDinero();
        
        let html = `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <!-- CABECERA PERSONAJE -->
                <div style="background: ${personaje.color}20; border-radius: 20px; padding: 30px; margin-bottom: 30px; border: 3px solid ${personaje.color};">
                    <div style="display: flex; align-items: center; gap: 25px; flex-wrap: wrap;">
                        <div style="position: relative;">
                            <img src="${personaje.imagen}" 
                                 alt="${personaje.nombre}"
                                 style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 5px solid ${personaje.color};">
                            <div style="position: absolute; bottom: -10px; right: -10px; background: ${personaje.color}; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 1.2rem; border: 3px solid white;">
                                Nivel ${personaje.nivel}
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <h1 style="color: ${personaje.color}; margin: 0 0 10px 0; font-size: 2.5rem;">
                                ${personaje.nombre}
                            </h1>
                            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                                <div>
                                    <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">AFINIDAD</div>
                                    <div style="font-size: 2rem; font-weight: bold; color: ${personaje.afinidad >= 0 ? '#4CAF50' : '#FF6B6B'}">
                                        ${personaje.afinidad >= 0 ? '+' : ''}${personaje.afinidad}
                                    </div>
                                </div>
                                <div>
                                    <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">DIFICULTAD</div>
                                    <div style="font-size: 1.5rem; font-weight: bold; text-transform: uppercase; color: ${this.obtenerColorDificultad(personaje.dificultad)}">
                                        ${personaje.dificultad}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- BARRA DE EXP -->
                    <div style="margin-top: 25px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span style="color: ${personaje.color}; font-weight: bold;">NIVEL ${personaje.nivel} → ${personaje.nivel + 1}</span>
                            <span style="color: ${personaje.color};">${personaje.exp}/${personaje.expNecesaria} EXP</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.1); height: 15px; border-radius: 10px; overflow: hidden;">
                            <div style="background: linear-gradient(135deg, ${personaje.color}, ${this.oscurecerColor(personaje.color)}); 
                                      width: ${(personaje.exp / personaje.expNecesaria) * 100}%; height: 100%;"></div>
                        </div>
                    </div>
                </div>
                
                <!-- TIENDA DE CONDONES MEJORADA -->
                <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🛍️ TIENDA DE CONDONES</h3>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                        <!-- CONDONES NORMALES -->
                        <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 10px; border: 1px solid rgba(76, 175, 80, 0.3);">
                            <h4 style="color: #4CAF50; margin-bottom: 15px;">🛒 Condones Normales</h4>
                            <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 15px;">
                                Para momentos íntimos básicos. Precio: S/.20 cada uno
                            </p>
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                <button class="card-button" onclick="comprarCondonesRPG(1, 'normal')" 
                                        style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                                    1 Condón - S/.20
                                </button>
                                <button class="card-button" onclick="comprarCondonesRPG(5, 'normal')" 
                                        style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                                    5 Condones - S/.100
                                </button>
                            </div>
                        </div>
                        
                        <!-- CONDONES ESPECIALES -->
                        <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 10px; border: 1px solid rgba(255, 215, 102, 0.3);">
                            <h4 style="color: #FFD166; margin-bottom: 15px;">✨ Condones Especiales 0.01</h4>
                            <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 15px;">
                                Ultra sensibles. +40% probabilidad, +50% EXP, +30% afinidad. Precio: S/.100 cada uno
                            </p>
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                <button class="card-button" onclick="comprarCondonesRPG(1, 'especial')" 
                                        style="background: linear-gradient(135deg, #FFD166, #FF6B6B);">
                                    1 Especial - S/.100
                                </button>
                                <button class="card-button" onclick="comprarCondonesRPG(3, 'especial')" 
                                        style="background: linear-gradient(135deg, #FFD166, #FF6B6B);">
                                    3 Especiales - S/.300
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="display: flex; justify-content: space-around;">
                            <div>
                                <div style="color: #4CAF50; font-size: 0.9rem;">CONDONES NORMALES</div>
                                <div style="font-size: 1.5rem; font-weight: bold;">${this.condones}</div>
                            </div>
                            <div>
                                <div style="color: #FFD166; font-size: 0.9rem;">CONDONES ESPECIALES</div>
                                <div style="font-size: 1.5rem; font-weight: bold;">${this.condonesEspeciales}</div>
                            </div>
                            <div>
                                <div style="color: #5864F5; font-size: 0.9rem;">DINERO</div>
                                <div style="font-size: 1.5rem; font-weight: bold; color: #FFD166;">S/.${dinero.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- MOMENTOS ÍNTIMOS CON SELECCIÓN DE CONDONES -->
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #FF1493;">
                    <h3 style="color: #FF1493; margin-bottom: 15px;">💖 MOMENTOS ÍNTIMOS (SEXO)</h3>
                    <p style="opacity: 0.8; margin-bottom: 20px;">
                        Intenta tener sexo con ${personaje.nombre.split(' ')[0]}. Cada intento cuesta condones.
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; margin-bottom: 20px;">
                        ${personaje.momentosIntimos.map(momento => {
                            const nivelRequerido = personaje.nivelRequeridoParaMomento[momento.id] || 1;
                            const nivelSuficiente = personaje.nivel >= nivelRequerido;
                            const tieneCondonesNormales = this.condones >= momento.condonesRequeridos;
                            const tieneCondonesEspeciales = this.condonesEspeciales >= momento.condonesEspecialesRequeridos;
                            const probabilidadNormal = this.calcularProbabilidadMomento(personaje, momento);
                            const probabilidadEspecial = probabilidadNormal + 40;
                            
                            return `
                                <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; border: 1px solid ${personaje.color}50;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                        <span style="font-weight: bold; font-size: 1.1rem;">${momento.nombre}</span>
                                        <span style="color: #FFD166; font-size: 0.9rem;">Nivel ${nivelRequerido}+</span>
                                    </div>
                                    <p style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 10px;">${momento.descripcion}</p>
                                    
                                    ${momento.efectosEspeciales && momento.efectosEspeciales.length > 0 ? `
                                        <div style="background: rgba(255, 215, 102, 0.1); padding: 8px; border-radius: 5px; margin-bottom: 10px;">
                                            <p style="color: #FFD166; font-size: 0.8rem; margin: 0;">
                                                ${momento.efectosEspeciales.join(', ')}
                                            </p>
                                        </div>
                                    ` : ''}
                                    
                                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 15px;">
                                        <span style="color: #4CAF50;">+${momento.afinidad} afinidad</span>
                                        <span style="color: #FFD166;">+${momento.exp} EXP</span>
                                    </div>
                                    
                                    <!-- SELECTOR DE TIPO DE CONDÓN -->
                                    <div style="margin-bottom: 15px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px;">
                                        <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                                            <div style="flex: 1; text-align: center;">
                                                <div style="font-size: 0.8rem; opacity: 0.8;">Normal</div>
                                                <div style="color: ${tieneCondonesNormales ? '#4CAF50' : '#FF6B6B'}; font-weight: bold;">
                                                    ${momento.condonesRequeridos} condón${momento.condonesRequeridos > 1 ? 'es' : ''}
                                                </div>
                                                <div style="font-size: 0.8rem; color: #4CAF50;">${probabilidadNormal}% éxito</div>
                                            </div>
                                            <div style="flex: 1; text-align: center;">
                                                <div style="font-size: 0.8rem; opacity: 0.8;">Especial</div>
                                                <div style="color: ${tieneCondonesEspeciales ? '#FFD166' : '#FF6B6B'}; font-weight: bold;">
                                                    ${momento.condonesEspecialesRequeridos} especial${momento.condonesEspecialesRequeridos > 1 ? 'es' : ''}
                                                </div>
                                                <div style="font-size: 0.8rem; color: #FFD166;">${probabilidadEspecial}% éxito</div>
                                            </div>
                                        </div>
                                        
                                        <!-- BOTONES DE INTENTO -->
                                        <div style="display: flex; gap: 5px;">
                                            <button class="card-button" 
                                                    onclick="intentarMomentoIntimoRPG('${this.personajeSeleccionado}', '${momento.id}', 'normal')"
                                                    style="flex: 1; padding: 8px; font-size: 0.9rem; background: ${tieneCondonesNormales && nivelSuficiente ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' : 'rgba(255,255,255,0.1)'};"
                                                    ${!tieneCondonesNormales || !nivelSuficiente ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                                                ${!nivelSuficiente ? `❌ Nivel ${nivelRequerido}` : !tieneCondonesNormales ? `❌ Faltan ${momento.condonesRequeridos}` : '💖 Normal'}
                                            </button>
                                            <button class="card-button" 
                                                    onclick="intentarMomentoIntimoRPG('${this.personajeSeleccionado}', '${momento.id}', 'especial')"
                                                    style="flex: 1; padding: 8px; font-size: 0.9rem; background: ${tieneCondonesEspeciales && nivelSuficiente ? 'linear-gradient(135deg, #FFD166, #FF6B6B)' : 'rgba(255,255,255,0.1)'};"
                                                    ${!tieneCondonesEspeciales || !nivelSuficiente ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                                                ${!nivelSuficiente ? `❌ Nivel ${nivelRequerido}` : !tieneCondonesEspeciales ? `❌ Faltan ${momento.condonesEspecialesRequeridos}` : '✨ Especial'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <!-- ACTIVIDADES ESPECIALES -->
                <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #FFD166;">
                    <h3 style="color: #FFD166; margin-bottom: 15px;">✨ ACTIVIDADES ESPECIALES</h3>
                    <p style="opacity: 0.8; margin-bottom: 20px;">
                        Actividades con ${personaje.nombre.split(' ')[0]}. Se pueden comprar siempre que tengas dinero.
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px;">
                        ${personaje.actividadesEspeciales.map(actividad => {
                            const puedeComprar = dinero >= actividad.costo;
                            const nivelSuficiente = personaje.nivel >= (actividad.nivelRequerido || 1);
                            
                            return `
                                <div style="display: flex; flex-direction: column; gap: 10px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border: 1px solid rgba(255, 209, 102, 0.3);">
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <span style="font-weight: bold; font-size: 1.1rem;">${actividad.nombre}</span>
                                        <span style="color: #FFD166; font-weight: bold;">S/.${actividad.costo}</span>
                                    </div>
                                    <p style="opacity: 0.7; font-size: 0.9rem; margin: 0;">${actividad.descripcion}</p>
                                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                                        <span style="color: #4CAF50;">+${actividad.afinidad} afinidad</span>
                                        <span style="color: #FFD166;">+${actividad.exp} EXP</span>
                                    </div>
                                    <div style="color: ${nivelSuficiente ? '#4CAF50' : '#FF6B6B'}; font-size: 0.8rem;">
                                        ${actividad.nivelRequerido ? `Nivel ${actividad.nivelRequerido}+` : ''}
                                    </div>
                                    
                                    <button class="card-button" onclick="comprarActividadRPG('${this.personajeSeleccionado}', '${actividad.id}')"
                                            style="padding: 12px 20px; font-size: 1rem; background: linear-gradient(135deg, #4CAF50, #2E7D32); margin-top: 10px; border: none; border-radius: 10px; color: white; cursor: pointer; font-weight: bold;"
                                            ${!puedeComprar || !nivelSuficiente ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                                        ${!nivelSuficiente ? `❌ Nivel ${actividad.nivelRequerido} requerido` : !puedeComprar ? '💰 DINERO INSUFICIENTE' : '✨ COMPRAR ACTIVIDAD'}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <!-- VIDEOS DESBLOQUEADOS -->
                <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🎬 VIDEOS DE SEXO DESBLOQUEADOS</h3>
                    ${personaje.videosDisponibles.length > 0 ? 
                        `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
                            ${personaje.videosDisponibles.map((video, index) => `
                                <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px; text-align: center; cursor: pointer; transition: all 0.3s ease; border: 1px solid rgba(88, 100, 245, 0.3);"
                                     onclick="cargarVideoNivel('${this.personajeSeleccionado}', ${index + 1})">
                                    <div style="font-size: 2rem; margin-bottom: 10px;">🎥</div>
                                    <div style="font-weight: bold;">${video.nombre}</div>
                                    <div style="font-size: 0.8rem; opacity: 0.7; margin-top: 5px;">Video de sexo</div>
                                </div>
                            `).join('')}
                        </div>` 
                        : `<p style="text-align: center; opacity: 0.7; padding: 20px;">
                            Aún no hay videos desbloqueados. ¡Sube de nivel teniendo sexo con ${personaje.nombre.split(' ')[0]}!
                        </p>`}
                </div>
            </div>
        `;
        
        return html;
    }

    // ====================
    // MÉTODOS AUXILIARES
    // ====================

    obtenerColorDificultad(dificultad) {
        const colores = {
            'muy-alta': '#FF6B6B',
            'alta': '#FF8E53',
            'media': '#FFD166',
            'media-baja': '#8A5AF7',
            'baja': '#4CAF50'
        };
        return colores[dificultad] || '#FFFFFF';
    }

    calcularProbabilidadMomento(personaje, momento) {
        let probabilidad = momento.probabilidadBase;
        
        // Ajustes por nivel (más difícil que antes)
        probabilidad += (personaje.nivel - 1) * 3;
        
        // Ajustes por afinidad
        probabilidad += Math.min(personaje.afinidad / 2, 30);
        
        // Ajustes por estado de ánimo
        const ajustesEstado = {
            'feliz': 20,
            'neutral': 0,
            'triste': -30,
            'enojada': -50,
            'tsundere': -40,
            'tímida': -20,
            'energica': 15,
            'glotona': 18
        };
        
        probabilidad += ajustesEstado[personaje.estadoAnimo] || 0;
        
        // Límites
        return Math.max(5, Math.min(90, Math.round(probabilidad)));
    }

    // ====================
    // LOCAL STORAGE PARA CONDONES ESPECIALES
    // ====================

    guardarCondones() {
        try {
            localStorage.setItem('rpg_condones', this.condones.toString());
            localStorage.setItem('rpg_condones_especiales', this.condonesEspeciales.toString());
        } catch (e) {
            console.warn('No se pudo guardar condones:', e);
        }
    }

    cargarCondones() {
        try {
            const condones = localStorage.getItem('rpg_condones');
            const especiales = localStorage.getItem('rpg_condones_especiales');
            return {
                normales: condones ? parseInt(condones) : 0,
                especiales: especiales ? parseInt(especiales) : 0
            };
        } catch (e) {
            console.warn('No se pudo cargar condones:', e);
            return { normales: 0, especiales: 0 };
        }
    }

    guardarCondonesEspeciales() {
        try {
            localStorage.setItem('rpg_condones_especiales', this.condonesEspeciales.toString());
        } catch (e) {
            console.warn('No se pudo guardar condones especiales:', e);
        }
    }

    cargarCondonesEspeciales() {
        try {
            const especiales = localStorage.getItem('rpg_condones_especiales');
            return especiales ? parseInt(especiales) : 0;
        } catch (e) {
            console.warn('No se pudo cargar condones especiales:', e);
            return 0;
        }
    }

    // ====================
    // MÉTODOS EXISTENTES (MANTENIDOS)
    // ====================

    cargarVideoMomentoIntimo(personajeId, momento) {
        const personaje = this.datosPersonajes[personajeId];
        
        this.mostrarReproductorVideo({
            driveId: momento.videoId,
            titulo: `${momento.nombre} - ${personaje.nombre}`,
            duracion: '3:30'
        }, personaje);
    }

    comprarActividad(personajeId, actividadId) {
        const personaje = this.datosPersonajes[personajeId];
        const actividad = personaje.actividadesEspeciales.find(a => a.id === actividadId);
        
        if (!actividad) {
            this.mostrarNotificacion('❌ Actividad no encontrada');
            return false;
        }
        
        // Verificar nivel requerido
        if (personaje.nivel < (actividad.nivelRequerido || 1)) {
            this.mostrarNotificacion(`❌ Necesitas nivel ${actividad.nivelRequerido} para esta actividad`);
            return false;
        }
        
        const dineroActual = sistemaEconomia.obtenerDinero();
        if (dineroActual < actividad.costo) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return false;
        }
        
        sistemaEconomia.agregarDinero(-actividad.costo);
        
        personaje.afinidad += actividad.afinidad;
        this.agregarEXP(personajeId, actividad.exp);
        personaje.estadoAnimo = 'feliz';
        
        console.log(`🎉 Actividad ${actividad.nombre} comprada para ${personaje.nombre}`);
        this.mostrarNotificacion(`💝 ${personaje.nombre} muy feliz! +${actividad.afinidad} afinidad, +${actividad.exp} EXP`);
        
        this.cargarVideoActividad(personajeId, actividadId);
        
        return true;
    }

    mostrarReproductorVideo(video, personaje) {
        const html = `
            <div class="reproductor-container" style="max-width: 800px; margin: 0 auto; padding: 30px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${personaje.imagen}" 
                         alt="${personaje.nombre}"
                         style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 4px solid ${personaje.color}; margin-bottom: 15px;">
                    <h2 style="color: ${personaje.color}; margin-bottom: 10px;">
                        🎬 ${video.titulo} - ${personaje.nombre}
                    </h2>
                    <p style="opacity: 0.8; margin-bottom: 10px;">
                        Nivel de ${personaje.nombre.split(' ')[0]}: ${personaje.nivel} • Duración: ${video.duracion}
                    </p>
                </div>
                
                <div class="video-wrapper" style="margin: 30px 0;">
                    <iframe 
                        id="rpg-video-iframe"
                        src="https://drive.google.com/file/d/${video.driveId}/preview"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        style="width: 100%; height: 400px; border-radius: 15px; border: 3px solid ${personaje.color};"
                    ></iframe>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button class="card-button" onclick="quintillizasRPG.volverAPersonaje()" 
                            style="background: linear-gradient(135deg, ${personaje.color}, ${this.oscurecerColor(personaje.color)}); padding: 15px 30px; border: none; border-radius: 10px; color: white; cursor: pointer; font-weight: bold; font-size: 1.1rem;">
                        ↩️ Volver a ${personaje.nombre.split(' ')[0]}
                    </button>
                </div>
            </div>
        `;
        
        const mangaSection = document.getElementById('manga-section');
        mangaSection.innerHTML = html;
        
        const botonVolver = document.createElement('button');
        botonVolver.className = 'btn-atras-especifico';
        botonVolver.innerHTML = '← Volver al RPG';
        botonVolver.style.margin = '20px';
        botonVolver.onclick = () => this.actualizarVistaConPersonaje();
        mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
    }

    oscurecerColor(color) {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        const darkR = Math.max(0, r - 50);
        const darkG = Math.max(0, g - 50);
        const darkB = Math.max(0, b - 50);
        
        return `#${darkR.toString(16).padStart(2, '0')}${darkG.toString(16).padStart(2, '0')}${darkB.toString(16).padStart(2, '0')}`;
    }

    mostrarNotificacion(mensaje) {
        const notif = document.createElement('div');
        notif.className = 'notificacion-dinero';
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #FF1493, #FF69B4);
            color: white;
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

    guardarPersonajeSeleccionado() {
        try {
            localStorage.setItem('rpg_personaje_seleccionado', this.personajeSeleccionado);
        } catch (e) {
            console.warn('No se pudo guardar personaje seleccionado:', e);
        }
    }

    cargarPersonajeSeleccionado() {
        try {
            return localStorage.getItem('rpg_personaje_seleccionado');
        } catch (e) {
            console.warn('No se pudo cargar personaje seleccionado:', e);
            return null;
        }
    }

    guardarDatosPersonajes() {
        try {
            localStorage.setItem('rpg_datos_personajes', JSON.stringify(this.datosPersonajes));
        } catch (e) {
            console.warn('No se pudo guardar datos personajes:', e);
        }
    }

    cargarDatosPersonajes() {
        try {
            const datos = localStorage.getItem('rpg_datos_personajes');
            return datos ? JSON.parse(datos) : null;
        } catch (e) {
            console.warn('No se pudo cargar datos personajes:', e);
            return null;
        }
    }
}

// ================================================
// INTEGRACIÓN CON SISTEMA DE MAZOS (MODIFICADA)
// ================================================

const agregarDineroOriginal = sistemaEconomia.agregarDinero;

sistemaEconomia.agregarDinero = function(cantidad) {
    const resultado = agregarDineroOriginal.call(this, cantidad);
    
    if (cantidad > 0 && window.quintillizasRPG && window.quintillizasRPG.personajeSeleccionado) {
        // REDUCIDO: Solo 5 EXP por sol (era 20)
        const expPorSoles = 5;
        const expGanada = Math.round(cantidad * expPorSoles);
        
        window.quintillizasRPG.agregarEXP(
            window.quintillizasRPG.personajeSeleccionado, 
            expGanada
        );
        
        console.log(`🎮 RPG: +${expGanada} EXP para ${window.quintillizasRPG.datosPersonajes[window.quintillizasRPG.personajeSeleccionado].nombre}`);
    }
    
    return resultado;
};

// ================================================
// INSTANCIA GLOBAL DEL RPG REBALANCEADO
// ================================================

const quintillizasRPG = new QuintillizasRPG();

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', function() {
    quintillizasRPG.inicializar();
    console.log('🎮 RPG Quintillizas REBALANCEADO listo');
    console.log('⚠️ Niveles más difíciles (1000 EXP por nivel)');
    console.log('✨ Condones especiales 0.01 añadidos');
    console.log('🔥 Momentos íntimos con sexo real');
    console.log('📈 Sistema de recompensas ajustado a ganancias reales');
});
