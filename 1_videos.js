// ================================================
// BASE DE DATOS DE VIDEOS DRIVE
// ================================================

const videosDatabase = {
    // ================================================
    // CONTENEDOR 1
    // ================================================
    
    // Sub-contenedor 1.1
    '1_1': {
        titulo: "🎌Nino petera de mierda",
        driveId: "11hBAFRHLV6hnaVLYZEuZPISvL-TvsJZO", // REEMPLAZA con tu ID real de Drive
        descripcion: "Algun dia me cogere un culo de una cosplayer de nino",
        timestamps: [
            { tiempo: 2760, titulo: "Nino me chupa los pezones " },
            { tiempo: 2940, titulo: "Nino me saca la verga de mi short" },
            { tiempo: 3165, titulo: "Nino me la chupa enojada porque le di duro" },
            { tiempo: 3338 , titulo: "Nino me chupa las pelotas" },
            { tiempo: 6115, titulo: "Me corro en la cara de mi zorra" },
              { tiempo:  2700 , titulo: "La beso mientras le meto los dedos" },
              { tiempo:  4500  , titulo: "Le saco la tanga a mi perra" },
              { tiempo:      2510   , titulo: "Un juguete la satisface mas que yo" },
                { tiempo:      2580    , titulo: "La beso y se corre" },
        
             
            { tiempo:  853, titulo: "Nino esta timida y la beso con la lengua para quitarla la timidez" },
               { tiempo:  996, titulo: "Nino se suelta y me besa con lengua esa perra" },
               { tiempo:  775 , titulo: "Nos chapamos" },
            { tiempo: 5030 , titulo: "Me corro dentro de mi puta y me limpia en un cleaning blowjob" }
        ],
        duracion: "8:45",
        categoria: "Básico"
    },
    
    // Sub-contenedor 1.2
    '1_2': {
        titulo: "✍️  Yotsuba petera que rico petea yotsuba",
        driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con tu ID real de Drive
        descripcion: "Tutorial completo del sistema Hiragana con ejercicios de escritura.",
        timestamps: [
            { tiempo: 0, titulo: "📖 Introducción a Hiragana" },
            { tiempo: 120, titulo: "🅰️ Vocales (a, i, u, e, o)" },
            { tiempo: 240, titulo: "🎌 Consonantes K-line" },
            { tiempo: 360, titulo: "✍️ Técnicas de escritura" },
            { tiempo: 480, titulo: "📝 Ejercicios prácticos" }
        ],
        duracion: "12:30",
        categoria: "Escritura"
    },
    
    // Sub-contenedor 1.3
    '1_3': {
        titulo: "🗣️ Miku culona nocaCos",
        driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con tu ID real de Drive
        descripcion: "Diálogos prácticos para nivel N5 del JLPT. Situaciones cotidianas.",
        timestamps: [
            { tiempo: 0, titulo: "🏪 En la tienda" },
            { tiempo: 150, titulo: "🍽️ En el restaurante" },
            { tiempo: 300, titulo: "🚉 Preguntando direcciones" },
            { tiempo: 450, titulo: "📞 Hablando por teléfono" }
        ],
        duracion: "10:15",
        categoria: "Conversación"
    },
    
    // ================================================
    // CONTENEDOR 2
    // ================================================
    
    // Sub-contenedor 2.1
    '2_1': {
        titulo: "🎌 Cultura Japonesa",
        driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con tu ID real de Drive
        descripcion: "Introducción a las costumbres, etiqueta y cultura japonesa.",
        timestamps: [
            { tiempo: 0, titulo: "🎎 Introducción cultural" },
            { tiempo: 120, titulo: "🙇 Etiqueta y reverencias" },
            { tiempo: 240, titulo: "🍜 Modales en la mesa" },
            { tiempo: 360, titulo: "🏯 Festivales tradicionales" }
        ],
        duracion: "15:20",
        categoria: "Cultura"
    },
    
    // Sub-contenedor 2.2
    '2_2': {
        titulo: "📚 Gramática N5-N4",
        driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // REEMPLAZA con tu ID real de Drive
        descripcion: "Explicación detallada de estructuras gramaticales esenciales.",
        timestamps: [
            { tiempo: 0, titulo: "📝 Partículas (wa, ga, o)" },
            { tiempo: 180, titulo: "⏰ Tiempos verbales" },
            { tiempo: 360, titulo: "💬 Formas negativas" },
            { tiempo: 540, titulo: "❓ Preguntas y respuestas" }
        ],
        duracion: "18:45",
        categoria: "Gramática"
    },
    
    // ================================================
    // CONTENEDOR 3 (EJEMPLO VACÍO)
    // ================================================
    
    // Sub-contenedor 3.1
    '3_1': {
        titulo: "Orto de belinda",
        driveId: "1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS", // DEJA VACÍO si no tienes video
        descripcion: "Belinda te amo",
        timestamps: [],
        duracion: "0:00",
        categoria: "Música"
    }
};

// ================================================
// FUNCIONES DE ACCESO
// ================================================

function obtenerVideo(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return videosDatabase[key] || null;
}

function obtenerTodosVideos() {
    return videosDatabase;
}

function existeVideo(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return videosDatabase[key] && videosDatabase[key].driveId !== "";
}

function obtenerContenedoresDisponibles() {
    const contenedores = {};
    
    Object.keys(videosDatabase).forEach(key => {
        const [contenedor, subcontenedor] = key.split('_');
        if (!contenedores[contenedor]) {
            contenedores[contenedor] = [];
        }
        if (videosDatabase[key].driveId !== "") {
            contenedores[contenedor].push(subcontenedor);
        }
    });
    
    return contenedores;
}
