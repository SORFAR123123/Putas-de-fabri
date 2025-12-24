// ================================================
// ALFABETO CIRÍLICO RUSO - QUIZ DE APRENDIZAJE
// ================================================

const alfabetoRuso = {
    // Vocales
    1: [
        { ruso: 'А а', nombre: 'A', pronunciacion: 'a', ejemplo: 'Ананас (ananás) - piña', opciones: ['a', 'be', 've', 'ge'], respuesta: 0 },
        { ruso: 'Е е', nombre: 'Ye', pronunciacion: 'ye/e', ejemplo: 'Ель (yel) - abeto', opciones: ['ye', 'a', 'en', 'ka'], respuesta: 0 },
        { ruso: 'Ё ё', nombre: 'Yo', pronunciacion: 'yo', ejemplo: 'Ёлка (yolka) - árbol de Navidad', opciones: ['yo', 'ye', 'a', 'i'], respuesta: 0 },
        { ruso: 'И и', nombre: 'I', pronunciacion: 'i', ejemplo: 'Икра (ikra) - caviar', opciones: ['i', 'u', 'o', 'a'], respuesta: 0 },
        { ruso: 'О о', nombre: 'O', pronunciacion: 'o', ejemplo: 'Окно (okno) - ventana', opciones: ['o', 'a', 'ye', 'u'], respuesta: 0 },
        { ruso: 'У у', nombre: 'U', pronunciacion: 'u', ejemplo: 'Ухо (ukho) - oído', opciones: ['u', 'o', 'i', 'ye'], respuesta: 0 },
        { ruso: 'Ы ы', nombre: 'Y', pronunciacion: 'i corta', ejemplo: 'Мышь (mysh) - ratón', opciones: ['i corta', 'u', 'ye', 'yo'], respuesta: 0 },
        { ruso: 'Э э', nombre: 'E', pronunciacion: 'e', ejemplo: 'Это (eto) - esto', opciones: ['e', 'ye', 'yo', 'i'], respuesta: 0 },
        { ruso: 'Ю ю', nombre: 'Yu', pronunciacion: 'yu', ejemplo: 'Юг (yug) - sur', opciones: ['yu', 'ya', 'ye', 'i'], respuesta: 0 },
        { ruso: 'Я я', nombre: 'Ya', pronunciacion: 'ya', ejemplo: 'Яблоко (yabloko) - manzana', opciones: ['ya', 'yu', 'ye', 'yo'], respuesta: 0 }
    ],
    
    // Consonantes (parte 1)
    2: [
        { ruso: 'Б б', nombre: 'Be', pronunciacion: 'b', ejemplo: 'Банк (bank) - banco', opciones: ['b', 'v', 'g', 'd'], respuesta: 0 },
        { ruso: 'В в', nombre: 'Ve', pronunciacion: 'v', ejemplo: 'Вода (voda) - agua', opciones: ['v', 'b', 'f', 'p'], respuesta: 0 },
        { ruso: 'Г г', nombre: 'Ge', pronunciacion: 'g', ejemplo: 'Город (gorod) - ciudad', opciones: ['g', 'k', 'j', 'h'], respuesta: 0 },
        { ruso: 'Д д', nombre: 'De', pronunciacion: 'd', ejemplo: 'Дом (dom) - casa', opciones: ['d', 't', 'n', 'l'], respuesta: 0 },
        { ruso: 'Ж ж', nombre: 'Zhe', pronunciacion: 'zh', ejemplo: 'Жизнь (zhizn) - vida', opciones: ['zh (como jota)', 'sh', 'ch', 'ts'], respuesta: 0 },
        { ruso: 'З з', nombre: 'Ze', pronunciacion: 'z', ejemplo: 'Зима (zima) - invierno', opciones: ['z', 's', 'ts', 'dz'], respuesta: 0 },
        { ruso: 'К к', nombre: 'Ka', pronunciacion: 'k', ejemplo: 'Книга (kniga) - libro', opciones: ['k', 'g', 'kh', 'h'], respuesta: 0 },
        { ruso: 'Л л', nombre: 'El', pronunciacion: 'l', ejemplo: 'Любовь (lyubov) - amor', opciones: ['l', 'r', 'n', 'm'], respuesta: 0 },
        { ruso: 'М м', nombre: 'Em', pronunciacion: 'm', ejemplo: 'Море (more) - mar', opciones: ['m', 'n', 'p', 'b'], respuesta: 0 },
        { ruso: 'Н н', nombre: 'En', pronunciacion: 'n', ejemplo: 'Ночь (noch) - noche', opciones: ['n', 'm', 'l', 'r'], respuesta: 0 }
    ],
    
    // Consonantes (parte 2)
    3: [
        { ruso: 'П п', nombre: 'Pe', pronunciacion: 'p', ejemplo: 'Поле (pole) - campo', opciones: ['p', 'b', 'f', 'v'], respuesta: 0 },
        { ruso: 'Р р', nombre: 'Er', pronunciacion: 'r', ejemplo: 'Рука (ruka) - mano', opciones: ['r (vibrante)', 'l', 'n', 'd'], respuesta: 0 },
        { ruso: 'С с', nombre: 'Es', pronunciacion: 's', ejemplo: 'Солнце (sontse) - sol', opciones: ['s', 'z', 'sh', 'ts'], respuesta: 0 },
        { ruso: 'Т т', nombre: 'Te', pronunciacion: 't', ejemplo: 'Тетрадь (tetrad) - cuaderno', opciones: ['t', 'd', 'n', 'l'], respuesta: 0 },
        { ruso: 'Ф ф', nombre: 'Ef', pronunciacion: 'f', ejemplo: 'Фото (foto) - foto', opciones: ['f', 'v', 'p', 'b'], respuesta: 0 },
        { ruso: 'Х х', nombre: 'Kha', pronunciacion: 'kh/j', ejemplo: 'Хлеб (khleb) - pan', opciones: ['kh (como jota suave)', 'k', 'g', 'h'], respuesta: 0 },
        { ruso: 'Ц ц', nombre: 'Tse', pronunciacion: 'ts', ejemplo: 'Цветок (tsvetok) - flor', opciones: ['ts', 's', 'z', 'ch'], respuesta: 0 },
        { ruso: 'Ч ч', nombre: 'Che', pronunciacion: 'ch', ejemplo: 'Чай (chai) - té', opciones: ['ch', 'sh', 'zh', 'ts'], respuesta: 0 },
        { ruso: 'Ш ш', nombre: 'Sha', pronunciacion: 'sh', ejemplo: 'Школа (shkola) - escuela', opciones: ['sh', 'ch', 'zh', 's'], respuesta: 0 },
        { ruso: 'Щ щ', nombre: 'Shcha', pronunciacion: 'shch', ejemplo: 'Щука (shchuka) - lucio', opciones: ['shch (sh suave)', 'sh', 'ch', 's'], respuesta: 0 }
    ],
    
    // Letras especiales y signos
    4: [
        { ruso: 'Ъ ъ', nombre: 'Signo duro', pronunciacion: 'silenciosa', ejemplo: 'Объявление (obyavlenie) - anuncio', opciones: ['signo duro (no suena)', 'signo suave', 'vocal', 'consonante'], respuesta: 0 },
        { ruso: 'Ь ь', nombre: 'Signo suave', pronunciacion: 'suaviza', ejemplo: 'День (den) - día', opciones: ['signo suave', 'signo duro', 'vocal', 'consonante'], respuesta: 0 },
        { ruso: 'Й й', nombre: 'I kratkoye', pronunciacion: 'y/i corta', ejemplo: 'Май (mai) - mayo', opciones: ['y/i corta', 'i', 'ye', 'ya'], respuesta: 0 },
        
        // Palabras completas para practicar
        { ruso: 'Привет', nombre: 'Saludo', pronunciacion: 'privét', ejemplo: '¡Hola!', opciones: ['Hola', 'Adiós', 'Gracias', 'Por favor'], respuesta: 0 },
        { ruso: 'Спасибо', nombre: 'Agradecimiento', pronunciacion: 'spasíbo', ejemplo: 'Gracias', opciones: ['Gracias', 'Hola', 'Adiós', 'Sí'], respuesta: 0 },
        { ruso: 'Да', nombre: 'Afirmación', pronunciacion: 'da', ejemplo: 'Sí', opciones: ['Sí', 'No', 'Tal vez', 'Nunca'], respuesta: 0 },
        { ruso: 'Нет', nombre: 'Negación', pronunciacion: 'nyet', ejemplo: 'No', opciones: ['No', 'Sí', 'Tal vez', 'Siempre'], respuesta: 0 },
        { ruso: 'До свидания', nombre: 'Despedida', pronunciacion: 'do svidániya', ejemplo: 'Hasta luego', opciones: ['Hasta luego', 'Hola', 'Gracias', 'Bienvenido'], respuesta: 0 },
        { ruso: 'Как дела?', nombre: 'Pregunta', pronunciacion: 'kak delá?', ejemplo: '¿Cómo estás?', opciones: ['¿Cómo estás?', '¿Qué hora es?', '¿Cómo te llamas?', '¿Dónde vives?'], respuesta: 0 }
    ]
};

// Función para obtener letras del alfabeto
function obtenerLetrasRuso(mazo) {
    return alfabetoRuso[mazo] || [];
}

// Función para contar mazos disponibles
function contarMazosRusoDisponibles() {
    return Object.keys(alfabetoRuso).length;
}

// Función para obtener el nombre del mazo
function obtenerNombreMazoRuso(mazo) {
    const nombres = {
        1: 'Vocales',
        2: 'Consonantes (A-J)',
        3: 'Consonantes (P-Shch)',
        4: 'Signos y Palabras Básicas'
    };
    return nombres[mazo] || `Mazo ${mazo}`;
}
