// ================================================
// SISTEMA COMPLETO DE GALERÍA DE IMÁGENES
// CON CONTENEDORES Y SUBCONTENEDORES PERSONALIZADOS
// ================================================

const galeriaDatabase = {
    // ============ GALERÍA ============
    galeria: {
        contenedores: {
            1: { 
                nombre: 'PAISAJES DE JAPÓN',
                imagen: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=400&h=400&fit=crop', 
                descripcion: 'Colección de paisajes naturales de Japón',
                categoria: 'naturaleza'
            },
            2: { 
                nombre: 'ARQUITECTURA',
                imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=400&fit=crop', 
                descripcion: 'Edificios y estructuras tradicionales',
                categoria: 'arquitectura'
            },
            3: { 
                nombre: 'CIUDADES',
                imagen: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=400&fit=crop', 
                descripcion: 'Vida urbana en las ciudades japonesas',
                categoria: 'urbano'
            },
            4: { 
                nombre: 'TRADICIONES',
                imagen: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=400&h=400&fit=crop', 
                descripcion: 'Costumbres y festividades tradicionales',
                categoria: 'cultura'
            },
            5: { 
                nombre: 'GASTRONOMÍA',
                imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=400&h=400&fit=crop', 
                descripcion: 'Platos y comida japonesa tradicional',
                categoria: 'comida'
            },
            6: { 
                nombre: 'ARTE',
                imagen: 'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=400&h=400&fit=crop', 
                descripcion: 'Arte tradicional y contemporáneo',
                categoria: 'arte'
            },
            7: { 
                nombre: 'FLORES',
                imagen: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=400&fit=crop', 
                descripcion: 'Jardines y flores de temporada',
                categoria: 'flores'
            },
            8: { 
                nombre: 'TEMPLOS',
                imagen: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400&h=400&fit=crop', 
                descripcion: 'Templos y santuarios sagrados',
                categoria: 'religioso'
            },
            9: { 
                nombre: 'MODERNO',
                imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=400&fit=crop', 
                descripcion: 'Japón contemporáneo y tecnológico',
                categoria: 'moderno'
            },
            10: { 
                nombre: 'NOCTURNO',
                imagen: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=400&fit=crop', 
                descripcion: 'Escenas nocturnas y luces urbanas',
                categoria: 'nocturno'
            }
        },
        
        subcontenedores: {
            '1_1': { 
                nombre: 'MONTAÑAS SAGRADAS',
                imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=300&fit=crop',
                descripcion: 'Montañas emblemáticas como el Monte Fuji',
                imagenes: [
                    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop'
                ]
            },
            '1_2': { 
                nombre: 'CAMPOS DE ARROZ',
                imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=300&h=300&fit=crop',
                descripcion: 'Tierras de cultivo en el campo japonés',
                imagenes: [
                    'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&h=600&fit=crop'
                ]
            },
            '1_3': { 
                nombre: 'PLAYAS Y COSTAS', 
                imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=300&fit=crop',
                descripcion: 'Costas y playas del archipiélago japonés',
                imagenes: [
                    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=600&fit=crop'
                ]
            }
            // ... puedes añadir más subcontenedores aquí
        }
    }
};

// ================================================
// FUNCIONES DE ACCESO PARA GALERÍA
// ================================================

function obtenerContenedorGaleria(numero) {
    return galeriaDatabase.galeria.contenedores[numero] || {
        nombre: `GALERÍA ${numero}`,
        imagen: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=400&fit=crop',
        descripcion: 'Colección de imágenes',
        categoria: 'general'
    };
}

function obtenerSubcontenedorGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDatabase.galeria.subcontenedores[key] || {
        nombre: `Subcontenedor ${subcontenedor}`,
        imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=300&h=300&fit=crop',
        descripcion: 'Colección de imágenes',
        imagenes: []
    };
}

function obtenerImagenesSubcontenedor(contenedor, subcontenedor) {
    const sub = obtenerSubcontenedorGaleria(contenedor, subcontenedor);
    return sub.imagenes || [];
}

// ================================================
// FUNCIONES DE INTERFAZ PARA GALERÍA
// ================================================

function cargarPaginaGaleria() {
    console.log("Cargando página de galería...");
    
    // Ocultar otras secciones
    document.querySelector('.especial-section').style.display = 'none';
    const mangaSection = document.getElementById('manga-section');
    if (mangaSection) mangaSection.style.display = 'none';
    
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) quizSection.style.display = 'none';
    
    // Crear o mostrar sección de galería
    let galeriaSection = document.getElementById('galeria-section');
    
    if (!galeriaSection) {
        galeriaSection = document.createElement('section');
        galeriaSection.id = 'galeria-section';
        document.body.appendChild(galeriaSection);
    }
    
    galeriaSection.style.display = 'block';
    galeriaSection.innerHTML = `
        <div class="manga-section">
            <div class="manga-header">
                <h2>🖼️ GALERÍA DE IMÁGENES</h2>
                <p>Selecciona un contenedor para ver las colecciones de imágenes</p>
            </div>
            
            <div class="manga-controls">
                <div class="search-container">
                    <input type="text" id="galeria-search" placeholder="🔍 Buscar imágenes..." class="search-input">
                </div>
            </div>
            
            <div class="contenedores-grid" id="galeria-contenedores"></div>
            
            <!-- Vista de subcontenedores -->
            <div id="galeria-subcontenedores-view" style="display: none;">
                <button class="btn-back" onclick="volverAGaleriaPrincipal()">← Volver a contenedores</button>
                <h3 id="galeria-contenedor-titulo"></h3>
                <div class="subcontenedores-grid" id="galeria-subcontenedores"></div>
            </div>
            
            <!-- Vista de imágenes -->
            <div id="galeria-imagenes-view" style="display: none;">
                <button class="btn-back" onclick="volverASubcontenedoresGaleria()">← Volver a subcontenedores</button>
                <h3 id="galeria-subcontenedor-titulo"></h3>
                <div class="imagenes-grid" id="galeria-imagenes"></div>
            </div>
        </div>
    `;
    
    // Cargar contenedores de galería
    cargarContenedoresGaleria();
}

function cargarContenedoresGaleria() {
    const contenedoresGrid = document.getElementById('galeria-contenedores');
    if (!contenedoresGrid) return;
    
    contenedoresGrid.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const contenedor = obtenerContenedorGaleria(i);
        
        const contenedorElement = document.createElement('div');
        contenedorElement.className = 'contenedor-item';
        contenedorElement.innerHTML = `
            <div class="contenedor-img" style="background-image: url('${contenedor.imagen}')"></div>
            <h3>${contenedor.nombre}</h3>
            <p>${contenedor.descripcion}</p>
            <button class="btn-ver" onclick="abrirSubcontenedoresGaleria(${i})">Ver colección</button>
        `;
        
        contenedoresGrid.appendChild(contenedorElement);
    }
}

function abrirSubcontenedoresGaleria(contenedorId) {
    document.getElementById('galeria-contenedores').style.display = 'none';
    document.getElementById('galeria-subcontenedores-view').style.display = 'block';
    
    const contenedor = obtenerContenedorGaleria(contenedorId);
    document.getElementById('galeria-contenedor-titulo').textContent = contenedor.nombre;
    
    const subcontenedoresGrid = document.getElementById('galeria-subcontenedores');
    subcontenedoresGrid.innerHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        const subcontenedor = obtenerSubcontenedorGaleria(contenedorId, i);
        
        const subElement = document.createElement('div');
        subElement.className = 'subcontenedor-item';
        subElement.innerHTML = `
            <div class="subcontenedor-img" style="background-image: url('${subcontenedor.imagen}')"></div>
            <h4>${subcontenedor.nombre}</h4>
            <p>${subcontenedor.descripcion}</p>
            <button class="btn-ver" onclick="abrirImagenesGaleria(${contenedorId}, ${i})">
                Ver imágenes (${subcontenedor.imagenes ? subcontenedor.imagenes.length : 0})
            </button>
        `;
        
        subcontenedoresGrid.appendChild(subElement);
    }
}

function abrirImagenesGaleria(contenedorId, subcontenedorId) {
    document.getElementById('galeria-subcontenedores-view').style.display = 'none';
    document.getElementById('galeria-imagenes-view').style.display = 'block';
    
    const subcontenedor = obtenerSubcontenedorGaleria(contenedorId, subcontenedorId);
    document.getElementById('galeria-subcontenedor-titulo').textContent = subcontenedor.nombre;
    
    const imagenesGrid = document.getElementById('galeria-imagenes');
    imagenesGrid.innerHTML = '';
    
    const imagenes = obtenerImagenesSubcontenedor(contenedorId, subcontenedorId);
    
    if (imagenes.length === 0) {
        imagenesGrid.innerHTML = '<p class="no-imagenes">No hay imágenes en esta colección</p>';
        return;
    }
    
    imagenes.forEach((imagenUrl, index) => {
        const imgElement = document.createElement('div');
        imgElement.className = 'imagen-item';
        imgElement.innerHTML = `
            <div class="imagen-container">
                <img src="${imagenUrl}" alt="Imagen ${index + 1}" loading="lazy">
                <div class="imagen-overlay">
                    <button class="btn-expand" onclick="expandirImagen('${imagenUrl}')">🔍 Ampliar</button>
                </div>
            </div>
            <p class="imagen-desc">Imagen ${index + 1}</p>
        `;
        imagenesGrid.appendChild(imgElement);
    });
}

function volverAGaleriaPrincipal() {
    document.getElementById('galeria-subcontenedores-view').style.display = 'none';
    document.getElementById('galeria-imagenes-view').style.display = 'none';
    document.getElementById('galeria-contenedores').style.display = 'grid';
}

function volverASubcontenedoresGaleria() {
    document.getElementById('galeria-imagenes-view').style.display = 'none';
    document.getElementById('galeria-subcontenedores-view').style.display = 'block';
}

function expandirImagen(url) {
    const modal = document.createElement('div');
    modal.className = 'imagen-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    modal.innerHTML = `
        <img src="${url}" style="max-width: 90%; max-height: 90%; border-radius: 10px;">
        <button onclick="this.parentElement.remove()" style="
            position: absolute;
            top: 20px;
            right: 20px;
            background: #ff4757;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        ">✕ Cerrar</button>
    `;
    
    document.body.appendChild(modal);
}

// ================================================
// FUNCIONES DE EDITAR
// ================================================

function editarContenedorGaleria(numero, nuevosDatos) {
    if (!galeriaDatabase.galeria.contenedores[numero]) {
        console.error(`Contenedor ${numero} no existe en galería`);
        return false;
    }
    
    galeriaDatabase.galeria.contenedores[numero] = {
        ...galeriaDatabase.galeria.contenedores[numero],
        ...nuevosDatos
    };
    
    console.log(`✅ Contenedor ${numero} actualizado:`, nuevosDatos);
    return true;
}

function editarSubcontenedorGaleria(contenedor, subcontenedor, nuevosDatos) {
    const key = `${contenedor}_${subcontenedor}`;
    
    if (!galeriaDatabase.galeria.subcontenedores[key]) {
        console.error(`Subcontenedor ${key} no existe`);
        return false;
    }
    
    galeriaDatabase.galeria.subcontenedores[key] = {
        ...galeriaDatabase.galeria.subcontenedores[key],
        ...nuevosDatos
    };
    
    console.log(`✅ Subcontenedor ${key} actualizado:`, nuevosDatos);
    return true;
}

function añadirImagenSubcontenedor(contenedor, subcontenedor, urlImagen) {
    const key = `${contenedor}_${subcontenedor}`;
    
    if (!galeriaDatabase.galeria.subcontenedores[key]) {
        console.error(`Subcontenedor ${key} no existe`);
        return false;
    }
    
    if (!galeriaDatabase.galeria.subcontenedores[key].imagenes) {
        galeriaDatabase.galeria.subcontenedores[key].imagenes = [];
    }
    
    galeriaDatabase.galeria.subcontenedores[key].imagenes.push(urlImagen);
    console.log(`✅ Imagen añadida a ${key}`);
    return true;
}

// ================================================
// INICIALIZACIÓN
// ================================================

console.log('✅ Galería.js cargado correctamente');
console.log('🖼️ Sistema de galería listo para usar');

// Ejemplo de uso:
/*
// Cambiar nombre de contenedor:
editarContenedorGaleria(1, {
    nombre: 'MIS FOTOS PERSONALES',
    descripcion: 'Mi colección personal de fotos'
});

// Añadir imágenes a subcontenedor:
añadirImagenSubcontenedor(1, 1, 'https://ejemplo.com/mi-foto.jpg');

// Para usar la galería, añadir en index.html:
<button onclick="cargarPaginaGaleria()">Ver Galería</button>
*/
