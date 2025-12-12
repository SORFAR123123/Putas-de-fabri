// ================================================
// BASE DE DATOS DE IMÁGENES
// ================================================

const imagenesDatabase = {
    // ================================================
    // IMÁGENES PARA CONTENEDORES (MANGAS/VIDEOS/ANIMES)
    // ================================================
    
    contenedores: {
        // Contenedores 1-10 - Imágenes generales
        1: 'https://pbs.twimg.com/media/G23BILfWkAAgmsn?format=jpg&name=medium', // Libros
        2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format', // Persona
        3: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&auto=format', // Estudio
        4: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb1c?w=400&h=400&fit=crop&auto=format', // Ciudad
        5: 'https://images.unsplash.com/photo-1523672557977-2c106afb2278?w=400&h=400&fit=crop&auto=format', // Naturaleza
        6: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=400&fit=crop&auto=format', // Montañas
        7: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&auto=format', // Arte
        8: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=400&fit=crop&auto=format', // Tecnología
        9: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop&auto=format', // Espacio
        10: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=400&fit=crop&auto=format' // Abstracto
    },
    
    // Contenedores específicos para ANIMES
    contenedoresAnimes: {
        1: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format', // Anime 1
        2: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop&auto=format', // Anime 2
        3: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=400&fit=crop&auto=format', // Anime 3
        4: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&auto=format', // Anime 4
        5: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format', // Anime 5
        6: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=400&fit=crop&auto=format', // Anime 6
        7: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop&auto=format', // Anime 7
        8: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=400&fit=crop&auto=format', // Anime 8
        9: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&auto=format', // Anime 9
        10: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format' // Anime 10
    },

    // ================================================
    // IMÁGENES PARA SUB-CONTENEDORES DE MANGAS/VIDEOS
    // ================================================
    
    subcontenedores: {
        // Contenedor 1
        '1_1': 'https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large',
        '1_2': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '1_3': 'https://images.unsplash.com/photo-1544716278-af9e8a6d5cc3?w=300&h=300&fit=crop&auto=format',
        '1_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '1_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        // Contenedor 2
        '2_1': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '2_2': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '2_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '2_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '2_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        // Contenedor 3
        '3_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '3_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '3_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '3_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '3_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        // Contenedores 4-10 (imágenes por defecto)
        '4_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '4_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '4_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '4_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '4_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        '5_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '5_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '5_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '5_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '5_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format'
    },

    // ================================================
    // IMÁGENES ESPECÍFICAS PARA SUB-CONTENEDORES DE ANIMES
    // ================================================
    
    subcontenedoresAnimes: {
        // Contenedor 1 - Animes populares
        '1_1': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format', // Shingeki
        '1_2': 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=300&h=300&fit=crop&auto=format', // Kimetsu
        '1_3': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format', // Dragon Ball
        '1_4': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format', // Anime 4
        '1_5': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format', // Anime 5
        
        // Contenedor 2 - Animes deportivos/misterio
        '2_1': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format', // Haikyuu
        '2_2': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format', // Death Note
        '2_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format', // Anime 3
        '2_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format', // Anime 4
        '2_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format', // Anime 5
        
        // Contenedor 3-10 (imágenes por defecto para animes)
        '3_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '3_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '3_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '3_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '3_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        '4_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '4_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '4_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '4_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '4_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        '5_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '5_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '5_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '5_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '5_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        // Más contenedores...
        '6_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '6_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '6_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '6_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '6_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        '7_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '7_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '7_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '7_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '7_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        '8_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '8_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '8_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '8_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '8_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        '9_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '9_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '9_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '9_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '9_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        
        '10_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&auto=format',
        '10_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '10_3': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '10_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '10_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format'
    }
};

// ================================================
// FUNCIONES DE ACCESO GENERALES
// ================================================

function obtenerImagenContenedor(numero) {
    return imagenesDatabase.contenedores[numero] || 
           'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&auto=format';
}

function obtenerImagenSubcontenedor(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return imagenesDatabase.subcontenedores[key] || 
           'https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&h=300&fit=crop&auto=format';
}

// ================================================
// FUNCIONES ESPECÍFICAS PARA ANIMES
// ================================================

function obtenerImagenContenedorAnime(numero) {
    return imagenesDatabase.contenedoresAnimes[numero] || 
           imagenesDatabase.contenedores[numero] || 
           'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop&auto=format';
}

function obtenerImagenSubcontenedorAnime(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return imagenesDatabase.subcontenedoresAnimes[key] || 
           imagenesDatabase.subcontenedores[key] || 
           'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format';
}

// ================================================
// FUNCIONES PARA AGREGAR NUEVAS IMÁGENES
// ================================================

function agregarImagenContenedorAnime(numero, url) {
    imagenesDatabase.contenedoresAnimes[numero] = url;
    return true;
}

function agregarImagenSubcontenedorAnime(contenedor, subcontenedor, url) {
    const key = `${contenedor}_${subcontenedor}`;
    imagenesDatabase.subcontenedoresAnimes[key] = url;
    return true;
}

function agregarImagenSubcontenedor(contenedor, subcontenedor, url) {
    const key = `${contenedor}_${subcontenedor}`;
    imagenesDatabase.subcontenedores[key] = url;
    return true;
}
