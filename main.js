// ================================================
// SISTEMA PRINCIPAL DE NAVEGACIÓN Y QUIZ
// ================================================

// Variables globales
let contenedorActual = null;
let subcontenedorActual = null;
let mazoActual = null;
let palabrasActuales = [];
let indicePalabraActual = 0;
let aciertos = 0;
let errores = 0;
let esperandoSiguiente = false;

// ====================
// NAVEGACIÓN PRINCIPAL
// ====================

function cargarPaginaMangas() {
    // Ocultar sección principal
    document.querySelector('.especial-section').style.display = 'none';
    document.querySelector('.additional-section').style.display = 'none';
    
    // Mostrar y crear sección de mangas
    const mangaSection = document.getElementById('manga-section');
    mangaSection.style.display = 'block';
    mangaSection.innerHTML = crearContenedoresMangas();
    
    // Agregar botón volver
    const botonVolver = crearBotonVolver(volverAlInicio);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function volverAlInicio() {
    // Mostrar sección principal
    document.querySelector('.especial-section').style.display = 'block';
    document.querySelector('.additional-section').style.display = 'block';
    
    // Ocultar otras secciones
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
}

// ====================
// CREACIÓN DE UI
// ====================

function crearContenedoresMangas() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">📚 CONTENEDORES DE MANGAS</h2>';
    html += '<div class="manga-contenedores">';
    
    // Crear 10 contenedores
    for (let i = 1; i <= 10; i++) {
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedores(${i})">
                <div class="contenedor-img" style="background-image: url('${obtenerImagenContenedor(i)}')"></div>
                <div class="contenedor-numero">CONTAINER ${i}</div>
                <p>5 sub-contenedores con vocabulario</p>
                <div class="card-button">Abrir</div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function cargarSubcontenedores(contenedor) {
    contenedorActual = contenedor;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearSubcontenedoresUI(contenedor);
    
    const botonVolver = crearBotonVolver(cargarPaginaMangas);
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearSubcontenedoresUI(contenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        📦 CONTENEDOR ${contenedor} - SUB-CONTENEDORES
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    // Crear 5 subcontenedores
    for (let i = 1; i <= 5; i++) {
        const progreso = calcularProgresoSubcontenedor(contenedor, i);
        
        html += `
            <div class="subcontenedor-item" onclick="cargarMazos(${contenedor}, ${i})">
                <div class="subcontenedor-img" style="background-image: url('${obtenerImagenSubcontenedor(contenedor, i)}')"></div>
                <h3>Sub-contenedor ${i}</h3>
                <p>10 mazos de vocabulario</p>
                <div class="mazo-progreso">
                    <div class="mazo-progreso-bar" style="width: ${progreso}%"></div>
                </div>
                <p style="font-size: 0.9rem; margin-top: 5px;">${progreso}% completado</p>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function cargarMazos(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearMazosUI(contenedor, subcontenedor);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedores(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

function crearMazosUI(contenedor, subcontenedor) {
    let html = `<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">
        📚 CONTENEDOR ${contenedor} • SUB-CONTENEDOR ${subcontenedor} - MAZOS
    </h2>`;
    html += '<div class="mazos-container">';
    
    // Crear 10 mazos
    for (let i = 1; i <= 10; i++) {
        const progreso = sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, i);
        const tieneVocabulario = verificarVocabularioDisponible(contenedor, subcontenedor, i);
        
        html += `
            <div class="mazo-item" onclick="${tieneVocabulario ? `iniciarQuiz(${contenedor}, ${subcontenedor}, ${i})` : 'alert("Este mazo aún no tiene vocabulario. Agrégalo en vocabulario.js")'}">
                <h3>MAZO ${i}</h3>
                <p>10 palabras japonesas</p>
                <div class="mazo-progreso">
                    <div class="mazo-progreso-bar" style="width: ${progreso}%"></div>
                </div>
                <p style="font-size: 0.9rem; margin-top: 5px;">${progreso}% completado</p>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function crearBotonVolver(funcionClick) {
    const boton = document.createElement('button');
    boton.className = 'btn-atras';
    boton.innerHTML = '← Volver';
    boton.onclick = funcionClick;
    return boton;
}

// ====================
// SISTEMA DE QUIZ
// ====================

function iniciarQuiz(contenedor, subcontenedor, mazo) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    mazoActual = mazo;
    
    // Obtener palabras del mazo
    palabrasActuales = obtenerVocabulario(contenedor, subcontenedor, mazo);
    
    if (palabrasActuales.length === 0) {
        alert('No hay palabras en este mazo. Agrega vocabulario en vocabulario.js');
        return;
    }
    
    // Resetear contadores
    indicePalabraActual = 0;
    aciertos = 0;
    errores = 0;
    esperandoSiguiente = false;
    
    // Ocultar sección de mangas, mostrar quiz
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    // Cargar primera palabra
    mostrarPalabraQuiz();
}

function mostrarPalabraQuiz() {
    const quizSection = document.getElementById('quiz-section');
    const palabra = palabrasActuales[indicePalabraActual];
    
    quizSection.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #8A5AF7; margin-bottom: 20px;">
                Mazo ${mazoActual} • Palabra ${indicePalabraActual + 1}/${palabrasActuales.length}
            </h2>
            
            <div class="palabra-japonesa" id="palabra-japonesa">
                ${palabra.japones}
            </div>
            
            <div class="opciones-grid" id="opciones-container">
                <!-- Opciones se cargan dinámicamente -->
            </div>
            
            <div id="romaji-container" style="display: none;">
                <!-- Romaji se muestra después de responder -->
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="cancelarQuiz()">
                    ❌ Cancelar
                </button>
            </div>
        </div>
    `;
    
    // Crear opciones (2 arriba, 2 abajo)
    crearOpcionesQuiz(palabra);
}

function crearOpcionesQuiz(palabra) {
    const opcionesContainer = document.getElementById('opciones-container');
    
    // Mezclar opciones (pero mantener la correcta)
    const opcionesMezcladas = [...palabra.opciones];
    for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
    }
    
    // Encontrar nueva posición de la respuesta correcta
    const nuevaPosicionCorrecta = opcionesMezcladas.indexOf(palabra.opciones[palabra.respuesta]);
    
    // Crear estructura 2x2
    opcionesContainer.innerHTML = `
        <div class="opcion-fila">
            <button class="opcion-btn" onclick="verificarRespuesta(0, ${nuevaPosicionCorrecta})">
                ${opcionesMezcladas[0]}
            </button>
            <button class="opcion-btn" onclick="verificarRespuesta(1, ${nuevaPosicionCorrecta})">
                ${opcionesMezcladas[1]}
            </button>
        </div>
        <div class="opcion-fila">
            <button class="opcion-btn" onclick="verificarRespuesta(2, ${nuevaPosicionCorrecta})">
                ${opcionesMezcladas[2]}
            </button>
            <button class="opcion-btn" onclick="verificarRespuesta(3, ${nuevaPosicionCorrecta})">
                ${opcionesMezcladas[3]}
            </button>
        </div>
    `;
}

function verificarRespuesta(opcionSeleccionada, posicionCorrecta) {
    if (esperandoSiguiente) return;
    
    const palabra = palabrasActuales[indicePalabraActual];
    const opcionesBtns = document.querySelectorAll('.opcion-btn');
    const correcta = opcionSeleccionada === posicionCorrecta;
    
    // Marcar botones
    opcionesBtns.forEach((btn, index) => {
        if (index === posicionCorrecta) {
            btn.classList.add('correcta');
        } else if (index === opcionSeleccionada && !correcta) {
            btn.classList.add('incorrecta');
        }
        btn.disabled = true;
    });
    
    // Mostrar romaji
    const romajiContainer = document.getElementById('romaji-container');
    romajiContainer.style.display = 'block';
    romajiContainer.innerHTML = `
        <div class="romaji-container">
            <h3>Romaji:</h3>
            <div class="romaji-text">${palabra.lectura}</div>
            <p style="margin-top: 10px; opacity: 0.8;">
                ${correcta ? '✅ ¡Correcto!' : '❌ Incorrecto. La respuesta correcta era: ' + palabra.opciones[palabra.respuesta]}
            </p>
        </div>
    `;
    
    // Actualizar contadores
    if (correcta) {
        aciertos++;
    } else {
        errores++;
    }
    
    // Actualizar controles
    const controls = document.querySelector('.quiz-controls');
    controls.innerHTML = '';
    
    if (correcta) {
        // Respuesta correcta: pasar automáticamente después de 1.5 segundos
        controls.innerHTML = `<div style="text-align: center; padding: 20px; color: #4CAF50;">
            <p>✅ ¡Correcto! Pasando a la siguiente palabra...</p>
        </div>`;
        
        esperandoSiguiente = true;
        setTimeout(pasarSiguientePalabra, 1500);
    } else {
        // Respuesta incorrecta: mostrar botón manual
        controls.innerHTML = `
            <button class="quiz-btn btn-volver" onclick="cancelarQuiz()">
                ❌ Cancelar
            </button>
            <button class="quiz-btn btn-siguiente" onclick="pasarSiguientePalabra()">
                ⏭️ Siguiente Palabra
            </button>
        `;
        esperandoSiguiente = true;
    }
}

function pasarSiguientePalabra() {
    indicePalabraActual++;
    
    if (indicePalabraActual < palabrasActuales.length) {
        esperandoSiguiente = false;
        mostrarPalabraQuiz();
    } else {
        // Quiz terminado
        finalizarQuiz();
    }
}

function finalizarQuiz() {
    const porcentaje = Math.round((aciertos / palabrasActuales.length) * 100);
    
    // Actualizar progreso en sistema
    sistemaEconomia.actualizarProgreso(
        contenedorActual, 
        subcontenedorActual, 
        mazoActual, 
        porcentaje
    );
    
    // Mostrar resultados
    document.getElementById('quiz-section').innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; color: #FFD166;">🎉 QUIZ COMPLETADO</h2>
            
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 4rem; margin-bottom: 20px;">${porcentaje}%</div>
                <p style="font-size: 1.2rem; color: #8A5AF7;">
                    ${aciertos} aciertos • ${errores} errores
                </p>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.05); padding: 25px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: #4CAF50; margin-bottom: 15px;">💰 Recompensa Obtenida</h3>
                <div style="font-size: 2.5rem; text-align: center; color: #FFD166;">
                    ${sistemaEconomia.obtenerDinero().toFixed(2)} soles
                </div>
                <p style="text-align: center; margin-top: 10px; opacity: 0.8;">
                    Dinero total: ${sistemaEconomia.obtenerDinero().toFixed(2)} soles
                </p>
            </div>
            
            <div class="quiz-controls">
                <button class="quiz-btn btn-volver" onclick="volverAMazos()">
                    ↩️ Volver a Mazos
                </button>
                <button class="quiz-btn btn-siguiente" onclick="repetirQuiz()">
                    🔄 Repetir Mazo
                </button>
            </div>
        </div>
    `;
}

function cancelarQuiz() {
    if (confirm('¿Seguro que quieres cancelar el quiz? Se perderá el progreso actual.')) {
        volverAMazos();
    }
}

function volverAMazos() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('manga-section').style.display = 'block';
    cargarMazos(contenedorActual, subcontenedorActual);
}

function repetirQuiz() {
    iniciarQuiz(contenedorActual, subcontenedorActual, mazoActual);
}

// ====================
// FUNCIONES AUXILIARES
// ====================

function calcularProgresoSubcontenedor(contenedor, subcontenedor) {
    let totalProgreso = 0;
    let mazosConVocabulario = 0;
    
    // Verificar mazos 1-10
    for (let mazo = 1; mazo <= 10; mazo++) {
        if (verificarVocabularioDisponible(contenedor, subcontenedor, mazo)) {
            totalProgreso += sistemaEconomia.obtenerProgreso(contenedor, subcontenedor, mazo);
            mazosConVocabulario++;
        }
    }
    
    return mazosConVocabulario > 0 ? Math.round(totalProgreso / mazosConVocabulario) : 0;
}

function verificarVocabularioDisponible(contenedor, subcontenedor, mazo) {
    const vocabulario = obtenerVocabulario(contenedor, subcontenedor, mazo);
    return vocabulario && vocabulario.length > 0;
}

// ====================
// INICIALIZACIÓN
// ====================

// Interactividad original para Quintillizas (NO TOCAR)
document.addEventListener('DOMContentLoaded', function() {
    // Botones originales
    document.querySelectorAll('.card-button').forEach((button, index) => {
        if (index > 0) { // Solo el segundo botón (Quintillizas)
            button.addEventListener('click', function() {
                const cardTitle = this.closest('.card').querySelector('h3').textContent;
                
                if (cardTitle.includes('Nakano')) {
                    alert('💖 ¡Iniciando aventura RPG con las quintillizas Nakano!');
                }
            });
        }
    });

    // Efectos hover originales
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto manga original
    const mangaCard = document.querySelector('.card-blue');
    if (mangaCard) {
        mangaCard.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    }
});

// Agregar animación pulse si no existe
if (!document.querySelector('style[data-pulse]')) {
    const pulseStyle = document.createElement('style');
    pulseStyle.setAttribute('data-pulse', 'true');
    pulseStyle.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes mangaPulse {
            0% { transform: translateY(-10px) scale(1.02); }
            50% { transform: translateY(-10px) scale(1.1); }
            100% { transform: translateY(-10px) scale(1.02); }
        }
    `;
    document.head.appendChild(pulseStyle);
}
