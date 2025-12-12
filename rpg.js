// ================================================
// RPG COMPLETO: LAS QUINTILLIZAS NAKANO - VERSIÓN UI FUNCIONAL
// ================================================

class QuintillizasRPG {
    constructor() {
        this.personajeSeleccionado = this.cargarPersonajeSeleccionado() || null;
        this.datosPersonajes = this.cargarDatosPersonajes() || this.inicializarDatosPersonajes();
        this.condones = this.cargarCondones() || 0;
        this.actividadesCompletadas = this.cargarActividades() || {};
        this.ultimaInteraccion = null;
    }

    // ====================
    // INICIALIZACIÓN
    // ====================

    inicializar() {
        console.log('🎮 RPG Quintillizas inicializado');
        
        // Hacer métodos globalmente accesibles
        window.seleccionarPersonajeRPG = (personajeId) => this.seleccionarPersonajeUI(personajeId);
        window.intentarInteraccionRPG = (personajeId) => this.intentarInteraccionIntima(personajeId);
        window.comprarActividadRPG = (personajeId, actividadId) => this.comprarActividad(personajeId, actividadId);
        window.comprarCondonesRPG = (cantidad) => this.comprarCondones(cantidad);
        window.verActividadRPG = (personajeId, actividadId) => this.cargarVideoActividad(personajeId, actividadId);
    }

    inicializarDatosPersonajes() {
        return {
            'ichika': {
                nombre: 'Ichika Nakano',
                color: '#FF6B8B',
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
                ]
            },
            'nino': {
                nombre: 'Nino Nakano',
                color: '#FFB347',
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
                ]
            },
            'miku': {
                nombre: 'Miku Nakano',
                color: '#6A5ACD',
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
                ]
            },
            'yotsuba': {
                nombre: 'Yotsuba Nakano',
                color: '#4CAF50',
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
                ]
            },
            'itsuki': {
                nombre: 'Itsuki Nakano',
                color: '#FFD166',
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
                ]
            }
        };
    }

    // ====================
    // SISTEMA DE EXP Y NIVELES - MODIFICADO PARA QUIZ
    // ====================

    agregarEXP(personajeId, cantidad) {
        // MODIFICACIÓN: Solo dar EXP si hay personaje seleccionado Y coincide
        if (!this.personajeSeleccionado || this.personajeSeleccionado !== personajeId) {
            console.log(`⚠️ No se puede añadir EXP: Personaje ${personajeId} no coincide con seleccionado ${this.personajeSeleccionado}`);
            return false;
        }

        const personaje = this.datosPersonajes[personajeId];
        personaje.exp += cantidad;
        
        console.log(`🎮 ${personaje.nombre} +${cantidad} EXP (Total: ${personaje.exp}/${personaje.expNecesaria})`);
        
        // Subir de nivel si alcanza la EXP necesaria
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
        
        // Desbloquear nuevo video al subir de nivel
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
    // SISTEMA DE UI Y NAVEGACIÓN
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
                            <div style="color: #FF69B4; font-size: 0.9rem;">🛒 Condones</div>
                            <div style="font-size: 1.3rem; font-weight: bold; color: #4CAF50;">
                                ${this.condones} unidades
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- PERSONAJES -->
                <h2 style="text-align: center; color: #FFD166; margin-bottom: 30px;">💖 SELECCIONA UNA HERMANA</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; margin-bottom: 50px;">
                    ${this.crearCardsPersonajes()}
                </div>
                
                <!-- TIENDA DE CONDONES -->
                <div style="background: rgba(88, 100, 245, 0.1); border-radius: 20px; padding: 25px; margin-bottom: 40px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🛍️ TIENDA DE CONDONES</h3>
                    <p style="opacity: 0.8; margin-bottom: 20px;">
                        Los condones son necesarios para momentos íntimos. Cada uno cuesta S/.20
                    </p>
                    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <button class="card-button" onclick="quintillizasRPG.comprarCondones(1)" 
                                style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                            1 Condón - S/.20
                        </button>
                        <button class="card-button" onclick="quintillizasRPG.comprarCondones(5)" 
                                style="background: linear-gradient(135deg, #5864F5, #8A5AF7);">
                            5 Condones - S/.100
                        </button>
                        <button class="card-button" onclick="quintillizasRPG.comprarCondones(10)" 
                                style="background: linear-gradient(135deg, #FF6B6B, #FFD166);">
                            10 Condones - S/.200
                        </button>
                    </div>
                </div>
                
                <!-- INSTRUCCIONES -->
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
        const personajes = [
            { id: 'ichika', icono: '👩‍🦰', desc: 'Hermana mayor coqueta' },
            { id: 'nino', icono: '👩‍🦳', desc: 'Tsundere que cocina bien' },
            { id: 'miku', icono: '🎧', desc: 'Tímida amante de la historia' },
            { id: 'yotsuba', icono: '🎗️', desc: 'Energética y deportista' },
            { id: 'itsuki', icono: '🍔', desc: 'Glotona y estudiosa' }
        ];
        
        return personajes.map(p => {
            const personaje = this.datosPersonajes[p.id];
            const esSeleccionado = this.personajeSeleccionado === p.id;
            
            return `
                <div class="personaje-card" 
                     style="border-color: ${personaje.color}; ${esSeleccionado ? 'border-width: 4px;' : ''}"
                     onclick="quintillizasRPG.seleccionarPersonajeUI('${p.id}')">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                        <div style="font-size: 2.5rem;">${p.icono}</div>
                        <div>
                            <h3 style="color: ${personaje.color}; margin: 0;">${personaje.nombre}</h3>
                            <p style="opacity: 0.7; margin: 5px 0 0 0; font-size: 0.9rem;">
                                Nivel ${personaje.nivel} • ${personaje.dificultad.toUpperCase()}
                            </p>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <div style="background: rgba(255,255,255,0.1); height: 10px; border-radius: 5px; overflow: hidden;">
                            <div style="background: ${personaje.color}; width: ${(personaje.exp / personaje.expNecesaria) * 100}%; height: 100%;"></div>
                        </div>
                        <p style="font-size: 0.9rem; margin-top: 5px; color: ${personaje.color};">
                            EXP: ${personaje.exp}/${personaje.expNecesaria}
                        </p>
                    </div>
                    
                    <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 15px;">
                        ${p.desc}
                    </p>
                    
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; opacity: 0.7;">
                        <div>💝 ${personaje.afinidad >= 0 ? '+' : ''}${personaje.afinidad}</div>
                        <div>${personaje.estadoAnimo.toUpperCase()}</div>
                        <div>🎯 ${personaje.probabilidadBase}%</div>
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
        this.mostrarNotificacion(`💖 Seleccionaste a ${personaje.nombre}`);
        
        // Actualizar la vista con la UI del personaje
        this.actualizarVistaConPersonaje();
    }

    actualizarVistaConPersonaje() {
        const mangaSection = document.getElementById('manga-section');
        if (!mangaSection) return;
        
        mangaSection.innerHTML = '';
        
        // Botón volver al RPG principal
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
        
        // Contenido del personaje
        const personajeDiv = document.createElement('div');
        personajeDiv.innerHTML = this.crearUIPersonaje();
        mangaSection.appendChild(personajeDiv);
    }

    crearUIPersonaje() {
        if (!this.personajeSeleccionado) return '<p>Selecciona un personaje primero</p>';
        
        const personaje = this.datosPersonajes[this.personajeSeleccionado];
        const probabilidadExito = this.calcularProbabilidadExito(personaje);
        const dinero = sistemaEconomia.obtenerDinero();
        
        return `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <!-- CABECERA PERSONAJE -->
                <div style="background: ${personaje.color}20; border-radius: 20px; padding: 30px; margin-bottom: 30px; border: 3px solid ${personaje.color};">
                    <div style="display: flex; align-items: center; gap: 25px; flex-wrap: wrap;">
                        <div style="font-size: 4rem;">${this.obtenerIconoPersonaje(personaje.nombre)}</div>
                        <div style="flex: 1;">
                            <h1 style="color: ${personaje.color}; margin: 0 0 10px 0; font-size: 2.5rem;">
                                ${personaje.nombre}
                            </h1>
                            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                                <div>
                                    <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">NIVEL</div>
                                    <div style="font-size: 2rem; font-weight: bold;">${personaje.nivel}</div>
                                </div>
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
                            </div>
                        </div>
                    </div>
                    
                    <!-- BARRA DE EXP -->
                    <div style="margin-top: 25px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span style="color: ${personaje.color}; font-weight: bold;">PROGRESO</span>
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
                            💖 ¡Gana EXP respondiendo correctamente en los quizzes!
                        </p>
                    </div>
                </div>
                
                <!-- ACCIONES PRINCIPALES -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-bottom: 40px;">
                    <!-- INTERACCIÓN ÍNTIMA -->
                    <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 25px; border: 2px solid #FF1493;">
                        <h3 style="color: #FF1493; margin-bottom: 15px;">💖 MOMENTO ÍNTIMO</h3>
                        <p style="opacity: 0.8; margin-bottom: 20px;">
                            Intenta un momento íntimo con ${personaje.nombre.split(' ')[0]}. 
                            <strong>Probabilidad de éxito: ${probabilidadExito}%</strong>
                        </p>
                        <div style="margin-bottom: 20px;">
                            <div style="color: #FF69B4; font-size: 0.9rem;">📊 FACTORES:</div>
                            <ul style="padding-left: 20px; opacity: 0.8; font-size: 0.9rem;">
                                <li>Base: ${personaje.probabilidadBase}%</li>
                                <li>Nivel ${personaje.nivel}: +${(personaje.nivel - 1) * 5}%</li>
                                <li>Afinidad: ${personaje.afinidad >= 0 ? '+' : ''}${personaje.afinidad}%</li>
                                <li>Estado "${personaje.estadoAnimo}": ${this.obtenerAjusteEstado(personaje.estadoAnimo)}%</li>
                            </ul>
                        </div>
                        <button class="card-button" onclick="quintillizasRPG.intentarInteraccionIntima('${this.personajeSeleccionado}')"
                                style="background: linear-gradient(135deg, #FF1493, #FF69B4); 
                                       width: 100%; 
                                       font-size: 1.2rem;
                                       padding: 20px;
                                       border: 3px solid ${this.condones <= 0 ? '#FF0000' : '#FFD166'};"
                                ${this.condones <= 0 ? 'disabled style="opacity: 0.7; cursor: not-allowed;"' : ''}>
                            ${this.condones <= 0 ? '❌ NO HAY CONDONES - COMPRA EN TIENDA' : `💖 INTENTAR MOMENTO ÍNTIMO (Usa 1 condón)`}
                        </button>
                        <p style="text-align: center; margin-top: 10px; font-size: 0.9rem; opacity: 0.7;">
                            Condones disponibles: ${this.condones}
                        </p>
                    </div>
                    
                    <!-- ACTIVIDADES ESPECIALES DE ESTA CHICA -->
                    <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 25px; border: 2px solid #FFD166;">
                        <h3 style="color: #FFD166; margin-bottom: 15px;">✨ ACTIVIDADES ESPECIALES</h3>
                        <p style="opacity: 0.8; margin-bottom: 20px;">
                            Actividades únicas para ${personaje.nombre.split(' ')[0]}.
                        </p>
                        
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            ${personaje.actividadesEspeciales.map(actividad => {
                                const yaComprada = this.actividadesCompletadas[this.personajeSeleccionado] && 
                                                   this.actividadesCompletadas[this.personajeSeleccionado].includes(actividad.id);
                                
                                return `
                                    <div style="display: flex; flex-direction: column; gap: 10px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
                                        <div style="display: flex; justify-content: space-between; align-items: center;">
                                            <span style="font-weight: bold; font-size: 1.1rem;">${actividad.nombre}</span>
                                            <span style="color: #FFD166; font-weight: bold;">S/.${actividad.costo}</span>
                                        </div>
                                        <p style="opacity: 0.7; font-size: 0.9rem; margin: 0;">${actividad.descripcion}</p>
                                        <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                                            <span style="color: #4CAF50;">+${actividad.afinidad} afinidad</span>
                                            <span style="color: #FFD166;">+${actividad.exp} EXP</span>
                                        </div>
                                        ${yaComprada ? 
                                            `<div style="margin-top: 10px; padding: 10px; background: rgba(76, 175, 80, 0.2); border-radius: 8px; text-align: center;">
                                                <span style="color: #4CAF50; font-weight: bold;">✅ ACTIVIDAD COMPRADA</span>
                                            </div>` 
                                            : 
                                            `<button class="card-button" onclick="quintillizasRPG.comprarActividad('${this.personajeSeleccionado}', '${actividad.id}')"
                                                    style="padding: 12px 20px; font-size: 1rem; background: linear-gradient(135deg, #4CAF50, #2E7D32); margin-top: 10px;"
                                                    ${dinero < actividad.costo ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                                                ${dinero < actividad.costo ? '💰 DINERO INSUFICIENTE' : '✨ COMPRAR ACTIVIDAD'}
                                            </button>`
                                        }
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- VIDEOS DESBLOQUEADOS -->
                <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🎬 VIDEOS DESBLOQUEADOS</h3>
                    ${personaje.videosDisponibles.length > 0 ? 
                        `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
                            ${personaje.videosDisponibles.map((video, index) => `
                                <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px; text-align: center; cursor: pointer;"
                                     onclick="quintillizasRPG.cargarVideoNivel('${this.personajeSeleccionado}', ${index + 1})">
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
                
                <!-- ESTADÍSTICAS -->
                <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 25px;">
                    <h3 style="color: #FFD166; margin-bottom: 20px;">📈 ESTADÍSTICAS DETALLADAS</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                        <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px;">
                            <div style="color: ${personaje.color}; font-size: 0.9rem;">DIFICULTAD</div>
                            <div style="font-size: 1.5rem; font-weight: bold;">${personaje.dificultad.toUpperCase()}</div>
                        </div>
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
                    </div>
                </div>
            </div>
        `;
    }

    // ====================
    // SISTEMA DE INTERACCIONES ÍNTIMAS
    // ====================

    intentarInteraccionIntima(personajeId) {
        if (this.condones <= 0) {
            this.mostrarNotificacion('❌ Necesitas condones');
            return false;
        }

        const personaje = this.datosPersonajes[personajeId];
        const probabilidad = this.calcularProbabilidadExito(personaje);
        
        console.log(`🎯 Probabilidad de éxito: ${probabilidad}%`);
        
        // Intentar
        const exito = Math.random() * 100 < probabilidad;
        
        if (exito) {
            this.condones -= 1;
            this.guardarCondones();
            
            // Dar EXP por éxito
            this.agregarEXP(personajeId, 50);
            
            // Aumentar afinidad
            personaje.afinidad += 15;
            
            // Cambiar estado de ánimo a feliz
            personaje.estadoAnimo = 'feliz';
            
            console.log(`✅ ¡Éxito con ${personaje.nombre}!`);
            this.mostrarNotificacion(`💖 ¡Éxito con ${personaje.nombre}! +50 EXP, +15 afinidad`);
            
            // Cargar video íntimo
            this.cargarVideoIntimo(personajeId);
            
            return true;
        } else {
            this.condones -= 1;
            this.guardarCondones();
            
            // Personaje se enoja
            personaje.estadoAnimo = 'enojada';
            personaje.afinidad -= 10;
            
            console.log(`❌ Falla con ${personaje.nombre}`);
            this.mostrarNotificacion(`😠 ${personaje.nombre} se enojó. Afinidad -10`);
            
            // Actualizar vista
            this.actualizarVistaConPersonaje();
            
            return false;
        }
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
        
        // Gastar dinero
        sistemaEconomia.agregarDinero(-actividad.costo);
        
        // Aplicar beneficios
        personaje.afinidad += actividad.afinidad;
        this.agregarEXP(personajeId, actividad.exp);
        personaje.estadoAnimo = 'feliz';
        
        // Marcar como completada
        if (!this.actividadesCompletadas[personajeId]) {
            this.actividadesCompletadas[personajeId] = [];
        }
        this.actividadesCompletadas[personajeId].push(actividadId);
        this.guardarActividades();
        
        console.log(`🎉 Actividad ${actividad.nombre} completada para ${personaje.nombre}`);
        this.mostrarNotificacion(`💝 ${personaje.nombre} muy feliz! +${actividad.afinidad} afinidad, +${actividad.exp} EXP`);
        
        // Cargar el video automáticamente
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
            duracion: '3:00'
        }, personaje);
    }

    cargarVideoIntimo(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        const nivel = Math.min(personaje.nivel, 5);
        const videoId = this.obtenerVideoIdPorNivel(personajeId, nivel);
        
        this.mostrarReproductorVideo({
            driveId: videoId,
            titulo: `Momento íntimo - Nivel ${nivel}`,
            duracion: '2:30'
        }, personaje);
    }

    cargarVideoNivel(personajeId, nivel) {
        const personaje = this.datosPersonajes[personajeId];
        const videoId = this.obtenerVideoIdPorNivel(personajeId, nivel);
        
        this.mostrarReproductorVideo({
            driveId: videoId,
            titulo: `Video Nivel ${nivel}`,
            duracion: '2:00'
        }, personaje);
    }

    // ====================
    // SISTEMA DE CONDONES
    // ====================

    comprarCondones(cantidad) {
        const costoPorCondon = 20;
        const costoTotal = cantidad * costoPorCondon;
        
        const dineroActual = sistemaEconomia.obtenerDinero();
        if (dineroActual < costoTotal) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return false;
        }
        
        // Gastar dinero
        sistemaEconomia.agregarDinero(-costoTotal);
        
        // Añadir condones
        this.condones += cantidad;
        this.guardarCondones();
        
        console.log(`🛒 Comprados ${cantidad} condones por S/.${costoTotal}`);
        this.mostrarNotificacion(`🛍️ +${cantidad} condones comprados`);
        
        // Actualizar vista si estamos en página principal
        this.actualizarVistaConPersonaje();
        
        return true;
    }

    // ====================
    // REPRODUCTOR DE VIDEOS
    // ====================

    mostrarReproductorVideo(video, personaje) {
        const html = `
            <div class="reproductor-container">
                <h2 style="text-align: center; color: ${personaje.color}; margin-bottom: 10px;">
                    🎬 ${video.titulo} - ${personaje.nombre}
                </h2>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 25px;">
                    Nivel de ${personaje.nombre.split(' ')[0]}: ${personaje.nivel} • Duración: ${video.duracion}
                </p>
                
                <div class="video-wrapper">
                    <iframe 
                        id="rpg-video-iframe"
                        src="https://drive.google.com/file/d/${video.driveId}/preview"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        class="drive-iframe"
                    ></iframe>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button class="card-button" onclick="quintillizasRPG.volverAPersonaje()" 
                            style="background: linear-gradient(135deg, ${personaje.color}, ${this.oscurecerColor(personaje.color)});">
                        ↩️ Volver a ${personaje.nombre.split(' ')[0]}
                    </button>
                </div>
            </div>
        `;
        
        const mangaSection = document.getElementById('manga-section');
        mangaSection.innerHTML = html;
        
        // Agregar botón volver
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

    obtenerIconoPersonaje(nombre) {
        const iconos = {
            'Ichika': '👩‍🦰',
            'Nino': '👩‍🦳', 
            'Miku': '🎧',
            'Yotsuba': '🎗️',
            'Itsuki': '🍔'
        };
        return iconos[nombre.split(' ')[0]] || '👩';
    }

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

    obtenerAjusteEstado(estado) {
        const ajustes = {
            'feliz': '+20',
            'neutral': '+0',
            'triste': '-30',
            'enojada': '-50',
            'tsundere': '-40',
            'tímida': '-20',
            'energica': '+10',
            'glotona': '+15'
        };
        return ajustes[estado] || '+0';
    }

    calcularProbabilidadExito(personaje) {
        let probabilidad = personaje.probabilidadBase;
        probabilidad += (personaje.nivel - 1) * 5;
        probabilidad += personaje.afinidad;
        
        const ajustesEstado = {
            'feliz': 20,
            'neutral': 0,
            'triste': -30,
            'enojada': -50,
            'tsundere': -40,
            'tímida': -20,
            'energica': 10,
            'glotona': 15
        };
        
        probabilidad += ajustesEstado[personaje.estadoAnimo] || 0;
        return Math.max(5, Math.min(95, Math.round(probabilidad)));
    }

    oscurecerColor(color) {
        return color;
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

    guardarActividades() {
        try {
            localStorage.setItem('rpg_actividades', JSON.stringify(this.actividadesCompletadas));
        } catch (e) {
            console.warn('No se pudo guardar actividades:', e);
        }
    }

    cargarActividades() {
        try {
            const actividades = localStorage.getItem('rpg_actividades');
            return actividades ? JSON.parse(actividades) : {};
        } catch (e) {
            console.warn('No se pudo cargar actividades:', e);
            return {};
        }
    }
}

// ================================================
// INTEGRACIÓN CON SISTEMA DE MAZOS - VERSIÓN CORREGIDA
// ================================================

// Guardar referencia original
const agregarDineroOriginal = sistemaEconomia.agregarDinero;

// Sobrescribir el método
sistemaEconomia.agregarDinero = function(cantidad) {
    // Llamar al método original para agregar el dinero
    const resultado = agregarDineroOriginal.call(this, cantidad);
    
    // Si es una recompensa por mazo (cantidad positiva) y hay personaje seleccionado en RPG
    if (cantidad > 0 && window.quintillizasRPG && window.quintillizasRPG.personajeSeleccionado) {
        // Dar EXP proporcional al dinero ganado
        const expPorSoles = 20; // 20 EXP por cada sol ganado
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
    console.log('🎮 RPG Quintillizas listo y funcional');
    console.log('💖 EXP por quiz activado: +20 EXP/palabra correcta, +15-100 EXP/mazo completo');
});
