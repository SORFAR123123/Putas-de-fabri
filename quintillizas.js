// ============================================================
//  QUINTILLIZAS NAKANO CHAT — JavaScript para GitHub Pages
//  Mismo formato que yotsuba.js — integra en tu HTML existente
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

const MODELO_PRINCIPAL   = "llama-3.3-70b-versatile";
const MODELO_ALTERNATIVO = "llama-3.1-8b-instant";

// ============================================================
//  DATOS DE CADA CHICA
//  → Reemplaza las URLs de imagenes con las tuyas de GitHub
// ============================================================

const CHICAS = {
    Ichika: {
        color:    "#e06b8f",
        kanji:    "一",
        personalidad: `Ichika Nakano, 22 años, la mayor de las quintillizas. Actriz profesional. Madura y algo misteriosa, coqueta con sutileza. Sonrisa reservada. Habla con calma y elegancia pero con calidez real. A veces dice cosas ambiguas a propósito. Novia del usuario.`,
        imagenes: {
            normal:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            feliz:       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sonrojada:   "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            enojada:     "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            timida:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sorprendida: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            emocionada:  "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
        }
    },
    Nino: {
        color:    "#e8a04a",
        kanji:    "二",
        personalidad: `Nino Nakano, 22 años, la segunda. Tsundere fuerte, cocinera apasionada, protectora de sus hermanas. Directa y algo brusca pero muy leal. Se pone roja fácil aunque lo niega con fuerza. Novia del usuario.`,
        imagenes: {
            normal:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            feliz:       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sonrojada:   "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            enojada:     "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            timida:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sorprendida: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            emocionada:  "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
        }
    },
    Miku: {
        color:    "#5ba8d6",
        kanji:    "三",
        personalidad: `Miku Nakano, 22 años, la tercera. Introvertida, ama la historia del Sengoku. Habla pausado y con pocas palabras pero muy sincera. Tímida en sentimientos pero firme en lo que cree. Novia del usuario.`,
        imagenes: {
            normal:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            feliz:       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sonrojada:   "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            enojada:     "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            timida:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sorprendida: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            emocionada:  "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
        }
    },
    Yotsuba: {
        color:    "#6dc96d",
        kanji:    "四",
        personalidad: `Yotsuba Nakano, 22 años, la cuarta. Alegre, energica, deportista. Muy física: abraza, salta, jala del brazo. Ingenua y sin filtros. Siempre positiva. Novia del usuario.`,
        imagenes: {
            normal:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            feliz:       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sonrojada:   "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            enojada:     "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            timida:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sorprendida: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            emocionada:  "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            Beso:        "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524623647.jpg",
        }
    },
    Itsuki: {
        color:    "#c084d4",
        kanji:    "五",
        personalidad: `Itsuki Nakano, 22 años, la menor. Responsable, trabajadora, come mucho y no le da vergüenza. Carácter firme, no le gusta que la traten de menos. Algo tsundere pero más noble y honesta que Nino. Novia del usuario.`,
        imagenes: {
            normal:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            feliz:       "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sonrojada:   "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            enojada:     "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            timida:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            sorprendida: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
            emocionada:  "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524604135.jpg",
        }
    },
};

const EMOCIONES_LISTA = "normal, feliz, sonrojada, enojada, timida, sorprendida, emocionada";

// ============================================================
//  SYSTEM PROMPTS
// ============================================================

function quintBuildSystem(activas) {
    const lista    = [...activas];
    const perfiles = lista.map(n => CHICAS[n].personalidad).join("\n");

    return `Eres el narrador de un roleplay/visual novel con las Quintillizas Nakano de Gotoubun no Hanayome.
Las chicas ACTUALMENTE PRESENTES en la escena son: ${lista.join(", ")}.
SOLO estas chicas pueden hablar. No incluyas a ninguna otra.

PERFILES DE LAS PRESENTES:
${perfiles}

ESTILO DE DIALOGO OBLIGATORIO:
- Mezcla frases habladas CON acciones fisicas entre *asteriscos*
- Las acciones van en tercera persona, cortas y directas
- Habla como en un visual novel/roleplay
- Cada chica que hable: minimo 3-5 lineas de dialogo, alternando hablar y actuar
- Respeta la personalidad individual de cada una, NUNCA suenen igual
- Pueden interactuar entre ellas y con el usuario
- No todas tienen que hablar en cada turno — solo las que tienen razon para participar

REGLA CRITICA: Responde SOLO con JSON valido. Sin texto fuera del JSON. Empieza con { termina con }.

EMOCIONES DISPONIBLES: ${EMOCIONES_LISTA}

Formato EXACTO:
{
  "chicasQueHablan": [
    {
      "nombre": "NombreExacto",
      "emocion": "una de las emociones disponibles",
      "dialogo": "mezcla de frases y *acciones entre asteriscos*"
    }
  ],
  "nuevasChicasQueAparecen": ["NombreSiElContextoImplicaSuLlegada"]
}

- "chicasQueHablan" solo incluye las que realmente hablan este turno (puede ser 1, 2, 3... hasta todas las presentes)
- "nuevasChicasQueAparecen" es para notificar si el contexto implica que llega alguien nuevo. Si nadie llega, pon []
- La accion que mas resuena con el dialogo determina la imagen que se mostrara
- IMPORTANTE: Si continua una accion previa, mantén coherencia con lo que pasaba antes`;
}

const QUINT_SYSTEM_MINIMO = `Eres el narrador de un roleplay con las Quintillizas Nakano. Responde SOLO con JSON valido.

REGLA ABSOLUTA: UNICAMENTE JSON. Sin texto antes ni despues.

Formato:
{
  "chicasQueHablan": [
    {
      "nombre": "Yotsuba",
      "emocion": "normal",
      "dialogo": "tu respuesta aqui con *acciones entre asteriscos*"
    }
  ],
  "nuevasChicasQueAparecen": []
}`;

const QUINT_FASE1 = [
    "Responde SOLO con JSON valido. Sin texto fuera del JSON. Empieza con { y termina con }",
    'SOLO JSON. Formato: {"chicasQueHablan":[{"nombre":"...","emocion":"normal","dialogo":"..."}],"nuevasChicasQueAparecen":[]}',
    "Tu respuesta anterior no fue JSON valido. Intenta de nuevo. SOLO el JSON, nada mas.",
    "JSON VALIDO UNICAMENTE. Empieza con { — no con texto, no con explicaciones.",
];

const QUINT_FASE2 = [
    'Responde en JSON. {"chicasQueHablan":[{"nombre":"...","emocion":"feliz","dialogo":"respuesta aqui"}],"nuevasChicasQueAparecen":[]}',
    "SOLO JSON valido. Sin markdown. Sin texto extra. Empieza con {",
    "Por favor responde unicamente con el JSON solicitado. Nada de texto adicional.",
    "JSON. Solo JSON. Empieza con { termina con }",
];

const QUINT_FASE3 = ["responde", "continua", "ok"];

// ============================================================
//  ESTADO GLOBAL
// ============================================================

let quintHistorial      = [];
let quintKeyActual      = 0;
let quintOcupado        = false;
let quintLogExport      = [];
let quintChicasActivas  = new Set(["Yotsuba"]); // Yotsuba siempre al inicio

// ============================================================
//  API GROQ
// ============================================================

async function quintLlamarAPI(messages, modelo, system) {
    const sysPrompt = system || quintBuildSystem(quintChicasActivas);

    for (let k = 0; k < GROQ_KEYS.length; k++) {
        const keyIdx = (quintKeyActual + k) % GROQ_KEYS.length;
        const key    = GROQ_KEYS[keyIdx];
        console.log(`[QUINT API] key ${keyIdx+1}/${GROQ_KEYS.length} modelo: ${modelo}`);

        try {
            const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${key}`,
                    "Content-Type":  "application/json"
                },
                body: JSON.stringify({
                    model:       modelo,
                    messages:    [{ role: "system", content: sysPrompt }, ...messages],
                    temperature: 0.8,
                    max_tokens:  1600
                })
            });

            if (resp.status === 429 || resp.status === 401) {
                quintKeyActual = (keyIdx + 1) % GROQ_KEYS.length; continue;
            }
            if (!resp.ok) {
                quintKeyActual = (keyIdx + 1) % GROQ_KEYS.length; continue;
            }

            const data    = await resp.json();
            const content = data?.choices?.[0]?.message?.content?.trim();
            if (content) { console.log("[QUINT API] OK", content); return content; }
        } catch (e) {
            console.log(`[QUINT API] Error: ${e.message}`);
            quintKeyActual = (keyIdx + 1) % GROQ_KEYS.length;
        }
    }
    return null;
}

// ============================================================
//  PARSEAR JSON
// ============================================================

function quintParsearJSON(raw) {
    if (!raw) return null;
    try { return JSON.parse(raw.replace(/```json/g,"").replace(/```/g,"").trim()); } catch {}
    const match = raw.match(/\{[\s\S]*\}/);
    if (match) { try { return JSON.parse(match[0]); } catch {} }
    return null;
}

// ============================================================
//  OBTENER RESPUESTA — 3 fases de reintento
// ============================================================

async function quintObtenerRespuesta() {
    let datos = null;

    // Intento principal
    const raw = await quintLlamarAPI(quintHistorial, MODELO_PRINCIPAL);
    if (raw) {
        datos = quintParsearJSON(raw);
        if (datos) { quintHistorial.push({ role:"assistant", content: raw }); return datos; }
        console.log("[QUINT RAW no parseable]", raw.slice(0,120));
    }

    // Fase 1 — recordar regla JSON, modelo principal
    console.log("[QUINT FASE1]");
    for (let i = 0; i < QUINT_FASE1.length; i++) {
        quintHistorial.push({ role:"user", content: QUINT_FASE1[i] });
        const rawR = await quintLlamarAPI(quintHistorial, MODELO_PRINCIPAL);
        if (rawR) {
            datos = quintParsearJSON(rawR);
            if (datos) { quintHistorial.push({ role:"assistant", content: rawR }); return datos; }
        }
        quintHistorial.pop();
    }

    // Fase 2 — modelo alternativo
    console.log("[QUINT FASE2]");
    for (let i = 0; i < QUINT_FASE2.length; i++) {
        quintHistorial.push({ role:"user", content: QUINT_FASE2[i] });
        const rawR = await quintLlamarAPI(quintHistorial, MODELO_ALTERNATIVO);
        if (rawR) {
            datos = quintParsearJSON(rawR);
            if (datos) { quintHistorial.push({ role:"assistant", content: rawR }); return datos; }
        }
        quintHistorial.pop();
    }

    // Fase 3 — system mínimo, historial reducido
    console.log("[QUINT FASE3]");
    const ultimoMsg = quintHistorial.filter(m => m.role === "user").slice(-1);
    for (let i = 0; i < QUINT_FASE3.length; i++) {
        const reducido = [...ultimoMsg, { role:"user", content: QUINT_FASE3[i] }];
        const rawR = await quintLlamarAPI(reducido, MODELO_ALTERNATIVO, QUINT_SYSTEM_MINIMO);
        if (rawR) {
            datos = quintParsearJSON(rawR);
            if (datos) { quintHistorial.push({ role:"assistant", content: rawR }); return datos; }
        }
    }

    // Fallback final
    console.log("[QUINT FALLBACK]");
    const actLista  = [...quintChicasActivas];
    const primera   = actLista[0];
    const fallbacks = [
        "*te mira parpadeando confundida* E-eh... *se rasca la cabeza* Creo que me perdi un poco. ¿Me repites eso? *sonrie nerviosa*",
        "*se para de puntillas* ¡Oye! *frunce el ceno* Algo fallo por aqui... ¡Pero estoy bien! Prueba de nuevo~",
        "*inclina la cabeza curiosa* Hm... *tamborilea los dedos en su barbilla* Creo que me confundi. ¿Lo intentamos de nuevo?",
    ];
    return {
        chicasQueHablan: [{ nombre: primera, emocion:"sorprendida", dialogo: fallbacks[Math.floor(Math.random()*fallbacks.length)] }],
        nuevasChicasQueAparecen: []
    };
}

// ============================================================
//  RENDER DIALOGO (igual que el original)
// ============================================================

function quintMostrarDialogo(contenedor, texto, chicaKey) {
    texto.split(/(\*[^*]+\*|\[https?:\/\/[^\]]+\])/g).forEach(parte => {
        if (!parte) return;
        if (parte.startsWith("*") && parte.endsWith("*")) {
            const s = document.createElement("span");
            s.className = "quint-accion";
            s.style.color = CHICAS[chicaKey]?.color
                ? quintAccionColor(CHICAS[chicaKey].color)
                : "#ffb347";
            s.textContent = parte;
            contenedor.appendChild(s);
        } else if (parte.startsWith("[") && parte.endsWith("]")) {
            quintInsertarImagen(contenedor, parte.slice(1,-1));
        } else {
            const s = document.createElement("span");
            s.className = "quint-texto"; s.textContent = parte;
            contenedor.appendChild(s);
        }
    });
}

// Versión más clara del color de acción (mezcla con blanco)
function quintAccionColor(hex) {
    // devuelve una versión más suave del color de la chica
    return hex;
}

function quintInsertarImagen(contenedor, url) {
    if (!url) return;
    const w   = document.createElement("div"); w.className = "quint-img-wrapper";
    const img = document.createElement("img");
    img.className = "quint-img"; img.src = url; img.alt = ""; img.loading = "lazy";
    img.onerror = () => w.remove();
    w.appendChild(img); contenedor.appendChild(w);
}

// ============================================================
//  AGREGAR MENSAJES AL CHAT
// ============================================================

function quintAgregarSistema(texto) {
    const chat = document.getElementById("quint-chat-mensajes"); if (!chat) return;
    const d = document.createElement("div");
    d.className = "quint-sistema"; d.textContent = texto;
    chat.appendChild(d); chat.scrollTop = chat.scrollHeight;
}

function quintAgregarUsuario(texto) {
    const chat = document.getElementById("quint-chat-mensajes"); if (!chat) return;
    const b = document.createElement("div");
    b.className = "quint-burbuja quint-usuario";
    const n = document.createElement("span"); n.className = "quint-nombre-usuario"; n.textContent = "Tú:";
    b.appendChild(n); b.appendChild(document.createElement("br"));
    const s = document.createElement("span"); s.textContent = texto; b.appendChild(s);
    chat.appendChild(b); chat.scrollTop = chat.scrollHeight;
}

function quintAgregarChica(nombre, emocion, dialogo) {
    const chat = document.getElementById("quint-chat-mensajes"); if (!chat) return;
    const info = CHICAS[nombre]; if (!info) return;

    const b = document.createElement("div");
    b.className = "quint-burbuja quint-chica-burbuja";
    b.style.borderColor = info.color + "55";
    b.style.background  = info.color + "12";

    // Nombre coloreado
    const n = document.createElement("span");
    n.className = "quint-nombre-chica";
    n.style.color = info.color;
    n.textContent = `${nombre}:`;
    b.appendChild(n); b.appendChild(document.createElement("br"));

    // Dialogo con acciones
    quintMostrarDialogo(b, dialogo, nombre);

    // Imagen de emoción
    const imgUrl = info.imagenes[emocion] || info.imagenes["normal"];
    if (imgUrl) {
        const w   = document.createElement("div"); w.className = "quint-img-wrapper";
        const img = document.createElement("img");
        img.className = "quint-img"; img.src = imgUrl; img.alt = nombre; img.loading = "lazy";
        img.onerror = () => w.remove();
        w.appendChild(img); b.appendChild(w);
    }

    chat.appendChild(b);
    chat.scrollTop = chat.scrollHeight;
    quintLogExport.push(`${nombre}: ${dialogo}`);
}

// ============================================================
//  TYPING INDICATOR
// ============================================================

function quintShowTyping(nombres) {
    const chat = document.getElementById("quint-chat-mensajes"); if (!chat) return;
    const t = document.createElement("div");
    t.className = "quint-typing"; t.id = "quint-typing-indicator";
    const label = document.createElement("span");
    label.className = "quint-nombre-chica";
    label.style.color = "#7a8ba0";
    label.textContent = nombres.join(", ") + "...";
    t.appendChild(label); t.appendChild(document.createElement("br"));
    ["","",""].forEach(() => {
        const d = document.createElement("span"); d.className = "quint-dot"; t.appendChild(d);
    });
    chat.appendChild(t); chat.scrollTop = chat.scrollHeight;
}

function quintHideTyping() {
    const t = document.getElementById("quint-typing-indicator"); if (t) t.remove();
}

// ============================================================
//  BADGES — kanji que se iluminan
// ============================================================

function quintActualizarBadges() {
    Object.keys(CHICAS).forEach(nombre => {
        const badge = document.getElementById(`quint-badge-${nombre}`);
        if (!badge) return;
        if (quintChicasActivas.has(nombre)) {
            badge.style.opacity   = "1";
            badge.style.color     = CHICAS[nombre].color;
            badge.style.borderColor = CHICAS[nombre].color;
        } else {
            badge.style.opacity   = "0.2";
            badge.style.color     = "#7a8ba0";
            badge.style.borderColor = "#2a3a55";
        }
    });
}

function quintAgregarChicaEscena(nombre) {
    if (!CHICAS[nombre] || quintChicasActivas.has(nombre)) return;
    quintChicasActivas.add(nombre);
    quintActualizarBadges();
    quintAgregarSistema(`[ ${nombre} ha entrado en la escena ]`);
    quintLogExport.push(`[ ${nombre} ha entrado en la escena ]`);
}

// ============================================================
//  ENVIAR
// ============================================================

async function quintEnviar() {
    if (quintOcupado) return;
    const input = document.getElementById("quint-input");
    const texto = input.value.trim(); if (!texto) return;
    input.value = ""; input.style.height = "auto";
    quintOcupado = true;
    const btn = document.getElementById("quint-btn-enviar");
    btn.disabled = true; btn.textContent = "...";

    quintAgregarUsuario(texto);
    quintLogExport.push(`Tu: ${texto}`);
    quintHistorial.push({ role:"user", content: texto });

    // Detectar si el usuario menciona a una chica que no está presente
    Object.keys(CHICAS).forEach(nombre => {
        if (!quintChicasActivas.has(nombre)) {
            if (new RegExp(nombre, "i").test(texto)) quintAgregarChicaEscena(nombre);
        }
    });

    quintShowTyping([...quintChicasActivas]);
    const datos = await quintObtenerRespuesta();
    quintHideTyping();

    // Nuevas chicas que el modelo detectó en el contexto
    (datos.nuevasChicasQueAparecen || []).forEach(n => {
        if (CHICAS[n]) quintAgregarChicaEscena(n);
    });

    // Mostrar cada chica en orden: dialogo + imagen
    for (const p of (datos.chicasQueHablan || [])) {
        if (!CHICAS[p.nombre]) continue;
        if (!quintChicasActivas.has(p.nombre)) quintAgregarChicaEscena(p.nombre);
        quintAgregarChica(p.nombre, p.emocion || "normal", p.dialogo || "...");
    }

    quintOcupado = false; btn.disabled = false; btn.textContent = "Enviar ♡";
}

function quintKeyHandler(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); quintEnviar(); }
}

// ============================================================
//  EXPORTAR / IMPORTAR / LIMPIAR
// ============================================================

function quintExportar() {
    if (!quintLogExport.length) { alert("No hay nada que exportar."); return; }
    const fecha = new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);
    const blob  = new Blob([JSON.stringify({
        fecha, personaje:"Quintillizas", historial: quintHistorial, log: quintLogExport
    }, null, 2)], { type:"application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = `quintillizas_chat_${fecha}.json`; a.click();
}

function quintImportar() {
    const input = document.createElement("input"); input.type="file"; input.accept=".json";
    input.onchange = async (e) => {
        const file = e.target.files[0]; if (!file) return;
        try {
            const data = JSON.parse(await file.text());
            quintHistorial     = data.historial || [];
            quintLogExport     = data.log       || [];
            quintChicasActivas = new Set(["Yotsuba"]);
            const chat = document.getElementById("quint-chat-mensajes"); chat.innerHTML = "";
            quintAgregarSistema(`[ Conversación cargada: ${file.name} ]`);
            for (const l of quintLogExport) {
                const t = l.trim(); if (!t) continue;
                if (t.startsWith("Tu:"))            quintAgregarUsuario(t.slice(3).trim());
                else if (t.startsWith("["))          quintAgregarSistema(t);
                else {
                    const sep  = t.indexOf(":");
                    const nom  = sep > -1 ? t.slice(0,sep).trim() : "";
                    const dial = sep > -1 ? t.slice(sep+1).trim() : t;
                    if (CHICAS[nom]) {
                        quintChicasActivas.add(nom);
                        quintAgregarChica(nom, "normal", dial);
                    } else quintAgregarSistema(t);
                }
            }
            quintActualizarBadges();
            quintAgregarSistema("[ Continúa la conversación... ]");
        } catch (err) { alert("Error: " + err.message); }
    };
    input.click();
}

function quintLimpiar() {
    if (!confirm("¿Limpiar toda la conversación?")) return;
    quintHistorial     = [];
    quintLogExport     = [];
    quintChicasActivas = new Set(["Yotsuba"]);
    document.getElementById("quint-chat-mensajes").innerHTML = "";
    quintActualizarBadges();
    quintBienvenida();
}

// ============================================================
//  BIENVENIDA
// ============================================================

function quintBienvenida() {
    quintAgregarSistema("[ Quintillizas Nakano — Las hermanas aparecen según el contexto ]");
    quintAgregarSistema("[ Actualmente: Yotsuba está presente. Menciona a otras para que lleguen. ]");
    quintAgregarChica("Yotsuba", "feliz",
        "¡¡Oye, oye!! *salta emocionada y te agarra del brazo* ¡Ya llegué! *gira sobre sí misma sonriendo* ¿Qué hacemos hoy? ¡Dime, dime! *da pequeños saltos sin soltar tu brazo*"
    );
    quintLogExport.push("[ Quintillizas Nakano — inicio ]");
}

// ============================================================
//  CARGAR PÁGINA — igual que cargarPaginaYotsuba()
// ============================================================

function cargarPaginaQuintillizas() {
    const especial   = document.querySelector(".especial-section");
    const additional = document.querySelector(".additional-section");
    const footer     = document.querySelector(".footer");
    if (especial)   especial.style.display   = "none";
    if (additional) additional.style.display = "none";
    if (footer)     footer.style.display     = "none";

    const seccion = document.getElementById("manga-section");
    seccion.style.display = "block";

    seccion.innerHTML = `
        <div id="quint-app">

            <!-- HEADER -->
            <div id="quint-header">
                <div id="quint-header-info">
                    <div id="quint-avatar">五</div>
                    <div>
                        <div id="quint-header-nombre">Quintillizas Nakano</div>
                        <div id="quint-header-sub">Gotoubun no Hanayome ✦ Las cinco hermanas ♡</div>
                    </div>
                </div>

                <!-- Badges kanji — se iluminan cuando la chica está activa -->
                <div id="quint-badges">
                    ${Object.entries(CHICAS).map(([n,d]) =>
                        `<div class="quint-badge" id="quint-badge-${n}" title="${n}"
                            style="color:#7a8ba0;border-color:#2a3a55;opacity:0.2">${d.kanji}</div>`
                    ).join("")}
                </div>

                <div id="quint-header-btns">
                    <button class="quint-btn-top" onclick="quintImportar()">📂 Importar</button>
                    <button class="quint-btn-top" onclick="quintExportar()">💾 Exportar</button>
                    <button class="quint-btn-top quint-btn-danger" onclick="quintLimpiar()">🗑 Limpiar</button>
                </div>
            </div>

            <!-- MENSAJES -->
            <div id="quint-chat-mensajes"></div>

            <!-- AYUDA -->
            <div id="quint-ayuda">
                💡 Las hermanas aparecen cuando las mencionas o el contexto las llama.
                Tip: <code>/quint accion/</code> para narrar — ej: <code>/quint Nino entra al cuarto/</code>
            </div>

            <!-- INPUT -->
            <div id="quint-input-area">
                <textarea
                    id="quint-input"
                    placeholder="Escríbeles a las Nakano... ♡"
                    rows="1"
                    onkeydown="quintKeyHandler(event)"
                    oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px'"
                ></textarea>
                <button id="quint-btn-enviar" onclick="quintEnviar()">Enviar ♡</button>
            </div>
        </div>

        <style>
            #quint-app {
                display:flex; flex-direction:column;
                height:calc(100vh - 80px); max-width:860px; margin:0 auto;
                background:#0a0f18; border-radius:16px; overflow:hidden;
                box-shadow:0 0 40px rgba(90,120,200,0.1);
                border:1px solid #1f2d45; font-family:'Georgia',serif;
            }

            /* HEADER */
            #quint-header {
                display:flex; align-items:center; justify-content:space-between;
                background:#0d1526; padding:12px 20px;
                border-bottom:1px solid #1f2d45; flex-shrink:0; gap:10px; flex-wrap:wrap;
            }
            #quint-header-info  { display:flex; align-items:center; gap:12px; }
            #quint-avatar {
                width:44px; height:44px;
                background:linear-gradient(135deg,#1f3a70,#4a6adf);
                border-radius:50%; display:flex; align-items:center; justify-content:center;
                font-size:20px; color:#c0d0ff;
                box-shadow:0 0 12px rgba(80,120,255,0.3); flex-shrink:0;
                font-family:'Noto Serif JP',serif;
            }
            #quint-header-nombre { color:#8ab0ff; font-size:16px; font-weight:bold; }
            #quint-header-sub    { color:#3a5a90; font-size:11px; margin-top:2px; }

            /* Badges */
            #quint-badges { display:flex; gap:6px; flex-wrap:wrap; }
            .quint-badge {
                width:28px; height:28px; border-radius:50%;
                display:flex; align-items:center; justify-content:center;
                font-size:14px; border:2px solid; cursor:default;
                transition:all 0.35s ease; font-weight:700;
                font-family:'Noto Serif JP',serif;
            }

            /* Botones header */
            #quint-header-btns { display:flex; gap:6px; flex-wrap:wrap; }
            .quint-btn-top {
                background:#0d1526; color:#8ab0ff; border:1px solid #1f2d45;
                padding:6px 12px; border-radius:8px; cursor:pointer; font-size:12px;
                transition:background 0.2s; font-family:Arial,sans-serif;
            }
            .quint-btn-top:hover    { background:#162240; }
            .quint-btn-danger       { color:#ff7b7b !important; border-color:#6e2e2e !important; }
            .quint-btn-danger:hover { background:#3a1010 !important; }

            /* CHAT */
            #quint-chat-mensajes {
                flex:1; overflow-y:auto; padding:18px 16px;
                display:flex; flex-direction:column; gap:10px;
                scrollbar-width:thin; scrollbar-color:#1f2d45 #0a0f18;
            }
            #quint-chat-mensajes::-webkit-scrollbar       { width:6px; }
            #quint-chat-mensajes::-webkit-scrollbar-track  { background:#0a0f18; }
            #quint-chat-mensajes::-webkit-scrollbar-thumb  { background:#1f2d45; border-radius:3px; }

            /* BURBUJAS */
            .quint-burbuja {
                max-width:78%; padding:11px 15px; border-radius:16px;
                line-height:1.65; font-size:14px; word-break:break-word;
                animation:quintFadeIn 0.22s ease;
            }
            @keyframes quintFadeIn {
                from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)}
            }
            .quint-chica-burbuja {
                border:1px solid; align-self:flex-start; border-bottom-left-radius:4px;
            }
            .quint-usuario {
                background:linear-gradient(135deg,#1a2a4a,#1c3060);
                border:1px solid #2a4080; align-self:flex-end;
                border-bottom-right-radius:4px; color:#c0d8ff;
            }
            .quint-sistema {
                text-align:center; color:#3a5a90; font-size:11px;
                font-style:italic; font-family:Arial,sans-serif; padding:2px 0;
            }

            .quint-nombre-chica   { font-weight:bold; font-size:12px; font-family:Georgia,serif; }
            .quint-nombre-usuario { color:#7aaeff; font-weight:bold; font-size:12px; }
            .quint-texto          { color:#e8e8f0; }
            .quint-accion         { font-style:italic; }

            /* Imágenes */
            .quint-img-wrapper {
                margin-top:10px; border-radius:10px; overflow:hidden;
                max-width:320px; border:1px solid rgba(255,255,255,0.08);
            }
            .quint-img { width:100%; display:block; }

            /* Typing */
            .quint-typing {
                background:#0d1526; border:1px solid #1f2d45;
                border-radius:16px; border-bottom-left-radius:4px;
                padding:10px 14px; align-self:flex-start;
                max-width:160px; animation:quintFadeIn 0.2s ease;
            }
            .quint-dot {
                display:inline-block; width:7px; height:7px;
                background:#3a5a90; border-radius:50%; margin:0 2px;
                animation:quintDot 1.2s infinite;
            }
            .quint-dot:nth-child(2){animation-delay:0.0s}
            .quint-dot:nth-child(3){animation-delay:0.2s}
            .quint-dot:nth-child(4){animation-delay:0.4s}
            @keyframes quintDot {
                0%,80%,100%{transform:scale(0.7);opacity:0.3} 40%{transform:scale(1.1);opacity:1}
            }

            /* Ayuda */
            #quint-ayuda {
                background:#080e1c; color:#3a5a90; font-size:11px;
                font-family:Arial,sans-serif; padding:6px 16px;
                border-top:1px solid #151f35; flex-shrink:0;
            }
            #quint-ayuda code {
                background:#111d35; color:#8ab0ff;
                padding:1px 5px; border-radius:4px; font-size:11px;
            }

            /* Input */
            #quint-input-area {
                display:flex; gap:10px; padding:12px 16px;
                background:#0d1526; border-top:1px solid #1f2d45;
                flex-shrink:0; align-items:flex-end;
            }
            #quint-input {
                flex:1; background:#101d35; color:#e8e8f0;
                border:1px solid #1f2d45; border-radius:10px;
                padding:9px 13px; font-family:'Georgia',serif; font-size:14px;
                resize:none; outline:none; min-height:40px; max-height:120px;
                line-height:1.5; transition:border-color 0.2s;
            }
            #quint-input:focus        { border-color:#3a5a90; }
            #quint-input::placeholder { color:#3a5a90; }
            #quint-btn-enviar {
                background:linear-gradient(135deg,#1f3a70,#3a6adf);
                color:#c0d8ff; border:none; padding:9px 18px;
                border-radius:10px; cursor:pointer;
                font-family:'Georgia',serif; font-size:14px; font-weight:bold;
                transition:all 0.2s; white-space:nowrap; align-self:flex-end;
            }
            #quint-btn-enviar:hover    { transform:scale(1.04); box-shadow:0 0 10px rgba(80,120,255,0.3); }
            #quint-btn-enviar:disabled { opacity:0.5; cursor:not-allowed; transform:none; box-shadow:none; }

            @media(max-width:600px) {
                #quint-app          { height:calc(100vh - 60px); border-radius:0; }
                .quint-burbuja      { max-width:92%; }
                #quint-header-btns  { display:none; }
                .quint-img-wrapper  { max-width:100%; }
            }
        </style>
    `;

    quintHistorial     = [];
    quintLogExport     = [];
    quintChicasActivas = new Set(["Yotsuba"]);
    quintBienvenida();
    quintActualizarBadges();
    setTimeout(() => { const inp = document.getElementById("quint-input"); if (inp) inp.focus(); }, 100);
}
