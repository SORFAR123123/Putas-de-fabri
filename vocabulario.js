// vocabulario.js - BASE DE DATOS DINÁMICA DE MANGA
const mangaDatabase = {
    // ==================== CONFIGURACIÓN ====================
    config: {
        totalContenedores: 10,
        subcontenedoresPorContenedor: 5,
        mazosPorSubcontenedor: 10,
        palabrasPorMazo: 10
    },

    // ==================== DATOS DE MANGA ====================
    contenedores: {} // SE LLENA DINÁMICAMENTE
};

// PALABRAS DE EJEMPLO (100 palabras diferentes)
const palabrasEjemplo = [
    { japones: '今朝', romaji: 'kesa', significado: 'Esta mañana' },
    { japones: '処', romaji: 'tokoro', significado: 'Lugar' },
    { japones: '出掛け', romaji: 'dekake', significado: 'Salir' },
    { japones: '女将', romaji: 'okami', significado: 'Dueña' },
    { japones: '寂しい', romaji: 'sabishii', significado: 'Solitario' },
    { japones: '憩い', romaji: 'ikoi', significado: 'Descanso' },
    { japones: '手伝い', romaji: 'tetsudai', significado: 'Ayuda' },
    { japones: '撮る', romaji: 'toru', significado: 'Tomar foto' },
    { japones: '見送る', romaji: 'miokuru', significado: 'Despedir' },
    { japones: '限る', romaji: 'kagiru', significado: 'Limitar' },
    // ... 90 palabras más (total 100)
];

// FUNCIÓN para CREAR BASE DE DATOS COMPLETA
function crearBaseDeDatosManga() {
    const { totalContenedores, subcontenedoresPorContenedor, mazosPorSubcontenedor, palabrasPorMazo } = mangaDatabase.config;
    let indicePalabra = 0;

    // Crear 10 contenedores
    for(let c = 1; c <= totalContenedores; c++) {
        const contenedorId = `contenedor_${c}`;
        mangaDatabase.contenedores[contenedorId] = {
            id: contenedorId,
            nombre: `Manga Volumen ${c}`,
            imagen: `📘${c}`,
            subcontenedores: {}
        };

        // Crear 5 subcontenedores
        for(let s = 1; s <= subcontenedoresPorContenedor; s++) {
            const subId = `sub_${s}`;
            mangaDatabase.contenedores[contenedorId].subcontenedores[subId] = {
                id: subId,
                nombre: `Capítulo ${(s-1)*5+1}-${s*5}`,
                mazos: {}
            };

            // Crear 10 mazos
            for(let m = 1; m <= mazosPorSubcontenedor; m++) {
                const mazoId = `mazo_${m}`;
                const mazo = [];

                // Añadir 10 palabras al mazo
                for(let p = 0; p < palabrasPorMazo; p++) {
                    if(indicePalabra >= palabrasEjemplo.length) {
                        indicePalabra = 0; // Reiniciar si se acaban
                    }
                    
                    const palabraBase = palabrasEjemplo[indicePalabra];
                    const opciones = generarOpcionesAleatorias(palabraBase.significado);
                    
                    mazo.push({
                        japones: palabraBase.japones,
                        romaji: palabraBase.romaji,
                        opciones: opciones,
                        respuesta: opciones.indexOf(palabraBase.significado)
                    });
                    
                    indicePalabra++;
                }

                mangaDatabase.contenedores[contenedorId].subcontenedores[subId].mazos[mazoId] = mazo;
            }
        }
    }
}

// FUNCIÓN para generar opciones aleatorias
function generarOpcionesAleatorias(respuestaCorrecta) {
    const opciones = [respuestaCorrecta];
    const significados = palabrasEjemplo.map(p => p.significado).filter(s => s !== respuestaCorrecta);
    
    // Mezclar significados y tomar 3 aleatorios
    const mezclados = significados.sort(() => Math.random() - 0.5).slice(0, 3);
    opciones.push(...mezclados);
    
    // Mezclar las 4 opciones
    return opciones.sort(() => Math.random() - 0.5);
}

// INICIALIZAR BASE DE DATOS AL CARGAR
crearBaseDeDatosManga();

// EXPORTAR (para sistemas.js)
window.mangaDatabase = mangaDatabase;
