// ================================================
// RPG QUINTILLIZAS - VERSIÓN FINAL ULTRA DIFÍCIL
// ================================================

class QuintillizasRPG {
    constructor() {
        this.personajeSeleccionado = localStorage.getItem('rpg_personaje') || null;
        this.datosPersonajes = JSON.parse(localStorage.getItem('rpg_datos') || 'null') || this.crearPersonajes();
        this.condonesNormales = parseInt(localStorage.getItem('condones_normales') || '0');
        this.condones001 = parseInt(localStorage.getItem('condones_001') || '0');
    }

    crearPersonajes() {
        const base = {
            nivel: 1,
            exp: 0,
            expNecesaria: 300,
            afinidad: 0,
            estadoAnimo: 'neutral'
        };

        return {
            ichika: { ...base, nombre: 'Ichika Nakano', color: '#FF6B8B', imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small' },
            nino:   { ...base, nombre: 'Nino Nakano',   color: '#FFB347', imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small' },
            miku:   { ...base, nombre: 'Miku Nakano',   color: '#6A5ACD', imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small' },
            yotsuba: { ...base, nombre: 'Yotsuba Nakano',color: '#4CAF50', imagen: 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small' },
            itsuki: { ...base, nombre: 'Itsuki Nakano', color: '#FFD166', imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small' }
        };
    }

    agregarEXP(id, cantidad) {
        if (!this.personajeSeleccionado || this.personajeSeleccionado !== id) return false;
        const p = this.datosPersonajes[id];
        p.exp += cantidad;

        while (p.exp >= p.expNecesaria) {
            p.nivel++;
            p.exp -= p.expNecesaria;
            p.expNecesaria = Math.round(p.expNecesaria * 1.7);
            mostrarNotificacion(`${p.nombre} subió a nivel ${p.nivel}!`);
        }

        localStorage.setItem('rpg_datos', JSON.stringify(this.datosPersonajes));
        return true;
    }

    intentarMomentoIntimo(id, momentoId) {
        const p = this.datosPersonajes[id];
        const m = p.momentosIntimos?.find(x => x.id === momentoId);
        if (!m) return;

        if (p.nivel < m.nivelMin || p.afinidad < m.afinidadMin) {
            mostrarNotificacion(`Necesitas nivel ${m.nivelMin} y +${m.afinidadMin} afinidad`);
            return;
        }

        const usar001 = this.condones001 > 0 && confirm("¿Usar condón 0.01 ultra delgado? (+40% éxito)");
        const stock = usar001 ? this.condones001 : this.condonesNormales;
        if (stock < m.condonesRequeridos) {
            mostrarNotificacion("No tienes suficientes condones");
            return;
        }

        if (usar001) this.condones001 -= m.condonesRequeridos;
        else this.condonesNormales -= m.condonesRequeridos;

        const exito = Math.random() * 100 < (35 + (usar001 ? 40 : 0) + p.afinidad / 5);

        if (exito) {
            p.afinidad += usar001 ? 70 : 30;
            this.agregarEXP(id, usar001 ? 250 : 120);
            mostrarNotificacion(`ÉXITO ${usar001 ? 'CON 0.01' : ''}! +${usar001 ? 70 : 30} afinidad`);
            // Aquí iría el video
        } else {
            p.afinidad -= 50;
            mostrarNotificacion("Fallaste... ella está muy enojada (-50 afinidad)");
        }

        localStorage.setItem('condones_normales', this.condonesNormales);
        localStorage.setItem('condones_001', this.condones001);
        localStorage.setItem('rpg_datos', JSON.stringify(this.datosPersonajes));
    }

    inicializar() {
        console.log('RPG Quintillizas cargado - modo ultra difícil activado');
    }

    cargarPaginaPrincipal() {
        // Tu HTML del RPG original aquí (el que ya tenías)
        // Lo dejo igual que antes, solo añado los condones 0.01 en la tienda
        return `TU HTML ORIGINAL DEL RPG AQUÍ`;
    }
}

const quintillizasRPG = new QuintillizasRPG();
