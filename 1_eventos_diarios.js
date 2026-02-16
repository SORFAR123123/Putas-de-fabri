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

// ================================================
// SISTEMA DE PROGRESO DE EVENTOS DIARIOS (BARRA VISIBLE CON TOGGLE)
// ================================================

const SistemaProgresoEventos = {
    // Inicializar contadores
    inicializarContadores: function() {
        if (!localStorage.getItem('eventos_progreso')) {
            const progresoInicial = {
                totalEventos: EVENTOS_DIARIOS.length,
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
    return estado === null ? true : estado === 'true'; // visible por defecto
}

function guardarEstadoVisibilidadBarra(visible) {
    localStorage.setItem('eventos_progreso_visible', visible);
}

// ================================================
// SISTEMA DE EVENTOS DIARIOS (CORREGIDO)
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
            // Asegurarse de que sistemaEconomia existe
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

    // Aplicar consecuencias del evento (VERSIÓN CORREGIDA Y CON LOGS)
    aplicarConsecuencias: function(evento, exito) {
        console.log('🎯 Aplicando consecuencias del evento:', evento.id, 'Éxito:', exito);
        
        // Verificar dependencias
        if (typeof quintillizasRPG === 'undefined') {
            console.error('❌ quintillizasRPG no está definido. No se puede aplicar afinidad.');
            this.mostrarNotificacionEvento('❌ Error: RPG no disponible', '#F44336');
            return false;
        }
        if (typeof sistemaEconomia === 'undefined') {
            console.error('❌ sistemaEconomia no está definido. No se puede dar dinero.');
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
                
                // Mostrar notificación visual
                this.mostrarNotificacionEvento(
                    `💖 ${personajeId}: ${cambio > 0 ? '+' : ''}${cambio} afinidad`,
                    cambio > 0 ? '#4CAF50' : '#F44336'
                );
            } else {
                console.warn(`⚠️ Personaje ${personajeId} no encontrado en quintillizasRPG`);
            }
        });

        // Dar dinero si fue éxito
        if (exito && evento.dineroRecompensa > 0) {
            sistemaEconomia.agregarDinero(evento.dineroRecompensa);
            console.log(`💰 +${evento.dineroRecompensa} soles por evento`);
            this.mostrarNotificacionEvento(`💰 +${evento.dineroRecompensa} soles`, '#FFD166');
            
            // Actualizar el contador de dinero en la página principal si existe
            if (typeof actualizarContadorDineroInicio === 'function') {
                actualizarContadorDineroInicio();
            }
        }

        // Guardar cambios en RPG
        if (quintillizasRPG.guardarDatosPersonajes) {
            quintillizasRPG.guardarDatosPersonajes();
        }
        
        // Registrar en el sistema de progreso
        SistemaProgresoEventos.registrarResultado(evento.id, exito);
        
        return true;
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

    // Mostrar último resultado
    mostrarUltimoResultado: function() {
        const evento = this.obtenerEventoHoy();
        const yaProcesado = this.eventoYaProcesado();
        
        if (evento && yaProcesado) {
            const exito = this.verificarRequisito(evento);
            this.mostrarResultadoEvento(evento, exito);
        } else if (evento) {
            alert('El evento de hoy aún no ha sido procesado. Completa el requisito primero.');
        } else {
            alert('No hay eventos recientes.');
        }
    },

    // Iniciar evento diario (VERSIÓN CORREGIDA)
    iniciarEventoDiario: function() {
        console.log('📅 Iniciando sistema de eventos diarios...');
        
        // Verificar si es primera vez hoy
        if (!this.verificarEventoHoy()) {
            console.log('📅 Ya hubo evento hoy');
            
            // Verificar si hay que mostrar resultado
            const evento = this.obtenerEventoHoy();
            const yaProcesado = this.eventoYaProcesado();
            const resultadoMostrado = this.resultadoYaMostrado();
            
            if (evento && !yaProcesado && !resultadoMostrado) {
                console.log('🎯 Procesando resultado del evento...');
                
                // Verificar dependencias antes de procesar
                if (typeof sistemaEconomia === 'undefined' || typeof quintillizasRPG === 'undefined') {
                    console.warn('⏳ Dependencias no listas. Reintentando en 2 segundos...');
                    setTimeout(() => this.iniciarEventoDiario(), 2000);
                    return;
                }
                
                // Verificar si se cumplió el requisito
                const exito = this.verificarRequisito(evento);
                console.log('✅ Requisito verificado, éxito:', exito);
                
                // Aplicar consecuencias
                const aplicadas = this.aplicarConsecuencias(evento, exito);
                
                if (aplicadas) {
                    // Marcar como procesado
                    this.marcarEventoProcesado();
                    
                    // Mostrar resultado
                    setTimeout(() => {
                        this.mostrarResultadoEvento(evento, exito);
                        this.marcarResultadoMostrado();
                        this.actualizarBarraProgreso();
                    }, 1000);
                } else {
                    console.error('❌ No se pudieron aplicar las consecuencias');
                }
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

        // Botón toggle
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

        // Contenedor del contenido
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

    // Inicializar todo
    inicializar: function() {
        // Crear contenedor de progreso con toggle
        this.crearContenedorProgreso();

        // Iniciar evento diario con reintento si las dependencias no están listas
        const intentarInicio = () => {
            if (typeof sistemaEconomia !== 'undefined' && typeof quintillizasRPG !== 'undefined') {
                this.iniciarEventoDiario();
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

// Inicializar eventos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    EventosDiarios.inicializar();
});

// Exponer globalmente
window.EventosDiarios = EventosDiarios;
window.SistemaProgresoEventos = SistemaProgresoEventos;
