// ================================================
// SISTEMA COMPLETO DE GALERÍA DE IMÁGENES
// ================================================

// ============ CONTENEDORES DE GALERÍA ============
const contenedoresGaleria = {
    1: {
        nombre: "Quintillizas putas de re mierda hijas de puta culonas tetoas buenos ortos buenas conchas buenas tetas buenas curvas",
        imagen: "https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small",
        descripcion: "Rico orto rosado rica conch rosada tetas ricas",
        categoria: "La puta de fabrizio"
    },
    2: {
        nombre: "Kana mi hija putita ",
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
    }
};

// ============ SUB-CONTENEDORES DE GALERÍA ============
const galeriaDatabase = {
    // CONTENEDOR 1
    '1_1': {
        titulo: "Nino mi novia putona ",
        descripcion: "Nino mi novia puta culona tetona putona buen culo buen  orto buena concha orto y conchas rosada buenas curvas mi putita putona ",
        categoria: "MI puta novia culonatetona buen culo",
        imagen: "https://pbs.twimg.com/media/G7fsiFCXQAAhtKq?format=png&name=900x900",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/GrNWikuWsAAVYtt?format=jpg&name=4096x4096" },
            { id: 2, url: "https://pbs.twimg.com/media/G22_08VWUAABii4?format=jpg&name=medium" },
            { id: 3, url: "https://pbs.twimg.com/media/G7wgF7aW4AAYsOQ?format=jpg&name=large" },
            { id: 4, url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small" },
            { id: 5, url: "https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large" }
        ]
    },
    
    '1_2': {
        titulo: "Galería de Arte",
        descripcion: "Imágenes artísticas variadas",
        categoria: "Arte",
        imagen: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
        imagenes: [
            { id: 1, url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9" },
            { id: 2, url: "https://images.unsplash.com/photo-1528164344705-47542687000d" },
            { id: 3, url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e" },
            { id: 4, url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" },
            { id: 5, url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989" }
        ]
    },
    
    '1_3': {
        titulo: "Arquitectura Moderna",
        descripcion: "Edificios y estructuras contemporáneas",
        categoria: "Arquitectura",
        imagen: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90",
        imagenes: [
            { id: 1, url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90" },
            { id: 2, url: "https://images.unsplash.com/photo-1487956382158-bb926046304a" },
            { id: 3, url: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2" },
            { id: 4, url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
            { id: 5, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4" }
        ]
    },
    
    '1_4': {
        titulo: "Naturaleza y Paisajes",
        descripcion: "Fotografías de paisajes naturales",
        categoria: "Naturaleza",
        imagen: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        imagenes: [
            { id: 1, url: "https://images.unsplash.com/photo-1501854140801-50d01698950b" },
            { id: 2, url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d" },
            { id: 3, url: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5" },
            { id: 4, url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" },
            { id: 5, url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" }
        ]
    },
    
    '1_5': {
        titulo: "Galería Tecnológica",
        descripcion: "Tecnología y dispositivos modernos",
        categoria: "Tecnología",
        imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
        imagenes: [
            { id: 1, url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176" },
            { id: 2, url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
            { id: 3, url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0" },
            { id: 4, url: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd" },
            { id: 5, url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f" }
        ]
    },
    
    // CONTENEDOR 2
    '2_1': {
        titulo: "Kaz mi hija zorrra",
        descripcion: "Heredo la puteria de sumadre  y ",
        categoria: "Abstracto",
        imagen: "https://pbs.twimg.com/media/G7fxREHW0AAxf0_?format=png&name=900x900",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/G7fxbA5WsAAMcky?format=png&name=900x900" },
            { id: 2, url: "https://pbs.twimg.com/media/G7fxREHW0AAxf0_?format=png&name=900x900" },
            { id: 3, url: "https://images.unsplash.com/photo-1543857778-c4a1a569e388" },
            { id: 4, url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0" },
            { id: 5, url: "https://images.unsplash.com/photo-1518834103328-371bb64201b4" }
        ]
    },
    
    '2_2': {
        titulo: "Retratos Artísticos",
        descripcion: "Fotografía de retrato creativa",
        categoria: "Retrato",
        imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        imagenes: [
            { id: 1, url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
            { id: 2, url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
            { id: 3, url: "https://images.unsplash.com/photo-1494790108755-2616b612b786" },
            { id: 4, url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
            { id: 5, url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb" }
        ]
    }
};

// ================================================
// FUNCIONES DE ACCESO A CONTENEDORES
// ================================================

function obtenerContenedorGaleria(numero) {
    return contenedoresGaleria[numero] || {
        nombre: `GALERÍA ${numero}`,
        imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        descripcion: '5 sub-contenedores con galerías de imágenes',
        categoria: 'General'
    };
}

function obtenerSubcontenedorGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDatabase[key] || {
        titulo: `Galería ${subcontenedor}`,
        descripcion: 'Colección de imágenes',
        categoria: 'General',
        imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w-300&h=300&fit=crop',
        imagenes: []
    };
}

function obtenerContenedoresGaleriaDisponibles() {
    const contenedores = {};
    
    Object.keys(galeriaDatabase).forEach(key => {
        const [contenedor, subcontenedor] = key.split('_');
        if (!contenedores[contenedor]) {
            contenedores[contenedor] = [];
        }
        contenedores[contenedor].push(subcontenedor);
    });
    
    return contenedores;
}

function obtenerGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDatabase[key] || null;
}

function existeGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return !!galeriaDatabase[key];
}

// ================================================
// FUNCIONES PARA LA UI (para usar en main.js)
// ================================================

// 1. Función para cargar la página principal de galerías
function cargarPaginaGaleria() {
    modoActual = 'galeria';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresGaleria();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// 2. Crear UI de contenedores de galería
function crearContenedoresGaleria() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">🖼️ CONTENEDORES DE GALERÍA</h2>';
    html += '<div class="manga-contenedores">';
    
    for (let i = 1; i <= 10; i++) {
        const contenedorData = obtenerContenedorGaleria(i);
        const nombre = contenedorData.nombre || `GALERÍA ${i}`;
        const desc = contenedorData.descripcion || '5 sub-contenedores con imágenes';
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresGaleria(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen}')"></div>
                <div class="contenedor-numero">${nombre}</div>
                <p>${desc}</p>
                <div class="card-button" style="background: linear-gradient(135deg, #FF1493, #FF69B4);">
                    Ver Galerías
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// 3. Cargar subcontenedores de galería
function cargarSubcontenedoresGaleria(contenedor) {
    contenedorActual = contenedor;
    modoActual = 'galeria';
    modoMazoDificil = false;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresGaleriaUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaGaleria);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// 4. Crear UI de subcontenedores
function crearSubcontenedoresGaleriaUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        🖼️ ${obtenerContenedorGaleria(contenedor).nombre} - SUB-GALERÍAS
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresGaleriaDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    for (let i = 1; i <= 5; i++) {
        const tieneGaleria = subcontenedoresDisponibles.includes(i.toString());
        const subData = obtenerSubcontenedorGaleria(contenedor, i);
        const desc = subData.descripcion || (tieneGaleria ? 'Galería disponible' : '(Sin imágenes configuradas)');
        const galeriaInfo = tieneGaleria ? obtenerGaleria(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneGaleria ? `cargarGaleria(${contenedor}, ${i})` : 'alert("Esta galería no tiene imágenes configuradas")'}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen}')"></div>
                <h3>${tieneGaleria ? galeriaInfo.titulo.split(' ')[0] : `Galería ${i}`}</h3>
                ${tieneGaleria ? 
                    `<p><strong>${galeriaInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${galeriaInfo.categoria} • ${galeriaInfo.imagenes.length} imágenes</p>` 
                    : `<p style="color: #FF6B6B;">${desc}</p>`}
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #FF1493, #FF69B4);">
                    ${tieneGaleria ? '🖼️ Ver Galería' : 'Vacío'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// 5. Cargar galería específica
function cargarGaleria(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    
    const galeriaInfo = obtenerGaleria(contenedor, subcontenedor);
    if (!galeriaInfo || !galeriaInfo.imagenes || galeriaInfo.imagenes.length === 0) {
        alert('No hay imágenes disponibles en esta galería');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearGaleriaUI(galeriaInfo);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresGaleria(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// 6. Crear UI de la galería con vista en grande
function crearGaleriaUI(galeriaInfo) {
    let html = `
        <div class="galeria-container" style="max-width: 1200px; margin: 0 auto; padding: 20px;">
            <h2 style="text-align: center; color: #FFD166; margin-bottom: 10px;">${galeriaInfo.titulo}</h2>
            <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">${galeriaInfo.descripcion}</p>
            
            <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 20px; margin-bottom: 30px; border-left: 5px solid #FF1493;">
                <p style="text-align: center; color: #FFD166; font-size: 1.1rem;">
                    🖼️ ${galeriaInfo.imagenes.length} imágenes • Categoría: ${galeriaInfo.categoria}
                </p>
                <p style="text-align: center; opacity: 0.8; margin-top: 10px; font-size: 0.9rem;">
                    Haz clic en cualquier imagen para verla en tamaño completo
                </p>
            </div>
            
            <!-- GALERÍA DE IMÁGENES -->
            <div id="galeria-grid" class="galeria-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">
    `;
    
    // Miniaturas
    galeriaInfo.imagenes.forEach((img, index) => {
        html += `
            <div class="galeria-item" onclick="mostrarImagenGrande(${index})" style="cursor: pointer; overflow: hidden; border-radius: 12px; border: 3px solid rgba(255, 255, 255, 0.1); transition: all 0.3s ease;">
                <img src="${img.url}" alt="Imagen ${img.id}" style="width: 100%; height: 200px; object-fit: cover; transition: transform 0.3s ease;">
                <div style="padding: 10px; text-align: center; background: rgba(0, 0, 0, 0.5);">
                    <p style="color: #FFD166; font-size: 0.9rem;">Imagen ${img.id}</p>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
            
            <!-- VISOR DE IMAGEN GRANDE (OCULTO INICIALMENTE) -->
            <div id="visor-grande" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.95); z-index: 9999; align-items: center; justify-content: center; flex-direction: column;">
                <button onclick="cerrarVisor()" style="position: absolute; top: 20px; right: 20px; background: #FF1493; color: white; border: none; padding: 12px 25px; border-radius: 50px; font-size: 1.1rem; cursor: pointer; z-index: 10001; border: 2px solid white;">
                    ✕ Cerrar
                </button>
                
                <div style="max-width: 90%; max-height: 80%; margin-top: 60px;">
                    <img id="imagen-grande" src="" style="max-width: 100%; max-height: 100%; border-radius: 15px; box-shadow: 0 20px 50px rgba(0,0,0,0.7); border: 5px solid #FF1493;">
                </div>
                
                <div style="margin-top: 30px; display: flex; gap: 20px; align-items: center;">
                    <button onclick="imagenAnterior()" class="control-btn" style="background: #5864F5; padding: 12px 25px; border-radius: 50px; border: none; color: white; font-size: 1rem; cursor: pointer;">
                        ← Anterior
                    </button>
                    
                    <div id="contador-imagen" style="color: #FFD166; font-size: 1.2rem; font-weight: bold; min-width: 100px; text-align: center;">
                        1 / ${galeriaInfo.imagenes.length}
                    </div>
                    
                    <button onclick="imagenSiguiente()" class="control-btn" style="background: #FF1493; padding: 12px 25px; border-radius: 50px; border: none; color: white; font-size: 1rem; cursor: pointer;">
                        Siguiente →
                    </button>
                </div>
            </div>
            
            <style>
                .galeria-item:hover {
                    transform: translateY(-8px) scale(1.05);
                    border-color: #FF1493 !important;
                    box-shadow: 0 15px 30px rgba(255, 20, 147, 0.3) !important;
                }
                
                .galeria-item:hover img {
                    transform: scale(1.1);
                }
            </style>
        </div>
    `;
    
    return html;
}

// ================================================
// FUNCIONES PARA EL VISOR DE IMAGEN GRANDE
// ================================================

let galeriaActual = null;
let indiceImagenActual = 0;

function mostrarImagenGrande(indice) {
    const galeriaInfo = obtenerGaleria(contenedorActual, subcontenedorActual);
    if (!galeriaInfo) return;
    
    galeriaActual = galeriaInfo.imagenes;
    indiceImagenActual = indice;
    
    const visor = document.getElementById('visor-grande');
    const imagenGrande = document.getElementById('imagen-grande');
    const contador = document.getElementById('contador-imagen');
    
    if (visor && imagenGrande && contador) {
        imagenGrande.src = galeriaActual[indice].url;
        contador.textContent = `${indice + 1} / ${galeriaActual.length}`;
        visor.style.display = 'flex';
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
    }
}

function cerrarVisor() {
    const visor = document.getElementById('visor-grande');
    if (visor) {
        visor.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function imagenAnterior() {
    if (!galeriaActual || galeriaActual.length === 0) return;
    
    indiceImagenActual--;
    if (indiceImagenActual < 0) {
        indiceImagenActual = galeriaActual.length - 1;
    }
    
    const imagenGrande = document.getElementById('imagen-grande');
    const contador = document.getElementById('contador-imagen');
    
    if (imagenGrande && contador) {
        imagenGrande.src = galeriaActual[indiceImagenActual].url;
        contador.textContent = `${indiceImagenActual + 1} / ${galeriaActual.length}`;
    }
}

function imagenSiguiente() {
    if (!galeriaActual || galeriaActual.length === 0) return;
    
    indiceImagenActual++;
    if (indiceImagenActual >= galeriaActual.length) {
        indiceImagenActual = 0;
    }
    
    const imagenGrande = document.getElementById('imagen-grande');
    const contador = document.getElementById('contador-imagen');
    
    if (imagenGrande && contador) {
        imagenGrande.src = galeriaActual[indiceImagenActual].url;
        contador.textContent = `${indiceImagenActual + 1} / ${galeriaActual.length}`;
    }
}

// ================================================
// INICIALIZACIÓN
// ================================================

console.log('🖼️ Sistema de Galería cargado correctamente');
console.log('📦 Contenedores disponibles: 5');
console.log('📸 Sub-galerías disponibles: ' + Object.keys(galeriaDatabase).length);
