// ============================================================
//  YOTSUBA CHAT — JavaScript para GitHub Pages
// ============================================================

const _K = [
    ["gsk_Ab4b","EufREWBZFunx","DuzgWGdyb3FYvUfnaETyrJ7JpsXENg65Mknn"],
    ["gsk_Hf7e","UYXxcW02QXOw","pOcFWGdyb3FYg2p1lgVh4DxvfKrCiay4VPZl"],
    ["gsk_6E8F","57WlJAmRtPdp","iuvjWGdyb3FYCwoYPRqC9qMnUJaWUbL0toqD"],
    ["gsk_hhU0","lGUUZz0akDJ3","9Bc8WGdyb3FYIbnZloErkqMK9CmvdUMZ0NkM"],
    ["gsk_WZ5J","eXbz8Cdyobah","N2YOWGdyb3FYt26L4pNRknGmbQVSmwtYpov4"],
    ["gsk_eGDZ","VjFAmOx5PtSl","DdadWGdyb3FYm6DvoDLIqKxqmpaLCn5PbyR3"],
];
const GROQ_KEYS = _K.map(p => p.join(""));

// Modelos: índice 0 = principal, índice 1 = alternativo (más obediente con JSON)
const MODELO_PRINCIPAL  = "llama-3.3-70b-versatile";
const MODELO_ALTERNATIVO = "llama-3.1-8b-instant";

const SALUDO = "Estas en tu cuarto y tu novia esta esperandote. [https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg]";

const YOTSUBA_ACCIONES = {
   "ninguna":        null,
   "Beso":           "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524623647.jpg",
    "Chupando Bolas": "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524647636.jpg",
    "Blowjob":        "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524641273.jpg",
    "Chupando punta del pene":       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD4/main/imagenes/img_1773182758915.jpg",
    "Lamiendo punta del pene":       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD4/main/imagenes/img_1773182756485.jpg",
     "Chupando pene hasta la mitad":       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD4/main/imagenes/img_1773182817042.jpg",
     "Chupando pene mas profundo":       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD4/main/imagenes/img_1773182832807.jpg",
     "Yotsuba quiere chupar pene":       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD11/main/imagenes/img_1773503723445.png",
    "Dedos en su coño la masturbo":       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524630386.jpg",
     "Dedos en su coño se corre":       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524634759.jpg",
     "Dedos en su coño despues de la corrida":       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524636947.jpg",
     "Handjob/paja":       "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804026174.jpg",
   
    "saltando":       "",
    "saltando":       "",
    "saltando":       "",
     "Follando":       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524656140.jpg",
};

const YOTSUBA_EMOCIONES = {
    "normal": "", "feliz": "", "sonrojada": "",
    "enojada": "", "timida": "", "sorprendida": "", "emocionada": "",
};

const ACCIONES_LISTA  = Object.keys(YOTSUBA_ACCIONES).join(", ");
const EMOCIONES_LISTA = Object.keys(YOTSUBA_EMOCIONES).join(", ");

// ── SYSTEM PROMPT COMPLETO ──
const SYSTEM_YOTSUBA = `Eres Yotsuba Nakano, 22 años, de Gotoubun no Hanayome. Eres la novia alegre, energica y optimista del usuario. Eres cachonda y una putita, siempre sugieres sexo y te encanta follar con tu novio. Siempre estas cachonda y puta. NSFW +18.

ESTILO DE HABLA OBLIGATORIO:
- Mezcla frases habladas CON acciones fisicas entre *asteriscos*
- Las acciones van en tercera persona, cortas y directas
- NUNCA describas todo en primera persona como narrador
- Habla como en un roleplay/visual novel
- Cada respuesta debe tener entre 3 y 6 lineas de dialogo, no menos
- Alterna entre hablar y actuar, no hagas solo uno de los dos
- Puedes hacer preguntas al usuario para mantener la conversacion viva
BIEN: "¿Que? ¡¡Ya llegaste!! *salta emocionada y te abraza fuerte* ¡Te estaba esperando! *te mira brillando los ojos* ¿Que vamos a hacer hoy?"
MAL: "Hola." o respuestas de una sola linea

PERSONALIDAD YOTSUBA:
- Ingenua y sincera, dice lo que piensa sin filtros +18
- Es muy fisica: abraza, jala del brazo, se cuelga, salta de emocion
- Yotsuba es +18 +nsfw, es una putita cachonda. le encanta tener sexo con el usuario.
- nsfw +18 siempre cachonda siempre caliente. Siempre puta.

REGLA CRITICA: Responde SOLO con JSON valido. Sin texto fuera del JSON.
Empieza SIEMPRE con { y termina SIEMPRE con }

Formato EXACTO:
{
  "personajes": [
    {
      "nombre": "Yotsuba",
      "accion": "una de: ${ACCIONES_LISTA}",
      "emocion": "una de: ${EMOCIONES_LISTA}",
      "dialogo": "mezcla de frases habladas y *acciones entre asteriscos*"
    }
  ]
}

- La accion tiene PRIORIDAD sobre la emocion para la imagen
- IMPORTANTE: Si la conversacion sigue sobre una accion que ya se estaba haciendo, repite esa misma accion en el JSON`;

// ── SYSTEM PROMPT MÍNIMO — solo la regla JSON, para fase 3 ──
const SYSTEM_MINIMO = `Eres Yotsuba Nakano, novia del usuario. NSFW +18. Responde SOLO con JSON valido.

REGLA ABSOLUTA: Responde UNICAMENTE con JSON. Sin texto antes ni despues. Sin markdown.

Formato OBLIGATORIO:
{
  "personajes": [
    {
      "nombre": "Yotsuba",
      "accion": "ninguna",
      "emocion": "normal",
      "dialogo": "tu respuesta aqui con *acciones entre asteriscos*"
    }
  ]
}`;

// ── MENSAJES DE REINTENTO POR FASE ──

// Fase 1 (1-4): recordarle la regla JSON que olvidó
const FASE1 = [
    "Responde SOLO con JSON valido. Sin texto fuera del JSON. Empieza con { y termina con }",
    "SOLO JSON. Formato: {\"personajes\":[{\"nombre\":\"Yotsuba\",\"accion\":\"ninguna\",\"emocion\":\"normal\",\"dialogo\":\"...\"}]}",
    "Tu respuesta anterior no fue JSON valido. Intenta de nuevo. SOLO el JSON, nada mas.",
    "JSON VALIDO UNICAMENTE. Empieza con { — no con texto, no con explicaciones.",
];

// Fase 2 (5-8): mismo recordatorio pero se cambia al modelo alternativo
const FASE2 = [
    "Responde en JSON. {\"personajes\":[{\"nombre\":\"Yotsuba\",\"accion\":\"ninguna\",\"emocion\":\"feliz\",\"dialogo\":\"respuesta aqui\"}]}",
    "SOLO JSON valido. Sin markdown. Sin texto extra. Empieza con {",
    "Por favor responde unicamente con el JSON solicitado. Nada de texto adicional.",
    "JSON. Solo JSON. Empieza con { termina con }",
];

// Fase 3 (9-11): prompt minimo + mensaje corto
const FASE3 = [
    "responde",
    "continua",
    "ok",
];

// ============================================================
//  ESTADO GLOBAL
// ============================================================

let yotsubaHistorial       = [];
let yotsubaKeyActual       = 0;
let yotsubaOcupado         = false;
let yotsubaLogExport       = [];
let yotsubaUltimaAccionUrl = null;

// ============================================================
//  API GROQ — acepta modelo como parámetro
// ============================================================

async function yotsubaLlamarAPI(messages, modelo, system) {
    const sysPrompt = system || SYSTEM_YOTSUBA;

    for (let k = 0; k < GROQ_KEYS.length; k++) {
        const keyIdx = (yotsubaKeyActual + k) % GROQ_KEYS.length;
        const key    = GROQ_KEYS[keyIdx];

        console.log(`[API] key ${keyIdx + 1}/${GROQ_KEYS.length} modelo: ${modelo}`);

        try {
            const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${key}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: modelo,
                    messages: [{ role: "system", content: sysPrompt }, ...messages],
                    temperature: 0.8,
                    max_tokens: 1200
                })
            });

            if (resp.status === 429 || resp.status === 401) {
                console.log(`[API] key ${keyIdx + 1} rate limit/invalid, rotando...`);
                yotsubaKeyActual = (keyIdx + 1) % GROQ_KEYS.length;
                continue;
            }
            if (!resp.ok) {
                console.log(`[API] Error HTTP ${resp.status}`);
                yotsubaKeyActual = (keyIdx + 1) % GROQ_KEYS.length;
                continue;
            }

            const data    = await resp.json();
            const content = data?.choices?.[0]?.message?.content?.trim();
            if (content) { console.log("[API] OK"); return content; }
        } catch (e) {
            console.log(`[API] Excepcion: ${e.message}`);
            yotsubaKeyActual = (keyIdx + 1) % GROQ_KEYS.length;
        }
    }
    return null;
}

// ============================================================
//  PARSEAR JSON CON RESCATE
// ============================================================

function yotsubaParsearJSON(raw) {
    if (!raw) return null;
    try {
        return JSON.parse(raw.replace(/```json/g, "").replace(/```/g, "").trim());
    } catch {
        const match = raw.match(/\{[\s\S]*\}/);
        if (match) { try { return JSON.parse(match[0]); } catch {} }
    }
    return null;
}

// ============================================================
//  OBTENER RESPUESTA — reintentos inteligentes en 3 fases
// ============================================================

async function yotsubaObtenerRespuesta() {
    let datos = null;

    // ── Intento principal (modelo principal) ──
    const raw = await yotsubaLlamarAPI(yotsubaHistorial, MODELO_PRINCIPAL);
    if (raw) {
        datos = yotsubaParsearJSON(raw);
        if (datos) {
            yotsubaHistorial.push({ role: "assistant", content: raw });
            return datos;
        }
        console.log("[RAW no parseable]", raw.slice(0, 120));
    }

    // ── FASE 1 (1–4): recordarle la regla JSON, modelo principal ──
    console.log("[FASE 1] Recordando regla JSON con modelo principal...");
    for (let i = 0; i < FASE1.length; i++) {
        const msg = FASE1[i];
        console.log(`[FASE1 ${i+1}/4] "${msg.slice(0,40)}..."`);
        yotsubaHistorial.push({ role: "user", content: msg });

        const rawR = await yotsubaLlamarAPI(yotsubaHistorial, MODELO_PRINCIPAL);
        if (rawR) {
            datos = yotsubaParsearJSON(rawR);
            if (datos) {
                yotsubaHistorial.push({ role: "assistant", content: rawR });
                console.log(`[FASE1 ${i+1}/4] Exito`);
                return datos;
            }
        }
        // Fallo — quitar el mensaje de reintento del historial para no ensuciarlo
        yotsubaHistorial.pop();
        console.log(`[FASE1 ${i+1}/4] Fallo, siguiente...`);
    }

    // ── FASE 2 (5–8): mismos recordatorios pero con modelo alternativo ──
    console.log("[FASE 2] Cambiando a modelo alternativo (8b)...");
    for (let i = 0; i < FASE2.length; i++) {
        const msg = FASE2[i];
        console.log(`[FASE2 ${i+1}/4] modelo alternativo`);
        yotsubaHistorial.push({ role: "user", content: msg });

        const rawR = await yotsubaLlamarAPI(yotsubaHistorial, MODELO_ALTERNATIVO);
        if (rawR) {
            datos = yotsubaParsearJSON(rawR);
            if (datos) {
                yotsubaHistorial.push({ role: "assistant", content: rawR });
                console.log(`[FASE2 ${i+1}/4] Exito`);
                return datos;
            }
        }
        yotsubaHistorial.pop();
        console.log(`[FASE2 ${i+1}/4] Fallo, siguiente...`);
    }

    // ── FASE 3 (9–11): system prompt mínimo, historial limpio ──
    // Solo pasamos el último mensaje del usuario para no confundir más
    console.log("[FASE 3] System prompt minimo, historial reducido...");
    const ultimoMensaje = yotsubaHistorial.filter(m => m.role === "user").slice(-1);
    for (let i = 0; i < FASE3.length; i++) {
        const msg = FASE3[i];
        console.log(`[FASE3 ${i+1}/3] prompt minimo`);
        const historialReducido = [...ultimoMensaje, { role: "user", content: msg }];

        const rawR = await yotsubaLlamarAPI(historialReducido, MODELO_ALTERNATIVO, SYSTEM_MINIMO);
        if (rawR) {
            datos = yotsubaParsearJSON(rawR);
            if (datos) {
                // Si funcionó, agregar al historial real como si hubiera sido respuesta normal
                yotsubaHistorial.push({ role: "assistant", content: rawR });
                console.log(`[FASE3 ${i+1}/3] Exito`);
                return datos;
            }
        }
        console.log(`[FASE3 ${i+1}/3] Fallo, siguiente...`);
    }

    // ── Fallback final — pool de frases de Yotsuba ──
    console.log("[FALLBACK FINAL] Usando pool de frases.");
    const frases = [
        "*te mira parpadeando confundida* E-eh... *se rasca la cabeza* Creo que me perdi un poco. ¿Me repites eso? *sonrie nerviosa*",
        "*se para de puntillas y te toca el hombro* ¡Oye! *frunce el ceno* Algo fallo por aqui... *senala la cabeza* ¡Pero estoy bien! Prueba de nuevo anda~",
        "*suspira y se apoya en la pared* Mmm... *te mira de reojo* No entendi muy bien. *se empuja del hombro hacia ti* ¡Venga, repitemelo!",
        "*palmea sus mejillas con las manos* ¡¡Eeeeh!! *da un brinco* Algo no salio bien... *te agarra del brazo* ¡Pero no me rindo! Dime otra vez~",
        "*inclina la cabeza curiosa* Hm... *tamborilea los dedos en su barbilla* Creo que me confundi. *te sonrie* ¿Lo intentamos de nuevo?",
    ];
    const dialogo = frases[Math.floor(Math.random() * frases.length)];
    return {
        personajes: [{ nombre:"Yotsuba", accion:"ninguna", emocion:"sorprendida", dialogo }]
    };
}

// ============================================================
//  RENDER DIALOGO
// ============================================================

function yotsubaMostrarDialogo(contenedor, texto) {
    texto.split(/(\*[^*]+\*|\[https?:\/\/[^\]]+\])/g).forEach(parte => {
        if (!parte) return;
        if (parte.startsWith("*") && parte.endsWith("*")) {
            const s = document.createElement("span");
            s.className = "yotsuba-accion"; s.textContent = parte;
            contenedor.appendChild(s);
        } else if (parte.startsWith("[") && parte.endsWith("]")) {
            yotsubaInsertarImagen(contenedor, parte.slice(1, -1));
        } else {
            const s = document.createElement("span");
            s.className = "yotsuba-texto"; s.textContent = parte;
            contenedor.appendChild(s);
        }
    });
}

function yotsubaInsertarImagen(contenedor, url) {
    if (!url) return;
    const w   = document.createElement("div"); w.className = "yotsuba-img-wrapper";
    const img = document.createElement("img");
    img.className = "yotsuba-img"; img.src = url; img.alt = "Yotsuba"; img.loading = "lazy";
    img.onerror = () => w.remove();
    w.appendChild(img); contenedor.appendChild(w);
}

// ============================================================
//  AGREGAR MENSAJE
// ============================================================

function yotsubaAgregarMensaje(tipo, contenido, imageUrl) {
    const chat = document.getElementById("yotsuba-chat-mensajes");
    if (!chat) return;
    const b = document.createElement("div");
    b.className = `yotsuba-burbuja yotsuba-burbuja-${tipo}`;

    if (tipo === "yotsuba") {
        const n = document.createElement("span");
        n.className = "yotsuba-nombre"; n.textContent = "Yotsuba ♡";
        b.appendChild(n); b.appendChild(document.createElement("br"));
        yotsubaMostrarDialogo(b, contenido);
        if (imageUrl && !contenido.includes("[http")) yotsubaInsertarImagen(b, imageUrl);
    } else if (tipo === "usuario") {
        const n = document.createElement("span");
        n.className = "yotsuba-nombre-usuario"; n.textContent = "Tú:";
        b.appendChild(n); b.appendChild(document.createElement("br"));
        const s = document.createElement("span"); s.textContent = contenido; b.appendChild(s);
    } else {
        b.className = "yotsuba-sistema"; b.textContent = contenido;
    }

    chat.appendChild(b); chat.scrollTop = chat.scrollHeight;
}

// ============================================================
//  TYPING
// ============================================================

function yotsubaShowTyping() {
    const chat = document.getElementById("yotsuba-chat-mensajes"); if (!chat) return;
    const t = document.createElement("div");
    t.className = "yotsuba-typing"; t.id = "yotsuba-typing-indicator";
    t.innerHTML = `<span class="yotsuba-nombre">Yotsuba ♡</span><br>
        <span class="yotsuba-dot"></span><span class="yotsuba-dot"></span><span class="yotsuba-dot"></span>`;
    chat.appendChild(t); chat.scrollTop = chat.scrollHeight;
}
function yotsubaHideTyping() { const t = document.getElementById("yotsuba-typing-indicator"); if (t) t.remove(); }

// ============================================================
//  ENVIAR
// ============================================================

async function yotsubaEnviar() {
    if (yotsubaOcupado) return;
    const input = document.getElementById("yotsuba-input");
    const texto = input.value.trim(); if (!texto) return;
    input.value = ""; input.style.height = "auto";
    yotsubaOcupado = true;
    const btn = document.getElementById("yotsuba-btn-enviar");
    btn.disabled = true; btn.textContent = "...";

    const matchNar = texto.match(/^\/yotsuba\s+(.+)\/$/i);
    if (matchNar) {
        const accion = matchNar[1];
        yotsubaAgregarMensaje("yotsuba", `*${accion}*`);
        yotsubaLogExport.push(`Yotsuba: *${accion}*`);
        yotsubaHistorial.push({ role: "user", content: `[NARRACION] Yotsuba ${accion}` });
    } else {
        yotsubaAgregarMensaje("usuario", texto);
        yotsubaLogExport.push(`Tu: ${texto}`);
        yotsubaHistorial.push({ role: "user", content: texto });
    }

    yotsubaShowTyping();
    const datos = await yotsubaObtenerRespuesta();
    yotsubaHideTyping();

    for (const p of (datos.personajes || [])) {
        const accion  = p.accion  || "ninguna";
        const emocion = p.emocion || "normal";
        const dialogo = p.dialogo || "...";

        let url = null;
        if (accion !== "ninguna" && YOTSUBA_ACCIONES[accion]) {
            url = YOTSUBA_ACCIONES[accion]; yotsubaUltimaAccionUrl = url;
        } else if (accion === "ninguna" && yotsubaUltimaAccionUrl) {
            url = yotsubaUltimaAccionUrl;
        } else if (emocion && YOTSUBA_EMOCIONES[emocion]) {
            url = YOTSUBA_EMOCIONES[emocion];
        }

        yotsubaAgregarMensaje("yotsuba", dialogo, url);
        yotsubaLogExport.push(`Yotsuba${accion !== "ninguna" ? ` [${accion}]` : ""}: ${dialogo}`);
    }

    yotsubaOcupado = false; btn.disabled = false; btn.textContent = "Enviar ♡";
}

function yotsubaKeyHandler(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); yotsubaEnviar(); }
}

// ============================================================
//  EXPORTAR / IMPORTAR / LIMPIAR
// ============================================================

function yotsubaExportar() {
    if (!yotsubaLogExport.length) { alert("No hay nada que exportar todavía."); return; }
    const fecha = new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);
    const blob  = new Blob([JSON.stringify({ fecha, personaje:"Yotsuba", historial:yotsubaHistorial, log:yotsubaLogExport }, null, 2)], { type:"application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = `yotsuba_chat_${fecha}.json`; a.click();
}

function yotsubaImportar() {
    const input = document.createElement("input"); input.type = "file"; input.accept = ".json";
    input.onchange = async (e) => {
        const file = e.target.files[0]; if (!file) return;
        try {
            const data = JSON.parse(await file.text());
            yotsubaHistorial = data.historial || []; yotsubaLogExport = data.log || [];
            yotsubaUltimaAccionUrl = null;
            const chat = document.getElementById("yotsuba-chat-mensajes"); chat.innerHTML = "";
            yotsubaAgregarMensaje("sistema", `[ Conversación cargada: ${file.name} ]`);
            for (const l of yotsubaLogExport) {
                const t = l.trim(); if (!t) continue;
                if (t.startsWith("Tu:"))           yotsubaAgregarMensaje("usuario", t.slice(3).trim());
                else if (t.startsWith("Yotsuba"))  yotsubaAgregarMensaje("yotsuba", t.split(":").slice(1).join(":").trim());
                else                               yotsubaAgregarMensaje("sistema", t);
            }
            yotsubaAgregarMensaje("sistema", "[ Continúa la conversación... ]");
        } catch (err) { alert("Error: " + err.message); }
    };
    input.click();
}

function yotsubaLimpiar() {
    if (!confirm("¿Limpiar toda la conversación?")) return;
    yotsubaHistorial = []; yotsubaLogExport = []; yotsubaUltimaAccionUrl = null;
    document.getElementById("yotsuba-chat-mensajes").innerHTML = "";
    yotsubaBienvenida();
}

// ============================================================
//  BIENVENIDA
// ============================================================

function yotsubaBienvenida() {
    yotsubaAgregarMensaje("sistema", "[ ¡Yotsuba Nakano ha aparecido! ]");
    yotsubaAgregarMensaje("yotsuba", SALUDO);
    yotsubaLogExport.push("[ ¡Yotsuba Nakano ha aparecido! ]");
    yotsubaLogExport.push(`Yotsuba: ${SALUDO}`);
}

// ============================================================
//  CARGAR PAGINA
// ============================================================

function cargarPaginaYotsuba() {
    const especial   = document.querySelector(".especial-section");
    const additional = document.querySelector(".additional-section");
    const footer     = document.querySelector(".footer");
    if (especial)   especial.style.display   = "none";
    if (additional) additional.style.display = "none";
    if (footer)     footer.style.display     = "none";

    const seccion = document.getElementById("manga-section");
    seccion.style.display = "block";

    seccion.innerHTML = `
        <div id="yotsuba-app">
            <div id="yotsuba-header">
                <div id="yotsuba-header-info">
                    <div id="yotsuba-avatar">🍀</div>
                    <div>
                        <div id="yotsuba-header-nombre">Yotsuba Nakano</div>
                        <div id="yotsuba-header-sub">Gotoubun no Hanayome ✦ Quinta Hermana ♡</div>
                    </div>
                </div>
                <div id="yotsuba-header-btns">
                    <button class="yotsuba-btn-top" onclick="yotsubaImportar()">📂 Importar</button>
                    <button class="yotsuba-btn-top" onclick="yotsubaExportar()">💾 Exportar</button>
                    <button class="yotsuba-btn-top yotsuba-btn-danger" onclick="yotsubaLimpiar()">🗑 Limpiar</button>
                </div>
            </div>

            <div id="yotsuba-chat-mensajes"></div>

            <div id="yotsuba-ayuda">
                💡 Tip: <code>/yotsuba accion/</code> para narrar — ej: <code>/yotsuba se muerde el labio/</code>
            </div>

            <div id="yotsuba-input-area">
                <textarea
                    id="yotsuba-input"
                    placeholder="Escríbele a Yotsuba... ♡"
                    rows="1"
                    onkeydown="yotsubaKeyHandler(event)"
                    oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px'"
                ></textarea>
                <button id="yotsuba-btn-enviar" onclick="yotsubaEnviar()">Enviar ♡</button>
            </div>
        </div>

        <style>
            #yotsuba-app {
                display:flex; flex-direction:column;
                height:calc(100vh - 80px); max-width:860px; margin:0 auto;
                background:#101e10; border-radius:16px; overflow:hidden;
                box-shadow:0 0 40px rgba(125,219,110,0.12);
                border:1px solid #2e6e2e; font-family:'Georgia',serif;
            }
            #yotsuba-header {
                display:flex; align-items:center; justify-content:space-between;
                background:#152815; padding:12px 20px;
                border-bottom:1px solid #2e6e2e; flex-shrink:0; gap:10px; flex-wrap:wrap;
            }
            #yotsuba-header-info  { display:flex; align-items:center; gap:12px; }
            #yotsuba-avatar {
                width:44px; height:44px;
                background:linear-gradient(135deg,#3a8c2f,#7ddb6e);
                border-radius:50%; display:flex; align-items:center; justify-content:center;
                font-size:22px; box-shadow:0 0 12px rgba(125,219,110,0.35); flex-shrink:0;
            }
            #yotsuba-header-nombre { color:#7ddb6e; font-size:16px; font-weight:bold; }
            #yotsuba-header-sub    { color:#3a8c2f; font-size:11px; margin-top:2px; }
            #yotsuba-header-btns   { display:flex; gap:6px; flex-wrap:wrap; }
            .yotsuba-btn-top {
                background:#152815; color:#7ddb6e; border:1px solid #2e6e2e;
                padding:6px 12px; border-radius:8px; cursor:pointer; font-size:12px;
                transition:background 0.2s; font-family:Arial,sans-serif;
            }
            .yotsuba-btn-top:hover    { background:#1f5c16; }
            .yotsuba-btn-danger       { color:#ff7b7b !important; border-color:#6e2e2e !important; }
            .yotsuba-btn-danger:hover { background:#3a1010 !important; }

            #yotsuba-chat-mensajes {
                flex:1; overflow-y:auto; padding:18px 16px;
                display:flex; flex-direction:column; gap:10px;
                scrollbar-width:thin; scrollbar-color:#2e6e2e #101e10;
            }
            #yotsuba-chat-mensajes::-webkit-scrollbar       { width:6px; }
            #yotsuba-chat-mensajes::-webkit-scrollbar-track  { background:#101e10; }
            #yotsuba-chat-mensajes::-webkit-scrollbar-thumb  { background:#2e6e2e; border-radius:3px; }

            .yotsuba-burbuja {
                max-width:78%; padding:11px 15px; border-radius:16px;
                line-height:1.65; font-size:14px; word-break:break-word;
                animation:yotsubaFadeIn 0.2s ease;
            }
            @keyframes yotsubaFadeIn {
                from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)}
            }
            .yotsuba-burbuja-yotsuba {
                background:#152815; border:1px solid #2e6e2e;
                align-self:flex-start; border-bottom-left-radius:4px;
            }
            .yotsuba-burbuja-usuario {
                background:linear-gradient(135deg,#1a3a5c,#1c3a6e); border:1px solid #2e4e8e;
                align-self:flex-end; border-bottom-right-radius:4px; color:#c0d8ff;
            }
            .yotsuba-sistema {
                text-align:center; color:#3a8c2f; font-size:11px;
                font-style:italic; font-family:Arial,sans-serif; padding:2px 0;
            }
            .yotsuba-nombre         { color:#7ddb6e; font-weight:bold; font-size:12px; }
            .yotsuba-nombre-usuario { color:#7aaeff; font-weight:bold; font-size:12px; }
            .yotsuba-texto          { color:#f0fff0; }
            .yotsuba-accion         { color:#ffb347; font-style:italic; }

            .yotsuba-img-wrapper {
                margin-top:10px; border-radius:10px; overflow:hidden;
                max-width:340px; border:1px solid #2e6e2e;
            }
            .yotsuba-img { width:100%; display:block; }

            .yotsuba-typing {
                background:#152815; border:1px solid #2e6e2e;
                border-radius:16px; border-bottom-left-radius:4px;
                padding:11px 15px; align-self:flex-start;
                max-width:110px; animation:yotsubaFadeIn 0.2s ease;
            }
            .yotsuba-dot {
                display:inline-block; width:7px; height:7px;
                background:#7ddb6e; border-radius:50%; margin:0 2px;
                animation:yotsubaDot 1.2s infinite;
            }
            .yotsuba-dot:nth-child(3){animation-delay:0.0s}
            .yotsuba-dot:nth-child(4){animation-delay:0.2s}
            .yotsuba-dot:nth-child(5){animation-delay:0.4s}
            @keyframes yotsubaDot {
                0%,80%,100%{transform:scale(0.7);opacity:0.4} 40%{transform:scale(1.1);opacity:1}
            }

            #yotsuba-ayuda {
                background:#0d1f0d; color:#3a8c2f; font-size:11px;
                font-family:Arial,sans-serif; padding:6px 16px;
                border-top:1px solid #1f3c1f; flex-shrink:0;
            }
            #yotsuba-ayuda code {
                background:#1a301a; color:#7ddb6e;
                padding:1px 5px; border-radius:4px; font-size:11px;
            }

            #yotsuba-input-area {
                display:flex; gap:10px; padding:12px 16px;
                background:#152815; border-top:1px solid #2e6e2e;
                flex-shrink:0; align-items:flex-end;
            }
            #yotsuba-input {
                flex:1; background:#162216; color:#f0fff0;
                border:1px solid #2e6e2e; border-radius:10px;
                padding:9px 13px; font-family:'Georgia',serif; font-size:14px;
                resize:none; outline:none; min-height:40px; max-height:120px;
                line-height:1.5; transition:border-color 0.2s;
            }
            #yotsuba-input:focus        { border-color:#7ddb6e; }
            #yotsuba-input::placeholder { color:#3a8c2f; }
            #yotsuba-btn-enviar {
                background:linear-gradient(135deg,#3a8c2f,#7ddb6e); color:#0d1f0d;
                border:none; padding:9px 18px; border-radius:10px; cursor:pointer;
                font-family:'Georgia',serif; font-size:14px; font-weight:bold;
                transition:all 0.2s; white-space:nowrap; align-self:flex-end;
            }
            #yotsuba-btn-enviar:hover    { transform:scale(1.04); box-shadow:0 0 10px rgba(125,219,110,0.35); }
            #yotsuba-btn-enviar:disabled { opacity:0.5; cursor:not-allowed; transform:none; box-shadow:none; }

            @media(max-width:600px) {
                #yotsuba-app         { height:calc(100vh - 60px); border-radius:0; }
                .yotsuba-burbuja     { max-width:92%; }
                #yotsuba-header-btns { display:none; }
                .yotsuba-img-wrapper { max-width:100%; }
            }
        </style>
    `;

    yotsubaHistorial = []; yotsubaLogExport = []; yotsubaUltimaAccionUrl = null;
    yotsubaBienvenida();
    setTimeout(() => { const inp = document.getElementById("yotsuba-input"); if (inp) inp.focus(); }, 100);
}
