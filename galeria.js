// ================================================
// SISTEMA COMPLETO DE GALERÍA DE IMÁGENES
// Todo en un solo archivo: base de datos + UI + navegación
// ================================================

// ====================
// 1. BASE DE DATOS DE IMÁGENES
// ====================

const galeriaDatabase = {
    // ================================================
    // CONTENEDOR 1 - TEMÁTICA ESPECIAL
    // ================================================
    
    // Sub-contenedor 1.1
    '1_1': {
        titulo: "🎌 Colección Japón Tradicional",
        imagenes: [
            { 
                url: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&fit=crop", 
                descripcion: "Templo tradicional en Kioto",
                autor: "Fotógrafo Anónimo",
                fecha: "2023"
            },
            { 
                url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w-1200&fit=crop", 
                descripcion: "Cerezos en flor en primavera",
                autor: "Fotógrafo Anónimo",
                fecha: "2023"
            },
            { 
                url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&fit=crop", 
                descripcion: "Santuario sintoísta al atardecer",
                autor: "Fotógrafo Anónimo",
                fecha: "2023"
            }
        ],
        descripcion: "Imágenes de la cultura tradicional japonesa",
        categoria: "Tradicional",
        totalImagenes: 3,
        portada: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&fit=crop"
    },
    
    // Sub-contenedor 1.2
    '1_2': {
        titulo: "🏙️ Tokio Moderno",
        imagenes: [
            { 
                url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&fit=crop", 
                descripcion: "Callejón iluminado en Shinjuku",
                autor: "Fotógrafo Urbano",
                fecha: "2023"
            },
            { 
                url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&fit=crop", 
                descripcion: "El famoso cruce de Shibuya",
                autor: "Fotógrafo Urbano",
                fecha: "2023"
            }
        ],
        descripcion: "La vida moderna en la capital de Japón",
        categoria: "Urbano",
        totalImagenes: 2,
        portada: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&fit=crop"
    },
    
    // Sub-contenedor 1.3 (EJEMPLO VACÍO)
    '1_3': {
        titulo: "🍣 Gastronomía Japonesa",
        imagenes: [],
        descripcion: "Platos tradicionales de la cocina japonesa",
        categoria: "Gastronomía",
        totalImagenes: 0,
        portada: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&fit=crop"
    },
    
    // ================================================
    // CONTENEDOR 2 - ANIME Y MANGA
    // ================================================
    
    // Sub-contenedor 2.1
    '2_1': {
        titulo: "🎨 Arte de Anime",
        imagenes: [
            { 
                url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&fit=crop", 
                descripcion: "Ilustración de personaje anime",
                autor: "Artista Digital",
                fecha: "2023"
            },
            { 
                url: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&fit=crop", 
                descripcion: "Diseño de manga moderno",
                autor: "Artista Digital",
                fecha: "2023"
            }
        ],
        descripcion: "Arte y diseños del mundo anime",
        categoria: "Arte Digital",
        totalImagenes: 2,
        portada: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&fit=crop"
    }
};

// ====================
// 2. DATOS DESCRIPTIVOS (NOMBRES PERSONALIZADOS)
// ====================

const galeriaDescriptiva = {
    // CONTENEDORES PRINCIPALES (1-10)
    contenedores: {
        1: { 
            nombre: 'GALERÍA JAPÓN',
            imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&fit=crop',
            descripcion: 'Imágenes de la cultura japonesa',
            categoria: 'Cultura'
        },
        2: { 
            nombre: 'GALERÍA ANIME',
            imagen: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&fit=crop',
            descripcion: 'Arte y diseños de anime',
            categoria: 'Arte'
        },
        3: { 
            nombre: 'GALERÍA NATURALEZA',
            imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&fit=crop',
            descripcion: 'Paisajes naturales de Japón',
            categoria: 'Naturaleza'
        },
        4: { 
            nombre: 'GALERÍA GASTRONOMÍA',
            imagen: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&fit=crop',
            descripcion: 'Platos tradicionales japoneses',
            categoria: 'Comida'
        },
        5: { 
            nombre: 'GALERÍA URBANA',
            imagen: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&fit=crop',
            descripcion: 'Ciudades y vida moderna',
            categoria: 'Urbano'
        },
        6: { 
            nombre: 'GALERÍA 6',
            imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop',
            descripcion: 'Galería personalizable',
            categoria: 'General'
        },
        7: { 
            nombre: 'GALERÍA 7',
            imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop',
            descripcion: 'Galería personalizable',
            categoria: 'General'
        },
        8: { 
            nombre: 'GALERÍA 8',
            imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop',
            descripcion: 'Galería personalizable',
            categoria: 'General'
        },
        9: { 
            nombre: 'GALERÍA 9',
            imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop',
            descripcion: 'Galería personalizable',
            categoria: 'General'
        },
        10: { 
            nombre: 'GALERÍA 10',
            imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop',
            descripcion: 'Galería personalizable',
            categoria: 'General'
        }
    },
    
    // SUB-CONTENEDORES (5 por cada contenedor)
    subcontenedores: {
        // Contenedor 1
        '1_1': { 
            nombre: 'Templos Tradicionales',
            imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&fit=crop',
            descripcion: 'Arquitectura tradicional japonesa'
        },
        '1_2': { 
            nombre: 'Festivales',
            imagen: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&fit=crop',
            descripcion: 'Festivales y celebraciones'
        },
        '1_3': { 
            nombre: 'Artesanía',
            imagen: 'https://images.unsplash.com/photo-1572860177022-8fda92a90b95?w=300&fit=crop',
            descripcion: 'Artesanía tradicional'
        },
        '1_4': { 
            nombre: 'Ceremonias',
            imagen: 'https://images.unsplash.com/photo-1574717024453-af2e2c8f2bcc?w=300&fit=crop',
            descripcion: 'Ceremonias tradicionales'
        },
        '1_5': { 
            nombre: 'Jardines',
            imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&fit=crop',
            descripcion: 'Jardines japoneses'
        },
        
        // Contenedor 2
        '2_1': { 
            nombre: 'Personajes Anime',
            imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&fit=crop',
            descripcion: 'Diseños de personajes'
        },
        '2_2': { 
            nombre: 'Escenarios',
            imagen: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&fit=crop',
            descripcion: 'Escenarios y fondos'
        },
        '2_3': { 
            nombre: 'Arte Conceptual',
            imagen: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&fit=crop',
            descripcion: 'Arte conceptual'
        },
        '2_4': { 
            nombre: 'Posters',
            imagen: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?w=300&fit=crop',
            descripcion: 'Pósters y carteles'
        },
        '2_5': { 
            nombre: 'Fan Art',
            imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&fit=crop',
            descripcion: 'Arte hecho por fans'
        }
    }
};

// ====================
// 3. FUNCIONES DE ACCESO A DATOS
// ====================

function obtenerGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDatabase[key] || null;
}

function existeGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDatabase[key] && galeriaDatabase[key].imagenes.length > 0;
}

function obtenerContenedoresGaleriaDisponibles() {
    const contenedores = {};
    
    Object.keys(galeriaDatabase).forEach(key => {
        const [contenedor, subcontenedor] = key.split('_');
        if (!contenedores[contenedor]) {
            contenedores[contenedor] = [];
        }
        if (galeriaDatabase[key].imagenes.length > 0) {
            contenedores[contenedor].push(subcontenedor);
        }
    });
    
    return contenedores;
}

function obtenerContenedorGaleria(numero) {
    return galeriaDescriptiva.contenedores[numero] || {
        nombre: `GALERÍA ${numero}`,
        imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&fit=crop',
        descripcion: 'Galería de imágenes',
        categoria: 'General'
    };
}

function obtenerSubcontenedorGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDescriptiva.subcontenedores[key] || {
        nombre: `Sub-galería ${subcontenedor}`,
        imagen: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&fit=crop',
        descripcion: 'Colección de imágenes'
    };
}

// ====================
// 4. FUNCIONES DE NAVEGACIÓN (UI COMPLETA)
// ====================

// Función principal para cargar la página de galería
function cargarPaginaGaleria() {
    modoActual = 'galeria';
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresGaleriaUI();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// Crear UI de contenedores de galería
function crearContenedoresGaleriaUI() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🖼️ GALERÍAS DE IMÁGENES</h2>';
    html += '<p style="text-align: center; margin-bottom: 30px; opacity: 0.8;">Explora colecciones de imágenes organizadas por categorías</p>';
    html += '<div class="manga-contenedores">';
    
    for (let i = 1; i <= 10; i++) {
        const contenedorData = obtenerContenedorGaleria(i);
        const nombre = contenedorData.nombre;
        const desc = contenedorData.descripcion;
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresGaleria(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen}')"></div>
                <div class="contenedor-numero">${nombre}</div>
                <p>${desc}</p>
                <p style="font-size: 0.9rem; color: #FFD166; margin-top: 5px;">
                    Categoría: ${contenedorData.categoria}
                </p>
                <div class="card-button" style="background: linear-gradient(135deg, #FF6B6B, #FFD166); margin-top: 10px;">
                    🖼️ Ver Galería
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// Cargar sub-contenedores de una galería
function cargarSubcontenedoresGaleria(contenedor) {
    contenedorActual = contenedor;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresGaleriaUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaGaleria);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// Crear UI de sub-contenedores de galería
function crearSubcontenedoresGaleriaUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🖼️ ${obtenerContenedorGaleria(contenedor).nombre} - SUB-GALERÍAS
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresGaleriaDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    for (let i = 1; i <= 5; i++) {
        const tieneImagenes = subcontenedoresDisponibles.includes(i.toString());
        const subData = obtenerSubcontenedorGaleria(contenedor, i);
        const galeriaInfo = tieneImagenes ? obtenerGaleria(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneImagenes ? `verGaleriaCompleta(${contenedor}, ${i})` : 'alert("Esta sub-galería no tiene imágenes aún")'}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen}')"></div>
                <h3>${subData.nombre}</h3>
                <p>${subData.descripcion}</p>
                ${tieneImagenes ? 
                    `<p style="color: #4CAF50; font-size: 0.9rem; margin-top: 5px;">
                        🖼️ ${galeriaInfo.totalImagenes} imagen${galeriaInfo.totalImagenes !== 1 ? 'es' : ''}
                    </p>` 
                    : `<p style="color: #FF6B6B; font-size: 0.9rem; margin-top: 5px;">(Vacío)</p>`}
                <div class="card-button" style="background: linear-gradient(135deg, #FF6B6B, #FFD166); margin-top: 10px; padding: 10px 15px; font-size: 0.9rem;">
                    ${tieneImagenes ? '👀 Ver Imágenes' : 'Agregar Imágenes'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// Ver galería completa (visor de imágenes)
function verGaleriaCompleta(contenedor, subcontenedor) {
    const galeriaInfo = obtenerGaleria(contenedor, subcontenedor);
    
    if (!galeriaInfo || galeriaInfo.imagenes.length === 0) {
        alert('Esta galería no tiene imágenes');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearVisorGaleriaUI(galeriaInfo, contenedor, subcontenedor);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresGaleria(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// Crear visor de galería (tipo carrusel)
function crearVisorGaleriaUI(galeriaInfo, contenedor, subcontenedor) {
    let imagenesHTML = '';
    
    galeriaInfo.imagenes.forEach((img, index) => {
        imagenesHTML += `
            <div class="galeria-item" onclick="ampliarImagen(${contenedor}, ${subcontenedor}, ${index})">
                <img src="${img.url}" alt="${img.descripcion}" 
                     style="width: 100%; height: 250px; object-fit: cover; border-radius: 10px; cursor: pointer;">
                <div style="padding: 15px;">
                    <h4 style="margin: 0 0 5px 0; color: #FFD166;">Imagen ${index + 1}</h4>
                    <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">${img.descripcion}</p>
                    <p style="margin: 5px 0 0 0; font-size: 0.8rem; color: #8A5AF7;">
                        Autor: ${img.autor || 'Desconocido'}
                    </p>
                </div>
            </div>
        `;
    });
    
    return `
        <div class="visor-galeria" style="max-width: 1200px; margin: 0 auto; padding: 20px;">
            <h2 style="text-align: center; color: #FFD166; margin-bottom: 10px;">${galeriaInfo.titulo}</h2>
            <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">${galeriaInfo.descripcion}</p>
            
            <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; margin-bottom: 30px; text-align: center;">
                <p style="margin: 0; font-size: 1.1rem;">
                    🖼️ <strong>${galeriaInfo.totalImagenes}</strong> imagen${galeriaInfo.totalImagenes !== 1 ? 'es' : ''} • 
                    📁 Categoría: <strong>${galeriaInfo.categoria}</strong>
                </p>
            </div>
            
            <div class="galeria-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px;">
                ${imagenesHTML}
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
                <button class="card-button" onclick="cargarSubcontenedoresGaleria(${contenedor})" 
                        style="background: linear-gradient(135deg, #8A5AF7, #5864F5);">
                    ↩️ Volver a Sub-Galerías
                </button>
            </div>
        </div>
    `;
}

// Ampliar imagen individual
function ampliarImagen(contenedor, subcontenedor, indice) {
    const galeriaInfo = obtenerGaleria(contenedor, subcontenedor);
    const imagen = galeriaInfo.imagenes[indice];
    
    const modalHTML = `
        <div id="modal-imagen" style="
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            background: rgba(0, 0, 0, 0.95); z-index: 10000; display: flex; 
            align-items: center; justify-content: center; padding: 20px;
        ">
            <div style="max-width: 90%; max-height: 90%; position: relative;">
                <button onclick="cerrarModal()" style="
                    position: absolute; top: -40px; right: 0; background: #FF6B6B; 
                    color: white; border: none; padding: 10px 15px; border-radius: 5px; 
                    cursor: pointer; font-weight: bold;
                ">✖ Cerrar</button>
                
                <img src="${imagen.url}" alt="${imagen.descripcion}" 
                     style="max-width: 100%; max-height: 80vh; border-radius: 10px;">
                
                <div style="background: rgba(30, 30, 40, 0.9); border-radius: 10px; padding: 20px; margin-top: 20px;">
                    <h3 style="color: #FFD166; margin: 0 0 10px 0;">${imagen.descripcion}</h3>
                    <p style="margin: 5px 0; opacity: 0.8;">Autor: ${imagen.autor || 'Desconocido'}</p>
                    <p style="margin: 5px 0; opacity: 0.8;">Fecha: ${imagen.fecha || 'N/A'}</p>
                    <p style="margin: 5px 0; opacity: 0.8;">Galería: ${galeriaInfo.titulo}</p>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                    <button onclick="cambiarImagen(${contenedor}, ${subcontenedor}, ${indice}, -1)" 
                            ${indice === 0 ? 'disabled style="opacity: 0.5;"' : ''}
                            style="background: #5864F5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                        ← Anterior
                    </button>
                    <span style="color: white; align-self: center;">
                        ${indice + 1} / ${galeriaInfo.totalImagenes}
                    </span>
                    <button onclick="cambiarImagen(${contenedor}, ${subcontenedor}, ${indice}, 1)" 
                            ${indice === galeriaInfo.totalImagenes - 1 ? 'disabled style="opacity: 0.5;"' : ''}
                            style="background: #5864F5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                        Siguiente →
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Cambiar imagen en el modal
function cambiarImagen(contenedor, subcontenedor, indiceActual, direccion) {
    const nuevoIndice = indiceActual + direccion;
    const galeriaInfo = obtenerGaleria(contenedor, subcontenedor);
    
    if (nuevoIndice >= 0 && nuevoIndice < galeriaInfo.totalImagenes) {
        cerrarModal();
        setTimeout(() => ampliarImagen(contenedor, subcontenedor, nuevoIndice), 50);
    }
}

// Cerrar modal
function cerrarModal() {
    const modal = document.getElementById('modal-imagen');
    if (modal) {
        modal.remove();
    }
}

// ====================
// 5. FUNCIONES DE EDICIÓN (para personalizar nombres)
// ====================

// Editar nombre de contenedor
function editarNombreContenedorGaleria(numero, nuevoNombre, nuevaDescripcion) {
    if (galeriaDescriptiva.contenedores[numero]) {
        galeriaDescriptiva.contenedores[numero].nombre = nuevoNombre;
        galeriaDescriptiva.contenedores[numero].descripcion = nuevaDescripcion || galeriaDescriptiva.contenedores[numero].descripcion;
        return true;
    }
    return false;
}

// Editar nombre de sub-contenedor
function editarNombreSubcontenedorGaleria(contenedor, subcontenedor, nuevoNombre, nuevaDescripcion) {
    const key = `${contenedor}_${subcontenedor}`;
    if (galeriaDescriptiva.subcontenedores[key]) {
        galeriaDescriptiva.subcontenedores[key].nombre = nuevoNombre;
        galeriaDescriptiva.subcontenedores[key].descripcion = nuevaDescripcion || galeriaDescriptiva.subcontenedores[key].descripcion;
        return true;
    }
    return false;
}

// Agregar nueva imagen a una galería
function agregarImagenAGaleria(contenedor, subcontenedor, url, descripcion, autor, fecha) {
    const key = `${contenedor}_${subcontenedor}`;
    
    if (!galeriaDatabase[key]) {
        galeriaDatabase[key] = {
            titulo: `Galería ${contenedor}-${subcontenedor}`,
            imagenes: [],
            descripcion: "Galería personalizada",
            categoria: "Personal",
            totalImagenes: 0,
            portada: url
        };
    }
    
    galeriaDatabase[key].imagenes.push({
        url: url,
        descripcion: descripcion || "Sin descripción",
        autor: autor || "Desconocido",
        fecha: fecha || new Date().getFullYear().toString()
    });
    
    galeriaDatabase[key].totalImagenes = galeriaDatabase[key].imagenes.length;
    
    return true;
}

// ====================
// 6. FUNCIONES AUXILIARES
// ====================

// Función para crear botón de volver (compatible con el sistema)
function crearBotonVolver(funcionClick) {
    const boton = document.createElement('button');
    boton.className = 'btn-atras-especifico';
    boton.innerHTML = '← Volver';
    boton.onclick = funcionClick;
    return boton;
}

// Función para ocultar header (compatible)
function ocultarHeader() {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.especial-section').style.display = 'none';
    document.querySelector('.additional-section').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
}

// Variables globales para compatibilidad
let modoActual = '';
let contenedorActual = null;

// ====================
// 7. INICIALIZACIÓN
// ====================

console.log('✅ Sistema de Galería cargado correctamente');
console.log('🖼️ Funciones disponibles:');
console.log('   - cargarPaginaGaleria()');
console.log('   - editarNombreContenedorGaleria(numero, nombre, descripcion)');
console.log('   - editarNombreSubcontenedorGaleria(contenedor, subcontenedor, nombre, descripcion)');
console.log('   - agregarImagenAGaleria(contenedor, subcontenedor, url, descripcion, autor, fecha)');
