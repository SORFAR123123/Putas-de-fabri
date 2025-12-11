// ================================================
// BASE DE DATOS DE VOCABULARIO
// ================================================

const vocabularioDatabase = {
    // ================================================
    // CONTENEDOR 1
    // ================================================
    
    // Sub-contenedor 1.1
    'sub1_1': {
        // Mazo 1
        1: [
            { japones: '今朝', lectura: 'kesa', opciones: ['Esta mañana', 'Esta tarde', 'Anoche', 'Ayer'], respuesta: 0 },
            { japones: '処', lectura: 'tokoro', opciones: ['Lugar', 'Tiempo', 'Persona', 'Cosa'], respuesta: 0 },
            { japones: '出掛け', lectura: 'dekake', opciones: ['Salir', 'Entrar', 'Quedarse', 'Volver'], respuesta: 0 },
            { japones: '女将', lectura: 'okami', opciones: ['Dueña', 'Mesera', 'Cliente', 'Cocinera'], respuesta: 0 },
            { japones: '寂しい', lectura: 'sabishii', opciones: ['Solitario', 'Alegre', 'Ocupado', 'Ruidoso'], respuesta: 0 },
            { japones: '憩い', lectura: 'ikoi', opciones: ['Descanso', 'Trabajo', 'Ejercicio', 'Estudio'], respuesta: 0 },
            { japones: '手伝い', lectura: 'tetsudai', opciones: ['Ayuda', 'Obstáculo', 'Problema', 'Solución'], respuesta: 0 },
            { japones: '撮る', lectura: 'toru', opciones: ['Tomar foto', 'Escribir', 'Leer', 'Escuchar'], respuesta: 0 },
            { japones: '見送る', lectura: 'miokuru', opciones: ['Despedir', 'Recibir', 'Ignorar', 'Saludar'], respuesta: 0 },
            { japones: '限る', lectura: 'kagiru', opciones: ['Limitar', 'Ampliar', 'Permitir', 'Prohibir'], respuesta: 0 }
        ],
        // Mazo 2
        2: [
            { japones: '吐息', lectura: 'toiki', opciones: ['Suspiro', 'Risa', 'Grito', 'Llanto'], respuesta: 0 },
            { japones: '応援', lectura: 'ouen', opciones: ['Apoyo', 'Crítica', 'Indiferencia', 'Oposición'], respuesta: 0 },
            { japones: '文句', lectura: 'monku', opciones: ['Queja', 'Elogio', 'Sugerencia', 'Pregunta'], respuesta: 0 },
            { japones: '構う', lectura: 'kamau', opciones: ['Preocuparse', 'Ignorar', 'Aceptar', 'Rechazar'], respuesta: 0 },
            { japones: '残り香', lectura: 'nokorika', opciones: ['Aroma residual', 'Sonido', 'Imagen', 'Sabor'], respuesta: 0 },
            { japones: '減る', lectura: 'heru', opciones: ['Disminuir', 'Aumentar', 'Mantener', 'Cambiar'], respuesta: 0 },
            { japones: '誰彼', lectura: 'dareka', opciones: ['Alguien', 'Nadie', 'Todos', 'Algo'], respuesta: 0 },
            { japones: '過激', lectura: 'kageki', opciones: ['Extremo', 'Moderado', 'Suave', 'Normal'], respuesta: 0 },
            { japones: '開き直る', lectura: 'hirakinarou', opciones: ['Cambiar de actitud', 'Mantenerse', 'Rendirse', 'Avanzar'], respuesta: 0 },
            { japones: '関係ない', lectura: 'kankeinai', opciones: ['No relacionado', 'Importante', 'Relevante', 'Conectado'], respuesta: 0 }
        ],
        // Mazos 3-10 (puedes completarlos después)
        3: [
            { japones: '学生', lectura: 'gakusei', opciones: ['Estudiante', 'Profesor', 'Doctor', 'Ingeniero'], respuesta: 0 },
            { japones: '学校', lectura: 'gakkou', opciones: ['Escuela', 'Casa', 'Oficina', 'Parque'], respuesta: 0 },
            { japones: '先生', lectura: 'sensei', opciones: ['Profesor', 'Estudiante', 'Padre', 'Amigo'], respuesta: 0 },
            { japones: '友達', lectura: 'tomodachi', opciones: ['Amigo', 'Enemigo', 'Extraño', 'Vecino'], respuesta: 0 },
            { japones: '家族', lectura: 'kazoku', opciones: ['Familia', 'Solo', 'Compañía', 'Grupo'], respuesta: 0 }
        ],
        // ... más mazos
    },

    // Sub-contenedor 1.2
    'sub1_2': {
        1: [
            { japones: '食べる', lectura: 'taberu', opciones: ['Comer', 'Beber', 'Dormir', 'Correr'], respuesta: 0 },
            { japones: '飲む', lectura: 'nomu', opciones: ['Beber', 'Comer', 'Hablar', 'Escuchar'], respuesta: 0 },
            { japones: '行く', lectura: 'iku', opciones: ['Ir', 'Venir', 'Quedar', 'Volver'], respuesta: 0 },
            { japones: '来る', lectura: 'kuru', opciones: ['Venir', 'Ir', 'Estar', 'Ser'], respuesta: 0 },
            { japones: '見る', lectura: 'miru', opciones: ['Ver', 'Oír', 'Sentir', 'Tocar'], respuesta: 0 }
        ]
    },

    // Sub-contenedores 1.3, 1.4, 1.5 (estructura similar)
    
    // ================================================
    // CONTENEDOR 2 (y así sucesivamente hasta 10)
    // ================================================
    'sub2_1': {
        1: [
            { japones: '元気', lectura: 'genki', opciones: ['Salud', 'Dinero', 'Amor', 'Suerte'], respuesta: 0 },
            { japones: '病気', lectura: 'byouki', opciones: ['Enfermedad', 'Salud', 'Fuerza', 'Debilidad'], respuesta: 0 }
        ]
    }
    // ... puedes agregar más contenedores y subcontenedores
};

// Función para obtener vocabulario
function obtenerVocabulario(contenedor, subcontenedor, mazo) {
    const key = `sub${contenedor}_${subcontenedor}`;
    if (vocabularioDatabase[key] && vocabularioDatabase[key][mazo]) {
        return vocabularioDatabase[key][mazo];
    }
    return []; // Retorna array vacío si no existe
}
