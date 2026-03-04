// ================================================
// SISTEMA DE EVENTOS DIARIOS - VERSIÓN CON NTR 50/50
// Éxito inmediato, fracaso al día siguiente + Evento NTR de Uzaki
// ================================================

// ================================================
// EVENTO ESPECIAL NTR - MAMÁ DE UZAKI (SOLO 1)
// ================================================
const EVENTOS_NTR = [
    {
        id: 'ntr_uzaki_madre',
        titulo: '🔥 ¡LA MADRE DE UZAKI APARECIÓ!',
        descripcion: 'La madre de Uzaki te ha invitado a su casa "para tomar un té". Está sola, coqueta y muy insistente. Sabes que si aceptas, las quintillizas se enterarán y se pondrán furiosas. ¿Qué decides?',
        imagen: 'https://i.imgur.com/7K7qXxH.jpg',
        tipo: 'ntr',
        opciones: [
            {
                texto: '💔 Aceptar la invitación (NTR)',
                afinidadNino: -25,
                afinidadIchika: -25,
                afinidadMiku: -25,
                afinidadYotsuba: -25,
                afinidadItsuki: -25,
                dinero: 200,
                video: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe'
            },
            {
                texto: '💖 Rechazar y ser fiel a las quintillizas',
                afinidadNino: 10,
                afinidadIchika: 10,
                afinidadMiku: 10,
                afinidadYotsuba: 10,
                afinidadItsuki: 10,
                dinero: 0,
                video: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS'
            }
        ]
    }
];

// Lista de 10 eventos con requisitos y consecuencias
const EVENTOS_DIARIOS = [
    { // Evento 1 - Solo Nino
        id: 'nino_ex',
        titulo: '😤 ¡EL EX DE NINO APARECIÓ!',
        descripcion: 'Mientras estudiabas en la cafetería, ves a Nino hablando acaloradamente con un chico. ¡Es su ex! Te mira y te hace una seña para que te acerques. Necesitas demostrarle que eres mejor que él completando 10 MAZOS AL 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
        personajes: ['nino'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        videoFracaso: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        afinidadExito: 15,
        afinidadFracaso: -30,
        dineroRecompensa: 50
    },
    { // Evento 2 - Solo Ichika
        id: 'ichika_trabajo',
        titulo: '💼 ¡ICHIKA ESTÁ AGOTADA!',
        descripcion: 'Ichika está agotada por el trabajo y necesita que la ayudes a estudiar para un examen importante. Si no completas 10 MAZOS AL 100% hoy, perderá el año.',
        imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        personajes: ['ichika'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        videoFracaso: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        afinidadExito: 10,
        afinidadFracaso: -25,
        dineroRecompensa: 40
    },
    { // Evento 3 - Solo Miku
        id: 'miku_concierto',
        titulo: '🎶 ¡MIKU PERDIÓ LAS ENTRADAS!',
        descripcion: 'Miku tiene un concierto de música tradicional hoy, pero perdió las entradas. Necesita que la ayudes a buscarlas. Completa 10 MAZOS AL 100% hoy. ¡No la dejes plantada!',
        imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
        personajes: ['miku'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        videoFracaso: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        afinidadExito: 12,
        afinidadFracaso: -28,
        dineroRecompensa: 45
    },
    { // Evento 4 - Solo Yotsuba
        id: 'yotsuba_carrera',
        titulo: '🏃‍♀️ ¡YOTSUBA NECESITA APOYO!',
        descripcion: 'Yotsuba tiene una carrera importante mañana y está nerviosa. Quiere que estudien juntos para calmarse. Completa 10 MAZOS AL 100% hoy para demostrarle que puedes con todo.',
        imagen: 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small',
        personajes: ['yotsuba'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        videoFracaso: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        afinidadExito: 8,
        afinidadFracaso: -20,
        dineroRecompensa: 30
    },
    { // Evento 5 - Solo Itsuki
        id: 'itsuki_buffet',
        titulo: '🍣 ¡ITSUKI QUIERE BUFFET LIBRE!',
        descripcion: 'Itsuki quiere ir a un buffet libre pero le da vergüenza ir sola. Prometiste acompañarla si completas 10 MAZOS AL 100% hoy. ¡No la decepciones!',
        imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
        personajes: ['itsuki'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        videoFracaso: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        afinidadExito: 10,
        afinidadFracaso: -25,
        dineroRecompensa: 40
    },
    { // Evento 6 - Dúo Nino e Ichika
        id: 'duo_nino_ichika_discusion',
        titulo: '👯‍♀️ ¡NINO E ICHIKA DISCUTEN!',
        descripcion: 'Nino e Ichika están discutiendo por quién cocinará hoy. Tienes que mediar para que se reconcilien. Demuestra tu habilidad completando 10 MAZOS AL 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
        personajes: ['nino', 'ichika'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        videoFracaso: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        afinidadExito: 12,
        afinidadFracaso: -20,
        dineroRecompensa: 60
    },
    { // Evento 7 - Dúo Miku y Yotsuba
        id: 'duo_miku_yotsuba_estudio',
        titulo: '📚 ¡MIKU Y YOTSUBA NECESITAN AYUDA!',
        descripcion: 'Miku no entiende historia y Yotsuba quiere ayudarle pero no sabe cómo. Completa 10 MAZOS AL 100% hoy para darles material de estudio.',
        imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
        personajes: ['miku', 'yotsuba'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
        videoFracaso: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
        afinidadExito: 10,
        afinidadFracaso: -18,
        dineroRecompensa: 50
    },
    { // Evento 8 - Trío (Nino, Miku, Itsuki)
        id: 'trio_examen',
        titulo: '📝 ¡EXAMEN SORPRESA!',
        descripcion: 'Las profesoras anunciaron un examen sorpresa. Nino, Miku e Itsuki entran en pánico. Necesitan que las ayudes a repasar completando 10 MAZOS AL 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
        personajes: ['nino', 'miku', 'itsuki'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        videoFracaso: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        afinidadExito: 15,
        afinidadFracaso: -25,
        dineroRecompensa: 80
    },
    { // Evento 9 - Cuarteto (Ichika, Nino, Miku, Yotsuba)
        id: 'cuarteto_festival',
        titulo: '🎪 ¡FESTIVAL ESCOLAR!',
        descripcion: 'El festival escolar está cerca y 4 de las hermanas necesitan ayuda para preparar el stand. Completa 10 MAZOS AL 100% hoy para que todo salga perfecto.',
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
        titulo: '👯‍♀️👯‍♀️👯‍♀️👯‍♀️👯‍♀️ ¡VIAJE DE HERMANAS!',
        descripcion: '¡Las 5 hermanas quieren hacer un viaje juntas! Te invitaron, pero debes demostrar que eres responsable completando 10 MAZOS AL 100% hoy.',
        imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
        personajes: ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'],
        tipoRequisito: 'mazos_completados',
        cantidadRequerida: 10,
        videoExito: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
        videoFracaso: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
        afinidadExito: 25,
        afinidadFracaso: -40,
        dineroRecompensa: 150
    }
];

// ================================================
// SISTEMA DE PROGRESO DE EVENTOS DIARIOS (BARRA VISIBLE CON TOGGLE)
// ================================================

const SistemaProgresoEventos = {
    // Inicializar contadores
    inicializarContadores: function() {
        if (!localStorage.getItem('eventos_progreso')) {
            const progresoInicial = {
                totalEventos: EVENTOS_DIARIOS.length + EVENTOS_NTR.length,
                eventosCompletados: 0,
                eventosFallidos: 0,
                ultimaSemana: this.obtenerNumeroSemana(),
                ultimoEventoFecha: null,
                historial: [] // Guardar últimos eventos
            };
            localStorage.setItem('eventos_progreso', JSON.stringify(progresoInicial));
        }
        return JSON.parse(localStorage.getItem('eventos_progreso'));
    },

    // Obtener número de semana del año
    obtenerNumeroSemana: function() {
        const fecha = new Date();
        const inicioAño = new Date(fecha.getFullYear(), 0, 1);
        const dias = Math.floor((fecha - inicioAño) / (24 * 60 * 60 * 1000));
        return Math.ceil((dias + inicioAño.getDay() + 1) / 7);
    },

    // Registrar resultado de evento
    registrarResultado: function(eventoId, exito) {
        const progreso = this.inicializarContadores();
        
        // Verificar si cambió de semana
        const semanaActual = this.obtenerNumeroSemana();
        if (semanaActual !== progreso.ultimaSemana) {
            progreso.eventosCompletados = 0;
            progreso.eventosFallidos = 0;
            progreso.ultimaSemana = semanaActual;
            progreso.historial = [];
        }

        // Actualizar contadores
        if (exito) {
            progreso.eventosCompletados++;
        } else {
            progreso.eventosFallidos++;
        }

        progreso.ultimoEventoFecha = new Date().toISOString();

        // Añadir al historial
        progreso.historial.unshift({
            id: eventoId,
            fecha: new Date().toISOString(),
            exito: exito
        });
        
        // Mantener solo últimos 10 eventos en historial
        if (progreso.historial.length > 10) {
            progreso.historial.pop();
        }

        localStorage.setItem('eventos_progreso', JSON.stringify(progreso));
        return progreso;
    },

    // Obtener estadísticas
    obtenerEstadisticas: function() {
        return this.inicializarContadores();
    },

    // Calcular porcentaje de progreso semanal
    obtenerPorcentajeSemanal: function() {
        const progreso = this.obtenerEstadisticas();
        const totalEventosSemana = 7; // Máximo 7 eventos por semana (1 por día)
        const totalCompletados = progreso.eventosCompletados;
        
        return {
            completados: totalCompletados,
            total: totalEventosSemana,
            porcentaje: Math.min(100, Math.round((totalCompletados / totalEventosSemana) * 100))
        };
    },

    // Obtener racha actual (días seguidos completando)
    obtenerRacha: function() {
        const progreso = this.obtenerEstadisticas();
        let racha = 0;
        
        for (let i = 0; i < progreso.historial.length; i++) {
            if (progreso.historial[i].exito) {
                racha++;
            } else {
                break;
            }
        }
        
        return racha;
    },

    // Crear barra de progreso visual
    crearBarraProgreso: function() {
        const stats = this.obtenerPorcentajeSemanal();
        const racha = this.obtenerRacha();
        const progreso = this.obtenerEstadisticas();
        
        // Colores para los días
        const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
        const hoy = new Date().getDay(); // 0 = Domingo, 1 = Lunes...
        const hoyIndex = hoy === 0 ? 6 : hoy - 1; // Convertir a índice 0-6 (Lun-Dom)
        
        let diasHTML = '';
        for (let i = 0; i < 7; i++) {
            let estado = 'pendiente';
            let color = '#2a2a3a';
            
            // Determinar estado del día basado en historial
            if (i < progreso.eventosCompletados) {
                estado = 'completado';
                color = '#4CAF50';
            } else if (i < progreso.eventosCompletados + progreso.eventosFallidos) {
                estado = 'fallido';
                color = '#F44336';
            }
            
            // Si es hoy y no tiene estado, poner borde especial
            const esHoy = i === hoyIndex;
            
            diasHTML += `
                <div style="text-align: center;">
                    <div style="
                        width: 35px;
                        height: 35px;
                        background: ${color};
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        border: ${esHoy ? '3px solid #FFD166' : '2px solid rgba(255,255,255,0.2)'};
                        margin: 0 auto;
                        color: white;
                        box-shadow: ${esHoy ? '0 0 15px #FFD166' : 'none'};
                    ">
                        ${i + 1}
                    </div>
                    <div style="font-size: 0.7rem; margin-top: 5px; opacity: 0.7;">
                        ${diasSemana[i]}
                    </div>
                </div>
            `;
        }

        return `
            <div id="eventos-progreso-barra" style="
                background: linear-gradient(135deg, rgba(255, 20, 147, 0.15), rgba(138, 90, 247, 0.15));
                border-radius: 20px;
                padding: 20px;
                margin: 20px auto;
                max-width: 800px;
                border: 2px solid #FF1493;
                box-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
                position: relative;
                backdrop-filter: blur(10px);
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                    <h3 style="color: #FFD166; margin: 0; font-size: 1.2rem;">
                        📅 EVENTOS DIARIOS
                    </h3>
                    <div style="
                        background: rgba(255, 20, 147, 0.3);
                        padding: 5px 15px;
                        border-radius: 50px;
                        font-weight: bold;
                        color: #FFD166;
                        border: 2px solid #FF1493;
                        font-size: 0.9rem;
                    ">
                        🔥 Racha: ${racha} día${racha !== 1 ? 's' : ''}
                    </div>
                </div>
                
                <!-- Barra de progreso principal -->
                <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="color: #FFD166; font-weight: bold; font-size: 0.9rem;">
                            Progreso semanal:
                        </span>
                        <span style="color: #FF1493; font-weight: bold; font-size: 0.9rem;">
                            ${stats.completados}/${stats.total} eventos
                        </span>
                    </div>
                    
                    <div style="
                        background: rgba(0, 0, 0, 0.3);
                        height: 25px;
                        border-radius: 15px;
                        overflow: hidden;
                        position: relative;
                        border: 2px solid #FF1493;
                    ">
                        <div style="
                            background: linear-gradient(90deg, #FF1493, #8A5AF7);
                            width: ${stats.porcentaje}%;
                            height: 100%;
                            transition: width 0.5s ease;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            padding-right: 10px;
                            color: white;
                            font-weight: bold;
                            font-size: 0.9rem;
                            white-space: nowrap;
                        ">
                            ${stats.porcentaje}%
                        </div>
                    </div>
                </div>
                
                <!-- Días de la semana -->
                <div style="
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 5px;
                    margin: 15px 0;
                ">
                    ${diasHTML}
                </div>
                
                <!-- Leyenda -->
                <div style="
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    flex-wrap: wrap;
                ">
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <div style="width: 15px; height: 15px; background: #4CAF50; border-radius: 50%;"></div>
                        <span style="font-size: 0.8rem; opacity: 0.8;">Completado</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <div style="width: 15px; height: 15px; background: #F44336; border-radius: 50%;"></div>
                        <span style="font-size: 0.8rem; opacity: 0.8;">Fallido</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <div style="width: 15px; height: 15px; background: #2a2a3a; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2);"></div>
                        <span style="font-size: 0.8rem; opacity: 0.8;">Pendiente</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <div style="width: 15px; height: 15px; background: transparent; border-radius: 50%; border: 3px solid #FFD166;"></div>
                        <span style="font-size: 0.8rem; opacity: 0.8;">Hoy</span>
                    </div>
                </div>

                <!-- Botón para ver detalles del último evento -->
                ${progreso.ultimoEventoFecha ? `
                    <div style="text-align: center; margin-top: 15px;">
                        <button onclick="EventosDiarios.mostrarUltimoResultado()" style="
                            background: linear-gradient(135deg, #FF1493, #8A5AF7);
                            color: white;
                            border: none;
                            padding: 8px 20px;
                            border-radius: 50px;
                            font-weight: bold;
                            cursor: pointer;
                            font-size: 0.9rem;
                            border: 2px solid white;
                            transition: all 0.3s;
                        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            📊 Ver último resultado
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    },

    // Mostrar la barra en un contenedor específico
    mostrarEnContenedor: function(contenedorId) {
        const contenedor = document.getElementById(contenedorId);
        if (contenedor) {
            contenedor.innerHTML = this.crearBarraProgreso();
        }
    }
};

// ================================================
// FUNCIONES AUXILIARES PARA TOGGLE DE LA BARRA
// ================================================
function obtenerEstadoVisibilidadBarra() {
    const estado = localStorage.getItem('eventos_progreso_visible');
    return estado === null ? true : estado === 'true';
}

function guardarEstadoVisibilidadBarra(visible) {
    localStorage.setItem('eventos_progreso_visible', visible);
}

// ================================================
// SISTEMA DE EVENTOS DIARIOS (VERSIÓN CON NTR)
// Éxito inmediato, fracaso al día siguiente + Eventos NTR con opciones
// ================================================
const EventosDiarios = {
    // Obtener la fecha actual en formato YYYY-MM-DD
    obtenerFechaActual: function() {
        const fecha = new Date();
        return `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`;
    },

    // Verificar si ya se mostró un evento hoy
    verificarEventoHoy: function() {
        const ultimoEvento = localStorage.getItem('evento_diario_ultimo');
        if (!ultimoEvento) return true;
        
        try {
            const ultimoEventoData = JSON.parse(ultimoEvento);
            const fechaHoy = this.obtenerFechaActual();
            
            return ultimoEventoData.fecha !== fechaHoy;
        } catch (e) {
            return true;
        }
    },

    // ================================================
    // SELECCIONAR EVENTO (50% NORMAL - 50% NTR)
    // ================================================
    seleccionarEventoAleatorio: function() {
        // Decidir el tipo de evento (50/50)
        const esEventoNTR = Math.random() < 0.5;
        
        // Seleccionar la lista correspondiente
        const listaEventos = esEventoNTR ? EVENTOS_NTR : EVENTOS_DIARIOS;
        
        // Si la lista está vacía, usar la otra como fallback
        if (listaEventos.length === 0) {
            console.warn(`⚠️ No hay eventos ${esEventoNTR ? 'NTR' : 'normales'}. Usando la otra lista.`);
            const listaFallback = esEventoNTR ? EVENTOS_DIARIOS : EVENTOS_NTR;
            if (listaFallback.length === 0) {
                console.error('❌ No hay eventos de ningún tipo configurados');
                return EVENTOS_DIARIOS[0]; // Fallback al primer evento normal
            }
            return this.seleccionarDeLista(listaFallback);
        }
        
        console.log(`📅 Seleccionando evento ${esEventoNTR ? 'NTR' : 'normal'}...`);
        return this.seleccionarDeLista(listaEventos);
    },

    // ================================================
    // SELECCIONAR DE UNA LISTA ESPECÍFICA (con sistema de no repetición)
    // ================================================
    seleccionarDeLista: function(listaEventos) {
        // Obtener IDs de eventos ya vistos (para TODOS los eventos)
        const eventosVistos = JSON.parse(localStorage.getItem('eventos_diarios_vistos') || '[]');
        
        // Filtrar eventos no vistos de la lista proporcionada
        let eventosDisponibles = listaEventos.filter(e => !eventosVistos.includes(e.id));
        
        // Si ya vio todos, reiniciar
        if (eventosDisponibles.length === 0) {
            // Para reiniciar, solo quitamos los de esta lista? O todos?
            // Opción simple: reiniciar todos los vistos
            localStorage.removeItem('eventos_diarios_vistos');
            eventosDisponibles = listaEventos;
        }
        
        // Seleccionar uno aleatorio
        const indice = Math.floor(Math.random() * eventosDisponibles.length);
        const evento = eventosDisponibles[indice];
        
        // Guardar como visto
        const nuevosVistos = JSON.parse(localStorage.getItem('eventos_diarios_vistos') || '[]');
        nuevosVistos.push(evento.id);
        localStorage.setItem('eventos_diarios_vistos', JSON.stringify(nuevosVistos));
        
        return evento;
    },

    // Guardar el evento de hoy
    guardarEventoHoy: function(evento) {
        const eventoData = {
            fecha: this.obtenerFechaActual(),
            evento: evento,
            requisitoCumplido: false,
            resultadoExitoMostrado: false,  // Para éxito inmediato
            resultadoFracasoMostrado: false, // Para fracaso al día siguiente
            fechaFracaso: null // Fecha en que se debe mostrar el fracaso
        };
        
        localStorage.setItem('evento_diario_ultimo', JSON.stringify(eventoData));
        localStorage.setItem('evento_diario_actual', JSON.stringify(evento));
    },

    // Obtener el evento de hoy
    obtenerEventoHoy: function() {
        const eventoGuardado = localStorage.getItem('evento_diario_actual');
        return eventoGuardado ? JSON.parse(eventoGuardado) : null;
    },

    // Marcar requisito como cumplido (y mostrar éxito inmediato) - SOLO PARA EVENTOS NORMALES
    marcarRequisitoCumplido: function() {
        const ultimoEvento = JSON.parse(localStorage.getItem('evento_diario_ultimo') || '{}');
        const fechaHoy = this.obtenerFechaActual();
        const evento = this.obtenerEventoHoy();
        
        // Solo marcar si es el evento de hoy, no es NTR y aún no se ha cumplido
        if (ultimoEvento.fecha === fechaHoy && !ultimoEvento.requisitoCumplido && evento && evento.tipo !== 'ntr') {
            ultimoEvento.requisitoCumplido = true;
            ultimoEvento.resultadoExitoMostrado = false; // Aún no se ha mostrado el éxito
            localStorage.setItem('evento_diario_ultimo', JSON.stringify(ultimoEvento));
            
            console.log('✅ Requisito del evento cumplido HOY - Mostrando éxito inmediato');
            
            // Mostrar éxito INMEDIATAMENTE
            setTimeout(() => {
                this.mostrarResultadoEvento(evento, true);
                // Marcar como mostrado después de mostrar
                ultimoEvento.resultadoExitoMostrado = true;
                localStorage.setItem('evento_diario_ultimo', JSON.stringify(ultimoEvento));
            }, 500);
            
            // Notificación
            this.mostrarNotificacionEvento('✅ ¡Requisito cumplido!', '#4CAF50');
        }
    },

    // Marcar evento como fallido (para mostrar mañana) - SOLO PARA EVENTOS NORMALES
    marcarEventoFallido: function() {
        const ultimoEvento = JSON.parse(localStorage.getItem('evento_diario_ultimo') || '{}');
        const fechaHoy = this.obtenerFechaActual();
        const evento = this.obtenerEventoHoy();
        
        // Solo marcar si es el evento de hoy, no es NTR y no está cumplido
        if (ultimoEvento.fecha === fechaHoy && !ultimoEvento.requisitoCumplido && evento && evento.tipo !== 'ntr') {
            ultimoEvento.fechaFracaso = fechaHoy; // Guardar que falló hoy
            ultimoEvento.resultadoFracasoMostrado = false;
            localStorage.setItem('evento_diario_ultimo', JSON.stringify(ultimoEvento));
            
            console.log('❌ Evento fallido HOY - Se mostrará mañana');
        }
    },

    // Verificar si el evento de hoy fue exitoso
    eventoExitoso: function() {
        const ultimoEvento = JSON.parse(localStorage.getItem('evento_diario_ultimo') || '{}');
        return ultimoEvento.requisitoCumplido === true;
    },

    // Verificar si el evento de hoy fue fallido
    eventoFallido: function() {
        const ultimoEvento = JSON.parse(localStorage.getItem('evento_diario_ultimo') || '{}');
        const fechaHoy = this.obtenerFechaActual();
        
        // Fue fallido si: no está cumplido Y la fecha es de hoy
        return !ultimoEvento.requisitoCumplido && ultimoEvento.fecha === fechaHoy;
    },

    // Verificar si hay que mostrar fracaso de ayer (VERSIÓN CORREGIDA)
    debeMostrarFracasoAyer: function() {
        const ultimoEvento = JSON.parse(localStorage.getItem('evento_diario_ultimo') || '{}');
        const fechaHoy = this.obtenerFechaActual();
        
        // Verificar si hay un evento que falló en una fecha anterior (no hoy)
        // y que aún no se ha mostrado su resultado de fracaso
        return ultimoEvento.fechaFracaso && 
               ultimoEvento.fechaFracaso !== fechaHoy && 
               !ultimoEvento.resultadoFracasoMostrado;
    },

    // Obtener evento de ayer (el último evento guardado)
    obtenerEventoAyer: function() {
        return this.obtenerEventoHoy(); // Es el mismo porque solo guardamos el último
    },

    // Verificar si se cumplió el requisito (SOLO PARA EVENTOS NORMALES)
    verificarRequisito: function(evento) {
        if (evento.tipo === 'ntr') return false; // Los NTR no tienen requisitos
        
        if (evento.tipoRequisito === 'mazos_completados') {
            if (typeof sistemaEconomia === 'undefined') {
                console.error('❌ sistemaEconomia no está definido al verificar requisito');
                return false;
            }
            const estadisticas = sistemaEconomia.obtenerEstadisticas();
            console.log('📊 Verificando requisito:', {
                completados100: estadisticas.completados100,
                requerido: evento.cantidadRequerida,
                resultado: estadisticas.completados100 >= evento.cantidadRequerida
            });
            return estadisticas.completados100 >= evento.cantidadRequerida;
        }
        return false;
    },

    // Aplicar consecuencias del evento (PARA EVENTOS NORMALES)
    aplicarConsecuencias: function(evento, exito) {
        console.log('🎯 Aplicando consecuencias del evento:', evento.id, 'Éxito:', exito);
        
        if (typeof quintillizasRPG === 'undefined') {
            console.error('❌ quintillizasRPG no está definido');
            this.mostrarNotificacionEvento('❌ Error: RPG no disponible', '#F44336');
            return false;
        }
        if (typeof sistemaEconomia === 'undefined') {
            console.error('❌ sistemaEconomia no está definido');
            this.mostrarNotificacionEvento('❌ Error: Economía no disponible', '#F44336');
            return false;
        }

        // Aplicar afinidad a cada personaje involucrado
        evento.personajes.forEach(personajeId => {
            if (quintillizasRPG.datosPersonajes && quintillizasRPG.datosPersonajes[personajeId]) {
                const afinidadActual = quintillizasRPG.datosPersonajes[personajeId].afinidad;
                const cambio = exito ? evento.afinidadExito : evento.afinidadFracaso;
                const nuevaAfinidad = Math.max(-100, Math.min(200, afinidadActual + cambio));
                
                quintillizasRPG.datosPersonajes[personajeId].afinidad = nuevaAfinidad;
                console.log(`✅ Evento: ${personajeId} afinidad ${cambio > 0 ? '+' : ''}${cambio} → ${nuevaAfinidad}`);
                
                this.mostrarNotificacionEvento(
                    `💖 ${personajeId}: ${cambio > 0 ? '+' : ''}${cambio} afinidad`,
                    cambio > 0 ? '#4CAF50' : '#F44336'
                );
            }
        });

        // Dar dinero si fue éxito
        if (exito && evento.dineroRecompensa > 0) {
            sistemaEconomia.agregarDinero(evento.dineroRecompensa);
            console.log(`💰 +${evento.dineroRecompensa} soles por evento`);
            this.mostrarNotificacionEvento(`💰 +${evento.dineroRecompensa} soles`, '#FFD166');
            
            if (typeof actualizarContadorDineroInicio === 'function') {
                actualizarContadorDineroInicio();
            }
        }

        if (quintillizasRPG.guardarDatosPersonajes) {
            quintillizasRPG.guardarDatosPersonajes();
        }
        
        SistemaProgresoEventos.registrarResultado(evento.id, exito);
        
        return true;
    },

    // ================================================
    // PROCESAR OPCIÓN NTR (nueva función)
    // ================================================
    procesarOpcionNTR: function(eventoId, opcionIndex) {
        // Buscar el evento en EVENTOS_NTR
        const evento = EVENTOS_NTR.find(e => e.id === eventoId);
        if (!evento) return;
        
        const opcion = evento.opciones[opcionIndex];
        const esOpcionFiel = opcionIndex === 1; // Segunda opción es la fiel
        
        // Aplicar cambios de afinidad a CADA hermana
        if (typeof quintillizasRPG !== 'undefined' && quintillizasRPG.datosPersonajes) {
            // Nino
            if (quintillizasRPG.datosPersonajes.nino) {
                quintillizasRPG.datosPersonajes.nino.afinidad += opcion.afinidadNino || 0;
                this.mostrarNotificacionEvento(
                    `👩 Nino: ${opcion.afinidadNino > 0 ? '+' : ''}${opcion.afinidadNino || 0} afinidad`,
                    opcion.afinidadNino > 0 ? '#4CAF50' : '#F44336'
                );
            }
            // Ichika
            if (quintillizasRPG.datosPersonajes.ichika) {
                quintillizasRPG.datosPersonajes.ichika.afinidad += opcion.afinidadIchika || 0;
                this.mostrarNotificacionEvento(
                    `👩 Ichika: ${opcion.afinidadIchika > 0 ? '+' : ''}${opcion.afinidadIchika || 0} afinidad`,
                    opcion.afinidadIchika > 0 ? '#4CAF50' : '#F44336'
                );
            }
            // Miku
            if (quintillizasRPG.datosPersonajes.miku) {
                quintillizasRPG.datosPersonajes.miku.afinidad += opcion.afinidadMiku || 0;
                this.mostrarNotificacionEvento(
                    `👩 Miku: ${opcion.afinidadMiku > 0 ? '+' : ''}${opcion.afinidadMiku || 0} afinidad`,
                    opcion.afinidadMiku > 0 ? '#4CAF50' : '#F44336'
                );
            }
            // Yotsuba
            if (quintillizasRPG.datosPersonajes.yotsuba) {
                quintillizasRPG.datosPersonajes.yotsuba.afinidad += opcion.afinidadYotsuba || 0;
                this.mostrarNotificacionEvento(
                    `👩 Yotsuba: ${opcion.afinidadYotsuba > 0 ? '+' : ''}${opcion.afinidadYotsuba || 0} afinidad`,
                    opcion.afinidadYotsuba > 0 ? '#4CAF50' : '#F44336'
                );
            }
            // Itsuki
            if (quintillizasRPG.datosPersonajes.itsuki) {
                quintillizasRPG.datosPersonajes.itsuki.afinidad += opcion.afinidadItsuki || 0;
                this.mostrarNotificacionEvento(
                    `👩 Itsuki: ${opcion.afinidadItsuki > 0 ? '+' : ''}${opcion.afinidadItsuki || 0} afinidad`,
                    opcion.afinidadItsuki > 0 ? '#4CAF50' : '#F44336'
                );
            }
            
            quintillizasRPG.guardarDatosPersonajes();
        }
        
        // Dar dinero si tiene
        if (opcion.dinero > 0 && typeof sistemaEconomia !== 'undefined') {
            sistemaEconomia.agregarDinero(opcion.dinero);
            this.mostrarNotificacionEvento(`💰 +${opcion.dinero} soles`, '#FFD166');
            if (typeof actualizarContadorDineroInicio === 'function') {
                actualizarContadorDineroInicio();
            }
        }
        
        // Cerrar el modal actual
        this.cerrarModalEvento();
        
        // Mostrar el video correspondiente
        this.mostrarResultadoNTR(evento, opcion, esOpcionFiel);
        
        // Registrar en el sistema de progreso
        SistemaProgresoEventos.registrarResultado(evento.id, esOpcionFiel);
    },

    // Mostrar notificación pequeña
    mostrarNotificacionEvento: function(mensaje, color = '#FF1493') {
        const notif = document.createElement('div');
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${color};
            color: white;
            padding: 10px 20px;
            border-radius: 50px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.4);
            z-index: 10000;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
            font-size: 1rem;
            border: 2px solid white;
        `;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 2500);
    },

    // ================================================
    // MOSTRAR MODAL DEL EVENTO (VERSIÓN QUE SOPORTA NTR)
    // ================================================
    mostrarModalEvento: function(evento) {
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
            padding: 20px;
            box-sizing: border-box;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            width: 100%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border-radius: 20px;
            padding: 25px;
            border: 3px solid #FF1493;
            box-shadow: 0 0 30px rgba(255, 20, 147, 0.5);
            position: relative;
            animation: zoomIn 0.5s ease;
            margin: auto;
        `;

        // Verificar si es evento NTR (tiene opciones)
        const esNTR = evento.tipo === 'ntr' && evento.opciones && evento.opciones.length > 0;
        
        let botonesHTML = '';
        if (esNTR) {
            // Crear 2 botones para las opciones NTR
            botonesHTML = `
                <div style="display: flex; gap: 20px; justify-content: center; margin: 30px 0; flex-wrap: wrap;">
                    <button onclick="EventosDiarios.procesarOpcionNTR('${evento.id}', 0)" style="
                        background: linear-gradient(135deg, #F44336, #FF9800);
                        color: white;
                        font-size: clamp(1rem, 4vw, 1.3rem);
                        padding: 15px 25px;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                        font-weight: bold;
                        border: 3px solid white;
                        box-shadow: 0 0 20px #F44336;
                        transition: all 0.3s;
                        min-width: 250px;
                    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        ${evento.opciones[0].texto}
                    </button>
                    
                    <button onclick="EventosDiarios.procesarOpcionNTR('${evento.id}', 1)" style="
                        background: linear-gradient(135deg, #4CAF50, #2196F3);
                        color: white;
                        font-size: clamp(1rem, 4vw, 1.3rem);
                        padding: 15px 25px;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                        font-weight: bold;
                        border: 3px solid white;
                        box-shadow: 0 0 20px #4CAF50;
                        transition: all 0.3s;
                        min-width: 250px;
                    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        ${evento.opciones[1].texto}
                    </button>
                </div>
                
                <p style="color: rgba(255,255,255,0.5); font-size: 0.9rem; margin-top: 10px;">
                    ⚠️ Tu decisión afectará tu relación con las 5 hermanas
                </p>
            `;
        } else {
            // Botón normal de "Aceptar" para eventos regulares
            botonesHTML = `
                <button onclick="EventosDiarios.cerrarModalEvento()" style="
                    background: linear-gradient(135deg, #FF1493, #8A5AF7);
                    color: white;
                    font-size: clamp(1rem, 4vw, 1.5rem);
                    padding: 12px 30px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    font-weight: bold;
                    margin: 10px 0;
                    border: 2px solid white;
                    box-shadow: 0 0 15px #FF1493;
                    transition: all 0.3s;
                    width: auto;
                    min-width: 200px;
                    max-width: 90%;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    ¡ENTENDIDO, LO HARÉ!
                </button>
                <p style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin-top: 15px; padding: 0 10px;">
                    ⚡ Si completas el requisito HOY, verás el video de ÉXITO inmediatamente<br>
                    ❌ Si NO lo completas, verás el video de FRACASO mañana
                </p>
            `;
        }

        const nombresPersonajes = evento.personajes ? evento.personajes.map(p => {
            const nombres = {
                'ichika': 'Ichika', 'nino': 'Nino', 'miku': 'Miku', 
                'yotsuba': 'Yotsuba', 'itsuki': 'Itsuki'
            };
            return nombres[p] || p;
        }).join(' • ') : '';

        modal.innerHTML = `
            <div style="text-align: center; position: relative;">
                <button onclick="EventosDiarios.cerrarModalEvento()" style="
                    position: sticky;
                    top: 0;
                    float: right;
                    background: linear-gradient(135deg, #FF1493, #8A5AF7);
                    border: none;
                    color: white;
                    font-size: 24px;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                    border: 2px solid white;
                    margin-bottom: 10px;
                    z-index: 10;
                " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    ✕
                </button>

                <h1 style="
                    color: #FFD166;
                    font-size: clamp(1.5rem, 5vw, 2.5rem);
                    margin-bottom: 15px;
                    text-shadow: 0 0 10px #FF1493;
                    padding-right: 45px;
                ">📅 ¡EVENTO DIARIO!</h1>

                <div style="
                    width: min(200px, 40vw);
                    height: min(200px, 40vw);
                    margin: 15px auto;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 4px solid #FF1493;
                    box-shadow: 0 0 25px #FF1493;
                ">
                    <img src="${evento.imagen}" alt="${evento.titulo}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>

                <h2 style="
                    color: #FF1493;
                    font-size: clamp(1.2rem, 4vw, 2rem);
                    margin: 15px 0;
                    text-transform: uppercase;
                    word-break: break-word;
                ">${evento.titulo}</h2>

                <p style="
                    color: white;
                    font-size: clamp(0.9rem, 3vw, 1.2rem);
                    line-height: 1.5;
                    margin: 15px 0;
                    padding: 0 10px;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                ">${evento.descripcion}</p>

                ${evento.personajes ? `
                    <div style="
                        background: rgba(255, 20, 147, 0.2);
                        padding: 10px 20px;
                        border-radius: 50px;
                        display: inline-block;
                        margin: 10px auto;
                        font-size: clamp(0.9rem, 3vw, 1.3rem);
                        border: 2px solid #FF1493;
                        max-width: 90%;
                        word-break: break-word;
                    ">
                        👥 ${nombresPersonajes}
                    </div>
                ` : ''}

                ${!esNTR ? `
                    <div style="
                        background: linear-gradient(135deg, #5864F5, #8A5AF7);
                        padding: 15px;
                        border-radius: 15px;
                        margin: 20px 0;
                        font-size: clamp(1rem, 4vw, 1.5rem);
                        border: 3px solid white;
                    ">
                        🎯 REQUISITO: Completa ${evento.cantidadRequerida} MAZOS AL 100% hoy
                    </div>
                ` : ''}

                ${!esNTR ? `
                    <div style="
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 15px;
                        margin: 20px 0;
                    ">
                        <div style="
                            background: rgba(76, 175, 80, 0.2);
                            border: 3px solid #4CAF50;
                            border-radius: 15px;
                            padding: 15px;
                        ">
                            <h3 style="color: #4CAF50; font-size: clamp(1.2rem, 4vw, 1.8rem); margin-bottom: 10px;">✅ ÉXITO</h3>
                            ${evento.personajes.map(p => {
                                const nombre = p.charAt(0).toUpperCase() + p.slice(1);
                                return `<div style="color: white; font-size: clamp(0.9rem, 3vw, 1.2rem); margin: 5px 0;">${nombre}: +${evento.afinidadExito} afinidad</div>`;
                            }).join('')}
                            <div style="color: #FFD166; font-size: clamp(1rem, 3.5vw, 1.3rem); margin-top: 10px;">💰 +${evento.dineroRecompensa} soles</div>
                        </div>

                        <div style="
                            background: rgba(244, 67, 54, 0.2);
                            border: 3px solid #F44336;
                            border-radius: 15px;
                            padding: 15px;
                        ">
                            <h3 style="color: #F44336; font-size: clamp(1.2rem, 4vw, 1.8rem); margin-bottom: 10px;">❌ FRACASO</h3>
                            ${evento.personajes.map(p => {
                                const nombre = p.charAt(0).toUpperCase() + p.slice(1);
                                return `<div style="color: white; font-size: clamp(0.9rem, 3vw, 1.2rem); margin: 5px 0;">${nombre}: ${evento.afinidadFracaso} afinidad</div>`;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}

                ${botonesHTML}
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

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
                @media (max-width: 480px) {
                    #evento-modal-overlay > div {
                        padding: 15px !important;
                    }
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

    // Mostrar resultado del evento (video) - VERSIÓN CORREGIDA
    mostrarResultadoEvento: function(evento, exito) {
        const videoId = exito ? evento.videoExito : evento.videoFracaso;
        
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
            padding: 20px;
            box-sizing: border-box;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            width: 100%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border-radius: 20px;
            padding: 25px;
            border: 4px solid ${exito ? '#4CAF50' : '#F44336'};
            box-shadow: 0 0 40px ${exito ? '#4CAF50' : '#F44336'};
            position: relative;
        `;

        const cambiosHTML = evento.personajes.map(p => {
            const nombre = p.charAt(0).toUpperCase() + p.slice(1);
            const cambio = exito ? evento.afinidadExito : evento.afinidadFracaso;
            return `<div style="color: white; font-size: clamp(0.9rem, 3vw, 1.2rem);">${nombre}: ${cambio > 0 ? '+' : ''}${cambio}</div>`;
        }).join('');

        modal.innerHTML = `
            <div style="text-align: center; position: relative;">
                <button onclick="EventosDiarios.cerrarResultadoEvento()" style="
                    position: sticky;
                    top: 0;
                    float: right;
                    background: linear-gradient(135deg, ${exito ? '#4CAF50' : '#F44336'}, #8A5AF7);
                    border: none;
                    color: white;
                    font-size: 24px;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                    border: 2px solid white;
                    margin-bottom: 10px;
                    z-index: 10;
                " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    ✕
                </button>

                <h1 style="
                    color: ${exito ? '#4CAF50' : '#F44336'};
                    font-size: clamp(1.8rem, 6vw, 3rem);
                    margin-bottom: 15px;
                    padding-right: 45px;
                ">${exito ? '✅ ¡EVENTO SUPERADO!' : '❌ EVENTO FALLIDO'}</h1>

                <h2 style="color: #FFD166; font-size: clamp(1.2rem, 4vw, 2rem); margin-bottom: 20px; word-break: break-word;">
                    ${evento.titulo}
                </h2>

                <div style="
                    margin: 20px 0;
                    border: 3px solid ${exito ? '#4CAF50' : '#F44336'};
                    border-radius: 15px;
                    overflow: hidden;
                    background: black;
                ">
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
                        <iframe
                            src="https://drive.google.com/file/d/${videoId}/preview"
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <div style="
                    background: rgba(0,0,0,0.5);
                    border-radius: 15px;
                    padding: 15px;
                    margin: 20px 0;
                ">
                    <h3 style="color: #FFD166; font-size: clamp(1.1rem, 4vw, 1.5rem); margin-bottom: 15px;">📊 CONSECUENCIAS</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div>
                            <h4 style="color: #FF1493; font-size: clamp(0.9rem, 3vw, 1.1rem);">💖 Afinidad</h4>
                            ${cambiosHTML}
                        </div>
                        ${exito && evento.dineroRecompensa > 0 ? `
                            <div>
                                <h4 style="color: #FFD166; font-size: clamp(0.9rem, 3vw, 1.1rem);">💰 Dinero</h4>
                                <div style="color: white; font-size: clamp(1.2rem, 4vw, 1.5rem);">+${evento.dineroRecompensa}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <button onclick="EventosDiarios.cerrarResultadoEvento()" style="
                    background: linear-gradient(135deg, ${exito ? '#4CAF50' : '#F44336'}, #8A5AF7);
                    color: white;
                    font-size: clamp(1rem, 4vw, 1.3rem);
                    padding: 12px 30px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    font-weight: bold;
                    border: 2px solid white;
                    margin: 10px 0;
                    min-width: 200px;
                    max-width: 90%;
                ">
                    ↩️ VOLVER AL INICIO
                </button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    },

    // ================================================
    // MOSTRAR RESULTADO NTR (con video)
    // ================================================
    mostrarResultadoNTR: function(evento, opcion, esOpcionFiel) {
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
            padding: 20px;
            box-sizing: border-box;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            width: 100%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border-radius: 20px;
            padding: 25px;
            border: 4px solid ${esOpcionFiel ? '#4CAF50' : '#F44336'};
            box-shadow: 0 0 40px ${esOpcionFiel ? '#4CAF50' : '#F44336'};
            position: relative;
        `;

        // Calcular cambios para mostrar
        const cambiosHTML = `
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 10px;">
                <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
                    <span style="color: #FFD166;">Nino:</span> 
                    <span style="color: ${opcion.afinidadNino > 0 ? '#4CAF50' : '#F44336'}; font-weight: bold;">
                        ${opcion.afinidadNino > 0 ? '+' : ''}${opcion.afinidadNino || 0}
                    </span>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
                    <span style="color: #FFD166;">Ichika:</span> 
                    <span style="color: ${opcion.afinidadIchika > 0 ? '#4CAF50' : '#F44336'}; font-weight: bold;">
                        ${opcion.afinidadIchika > 0 ? '+' : ''}${opcion.afinidadIchika || 0}
                    </span>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
                    <span style="color: #FFD166;">Miku:</span> 
                    <span style="color: ${opcion.afinidadMiku > 0 ? '#4CAF50' : '#F44336'}; font-weight: bold;">
                        ${opcion.afinidadMiku > 0 ? '+' : ''}${opcion.afinidadMiku || 0}
                    </span>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
                    <span style="color: #FFD166;">Yotsuba:</span> 
                    <span style="color: ${opcion.afinidadYotsuba > 0 ? '#4CAF50' : '#F44336'}; font-weight: bold;">
                        ${opcion.afinidadYotsuba > 0 ? '+' : ''}${opcion.afinidadYotsuba || 0}
                    </span>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
                    <span style="color: #FFD166;">Itsuki:</span> 
                    <span style="color: ${opcion.afinidadItsuki > 0 ? '#4CAF50' : '#F44336'}; font-weight: bold;">
                        ${opcion.afinidadItsuki > 0 ? '+' : ''}${opcion.afinidadItsuki || 0}
                    </span>
                </div>
                ${opcion.dinero > 0 ? `
                    <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px; grid-column: span 2;">
                        <span style="color: #FFD166;">Dinero:</span> 
                        <span style="color: #4CAF50; font-weight: bold;">+${opcion.dinero} soles</span>
                    </div>
                ` : ''}
            </div>
        `;

        modal.innerHTML = `
            <div style="text-align: center; position: relative;">
                <button onclick="EventosDiarios.cerrarResultadoEvento()" style="
                    position: sticky;
                    top: 0;
                    float: right;
                    background: linear-gradient(135deg, ${esOpcionFiel ? '#4CAF50' : '#F44336'}, #8A5AF7);
                    border: none;
                    color: white;
                    font-size: 24px;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                    border: 2px solid white;
                    margin-bottom: 10px;
                    z-index: 10;
                " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    ✕
                </button>

                <h1 style="
                    color: ${esOpcionFiel ? '#4CAF50' : '#F44336'};
                    font-size: clamp(1.8rem, 6vw, 3rem);
                    margin-bottom: 15px;
                    padding-right: 45px;
                ">${esOpcionFiel ? '✅ ¡DECISIÓN CORRECTA!' : '❌ NTR ACTIVADO'}</h1>

                <h2 style="color: #FFD166; font-size: clamp(1.2rem, 4vw, 2rem); margin-bottom: 20px; word-break: break-word;">
                    ${evento.titulo}
                </h2>

                <p style="color: white; font-size: 1.2rem; margin-bottom: 20px; padding: 0 20px;">
                    ${opcion.texto}
                </p>

                <div style="
                    margin: 20px 0;
                    border: 3px solid ${esOpcionFiel ? '#4CAF50' : '#F44336'};
                    border-radius: 15px;
                    overflow: hidden;
                    background: black;
                ">
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
                        <iframe
                            src="https://drive.google.com/file/d/${opcion.video}/preview"
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <div style="
                    background: rgba(0,0,0,0.5);
                    border-radius: 15px;
                    padding: 15px;
                    margin: 20px 0;
                ">
                    <h3 style="color: #FFD166; font-size: clamp(1.1rem, 4vw, 1.5rem); margin-bottom: 15px;">📊 CONSECUENCIAS</h3>
                    ${cambiosHTML}
                </div>

                <button onclick="EventosDiarios.cerrarResultadoEvento()" style="
                    background: linear-gradient(135deg, ${esOpcionFiel ? '#4CAF50' : '#F44336'}, #8A5AF7);
                    color: white;
                    font-size: clamp(1rem, 4vw, 1.3rem);
                    padding: 12px 30px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    font-weight: bold;
                    border: 2px solid white;
                    margin: 10px 0;
                    min-width: 200px;
                    max-width: 90%;
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
        
        // Actualizar barra de progreso
        this.actualizarBarraProgreso();
    },

    // Mostrar último resultado
    mostrarUltimoResultado: function() {
        const ultimoEvento = JSON.parse(localStorage.getItem('evento_diario_ultimo') || '{}');
        const evento = this.obtenerEventoHoy();
        
        if (evento && ultimoEvento.resultadoExitoMostrado) {
            // Mostrar éxito ya mostrado
            this.mostrarResultadoEvento(evento, true);
        } else if (evento && ultimoEvento.resultadoFracasoMostrado) {
            // Mostrar fracaso ya mostrado
            this.mostrarResultadoEvento(evento, false);
        } else if (evento && ultimoEvento.requisitoCumplido && !ultimoEvento.resultadoExitoMostrado) {
            // Éxito pendiente de mostrar
            this.mostrarResultadoEvento(evento, true);
            ultimoEvento.resultadoExitoMostrado = true;
            localStorage.setItem('evento_diario_ultimo', JSON.stringify(ultimoEvento));
        } else if (evento && !ultimoEvento.requisitoCumplido && ultimoEvento.fechaFracaso) {
            // Fracaso pendiente de mostrar
            this.mostrarResultadoEvento(evento, false);
            ultimoEvento.resultadoFracasoMostrado = true;
            localStorage.setItem('evento_diario_ultimo', JSON.stringify(ultimoEvento));
        } else {
            this.mostrarNotificacionEvento('No hay resultados pendientes.', '#FF9800');
        }
    },

    // Iniciar evento diario (VERSIÓN CORREGIDA - Éxito inmediato, fracaso al día siguiente)
    iniciarEventoDiario: function() {
        console.log('📅 Iniciando sistema de eventos diarios...');
        
        const ultimoEventoStr = localStorage.getItem('evento_diario_ultimo');
        const fechaHoy = this.obtenerFechaActual();
        
        if (!ultimoEventoStr) {
            // Primera vez: crear nuevo evento
            console.log('🎲 Primera vez - Creando nuevo evento...');
            const evento = this.seleccionarEventoAleatorio();
            this.guardarEventoHoy(evento);
            
            setTimeout(() => {
                this.mostrarModalEvento(evento);
            }, 500);
            return;
        }
        
        const ultimoEvento = JSON.parse(ultimoEventoStr);
        const eventoGuardado = this.obtenerEventoHoy();
        
        // CASO 1: Verificar si hay que mostrar FRACASO de ayer (VERSIÓN CORREGIDA)
        if (this.debeMostrarFracasoAyer()) {
            console.log('🎬 Mostrando video de FRACASO del día anterior...');
            
            if (eventoGuardado) {
                this.mostrarResultadoEvento(eventoGuardado, false);
                
                // Marcar como mostrado
                ultimoEvento.resultadoFracasoMostrado = true;
                localStorage.setItem('evento_diario_ultimo', JSON.stringify(ultimoEvento));
                
                // Después de mostrar fracaso, crear nuevo evento para hoy
                setTimeout(() => {
                    const nuevoEvento = this.seleccionarEventoAleatorio();
                    this.guardarEventoHoy(nuevoEvento);
                    
                    setTimeout(() => {
                        this.mostrarModalEvento(nuevoEvento);
                    }, 500);
                }, 1000);
            }
            return;
        }
        
        // CASO 2: Verificar si hay que mostrar ÉXITO pendiente de hoy
        if (ultimoEvento.fecha === fechaHoy && 
            ultimoEvento.requisitoCumplido && 
            !ultimoEvento.resultadoExitoMostrado && 
            eventoGuardado) {
            
            console.log('🎬 Mostrando video de ÉXITO pendiente de hoy...');
            this.mostrarResultadoEvento(eventoGuardado, true);
            
            ultimoEvento.resultadoExitoMostrado = true;
            localStorage.setItem('evento_diario_ultimo', JSON.stringify(ultimoEvento));
            return;
        }
        
        // CASO 3: Es un día nuevo (sin evento hoy)
        if (ultimoEvento.fecha !== fechaHoy) {
            console.log('🎲 Día nuevo - Creando nuevo evento...');
            
            // Marcar el evento anterior como fallido si no fue exitoso
            if (!ultimoEvento.requisitoCumplido && ultimoEvento.fecha) {
                ultimoEvento.fechaFracaso = ultimoEvento.fecha;
                ultimoEvento.resultadoFracasoMostrado = false;
                localStorage.setItem('evento_diario_ultimo', JSON.stringify(ultimoEvento));
            }
            
            // Crear nuevo evento para hoy
            const nuevoEvento = this.seleccionarEventoAleatorio();
            this.guardarEventoHoy(nuevoEvento);
            
            setTimeout(() => {
                this.mostrarModalEvento(nuevoEvento);
            }, 500);
            return;
        }
        
        // CASO 4: Mismo día, evento ya mostrado
        console.log('📅 Ya hay evento para hoy');
        this.actualizarBarraProgreso();
    },

    // Crear contenedor para la barra de progreso con botón toggle
    crearContenedorProgreso: function() {
        if (document.getElementById('eventos-progreso-container')) {
            return;
        }

        const contenedor = document.createElement('div');
        contenedor.id = 'eventos-progreso-container';
        contenedor.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            width: 350px;
            max-width: calc(100vw - 40px);
            transition: all 0.3s ease;
        `;

        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'toggle-progreso-btn';
        toggleBtn.innerHTML = '📅';
        toggleBtn.style.cssText = `
            position: absolute;
            top: -10px;
            right: -10px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #FF1493, #8A5AF7);
            border: 2px solid white;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: 0 0 15px rgba(255,20,147,0.5);
            z-index: 1001;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        `;
        toggleBtn.onmouseover = () => toggleBtn.style.transform = 'scale(1.1)';
        toggleBtn.onmouseout = () => toggleBtn.style.transform = 'scale(1)';
        toggleBtn.onclick = () => this.alternarVisibilidadBarra();

        const contenido = document.createElement('div');
        contenido.id = 'progreso-contenido';
        contenido.style.transition = 'opacity 0.3s ease';

        const visible = obtenerEstadoVisibilidadBarra();
        contenido.style.display = visible ? 'block' : 'none';
        toggleBtn.innerHTML = visible ? '📅' : '📌';

        contenedor.appendChild(toggleBtn);
        contenedor.appendChild(contenido);
        document.body.appendChild(contenedor);

        this.actualizarBarraProgreso();
    },

    alternarVisibilidadBarra: function() {
        const contenido = document.getElementById('progreso-contenido');
        const toggleBtn = document.getElementById('toggle-progreso-btn');
        if (!contenido || !toggleBtn) return;

        const visible = contenido.style.display !== 'none';
        const nuevaVisibilidad = !visible;
        contenido.style.display = nuevaVisibilidad ? 'block' : 'none';
        toggleBtn.innerHTML = nuevaVisibilidad ? '📅' : '📌';
        guardarEstadoVisibilidadBarra(nuevaVisibilidad);
    },

    actualizarBarraProgreso: function() {
        const contenido = document.getElementById('progreso-contenido');
        if (contenido) {
            contenido.innerHTML = SistemaProgresoEventos.crearBarraProgreso();
        }
    },

    // Verificar progreso del evento (llamar cuando se completa un mazo) - SOLO PARA EVENTOS NORMALES
    verificarProgresoEvento: function() {
        const estadisticas = sistemaEconomia.obtenerEstadisticas();
        const ultimoEvento = JSON.parse(localStorage.getItem('evento_diario_ultimo') || '{}');
        const eventoActual = this.obtenerEventoHoy();
        const fechaHoy = this.obtenerFechaActual();
        
        // Solo verificar si hay evento hoy, no es NTR y no está cumplido aún
        if (ultimoEvento.fecha === fechaHoy && 
            !ultimoEvento.requisitoCumplido && 
            eventoActual && 
            eventoActual.tipo !== 'ntr') {
            
            if (estadisticas.completados100 >= eventoActual.cantidadRequerida) {
                this.marcarRequisitoCumplido(); // Esto mostrará éxito inmediato
            }
        }
        
        // Verificar al final del día (para marcar como fallido)
        this.verificarFinDelDia();
    },

    // Verificar si terminó el día y marcar como fallido
    verificarFinDelDia: function() {
        const ultimoEvento = JSON.parse(localStorage.getItem('evento_diario_ultimo') || '{}');
        const fechaHoy = this.obtenerFechaActual();
        const ahora = new Date();
        const hora = ahora.getHours();
        
        // Si son más de las 23:59 (o sea, después de medianoche) pero aún no cambia la fecha
        // Este es un mecanismo de respaldo
        if (hora >= 0 && hora < 3) { // Entre 0 y 3 AM
            if (ultimoEvento.fecha === fechaHoy && !ultimoEvento.requisitoCumplido) {
                this.marcarEventoFallido();
            }
        }
    },

    // Inicializar todo
    inicializar: function() {
        // Crear contenedor de progreso con toggle
        this.crearContenedorProgreso();

        // Iniciar evento diario con reintento si las dependencias no están listas
        const intentarInicio = () => {
            if (typeof sistemaEconomia !== 'undefined' && typeof quintillizasRPG !== 'undefined') {
                this.iniciarEventoDiario();
                
                // Verificar progreso cada minuto (para éxito inmediato)
                setInterval(() => {
                    this.verificarProgresoEvento();
                }, 60000); // Cada minuto
                
            } else {
                console.warn('⏳ Esperando dependencias para iniciar evento diario...');
                setTimeout(intentarInicio, 1000);
            }
        };
        
        setTimeout(intentarInicio, 1500);

        // Hook para actualizar barra al mostrar resultado
        const originalMostrarResultado = this.mostrarResultadoEvento;
        this.mostrarResultadoEvento = function(evento, exito) {
            originalMostrarResultado.call(this, evento, exito);
            this.actualizarBarraProgreso();
        };
    }
};

// ================================================
// CHECKER DE PROGRESO PARA EVENTOS DIARIOS
// ================================================

const EventosChecker = {
    // Llamar esta función cada vez que se completa un mazo al 100%
    verificarProgresoEvento: function() {
        if (typeof EventosDiarios !== 'undefined' && typeof sistemaEconomia !== 'undefined') {
            EventosDiarios.verificarProgresoEvento();
        }
    },
    
    // Inicializar checker (hook en sistemaEconomia)
    inicializar: function() {
        if (typeof sistemaEconomia !== 'undefined' && sistemaEconomia.actualizarProgreso) {
            const originalActualizarProgreso = sistemaEconomia.actualizarProgreso;
            sistemaEconomia.actualizarProgreso = function(contenedor, sub, mazo, porcentaje) {
                // Llamar a la función original
                originalActualizarProgreso.call(this, contenedor, sub, mazo, porcentaje);
                
                // Verificar evento INMEDIATAMENTE si se completó al 100%
                if (porcentaje === 100) {
                    EventosChecker.verificarProgresoEvento();
                }
            };
            console.log('✅ EventosChecker inicializado correctamente');
        } else {
            console.warn('⚠️ No se pudo inicializar EventosChecker: sistemaEconomia no disponible');
        }
    }
};

// Inicializar eventos y checker al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    EventosDiarios.inicializar();
    
    // Inicializar checker después de que sistemaEconomia esté listo
    setTimeout(() => {
        EventosChecker.inicializar();
    }, 2000);
});

// Exponer globalmente
window.EventosDiarios = EventosDiarios;
window.SistemaProgresoEventos = SistemaProgresoEventos;
window.EventosChecker = EventosChecker;
