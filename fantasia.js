// ================================================
// RPG FANTASÍA - 5 PISOS CON BOSS Y RECOMPENSAS +18
// Combate por turnos con sprites URL
// Tienda de consumibles
// Recompensas: videos de novia o boss
// VERSIÓN CORREGIDA - CON NOVIA VISIBLE Y RECOMPENSAS FUNCIONALES
// ================================================

class FantasiaRPG {
    constructor() {
        console.log("🎮 Inicializando FantasiaRPG...");
        
        // Detectar y resetear datos corruptos
        this.detectarYResetearDatosCorruptos();
        
        this.jugador = this.cargarJugador() || this.inicializarJugador();
        this.pisos = this.inicializarPisos();
        this.pisoActual = this.cargarPisoActual() || 1;
        this.enemigoActual = null;
        this.indiceEnemigoActual = 0;
        this.enCombate = false;
        this.mensajesCombate = [];
        this.spriteBossActual = 'normal';
        this.bossDerrotado = null;
        this.pocionUsadaEsteCombate = false;
        this.esperandoRecompensas = false;
        
        // ===== VARIABLES PARA LA NOVIA =====
        this.noviaActual = null;           // Novia en menú principal
        this.noviaEnRecompensas = null;    // Novia guardada para recompensas
        
        // ===== IDs DE VIDEOS PARA CADA NOVIA (PROPIAS DE FANTASÍA) =====
        this.videosNovias = {
            ichika: {
                mamada: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                doggy: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
                montar: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
                imagen: "https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small"
            },
            nino: {
                mamada: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
                doggy: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                montar: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
                imagen: "https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small"
            },
            miku: {
                mamada: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
                doggy: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
                montar: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                imagen: "https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small"
            },
            yotsuba: {
                mamada: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
                doggy: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
                montar: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
                imagen: "https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small"
            },
            itsuki: {
                mamada: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                doggy: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
                montar: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
                imagen: "https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small"
            }
        };
        
        console.log("✅ FantasiaRPG inicializado:", this.jugador);
    }

    // ====================
    // DETECCIÓN DE DATOS CORRUPTOS
    // ====================

    detectarYResetearDatosCorruptos() {
        try {
            const testJugador = localStorage.getItem('fantasia_jugador');
            if (testJugador) {
                const parsed = JSON.parse(testJugador);
                if (!parsed.stats || !parsed.inventario || !parsed.stats.fuerza) {
                    console.warn("⚠️ Datos corruptos detectados, reseteando...");
                    this.limpiarLocalStorage();
                }
            }
        } catch (e) {
            console.warn("⚠️ Error al leer datos, reseteando...");
            this.limpiarLocalStorage();
        }
    }

    limpiarLocalStorage() {
        localStorage.removeItem('fantasia_jugador');
        localStorage.removeItem('fantasia_pisos');
        localStorage.removeItem('fantasia_pisoActual');
        console.log("🧹 LocalStorage limpiado");
    }

    // ====================
    // FUNCIONES DE NOVIA
    // ====================

    actualizarNoviaActual() {
        this.noviaActual = null;
        
        // Intentar obtener de quintillizasRPG
        if (window.quintillizasRPG) {
            const rpg = window.quintillizasRPG;
            if (rpg.personajeSeleccionado && rpg.datosPersonajes && rpg.datosPersonajes[rpg.personajeSeleccionado]) {
                const personaje = rpg.datosPersonajes[rpg.personajeSeleccionado];
                this.noviaActual = {
                    id: rpg.personajeSeleccionado,
                    nombre: personaje.nombre,
                    nombreCorto: personaje.nombre.split(' ')[0],
                    imagen: personaje.imagen,
                    color: personaje.color,
                    nivel: personaje.nivel,
                    afinidad: personaje.afinidad,
                    exp: personaje.exp,
                    expNecesaria: personaje.expNecesaria,
                    estadoAnimo: personaje.estadoAnimo
                };
                console.log("💖 Novia actualizada en Fantasía:", this.noviaActual.nombreCorto, "Nivel:", this.noviaActual.nivel, "Afinidad:", this.noviaActual.afinidad);
            }
        }
        
        // Si no, intentar con función global
        if (!this.noviaActual && window.obtenerNoviaSeleccionada) {
            const data = window.obtenerNoviaSeleccionada();
            if (data) {
                this.noviaActual = {
                    id: data.id,
                    nombre: data.nombre,
                    nombreCorto: data.nombre.split(' ')[0],
                    imagen: data.imagen,
                    color: data.color || '#FF1493',
                    nivel: data.nivel || 1,
                    afinidad: data.afinidad || 0,
                    exp: data.exp,
                    expNecesaria: data.expNecesaria,
                    estadoAnimo: data.estadoAnimo
                };
                console.log("💖 Novia actualizada vía global:", this.noviaActual.nombreCorto, "Nivel:", this.noviaActual.nivel, "Afinidad:", this.noviaActual.afinidad);
            }
        }
        
        return this.noviaActual;
    }

    obtenerEmojiEstado(estado) {
        const emojis = {
            'feliz': '😊', 'neutral': '😐', 'triste': '😢', 'enojada': '😠',
            'tsundere': '😤', 'tímida': '😳', 'energica': '💪', 'glotona': '🍔'
        };
        return emojis[estado] || '😐';
    }

    // ====================
    // INICIALIZACIÓN
    // ====================

    inicializarJugador() {
        return {
            nivel: 1,
            exp: 0,
            expMaxima: 100,
            
            stats: {
                fuerza: 5,
                resistencia: 5,
                velocidad: 5,
                inteligencia: 5,
                carisma: 5
            },
            
            vida: 100,
            vidaMaxima: 100,
            energia: 50,
            energiaMaxima: 50,
            
            piedras: 10,
            
            inventario: {
                pocionVidaPequena: 3,
                pocionVidaGrande: 1,
                pocionEnergia: 2,
                revivirAuto: 0
            },
            
            enemigosDerrotados: 0,
            bossesDerrotados: 0,
            pisosCompletados: 0
        };
    }

    inicializarPisos() {
        return {
            1: {
                nombre: "🌳 Bosque Encantado",
                desbloqueado: true,
                completado: false,
                jefe: "Rias Gremory",
                enemigos: [
                    {
                        id: "slime",
                        nombre: "Slime Verde",
                        imagen: "https://via.placeholder.com/150x150/4CAF50/FFFFFF?text=SLIME",
                        vida: 25,
                        fuerza: 4,
                        defensa: 1,
                        exp: 5,
                        piedras: 1
                    },
                    {
                        id: "goblin",
                        nombre: "Goblin",
                        imagen: "https://via.placeholder.com/150x150/FF9800/FFFFFF?text=GOBLIN",
                        vida: 35,
                        fuerza: 6,
                        defensa: 2,
                        exp: 8,
                        piedras: 1
                    },
                    {
                        id: "lobo",
                        nombre: "Lobo",
                        imagen: "https://via.placeholder.com/150x150/795548/FFFFFF?text=LOBO",
                        vida: 45,
                        fuerza: 8,
                        defensa: 3,
                        exp: 12,
                        piedras: 1
                    }
                ],
                boss: {
                    id: "rias",
                    nombre: "🔥 Rias Gremory",
                    imagen: "https://pbs.twimg.com/media/HBE4XBQakAEjLjq?format=jpg&name=medium",
                    imagenAtacando: "https://pbs.twimg.com/media/HBE4c2sXEAAuow7?format=png&name=small",
                    imagenDerrotado: "https://pbs.twimg.com/media/HBE3hojWQAAMSRN?format=jpg&name=medium",
                    vida: 120,
                    fuerza: 15,
                    defensa: 5,
                    exp: 50,
                    piedras: 5,
                    
                    videos: {
                        mamada: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        doggy: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
                        montar: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS"
                    }
                }
            },
            2: {
                nombre: "🔥 Volcán de Fuego",
                desbloqueado: false,
                completado: false,
                jefe: "Erza Scarlet",
                enemigos: [
                    {
                        id: "elemental",
                        nombre: "Elemental de Fuego",
                        imagen: "https://via.placeholder.com/150x150/FF5722/FFFFFF?text=ELEMENTAL",
                        vida: 40,
                        fuerza: 9,
                        defensa: 3,
                        exp: 15,
                        piedras: 2
                    },
                    {
                        id: "salamandra",
                        nombre: "Salamandra",
                        imagen: "https://via.placeholder.com/150x150/FF5722/FFFFFF?text=SALAMANDRA",
                        vida: 55,
                        fuerza: 12,
                        defensa: 4,
                        exp: 20,
                        piedras: 2
                    },
                    {
                        id: "demonio",
                        nombre: "Demonio Menor",
                        imagen: "https://via.placeholder.com/150x150/FF5722/FFFFFF?text=DEMONIO",
                        vida: 70,
                        fuerza: 15,
                        defensa: 5,
                        exp: 25,
                        piedras: 2
                    }
                ],
                boss: {
                    id: "erza",
                    nombre: "⚔️ Erza Scarlet",
                    imagen: "https://via.placeholder.com/150x150/FF5722/FFFFFF?text=ERZA",
                    imagenAtacando: "https://via.placeholder.com/150x150/FF5722/FFFFFF?text=ERZA+ATK",
                    imagenDerrotado: "https://via.placeholder.com/150x150/FF5722/FFFFFF?text=ERZA+DEF",
                    vida: 180,
                    fuerza: 22,
                    defensa: 8,
                    exp: 80,
                    piedras: 10,
                    
                    videos: {
                        mamada: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
                        doggy: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        montar: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K"
                    }
                }
            },
            3: {
                nombre: "❄️ Templo Helado",
                desbloqueado: false,
                completado: false,
                jefe: "Esdeath",
                enemigos: [
                    {
                        id: "fantasma",
                        nombre: "Fantasma",
                        imagen: "https://via.placeholder.com/150x150/9C27B0/FFFFFF?text=FANTASMA",
                        vida: 50,
                        fuerza: 11,
                        defensa: 4,
                        exp: 22,
                        piedras: 3
                    },
                    {
                        id: "yeti",
                        nombre: "Yeti",
                        imagen: "https://via.placeholder.com/150x150/2196F3/FFFFFF?text=YETI",
                        vida: 75,
                        fuerza: 16,
                        defensa: 7,
                        exp: 30,
                        piedras: 3
                    },
                    {
                        id: "golem",
                        nombre: "Golem de Hielo",
                        imagen: "https://via.placeholder.com/150x150/2196F3/FFFFFF?text=GOLEM",
                        vida: 95,
                        fuerza: 20,
                        defensa: 10,
                        exp: 35,
                        piedras: 3
                    }
                ],
                boss: {
                    id: "esdeath",
                    nombre: "❄️ Esdeath",
                    imagen: "https://via.placeholder.com/150x150/2196F3/FFFFFF?text=ESDEATH",
                    imagenAtacando: "https://via.placeholder.com/150x150/2196F3/FFFFFF?text=ESDEATH+ATK",
                    imagenDerrotado: "https://via.placeholder.com/150x150/2196F3/FFFFFF?text=ESDEATH+DEF",
                    vida: 250,
                    fuerza: 30,
                    defensa: 12,
                    exp: 120,
                    piedras: 15,
                    
                    videos: {
                        mamada: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
                        doggy: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
                        montar: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe"
                    }
                }
            },
            4: {
                nombre: "⚡ Ciudad Prohibida",
                desbloqueado: false,
                completado: false,
                jefe: "Yor Forger",
                enemigos: [
                    {
                        id: "samurai",
                        nombre: "Samurai",
                        imagen: "https://via.placeholder.com/150x150/FF9800/FFFFFF?text=SAMURAI",
                        vida: 65,
                        fuerza: 18,
                        defensa: 8,
                        exp: 35,
                        piedras: 4
                    },
                    {
                        id: "ninja",
                        nombre: "Ninja",
                        imagen: "https://via.placeholder.com/150x150/9C27B0/FFFFFF?text=NINJA",
                        vida: 55,
                        fuerza: 22,
                        defensa: 5,
                        exp: 40,
                        piedras: 4
                    },
                    {
                        id: "oni",
                        nombre: "Oni",
                        imagen: "https://via.placeholder.com/150x150/F44336/FFFFFF?text=ONI",
                        vida: 90,
                        fuerza: 25,
                        defensa: 10,
                        exp: 45,
                        piedras: 4
                    }
                ],
                boss: {
                    id: "yor",
                    nombre: "🗡️ Yor Forger",
                    imagen: "https://via.placeholder.com/150x150/9C27B0/FFFFFF?text=YOR",
                    imagenAtacando: "https://via.placeholder.com/150x150/9C27B0/FFFFFF?text=YOR+ATK",
                    imagenDerrotado: "https://via.placeholder.com/150x150/9C27B0/FFFFFF?text=YOR+DEF",
                    vida: 320,
                    fuerza: 38,
                    defensa: 15,
                    exp: 160,
                    piedras: 20,
                    
                    videos: {
                        mamada: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
                        doggy: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
                        montar: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl"
                    }
                }
            },
            5: {
                nombre: "🌌 Castillo Celestial",
                desbloqueado: false,
                completado: false,
                jefe: "Makima",
                enemigos: [
                    {
                        id: "angel",
                        nombre: "Ángel",
                        imagen: "https://via.placeholder.com/150x150/FFC107/000000?text=ANGEL",
                        vida: 80,
                        fuerza: 22,
                        defensa: 10,
                        exp: 50,
                        piedras: 5
                    },
                    {
                        id: "caballero",
                        nombre: "Caballero Celestial",
                        imagen: "https://via.placeholder.com/150x150/FFC107/000000?text=CABALLERO",
                        vida: 100,
                        fuerza: 28,
                        defensa: 15,
                        exp: 60,
                        piedras: 5
                    },
                    {
                        id: "mago",
                        nombre: "Mago Supremo",
                        imagen: "https://via.placeholder.com/150x150/FFC107/000000?text=MAGO",
                        vida: 70,
                        fuerza: 35,
                        defensa: 8,
                        exp: 70,
                        piedras: 5
                    }
                ],
                boss: {
                    id: "makima",
                    nombre: "👁️ Makima",
                    imagen: "https://via.placeholder.com/150x150/FFEB3B/000000?text=MAKIMA",
                    imagenAtacando: "https://via.placeholder.com/150x150/FFEB3B/000000?text=MAKIMA+ATK",
                    imagenDerrotado: "https://via.placeholder.com/150x150/FFEB3B/000000?text=MAKIMA+DEF",
                    vida: 500,
                    fuerza: 50,
                    defensa: 20,
                    exp: 300,
                    piedras: 50,
                    
                    videos: {
                        mamada: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        doggy: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
                        montar: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS"
                    }
                }
            }
        };
    }

    // ====================
    // SISTEMA DE ATAQUES
    // ====================

    atacar(tipo = 'basico') {
        if (!this.enCombate) return;
        
        let daño = 0;
        let costoEnergia = 0;
        let mensaje = "";
        
        switch(tipo) {
            case 'basico':
                daño = 5 + Math.floor(Math.random() * 6) + Math.floor(this.jugador.stats.fuerza / 2);
                costoEnergia = 0;
                mensaje = `⚔️ Ataque básico!`;
                break;
                
            case 'fuerte':
                if (this.jugador.energia < 15) {
                    this.agregarMensaje("❌ No tienes suficiente energía para ataque fuerte (necesitas 15 EN)");
                    return;
                }
                daño = 15 + Math.floor(Math.random() * 10) + this.jugador.stats.fuerza;
                costoEnergia = 15;
                mensaje = `💥 ATAQUE FUERTE!`;
                break;
                
            case 'magico':
                if (this.jugador.energia < 25) {
                    this.agregarMensaje("❌ No tienes suficiente energía para ataque mágico (necesitas 25 EN)");
                    return;
                }
                daño = 25 + Math.floor(Math.random() * 15) + Math.floor(this.jugador.stats.inteligencia * 1.5);
                costoEnergia = 25;
                mensaje = `✨ ATAQUE MÁGICO!`;
                break;
        }
        
        this.jugador.energia -= costoEnergia;
        daño = Math.max(1, daño - this.enemigoActual.defensa);
        
        this.enemigoActual.vidaActual -= daño;
        this.agregarMensaje(`${mensaje} ${daño} de daño a ${this.enemigoActual.nombre}`);
        
        if (this.esBossActual() && this.spriteBossActual !== 'derrotado') {
            this.spriteBossActual = 'atacando';
            setTimeout(() => { 
                if (this.spriteBossActual !== 'derrotado') {
                    this.spriteBossActual = 'normal'; 
                }
                this.actualizarUI(); 
            }, 500);
        }
        
        if (this.enemigoActual.vidaActual <= 0) {
            this.enemigoDerrotado();
            return;
        }
        
        setTimeout(() => this.turnoEnemigo(), 1000);
        this.actualizarUI();
    }

    turnoEnemigo() {
        if (!this.enCombate) return;
        
        if (this.enemigoActual.vidaActual <= 0) {
            this.enemigoDerrotado();
            return;
        }
        
        const energiaAnterior = this.jugador.energia;
        this.jugador.energia = Math.min(
            this.jugador.energia + 5, 
            this.jugador.energiaMaxima
        );
        
        if (this.jugador.energia > energiaAnterior) {
            this.agregarMensaje(`⚡ Energía +5 (${this.jugador.energia}/${this.jugador.energiaMaxima})`);
        }
        
        let dañoEnemigo = this.enemigoActual.fuerza + Math.floor(Math.random() * 5);
        dañoEnemigo = Math.max(1, dañoEnemigo - 2);
        
        this.jugador.vida -= dañoEnemigo;
        this.agregarMensaje(`💢 ${this.enemigoActual.nombre} te ataca! ${dañoEnemigo} de daño`);
        
        if (this.esBossActual() && this.spriteBossActual !== 'derrotado') {
            this.spriteBossActual = 'atacando';
            setTimeout(() => { 
                if (this.spriteBossActual !== 'derrotado') {
                    this.spriteBossActual = 'normal'; 
                }
                this.actualizarUI(); 
            }, 500);
        }
        
        if (this.jugador.vida <= 0) {
            this.jugador.vida = 0;
            this.agregarMensaje("💀 Has muerto...");
            this.actualizarUI();
            setTimeout(() => this.muerteJugador(), 2000);
            return;
        }
        
        this.actualizarUI();
    }

    // ====================
    // ENTRAR AL PISO
    // ====================

    entrarAlPiso(pisoNumero) {
        if (!this.pisos[pisoNumero].desbloqueado) {
            this.mostrarNotificacion("❌ Este piso no está desbloqueado");
            return false;
        }

        this.pisoActual = pisoNumero;
        this.indiceEnemigoActual = 0;
        this.enCombate = true;
        this.pocionUsadaEsteCombate = false;
        this.spriteBossActual = 'normal';
        
        this.jugador.vida = this.jugador.vidaMaxima;
        this.jugador.energia = this.jugador.energiaMaxima;
        
        this.enemigoActual = JSON.parse(JSON.stringify(
            this.pisos[pisoNumero].enemigos[this.indiceEnemigoActual]
        ));
        this.enemigoActual.vidaActual = this.enemigoActual.vida;
        
        this.mensajesCombate = [];
        this.agregarMensaje(`⚔️ Entraste al ${this.pisos[pisoNumero].nombre}`);
        this.agregarMensaje(`🐉 Enemigo: ${this.enemigoActual.nombre}`);
        
        this.guardarTodo();
        this.actualizarUI();
    }

    // ====================
    // ENEMIGO DERROTADO
    // ====================

    enemigoDerrotado() {
        const esBoss = this.esBossActual();
        
        this.jugador.piedras += this.enemigoActual.piedras;
        this.jugador.exp += this.enemigoActual.exp;
        this.jugador.enemigosDerrotados++;
        
        this.agregarMensaje(`🎉 ${this.enemigoActual.nombre} derrotado!`);
        this.agregarMensaje(`💎 +${this.enemigoActual.piedras} piedras`);
        this.agregarMensaje(`⭐ +${this.enemigoActual.exp} EXP`);
        
        if (esBoss) {
            this.spriteBossActual = 'derrotado';
            this.bossDerrotado = this.enemigoActual;
            this.jugador.bossesDerrotados++;
            this.pisos[this.pisoActual].completado = true;
            
            if (this.pisos[this.pisoActual + 1]) {
                this.pisos[this.pisoActual + 1].desbloqueado = true;
            }
            
            this.agregarMensaje("⏳ Mostrando recompensas en 5 segundos...");
            this.actualizarUI();
            
            setTimeout(() => {
                this.mostrarRecompensasBoss();
            }, 5000);
            
        } else {
            this.indiceEnemigoActual++;
            
            if (this.indiceEnemigoActual < this.pisos[this.pisoActual].enemigos.length) {
                this.enemigoActual = JSON.parse(JSON.stringify(
                    this.pisos[this.pisoActual].enemigos[this.indiceEnemigoActual]
                ));
                this.enemigoActual.vidaActual = this.enemigoActual.vida;
                this.agregarMensaje(`➡️ Siguiente enemigo: ${this.enemigoActual.nombre}`);
                setTimeout(() => this.actualizarUI(), 1500);
            } else {
                this.enemigoActual = JSON.parse(JSON.stringify(this.pisos[this.pisoActual].boss));
                this.enemigoActual.vidaActual = this.enemigoActual.vida;
                this.spriteBossActual = 'normal';
                this.agregarMensaje(`🔥 BOSS: ${this.enemigoActual.nombre}`);
                setTimeout(() => this.actualizarUI(), 1500);
            }
        }
        
        this.verificarSubidaNivel();
        this.guardarTodo();
        this.actualizarUI();
    }

    muerteJugador() {
        this.enCombate = false;
        this.bossDerrotado = null;
        this.jugador.vida = this.jugador.vidaMaxima;
        this.jugador.energia = this.jugador.energiaMaxima;
        this.guardarTodo();
        this.mostrarNotificacion("💀 Has muerto... Volviendo al menú");
        setTimeout(() => this.cargarUIMenuPrincipal(), 1000);
    }

    // ====================
    // CONSUMIBLES
    // ====================

    usarPocion(tipo) {
        if (!this.enCombate) return;
        
        switch(tipo) {
            case 'vidaPequena':
                if (this.jugador.inventario.pocionVidaPequena > 0) {
                    this.jugador.vida = Math.min(this.jugador.vida + 30, this.jugador.vidaMaxima);
                    this.jugador.inventario.pocionVidaPequena--;
                    this.agregarMensaje("💊 Usaste poción de vida pequeña: +30 HP");
                    this.guardarTodo();
                    this.actualizarUI();
                    setTimeout(() => this.turnoEnemigo(), 1000);
                }
                break;
                
            case 'vidaGrande':
                if (this.jugador.inventario.pocionVidaGrande > 0) {
                    this.jugador.vida = Math.min(this.jugador.vida + 60, this.jugador.vidaMaxima);
                    this.jugador.inventario.pocionVidaGrande--;
                    this.agregarMensaje("❤️ Usaste poción de vida grande: +60 HP");
                    this.guardarTodo();
                    this.actualizarUI();
                    setTimeout(() => this.turnoEnemigo(), 1000);
                }
                break;
                
            case 'energia':
                if (this.jugador.inventario.pocionEnergia > 0) {
                    this.jugador.energia = Math.min(this.jugador.energia + 20, this.jugador.energiaMaxima);
                    this.jugador.inventario.pocionEnergia--;
                    this.agregarMensaje("⚡ Usaste poción de energía: +20 EN");
                    this.guardarTodo();
                    this.actualizarUI();
                }
                break;
        }
    }

    huir() {
        if (!this.enCombate) return;
        
        const probabilidad = 50 + this.jugador.stats.velocidad * 2;
        const exito = Math.random() * 100 < probabilidad;
        
        if (exito) {
            this.agregarMensaje("🏃‍♂️ Lograste huir!");
            this.enCombate = false;
            this.guardarTodo();
            setTimeout(() => this.cargarUIMenuPrincipal(), 1500);
        } else {
            this.agregarMensaje("❌ No pudiste huir!");
            setTimeout(() => this.turnoEnemigo(), 1000);
        }
        
        this.actualizarUI();
    }

    rendirse() {
        if (!this.enCombate) return;
        
        if (confirm("¿Seguro que quieres rendirte? Perderás el progreso de este combate.")) {
            this.agregarMensaje("🏳️ Te has rendido...");
            this.enCombate = false;
            this.guardarTodo();
            setTimeout(() => this.cargarUIMenuPrincipal(), 1500);
            this.actualizarUI();
        }
    }

    // ====================
    // RECOMPENSAS DE BOSS - CORREGIDO CON NOVIA GUARDADA
    // ====================

    mostrarRecompensasBoss() {
        if (!this.bossDerrotado) return;
        
        // ===== GUARDAR LA NOVIA EN LA INSTANCIA =====
        this.noviaEnRecompensas = null;
        this.actualizarNoviaActual(); // Actualizar novia actual
        
        let noviaId = null;
        let noviaNombre = "NINGUNA";
        let noviaImagen = "https://via.placeholder.com/100x100/FF1493/FFFFFF?text=NOVIA";
        let noviaColor = "#FF1493";
        let noviaNivel = "?";
        let noviaAfinidad = "?";
        
        // Si hay novia actual, guardarla para recompensas
        if (this.noviaActual) {
            this.noviaEnRecompensas = {
                id: this.noviaActual.id,
                nombre: this.noviaActual.nombreCorto,
                imagen: this.noviaActual.imagen,
                color: this.noviaActual.color || '#FF1493',
                nivel: this.noviaActual.nivel,
                afinidad: this.noviaActual.afinidad
            };
            noviaId = this.noviaActual.id;
            noviaNombre = this.noviaActual.nombreCorto;
            noviaImagen = this.noviaActual.imagen;
            noviaColor = this.noviaActual.color || '#FF1493';
            noviaNivel = this.noviaActual.nivel;
            noviaAfinidad = this.noviaActual.afinidad;
            console.log("✅ Novia guardada en recompensas:", noviaNombre, "Nivel:", noviaNivel, "Afinidad:", noviaAfinidad);
        }
        
        const bossNombre = this.bossDerrotado.nombre;
        
        // Calcular porcentaje de afinidad para barra
        const afinidadPorcentaje = Math.min((noviaAfinidad / 200) * 100, 100);
        const afinidadColor = noviaAfinidad >= 0 ? '#4CAF50' : '#FF6B6B';
        
        const html = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); display: flex; justify-content: center; align-items: center; z-index: 10000;">
                <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); border: 3px solid gold; border-radius: 30px; padding: 30px; max-width: 900px; width: 90%; max-height: 90vh; overflow-y: auto;">
                    
                    <h1 style="text-align: center; color: gold; margin-bottom: 20px;">🎉 VICTORIA CONTRA EL BOSS!</h1>
                    <p style="text-align: center; color: white; margin-bottom: 30px;">${bossNombre} ha sido derrotado</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                        
                        <!-- REINO DE LA NOVIA -->
                        <div style="background: rgba(255, 20, 147, 0.2); border: 2px solid ${noviaColor}; border-radius: 20px; padding: 20px; text-align: center;">
                            <h2 style="color: ${noviaColor}; margin-bottom: 15px;">💖 REINO DE ${noviaNombre.toUpperCase()}</h2>
                            <img src="${noviaImagen}" 
                                 style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid ${noviaColor}; margin-bottom: 15px; object-fit: cover;"
                                 onerror="this.src='https://via.placeholder.com/100x100/FF1493/FFFFFF?text=NOVIA'">
                            
                            <div style="background: rgba(0,0,0,0.3); border-radius: 10px; padding: 10px; margin-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 5px;">
                                    <span>📊 Nivel:</span>
                                    <span style="font-weight: bold; color: ${noviaColor};">${noviaNivel}/10</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 5px;">
                                    <span>💝 Afinidad:</span>
                                    <span style="font-weight: bold; color: ${afinidadColor};">${noviaAfinidad}/200</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: ${afinidadColor}; width: ${afinidadPorcentaje}%; height: 100%;"></div>
                                </div>
                            </div>
                            
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensaNoviaGuardada('mamada')" 
                                        style="background: linear-gradient(135deg, ${noviaColor}, #FF6B6B); padding: 12px; font-size: 0.9rem;">
                                    😮 Mamada de ${noviaNombre}
                                </button>
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensaNoviaGuardada('doggy')" 
                                        style="background: linear-gradient(135deg, ${noviaColor}, #FF6B6B); padding: 12px; font-size: 0.9rem;">
                                    🐕 Doggy con ${noviaNombre}
                                </button>
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensaNoviaGuardada('montar')" 
                                        style="background: linear-gradient(135deg, ${noviaColor}, #FF6B6B); padding: 12px; font-size: 0.9rem;">
                                    👆 ${noviaNombre} te monta
                                </button>
                            </div>
                        </div>
                        
                        <!-- REINO DEL BOSS -->
                        <div style="background: rgba(255, 215, 0, 0.2); border: 2px solid gold; border-radius: 20px; padding: 20px; text-align: center;">
                            <h2 style="color: gold; margin-bottom: 15px;">🔥 REINO DE ${bossNombre.toUpperCase()}</h2>
                            <img src="${this.bossDerrotado.imagen || 'https://via.placeholder.com/100x100/gold/000000?text=BOSS'}" 
                                 style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid gold; margin-bottom: 15px; object-fit: cover;"
                                 onerror="this.src='https://via.placeholder.com/100x100/gold/000000?text=BOSS'">
                            
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensaBoss('mamada')" 
                                        style="background: linear-gradient(135deg, gold, #FF9800); padding: 12px; font-size: 0.9rem;">
                                    😮 Mamada de ${bossNombre}
                                </button>
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensaBoss('doggy')" 
                                        style="background: linear-gradient(135deg, gold, #FF9800); padding: 12px; font-size: 0.9rem;">
                                    🐕 Doggy con ${bossNombre}
                                </button>
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensaBoss('montar')" 
                                        style="background: linear-gradient(135deg, gold, #FF9800); padding: 12px; font-size: 0.9rem;">
                                    👆 Montar a ${bossNombre}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button class="card-button" onclick="fantasiaRPG.cerrarRecompensas()" 
                                style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px 40px; font-size: 1.1rem;">
                            ↩️ VOLVER AL MENÚ PRINCIPAL
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        const overlay = document.createElement('div');
        overlay.id = 'recompensas-overlay';
        overlay.innerHTML = html;
        document.body.appendChild(overlay);
        
        console.log("🎬 Mostrando recompensas - Novia guardada:", noviaNombre, "Nivel:", noviaNivel, "Afinidad:", noviaAfinidad);
    }

    verVideoRecompensaNoviaGuardada(accion) {
        if (!this.noviaEnRecompensas) {
            alert("❌ No hay novia guardada en recompensas");
            return;
        }
        
        const noviaId = this.noviaEnRecompensas.id;
        const noviaNombre = this.noviaEnRecompensas.nombre;
        
        if (!this.videosNovias[noviaId]) {
            alert(`❌ No hay videos configurados para ${noviaNombre} en Fantasía`);
            return;
        }
        
        const videoId = this.videosNovias[noviaId][accion];
        const titulo = `${noviaNombre} - ${accion}`;
        const imagen = this.noviaEnRecompensas.imagen;
        
        if (!videoId) {
            alert(`❌ Video de ${accion} para ${noviaNombre} no disponible en Fantasía`);
            return;
        }
        
        this.cerrarRecompensas();
        this.mostrarVideo(videoId, titulo, imagen, 'novia');
    }

    verVideoRecompensaBoss(accion) {
        if (!this.bossDerrotado) return;
        
        const videoId = this.bossDerrotado.videos[accion];
        const titulo = `${this.bossDerrotado.nombre} - ${accion}`;
        const imagen = this.bossDerrotado.imagen;
        
        if (!videoId || videoId.startsWith("ID_VIDEO")) {
            alert("❌ Video de boss no disponible");
            return;
        }
        
        this.cerrarRecompensas();
        this.mostrarVideo(videoId, titulo, imagen, 'boss');
    }

    cerrarRecompensas() {
        const overlay = document.getElementById('recompensas-overlay');
        if (overlay) overlay.remove();
        this.bossDerrotado = null;
        this.noviaEnRecompensas = null;
        this.spriteBossActual = 'normal';
        this.cargarUIMenuPrincipal();
    }

    mostrarVideo(videoId, titulo, imagen, tipo) {
        const color = tipo === 'novia' ? '#FF1493' : 'gold';
        
        const html = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.98); z-index: 10001; display: flex; justify-content: center; align-items: center;">
                <div style="max-width: 900px; width: 95%; background: #1a1a2e; border-radius: 30px; padding: 20px; border: 3px solid ${color};">
                    
                    <div style="text-align: center; margin-bottom: 15px;">
                        <img src="${imagen}" 
                             style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid ${color}; margin-bottom: 10px; object-fit: cover;"
                             onerror="this.src='https://via.placeholder.com/80x80/${color === 'gold' ? 'FFD700' : 'FF1493'}/FFFFFF?text=IMG'">
                        <h2 style="text-align: center; color: ${color}; margin-bottom: 15px;">🎬 ${titulo}</h2>
                    </div>
                    
                    <div style="margin: 15px 0; border-radius: 15px; overflow: hidden; position: relative; padding-bottom: 56.25%; height: 0;">
                        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                src="https://drive.google.com/file/d/${videoId}/preview" 
                                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                    
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="card-button" onclick="fantasiaRPG.cerrarVideo()" 
                                style="background: linear-gradient(135deg, ${color}, ${color === 'gold' ? '#FF9800' : '#FF6B6B'}); padding: 12px 30px;">
                            ↩️ Cerrar Video
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        const overlay = document.createElement('div');
        overlay.id = 'video-overlay';
        overlay.innerHTML = html;
        document.body.appendChild(overlay);
    }

    cerrarVideo() {
        const overlay = document.getElementById('video-overlay');
        if (overlay) overlay.remove();
        this.mostrarRecompensasBoss();
    }

    // ====================
    // TIENDA
    // ====================

    comprarStat(stat) {
        const costo = 10;
        
        if (this.jugador.piedras < costo) {
            this.mostrarNotificacion("❌ No tienes suficientes piedras");
            return;
        }
        
        if (this.jugador.stats[stat] >= 100) {
            this.mostrarNotificacion("❌ Ya llegaste al máximo (100)");
            return;
        }
        
        this.jugador.piedras -= costo;
        this.jugador.stats[stat]++;
        
        this.mostrarNotificacion(`✅ ${stat} +1 (ahora ${this.jugador.stats[stat]})`);
        this.guardarTodo();
        this.cargarUITienda();
    }

    comprarConsumible(tipo) {
        const precios = {
            pocionVidaPequena: 3,
            pocionVidaGrande: 8,
            pocionEnergia: 5,
            revivirAuto: 15
        };
        
        const costo = precios[tipo];
        
        if (this.jugador.piedras < costo) {
            this.mostrarNotificacion("❌ No tienes suficientes piedras");
            return;
        }
        
        this.jugador.piedras -= costo;
        this.jugador.inventario[tipo]++;
        
        this.mostrarNotificacion(`✅ Compraste 1 ${tipo}`);
        this.guardarTodo();
        this.cargarUITienda();
    }

    // ====================
    // UTILIDADES
    // ====================

    esBossActual() {
        return this.indiceEnemigoActual >= this.pisos[this.pisoActual].enemigos.length;
    }

    agregarMensaje(mensaje) {
        this.mensajesCombate.push(mensaje);
        if (this.mensajesCombate.length > 8) {
            this.mensajesCombate.shift();
        }
    }

    verificarSubidaNivel() {
        while (this.jugador.exp >= this.jugador.expMaxima) {
            this.jugador.nivel++;
            this.jugador.exp -= this.jugador.expMaxima;
            this.jugador.expMaxima = Math.floor(this.jugador.expMaxima * 1.5);
            
            this.jugador.stats.fuerza += 1;
            this.jugador.stats.resistencia += 1;
            this.jugador.stats.velocidad += 1;
            this.jugador.stats.inteligencia += 1;
            this.jugador.stats.carisma += 1;
            
            this.jugador.vidaMaxima += 10;
            this.jugador.vida = this.jugador.vidaMaxima;
            this.jugador.energiaMaxima += 5;
            this.jugador.energia = this.jugador.energiaMaxima;
            
            this.agregarMensaje(`🎉 SUBISTE AL NIVEL ${this.jugador.nivel}!`);
        }
    }

    calcularBonusParaHermana(hermanaId) {
        if (!this.jugador || !this.jugador.stats) return 0;
        
        const stats = this.jugador.stats;
        
        switch(hermanaId) {
            case 'ichika': return Math.min(stats.fuerza * 0.1, 10);
            case 'nino': return Math.min(stats.resistencia * 0.1, 10);
            case 'yotsuba': return Math.min(stats.velocidad * 0.1, 10);
            case 'miku': return Math.min(stats.inteligencia * 0.1, 10);
            case 'itsuki': return Math.min(stats.carisma * 0.1, 10);
            default: return 0;
        }
    }

    // ====================
    // INTERFAZ DE USUARIO
    // ====================

    cargarUI() {
        return this.cargarUIMenuPrincipal();
    }

    cargarUIMenuPrincipal() {
        this.enCombate = false;
        this.actualizarNoviaActual(); // <-- ACTUALIZAR NOVIA CADA VEZ QUE SE CARGA EL MENÚ
        
        const pisosHTML = Object.entries(this.pisos).map(([num, piso]) => {
            const estado = piso.completado ? '✅ COMPLETADO' : 
                          (piso.desbloqueado ? '▶️ DISPONIBLE' : '🔒 BLOQUEADO');
            const color = piso.completado ? '#4CAF50' : (piso.desbloqueado ? '#FFD166' : '#666');
            
            return `
                <div style="background: rgba(0,0,0,0.3); border: 2px solid ${color}; border-radius: 15px; padding: 20px; margin-bottom: 15px; cursor: ${piso.desbloqueado ? 'pointer' : 'not-allowed'}; opacity: ${piso.desbloqueado ? 1 : 0.5};"
                     onclick="${piso.desbloqueado ? `fantasiaRPG.entrarAlPiso(${num})` : ''}">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h3 style="color: ${color}; margin: 0;">${piso.nombre}</h3>
                            <p style="margin: 5px 0 0 0; opacity: 0.8;">Jefe: ${piso.jefe}</p>
                        </div>
                        <div style="font-size: 1.5rem;">${estado}</div>
                    </div>
                </div>
            `;
        }).join('');
        
        const expPorcentaje = (this.jugador.exp / this.jugador.expMaxima) * 100;
        
        // ===== SECCIÓN DE LA NOVIA SELECCIONADA (MEJORADA) =====
        let noviaHTML = '';
        if (this.noviaActual) {
            // Calcular porcentaje de afinidad para la barra
            const afinidadPorcentaje = Math.min((this.noviaActual.afinidad / 200) * 100, 100);
            const afinidadColor = this.noviaActual.afinidad >= 0 ? '#4CAF50' : '#FF6B6B';
            
            noviaHTML = `
                <div style="background: ${this.noviaActual.color}15; border-radius: 20px; padding: 20px; margin-bottom: 30px; border: 3px solid ${this.noviaActual.color};">
                    <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                        <img src="${this.noviaActual.imagen}" 
                             style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid ${this.noviaActual.color}; object-fit: cover;"
                             onerror="this.src='https://via.placeholder.com/80x80/FF1493/FFFFFF?text=NOVIA'">
                        
                        <div style="flex: 1;">
                            <h3 style="color: ${this.noviaActual.color}; margin: 0 0 10px 0; font-size: 1.3rem;">
                                💖 NOVIA SELECCIONADA: ${this.noviaActual.nombre.toUpperCase()}
                            </h3>
                            
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                                <!-- Nivel -->
                                <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 10px;">
                                    <div style="color: ${this.noviaActual.color}; font-size: 0.8rem;">📊 NIVEL</div>
                                    <div style="font-size: 1.5rem; font-weight: bold;">${this.noviaActual.nivel || '?'}</div>
                                    <div style="font-size: 0.8rem; opacity: 0.7;">Máx: 10</div>
                                </div>
                                
                                <!-- Afinidad con barra -->
                                <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 10px;">
                                    <div style="color: ${this.noviaActual.color}; font-size: 0.8rem;">💝 AFINIDAD</div>
                                    <div style="font-size: 1.5rem; font-weight: bold; color: ${afinidadColor};">${this.noviaActual.afinidad || 0}/200</div>
                                    <div style="background: rgba(255,255,255,0.2); height: 6px; border-radius: 3px; margin-top: 5px; overflow: hidden;">
                                        <div style="background: ${afinidadColor}; width: ${afinidadPorcentaje}%; height: 100%;"></div>
                                    </div>
                                </div>
                                
                                <!-- Bonus de Fantasía -->
                                <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 10px;">
                                    <div style="color: gold; font-size: 0.8rem;">✨ BONUS FANTASÍA</div>
                                    <div style="font-size: 1.5rem; font-weight: bold; color: gold;">+${this.calcularBonusParaHermana(this.noviaActual.id).toFixed(1)}%</div>
                                    <div style="font-size: 0.8rem; opacity: 0.7;">en momentos íntimos</div>
                                </div>
                                
                                <!-- Estado de ánimo -->
                                <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 10px;">
                                    <div style="color: ${this.noviaActual.color}; font-size: 0.8rem;">😊 ESTADO</div>
                                    <div style="font-size: 1.2rem; font-weight: bold; text-transform: capitalize;">
                                        ${this.obtenerEmojiEstado(this.noviaActual.estadoAnimo)} ${this.noviaActual.estadoAnimo || 'neutral'}
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Barra de EXP si existe -->
                            ${this.noviaActual.exp ? `
                            <div style="margin-top: 15px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 5px;">
                                    <span style="color: ${this.noviaActual.color};">EXPERIENCIA</span>
                                    <span>${this.noviaActual.exp}/${this.noviaActual.expNecesaria}</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.2); height: 8px; border-radius: 4px; overflow: hidden;">
                                    <div style="background: ${this.noviaActual.color}; width: ${(this.noviaActual.exp / this.noviaActual.expNecesaria) * 100}%; height: 100%;"></div>
                                </div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else {
            noviaHTML = `
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 20px; padding: 30px; margin-bottom: 30px; border: 2px dashed #FF1493; text-align: center;">
                    <p style="color: #FF1493; margin: 0; font-size: 1.2rem;">❌ NO HAY NOVIA SELECCIONADA EN EL RPG PRINCIPAL</p>
                    <p style="opacity: 0.7; font-size: 0.9rem; margin-top: 10px;">Selecciona una novia en el RPG Quintillizas para ver sus stats aquí</p>
                </div>
            `;
        }
        
        const html = `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: gold; margin-bottom: 10px;">⚔️ RPG FANTASÍA - PISOS</h1>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">Derrota bosses y obtén recompensas +18</p>
                
                ${noviaHTML}
                
                <div style="background: linear-gradient(135deg, #FF1493, #8A5AF7); border-radius: 20px; padding: 25px; margin-bottom: 30px;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; color: white;">
                        <div style="text-align: center;">
                            <div style="font-size: 0.9rem;">NIVEL</div>
                            <div style="font-size: 2rem; font-weight: bold;">${this.jugador.nivel}</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 0.9rem;">❤️ VIDA</div>
                            <div style="font-size: 2rem; font-weight: bold;">${this.jugador.vida}/${this.jugador.vidaMaxima}</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 0.9rem;">💎 PIEDRAS</div>
                            <div style="font-size: 2rem; font-weight: bold;">${this.jugador.piedras}</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 0.9rem;">⚡ ENERGÍA</div>
                            <div style="font-size: 2rem; font-weight: bold;">${this.jugador.energia}/${this.jugador.energiaMaxima}</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: white;">EXPERIENCIA</span>
                            <span style="color: white;">${this.jugador.exp}/${this.jugador.expMaxima}</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.2); height: 15px; border-radius: 10px; overflow: hidden;">
                            <div style="background: linear-gradient(135deg, #FFD166, #FF9800); width: ${expPorcentaje}%; height: 100%; transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                </div>
                
                <h2 style="color: #FFD166; margin-bottom: 20px;">🏰 SELECCIONA UN PISO</h2>
                ${pisosHTML}
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0;">
                    <button class="card-button" onclick="fantasiaRPG.cargarUITienda()" 
                            style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 20px;">
                        💎 MEJORAR STATS Y COMPRAR
                    </button>
                    <button class="card-button" onclick="volverAlInicio()" 
                            style="background: linear-gradient(135deg, #FF6B6B, #FF1493); padding: 20px;">
                        ↩️ VOLVER AL INICIO
                    </button>
                </div>
                
                <div style="text-align: center; margin: 20px 0;">
                    <button class="card-button" onclick="fantasiaRPG.resetearTodo()" 
                            style="background: linear-gradient(135deg, #FF6B6B, #FF0000); padding: 15px;">
                        🔄 RESETEAR PROGRESO (solo si hay errores)
                    </button>
                </div>
                
                ${this.noviaActual ? `
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 20px; margin-top: 20px;">
                    <h3 style="color: #FF1493; margin-bottom: 15px;">💖 BONUS PARA QUINTILLIZAS</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <div><span style="color: #FF6B6B;">Ichika:</span> +${this.calcularBonusParaHermana('ichika').toFixed(1)}%</div>
                        <div><span style="color: #FFD166;">Nino:</span> +${this.calcularBonusParaHermana('nino').toFixed(1)}%</div>
                        <div><span style="color: #4CAF50;">Yotsuba:</span> +${this.calcularBonusParaHermana('yotsuba').toFixed(1)}%</div>
                        <div><span style="color: #5864F5;">Miku:</span> +${this.calcularBonusParaHermana('miku').toFixed(1)}%</div>
                        <div><span style="color: gold;">Itsuki:</span> +${this.calcularBonusParaHermana('itsuki').toFixed(1)}%</div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
        
        return html;
    }

    cargarUICombate() {
        if (!this.enCombate || !this.enemigoActual) return this.cargarUIMenuPrincipal();
        
        const esBoss = this.esBossActual();
        let imagenEnemigo = this.enemigoActual.imagen;
        
        if (esBoss) {
            if (this.spriteBossActual === 'atacando' && this.enemigoActual.imagenAtacando) {
                imagenEnemigo = this.enemigoActual.imagenAtacando;
            } else if (this.spriteBossActual === 'derrotado' && this.enemigoActual.imagenDerrotado) {
                imagenEnemigo = this.enemigoActual.imagenDerrotado;
            } else {
                imagenEnemigo = this.enemigoActual.imagen;
            }
        }
        
        const porcentajeVidaJugador = (this.jugador.vida / this.jugador.vidaMaxima) * 100;
        const porcentajeVidaEnemigo = (this.enemigoActual.vidaActual / this.enemigoActual.vida) * 100;
        const porcentajeEnergia = (this.jugador.energia / this.jugador.energiaMaxima) * 100;
        
        return `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <h2 style="text-align: center; color: ${esBoss ? 'gold' : '#FFD166'}; margin-bottom: 10px;">
                    ${esBoss ? '🔥 BOSS FINAL 🔥' : this.pisos[this.pisoActual].nombre}
                </h2>
                <p style="text-align: center; margin-bottom: 30px;">
                    Enemigo ${this.indiceEnemigoActual + 1}/${this.pisos[this.pisoActual].enemigos.length + 1}
                </p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 30px;">
                    <div style="text-align: center;">
                        <div style="background: rgba(88, 100, 245, 0.2); border: 3px solid #5864F5; border-radius: 20px; padding: 20px;">
                            <img src="https://via.placeholder.com/150x150/5864F5/FFFFFF?text=JUGADOR" 
                                 style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid #5864F5; margin-bottom: 15px; object-fit: cover;">
                            <h3 style="color: #5864F5;">Héroe</h3>
                            
                            <div style="margin-top: 10px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                                    <span style="color: #FF6B6B;">❤️ VIDA</span>
                                    <span>${this.jugador.vida}/${this.jugador.vidaMaxima}</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 15px; border-radius: 10px; overflow: hidden;">
                                    <div style="background: linear-gradient(135deg, #FF6B6B, #FF1493); width: ${porcentajeVidaJugador}%; height: 100%;"></div>
                                </div>
                            </div>
                            
                            <div style="margin-top: 10px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                                    <span style="color: #FFD700;">⚡ ENERGÍA</span>
                                    <span>${this.jugador.energia}/${this.jugador.energiaMaxima}</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 15px; border-radius: 10px; overflow: hidden;">
                                    <div style="background: linear-gradient(135deg, #FFD700, #FF9800); width: ${porcentajeEnergia}%; height: 100%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="background: rgba(255, 107, 107, 0.2); border: 3px solid ${esBoss ? 'gold' : '#FF6B6B'}; border-radius: 20px; padding: 20px;">
                            <img src="${imagenEnemigo}" 
                                 style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid ${esBoss ? 'gold' : '#FF6B6B'}; margin-bottom: 15px; object-fit: cover;"
                                 onerror="this.src='https://via.placeholder.com/150x150/FF6B6B/FFFFFF?text=ENEMIGO'">
                            <h3 style="color: ${esBoss ? 'gold' : '#FF6B6B'};">${this.enemigoActual.nombre}</h3>
                            
                            <div style="margin-top: 10px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                                    <span style="color: #FF6B6B;">❤️ VIDA</span>
                                    <span>${this.enemigoActual.vidaActual}/${this.enemigoActual.vida}</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 15px; border-radius: 10px; overflow: hidden;">
                                    <div style="background: linear-gradient(135deg, #FF6B6B, #FF1493); width: ${porcentajeVidaEnemigo}%; height: 100%;"></div>
                                </div>
                            </div>
                            
                            ${esBoss && this.spriteBossActual === 'derrotado' ? 
                                '<p style="color: gold; margin-top: 10px; font-weight: bold; animation: pulse 1s infinite;">💀 BOSS DERROTADO - PREMIOS EN 5 SEGUNDOS...</p>' : ''}
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(0,0,0,0.5); border-radius: 15px; padding: 20px; margin-bottom: 30px; max-height: 150px; overflow-y: auto;">
                    ${this.mensajesCombate.length > 0 ? 
                        this.mensajesCombate.map(m => `<div style="margin-bottom: 5px; padding: 5px; border-bottom: 1px solid rgba(255,255,255,0.1);">${m}</div>`).join('') 
                        : '<div style="text-align: center; opacity: 0.7;">El combate comienza...</div>'}
                </div>
                
                ${this.spriteBossActual !== 'derrotado' ? `
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px;">
                    <button class="card-button" onclick="fantasiaRPG.atacar('basico')" 
                            style="background: linear-gradient(135deg, #FF6B6B, #FF1493); padding: 15px;">
                        ⚔️ BÁSICO (0 EN)
                    </button>
                    <button class="card-button" onclick="fantasiaRPG.atacar('fuerte')" 
                            style="background: linear-gradient(135deg, #FF9800, #F44336); padding: 15px; ${this.jugador.energia < 15 ? 'opacity:0.5;' : ''}"
                            ${this.jugador.energia < 15 ? 'disabled' : ''}>
                        💥 FUERTE (15 EN)
                    </button>
                    <button class="card-button" onclick="fantasiaRPG.atacar('magico')" 
                            style="background: linear-gradient(135deg, #8A5AF7, #5864F5); padding: 15px; ${this.jugador.energia < 25 ? 'opacity:0.5;' : ''}"
                            ${this.jugador.energia < 25 ? 'disabled' : ''}>
                        ✨ MÁGICO (25 EN)
                    </button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px;">
                    <button class="card-button" onclick="fantasiaRPG.mostrarMenuPociones()" 
                            style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px;">
                        💊 POCIONES
                    </button>
                    <button class="card-button" onclick="fantasiaRPG.huir()" 
                            style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 15px;">
                        🏃 HUIR
                    </button>
                    <button class="card-button" onclick="fantasiaRPG.rendirse()" 
                            style="background: linear-gradient(135deg, #666, #333); padding: 15px;">
                        🏳️ RENDIRSE
                    </button>
                </div>
                ` : `
                <div style="text-align: center; padding: 30px; background: rgba(255,215,0,0.1); border-radius: 15px; margin: 20px 0;">
                    <p style="color: gold; font-size: 1.2rem;">⏳ Preparando recompensas...</p>
                </div>
                `}
                
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 15px;">
                    <div style="display: flex; gap: 20px; justify-content: center; font-size: 0.9rem; flex-wrap: wrap;">
                        <span>💊 Pequeñas: ${this.jugador.inventario.pocionVidaPequena}</span>
                        <span>❤️ Grandes: ${this.jugador.inventario.pocionVidaGrande}</span>
                        <span>⚡ Energía: ${this.jugador.inventario.pocionEnergia}</span>
                        <span>✨ Revivir: ${this.jugador.inventario.revivirAuto}</span>
                    </div>
                </div>
            </div>
        `;
    }

    mostrarMenuPociones() {
        if (!this.enCombate) return;
        
        const html = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); display: flex; justify-content: center; align-items: center; z-index: 1000;">
                <div style="background: #1a1a2e; border: 3px solid #4CAF50; border-radius: 30px; padding: 30px; max-width: 500px; width: 90%;">
                    <h2 style="text-align: center; color: #4CAF50; margin-bottom: 30px;">💊 SELECCIONA POCIÓN</h2>
                    
                    <div style="display: grid; gap: 15px;">
                        <button class="card-button" onclick="fantasiaRPG.usarPocion('vidaPequena'); fantasiaRPG.cerrarMenuPociones()" 
                                ${this.jugador.inventario.pocionVidaPequena === 0 ? 'disabled style="opacity:0.5;"' : ''}
                                style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px;">
                            💊 Poción de Vida Pequeña (+30 HP) [${this.jugador.inventario.pocionVidaPequena}]
                        </button>
                        
                        <button class="card-button" onclick="fantasiaRPG.usarPocion('vidaGrande'); fantasiaRPG.cerrarMenuPociones()" 
                                ${this.jugador.inventario.pocionVidaGrande === 0 ? 'disabled style="opacity:0.5;"' : ''}
                                style="background: linear-gradient(135deg, #FF6B6B, #FF1493); padding: 15px;">
                            ❤️ Poción de Vida Grande (+60 HP) [${this.jugador.inventario.pocionVidaGrande}]
                        </button>
                        
                        <button class="card-button" onclick="fantasiaRPG.usarPocion('energia'); fantasiaRPG.cerrarMenuPociones()" 
                                ${this.jugador.inventario.pocionEnergia === 0 ? 'disabled style="opacity:0.5;"' : ''}
                                style="background: linear-gradient(135deg, #FFD700, #FF9800); padding: 15px;">
                            ⚡ Poción de Energía (+20 EN) [${this.jugador.inventario.pocionEnergia}]
                        </button>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <button class="card-button" onclick="fantasiaRPG.cerrarMenuPociones()" 
                                style="background: linear-gradient(135deg, #666, #333); padding: 10px 30px;">
                            ↩️ CANCELAR
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        const overlay = document.createElement('div');
        overlay.id = 'pociones-overlay';
        overlay.innerHTML = html;
        document.body.appendChild(overlay);
    }

    cerrarMenuPociones() {
        const overlay = document.getElementById('pociones-overlay');
        if (overlay) overlay.remove();
    }

    cargarUITienda() {
        const stats = this.jugador.stats;
        
        const statsHTML = Object.entries({
            fuerza: { icono: '💪', nombre: 'Fuerza', hermana: 'Ichika', color: '#FF6B6B' },
            resistencia: { icono: '🔋', nombre: 'Resistencia', hermana: 'Nino', color: '#FFD166' },
            velocidad: { icono: '⚡', nombre: 'Velocidad', hermana: 'Yotsuba', color: '#4CAF50' },
            inteligencia: { icono: '🧠', nombre: 'Inteligencia', hermana: 'Miku', color: '#5864F5' },
            carisma: { icono: '😎', nombre: 'Carisma', hermana: 'Itsuki', color: 'gold' }
        }).map(([key, data]) => `
            <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px; margin-bottom: 15px; border-left: 5px solid ${data.color};">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                    <div style="min-width: 200px;">
                        <span style="font-size: 1.5rem;">${data.icono}</span>
                        <strong style="color: ${data.color};"> ${data.nombre}</strong>
                        <div style="font-size: 0.9rem; opacity: 0.7;">+${this.calcularBonusParaHermana(key).toFixed(1)}% para ${data.hermana}</div>
                    </div>
                    <div style="font-size: 2rem; font-weight: bold;">${stats[key]}</div>
                    <div>
                        <button class="card-button" onclick="fantasiaRPG.comprarStat('${key}')" 
                                style="background: linear-gradient(135deg, ${data.color}, #333); padding: 10px 20px;">
                            +1 (10💎)
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        const consumiblesHTML = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                <div style="background: rgba(76, 175, 80, 0.1); border-radius: 15px; padding: 20px; text-align: center;">
                    <h4 style="color: #4CAF50;">💊 Poción Pequeña</h4>
                    <p>+30 HP - 3💎</p>
                    <button class="card-button" onclick="fantasiaRPG.comprarConsumible('pocionVidaPequena')" 
                            style="background: linear-gradient(135deg, #4CAF50, #2E7D32); width: 100%;">
                        COMPRAR (${this.jugador.inventario.pocionVidaPequena})
                    </button>
                </div>
                
                <div style="background: rgba(255, 107, 107, 0.1); border-radius: 15px; padding: 20px; text-align: center;">
                    <h4 style="color: #FF6B6B;">❤️ Poción Grande</h4>
                    <p>+60 HP - 8💎</p>
                    <button class="card-button" onclick="fantasiaRPG.comprarConsumible('pocionVidaGrande')" 
                            style="background: linear-gradient(135deg, #FF6B6B, #FF1493); width: 100%;">
                        COMPRAR (${this.jugador.inventario.pocionVidaGrande})
                    </button>
                </div>
                
                <div style="background: rgba(255, 215, 0, 0.1); border-radius: 15px; padding: 20px; text-align: center;">
                    <h4 style="color: gold;">⚡ Poción Energía</h4>
                    <p>+20 EN - 5💎</p>
                    <button class="card-button" onclick="fantasiaRPG.comprarConsumible('pocionEnergia')" 
                            style="background: linear-gradient(135deg, gold, #FF9800); width: 100%;">
                        COMPRAR (${this.jugador.inventario.pocionEnergia})
                    </button>
                </div>
                
                <div style="background: rgba(138, 90, 247, 0.1); border-radius: 15px; padding: 20px; text-align: center;">
                    <h4 style="color: #8A5AF7;">✨ Revivir Auto</h4>
                    <p>1 uso por combate - 15💎</p>
                    <button class="card-button" onclick="fantasiaRPG.comprarConsumible('revivirAuto')" 
                            style="background: linear-gradient(135deg, #8A5AF7, #5864F5); width: 100%;">
                        COMPRAR (${this.jugador.inventario.revivirAuto})
                    </button>
                </div>
            </div>
        `;
        
        const html = `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: gold; margin-bottom: 10px;">💎 TIENDA DE STATS Y CONSUMIBLES</h1>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">Tus piedras: ${this.jugador.piedras} 💎</p>
                
                <div style="background: linear-gradient(135deg, #FF1493, #8A5AF7); border-radius: 20px; padding: 25px; margin-bottom: 30px;">
                    <h3 style="color: white; margin-bottom: 20px;">📊 MEJORA TUS STATS (10💎 = +1)</h3>
                    ${statsHTML}
                </div>
                
                <div style="background: linear-gradient(135deg, #4CAF50, #2E7D32); border-radius: 20px; padding: 25px; margin-bottom: 30px;">
                    <h3 style="color: white; margin-bottom: 20px;">💊 CONSUMIBLES PARA COMBATE</h3>
                    ${consumiblesHTML}
                </div>
                
                <div style="text-align: center;">
                    <button class="card-button" onclick="fantasiaRPG.cargarUIMenuPrincipal()" 
                            style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 15px 40px;">
                        ↩️ VOLVER AL MENÚ
                    </button>
                </div>
            </div>
        `;
        
        const mangaSection = document.getElementById('manga-section');
        if (mangaSection) {
            mangaSection.innerHTML = html;
        }
    }

    actualizarUI() {
        const mangaSection = document.getElementById('manga-section');
        if (!mangaSection) return;
        
        if (this.enCombate) {
            mangaSection.innerHTML = this.cargarUICombate();
        } else {
            mangaSection.innerHTML = this.cargarUIMenuPrincipal();
        }
    }

    resetearTodo() {
        if (confirm("¿Seguro? Perderás todo tu progreso en Fantasía")) {
            this.limpiarLocalStorage();
            this.jugador = this.inicializarJugador();
            this.pisos = this.inicializarPisos();
            this.pisoActual = 1;
            this.enCombate = false;
            this.noviaActual = null;
            this.noviaEnRecompensas = null;
            this.guardarTodo();
            this.cargarUIMenuPrincipal();
            this.mostrarNotificacion("✅ Progreso reseteado");
        }
    }

    mostrarNotificacion(mensaje) {
        const notif = document.createElement('div');
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, gold, #FF1493);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            font-weight: bold;
            z-index: 10000;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
            border: 2px solid white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        `;
        document.body.appendChild(notif);
        setTimeout(() => {
            if (notif.parentNode) notif.remove();
        }, 2500);
    }

    // ====================
    // LOCAL STORAGE
    // ====================

    guardarTodo() {
        try {
            localStorage.setItem('fantasia_jugador', JSON.stringify(this.jugador));
            localStorage.setItem('fantasia_pisos', JSON.stringify(this.pisos));
            localStorage.setItem('fantasia_pisoActual', this.pisoActual.toString());
            console.log("💾 Datos guardados:", this.jugador);
        } catch (e) {
            console.warn('Error guardando:', e);
        }
    }

    cargarJugador() {
        try {
            const jugador = localStorage.getItem('fantasia_jugador');
            if (jugador) {
                console.log("📂 Jugador cargado:", JSON.parse(jugador));
                return JSON.parse(jugador);
            }
        } catch (e) {
            console.warn('Error cargando jugador:', e);
        }
        return null;
    }

    cargarPisoActual() {
        try {
            const piso = localStorage.getItem('fantasia_pisoActual');
            return piso ? parseInt(piso) : 1;
        } catch (e) {
            return 1;
        }
    }
}

// ================================================
// INSTANCIA GLOBAL
// ================================================

const fantasiaRPG = new FantasiaRPG();
window.fantasiaRPG = fantasiaRPG;

console.log("✅ RPG Fantasía cargado correctamente");
console.log("💰 Piedras iniciales:", fantasiaRPG.jugador.piedras);
console.log("❤️ Vida:", fantasiaRPG.jugador.vida);
console.log("⚡ Energía:", fantasiaRPG.jugador.energia");
