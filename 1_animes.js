// ================================================
// BASE DE DATOS DE ANIMES CON VIDEOS ESPAÑOL/JAPONÉS
// ================================================

const animesDatabase = {
    // ================================================
    // CONTENEDOR 1
    // ================================================
    
    // Sub-contenedor 1.1
    '1_1': {
        titulo: "🎌 Shingeki no Kyojin (Ataque a los Titanes)",
        driveIdEsp: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        driveIdJap: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        descripcion: "Primer episodio doblado al español y japonés original con subtítulos.",
        timestampsEsp: [
            { tiempo: 0, titulo: "📖 Introducción" },
            { tiempo: 120, titulo: "🗡️ Presentación de Eren" },
            { tiempo: 240, titulo: "🧱 Aparece el Titán Colosal" },
            { tiempo: 360, titulo: "🏃‍♂️ Escape desesperado" },
            { tiempo: 480, titulo: "😢 Escena emocional" }
        ],
        timestampsJap: [
            { tiempo: 0, titulo: "📖 イントロダクション" },
            { tiempo: 120, titulo: "🗡️ エレンの紹介" },
            { tiempo: 240, titulo: "🧱 超大型巨人登場" },
            { tiempo: 360, titulo: "🏃‍♂️ 必死の脱出" },
            { tiempo: 480, titulo: "😢 感動的なシーン" }
        ],
        duracion: "24:30",
        categoria: "Acción",
        año: 2013
    },
    
    // Sub-contenedor 1.2
    '1_2': {
        titulo: "🍡 Kimetsu no Yaiba (Guardianes de la Noche)",
        driveIdEsp: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        driveIdJap: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        descripcion: "Episodio 1: Tanjiro encuentra a su familia atacada por demonios.",
        timestampsEsp: [
            { tiempo: 0, titulo: "🏔️ Vida en las montañas" },
            { tiempo: 180, titulo: "😭 Tragedia familiar" },
            { tiempo: 360, titulo: "👹 Encuentro con Nezuko" },
            { tiempo: 540, titulo: "🗡️ Conoce a Giyu" },
            { tiempo: 720, titulo: "🎯 Decisión de entrenar" }
        ],
        timestampsJap: [
            { tiempo: 0, titulo: "🏔️ 山での生活" },
            { tiempo: 180, titulo: "😭 家族の悲劇" },
            { tiempo: 360, titulo: "👹 禰豆子との出会い" },
            { tiempo: 540, titulo: "🗡️ 義勇との出会い" },
            { tiempo: 720, titulo: "🎯 訓練の決意" }
        ],
        duracion: "23:45",
        categoria: "Fantasia",
        año: 2019
    },
    
    // Sub-contenedor 1.3
    '1_3': {
        titulo: "🐉 Dragon Ball Super - Torneo del Poder",
        driveIdEsp: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        driveIdJap: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        descripcion: "Pelea épica entre Goku y Jiren en el Torneo del Poder.",
        timestampsEsp: [
            { tiempo: 0, titulo: "⚡ Inicio de la pelea" },
            { tiempo: 150, titulo: "💥 Transformación Ultra Instinto" },
            { tiempo: 300, titulo: "🔥 Poder máximo de Jiren" },
            { tiempo: 450, titulo: "👊 Combate cuerpo a cuerpo" },
            { tiempo: 600, titulo: "🌟 Final épico" }
        ],
        timestampsJap: [
            { tiempo: 0, titulo: "⚡ 戦いの開始" },
            { tiempo: 150, titulo: "💥 身勝手の極意発動" },
            { tiempo: 300, titulo: "🔥 ジレンの最大パワー" },
            { tiempo: 450, titulo: "👊 接近戦" },
            { tiempo: 600, titulo: "🌟 エピックな終了" }
        ],
        duracion: "21:15",
        categoria: "Acción",
        año: 2017
    },
    
    // ================================================
    // CONTENEDOR 2
    // ================================================
    
    // Sub-contenedor 2.1
    '2_1': {
        titulo: "🎓 Haikyuu!! - Primer Partido",
        driveIdEsp: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        driveIdJap: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        descripcion: "Primer partido oficial del equipo de Karasuno contra Date Tech.",
        timestampsEsp: [
            { tiempo: 0, titulo: "🏐 Calentamiento previo" },
            { tiempo: 120, titulo: "🦅 Salto de Hinata" },
            { tiempo: 240, titulo: "🧱 Bloqueo de Date Tech" },
            { tiempo: 360, titulo: "👑 Kageyama como setter" },
            { tiempo: 480, titulo: "🎯 Remate decisivo" }
        ],
        timestampsJap: [
            { tiempo: 0, titulo: "🏐 試合前のウォーミングアップ" },
            { tiempo: 120, titulo: "🦅 日の出のジャンプ" },
            { tiempo: 240, titulo: "🧱 伊達工業のブロック" },
            { tiempo: 360, titulo: "👑 影山のセッター" },
            { tiempo: 480, titulo: "🎯 決定的なスパイク" }
        ],
        duracion: "22:40",
        categoria: "Deportes",
        año: 2014
    },
    
    // Sub-contenedor 2.2
    '2_2': {
        titulo: "🔍 Death Note - Primer Encuentro",
        driveIdEsp: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        driveIdJap: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con ID real
        descripcion: "Light Yagami encuentra el Death Note y conoce a Ryuk.",
        timestampsEsp: [
            { tiempo: 0, titulo: "📔 Encuentro con el cuaderno" },
            { tiempo: 180, titulo: "👻 Ryuk aparece" },
            { tiempo: 360, titulo: "⚖️ Primera prueba" },
            { tiempo: 540, titulo: "🎯 Decisión de usarlo" },
            { tiempo: 720, titulo: "🕵️ Primer crimen" }
        ],
        timestampsJap: [
            { tiempo: 0, titulo: "📔 ノートとの出会い" },
            { tiempo: 180, titulo: "👻 リューク登場" },
            { tiempo: 360, titulo: "⚖️ 最初のテスト" },
            { tiempo: 540, titulo: "🎯 使用の決意" },
            { tiempo: 720, titulo: "🕵️ 最初の犯罪" }
        ],
        duracion: "23:20",
        categoria: "Misterio",
        año: 2006
    }
};

// ================================================
// FUNCIONES DE ACCESO PARA ANIMES
// ================================================

function obtenerAnime(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return animesDatabase[key] || null;
}

function obtenerTodosAnimes() {
    return animesDatabase;
}

function existeAnime(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return animesDatabase[key] && (animesDatabase[key].driveIdEsp !== "" || animesDatabase[key].driveIdJap !== "");
}

function obtenerContenedoresAnimesDisponibles() {
    const contenedores = {};
    
    Object.keys(animesDatabase).forEach(key => {
        const [contenedor, subcontenedor] = key.split('_');
        if (!contenedores[contenedor]) {
            contenedores[contenedor] = [];
        }
        if (animesDatabase[key].driveIdEsp !== "" || animesDatabase[key].driveIdJap !== "") {
            contenedores[contenedor].push(subcontenedor);
        }
    });
    
    return contenedores;
}

function obtenerTimestampsPorIdioma(anime, idioma) {
    if (idioma === 'japones') {
        return anime.timestampsJap || anime.timestampsEsp || [];
    }
    return anime.timestampsEsp || [];
}

function obtenerDriveIdPorIdioma(anime, idioma) {
    if (idioma === 'japones') {
        return anime.driveIdJap || anime.driveIdEsp;
    }
    return anime.driveIdEsp;
}
