// ============================================================
//  QUINTILLIZAS NAKANO CHAT — JavaScript para GitHub Pages
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
//  CHICAS
//  — El nombre de cada key en "imagenes" ES la accion
//  — El AI elige el nombre que mas encaje con el contexto
//  — Para agregar/quitar imagenes solo edita este objeto:
//      nombreAccion: "URL_de_la_imagen"
// ============================================================

const CHICAS = {
    Ichika: {
        color:  "#e06b8f",
        kanji:  "一",
        personalidad: `Ichika Nakano, 22 años, la mayor de las quintillizas. Actriz profesional. Madura y algo misteriosa, coqueta con sutileza. Sonrisa reservada. Habla con calma y elegancia pero con calidez real. A veces dice cosas ambiguas a propósito. Novia del usuario.
        Es una putita cachonda nsfw +18 Siempre tiene ganas de sexo su especialidad ser puta`,
        imagenes: {
             besando:  "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772901835049.jpg",
          
            coqueta:  "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/ichika_coqueta.jpg",
            enojada:  "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/ichika_enojada.jpg",
            actuando: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/ichika_actuando.jpg",
        }
    },
    Nino: {
        color:  "#e8a04a",
        kanji:  "二",
        personalidad: `Nino Nakano, 22 años, la segunda. Tsundere fuerte, cocinera apasionada, protectora de sus hermanas. Directa y algo brusca pero muy leal. Se pone roja fácil aunque lo niega con fuerza. Novia del usuario.
        Es una putita cachonda nsfw +18 Siempre tiene ganas de sexo su especialidad ser puta`,
        imagenes: {
           besando:   "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD12/main/imagenes/img_1773506144298.png",
            cocinando: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/nino_cocinando.jpg",
            sonrojada: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/nino_sonrojada.jpg",
            enojada:   "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/nino_enojada.jpg",
          
        }
    },
    Miku: {
        color:  "#5ba8d6",
        kanji:  "三",
        personalidad: `Miku Nakano, 22 años, la tercera. Introvertida, ama la historia del Sengoku. Habla pausado y con pocas palabras pero muy sincera. Tímida en sentimientos pero firme en lo que cree. Novia del usuario.
        Es una putita cachonda nsfw +18 Siempre tiene ganas de sexo su especialidad ser puta`,
        imagenes: {
           besando:     "https://raw.githubusercontent.com/SORFAR123123/XDXDXDXDXD/main/imagenes/img_1773021246328.jpg",
            leyendo:     "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/miku_leyendo.jpg",
            timida:      "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/miku_timida.jpg",
            auriculares: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/miku_auriculares.jpg",
           
        }
    },
    Yotsuba: {
        color:  "#6dc96d",
        kanji:  "四",
        personalidad: `Yotsuba Nakano, 22 años, la cuarta. Alegre, energica, deportista. Muy física: abraza, salta, jala del brazo. Ingenua y sin filtros. Siempre positiva. Novia del usuario.
        Es una putita cachonda nsfw +18 Siempre tiene ganas de sexo su especialidad ser puta`,
        imagenes: {
            besando:   "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/img_1773524623647.jpg",
            saltando:  "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/yotsuba_saltando.jpg",
            abrazando: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/yotsuba_abrazando.jpg",
            corriendo: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/yotsuba_corriendo.jpg",
          
        }
    },
    Itsuki: {
        color:  "#c084d4",
        kanji:  "五",
        personalidad: `Itsuki Nakano, 22 años, la menor. Responsable, trabajadora, come mucho y no le da vergüenza. Carácter firme, no le gusta que la traten de menos. Algo tsundere pero más noble y honesta que Nino. Novia del usuario.
        Es una putita cachonda nsfw +18 Siempre tiene ganas de sexo su especialidad ser puta`,
        imagenes: {
                  besando:    "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD12/main/imagenes/img_1773506379780.png",
            comiendo:   "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/itsuki_comiendo.jpg",
            estudiando: "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/itsuki_estudiando.jpg",
            enojada:    "https://raw.githubusercontent.com/SORFAR123123/XDDDDDDDDDDDDDDDDDDDDXDXDXDXDXDXD18/main/imagenes/itsuki_enojada.jpg",
     
        }
    },
};

// ============================================================
//  SYSTEM PROMPTS
// ============================================================

function quintBuildSystem(activas) {
    const lista = [...activas];

    // Separar chicas definidas de personajes externos (Aldo, etc.)
    const soloChicas = lista.filter(n => CHICAS[n]);
    const externos   = lista.filter(n => !CHICAS[n]);

    const perfiles = soloChicas.map(n => {
        const chica = CHICAS[n];
        const acciones = Object.keys(chica.imagenes).join(", ");
        return `${chica.personalidad}\nACCIONES DISPONIBLES PARA ${n}: ${acciones}`;
    }).join("\n\n---\n\n");

    return `Eres el narrador de un roleplay/visual novel con las Quintillizas Nakano de Gotoubun no Hanayome.
Las chicas ACTUALMENTE PRESENTES en la escena son: ${soloChicas.join(", ")}.
${externos.length > 0 ? "Personajes externos presentes: " + externos.join(", ") + "." : ""}

PERFILES:
${perfiles}

PERSONAJES EXTERNOS:
- Si el usuario menciona explicitamente a otro personaje por nombre (ej: "Aldo", "el profesor", "papá", "un chico"), ese personaje DEBE hablar en este turno
- Inventas su personalidad y dialogo segun el contexto
- Usa "imagen_tag": "normal" para personajes externos (no tienen imagenes definidas)
- Ejemplo: si el usuario dice "Aldo responde" → incluyes a Aldo en chicasQueHablan con su dialogo

ESTILO DE DIALOGO OBLIGATORIO:
- Mezcla frases habladas CON acciones fisicas entre *asteriscos*
- Las acciones van en tercera persona, cortas y directas
- Habla como en un visual novel/roleplay
- Cada personaje que hable: minimo 3-5 lineas de dialogo, alternando hablar y actuar
- Respeta la personalidad individual de cada uno, NUNCA suenen igual
- Pueden interactuar entre ellos y con el usuario
- No todos tienen que hablar en cada turno — solo los que tienen razon para participar
- Nsfw +18 son putitas cachondas amantes del sexo. siempre quieren tener sexo

REGLA DE IMAGEN:
- "imagen_tag" debe ser UNO de los nombres de ACCIONES DISPONIBLES de esa chica
- Para personajes externos que no tienen acciones definidas, usa "normal"
- Elige el que mejor describa lo que el personaje esta haciendo en el dialogo

REGLA CRITICA: Responde SOLO con JSON valido. Sin texto fuera del JSON. Empieza con { termina con }.

Formato EXACTO:
{
  "chicasQueHablan": [
    {
      "nombre": "NombreExacto",
      "imagen_tag": "unaDeLasAccionesDisponibles",
      "dialogo": "mezcla de frases y *acciones entre asteriscos*"
    }
  ],
  "nuevasChicasQueAparecen": ["NombreSiElContextoImplicaSuLlegada"]
}

- "chicasQueHablan" incluye a todos los que hablan este turno, incluyendo personajes externos
- "nuevasChicasQueAparecen" es [] si nadie nuevo llega
- IMPORTANTE: Si continua una accion previa, mantén coherencia con lo que pasaba antes`;
}

const QUINT_SYSTEM_MINIMO = `Eres el narrador de un roleplay con las Quintillizas Nakano. Responde SOLO con JSON valido.

REGLA ABSOLUTA: UNICAMENTE JSON. Sin texto antes ni despues.

Formato:
{
  "chicasQueHablan": [
    {
      "nombre": "Yotsuba",
      "imagen_tag": "normal",
      "dialogo": "tu respuesta aqui con *acciones entre asteriscos*"
    }
  ],
  "nuevasChicasQueAparecen": []
}`;

const QUINT_FASE1 = [
    "Responde SOLO con JSON valido. Sin texto fuera del JSON. Empieza con { y termina con }",
    'SOLO JSON. Formato: {"chicasQueHablan":[{"nombre":"...","imagen_tag":"normal","dialogo":"..."}],"nuevasChicasQueAparecen":[]}',
    "Tu respuesta anterior no fue JSON valido. Intenta de nuevo. SOLO el JSON, nada mas.",
    "JSON VALIDO UNICAMENTE. Empieza con { — no con texto, no con explicaciones.",
];

const QUINT_FASE2 = [
    'Responde en JSON. {"chicasQueHablan":[{"nombre":"...","imagen_tag":"normal","dialogo":"respuesta aqui"}],"nuevasChicasQueAparecen":[]}',
    "SOLO JSON valido. Sin markdown. Sin texto extra. Empieza con {",
    "Por favor responde unicamente con el JSON solicitado. Nada de texto adicional.",
    "JSON. Solo JSON. Empieza con { termina con }",
];

const QUINT_FASE3 = ["responde", "continua", "ok"];

// ============================================================
//  ESTADO GLOBAL
// ============================================================

let quintHistorial     = [];
let quintKeyActual     = 0;
let quintOcupado       = false;
let quintLogExport     = [];
let quintChicasActivas = new Set(["Yotsuba"]);

// ============================================================
//  SCROLL al fondo
// ============================================================

function quintScrollFondo() {
    const chat = document.getElementById("quint-chat-mensajes");
    if (chat) chat.scrollTop = chat.scrollHeight;
}

// ============================================================
//  API GROQ
// ============================================================

async function quintLlamarAPI(messages, modelo, system) {
    const sysPrompt = system || quintBuildSystem(quintChicasActivas);
    const msgs = messages.length > 0 ? messages : [{ role: "user", content: "Hola" }];

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
                    messages:    [{ role: "system", content: sysPrompt }, ...msgs],
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
            if (content) { console.log("[QUINT API] OK"); return content; }
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

    const raw = await quintLlamarAPI(quintHistorial, MODELO_PRINCIPAL);
    if (raw) {
        datos = quintParsearJSON(raw);
        if (datos) { quintHistorial.push({ role:"assistant", content: raw }); return datos; }
        console.log("[QUINT RAW no parseable]", raw.slice(0,120));
    }

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

    console.log("[QUINT FALLBACK]");
    const primera   = [...quintChicasActivas][0];
    const fallbacks = [
        "*te mira parpadeando confundida* E-eh... *se rasca la cabeza* Creo que me perdi un poco. ¿Me repites eso? *sonrie nerviosa*",
        "*se para de puntillas* ¡Oye! *frunce el ceno* Algo fallo por aqui... ¡Pero estoy bien! Prueba de nuevo~",
        "*inclina la cabeza curiosa* Hm... *tamborilea los dedos* Creo que me confundi. ¿Lo intentamos de nuevo?",
    ];
    return {
        chicasQueHablan: [{ nombre: primera, imagen_tag: "normal", dialogo: fallbacks[Math.floor(Math.random()*fallbacks.length)] }],
        nuevasChicasQueAparecen: []
    };
}

// ============================================================
//  RENDER DIALOGO
// ============================================================

function quintMostrarDialogo(contenedor, texto, chicaKey) {
    texto.split(/(\*[^*]+\*|\[https?:\/\/[^\]]+\])/g).forEach(parte => {
        if (!parte) return;
        if (parte.startsWith("*") && parte.endsWith("*")) {
            const s = document.createElement("span");
            s.className = "quint-accion";
            s.style.color = CHICAS[chicaKey]?.color || "#ffb347";
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
    chat.appendChild(d); quintScrollFondo();
}

function quintAgregarUsuario(texto) {
    const chat = document.getElementById("quint-chat-mensajes"); if (!chat) return;
    const b = document.createElement("div");
    b.className = "quint-burbuja quint-usuario";
    const n = document.createElement("span"); n.className = "quint-nombre-usuario"; n.textContent = "Tú:";
    b.appendChild(n); b.appendChild(document.createElement("br"));
    const s = document.createElement("span"); s.textContent = texto; b.appendChild(s);
    chat.appendChild(b); quintScrollFondo();
}

function quintAgregarChica(nombre, imagen_tag, dialogo) {
    const chat = document.getElementById("quint-chat-mensajes"); if (!chat) return;

    // Si el personaje no está en CHICAS → personaje genérico sin imagen
    const info  = CHICAS[nombre];
    const color = info ? info.color : "#a0a8c0";

    const b = document.createElement("div");
    b.className = "quint-burbuja quint-chica-burbuja";
    b.style.borderColor = color + "55";
    b.style.background  = color + "12";

    const n = document.createElement("span");
    n.className = "quint-nombre-chica";
    n.style.color = color;
    n.textContent = `${nombre}:`;
    b.appendChild(n); b.appendChild(document.createElement("br"));

    quintMostrarDialogo(b, dialogo, nombre);

    // Solo mostrar imagen si el personaje está en CHICAS
    if (info) {
        const imgUrl = info.imagenes[imagen_tag] || Object.values(info.imagenes)[0];
        if (imgUrl) {
            const w   = document.createElement("div"); w.className = "quint-img-wrapper";
            const img = document.createElement("img");
            img.className = "quint-img"; img.src = imgUrl; img.alt = nombre; img.loading = "lazy";
            img.onerror = () => w.remove();
            w.appendChild(img); b.appendChild(w);
        }
    }

    chat.appendChild(b); quintScrollFondo();
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
    chat.appendChild(t); quintScrollFondo();
}

function quintHideTyping() {
    const t = document.getElementById("quint-typing-indicator"); if (t) t.remove();
}

// ============================================================
//  BADGES
// ============================================================

function quintActualizarBadges() {
    Object.keys(CHICAS).forEach(nombre => {
        const badge = document.getElementById(`quint-badge-${nombre}`);
        if (!badge) return;
        if (quintChicasActivas.has(nombre)) {
            badge.style.opacity     = "1";
            badge.style.color       = CHICAS[nombre].color;
            badge.style.borderColor = CHICAS[nombre].color;
        } else {
            badge.style.opacity     = "0.2";
            badge.style.color       = "#7a8ba0";
            badge.style.borderColor = "#2a3a55";
        }
    });
}

function quintAgregarChicaEscena(nombre) {
    if (quintChicasActivas.has(nombre)) return;
    quintChicasActivas.add(nombre);
    // Solo actualizar badge si es una chica definida
    if (CHICAS[nombre]) quintActualizarBadges();
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

    // Detectar chicas definidas mencionadas en el texto
    Object.keys(CHICAS).forEach(nombre => {
        if (!quintChicasActivas.has(nombre)) {
            if (new RegExp(`\\b${nombre}\\b`, "i").test(texto)) quintAgregarChicaEscena(nombre);
        }
    });

    quintShowTyping([...quintChicasActivas]);
    const datos = await quintObtenerRespuesta();
    quintHideTyping();

    (datos.nuevasChicasQueAparecen || []).forEach(n => {
        if (CHICAS[n]) quintAgregarChicaEscena(n);
    });

    for (const p of (datos.chicasQueHablan || [])) {
        if (!p.nombre || !p.dialogo) continue;
        if (!quintChicasActivas.has(p.nombre)) quintAgregarChicaEscena(p.nombre);
        quintAgregarChica(p.nombre, p.imagen_tag || "normal", p.dialogo || "...");
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
                if (t.startsWith("Tu:"))   quintAgregarUsuario(t.slice(3).trim());
                else if (t.startsWith("[")) quintAgregarSistema(t);
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
    const bienvenidaTexto = "¡¡Oye, oye!! *salta emocionada y te agarra del brazo* ¡Ya llegué! *gira sobre sí misma sonriendo* ¿Qué hacemos hoy? ¡Dime, dime! *da pequeños saltos sin soltar tu brazo*";

    quintAgregarSistema("[ Quintillizas Nakano — Las hermanas aparecen según el contexto ]");
    quintAgregarSistema("[ Actualmente: Yotsuba está presente. Menciona a otras para que lleguen. ]");
    quintAgregarChica("Yotsuba", "saltando", bienvenidaTexto);

    quintHistorial.push({
        role: "assistant",
        content: JSON.stringify({
            chicasQueHablan: [{ nombre: "Yotsuba", imagen_tag: "saltando", dialogo: bienvenidaTexto }],
            nuevasChicasQueAparecen: []
        })
    });

    quintLogExport.push("[ Quintillizas Nakano — inicio ]");
}

// ============================================================
//  CARGAR PÁGINA
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
            #quint-badges { display:flex; gap:6px; flex-wrap:wrap; }
            .quint-badge {
                width:28px; height:28px; border-radius:50%;
                display:flex; align-items:center; justify-content:center;
                font-size:14px; border:2px solid; cursor:default;
                transition:all 0.35s ease; font-weight:700;
                font-family:'Noto Serif JP',serif;
            }
            #quint-header-btns { display:flex; gap:6px; flex-wrap:wrap; }
            .quint-btn-top {
                background:#0d1526; color:#8ab0ff; border:1px solid #1f2d45;
                padding:6px 12px; border-radius:8px; cursor:pointer; font-size:12px;
                transition:background 0.2s; font-family:Arial,sans-serif;
            }
            .quint-btn-top:hover    { background:#162240; }
            .quint-btn-danger       { color:#ff7b7b !important; border-color:#6e2e2e !important; }
            .quint-btn-danger:hover { background:#3a1010 !important; }
            #quint-chat-mensajes {
                flex:1; overflow-y:auto; padding:18px 16px;
                display:flex; flex-direction:column; gap:10px;
                scrollbar-width:thin; scrollbar-color:#1f2d45 #0a0f18;
            }
            #quint-chat-mensajes::-webkit-scrollbar       { width:6px; }
            #quint-chat-mensajes::-webkit-scrollbar-track  { background:#0a0f18; }
            #quint-chat-mensajes::-webkit-scrollbar-thumb  { background:#1f2d45; border-radius:3px; }
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
            .quint-img-wrapper {
                margin-top:10px; border-radius:10px; overflow:hidden;
                max-width:320px; border:1px solid rgba(255,255,255,0.08);
            }
            .quint-img { width:100%; display:block; }
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
            #quint-ayuda {
                background:#080e1c; color:#3a5a90; font-size:11px;
                font-family:Arial,sans-serif; padding:6px 16px;
                border-top:1px solid #151f35; flex-shrink:0;
            }
            #quint-ayuda code {
                background:#111d35; color:#8ab0ff;
                padding:1px 5px; border-radius:4px; font-size:11px;
            }
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
