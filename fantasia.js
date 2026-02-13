// ================================================
// RPG FANTASÍA - 5 PISOS CON BOSS Y RECOMPENSAS +18
// Combate por turnos con sprites URL
// Tienda de consumibles
// Recompensas: videos de novia o boss
// ================================================

class FantasiaRPG {
    constructor() {
        this.jugador = this.cargarJugador() || this.inicializarJugador();
        this.pisos = this.inicializarPisos();
        this.pisoActual = this.cargarPisoActual() || 1;
        this.enemigoActual = null;
        this.indiceEnemigoActual = 0;
        this.enCombate = false;
        this.mensajesCombate = [];
        this.spriteBossActual = 'normal';
        this.bossDerrotado = null;
        this.pocionUsadaEsteCombate = false; // Para limitar revivir automático
    }

    // ====================
    // INICIALIZACIÓN
    // ====================

    inicializarJugador() {
        return {
            nivel: 1,
            exp: 0,
            expMaxima: 100,
            
            // Stats base (empiezan en 5)
            stats: {
                fuerza: 5,
                resistencia: 5,
                velocidad: 5,
                inteligencia: 5,
                carisma: 5
            },
            
            // Combate
            vida: 100,
            vidaMaxima: 100,
            energia: 50,
            energiaMaxima: 50,
            
            // Piedras filosofales
            piedras: 0,
            
            // Inventario de consumibles
            inventario: {
                pocionVidaPequena: 3,
                pocionVidaGrande: 1,
                pocionEnergia: 2,
                revivirAuto: 0
            },
            
            // Estadísticas
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
                imagenJefe: "URL_RIAS_NORMAL", // Tú pones URL
                imagenJefeAtacando: "URL_RIAS_ATACANDO",
                imagenJefeDerrotado: "URL_RIAS_DERROTADO",
                enemigos: [
                    {
                        id: "slime",
                        nombre: "Slime Verde",
                        imagen: "URL_SLIME",
                        vida: 25,
                        fuerza: 4,
                        defensa: 1,
                        exp: 5,
                        piedras: 1
                    },
                    {
                        id: "goblin",
                        nombre: "Goblin",
                        imagen: "URL_GOBLIN",
                        vida: 35,
                        fuerza: 6,
                        defensa: 2,
                        exp: 8,
                        piedras: 1
                    },
                    {
                        id: "lobo",
                        nombre: "Lobo",
                        imagen: "URL_LOBO",
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
                    imagen: "URL_RIAS_NORMAL",
                    imagenAtacando: "URL_RIAS_ATACANDO",
                    imagenDerrotado: "URL_RIAS_DERROTADO",
                    vida: 120,
                    fuerza: 15,
                    defensa: 5,
                    exp: 50,
                    piedras: 5,
                    
                    // Videos de recompensa (tú pones IDs después)
                    videos: {
                        mamada: "ID_VIDEO_MAMADA_RIAS",
                        doggy: "ID_VIDEO_DOGGY_RIAS",
                        montar: "ID_VIDEO_MONTAR_RIAS"
                    }
                }
            },
            2: {
                nombre: "🔥 Volcán de Fuego",
                desbloqueado: false,
                completado: false,
                jefe: "Erza Scarlet",
                imagenJefe: "URL_ERZA_NORMAL",
                imagenJefeAtacando: "URL_ERZA_ATACANDO",
                imagenJefeDerrotado: "URL_ERZA_DERROTADO",
                enemigos: [
                    {
                        id: "elemental",
                        nombre: "Elemental de Fuego",
                        imagen: "URL_ELEMENTAL",
                        vida: 40,
                        fuerza: 9,
                        defensa: 3,
                        exp: 15,
                        piedras: 2
                    },
                    {
                        id: "salamandra",
                        nombre: "Salamandra",
                        imagen: "URL_SALAMANDRA",
                        vida: 55,
                        fuerza: 12,
                        defensa: 4,
                        exp: 20,
                        piedras: 2
                    },
                    {
                        id: "demonio",
                        nombre: "Demonio Menor",
                        imagen: "URL_DEMONIO",
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
                    imagen: "URL_ERZA_NORMAL",
                    imagenAtacando: "URL_ERZA_ATACANDO",
                    imagenDerrotado: "URL_ERZA_DERROTADO",
                    vida: 180,
                    fuerza: 22,
                    defensa: 8,
                    exp: 80,
                    piedras: 10,
                    
                    videos: {
                        mamada: "ID_VIDEO_MAMADA_ERZA",
                        doggy: "ID_VIDEO_DOGGY_ERZA",
                        montar: "ID_VIDEO_MONTAR_ERZA"
                    }
                }
            },
            3: {
                nombre: "❄️ Templo Helado",
                desbloqueado: false,
                completado: false,
                jefe: "Esdeath",
                imagenJefe: "URL_ESDEATH_NORMAL",
                imagenJefeAtacando: "URL_ESDEATH_ATACANDO",
                imagenJefeDerrotado: "URL_ESDEATH_DERROTADO",
                enemigos: [
                    {
                        id: "fantasma",
                        nombre: "Fantasma",
                        imagen: "URL_FANTASMA",
                        vida: 50,
                        fuerza: 11,
                        defensa: 4,
                        exp: 22,
                        piedras: 3
                    },
                    {
                        id: "yeti",
                        nombre: "Yeti",
                        imagen: "URL_YETI",
                        vida: 75,
                        fuerza: 16,
                        defensa: 7,
                        exp: 30,
                        piedras: 3
                    },
                    {
                        id: "golem",
                        nombre: "Golem de Hielo",
                        imagen: "URL_GOLEM",
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
                    imagen: "URL_ESDEATH_NORMAL",
                    imagenAtacando: "URL_ESDEATH_ATACANDO",
                    imagenDerrotado: "URL_ESDEATH_DERROTADO",
                    vida: 250,
                    fuerza: 30,
                    defensa: 12,
                    exp: 120,
                    piedras: 15,
                    
                    videos: {
                        mamada: "ID_VIDEO_MAMADA_ESDEATH",
                        doggy: "ID_VIDEO_DOGGY_ESDEATH",
                        montar: "ID_VIDEO_MONTAR_ESDEATH"
                    }
                }
            },
            4: {
                nombre: "⚡ Ciudad Prohibida",
                desbloqueado: false,
                completado: false,
                jefe: "Yor Forger",
                imagenJefe: "URL_YOR_NORMAL",
                imagenJefeAtacando: "URL_YOR_ATACANDO",
                imagenJefeDerrotado: "URL_YOR_DERROTADO",
                enemigos: [
                    {
                        id: "samurai",
                        nombre: "Samurai",
                        imagen: "URL_SAMURAI",
                        vida: 65,
                        fuerza: 18,
                        defensa: 8,
                        exp: 35,
                        piedras: 4
                    },
                    {
                        id: "ninja",
                        nombre: "Ninja",
                        imagen: "URL_NINJA",
                        vida: 55,
                        fuerza: 22,
                        defensa: 5,
                        exp: 40,
                        piedras: 4
                    },
                    {
                        id: "oni",
                        nombre: "Oni",
                        imagen: "URL_ONI",
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
                    imagen: "URL_YOR_NORMAL",
                    imagenAtacando: "URL_YOR_ATACANDO",
                    imagenDerrotado: "URL_YOR_DERROTADO",
                    vida: 320,
                    fuerza: 38,
                    defensa: 15,
                    exp: 160,
                    piedras: 20,
                    
                    videos: {
                        mamada: "ID_VIDEO_MAMADA_YOR",
                        doggy: "ID_VIDEO_DOGGY_YOR",
                        montar: "ID_VIDEO_MONTAR_YOR"
                    }
                }
            },
            5: {
                nombre: "🌌 Castillo Celestial",
                desbloqueado: false,
                completado: false,
                jefe: "Makima",
                imagenJefe: "URL_MAKIMA_NORMAL",
                imagenJefeAtacando: "URL_MAKIMA_ATACANDO",
                imagenJefeDerrotado: "URL_MAKIMA_DERROTADO",
                enemigos: [
                    {
                        id: "angel",
                        nombre: "Ángel",
                        imagen: "URL_ANGEL",
                        vida: 80,
                        fuerza: 22,
                        defensa: 10,
                        exp: 50,
                        piedras: 5
                    },
                    {
                        id: "caballero",
                        nombre: "Caballero Celestial",
                        imagen: "URL_CABALLERO",
                        vida: 100,
                        fuerza: 28,
                        defensa: 15,
                        exp: 60,
                        piedras: 5
                    },
                    {
                        id: "mago",
                        nombre: "Mago Supremo",
                        imagen: "URL_MAGO",
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
                    imagen: "URL_MAKIMA_NORMAL",
                    imagenAtacando: "URL_MAKIMA_ATACANDO",
                    imagenDerrotado: "URL_MAKIMA_DERROTADO",
                    vida: 500,
                    fuerza: 50,
                    defensa: 20,
                    exp: 300,
                    piedras: 50,
                    
                    videos: {
                        mamada: "ID_VIDEO_MAMADA_MAKIMA",
                        doggy: "ID_VIDEO_DOGGY_MAKIMA",
                        montar: "ID_VIDEO_MONTAR_MAKIMA"
                    }
                }
            }
        };
    }

    // ====================
    // COMBATE POR TURNOS
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
        
        // Cargar primer enemigo
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

    atacar() {
        if (!this.enCombate) return;
        
        // Calcular daño del jugador
        let daño = 5 + Math.floor(Math.random() * 6) + Math.floor(this.jugador.stats.fuerza / 2);
        daño = Math.max(1, daño - this.enemigoActual.defensa);
        
        this.enemigoActual.vidaActual -= daño;
        this.agregarMensaje(`💥 Atacas! ${daño} de daño a ${this.enemigoActual.nombre}`);
        
        // Cambiar sprite si es boss
        if (this.esBossActual()) {
            this.spriteBossActual = 'atacando';
            setTimeout(() => { this.spriteBossActual = 'normal'; this.actualizarUI(); }, 500);
        }
        
        // Verificar si enemigo murió
        if (this.enemigoActual.vidaActual <= 0) {
            this.enemigoDerrotado();
            return;
        }
        
        // Turno del enemigo (después de 1 segundo)
        setTimeout(() => this.turnoEnemigo(), 1000);
        this.actualizarUI();
    }

    turnoEnemigo() {
        if (!this.enCombate) return;
        
        let dañoEnemigo = this.enemigoActual.fuerza + Math.floor(Math.random() * 5);
        dañoEnemigo = Math.max(1, dañoEnemigo - 2); // Defensa base del jugador
        
        this.jugador.vida -= dañoEnemigo;
        this.agregarMensaje(`💢 ${this.enemigoActual.nombre} te ataca! ${dañoEnemigo} de daño`);
        
        // Cambiar sprite si es boss
        if (this.esBossActual()) {
            this.spriteBossActual = 'atacando';
            setTimeout(() => { this.spriteBossActual = 'normal'; this.actualizarUI(); }, 500);
        }
        
        // Verificar si jugador murió
        if (this.jugador.vida <= 0) {
            this.jugador.vida = 0;
            this.agregarMensaje("💀 Has muerto...");
            setTimeout(() => this.muerteJugador(), 1500);
        }
        
        this.actualizarUI();
    }

    enemigoDerrotado() {
        const esBoss = this.esBossActual();
        
        // Recompensas
        this.jugador.piedras += this.enemigoActual.piedras;
        this.jugador.exp += this.enemigoActual.exp;
        this.jugador.enemigosDerrotados++;
        
        this.agregarMensaje(`🎉 ${this.enemigoActual.nombre} derrotado!`);
        this.agregarMensaje(`💎 +${this.enemigoActual.piedras} piedras`);
        this.agregarMensaje(`⭐ +${this.enemigoActual.exp} EXP`);
        
        if (esBoss) {
            // Es BOSS
            this.spriteBossActual = 'derrotado';
            this.bossDerrotado = this.enemigoActual;
            this.jugador.bossesDerrotados++;
            this.pisos[this.pisoActual].completado = true;
            
            // Desbloquear siguiente piso
            if (this.pisos[this.pisoActual + 1]) {
                this.pisos[this.pisoActual + 1].desbloqueado = true;
            }
            
            this.actualizarUI();
            this.mostrarRecompensasBoss();
        } else {
            // Es enemigo normal, pasar al siguiente
            this.indiceEnemigoActual++;
            
            if (this.indiceEnemigoActual < this.pisos[this.pisoActual].enemigos.length) {
                // Siguiente enemigo normal
                this.enemigoActual = JSON.parse(JSON.stringify(
                    this.pisos[this.pisoActual].enemigos[this.indiceEnemigoActual]
                ));
                this.enemigoActual.vidaActual = this.enemigoActual.vida;
                this.agregarMensaje(`➡️ Siguiente enemigo: ${this.enemigoActual.nombre}`);
                setTimeout(() => this.actualizarUI(), 1500);
            } else {
                // Cargar BOSS
                this.enemigoActual = JSON.parse(JSON.stringify(this.pisos[this.pisoActual].boss));
                this.enemigoActual.vidaActual = this.enemigoActual.vida;
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
        this.jugador.vida = this.jugador.vidaMaxima; // Revivir al salir
        this.guardarTodo();
        this.cargarUIMenuPrincipal();
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
                    setTimeout(() => this.turnoEnemigo(), 1000);
                }
                break;
                
            case 'vidaGrande':
                if (this.jugador.inventario.pocionVidaGrande > 0) {
                    this.jugador.vida = Math.min(this.jugador.vida + 60, this.jugador.vidaMaxima);
                    this.jugador.inventario.pocionVidaGrande--;
                    this.agregarMensaje("❤️ Usaste poción de vida grande: +60 HP");
                    setTimeout(() => this.turnoEnemigo(), 1000);
                }
                break;
                
            case 'energia':
                if (this.jugador.inventario.pocionEnergia > 0) {
                    this.jugador.energia = Math.min(this.jugador.energia + 20, this.jugador.energiaMaxima);
                    this.jugador.inventario.pocionEnergia--;
                    this.agregarMensaje("⚡ Usaste poción de energía: +20 EN");
                    // No pasa turno, puedes seguir atacando
                }
                break;
                
            case 'revivir':
                if (!this.pocionUsadaEsteCombate && this.jugador.inventario.revivirAuto > 0) {
                    this.pocionUsadaEsteCombate = true;
                    // Se activa automáticamente al morir, pero aquí lo dejamos para activación manual
                }
                break;
        }
        
        this.guardarTodo();
        this.actualizarUI();
    }

    huir() {
        if (!this.enCombate) return;
        
        const probabilidad = 50 + this.jugador.stats.velocidad * 2;
        const exito = Math.random() * 100 < probabilidad;
        
        if (exito) {
            this.agregarMensaje("🏃‍♂️ Lograste huir!");
            this.enCombate = false;
            setTimeout(() => this.cargarUIMenuPrincipal(), 1500);
        } else {
            this.agregarMensaje("❌ No pudiste huir!");
            setTimeout(() => this.turnoEnemigo(), 1000);
        }
        
        this.actualizarUI();
    }

    // ====================
    // RECOMPENSAS DE BOSS
    // ====================

    mostrarRecompensasBoss() {
        if (!this.bossDerrotado) return;
        
        const noviaActual = window.quintillizasRPG?.personajeSeleccionado;
        const noviaNombre = noviaActual ? 
            window.quintillizasRPG.datosPersonajes[noviaActual].nombre.split(' ')[0] : 
            "Ninguna";
        
        const bossNombre = this.bossDerrotado.nombre;
        const bossVideos = this.bossDerrotado.videos;
        
        const html = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; z-index: 10000;">
                <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); border: 3px solid gold; border-radius: 30px; padding: 40px; max-width: 900px; width: 90%;">
                    
                    <h1 style="text-align: center; color: gold; margin-bottom: 20px;">🎉 VICTORIA CONTRA EL BOSS!</h1>
                    <p style="text-align: center; color: white; margin-bottom: 30px;">${bossNombre} ha sido derrotado</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                        
                        <!-- REINO DE LA NOVIA -->
                        <div style="background: rgba(255, 20, 147, 0.2); border: 2px solid #FF1493; border-radius: 20px; padding: 25px; text-align: center;">
                            <h2 style="color: #FF1493; margin-bottom: 20px;">💖 REINO DE ${noviaNombre.toUpperCase()}</h2>
                            <img src="${window.quintillizasRPG?.datosPersonajes[noviaActual]?.imagen || 'https://via.placeholder.com/150'}" 
                                 style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid #FF1493; margin-bottom: 20px;">
                            
                            <div style="display: flex; flex-direction: column; gap: 15px;">
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensa('novia', 'mamada')" 
                                        style="background: linear-gradient(135deg, #FF1493, #FF6B6B); padding: 15px;">
                                    😮 Mamada Apasionada
                                </button>
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensa('novia', 'doggy')" 
                                        style="background: linear-gradient(135deg, #FF1493, #FF6B6B); padding: 15px;">
                                    🐕 Doggy Style
                                </button>
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensa('novia', 'montar')" 
                                        style="background: linear-gradient(135deg, #FF1493, #FF6B6B); padding: 15px;">
                                    👆 Montar
                                </button>
                            </div>
                        </div>
                        
                        <!-- REINO DEL BOSS -->
                        <div style="background: rgba(255, 215, 0, 0.2); border: 2px solid gold; border-radius: 20px; padding: 25px; text-align: center;">
                            <h2 style="color: gold; margin-bottom: 20px;">🔥 REINO DE ${bossNombre.toUpperCase()}</h2>
                            <img src="${this.bossDerrotado.imagen || 'https://via.placeholder.com/150'}" 
                                 style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid gold; margin-bottom: 20px;">
                            
                            <div style="display: flex; flex-direction: column; gap: 15px;">
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensa('boss', 'mamada')" 
                                        style="background: linear-gradient(135deg, gold, #FF9800); padding: 15px;">
                                    😮 Mamada de ${bossNombre}
                                </button>
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensa('boss', 'doggy')" 
                                        style="background: linear-gradient(135deg, gold, #FF9800); padding: 15px;">
                                    🐕 Doggy con ${bossNombre}
                                </button>
                                <button class="card-button" onclick="fantasiaRPG.verVideoRecompensa('boss', 'montar')" 
                                        style="background: linear-gradient(135deg, gold, #FF9800); padding: 15px;">
                                    👆 Montar a ${bossNombre}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button class="card-button" onclick="fantasiaRPG.cerrarRecompensas()" 
                                style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px 40px; font-size: 1.2rem;">
                            ↩️ VOLVER AL MENÚ PRINCIPAL
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Crear overlay
        const overlay = document.createElement('div');
        overlay.id = 'recompensas-overlay';
        overlay.innerHTML = html;
        document.body.appendChild(overlay);
    }

    verVideoRecompensa(tipo, accion) {
        if (!this.bossDerrotado) return;
        
        let videoId = '';
        let titulo = '';
        
        if (tipo === 'novia') {
            const noviaId = window.quintillizasRPG?.personajeSeleccionado;
            if (!noviaId) {
                alert("❌ No tienes ninguna novia seleccionada en el RPG Quintillizas");
                return;
            }
            
            // Aquí debes mapear los videos de cada novia según la acción
            // Por ahora usaremos un placeholder
            const novia = window.quintillizasRPG.datosPersonajes[noviaId];
            const momentos = novia.momentosIntimos;
            
            if (accion === 'mamada') videoId = momentos.find(m => m.id.includes('mamada'))?.videoId;
            else if (accion === 'doggy') videoId = momentos.find(m => m.id.includes('duro'))?.videoId;
            else if (accion === 'montar') videoId = momentos.find(m => m.id.includes('correrse'))?.videoId;
            
            titulo = `${novia.nombre} - ${accion}`;
            
        } else {
            // Videos del boss
            videoId = this.bossDerrotado.videos[accion];
            titulo = `${this.bossDerrotado.nombre} - ${accion}`;
        }
        
        if (!videoId) {
            alert("❌ Video no disponible (debes configurar el ID)");
            return;
        }
        
        // Cerrar overlay de recompensas
        this.cerrarRecompensas();
        
        // Mostrar video
        this.mostrarVideo(videoId, titulo, this.bossDerrotado.imagen);
    }

    cerrarRecompensas() {
        const overlay = document.getElementById('recompensas-overlay');
        if (overlay) overlay.remove();
        this.bossDerrotado = null;
        this.cargarUIMenuPrincipal();
    }

    mostrarVideo(videoId, titulo, imagen) {
        const html = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: black; z-index: 10001; display: flex; justify-content: center; align-items: center;">
                <div style="max-width: 900px; width: 90%; background: #1a1a2e; border-radius: 30px; padding: 30px; border: 3px solid #FF1493;">
                    
                    <h2 style="text-align: center; color: #FF1493; margin-bottom: 20px;">🎬 ${titulo}</h2>
                    
                    <div style="margin: 20px 0; border-radius: 15px; overflow: hidden;">
                        <iframe width="100%" height="400" 
                                src="https://drive.google.com/file/d/${videoId}/preview" 
                                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px;">
                        <button class="card-button" onclick="fantasiaRPG.cerrarVideo()" 
                                style="background: linear-gradient(135deg, #FF1493, #FF6B6B); padding: 15px 40px;">
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
        this.mostrarRecompensasBoss(); // Volver a mostrar recompensas
    }

    // ====================
    // TIENDA DE STATS Y CONSUMIBLES
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
            
            // Suben stats automáticamente
            this.jugador.stats.fuerza += 1;
            this.jugador.stats.resistencia += 1;
            this.jugador.stats.velocidad += 1;
            this.jugador.stats.inteligencia += 1;
            this.jugador.stats.carisma += 1;
            
            this.jugador.vidaMaxima += 10;
            this.jugador.vida = this.jugador.vidaMaxima;
            
            this.agregarMensaje(`🎉 SUBISTE AL NIVEL ${this.jugador.nivel}!`);
        }
    }

    calcularBonusParaHermana(hermanaId) {
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
        
        return `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: gold; margin-bottom: 10px;">⚔️ RPG FANTASÍA - PISOS</h1>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">Derrota bosses y obtén recompensas +18</p>
                
                <!-- ESTADO DEL JUGADOR -->
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
                </div>
                
                <!-- PISOS -->
                <h2 style="color: #FFD166; margin-bottom: 20px;">🏰 SELECCIONA UN PISO</h2>
                ${pisosHTML}
                
                <!-- BOTONES -->
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
                
                <!-- BONUS PARA QUINTILLIZAS -->
                ${window.quintillizasRPG ? `
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 20px; margin-top: 20px;">
                    <h3 style="color: #FF1493; margin-bottom: 15px;">💖 BONUS ACTUAL PARA QUINTILLIZAS</h3>
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
    }

    cargarUICombate() {
        if (!this.enCombate || !this.enemigoActual) return this.cargarUIMenuPrincipal();
        
        const esBoss = this.esBossActual();
        let imagenEnemigo = this.enemigoActual.imagen;
        
        if (esBoss) {
            if (this.spriteBossActual === 'atacando') imagenEnemigo = this.enemigoActual.imagenAtacando;
            else if (this.spriteBossActual === 'derrotado') imagenEnemigo = this.enemigoActual.imagenDerrotado;
            else imagenEnemigo = this.enemigoActual.imagen;
        }
        
        const porcentajeVidaJugador = (this.jugador.vida / this.jugador.vidaMaxima) * 100;
        const porcentajeVidaEnemigo = (this.enemigoActual.vidaActual / this.enemigoActual.vida) * 100;
        
        return `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <h2 style="text-align: center; color: ${esBoss ? 'gold' : '#FFD166'}; margin-bottom: 10px;">
                    ${esBoss ? '🔥 BOSS FINAL 🔥' : this.pisos[this.pisoActual].nombre}
                </h2>
                <p style="text-align: center; margin-bottom: 30px;">
                    Enemigo ${this.indiceEnemigoActual + 1}/${this.pisos[this.pisoActual].enemigos.length + 1}
                </p>
                
                <!-- SPRITES -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 30px;">
                    <!-- JUGADOR -->
                    <div style="text-align: center;">
                        <div style="background: rgba(88, 100, 245, 0.2); border: 3px solid #5864F5; border-radius: 20px; padding: 20px;">
                            <img src="https://via.placeholder.com/150x150/5864F5/FFFFFF?text=JUGADOR" 
                                 style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid #5864F5; margin-bottom: 15px;">
                            <h3 style="color: #5864F5;">${this.jugador.nivel ? 'Héroe' : 'Jugador'}</h3>
                            <div style="margin-top: 10px;">
                                <div style="background: rgba(255,255,255,0.1); height: 20px; border-radius: 10px; overflow: hidden;">
                                    <div style="background: linear-gradient(135deg, #FF6B6B, #FF1493); width: ${porcentajeVidaJugador}%; height: 100%;"></div>
                                </div>
                                <p style="margin-top: 5px;">❤️ ${this.jugador.vida}/${this.jugador.vidaMaxima}</p>
                                <p>⚡ ${this.jugador.energia}/${this.jugador.energiaMaxima}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- ENEMIGO -->
                    <div style="text-align: center;">
                        <div style="background: rgba(255, 107, 107, 0.2); border: 3px solid ${esBoss ? 'gold' : '#FF6B6B'}; border-radius: 20px; padding: 20px;">
                            <img src="${imagenEnemigo || 'https://via.placeholder.com/150x150/FF6B6B/FFFFFF?text=ENEMIGO'}" 
                                 style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid ${esBoss ? 'gold' : '#FF6B6B'}; margin-bottom: 15px;">
                            <h3 style="color: ${esBoss ? 'gold' : '#FF6B6B'};">${this.enemigoActual.nombre}</h3>
                            <div style="margin-top: 10px;">
                                <div style="background: rgba(255,255,255,0.1); height: 20px; border-radius: 10px; overflow: hidden;">
                                    <div style="background: linear-gradient(135deg, #FF6B6B, #FF1493); width: ${porcentajeVidaEnemigo}%; height: 100%;"></div>
                                </div>
                                <p style="margin-top: 5px;">❤️ ${this.enemigoActual.vidaActual}/${this.enemigoActual.vida}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- LOG DE COMBATE -->
                <div style="background: rgba(0,0,0,0.5); border-radius: 15px; padding: 20px; margin-bottom: 30px; max-height: 150px; overflow-y: auto;">
                    ${this.mensajesCombate.map(m => `<div style="margin-bottom: 5px;">${m}</div>`).join('')}
                </div>
                
                <!-- ACCIONES -->
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 20px;">
                    <button class="card-button" onclick="fantasiaRPG.atacar()" 
                            style="background: linear-gradient(135deg, #FF6B6B, #FF1493); padding: 15px;">
                        ⚔️ ATACAR
                    </button>
                    <button class="card-button" onclick="fantasiaRPG.mostrarMenuPociones()" 
                            style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px;">
                        💊 POCIONES
                    </button>
                    <button class="card-button" onclick="fantasiaRPG.huir()" 
                            style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 15px;">
                        🏃 HUIR
                    </button>
                    <button class="card-button" onclick="fantasiaRPG.cargarUIMenuPrincipal()" 
                            style="background: linear-gradient(135deg, #666, #333); padding: 15px;">
                        ↩️ RENDIRSE
                    </button>
                </div>
                
                <!-- INVENTARIO RÁPIDO -->
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 15px;">
                    <div style="display: flex; gap: 20px; justify-content: center; font-size: 0.9rem;">
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
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; z-index: 1000;">
                <div style="background: #1a1a2e; border: 3px solid #4CAF50; border-radius: 30px; padding: 40px; max-width: 500px;">
                    <h2 style="text-align: center; color: #4CAF50; margin-bottom: 30px;">💊 SELECCIONA POCIÓN</h2>
                    
                    <div style="display: grid; gap: 15px;">
                        <button class="card-button" onclick="fantasiaRPG.usarPocion('vidaPequena')" 
                                ${this.jugador.inventario.pocionVidaPequena === 0 ? 'disabled style="opacity:0.5;"' : ''}
                                style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px;">
                            💊 Poción de Vida Pequeña (+30 HP) [${this.jugador.inventario.pocionVidaPequena}]
                        </button>
                        
                        <button class="card-button" onclick="fantasiaRPG.usarPocion('vidaGrande')" 
                                ${this.jugador.inventario.pocionVidaGrande === 0 ? 'disabled style="opacity:0.5;"' : ''}
                                style="background: linear-gradient(135deg, #FF6B6B, #FF1493); padding: 15px;">
                            ❤️ Poción de Vida Grande (+60 HP) [${this.jugador.inventario.pocionVidaGrande}]
                        </button>
                        
                        <button class="card-button" onclick="fantasiaRPG.usarPocion('energia')" 
                                ${this.jugador.inventario.pocionEnergia === 0 ? 'disabled style="opacity:0.5;"' : ''}
                                style="background: linear-gradient(135deg, #FFD700, #FF9800); padding: 15px;">
                            ⚡ Poción de Energía (+20 EN) [${this.jugador.inventario.pocionEnergia}]
                        </button>
                        
                        <button class="card-button" onclick="fantasiaRPG.usarPocion('revivir')" 
                                ${this.jugador.inventario.revivirAuto === 0 ? 'disabled style="opacity:0.5;"' : ''}
                                style="background: linear-gradient(135deg, gold, #8A5AF7); padding: 15px;">
                            ✨ Revivir Automático [${this.jugador.inventario.revivirAuto}]
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
            <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px; border-left: 5px solid ${data.color};">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span style="font-size: 1.5rem;">${data.icono}</span>
                        <strong style="color: ${data.color};"> ${data.nombre}</strong>
                        <div style="font-size: 0.9rem; opacity: 0.7;">+${this.calcularBonusParaHermana(key).toFixed(1)}% para ${data.hermana}</div>
                    </div>
                    <div style="font-size: 2rem;">${stats[key]}</div>
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
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 20px;">
                <div style="background: rgba(76, 175, 80, 0.1); border-radius: 15px; padding: 20px; text-align: center;">
                    <h4 style="color: #4CAF50;">💊 Poción Pequeña</h4>
                    <p>+30 HP - 3💎</p>
                    <button class="card-button" onclick="fantasiaRPG.comprarConsumible('pocionVidaPequena')" 
                            style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                        COMPRAR (${this.jugador.inventario.pocionVidaPequena})
                    </button>
                </div>
                
                <div style="background: rgba(255, 107, 107, 0.1); border-radius: 15px; padding: 20px; text-align: center;">
                    <h4 style="color: #FF6B6B;">❤️ Poción Grande</h4>
                    <p>+60 HP - 8💎</p>
                    <button class="card-button" onclick="fantasiaRPG.comprarConsumible('pocionVidaGrande')" 
                            style="background: linear-gradient(135deg, #FF6B6B, #FF1493);">
                        COMPRAR (${this.jugador.inventario.pocionVidaGrande})
                    </button>
                </div>
                
                <div style="background: rgba(255, 215, 0, 0.1); border-radius: 15px; padding: 20px; text-align: center;">
                    <h4 style="color: gold;">⚡ Poción Energía</h4>
                    <p>+20 EN - 5💎</p>
                    <button class="card-button" onclick="fantasiaRPG.comprarConsumible('pocionEnergia')" 
                            style="background: linear-gradient(135deg, gold, #FF9800);">
                        COMPRAR (${this.jugador.inventario.pocionEnergia})
                    </button>
                </div>
                
                <div style="background: rgba(138, 90, 247, 0.1); border-radius: 15px; padding: 20px; text-align: center;">
                    <h4 style="color: #8A5AF7;">✨ Revivir Auto</h4>
                    <p>1 uso por combate - 15💎</p>
                    <button class="card-button" onclick="fantasiaRPG.comprarConsumible('revivirAuto')" 
                            style="background: linear-gradient(135deg, #8A5AF7, #5864F5);">
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
        mangaSection.innerHTML = html;
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
        `;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 2500);
    }

    // ====================
    // LOCAL STORAGE
    // ====================

    guardarTodo() {
        try {
            localStorage.setItem('fantasia_jugador', JSON.stringify(this.jugador));
            localStorage.setItem('fantasia_pisos', JSON.stringify(this.pisos));
            localStorage.setItem('fantasia_pisoActual', this.pisoActual.toString());
        } catch (e) {
            console.warn('Error guardando:', e);
        }
    }

    cargarJugador() {
        try {
            const jugador = localStorage.getItem('fantasia_jugador');
            return jugador ? JSON.parse(jugador) : null;
        } catch (e) {
            return null;
        }
    }

    cargarPisoActual() {
        try {
            return parseInt(localStorage.getItem('fantasia_pisoActual'));
        } catch (e) {
            return null;
        }
    }
}

// ================================================
// INSTANCIA GLOBAL
// ================================================

const fantasiaRPG = new FantasiaRPG();

// ================================================
// INTEGRACIÓN CON RPG QUINTILLIZAS
// ================================================

// Añadir bonus a la probabilidad de momentos íntimos
if (typeof QuintillizasRPG !== 'undefined') {
    const calcularProbabilidadOriginal = QuintillizasRPG.prototype.calcularProbabilidadMomento;
    
    QuintillizasRPG.prototype.calcularProbabilidadMomento = function(personaje, momento, usarCondonEspecial) {
        let probabilidad = calcularProbabilidadOriginal.call(this, personaje, momento, usarCondonEspecial);
        
        if (typeof fantasiaRPG !== 'undefined') {
            const bonus = fantasiaRPG.calcularBonusParaHermana(this.personajeSeleccionado);
            probabilidad = Math.min(probabilidad + bonus, usarCondonEspecial ? 100 : 80);
            
            if (bonus > 0) {
                console.log(`✨ Bonus RPG Fantasía: +${bonus}%`);
            }
        }
        
        return probabilidad;
    };
}
