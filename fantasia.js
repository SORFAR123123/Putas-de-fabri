// ================================================
// RPG FANTASÍA - SISTEMA COMPLETO DE COMBATE Y STATS
// ================================================

class FantasiaRPG {
    constructor() {
        this.jugador = this.cargarJugador() || this.inicializarJugador();
        this.noviaSeleccionada = this.cargarNoviaSeleccionada() || null;
        this.combateActual = null;
        this.enemigoActual = null;
        this.historialCombates = this.cargarHistorial() || [];
        this.mensajesCombate = [];
        
        // PREFERENCIAS DE STATS POR CHICA
        this.preferenciasStats = {
            'ichika': {
                statPreferido: 'fuerza',
                statSecundario: 'defensa',
                descripcion: 'Le gustan los hombres fuertes y protectores',
                bonusPorStat: 2.5,
                bonusMaximo: 25,
                frase: '💖 Ichika se siente más atraída por tu fuerza...',
                color: '#FF6B6B'
            },
            'nino': {
                statPreferido: 'resistencia',
                statSecundario: 'defensa',
                descripcion: 'Admira a quienes aguantan sus tsunderazos',
                bonusPorStat: 3.0,
                bonusMaximo: 30,
                frase: '😤 Nino nota tu resistencia... pero no es que le guste o algo así',
                color: '#FF1493'
            },
            'miku': {
                statPreferido: 'inteligencia',
                statSecundario: 'carisma',
                descripcion: 'Le atraen los hombres inteligentes y cultos',
                bonusPorStat: 2.8,
                bonusMaximo: 28,
                frase: '😳 Miku se siente nerviosa con alguien tan inteligente como tú...',
                color: '#5864F5'
            },
            'yotsuba': {
                statPreferido: 'velocidad',
                statSecundario: 'energia',
                descripcion: 'Le encanta la energía y rapidez',
                bonusPorStat: 3.2,
                bonusMaximo: 32,
                frase: '💪 ¡Yotsuba está impresionada con tu velocidad!',
                color: '#4CAF50'
            },
            'itsuki': {
                statPreferido: 'carisma',
                statSecundario: 'inteligencia',
                descripcion: 'Le gustan los hombres carismáticos y divertidos',
                bonusPorStat: 2.7,
                bonusMaximo: 27,
                frase: '🍔 Itsuki encuentra tu carisma irresistible... igual que la comida',
                color: '#FFD166'
            }
        };

        // HABILIDADES DESBLOQUEABLES
        this.habilidadesDisponibles = [
            { id: 'ataque_basico', nombre: 'Ataque Básico', tipo: 'fisico', costo: 0, poder: 1.0, nivelRequerido: 1 },
            { id: 'corte_poderoso', nombre: 'Corte Poderoso', tipo: 'fisico', costo: 10, poder: 1.8, nivelRequerido: 3 },
            { id: 'defensa_firme', nombre: 'Defensa Firme', tipo: 'defensa', costo: 5, poder: 0.5, nivelRequerido: 2 },
            { id: 'ataque_rapido', nombre: 'Ataque Rápido', tipo: 'velocidad', costo: 8, poder: 1.2, nivelRequerido: 4 },
            { id: 'golpe_critico', nombre: 'Golpe Crítico', tipo: 'fuerza', costo: 15, poder: 2.5, nivelRequerido: 5 },
            { id: 'curar_heridas', nombre: 'Curar Heridas', tipo: 'magia', costo: 20, poder: 0.3, nivelRequerido: 3 }
        ];
    }

    inicializarJugador() {
        return {
            nombre: 'Héroe',
            nivel: 1,
            exp: 0,
            expParaSiguienteNivel: 100,
            
            // STATS BASE
            stats: {
                vida: 100,
                vidaMaxima: 100,
                energia: 50,
                energiaMaxima: 50,
                fuerza: 10,
                defensa: 5,
                velocidad: 8,
                inteligencia: 6,
                resistencia: 7,
                carisma: 5,
                suerte: 1
            },
            
            // EQUIPO
            equipo: {
                arma: null,
                armadura: null,
                accesorio: null
            },
            
            // HABILIDADES APRENDIDAS
            habilidades: [
                { id: 'ataque_basico', nombre: 'Ataque Básico', tipo: 'fisico', costo: 0, poder: 1.0 }
            ],
            
            // INVENTARIO
            inventario: {
                pocionesVida: 3,
                pocionesEnergia: 2,
                revivir: 1,
                escudo: 0,
                flechas: 0
            },
            
            // HISTORIAL
            dinero: 50,
            muertes: 0,
            enemigosDerrotados: 0,
            combatesGanados: 0,
            combatesPerdidos: 0,
            tiempoJuego: 0,
            
            // LOGROS
            logros: {
                primerCombate: false,
                nivel10: false,
                derrotarJefe: false,
                coleccionista: false
            }
        };
    }

    // ====================
    // SISTEMA DE STATS MANUALES
    // ====================

    subirStat(stat) {
        if (this.jugador.stats[stat] !== undefined) {
            this.jugador.stats[stat] += 1;
            this.guardarJugador();
            
            const nombresStats = {
                'fuerza': '💪 Fuerza',
                'defensa': '🛡️ Defensa',
                'velocidad': '⚡ Velocidad',
                'inteligencia': '🧠 Inteligencia',
                'resistencia': '💪 Resistencia',
                'carisma': '😎 Carisma',
                'suerte': '🍀 Suerte'
            };
            
            this.mostrarNotificacion(`↑ ${nombresStats[stat] || stat}: ${this.jugador.stats[stat]}`);
            
            if (this.noviaSeleccionada) {
                this.mostrarBonusStatsNovia();
            }
            
            return true;
        }
        return false;
    }

    bajarStat(stat) {
        if (this.jugador.stats[stat] !== undefined && this.jugador.stats[stat] > 1) {
            this.jugador.stats[stat] -= 1;
            this.guardarJugador();
            
            this.mostrarNotificacion(`↓ ${stat}: ${this.jugador.stats[stat]}`);
            return true;
        }
        return false;
    }

    // ====================
    // SISTEMA DE COMBATE MEJORADO
    // ====================

    iniciarCombate(tipoEnemigo) {
        const enemigos = {
            'slime': {
                nombre: 'Slime Verde',
                nivel: 1,
                vida: 30,
                vidaMaxima: 30,
                fuerza: 4,
                defensa: 2,
                velocidad: 3,
                exp: 20,
                dinero: 5,
                descripcion: 'Una masa gelatinosa que se mueve lentamente',
                debil: 'fuego',
                resistencia: 'agua'
            },
            'goblin': {
                nombre: 'Goblin Ladrón',
                nivel: 2,
                vida: 45,
                vidaMaxima: 45,
                fuerza: 7,
                defensa: 3,
                velocidad: 6,
                exp: 35,
                dinero: 10,
                descripcion: 'Un pequeño humanoide ávido de dinero',
                debil: 'luz',
                resistencia: 'oscuridad'
            },
            'lobo': {
                nombre: 'Lobo Salvaje',
                nivel: 3,
                vida: 60,
                vidaMaxima: 60,
                fuerza: 10,
                defensa: 4,
                velocidad: 9,
                exp: 50,
                dinero: 15,
                descripcion: 'Un depredador veloz y peligroso',
                debil: 'hielo',
                resistencia: 'fuego'
            },
            'esqueleto': {
                nombre: 'Esqueleto Guerrero',
                nivel: 4,
                vida: 75,
                vidaMaxima: 75,
                fuerza: 12,
                defensa: 6,
                velocidad: 5,
                exp: 70,
                dinero: 20,
                descripcion: 'Los restos de un antiguo guerrero',
                debil: 'luz',
                resistencia: 'oscuridad'
            },
            'ogro': {
                nombre: 'Ogro Furioso',
                nivel: 5,
                vida: 100,
                vidaMaxima: 100,
                fuerza: 18,
                defensa: 8,
                velocidad: 4,
                exp: 100,
                dinero: 30,
                descripcion: 'Una bestia gigante con fuerza bruta',
                debil: 'rayo',
                resistencia: 'fisico'
            },
            'jefe_dragon': {
                nombre: 'Dragón Anciano',
                nivel: 10,
                vida: 300,
                vidaMaxima: 300,
                fuerza: 25,
                defensa: 15,
                velocidad: 7,
                exp: 500,
                dinero: 100,
                descripcion: 'Un temible dragón que guarda tesoros',
                debil: 'hielo',
                resistencia: 'fuego'
            }
        };
        
        this.enemigoActual = JSON.parse(JSON.stringify(enemigos[tipoEnemigo] || enemigos['slime']));
        
        this.combateActual = {
            enTurno: 'jugador',
            turno: 1,
            jugadorVivo: true,
            enemigoVivo: true,
            mensajes: [],
            defensaActivada: false,
            estadoEnemigo: null
        };
        
        this.mensajesCombate = [];
        this.agregarMensajeCombate(`⚔️ COMBATE INICIADO: ${this.jugador.nombre} vs ${this.enemigoActual.nombre}`);
        this.agregarMensajeCombate(`🎯 ${this.enemigoActual.descripcion}`);
        
        if (Math.random() < this.jugador.stats.velocidad / 100) {
            this.agregarMensajeCombate(`⚡ ¡Ganas la iniciativa por tu velocidad! Atacas primero.`);
        } else {
            this.combateActual.enTurno = 'enemigo';
            this.agregarMensajeCombate(`👹 ¡${this.enemigoActual.nombre} ataca primero!`);
            setTimeout(() => this.turnoEnemigo(), 1000);
        }
        
        return this.enemigoActual;
    }

    atacarEnemigo(habilidadId = 'ataque_basico') {
        if (!this.combateActual || !this.combateActual.jugadorVivo) {
            console.error("No hay combate activo o jugador no vivo");
            return false;
        }
        
        if (!this.enemigoActual) {
            console.error("No hay enemigo actual");
            return false;
        }
        
        const habilidad = this.jugador.habilidades.find(h => h.id === habilidadId) || 
                         this.jugador.habilidades[0];
        
        if (this.jugador.stats.energia < (habilidad.costo || 0)) {
            this.agregarMensajeCombate(`❌ No tienes suficiente energía para usar ${habilidad.nombre}`);
            return 'sin_energia';
        }
        
        // Consumir energía
        this.jugador.stats.energia -= (habilidad.costo || 0);
        
        // Calcular daño base
        let daño = Math.floor(this.jugador.stats.fuerza * (habilidad.poder || 1.0));
        
        // Aplicar variación aleatoria
        daño = Math.floor(daño * (0.8 + Math.random() * 0.4));
        
        // Aplicar crítico
        const chanceCritico = (this.jugador.stats.suerte * 0.5) + 5;
        let esCritico = false;
        
        if (Math.random() * 100 < chanceCritico) {
            daño = Math.floor(daño * 1.5);
            esCritico = true;
        }
        
        // Reducir por defensa del enemigo
        daño = Math.max(1, daño - this.enemigoActual.defensa);
        
        // Aplicar daño
        this.enemigoActual.vida = Math.max(0, this.enemigoActual.vida - daño);
        
        // Mensaje de ataque
        let mensaje = `🎯 ${this.jugador.nombre} usa ${habilidad.nombre}`;
        if (esCritico) mensaje += ' 💥 CRÍTICO!';
        mensaje += ` y causa ${daño} de daño!`;
        
        this.agregarMensajeCombate(mensaje);
        
        if (habilidad.tipo === 'defensa') {
            this.combateActual.defensaActivada = true;
            this.agregarMensajeCombate(`🛡️ Defensa aumentada por 1 turno`);
        }
        
        if (this.enemigoActual.vida <= 0) {
            this.enemigoActual.vida = 0;
            this.combateActual.enemigoVivo = false;
            this.agregarMensajeCombate(`💀 ${this.enemigoActual.nombre} ha sido derrotado!`);
            
            this.darRecompensaCombate();
            
            setTimeout(() => {
                this.finalizarCombate('victoria');
                this.actualizarUI();
            }, 2000);
            
            return 'victoria';
        }
        
        this.agregarMensajeCombate(`❤️ ${this.enemigoActual.nombre}: ${this.enemigoActual.vida}/${this.enemigoActual.vidaMaxima} HP`);
        
        // Pasar turno al enemigo
        this.combateActual.enTurno = 'enemigo';
        this.combateActual.turno += 1;
        
        setTimeout(() => {
            this.turnoEnemigo();
            this.actualizarUI();
        }, 1500);
        
        return 'continuar';
    }

    turnoEnemigo() {
        if (!this.combateActual.enemigoVivo) return 'enemigo_muerto';
        
        // Calcular daño del enemigo
        let dañoEnemigo = Math.floor(this.enemigoActual.fuerza * (0.8 + Math.random() * 0.4));
        
        // Reducir daño si el jugador tiene defensa activada
        if (this.combateActual.defensaActivada) {
            dañoEnemigo = Math.floor(dañoEnemigo * 0.5);
            this.combateActual.defensaActivada = false;
            this.agregarMensajeCombate(`🛡️ Tu defensa reduce el daño recibido`);
        }
        
        let dañoFinal = Math.max(1, dañoEnemigo - this.jugador.stats.defensa);
        
        // Aplicar daño al jugador
        this.jugador.stats.vida = Math.max(0, this.jugador.stats.vida - dañoFinal);
        
        this.agregarMensajeCombate(`👹 ${this.enemigoActual.nombre} ataca y causa ${dañoFinal} de daño!`);
        
        if (this.jugador.stats.vida <= 0) {
            this.jugador.stats.vida = 0;
            this.combateActual.jugadorVivo = false;
            this.agregarMensajeCombate(`💀 ${this.jugador.nombre} ha sido derrotado...`);
            
            setTimeout(() => {
                this.muerteJugador();
            }, 2000);
            
            return 'derrota';
        }
        
        this.agregarMensajeCombate(`❤️ ${this.jugador.nombre}: ${this.jugador.stats.vida}/${this.jugador.stats.vidaMaxima} HP`);
        
        // Pasar turno al jugador
        this.combateActual.enTurno = 'jugador';
        
        // Regenerar energía del jugador
        this.regenerarEnergia();
        
        return 'continuar';
    }

    regenerarEnergia() {
        const regeneracion = 3 + Math.floor(this.jugador.stats.resistencia * 0.1);
        this.jugador.stats.energia = Math.min(
            this.jugador.stats.energiaMaxima,
            this.jugador.stats.energia + regeneracion
        );
    }

    usarPocion(tipo) {
        if (!this.combateActual || this.combateActual.enTurno !== 'jugador') {
            this.mostrarNotificacion('❌ No es tu turno');
            return false;
        }
        
        if (tipo === 'vida' && this.jugador.inventario.pocionesVida > 0) {
            const curacion = 30 + Math.floor(this.jugador.stats.inteligencia * 0.5);
            this.jugador.stats.vida = Math.min(
                this.jugador.stats.vidaMaxima,
                this.jugador.stats.vida + curacion
            );
            this.jugador.inventario.pocionesVida -= 1;
            
            this.agregarMensajeCombate(`❤️ Usas poción de vida: +${curacion} HP`);
            this.guardarJugador();
            
            // Pasar turno
            this.combateActual.enTurno = 'enemigo';
            setTimeout(() => {
                this.turnoEnemigo();
                this.actualizarUI();
            }, 1500);
            
            return true;
        }
        
        if (tipo === 'energia' && this.jugador.inventario.pocionesEnergia > 0) {
            const energia = 20 + Math.floor(this.jugador.stats.inteligencia * 0.3);
            this.jugador.stats.energia = Math.min(
                this.jugador.stats.energiaMaxima,
                this.jugador.stats.energia + energia
            );
            this.jugador.inventario.pocionesEnergia -= 1;
            
            this.agregarMensajeCombate(`⚡ Usas poción de energía: +${energia} EP`);
            this.guardarJugador();
            
            return true;
        }
        
        if (tipo === 'revivir' && this.jugador.inventario.revivir > 0) {
            this.jugador.stats.vida = Math.floor(this.jugador.stats.vidaMaxima * 0.5);
            this.jugador.inventario.revivir -= 1;
            this.combateActual.jugadorVivo = true;
            
            this.agregarMensajeCombate(`✨ Usas poción de revivir: ¡Vuelves a la batalla!`);
            this.guardarJugador();
            
            return true;
        }
        
        this.mostrarNotificacion('❌ No tienes esa poción');
        return false;
    }

    huirCombate() {
        if (!this.combateActual) return false;
        
        const probabilidadHuida = 40 + (this.jugador.stats.velocidad * 2) - (this.enemigoActual.nivel * 5);
        const exito = Math.random() * 100 < probabilidadHuida;
        
        if (exito) {
            this.agregarMensajeCombate(`🏃‍♂️ ¡Logras huir del combate!`);
            this.finalizarCombate('huida');
            setTimeout(() => this.actualizarUI(), 1000);
            return true;
        } else {
            this.agregarMensajeCombate(`❌ Intentas huir pero fallas...`);
            this.combateActual.enTurno = 'enemigo';
            setTimeout(() => {
                this.turnoEnemigo();
                this.actualizarUI();
            }, 1000);
            return false;
        }
    }

    // ====================
    // RECOMPENSAS Y PENALIZACIONES
    // ====================

    darRecompensaCombate() {
        if (!this.enemigoActual) return;
        
        // Calcular recompensas base
        let expGanada = this.enemigoActual.exp;
        let dineroGanado = this.enemigoActual.dinero;
        
        // Bonus por nivel
        const bonusNivel = this.jugador.nivel * 1.1;
        expGanada = Math.floor(expGanada * bonusNivel);
        dineroGanado = Math.floor(dineroGanado * bonusNivel);
        
        // Bonus por suerte
        const bonusSuerte = this.jugador.stats.suerte * 0.5;
        if (Math.random() * 100 < bonusSuerte) {
            expGanada = Math.floor(expGanada * 1.2);
            dineroGanado = Math.floor(dineroGanado * 1.2);
            this.agregarMensajeCombate(`🍀 ¡Bonus de suerte! Recompensas aumentadas`);
        }
        
        // Aplicar recompensas
        this.jugador.exp += expGanada;
        this.jugador.dinero += dineroGanado;
        this.jugador.enemigosDerrotados += 1;
        this.jugador.combatesGanados += 1;
        
        // Verificar logros
        if (!this.jugador.logros.primerCombate) {
            this.jugador.logros.primerCombate = true;
            this.mostrarNotificacion('🏆 Logro: Primer combate ganado!');
        }
        
        if (this.enemigoActual.nombre === 'Dragón Anciano') {
            this.jugador.logros.derrotarJefe = true;
            this.mostrarNotificacion('🏆 Logro: Dragón Anciano derrotado!');
        }
        
        this.verificarSubidaNivel();
        this.guardarJugador();
        
        // Mostrar mensajes
        this.agregarMensajeCombate(`🎉 ¡VICTORIA!`);
        this.agregarMensajeCombate(`💰 Obtienes ${dineroGanado} monedas`);
        this.agregarMensajeCombate(`⭐ Obtienes ${expGanada} EXP`);
        
        // Enviar EXP a la novia
        if (this.noviaSeleccionada && window.quintillizasRPG) {
            const expParaNovia = Math.floor(expGanada * 0.6);
            window.quintillizasRPG.agregarEXP(this.noviaSeleccionada, expParaNovia);
            this.agregarMensajeCombate(`💖 ${expParaNovia} EXP para tu novia`);
        }
        
        // Posibilidad de obtener ítem
        this.obtenerItemAleatorio();
        
        // Guardar en historial
        this.historialCombates.push({
            fecha: new Date().toISOString(),
            enemigo: this.enemigoActual.nombre,
            resultado: 'victoria',
            exp: expGanada,
            dinero: dineroGanado,
            turnos: this.combateActual.turno
        });
        this.guardarHistorial();
        
        // Mostrar video de victoria
        if (this.noviaSeleccionada) {
            setTimeout(() => {
                this.mostrarVideoVictoria();
            }, 2000);
        }
    }

    obtenerItemAleatorio() {
        const items = [
            { tipo: 'pocionVida', nombre: 'Poción de Vida', cantidad: 1 },
            { tipo: 'pocionEnergia', nombre: 'Poción de Energía', cantidad: 1 },
            { tipo: 'dineroExtra', nombre: 'Bolsa de Monedas', cantidad: 10 },
            { tipo: 'revivir', nombre: 'Poción de Revivir', cantidad: 1 }
        ];
        
        const chanceItem = 30 + (this.jugador.stats.suerte * 1.5);
        
        if (Math.random() * 100 < chanceItem) {
            const item = items[Math.floor(Math.random() * items.length)];
            
            switch(item.tipo) {
                case 'pocionVida':
                    this.jugador.inventario.pocionesVida += item.cantidad;
                    break;
                case 'pocionEnergia':
                    this.jugador.inventario.pocionesEnergia += item.cantidad;
                    break;
                case 'dineroExtra':
                    this.jugador.dinero += item.cantidad;
                    break;
                case 'revivir':
                    this.jugador.inventario.revivir += item.cantidad;
                    break;
            }
            
            this.agregarMensajeCombate(`🎁 ¡Encuentras ${item.nombre} x${item.cantidad}!`);
            this.guardarJugador();
        }
    }

    muerteJugador() {
        this.jugador.muertes += 1;
        this.jugador.combatesPerdidos += 1;
        
        const perdidaDinero = Math.max(5, Math.floor(this.jugador.dinero * 0.2));
        const perdidaExp = Math.max(10, Math.floor(this.jugador.exp * 0.1));
        
        this.jugador.dinero = Math.max(0, this.jugador.dinero - perdidaDinero);
        this.jugador.exp = Math.max(0, this.jugador.exp - perdidaExp);
        
        this.agregarMensajeCombate(`💀 Has muerto...`);
        this.agregarMensajeCombate(`📉 Pierdes ${perdidaDinero} monedas y ${perdidaExp} EXP`);
        
        this.historialCombates.push({
            fecha: new Date().toISOString(),
            enemigo: this.enemigoActual.nombre,
            resultado: 'derrota',
            perdidaDinero: perdidaDinero,
            perdidaExp: perdidaExp,
            turnos: this.combateActual.turno
        });
        this.guardarHistorial();
        
        setTimeout(() => {
            this.mostrarVideoDerrota();
        }, 1500);
        
        this.guardarJugador();
    }

    finalizarCombate(resultado) {
        this.combateActual = null;
        this.enemigoActual = null;
    }

    revivirJugador() {
        const costoRevivir = 20 + (this.jugador.nivel * 8);
        
        if (this.jugador.dinero >= costoRevivir) {
            this.jugador.dinero -= costoRevivir;
            this.jugador.stats.vida = Math.floor(this.jugador.stats.vidaMaxima * 0.5);
            this.jugador.stats.energia = Math.floor(this.jugador.stats.energiaMaxima * 0.5);
            this.combateActual = null;
            this.enemigoActual = null;
            this.guardarJugador();
            
            this.mostrarNotificacion(`✨ Revivido por ${costoRevivir} monedas`);
            this.actualizarUI();
            return true;
        } else {
            this.mostrarNotificacion(`❌ Necesitas ${costoRevivir} monedas para revivir`);
            return false;
        }
    }

    // ====================
    // BONIFICACIONES POR STATS CON NOVIAS
    // ====================

    calcularBonusStatsNovia(personajeId) {
        if (!personajeId || !this.preferenciasStats[personajeId]) {
            return 0;
        }
        
        const preferencia = this.preferenciasStats[personajeId];
        const statPreferido = this.jugador.stats[preferencia.statPreferido] || 0;
        const statSecundario = this.jugador.stats[preferencia.statSecundario] || 0;
        
        let bonusPrincipal = Math.min(
            statPreferido * preferencia.bonusPorStat,
            preferencia.bonusMaximo
        );
        
        let bonusSecundario = Math.min(
            statSecundario * (preferencia.bonusPorStat * 0.5),
            preferencia.bonusMaximo * 0.5
        );
        
        const bonusTotal = bonusPrincipal + bonusSecundario;
        
        return Math.round(bonusTotal);
    }

    mostrarBonusStatsNovia() {
        if (!this.noviaSeleccionada || !this.preferenciasStats[this.noviaSeleccionada]) {
            return;
        }
        
        const preferencia = this.preferenciasStats[this.noviaSeleccionada];
        const bonus = this.calcularBonusStatsNovia(this.noviaSeleccionada);
        
        if (bonus > 0) {
            this.mostrarNotificacion(
                `${preferencia.frase}\n` +
                `✨ +${bonus}% en momentos íntimos`
            );
        }
    }

    obtenerBonusMomentoIntimo(personajeId) {
        const bonus = this.calcularBonusStatsNovia(personajeId);
        const bonusNivel = this.jugador.nivel * 0.8;
        const bonusTotal = bonus + bonusNivel;
        
        return {
            porcentaje: Math.min(bonusTotal, 50), // Máximo 50%
            desglose: {
                stats: bonus,
                nivel: bonusNivel,
                total: bonusTotal
            }
        };
    }

    // ====================
    // SISTEMA DE NIVELES Y HABILIDADES
    // ====================

    verificarSubidaNivel() {
        while (this.jugador.exp >= this.jugador.expParaSiguienteNivel) {
            this.subirNivel();
        }
    }

    subirNivel() {
        this.jugador.nivel += 1;
        this.jugador.exp -= this.jugador.expParaSiguienteNivel;
        this.jugador.expParaSiguienteNivel = Math.floor(this.jugador.expParaSiguienteNivel * 1.6);
        
        // Mejoras de stats por nivel
        this.jugador.stats.vidaMaxima += 15;
        this.jugador.stats.vida = this.jugador.stats.vidaMaxima;
        this.jugador.stats.energiaMaxima += 8;
        this.jugador.stats.energia = this.jugador.stats.energiaMaxima;
        this.jugador.stats.fuerza += 3;
        this.jugador.stats.defensa += 2;
        this.jugador.stats.velocidad += 2;
        this.jugador.stats.inteligencia += 2;
        this.jugador.stats.resistencia += 2;
        this.jugador.stats.carisma += 2;
        this.jugador.stats.suerte += 1;
        
        // Desbloquear habilidades
        this.desbloquearHabilidadesPorNivel();
        
        // Logro de nivel 10
        if (this.jugador.nivel === 10 && !this.jugador.logros.nivel10) {
            this.jugador.logros.nivel10 = true;
            this.mostrarNotificacion('🏆 Logro: Alcanzaste el nivel 10!');
        }
        
        this.mostrarNotificacion(`🎉 ¡Subiste al nivel ${this.jugador.nivel}!`);
        this.guardarJugador();
    }

    desbloquearHabilidadesPorNivel() {
        const habilidadesPorDesbloquear = this.habilidadesDisponibles.filter(h => 
            h.nivelRequerido === this.jugador.nivel && 
            !this.jugador.habilidades.some(jh => jh.id === h.id)
        );
        
        habilidadesPorDesbloquear.forEach(habilidad => {
            this.jugador.habilidades.push({
                id: habilidad.id,
                nombre: habilidad.nombre,
                tipo: habilidad.tipo,
                costo: habilidad.costo,
                poder: habilidad.poder
            });
            
            this.mostrarNotificacion(`✨ Desbloqueaste: ${habilidad.nombre}!`);
        });
    }

    comprarHabilidad(habilidadId) {
        const habilidad = this.habilidadesDisponibles.find(h => h.id === habilidadId);
        
        if (!habilidad) {
            this.mostrarNotificacion('❌ Habilidad no encontrada');
            return false;
        }
        
        if (this.jugador.nivel < habilidad.nivelRequerido) {
            this.mostrarNotificacion(`❌ Necesitas nivel ${habilidad.nivelRequerido}`);
            return false;
        }
        
        if (this.jugador.dinero < habilidad.costo) {
            this.mostrarNotificacion(`❌ Necesitas ${habilidad.costo} monedas`);
            return false;
        }
        
        if (this.jugador.habilidades.some(h => h.id === habilidadId)) {
            this.mostrarNotificacion('❌ Ya tienes esta habilidad');
            return false;
        }
        
        this.jugador.dinero -= habilidad.costo;
        this.jugador.habilidades.push({
            id: habilidad.id,
            nombre: habilidad.nombre,
            tipo: habilidad.tipo,
            costo: habilidad.costo,
            poder: habilidad.poder
        });
        
        this.mostrarNotificacion(`✅ Compraste: ${habilidad.nombre}`);
        this.guardarJugador();
        this.actualizarUI();
        return true;
    }

    // ====================
    // TIENDA Y COMPRAS
    // ====================

    comprarItem(tipo, cantidad = 1) {
        const precios = {
            'pocionVida': 10,
            'pocionEnergia': 15,
            'revivir': 30
        };
        
        const precio = precios[tipo] * cantidad;
        
        if (this.jugador.dinero < precio) {
            this.mostrarNotificacion(`❌ Necesitas ${precio} monedas`);
            return false;
        }
        
        switch(tipo) {
            case 'pocionVida':
                this.jugador.inventario.pocionesVida += cantidad;
                break;
            case 'pocionEnergia':
                this.jugador.inventario.pocionesEnergia += cantidad;
                break;
            case 'revivir':
                this.jugador.inventario.revivir += cantidad;
                break;
            default:
                this.mostrarNotificacion('❌ Ítem no disponible');
                return false;
        }
        
        this.jugador.dinero -= precio;
        this.mostrarNotificacion(`✅ Compraste ${cantidad}x ${tipo}`);
        this.guardarJugador();
        this.actualizarUI();
        return true;
    }

    // ====================
    // VIDEOS POR NOVIA
    // ====================

    mostrarVideoVictoria() {
        if (!this.noviaSeleccionada) return;
        
        const videosVictoria = {
            'ichika': [
                { id: 'victoria_ichika_1', nombre: 'Ichika te felicita' },
                { id: 'victoria_ichika_2', nombre: 'Ichika orgullosa' }
            ],
            'nino': [
                { id: 'victoria_nino_1', nombre: 'Nino (no tan) indiferente' },
                { id: 'victoria_nino_2', nombre: 'Nino tsundere' }
            ],
            'miku': [
                { id: 'victoria_miku_1', nombre: 'Miku tímida' },
                { id: 'victoria_miku_2', nombre: 'Miku alegre' }
            ],
            'yotsuba': [
                { id: 'victoria_yotsuba_1', nombre: 'Yotsuba energética' },
                { id: 'victoria_yotsuba_2', nombre: 'Yotsuba saltando' }
            ],
            'itsuki': [
                { id: 'victoria_itsuki_1', nombre: 'Itsuki comiendo' },
                { id: 'victoria_itsuki_2', nombre: 'Itsuki contenta' }
            ]
        };
        
        const videos = videosVictoria[this.noviaSeleccionada] || videosVictoria['ichika'];
        const videoAleatorio = videos[Math.floor(Math.random() * videos.length)];
        
        const html = `
            <div class="reproductor-container" style="text-align: center; padding: 40px;">
                <h2 style="color: #4CAF50;">🎉 ¡VICTORIA!</h2>
                <p style="font-size: 1.2rem; margin: 20px 0;">
                    ${videoAleatorio.nombre}
                </p>
                <div style="background: rgba(76, 175, 80, 0.1); padding: 20px; border-radius: 15px; margin: 30px 0;">
                    <h3 style="color: #FFD166;">Recompensas obtenidas:</h3>
                    <p>💰 ${this.enemigoActual?.dinero || 0} monedas</p>
                    <p>⭐ ${this.enemigoActual?.exp || 0} EXP</p>
                    <p>💖 +${Math.floor((this.enemigoActual?.exp || 0) * 0.6)} EXP para tu novia</p>
                </div>
                <button class="card-button" onclick="fantasiaRPG.actualizarUI()" 
                        style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px 30px;">
                    ↩️ Continuar
                </button>
            </div>
        `;
        
        const mangaSection = document.getElementById('manga-section');
        if (mangaSection) {
            mangaSection.innerHTML = html;
        }
    }

    mostrarVideoDerrota() {
        if (!this.noviaSeleccionada) {
            this.actualizarUI();
            return;
        }
        
        const html = `
            <div class="reproductor-container" style="text-align: center; padding: 40px;">
                <h2 style="color: #FF6B6B;">💀 Has sido derrotado</h2>
                <p style="opacity: 0.8; margin-bottom: 30px;">
                    Tu novia está preocupada por ti...
                </p>
                
                <div style="background: rgba(255, 107, 107, 0.1); padding: 25px; border-radius: 15px; margin: 30px 0; border: 2px solid #FF6B6B;">
                    <h3 style="color: #FFD166; margin-bottom: 15px;">💰 Opciones de Revivir</h3>
                    <button class="card-button" onclick="fantasiaRPG.revivirJugador()" 
                            style="background: linear-gradient(135deg, #4CAF50, #2E7D32); margin-bottom: 15px;">
                        💰 Revivir (${20 + (this.jugador.nivel * 8)} monedas)
                    </button>
                    <p style="opacity: 0.7; margin-top: 10px;">
                        Dinero actual: ${this.jugador.dinero} monedas
                    </p>
                </div>
                
                <div style="text-align: center;">
                    <button class="btn-atras-especifico" onclick="fantasiaRPG.actualizarUI()">
                        ↩️ Volver al RPG
                    </button>
                </div>
            </div>
        `;
        
        const mangaSection = document.getElementById('manga-section');
        if (mangaSection) {
            mangaSection.innerHTML = html;
        }
    }

    // ====================
    // INTERFAZ DE USUARIO COMPLETA
    // ====================

    cargarUI() {
        let html = `
            <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: #FFD166; margin-bottom: 10px;">
                    ⚔️ RPG FANTASÍA - SISTEMA DE COMBATE COMPLETO
                </h1>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">
                    Entrena tus stats con ejercicio real, lucha contra monstruos y mejora tus chances con las chicas
                </p>
                
                <!-- BARRA SUPERIOR DE INFO -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 25px;">
                    <div style="background: rgba(255, 107, 107, 0.1); padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="color: rgba(255,255,255,0.7);">💰 DINERO</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #FFD166;">${this.jugador.dinero}</div>
                    </div>
                    <div style="background: rgba(88, 100, 245, 0.1); padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="color: rgba(255,255,255,0.7);">⭐ NIVEL</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #FFD166;">${this.jugador.nivel}</div>
                    </div>
                    <div style="background: rgba(76, 175, 80, 0.1); padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="color: rgba(255,255,255,0.7);">📊 EXP</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #FFD166;">${this.jugador.exp}/${this.jugador.expParaSiguienteNivel}</div>
                    </div>
                    ${this.noviaSeleccionada ? `
                    <div style="background: rgba(138, 90, 247, 0.1); padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="color: rgba(255,255,255,0.7);">💖 NOVIA</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #FF1493;">${this.noviaSeleccionada.toUpperCase()}</div>
                    </div>
                    ` : ''}
                </div>
                
                <!-- ESTADO DEL JUGADOR -->
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 20px; padding: 25px; margin-bottom: 30px; border: 2px solid #FF1493;">
                    <h3 style="color: #FF1493; margin-bottom: 20px;">🎮 TU PERSONAJE</h3>
                    
                    <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px;">
                        <!-- INFO BÁSICA -->
                        <div>
                            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px;">
                                <h4 style="color: #FFD166; margin-bottom: 15px;">📊 ESTADO</h4>
                                <div style="margin-bottom: 15px;">
                                    <div style="color: rgba(255,255,255,0.7);">Nivel</div>
                                    <div style="font-size: 2rem; font-weight: bold; color: #FFD166;">${this.jugador.nivel}</div>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                    <span>EXP</span>
                                    <span>${this.jugador.exp}/${this.jugador.expParaSiguienteNivel}</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 10px; border-radius: 5px; overflow: hidden;">
                                    <div style="background: #FFD166; width: ${(this.jugador.exp / this.jugador.expParaSiguienteNivel) * 100}%; height: 100%;"></div>
                                </div>
                            </div>
                            
                            <!-- NOVIA ACTUAL -->
                            ${this.noviaSeleccionada && window.quintillizasRPG ? `
                                <div style="background: rgba(88, 100, 245, 0.1); padding: 20px; border-radius: 15px; margin-top: 20px; border: 2px solid #5864F5;">
                                    <h4 style="color: #5864F5; margin-bottom: 10px;">💖 NOVIA ACTUAL</h4>
                                    <div style="display: flex; align-items: center; gap: 15px;">
                                        <div style="width: 50px; height: 50px; border-radius: 50%; background: ${this.preferenciasStats[this.noviaSeleccionada].color}; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: white;">
                                            ${this.noviaSeleccionada.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div style="font-weight: bold; color: ${this.preferenciasStats[this.noviaSeleccionada].color};">${this.noviaSeleccionada.toUpperCase()}</div>
                                            <div style="font-size: 0.9rem; opacity: 0.8;">
                                                Prefiere: ${this.preferenciasStats[this.noviaSeleccionada].statPreferido}
                                            </div>
                                            <div style="font-size: 0.8rem; color: #4CAF50; margin-top: 5px;">
                                                +${this.calcularBonusStatsNovia(this.noviaSeleccionada)}% en momentos íntimos
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            
                            <!-- HABILIDADES -->
                            <div style="background: rgba(255, 209, 102, 0.1); padding: 20px; border-radius: 15px; margin-top: 20px; border: 2px solid #FFD166;">
                                <h4 style="color: #FFD166; margin-bottom: 15px;">✨ HABILIDADES</h4>
                                <div style="max-height: 150px; overflow-y: auto;">
                                    ${this.jugador.habilidades.map(habilidad => `
                                        <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px; margin-bottom: 8px;">
                                            <div style="font-weight: bold;">${habilidad.nombre}</div>
                                            <div style="font-size: 0.8rem; opacity: 0.7;">Costo: ${habilidad.costo} EP</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <!-- STATS Y BARRAS -->
                        <div>
                            <h4 style="color: #4CAF50; margin-bottom: 15px;">📈 STATS (Sube/baja con ejercicio real)</h4>
                            ${this.crearUIStats()}
                        </div>
                    </div>
                </div>
                
                <!-- ZONA DE COMBATE Y TIENDA -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                    <!-- ZONA DE COMBATE -->
                    <div style="background: rgba(40, 40, 50, 0.8); border-radius: 20px; padding: 25px; border: 2px solid #FF6B6B;">
                        <h3 style="color: #FF6B6B; margin-bottom: 20px;">⚔️ ZONA DE COMBATE</h3>
                        ${this.combateActual ? this.crearUICombate() : this.crearUISeleccionEnemigo()}
                    </div>
                    
                    <!-- TIENDA -->
                    <div style="background: rgba(255, 209, 102, 0.1); border-radius: 20px; padding: 25px; border: 2px solid #FFD166;">
                        <h3 style="color: #FFD166; margin-bottom: 20px;">🛒 TIENDA DE AVENTURERO</h3>
                        ${this.crearUITienda()}
                    </div>
                </div>
                
                <!-- HISTORIAL Y ESTADÍSTICAS -->
                <div style="background: rgba(76, 175, 80, 0.1); border-radius: 20px; padding: 25px; margin-bottom: 30px; border: 2px solid #4CAF50;">
                    <h3 style="color: #4CAF50; margin-bottom: 20px;">📊 ESTADÍSTICAS DE COMBATE</h3>
                    ${this.crearUIEstadisticas()}
                </div>
                
                <!-- INVENTARIO -->
                <div style="background: rgba(138, 90, 247, 0.1); border-radius: 20px; padding: 25px; border: 2px solid #8A5AF7;">
                    <h3 style="color: #8A5AF7; margin-bottom: 20px;">🎒 INVENTARIO</h3>
                    ${this.crearUIInventario()}
                </div>
            </div>
        `;
        
        return html;
    }

    crearUIStats() {
        const stats = this.jugador.stats;
        
        return `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
                <!-- VIDA -->
                <div style="background: rgba(255, 107, 107, 0.1); padding: 15px; border-radius: 10px; border-left: 5px solid #FF6B6B;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold; color: #FF6B6B;">❤️ VIDA</span>
                        <span>${stats.vida}/${stats.vidaMaxima}</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); height: 10px; border-radius: 5px; margin-top: 10px; overflow: hidden;">
                        <div style="background: #FF6B6B; width: ${(stats.vida / stats.vidaMaxima) * 100}%; height: 100%;"></div>
                    </div>
                </div>
                
                <!-- ENERGÍA -->
                <div style="background: rgba(255, 215, 0, 0.1); padding: 15px; border-radius: 10px; border-left: 5px solid #FFD700;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold; color: #FFD700;">⚡ ENERGÍA</span>
                        <span>${stats.energia}/${stats.energiaMaxima}</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); height: 10px; border-radius: 5px; margin-top: 10px; overflow: hidden;">
                        <div style="background: #FFD700; width: ${(stats.energia / stats.energiaMaxima) * 100}%; height: 100%;"></div>
                    </div>
                </div>
            </div>
            
            <!-- STATS PRINCIPALES -->
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; margin-top: 20px;">
                ${Object.entries({
                    'fuerza': '💪 Fuerza',
                    'defensa': '🛡️ Defensa',
                    'velocidad': '⚡ Velocidad',
                    'inteligencia': '🧠 Inteligencia',
                    'resistencia': '💪 Resistencia',
                    'carisma': '😎 Carisma',
                    'suerte': '🍀 Suerte'
                }).map(([stat, emoji]) => `
                    <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 0.9rem; opacity: 0.8;">${emoji}</div>
                        <div style="font-size: 1.8rem; font-weight: bold; margin: 5px 0; color: #FFD166;">${stats[stat]}</div>
                        <div style="display: flex; gap: 10px; justify-content: center;">
                            <button class="stat-btn" onclick="fantasiaRPG.subirStat('${stat}')" 
                                    style="background: #4CAF50; padding: 8px 15px; border-radius: 5px; border: none; color: white; cursor: pointer; transition: all 0.3s;">
                                ↑
                            </button>
                            <button class="stat-btn" onclick="fantasiaRPG.bajarStat('${stat}')" 
                                    style="background: #FF6B6B; padding: 8px 15px; border-radius: 5px; border: none; color: white; cursor: pointer; transition: all 0.3s;">
                                ↓
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- PREFERENCIAS DE NOVIAS -->
            ${this.noviaSeleccionada ? `
                <div style="background: rgba(138, 90, 247, 0.1); padding: 20px; border-radius: 15px; margin-top: 25px; border-left: 5px solid #8A5AF7;">
                    <h4 style="color: #8A5AF7; margin-bottom: 15px;">💖 BONUS CON ${this.noviaSeleccionada.toUpperCase()}</h4>
                    <p style="opacity: 0.8; margin-bottom: 10px;">
                        ${this.preferenciasStats[this.noviaSeleccionada].descripcion}
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                        <div style="text-align: center;">
                            <div style="color: #FFD166; font-size: 0.9rem;">STAT PREFERIDO</div>
                            <div style="font-size: 1.3rem; font-weight: bold; color: #4CAF50;">
                                ${this.preferenciasStats[this.noviaSeleccionada].statPreferido}
                            </div>
                            <div style="font-size: 0.9rem; opacity: 0.8;">
                                ${stats[this.preferenciasStats[this.noviaSeleccionada].statPreferido]} puntos
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #FFD166; font-size: 0.9rem;">BONUS ACTUAL</div>
                            <div style="font-size: 1.3rem; font-weight: bold; color: #FF1493;">
                                +${this.calcularBonusStatsNovia(this.noviaSeleccionada)}%
                            </div>
                            <div style="font-size: 0.9rem; opacity: 0.8;">
                                en momentos íntimos
                            </div>
                        </div>
                    </div>
                </div>
            ` : ''}
        `;
    }

    crearUISeleccionEnemigo() {
        const enemigos = [
            { id: 'slime', nombre: 'Slime Verde', nivel: 1, dificultad: 'Fácil', color: '#4CAF50' },
            { id: 'goblin', nombre: 'Goblin Ladrón', nivel: 2, dificultad: 'Normal', color: '#FF9800' },
            { id: 'lobo', nombre: 'Lobo Salvaje', nivel: 3, dificultad: 'Media', color: '#FF5722' },
            { id: 'esqueleto', nombre: 'Esqueleto Guerrero', nivel: 4, dificultad: 'Difícil', color: '#9C27B0' },
            { id: 'ogro', nombre: 'Ogro Furioso', nivel: 5, dificultad: 'Muy Difícil', color: '#F44336' },
            { id: 'jefe_dragon', nombre: 'Dragón Anciano', nivel: 10, dificultad: 'JEFE', color: '#FF1493' }
        ];
        
        return `
            <p style="text-align: center; opacity: 0.8; margin-bottom: 25px;">
                Selecciona un enemigo para combatir. ¡Gana dinero y EXP para tu novia!
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 20px;">
                ${enemigos.map(enemigo => `
                    <div class="enemigo-card" onclick="fantasiaRPG.iniciarCombateUI('${enemigo.id}')" 
                         style="background: linear-gradient(135deg, ${enemigo.color}20, rgba(255,255,255,0.05)); 
                                border: 2px solid ${enemigo.color}; border-radius: 15px; padding: 20px; 
                                cursor: pointer; transition: all 0.3s ease; text-align: center;"
                         onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.3)';"
                         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                        <div style="font-size: 2.5rem; margin-bottom: 10px;">👹</div>
                        <h4 style="color: ${enemigo.color}; margin-bottom: 10px;">${enemigo.nombre}</h4>
                        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; opacity: 0.8;">
                            <span>Nivel ${enemigo.nivel}</span>
                            <span>${enemigo.dificultad}</span>
                        </div>
                        <div style="margin-top: 15px;">
                            <button class="card-button" style="background: linear-gradient(135deg, ${enemigo.color}, ${this.oscurecerColor(enemigo.color)}); padding: 10px 15px; border-radius: 8px; border: none; color: white; cursor: pointer;">
                                ⚔️ Combatir
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="background: rgba(255, 209, 102, 0.1); padding: 20px; border-radius: 15px; margin-top: 30px; border-left: 5px solid #FFD166;">
                <h4 style="color: #FFD166; margin-bottom: 15px;">💡 CONSEJOS DE COMBATE</h4>
                <ul style="padding-left: 20px; opacity: 0.8;">
                    <li>Ganas dinero y EXP al derrotar enemigos</li>
                    <li>60% del EXP va a tu novia seleccionada</li>
                    <li>Cada nivel desbloquea nuevas habilidades</li>
                    <li>La suerte afecta críticos y drops</li>
                    <li>Puedes comprar ítems en la tienda</li>
                </ul>
            </div>
        `;
    }

    crearUITienda() {
        return `
            <p style="text-align: center; opacity: 0.8; margin-bottom: 25px;">
                Compra ítems y habilidades con el dinero ganado en combate
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin-bottom: 25px;">
                <!-- POCIÓN DE VIDA -->
                <div style="background: rgba(255, 107, 107, 0.1); padding: 20px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 10px;">❤️</div>
                    <h4 style="color: #FF6B6B; margin-bottom: 10px;">Poción de Vida</h4>
                    <div style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 15px;">+30 HP</div>
                    <button class="card-button" onclick="fantasiaRPG.comprarItem('pocionVida')" 
                            style="background: linear-gradient(135deg, #FF6B6B, #FF1493); padding: 10px 15px; border-radius: 8px; border: none; color: white; cursor: pointer;">
                        💰 10 monedas
                    </button>
                </div>
                
                <!-- POCIÓN DE ENERGÍA -->
                <div style="background: rgba(255, 215, 0, 0.1); padding: 20px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 10px;">⚡</div>
                    <h4 style="color: #FFD700; margin-bottom: 10px;">Poción de Energía</h4>
                    <div style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 15px;">+20 EP</div>
                    <button class="card-button" onclick="fantasiaRPG.comprarItem('pocionEnergia')" 
                            style="background: linear-gradient(135deg, #FFD700, #FF9800); padding: 10px 15px; border-radius: 8px; border: none; color: white; cursor: pointer;">
                        💰 15 monedas
                    </button>
                </div>
                
                <!-- POCIÓN DE REVIVIR -->
                <div style="background: rgba(76, 175, 80, 0.1); padding: 20px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 10px;">✨</div>
                    <h4 style="color: #4CAF50; margin-bottom: 10px;">Poción de Revivir</h4>
                    <div style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 15px;">+50% HP</div>
                    <button class="card-button" onclick="fantasiaRPG.comprarItem('revivir')" 
                            style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 10px 15px; border-radius: 8px; border: none; color: white; cursor: pointer;">
                        💰 30 monedas
                    </button>
                </div>
            </div>
            
            <!-- HABILIDADES PARA COMPRAR -->
            <h4 style="color: #FFD166; margin-bottom: 15px;">✨ HABILIDADES DISPONIBLES</h4>
            <div style="max-height: 200px; overflow-y: auto;">
                ${this.habilidadesDisponibles.filter(h => 
                    h.nivelRequerido <= this.jugador.nivel && 
                    !this.jugador.habilidades.some(jh => jh.id === h.id)
                ).map(habilidad => `
                    <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-bottom: 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="font-weight: bold;">${habilidad.nombre}</div>
                                <div style="font-size: 0.9rem; opacity: 0.7;">Nivel ${habilidad.nivelRequerido} • ${habilidad.tipo}</div>
                            </div>
                            <button class="card-button" onclick="fantasiaRPG.comprarHabilidad('${habilidad.id}')" 
                                    style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 8px 15px; border-radius: 5px; border: none; color: white; cursor: pointer;">
                                💰 ${habilidad.costo}
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    crearUICombate() {
        if (!this.combateActual || !this.enemigoActual) {
            return this.crearUISeleccionEnemigo();
        }
        
        const vidaJugadorPorcentaje = (this.jugador.stats.vida / this.jugador.stats.vidaMaxima) * 100;
        const vidaEnemigoPorcentaje = (this.enemigoActual.vida / this.enemigoActual.vidaMaxima) * 100;
        const energiaPorcentaje = (this.jugador.stats.energia / this.jugador.stats.energiaMaxima) * 100;
        
        return `
            <!-- ESTADO DEL COMBATE -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                <!-- JUGADOR -->
                <div style="background: rgba(88, 100, 245, 0.1); padding: 20px; border-radius: 15px; border: 2px solid #5864F5;">
                    <h4 style="color: #5864F5; margin-bottom: 15px;">🎮 ${this.jugador.nombre}</h4>
                    <div style="margin-bottom: 15px;">
                        <div style="color: #FF6B6B; font-size: 0.9rem;">❤️ VIDA</div>
                        <div style="background: rgba(255,255,255,0.1); height: 20px; border-radius: 10px; overflow: hidden; margin-top: 5px;">
                            <div style="background: linear-gradient(135deg, #FF6B6B, #FF1493); 
                                      width: ${vidaJugadorPorcentaje}%; 
                                      height: 100%; transition: width 0.5s ease;"></div>
                        </div>
                        <div style="text-align: right; font-size: 0.9rem; margin-top: 5px;">
                            ${this.jugador.stats.vida}/${this.jugador.stats.vidaMaxima}
                        </div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <div style="color: #FFD700; font-size: 0.9rem;">⚡ ENERGÍA</div>
                        <div style="background: rgba(255,255,255,0.1); height: 20px; border-radius: 10px; overflow: hidden; margin-top: 5px;">
                            <div style="background: linear-gradient(135deg, #FFD700, #FF9800); 
                                      width: ${energiaPorcentaje}%; 
                                      height: 100%; transition: width 0.5s ease;"></div>
                        </div>
                        <div style="text-align: right; font-size: 0.9rem; margin-top: 5px;">
                            ${this.jugador.stats.energia}/${this.jugador.stats.energiaMaxima}
                        </div>
                    </div>
                    <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 10px;">
                        ${this.combateActual.enTurno === 'jugador' ? '✅ TU TURNO' : '⏳ Enemigo atacando...'}
                    </div>
                </div>
                
                <!-- ENEMIGO -->
                <div style="background: rgba(255, 107, 107, 0.1); padding: 20px; border-radius: 15px; border: 2px solid #FF6B6B;">
                    <h4 style="color: #FF6B6B; margin-bottom: 15px;">👹 ${this.enemigoActual.nombre}</h4>
                    <div style="margin-bottom: 15px;">
                        <div style="color: #FF6B6B; font-size: 0.9rem;">❤️ VIDA</div>
                        <div style="background: rgba(255,255,255,0.1); height: 20px; border-radius: 10px; overflow: hidden; margin-top: 5px;">
                            <div style="background: linear-gradient(135deg, #FF1493, #8A5AF7); 
                                      width: ${vidaEnemigoPorcentaje}%; 
                                      height: 100%; transition: width 0.5s ease;"></div>
                        </div>
                        <div style="text-align: right; font-size: 0.9rem; margin-top: 5px;">
                            ${this.enemigoActual.vida}/${this.enemigoActual.vidaMaxima}
                        </div>
                    </div>
                    <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 10px;">
                        Nivel ${this.enemigoActual.nivel} • Exp: ${this.enemigoActual.exp}
                    </div>
                </div>
            </div>
            
            <!-- MENSAJES DEL COMBATE -->
            <div style="background: rgba(30, 30, 40, 0.8); border-radius: 15px; padding: 20px; margin-bottom: 25px; max-height: 200px; overflow-y: auto;">
                <h4 style="color: #FFD166; margin-bottom: 15px;">📜 LOG DEL COMBATE</h4>
                ${this.mensajesCombate.map(msg => `<div style="margin-bottom: 8px; padding: 8px; border-radius: 5px; background: rgba(255,255,255,0.05);">${msg}</div>`).reverse().join('')}
                ${this.mensajesCombate.length === 0 ? '<div style="opacity: 0.7; text-align: center;">El combate está por comenzar...</div>' : ''}
            </div>
            
            <!-- ACCIONES DE COMBATE -->
            ${this.combateActual.jugadorVivo && this.combateActual.enemigoVivo && this.combateActual.enTurno === 'jugador' ? `
                <h4 style="color: #FFD166; margin-bottom: 15px;">⚔️ ACCIONES</h4>
                
                <!-- HABILIDADES DISPONIBLES -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-bottom: 15px;">
                    ${this.jugador.habilidades.map(habilidad => `
                        <button class="card-button" onclick="fantasiaRPG.usarHabilidadUI('${habilidad.id}')" 
                                ${this.jugador.stats.energia < habilidad.costo ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}
                                style="background: linear-gradient(135deg, #5864F5, #8A5AF7); padding: 12px; border-radius: 10px; border: none; color: white; cursor: pointer; text-align: center;">
                            <div style="font-weight: bold;">${habilidad.nombre}</div>
                            <div style="font-size: 0.8rem;">${habilidad.costo} EP</div>
                        </button>
                    `).join('')}
                </div>
                
                <!-- ACCIONES BÁSICAS -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin-bottom: 20px;">
                    <button class="card-button" onclick="fantasiaRPG.usarPocionUI('vida')" 
                            ${this.jugador.inventario.pocionesVida > 0 ? '' : 'disabled style="opacity: 0.5; cursor: not-allowed;"'} style="padding: 12px; border-radius: 10px; border: none; color: white; cursor: pointer; background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                        ❤️ Poción Vida (${this.jugador.inventario.pocionesVida})
                    </button>
                    <button class="card-button" onclick="fantasiaRPG.usarPocionUI('energia')" 
                            ${this.jugador.inventario.pocionesEnergia > 0 ? '' : 'disabled style="opacity: 0.5; cursor: not-allowed;"'} style="padding: 12px; border-radius: 10px; border: none; color: white; cursor: pointer; background: linear-gradient(135deg, #FFD700, #FF9800);">
                        ⚡ Poción Energía (${this.jugador.inventario.pocionesEnergia})
                    </button>
                    <button class="card-button" onclick="fantasiaRPG.huirCombateUI()" 
                            style="background: linear-gradient(135deg, #FF6B6B, #FF1493); padding: 12px; border-radius: 10px; border: none; color: white; cursor: pointer;">
                        🏃‍♂️ Huir
                    </button>
                </div>
                
                <div style="text-align: center; font-size: 0.9rem; opacity: 0.7; margin-top: 15px;">
                    Turno: ${this.combateActual.turno}
                </div>
            ` : ''}
            
            ${!this.combateActual.jugadorVivo || !this.combateActual.enemigoVivo ? `
                <div style="text-align: center; margin-top: 30px;">
                    ${!this.combateActual.jugadorVivo ? `
                        <div style="background: rgba(255, 107, 107, 0.2); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 2px solid #FF6B6B;">
                            <h3 style="color: #FF6B6B; margin-bottom: 15px;">💀 DERROTADO</h3>
                            <p>¡No te rindas! Puedes revivir o intentar de nuevo.</p>
                        </div>
                    ` : ''}
                    
                    <button class="card-button" onclick="fantasiaRPG.finalizarCombateUI()" 
                            style="background: linear-gradient(135deg, #FFD166, #FF9800); padding: 15px 30px; font-size: 1.1rem; border-radius: 10px; border: none; color: white; cursor: pointer;">
                        ↩️ Volver al RPG
                    </button>
                </div>
            ` : ''}
        `;
    }

    crearUIEstadisticas() {
        return `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 25px;">
                <div style="text-align: center;">
                    <div style="color: #FF6B6B; font-size: 0.9rem;">💀 MUERTES</div>
                    <div style="font-size: 1.5rem; font-weight: bold;">${this.jugador.muertes}</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: #4CAF50; font-size: 0.9rem;">👹 DERROTADOS</div>
                    <div style="font-size: 1.5rem; font-weight: bold;">${this.jugador.enemigosDerrotados}</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: #FFD166; font-size: 0.9rem;">⚔️ COMBATES</div>
                    <div style="font-size: 1.5rem; font-weight: bold;">${this.jugador.combatesGanados}/${this.jugador.combatesGanados + this.jugador.combatesPerdidos}</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: #8A5AF7; font-size: 0.9rem;">⏱️ TIEMPO</div>
                    <div style="font-size: 1.5rem; font-weight: bold;">${Math.floor(this.jugador.tiempoJuego / 60)}m</div>
                </div>
            </div>
            
            ${this.historialCombates.length > 0 ? `
                <div>
                    <h4 style="color: #FFD166; margin-bottom: 15px;">📜 ÚLTIMOS COMBATES</h4>
                    <div style="max-height: 200px; overflow-y: auto; background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;">
                        ${this.historialCombates.slice(-5).reverse().map(combate => `
                            <div style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>${combate.enemigo}</span>
                                    <span style="color: ${combate.resultado === 'victoria' ? '#4CAF50' : '#FF6B6B'}">
                                        ${combate.resultado === 'victoria' ? '✅' : '❌'}
                                    </span>
                                </div>
                                <div style="font-size: 0.9rem; opacity: 0.7; margin-top: 5px;">
                                    ${new Date(combate.fecha).toLocaleDateString()} • 
                                    ${combate.exp ? `+${combate.exp} EXP` : ''}
                                    ${combate.dinero ? `• +${combate.dinero}💰` : ''}
                                    ${combate.turnos ? `• ${combate.turnos} turnos` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;
    }

    crearUIInventario() {
        return `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                <div style="background: rgba(255, 107, 107, 0.1); padding: 15px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 10px;">❤️</div>
                    <div style="font-weight: bold; color: #FF6B6B;">Poción de Vida</div>
                    <div style="font-size: 1.2rem; margin-top: 5px;">${this.jugador.inventario.pocionesVida}</div>
                    <div style="font-size: 0.9rem; opacity: 0.7;">+30 HP</div>
                </div>
                
                <div style="background: rgba(255, 215, 0, 0.1); padding: 15px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 10px;">⚡</div>
                    <div style="font-weight: bold; color: #FFD700;">Poción de Energía</div>
                    <div style="font-size: 1.2rem; margin-top: 5px;">${this.jugador.inventario.pocionesEnergia}</div>
                    <div style="font-size: 0.9rem; opacity: 0.7;">+20 EP</div>
                </div>
                
                <div style="background: rgba(76, 175, 80, 0.1); padding: 15px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 10px;">✨</div>
                    <div style="font-weight: bold; color: #4CAF50;">Poción de Revivir</div>
                    <div style="font-size: 1.2rem; margin-top: 5px;">${this.jugador.inventario.revivir}</div>
                    <div style="font-size: 0.9rem; opacity: 0.7;">+50% HP</div>
                </div>
            </div>
            
            <!-- LOGROS -->
            ${Object.values(this.jugador.logros).some(logro => logro) ? `
                <div style="margin-top: 25px;">
                    <h4 style="color: #FFD166; margin-bottom: 15px;">🏆 LOGROS DESBLOQUEADOS</h4>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        ${this.jugador.logros.primerCombate ? `
                            <div style="background: rgba(255, 209, 102, 0.2); padding: 10px 15px; border-radius: 8px; border: 1px solid #FFD166;">
                                ⚔️ Primer combate
                            </div>
                        ` : ''}
                        ${this.jugador.logros.nivel10 ? `
                            <div style="background: rgba(76, 175, 80, 0.2); padding: 10px 15px; border-radius: 8px; border: 1px solid #4CAF50;">
                                ⭐ Nivel 10
                            </div>
                        ` : ''}
                        ${this.jugador.logros.derrotarJefe ? `
                            <div style="background: rgba(255, 107, 107, 0.2); padding: 10px 15px; border-radius: 8px; border: 1px solid #FF6B6B;">
                                🐉 Dragón derrotado
                            </div>
                        ` : ''}
                    </div>
                </div>
            ` : ''}
        `;
    }

    // ====================
    // FUNCIONES UI WRAPPERS
    // ====================

    iniciarCombateUI(tipoEnemigo) {
        this.iniciarCombate(tipoEnemigo);
        this.actualizarUI();
    }

    usarHabilidadUI(habilidadId) {
        const resultado = this.atacarEnemigo(habilidadId);
        this.actualizarUI();
    }

    usarPocionUI(tipo) {
        if (this.usarPocion(tipo)) {
            this.actualizarUI();
        }
    }

    huirCombateUI() {
        this.huirCombate();
        this.actualizarUI();
    }

    finalizarCombateUI() {
        this.finalizarCombate('abandonado');
        this.actualizarUI();
    }

    // ====================
    // FUNCIONES AUXILIARES
    // ====================

    agregarMensajeCombate(mensaje) {
        this.mensajesCombate.push(mensaje);
        if (this.mensajesCombate.length > 12) {
            this.mensajesCombate.shift();
        }
    }

    actualizarUI() {
        const mangaSection = document.getElementById('manga-section');
        if (mangaSection) {
            mangaSection.innerHTML = this.cargarUI();
        }
    }

    mostrarNotificacion(mensaje) {
        const notif = document.createElement('div');
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #FFD166, #FF6B6B);
            color: #333;
            padding: 15px 25px;
            border-radius: 50px;
            font-weight: bold;
            box-shadow: 0 5px 20px rgba(0,0,0,0.4);
            z-index: 1003;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.5s forwards;
            font-size: 1.1rem;
            border: 3px solid white;
            max-width: 400px;
            text-align: center;
            white-space: pre-line;
        `;
        
        document.body.appendChild(notif);
        
        setTimeout(() => {
            if (notif.parentNode) {
                notif.parentNode.removeChild(notif);
            }
        }, 3000);
    }

    oscurecerColor(color) {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        const darkR = Math.max(0, r - 40);
        const darkG = Math.max(0, g - 40);
        const darkB = Math.max(0, b - 40);
        
        return `#${darkR.toString(16).padStart(2, '0')}${darkG.toString(16).padStart(2, '0')}${darkB.toString(16).padStart(2, '0')}`;
    }

    // ====================
    // LOCAL STORAGE
    // ====================

    guardarJugador() {
        try {
            localStorage.setItem('fantasia_jugador', JSON.stringify(this.jugador));
        } catch (e) {
            console.warn('No se pudo guardar jugador:', e);
        }
    }

    cargarJugador() {
        try {
            const jugador = localStorage.getItem('fantasia_jugador');
            return jugador ? JSON.parse(jugador) : null;
        } catch (e) {
            console.warn('No se pudo cargar jugador:', e);
            return null;
        }
    }

    guardarNoviaSeleccionada() {
        try {
            localStorage.setItem('fantasia_novia', this.noviaSeleccionada);
        } catch (e) {
            console.warn('No se pudo guardar novia:', e);
        }
    }

    cargarNoviaSeleccionada() {
        try {
            return localStorage.getItem('fantasia_novia');
        } catch (e) {
            console.warn('No se pudo cargar novia:', e);
            return null;
        }
    }

    guardarHistorial() {
        try {
            localStorage.setItem('fantasia_historial', JSON.stringify(this.historialCombates));
        } catch (e) {
            console.warn('No se pudo guardar historial:', e);
        }
    }

    cargarHistorial() {
        try {
            const historial = localStorage.getItem('fantasia_historial');
            return historial ? JSON.parse(historial) : [];
        } catch (e) {
            console.warn('No se pudo cargar historial:', e);
            return [];
        }
    }

    // ====================
    // INTEGRACIÓN CON RPG EXISTENTE
    // ====================

    seleccionarNovia(personajeId) {
        if (!this.preferenciasStats[personajeId]) {
            this.mostrarNotificacion('❌ Personaje no válido');
            return false;
        }
        
        this.noviaSeleccionada = personajeId;
        this.guardarNoviaSeleccionada();
        
        const preferencia = this.preferenciasStats[personajeId];
        const bonus = this.calcularBonusStatsNovia(personajeId);
        
        this.mostrarNotificacion(
            `💖 Novia seleccionada: ${personajeId.toUpperCase()}\n` +
            `✨ ${preferencia.descripcion}\n` +
            `🎯 Bonus actual: +${bonus}% en momentos íntimos`
        );
        
        this.actualizarUI();
        return true;
    }
}

// ================================================
// INTEGRACIÓN CON RPG QUINTILLIZAS
// ================================================

// Modificar la función de momentos íntimos para incluir bonus de stats
if (typeof QuintillizasRPG !== 'undefined') {
    const intentarMomentoIntimoOriginal = QuintillizasRPG.prototype.intentarMomentoIntimo;
    
    QuintillizasRPG.prototype.intentarMomentoIntimo = function(personajeId, momentoId) {
        const personaje = this.datosPersonajes[personajeId];
        const momento = personaje.momentosIntimos.find(m => m.id === momentoId);
        
        if (!momento) {
            this.mostrarNotificacion('❌ Momento íntimo no encontrado');
            return false;
        }
        
        // Calcular probabilidad base
        const probabilidadBase = this.calcularProbabilidadMomento(personaje, momento, false);
        
        // AGREGAR BONUS DE STATS DEL RPG FANTASÍA
        let bonusStats = 0;
        if (typeof fantasiaRPG !== 'undefined' && fantasiaRPG.noviaSeleccionada === personajeId) {
            const bonusFantasia = fantasiaRPG.obtenerBonusMomentoIntimo(personajeId);
            bonusStats = bonusFantasia.porcentaje;
            
            console.log(`💖 Bonus RPG Fantasía para ${personaje.nombre}: +${bonusStats}%`);
            
            if (bonusStats > 0) {
                this.mostrarNotificacion(`✨ Bonus RPG Fantasía: +${bonusStats}% éxito`);
            }
        }
        
        const probabilidadReal = Math.min(probabilidadBase + bonusStats, 80);
        
        console.log(`🎯 Probabilidad final para ${momento.nombre}: ${probabilidadReal}%`);
        const exito = Math.random() * 100 < probabilidadReal;
        
        if (typeof intentarMomentoIntimoOriginal === 'function') {
            return intentarMomentoIntimoOriginal.call(this, personajeId, momentoId);
        }
        
        return exito;
    };
}

// ================================================
// INSTANCIA GLOBAL
// ================================================

const fantasiaRPG = new FantasiaRPG();

// ================================================
// ANIMACIONES CSS
// ================================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
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
    
    .card-button {
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .card-button:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    
    .stat-btn:hover {
        transform: scale(1.1);
    }
    
    .enemigo-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    }
`;
document.head.appendChild(style);

// ================================================
// INICIALIZACIÓN
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    fantasiaRPG.actualizarUI();
});

// Exportar para uso global
window.fantasiaRPG = fantasiaRPG;
