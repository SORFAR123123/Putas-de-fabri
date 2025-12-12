// ================================================
// SISTEMAS.JS - VERSIÓN FINAL CON TODO LO QUE PEDISTE
// ================================================

class SistemaEconomia {
    constructor() {
        this.dinero = this.cargarDinero() || 0;
        this.progreso = this.cargarProgreso() || {};
        this.palabrasDificiles = this.cargarPalabrasDificiles() || [];
        this.misiones = this.cargarMisiones() || this.generarMisionesDiarias();
        this.ultimoReset = this.cargarUltimoReset() || Date.now();

        this.resetearSiEsNecesario();
    }

    resetearSiEsNecesario() {
        const ahora = new Date();
        const ultimo = new Date(this.ultimo);

        // Reinicia a las 3 AM todos los días
        if (ultimo.getDate() !== ahora.getDate() || (ahora.getHours() >= 3 && ultimo.getHours() < 3)) {
            this.palabrasDificiles = [];
            this.misiones = this.generarMisionesDiarias();
            this.ultimo = Date.now();
            this.guardarPalabrasDificiles();
            this.guardarMisiones();
            this.guardarUltimoReset();
            console.log("Reset diario 3 AM: mazo difícil y misiones reiniciadas");
        }
    }

    generarMisionesDiarias() {
        return [
            { id: "m1", nombre: "Completa 3 mazos al 100%", progreso: 0, objetivo: 3, recompensa: 8, completada: false },
            { id: "m2", nombre: "Gana 50 EXP en RPG", progreso: 0, objetivo: 50, recompensa: 10, completada: false },
            { id: "m3", nombre: "Estudia 5 mazos diferentes", progreso: 0, objetivo: 5, recompensa: 6, completada: false },
            { id: "m4", nombre: "Completa 1 mazo difícil", progreso: 0, objetivo: 1, recompensa: 12, completada: false }
        ];
    }

    actualizarProgreso(contenedor, subcontenedor, mazo, porcentaje) {
        const clave = `${contenedor}_${subcontenedor}_${mazo}`;
        const progresoAnterior = this.progreso[clave] || 0;

        if (porcentaje >= progresoAnterior) {
            this.progreso[clave] = porcentaje;
            this.guardarProgreso();

            // REGLA: 2 soles por mazo al 100%
            if (porcentaje === 100 && progresoAnterior < 100) {
                this.agregarDinero(2.00);

                // Misión mazos 100%
                const m1 = this.misiones.find(m => m.id === "m1");
                if (m1 && !m1.completada) {
                    m1.progreso++;
                    if (m1.progreso >= m1.objetivo) {
                        m1.completada = true;
                        this.agregarDinero(m1.recompensa);
                        mostrarNotificacion(`MISIÓN COMPLETADA: ${m1.nombre} → +${m1.recompensa} soles`);
                    }
                }

                // VIDEO RARO AL 100%
                this.intentarVideoRaro();
            }
        }
        return this.progreso[clave];
    }

    intentarVideoRaro() {
        const videos = [
            { prob: 1, nombre: "Ichika sin ropa interior", id: "1RARO1" },
            { prob: 2, nombre: "Nino en la ducha", id: "1RARO2" },
            { prob: 3, nombre: "Miku sin audífonos", id: "1RARO3" },
            { prob: 5, nombre: "Yotsuba en bikini", id: "1RARO4" },
            { prob: 10, nombre: "Itsuki comiendo desnuda", id: "1RARO5" },
            { prob: 20, nombre: "Escena caliente random", id: "1RARO6" }
        ];
        const total = videos.reduce((a, v) => a + v.prob, 0);
        const rand = Math.random() * total;
        let acum = 0;
        for (const v of videos) {
            acum += v.prob;
            if (rand <= acum) {
                alert(`VIDEO ULTRA RARO DESBLOQUEADO: ${v.nombre}`);
                return;
            }
        }
    }

    // === PALABRAS DIFÍCILES ===
    marcarComoDificil(palabraObj) {
        if (!this.palabrasDificiles.find(p => p.japones === palabraObj.japones)) {
            this.palabrasDificiles.push(palabraObj);
            this.guardarPalabrasDificiles();
            mostrarNotificacion("Palabra marcada como DIFÍCIL");
        }
    }

    obtenerMazoDificil() {
        return this.palabrasDificiles.length > 0 ? [...this.palabrasDificiles] : null;
    }

    limpiarMazoDificil() {
        this.palabrasDificiles = [];
        this.guardarPalabrasDificiles();
    }

    // === DINERO ===
    agregarDinero(cantidad) {
        if (cantidad === 0) return;
        this.dinero += cantidad;
        if (this.dinero < 0) this.dinero = 0;
        this.guardarDinero();
        if (cantidad > 0) {
            mostrarNotificacion(`+${cantidad.toFixed(2)} soles`);
        }
    }

    obtenerDinero() { return this.dinero; }

    // === GUARDADO ===
    guardarDinero() { localStorage.setItem('manga_dinero', this.dinero.toString()); }
    cargarDinero() { 
        const d = localStorage.getItem('manga_dinero');
        return d ? parseFloat(d) : 0;
    }
    guardarProgreso() { localStorage.setItem('manga_progreso', JSON.stringify(this.progreso)); }
    cargarProgreso() { 
        const p = localStorage.getItem('manga_progreso');
        return p ? JSON.parse(p) : {};
    }
    guardarPalabrasDificiles() { localStorage.setItem('palabras_dificiles', JSON.stringify(this.palabrasDificiles)); }
    cargarPalabrasDificiles() { 
        const d = localStorage.getItem('palabras_dificiles');
        return d ? JSON.parse(d) : [];
    }
    guardarMisiones() { localStorage.setItem('misiones_diarias', JSON.stringify(this.misiones)); }
    cargarMisiones() { 
        const m = localStorage.getItem('misiones_diarias');
        return m ? JSON.parse(m) : null;
    }
    guardarUltimoReset() { localStorage.setItem('ultimo_reset', this.ultimo); }
    cargarUltimoReset() { return localStorage.getItem('ultimo_reset'); }
}

// ================================================
// REPRODUCTOR DRIVE (SIN CAMBIOS, FUNCIONA PERFECTO)
// ================================================

class SistemaReproductorDrive {
    constructor() {
        this.videoActual = null;
        this.timestampsActuales = [];
    }

    cargarVideo(driveId, timestamps = []) {
        this.videoActual = driveId;
        this.timestampsActuales = timestamps;
        
        return `
            <div class="reproductor-container">
                ${this.crearListaTimestamps(timestamps)}
                <div class="video-wrapper" style="margin-top: 30px;">
                    <iframe 
                        id="drive-iframe"
                        src="https://drive.google.com/file/d/${driveId}/preview"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        class="drive-iframe"
                    ></iframe>
                </div>
            </div>
        `;
    }

    crearListaTimestamps(timestamps) {
        if (!timestamps || timestamps.length === 0) {
            return '<p style="text-align: center; opacity: 0.7;">No hay timestamps</p>';
        }

        let html = '<div class="timestamps-container"><h3>TIMESTAMPS</h3><div class="timestamps-grid">';
        timestamps.forEach(ts => {
            const min = Math.floor(ts.tiempo / 60).toString().padStart(2, '0');
            const seg = (ts.tiempo % 60).toString().padStart(2, '0');
            html += `
                <div class="timestamp-item" onclick="sistemaReproductor.saltarATiempo(${ts.tiempo})">
                    <div class="timestamp-tiempo">${min}:${seg}</div>
                    <div class="timestamp-titulo">${ts.titulo}</div>
                </div>
            `;
        });
        html += '</div></div>';
        return html;
    }

    saltarATiempo(segundos) {
        if (!this.videoActual) return;
        const min = Math.floor(segundos / 60);
        const seg = segundos % 60;
        const iframe = document.getElementById('drive-iframe');
        if (iframe) {
            iframe.src = `https://drive.google.com/file/d/${this.videoActual}/preview#t=${min}m${seg}s`;
            mostrarNotificacion(`Saltando a ${min}:${seg.toString().padStart(2,'0')}`);
        }
    }
}

// ================================================
// NOTIFICACIÓN GLOBAL
// ================================================

function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed; top: 80px; right: 20px; background: linear-gradient(135deg, #FFD166, #FF6B6B);
        color: #333; padding: 15px 30px; border-radius: 50px; font-weight: bold; box-shadow: 0 5px 15px rgba(0,0,0,0.4);
        z-index: 1001; animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards; font-size: 1.1rem; border: 2px solid white;
    `;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}

// ================================================
// INSTANCIAS GLOBALES
// ================================================

const sistemaEconomia = new SistemaEconomia();
const sistemaReproductor = new SistemaReproductorDrive();

// ESTILOS
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        .timestamp-item { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; cursor: pointer; text-align:center; transition:0.3s; }
        .timestamp-item:hover { background: rgba(88,100,245,0.3); transform: translateY(-5px); }
    `;
    document.head.appendChild(style);
});
