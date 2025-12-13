
// ================================================
// BASE DE DATOS DE GALERÍA DE IMÁGENES
// CON NOMBRES PERSONALIZADOS PARA CONTENEDORES Y SUBCONTENEDORES
// ================================================

const galeriaDatabase = {
    // ================================================
    // CONTENEDOR 1 - ANIME CLÁSICO
    // ================================================
    
    // Sub-contenedor 1.1
    '1_1': {
        nombre: "Sakura Card Captor",  // NOMBRE PERSONALIZADO
        imagen: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small",
        descripcion: "Imágenes de alta calidad de Sakura Card Captor. Colección oficial del anime clásico.",
        tipo: "anime_clasico",
        año: "1998",
        artista: "CLAMP",
        tags: ["mahou shoujo", "clásico", "magia"],
        imagenes: [
            { url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small", titulo: "Sakura con varita mágica" },
            { url: "https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large", titulo: "Transformación de Sakura" },
            { url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&fit=crop", titulo: "Sakura y Kero" }
        ]
    },
    
    // Sub-contenedor 1.2
    '1_2': {
        nombre: "Dragon Ball Z",
        imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&fit=crop",
        descripcion: "Colección de imágenes épicas de Dragon Ball Z. Momentos icónicos de Goku y Vegeta.",
        tipo: "shonen",
        año: "1989",
        artista: "Akira Toriyama",
        tags: ["acción", "shonen", "lucha"],
        imagenes: [
            { url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&fit=crop", titulo: "Goku Super Saiyajin" },
            { url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop", titulo: "Vegeta vs Freezer" },
            { url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small", titulo: "Kamehameha" }
        ]
    },
    
    // Sub-contenedor 1.3
    '1_3': {
        nombre: "Sailor Moon",
        imagen: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&fit=crop",
        descripcion: "Galería de Sailor Moon y las Sailor Scouts. Imágenes del anime de magical girl.",
        tipo: "mahou_shoujo",
        año: "1992",
        artista: "Naoko Takeuchi",
        tags: ["magical girl", "amistad", "transformación"],
        imagenes: [
            { url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&fit=crop", titulo: "Sailor Moon transformación" },
            { url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small", titulo: "Sailor Scouts grupo" },
            { url: "https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large", titulo: "Luna y Artemis" }
        ]
    },
    
    // ================================================
    // CONTENEDOR 2 - ANIME MODERNO
    // ================================================
    
    // Sub-contenedor 2.1
    '2_1': {
        nombre: "Demon Slayer",
        imagen: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&fit=crop",
        descripcion: "Imágenes espectaculares de Demon Slayer: Kimetsu no Yaiba. Arte de ufotable.",
        tipo: "shonen",
        año: "2019",
        artista: "Koyoharu Gotouge",
        tags: ["demonios", "espadas", "animación"],
        imagenes: [
            { url: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&fit=crop", titulo: "Tanjiro y Nezuko" },
            { url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&fit=crop", titulo: "Respiración del agua" },
            { url: "https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large", titulo: "Zenitsu y Inosuke" }
        ]
    },
    
    // Sub-contenedor 2.2
    '2_2': {
        nombre: "Jujutsu Kaisen",
        imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&fit=crop",
        descripcion: "Arte de maldiciones y hechiceros de Jujutsu Kaisen. Imágenes de Gojo y Yuji.",
        tipo: "shonen",
        año: "2020",
        artista: "Gege Akutami",
        tags: ["maldiciones", "hechiceros", "acción"],
        imagenes: [
            { url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&fit=crop", titulo: "Gojo Satoru" },
            { url: "https://pbs.twimg.com/media/G7wgYR9XQAAwo0T?format=jpg&name=large", titulo: "Yuji Itadori" },
            { url: "https://pbs.twimg.com/media/G7wgF7aW4AAYsOQ?format=jpg&name=large", titulo: "Megumi Fushiguro" }
        ]
    },
    
    // ================================================
    // CONTENEDOR 3 - FANTASÍA Y CIENCIA FICCIÓN
    // ================================================
    
    // Sub-contenedor 3.1
    '3_1': {
        nombre: "Cyberpunk Edgerunners",
        imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop",
        descripcion: "Arte cyberpunk de Edgerunners. Imágenes del estilo Trigger.",
        tipo: "ciencia_ficcion",
        año: "2022",
        artista: "Trigger Studio",
        tags: ["cyberpunk", "tecnología", "distopía"],
        imagenes: [
            { url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop", titulo: "David y Lucy" },
            { url: "https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large", titulo: "Night City" },
            { url: "https://pbs.twimg.com/media/G7wgYR9XQAAwo0T?format=jpg&name=large", titulo: "Arquitectura cyberpunk" }
        ]
    },
    
    // Sub-contenedor 3.2
    '3_2': {
        nombre: "Mushoku Tensei",
        imagen: "https://pbs.twimg.com/media/G7wgYR9XQAAwo0T?format=jpg&name=large",
        descripcion: "Imágenes del mundo de Mushoku Tensei. Arte de fantasía isekai.",
        tipo: "isekai",
        año: "2021",
        artista: "Rifujin na Magonote",
        tags: ["isekai", "magia", "fantasía"],
        imagenes: [
            { url: "https://pbs.twimg.com/media/G7wgYR9XQAAwo0T?format=jpg&name=large", titulo: "Rudeus y Sylphie" },
            { url: "https://pbs.twimg.com/media/G7wgF7aW4AAYsOQ?format=jpg&name=large", titulo: "Mundo mágico" },
            { url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small", titulo: "Eris y Roxy" }
        ]
    },
    
    // ================================================
    // CONTENEDOR 4 - ROMANCE Y DRAMA
    // ================================================
    
    // Sub-contenedor 4.1
    '4_1': {
        nombre: "Your Lie in April",
        imagen: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&fit=crop",
        descripcion: "Imágenes emocionales de Your Lie in April. Escenas musicales y dramáticas.",
        tipo: "romance",
        año: "2014",
        artista: "Naoshi Arakawa",
        tags: ["música", "drama", "romance"],
        imagenes: [
            { url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&fit=crop", titulo: "Kousei y Kaori" },
            { url: "https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large", titulo: "Concierto de piano" },
            { url: "https://pbs.twimg.com/media/G7wgF7aW4AAYsOQ?format=jpg&name=large", titulo: "Atardecer en el parque" }
        ]
    },
    
    // Sub-contenedor 4.2
    '4_2': {
        nombre: "Fruits Basket",
        imagen: "https://images.unsplash.com/photo-1572860177022-8fda92a90b95?w=800&fit=crop",
        descripcion: "Arte de Fruits Basket (2019). Imágenes de la familia Sohma.",
        tipo: "shojo",
        año: "2019",
        artista: "Natsuki Takaya",
        tags: ["familia", "transformación", "romance"],
        imagenes: [
            { url: "https://images.unsplash.com/photo-1572860177022-8fda92a90b95?w=800&fit=crop", titulo: "Tohru Honda" },
            { url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small", titulo: "Kyo y Yuki" },
            { url: "https://pbs.twimg.com/media/G7wgYR9XQAAwo0T?format=jpg&name=large", titulo: "Familia Sohma" }
        ]
    },
    
    // ================================================
    // CONTENEDOR 5 - ARTE CONCEPTUAL Y FONDOS
    // ================================================
    
    // Sub-contenedor 5.1
    '5_1': {
        nombre: "Fondos de Pantalla HD",
        imagen: "https://pbs.twimg.com/media/G7wfStPXUAA1Ra2?format=png&name=360x360",
        descripcion: "Colección de fondos de pantalla en alta resolución para desktop y móvil.",
        tipo: "wallpaper",
        año: "Variado",
        artista: "Varios artistas",
        tags: ["fondos", "HD", "wallpaper"],
        imagenes: [
            { url: "https://pbs.twimg.com/media/G7wfStPXUAA1Ra2?format=png&name=360x360", titulo: "Fondo anime minimalista" },
            { url: "https://pbs.twimg.com/media/G7wgF7aW4AAYsOQ?format=jpg&name=large", titulo: "Paisaje anime" },
            { url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small", titulo: "Arte digital" },
            { url: "https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large", titulo: "Fondo nocturno" }
        ]
    },
    
    // Sub-contenedor 5.2
    '5_2': {
        nombre: "Arte Conceptual",
        imagen: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&fit=crop",
        descripcion: "Arte conceptual de producciones anime. Bocetos y diseños de personajes.",
        tipo: "concept_art",
        año: "Variado",
        artista: "Varios estudios",
        tags: ["concept art", "bocetos", "diseño"],
        imagenes: [
            { url: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&fit=crop", titulo: "Bocetos de personajes" },
            { url: "https://pbs.twimg.com/media/G7wgYR9XQAAwo0T?format=jpg&name=large", titulo: "Diseños de vestuario" },
            { url: "https://pbs.twimg.com/media/G7wgF7aW4AAYsOQ?format=jpg&name=large", titulo: "Escenarios conceptuales" }
        ]
    }
};

// ================================================
// FUNCIONES DE ACCESO PARA LA GALERÍA
// ================================================

function obtenerGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDatabase[key] || null;
}

function obtenerTodasGalerias() {
    return galeriaDatabase;
}

function existeGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDatabase[key] && galeriaDatabase[key].imagen !== "";
}

function obtenerContenedoresGaleriaDisponibles() {
    const contenedores = {};
    
    Object.keys(galeriaDatabase).forEach(key => {
        const [contenedor, subcontenedor] = key.split('_');
        if (!contenedores[contenedor]) {
            contenedores[contenedor] = [];
        }
        if (galeriaDatabase[key].imagen !== "") {
            contenedores[contenedor].push(subcontenedor);
        }
    });
    
    return contenedores;
}

// ================================================
// FUNCIONES PARA VISUALIZACIÓN DE IMÁGENES EN GRANDE
// ================================================

let imagenActualIndex = 0;
let galeriaActual = null;

function abrirVisorImagenes(contenedor, subcontenedor, indice = 0) {
    const galeria = obtenerGaleria(contenedor, subcontenedor);
    if (!galeria || galeria.imagenes.length === 0) return;
    
    imagenActualIndex = indice;
    galeriaActual = galeria;
    
    const visorHTML = crearVisorImagenesHTML(galeria, indice);
    
    const mangaSection = document.getElementById('manga-section');
    if (mangaSection) {
        mangaSection.innerHTML = visorHTML;
        
        // Agregar botón de volver
        const botonVolver = crearBotonVolverGaleria(contenedor);
        mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
    }
}

function crearVisorImagenesHTML(galeria, indice = 0) {
    const imagenActual = galeria.imagenes[indice];
    
    return `
        <div class="visor-imagenes-container" style="max-width: 1200px; margin: 0 auto; padding: 20px;">
            <h2 style="text-align: center; color: #FFD166; margin-bottom: 10px;">🖼️ ${galeria.nombre}</h2>
            <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">${galeria.descripcion}</p>
            
            <!-- IMAGEN PRINCIPAL EN GRANDE -->
            <div style="text-align: center; margin-bottom: 30px;">
                <div id="imagen-principal" style="max-width: 100%; max-height: 70vh; margin: 0 auto; overflow: hidden; border-radius: 15px; box-shadow: 0 15px 35px rgba(0,0,0,0.5);">
                    <img src="${imagenActual.url}" 
                         alt="${imagenActual.titulo}"
                         style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; border-radius: 15px; cursor: zoom-in;"
                         onclick="alternarZoomImagen()"
                         id="imagen-zoom">
                </div>
                
                <!-- TÍTULO DE LA IMAGEN ACTUAL -->
                <div style="margin-top: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;">
                    <h3 style="color: #8A5AF7; margin-bottom: 5px;">${imagenActual.titulo}</h3>
                    <p style="opacity: 0.7; font-size: 0.9rem;">
                        Imagen ${indice + 1} de ${galeria.imagenes.length}
                    </p>
                </div>
            </div>
            
            <!-- CONTROLES DE NAVEGACIÓN -->
            <div style="display: flex; justify-content: center; gap: 20px; margin: 30px 0;">
                <button class="card-button" onclick="cambiarImagen(-1)" style="padding: 12px 25px;" ${indice === 0 ? 'disabled style="opacity: 0.5;"' : ''}>
                    ⬅️ Anterior
                </button>
                
                <button class="card-button" onclick="descargarImagenActual()" style="padding: 12px 25px; background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                    ⬇️ Descargar
                </button>
                
                <button class="card-button" onclick="cambiarImagen(1)" style="padding: 12px 25px;" ${indice === galeria.imagenes.length - 1 ? 'disabled style="opacity: 0.5;"' : ''}>
                    Siguiente ➡️
                </button>
            </div>
            
            <!-- MINIATURAS -->
            <div style="margin-top: 40px;">
                <h3 style="color: #FFD166; margin-bottom: 20px; text-align: center;">🖼️ Miniaturas</h3>
                <div class="miniaturas-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; max-height: 300px; overflow-y: auto; padding: 15px; background: rgba(255, 255, 255, 0.03); border-radius: 15px;">
                    ${galeria.imagenes.map((img, index) => `
                        <div class="miniatura-item ${index === indice ? 'miniatura-activa' : ''}" 
                             onclick="cambiarImagenDirecta(${index})"
                             style="cursor: pointer; border-radius: 10px; overflow: hidden; border: 3px solid ${index === indice ? '#FFD166' : 'transparent'};">
                            <img src="${img.url}" 
                                 alt="${img.titulo}"
                                 style="width: 100%; height: 120px; object-fit: cover; transition: transform 0.3s ease;">
                            <div style="padding: 8px; background: rgba(0,0,0,0.7); font-size: 0.8rem; text-align: center; color: white;">
                                ${img.titulo.substring(0, 20)}${img.titulo.length > 20 ? '...' : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- INFORMACIÓN DE LA GALERÍA -->
            <div style="background: rgba(255, 209, 102, 0.1); border-radius: 15px; padding: 25px; margin-top: 40px;">
                <h3 style="color: #FFD166; margin-bottom: 20px;">📋 Información de la Galería</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                    <div>
                        <span style="color: #8A5AF7; font-size: 0.9rem;">🎨 Artista:</span>
                        <div style="font-weight: bold;">${galeria.artista}</div>
                    </div>
                    <div>
                        <span style="color: #8A5AF7; font-size: 0.9rem;">📅 Año:</span>
                        <div style="font-weight: bold;">${galeria.año}</div>
                    </div>
                    <div>
                        <span style="color: #8A5AF7; font-size: 0.9rem;">🏷️ Tipo:</span>
                        <div style="font-weight: bold;">${galeria.tipo.replace('_', ' ')}</div>
                    </div>
                    <div>
                        <span style="color: #8A5AF7; font-size: 0.9rem;">🔖 Tags:</span>
                        <div style="font-weight: bold;">${galeria.tags.map(tag => `#${tag}`).join(', ')}</div>
                    </div>
                </div>
            </div>
            
            <!-- CONTROLES DE ZOOM -->
            <div style="text-align: center; margin-top: 30px; opacity: 0.7; font-size: 0.9rem;">
                <p>🔍 Haz clic en la imagen para acercar/alejar • Usa las flechas del teclado para navegar</p>
            </div>
        </div>
    `;
}

function cambiarImagen(direccion) {
    if (!galeriaActual) return;
    
    const nuevoIndice = imagenActualIndex + direccion;
    
    if (nuevoIndice >= 0 && nuevoIndice < galeriaActual.imagenes.length) {
        imagenActualIndex = nuevoIndice;
        abrirVisorImagenes(null, null, nuevoIndice); // Los parámetros no se usan cuando galeriaActual ya está definida
    }
}

function cambiarImagenDirecta(indice) {
    if (!galeriaActual || indice < 0 || indice >= galeriaActual.imagenes.length) return;
    
    imagenActualIndex = indice;
    const visorHTML = crearVisorImagenesHTML(galeriaActual, indice);
    
    const mangaSection = document.getElementById('manga-section');
    if (mangaSection) {
        const botonVolver = mangaSection.querySelector('.btn-atras-especifico');
        mangaSection.innerHTML = botonVolver ? botonVolver.outerHTML + visorHTML : visorHTML;
    }
}

function alternarZoomImagen() {
    const imagen = document.getElementById('imagen-zoom');
    const contenedor = document.getElementById('imagen-principal');
    
    if (!imagen || !contenedor) return;
    
    if (imagen.style.width === '100%') {
        // Activar zoom
        imagen.style.width = 'auto';
        imagen.style.height = '90vh';
        imagen.style.cursor = 'zoom-out';
        contenedor.style.overflow = 'auto';
        contenedor.style.maxHeight = '90vh';
    } else {
        // Desactivar zoom
        imagen.style.width = '100%';
        imagen.style.height = 'auto';
        imagen.style.cursor = 'zoom-in';
        contenedor.style.overflow = 'hidden';
        contenedor.style.maxHeight = '70vh';
    }
}

function descargarImagenActual() {
    if (!galeriaActual || !galeriaActual.imagenes[imagenActualIndex]) return;
    
    const imagen = galeriaActual.imagenes[imagenActualIndex];
    const nombreArchivo = `galeria_${galeriaActual.nombre.replace(/\s+/g, '_')}_${imagenActualIndex + 1}.jpg`;
    
    // Crear enlace temporal para descarga
    const link = document.createElement('a');
    link.href = imagen.url;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostrar notificación
    mostrarNotificacionGaleria(`⬇️ Descargando: ${imagen.titulo}`);
}

function crearBotonVolverGaleria(contenedor) {
    const boton = document.createElement('button');
    boton.className = 'btn-atras-especifico';
    boton.innerHTML = '← Volver a Galería';
    boton.onclick = function() {
        cargarSubcontenedoresGaleria(contenedor);
    };
    return boton;
}

function mostrarNotificacionGaleria(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #8A5AF7, #5864F5);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: bold;
        box-shadow: 0 5px 15px rgba(0,0,0,0.4);
        z-index: 1002;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
        font-size: 1rem;
        border: 2px solid white;
    `;
    
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}

// ================================================
// FUNCIONES PARA NAVEGACIÓN POR TECLADO
// ================================================

document.addEventListener('keydown', function(event) {
    // Solo si estamos en el visor de imágenes
    if (document.querySelector('.visor-imagenes-container') && galeriaActual) {
        switch(event.key) {
            case 'ArrowLeft':
                cambiarImagen(-1);
                break;
            case 'ArrowRight':
                cambiarImagen(1);
                break;
            case 'Escape':
                // Volver a la galería (si sabemos el contenedor)
                const botonVolver = document.querySelector('.btn-atras-especifico');
                if (botonVolver && botonVolver.onclick) {
                    botonVolver.onclick();
                }
                break;
            case ' ':
            case 'Spacebar':
                alternarZoomImagen();
                event.preventDefault(); // Prevenir scroll con espacio
                break;
        }
    }
});

console.log('✅ Galería de imágenes cargada correctamente');
console.log(`📸 ${Object.keys(galeriaDatabase).length} sub-contenedores de galería disponibles`);
console.log('🖼️ Sistema de visualización en grande activado');
console.log('🔍 Zoom con clic • Navegación con flechas • Descargas disponibles');
