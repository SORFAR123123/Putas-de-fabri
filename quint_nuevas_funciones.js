// ============================================================
//  NUEVAS FUNCIONES — QUINTILLIZAS NAKANO CHAT
//  1. Pantalla de selección de chica inicial
//  2. Sistema de memorias con slots (localStorage)
//  3. Menú de guardar memoria
// ============================================================

// ============================================================
//  CONSTANTE: SLOTS DE MEMORIA (máximo 6)
// ============================================================
const MEMORY_SLOTS_KEY = "quint_memory_slots";
const MAX_MEMORY_SLOTS = 6;

// ============================================================
//  UTILIDADES DE MEMORIA
// ============================================================

function memoryGetSlots() {
    try {
        const raw = localStorage.getItem(MEMORY_SLOTS_KEY);
        return raw ? JSON.parse(raw) : Array(MAX_MEMORY_SLOTS).fill(null);
    } catch {
        return Array(MAX_MEMORY_SLOTS).fill(null);
    }
}

function memorySaveSlots(slots) {
    try {
        localStorage.setItem(MEMORY_SLOTS_KEY, JSON.stringify(slots));
    } catch (e) {
        console.error("[MEMORIA] Error guardando:", e);
    }
}

// ============================================================
//  GUARDAR MEMORIA EN SLOT
//  Llama a esto desde el menú "Guardar memoria"
// ============================================================

function memorySaveToSlot(slotIndex) {
    if (quintHistorial.length < 2) {
        alert("No hay conversación suficiente para guardar.");
        return;
    }

    const slots = memoryGetSlots();
    const ahora = new Date();
    const fechaStr = ahora.toLocaleDateString("es-ES", {
        day: "2-digit", month: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit"
    });

    // Thumbnail: primer imagen encontrada en el log
    let thumbnail = null;
    for (const nombre of quintChicasActivas) {
        const chica = CHICAS[nombre];
        if (chica) {
            const keys = Object.keys(chica.imagenes);
            if (keys.length > 0) {
                thumbnail = chica.imagenes[keys[0]];
                break;
            }
        }
    }

    // Resumen automático del log (últimas 3 líneas del log)
    const resumen = quintLogExport.filter(l => !l.startsWith("[")).slice(-3).join(" / ").slice(0, 80) || "Sin resumen";

    slots[slotIndex] = {
        fecha: fechaStr,
        nombre: quintNombreUsuario,
        chicas: [...quintChicasActivas],
        chicaInicial: [...quintChicasActivas][0],
        historial: quintHistorial,
        log: quintLogExport,
        thumbnail,
        resumen
    };

    memorySaveSlots(slots);
    quintAgregarSistema(`[ Memoria guardada en slot ${slotIndex + 1} ]`);
    memoryCloseMenu();
}

// ============================================================
//  CARGAR MEMORIA DESDE SLOT
// ============================================================

function memoryLoadSlot(slotIndex) {
    const slots = memoryGetSlots();
    const slot = slots[slotIndex];
    if (!slot) return;

    if (!confirm(`¿Cargar memoria del slot ${slotIndex + 1}?\nSe reemplazará la conversación actual.`)) return;

    quintHistorial     = slot.historial || [];
    quintLogExport     = slot.log || [];
    quintNombreUsuario = slot.nombre || "Tú";
    quintChicasActivas = new Set(slot.chicas || ["Yotsuba"]);

    const chat = document.getElementById("quint-chat-mensajes");
    if (chat) chat.innerHTML = "";

    quintAgregarSistema(`[ Memoria cargada — ${slot.fecha} ]`);

    for (const l of quintLogExport) {
        const t = l.trim();
        if (!t) continue;
        if (t.startsWith("Tu:"))  quintAgregarUsuario(t.slice(3).trim());
        else if (t.startsWith("[")) quintAgregarSistema(t);
        else {
            const sep  = t.indexOf(":");
            const nom  = sep > -1 ? t.slice(0, sep).trim() : "";
            const dial = sep > -1 ? t.slice(sep + 1).trim() : t;
            if (CHICAS[nom]) {
                quintChicasActivas.add(nom);
                quintAgregarChica(nom, Object.keys(CHICAS[nom].imagenes)[0] || "Hablando", dial);
            } else {
                quintAgregarSistema(t);
            }
        }
    }

    quintActualizarBadges();
    memoryClosePanel();
    quintAgregarSistema("[ Continúa la conversación... ]");
}

// ============================================================
//  BORRAR SLOT DE MEMORIA
// ============================================================

function memoryDeleteSlot(slotIndex) {
    if (!confirm(`¿Borrar la memoria del slot ${slotIndex + 1}?`)) return;
    const slots = memoryGetSlots();
    slots[slotIndex] = null;
    memorySaveSlots(slots);
    memoryRenderPanel(); // re-render el panel
}

// ============================================================
//  PANEL DE MEMORIAS (abre/cierra desde botón)
// ============================================================

function memoryOpenPanel() {
    const existing = document.getElementById("quint-memory-panel");
    if (existing) { memoryClosePanel(); return; }

    const app = document.getElementById("quint-app");
    const panel = document.createElement("div");
    panel.id = "quint-memory-panel";

    app.appendChild(panel);
    memoryRenderPanel();
}

function memoryClosePanel() {
    const panel = document.getElementById("quint-memory-panel");
    if (panel) panel.remove();
}

function memoryRenderPanel() {
    const panel = document.getElementById("quint-memory-panel");
    if (!panel) return;

    const slots = memoryGetSlots();

    panel.innerHTML = `
        <div class="qm-panel-header">
            <span class="qm-panel-title">Memorias guardadas</span>
            <button class="qm-close-btn" onclick="memoryClosePanel()">✕</button>
        </div>
        <div class="qm-slots-grid">
            ${slots.map((slot, i) => slot ? `
                <div class="qm-slot qm-slot-used">
                    ${slot.thumbnail ? `<img class="qm-slot-thumb" src="${slot.thumbnail}" alt="">` : `<div class="qm-slot-thumb qm-slot-thumb-empty">♡</div>`}
                    <div class="qm-slot-info">
                        <div class="qm-slot-fecha">${slot.fecha}</div>
                        <div class="qm-slot-nombre">${slot.nombre} — ${slot.chicas.join(", ")}</div>
                        <div class="qm-slot-resumen">${slot.resumen}</div>
                    </div>
                    <div class="qm-slot-btns">
                        <button class="qm-btn-load" onclick="memoryLoadSlot(${i})">Cargar</button>
                        <button class="qm-btn-del" onclick="memoryDeleteSlot(${i})">✕</button>
                    </div>
                </div>
            ` : `
                <div class="qm-slot qm-slot-empty">
                    <div class="qm-slot-empty-label">Slot ${i + 1} vacío</div>
                </div>
            `).join("")}
        </div>
    `;
}

// ============================================================
//  MENÚ GUARDAR MEMORIA (elige slot destino)
// ============================================================

function memoryOpenSaveMenu() {
    if (quintHistorial.length < 2) {
        alert("No hay conversación suficiente para guardar.");
        return;
    }

    const existing = document.getElementById("quint-save-menu");
    if (existing) { existing.remove(); return; }

    const slots = memoryGetSlots();
    const app   = document.getElementById("quint-app");

    const menu = document.createElement("div");
    menu.id = "quint-save-menu";

    menu.innerHTML = `
        <div class="qsm-header">
            <span>Guardar memoria en...</span>
            <button class="qm-close-btn" onclick="memoryCloseMenu()">✕</button>
        </div>
        <div class="qsm-slots">
            ${slots.map((slot, i) => `
                <button class="qsm-slot-btn ${slot ? 'qsm-occupied' : 'qsm-empty'}" onclick="memorySaveToSlot(${i})">
                    <span class="qsm-slot-num">Slot ${i + 1}</span>
                    ${slot ? `<span class="qsm-slot-detail">${slot.fecha} — ${slot.nombre}</span>` : `<span class="qsm-slot-detail">Vacío</span>`}
                </button>
            `).join("")}
        </div>
    `;

    app.appendChild(menu);
}

function memoryCloseMenu() {
    const menu = document.getElementById("quint-save-menu");
    if (menu) menu.remove();
}

// ============================================================
//  ESTILOS DEL SISTEMA DE MEMORIAS
// ============================================================

function memoryInjectStyles() {
    const style = document.createElement("style");
    style.textContent = `
        /* PANEL DE MEMORIAS */
        #quint-memory-panel {
            position: absolute;
            top: 60px; right: 0;
            width: min(480px, 95%);
            max-height: calc(100% - 120px);
            overflow-y: auto;
            background: #0d1526;
            border: 1px solid #1f2d45;
            border-radius: 12px;
            z-index: 200;
            padding: 0;
            box-shadow: 0 8px 32px rgba(0,0,0,0.5);
            animation: qmFadeIn 0.18s ease;
        }
        .qm-panel-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 12px 16px;
            border-bottom: 1px solid #1f2d45;
        }
        .qm-panel-title {
            color: #8ab0ff; font-size: 14px; font-weight: bold; font-family: Georgia, serif;
        }
        .qm-close-btn {
            background: none; border: none; color: #3a5a90;
            cursor: pointer; font-size: 16px; padding: 0 4px;
            transition: color 0.2s;
        }
        .qm-close-btn:hover { color: #ff7b7b; }
        .qm-slots-grid {
            display: flex; flex-direction: column; gap: 1px;
            padding: 8px;
        }
        .qm-slot {
            border-radius: 10px;
            border: 1px solid #1f2d45;
            padding: 10px 12px;
            transition: background 0.2s;
        }
        .qm-slot-used {
            display: flex; align-items: center; gap: 10px;
            background: #0a0f18;
            cursor: default;
        }
        .qm-slot-used:hover { background: #111c30; }
        .qm-slot-thumb {
            width: 52px; height: 52px;
            border-radius: 8px;
            object-fit: cover; flex-shrink: 0;
            border: 1px solid #1f2d45;
        }
        .qm-slot-thumb-empty {
            display: flex; align-items: center; justify-content: center;
            background: #162240; color: #3a5a90; font-size: 18px;
            width: 52px; height: 52px; flex-shrink: 0;
        }
        .qm-slot-info { flex: 1; min-width: 0; }
        .qm-slot-fecha  { color: #3a5a90; font-size: 11px; font-family: Arial, sans-serif; }
        .qm-slot-nombre { color: #8ab0ff; font-size: 12px; font-weight: bold; font-family: Georgia, serif; margin: 2px 0; }
        .qm-slot-resumen {
            color: #5a7aaa; font-size: 11px; font-family: Arial, sans-serif;
            white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .qm-slot-btns { display: flex; flex-direction: column; gap: 4px; flex-shrink: 0; }
        .qm-btn-load {
            background: #1f3a70; color: #8ab0ff;
            border: 1px solid #2a4a80; border-radius: 6px;
            padding: 4px 10px; cursor: pointer; font-size: 11px;
            font-family: Arial, sans-serif;
            transition: background 0.2s;
        }
        .qm-btn-load:hover { background: #2a4a90; }
        .qm-btn-del {
            background: none; border: 1px solid #4a1a1a; color: #ff7b7b;
            border-radius: 6px; padding: 4px 8px; cursor: pointer; font-size: 11px;
            transition: background 0.2s;
        }
        .qm-btn-del:hover { background: #3a1010; }
        .qm-slot-empty {
            display: flex; align-items: center; justify-content: center;
            background: #080e1c; min-height: 44px;
        }
        .qm-slot-empty-label { color: #2a3a55; font-size: 12px; font-family: Arial, sans-serif; }

        /* MENÚ GUARDAR */
        #quint-save-menu {
            position: absolute;
            bottom: 70px; right: 16px;
            width: min(320px, 90%);
            background: #0d1526;
            border: 1px solid #1f2d45;
            border-radius: 12px;
            z-index: 200;
            padding: 0;
            box-shadow: 0 8px 32px rgba(0,0,0,0.5);
            animation: qmFadeIn 0.18s ease;
        }
        .qsm-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 10px 14px;
            border-bottom: 1px solid #1f2d45;
            color: #8ab0ff; font-size: 13px;
            font-family: Georgia, serif;
        }
        .qsm-slots { display: flex; flex-direction: column; gap: 2px; padding: 8px; }
        .qsm-slot-btn {
            display: flex; align-items: center; justify-content: space-between;
            padding: 8px 12px; border-radius: 8px; cursor: pointer;
            border: 1px solid #1f2d45;
            font-family: Arial, sans-serif;
            transition: background 0.2s;
            text-align: left;
        }
        .qsm-empty {
            background: #080e1c; color: #3a5a90;
        }
        .qsm-empty:hover { background: #0d1a2e; }
        .qsm-occupied {
            background: #0a1220; color: #8ab0ff;
            border-color: #2a3a60;
        }
        .qsm-occupied:hover { background: #111c30; }
        .qsm-slot-num { font-size: 12px; font-weight: bold; }
        .qsm-slot-detail { font-size: 11px; color: #3a5a90; }
        .qsm-occupied .qsm-slot-detail { color: #5a7aaa; }

        @keyframes qmFadeIn {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        /* BOTONES DE HEADER ACTUALIZADOS */
        #quint-header-btns .quint-btn-memory {
            background: #0d1526; color: #c8a0ff;
            border: 1px solid #3a2a60;
            padding: 6px 12px; border-radius: 8px; cursor: pointer; font-size: 12px;
            transition: background 0.2s;
        }
        #quint-header-btns .quint-btn-memory:hover { background: #1e1040; }

        /* PANTALLA DE SELECCIÓN DE CHICA */
        #quint-chica-overlay {
            position: absolute; inset: 0; z-index: 110;
            background: #0a0f18;
            display: flex; align-items: center; justify-content: flex-start;
            flex-direction: column;
            padding: 24px 20px;
            border-radius: 16px;
            overflow-y: auto;
        }
        #quint-chica-titulo {
            color: #8ab0ff; font-size: 18px; font-weight: bold;
            font-family: Georgia, serif; margin-bottom: 4px; text-align: center;
        }
        #quint-chica-sub {
            color: #3a5a90; font-size: 12px;
            font-family: Georgia, serif; margin-bottom: 20px; text-align: center;
        }
        #quint-chica-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 12px; width: 100%; max-width: 520px;
        }
        .quint-chica-card {
            background: #0d1526;
            border: 2px solid #1f2d45;
            border-radius: 12px;
            padding: 14px 10px;
            display: flex; flex-direction: column; align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: border-color 0.25s, background 0.25s, transform 0.15s;
            user-select: none;
        }
        .quint-chica-card:hover {
            background: #111c30;
            transform: translateY(-2px);
        }
        .quint-chica-card.seleccionada {
            border-color: var(--card-color);
            background: #141e38;
            box-shadow: 0 0 12px color-mix(in srgb, var(--card-color) 30%, transparent);
        }
        .quint-chica-card-kanji {
            font-size: 26px; font-family: 'Noto Serif JP', serif;
        }
        .quint-chica-card-nombre {
            font-size: 13px; font-family: Georgia, serif; font-weight: bold;
        }
        .quint-chica-card-desc {
            font-size: 10px; color: #3a5a90; font-family: Arial, sans-serif;
            text-align: center; line-height: 1.4;
        }
        #quint-chica-btn-continuar {
            margin-top: 20px;
            background: linear-gradient(135deg, #1f3a70, #3a6adf);
            color: #c0d8ff; border: none; padding: 11px 32px;
            border-radius: 10px; cursor: pointer;
            font-family: Georgia, serif; font-size: 15px; font-weight: bold;
            transition: all 0.2s; max-width: 260px; width: 100%;
        }
        #quint-chica-btn-continuar:hover {
            transform: scale(1.04);
            box-shadow: 0 0 12px rgba(80,120,255,0.3);
        }
        #quint-chica-btn-continuar:disabled {
            opacity: 0.4; cursor: not-allowed; transform: none;
        }
    `;
    document.head.appendChild(style);
}

// ============================================================
//  PANTALLA DE SELECCIÓN DE CHICA INICIAL
// ============================================================

// Descripciones cortas por chica (edita aquí si quieres cambiarlas)
const CHICA_DESCRIPCIONES = {
    Ichika:  "Mayor. Actriz. Misteriosa y elegante.",
    Nino:    "Segunda. Cocinera. Directa y leal.",
    Miku:    "Tercera. Historiadora. Tranquila y sincera.",
    Yotsuba: "Cuarta. Deportista. Alegre y sin filtros.",
    Itsuki:  "Menor. Trabajadora. Firme y honesta.",
    Reze:    "Personaje especial.",
};

let quintChicaSeleccionadaInicial = null;

function quintMostrarSelectorChica() {
    const app = document.getElementById("quint-app");

    const overlay = document.createElement("div");
    overlay.id = "quint-chica-overlay";

    const nombres = Object.keys(CHICAS);

    overlay.innerHTML = `
        <div id="quint-chica-titulo">¿Con quién empezar? ♡</div>
        <div id="quint-chica-sub">Puedes llamar a las demás durante la conversación</div>
        <div id="quint-chica-grid">
            ${nombres.map(nombre => {
                const chica = CHICAS[nombre];
                const desc  = CHICA_DESCRIPCIONES[nombre] || "";
                return `
                    <div
                        class="quint-chica-card"
                        id="quint-card-${nombre}"
                        style="--card-color: ${chica.color};"
                        onclick="quintSeleccionarChicaInicial('${nombre}')"
                    >
                        <span class="quint-chica-card-kanji" style="color:${chica.color}">${chica.kanji}</span>
                        <span class="quint-chica-card-nombre" style="color:${chica.color}">${nombre}</span>
                        <span class="quint-chica-card-desc">${desc}</span>
                    </div>
                `;
            }).join("")}
        </div>
        <button id="quint-chica-btn-continuar" disabled onclick="quintConfirmarChicaInicial()">
            Comenzar ♡
        </button>
    `;

    app.style.position = "relative";
    app.appendChild(overlay);
}

function quintSeleccionarChicaInicial(nombre) {
    // Deseleccionar todas
    Object.keys(CHICAS).forEach(n => {
        const card = document.getElementById(`quint-card-${n}`);
        if (card) card.classList.remove("seleccionada");
    });

    // Seleccionar la elegida
    const card = document.getElementById(`quint-card-${nombre}`);
    if (card) card.classList.add("seleccionada");

    quintChicaSeleccionadaInicial = nombre;

    const btn = document.getElementById("quint-chica-btn-continuar");
    if (btn) btn.disabled = false;
}

function quintConfirmarChicaInicial() {
    if (!quintChicaSeleccionadaInicial) return;

    // Eliminar overlay
    const overlay = document.getElementById("quint-chica-overlay");
    if (overlay) overlay.remove();

    // Establecer chica inicial
    quintChicasActivas = new Set([quintChicaSeleccionadaInicial]);

    quintBienvenidaConChica(quintChicaSeleccionadaInicial);
    quintActualizarBadges();

    setTimeout(() => {
        const inp = document.getElementById("quint-input");
        if (inp) inp.focus();
    }, 100);
}

// ============================================================
//  BIENVENIDA PERSONALIZADA SEGÚN CHICA SELECCIONADA
//  Reemplaza a quintBienvenida() original
// ============================================================

const BIENVENIDAS = {
    Ichika: (nombre) =>
        `*te observa desde el otro lado del cuarto con una sonrisa suave* Ah, ${nombre}... *se acerca lentamente* Llegaste. *inclina la cabeza ligeramente* ¿Qué planes tienes para hoy?`,
    Nino: (nombre) =>
        `*cruza los brazos y desvía la mirada* H-hm. ${nombre}. *resopla* Ya era hora. *te lanza una mirada de lado* ¿Qué quieres? Y no esperes que te lo ponga fácil.`,
    Miku: (nombre) =>
        `*levanta la vista de su libro lentamente* ...${nombre}. *cierra el libro con suavidad* Hola. *pausa breve* Me alegra que hayas venido.`,
    Yotsuba: (nombre) =>
        `¡¡${nombre}!! *salta hacia ti y te agarra del brazo* ¡Ya llegaste! *gira emocionada* ¿Qué hacemos hoy?! ¡Dime, dime, dime!`,
    Itsuki: (nombre) =>
        `*levanta la vista con expresión seria* Ah, ${nombre}. *baja el lápiz* Justo llegabas. *leve pausa* ¿Tenías algo en mente? Habla, que escucho.`,
    Reze: (nombre) =>
        `*te mira fijamente con una sonrisa enigmática* ${nombre}... *se acerca sin prisa* Te estaba esperando. ¿Empezamos?`,
};

function quintBienvenidaConChica(nombreChica) {
    const nombre = quintNombreUsuario;
    const chica  = CHICAS[nombreChica];
    const fn     = BIENVENIDAS[nombreChica];
    const bienvenidaTexto = fn ? fn(nombre) : `*sonríe* Hola, ${nombre}. ¿Cómo estás?`;

    const imagenKeys = Object.keys(chica.imagenes);
    const imagenTag  = imagenKeys.find(k => k.toLowerCase().includes("hablando")) || imagenKeys[0] || "Hablando";

    quintAgregarSistema(`[ Quintillizas Nakano — Empieza con ${nombreChica} ]`);
    quintAgregarSistema("[ Menciona a las demás hermanas para que aparezcan ]");
    quintAgregarChica(nombreChica, imagenTag, bienvenidaTexto);

    quintHistorial.push({
        role: "user",
        content: `(El nombre del usuario es ${nombre}. Las chicas deben llamarlo por su nombre. La chica que está presente ahora es ${nombreChica}.)`
    });
    quintHistorial.push({
        role: "assistant",
        content: JSON.stringify({
            chicasQueHablan: [{ nombre: nombreChica, imagen_tag: imagenTag, dialogo: bienvenidaTexto }],
            nuevasChicasQueAparecen: []
        })
    });

    quintLogExport.push(`[ Quintillizas Nakano — inicio con ${nombreChica} ]`);
}

// ============================================================
//  NUEVA VERSIÓN DE cargarPaginaQuintillizas
//  Integra selector de chica + botones de memoria
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
                    <button class="quint-btn-top quint-btn-memory" onclick="memoryOpenPanel()">♡ Memorias</button>
                    <button class="quint-btn-top quint-btn-memory" onclick="memoryOpenSaveMenu()">💾 Guardar</button>
                    <button class="quint-btn-top" onclick="quintImportar()">📂 Importar</button>
                    <button class="quint-btn-top" onclick="quintExportar()">💾 Exportar</button>
                    <button class="quint-btn-top" onclick="quintBorrarUltimo()">↩ Borrar</button>
                    <button class="quint-btn-top quint-btn-danger" onclick="quintLimpiar()">🗑 Limpiar</button>
                </div>
            </div>

            <!-- MENSAJES -->
            <div id="quint-chat-mensajes"></div>

            <!-- AYUDA -->
            <div id="quint-ayuda">
                💡 Las hermanas aparecen cuando las mencionas. ♡ Memorias guarda slots de conversación con imágenes.
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
            /* ---- APP BASE (igual que antes, resumida) ---- */
            #quint-app {
                display:flex; flex-direction:column;
                height:calc(100vh - 80px); max-width:860px; margin:0 auto;
                background:#0a0f18; border-radius:16px; overflow:hidden;
                box-shadow:0 0 40px rgba(90,120,200,0.1);
                border:1px solid #1f2d45; font-family:'Georgia',serif;
                position: relative;
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
                font-size:20px; color:#c0d0ff; flex-shrink:0;
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
            .quint-chica-burbuja { border:1px solid; align-self:flex-start; border-bottom-left-radius:4px; }
            .quint-usuario {
                background:linear-gradient(135deg,#1a2a4a,#1c3060);
                border:1px solid #2a4080; align-self:flex-end;
                border-bottom-right-radius:4px; color:#c0d8ff;
            }
            .quint-sistema { text-align:center; color:#3a5a90; font-size:11px; font-style:italic; font-family:Arial,sans-serif; }
            .quint-nombre-chica { font-weight:bold; font-size:12px; font-family:Georgia,serif; }
            .quint-nombre-usuario { color:#7aaeff; font-weight:bold; font-size:12px; }
            .quint-texto { color:#e8e8f0; }
            .quint-accion { font-style:italic; }
            .quint-img-wrapper { margin-top:10px; border-radius:10px; overflow:hidden; max-width:320px; border:1px solid rgba(255,255,255,0.08); }
            .quint-img { width:100%; display:block; }
            .quint-typing {
                background:#0d1526; border:1px solid #1f2d45;
                border-radius:16px; border-bottom-left-radius:4px;
                padding:10px 14px; align-self:flex-start; max-width:160px;
                animation:quintFadeIn 0.2s ease;
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
            #quint-input:focus { border-color:#3a5a90; }
            #quint-input::placeholder { color:#3a5a90; }
            #quint-btn-enviar {
                background:linear-gradient(135deg,#1f3a70,#3a6adf);
                color:#c0d8ff; border:none; padding:9px 18px;
                border-radius:10px; cursor:pointer;
                font-family:'Georgia',serif; font-size:14px; font-weight:bold;
                transition:all 0.2s; white-space:nowrap; align-self:flex-end;
            }
            #quint-btn-enviar:hover { transform:scale(1.04); }
            #quint-btn-enviar:disabled { opacity:0.5; cursor:not-allowed; transform:none; }
            @media(max-width:600px) {
                #quint-app { height:calc(100vh - 60px); border-radius:0; }
                .quint-burbuja { max-width:92%; }
                #quint-header-btns { display:none; }
                .quint-img-wrapper { max-width:100%; }
            }
        </style>
    `;

    // Inicializar estado
    quintHistorial     = [];
    quintLogExport     = [];
    quintChicasActivas = new Set();
    quintChicaSeleccionadaInicial = null;

    // Inyectar estilos del sistema de memorias
    memoryInjectStyles();

    // Mostrar pantalla de nombre → luego selector de chica
    quintPedirNombre();
}

// ============================================================
//  SOBRESCRIBIR quintConfirmarNombre para ir al selector de chica
//  en lugar de ir directo a la bienvenida
// ============================================================

function quintConfirmarNombre() {
    const inp = document.getElementById("quint-nombre-input");
    const nombre = inp ? inp.value.trim() : "";
    quintNombreUsuario = nombre || "Tú";

    const overlay = document.getElementById("quint-nombre-overlay");
    if (overlay) overlay.remove();

    // Ir al selector de chica
    quintMostrarSelectorChica();
}

// ============================================================
//  SOBRESCRIBIR quintLimpiar para reiniciar con selector
// ============================================================

function quintLimpiar() {
    if (!confirm("¿Limpiar toda la conversación?")) return;
    quintHistorial     = [];
    quintLogExport     = [];
    quintChicasActivas = new Set();
    document.getElementById("quint-chat-mensajes").innerHTML = "";
    quintActualizarBadges();
    quintMostrarSelectorChica();
}
