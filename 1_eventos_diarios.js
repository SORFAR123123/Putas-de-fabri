// ================================================
// SISTEMA DE EVENTOS DIARIOS - INTEGRADO CON RPG
// Aparece un evento aleatorio cada día en la primera visita.
// Modifica la afinidad en quintillizasRPG directamente.
// ================================================

// Lista de 10 eventos con requisitos y consecuencias
const EVENTOS_DIARIOS = [
    { // Evento 1 - Solo Nino
        id: 'nino_ex',
        titulo: '😤 El ex de Nino apareció',
        descripcion: 'Mientras estudiabas en la cafetería, ves a Nino hablando acaloradamente con un chico. ¡Es su ex! Te mira y te hace una seña para que te acerques. Necesitas demostrarle que eres mejor que él completando 5 mazos al 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
        personajes: ['nino'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 5,
        videoExito: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        videoFracaso: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        afinidadExito: 15,
        afinidadFracaso: -30,
        dineroRecompensa: 50
    },
    { // Evento 2 - Solo Ichika
        id: 'ichika_trabajo',
        titulo: '💼 Ichika tiene problemas en el trabajo',
        descripcion: 'Ichika está agotada por el trabajo y necesita que la ayudes a estudiar para un examen importante. Ayúdala completando 3 mazos al 100% para que pueda pasar la materia.',
        imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        personajes: ['ichika'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 3,
        videoExito: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        videoFracaso: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        afinidadExito: 10,
        afinidadFracaso: -25,
        dineroRecompensa: 40
    },
    { // Evento 3 - Solo Miku
        id: 'miku_concierto',
        titulo: '🎶 Miku perdió las entradas',
        descripcion: 'Miku tiene un concierto de música tradicional hoy, pero perdió las entradas. Necesita que la ayudes a buscarlas completando 4 mazos al 100%. ¡No la dejes plantada!',
        imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
        personajes: ['miku'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 4,
        videoExito: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        videoFracaso: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        afinidadExito: 12,
        afinidadFracaso: -28,
        dineroRecompensa: 45
    },
    { // Evento 4 - Solo Yotsuba
        id: 'yotsuba_carrera',
        titulo: '🏃‍♀️ Yotsuba necesita apoyo',
        descripcion: 'Yotsuba tiene una carrera importante mañana y está nerviosa. Quiere que estudien juntos para calmarse. Completa 2 mazos al 100% para demostrarle que puedes con todo.',
        imagen: 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small',
        personajes: ['yotsuba'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 2,
        videoExito: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        videoFracaso: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        afinidadExito: 8,
        afinidadFracaso: -20,
        dineroRecompensa: 30
    },
    { // Evento 5 - Solo Itsuki
        id: 'itsuki_buffet',
        titulo: '🍣 Itsuki quiere buffet libre',
        descripcion: 'Itsuki quiere ir a un buffet libre pero le da vergüenza ir sola. Prometiste acompañarla si completas 3 mazos al 100% hoy. ¡No la decepciones!',
        imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
        personajes: ['itsuki'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 3,
        videoExito: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        videoFracaso: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        afinidadExito: 10,
        afinidadFracaso: -25,
        dineroRecompensa: 40
    },
    { // Evento 6 - Dúo Nino e Ichika
        id: 'duo_nino_ichika_discusion',
        titulo: '👯‍♀️ Nino e Ichika discuten',
        descripcion: 'Nino e Ichika están discutiendo por quién cocinará hoy. Tienes que mediar para que se reconcilien. Demuestra tu habilidad completando 6 mazos al 100%.',
        imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        personajes: ['nino', 'ichika'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 6,
        videoExito: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        videoFracaso: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        afinidadExito: 12, // +12 para cada una
        afinidadFracaso: -20, // -20 para cada una
        dineroRecompensa: 60
    },
    { // Evento 7 - Dúo Miku y Yotsuba
        id: 'duo_miku_yotsuba_estudio',
        titulo: '📚 Miku y Yotsuba necesitan ayuda',
        descripcion: 'Miku no entiende historia y Yotsuba quiere ayudarle pero no sabe cómo. Completa 4 mazos al 100% para darles material de estudio.',
        imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
        personajes: ['miku', 'yotsuba'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 4,
        videoExito: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        videoFracaso: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        afinidadExito: 10,
        afinidadFracaso: -18,
        dineroRecompensa: 50
    },
    { // Evento 8 - Trío (Nino, Miku, Itsuki)
        id: 'trio_examen',
        titulo: '📝 Examen sorpresa',
        descripcion: 'Las profesoras anunciaron un examen sorpresa. Nino, Miku e Itsuki entran en pánico. Necesitan que las ayudes a repasar completando 8 mazos al 100%.',
        imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
        personajes: ['nino', 'miku', 'itsuki'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 8,
        videoExito: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        videoFracaso: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        afinidadExito: 15,
        afinidadFracaso: -25,
        dineroRecompensa: 80
    },
    { // Evento 9 - Cuarteto (Ichika, Nino, Miku, Yotsuba)
        id: 'cuarteto_festival',
        titulo: '🎪 Festival escolar',
        descripcion: 'El festival escolar está cerca y 4 de las hermanas necesitan ayuda para preparar el stand. Completa 10 mazos al 100% para que todo salga perfecto.',
        imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        personajes: ['ichika', 'nino', 'miku', 'yotsuba'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        videoFracaso: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        afinidadExito: 18,
        afinidadFracaso: -30,
        dineroRecompensa: 100
    },
    { // Evento 10 - QUINTETO (TODAS)
        id: 'quinteto_viaje',
        titulo: '👯‍♀️👯‍♀️👯‍♀️👯‍♀️👯‍♀️ Viaje de hermanas',
        descripcion: '¡Las 5 hermanas quieren hacer un viaje juntas! Te invitaron, pero debes demostrar que eres responsable completando 12 mazos al 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
        personajes: ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 12,
        videoExito: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        videoFracaso: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        afinidadExito: 25,
        afinidadFracaso: -40,
        dineroRecompensa: 150
    }
];

// Sistema de eventos diarios
const EventosDiarios = {
    // Obtener la fecha actual en formato YYYY-MM-DD
    obtenerFechaActual: function() {
        const fecha = new Date();
        return `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`;
    },

    // Verificar si ya se mostró un evento hoy
    verificarEventoHoy: function() {
        const ultimoEvento = localStorage.getItem('evento_diario_ultimo');
        const fechaHoy = this.obtenerFechaActual();
        
        if (ultimoEvento === fechaHoy) {
            return false; // Ya hubo evento hoy
        }
        return true; // Es primera vez hoy
    },

    // Seleccionar un evento aleatorio (sin repetir hasta que se hayan visto todos)
    seleccionarEventoAleatorio: function() {
        // Obtener IDs de eventos ya vistos
        const eventosVistos = JSON.parse(localStorage.getItem('eventos_diarios_vistos') || '[]');
        
        // Filtrar eventos no vistos
        const eventosDisponibles = EVENTOS_DIARIOS.filter(e => !eventosVistos.includes(e.id));
        
        // Si ya vio todos, reiniciar lista
        if (eventosDisponibles.length === 0) {
            localStorage.removeItem('eventos_diarios_vistos');
            return this.seleccionarEventoAleatorio();
        }
        
        // Seleccionar uno aleatorio
        const indice = Math.floor(Math.random() * eventosDisponibles.length);
        const evento = eventosDisponibles[indice];
        
        // Guardar como visto
        eventosVistos.push(evento.id);
        localStorage.setItem('eventos_diarios_vistos', JSON.stringify(eventosVistos));
        
        return evento;
    },

    // Guardar el evento de hoy
    guardarEventoHoy: function(evento) {
        localStorage.setItem('evento_diario_ultimo', this.obtenerFechaActual());
        localStorage.setItem('evento_diario_actual', JSON.stringify(evento));
        localStorage.setItem('evento_diario_completado', 'false');
    },

    // Obtener el evento de hoy
    obtenerEventoHoy: function() {
        const eventoGuardado = localStorage.getItem('evento_diario_actual');
        return eventoGuardado ? JSON.parse(eventoGuardado) : null;
    },

    // Marcar evento como completado/fallado
    marcarEventoProcesado: function(completado) {
        localStorage.setItem('evento_diario_completado', completado ? 'true' : 'false');
    },

    // Verificar si el evento de hoy ya fue procesado
    eventoYaProcesado: function() {
        return localStorage.getItem('evento_diario_completado') === 'true';
    },

    // Verificar si se cumplió el requisito
    verificarRequisito: function(evento) {
        if (evento.tipoRequisito === 'mazos_completados') {
            const estadisticas = sistemaEconomia.obtenerEstadisticas();
            return estadisticas.completados100 >= evento.cantidadRequerida;
        }
        return false;
    },

    // Aplicar consecuencias del evento
    aplicarConsecuencias: function(evento, exito) {
        if (typeof quintillizasRPG === 'undefined') {
            console.error('RPG no disponible para aplicar consecuencias');
            return false;
        }

        // Aplicar afinidad a cada personaje involucrado
        evento.personajes.forEach(personajeId => {
            if (quintillizasRPG.datosPersonajes[personajeId]) {
                const afinidadActual = quintillizasRPG.datosPersonajes[personajeId].afinidad;
                const cambio = exito ? evento.afinidadExito : evento.afinidadFracaso;
                const nuevaAfinidad = Math.max(-100, Math.min(200, afinidadActual + cambio));
                
                quintillizasRPG.datosPersonajes[personajeId].afinidad = nuevaAfinidad;
                
                console.log(`🎯 Evento: ${personajeId} afinidad ${cambio > 0 ? '+' : ''}${cambio} → ${nuevaAfinidad}`);
            }
        });

        // Dar dinero si fue éxito
        if (exito && evento.dineroRecompensa > 0) {
            sistemaEconomia.agregarDinero(evento.dineroRecompensa);
        }

        // Guardar cambios en RPG
        quintillizasRPG.guardarDatosPersonajes();
        
        return true;
    },

    // Mostrar el video correspondiente
    mostrarVideoEvento: function(evento, exito) {
        const videoId = exito ? evento.videoExito : evento.videoFracaso;
        
        // Crear reproductor de video
        const html = `
            <div class="reproductor-container" style="max-width: 800px; margin: 0 auto; padding: 30px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${evento.imagen}" alt="${evento.titulo}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 4px solid #FF1493; margin-bottom: 15px;">
                    <h2 style="color: #FF1493; margin-bottom: 10px;">
                        ${exito ? '✅ ¡Evento Superado!' : '❌ Evento Fallido'}
                    </h2>
                    <h3 style="color: #FFD166; margin-bottom: 20px;">${evento.titulo}</h3>
                </div>

                <div class="video-wrapper" style="margin: 30px 0;">
                    <iframe
                        src="https://drive.google.com/file/d/${videoId}/preview"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        style="width: 100%; height: 400px; border-radius: 15px; border: 3px solid #FF1493;"
                    ></iframe>
                </div>

                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 20px; margin: 30px 0;">
                    <h4 style="color: #FFD166; margin-bottom: 15px;">📊 Consecuencias del evento</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        ${evento.personajes.map(p => {
                            const personaje = quintillizasRPG?.datosPersonajes[p];
                            return `
                                <div style="text-align: center;">
                                    <div style="color: ${personaje?.color || '#FF1493'};">${personaje?.nombre?.split(' ')[0] || p}</div>
                                    <div style="font-size: 1.3rem; font-weight: bold; color: ${exito ? '#4CAF50' : '#F44336'};">
                                        ${exito ? '+' : ''}${exito ? evento.afinidadExito : evento.afinidadFracaso}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                        ${exito && evento.dineroRecompensa > 0 ? `
                            <div style="text-align: center;">
                                <div style="color: #FFD166;">💰 Dinero</div>
                                <div style="font-size: 1.3rem; font-weight: bold; color: #FFD166;">+${evento.dineroRecompensa}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                    <button class="card-button" onclick="EventosDiarios.cerrarVideoEvento()" 
                            style="background: linear-gradient(135deg, #FF1493, #8A5AF7); padding: 15px 30px; font-size: 1.2rem;">
                        ↩️ Volver al Inicio
                    </button>
                </div>
            </div>
        `;

        // Mostrar en manga-section
        const mangaSection = document.getElementById('manga-section');
        mangaSection.style.display = 'block';
        mangaSection.innerHTML = html;
        
        // Ocultar header y otras secciones
        document.querySelector('.header').style.display = 'none';
        document.querySelector('.especial-section').style.display = 'none';
        document.querySelector('.additional-section').style.display = 'none';
    },

    // Cerrar video y volver al inicio
    cerrarVideoEvento: function() {
        document.getElementById('manga-section').style.display = 'none';
        mostrarHeader();
        
        // Recargar página principal para actualizar afinidades
        if (typeof quintillizasRPG !== 'undefined' && quintillizasRPG.personajeSeleccionado) {
            // Si hay personaje seleccionado, actualizar vista
            quintillizasRPG.actualizarVistaConPersonaje();
        }
    },

    // Iniciar evento diario (llamar al cargar la página)
    iniciarEventoDiario: function() {
        // Verificar si es primera vez hoy
        if (!this.verificarEventoHoy()) {
            console.log('📅 Ya hubo evento hoy');
            
            // Si ya hubo evento pero no se ha mostrado el resultado, mostrarlo
            const evento = this.obtenerEventoHoy();
            const yaProcesado = this.eventoYaProcesado();
            
            if (evento && !yaProcesado) {
                // Verificar si se cumplió el requisito
                const exito = this.verificarRequisito(evento);
                
                // Aplicar consecuencias
                this.aplicarConsecuencias(evento, exito);
                
                // Marcar como procesado
                this.marcarEventoProcesado(true);
                
                // Mostrar video
                setTimeout(() => {
                    this.mostrarVideoEvento(evento, exito);
                }, 1000);
            }
            return;
        }

        // Seleccionar evento aleatorio
        const evento = this.seleccionarEventoAleatorio();
        
        // Guardar evento de hoy
        this.guardarEventoHoy(evento);
        
        // Mostrar notificación de evento
        this.mostrarNotificacionEvento(evento);
    },

    // Mostrar notificación de evento nuevo
    mostrarNotificacionEvento: function(evento) {
        const personajesStr = evento.personajes.map(p => {
            const nombres = {
                'ichika': 'Ichika', 'nino': 'Nino', 'miku': 'Miku', 'yotsuba': 'Yotsuba', 'itsuki': 'Itsuki'
            };
            return nombres[p] || p;
        }).join(' • ');

        const html = `
            <div id="evento-diario-notificacion" style="position: fixed; top: 100px; right: 20px; max-width: 350px; background: linear-gradient(135deg, #FF1493, #8A5AF7); border-radius: 20px; padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 3px solid white; z-index: 2000; animation: slideIn 0.5s ease;">
                <div style="display: flex; gap: 15px; align-items: center;">
                    <img src="${evento.imagen}" alt="Evento" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid white;">
                    <div>
                        <h3 style="color: white; margin: 0 0 5px 0;">📅 EVENTO DIARIO</h3>
                        <p style="color: #FFD166; font-weight: bold; margin: 0;">${evento.titulo}</p>
                    </div>
                </div>
                
                <p style="color: white; margin: 15px 0; font-size: 0.95rem; line-height: 1.4;">
                    ${evento.descripcion}
                </p>
                
                <div style="background: rgba(0,0,0,0.3); border-radius: 10px; padding: 12px; margin: 15px 0;">
                    <div style="color: #FFD166; font-weight: bold; margin-bottom: 5px;">🎯 Requisito:</div>
                    <div style="color: white;">Completa ${evento.cantidadRequerida} mazos al 100% hoy</div>
                    <div style="color: #FFD166; margin-top: 8px; font-size: 0.9rem;">
                        Involucra: ${personajesStr}
                    </div>
                </div>
                
                <div style="display: flex; gap: 10px;">
                    <div style="flex: 1; background: rgba(76, 175, 80, 0.3); border-radius: 8px; padding: 8px; text-align: center;">
                        <div style="color: #4CAF50; font-weight: bold;">✅ Éxito</div>
                        <div style="color: white;">+${evento.afinidadExito} afinidad c/u</div>
                        ${evento.dineroRecompensa > 0 ? `<div style="color: #FFD166;">+${evento.dineroRecompensa}💰</div>` : ''}
                    </div>
                    <div style="flex: 1; background: rgba(244, 67, 54, 0.3); border-radius: 8px; padding: 8px; text-align: center;">
                        <div style="color: #F44336; font-weight: bold;">❌ Fracaso</div>
                        <div style="color: white;">${evento.afinidadFracaso} afinidad c/u</div>
                    </div>
                </div>
                
                <button onclick="EventosDiarios.cerrarNotificacionEvento()" 
                        style="width: 100%; margin-top: 15px; padding: 10px; background: white; color: #FF1493; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">
                    Entendido, ¡lo haré!
                </button>
            </div>
        `;

        // Eliminar notificación anterior si existe
        const anterior = document.getElementById('evento-diario-notificacion');
        if (anterior) anterior.remove();

        // Agregar al body
        document.body.insertAdjacentHTML('beforeend', html);
    },

    // Cerrar notificación de evento
    cerrarNotificacionEvento: function() {
        const notif = document.getElementById('evento-diario-notificacion');
        if (notif) {
            notif.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notif.remove(), 300);
        }
    }
};

// Inicializar eventos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un poco para que carguen los demás sistemas
    setTimeout(() => {
        if (typeof sistemaEconomia !== 'undefined' && typeof quintillizasRPG !== 'undefined') {
            EventosDiarios.iniciarEventoDiario();
        }
    }, 1500);
});

// Exponer globalmente
window.EventosDiarios = EventosDiarios;
