// ================================================
// SISTEMA DE EVENTOS DIARIOS - VERSIÓN COMPLETA
// ================================================

const eventosDiarios = [
    {
        id: 1,
        titulo: "😤 El Ex de Nino ha vuelto",
        descripcion: "Nino se encontró con su ex en la ciudad. Si hoy no completas 5 mazos al 100%, ella dudará de ti y se alejará.",
        tipoRequisito: "mazos_100",
        cantidadRequerida: 5,
        chicas: ["nino"],
        videoExito: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
        videoFracaso: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
        afinidad: { exito: 5, fracaso: -30 }
    },
    {
        id: 2,
        titulo: "📚 Miku y su examen de historia",
        descripcion: "Miku tiene un examen importante mañana. Si no practicas 30 palabras con ella hoy, suspenderá y te culpará.",
        tipoRequisito: "palabras_practicadas",
        cantidadRequerida: 30,
        chicas: ["miku"],
        videoExito: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        videoFracaso: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
        afinidad: { exito: 5, fracaso: -30 }
    },
    {
        id: 3,
        titulo: "☕ Ichika necesita un café",
        descripcion: "Ichika tuvo un día agotador en el hospital. Si no gastas 100 soles en un café para ella hoy, se sentirá sola.",
        tipoRequisito: "dinero_gastado",
        cantidadRequerida: 100,
        chicas: ["ichika"],
        videoExito: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
        videoFracaso: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
        afinidad: { exito: 5, fracaso: -30 }
    },
    {
        id: 4,
        titulo: "⚽ Yotsuba y la competencia",
        descripcion: "Yotsuba participa en una competencia de atletismo. Necesitas practicar 20 palabras para darle ánimo.",
        tipoRequisito: "palabras_practicadas",
        cantidadRequerida: 20,
        chicas: ["yotsuba"],
        videoExito: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        videoFracaso: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
        afinidad: { exito: 5, fracaso: -30 }
    },
    {
        id: 5,
        titulo: "🍣 Itsuki y el nuevo buffet",
        descripcion: "Itsuki quiere probar el nuevo buffet. Si no gastas 150 soles en llevarla hoy, se sentirá rechazada.",
        tipoRequisito: "dinero_gastado",
        cantidadRequerida: 150,
        chicas: ["itsuki"],
        videoExito: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
        videoFracaso: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
        afinidad: { exito: 5, fracaso: -30 }
    },
    {
        id: 6,
        titulo: "👯‍♀️ Nino y Miku están peleadas",
        descripcion: "Nino y Miku tuvieron una discusión. Debes completar 3 mazos al 100% para reconciliarlas. Si fallas, ambas se enojarán contigo.",
        tipoRequisito: "mazos_100",
        cantidadRequerida: 3,
        chicas: ["nino", "miku"],
        videoExito: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
        videoFracaso: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        afinidad: { exito: 5, fracaso: -30 }
    },
    {
        id: 7,
        titulo: "🎬 Ichika y Yotsuba quieren cine",
        descripcion: "Ichika y Yotsuba quieren ir al cine. Gasta 200 soles en entradas. Si no las invitas, se irán solas y se sentirán decepcionadas.",
        tipoRequisito: "dinero_gastado",
        cantidadRequerida: 200,
        chicas: ["ichika", "yotsuba"],
        videoExito: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        videoFracaso: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
        afinidad: { exito: 5, fracaso: -30 }
    },
    {
        id: 8,
        titulo: "🎤 Miku, Yotsuba e Itsuki forman banda",
        descripcion: "Miku, Yotsuba e Itsuki quieren formar una banda. Necesitas practicar 50 palabras para ayudar con las letras. Si no las apoyas, se sentirán ignoradas.",
        tipoRequisito: "palabras_practicadas",
        cantidadRequerida: 50,
        chicas: ["miku", "yotsuba", "itsuki"],
        videoExito: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
        videoFracaso: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
        afinidad: { exito: 5, fracaso: -30 }
    },
    {
        id: 9,
        titulo: "🛍️ Tarde de compras con las 4",
        descripcion: "Nino, Miku, Yotsuba e Itsuki te invitan de compras. Necesitas 300 soles para los gastos. Si no vas, se sentirán excluídas.",
        tipoRequisito: "dinero_gastado",
        cantidadRequerida: 300,
        chicas: ["nino", "miku", "yotsuba", "itsuki"],
        videoExito: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS",
        videoFracaso: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        afinidad: { exito: 5, fracaso: -30 }
    },
    {
        id: 10,
        titulo: "👯‍♀️👯‍♀️👯‍♀️👯‍♀️👯‍♀️ Cena familiar con las 5",
        descripcion: "Las cinco hermanas te invitan a una cena familiar especial. Debes completar 10 mazos al 100% para demostrar tu dedicación. ¡No las decepciones!",
        tipoRequisito: "mazos_100",
        cantidadRequerida: 10,
        chicas: ["ichika", "nino", "miku", "yotsuba", "itsuki"],
        videoExito: "1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K",
        videoFracaso: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
        afinidad: { exito: 5, fracaso: -30 }
    }
];

// Sistema de eventos diarios
const sistemaEventos = {
    eventoHoy: null,
    progresoHoy: 0,
    completadoHoy: false,
    falladoAyer: false,
    eventoAyer: null,
    ultimaFecha: null,

    iniciar: function() {
        console.log("🎲 Iniciando sistema de eventos diarios...");
        this.cargarEstado();
        this.verificarNuevoDia();
    },

    cargarEstado: function() {
        try {
            const estado = localStorage.getItem('eventosDiarios_estado');
            if (estado) {
                const data = JSON.parse(estado);
                this.eventoHoy = data.eventoHoy;
                this.progresoHoy = data.progresoHoy || 0;
                this.completadoHoy = data.completadoHoy || false;
                this.falladoAyer = data.falladoAyer || false;
                this.eventoAyer = data.eventoAyer || null;
                this.ultimaFecha = data.ultimaFecha;
            }
        } catch (e) {
            console.warn("Error cargando estado de eventos:", e);
        }
    },

    guardarEstado: function() {
        try {
            const data = {
                eventoHoy: this.eventoHoy,
                progresoHoy: this.progresoHoy,
                completadoHoy: this.completadoHoy,
                falladoAyer: this.falladoAyer,
                eventoAyer: this.eventoAyer,
                ultimaFecha: this.ultimaFecha
            };
            localStorage.setItem('eventosDiarios_estado', JSON.stringify(data));
        } catch (e) {
            console.warn("Error guardando estado de eventos:", e);
        }
    },

    verificarNuevoDia: function() {
        const hoy = new Date().toLocaleDateString('en-CA');
        
        if (this.ultimaFecha !== hoy) {
            console.log("📅 Nuevo día detectado!");
            
            if (this.eventoHoy && !this.completadoHoy && this.ultimaFecha) {
                console.log("⚠️ Evento del día anterior no completado. Aplicando castigo...");
                this.falladoAyer = true;
                this.eventoAyer = this.eventoHoy;
                this.aplicarConsecuenciasEvento(this.eventoHoy, false);
            }
            
            this.seleccionarEventoDelDia();
            this.ultimaFecha = hoy;
            this.completadoHoy = false;
            this.progresoHoy = 0;
            this.guardarEstado();
            
            if (this.falladoAyer && this.eventoAyer) {
                this.mostrarVideoFracasoAyer();
            } else {
                this.mostrarEventoHoy();
            }
        } else {
            console.log("📅 Mismo día. Evento actual:", this.eventoHoy?.titulo);
            if (this.eventoHoy && !this.completadoHoy) {
                this.mostrarBannerProgreso();
            }
        }
    },

    seleccionarEventoDelDia: function() {
        const indice = Math.floor(Math.random() * eventosDiarios.length);
        this.eventoHoy = { ...eventosDiarios[indice] };
        console.log("🎲 Evento de hoy:", this.eventoHoy.titulo);
    },

    mostrarVideoFracasoAyer: function() {
        if (!this.eventoAyer) return;
        
        this.mostrarModalVideoForzado({
            videoId: this.eventoAyer.videoFracaso,
            titulo: `❌ FALLASTE: ${this.eventoAyer.titulo}`,
            mensaje: "No cumpliste con el evento de ayer. Aquí están las consecuencias...",
            chicas: this.eventoAyer.chicas,
            afinidad: this.eventoAyer.afinidad.fracaso
        });
        
        this.falladoAyer = false;
        this.eventoAyer = null;
        this.guardarEstado();
        
        setTimeout(() => {
            this.cerrarModalVideo();
            this.mostrarEventoHoy();
        }, 5000);
    },

    mostrarEventoHoy: function() {
        if (!this.eventoHoy || this.completadoHoy) return;
        this.crearModalEvento();
    },

    crearModalEvento: function() {
        const existente = document.getElementById('modal-evento-diario');
        if (existente) existente.remove();
        
        const evento = this.eventoHoy;
        const chicasNombres = evento.chicas.map(id => {
            const nombres = { ichika: 'Ichika', nino: 'Nino', miku: 'Miku', yotsuba: 'Yotsuba', itsuki: 'Itsuki' };
            return nombres[id] || id;
        }).join(', ');
        
        const modal = document.createElement('div');
        modal.id = 'modal-evento-diario';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            backdrop-filter: blur(5px);
        `;
        
        modal.innerHTML = `
            <div style="background: linear-gradient(135deg, #2a1a3a, #1a1a2e); max-width: 500px; width: 90%; border-radius: 25px; padding: 40px; border: 3px solid #FF1493; box-shadow: 0 0 30px rgba(255, 20, 147, 0.5); animation: slideInEvento 0.5s ease;">
                <h2 style="color: #FFD166; margin-bottom: 20px; font-size: 2rem; text-align: center;">⚠️ EVENTO DIARIO</h2>
                <h3 style="color: #FF1493; margin-bottom: 15px; text-align: center;">${evento.titulo}</h3>
                <p style="color: white; margin-bottom: 20px; text-align: center; line-height: 1.6; opacity: 0.9;">${evento.descripcion}</p>
                
                <div style="background: rgba(255, 20, 147, 0.2); border-radius: 15px; padding: 20px; margin-bottom: 25px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <span style="color: #FFD166; font-weight: bold;">🎯 Objetivo:</span>
                        <span style="color: white;">${evento.cantidadRequerida} ${this.obtenerNombreRequisito(evento.tipoRequisito)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <span style="color: #FFD166; font-weight: bold;">👥 Involucra a:</span>
                        <span style="color: #FF69B4;">${chicasNombres}</span>
                    </div>
                    <div style="border-top: 1px dashed rgba(255,255,255,0.3); margin: 15px 0;"></div>
                    <div style="display: flex; justify-content: space-around;">
                        <div style="text-align: center;">
                            <div style="color: #4CAF50; font-size: 1.5rem;">✅</div>
                            <div style="color: #4CAF50; font-size: 0.9rem;">Éxito</div>
                            <div style="color: white; font-weight: bold;">+5 afinidad</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #F44336; font-size: 1.5rem;">❌</div>
                            <div style="color: #F44336; font-size: 0.9rem;">Fracaso</div>
                            <div style="color: white; font-weight: bold;">-30 afinidad</div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button id="btn-aceptar-evento" style="background: linear-gradient(135deg, #FF1493, #FF69B4); color: white; border: none; padding: 15px 40px; border-radius: 50px; font-weight: bold; font-size: 1.2rem; cursor: pointer; transition: transform 0.3s;">
                        ¡LO ACEPTARÉ!
                    </button>
                    <p style="color: rgba(255,255,255,0.5); margin-top: 15px; font-size: 0.9rem;">
                        Tendrás hasta las 3 AM para completarlo
                    </p>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        document.getElementById('btn-aceptar-evento').addEventListener('click', () => {
            modal.remove();
            this.mostrarBannerProgreso();
        });
    },

    mostrarBannerProgreso: function() {
        if (!this.eventoHoy || this.completadoHoy) return;
        
        const existente = document.getElementById('banner-evento-progreso');
        if (existente) existente.remove();
        
        const banner = document.createElement('div');
        banner.id = 'banner-evento-progreso';
        banner.style.cssText = `
            position: fixed;
            top: 80px;
            left: 20px;
            background: linear-gradient(135deg, rgba(255, 20, 147, 0.9), rgba(255, 105, 180, 0.9));
            color: white;
            padding: 15px 25px;
            border-radius: 15px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.4);
            z-index: 1000;
            border: 2px solid #FFD166;
            backdrop-filter: blur(5px);
            max-width: 300px;
            cursor: pointer;
            transition: transform 0.3s;
        `;
        
        const porcentaje = Math.min(100, Math.round((this.progresoHoy / this.eventoHoy.cantidadRequerida) * 100));
        
        banner.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <span style="font-size: 1.5rem;">⚠️</span>
                <span style="font-size: 1.1rem;">Evento Activo</span>
            </div>
            <div style="font-size: 0.9rem; margin-bottom: 10px; opacity: 0.9;">
                ${this.eventoHoy.titulo}
            </div>
            <div style="background: rgba(0,0,0,0.3); height: 10px; border-radius: 5px; overflow: hidden; margin-bottom: 5px;">
                <div style="background: #FFD166; width: ${porcentaje}%; height: 100%;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
                <span>Progreso: ${this.progresoHoy}/${this.eventoHoy.cantidadRequerida}</span>
                <span>${porcentaje}%</span>
            </div>
            <div style="margin-top: 10px; font-size: 0.8rem; text-align: center; opacity: 0.8;">
                Click para ver detalles
            </div>
        `;
        
        banner.addEventListener('click', () => {
            this.mostrarModalDetalleEvento();
        });
        
        document.body.appendChild(banner);
    },

    mostrarModalDetalleEvento: function() {
        if (!this.eventoHoy) return;
        
        const evento = this.eventoHoy;
        const chicasNombres = evento.chicas.map(id => {
            const nombres = { ichika: 'Ichika', nino: 'Nino', miku: 'Miku', yotsuba: 'Yotsuba', itsuki: 'Itsuki' };
            return nombres[id] || id;
        }).join(', ');
        
        const porcentaje = Math.min(100, Math.round((this.progresoHoy / evento.cantidadRequerida) * 100));
        
        const existente = document.getElementById('modal-detalle-evento');
        if (existente) existente.remove();
        
        const modal = document.createElement('div');
        modal.id = 'modal-detalle-evento';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2001;
            backdrop-filter: blur(5px);
        `;
        
        modal.innerHTML = `
            <div style="background: linear-gradient(135deg, #2a1a3a, #1a1a2e); max-width: 450px; width: 90%; border-radius: 20px; padding: 30px; border: 3px solid #FF1493;">
                <h3 style="color: #FFD166; margin-bottom: 20px; text-align: center;">${evento.titulo}</h3>
                
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 10px; padding: 15px; margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span style="color: #FFD166;">Progreso:</span>
                        <span style="color: white;">${this.progresoHoy}/${evento.cantidadRequerida}</span>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); height: 15px; border-radius: 8px; overflow: hidden;">
                        <div style="background: #FF1493; width: ${porcentaje}%; height: 100%;"></div>
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px; margin-bottom: 20px;">
                    <p style="margin: 5px 0;"><span style="color: #FFD166;">🎯 Requisito:</span> ${evento.cantidadRequerida} ${this.obtenerNombreRequisito(evento.tipoRequisito)}</p>
                    <p style="margin: 5px 0;"><span style="color: #FFD166;">👥 Chicas:</span> ${chicasNombres}</p>
                </div>
                
                <div style="display: flex; gap: 10px;">
                    <button id="btn-cerrar-detalle" style="flex: 1; background: rgba(255,255,255,0.1); color: white; border: 1px solid #FF1493; padding: 10px; border-radius: 10px; cursor: pointer;">
                        Cerrar
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        document.getElementById('btn-cerrar-detalle').addEventListener('click', () => {
            modal.remove();
        });
    },

    actualizarProgreso: function(tipo, cantidad = 1) {
        if (!this.eventoHoy || this.completadoHoy) return false;
        
        if (this.eventoHoy.tipoRequisito === tipo) {
            this.progresoHoy += cantidad;
            
            if (this.progresoHoy >= this.eventoHoy.cantidadRequerida) {
                this.completarEvento();
            }
            
            this.guardarEstado();
            this.actualizarBannerProgreso();
            return true;
        }
        return false;
    },

    completarEvento: function() {
        console.log("🎉 Evento completado con éxito!");
        this.completadoHoy = true;
        
        this.aplicarConsecuenciasEvento(this.eventoHoy, true);
        this.mostrarVideoExito();
        
        const banner = document.getElementById('banner-evento-progreso');
        if (banner) banner.remove();
        
        this.guardarEstado();
    },

    aplicarConsecuenciasEvento: function(evento, esExito) {
        if (!evento) return;
        
        const afinidadCambio = esExito ? evento.afinidad.exito : evento.afinidad.fracaso;
        
        console.log(`🎯 Aplicando consecuencias: ${esExito ? 'Éxito' : 'Fracaso'} (${afinidadCambio} afinidad)`);
        
        evento.chicas.forEach(chicaId => {
            if (typeof window.modificarAfinidadEvento === 'function') {
                window.modificarAfinidadEvento(chicaId, afinidadCambio);
            }
        });
    },

    mostrarVideoExito: function() {
        if (!this.eventoHoy) return;
        
        this.mostrarModalVideoForzado({
            videoId: this.eventoHoy.videoExito,
            titulo: `✅ ÉXITO: ${this.eventoHoy.titulo}`,
            mensaje: "¡Completaste el evento! Has ganado afinidad con las chicas.",
            chicas: this.eventoHoy.chicas,
            afinidad: this.eventoHoy.afinidad.exito
        });
    },

    mostrarModalVideoForzado: function(info) {
        const existente = document.getElementById('modal-video-forzado');
        if (existente) existente.remove();
        
        const modal = document.createElement('div');
        modal.id = 'modal-video-forzado';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3000;
        `;
        
        modal.innerHTML = `
            <div style="background: #1a1a2e; max-width: 800px; width: 95%; border-radius: 20px; padding: 20px; border: 3px solid #FF1493;">
                <h2 style="color: #FFD166; margin-bottom: 15px; text-align: center;">${info.titulo}</h2>
                <p style="color: white; text-align: center; margin-bottom: 20px; opacity: 0.8;">${info.mensaje}</p>
                
                <div style="margin: 20px 0;">
                    <iframe 
                        src="https://drive.google.com/file/d/${info.videoId}/preview"
                        width="100%"
                        height="400"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        style="border-radius: 10px;"
                    ></iframe>
                </div>
                
                <div style="text-align: center;">
                    <button id="btn-cerrar-video" style="background: linear-gradient(135deg, #FF1493, #FF69B4); color: white; border: none; padding: 10px 30px; border-radius: 50px; font-weight: bold; cursor: pointer;">
                        Cerrar
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        document.getElementById('btn-cerrar-video').addEventListener('click', () => {
            modal.remove();
        });
    },

    cerrarModalVideo: function() {
        const modal = document.getElementById('modal-video-forzado');
        if (modal) modal.remove();
    },

    actualizarBannerProgreso: function() {
        const banner = document.getElementById('banner-evento-progreso');
        if (banner && this.eventoHoy && !this.completadoHoy) {
            const porcentaje = Math.min(100, Math.round((this.progresoHoy / this.eventoHoy.cantidadRequerida) * 100));
            
            banner.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <span style="font-size: 1.5rem;">⚠️</span>
                    <span style="font-size: 1.1rem;">Evento Activo</span>
                </div>
                <div style="font-size: 0.9rem; margin-bottom: 10px; opacity: 0.9;">
                    ${this.eventoHoy.titulo}
                </div>
                <div style="background: rgba(0,0,0,0.3); height: 10px; border-radius: 5px; overflow: hidden; margin-bottom: 5px;">
                    <div style="background: #FFD166; width: ${porcentaje}%; height: 100%;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
                    <span>Progreso: ${this.progresoHoy}/${this.eventoHoy.cantidadRequerida}</span>
                    <span>${porcentaje}%</span>
                </div>
            `;
        }
    },

    obtenerNombreRequisito: function(tipo) {
        const nombres = {
            'mazos_100': 'mazos al 100%',
            'palabras_practicadas': 'palabras practicadas',
            'dinero_gastado': 'soles gastados'
        };
        return nombres[tipo] || tipo;
    },

    getEventoActual: function() {
        return this.eventoHoy;
    },

    isEventoActivo: function() {
        return this.eventoHoy && !this.completadoHoy;
    }
};

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        sistemaEventos.iniciar();
    }, 500);
});

// Hacer accesible globalmente
window.sistemaEventos = sistemaEventos;
window.actualizarProgresoEvento = (tipo, cantidad) => sistemaEventos.actualizarProgreso(tipo, cantidad);
