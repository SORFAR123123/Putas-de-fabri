// ================================================
// RPG COMPLETO: LAS QUINTILLIZAS NAKANO - CON IMÁGENES REALES
// ================================================

class QuintillizasRPG {
    constructor() {
        this.personajeSeleccionado = this.cargarPersonajeSeleccionado() || null;
        this.datosPersonajes = this.cargarDatosPersonajes() || this.inicializarDatosPersonajes();
        this.condones = this.cargarCondones() || 0;
        this.ultimaInteraccion = null;
    }

    // ====================
    // INICIALIZACIÓN CON IMÁGENES
    // ====================

    inicializar() {
        console.log('🎮 RPG Quintillizas con imágenes inicializado');
        
        // Exponer funciones al global scope
        window.seleccionarPersonajeRPG = (personajeId) => this.seleccionarPersonajeUI(personajeId);
        window.intentarMomentoIntimoRPG = (personajeId, momentoId) => this.intentarMomentoIntimo(personajeId, momentoId);
        window.comprarActividadRPG = (personajeId, actividadId) => this.comprarActividad(personajeId, actividadId);
        window.comprarCondonesRPG = (cantidad) => this.comprarCondones(cantidad);
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
                expNecesaria: 100,
                estadoAnimo: 'neutral',
                afinidad: 0,
                descripcion: 'La hermana mayor, responsable y coqueta. Le gusta cuidar a los demás.',
                dificultad: 'media',
                probabilidadBase: 60,
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'cafe_romantico', nombre: '☕ Café Romántico', costo: 150, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 25, exp: 80, descripcion: 'Tómate un café íntimo con Ichika' },
                    { id: 'estudio_juntos', nombre: '📚 Estudio Juntos', costo: 100, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 20, exp: 60, descripcion: 'Estudia con Ichika después de clases' },
                    { id: 'paseo_noche', nombre: '🌙 Paseo Nocturno', costo: 200, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 30, exp: 100, descripcion: 'Un romántico paseo bajo las estrellas' }
                ],
                momentosIntimos: [
                    { 
                        id: 'beso', 
                        nombre: '💋 Beso Apasionado', 
                        condonesRequeridos: 1,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 20, 
                        exp: 50, 
                        descripcion: 'Un beso tierno y apasionado',
                        probabilidadExito: 70,
                        probabilidadBase: 60 
                    },
                    { 
                        id: 'abrazo', 
                        nombre: '🤗 Abrazo Cálido', 
                        condonesRequeridos: 1,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 15, 
                        exp: 40, 
                        descripcion: 'Un abrazo largo y reconfortante',
                        probabilidadExito: 85,
                        probabilidadBase: 75 
                    },
                    { 
                        id: 'caricia', 
                        nombre: '👐 Caricia Tierna', 
                        condonesRequeridos: 1,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 10, 
                        exp: 30, 
                        descripcion: 'Una caricia suave en la mejilla',
                        probabilidadExito: 90,
                        probabilidadBase: 80 
                    },
                    { 
                        id: 'levantar_aire', 
                        nombre: '💪 Levantar en el Aire', 
                        condonesRequeridos: 2,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 25, 
                        exp: 60, 
                        descripcion: 'Levántala en el aire en un abrazo',
                        probabilidadExito: 50,
                        probabilidadBase: 40 
                    },
                    { 
                        id: 'confesion_amor', 
                        nombre: '💖 Confesión de Amor', 
                        condonesRequeridos: 3,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 40, 
                        exp: 100, 
                        descripcion: 'Confiesa tus sentimientos más profundos',
                        probabilidadExito: 40,
                        probabilidadBase: 30 
                    }
                ]
            },
            'nino': {
                nombre: 'Nino Nakano',
                color: '#FFB347',
                imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 100,
                estadoAnimo: 'tsundere',
                afinidad: -20,
                descripcion: 'Tsundere clásica, difícil de conquistar. Cocina increíblemente bien.',
                dificultad: 'alta',
                probabilidadBase: 30,
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'clases_cocina', nombre: '👩‍🍳 Clases de Cocina', costo: 180, videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', afinidad: 40, exp: 90, descripcion: 'Aprende a cocinar con Nino' },
                    { id: 'pelicula_hogar', nombre: '🎬 Película en Casa', costo: 120, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 25, exp: 70, descripcion: 'Ve una película romántica en el sofá' },
                    { id: 'concierto', nombre: '🎵 Concierto Juntos', costo: 250, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 50, exp: 120, descripcion: 'Llévala a ver su banda favorita' }
                ],
                momentosIntimos: [
                    { 
                        id: 'beso', 
                        nombre: '💋 Beso Tsundere', 
                        condonesRequeridos: 1,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 25, 
                        exp: 60, 
                        descripcion: 'Un beso a regañadientes',
                        probabilidadExito: 40,
                        probabilidadBase: 30 
                    },
                    { 
                        id: 'abrazo', 
                        nombre: '🤗 Abrazo Forzado', 
                        condonesRequeridos: 1,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 20, 
                        exp: 50, 
                        descripcion: 'Un abrazo que dice "no es que me guste"',
                        probabilidadExito: 50,
                        probabilidadBase: 40 
                    },
                    { 
                        id: 'caricia', 
                        nombre: '👐 Caricia Especial', 
                        condonesRequeridos: 1,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 15, 
                        exp: 45, 
                        descripcion: 'Una caricia solo para ti',
                        probabilidadExito: 60,
                        probabilidadBase: 50 
                    },
                    { 
                        id: 'masaje_hombros', 
                        nombre: '💆‍♀️ Masaje de Hombros', 
                        condonesRequeridos: 2,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 30, 
                        exp: 70, 
                        descripcion: 'Un relajante masaje después del estudio',
                        probabilidadExito: 45,
                        probabilidadBase: 35 
                    },
                    { 
                        id: 'declaracion', 
                        nombre: '❤️‍🔥 Declaración Sincera', 
                        condonesRequeridos: 3,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 50, 
                        exp: 120, 
                        descripcion: 'Ese momento en que finalmente se abre',
                        probabilidadExito: 30,
                        probabilidadBase: 20 
                    }
                ]
            },
            'miku': {
                nombre: 'Miku Nakano',
                color: '#6A5ACD',
                imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 100,
                estadoAnimo: 'tímida',
                afinidad: 10,
                descripcion: 'Tímida y reservada, le gusta la historia japonesa y los audífonos.',
                dificultad: 'media-baja',
                probabilidadBase: 70,
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'visita_templo', nombre: '⛩️ Visita al Templo', costo: 80, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 15, exp: 50, descripcion: 'Visita un templo histórico con Miku' },
                    { id: 'biblioteca', nombre: '📖 Tarde en Biblioteca', costo: 60, videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', afinidad: 10, exp: 40, descripcion: 'Estudia historia en la biblioteca' },
                    { id: 'concierto_tradicional', nombre: '🎶 Concierto Tradicional', costo: 180, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 35, exp: 95, descripcion: 'Asiste a un concierto de música tradicional' }
                ],
                momentosIntimos: [
                    { 
                        id: 'beso', 
                        nombre: '💋 Beso Tímido', 
                        condonesRequeridos: 1,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 15, 
                        exp: 45, 
                        descripcion: 'Un beso suave y lleno de timidez',
                        probabilidadExito: 65,
                        probabilidadBase: 55 
                    },
                    { 
                        id: 'abrazo', 
                        nome: '🤗 Abrazo Protector', 
                        condonesRequeridos: 1,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 12, 
                        exp: 35, 
                        descripcion: 'Un abrazo que la hace sentir segura',
                        probabilidadExito: 80,
                        probabilidadBase: 70 
                    },
                    { 
                        id: 'caricia', 
                        nombre: '👐 Caricia en la Cabeza', 
                        condonesRequeridos: 1,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 8, 
                        exp: 25, 
                        descripcion: 'Una caricia suave en su cabello',
                        probabilidadExito: 85,
                        probabilidadBase: 75 
                    },
                    { 
                        id: 'manos_tomadas', 
                        nombre: '👫 Manos Tomadas', 
                        condonesRequeridos: 2,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 20, 
                        exp: 55, 
                        descripcion: 'Caminar de la mano por el parque',
                        probabilidadExito: 70,
                        probabilidadBase: 60 
                    },
                    { 
                        id: 'confesion_timida', 
                        nombre: '💞 Confesión Tímida', 
                        condonesRequeridos: 3,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 35, 
                        exp: 90, 
                        descripcion: 'Escucha sus sentimientos más profundos',
                        probabilidadExito: 55,
                        probabilidadBase: 45 
                    }
                ]
            },
            'yotsuba': {
                nombre: 'Yotsuba Nakano',
                color: '#4CAF50',
                imagen: 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 100,
                estadoAnimo: 'energica',
                afinidad: 30,
                descripcion: 'La más enérgica y deportista. Siempre lista para ayudar.',
                dificultad: 'baja',
                probabilidadBase: 80,
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'partido_futbol', nombre: '⚽ Partido de Fútbol', costo: 90, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 20, exp: 60, descripcion: 'Juega un partido de fútbol con Yotsuba' },
                    { id: 'voluntariado', nombre: '🤝 Día de Voluntariado', costo: 50, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 15, exp: 45, descripcion: 'Ayuda a otros junto a Yotsuba' },
                    { id: 'carrera_atletismo', nombre: '🏃‍♀️ Carrera de Atletismo', costo: 140, videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', afinidad: 30, exp: 85, descripcion: 'Participa en una carrera juntos' }
                ],
                momentosIntimos: [
                    { 
                        id: 'beso', 
                        nombre: '💋 Beso Energético', 
                        condonesRequeridos: 1,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 18, 
                        exp: 48, 
                        descripcion: 'Un beso lleno de energía y alegría',
                        probabilidadExito: 75,
                        probabilidadBase: 65 
                    },
                    { 
                        id: 'abrazo', 
                        nombre: '🤗 Abrazo de oso', 
                        condonesRequeridos: 1,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 14, 
                        exp: 38, 
                        descripcion: 'Un fuerte y cálido abrazo de oso',
                        probabilidadExito: 90,
                        probabilidadBase: 80 
                    },
                    { 
                        id: 'caricia', 
                        nombre: '👐 Caricia Juguetona', 
                        condonesRequeridos: 1,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 9, 
                        exp: 28, 
                        descripcion: 'Una caricia juguetona y alegre',
                        probabilidadExito: 95,
                        probabilidadBase: 85 
                    },
                    { 
                        id: 'levantar_aire', 
                        nombre: '💪 Levantamiento Alegre', 
                        condonesRequeridos: 2,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 22, 
                        exp: 58, 
                        descripcion: 'Levántala en el aire con alegría',
                        probabilidadExito: 60,
                        probabilidadBase: 50 
                    },
                    { 
                        id: 'confesion_alegre', 
                        nombre: '💝 Confesión Alegre', 
                        condonesRequeridos: 3,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 38, 
                        exp: 95, 
                        descripcion: 'Una confesión llena de sonrisas',
                        probabilidadExito: 50,
                        probabilidadBase: 40 
                    }
                ]
            },
            'itsuki': {
                nombre: 'Itsuki Nakano',
                color: '#FFD166',
                imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 100,
                estadoAnimo: 'glotona',
                afinidad: 15,
                descripcion: 'La más glotona, le encanta comer. Es estudiosa y honesta.',
                dificultad: 'baja',
                probabilidadBase: 85,
                videosDisponibles: [],
                actividadesEspeciales: [
                    { id: 'buffet_ilimitado', nombre: '🍣 Buffet Ilimitado', costo: 200, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 40, exp: 100, descripcion: 'Llévala a un buffet de sushi' },
                    { id: 'cocina_postres', nombre: '🍰 Clase de Postres', costo: 130, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 25, exp: 75, descripcion: 'Aprende a hacer postres con Itsuki' },
                    { id: 'picnic_parque', nombre: '🧺 Picnic en el Parque', costo: 110, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 20, exp: 65, descripcion: 'Un picnic con mucha comida' }
                ],
                momentosIntimos: [
                    { 
                        id: 'beso', 
                        nombre: '💋 Beso con Sabor', 
                        condonesRequeridos: 1,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 16, 
                        exp: 44, 
                        descripcion: 'Un beso que sabe a fresas',
                        probabilidadExito: 80,
                        probabilidadBase: 70 
                    },
                    { 
                        id: 'abrazo', 
                        nombre: '🤗 Abrazo Cálido', 
                        condonesRequeridos: 1,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 13, 
                        exp: 36, 
                        descripcion: 'Un abrazo como un cobertor caliente',
                        probabilidadExito: 92,
                        probabilidadBase: 82 
                    },
                    { 
                        id: 'caricia', 
                        nombre: '👐 Caricia Suave', 
                        condonesRequeridos: 1,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 7, 
                        exp: 26, 
                        descripcion: 'Una caricia suave como un postre',
                        probabilidadExito: 96,
                        probabilidadBase: 86 
                    },
                    { 
                        id: 'alimentacion', 
                        nombre: '🍓 Alimentación Romántica', 
                        condonesRequeridos: 2,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 24, 
                        exp: 62, 
                        descripcion: 'Aliméntala con algo dulce',
                        probabilidadExito: 65,
                        probabilidadBase: 55 
                    },
                    { 
                        id: 'confesion_dulce', 
                        nombre: '🍭 Confesión Dulce', 
                        condonesRequeridos: 3,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 42, 
                        exp: 105, 
                        descripcion: 'Confiesa tus sentimientos con dulzura',
                        probabilidadExito: 45,
                        probabilidadBase: 35 
                    }
                ]
            }
        };
    }

    // ====================
    // SISTEMA DE EXP Y NIVELES
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
        return true;
    }

    subirNivel(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        personaje.nivel += 1;
        personaje.exp = personaje.exp - personaje.expNecesaria;
        personaje.expNecesaria = Math.round(personaje.expNecesaria * 1.5);
        
        console.log(`🎉 ¡${personaje.nombre} subió al nivel ${personaje.nivel}!`);
        this.mostrarNotificacion(`🎉 ${personaje.nombre} nivel ${personaje.nivel}!`);
        
        this.desbloquearVideo(personajeId);
        this.guardarDatosPersonajes();
    }

    desbloquearVideo(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        const nivel = personaje.nivel;
        
        const videosPorNivel = {
            1: { id: 'presentacion', nombre: 'Presentación', videoId: this.obtenerVideoIdPorNivel(personajeId, 1) },
            2: { id: 'conversacion_1', nombre: 'Conversación', videoId: this.obtenerVideoIdPorNivel(personajeId, 2) },
            3: { id: 'paseo', nombre: 'Primer Paseo', videoId: this.obtenerVideoIdPorNivel(personajeId, 3) },
            4: { id: 'confesion', nombre: 'Confesión', videoId: this.obtenerVideoIdPorNivel(personajeId, 4) },
            5: { id: 'primer_beso', nombre: 'Primer Beso', videoId: this.obtenerVideoIdPorNivel(personajeId, 5) }
        };
        
        if (videosPorNivel[nivel] && !personaje.videosDisponibles.some(v => v.id === videosPorNivel[nivel].id)) {
            personaje.videosDisponibles.push(videosPorNivel[nivel]);
            console.log(`🎥 Video desbloqueado: ${videosPorNivel[nivel].nombre}`);
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
    // SISTEMA DE UI CON IMÁGENES
    // ====================

    cargarPaginaPrincipal() {
        return `
            <div style="max-width: 1400px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: #FF1493; margin-bottom: 10px; font-size: 3rem;">
                    🎮 RPG QUINTILLIZAS NAKANO
                </h1>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 40px; font-size: 1.2rem;">
                    Conquista a las 5 hermanas. Gana dinero estudiando, gasta en conquistarlas.
                </p>
                
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 20px; padding: 25px; margin-bottom: 40px; border: 2px solid #FF1493;">
                    <h3 style="color: #FFD166; margin-bottom: 15px;">📊 ESTADO ACTUAL</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div>
                            <div style="color: #FF69B4; font-size: 0.9rem;">👤 Personaje Seleccionado</div>
                            <div style="font-size: 1.3rem; font-weight: bold;">
                                ${this.personajeSeleccionado ? this.datosPersonajes[this.personajeSeleccionado].nombre : 'NINGUNO'}
                            </div>
                        </div>
                        <div>
                            <div style="color: #FF69B4; font-size: 0.9rem;">💰 Dinero Disponible</div>
                            <div style="font-size: 1.3rem; font-weight: bold; color: #FFD166;">
                                S/. ${sistemaEconomia.obtenerDinero().toFixed(2)}
                            </div>
                        </div>
                        <div>
                            <div style="color: #FF69B4; font-size: 0.9rem;">🛒 Condones</div>
                            <div style="font-size: 1.3rem; font-weight: bold; color: #4CAF50;">
                                ${this.condones} unidades
                            </div>
                        </div>
                    </div>
                </div>
                
                <h2 style="text-align: center; color: #FFD166; margin-bottom: 30px;">💖 SELECCIONA UNA HERMANA</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; margin-bottom: 50px;">
                    ${this.crearCardsPersonajes()}
                </div>
                
                <div style="background: rgba(88, 100, 245, 0.1); border-radius: 20px; padding: 25px; margin-bottom: 40px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🛍️ TIENDA DE CONDONES</h3>
                    <p style="opacity: 0.8; margin-bottom: 20px;">
                        Los condones son necesarios para momentos íntimos. Cada uno cuesta S/.20
                    </p>
                    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <button class="card-button" onclick="comprarCondonesRPG(1)" 
                                style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                            1 Condón - S/.20
                        </button>
                        <button class="card-button" onclick="comprarCondonesRPG(5)" 
                                style="background: linear-gradient(135deg, #5864F5, #8A5AF7);">
                            5 Condones - S/.100
                        </button>
                        <button class="card-button" onclick="comprarCondonesRPG(10)" 
                                style="background: linear-gradient(135deg, #FF6B6B, #FFD166);">
                            10 Condones - S/.200
                        </button>
                    </div>
                </div>
                
                <div style="background: rgba(255, 209, 102, 0.1); border-radius: 20px; padding: 25px; border-left: 5px solid #FFD166;">
                    <h4 style="color: #FFD166; margin-bottom: 15px;">📖 ¿CÓMO FUNCIONA?</h4>
                    <ol style="padding-left: 20px; opacity: 0.8;">
                        <li>Selecciona una hermana para enfocarte en ella</li>
                        <li>Completa mazos de estudio para ganar dinero</li>
                        <li>Gasta dinero en condones y actividades</li>
                        <li>Intenta momentos íntimos (pueden fallar)</li>
                        <li>Sube de nivel para desbloquear más contenido</li>
                        <li>Cada hermana tiene diferente dificultad</li>
                        <li><strong>💖 NUEVO:</strong> ¡Gana EXP respondiendo correctamente en el quiz!</li>
                    </ol>
                </div>
            </div>
        `;
    }

    crearCardsPersonajes() {
        const personajesIds = ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'];
        
        return personajesIds.map(id => {
            const personaje = this.datosPersonajes[id];
            const esSeleccionado = this.personajeSeleccionado === id;
            
            return `
                <div class="personaje-card" 
                     style="border: 2px solid ${personaje.color}; ${esSeleccionado ? 'border-width: 4px; box-shadow: 0 0 20px ' + personaje.color + '50;' : ''}; 
                            background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px; cursor: pointer; 
                            transition: all 0.3s ease; text-align: center;" 
                     onclick="seleccionarPersonajeRPG('${id}')">
                    
                    <div style="position: relative; display: inline-block; margin-bottom: 15px;">
                        <img src="${personaje.imagen}" alt="${personaje.nombre}" 
                             style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; 
                                    border: 4px solid ${personaje.color}; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
                        ${esSeleccionado ? `<div style="position: absolute; top: -5px; right: -5px; background: #FF1493; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white;">✓</div>` : ''}
                    </div>
                    
                    <h3 style="color: ${personaje.color}; margin: 0 0 5px 0;">${personaje.nombre}</h3>
                    <p style="font-size: 0.9rem; opacity: 0.7; margin: 0 0 15px 0;">${personaje.descripcion}</p>
                    
                    <div style="font-size: 1rem; font-weight: bold; margin-bottom: 10px;">Nivel ${personaje.nivel}</div>
                    
                    <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 10px; margin-top: 15px;">
                        <span style="color: #FFD166; font-weight: bold; font-size: 0.9rem;">AFINIDAD: </span>
                        <span style="color: ${personaje.afinidad >= 0 ? '#4CAF50' : '#FF6B6B'}; font-weight: bold;">${personaje.afinidad}</span>
                        <br>
                        <span style="color: #FFD166; font-weight: bold; font-size: 0.9rem;">DIFICULTAD: </span>
                        <span style="color: ${personaje.dificultad === 'alta' ? '#FF6B6B' : '#4CAF50'}; font-weight: bold;">${personaje.dificultad.toUpperCase()}</span>
                    </div>

                    ${esSeleccionado ? 
                        `<p style="color: #FF1493; font-weight: bold; margin-top: 15px;">ACTUALMENTE SELECCIONADA</p>` 
                        : `<button class="card-button" style="margin-top: 15px; background: linear-gradient(135deg, ${personaje.color}, ${this.oscurecerColor(personaje.color)}); border: none; padding: 10px 20px; border-radius: 8px; color: white; font-weight: bold;">SELECCIONAR</button>`}
                </div>
            `;
        }).join('');
    }

    seleccionarPersonajeUI(personajeId) {
        this.personajeSeleccionado = personajeId;
        this.guardarPersonajeSeleccionado();
        const personaje = this.datosPersonajes[personajeId];
        this.mostrarNotificacion(`💖 Seleccionaste a ${personaje.nombre}`);
        this.actualizarVistaConPersonaje();
    }

    actualizarVistaConPersonaje() {
        const mangaSection = document.getElementById('manga-section');
        if (!mangaSection) return;

        // Limpiar y añadir botón de volver
        mangaSection.innerHTML = '';
        const botonVolver = document.createElement('button');
        botonVolver.className = 'btn-atras-especifico';
        botonVolver.innerHTML = '← Volver al RPG Principal';
        botonVolver.style.margin = '20px';
        botonVolver.onclick = () => {
            // Asegúrate de que `volverAlInicio` esté disponible en el scope
            if (typeof volverAlInicio === 'function') {
                volverAlInicio(); 
                // Si la función volverAlInicio solo vuelve a la vista principal (manga), 
                // se necesitaría una función específica para recargar el RPG principal
            } else {
                mangaSection.innerHTML = this.cargarPaginaPrincipal();
                // Si `crearBotonVolver` existe en `1_main.js`, podría ser necesario
            }
        };
        mangaSection.appendChild(botonVolver);

        const personajeDiv = document.createElement('div');
        personajeDiv.innerHTML = this.crearUIPersonaje();
        mangaSection.appendChild(personajeDiv);
    }

    crearUIPersonaje() {
        if (!this.personajeSeleccionado) return '<p>Selecciona un personaje primero</p>';
        const personaje = this.datosPersonajes[this.personajeSeleccionado];
        const dinero = sistemaEconomia.obtenerDinero();
        
        return `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <div style="background: ${personaje.color}20; border-radius: 20px; padding: 30px; margin-bottom: 30px; border: 3px solid ${personaje.color}; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; right: 0; width: 200px; height: 200px; background: ${personaje.color}10; border-radius: 0 20px 0 100px; z-index: 1;"></div>
                    <div style="display: flex; align-items: center; gap: 25px; flex-wrap: wrap; position: relative; z-index: 2;">
                        <div style="position: relative;">
                            <img src="${personaje.imagen}" alt="${personaje.nombre}" 
                                 style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; 
                                        border: 5px solid ${personaje.color}; box-shadow: 0 10px 20px rgba(0,0,0,0.3);">
                            <div style="position: absolute; bottom: -10px; right: -10px; background: ${personaje.color}; 
                                        color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; 
                                        font-size: 1.2rem; border: 3px solid white;"> 
                                Nivel ${personaje.nivel} 
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <h1 style="color: ${personaje.color}; margin: 0 0 10px 0; font-size: 2.5rem;">${personaje.nombre}</h1>
                            <p style="opacity: 0.8; margin: 0 0 15px 0;">Estado: <strong style="color: ${this.getColorEstado(personaje.estadoAnimo)}">${personaje.estadoAnimo.toUpperCase()}</strong></p>
                            <p style="font-size: 1.1rem; font-weight: bold;">Afinidad Total: <span style="color: ${personaje.afinidad >= 0 ? '#4CAF50' : '#FF6B6B'};">${personaje.afinidad}</span></p>
                        </div>
                    </div>
                    <h3 style="margin-top: 20px; margin-bottom: 5px; color: #FFD166;">EXP (${personaje.exp}/${personaje.expNecesaria})</h3>
                    <div style="background: rgba(255,255,255,0.1); border-radius: 5px; height: 15px;">
                        <div style="background: linear-gradient(90deg, #5864F5, #8A5AF7); border-radius: 5px; width: ${(personaje.exp / personaje.expNecesaria) * 100}%; height: 100%;"></div>
                    </div>
                    <p style="text-align: center; margin-top: 10px; opacity: 0.8;">
                        <strong>${personaje.descripcion}</strong>
                    </p>
                    <p style="text-align: center; margin-top: 15px; color: #FFD166; font-weight: bold;">
                        💖 ¡Gana EXP respondiendo correctamente en los quizzes!
                    </p>
                </div>
                
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #FF1493;">
                    <h3 style="color: #FF1493; margin-bottom: 15px;">💖 MOMENTOS ÍNTIMOS</h3>
                    <p style="opacity: 0.8; margin-bottom: 20px;"> 
                        Intenta momentos íntimos con ${personaje.nombre.split(' ')[0]}. Cada intento cuesta condones. 
                        Tienes <strong>${this.condones} condón${this.condones !== 1 ? 'es' : ''}</strong> disponibles.
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; margin-bottom: 20px;">
                        ${personaje.momentosIntimos.map(momento => {
                            const probabilidadReal = this.calcularProbabilidadMomento(personaje, momento);
                            const tieneCondones = this.condones >= momento.condonesRequeridos;
                            return `
                                <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; border: 1px solid ${personaje.color}50;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                        <span style="font-weight: bold; font-size: 1.1rem;">${momento.nombre}</span>
                                        <span style="color: #FFD166; font-size: 0.9rem;">${momento.condonesRequeridos} condón${momento.condonesRequeridos > 1 ? 'es' : ''}</span>
                                    </div>
                                    <p style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 10px;">${momento.descripcion}</p>
                                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 15px;">
                                        <span style="color: #4CAF50;">+${momento.afinidad} afinidad</span>
                                        <span style="color: #FFD166;">+${momento.exp} EXP</span>
                                    </div>
                                    <h4 style="color: #8A5AF7; margin-bottom: 5px;">Probabilidad de Éxito: ${probabilidadReal}%</h4>
                                    <div style="background: rgba(255,255,255,0.1); height: 6px; border-radius: 3px; margin-bottom: 10px;">
                                        <div style="background: linear-gradient(135deg, #4CAF50, #FFD166); width: ${probabilidadReal}%; height: 100%;"></div>
                                    </div>
                                    <p style="text-align: center; font-size: 0.8rem; opacity: 0.6;">
                                        (Basado en nivel y afinidad)
                                    </p>
                                    <button class="card-button" 
                                            onclick="intentarMomentoIntimoRPG('${this.personajeSeleccionado}', '${momento.id}')" 
                                            style="padding: 12px 20px; font-size: 1rem; background: linear-gradient(135deg, #FF1493, #FF69B4); margin-top: 10px; border: none; border-radius: 10px; color: white; cursor: pointer; font-weight: bold;"
                                            ${!tieneCondones ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                                        ${!tieneCondones ? '🛒 NECESITAS CONDONES' : 'TRY'}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🌟 ACTIVIDADES ESPECIALES</h3>
                    <p style="opacity: 0.8; margin-bottom: 20px;">Gasta tu dinero para aumentar la afinidad y EXP sin riesgo de fallo.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px;">
                        ${personaje.actividadesEspeciales.map(actividad => {
                            const puedeComprar = dinero >= actividad.costo;
                            return `
                                <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; border: 1px solid ${personaje.color}50;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                        <span style="font-weight: bold; font-size: 1.1rem;">${actividad.nombre}</span>
                                        <span style="color: #FFD166; font-weight: bold;">S/.${actividad.costo}</span>
                                    </div>
                                    <p style="opacity: 0.7; font-size: 0.9rem; margin: 0;">${actividad.descripcion}</p>
                                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin: 10px 0;">
                                        <span style="color: #4CAF50;">+${actividad.afinidad} afinidad</span>
                                        <span style="color: #FFD166;">+${actividad.exp} EXP</span>
                                    </div>
                                    <button class="card-button" 
                                            onclick="comprarActividadRPG('${this.personajeSeleccionado}', '${actividad.id}')" 
                                            style="padding: 12px 20px; font-size: 1rem; background: linear-gradient(135deg, #4CAF50, #2E7D32); margin-top: 10px; border: none; border-radius: 10px; color: white; cursor: pointer; font-weight: bold;" 
                                            ${!puedeComprar ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                                        ${!puedeComprar ? '💰 DINERO INSUFICIENTE' : '✨ COMPRAR ACTIVIDAD'}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🎬 VIDEOS DESBLOQUEADOS</h3>
                    ${personaje.videosDisponibles.length > 0 ? 
                        `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
                            ${personaje.videosDisponibles.map((video, index) => `
                                <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px; text-align: center; cursor: pointer; transition: all 0.3s ease; border: 1px solid rgba(88, 100, 245, 0.3);"
                                     onclick="cargarVideoNivel('${this.personajeSeleccionado}', ${index + 1})">
                                    <div style="font-size: 2rem; margin-bottom: 10px;">🎥</div>
                                    <div style="font-weight: bold;">${video.nombre}</div>
                                    <div style="font-size: 0.8rem; opacity: 0.7; margin-top: 5px;">Nivel ${index + 1}</div>
                                </div>
                            `).join('')}
                        </div>` 
                        : `<p style="text-align: center; opacity: 0.7; padding: 20px;"> 
                            Aún no hay videos desbloqueados. ¡Sube de nivel completando mazos! 
                        </p>`}
                </div>
                
                ${this.crearEstadisticasMangaSection()}
            </div>
        `;
    }

    // ====================
    // SISTEMA DE MOMENTOS ÍNTIMOS - MODIFICADO
    // ====================

    intentarMomentoIntimo(personajeId, momentoId) {
        if (this.personajeSeleccionado !== personajeId) {
            this.mostrarNotificacion('⚠️ Debes tener este personaje seleccionado.');
            return false;
        }

        const personaje = this.datosPersonajes[personajeId];
        const momento = personaje.momentosIntimos.find(m => m.id === momentoId);

        if (!momento) {
            this.mostrarNotificacion('❌ Momento íntimo no encontrado');
            return false;
        }

        if (this.condones < momento.condonesRequeridos) {
            this.mostrarNotificacion('❌ Necesitas más condones para esto.');
            return false;
        }
        
        // Calcular probabilidad real
        const probabilidadReal = this.calcularProbabilidadMomento(personaje, momento);
        console.log(`🎯 Probabilidad para ${momento.nombre}: ${probabilidadReal}%`);
        
        const exito = Math.random() * 100 < probabilidadReal;

        if (exito) {
            // ÉXITO
            this.condones -= momento.condonesRequeridos;
            this.guardarCondones();
            this.agregarEXP(personajeId, momento.exp);
            personaje.afinidad += momento.afinidad;
            personaje.estadoAnimo = 'feliz';
            
            console.log(`✅ ¡${momento.nombre} exitoso con ${personaje.nombre}!`);
            this.mostrarNotificacion(`💖 ¡${momento.nombre} exitoso! +${momento.afinidad} afinidad, +${momento.exp} EXP`);
            this.cargarVideoMomentoIntimo(personajeId, momento);
            return true;
        } else {
            // FALLO
            this.condones -= momento.condonesRequeridos;
            this.guardarCondones();
            personaje.estadoAnimo = 'enojada';
            personaje.afinidad -= Math.floor(momento.afinidad / 2);
            
            console.log(`❌ ${momento.nombre} falló con ${personaje.nombre}`);
            this.mostrarNotificacion(`😠 ${momento.nombre} falló. ${personaje.nombre} se enojó.`);
            this.actualizarVistaConPersonaje();
            return false;
        }
    }

    calcularProbabilidadMomento(personaje, momento) {
        let probabilidad = momento.probabilidadBase;

        // Ajustes por nivel
        probabilidad += (personaje.nivel - 1) * 10;

        // Ajustes por afinidad
        probabilidad += Math.floor(personaje.afinidad / 10); 

        // Ajustes por estado de ánimo
        const ajustesEstado = {
            'feliz': 30,
            'neutral': 0,
            'triste': -40,
            'enojada': -60,
            'tsundere': -5, 
            'tímida': -10,
            'energica': 15,
            'glotona': 10
        };
        probabilidad += ajustesEstado[personaje.estadoAnimo] || 0;

        // Límites
        return Math.max(5, Math.min(95, Math.round(probabilidad)));
    }

    cargarVideoMomentoIntimo(personajeId, momento) {
        const personaje = this.datosPersonajes[personajeId];
        this.mostrarReproductorVideo({ 
            driveId: momento.videoId, 
            titulo: `${momento.nombre} - ${personaje.nombre}`, 
            duracion: '2:30' // Duración dummy
        }, personaje);
    }
    
    // ====================
    // SISTEMA DE ACTIVIDADES ESPECIALES - MODIFICADO
    // ====================

    comprarActividad(personajeId, actividadId) {
        if (this.personajeSeleccionado !== personajeId) {
            this.mostrarNotificacion('⚠️ Debes tener este personaje seleccionado.');
            return false;
        }
        
        const personaje = this.datosPersonajes[personajeId];
        const actividad = personaje.actividadesEspeciales.find(a => a.id === actividadId);

        if (!actividad) {
            this.mostrarNotificacion('❌ Actividad no encontrada');
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
        this.mostrarNotificacion(`🎉 ${actividad.nombre} exitosa! +${actividad.afinidad} afinidad, +${actividad.exp} EXP`);
        
        this.cargarVideoActividad(personajeId, actividad);
        return true;
    }

    cargarVideoActividad(personajeId, actividad) {
        const personaje = this.datosPersonajes[personajeId];
        this.mostrarReproductorVideo({ 
            driveId: actividad.videoId, 
            titulo: `${actividad.nombre} - ${personaje.nombre}`, 
            duracion: '3:00' // Duración dummy
        }, personaje);
    }

    // ====================
    // TIENDA
    // ====================

    comprarCondones(cantidad) {
        const costoUnitario = 20;
        const costoTotal = cantidad * costoUnitario;
        const dineroActual = sistemaEconomia.obtenerDinero();

        if (dineroActual < costoTotal) {
            this.mostrarNotificacion(`❌ Necesitas S/.${costoTotal} para comprar ${cantidad} condón${cantidad > 1 ? 'es' : ''}.`);
            return false;
        }

        sistemaEconomia.agregarDinero(-costoTotal);
        this.condones += cantidad;
        this.guardarCondones();

        this.mostrarNotificacion(`✅ +${cantidad} condones comprados`);
        
        // Actualizar vista si estamos en vista de personaje
        if (this.personajeSeleccionado) {
            this.actualizarVistaConPersonaje();
        } else {
            // Si estamos en la vista principal, recargarla
            const mangaSection = document.getElementById('manga-section');
            if (mangaSection) {
                mangaSection.innerHTML = this.cargarPaginaPrincipal();
            }
        }
        return true;
    }

    // ====================
    // REPRODUCTOR DE VIDEOS
    // ====================

    mostrarReproductorVideo(video, personaje) {
        const html = `
            <div class="reproductor-container" style="max-width: 800px; margin: 0 auto; padding: 30px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${personaje.imagen}" alt="${personaje.nombre}" 
                         style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; 
                                border: 4px solid ${personaje.color}; margin-bottom: 15px;">
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
                            style="background: linear-gradient(135deg, ${personaje.color}, ${this.oscurecerColor(personaje.color)}); 
                                   padding: 15px 30px; border: none; border-radius: 10px; color: white; 
                                   cursor: pointer; font-weight: bold; font-size: 1.1rem;">
                        ↩️ Volver a ${personaje.nombre.split(' ')[0]}
                    </button>
                </div>
            </div>
        `;
        const mangaSection = document.getElementById('manga-section');
        mangaSection.innerHTML = html;
        // El botón volver a inicio se debe mantener si estaba
    }

    cargarVideoNivel(personajeId, nivel) {
        const personaje = this.datosPersonajes[personajeId];
        const video = personaje.videosDisponibles[nivel - 1];
        
        if (!video) {
            this.mostrarNotificacion('❌ Video no disponible');
            return;
        }

        this.mostrarReproductorVideo({
            driveId: video.videoId,
            titulo: `${video.nombre} - Nivel ${nivel}`,
            duracion: '3:30' // Duración dummy
        }, personaje);
    }
    
    volverAPersonaje() {
        this.actualizarVistaConPersonaje();
    }

    // ====================
    // UTILIDADES
    // ====================

    getColorEstado(estado) {
        switch (estado) {
            case 'feliz': return '#4CAF50';
            case 'neutral': return '#FFD166';
            case 'enojada': return '#FF6B6B';
            case 'triste': return '#5864F5';
            case 'tsundere': return '#FFB347';
            case 'tímida': return '#6A5ACD';
            case 'energica': return '#FF1493';
            case 'glotona': return '#4CAF50';
            default: return '#ccc';
        }
    }

    oscurecerColor(hex, percent = -20) {
        // Lógica simple para oscurecer un color HEX (adaptada de la web)
        let f = parseInt(hex.slice(1), 16),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = f >> 16,
            G = f >> 8 & 0x00FF,
            B = f & 0x0000FF;
        
        let newR = Math.round((t - R) * p / 100) + R;
        let newG = Math.round((t - G) * p / 100) + G;
        let newB = Math.round((t - B) * p / 100) + B;

        return "#" + (0x1000000 + (newR << 16) + (newG << 8) + newB).toString(16).slice(1);
    }

    // Método para crear las estadísticas de la sección de manga/quiz
    crearEstadisticasMangaSection() {
        if (typeof sistemaEconomia === 'undefined' || typeof sistemaEconomia.obtenerEstadisticas !== 'function') {
            return '<p style="text-align: center; opacity: 0.7;">Error: Sistema de Economía no cargado.</p>';
        }

        const stats = sistemaEconomia.obtenerEstadisticas();
        
        return `
            <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 25px; border: 2px solid #ccc5;">
                <h3 style="color: #FFD166; margin-bottom: 20px; text-align: center;">📈 ESTADÍSTICAS GLOBALES DE ESTUDIO (PARA EXP)</h3>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; text-align: center;">
                    <div style="margin: 10px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #FFD166;">${stats.totalMazos}</div>
                        <p style="opacity: 0.8;">Mazos Totales</p>
                    </div>
                    <div style="margin: 10px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #4CAF50;">${stats.completados100}</div>
                        <p style="opacity: 0.8;">Mazos 100%</p>
                    </div>
                    <div style="margin: 10px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #8A5AF7;">${stats.porcentajeTotal}%</div>
                        <p style="opacity: 0.8;">Progreso Global</p>
                    </div>
                </div>
                <p style="text-align: center; margin-top: 20px; font-size: 1rem; color: #FF1493;">
                    ¡Cada mazo que completas te da dinero y EXP para ${this.datosPersonajes[this.personajeSeleccionado].nombre}!
                </p>
            </div>
        `;
    }

    mostrarNotificacion(mensaje) {
        // Crear notificación
        const notif = document.createElement('div');
        notif.className = 'notificacion-rpg';
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

    guardarCondones() {
        try {
            localStorage.setItem('rpg_condones', this.condones.toString());
        } catch (e) {
            console.warn('No se pudo guardar condones:', e);
        }
    }

    cargarCondones() {
        try {
            const condones = localStorage.getItem('rpg_condones');
            return condones ? parseInt(condones) : 0;
        } catch (e) {
            console.warn('No se pudo cargar condones:', e);
            return 0;
        }
    }
}

// ================================================
// INTEGRACIÓN CON SISTEMA DE MAZOS
// ================================================

// Sobreescribir la función agregarDinero del sistemaEconomia
// para inyectar lógica de EXP al personaje seleccionado.

const agregarDineroOriginal = sistemaEconomia.agregarDinero;

sistemaEconomia.agregarDinero = function(cantidad) {
    const resultado = agregarDineroOriginal.call(this, cantidad);
    
    if (cantidad > 0 && window.quintillizasRPG && window.quintillizasRPG.personajeSeleccionado) {
        const expPorSoles = 20;
        const expGanada = Math.round(cantidad * expPorSoles);
        
        // Solo agregar EXP si la función existe en el scope de QuintillizasRPG
        if (typeof window.quintillizasRPG.agregarEXP === 'function') {
            window.quintillizasRPG.agregarEXP(
                window.quintillizasRPG.personajeSeleccionado, 
                expGanada
            );
            
            console.log(`🎮 RPG: +${expGanada} EXP para ${window.quintillizasRPG.datosPersonajes[window.quintillizasRPG.personajeSeleccionado].nombre}`);
        }
    }
    
    return resultado;
};

// ================================================
// INSTANCIA GLOBAL DEL RPG
// ================================================

const quintillizasRPG = new QuintillizasRPG();

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', function() {
    quintillizasRPG.inicializar();
    console.log('🎮 RPG Quintillizas con imágenes listo y funcional');
    console.log('🖼️ Imágenes cargadas para las 5 hermanas');
    console.log('💖 Sistema de momentos íntimos activo');
    console.log('🎬 Sistema de actividades modificado: ¡Ahora siempre se pueden comprar!');
    console.log('💰 Sistema integrado con dinero del estudio');
});
