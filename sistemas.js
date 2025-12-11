// sistemas.js - TODOS LOS SISTEMAS
class SistemaEntrenamiento {
    constructor() {
        this.dinero = parseInt(localStorage.getItem('dinero')) || 0;
        this.progreso = JSON.parse(localStorage.getItem('progreso')) || {};
        this.quizActual = null;
        this.usuario = localStorage.getItem('usuario') || 'Aprendiz';
        
        this.inicializar();
    }

    inicializar() {
        this.actualizarInterfazDinero();
        this.cargarProgreso();
    }

    // ==================== SISTEMA DE DINERO ====================
    ganarDinero(cantidad) {
        this.dinero += cantidad;
        localStorage.setItem('dinero', this.dinero);
        this.actualizarInterfazDinero();
        this.mostrarNotificacion(`+${cantidad} soles! 💰`);
    }

    actualizarInterfazDinero() {
        const elementos = document.querySelectorAll('.dinero-actual');
        elementos.forEach(el => {
            el.textContent = `${this.dinero} soles`;
        });
    }

    // ==================== SISTEMA DE QUIZ ====================
    iniciarQuiz(contenedorId, subId, mazoId) {
        const mazo = window.mangaDatabase?.contenedores?.[contenedorId]?.subcontenedores?.[subId]?.mazos?.[mazoId];
        
        if(!mazo || mazo.length === 0) {
            alert('Mazo no encontrado');
            return;
        }

        this.quizActual = {
            contenedorId,
            subId,
            mazoId,
            palabras: [...mazo],
            palabraActual: 0,
            correctas: 0,
            incorrectas: 0,
            completado: false
        };

        this.mostrarQuiz();
    }

    mostrarQuiz() {
        // Si no existe contenedor de quiz, redirigir a página de quiz
        if(!document.getElementById('quiz-container')) {
            window.location.href = `quiz.html?c=${this.quizActual.contenedorId}&s=${this.quizActual.subId}&m=${this.quizActual.mazoId}`;
            return;
        }

        this.cargarPalabraActual();
    }

    cargarPalabraActual() {
        const quiz = this.quizActual;
        const palabra = quiz.palabras[quiz.palabraActual];
        
        // Actualizar interfaz
        document.getElementById('palabra-japones').textContent = palabra.japones;
        document.getElementById('romaji-display').textContent = '';
        
        // Crear botones de opciones
        const opcionesContainer = document.getElementById('opciones-container');
        opcionesContainer.innerHTML = '';
        
        palabra.opciones.forEach((opcion, index) => {
            const btn = document.createElement('button');
            btn.className = 'opcion-btn';
            btn.textContent = opcion;
            btn.onclick = () => this.verificarRespuesta(index);
            opcionesContainer.appendChild(btn);
        });
        
        // Actualizar progreso
        document.getElementById('progreso-quiz').textContent = 
            `${quiz.palabraActual + 1}/${quiz.palabras.length}`;
    }

    verificarRespuesta(opcionIndex) {
        const quiz = this.quizActual;
        const palabra = quiz.palabras[quiz.palabraActual];
        const esCorrecta = opcionIndex === palabra.respuesta;
        
        // Mostrar romaji
        document.getElementById('romaji-display').textContent = `Romaji: ${palabra.romaji}`;
        
        // Efecto visual
        const botones = document.querySelectorAll('.opcion-btn');
        botones.forEach((btn, i) => {
            btn.disabled = true;
            if(i === palabra.respuesta) {
                btn.classList.add('correcta');
            } else if(i === opcionIndex && !esCorrecta) {
                btn.classList.add('incorrecta');
            }
        });
        
        // Actualizar estadísticas
        if(esCorrecta) {
            quiz.correctas++;
            this.mostrarNotificacion('¡Correcto! ✅');
            
            // Avanzar automáticamente si es correcto
            setTimeout(() => this.siguientePalabra(), 1000);
        } else {
            quiz.incorrectas++;
            this.mostrarNotificacion('Incorrecto ❌');
            
            // Mostrar botón "Siguiente" solo si falla
            document.getElementById('btn-siguiente').style.display = 'block';
        }
    }

    siguientePalabra() {
        this.quizActual.palabraActual++;
        
        if(this.quizActual.palabraActual >= this.quizActual.palabras.length) {
            this.finalizarQuiz();
        } else {
            this.cargarPalabraActual();
            document.getElementById('btn-siguiente').style.display = 'none';
        }
    }

    finalizarQuiz() {
        const quiz = this.quizActual;
        quiz.completado = true;
        
        // Calcular porcentaje y dinero
        const porcentaje = (quiz.correctas / quiz.palabras.length) * 100;
        let dineroGanado = 0;
        
        if(porcentaje === 100) {
            dineroGanado = 2;
        } else if(porcentaje >= 80) {
            dineroGanado = 1.5;
        } else if(porcentaje >= 60) {
            dineroGanado = 1;
        } else if(porcentaje >= 40) {
            dineroGanado = 0.5;
        }
        
        // Guardar progreso
        const ruta = `${quiz.contenedorId}.${quiz.subId}.${quiz.mazoId}`;
        this.progreso[ruta] = {
            porcentaje: porcentaje,
            fecha: new Date().toISOString(),
            correctas: quiz.correctas,
            total: quiz.palabras.length
        };
        localStorage.setItem('progreso', JSON.stringify(this.progreso));
        
        // Dar dinero
        this.ganarDinero(dineroGanado);
        
        // Mostrar resultados
        alert(`¡Quiz completado!\nCorrectas: ${quiz.correctas}/${quiz.palabras.length}\nPorcentaje: ${porcentaje.toFixed(1)}%\nGanaste: ${dineroGanado} soles`);
        
        // Volver a manga.html
        window.location.href = 'index.html#mangas';
    }

    // ==================== GENERAR INTERFAZ DINÁMICA ====================
    generarContenedoresManga() {
        const container = document.getElementById('contenedores-manga');
        if(!container) return;
        
        container.innerHTML = '';
        const db = window.mangaDatabase;
        
        Object.keys(db.contenedores).forEach(contenedorId => {
            const contenedor = db.contenedores[contenedorId];
            
            // Crear contenedor
            const contenedorDiv = document.createElement('div');
            contenedorDiv.className = 'contenedor-manga';
            contenedorDiv.innerHTML = `
                <div class="contenedor-header">
                    <div class="contenedor-icono">${contenedor.imagen}</div>
                    <h3>${contenedor.nombre}</h3>
                </div>
                <div class="subcontenedores" id="subs-${contenedorId}"></div>
            `;
            
            container.appendChild(contenedorDiv);
            
            // Generar subcontenedores
            this.generarSubcontenedores(contenedorId, contenedor.subcontenedores);
        });
    }

    generarSubcontenedores(contenedorId, subs) {
        const container = document.getElementById(`subs-${contenedorId}`);
        if(!container) return;
        
        Object.keys(subs).forEach(subId => {
            const sub = subs[subId];
            const subDiv = document.createElement('div');
            subDiv.className = 'subcontenedor';
            subDiv.innerHTML = `
                <h4>${sub.nombre}</h4>
                <div class="mazos" id="mazos-${contenedorId}-${subId}"></div>
            `;
            
            container.appendChild(subDiv);
            
            // Generar mazos
            this.generarMazos(contenedorId, subId, sub.mazos);
        });
    }

    generarMazos(contenedorId, subId, mazos) {
        const container = document.getElementById(`mazos-${contenedorId}-${subId}`);
        if(!container) return;
        
        Object.keys(mazos).forEach(mazoId => {
            const progresoKey = `${contenedorId}.${subId}.${mazoId}`;
            const progreso = this.progreso[progresoKey] || { porcentaje: 0 };
            
            const mazoDiv = document.createElement('button');
            mazoDiv.className = 'mazo-btn';
            mazoDiv.innerHTML = `
                <span class="mazo-numero">${mazoId.replace('mazo_', 'Mazo ')}</span>
                <span class="mazo-progreso">${progreso.porcentaje.toFixed(0)}%</span>
            `;
            
            mazoDiv.onclick = () => this.iniciarQuiz(contenedorId, subId, mazoId);
            container.appendChild(mazoDiv);
        });
    }

    // ==================== UTILIDADES ====================
    mostrarNotificacion(mensaje) {
        // Crear notificación flotante
        const notif = document.createElement('div');
        notif.className = 'notificacion';
        notif.textContent = mensaje;
        document.body.appendChild(notif);
        
        setTimeout(() => notif.remove(), 2000);
    }

    cargarProgreso() {
        // Cargar progreso desde localStorage
        this.progreso = JSON.parse(localStorage.getItem('progreso')) || {};
    }
}

// INICIAR SISTEMA AL CARGAR
window.addEventListener('DOMContentLoaded', () => {
    window.sistema = new SistemaEntrenamiento();
    
    // Generar interfaz automáticamente si estamos en página de mangas
    if(document.getElementById('contenedores-manga')) {
        sistema.generarContenedoresManga();
    }
    
    // Cargar quiz si estamos en página de quiz
    if(window.location.pathname.includes('quiz.html') || document.getElementById('quiz-container')) {
        const urlParams = new URLSearchParams(window.location.search);
        const c = urlParams.get('c');
        const s = urlParams.get('s');
        const m = urlParams.get('m');
        
        if(c && s && m) {
            sistema.iniciarQuiz(c, s, m);
        }
    }
});
