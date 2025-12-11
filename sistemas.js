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
        
        if (!this.progreso[clave] || porcentaje > this.progreso[clave]) {
            this.progreso[clave] = porcentaje;
            this.guardarProgreso();
            
            // Calcular recompensa solo si es mejor que antes
            this.calcularRecompensa(contenedor, subcontenedor, mazo, porcentaje);
        }
        
        return this.progreso[clave];
    }

    obtenerProgreso(contenedor, subcontenedor, mazo) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        return this.progreso[clave] || 0;
    }

    // ====================
    // CÁLCULO DE RECOMPENSAS
    // ====================

    calcularRecompensa(contenedor, subcontenedor, mazo, porcentaje) {
        const progresoAnterior = this.obtenerProgreso(contenedor, subcontenedor, mazo);
        
        // Solo dar recompensa si mejoró
        if (porcentaje > progresoAnterior) {
            let recompensa = 0;
            
            if (porcentaje === 100) {
                // Completado 100% = 2 soles
                recompensa = 2.00;
            } else if (porcentaje >= 80) {
                // 80-99% = proporcional
                recompensa = (porcentaje / 100) * 1.50;
            } else if (porcentaje >= 50) {
                // 50-79% = proporcional
                recompensa = (porcentaje / 100) * 1.00;
            } else {
                // Menos de 50% = proporcional reducido
                recompensa = (porcentaje / 100) * 0.50;
            }
            
            // Redondear a 2 decimales
            recompensa = Math.round(recompensa * 100) / 100;
            
            // Dar recompensa si hay mejora
            const mejora = porcentaje - progresoAnterior;
            if (mejora > 0) {
                this.agregarDinero(recompensa);
            }
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
            document.body.appendChild(dineroDiv);
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
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            padding: 10px 20px;
            border-radius: 50px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 1001;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
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

    // ====================
    // RESET (para pruebas)
    // ====================

    resetearTodo() {
        this.dinero = 0;
        this.progreso = {};
        localStorage.removeItem('manga_dinero');
        localStorage.removeItem('manga_progreso');
        this.actualizarUI();
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
    
    .notificacion-dinero {
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards !important;
    }
`;
document.head.appendChild(estiloNotificaciones);
