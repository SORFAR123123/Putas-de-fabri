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
            { japones: '今はちょうど', lectura: 'ima wa choudo', opciones: ['Justo ahora', 'Ya terminó', 'Hace mucho', 'Más tarde'], respuesta: 0 },
        { japones: '芸能', lectura: 'geinou', opciones: ['Entretenimiento', 'Deporte', 'Política', 'Academia'], respuesta: 0 },
        { japones: '活動', lectura: 'katsudou', opciones: ['Actividad', 'Descanso', 'Pausa', 'Inactividad'], respuesta: 0 },
        { japones: '時期', lectura: 'jikan', opciones: ['Período/Época', 'Lugar', 'Persona', 'Razón'], respuesta: 0 },
        { japones: 'せっかく 来れたのに', lectura: 'sekkaku korareta noni', opciones: ['Aunque vine con dificultad...', 'Porque fue fácil venir', 'Ya que no pude venir', 'Como no tenía planes'], respuesta: 0 },
        { japones: '水の泡', lectura: 'mizu no awa', opciones: ['En vano/Agua pasada', 'Gran éxito', 'Sorpresa', 'Ceremonia'], respuesta: 0 },
        { japones: 'そうなったら', lectura: 'sou nattara', opciones: ['Si eso sucede', 'Antes de que suceda', 'Aunque no suceda', 'Porque sucedió'], respuesta: 0 },
        { japones: 'すればいい', lectura: 'sureba ii', opciones: ['Deberías hacer (sugerencia)', 'No deberías hacer', 'Es imposible hacer', 'Es obligatorio hacer'], respuesta: 0 },
        { japones: '未来の明るい', lectura: 'mirai no akarui', opciones: ['Con un futuro brillante', 'Con un futuro oscuro', 'Sin futuro', 'Con un futuro incierto'], respuesta: 0 },
        { japones: '元女優が', lectura: 'moto joyuu ga', opciones: ['Una ex actriz', 'Una actriz principiante', 'Una actriz famosa', 'Una directora'], respuesta: 0 }
        ],
        // Mazo 2
        2: [
             { japones: '引退になって', lectura: 'intai ni natte', opciones: ['Haberse retirado', 'Haberse unido', 'Haberse graduado', 'Haberse mudado'], respuesta: 0 },
        { japones: 'しまいに', lectura: 'shimai ni', opciones: ['Al final/ Finalmente', 'Al principio', 'De repente', 'Raramente'], respuesta: 0 },
        { japones: '業界', lectura: 'gyoukai', opciones: ['Industria/Rubio', 'País', 'Escuela', 'Familia'], respuesta: 0 },
        { japones: '華麗', lectura: 'karei', opciones: ['Elegante/Espléndido', 'Simple', 'Ordinario', 'Feo'], respuesta: 0 },
        { japones: 'これはいける', lectura: 'kore wa ikeru', opciones: ['Esto puede funcionar/Es prometedor', 'Esto es imposible', 'Esto es peligroso', 'Esto es aburrido'], respuesta: 0 },
        { japones: '初出演', lectura: 'hatsu shutsuen', opciones: ['Primera aparición', 'Última aparición', 'Aparición especial', 'Aparición casual'], respuesta: 0 },
        { japones: '元芸能人', lectura: 'moto geinoujin', opciones: ['Ex celebridad', 'Nueva celebridad', 'Periodista', 'Fan'], respuesta: 0 },
        { japones: '世にも珍しい', lectura: 'yo ni mo mezurashii', opciones: ['Extraño en el mundo/Inaudito', 'Muy común', 'Muy aburrido', 'Muy caro'], respuesta: 0 },
        { japones: '話題になる', lectura: 'wadai ni naru', opciones: ['Convertirse en tema de conversación', 'Ser olvidado', 'Ser criticado', 'Ser ignorado'], respuesta: 0 },
        { japones: '革命', lectura: 'kakumei', opciones: ['Revolución', 'Evolución', 'Tradición', 'Estancamiento'], respuesta: 0 }
        ],
        // Mazo 3 (para probar dinero)
        3: [
            { japones: '起こせる', lectura: 'okoseru', opciones: ['Poder causar/Lograr', 'Poder prevenir', 'Poder olvidar', 'Poder ignorar'], respuesta: 0 },
        { japones: '活躍さえ', lectura: 'katsuyaku sae', opciones: ['Incluso la actividad exitosa', 'Fracaso constante', 'Primer intento', 'Sin esfuerzo'], respuesta: 0 },
        { japones: '調理学校', lectura: 'chouri gakkou', opciones: ['Escuela de cocina', 'Escuela de arte', 'Escuela de negocios', 'Escuela de idiomas'], respuesta: 0 },
        { japones: 'きつい', lectura: 'kitsui', opciones: ['Difícil/Duro', 'Fácil', 'Relajado', 'Lento'], respuesta: 0 },
        { japones: '他の道を', lectura: 'hoka no michi wo', opciones: ['Otro camino', 'El mismo camino', 'Un atajo', 'Un callejón sin salida'], respuesta: 0 },
        { japones: '毎日', lectura: 'mainichi', opciones: ['Todos los días', 'Rara vez', 'A veces', 'Nunca'], respuesta: 0 },
        { japones: '試作', lectura: 'shisaku', opciones: ['Prototipo/Prueba de fabricación', 'Producto final', 'Venta', 'Consumo'], respuesta: 0 },
        { japones: 'お菓子', lectura: 'okashi', opciones: ['Dulces/Golosinas', 'Plato principal', 'Bebida', 'Sopa'], respuesta: 0 },
        { japones: 'お腹', lectura: 'onaka', opciones: ['Estómago', 'Cabeza', 'Mano', 'Corazón'], respuesta: 0 },
        { japones: '試食', lectura: 'shishoku', opciones: ['Degustación', 'Cocción', 'Compra', 'Desperdicio'], respuesta: 0 }
    ],
         4: [
        { japones: '将来', lectura: 'shourai', opciones: ['Futuro', 'Pasado', 'Presente', 'Ayer'], respuesta: 0 },
        { japones: '喫茶店', lectura: 'kissaten', opciones: ['Cafetería', 'Hospital', 'Tienda', 'Estación'], respuesta: 0 },
        { japones: '写真', lectura: 'shashin', opciones: ['Fotografía', 'Pintura', 'Escultura', 'Película'], respuesta: 0 },
        { japones: '写っている', lectura: 'utsu tte iru', opciones: ['Estar salido (en una foto)', 'Estar escondido', 'Estar borrado', 'Estar pintado'], respuesta: 0 },
        { japones: '報酬', lectura: 'houshuu', opciones: ['Recompensa/Pago', 'Castigo', 'Regalo', 'Deuda'], respuesta: 0 },
        { japones: '今後', lectura: 'kongo', opciones: ['De ahora en adelante', 'Hasta ahora', 'Recientemente', 'En el pasado lejano'], respuesta: 0 },
        { japones: '食レポ', lectura: 'shoku repo', opciones: ['Reportaje gastronómico', 'Reportaje deportivo', 'Reportaje político', 'Crítica literaria'], respuesta: 0 },
        { japones: '代わって', lectura: 'kawatte', opciones: ['En lugar de/Como sustituto', 'Junto con', 'En contra de', 'A pesar de'], respuesta: 0 },
        { japones: '真剣に', lectura: 'shinken ni', opciones: ['En serio', 'En broma', 'Despreocupadamente', 'Tristemente'], respuesta: 0 },
        { japones: '大食い系', lectura: 'oogui kei', opciones: ['Tipo comedor abundante', 'Tipo que come poco', 'Vegetariano', 'Gourmet'], respuesta: 0 }
             
        ],
        5: [
        { japones: '企画', lectura: 'kikaku', opciones: ['Plan/Proyecto', 'Accidente', 'Rutina', 'Error'], respuesta: 0 },
        { japones: 'いい加減', lectura: 'ii kagen', opciones: ['Ya basta/De una vez', 'Con cuidado', 'Por primera vez', 'Sin prisa'], respuesta: 0 },
        { japones: '傳説', lectura: 'densetsu', opciones: ['Leyenda', 'Historia real', 'Noticia', 'Chisme'], respuesta: 0 },
        { japones: 'もんかな', lectura: 'mon ka na', opciones: ['¿De verdad? (coloquial, duda)', '¡Claro que sí!', 'Absolutamente no', 'Tal vez'], respuesta: 0 },
        { japones: '今夜', lectura: 'kon\'ya', opciones: ['Esta noche', 'Esta mañana', 'Ayer', 'Mañana'], respuesta: 0 },
        { japones: '完璧', lectura: 'kanpeki', opciones: ['Perfección', 'Desastre', 'Normalidad', 'Mediocridad'], respuesta: 0 },
        { japones: '任務', lectura: 'ninmu', opciones: ['Misión/Tarea', 'Juego', 'Vacación', 'Sueño'], respuesta: 0 },
        { japones: '遂行', lectura: 'suikou', opciones: ['Cumplimiento', 'Abandono', 'Retraso', 'Planificación'], respuesta: 0 },
        { japones: '初体験と', lectura: 'hatsu taiken to', opciones: ['Con la primera experiencia', 'Con la última experiencia', 'Sin experiencia', 'Con mucha experiencia'], respuesta: 0 },
        { japones: 'いうことで', lectura: 'iu koto de', opciones: ['Así que... / Por lo tanto', 'Sin embargo', 'Además', 'Por ejemplo'], respuesta: 0 }
    ],
     6: [
        { japones: '最終日', lectura: 'saishuu bi', opciones: ['Día final', 'Primer día', 'Día festivo', 'Día ordinario'], respuesta: 0 },
        { japones: '両等分', lectura: 'ryoutou bun', opciones: ['División en dos partes iguales', 'División desigual', 'Unificación', 'Multiplicación'], respuesta: 0 }
    ]
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
    }
};

// Función para obtener vocabulario
function obtenerVocabulario(contenedor, subcontenedor, mazo) {
    const key = `sub${contenedor}_${subcontenedor}`;
    if (vocabularioDatabase[key] && vocabularioDatabase[key][mazo]) {
        return vocabularioDatabase[key][mazo];
    }
    return []; // Retorna array vacío si no existe
}
