// ================================================
// SISTEMA COMPLETO DE GALERÍA CON 3 NIVELES JERÁRQUICOS
// ================================================

// ============ VARIABLES GLOBALES ============
let modoAdmin = false;
let editandoContenedor = null;
let editandoSubContenedor = null;
let editandoSubSubContenedor = null;

// ============ NIVEL 1: 10 CONTENEDORES PRINCIPALES ============
let contenedoresGaleria = {
    1: {
        nombre: "Quintillizas putas de re mierda hijas de puta culonas tetoas",
        imagen: "https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small",
        descripcion: "Rico orto rosado rica conch rosada tetas ricas",
        categoria: "La puta de fabrizio"
    },
    2: {
        nombre: "Kana mi hija putita",
        imagen: "https://pbs.twimg.com/media/G7fxVIUXsAA2Eom?format=png&name=900x900",
        descripcion: "MI hija actriz saco la puteria de su madre Nino",
        categoria: "Nuestra hija putita"
    },
    3: {
        nombre: "GALERÍA 3",
        imagen: "https://images.unsplash.com/photo-1543857778-c4a1a569e388",
        descripcion: "Galería especial de paisajes",
        categoria: "Paisajes"
    },
    4: {
        nombre: "GALERÍA 4",
        imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
        descripcion: "Arte y fotografía creativa",
        categoria: "Arte"
    },
    5: {
        nombre: "GALERÍA 5",
        imagen: "https://images.unsplash.com/photo-1518834103328-371bb64201b4",
        descripcion: "Galería miscelánea",
        categoria: "Miscelánea"
    },
    6: {
        nombre: "GALERÍA 6",
        imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        descripcion: "Galería adicional",
        categoria: "General"
    },
    7: {
        nombre: "GALERÍA 7",
        imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        descripcion: "Galería adicional",
        categoria: "General"
    },
    8: {
        nombre: "GALERÍA 8",
        imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        descripcion: "Galería adicional",
        categoria: "General"
    },
    9: {
        nombre: "GALERÍA 9",
        imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        descripcion: "Galería adicional",
        categoria: "General"
    },
    10: {
        nombre: "GALERÍA 10",
        imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        descripcion: "Galería adicional",
        categoria: "General"
    }
};

// ============ NIVEL 2: 5 SUB-CONTENEDORES por cada contenedor ============
let subContenedoresDatabase = {
    // CONTENEDOR 1
    '1': {
        1: {
            nombre: "Nino mi novia putona",
            descripcion: "Nino mi novia puta culona tetona putona buen culo",
            categoria: "MI puta novia",
            imagen: "https://pbs.twimg.com/media/G7fsiFCXQAAhtKq?format=png&name=900x900"
        },
        2: {
            nombre: "Sub-Contenedor 2",
            descripcion: "Descripción del sub-contenedor 2",
            categoria: "Categoría 2",
            imagen: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9"
        },
        3: {
            nombre: "Sub-Contenedor 3",
            descripcion: "Descripción del sub-contenedor 3",
            categoria: "Categoría 3",
            imagen: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90"
        },
        4: {
            nombre: "Sub-Contenedor 4",
            descripcion: "Descripción del sub-contenedor 4",
            categoria: "Categoría 4",
            imagen: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
        },
        5: {
            nombre: "Sub-Contenedor 5",
            descripcion: "Descripción del sub-contenedor 5",
            categoria: "Categoría 5",
            imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af2176"
        }
    },
    
    // CONTENEDOR 2
    '2': {
        1: {
            nombre: "Kaz mi hija zorrra",
            descripcion: "Heredo la puteria de su madre",
            categoria: "Nuestra hija",
            imagen: "https://pbs.twimg.com/media/G7fxREHW0AAxf0_?format=png&name=900x900"
        },
        2: {
            nombre: "Sub-Contenedor 2",
            descripcion: "Descripción del sub-contenedor 2",
            categoria: "Categoría 2",
            imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        },
        3: {
            nombre: "Sub-Contenedor 3",
            descripcion: "Descripción del sub-contenedor 3",
            categoria: "Categoría 3",
            imagen: "https://images.unsplash.com/photo-1494790108755-2616b612b786"
        },
        4: {
            nombre: "Sub-Contenedor 4",
            descripcion: "Descripción del sub-contenedor 4",
            categoria: "Categoría 4",
            imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        },
        5: {
            nombre: "Sub-Contenedor 5",
            descripcion: "Descripción del sub-contenedor 5",
            categoria: "Categoría 5",
            imagen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
        }
    },
    
    // CONTENEDORES 3-10 (estructura básica)
    '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}, '10': {}
};

// ============ NIVEL 3: 10 SUB-SUB-CONTENEDORES por cada sub-contenedor ============
let subSubContenedoresDatabase = {
    // CONTENEDOR 1, SUB-CONTENEDOR 1
    '1_1': {
        1: {
            nombre: "En el parque",
            descripcion: "Nino disfrutando del parque",
            categoria: "Exteriores",
            imagen: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
            imagenes: [
                { id: 1, url: "https://pbs.twimg.com/media/GrNWikuWsAAVYtt?format=jpg&name=4096x4096" },
                { id: 2, url: "https://pbs.twimg.com/media/G22_08VWUAABii4?format=jpg&name=medium" }
            ]
        },
        2: {
            nombre: "En la playa",
            descripcion: "Nino en la playa",
            categoria: "Playa",
            imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            imagenes: [
                { id: 1, url: "https://pbs.twimg.com/media/G7wgF7aW4AAYsOQ?format=jpg&name=large" },
                { id: 2, url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small" }
            ]
        },
        3: {
            nombre: "En casa",
            descripcion: "Nino en casa",
            categoria: "Interiores",
            imagen: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
            imagenes: [
                { id: 1, url: "https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large" }
            ]
        },
        4: {
            nombre: "De fiesta",
            descripcion: "Nino de fiesta",
            categoria: "Noche",
            imagen: "https://images.unsplash.com/photo-1519677100203-3f3d5bd6964a",
            imagenes: []
        },
        5: {
            nombre: "Cocinando",
            descripcion: "Nino cocinando",
            categoria: "Cocina",
            imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
            imagenes: []
        },
        6: {
            nombre: "En la cama",
            descripcion: "Nino descansando",
            categoria: "Dormitorio",
            imagen: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
            imagenes: []
        },
        7: {
            nombre: "Estudiando",
            descripcion: "Nino estudiando",
            categoria: "Estudio",
            imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
            imagenes: []
        },
        8: {
            nombre: "Ejercicio",
            descripcion: "Nino haciendo ejercicio",
            categoria: "Deporte",
            imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
            imagenes: []
        },
        9: {
            nombre: "De compras",
            descripcion: "Nino comprando",
            categoria: "Compras",
            imagen: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
            imagenes: []
        },
        10: {
            nombre: "Viajando",
            descripcion: "Nino viajando",
            categoria: "Viajes",
            imagen: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
            imagenes: []
        }
    },
    
    // CONTENEDOR 1, SUB-CONTENEDOR 2
    '1_2': {
        1: { nombre: "Sitio 1", descripcion: "Descripción 1", categoria: "Cat 1", imagen: "", imagenes: [] },
        2: { nombre: "Sitio 2", descripcion: "Descripción 2", categoria: "Cat 2", imagen: "", imagenes: [] },
        3: { nombre: "Sitio 3", descripcion: "Descripción 3", categoria: "Cat 3", imagen: "", imagenes: [] },
        4: { nombre: "Sitio 4", descripcion: "Descripción 4", categoria: "Cat 4", imagen: "", imagenes: [] },
        5: { nombre: "Sitio 5", descripcion: "Descripción 5", categoria: "Cat 5", imagen: "", imagenes: [] },
        6: { nombre: "Sitio 6", descripcion: "Descripción 6", categoria: "Cat 6", imagen: "", imagenes: [] },
        7: { nombre: "Sitio 7", descripcion: "Descripción 7", categoria: "Cat 7", imagen: "", imagenes: [] },
        8: { nombre: "Sitio 8", descripcion: "Descripción 8", categoria: "Cat 8", imagen: "", imagenes: [] },
        9: { nombre: "Sitio 9", descripcion: "Descripción 9", categoria: "Cat 9", imagen: "", imagenes: [] },
        10: { nombre: "Sitio 10", descripcion: "Descripción 10", categoria: "Cat 10", imagen: "", imagenes: [] }
    }
};

// ================================================
// FUNCIONES DE ACCESO A DATOS
// ================================================

// Obtener contenedor principal
function obtenerContenedor(numero) {
    return contenedoresGaleria[numero] || {
        nombre: `GALERÍA ${numero}`,
        imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        descripcion: 'Descripción del contenedor',
        categoria: 'General'
    };
}

// Obtener sub-contenedor
function obtenerSubContenedor(contenedor, subContenedor) {
    if (!subContenedoresDatabase[contenedor]) {
        subContenedoresDatabase[contenedor] = {};
    }
    
    return subContenedoresDatabase[contenedor][subContenedor] || {
        nombre: `Sub-Contenedor ${subContenedor}`,
        descripcion: 'Descripción del sub-contenedor',
        categoria: 'General',
        imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop'
    };
}

// Obtener sub-sub-contenedor
function obtenerSubSubContenedor(contenedor, subContenedor, subSubContenedor) {
    const key = `${contenedor}_${subContenedor}`;
    
    if (!subSubContenedoresDatabase[key]) {
        subSubContenedoresDatabase[key] = {};
    }
    
    return subSubContenedoresDatabase[key][subSubContenedor] || {
        nombre: `Sub-Sub-Contenedor ${subSubContenedor}`,
        descripcion: 'Descripción del sub-sub-contenedor',
        categoria: 'General',
        imagen: '',
        imagenes: []
    };
}

// ================================================
// FUNCIONES PARA LA INTERFAZ DE USUARIO
// ================================================

let contenedorActual = null;
let subContenedorActual = null;
let subSubContenedorActual = null;

// 1. Cargar página principal con 10 contenedores
function cargarPaginaGaleria() {
    modoActual = 'galeria';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    
    let html = '<div style="padding: 20px;">';
    html += '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🖼️ GALERÍAS PRINCIPALES</h2>';
    
    // Botón modo admin
    html += `
        <div style="text-align: right; margin-bottom: 20px;">
            <button onclick="toggleModoAdmin()" style="background: ${modoAdmin ? '#FF1493' : '#5864F5'}; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer;">
                ${modoAdmin ? '🔐 Salir del Modo Admin' : '⚙️ Modo Admin'}
            </button>
        </div>
    `;
    
    html += '<div class="manga-contenedores">';
    
    for (let i = 1; i <= 10; i++) {
        const contenedorData = obtenerContenedor(i);
        
        html += `
            <div class="contenedor-item" onclick="cargarSubContenedores(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen}')"></div>
                <div class="contenedor-numero">${contenedorData.nombre}</div>
                <p>${contenedorData.descripcion}</p>
                
                ${modoAdmin ? `
                    <div style="margin-top: 10px; display: flex; gap: 10px; justify-content: center;">
                        <button onclick="event.stopPropagation(); editarContenedor(${i})" style="background: #FFD166; color: black; border: none; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; cursor: pointer;">
                            ✏️ Editar
                        </button>
                        <button onclick="event.stopPropagation(); eliminarContenedor(${i})" style="background: #FF6B6B; color: white; border: none; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; cursor: pointer;">
                            🗑️ Eliminar
                        </button>
                    </div>
                ` : ''}
                
                <div class="card-button" style="background: linear-gradient(135deg, #FF1493, #FF69B4);">
                    Ver Sub-Contenedores
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    
    // Botón para agregar nuevo contenedor (solo en modo admin)
    if (modoAdmin) {
        html += `
            <div style="text-align: center; margin-top: 30px;">
                <button onclick="agregarNuevoContenedor()" style="background: #4CAF50; color: white; border: none; padding: 12px 25px; border-radius: 25px; font-size: 1rem; cursor: pointer; display: inline-flex; align-items: center; gap: 10px;">
                    ➕ Agregar Nuevo Contenedor
                </button>
            </div>
        `;
    }
    
    html += '</div>';
    
    mangaSection.innerHTML = html;
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// 2. Cargar 5 sub-contenedores dentro de un contenedor
function cargarSubContenedores(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'galeria';
    
    const mangaSection = document.getElementById('manga-section');
    
    let html = '<div style="padding: 20px;">';
    const contenedorData = obtenerContenedor(contenedor);
    
    html += `<h2 style="text-align: center; margin-bottom: 20px; color: #FFD166;">${contenedorData.nombre}</h2>`;
    html += `<p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">${contenedorData.descripcion}</p>`;
    
    html += '<div class="subcontenedores-grid">';
    
    for (let i = 1; i <= 5; i++) {
        const subData = obtenerSubContenedor(contenedor, i);
        const tieneSubSub = verificarSiTieneSubSubContenedores(contenedor, i);
        
        html += `
            <div class="subcontenedor-item" onclick="cargarSubSubContenedores(${contenedor}, ${i})">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen}')"></div>
                <h3>${subData.nombre}</h3>
                <p>${subData.descripcion}</p>
                
                ${modoAdmin ? `
                    <div style="margin-top: 10px; display: flex; gap: 10px; justify-content: center;">
                        <button onclick="event.stopPropagation(); editarSubContenedor(${contenedor}, ${i})" style="background: #FFD166; color: black; border: none; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; cursor: pointer;">
                            ✏️ Editar
                        </button>
                        <button onclick="event.stopPropagation(); eliminarSubContenedor(${contenedor}, ${i})" style="background: #FF6B6B; color: white; border: none; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; cursor: pointer;">
                            🗑️ Eliminar
                        </button>
                    </div>
                ` : ''}
                
                <div class="card-button" style="margin-top: 10px; background: linear-gradient(135deg, #5864F5, #8A2BE2);">
                    ${tieneSubSub ? '🔽 Ver Situaciones' : '➕ Crear Situaciones'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    
    // Botón para agregar nuevo sub-contenedor (solo en modo admin)
    if (modoAdmin) {
        html += `
            <div style="text-align: center; margin-top: 30px;">
                <button onclick="agregarNuevoSubContenedor(${contenedor})" style="background: #4CAF50; color: white; border: none; padding: 12px 25px; border-radius: 25px; font-size: 1rem; cursor: pointer; display: inline-flex; align-items: center; gap: 10px;">
                    ➕ Agregar Sub-Contenedor
                </button>
            </div>
        `;
    }
    
    html += '</div>';
    
    mangaSection.innerHTML = html;
    
    const botonVolver = crearBotonVolver(cargarPaginaGaleria);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// 3. Cargar 10 sub-sub-contenedores dentro de un sub-contenedor
function cargarSubSubContenedores(contenedor, subContenedor) {
    contenedorActual = contenedor;
    subContenedorActual = subContenedor;
    
    const mangaSection = document.getElementById('manga-section');
    const contenedorData = obtenerContenedor(contenedor);
    const subData = obtenerSubContenedor(contenedor, subContenedor);
    
    let html = '<div style="padding: 20px;">';
    
    html += `
        <h2 style="text-align: center; margin-bottom: 10px; color: #FFD166;">
            ${contenedorData.nombre} → ${subData.nombre}
        </h2>
        <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">${subData.descripcion}</p>
    `;
    
    html += '<div class="subsubcontenedores-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">';
    
    for (let i = 1; i <= 10; i++) {
        const subSubData = obtenerSubSubContenedor(contenedor, subContenedor, i);
        const tieneImagenes = subSubData.imagenes && subSubData.imagenes.length > 0;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneImagenes ? `cargarGaleriaImagenes(${contenedor}, ${subContenedor}, ${i})` : `alert('Esta galería no tiene imágenes. ${modoAdmin ? 'Abre el modo admin para agregar imágenes.' : ''}')`}" style="cursor: pointer;">
                <div class="subcontenedor-img" style="background-image: url('${subSubData.imagen || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'}')"></div>
                <h3>${i}. ${subSubData.nombre}</h3>
                <p>${subSubData.descripcion}</p>
                <p style="font-size: 0.9rem; color: ${tieneImagenes ? '#4CAF50' : '#FF6B6B'}">
                    ${tieneImagenes ? `📸 ${subSubData.imagenes.length} imágenes` : '🔄 Sin imágenes'}
                </p>
                
                ${modoAdmin ? `
                    <div style="margin-top: 10px; display: flex; gap: 10px; justify-content: center;">
                        <button onclick="event.stopPropagation(); editarSubSubContenedor(${contenedor}, ${subContenedor}, ${i})" style="background: #FFD166; color: black; border: none; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; cursor: pointer;">
                            ✏️ Editar
                        </button>
                        <button onclick="event.stopPropagation(); gestionarImagenes(${contenedor}, ${subContenedor}, ${i})" style="background: #5864F5; color: white; border: none; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; cursor: pointer;">
                            🖼️ Imágenes
                        </button>
                        <button onclick="event.stopPropagation(); eliminarSubSubContenedor(${contenedor}, ${subContenedor}, ${i})" style="background: #FF6B6B; color: white; border: none; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; cursor: pointer;">
                            🗑️ Eliminar
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    html += '</div>';
    
    // Botón para agregar nuevo sub-sub-contenedor (solo en modo admin)
    if (modoAdmin) {
        html += `
            <div style="text-align: center; margin-top: 30px;">
                <button onclick="agregarNuevoSubSubContenedor(${contenedor}, ${subContenedor})" style="background: #4CAF50; color: white; border: none; padding: 12px 25px; border-radius: 25px; font-size: 1rem; cursor: pointer; display: inline-flex; align-items: center; gap: 10px;">
                    ➕ Agregar Nueva Situación
                </button>
            </div>
        `;
    }
    
    html += '</div>';
    
    mangaSection.innerHTML = html;
    
    const botonVolver = crearBotonVolver(() => cargarSubContenedores(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// 4. Cargar galería de imágenes dentro de un sub-sub-contenedor
function cargarGaleriaImagenes(contenedor, subContenedor, subSubContenedor) {
    contenedorActual = contenedor;
    subContenedorActual = subContenedor;
    subSubContenedorActual = subSubContenedor;
    
    const subSubData = obtenerSubSubContenedor(contenedor, subContenedor, subSubContenedor);
    
    if (!subSubData.imagenes || subSubData.imagenes.length === 0) {
        alert('No hay imágenes en esta galería');
        return;
    }
    
    // Usar la función existente para mostrar la galería
    const galeriaInfo = {
        titulo: subSubData.nombre,
        descripcion: subSubData.descripcion,
        categoria: subSubData.categoria,
        imagenes: subSubData.imagenes
    };
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearGaleriaUI(galeriaInfo);
    
    const botonVolver = crearBotonVolver(() => cargarSubSubContenedores(contenedor, subContenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// ================================================
// FUNCIONES DE ADMINISTRACIÓN
// ================================================

function toggleModoAdmin() {
    modoAdmin = !modoAdmin;
    
    // Recargar la vista actual
    if (contenedorActual && subContenedorActual && subSubContenedorActual) {
        cargarSubSubContenedores(contenedorActual, subContenedorActual);
    } else if (contenedorActual && subContenedorActual) {
        cargarSubContenedores(contenedorActual);
    } else if (contenedorActual) {
        cargarSubContenedores(contenedorActual);
    } else {
        cargarPaginaGaleria();
    }
}

function verificarSiTieneSubSubContenedores(contenedor, subContenedor) {
    const key = `${contenedor}_${subContenedor}`;
    return subSubContenedoresDatabase[key] && Object.keys(subSubContenedoresDatabase[key]).length > 0;
}

// Funciones para agregar
function agregarNuevoContenedor() {
    const nuevoId = Object.keys(contenedoresGaleria).length + 1;
    
    contenedoresGaleria[nuevoId] = {
        nombre: `Nuevo Contenedor ${nuevoId}`,
        imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
        descripcion: 'Descripción del nuevo contenedor',
        categoria: 'Nuevo'
    };
    
    subContenedoresDatabase[nuevoId] = {};
    
    alert(`✅ Contenedor ${nuevoId} creado`);
    cargarPaginaGaleria();
}

function agregarNuevoSubContenedor(contenedor) {
    if (!subContenedoresDatabase[contenedor]) {
        subContenedoresDatabase[contenedor] = {};
    }
    
    const nuevoId = Object.keys(subContenedoresDatabase[contenedor]).length + 1;
    if (nuevoId > 5) {
        alert('❌ Máximo 5 sub-contenedores por contenedor');
        return;
    }
    
    subContenedoresDatabase[contenedor][nuevoId] = {
        nombre: `Nuevo Sub-Contenedor ${nuevoId}`,
        descripcion: 'Descripción del nuevo sub-contenedor',
        categoria: 'Nuevo',
        imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'
    };
    
    alert(`✅ Sub-Contenedor ${nuevoId} creado en Contenedor ${contenedor}`);
    cargarSubContenedores(contenedor);
}

function agregarNuevoSubSubContenedor(contenedor, subContenedor) {
    const key = `${contenedor}_${subContenedor}`;
    
    if (!subSubContenedoresDatabase[key]) {
        subSubContenedoresDatabase[key] = {};
    }
    
    const nuevoId = Object.keys(subSubContenedoresDatabase[key]).length + 1;
    if (nuevoId > 10) {
        alert('❌ Máximo 10 situaciones por sub-contenedor');
        return;
    }
    
    subSubContenedoresDatabase[key][nuevoId] = {
        nombre: `Nueva Situación ${nuevoId}`,
        descripcion: 'Descripción de la nueva situación',
        categoria: 'Nueva',
        imagen: '',
        imagenes: []
    };
    
    alert(`✅ Situación ${nuevoId} creada`);
    cargarSubSubContenedores(contenedor, subContenedor);
}

// Funciones para editar
function editarContenedor(id) {
    const contenedor = contenedoresGaleria[id];
    const nuevoNombre = prompt('Nuevo nombre:', contenedor.nombre);
    if (nuevoNombre) {
        const nuevaDesc = prompt('Nueva descripción:', contenedor.descripcion);
        const nuevaCategoria = prompt('Nueva categoría:', contenedor.categoria);
        const nuevaImagen = prompt('Nueva URL de imagen:', contenedor.imagen);
        
        contenedoresGaleria[id] = {
            ...contenedor,
            nombre: nuevoNombre,
            descripcion: nuevaDesc,
            categoria: nuevaCategoria,
            imagen: nuevaImagen || contenedor.imagen
        };
        
        cargarPaginaGaleria();
    }
}

function editarSubContenedor(contenedor, subContenedor) {
    const subData = obtenerSubContenedor(contenedor, subContenedor);
    const nuevoNombre = prompt('Nuevo nombre:', subData.nombre);
    
    if (nuevoNombre) {
        const nuevaDesc = prompt('Nueva descripción:', subData.descripcion);
        const nuevaCategoria = prompt('Nueva categoría:', subData.categoria);
        const nuevaImagen = prompt('Nueva URL de imagen:', subData.imagen);
        
        subContenedoresDatabase[contenedor][subContenedor] = {
            ...subData,
            nombre: nuevoNombre,
            descripcion: nuevaDesc,
            categoria: nuevaCategoria,
            imagen: nuevaImagen || subData.imagen
        };
        
        cargarSubContenedores(contenedor);
    }
}

function editarSubSubContenedor(contenedor, subContenedor, subSubContenedor) {
    const key = `${contenedor}_${subContenedor}`;
    const subSubData = obtenerSubSubContenedor(contenedor, subContenedor, subSubContenedor);
    
    const nuevoNombre = prompt('Nuevo nombre:', subSubData.nombre);
    if (nuevoNombre) {
        const nuevaDesc = prompt('Nueva descripción:', subSubData.descripcion);
        const nuevaCategoria = prompt('Nueva categoría:', subSubData.categoria);
        const nuevaImagen = prompt('Nueva URL de imagen:', subSubData.imagen);
        
        subSubContenedoresDatabase[key][subSubContenedor] = {
            ...subSubData,
            nombre: nuevoNombre,
            descripcion: nuevaDesc,
            categoria: nuevaCategoria,
            imagen: nuevaImagen || subSubData.imagen
        };
        
        cargarSubSubContenedores(contenedor, subContenedor);
    }
}

// Función para gestionar imágenes
function gestionarImagenes(contenedor, subContenedor, subSubContenedor) {
    const key = `${contenedor}_${subContenedor}`;
    const subSubData = obtenerSubSubContenedor(contenedor, subContenedor, subSubContenedor);
    
    let html = `
        <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h2 style="color: #FFD166;">🖼️ Gestionar Imágenes</h2>
            <p style="opacity: 0.8; margin-bottom: 20px;">${subSubData.nombre}</p>
            
            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3 style="color: #FFD166; margin-bottom: 10px;">Imágenes Actuales (${subSubData.imagenes.length})</h3>
    `;
    
    if (subSubData.imagenes.length === 0) {
        html += '<p style="color: #FF6B6B;">No hay imágenes en esta galería</p>';
    } else {
        html += '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">';
        
        subSubData.imagenes.forEach((img, index) => {
            html += `
                <div style="border: 1px solid #444; border-radius: 5px; overflow: hidden;">
                    <img src="${img.url}" style="width: 100%; height: 100px; object-fit: cover;">
                    <div style="padding: 5px; text-align: center;">
                        <button onclick="eliminarImagen(${contenedor}, ${subContenedor}, ${subSubContenedor}, ${index})" style="background: #FF6B6B; color: white; border: none; padding: 3px 8px; border-radius: 3px; font-size: 0.8rem; cursor: pointer; margin-top: 5px;">
                            Eliminar
                        </button>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
    }
    
    html += `
            </div>
            
            <div style="background: rgba(88, 100, 245, 0.1); padding: 20px; border-radius: 10px;">
                <h3 style="color: #FFD166; margin-bottom: 10px;">Agregar Nueva Imagen</h3>
                <div style="display: flex; gap: 10px;">
                    <input type="text" id="urlImagenNueva" placeholder="URL de la imagen" style="flex: 1; padding: 10px; border-radius: 5px; border: 1px solid #444; background: #222; color: white;">
                    <button onclick="agregarImagen(${contenedor}, ${subContenedor}, ${subSubContenedor})" style="background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                        ➕ Agregar
                    </button>
                </div>
                <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 10px;">Ejemplo: https://pbs.twimg.com/media/XXXXX.jpg</p>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <button onclick="cargarSubSubContenedores(${contenedor}, ${subContenedor})" style="background: #FF1493; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                    ← Volver
                </button>
            </div>
        </div>
    `;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = html;
}

function agregarImagen(contenedor, subContenedor, subSubContenedor) {
    const urlInput = document.getElementById('urlImagenNueva');
    const url = urlInput.value.trim();
    
    if (!url) {
        alert('Por favor ingresa una URL');
        return;
    }
    
    const key = `${contenedor}_${subContenedor}`;
    const subSubData = subSubContenedoresDatabase[key][subSubContenedor];
    
    if (!subSubData.imagenes) {
        subSubData.imagenes = [];
    }
    
    const nuevoId = subSubData.imagenes.length + 1;
    subSubData.imagenes.push({
        id: nuevoId,
        url: url
    });
    
    alert('✅ Imagen agregada correctamente');
    urlInput.value = '';
    
    // Actualizar la vista
    gestionarImagenes(contenedor, subContenedor, subSubContenedor);
}

function eliminarImagen(contenedor, subContenedor, subSubContenedor, index) {
    if (confirm('¿Eliminar esta imagen?')) {
        const key = `${contenedor}_${subContenedor}`;
        subSubContenedoresDatabase[key][subSubContenedor].imagenes.splice(index, 1);
        
        // Reindexar IDs
        subSubContenedoresDatabase[key][subSubContenedor].imagenes.forEach((img, i) => {
            img.id = i + 1;
        });
        
        gestionarImagenes(contenedor, subContenedor, subSubContenedor);
    }
}

// Funciones para eliminar
function eliminarContenedor(id) {
    if (confirm(`¿Eliminar el contenedor "${contenedoresGaleria[id].nombre}"? Esto eliminará TODOS sus sub-contenedores e imágenes.`)) {
        delete contenedoresGaleria[id];
        delete subContenedoresDatabase[id];
        
        // Eliminar también de subSubContenedoresDatabase
        Object.keys(subSubContenedoresDatabase).forEach(key => {
            if (key.startsWith(`${id}_`)) {
                delete subSubContenedoresDatabase[key];
            }
        });
        
        cargarPaginaGaleria();
    }
}

function eliminarSubContenedor(contenedor, subContenedor) {
    const subData = obtenerSubContenedor(contenedor, subContenedor);
    
    if (confirm(`¿Eliminar el sub-contenedor "${subData.nombre}"?`)) {
        delete subContenedoresDatabase[contenedor][subContenedor];
        
        // Eliminar también sus sub-sub-contenedores
        const key = `${contenedor}_${subContenedor}`;
        delete subSubContenedoresDatabase[key];
        
        cargarSubContenedores(contenedor);
    }
}

function eliminarSubSubContenedor(contenedor, subContenedor, subSubContenedor) {
    const key = `${contenedor}_${subContenedor}`;
    const subSubData = obtenerSubSubContenedor(contenedor, subContenedor, subSubContenedor);
    
    if (confirm(`¿Eliminar la situación "${subSubData.nombre}"?`)) {
        delete subSubContenedoresDatabase[key][subSubContenedor];
        cargarSubSubContenedores(contenedor, subContenedor);
    }
}

// ================================================
// INICIALIZACIÓN
// ================================================

console.log('🖼️ Sistema de Galería 3 Niveles cargado correctamente');
console.log('📦 Contenedores principales: ' + Object.keys(contenedoresGaleria).length);
console.log('📁 Sub-contenedores: ' + Object.keys(subContenedoresDatabase).length);
console.log('📸 Situaciones (sub-sub-contenedores): ' + Object.keys(subSubContenedoresDatabase).length);

// Nota: Las funciones crearGaleriaUI, mostrarImagenGrande, cerrarVisor, imagenAnterior, imagenSiguiente
// se mantienen igual que en tu código original, solo se adaptan para usar la nueva estructura
