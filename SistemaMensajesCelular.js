// ============================================================
//  SISTEMA DE MENSAJES CELULAR — QUINTILLIZAS
//  Cada ciertos mensajes, una chica te llama o manda mensaje.
//  Aparece un chat secundario de celular.
//  Al terminar, la chica con la que estabas reacciona al contexto.
// ============================================================

const CELULAR_CONFIG = {
    mensajesMinimos: 4,       // Mínimo de mensajes antes de que suene el celular
    mensajesMaximos: 4,       // Forzar exactamente cada 4 mensajes (modo test)
    probabilidad: 1.0,        // 100% de probabilidad (siempre se dispara)
    tiposLlamada: ["llamada", "mensaje"],  // Puede ser llamada o mensaje de texto
};

// Estado del sistema de celular
let celularActivo         = false;
let celularChicaActual    = null;
let celularHistorial      = [];
let celularContador       = 0;
let celularSiguienteEn    = 0;
let celularEsLlamada      = false;  // true = llamada, false = mensaje de texto
let celularUIVisible      = false;

// ============================================================
//  FRASES DE ENTRADA — cuando el celular suena
// ============================================================

const FRASES_LLAMADA_ENTRADA = {
    Ichika:  "*tu celular vibra en el bolsillo* 📱 *La pantalla muestra: **Ichika está llamando...** *con un tono suave y melódico*",
    Nino:    "*tu celular suena de repente* 📱 *Pantalla: **Nino** — ¡Contesta ya! *el tono es impaciente*",
    Miku:    "*celular vibrando suavemente* 📱 *En la pantalla: **Miku**... *tono tranquilo*",
    Yotsuba: "*¡BRRR BRRR! Tu celular suena fuerte* 📱 ***YOTSUBA*** *— el tono es súper animado*",
    Itsuki:  "*celular sonando con calma* 📱 ***Itsuki** está llamando... *tono normal*",
};

const FRASES_MENSAJE_ENTRADA = {
    Ichika:  "*tu celular vibra* 📱 *Notificación de **Ichika**: \"Hola~ ¿Estás ocupado? 💕\"*",
    Nino:    "*celular suena* 📱 *Mensaje de **Nino**: \"Oye, contesta cuando puedas. No me ignores.\"*",
    Miku:    "*vibración suave del celular* 📱 ***Miku** te escribió: \"...Hola. ¿Tienes un momento?\"",
    Yotsuba: "*¡Tu celular casi explota de tantas notificaciones!* 📱 ***Yotsuba**: \"HOLA HOLA HOLA ¿QUÉ HACES?! 💨💨\"",
    Itsuki:  "*celular vibra* 📱 ***Itsuki**: \"Necesito hablar contigo. ¿Puedes responder?\"",
};

// ============================================================
//  DIALOGOS DE CELULAR — respuestas automáticas de las chicas
//  Se usan cuando el usuario NO responde y el sistema genera respuestas.
// ============================================================

const DIALOGOS_CELULAR_AUTOMATICOS = {
    Ichika: [
        "*se ríe suavemente al otro lado* Fufu... ¿Estás bien? *pausa* Me imaginaba que estarías ocupado~",
        "*suspira al teléfono* Ya veo... Bueno, no importa. *voz suave* Solo quería saber de ti~",
        "*ríe por lo bajo* Tranquilo, no te retendré mucho. *pausa cálida* Pero cuéntame algo rápido~",
        "*voz melosa* Sabía que dirías eso... *sonríe* Eres tan predecible a veces~",
    ],
    Nino: [
        "*resopla al teléfono* ¡¿En serio?! *suspira* Bueno... supongo que no puedo obligarte.",
        "*cruza los brazos al otro lado* Hmph. Está bien. *pausa* Pero luego me debes una, ¿eh?",
        "*se escucha un suspiro largo* ...Fine. *voz más suave* Hablamos después entonces.",
        "*golpea suavemente el teléfono* ¡No me cuelgues tan rápido al menos! *suspira*",
    ],
    Miku: [
        "*silencio breve* ...Ya entiendo. *voz tranquila* No te preocupes.",
        "*pausa larga* ...Está bien. *voz suave* Hablamos luego entonces...",
        "*se escucha un suspiro suave* ...Sí. *voz calmada* Cuídate mucho.",
        "*voz baja* ...Entendido. *pausa* Que estés bien.",
    ],
    Yotsuba: [
        "*se ríe a carcajadas* ¡¡OK OK!! *voz super animada* ¡Hablamos luego entonces!",
        "*grita un poco* ¡¡¿EN SERIO?! *suspira fuerte* Bueno bueno... ¡luego hablamos!",
        "*voz triste un momento* Aww... *pero se anima* ¡OK! ¡Nos vemos pronto!",
        "*se ríe* ¡¡Jajaja!! ¡Está bien! *voz alegre* ¡No tardes en escribirme!",
    ],
    Itsuki: [
        "*suspira* Entiendo. *voz seria pero amable* Hablamos cuando puedas entonces.",
        "*pausa* ...Está bien. *voz firme* Pero no olvides lo que íbamos a hablar.",
        "*se escucha un suspiro* Bueno. *voz calmada* Que te vaya bien.",
        "*voz seria* ...Ok. *pausa* Nos vemos luego.",
    ],
};

// ============================================================
//  REACCIONES POST-LLAMADA — la chica actual reacciona
//  Estas son las frases que dice la chica con la que estabas
//  DESPUÉS de que terminas la llamada/mensaje con otra chica.
// ============================================================

const REACCIONES_POST_LLAMADA = {
    // --- ICHIKA reacciona ---
    Ichika: {
        Nino: [
            "*te mira con una sonrisa que no llega a los ojos* ¿Nino? *inclina la cabeza* ¿Estaban en medio de algo importante? *se acerca y te toma de la mano* ...No, no importa. Continuemos~",
            "*observa tu celular con curiosidad* ¿Hmm? ¿Nino te llamaba? *se muerde el labio inferior* Espero no haberte interrumpido en nada... *sonríe con calma* Pero ahora estás aquí conmigo~",
            "*te mira guardando el celular* ¿Todo bien con Nino? *se sienta a tu lado y apoya su cabeza en tu hombro* ...Me pregunto qué querría~ *dice con voz suave y algo traviesa*",
        ],
        Miku: [
            "*te observa con curiosidad* ¿Miku? *sonríe con ternura* Espero no haber interrumpido algo importante... *te toma de la mano* Pero ahora que estás de vuelta~ ¿qué decíamos?",
            "*inclina la cabeza* Miku... *se acerca un poco más* ¿Estabas hablando con ella de algo? *sonríe con calma* No te preocupes, puedo esperar~",
        ],
        Yotsuba: [
            "*sus ojos brillan con curiosidad* ¿Yotsuba? *se ríe* Esa chica siempre es tan energética~ *te toma del brazo* ¡Pero ahora me tienes a mí! ¿Verdad?",
            "*te mira con una sonrisa divertida* Yotsuba te llamaba... *se acerca y te susurra* ¿Estaban planeando algo sin mí? *ríe suavemente*",
        ],
        Itsuki: [
            "*te observa con atención* ¿Itsuki? *se cruza de brazos con una sonrisa* Espero que no te esté quitando tiempo de nuestras citas~ *sonríe con calma* ¿Todo bien?",
            "*mira tu celular* Itsuki... *se acerca un poco* ¿Necesitabas hablar con ella? *toma tu mano* Está bien, pero no te alejes mucho~",
        ],
    },

    // --- NINO reacciona ---
    Nino: {
        Ichika: [
            "*frunce el ceño* ¿Ichika? *cruza los brazos* ¿Qué quería? *te mira con ojos entrecerrados* No me digas que estabas... *se sonroja* ...No, no importa. ¡Continuemos!",
            "*resopla* Ichika te llamaba... *te mira de reojo* Espero que no te esté robando atención. *se acerca y te agarra del brazo* Porque tú eres mío, ¿entiendes?",
            "*te observa con suspicacia* ¿Hablabas con Ichika? *murmura* Esa hermana siempre tan perfecta... *niega con la cabeza* ¡Olvídalo! ¿En qué estábamos?",
        ],
        Miku: [
            "*levanta una ceja* ¿Miku? *suspira* Esa chica siempre tan tranquila... *te mira* ¿Todo bien? *te agarra de la manga* No me dejes hablando solo así de la nada.",
            "*te observa* ¿Miku te escribió? *se acerca un poco* Espero que no sea nada importante... *murmura* Porque yo sí tengo cosas que decirte...",
        ],
        Yotsuba: [
            "*resopla fuerte* ¿Yotsuba? *cruza los brazos* Esa energica... *te mira* ¿Estabas bien? *te agarra del brazo con fuerza* No te vayas a escapar conmigo alrededor.",
            "*frunce el ceño* ¿Yotsuba te llamó? *suspira* Siempre interrumpiendo... *te mira a los ojos* ¿Pero ahora podemos continuar o qué?",
        ],
        Itsuki: [
            "*te mira con el ceño fruncido* ¿Itsuki? *resopla* ¿Qué quería ahora? *te agarra del brazo* No me dejes colgada así de la nada, ¿entiendes?",
            "*cruza los brazos* Itsuki te llamaba... *murmura* Siempre con sus cosas de la menor responsable... *te mira* ¿Todo bien al menos?",
        ],
    },

    // --- MIKU reacciona ---
    Miku: {
        Ichika: [
            "*...te observa en silencio un momento* Ichika. *baja la mirada* ...¿Todo bien? *pausa larga* ...Está bien. Continuemos.",
            "*silencio breve* ...Ichika. *levanta la vista* ...¿Necesitabas hablar con ella? *voz calmada* ...No hay problema. Pero... *pausa* ...estoy aquí.",
        ],
        Nino: [
            "*...te mira* Nino. *pausa* ...¿Estabas hablando con Nino? *baja la mirada* ...Entiendo. *voz suave* ...¿Podemos continuar?",
            "*silencio* ...Nino. *suspira suavemente* ...¿Todo bien con ella? *te mira con calma* ...Está bien. Estoy acostumbrada...",
        ],
        Yotsuba: [
            "*...parpadea* Yotsuba. *una sonrisa muy leve* ...Siempre es tan energética. *pausa* ...¿Continuamos?",
            "*te observa* ...Yotsuba te llamó. *cierra su libro un momento* ...¿Estás bien? *voz tranquila* ...Me alegra que hayas vuelto.",
        ],
        Itsuki: [
            "*...te mira en silencio* Itsuki. *asiente levemente* ...¿Todo bien? *pausa* ...Continuemos entonces.",
            "*baja la mirada* ...Itsuki. *voz suave* ...¿Necesitabas algo con ella? *pausa* ...No te preocupes. Estoy aquí.",
        ],
    },

    // --- YOTSUBA reacciona ---
    Yotsuba: {
        Ichika: [
            "*te mira con los ojos bien abiertos* ¿Ichika? *se acerca y te agarra del brazo* ¿¿¿Qué te dijo??? ¡¿Estabas hablando con ella?! *se ríe* ¡Cuéntame todo!",
            "*salta un poco* ¡¿Ichika te llamó?! *te agarra de los hombros* ¿¿¿Qué quería??? *se emociona* ¡Vamos, dime dime dime!",
        ],
        Nino: [
            "*te mira con curiosidad* ¿Nino? *se acerca mucho* ¿¿¿Qué te dijo Nino??? *ojos brillantes* ¡¿Se enojó?! ¡¿Estabas con ella?!",
            "*te agarra del brazo* ¡¿Nino?! *se emociona* ¡¿Te dijo algo?! ¿¿¿Estabas hablando con ella?! ¡Cuéntame todo!",
        ],
        Miku: [
            "*te observa* ¿Miku? *se acerca* ¿¿¿Qué quería??? *se sienta a tu lado* ¿Estaba hablando de historia otra vez? *se ríe*",
            "*ojos curiosos* ¿Miku te escribió? *te agarra del brazo* ¿¿¿De qué hablaron??? ¡Vamos, no seas tímido!",
        ],
        Itsuki: [
            "*te mira con emoción* ¿Itsuki? *se acerca mucho* ¿¿¿Qué quería??? ¿¿¿Estaba enojada?! ¡Dime todo!",
            "*salta un poco* ¡¿Itsuki te llamó?! *te agarra del brazo* ¿¿¿Qué te dijo??? ¡Cuéntame cuéntame cuéntame!",
        ],
    },

    // --- ITSUKI reacciona ---
    Itsuki: {
        Ichika: [
            "*te observa con seriedad* ¿Ichika? *cruza los brazos* ¿Qué quería? *suspira* Espero que no te esté distrayendo de lo nuestro... *te mira a los ojos* ¿Todo bien?",
            "*frunce el ceño* Ichika... *baja la mirada* ¿Necesitabas hablar con ella? *suspira* ...Está bien. Pero ahora me debes atención.",
        ],
        Nino: [
            "*resopla* ¿Nino? *cruza los brazos* Esa chica siempre tan intensa... *te mira* ¿Todo bien? *suspira* Espero que no te haya estresado.",
            "*te observa* Nino te llamaba... *murmura* Siempre con sus dramitas... *te mira* ¿Estás bien al menos?",
        ],
        Miku: [
            "*te observa* ¿Miku? *asiente* ...¿Todo bien? *pausa* Espero que no fuera nada urgente. *suspira* ¿Continuamos?",
            "*mira tu celular* Miku... *asiente levemente* ...¿Necesitabas algo con ella? *voz calmada* ...Está bien.",
        ],
        Yotsuba: [
            "*resopla* ¿Yotsuba? *niega con la cabeza sonriendo* Esa chica nunca cambia... *te mira* ¿Te dijo algo raro? *se ríe*",
            "*te observa con una sonrisa* Yotsuba... *sacude la cabeza* Siempre tan energética. *te mira* ¿Estás bien después de eso?",
        ],
    },
};

// ============================================================
//  DIÁLOGOS DE DESPEDIDA — cuando terminas la llamada/mensaje
// ============================================================

const DESPEDIDAS_CELULAR = {
    Ichika: [
        "*voz suave al teléfono* Bueno... fue lindo hablar contigo~ *pausa* Te extraño, ¿sabes? *cuelga con delicadeza*",
        "*se ríe suavemente* Fufu... está bien. *pausa cálida* Cuídate mucho~ *beso suave al teléfono antes de colgar*",
    ],
    Nino: [
        "*resopla* ¡Fine! *pero suena cariñosa* Cuídate, ¿eh? *cuelga un poco brusca pero se nota que le importas*",
        "*suspira* Ok, ok. *voz más suave* No tardes en escribirme. *cuelga*",
    ],
    Miku: [
        "...Está bien. *pausa* ...Cuídate. *cuelga suavemente*",
        "*voz baja* ...Hablamos luego. *pausa* ...Te extraño un poco. *cuelga*",
    ],
    Yotsuba: [
        "*¡OK OK!* *se ríe* ¡¡Nos vemos luego!! *cuelga súper animada*",
        "*¡Bye bye!* *se ríe a carcajadas* ¡¡Escríbeme pronto!! *cuelga de golpe*",
    ],
    Itsuki: [
        "*suspira* Está bien. *voz seria* Nos vemos luego. *cuelga*",
        "*asiente* Ok. *pausa* ...Cuídate. *cuelga con calma*",
    ],
};

// ============================================================
//  CONTADOR DE MENSAJES — se llama cada vez que se envía un mensaje
// ============================================================

function celularContarTurno() {
    if (celularActivo) return; // No contar si ya hay una llamada activa

    celularContador++;

    if (celularSiguienteEn === 0) {
        celularSiguienteEn = Math.floor(Math.random() * (CELULAR_CONFIG.mensajesMaximos - CELULAR_CONFIG.mensajesMinimos + 1)) + CELULAR_CONFIG.mensajesMinimos;
    }

    if (celularContador >= celularSiguienteEn && Math.random() < CELULAR_CONFIG.probabilidad) {
        celularContador = 0;
        celularSiguienteEn = 0;
        iniciarLlamadaCelular();
    }
}

// ============================================================
//  INICIAR LLAMADA CELULAR
// ============================================================

async function iniciarLlamadaCelular() {
    // No iniciar si ya hay una llamada activa
    if (celularActivo) return;

    // Seleccionar una chica al azar que NO sea la que ya está en escena
    const chicasDisponibles = Object.keys(CHICAS).filter(nombre => {
        // No puede ser la misma chica con la que estás hablando
        return !quintChicasActivas.has(nombre);
    });

    // Si todas las chicas están en escena, permitir cualquiera menos la última que habló
    if (chicasDisponibles.length === 0) {
        // Obtener la última chica que habló
        let ultimaChica = null;
        for (let i = quintHistorial.length - 1; i >= 0; i--) {
            const msg = quintHistorial[i];
            if (msg.role === "assistant") {
                try {
                    const parsed = typeof msg.content === "string" ? JSON.parse(msg.content) : msg.content;
                    if (parsed.chicasQueHablan?.[0]?.nombre) {
                        ultimaChica = parsed.chicasQueHablan[0].nombre;
                        break;
                    }
                } catch {}
            }
        }
        // Todas disponibles excepto la última que habló
        const todasMenosUltima = Object.keys(CHICAS).filter(nombre => nombre !== ultimaChica);
        celularChicaActual = todasMenosUltima[Math.floor(Math.random() * todasMenosUltima.length)];
    } else {
        celularChicaActual = chicasDisponibles[Math.floor(Math.random() * chicasDisponibles.length)];
    }

    celularEsLlamada = Math.random() > 0.4; // 60% llamada, 40% mensaje
    celularActivo = true;
    celularHistorial = [];

    // Guardar el historial previo para contexto post-llamada
    const contextoPrevio = [...quintHistorial].slice(-6);

    // Mostrar la notificación del celular
    mostrarNotificacionCelular(celularChicaActual, celularEsLlamada);

    // Pequeña pausa y luego abrir el chat del celular
    await new Promise(r => setTimeout(r, celularEsLlamada ? 2000 : 1500));

    mostrarChatCelular(celularChicaActual, celularEsLlamada);
}

// ============================================================
//  MOSTRAR NOTIFICACIÓN DE CELULAR
// ============================================================

function mostrarNotificacionCelular(nombreChica, esLlamada) {
    const chat = document.getElementById("quint-chat-mensajes");
    if (!chat) return;

    const frase = esLlamada
        ? FRASES_LLAMADA_ENTRADA[nombreChica]
        : FRASES_MENSAJE_ENTRADA[nombreChica];

    const notif = document.createElement("div");
    notif.className = "quint-celular-notif";
    notif.innerHTML = `
        <div class="celular-notif-icon">📱</div>
        <div class="celular-notif-text">${frase}</div>
        <button class="celular-notif-btn" onclick="abrirChatCelularDesdeNotif('${nombreChica}', ${esLlamada})">
            ${esLlamada ? "Contestar" : "Responder"}
        </button>
        <button class="celular-notif-btn celular-notif-btn-ignore" onclick="ignorarCelular()">
            ${esLlamada ? "Ignorar" : "Cerrar"}
        </button>
    `;

    chat.appendChild(notif);
    quintScrollFondo();
}

function abrirChatCelularDesdeNotif(nombreChica, esLlamada) {
    const notif = document.querySelector(".quint-celular-notif");
    if (notif) notif.remove();
    mostrarChatCelular(nombreChica, esLlamada);
}

function ignorarCelular() {
    const notif = document.querySelector(".quint-celular-notif");
    if (notif) notif.remove();
    celularActivo = false;
    celularChicaActual = null;
    celularHistorial = [];
    quintAgregarSistema("[ Llamada ignorada ]");
}

// ============================================================
//  MOSTRAR CHAT DE CELULAR
// ============================================================

function mostrarChatCelular(nombreChica, esLlamada) {
    celularUIVisible = true;
    const app = document.getElementById("quint-app");

    // Crear overlay del celular
    const overlay = document.createElement("div");
    overlay.id = "quint-celular-overlay";
    overlay.innerHTML = `
        <div id="quint-celular-panel">
            <div id="quint-celular-header">
                <div class="celular-header-info">
                    <span class="celular-header-icon">📱</span>
                    <span class="celular-header-name">${nombreChica}</span>
                    <span class="celular-header-type">${esLlamada ? "📞 Llamada" : "💬 Mensaje"}</span>
                </div>
                <button id="quint-celular-cerrar" onclick="terminarLlamadaCelular()">✕</button>
            </div>
            <div id="quint-celular-mensajes">
                <div class="celular-mensaje-sistema">
                    ${esLlamada 
                        ? `📞 <strong>Llamada con ${nombreChica}</strong><br><em>Conectado...</em>`
                        : `💬 <strong>Chat con ${nombreChica}</strong><br><em>En línea...</em>`
                    }
                </div>
            </div>
            <div id="quint-celular-input-area">
                <textarea id="quint-celular-input" placeholder="Escribe tu mensaje..." rows="1"
                    onkeydown="celularKeyHandler(event)"></textarea>
                <button id="quint-celular-btn-enviar" onclick="enviarMensajeCelular()">Enviar</button>
            </div>
            <div id="quint-celular-btns-footer">
                <button class="celular-footer-btn" onclick="terminarLlamadaCelular()">
                    📞 Terminar ${esLlamada ? "Llamada" : "Conversación"}
                </button>
            </div>
        </div>
    `;

    app.appendChild(overlay);

    // Primer mensaje automático de la chica
    setTimeout(() => {
        const primerMensaje = obtenerPrimerMensajeCelular(nombreChica, esLlamada);
        agregarMensajeCelularChica(nombreChica, primerMensaje);
    }, 800);

    // Focus en el input
    setTimeout(() => {
        const input = document.getElementById("quint-celular-input");
        if (input) input.focus();
    }, 300);
}

// ============================================================
//  OBTENER PRIMER MENSAJE DE LA CHICA
// ============================================================

function obtenerPrimerMensajeCelular(nombreChica, esLlamada) {
    const saludosLlamada = {
        Ichika:  "*voz suave al teléfono* Hola~ ¿Te pillo en buen momento? *se ríe suavemente* Solo quería escucharte un ratito~",
        Nino:    "*voz algo brusca pero cariñosa* ¡Oye! ¿Qué haces? *pausa* ...No es que te extrañe ni nada. Solo quería saber de ti.",
        Miku:    "...Hola. *pausa* ¿Estás ocupado? *voz baja* Solo... quería hablar un momento contigo.",
        Yotsuba: "¡¡¡HOLA HOLA!!! *grita un poco al teléfono* ¡¿Qué haces?! ¡¿Qué haces?! ¡Cuéntame todo! *se ríe a carcajadas*",
        Itsuki:  "Hola. *voz seria* ¿Tienes un momento? Quería hablar contigo sobre... *pausa* ...bueno, ya sabes.",
    };

    const saludosMensaje = {
        Ichika:  "*mensaje de texto* Hey~ ¿Cómo estás? 💕 *se escribe otro mensaje rápido* Me acordé de ti y quise escribirte~",
        Nino:    "*mensaje* Oye. ¿Qué haces? *se escribe otro* No me dejes en visto, ¿eh?",
        Miku:    "...Hola. *mensaje* ¿Estás bien? *pausa antes de escribir otro* ...Solo quería saber de ti.",
        Yotsuba: "¡¡¡HOLA!!! 💨💨💨 *muchos mensajes seguidos* ¿¿¿QUÉ HACES??? ¿¿¿CÓMO ESTÁS??? ¡¡¡CUÉNTAME TODO!!!",
        Itsuki:  "*mensaje* Hola. ¿Tienes un momento? *se escribe otro* Necesito hablar contigo sobre algo.",
    };

    return esLlamada ? saludosLlamada[nombreChica] : saludosMensaje[nombreChica];
}

// ============================================================
//  AGREGAR MENSAJE DE LA CHICA AL CELULAR
// ============================================================

function agregarMensajeCelularChica(nombreChica, texto) {
    const container = document.getElementById("quint-celular-mensajes");
    if (!container) return;

    const msg = document.createElement("div");
    msg.className = "celular-mensaje-chica";

    const color = CHICAS[nombreChica]?.color || "#a0a8c0";
    msg.style.borderColor = color + "55";
    msg.style.background  = color + "15";

    msg.innerHTML = `
        <span class="celular-mensaje-nombre" style="color:${color}">${nombreChica}:</span><br>
        <span class="celular-mensaje-texto">${texto}</span>
    `;

    container.appendChild(msg);
    scrollCelularFondo();

    celularHistorial.push({ role: "assistant", nombre: nombreChica, content: texto });
}

// ============================================================
//  AGREGAR MENSAJE DEL USUARIO AL CELULAR
// ============================================================

function agregarMensajeCelularUsuario(texto) {
    const container = document.getElementById("quint-celular-mensajes");
    if (!container) return;

    const msg = document.createElement("div");
    msg.className = "celular-mensaje-usuario";
    msg.innerHTML = `<span class="celular-mensaje-texto">${texto}</span>`;

    container.appendChild(msg);
    scrollCelularFondo();

    celularHistorial.push({ role: "user", content: texto });
}

// ============================================================
//  ENVIAR MENSAJE POR CELULAR
// ============================================================

async function enviarMensajeCelular() {
    const input = document.getElementById("quint-celular-input");
    if (!input) return;

    const texto = input.value.trim();
    if (!texto) return;

    input.value = "";
    input.style.height = "auto";

    agregarMensajeCelularUsuario(texto);

    // Mostrar typing
    mostrarTypingCelular(celularChicaActual);

    // Generar respuesta de la chica
    const respuesta = await generarRespuestaCelular(celularChicaActual, texto);

    ocultarTypingCelular();

    if (respuesta) {
        agregarMensajeCelularChica(celularChicaActual, respuesta);
    }
}

// ============================================================
//  KEY HANDLER PARA CELULAR (Enter para enviar)
// ============================================================

function celularKeyHandler(e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        enviarMensajeCelular();
    }
}

// ============================================================
//  GENERAR RESPUESTA DE CELULAR (usa la API como chatbot normal)
// ============================================================

async function generarRespuestaCelular(nombreChica, mensajeUsuario) {
    const chica = CHICAS[nombreChica];
    if (!chica) {
        const opciones = DIALOGOS_CELULAR_AUTOMATICOS[nombreChica];
        return opciones[Math.floor(Math.random() * opciones.length)];
    }

    // System prompt optimizado para chatbot dinámico
    const systemPrompt = `Eres ${nombreChica} de las Quintillizas Nakano hablando por teléfono/celular con el usuario.

PERSONALIDAD:
${chica.personalidad}

INSTRUCCIONES:
- Estás teniendo una conversación de celular/chat con el usuario
- Responde de manera natural, dinámica y coherente con tu personalidad
- Mantén los mensajes cortos, como mensajes de celular reales (2-5 líneas)
- Usa *asteriscos* para acciones físicas
- NO repitas mensajes predefinidos — responde de forma ÚNICA al mensaje del usuario
- Sé creativa y natural en tu respuesta
- Si es llamada telefónica: habla como si estuvieras al teléfono
- Si es mensaje de texto: escribe como mensajes de chat

IMPORTANTE: Responde SOLO con tu diálogo y acciones. Sin JSON, sin formato extra. Solo texto con *asteriscos* para acciones.`;

    // Construir historial de conversación para contexto
    const conversationHistory = [];
    
    // Agregar mensajes previos del chat de celular
    celularHistorial.slice(-10).forEach(msg => {
        if (msg.role === "user") {
            conversationHistory.push({ role: "user", content: msg.content });
        } else if (msg.role === "assistant") {
            conversationHistory.push({ role: "assistant", content: msg.content });
        }
    });

    // Agregar el mensaje actual del usuario
    conversationHistory.push({ role: "user", content: mensajeUsuario });

    console.log(`[CELULAR API] Generando respuesta para ${nombreChica}...`);

    // Intentar con 3 modelos en orden
    const modelos = [MODELO_PRINCIPAL, MODELO_ALTERNATIVO, MODELO_TERCERO];
    
    for (let intento = 0; intento < modelos.length; intento++) {
        const modelo = modelos[intento];
        
        try {
            const raw = await quintLlamarAPI(conversationHistory, modelo, systemPrompt);
            
            if (raw) {
                // Limpiar respuesta
                let limpio = raw.trim();
                
                // Remover formato markdown si existe
                limpio = limpio.replace(/^```json\s*/gi, "").replace(/```\s*$/g, "").trim();
                limpio = limpio.replace(/^```/g, "").replace(/```$/g, "").trim();
                
                // Intentar parsear como JSON (por si acaso)
                try {
                    const parsed = JSON.parse(limpio);
                    if (parsed.dialogo) {
                        console.log(`[CELULAR API] Respuesta parseada desde JSON`);
                        return parsed.dialogo;
                    }
                    if (parsed.chicasQueHablan?.[0]?.dialogo) {
                        console.log(`[CELULAR API] Respuesta desde estructura chatbot`);
                        return parsed.chicasQueHablan[0].dialogo;
                    }
                } catch {}
                
                // Verificar que la respuesta no esté vacía
                if (limpio.length > 10) {
                    console.log(`[CELULAR API] Respuesta dinámica generada (${modelo})`);
                    return limpio;
                }
            }
        } catch (e) {
            console.log(`[CELULAR API] Error intento ${intento + 1} (${modelo}):`, e.message);
        }
    }

    // Si todo falla, fallback
    console.log(`[CELULAR] Usando respuesta fallback para ${nombreChica}`);
    const opciones = DIALOGOS_CELULAR_AUTOMATICOS[nombreChica];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

// ============================================================
//  TYPING INDICATOR CELULAR
// ============================================================

function mostrarTypingCelular(nombreChica) {
    const container = document.getElementById("quint-celular-mensajes");
    if (!container) return;

    const typing = document.createElement("div");
    typing.id = "quint-celular-typing";
    typing.className = "celular-typing";
    typing.innerHTML = `
        <span class="celular-typing-name">${nombreChica}</span> está escribiendo...
        <span class="celular-typing-dot">.</span><span class="celular-typing-dot">.</span><span class="celular-typing-dot">.</span>
    `;
    container.appendChild(typing);
    scrollCelularFondo();
}

function ocultarTypingCelular() {
    const typing = document.getElementById("quint-celular-typing");
    if (typing) typing.remove();
}

// ============================================================
//  TERMINAR LLAMADA DE CELULAR
// ============================================================

async function terminarLlamadaCelular() {
    if (!celularActivo) return;

    const chicaCelular = celularChicaActual;
    const historialPrevio = [...quintHistorial].slice(-6); // Contexto antes de la llamada

    // Despedida de la chica del celular
    const despedidas = DESPEDIDAS_CELULAR[chicaCelular];
    const despedida = despedidas[Math.floor(Math.random() * despedidas.length)];
    agregarMensajeCelularChica(chicaCelular, despedida);

    // Pausa dramática
    await new Promise(r => setTimeout(r, 1000));

    // Cerrar UI del celular
    cerrarUICelular();

    celularActivo = false;

    // Agregar sistema de que terminó la llamada
    quintAgregarSistema(`[ ${chicaCelular} terminó la ${celularEsLlamada ? "llamada" : "conversación"} ]`);

    // AHORA: La chica con la que estabas reacciona
    const chicasPresentes = [...quintChicasActivas].filter(n => CHICAS[n] && n !== chicaCelular);

    if (chicasPresentes.length > 0) {
        // Seleccionar la chica más relevante (la última que habló o la primera)
        let chicaReacciona = null;

        // Buscar la última chica que habló en el historial
        for (let i = quintHistorial.length - 1; i >= 0; i--) {
            const msg = quintHistorial[i];
            if (msg.role === "assistant") {
                try {
                    const parsed = typeof msg.content === "string" ? JSON.parse(msg.content) : msg.content;
                    if (parsed.chicasQueHablan?.[0]?.nombre) {
                        const nombre = parsed.chicasQueHablan[0].nombre;
                        if (CHICAS[nombre] && nombre !== chicaCelular) {
                            chicaReacciona = nombre;
                            break;
                        }
                    }
                } catch {}
            }
        }

        // Fallback: primera chica disponible
        if (!chicaReacciona) {
            chicaReacciona = chicasPresentes[0];
        }

        // Generar reacción post-llamada
        await generarReaccionPostLlamada(chicaReacciona, chicaCelular, historialPrevio);
    }

    celularChicaActual = null;
    celularHistorial = [];
}

// ============================================================
//  GENERAR REACCIÓN POST-LLAMADA
// ============================================================

async function generarReaccionPostLlamada(nombreChicaReacciona, nombreChicaCelular, contextoPrevio) {
    const chica = CHICAS[nombreChicaReacciona];
    if (!chica) return;

    // Obtener reacciones predefinidas
    const reacciones = REACCIONES_POST_LLAMADA[nombreChicaReacciona]?.[nombreChicaCelular];

    if (reacciones && reacciones.length > 0) {
        // 60% probabilidad de usar reacción predefinida
        if (Math.random() < 0.6) {
            const reaccion = reacciones[Math.floor(Math.random() * reacciones.length)];
            quintAgregarChica(nombreChicaReacciona, "normal", reaccion);
            return;
        }
    }

    // 40% probabilidad de generar reacción con IA basada en contexto
    const systemPrompt = `Eres ${nombreChicaReacciona} de las Quintillizas Nakano. ${chica.personalidad}

Acabas de estar teniendo una conversación/encuentro íntimo con el usuario. De repente, ${nombreChicaCelular} llamó/envió un mensaje por celular e interrumpió el momento.

Ahora que el usuario terminó esa llamada, tú reaccionas a la interrupción.

REGLAS:
- Reacciona naturalmente a que te interrumpieron justo cuando estabas con el usuario
- Si el contexto era romántico/íntimo, menciona la interrupción (ej: "nos interrumpen justo cuando...", "estábamos en lo mejor y...")
- Mantén tu personalidad: sé coqueta, tsundere, tímida, energética o firme según quien seas
- Usa acciones entre *asteriscos*
- Respeta el contexto previo: si estaban besándose, abrazándose, hablando de algo específico, haz referencia a ello
- Sé natural, no forzada
- Responde SOLO con texto, sin JSON.`;

    // Construir contexto breve
    let contextoTexto = "";
    if (contextoPrevio && contextoPrevio.length > 0) {
        const ultimos = contextoPrevio.slice(-4).map(m => {
            if (m.role === "user") return `Usuario: ${m.content}`;
            if (m.role === "assistant") return m.content;
            return "";
        }).filter(Boolean).join("\n");
        contextoTexto = `\n\nContexto de la conversación antes de la llamada:\n${ultimos}`;
    }

    const messages = [
        { role: "system", content: systemPrompt + contextoTexto },
        { role: "user", content: `(Reacciona a que ${nombreChicaCelular} te interrumpió por celular. Di algo natural y coherente con tu personalidad y el contexto anterior.)` },
    ];

    // Intentar con 3 modelos
    const modelos = [MODELO_PRINCIPAL, MODELO_ALTERNATIVO, MODELO_TERCERO];
    let respuesta = null;

    for (let intento = 0; intento < modelos.length && !respuesta; intento++) {
        try {
            const raw = await quintLlamarAPI(messages, modelos[intento], systemPrompt);
            if (raw) {
                let limpio = raw.replace(/^```json\s*/g, "").replace(/```\s*$/g, "").trim();
                try {
                    const parsed = JSON.parse(limpio);
                    if (parsed.dialogo) limpio = parsed.dialogo;
                    if (parsed.chicasQueHablan?.[0]?.dialogo) limpio = parsed.chicasQueHablan[0].dialogo;
                } catch {}
                if (limpio.length > 10) {
                    console.log(`[CELULAR REACCIÓN] Respuesta generada con ${modelos[intento]}`);
                    respuesta = limpio;
                }
            }
        } catch (e) {
            console.log(`[CELULAR REACCIÓN] Error con ${modelos[intento]}:`, e.message);
        }
    }

    if (respuesta) {
        quintAgregarChica(nombreChicaReacciona, "normal", respuesta);
        return;
    }

    // Fallback a predefinido
    if (reacciones && reacciones.length > 0) {
        const reaccion = reacciones[Math.floor(Math.random() * reacciones.length)];
        quintAgregarChica(nombreChicaReacciona, "normal", reaccion);
    }
}

// ============================================================
//  CERRAR UI DEL CELULAR
// ============================================================

function cerrarUICelular() {
    celularUIVisible = false;
    const overlay = document.getElementById("quint-celular-overlay");
    if (overlay) overlay.remove();
}

// ============================================================
//  SCROLL AL FONDO DEL CELULAR
// ============================================================

function scrollCelularFondo() {
    const container = document.getElementById("quint-celular-mensajes");
    if (container) container.scrollTop = container.scrollHeight;
}

// ============================================================
//  INYECTAR ESTILOS DEL CELULAR
// ============================================================

function celularInjectStyles() {
    if (document.getElementById("quint-celular-styles")) return;

    const style = document.createElement("style");
    style.id = "quint-celular-styles";
    style.textContent = `
        /* NOTIFICACIÓN DE CELULAR */
        .quint-celular-notif {
            margin: 12px 0; padding: 14px 16px;
            background: linear-gradient(135deg, #1a1040, #0d1526);
            border: 1px solid #3a2a60; border-radius: 14px;
            display: flex; flex-direction: column; align-items: center; gap: 10px;
            animation: celNotifPulse 0.6s ease;
            box-shadow: 0 0 20px rgba(120, 80, 255, 0.15);
        }
        .celular-notif-icon { font-size: 28px; animation: celVibrate 0.4s ease infinite; }
        .celular-notif-text {
            color: #c0d0ff; font-size: 13px; font-family: Georgia, serif;
            text-align: center; line-height: 1.5; max-width: 90%;
        }
        .celular-notif-btn {
            background: linear-gradient(135deg, #2a4a80, #3a6adf);
            color: #c0d8ff; border: none; padding: 8px 20px; border-radius: 8px;
            cursor: pointer; font-family: Georgia, serif; font-size: 12px; font-weight: bold;
            transition: all 0.2s; min-width: 120px;
        }
        .celular-notif-btn:hover { transform: scale(1.05); box-shadow: 0 0 10px rgba(80,120,255,0.3); }
        .celular-notif-btn-ignore {
            background: transparent !important; color: #5a6a8a !important;
            border: 1px solid #2a3a55 !important;
        }
        .celular-notif-btn-ignore:hover { background: #1a1a2e !important; }

        @keyframes celNotifPulse { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
        @keyframes celVibrate { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(-5deg)} 75%{transform:rotate(5deg)} }

        /* OVERLAY Y PANEL DEL CELULAR */
        #quint-celular-overlay {
            position: absolute; inset: 0; z-index: 150;
            background: rgba(5, 8, 15, 0.92);
            display: flex; align-items: center; justify-content: center;
            border-radius: 16px; backdrop-filter: blur(4px);
        }
        #quint-celular-panel {
            width: min(420px, 92%); max-height: 80vh;
            background: #0a0f18; border: 2px solid #1f2d45; border-radius: 18px;
            display: flex; flex-direction: column; overflow: hidden;
            box-shadow: 0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(60,100,200,0.1);
            animation: celPanelIn 0.25s ease;
        }
        #quint-celular-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 12px 16px; background: linear-gradient(135deg, #111c30, #0d1526);
            border-bottom: 1px solid #1f2d45; flex-shrink: 0;
        }
        .celular-header-info { display: flex; align-items: center; gap: 8px; }
        .celular-header-icon { font-size: 18px; }
        .celular-header-name { color: #8ab0ff; font-size: 14px; font-weight: bold; font-family: Georgia, serif; }
        .celular-header-type { color: #3a5a90; font-size: 11px; font-family: Arial, sans-serif; margin-left: 4px; }
        #quint-celular-cerrar {
            background: none; border: none; color: #3a5a90; cursor: pointer; font-size: 18px;
            padding: 4px 8px; transition: color 0.2s;
        }
        #quint-celular-cerrar:hover { color: #ff7b7b; }

        #quint-celular-mensajes {
            flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 8px;
            min-height: 200px; max-height: 50vh; background: #070b14;
        }
        .celular-mensaje-sistema {
            text-align: center; color: #3a5a90; font-size: 12px; font-family: Arial, sans-serif;
            padding: 8px; opacity: 0.8;
        }
        .celular-mensaje-chica {
            padding: 10px 12px; border-radius: 12px; border-left: 3px solid;
            background: rgba(255,255,255,0.03); animation: celMsgIn 0.18s ease;
        }
        .celular-mensaje-usuario {
            padding: 10px 12px; border-radius: 12px;
            background: linear-gradient(135deg, #1a2a4a, #141e38);
            border: 1px solid #2a3a55; margin-left: 20px;
            animation: celMsgIn 0.18s ease;
        }
        .celular-mensaje-nombre { font-size: 12px; font-weight: bold; font-family: Georgia, serif; }
        .celular-mensaje-texto {
            display: block; margin-top: 4px; color: #c0d0ff; font-size: 13px;
            font-family: Arial, sans-serif; line-height: 1.5;
        }
        .celular-mensaje-usuario .celular-mensaje-texto { color: #8ab0ff; }

        #quint-celular-input-area {
            display: flex; gap: 8px; padding: 10px 12px;
            background: #0d1526; border-top: 1px solid #1f2d45; flex-shrink: 0;
        }
        #quint-celular-input {
            flex: 1; background: #111c30; border: 1px solid #1f2d45; border-radius: 10px;
            padding: 10px 12px; color: #c0d0ff; font-family: Arial, sans-serif; font-size: 13px;
            resize: none; outline: none; min-height: 40px; max-height: 80px;
        }
        #quint-celular-input:focus { border-color: #3a6adf; }
        #quint-celular-btn-enviar {
            background: linear-gradient(135deg, #1f3a70, #3a6adf);
            color: #c0d8ff; border: none; padding: 8px 16px; border-radius: 10px;
            cursor: pointer; font-family: Georgia, serif; font-size: 12px; font-weight: bold;
            transition: all 0.2s; align-self: flex-end;
        }
        #quint-celular-btn-enviar:hover { transform: scale(1.05); }

        #quint-celular-btns-footer {
            display: flex; justify-content: center; padding: 10px;
            background: #0a0f18; border-top: 1px solid #1f2d45; flex-shrink: 0;
        }
        .celular-footer-btn {
            background: linear-gradient(135deg, #4a1a1a, #6a2020);
            color: #ff9090; border: 1px solid #6a2020; padding: 8px 24px; border-radius: 10px;
            cursor: pointer; font-family: Georgia, serif; font-size: 12px; font-weight: bold;
            transition: all 0.2s;
        }
        .celular-footer-btn:hover { background: #6a2020; transform: scale(1.05); }

        /* TYPING INDICATOR */
        .celular-typing {
            padding: 8px 12px; color: #3a5a90; font-size: 12px; font-family: Arial, sans-serif;
            display: flex; align-items: center; gap: 4px;
        }
        .celular-typing-name { color: #8ab0ff; font-weight: bold; }
        .celular-typing-dot { animation: celDotPulse 1.2s ease infinite; }
        .celular-typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .celular-typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes celDotPulse { 0%,60%,100%{opacity:0.3} 30%{opacity:1} }
        @keyframes celPanelIn { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }
        @keyframes celMsgIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }

        /* Responsive */
        @media (max-width: 480px) {
            #quint-celular-panel { width: 96%; max-height: 85vh; }
            #quint-celular-mensajes { max-height: 55vh; }
        }
    `;
    document.head.appendChild(style);
}

// ============================================================
//  INICIALIZACIÓN — llamar después de cargar quintillizas
// ============================================================

function celularIniciar() {
    celularInjectStyles();
    celularContador = 0;
    celularSiguienteEn = 0;
    celularActivo = false;
    celularChicaActual = null;
    celularHistorial = [];
    console.log("[CELULAR] Sistema de mensajes celular iniciado.");
}

// ============================================================
//  PATCH DE quintEnviar PARA CONTAR TURNOS
//  Se llama desde quint_nuevas_funciones.js o desde quintillizas.js
// ============================================================

function celularPatchearQuintEnviar() {
    if (window._celularPatched) return;
    window._celularPatched = true;

    const _origEnviar = window.quintEnviar;
    window.quintEnviar = async function() {
        // Llamar la función original
        await _origEnviar();

        // Contar turno para el celular
        celularContarTurno();
    };
}

// ============================================================
//  EXPORTAR FUNCIONES GLOBALES
// ============================================================

window.abrirChatCelularDesdeNotif = abrirChatCelularDesdeNotif;
window.ignorarCelular = ignorarCelular;
window.enviarMensajeCelular = enviarMensajeCelular;
window.terminarLlamadaCelular = terminarLlamadaCelular;
window.celularKeyHandler = celularKeyHandler;
