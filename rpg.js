// ================================================
// RPG COMPLETO: LAS QUINTILLIZAS NAKANO - SISTEMA DIFICULTOSO
// ================================================

class QuintillizasRPG {
    constructor() {
        this.personajeSeleccionado = this.cargarPersonajeSeleccionado() || null;
        this.datosPersonajes = this.cargarDatosPersonajes() || this.inicializarDatosPersonajes();
        this.condones = this.cargarCondones() || 0;
        this.condones001 = this.cargarCondones001() || 0;
        this.ultimaInteraccion = null;
    }

    // ====================
    // INICIALIZACIÓN CON SISTEMA DIFICULTOSO
    // ====================

    inicializar() {
        console.log('🎮 RPG Quintillizas - Sistema dificultoso inicializado');
        
        window.seleccionarPersonajeRPG = (personajeId) => this.seleccionarPersonajeUI(personajeId);
        window.intentarMomentoIntimoRPG = (personajeId, momentoId) => this.intentarMomentoIntimo(personajeId, momentoId);
        window.comprarActividadRPG = (personajeId, actividadId) => this.comprarActividad(personajeId, actividadId);
        window.comprarCondonesRPG = (cantidad) => this.comprarCondones(cantidad);
        window.comprarCondones001RPG = (cantidad) => this.comprarCondones001(cantidad);
        window.cargarVideoNivel = (personajeId, nivel) => this.cargarVideoNivel(personajeId, nivel);
        window.seleccionarTipoCondon = (tipo) => this.seleccionarTipoCondon(tipo);
    }

    inicializarDatosPersonajes() {
        return {
            'ichika': {
                nombre: 'Ichika Nakano',
                color: '#FF6B8B',
                imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 1000, // AUMENTADO: 1000 EXP para nivel 2
                estadoAnimo: 'neutral',
                afinidad: 0,
                descripcion: 'La hermana mayor, responsable y coqueta. Le gusta cuidar a los demás.',
                dificultad: 'media',
                probabilidadBase: 40, // REDUCIDO: Más difícil
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 3, // NUEVO: Nivel mínimo para momentos íntimos
                // PRECIOS AUMENTADOS: Acorde a lo que ganas (2-3 soles por mazo)
                actividadesEspeciales: [
                    { id: 'cafe_romantico', nombre: '☕ Café Romántico', costo: 500, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 25, exp: 80, descripcion: 'Tómate un café íntimo con Ichika' },
                    { id: 'estudio_juntos', nombre: '📚 Estudio Juntos', costo: 300, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 20, exp: 60, descripcion: 'Estudia con Ichika después de clases' },
                    { id: 'paseo_noche', nombre: '🌙 Paseo Nocturno', costo: 800, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 30, exp: 100, descripcion: 'Un romántico paseo bajo las estrellas' }
                ],
                momentosIntimos: [
                    { 
                        id: 'mamada', 
                        nombre: '😮 Mamada Apasionada', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 50, 
                        exp: 200, 
                        descripcion: 'Una mamada profunda y apasionada',
                        probabilidadExito: 30, // MUY BAJA
                        probabilidadBase: 30,
                        nivelRequerido: 3
                    },
                    { 
                        id: 'sexo_oral', 
                        nombre: '👅 Sexo Oral Intenso', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 40, 
                        exp: 150, 
                        descripcion: 'Sexo oral hasta que se corra en tu boca',
                        probabilidadExito: 25,
                        probabilidadBase: 25,
                        nivelRequerido: 4
                    },
                    { 
                        id: 'caricia_intima', 
                        nombre: '👐 Caricia Íntima', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 20, 
                        exp: 80, 
                        descripcion: 'Una caricia en sus partes más íntimas',
                        probabilidadExito: 40,
                        probabilidadBase: 40,
                        nivelRequerido: 2
                    },
                    { 
                        id: 'sexo_duro', 
                        nombre: '💪 Sexo Duro', 
                        condonesRequeridos: 2,
                        condones001Requeridos: 0,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 80, 
                        exp: 300, 
                        descripcion: 'Dale duro hasta que grite tu nombre',
                        probabilidadExito: 15, // MUY DIFÍCIL
                        probabilidadBase: 15,
                        nivelRequerido: 5
                    },
                    { 
                        id: 'correrse_dentro', 
                        nombre: '💦 Correrse Dentro', 
                        condonesRequeridos: 3,
                        condones001Requeridos: 1,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 100, 
                        exp: 500, 
                        descripcion: 'El momento final, correrse dentro de ella',
                        probabilidadExito: 10, // EXTREMADAMENTE DIFÍCIL
                        probabilidadBase: 10,
                        nivelRequerido: 6
                    }
                ]
            },
            'nino': {
                nombre: 'Nino Nakano',
                color: '#FFB347',
                imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 1200, // AÚN MÁS DIFÍCIL
                estadoAnimo: 'tsundere',
                afinidad: -50, // EMPIEZA CON AFINIDAD NEGATIVA
                descripcion: 'Tsundere clásica, difícil de conquistar. Cocina increíblemente bien.',
                dificultad: 'alta',
                probabilidadBase: 20, // MUY BAJA
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 4, // MÁS ALTO QUE LAS DEMÁS
                actividadesEspeciales: [
                    { id: 'clases_cocina', nombre: '👩‍🍳 Clases de Cocina', costo: 600, videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', afinidad: 40, exp: 90, descripcion: 'Aprende a cocinar con Nino' },
                    { id: 'pelicula_hogar', nombre: '🎬 Película en Casa', costo: 400, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 25, exp: 70, descripcion: 'Ve una película romántica en el sofá' },
                    { id: 'concierto', nombre: '🎵 Concierto Juntos', costo: 1000, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 50, exp: 120, descripcion: 'Llévala a ver su banda favorita' }
                ],
                momentosIntimos: [
                    { 
                        id: 'mamada_tsundere', 
                        nombre: '😤 Mamada Tsundere', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 60, 
                        exp: 250, 
                        descripcion: 'Una mamada a regañadientes pero intensa',
                        probabilidadExito: 20,
                        probabilidadBase: 20,
                        nivelRequerido: 4
                    },
                    { 
                        id: 'sexo_duro_tsundere', 
                        nombre: '💢 Sexo Duro Tsundere', 
                        condonesRequeridos: 2,
                        condones001Requeridos: 0,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 90, 
                        exp: 400, 
                        descripcion: 'Dale duro mientras dice "no es que me guste"',
                        probabilidadExito: 12,
                        probabilidadBase: 12,
                        nivelRequerido: 6
                    },
                    { 
                        id: 'corrida_cara', 
                        nombre: '💦 Corrida en la Cara', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 1,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 120, 
                        exp: 600, 
                        descripcion: 'Correrse en su cara mientras te mira con odio',
                        probabilidadExito: 8,
                        probabilidadBase: 8,
                        nivelRequerido: 7
                    }
                ]
            },
            'miku': {
                nombre: 'Miku Nakano',
                color: '#6A5ACD',
                imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 800, // ALGO MÁS FÁCIL
                estadoAnimo: 'tímida',
                afinidad: 10,
                descripcion: 'Tímida y reservada, le gusta la historia japonesa y los audífonos.',
                dificultad: 'media-baja',
                probabilidadBase: 50,
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 2,
                actividadesEspeciales: [
                    { id: 'visita_templo', nombre: '⛩️ Visita al Templo', costo: 250, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 15, exp: 50, descripcion: 'Visita un templo histórico con Miku' },
                    { id: 'biblioteca', nombre: '📖 Tarde en Biblioteca', costo: 200, videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', afinidad: 10, exp: 40, descripcion: 'Estudia historia en la biblioteca' },
                    { id: 'concierto_tradicional', nombre: '🎶 Concierto Tradicional', costo: 600, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 35, exp: 95, descripcion: 'Asiste a un concierto de música tradicional' }
                ],
                momentosIntimos: [
                    { 
                        id: 'mamada_timida', 
                        nombre: '😳 Mamada Tímida', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 40, 
                        exp: 180, 
                        descripcion: 'Una mamada suave y llena de timidez',
                        probabilidadExito: 35,
                        probabilidadBase: 35,
                        nivelRequerido: 2
                    },
                    { 
                        id: 'sexo_lento', 
                        nombre: '🐌 Sexo Lento', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 60, 
                        exp: 250, 
                        descripcion: 'Sexo lento y romántico',
                        probabilidadExito: 30,
                        probabilidadBase: 30,
                        nivelRequerido: 3
                    },
                    { 
                        id: 'correrse_dentro_miku', 
                        nombre: '💕 Correrse Dentro', 
                        condonesRequeridos: 2,
                        condones001Requeridos: 1,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 80, 
                        exp: 350, 
                        descripcion: 'Correrse dentro mientras te abraza',
                        probabilidadExito: 20,
                        probabilidadBase: 20,
                        nivelRequerido: 5
                    }
                ]
            },
            'yotsuba': {
                nombre: 'Yotsuba Nakano',
                color: '#4CAF50',
                imagen: 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 700, // LA MÁS FÁCIL
                estadoAnimo: 'energica',
                afinidad: 30,
                descripcion: 'La más enérgica y deportista. Siempre lista para ayudar.',
                dificultad: 'baja',
                probabilidadBase: 60,
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 2,
                actividadesEspeciales: [
                    { id: 'partido_futbol', nombre: '⚽ Partido de Fútbol', costo: 300, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 20, exp: 60, descripcion: 'Juega un partido de fútbol con Yotsuba' },
                    { id: 'voluntariado', nombre: '🤝 Día de Voluntariado', costo: 150, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 15, exp: 45, descripcion: 'Ayuda a otros junto a Yotsuba' },
                    { id: 'carrera_atletismo', nombre: '🏃‍♀️ Carrera de Atletismo', costo: 500, videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', afinidad: 30, exp: 85, descripcion: 'Participa en una carrera juntos' }
                ],
                momentosIntimos: [
                    { 
                        id: 'mamada_energica', 
                        nombre: '💪 Mamada Energética', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 45, 
                        exp: 200, 
                        descripcion: 'Una mamada llena de energía y entusiasmo',
                        probabilidadExito: 40,
                        probabilidadBase: 40,
                        nivelRequerido: 2
                    },
                    { 
                        id: 'sexo_rapido', 
                        nombre: '⚡ Sexo Rápido', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 70, 
                        exp: 300, 
                        descripcion: 'Sexo rápido y apasionado',
                        probabilidadExito: 35,
                        probabilidadBase: 35,
                        nivelRequerido: 3
                    },
                    { 
                        id: 'doble_penetracion', 
                        nombre: '👯‍♀️ Doble Penetración', 
                        condonesRequeridos: 2,
                        condones001Requeridos: 1,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 100, 
                        exp: 500, 
                        descripcion: 'Doble penetración con otra hermana (fantasía)',
                        probabilidadExito: 15,
                        probabilidadBase: 15,
                        nivelRequerido: 6
                    }
                ]
            },
            'itsuki': {
                nombre: 'Itsuki Nakano',
                color: '#FFD166',
                imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 900,
                estadoAnimo: 'glotona',
                afinidad: 15,
                descripcion: 'La más glotona, le encanta comer. Es estudiosa y honesta.',
                dificultad: 'baja',
                probabilidadBase: 55,
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 3,
                actividadesEspeciales: [
                    { id: 'buffet_ilimitado', nombre: '🍣 Buffet Ilimitado', costo: 800, videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', afinidad: 40, exp: 100, descripcion: 'Llévala a un buffet de sushi' },
                    { id: 'cocina_postres', nombre: '🍰 Clase de Postres', costo: 400, videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', afinidad: 25, exp: 75, descripcion: 'Aprende a hacer postres con Itsuki' },
                    { id: 'picnic_parque', nombre: '🧺 Picnic en el Parque', costo: 350, videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', afinidad: 20, exp: 65, descripcion: 'Un picnic con mucha comida' }
                ],
                momentosIntimos: [
                    { 
                        id: 'mamada_con_sabor', 
                        nombre: '🍓 Mamada con Sabor', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 50, 
                        exp: 220, 
                        descripcion: 'Una mamada que sabe a fresas',
                        probabilidadExito: 38,
                        probabilidadBase: 38,
                        nivelRequerido: 3
                    },
                    { 
                        id: 'sexo_gloton', 
                        nombre: '🍔 Sexo Glotón', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 65, 
                        exp: 280, 
                        descripcion: 'Sexo mientras come algo dulce',
                        probabilidadExito: 32,
                        probabilidadBase: 32,
                        nivelRequerido: 4
                    },
                    { 
                        id: 'correrse_boca', 
                        nombre: '👄 Correrse en la Boca', 
                        condonesRequeridos: 1,
                        condones001Requeridos: 1,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 90, 
                        exp: 400, 
                        descripcion: 'Correrse en su boca y que se lo trague',
                        probabilidadExito: 18,
                        probabilidadBase: 18,
                        nivelRequerido: 6
                    }
                ]
            }
        };
    }

    // ====================
    // SISTEMA DE EXP Y NIVELES DIFICULTOSO
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
        personaje.expNecesaria = Math.round(personaje.expNecesaria * 1.8); // AUMENTADO: 80% más por nivel
        
        console.log(`🎉 ¡${personaje.nombre} subió al nivel ${personaje.nivel}!`);
        this.mostrarNotificacion(`🎉 ${personaje.nombre} nivel ${personaje.nivel}! (Necesitas ${personaje.expNecesaria} EXP para el siguiente)`);
        
        this.desbloquearVideo(personajeId);
        this.guardarDatosPersonajes();
    }

    desbloquearVideo(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        const nivel = personaje.nivel;
        
        const videosPorNivel = {
            2: { id: 'presentacion', nombre: 'Presentación', videoId: this.obtenerVideoIdPorNivel(personajeId, 2) },
            4: { id: 'conversacion_1', nombre: 'Conversación', videoId: this.obtenerVideoIdPorNivel(personajeId, 4) },
            6: { id: 'paseo', nombre: 'Primer Paseo', videoId: this.obtenerVideoIdPorNivel(personajeId, 6) },
            8: { id: 'confesion', nombre: 'Confesión', videoId: this.obtenerVideoIdPorNivel(personajeId, 8) },
            10: { id: 'primer_beso', nombre: 'Primer Beso', videoId: this.obtenerVideoIdPorNivel(personajeId, 10) }
        };
        
        if (videosPorNivel[nivel] && !personaje.videosDisponibles.some(v => v.id === videosPorNivel[nivel].id)) {
            personaje.videosDisponibles.push(videosPorNivel[nivel]);
            console.log(`🎥 Video desbloqueado: ${videosPorNivel[nivel].nombre} (Nivel ${nivel})`);
            this.mostrarNotificacion(`🎬 ¡Video desbloqueado! ${videosPorNivel[nivel].nombre}`);
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
        
        const indice = Math.floor((nivel / 2) - 1);
        return videos[personajeId][indice] || videos[personajeId][0];
    }

    // ====================
    // SISTEMA DE UI MEJORADO
    // ====================

    cargarPaginaPrincipal() {
        return `
            <div style="max-width: 1400px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: #FF1493; margin-bottom: 10px; font-size: 3rem;">
                    🎮 RPG QUINTILLIZAS NAKANO - SISTEMA DIFICULTOSO
                </h1>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 40px; font-size: 1.2rem;">
                    Conquista a las 5 hermanas. Gana dinero estudiando, gasta en conquistarlas. <strong>¡Es difícil!</strong>
                </p>
                
                <!-- ESTADO ACTUAL -->
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
                            <div style="color: #FF69B4; font-size: 0.9rem;">🛒 Condones Normales</div>
                            <div style="font-size: 1.3rem; font-weight: bold; color: #4CAF50;">
                                ${this.condones} unidades
                            </div>
                        </div>
                        <div>
                            <div style="color: #FF69B4; font-size: 0.9rem;">💎 Condones 0.01</div>
                            <div style="font-size: 1.3rem; font-weight: bold; color: #5864F5;">
                                ${this.condones001} unidades
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- PERSONAJES CON IMÁGENES -->
                <h2 style="text-align: center; color: #FFD166; margin-bottom: 30px;">💖 SELECCIONA UNA HERMANA</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; margin-bottom: 50px;">
                    ${this.crearCardsPersonajes()}
                </div>
                
                <!-- TIENDA DE CONDONES MEJORADA -->
                <div style="background: linear-gradient(135deg, rgba(88, 100, 245, 0.1), rgba(138, 90, 247, 0.1)); border-radius: 20px; padding: 25px; margin-bottom: 40px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🛍️ TIENDA DE CONDONES</h3>
                    <p style="opacity: 0.8; margin-bottom: 20px;">
                        <strong>Condones Normales (S/.50):</strong> Para momentos íntimos básicos<br>
                        <strong>Condones 0.01 (S/.200):</strong> Efectos especiales + mayor probabilidad de éxito
                    </p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                        <!-- CONDONES NORMALES -->
                        <div style="background: rgba(76, 175, 80, 0.1); border-radius: 15px; padding: 20px; border: 2px solid #4CAF50;">
                            <h4 style="color: #4CAF50; margin-bottom: 15px;">🛒 Condones Normales</h4>
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                <button class="card-button" onclick="comprarCondonesRPG(1)" 
                                        style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                                    1 Condón - S/.50
                                </button>
                                <button class="card-button" onclick="comprarCondonesRPG(5)" 
                                        style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                                    5 Condones - S/.250
                                </button>
                            </div>
                        </div>
                        
                        <!-- CONDONES 0.01 -->
                        <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 20px; border: 2px solid #5864F5;">
                            <h4 style="color: #5864F5; margin-bottom: 15px;">💎 Condones 0.01</h4>
                            <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 15px;">
                                +30% probabilidad de éxito<br>
                                +50% afinidad obtenida
                            </p>
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                <button class="card-button" onclick="comprarCondones001RPG(1)" 
                                        style="background: linear-gradient(135deg, #5864F5, #8A5AF7);">
                                    1 Condón 0.01 - S/.200
                                </button>
                                <button class="card-button" onclick="comprarCondones001RPG(3)" 
                                        style="background: linear-gradient(135deg, #5864F5, #8A5AF7);">
                                    3 Condones 0.01 - S/.600
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <p style="text-align: center; opacity: 0.7; font-size: 0.9rem;">
                        💡 Consejo: Los condones 0.01 son caros pero aumentan mucho tus probabilidades
                    </p>
                </div>
                
                <!-- BOTÓN MISIONES -->
                <div style="text-align: center; margin-bottom: 30px;">
                    <button class="card-button" onclick="cargarPaginaMisiones()" 
                            style="background: linear-gradient(135deg, #FFD166, #FF6B6B); padding: 15px 30px; font-size: 1.1rem;">
                        🎯 VER MISIONES DIARIAS Y SEMANALES
                    </button>
                </div>
                
                <!-- INSTRUCCIONES ACTUALIZADAS -->
                <div style="background: rgba(255, 209, 102, 0.1); border-radius: 20px; padding: 25px; border-left: 5px solid #FFD166;">
                    <h4 style="color: #FFD166; margin-bottom: 15px;">📖 ¿CÓMO FUNCIONA EL SISTEMA DIFICULTOSO?</h4>
                    <ol style="padding-left: 20px; opacity: 0.8;">
                        <li><strong>Niveles altos:</strong> Necesitas 1000+ EXP por nivel</li>
                        <li><strong>Probabilidades bajas:</strong> Los momentos íntimos tienen 10-40% de éxito</li>
                        <li><strong>Nivel requerido:</strong> Necesitas nivel 3+ para momentos íntimos</li>
                        <li><strong>Condones especiales:</strong> Los 0.01 dan +30% probabilidad</li>
                        <li><strong>Precios realistas:</strong> Acordes a lo que ganas (2-3 soles/mazo)</li>
                        <li><strong>Conquista lenta:</strong> Tendrás que estudiar mucho para cogerlas</li>
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
                     style="border: 2px solid ${personaje.color}; ${esSeleccionado ? 'border-width: 4px; box-shadow: 0 0 20px ' + personaje.color + '50;' : ''}; background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px; cursor: pointer; transition: all 0.3s ease;"
                     onclick="seleccionarPersonajeRPG('${id}')">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                        <div style="position: relative;">
                            <img src="${personaje.imagen}" 
                                 alt="${personaje.nombre}"
                                 style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid ${personaje.color};">
                            ${esSeleccionado ? 
                                `<div style="position: absolute; top: -5px; right: -5px; background: ${personaje.color}; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; border: 2px solid white;">
                                    ✓
                                </div>` 
                                : ''}
                        </div>
                        <div>
                            <h3 style="color: ${personaje.color}; margin: 0;">${personaje.nombre}</h3>
                            <p style="opacity: 0.7; margin: 5px 0 0 0; font-size: 0.9rem;">
                                Nivel ${personaje.nivel} • ${personaje.dificultad.toUpperCase()}
                            </p>
                        </div>
                    </div>
                    
                    <!-- BARRA DE EXP -->
                    <div style="margin-bottom: 15px;">
                        <div style="background: rgba(255,255,255,0.1); height: 10px; border-radius: 5px; overflow: hidden;">
                            <div style="background: ${personaje.color}; width: ${(personaje.exp / personaje.expNecesaria) * 100}%; height: 100%;"></div>
                        </div>
                        <p style="font-size: 0.9rem; margin-top: 5px; color: ${personaje.color};">
                            ${personaje.exp}/${personaje.expNecesaria} EXP
                        </p>
                    </div>
                    
                    <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 15px;">
                        ${personaje.descripcion}
                    </p>
                    
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; opacity: 0.7;">
                        <div>💝 ${personaje.afinidad >= 0 ? '+' : ''}${personaje.afinidad}</div>
                        <div>${this.obtenerEmojiEstado(personaje.estadoAnimo)} ${personaje.estadoAnimo.toUpperCase()}</div>
                        <div>🎯 ${personaje.probabilidadBase}%</div>
                    </div>
                    
                    <!-- NIVEL REQUERIDO PARA ÍNTIMOS -->
                    <div style="background: rgba(255, 20, 147, 0.1); padding: 8px; border-radius: 8px; margin-top: 10px; text-align: center;">
                        <span style="font-size: 0.8rem; color: #FF1493;">
                            🔞 Nivel ${personaje.nivelRequeridoParaIntimos}+ para íntimos
                        </span>
                    </div>
                    
                    ${esSeleccionado ? 
                        `<div style="background: ${personaje.color}; color: white; padding: 8px; border-radius: 10px; margin-top: 10px; text-align: center; font-weight: bold;">
                            ✅ SELECCIONADA
                        </div>` 
                        : ''}
                </div>
            `;
        }).join('');
    }

    seleccionarPersonajeUI(personajeId) {
        this.personajeSeleccionado = personajeId;
        this.guardarPersonajeSeleccionado();
        
        const personaje = this.datosPersonajes[personajeId];
        this.mostrarNotificacion(`💖 Seleccionaste a ${personaje.nombre} (Nivel ${personaje.nivel})`);
        
        this.actualizarVistaConPersonaje();
    }

    actualizarVistaConPersonaje() {
        const mangaSection = document.getElementById('manga-section');
        if (!mangaSection) return;
        
        mangaSection.innerHTML = '';
        
        const botonVolver = document.createElement('button');
        botonVolver.className = 'btn-atras-especifico';
        botonVolver.innerHTML = '← Volver al RPG Principal';
        botonVolver.style.margin = '20px';
        botonVolver.onclick = () => {
            mangaSection.innerHTML = this.cargarPaginaPrincipal();
            const botonInicio = crearBotonVolver(volverAlInicio);
            mangaSection.insertBefore(botonInicio, mangaSection.firstChild);
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
                <!-- CABECERA PERSONAJE -->
                <div style="background: ${personaje.color}20; border-radius: 20px; padding: 30px; margin-bottom: 30px; border: 3px solid ${personaje.color}; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; right: 0; width: 200px; height: 200px; background: ${personaje.color}10; border-radius: 0 20px 0 100px; z-index: 1;"></div>
                    
                    <div style="display: flex; align-items: center; gap: 25px; flex-wrap: wrap; position: relative; z-index: 2;">
                        <div style="position: relative;">
                            <img src="${personaje.imagen}" 
                                 alt="${personaje.nombre}"
                                 style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 5px solid ${personaje.color}; box-shadow: 0 10px 20px rgba(0,0,0,0.3);">
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
                                    <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">ESTADO</div>
                                    <div style="font-size: 1.5rem; font-weight: bold; text-transform: uppercase;">
                                        ${this.obtenerEmojiEstado(personaje.estadoAnimo)} ${personaje.estadoAnimo}
                                    </div>
                                </div>
                                <div>
                                    <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">DIFICULTAD</div>
                                    <div style="font-size: 1.5rem; font-weight: bold; text-transform: uppercase;">
                                        ${personaje.dificultad}
                                    </div>
                                </div>
                                <div>
                                    <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">NIVEL REQUERIDO</div>
                                    <div style="font-size: 1.5rem; font-weight: bold; color: #FF1493;">
                                        ${personaje.nivelRequeridoParaIntimos}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- BARRA DE EXP -->
                    <div style="margin-top: 25px; position: relative; z-index: 2;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span style="color: ${personaje.color}; font-weight: bold;">PROGRESO HACIA NIVEL ${personaje.nivel + 1}</span>
                            <span style="color: ${personaje.color};">${personaje.exp}/${personaje.expNecesaria} EXP</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.1); height: 15px; border-radius: 10px; overflow: hidden;">
                            <div style="background: linear-gradient(135deg, ${personaje.color}, ${this.oscurecerColor(personaje.color)}); 
                                      width: ${(personaje.exp / personaje.expNecesaria) * 100}%; height: 100%;"></div>
                        </div>
                        <p style="text-align: center; margin-top: 10px; opacity: 0.8;">
                            <strong>${personaje.descripcion}</strong>
                        </p>
                        <p style="text-align: center; margin-top: 15px; color: #FFD166; font-weight: bold;">
                            💖 ¡Gana EXP respondiendo correctamente en los quizzes! (+20 EXP/palabra)
                        </p>
                    </div>
                </div>
                
                <!-- MOMENTOS ÍNTIMOS (SOLO SI TIENE NIVEL SUFICIENTE) -->
                ${personaje.nivel >= personaje.nivelRequeridoParaIntimos ? `
                    <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #FF1493;">
                        <h3 style="color: #FF1493; margin-bottom: 15px;">💖 MOMENTOS ÍNTIMOS (🔞 +18)</h3>
                        <p style="opacity: 0.8; margin-bottom: 20px;">
                            Intenta momentos íntimos con ${personaje.nombre.split(' ')[0]}. 
                            <strong>Nivel requerido:</strong> ${personaje.nivelRequeridoParaIntimos}+ | 
                            <strong>Tu nivel:</strong> ${personaje.nivel}
                        </p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; margin-bottom: 20px;">
                            ${personaje.momentosIntimos.map(momento => {
                                const probabilidadReal = this.calcularProbabilidadMomento(personaje, momento);
                                const tieneCondonesNormales = this.condones >= momento.condonesRequeridos;
                                const tieneCondonesEspeciales = this.condones001 >= momento.condones001Requeridos;
                                const puedeIntentar = tieneCondonesNormales && tieneCondonesEspeciales;
                                const nivelSuficiente = personaje.nivel >= (momento.nivelRequerido || 1);
                                
                                return `
                                    <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; border: 1px solid ${personaje.color}50;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                            <span style="font-weight: bold; font-size: 1.1rem;">${momento.nombre}</span>
                                            <span style="color: #FFD166; font-size: 0.9rem;">
                                                ${momento.condonesRequeridos > 0 ? `${momento.condonesRequeridos}🛒` : ''}
                                                ${momento.condones001Requeridos > 0 ? `${momento.condones001Requeridos}💎` : ''}
                                            </span>
                                        </div>
                                        <p style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 10px;">${momento.descripcion}</p>
                                        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 15px;">
                                            <span style="color: #4CAF50;">+${momento.afinidad} afinidad</span>
                                            <span style="color: #FFD166;">+${momento.exp} EXP</span>
                                        </div>
                                        <div style="background: rgba(255,255,255,0.1); height: 6px; border-radius: 3px; margin-bottom: 10px;">
                                            <div style="background: linear-gradient(135deg, #FF1493, #FF6B6B); width: ${probabilidadReal}%; height: 100%;"></div>
                                        </div>
                                        <p style="text-align: center; font-size: 0.9rem; margin-bottom: 10px; color: #FFD166;">
                                            Éxito: ${probabilidadReal}% ${momento.nivelRequerido ? `| Nivel ${momento.nivelRequerido}+` : ''}
                                        </p>
                                        <button class="card-button" 
                                                onclick="intentarMomentoIntimoRPG('${this.personajeSeleccionado}', '${momento.id}')"
                                                style="padding: 12px 20px; font-size: 1rem; background: linear-gradient(135deg, ${personaje.color}, #FF1493); width: 100%; border: none; border-radius: 10px; color: white; cursor: pointer; font-weight: bold;"
                                                ${!puedeIntentar || !nivelSuficiente ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                                            ${!nivelSuficiente ? `❌ NIVEL ${momento.nivelRequerido} REQUERIDO` : 
                                              !puedeIntentar ? `❌ CONDONES INSUFICIENTES` : 
                                              '💖 INTENTAR MOMENTO ÍNTIMO'}
                                        </button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        
                        <div style="background: rgba(88, 100, 245, 0.1); padding: 15px; border-radius: 10px; margin-bottom: 15px;">
                            <p style="text-align: center; opacity: 0.8; font-size: 0.9rem;">
                                Condones disponibles: ${this.condones}🛒 | Condones 0.01: ${this.condones001}💎
                            </p>
                            <p style="text-align: center; opacity: 0.7; font-size: 0.8rem; margin-top: 5px;">
                                💎 Los condones 0.01 dan +30% probabilidad y +50% afinidad
                            </p>
                        </div>
                    </div>
                ` : `
                    <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #FF1493; text-align: center;">
                        <h3 style="color: #FF1493; margin-bottom: 15px;">🔞 MOMENTOS ÍNTIMOS BLOQUEADOS</h3>
                        <p style="opacity: 0.8; margin-bottom: 15px;">
                            Necesitas nivel <strong>${personaje.nivelRequeridoParaIntimos}</strong> para desbloquear momentos íntimos con ${personaje.nombre.split(' ')[0]}
                        </p>
                        <p style="opacity: 0.7;">
                            Tu nivel actual: <strong>${personaje.nivel}</strong> | 
                            EXP necesario: <strong>${personaje.expNecesaria - personaje.exp} EXP</strong>
                        </p>
                        <div style="margin-top: 20px;">
                            <button class="card-button" onclick="cargarPaginaMangas()" 
                                    style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 12px 25px;">
                                📚 IR A ESTUDIAR PARA GANAR EXP
                            </button>
                        </div>
                    </div>
                `}
                
                <!-- ACTIVIDADES ESPECIALES -->
                <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #FFD166;">
                    <h3 style="color: #FFD166; margin-bottom: 15px;">✨ ACTIVIDADES ESPECIALES</h3>
                    <p style="opacity: 0.8; margin-bottom: 20px;">
                        Actividades con ${personaje.nombre.split(' ')[0]}. Se pueden comprar siempre que tengas dinero.
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px;">
                        ${personaje.actividadesEspeciales.map(actividad => {
                            const puedeComprar = dinero >= actividad.costo;
                            
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
                                    
                                    <button class="card-button" onclick="comprarActividadRPG('${this.personajeSeleccionado}', '${actividad.id}')"
                                            style="padding: 12px 20px; font-size: 1rem; background: linear-gradient(135deg, #4CAF50, #2E7D32); margin-top: 10px; border: none; border-radius: 10px; color: white; cursor: pointer; font-weight: bold;"
                                            ${!puedeComprar ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                                        ${!puedeComprar ? '💰 DINERO INSUFICIENTE' : '✨ COMPRAR ACTIVIDAD'}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <!-- VIDEOS DESBLOQUEADOS -->
                <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🎬 VIDEOS DESBLOQUEADOS</h3>
                    ${personaje.videosDisponibles.length > 0 ? 
                        `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
                            ${personaje.videosDisponibles.map((video, index) => `
                                <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px; text-align: center; cursor: pointer; transition: all 0.3s ease; border: 1px solid rgba(88, 100, 245, 0.3);"
                                     onclick="cargarVideoNivel('${this.personajeSeleccionado}', ${(index + 1) * 2})">
                                    <div style="font-size: 2rem; margin-bottom: 10px;">🎥</div>
                                    <div style="font-weight: bold;">${video.nombre}</div>
                                    <div style="font-size: 0.8rem; opacity: 0.7; margin-top: 5px;">Desbloqueado en nivel ${(index + 1) * 2}</div>
                                </div>
                            `).join('')}
                        </div>` 
                        : `<p style="text-align: center; opacity: 0.7; padding: 20px;">
                            Aún no hay videos desbloqueados. ¡Sube de nivel completando mazos! (Videos en niveles 2, 4, 6, 8, 10)
                        </p>`}
                </div>
                
                <!-- ESTADÍSTICAS -->
                <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 25px;">
                    <h3 style="color: #FFD166; margin-bottom: 20px;">📈 ESTADÍSTICAS DETALLADAS</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                        <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px;">
                            <div style="color: ${personaje.color}; font-size: 0.9rem;">PROB. BASE</div>
                            <div style="font-size: 1.5rem; font-weight: bold;">${personaje.probabilidadBase}%</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px;">
                            <div style="color: ${personaje.color}; font-size: 0.9rem;">VIDEOS</div>
                            <div style="font-size: 1.5rem; font-weight: bold;">${personaje.videosDisponibles.length}/5</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px;">
                            <div style="color: ${personaje.color}; font-size: 0.9rem;">NEXT LEVEL</div>
                            <div style="font-size: 1.5rem; font-weight: bold;">${personaje.expNecesaria - personaje.exp} EXP</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px;">
                            <div style="color: ${personaje.color}; font-size: 0.9rem;">CONDONES</div>
                            <div style="font-size: 1.5rem; font-weight: bold;">${this.condones}🛒 ${this.condones001}💎</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // ====================
    // NUEVO: SISTEMA DE MOMENTOS ÍNTIMOS CON CONDONES ESPECIALES
    // ====================

    intentarMomentoIntimo(personajeId, momentoId) {
        const personaje = this.datosPersonajes[personajeId];
        const momento = personaje.momentosIntimos.find(m => m.id === momentoId);
        
        if (!momento) {
            this.mostrarNotificacion('❌ Momento íntimo no encontrado');
            return false;
        }
        
        // Verificar nivel requerido
        if (personaje.nivel < (momento.nivelRequerido || 1)) {
            this.mostrarNotificacion(`❌ Necesitas nivel ${momento.nivelRequerido} para este momento íntimo`);
            return false;
        }
        
        // Verificar condones normales
        if (this.condones < momento.condonesRequeridos) {
            this.mostrarNotificacion(`❌ Necesitas ${momento.condonesRequeridos} condones normales`);
            return false;
        }
        
        // Verificar condones especiales si son requeridos
        if (this.condones001 < momento.condones001Requeridos) {
            this.mostrarNotificacion(`❌ Necesitas ${momento.condones001Requeridos} condones 0.01`);
            return false;
        }
        
        // Preguntar si usar condón especial si está disponible pero no requerido
        let usarCondonEspecial = false;
        if (this.condones001 > 0 && momento.condones001Requeridos === 0) {
            usarCondonEspecial = confirm(`¿Quieres usar un condón 0.01? (+30% probabilidad, +50% afinidad)\n\nTienes: ${this.condones001} condones 0.01`);
            
            if (usarCondonEspecial) {
                momento.condones001Requeridos = 1; // Temporalmente requerido
            }
        }
        
        // Calcular probabilidad real
        const probabilidadReal = this.calcularProbabilidadMomento(personaje, momento, usarCondonEspecial);
        console.log(`🎯 Probabilidad para ${momento.nombre}: ${probabilidadReal}% ${usarCondonEspecial ? '(con condón 0.01)' : ''}`);
        
        const exito = Math.random() * 100 < probabilidadReal;
        
        if (exito) {
            // ÉXITO
            this.condones -= momento.condonesRequeridos;
            if (usarCondonEspecial || momento.condones001Requeridos > 0) {
                this.condones001 -= momento.condones001Requeridos;
            }
            this.guardarCondones();
            this.guardarCondones001();
            
            let afinidadGanada = momento.afinidad;
            let expGanada = momento.exp;
            
            // Bonus por condón especial
            if (usarCondonEspecial || momento.condones001Requeridos > 0) {
                afinidadGanada = Math.round(afinidadGanada * 1.5); // +50%
                expGanada = Math.round(expGanada * 1.3); // +30%
                this.mostrarNotificacion(`💎 ¡Efecto condón 0.01! +50% afinidad, +30% EXP`);
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
            this.condones -= momento.condonesRequeridos;
            if (usarCondonEspecial || momento.condones001Requeridos > 0) {
                this.condones001 -= momento.condones001Requeridos;
            }
            this.guardarCondones();
            this.guardarCondones001();
            
            personaje.estadoAnimo = 'enojada';
            personaje.afinidad -= Math.floor(momento.afinidad / 3);
            
            console.log(`❌ ${momento.nombre} falló con ${personaje.nombre}`);
            this.mostrarNotificacion(`😠 ${momento.nombre} falló. ${personaje.nombre} se enojó.`);
            
            this.actualizarVistaConPersonaje();
            
            return false;
        }
    }

    calcularProbabilidadMomento(personaje, momento, usarCondonEspecial = false) {
        let probabilidad = momento.probabilidadBase;
        
        // Ajustes por nivel (más difícil de subir)
        probabilidad += (personaje.nivel - 1) * 5; // REDUCIDO: 5% por nivel en lugar de 10%
        
        // Ajustes por afinidad
        probabilidad += personaje.afinidad * 0.5; // REDUCIDO: Menos impacto de afinidad
        
        // Ajustes por estado de ánimo
        const ajustesEstado = {
            'feliz': 20,    // REDUCIDO
            'neutral': 0,
            'triste': -30,  // REDUCIDO
            'enojada': -50, // REDUCIDO
            'tsundere': -40,
            'tímida': -20,
            'energica': 15,
            'glotona': 18
        };
        
        probabilidad += ajustesEstado[personaje.estadoAnimo] || 0;
        
        // Bonus por condón especial
        if (usarCondonEspecial || momento.condones001Requeridos > 0) {
            probabilidad += 30; // +30% por condón 0.01
        }
        
        // Límites
        return Math.max(5, Math.min(95, Math.round(probabilidad)));
    }

    cargarVideoMomentoIntimo(personajeId, momento) {
        const personaje = this.datosPersonajes[personajeId];
        
        this.mostrarReproductorVideo({
            driveId: momento.videoId,
            titulo: `${momento.nombre} - ${personaje.nombre}`,
            duracion: '3:00',
            esExplicito: true
        }, personaje);
    }

    // ====================
    // SISTEMA DE ACTIVIDADES ESPECIALES
    // ====================

    comprarActividad(personajeId, actividadId) {
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
        this.mostrarNotificacion(`💝 ${personaje.nombre} muy feliz! +${actividad.afinidad} afinidad, +${actividad.exp} EXP`);
        
        this.cargarVideoActividad(personajeId, actividadId);
        
        return true;
    }

    cargarVideoActividad(personajeId, actividadId) {
        const personaje = this.datosPersonajes[personajeId];
        const actividad = personaje.actividadesEspeciales.find(a => a.id === actividadId);
        
        if (!actividad || !actividad.videoId) {
            this.mostrarNotificacion('❌ Video no disponible');
            return;
        }
        
        this.mostrarReproductorVideo({
            driveId: actividad.videoId,
            titulo: actividad.nombre,
            duracion: '3:00',
            esExplicito: false
        }, personaje);
    }

    cargarVideoNivel(personajeId, nivel) {
        const personaje = this.datosPersonajes[personajeId];
        const videoId = this.obtenerVideoIdPorNivel(personajeId, nivel);
        
        this.mostrarReproductorVideo({
            driveId: videoId,
            titulo: `Video Nivel ${nivel}`,
            duracion: '2:30',
            esExplicito: false
        }, personaje);
    }

    // ====================
    // SISTEMA DE CONDONES MEJORADO
    // ====================

    comprarCondones(cantidad) {
        const costoPorCondon = 50; // AUMENTADO: 50 soles por condón
        const costoTotal = cantidad * costoPorCondon;
        
        const dineroActual = sistemaEconomia.obtenerDinero();
        if (dineroActual < costoTotal) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return false;
        }
        
        sistemaEconomia.agregarDinero(-costoTotal);
        
        this.condones += cantidad;
        this.guardarCondones();
        
        console.log(`🛒 Comprados ${cantidad} condones normales por S/.${costoTotal}`);
        this.mostrarNotificacion(`🛍️ +${cantidad} condones normales comprados`);
        
        if (this.personajeSeleccionado) {
            this.actualizarVistaConPersonaje();
        }
        
        return true;
    }

    comprarCondones001(cantidad) {
        const costoPorCondon = 200; // MUY CAROS: 200 soles por condón 0.01
        const costoTotal = cantidad * costoPorCondon;
        
        const dineroActual = sistemaEconomia.obtenerDinero();
        if (dineroActual < costoTotal) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return false;
        }
        
        sistemaEconomia.agregarDinero(-costoTotal);
        
        this.condones001 += cantidad;
        this.guardarCondones001();
        
        console.log(`💎 Comprados ${cantidad} condones 0.01 por S/.${costoTotal}`);
        this.mostrarNotificacion(`💎 +${cantidad} condones 0.01 comprados (+30% éxito, +50% afinidad)`);
        
        if (this.personajeSeleccionado) {
            this.actualizarVistaConPersonaje();
        }
        
        return true;
    }

    // ====================
    // REPRODUCTOR DE VIDEOS
    // ====================

    mostrarReproductorVideo(video, personaje) {
        const advertencia = video.esExplicito ? 
            `<div style="background: rgba(255, 20, 147, 0.2); padding: 15px; border-radius: 10px; margin-bottom: 20px; border: 2px solid #FF1493;">
                <p style="color: #FF1493; font-weight: bold; text-align: center;">
                    ⚠️ CONTENIDO EXPLÍCITO +18 ⚠️
                </p>
            </div>` : '';
        
        const html = `
            <div class="reproductor-container" style="max-width: 800px; margin: 0 auto; padding: 30px;">
                ${advertencia}
                
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

    volverAPersonaje() {
        this.actualizarVistaConPersonaje();
    }

    // ====================
    // UTILIDADES
    // ====================

    obtenerEmojiEstado(estado) {
        const emojis = {
            'feliz': '😊',
            'neutral': '😐',
            'triste': '😢',
            'enojada': '😠',
            'tsundere': '😤',
            'tímida': '😳',
            'energica': '💪',
            'glotona': '🍔'
        };
        return emojis[estado] || '😐';
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

    guardarCondones001() {
        try {
            localStorage.setItem('rpg_condones001', this.condones001.toString());
        } catch (e) {
            console.warn('No se pudo guardar condones001:', e);
        }
    }

    cargarCondones001() {
        try {
            const condones = localStorage.getItem('rpg_condones001');
            return condones ? parseInt(condones) : 0;
        } catch (e) {
            console.warn('No se pudo cargar condones001:', e);
            return 0;
        }
    }

    seleccionarTipoCondon(tipo) {
        // Esta función podría usarse para seleccionar tipo de condón antes de intentar momento íntimo
        console.log(`Tipo de condón seleccionado: ${tipo}`);
        return tipo;
    }
}

// ================================================
// INTEGRACIÓN CON SISTEMA DE MAZOS
// ================================================

const agregarDineroOriginal = sistemaEconomia.agregarDinero;

sistemaEconomia.agregarDinero = function(cantidad) {
    const resultado = agregarDineroOriginal.call(this, cantidad);
    
    if (cantidad > 0 && window.quintillizasRPG && window.quintillizasRPG.personajeSeleccionado) {
        const expPorSoles = 10; // REDUCIDO: 10 EXP por sol (antes 20)
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
// INSTANCIA GLOBAL DEL RPG
// ================================================

const quintillizasRPG = new QuintillizasRPG();

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', function() {
    quintillizasRPG.inicializar();
    console.log('🎮 RPG Quintillizas - Sistema dificultoso listo');
    console.log('🔞 Momentos íntimos con títulos explícitos');
    console.log('💎 Sistema de condones 0.01 activo (+30% éxito, +50% afinidad)');
    console.log('📈 Niveles difíciles: 1000+ EXP por nivel');
    console.log('🎯 Probabilidades bajas: 10-40% de éxito en momentos íntimos');
    console.log('💰 Precios realistas: Acordes a lo que ganas estudiando');
});
