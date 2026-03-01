
// ================================================
// BASE DE DATOS DE AUDIOS ASMR
// ================================================

const asmrDatabase = {
    // ================================================
    // CONTENEDOR 1 - RELAJACIÓN Y MEDITACIÓN
    // ================================================
    
    // Sub-contenedor 1.1
    '1_1': {
        titulo: "Vtuber me la chupa",
        driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        descripcion: "Sesión de meditación guiada con voz suave en japonés para relajación profunda.",
        timestamps: [
            { tiempo: 0, titulo: "🎵 Introducción y preparación" },
            { tiempo: 180, titulo: "🌊 Visualización del océano" },
            { tiempo: 420, titulo: "🌸 Jardín de cerezos" },
            { tiempo: 600, titulo: "💭 Afirmaciones positivas" },
            { tiempo: 780, titulo: "🔄 Regreso a la consciencia" }
        ],
        duracion: "15:30",
        categoria: "Meditación",
        tipoVoz: "Femenina suave",
        tags: ["relajación", "meditación", "japonés lento"]
    },
    
    // Sub-contenedor 1.2
    '1_2': {
        titulo: "📚 Lectura ASMR de Cuento Japonés",
        driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        descripcion: "Lectura suave de un cuento tradicional japonés con efectos de sonido ambientales.",
        timestamps: [
            { tiempo: 0, titulo: "📖 Introducción del cuento" },
            { tiempo: 120, titulo: "🏯 Escena: El viejo templo" },
            { tiempo: 300, titulo: "👻 Aparición del espíritu" },
            { tiempo: 540, titulo: "🍃 Resolución y enseñanza" },
            { tiempo: 720, titulo: "🎌 Moraleja final" }
        ],
        duracion: "12:45",
        categoria: "Storytelling",
        tipoVoz: "Masculina calmada",
        tags: ["cuento", "tradicional", "susurros"]
    },
    
    // Sub-contenedor 1.3
    '1_3': {
        titulo: "💤 Sonidos de Naturaleza Japonesa",
        driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        descripcion: "Mezcla de sonidos naturales de Japón con murmullos en japonés de fondo.",
        timestamps: [
            { tiempo: 0, titulo: "🌧️ Lluvia en Kioto" },
            { tiempo: 240, titulo: "🍃 Viento en bosque de bambú" },
            { tiempo: 480, titulo: "🏞️ Río de montaña" },
            { tiempo: 720, titulo: "🐦 Cantos de pájaros" }
        ],
        duracion: "18:20",
        categoria: "Naturaleza",
        tipoVoz: "Varios",
        tags: ["naturaleza", "ambiental", "relajante"]
    },
    
    // ================================================
    // CONTENEDOR 2 - APRENDIZAJE Y ESTUDIO
    // ================================================
    
    // Sub-contenedor 2.1
    '2_1': {
        titulo: "🎌 Repetición de Vocabulario N5 (ASMR)",
        driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        descripcion: "Repetición suave de palabras esenciales del nivel N5 con pausas para practicar.",
        timestamps: [
            { tiempo: 0, titulo: "👋 Saludos básicos" },
            { tiempo: 180, titulo: "🏠 Vocabulario del hogar" },
            { tiempo: 360, titulo: "🍎 Comida y bebida" },
            { tiempo: 540, titulo: "🚇 Transporte y lugares" },
            { tiempo: 720, titulo: "📅 Días y tiempo" }
        ],
        duracion: "15:00",
        categoria: "Aprendizaje",
        tipoVoz: "Femenina clara",
        tags: ["vocabulario", "repetición", "N5"]
    },
    
    // Sub-contenedor 2.2
    '2_2': {
        titulo: "✨ Afirmaciones en Japonés para la Autoestima",
        driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        descripcion: "Afirmaciones positivas susurradas en japonés para mejorar confianza y motivación.",
        timestamps: [
            { tiempo: 0, titulo: "💪 Soy capaz" },
            { tiempo: 150, titulo: "🌟 Merezco éxito" },
            { tiempo: 300, titulo: "🌸 Soy tranquilo/a" },
            { tiempo: 450, titulo: "📚 Aprendo con facilidad" },
            { tiempo: 600, titulo: "🎌 Hablo japonés fluidamente" }
        ],
        duracion: "10:30",
        categoria: "Motivación",
        tipoVoz: "Femenina susurrante",
        tags: ["afirmaciones", "motivación", "autoestima"]
    },
    
    // Sub-contenedor 2.3
    '2_3': {
        titulo: "🎧 Pronunciación Perfecta de Hiragana",
        driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        descripcion: "Guía ASMR para perfeccionar la pronunciación de cada carácter hiragana.",
        timestamps: [
            { tiempo: 0, titulo: "🅰️ Vocales (あいうえお)" },
            { tiempo: 200, titulo: "🎌 K-line (かきくけこ)" },
            { tiempo: 400, titulo: "💬 S-line (さしすせそ)" },
            { tiempo: 600, titulo: "📝 T-line (たちつてと)" }
        ],
        duracion: "14:15",
        categoria: "Pronunciación",
        tipoVoz: "Masculina precisa",
        tags: ["hiragana", "pronunciación", "básico"]
    },
    
    // ================================================
    // CONTENEDOR 3 - SONIDOS ESPECIALIZADOS
    // ================================================
    
    // Sub-contenedor 3.1
    '3_1': {
        titulo: "Vecina milf putonas",
        driveId: "1CwgH1vKEysecFK8EvfRo4Ra4D-cjpKy5",
        descripcion: "Sonidos de la ceremonia del té japonesa con explicaciones susurradas.",
        timestamps: [
            { tiempo: 0, titulo: "🏯 Preparación del espacio" },
            { tiempo: 180, titulo: "💧 Calentamiento del agua" },
            { tiempo: 360, titulo: "🍃 Mezcla del matcha" },
            { tiempo: 540, titulo: "🎌 Servicio tradicional" },
            { tiempo: 720, titulo: "🌸 Degustación y apreciación" }
        ],
        duracion: "13:45",
        categoria: "Cultural",
        tipoVoz: "Femenina ceremonial",
        tags: ["ceremonia del té", "tradicional", "ritual"]
    },
    
    // Sub-contenedor 3.2
    '3_2': {
        titulo: " AMIGA DE TU MAMÁ SOBRE ti",
        driveId: "bc1q94ngmz9mu3zadhvgran4eeakfhraqlpaa3ndcw",
        descripcion: "Sonidos relajantes de bambú y campanas de templo con mantras en japonés.",
        timestamps: [
            { tiempo: 0, titulo: "🎋 Bambú meciéndose" },
            { tiempo: 240, titulo: "🔔 Campanas de templo" },
            { tiempo: 480, titulo: "🙏 Mantras susurrados" },
            { tiempo: 720, titulo: "🌌 Combinación armónica" }
        ],
        duracion: "16:30",
        categoria: "Instrumental",
        tipoVoz: "Varios",
        tags: ["instrumental", "meditación", "templo"]
    },
    
    // Sub-contenedor 3.3
    '3_3': {
        titulo: "Mama mafioso de amiga",
        driveId: "1ktLE0jO4o4fCptC-CnWwrgixqihrhyz2",
        descripcion: "Lectura suave de haikus clásicos japoneses con explicaciones poéticas.",
        timestamps: [
            { tiempo: 0, titulo: "🌸 Haiku de primavera" },
            { tiempo: 120, titulo: "☀️ Haiku de verano" },
            { tiempo: 240, titulo: "🍁 Haiku de otoño" },
            { tiempo: 360, titulo: "❄️ Haiku de invierno" },
            { tiempo: 480, titulo: "🌙 Haiku de luna" }
        ],
        duracion: "11:20",
        categoria: "Poesía",
        tipoVoz: "Masculina poética",
        tags: ["haiku", "poesía", "clásico"]
    },
      '3_4': {
        titulo: " Mamá De Tu Ex Te Pide Que Regreses Con Mamada",
        driveId: "1suOD_rxLVYmcSwn-wXQb3H3qdyqqHW5m",
        descripcion: "Lectura suave de haikus clásicos japoneses con explicaciones poéticas.",
        timestamps: [
            { tiempo: 0, titulo: "🌸 Haiku de primavera" },
            { tiempo: 120, titulo: "☀️ Haiku de verano" },
            { tiempo: 240, titulo: "🍁 Haiku de otoño" },
            { tiempo: 360, titulo: "❄️ Haiku de invierno" },
            { tiempo: 480, titulo: "🌙 Haiku de luna" }
        ],
        duracion: "11:20",
        categoria: "Poesía",
        tipoVoz: "Masculina poética",
        tags: ["haiku", "poesía", "clásico"]
    },
      '3_5': {
        titulo: "TÍA DE TU AMIGO QUIERE SER TU MAMI❤️_🔥💋",
        driveId: "1TlZBcXlWQDyeg8_dzIKqVljbVPCq0VrY",
        descripcion: "Lectura suave de haikus clásicos japoneses con explicaciones poéticas.",
        timestamps: [
            { tiempo: 0, titulo: "🌸 Haiku de primavera" },
            { tiempo: 120, titulo: "☀️ Haiku de verano" },
            { tiempo: 240, titulo: "🍁 Haiku de otoño" },
            { tiempo: 360, titulo: "❄️ Haiku de invierno" },
            { tiempo: 480, titulo: "🌙 Haiku de luna" }
        ],
        duracion: "11:20",
        categoria: "Poesía",
        tipoVoz: "Masculina poética",
        tags: ["haiku", "poesía", "clásico"]
    },
      '3_6': {
        titulo: "Mamá de tu amigo siempre quiso MAM4RTELA",
        driveId: "1sewpSfY3X7TgOb3j3VS5vpVOHPXs09fy",
        descripcion: "Lectura suave de haikus clásicos japoneses con explicaciones poéticas.",
        timestamps: [
            { tiempo: 0, titulo: "🌸 Haiku de primavera" },
            { tiempo: 120, titulo: "☀️ Haiku de verano" },
            { tiempo: 240, titulo: "🍁 Haiku de otoño" },
            { tiempo: 360, titulo: "❄️ Haiku de invierno" },
            { tiempo: 480, titulo: "🌙 Haiku de luna" }
        ],
        duracion: "11:20",
        categoria: "Poesía",
        tipoVoz: "Masculina poética",
        tags: ["haiku", "poesía", "clásico"]
    },
    
    // ================================================
    // CONTENEDOR 4 - PARA DORMIR
    // ================================================
    
    // Sub-contenedor 4.1
    '4_1': {
        titulo: "💤 Cuento para Dormir en Japonés",
        driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        descripcion: "Historia suave con ritmo lento diseñada para ayudar a conciliar el sueño.",
        timestamps: [
            { tiempo: 0, titulo: "🌙 Comienzo del viaje" },
            { tiempo: 300, titulo: "🏔️ Valle de los sueños" },
            { tiempo: 600, titulo: "✨ Encuentro mágico" },
            { tiempo: 900, titulo: "🛌 Preparación para dormir" }
        ],
        duracion: "25:00",
        categoria: "Sueño",
        tipoVoz: "Femenina soporífera",
        tags: ["dormir", "cuento", "relajación profunda"]
    },
    
    // Sub-contenedor 4.2
    '4_2': {
        titulo: "🎶 Música de Koto para el Descanso",
        driveId: "1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl",
        descripcion: "Melodías tradicionales de koto con lluvia suave de fondo.",
        timestamps: [
            { tiempo: 0, titulo: "🎵 Tema principal" },
            { tiempo: 600, titulo: "🌧️ Variación con lluvia" },
            { tiempo: 1200, titulo: "🍃 Melodía de bosque" },
            { tiempo: 1800, titulo: "🌊 Final con olas" }
        ],
        duracion: "30:00",
        categoria: "Música",
        tipoVoz: "Instrumental",
        tags: ["koto", "música tradicional", "instrumental"]
    }
};

// ================================================
// FUNCIONES DE ACCESO
// ================================================

function obtenerASMR(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return asmrDatabase[key] || null;
}

function obtenerTodosASMR() {
    return asmrDatabase;
}

function existeASMR(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return asmrDatabase[key] && asmrDatabase[key].driveId !== "";
}

function obtenerContenedoresASMRDisponibles() {
    const contenedores = {};
    
    Object.keys(asmrDatabase).forEach(key => {
        const [contenedor, subcontenedor] = key.split('_');
        if (!contenedores[contenedor]) {
            contenedores[contenedor] = [];
        }
        if (asmrDatabase[key].driveId !== "") {
            contenedores[contenedor].push(subcontenedor);
        }
    });
    
    return contenedores;
}

// ================================================
// FUNCIONES ESPECÍFICAS PARA ASMR
// ================================================

function obtenerASMRPorCategoria(categoria) {
    return Object.keys(asmrDatabase)
        .filter(key => asmrDatabase[key].categoria === categoria)
        .map(key => asmrDatabase[key]);
}

function obtenerASMRPorTag(tag) {
    return Object.keys(asmrDatabase)
        .filter(key => asmrDatabase[key].tags && asmrDatabase[key].tags.includes(tag))
        .map(key => asmrDatabase[key]);
}

function obtenerDuracionTotalASMR() {
    let totalSegundos = 0;
    
    Object.keys(asmrDatabase).forEach(key => {
        const duracion = asmrDatabase[key].duracion;
        if (duracion && duracion !== "0:00") {
            const [minutos, segundos] = duracion.split(':').map(Number);
            totalSegundos += minutos * 60 + segundos;
        }
    });
    
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    
    return `${horas}h ${minutos}m`;
}

// ================================================
// CATEGORÍAS DISPONIBLES PARA FILTRO
// ================================================

function obtenerCategoriasASMR() {
    const categorias = new Set();
    
    Object.keys(asmrDatabase).forEach(key => {
        if (asmrDatabase[key].categoria) {
            categorias.add(asmrDatabase[key].categoria);
        }
    });
    
    return Array.from(categorias);
}

// ================================================
// ESTADÍSTICAS DEL CONTENIDO ASMR
// ================================================

function obtenerEstadisticasASMR() {
    const totalAudios = Object.keys(asmrDatabase).length;
    const audiosConContenido = Object.keys(asmrDatabase)
        .filter(key => asmrDatabase[key].driveId !== "").length;
    
    const categorias = obtenerCategoriasASMR();
    
    return {
        totalAudios,
        audiosConContenido,
        porcentajeCompletado: Math.round((audiosConContenido / totalAudios) * 100),
        categorias: categorias.length,
        duracionTotal: obtenerDuracionTotalASMR()
    };
}

console.log("✅ Base de datos ASMP cargada:");
console.log("📊 " + Object.keys(asmrDatabase).length + " audios disponibles");
console.log("🎧 Duración total: " + obtenerDuracionTotalASMR());
console.log("🏷️ Categorías: " + obtenerCategoriasASMR().join(", "));

