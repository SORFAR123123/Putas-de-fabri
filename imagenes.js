// ================================================
// BASE DE DATOS DE IMÁGENES
// ================================================

const imagenesDatabase = {
    // IMÁGENES PARA CONTENEDORES DE MANGAS (10 contenedores DIFERENTES)
    contenedores: {
        1: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&auto=format', // Libros
        2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format', // Persona
        3: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&auto=format', // Estudio
        4: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb1c?w=400&h=400&fit=crop&auto=format', // Ciudad
        5: 'https://images.unsplash.com/photo-1523672557977-2c106afb2278?w=400&h=400&fit=crop&auto=format', // Naturaleza
        6: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=400&fit=crop&auto=format', // Montañas
        7: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&auto=format', // Arte
        8: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=400&fit=crop&auto=format', // Tecnología
        9: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop&auto=format', // Espacio
        10: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop&auto=format' // Abstracto
    },

    // IMÁGENES PARA SUB-CONTENEDORES (DIFERENTES)
    subcontenedores: {
        '1_1': 'https://images.unsplash.com/photo-1544716278-e513176f20b5?w=300&h=300&fit=crop&auto=format',
        '1_2': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop&auto=format',
        '1_3': 'https://images.unsplash.com/photo-1544716278-af9e8a6d5cc3?w=300&h=300&fit=crop&auto=format',
        '1_4': 'https://images.unsplash.com/photo-1565598621680-94c48b04e56f?w=300&h=300&fit=crop&auto=format',
        '1_5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300&fit=crop&auto=format',
        '2_1': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '2_2': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '2_3': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '2_4': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format',
        '2_5': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format'
    }
};

function obtenerImagenContenedor(numero) {
    return imagenesDatabase.contenedores[numero] || 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&auto=format';
}

function obtenerImagenSubcontenedor(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return imagenesDatabase.subcontenedores[key] || 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&h=300&fit=crop&auto=format';
}
