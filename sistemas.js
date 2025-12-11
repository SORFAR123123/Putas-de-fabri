// ================================================
// SISTEMA DE DINERO Y PROGRESO
// ================================================

class SistemaEconomia {
    constructor() {
        this.dinero = this.cargarDinero() || 0;
        this.progreso = this.cargarProgreso() || {};
        this.inicializarUI();
    }

    // ====================
    // DINERO
    // ====================

    agregarDinero(cantidad) {
        this.dinero += cantidad;
        this.guardarDinero();
        this.actualizarUI();
        this.mostrarNotificacion(`+${cantidad.toFixed(2)} soles`);
    }

    obtenerDinero() {
        return this.dinero;
    }

    // ====================
    // PROGRESO DE MAZOS
    // ====================

    actualizarProgreso(contenedor, subcontenedor, mazo, porcentaje) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        const progresoAnterior = this.progreso[clave] || 0;
        
        console.log(`Actualizando progreso: ${clave}`);
        console.log(`Progreso anterior: ${progresoAnterior}%, Nuevo: ${porcentaje}%`);
        
        // SIEMPRE actualizar si es mejor
        if (porcentaje >= progresoAnterior) {
            this.progreso[clave] = porcentaje;
            this.guardarProgreso();
            
            // Calcular recompensa SIEMPRE
            this.calcularRecompensa(contenedor, subcontenedor, mazo, porcentaje, progresoAnterior);
        }
        
        return this.progreso[clave];
    }

    obtenerProgreso(contenedor, subcontenedor, mazo) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        return this.progreso[clave] || 0;
    }

    // ====================
    // CÁLCULO DE RECOMPENSAS - FIJO Y SIEMPRE FUNCIONA
    // ====================

    calcularRecompensa(contenedor, subcontenedor, mazo, porcentaje, progresoAnterior) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        
        console.log(`🎯 Calculando recompensa para: ${clave}`);
        console.log(`📊 De ${progresoAnterior}% a ${porcentaje}%`);
        
        // FÓRMULA FIJA QUE SIEMPRE DA DINERO:
        let recompensa = 0;
        
        // 1. SI ES EL PRIMER INTENTO (progresoAnterior = 0)
        if (progresoAnterior === 0 && porcentaje > 0) {
            if (porcentaje === 100) {
                recompensa = 2.00;  // 2 soles por 100% en primer intento
            } else if (porcentaje >= 50) {
                recompensa = 1.00;  // 1 sol por 50-99%
            } else {
                recompensa = 0.50;  // 0.5 soles por menos de 50%
            }
        }
        // 2. SI ES UN MEJOR INTENTO
        else if (porcentaje > progresoAnterior) {
            if (porcentaje === 100) {
                recompensa = 2.00;  // Siempre 2 soles por llegar al 100%
            } else {
                recompensa = 0.25;  // 0.25 soles por mejorar
            }
        }
        
        // Redondear a 2 decimales
        recompensa = Math.round(recompensa * 100) / 100;
        
        // DAR LA RECOMPENSA SI HAY ALGO
        if (recompensa > 0) {
            this.agregarDinero(recompensa);
            console.log(`💰 ¡RECOMPENSA OBTENIDA! ${recompensa} soles`);
        } else {
            console.log(`⚠️ No hay recompensa esta vez`);
        }
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
            dinero: this.dinero
        };
    }

    // ====================
    // UI
    // ====================

    inicializarUI() {
        this.crearContadorDinero();
        this.actualizarUI();
    }

    crearContadorDinero() {
        // Crear contenedor de dinero si no existe
        if (!document.getElementById('dinero-container')) {
            const dineroDiv = document.createElement('div');
            dineroDiv.id = 'dinero-container';
            dineroDiv.className = 'dinero-container';
            dineroDiv.innerHTML = `
                <span>💰</span>
                <span id="dinero-cantidad">${this.dinero.toFixed(2)}</span>
                <span>soles</span>
            `;
            document.body.insertBefore(dineroDiv, document.body.firstChild);
        }
    }

    actualizarUI() {
        const dineroElement = document.getElementById('dinero-cantidad');
        if (dineroElement) {
            dineroElement.textContent = this.dinero.toFixed(2);
        }
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
}

// Crear instancia global
const sistemaEconomia = new SistemaEconomia();

// Estilos CSS para notificaciones
const estiloNotificaciones = document.createElement('style');
estiloNotificaciones.textContent = `
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
`;
document.head.appendChild(estiloNotificaciones);
