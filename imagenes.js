// ================================================
// BASE DE DATOS DE IMÁGENES
// ================================================

const imagenesDatabase = {
    // IMÁGENES PARA CONTENEDORES DE MANGAS (10 contenedores)
    contenedores: {
        1: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop',
        2: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop',
        3: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        4: 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=400&h=400&fit=crop',
        5: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
        6: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb1c?w=400&h=400&fit=crop',
        7: 'https://images.unsplash.com/photo-1523672557977-2c106afb2278?w=400&h=400&fit=crop',
        8: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=400&fit=crop',
        9: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
        10: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=400&fit=crop'
    },

    // IMÁGENES PARA SUB-CONTENEDORES
    subcontenedores: {
        '1_1': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
        '1_2': 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&h=300&fit=crop',
        '1_3': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
        '1_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop',
        '1_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop'
    }
};

function obtenerImagenContenedor(numero) {
    return imagenesDatabase.contenedores[numero] || 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop';
}

function obtenerImagenSubcontenedor(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return imagenesDatabase.subcontenedores[key] || 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&h=300&fit=crop';
}
