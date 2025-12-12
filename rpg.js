// ================================================
// RPG COMPLETO: LAS QUINTILLIZAS NAKANO
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
                descripcion: 'La hermana mayor, responsable y coqueta.',
                dificultad: 'media',
                probabilidadBase: 60,
                videosDisponibles: [],
                videoActual: null
            },
            'nino': {
                nombre: 'Nino Nakano',
                color: '#FFB347',
                nivel: 1,
                exp: 0,
                expNecesaria: 100,
                estadoAnimo: 'tsundere',
                afinidad: -20,
                descripcion: 'Tsundere clásica, difícil de conquistar.',
                dificultad: 'alta',
                probabilidadBase: 30,
                videosDisponibles: [],
                videoActual: null
            },
            'miku': {
                nombre: 'Miku Nakano',
                color: '#6A5ACD',
                nivel: 1,
                exp: 0,
                expNecesaria: 100,
                estadoAnimo: 'tímida',
                afinidad: 10,
                descripcion: 'Tímida y reservada, le gusta la historia.',
                dificultad: 'media-baja',
                probabilidadBase: 70,
                videosDisponibles: [],
                videoActual: null
            },
            'yotsuba': {
                nombre: 'Yotsuba Nakano',
                color: '#4CAF50',
                nivel: 1,
                exp: 0,
                expNecesaria: 100,
                estadoAnimo: 'energica',
                afinidad: 30,
                descripcion: 'La más enérgica y deportista.',
                dificultad: 'baja',
                probabilidadBase: 80,
                videosDisponibles: [],
                videoActual: null
            },
            'itsuki': {
                nombre: 'Itsuki Nakano',
                color: '#FFD166',
                nivel: 1,
                exp: 0,
                expNecesaria: 100,
                estadoAnimo: 'glotona',
                afinidad: 15,
                descripcion: 'La más glotona, le encanta comer.',
                dificultad: 'baja',
                probabilidadBase: 85,
                videosDisponibles: [],
                videoActual: null
            }
        };
    }

    // ====================
    // SISTEMA DE EXP Y NIVELES
    // ====================

    agregarEXP(personajeId, cantidad) {
        if (!this.personajeSeleccionado || this.personajeSeleccionado !== personajeId) {
            console.log(`⚠️ No hay personaje seleccionado. EXP no añadida.`);
            return false;
        }

        const personaje = this.datosPersonajes[personajeId];
        personaje.exp += cantidad;
        
        console.log(`🎯 ${personaje.nombre} +${cantidad} EXP (Total: ${personaje.exp}/${personaje.expNecesaria})`);
        
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
        personaje.expNecesaria = Math.round(personaje.expNecesaria * 1.5); // Aumenta la EXP necesaria
        
        console.log(`🎉 ¡${personaje.nombre} subió al nivel ${personaje.nivel}!`);
        this.mostrarNotificacion(`🎉 ${personaje.nombre} nivel ${personaje.nivel}!`);
        
        // Desbloquear nuevo video al subir de nivel
        this.desbloquearVideo(personajeId);
        
        this.guardarDatosPersonajes();
    }

    // ====================
    // SISTEMA DE SELECCIÓN
    // ====================

    seleccionarPersonaje(personajeId) {
        this.personajeSeleccionado = personajeId;
        this.guardarPersonajeSeleccionado();
        
        const personaje = this.datosPersonajes[personajeId];
        console.log(`🎮 Personaje seleccionado: ${personaje.nombre}`);
        this.mostrarNotificacion(`💖 Seleccionaste a ${personaje.nombre}`);
        
        // Recargar la UI
        this.cargarUIpersonaje();
    }

    estaPersonajeSeleccionado() {
        return this.personajeSeleccionado !== null;
    }

    obtenerPersonajeSeleccionado() {
        return this.personajeSeleccionado ? this.datosPersonajes[this.personajeSeleccionado] : null;
    }

    // ====================
    // SISTEMA DE VIDEOS
    // ====================

    desbloquearVideo(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        const nivel = personaje.nivel;
        
        // Videos por nivel
        const videosPorNivel = {
            1: ['presentacion'],
            2: ['conversacion_1'],
            3: ['paseo'],
            4: ['confesion'],
            5: ['primer_beso'],
            6: ['cita_romantica'],
            7: ['confidencia'],
            8: ['momento_especial'],
            9: ['declaracion'],
            10: ['final_feliz']
        };
        
        if (videosPorNivel[nivel] && !personaje.videosDisponibles.includes(videosPorNivel[nivel][0])) {
            personaje.videosDisponibles.push(videosPorNivel[nivel][0]);
            console.log(`🎥 Video desbloqueado para ${personaje.nombre}: ${videosPorNivel[nivel][0]}`);
        }
    }

    obtenerVideoParaNivel(personajeId, nivel) {
        const videos = {
            'ichika': {
                1: { driveId: "ID_ICHIKA_NIVEL1", titulo: "Ichika se presenta", costo: 0 },
                2: { driveId: "ID_ICHIKA_NIVEL2", titulo: "Conversación con Ichika", costo: 10 },
                3: { driveId: "ID_ICHIKA_NIVEL3", titulo: "Paseo con Ichika", costo: 25 },
                4: { driveId: "ID_ICHIKA_NIVEL4", titulo: "Ichika se confiesa", costo: 50 },
                5: { driveId: "ID_ICHIKA_NIVEL5", titulo: "Primer beso", costo: 100 }
            },
            'nino': {
                1: { driveId: "ID_NINO_NIVEL1", titulo: "Nino te ignora", costo: 0 },
                2: { driveId: "ID_NINO_NIVEL2", titulo: "Nino se molesta", costo: 15 },
                3: { driveId: "ID_NINO_NIVEL3", titulo: "Nino acepta hablar", costo: 40 },
                4: { driveId: "ID_NINO_NIVEL4", titulo: "Nino baja la guardia", costo: 80 },
                5: { driveId: "ID_NINO_NIVEL5", titulo: "Nino muestra cariño", costo: 150 }
            },
            'miku': {
                1: { driveId: "ID_MIKU_NIVEL1", titulo: "Miku tímida", costo: 0 },
                2: { driveId: "ID_MIKU_NIVEL2", titulo: "Miku habla de historia", costo: 8 },
                3: { driveId: "ID_MIKU_NIVEL3", titulo: "Miku se abre", costo: 20 },
                4: { driveId: "ID_MIKU_NIVEL4", titulo: "Miku confía en ti", costo: 45 },
                5: { driveId: "ID_MIKU_NIVEL5", titulo: "Miku se acerca", costo: 90 }
            },
            'yotsuba': {
                1: { driveId: "ID_YOTSUBA_NIVEL1", titulo: "Yotsuba energética", costo: 0 },
                2: { driveId: "ID_YOTSUBA_NIVEL2", titulo: "Yotsuba en el deporte", costo: 5 },
                3: { driveId: "ID_YOTSUBA_NIVEL3", titulo: "Yotsuba te anima", costo: 15 },
                4: { driveId: "ID_YOTSUBA_NIVEL4", titulo: "Yotsuba se sincera", costo: 30 },
                5: { driveId: "ID_YOTSUBA_NIVEL5", titulo: "Yotsuba te abraza", costo: 60 }
            },
            'itsuki': {
                1: { driveId: "ID_ITSUKI_NIVEL1", titulo: "Itsuki comiendo", costo: 0 },
                2: { driveId: "ID_ITSUKI_NIVEL2", titulo: "Itsuki pide comida", costo: 3 },
                3: { driveId: "ID_ITSUKI_NIVEL3", titulo: "Itsuki comparte comida", costo: 10 },
                4: { driveId: "ID_ITSUKI_NIVEL4", titulo: "Itsuki cocina para ti", costo: 25 },
                5: { driveId: "ID_ITSUKI_NIVEL5", titulo: "Itsuki te alimenta", costo: 50 }
            }
        };
        
        return videos[personajeId] && videos[personajeId][nivel] ? videos[personajeId][nivel] : null;
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
        
        // Calcular probabilidad de éxito
        let probabilidad = personaje.probabilidadBase;
        probabilidad += (personaje.nivel - 1) * 5; // +5% por nivel
        probabilidad += personaje.afinidad; // Añadir afinidad
        
        // Ajustar por estado de ánimo
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
        
        // Limitar entre 5% y 95%
        probabilidad = Math.max(5, Math.min(95, probabilidad));
        
        console.log(`🎯 Probabilidad de éxito: ${probabilidad}%`);
        
        // Intentar
        const exito = Math.random() * 100 < probabilidad;
        
        if (exito) {
            this.condones -= 1;
            this.guardarCondones();
            
            // Dar EXP por éxito
            this.agregarEXP(personajeId, 50);
            
            // Cambiar estado de ánimo a feliz
            personaje.estadoAnimo = 'feliz';
            
            console.log(`✅ ¡Éxito con ${personaje.nombre}!`);
            this.mostrarNotificacion(`💖 ¡Éxito con ${personaje.nombre}! +50 EXP`);
            
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
            
            return false;
        }
    }

    cargarVideoIntimo(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        const nivel = personaje.nivel;
        
        // Videos íntimos por nivel
        const videosIntimos = {
            1: { driveId: "ID_INTIMO_NIVEL1", titulo: "Primer acercamiento" },
            2: { driveId: "ID_INTIMO_NIVEL2", titulo: "Caricias suaves" },
            3: { driveId: "ID_INTIMO_NIVEL3", titulo: "Beso apasionado" },
            4: { driveId: "ID_INTIMO_NIVEL4", titulo: "Noche especial" },
            5: { driveId: "ID_INTIMO_NIVEL5", titulo: "Amor completo" }
        };
        
        const video = videosIntimos[nivel] || videosIntimos[1];
        personaje.videoActual = video;
        
        // Mostrar reproductor
        this.mostrarReproductorVideo(video, personaje);
    }

    // ====================
    // SISTEMA DE ACTIVIDADES ESPECIALES
    // ====================

    comprarActividad(personajeId, actividadId) {
        const actividades = {
            'cena_romantica': { costo: 200, afinidad: 30, exp: 100 },
            'viaje_sorpresa': { costo: 500, afinidad: 50, exp: 200 },
            'regalo_caro': { costo: 300, afinidad: 40, exp: 150 },
            'evento_especial': { costo: 400, afinidad: 45, exp: 180 }
        };
        
        const actividad = actividades[actividadId];
        if (!actividad) return false;
        
        const dineroActual = sistemaEconomia.obtenerDinero();
        if (dineroActual < actividad.costo) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return false;
        }
        
        // Gastar dinero
        sistemaEconomia.agregarDinero(-actividad.costo);
        
        // Aplicar beneficios
        const personaje = this.datosPersonajes[personajeId];
        personaje.afinidad += actividad.afinidad;
        this.agregarEXP(personajeId, actividad.exp);
        personaje.estadoAnimo = 'feliz';
        
        // Marcar como completada
        if (!this.actividadesCompletadas[personajeId]) {
            this.actividadesCompletadas[personajeId] = [];
        }
        this.actividadesCompletadas[personajeId].push(actividadId);
        this.guardarActividades();
        
        console.log(`🎉 Actividad ${actividadId} completada para ${personaje.nombre}`);
        this.mostrarNotificacion(`💝 ${personaje.nombre} muy feliz! +${actividad.afinidad} afinidad`);
        
        return true;
    }

    // ====================
    // SISTEMA DE CONDONES
    // ====================

    comprarCondones(cantidad) {
        const costoPorCondon = 20; // 20 soles por condón
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
        
        return true;
    }

    obtenerCantidadCondones() {
        return this.condones;
    }

    // ====================
    // UI PRINCIPAL
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
                
                <!-- TIENDA -->
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
                    </ol>
                </div>
            </div>
        `;
    }

    crearCardsPersonajes() {
        const personajes = [
            { id: 'ichika', icono: '👩‍🦰' },
            { id: 'nino', icono: '👩‍🦳' },
            { id: 'miku', icono: '🎧' },
            { id: 'yotsuba', icono: '🎗️' },
            { id: 'itsuki', icono: '🍔' }
        ];
        
        return personajes.map(p => {
            const personaje = this.datosPersonajes[p.id];
            const esSeleccionado = this.personajeSeleccionado === p.id;
            
            return `
                <div class="personaje-card" 
                     style="border-color: ${personaje.color}; ${esSeleccionado ? 'border-width: 4px;' : ''}"
                     onclick="quintillizasRPG.seleccionarPersonaje('${p.id}')">
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
                        ${personaje.descripcion}
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

    cargarUIpersonaje() {
        if (!this.personajeSeleccionado) return '';
        
        const personaje = this.obtenerPersonajeSeleccionado();
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
                            Completa mazos de estudio para darle EXP a ${personaje.nombre.split(' ')[0]}
                        </p>
                    </div>
                </div>
                
                <!-- ACCIONES -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-bottom: 40px;">
                    <!-- INTERACCIÓN ÍNTIMA -->
                    <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 25px; border: 2px solid #FF1493;">
                        <h3 style="color: #FF1493; margin-bottom: 15px;">💖 MOMENTO ÍNTIMO</h3>
                        <p style="opacity: 0.8; margin-bottom: 20px;">
                            Intenta un momento íntimo con ${personaje.nombre.split(' ')[0]}. 
                            <strong>Probabilidad de éxito: ${this.calcularProbabilidadExito(personaje)}%</strong>
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
                                style="background: linear-gradient(135deg, #FF1493, #FF69B4); width: 100%;"
                                ${this.condones <= 0 ? 'disabled style="opacity: 0.5;"' : ''}>
                            ${this.condones <= 0 ? '❌ SIN CONDONES' : `💝 INTENTAR (Usa 1 condón)`}
                        </button>
                        <p style="text-align: center; margin-top: 10px; font-size: 0.9rem; opacity: 0.7;">
                            Condones disponibles: ${this.condones}
                        </p>
                    </div>
                    
                    <!-- ACTIVIDADES ESPECIALES -->
                    <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 25px; border: 2px solid #FFD166;">
                        <h3 style="color: #FFD166; margin-bottom: 15px;">✨ ACTIVIDADES ESPECIALES</h3>
                        <p style="opacity: 0.8; margin-bottom: 20px;">
                            Actividades caras que aumentan significativamente la afinidad.
                        </p>
                        
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <button class="card-button" onclick="quintillizasRPG.comprarActividad('${this.personajeSeleccionado}', 'cena_romantica')"
                                    style="background: linear-gradient(135deg, #8A5AF7, #5864F5); text-align: left;"
                                    ${dinero < 200 ? 'disabled style="opacity: 0.5;"' : ''}>
                                <div style="display: flex; justify-content: space-between;">
                                    <span>🍽️ Cena Romántica</span>
                                    <span>S/.200</span>
                                </div>
                                <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 5px;">
                                    +30 afinidad • +100 EXP
                                </div>
                            </button>
                            
                            <button class="card-button" onclick="quintillizasRPG.comprarActividad('${this.personajeSeleccionado}', 'regalo_caro')"
                                    style="background: linear-gradient(135deg, #4CAF50, #2E7D32); text-align: left;"
                                    ${dinero < 300 ? 'disabled style="opacity: 0.5;"' : ''}>
                                <div style="display: flex; justify-content: space-between;">
                                    <span>🎁 Regalo Caro</span>
                                    <span>S/.300</span>
                                </div>
                                <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 5px;">
                                    +40 afinidad • +150 EXP
                                </div>
                            </button>
                            
                            <button class="card-button" onclick="quintillizasRPG.comprarActividad('${this.personajeSeleccionado}', 'viaje_sorpresa')"
                                    style="background: linear-gradient(135deg, #FF6B6B, #FFD166); text-align: left;"
                                    ${dinero < 500 ? 'disabled style="opacity: 0.5;"' : ''}>
                                <div style="display: flex; justify-content: space-between;">
                                    <span>✈️ Viaje Sorpresa</span>
                                    <span>S/.500</span>
                                </div>
                                <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 5px;">
                                    +50 afinidad • +200 EXP
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- VIDEOS DESBLOQUEADOS -->
                <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🎬 VIDEOS DESBLOQUEADOS</h3>
                    ${personaje.videosDisponibles.length > 0 ? 
                        `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
                            ${personaje.videosDisponibles.map((video, index) => `
                                <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px; text-align: center;">
                                    <div style="font-size: 2rem; margin-bottom: 10px;">🎥</div>
                                    <div style="font-weight: bold;">${video.replace(/_/g, ' ').toUpperCase()}</div>
                                    <div style="font-size: 0.8rem; opacity: 0.7; margin-top: 5px;">Nivel ${index + 1}</div>
                                </div>
                            `).join('')}
                        </div>` 
                        : `<p style="text-align: center; opacity: 0.7; padding: 20px;">
                            Aún no hay videos desbloqueados. ¡Sube de nivel!
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
                            <div style="font-size: 1.5rem; font-weight: bold;">${personaje.videosDisponibles.length}/10</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.08); padding: 15px; border-radius: 10px;">
                            <div style="color: ${personaje.color}; font-size: 0.9rem;">NEXT LEVEL</div>
                            <div style="font-size: 1.5rem; font-weight: bold;">${personaje.expNecesaria - personaje.exp} EXP</div>
                        </div>
                    </div>
                </div>
                
                <!-- BOTÓN VOLVER -->
                <div style="text-align: center; margin-top: 40px;">
                    <button class="btn-atras-especifico" onclick="quintillizasRPG.volverAPaginaPrincipal()">
                        ↩️ Volver a Selección
                    </button>
                </div>
            </div>
        `;
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
        
        const nombreBase = nombre.split(' ')[0];
        return iconos[nombreBase] || '👩';
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
        return Math.max(5, Math.min(95, probabilidad));
    }

    oscurecerColor(color) {
        // Convierte color hex a rgb, oscurece y vuelve a hex
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        
        const newR = Math.max(0, r - 40).toString(16).padStart(2, '0');
        const newG = Math.max(0, g - 40).toString(16).padStart(2, '0');
        const newB = Math.max(0, b - 40).toString(16).padStart(2, '0');
        
        return `#${newR}${newG}${newB}`;
    }

    mostrarReproductorVideo(video, personaje) {
        // Implementar reproductor similar al de videos existente
        const html = `
            <div class="reproductor-container">
                <h2 style="text-align: center; color: ${personaje.color};">
                    🎬 ${video.titulo} - ${personaje.nombre}
                </h2>
                <div class="video-wrapper">
                    <iframe 
                        src="https://drive.google.com/file/d/${video.driveId}/preview"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        class="drive-iframe"
                    ></iframe>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <button class="card-button" onclick="quintillizasRPG.volverAPaginaPrincipal()">
                        ↩️ Volver
                    </button>
                </div>
            </div>
        `;
        
        // Reemplazar contenido actual
        document.getElementById('manga-section').innerHTML = html;
    }

    volverAPaginaPrincipal() {
        document.getElementById('manga-section').innerHTML = this.cargarPaginaPrincipal();
    }

    // ====================
    // NOTIFICACIONES
    // ====================

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
// INTEGRACIÓN CON SISTEMA DE MAZOS EXISTENTE
// ================================================

// Modificar el sistema de recompensas para dar EXP al RPG
const sistemaEconomiaOriginal = sistemaEconomia.agregarDinero;
sistemaEconomia.agregarDinero = function(cantidad) {
    // Llamar al método original
    sistemaEconomiaOriginal.call(this, cantidad);
    
    // Si es una recompensa por mazo (cantidad positiva) y hay personaje seleccionado en RPG
    if (cantidad > 0 && window.quintillizasRPG && window.quintillizasRPG.estaPersonajeSeleccionado()) {
        const expPorSoles = 5; // 5 EXP por cada sol ganado
        const expGanada = Math.round(cantidad * expPorSoles);
        
        window.quintillizasRPG.agregarEXP(
            window.quintillizasRPG.personajeSeleccionado, 
            expGanada
        );
        
        console.log(`🎮 +${expGanada} EXP para ${window.quintillizasRPG.obtenerPersonajeSeleccionado().nombre}`);
    }
};

// ================================================
// INSTANCIA GLOBAL DEL RPG
// ================================================

const quintillizasRPG = new QuintillizasRPG();

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', function() {
    quintillizasRPG.inicializar();
    console.log('🎮 RPG Quintillizas listo');
});
