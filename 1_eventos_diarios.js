// ================================================
// SISTEMA DE EVENTOS DIARIOS - VERSIÓN MODAL GRANDE
// Aparece un evento aleatorio cada día en un modal que ocupa casi toda la pantalla
// TODOS LOS EVENTOS PIDEN SOLO 1 MAZO AL 100% (PARA TESTEO)
// ================================================

// Lista de 10 eventos con requisitos y consecuencias
const EVENTOS_DIARIOS = [
    { // Evento 1 - Solo Nino
        id: 'nino_ex',
        titulo: '😤 ¡EL EX DE NINO APARECIÓ!',
        descripcion: 'Mientras estudiabas en la cafetería, ves a Nino hablando acaloradamente con un chico. ¡Es su ex! Te mira y te hace una seña para que te acerques. Necesitas demostrarle que eres mejor que él completando 1 MAZO AL 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
        personajes: ['nino'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
        videoExito: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        videoFracaso: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        afinidadExito: 15,
        afinidadFracaso: -30,
        dineroRecompensa: 50
    },
    { // Evento 2 - Solo Ichika
        id: 'ichika_trabajo',
        titulo: '💼 ¡ICHIKA ESTÁ AGOTADA!',
        descripcion: 'Ichika está agotada por el trabajo y necesita que la ayudes a estudiar para un examen importante. Si no completas 1 MAZO AL 100% hoy, perderá el año.',
        imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        personajes: ['ichika'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
        videoExito: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        videoFracaso: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        afinidadExito: 10,
        afinidadFracaso: -25,
        dineroRecompensa: 40
    },
    { // Evento 3 - Solo Miku
        id: 'miku_concierto',
        titulo: '🎶 ¡MIKU PERDIÓ LAS ENTRADAS!',
        descripcion: 'Miku tiene un concierto de música tradicional hoy, pero perdió las entradas. Necesita que la ayudes a buscarlas. Completa 1 MAZO AL 100% hoy. ¡No la dejes plantada!',
        imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
        personajes: ['miku'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
        videoExito: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        videoFracaso: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        afinidadExito: 12,
        afinidadFracaso: -28,
        dineroRecompensa: 45
    },
    { // Evento 4 - Solo Yotsuba
        id: 'yotsuba_carrera',
        titulo: '🏃‍♀️ ¡YOTSUBA NECESITA APOYO!',
        descripcion: 'Yotsuba tiene una carrera importante mañana y está nerviosa. Quiere que estudien juntos para calmarse. Completa 1 MAZO AL 100% hoy para demostrarle que puedes con todo.',
        imagen: 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small',
        personajes: ['yotsuba'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
        videoExito: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        videoFracaso: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        afinidadExito: 8,
        afinidadFracaso: -20,
        dineroRecompensa: 30
    },
    { // Evento 5 - Solo Itsuki
        id: 'itsuki_buffet',
        titulo: '🍣 ¡ITSUKI QUIERE BUFFET LIBRE!',
        descripcion: 'Itsuki quiere ir a un buffet libre pero le da vergüenza ir sola. Prometiste acompañarla si completas 1 MAZO AL 100% hoy. ¡No la decepciones!',
        imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
        personajes: ['itsuki'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
        videoExito: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        videoFracaso: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        afinidadExito: 10,
        afinidadFracaso: -25,
        dineroRecompensa: 40
    },
    { // Evento 6 - Dúo Nino e Ichika
        id: 'duo_nino_ichika_discusion',
        titulo: '👯‍♀️ ¡NINO E ICHIKA DISCUTEN!',
        descripcion: 'Nino e Ichika están discutiendo por quién cocinará hoy. Tienes que mediar para que se reconcilien. Demuestra tu habilidad completando 1 MAZO AL 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        personajes: ['nino', 'ichika'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
        videoExito: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        videoFracaso: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        afinidadExito: 12,
        afinidadFracaso: -20,
        dineroRecompensa: 60
    },
    { // Evento 7 - Dúo Miku y Yotsuba
        id: 'duo_miku_yotsuba_estudio',
        titulo: '📚 ¡MIKU Y YOTSUBA NECESITAN AYUDA!',
        descripcion: 'Miku no entiende historia y Yotsuba quiere ayudarle pero no sabe cómo. Completa 1 MAZO AL 100% hoy para darles material de estudio.',
        imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
        personajes: ['miku', 'yotsuba'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
        videoExito: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        videoFracaso: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        afinidadExito: 10,
        afinidadFracaso: -18,
        dineroRecompensa: 50
    },
    { // Evento 8 - Trío (Nino, Miku, Itsuki)
        id: 'trio_examen',
        titulo: '📝 ¡EXAMEN SORPRESA!',
        descripcion: 'Las profesoras anunciaron un examen sorpresa. Nino, Miku e Itsuki entran en pánico. Necesitan que las ayudes a repasar completando 1 MAZO AL 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
        personajes: ['nino', 'miku', 'itsuki'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
        videoExito: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        videoFracaso: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        afinidadExito: 15,
        afinidadFracaso: -25,
        dineroRecompensa: 80
    },
    { // Evento 9 - Cuarteto (Ichika, Nino, Miku, Yotsuba)
        id: 'cuarteto_festival',
        titulo: '🎪 ¡FESTIVAL ESCOLAR!',
        descripcion: 'El festival escolar está cerca y 4 de las hermanas necesitan ayuda para preparar el stand. Completa 1 MAZO AL 100% hoy para que todo salga perfecto.',
        imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        personajes: ['ichika', 'nino', 'miku', 'yotsuba'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
        videoExito: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        videoFracaso: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        afinidadExito: 18,
        afinidadFracaso: -30,
        dineroRecompensa: 100
    },
    { // Evento 10 - QUINTETO (TODAS)
        id: 'quinteto_viaje',
        titulo: '👯‍♀️👯‍♀️👯‍♀️👯‍♀️👯‍♀️ ¡VIAJE DE HERMANAS!',
        descripcion: '¡Las 5 hermanas quieren hacer un viaje juntas! Te invitaron, pero debes demostrar que eres responsable completando 1 MAZO AL 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
        personajes: ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 1, // SOLO 1 PARA TESTEO
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
        localStorage.setItem('evento_diario_resultado_mostrado', 'false');
    },

    // Obtener el evento de hoy
    obtenerEventoHoy: function() {
        const eventoGuardado = localStorage.getItem('evento_diario_actual');
        return eventoGuardado ? JSON.parse(eventoGuardado) : null;
    },

    // Marcar evento como procesado
    marcarEventoProcesado: function() {
        localStorage.setItem('evento_diario_completado', 'true');
    },

    // Verificar si el evento de hoy ya fue procesado
    eventoYaProcesado: function() {
        return localStorage.getItem('evento_diario_completado') === 'true';
    },

    // Marcar resultado como mostrado
    marcarResultadoMostrado: function() {
        localStorage.setItem('evento_diario_resultado_mostrado', 'true');
    },

    // Verificar si el resultado ya fue mostrado
    resultadoYaMostrado: function() {
        return localStorage.getItem('evento_diario_resultado_mostrado') === 'true';
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

    // Mostrar MODAL GRANDE del evento
    mostrarModalEvento: function(evento) {
        // Crear overlay oscuro
        const overlay = document.createElement('div');
        overlay.id = 'evento-modal-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.5s ease;
        `;

        // Crear modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            width: 90%;
            max-width: 900px;
            max-height: 90vh;
            overflow-y: auto;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border-radius: 30px;
            padding: 30px;
            border: 4px solid #FF1493;
            box-shadow: 0 0 50px rgba(255, 20, 147, 0.5);
            position: relative;
            animation: zoomIn 0.5s ease;
        `;

        // Construir nombres de personajes
        const nombresPersonajes = evento.personajes.map(p => {
            const nombres = {
                'ichika': 'Ichika', 'nino': 'Nino', 'miku': 'Miku', 
                'yotsuba': 'Yotsuba', 'itsuki': 'Itsuki'
            };
            return nombres[p] || p;
        }).join(' • ');

        // Colores para éxito/fracaso
        const colorExito = '#4CAF50';
        const colorFracaso = '#F44336';

        // HTML del modal
        modal.innerHTML = `
            <div style="text-align: center;">
                <!-- Botón cerrar -->
                <button onclick="EventosDiarios.cerrarModalEvento()" style="
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    font-size: 30px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                    border: 2px solid white;
                ">✕</button>

                <!-- Título -->
                <h1 style="
                    color: #FFD166;
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    text-shadow: 0 0 10px #FF1493;
                ">📅 ¡EVENTO DIARIO!</h1>

                <!-- Imagen GRANDE -->
                <div style="
                    width: 250px;
                    height: 250px;
                    margin: 20px auto;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 5px solid #FF1493;
                    box-shadow: 0 0 30px #FF1493;
                ">
                    <img src="${evento.imagen}" alt="${evento.titulo}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>

                <!-- Título del evento -->
                <h2 style="
                    color: #FF1493;
                    font-size: 2rem;
                    margin: 20px 0;
                    text-transform: uppercase;
                ">${evento.titulo}</h2>

                <!-- Descripción -->
                <p style="
                    color: white;
                    font-size: 1.2rem;
                    line-height: 1.6;
                    margin: 20px 0;
                    padding: 0 20px;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                ">${evento.descripcion}</p>

                <!-- Personajes involucrados -->
                <div style="
                    background: rgba(255, 20, 147, 0.2);
                    padding: 15px;
                    border-radius: 50px;
                    display: inline-block;
                    margin: 20px auto;
                    font-size: 1.3rem;
                    border: 2px solid #FF1493;
                ">
                    👥 ${nombresPersonajes}
                </div>

                <!-- Requisito -->
                <div style="
                    background: linear-gradient(135deg, #5864F5, #8A5AF7);
                    padding: 20px;
                    border-radius: 20px;
                    margin: 25px 0;
                    font-size: 1.5rem;
                    border: 3px solid white;
                ">
                    🎯 REQUISITO: Completa ${evento.cantidadRequerida} MAZO${evento.cantidadRequerida > 1 ? 'S' : ''} al 100% hoy
                </div>

                <!-- Recompensas y castigos -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin: 30px 0;
                ">
                    <!-- Éxito -->
                    <div style="
                        background: rgba(76, 175, 80, 0.2);
                        border: 3px solid ${colorExito};
                        border-radius: 20px;
                        padding: 20px;
                    ">
                        <h3 style="color: ${colorExito}; font-size: 1.8rem; margin-bottom: 15px;">✅ ÉXITO</h3>
                        ${evento.personajes.map(p => {
                            const nombre = p.charAt(0).toUpperCase() + p.slice(1);
                            return `<div style="color: white; font-size: 1.2rem; margin: 5px 0;">${nombre}: +${evento.afinidadExito} afinidad</div>`;
                        }).join('')}
                        <div style="color: #FFD166; font-size: 1.3rem; margin-top: 15px;">💰 +${evento.dineroRecompensa} soles</div>
                    </div>

                    <!-- Fracaso -->
                    <div style="
                        background: rgba(244, 67, 54, 0.2);
                        border: 3px solid ${colorFracaso};
                        border-radius: 20px;
                        padding: 20px;
                    ">
                        <h3 style="color: ${colorFracaso}; font-size: 1.8rem; margin-bottom: 15px;">❌ FRACASO</h3>
                        ${evento.personajes.map(p => {
                            const nombre = p.charAt(0).toUpperCase() + p.slice(1);
                            return `<div style="color: white; font-size: 1.2rem; margin: 5px 0;">${nombre}: ${evento.afinidadFracaso} afinidad</div>`;
                        }).join('')}
                    </div>
                </div>

                <!-- Botón de entendido -->
                <button onclick="EventosDiarios.cerrarModalEvento()" style="
                    background: linear-gradient(135deg, #FF1493, #8A5AF7);
                    color: white;
                    font-size: 1.5rem;
                    padding: 15px 50px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    font-weight: bold;
                    margin: 20px 0;
                    border: 3px solid white;
                    box-shadow: 0 0 20px #FF1493;
                    transition: all 0.3s;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    ¡ENTENDIDO, LO HARÉ!
                </button>

                <!-- Nota -->
                <p style="color: rgba(255,255,255,0.5); font-size: 0.9rem; margin-top: 10px;">
                    Vuelve mañana para ver el resultado del evento
                </p>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Agregar estilos de animación si no existen
        if (!document.getElementById('evento-modal-styles')) {
            const style = document.createElement('style');
            style.id = 'evento-modal-styles';
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes zoomIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
    },

    // Cerrar modal
    cerrarModalEvento: function() {
        const overlay = document.getElementById('evento-modal-overlay');
        if (overlay) {
            overlay.remove();
        }
    },

    // Mostrar resultado del evento (video)
    mostrarResultadoEvento: function(evento, exito) {
        const videoId = exito ? evento.videoExito : evento.videoFracaso;
        
        // Crear overlay para el resultado
        const overlay = document.createElement('div');
        overlay.id = 'evento-resultado-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.5s ease;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            width: 90%;
            max-width: 900px;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border-radius: 30px;
            padding: 30px;
            border: 4px solid ${exito ? '#4CAF50' : '#F44336'};
            box-shadow: 0 0 50px ${exito ? '#4CAF50' : '#F44336'};
        `;

        // Calcular cambios de afinidad para mostrar
        const cambiosHTML = evento.personajes.map(p => {
            const nombre = p.charAt(0).toUpperCase() + p.slice(1);
            const cambio = exito ? evento.afinidadExito : evento.afinidadFracaso;
            return `<div style="color: white; font-size: 1.2rem;">${nombre}: ${cambio > 0 ? '+' : ''}${cambio}</div>`;
        }).join('');

        modal.innerHTML = `
            <div style="text-align: center;">
                <h1 style="
                    color: ${exito ? '#4CAF50' : '#F44336'};
                    font-size: 3rem;
                    margin-bottom: 20px;
                ">${exito ? '✅ ¡EVENTO SUPERADO!' : '❌ EVENTO FALLIDO'}</h1>

                <h2 style="color: #FFD166; font-size: 2rem; margin-bottom: 30px;">${evento.titulo}</h2>

                <!-- Video -->
                <div style="margin: 30px 0; border: 4px solid ${exito ? '#4CAF50' : '#F44336'}; border-radius: 20px; overflow: hidden;">
                    <iframe
                        src="https://drive.google.com/file/d/${videoId}/preview"
                        width="100%"
                        height="400"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        style="display: block;"
                    ></iframe>
                </div>

                <!-- Consecuencias -->
                <div style="
                    background: rgba(0,0,0,0.5);
                    border-radius: 20px;
                    padding: 20px;
                    margin: 30px 0;
                ">
                    <h3 style="color: #FFD166; font-size: 1.5rem; margin-bottom: 20px;">📊 CONSECUENCIAS</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h4 style="color: #FF1493;">💖 Afinidad</h4>
                            ${cambiosHTML}
                        </div>
                        ${exito && evento.dineroRecompensa > 0 ? `
                            <div>
                                <h4 style="color: #FFD166;">💰 Dinero</h4>
                                <div style="color: white; font-size: 1.5rem;">+${evento.dineroRecompensa}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <button onclick="EventosDiarios.cerrarResultadoEvento()" style="
                    background: linear-gradient(135deg, ${exito ? '#4CAF50' : '#F44336'}, #8A5AF7);
                    color: white;
                    font-size: 1.3rem;
                    padding: 15px 40px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    font-weight: bold;
                    border: 3px solid white;
                ">
                    ↩️ VOLVER AL INICIO
                </button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    },

    // Cerrar resultado
    cerrarResultadoEvento: function() {
        const overlay = document.getElementById('evento-resultado-overlay');
        if (overlay) {
            overlay.remove();
        }
        // Recargar la página principal para actualizar afinidades
        location.reload();
    },

    // Iniciar evento diario
    iniciarEventoDiario: function() {
        // Verificar si es primera vez hoy
        if (!this.verificarEventoHoy()) {
            console.log('📅 Ya hubo evento hoy');
            
            // Verificar si hay que mostrar resultado
            const evento = this.obtenerEventoHoy();
            const yaProcesado = this.eventoYaProcesado();
            const resultadoMostrado = this.resultadoYaMostrado();
            
            if (evento && !yaProcesado && !resultadoMostrado) {
                // Verificar si se cumplió el requisito
                const exito = this.verificarRequisito(evento);
                
                // Aplicar consecuencias
                this.aplicarConsecuencias(evento, exito);
                
                // Marcar como procesado
                this.marcarEventoProcesado();
                
                // Mostrar resultado
                setTimeout(() => {
                    this.mostrarResultadoEvento(evento, exito);
                    this.marcarResultadoMostrado();
                }, 1000);
            }
            return;
        }

        // Es primera vez hoy - seleccionar evento y mostrar modal
        const evento = this.seleccionarEventoAleatorio();
        this.guardarEventoHoy(evento);
        
        // Mostrar modal después de que cargue la página
        setTimeout(() => {
            this.mostrarModalEvento(evento);
        }, 500);
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
