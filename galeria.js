// ================================================
// GALERÍA DE FOTOS DINÁMICA
// ================================================

class GaleriaFotos {
    constructor() {
        this.fotosDatabase = this.cargarFotosDesdeStorage() || this.crearBaseDatosEjemplo();
        this.contenedores = this.calcularContenedoresDisponibles();
        this.fotoSeleccionada = null;
    }

    // ====================
    // ESTRUCTURA BASE DE DATOS DINÁMICA
    // ====================

    crearBaseDatosEjemplo() {
        // Esta es solo una estructura de ejemplo que se sobreescribirá
        return {
            // Contenedor 1
            '1_1': {
                titulo: "Galería de Ejemplo",
                descripcion: "Fotos de demostración",
                fotos: [
                    {
                        id: 1,
                        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop",
                        titulo: "Estudio Japonés",
                        descripcion: "Ambiente de estudio tradicional",
                        fecha: "2023-10-15",
                        categoria: "Estudio",
                        tags: ["japonés", "estudio", "tradicional"]
                    },
                    {
                        id: 2,
                        url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w-800&auto=format&fit=crop",
                        titulo: "Cultura Japonesa",
                        descripcion: "Elementos culturales japoneses",
                        fecha: "2023-10-16",
                        categoria: "Cultura",
                        tags: ["cultura", "tradición", "japón"]
                    }
                ]
            }
        };
    }

    // ====================
    // FUNCIONES PRINCIPALES
    // ====================

    agregarFoto(contenedor, subcontenedor, fotoData) {
        const clave = `${contenedor}_${subcontenedor}`;
        
        // Si no existe el contenedor, crearlo
        if (!this.fotosDatabase[clave]) {
            this.fotosDatabase[clave] = {
                titulo: `Galería ${contenedor}-${subcontenedor}`,
                descripcion: "Galería personal de fotos",
                fotos: []
            };
        }
        
        // Asignar ID automático si no viene
        if (!fotoData.id) {
            fotoData.id = this.fotosDatabase[clave].fotos.length + 1;
        }
        
        // Asignar fecha actual si no viene
        if (!fotoData.fecha) {
            fotoData.fecha = new Date().toISOString().split('T')[0];
        }
        
        // Agregar la foto
        this.fotosDatabase[clave].fotos.push(fotoData);
        
        // Actualizar contenedores disponibles
        this.contenedores = this.calcularContenedoresDisponibles();
        
        // Guardar en localStorage
        this.guardarFotosEnStorage();
        
        console.log(`✅ Foto agregada: Contenedor ${contenedor}, Subcontenedor ${subcontenedor}`);
        console.log(`📊 Total fotos en ${clave}: ${this.fotosDatabase[clave].fotos.length}`);
        
        return true;
    }

    eliminarFoto(contenedor, subcontenedor, fotoId) {
        const clave = `${contenedor}_${subcontenedor}`;
        
        if (!this.fotosDatabase[clave]) {
            console.error(`Contenedor ${clave} no existe`);
            return false;
        }
        
        const indice = this.fotosDatabase[clave].fotos.findIndex(foto => foto.id === fotoId);
        
        if (indice === -1) {
            console.error(`Foto ${fotoId} no encontrada`);
            return false;
        }
        
        // Eliminar la foto
        this.fotosDatabase[clave].fotos.splice(indice, 1);
        
        // Si no quedan fotos, eliminar el contenedor
        if (this.fotosDatabase[clave].fotos.length === 0) {
            delete this.fotosDatabase[clave];
        }
        
        // Actualizar contenedores
        this.contenedores = this.calcularContenedoresDisponibles();
        
        // Guardar cambios
        this.guardarFotosEnStorage();
        
        console.log(`🗑️ Foto ${fotoId} eliminada de ${clave}`);
        
        return true;
    }

    obtenerFotos(contenedor, subcontenedor) {
        const clave = `${contenedor}_${subcontenedor}`;
        return this.fotosDatabase[clave] || null;
    }

    obtenerTodasFotos() {
        return this.fotosDatabase;
    }

    // ====================
    // CÁLCULO DINÁMICO DE CONTENEDORES
    // ====================

    calcularContenedoresDisponibles() {
        const contenedores = {};
        
        Object.keys(this.fotosDatabase).forEach(clave => {
            const [contenedor, subcontenedor] = clave.split('_');
            
            if (!contenedores[contenedor]) {
                contenedores[contenedor] = [];
            }
            
            if (this.fotosDatabase[clave].fotos.length > 0) {
                contenedores[contenedor].push(subcontenedor);
            }
        });
        
        return contenedores;
    }

    obtenerContenedores() {
        return this.contenedores;
    }

    // ====================
    // UI PARA GALERÍA
    // ====================

    crearUIContenedores() {
        let html = `
            <div class="galeria-header">
                <h2>📸 GALERÍA DE FOTOS</h2>
                <p class="galeria-subtitle">Colección personal de imágenes y fotografías</p>
            </div>
            
            <div class="contenedor-info">
                <div class="info-card">
                    <span class="info-icon">📊</span>
                    <div class="info-content">
                        <h4>Estadísticas</h4>
                        <p>Contenedores: ${Object.keys(this.contenedores).length}</p>
                    </div>
                </div>
                
                <div class="info-card">
                    <span class="info-icon">🆕</span>
                    <div class="info-content">
                        <h4>Agregar Fotos</h4>
                        <p>Usa el formulario para agregar nuevas fotos</p>
                    </div>
                </div>
            </div>
            
            <div class="manga-contenedores">
        `;
        
        // Si no hay contenedores, mostrar mensaje
        if (Object.keys(this.contenedores).length === 0) {
            html += `
                <div class="contenedor-vacio">
                    <div class="vacio-icon">📷</div>
                    <h3>No hay galerías creadas</h3>
                    <p>Crea tu primera galería usando el formulario de abajo</p>
                    <button class="card-button" onclick="mostrarFormularioAgregarFoto()">
                        🆕 Crear Primera Galería
                    </button>
                </div>
            `;
        } else {
            // Mostrar contenedores disponibles
            for (let i = 1; i <= 10; i++) {
                const tieneFotos = this.contenedores[i] && this.contenedores[i].length > 0;
                const nombreContenedor = `GALERÍA ${i}`;
                const desc = tieneFotos ? 
                    `${this.contenedores[i].length} sub-galerías disponibles` : 
                    'Disponible para nuevas fotos';
                
                html += `
                    <div class="contenedor-item" onclick="galeria.cargarSubgalerias(${i})">
                        <div class="contenedor-img" style="background-image: url('${this.obtenerImagenContenedor(i)}')"></div>
                        <div class="contenedor-numero">${nombreContenedor}</div>
                        <p>${desc}</p>
                        ${tieneFotos ? 
                            `<div class="contador-fotos">${this.contarFotosEnContenedor(i)} fotos</div>` : 
                            ''}
                        <div class="card-button">
                            ${tieneFotos ? '👁️ Ver Galería' : '🆕 Crear Galería'}
                        </div>
                    </div>
                `;
            }
        }
        
        html += `</div>`;
        
        // Formulario para agregar fotos (siempre visible)
        html += this.crearFormularioAgregarFoto();
        
        return html;
    }

    crearFormularioAgregarFoto() {
        return `
            <div id="formulario-foto" class="formulario-foto" style="display: none; margin-top: 40px;">
                <h3 style="color: #FFD166; margin-bottom: 20px;">🆕 AGREGAR NUEVA FOTO</h3>
                
                <div class="form-grid">
                    <div class="form-group">
                        <label>Contenedor</label>
                        <input type="number" id="foto-contenedor" min="1" max="10" value="1" class="form-input">
                    </div>
                    
                    <div class="form-group">
                        <label>Subcontenedor</label>
                        <input type="number" id="foto-subcontenedor" min="1" max="5" value="1" class="form-input">
                    </div>
                </div>
                
                <div class="form-group">
                    <label>URL de la Foto</label>
                    <input type="text" id="foto-url" placeholder="https://ejemplo.com/foto.jpg" class="form-input">
                    <small style="opacity: 0.7;">URL directa a la imagen (jpg, png, etc.)</small>
                </div>
                
                <div class="form-group">
                    <label>Título de la Foto</label>
                    <input type="text" id="foto-titulo" placeholder="Título descriptivo" class="form-input">
                </div>
                
                <div class="form-group">
                    <label>Descripción</label>
                    <textarea id="foto-descripcion" placeholder="Descripción de la foto..." class="form-input" rows="3"></textarea>
                </div>
                
                <div class="form-grid">
                    <div class="form-group">
                        <label>Categoría</label>
                        <input type="text" id="foto-categoria" placeholder="Ej: Naturaleza, Retrato" class="form-input">
                    </div>
                    
                    <div class="form-group">
                        <label>Tags (separados por comas)</label>
                        <input type="text" id="foto-tags" placeholder="japonés, cultura, viaje" class="form-input">
                    </div>
                </div>
                
                <div style="display: flex; gap: 15px; margin-top: 20px;">
                    <button class="card-button" onclick="galeria.procesarNuevaFoto()" 
                            style="background: linear-gradient(135deg, #4CAF50, #2E7D32); flex: 1;">
                        ✅ Agregar Foto
                    </button>
                    
                    <button class="card-button" onclick="ocultarFormularioAgregarFoto()" 
                            style="background: linear-gradient(135deg, #FF6B6B, #FF1493);">
                        ❌ Cancelar
                    </button>
                </div>
            </div>
        `;
    }

    cargarSubgalerias(contenedor) {
        const subcontenedores = this.contenedores[contenedor] || [];
        
        let html = `
            <div class="galeria-header">
                <h2>📸 GALERÍA ${contenedor}</h2>
                <p class="galeria-subtitle">Selecciona una sub-galería para ver las fotos</p>
            </div>
            
            <div class="subcontenedores-grid">
        `;
        
        for (let i = 1; i <= 5; i++) {
            const tieneFotos = subcontenedores.includes(i.toString());
            const galeria = tieneFotos ? this.obtenerFotos(contenedor, i) : null;
            const titulo = tieneFotos ? galeria.titulo : `Sub-galería ${i}`;
            const desc = tieneFotos ? 
                `${galeria.fotos.length} foto${galeria.fotos.length !== 1 ? 's' : ''}` : 
                '(Vacía - Agrega fotos)';
            
            html += `
                <div class="subcontenedor-item" onclick="${tieneFotos ? `galeria.cargarGaleriaCompleta(${contenedor}, ${i})` : `mostrarFormularioAgregarFotoConUbicacion(${contenedor}, ${i})`}">
                    <div class="subcontenedor-img" style="background-image: url('${this.obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                    <h3>${titulo}</h3>
                    <p>${desc}</p>
                    ${tieneFotos ? 
                        `<p style="font-size: 0.9rem; opacity: 0.8; margin-top: 5px;">
                            ${galeria.descripcion || 'Sin descripción'}
                        </p>` : 
                        ''}
                    <div class="card-button" style="margin-top: 10px;">
                        ${tieneFotos ? '👁️ Ver Fotos' : '🆕 Agregar Fotos'}
                    </div>
                </div>
            `;
        }
        
        html += `</div>`;
        
        // Botón para agregar fotos a este contenedor
        html += `
            <div style="text-align: center; margin: 30px 0;">
                <button class="card-button" onclick="mostrarFormularioAgregarFotoConUbicacion(${contenedor})" 
                        style="background: linear-gradient(135deg, #5864F5, #8A5AF7); max-width: 300px;">
                    📸 Agregar Fotos a este Contenedor
                </button>
            </div>
            
            <div style="text-align: center;">
                <button class="btn-atras-especifico" onclick="galeria.cargarPaginaGaleria()">
                    ↩️ Volver a Galerías
                </button>
            </div>
        `;
        
        return html;
    }

    cargarGaleriaCompleta(contenedor, subcontenedor) {
        const galeria = this.obtenerFotos(contenedor, subcontenedor);
        
        if (!galeria || galeria.fotos.length === 0) {
            return `
                <div class="galeria-header">
                    <h2>📸 Galería Vacía</h2>
                    <p class="galeria-subtitle">No hay fotos en esta galería</p>
                    <button class="card-button" onclick="mostrarFormularioAgregarFotoConUbicacion(${contenedor}, ${subcontenedor})">
                        🆕 Agregar Primera Foto
                    </button>
                </div>
            `;
        }
        
        let html = `
            <div class="galeria-header">
                <h2>${galeria.titulo}</h2>
                <p class="galeria-subtitle">${galeria.descripcion || 'Galería de fotos'}</p>
                <div class="galeria-stats">
                    <span>📊 ${galeria.fotos.length} fotos</span>
                    <span>📁 Contenedor ${contenedor}-${subcontenedor}</span>
                </div>
            </div>
            
            <!-- CONTROLES DE GALERÍA -->
            <div class="galeria-controls">
                <button class="galeria-btn" onclick="mostrarFormularioAgregarFotoConUbicacion(${contenedor}, ${subcontenedor})">
                    📸 Agregar Foto
                </button>
                
                <button class="galeria-btn" onclick="galeria.cargarSubgalerias(${contenedor})" 
                        style="background: rgba(255, 255, 255, 0.1);">
                    ↩️ Volver
                </button>
            </div>
            
            <!-- GRILLA DE FOTOS -->
            <div class="galeria-grid">
        `;
        
        // Mostrar todas las fotos
        galeria.fotos.forEach((foto, index) => {
            html += `
                <div class="foto-item" onclick="galeria.mostrarFotoAmpliada(${contenedor}, ${subcontenedor}, ${index})">
                    <div class="foto-img" style="background-image: url('${foto.url}')"></div>
                    <div class="foto-info">
                        <h4>${foto.titulo}</h4>
                        <p class="foto-desc">${foto.descripcion || 'Sin descripción'}</p>
                        <div class="foto-meta">
                            <span class="foto-categoria">${foto.categoria || 'General'}</span>
                            <span class="foto-fecha">${foto.fecha || 'Sin fecha'}</span>
                        </div>
                    </div>
                    <button class="foto-delete-btn" onclick="galeria.eliminarFotoUI(${contenedor}, ${subcontenedor}, ${foto.id}); event.stopPropagation();" title="Eliminar foto">
                        🗑️
                    </button>
                </div>
            `;
        });
        
        html += `</div>`;
        
        // Botón para agregar más fotos
        html += `
            <div style="text-align: center; margin: 40px 0;">
                <button class="card-button" onclick="mostrarFormularioAgregarFotoConUbicacion(${contenedor}, ${subcontenedor})"
                        style="background: linear-gradient(135deg, #4CAF50, #2E7D32); max-width: 300px;">
                    📸 Agregar Más Fotos
                </button>
            </div>
        `;
        
        return html;
    }

    mostrarFotoAmpliada(contenedor, subcontenedor, indice) {
        const galeria = this.obtenerFotos(contenedor, subcontenedor);
        if (!galeria || !galeria.fotos[indice]) return;
        
        const foto = galeria.fotos[indice];
        this.fotoSeleccionada = { contenedor, subcontenedor, indice, foto };
        
        const modal = document.createElement('div');
        modal.className = 'foto-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="galeria.cerrarModal()">×</button>
                
                <div class="modal-header">
                    <h2>${foto.titulo}</h2>
                    <p>${foto.descripcion || ''}</p>
                </div>
                
                <div class="modal-body">
                    <img src="${foto.url}" alt="${foto.titulo}" class="modal-img">
                    
                    <div class="modal-info">
                        <div class="info-item">
                            <strong>Categoría:</strong> ${foto.categoria || 'General'}
                        </div>
                        <div class="info-item">
                            <strong>Fecha:</strong> ${foto.fecha || 'No especificada'}
                        </div>
                        <div class="info-item">
                            <strong>Tags:</strong> ${foto.tags ? foto.tags.join(', ') : 'Ninguno'}
                        </div>
                    </div>
                </div>
                
                <div class="modal-controls">
                    <button class="modal-btn" onclick="galeria.eliminarFotoUI(${contenedor}, ${subcontenedor}, ${foto.id}); galeria.cerrarModal();">
                        🗑️ Eliminar
                    </button>
                    
                    <button class="modal-btn" onclick="galeria.descargarFoto('${foto.url}', '${foto.titulo}')">
                        ⬇️ Descargar
                    </button>
                    
                    <button class="modal-btn" onclick="galeria.compartirFoto(${contenedor}, ${subcontenedor}, ${indice})">
                        📤 Compartir
                    </button>
                </div>
                
                <div class="modal-nav">
                    ${indice > 0 ? 
                        `<button class="nav-btn" onclick="galeria.mostrarFotoAmpliada(${contenedor}, ${subcontenedor}, ${indice - 1});">
                            ← Anterior
                        </button>` : 
                        '<div></div>'}
                    
                    <span>${indice + 1} / ${galeria.fotos.length}</span>
                    
                    ${indice < galeria.fotos.length - 1 ? 
                        `<button class="nav-btn" onclick="galeria.mostrarFotoAmpliada(${contenedor}, ${subcontenedor}, ${indice + 1});">
                            Siguiente →
                        </button>` : 
                        '<div></div>'}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Cerrar modal al hacer clic fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.cerrarModal();
            }
        });
    }

    cerrarModal() {
        const modal = document.querySelector('.foto-modal');
        if (modal) {
            modal.remove();
        }
        this.fotoSeleccionada = null;
    }

    // ====================
    // FUNCIONES UTILITARIAS
    // ====================

    procesarNuevaFoto() {
        const contenedor = parseInt(document.getElementById('foto-contenedor').value);
        const subcontenedor = parseInt(document.getElementById('foto-subcontenedor').value);
        const url = document.getElementById('foto-url').value.trim();
        const titulo = document.getElementById('foto-titulo').value.trim();
        
        if (!url) {
            alert('Por favor ingresa una URL para la foto');
            return;
        }
        
        if (!titulo) {
            alert('Por favor ingresa un título para la foto');
            return;
        }
        
        const fotoData = {
            url: url,
            titulo: titulo,
            descripcion: document.getElementById('foto-descripcion').value.trim() || '',
            categoria: document.getElementById('foto-categoria').value.trim() || 'General',
            tags: document.getElementById('foto-tags').value 
                ? document.getElementById('foto-tags').value.split(',').map(tag => tag.trim()) 
                : []
        };
        
        const agregada = this.agregarFoto(contenedor, subcontenedor, fotoData);
        
        if (agregada) {
            // Limpiar formulario
            document.getElementById('foto-url').value = '';
            document.getElementById('foto-titulo').value = '';
            document.getElementById('foto-descripcion').value = '';
            document.getElementById('foto-categoria').value = '';
            document.getElementById('foto-tags').value = '';
            
            // Mostrar notificación
            this.mostrarNotificacion(`✅ Foto agregada a Galería ${contenedor}-${subcontenedor}`);
            
            // Actualizar UI
            if (document.getElementById('manga-section').style.display === 'block') {
                document.getElementById('manga-section').innerHTML = this.crearUIContenedores();
            }
        }
    }

    eliminarFotoUI(contenedor, subcontenedor, fotoId) {
        if (confirm('¿Estás seguro de que quieres eliminar esta foto? Esta acción no se puede deshacer.')) {
            const eliminada = this.eliminarFoto(contenedor, subcontenedor, fotoId);
            
            if (eliminada) {
                this.mostrarNotificacion('🗑️ Foto eliminada correctamente');
                
                // Recargar la vista actual
                setTimeout(() => {
                    if (document.getElementById('manga-section').style.display === 'block') {
                        const seccion = document.getElementById('manga-section');
                        const htmlActual = seccion.innerHTML;
                        
                        // Si estamos en una galería específica, recargarla
                        if (htmlActual.includes('Galería') && !htmlActual.includes('GALERÍA DE FOTOS')) {
                            seccion.innerHTML = this.cargarGaleriaCompleta(contenedor, subcontenedor);
                        } else {
                            seccion.innerHTML = this.crearUIContenedores();
                        }
                    }
                }, 500);
            }
        }
    }

    descargarFoto(url, titulo) {
        const link = document.createElement('a');
        link.href = url;
        link.download = `${titulo.replace(/\s+/g, '_')}.jpg`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        this.mostrarNotificacion('⬇️ Descarga iniciada');
    }

    compartirFoto(contenedor, subcontenedor, indice) {
        const galeria = this.obtenerFotos(contenedor, subcontenedor);
        if (!galeria || !galeria.fotos[indice]) return;
        
        const foto = galeria.fotos[indice];
        const texto = `Mira esta foto: ${foto.titulo} - ${foto.descripcion || ''}`;
        
        if (navigator.share) {
            navigator.share({
                title: foto.titulo,
                text: texto,
                url: foto.url
            });
        } else {
            // Copiar al portapapeles
            navigator.clipboard.writeText(`${foto.titulo}\n${foto.url}`)
                .then(() => {
                    this.mostrarNotificacion('📋 URL copiada al portapapeles');
                })
                .catch(() => {
                    alert(`Comparte manualmente:\n${foto.titulo}\n${foto.url}`);
                });
        }
    }

    contarFotosEnContenedor(contenedor) {
        let total = 0;
        Object.keys(this.fotosDatabase).forEach(clave => {
            const [cont, sub] = clave.split('_');
            if (parseInt(cont) === contenedor) {
                total += this.fotosDatabase[clave].fotos.length;
            }
        });
        return total;
    }

    obtenerImagenContenedor(numero) {
        const imagenes = [
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1574717024453-af2e2c8f2bcc?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1572860177022-8fda92a90b95?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1574717024453-af2e2c8f2bcc?w=400&h=300&fit=crop'
        ];
        
        return imagenes[(numero - 1) % imagenes.length];
    }

    obtenerImagenSubcontenedor(contenedor, subcontenedor) {
        const galeria = this.obtenerFotos(contenedor, subcontenedor);
        if (galeria && galeria.fotos.length > 0) {
            return galeria.fotos[0].url;
        }
        
        // Imagen por defecto
        const imagenes = [
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1574717024453-af2e2c8f2bcc?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=200&fit=crop'
        ];
        
        return imagenes[(subcontenedor - 1) % imagenes.length];
    }

    mostrarNotificacion(mensaje) {
        const notif = document.createElement('div');
        notif.className = 'notificacion-galeria';
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #5864F5, #8A5AF7);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.4);
            z-index: 1003;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 3s forwards;
            font-size: 1rem;
            border: 2px solid white;
            max-width: 300px;
        `;
        
        document.body.appendChild(notif);
        
        setTimeout(() => {
            if (notif.parentNode) {
                notif.parentNode.removeChild(notif);
            }
        }, 3000);
    }

    // ====================
    // STORAGE
    // ====================

    guardarFotosEnStorage() {
        try {
            localStorage.setItem('galeria_fotos', JSON.stringify(this.fotosDatabase));
            console.log('💾 Galería guardada en localStorage');
        } catch (e) {
            console.error('Error al guardar galería:', e);
        }
    }

    cargarFotosDesdeStorage() {
        try {
            const datos = localStorage.getItem('galeria_fotos');
            if (datos) {
                console.log('📂 Galería cargada desde localStorage');
                return JSON.parse(datos);
            }
        } catch (e) {
            console.error('Error al cargar galería:', e);
        }
        return null;
    }

    // ====================
    // FUNCIONES PÚBLICAS PARA UI
    // ====================

    cargarPaginaGaleria() {
        const seccion = document.getElementById('manga-section');
        seccion.innerHTML = this.crearUIContenedores();
        seccion.style.display = 'block';
    }

    // ====================
    // INICIALIZACIÓN
    // ====================

    inicializar() {
        console.log('📸 Galería de fotos inicializada');
        console.log(`📊 Contenedores activos: ${Object.keys(this.contenedores).length}`);
        
        // Agregar estilos si no existen
        this.agregarEstilos();
        
        return this;
    }

    agregarEstilos() {
        if (!document.getElementById('estilos-galeria')) {
            const estilos = document.createElement('style');
            estilos.id = 'estilos-galeria';
            estilos.textContent = `
                /* ESTILOS GALERÍA */
                .galeria-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 20px;
                    background: rgba(30, 30, 40, 0.7);
                    border-radius: 15px;
                    border: 2px solid rgba(88, 100, 245, 0.3);
                }
                
                .galeria-subtitle {
                    opacity: 0.8;
                    margin-top: 10px;
                    font-size: 1rem;
                }
                
                .galeria-stats {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 15px;
                    font-size: 0.9rem;
                    opacity: 0.7;
                }
                
                .galeria-controls {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    margin: 25px 0;
                }
                
                .galeria-btn {
                    background: linear-gradient(135deg, #5864F5, #8A5AF7);
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.3s ease;
                }
                
                .galeria-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(88, 100, 245, 0.4);
                }
                
                .galeria-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 25px;
                    margin: 30px 0;
                }
                
                .foto-item {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    border: 2px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                }
                
                .foto-item:hover {
                    transform: translateY(-5px);
                    border-color: #5864F5;
                    box-shadow: 0 10px 20px rgba(88, 100, 245, 0.2);
                }
                
                .foto-img {
                    width: 100%;
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                
                .foto-info {
                    padding: 20px;
                }
                
                .foto-info h4 {
                    margin: 0 0 10px 0;
                    color: #FFD166;
                    font-size: 1.1rem;
                }
                
                .foto-desc {
                    font-size: 0.9rem;
                    opacity: 0.8;
                    margin-bottom: 15px;
                    line-height: 1.4;
                }
                
                .foto-meta {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.8rem;
                    opacity: 0.7;
                }
                
                .foto-categoria {
                    background: rgba(76, 175, 80, 0.2);
                    color: #4CAF50;
                    padding: 3px 8px;
                    border-radius: 10px;
                }
                
                .foto-fecha {
                    color: #8A5AF7;
                }
                
                .foto-delete-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: rgba(255, 107, 107, 0.9);
                    color: white;
                    border: none;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .foto-item:hover .foto-delete-btn {
                    opacity: 1;
                }
                
                .foto-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    z-index: 2000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .modal-content {
                    background: rgba(30, 30, 40, 0.95);
                    border-radius: 20px;
                    padding: 30px;
                    max-width: 800px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    border: 3px solid #5864F5;
                }
                
                .modal-close {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(255, 107, 107, 0.9);
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    cursor: pointer;
                    line-height: 1;
                }
                
                .modal-header {
                    text-align: center;
                    margin-bottom: 25px;
                }
                
                .modal-header h2 {
                    color: #FFD166;
                    margin-bottom: 10px;
                }
                
                .modal-img {
                    width: 100%;
                    max-height: 50vh;
                    object-fit: contain;
                    border-radius: 10px;
                    margin-bottom: 20px;
                }
                
                .modal-info {
                    background: rgba(255, 255, 255, 0.05);
                    padding: 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                }
                
                .info-item {
                    margin-bottom: 10px;
                    font-size: 0.95rem;
                }
                
                .modal-controls {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    margin: 20px 0;
                }
                
                .modal-btn {
                    background: linear-gradient(135deg, #5864F5, #8A5AF7);
                    color: white;
                    border: none;
                    padding: 12px 20px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.3s ease;
                }
                
                .modal-btn:hover {
                    transform: translateY(-2px);
                }
                
                .modal-nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 25px;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .nav-btn {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .nav-btn:hover {
                    background: rgba(88, 100, 245, 0.3);
                }
                
                .formulario-foto {
                    background: rgba(30, 30, 40, 0.8);
                    border-radius: 15px;
                    padding: 30px;
                    border: 2px solid rgba(88, 100, 245, 0.3);
                }
                
                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                
                .form-group {
                    margin-bottom: 20px;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    color: #FFD166;
                    font-weight: bold;
                }
                
                .form-input {
                    width: 100%;
                    padding: 12px 15px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    border-radius: 8px;
                    color: white;
                    font-size: 1rem;
                }
                
                .form-input:focus {
                    outline: none;
                    border-color: #5864F5;
                }
                
                .contenedor-info {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin: 30px 0;
                }
                
                .info-card {
                    background: rgba(88, 100, 245, 0.1);
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    border: 2px solid rgba(88, 100, 245, 0.3);
                }
                
                .info-icon {
                    font-size: 2.5rem;
                }
                
                .info-content h4 {
                    margin: 0 0 5px 0;
                    color: #FFD166;
                }
                
                .contenedor-vacio {
                    text-align: center;
                    padding: 60px 20px;
                    grid-column: 1 / -1;
                }
                
                .vacio-icon {
                    font-size: 4rem;
                    margin-bottom: 20px;
                    opacity: 0.5;
                }
                
                .contador-fotos {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: rgba(76, 175, 80, 0.9);
                    color: white;
                    padding: 5px 10px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: bold;
                }
                
                @keyframes slideIn {
                    from {
                        transform: translateX(100px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes fadeOut {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                    }
                }
            `;
            
            document.head.appendChild(estilos);
        }
    }
}

// ================================================
// FUNCIONES GLOBALES PARA INTERFAZ
// ================================================

function cargarPaginaGaleria() {
    modoActual = 'galeria';
    modoMazoDificil = false;
    ocultarHeader();
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    
    // Inicializar galería si no existe
    if (typeof galeria === 'undefined') {
        window.galeria = new GaleriaFotos().inicializar();
    }
    
    mangaSection.innerHTML = galeria.crearUIContenedores();
    
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function mostrarFormularioAgregarFoto() {
    const formulario = document.getElementById('formulario-foto');
    if (formulario) {
        formulario.style.display = 'block';
        formulario.scrollIntoView({ behavior: 'smooth' });
    }
}

function ocultarFormularioAgregarFoto() {
    const formulario = document.getElementById('formulario-foto');
    if (formulario) {
        formulario.style.display = 'none';
    }
}

function mostrarFormularioAgregarFotoConUbicacion(contenedor, subcontenedor = 1) {
    mostrarFormularioAgregarFoto();
    
    if (contenedor) {
        document.getElementById('foto-contenedor').value = contenedor;
        document.getElementById('foto-subcontenedor').value = subcontenedor;
    }
}

// ================================================
// INICIALIZACIÓN GLOBAL
// ================================================

// Crear instancia global de galería
const galeria = new GaleriaFotos().inicializar();

console.log('📸 Sistema de galería dinámico cargado');
console.log('✅ Galería lista para usar - Puedes agregar fotos dinámicamente');
