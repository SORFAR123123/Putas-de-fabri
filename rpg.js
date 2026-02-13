// ================================================
// RPG QUINTILLIZAS - SISTEMA DE ORGIAS CON CUADRÍCULA
// ================================================

class QuintillizasRPG {
    constructor() {
        this.personajeSeleccionado = this.cargarPersonajeSeleccionado() || null;
        this.datosPersonajes = this.cargarDatosPersonajes() || this.inicializarDatosPersonajes();
        this.condones = this.cargarCondones() || 0;
        this.condones001 = this.cargarCondones001() || 0;
        
        // Videos para cada combinación
        this.videosMamadas = this.inicializarVideosMamadas();
        this.videosDoggystyle = this.inicializarVideosDoggystyle();
    }

    inicializar() {
        console.log('🎮 RPG Quintillizas - Sistema de Orgías');
        
        // Funciones principales
        window.seleccionarPersonajeRPG = (personajeId) => this.seleccionarPersonajeUI(personajeId);
        window.comprarCondonesRPG = (cantidad) => this.comprarCondones(cantidad);
        window.comprarCondones001RPG = (cantidad) => this.comprarCondones001(cantidad);
        
        // Funciones de orgías
        window.cargarPaginaOrgias = () => this.cargarPaginaOrgias();
        window.mostrarMamadas = () => this.mostrarMamadas();
        window.mostrarDoggystyle = () => this.mostrarDoggystyle();
        window.iniciarOrgia = (orgiaId, tipo) => this.iniciarOrgia(orgiaId, tipo);
    }

    // ====================
    // VIDEOS PARA CADA COMBINACIÓN DE MAMADAS (TÚ LOS CONFIGURAS)
    // ====================
    
    inicializarVideosMamadas() {
        return {
            // DÚOS - ICHIKA
            'mamada_ichika_nino': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_ichika_miku': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_ichika_yotsuba': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_ichika_itsuki': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            
            // DÚOS - NINO
            'mamada_nino_miku': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_nino_yotsuba': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_nino_itsuki': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            
            // DÚOS - MIKU
            'mamada_miku_yotsuba': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_miku_itsuki': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            
            // DÚOS - YOTSUBA
            'mamada_yotsuba_itsuki': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            
            // TRÍOS
            'mamada_ichika_nino_miku': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'mamada_ichika_nino_yotsuba': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'mamada_ichika_nino_itsuki': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'mamada_ichika_miku_yotsuba': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'mamada_ichika_miku_itsuki': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'mamada_ichika_yotsuba_itsuki': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'mamada_nino_miku_yotsuba': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'mamada_nino_miku_itsuki': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'mamada_nino_yotsuba_itsuki': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'mamada_miku_yotsuba_itsuki': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            
            // CUARTETOS
            'mamada_ichika_nino_miku_yotsuba': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_ichika_nino_miku_itsuki': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_ichika_nino_yotsuba_itsuki': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_ichika_miku_yotsuba_itsuki': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            'mamada_nino_miku_yotsuba_itsuki': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
            },
            
            // QUINTETO (TODAS)
            'mamada_todas': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            }
        };
    }

    // ====================
    // VIDEOS PARA CADA COMBINACIÓN DE DOGGYSTYLE
    // ====================
    
    inicializarVideosDoggystyle() {
        return {
            // DÚOS - ICHIKA
            'doggystyle_ichika_nino': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_miku': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_yotsuba': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_itsuki': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            
            // DÚOS - NINO
            'doggystyle_nino_miku': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_nino_yotsuba': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_nino_itsuki': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            
            // DÚOS - MIKU
            'doggystyle_miku_yotsuba': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_miku_itsuki': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            
            // DÚOS - YOTSUBA
            'doggystyle_yotsuba_itsuki': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            
            // TRÍOS
            'doggystyle_ichika_nino_miku': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_nino_yotsuba': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_nino_itsuki': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_miku_yotsuba': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_miku_itsuki': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_yotsuba_itsuki': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'doggystyle_nino_miku_yotsuba': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'doggystyle_nino_miku_itsuki': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'doggystyle_nino_yotsuba_itsuki': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            'doggystyle_miku_yotsuba_itsuki': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            },
            
            // CUARTETOS
            'doggystyle_ichika_nino_miku_yotsuba': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_nino_miku_itsuki': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_nino_yotsuba_itsuki': {
                videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_ichika_miku_yotsuba_itsuki': {
                videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            'doggystyle_nino_miku_yotsuba_itsuki': {
                videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe',
                imagen: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop'
            },
            
            // QUINTETO (TODAS)
            'doggystyle_todas': {
                videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?w=400&h=300&fit=crop'
            }
        };
    }

    // ====================
    // PANTALLA PRINCIPAL DE ORGIAS (con los dos botones grandes)
    // ====================
    
    cargarPaginaOrgias() {
        return `
            <div style="max-width: 1000px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: #FF1493; margin-bottom: 30px; font-size: 3rem;">
                    🎉 ORGIAS QUINTILLIZAS
                </h1>
                
                <p style="text-align: center; opacity: 0.8; margin-bottom: 40px;">
                    Selecciona el tipo de orgía que deseas realizar
                </p>
                
                <!-- TUS CONDONES -->
                <div style="background: rgba(255,20,147,0.1); border-radius: 15px; padding: 20px; margin-bottom: 40px; text-align: center;">
                    <h3 style="color: #FFD166; margin-bottom: 10px;">💎 TUS CONDONES 0.01</h3>
                    <div style="font-size: 3rem; color: #5864F5; font-weight: bold;">${this.condones001}</div>
                    <p style="opacity: 0.7;">¡Necesitas condones 0.01 para todas las orgías!</p>
                </div>
                
                <!-- DOS GRANDES BOTONES -->
                <div style="display: flex; gap: 30px; justify-content: center; margin-bottom: 50px;">
                    <!-- BOTÓN MAMADAS -->
                    <div style="flex: 1; max-width: 400px; cursor: pointer;" onclick="mostrarMamadas()">
                        <div style="background: linear-gradient(135deg, #FF1493, #FF6B8B); border-radius: 30px; padding: 40px; text-align: center; box-shadow: 0 10px 30px rgba(255,20,147,0.5); transition: transform 0.3s;">
                            <div style="font-size: 6rem; margin-bottom: 20px;">😮</div>
                            <h2 style="color: white; font-size: 2.5rem; margin-bottom: 10px;">MAMADAS</h2>
                            <p style="color: white; opacity: 0.9;">Todas las combinaciones</p>
                        </div>
                    </div>
                    
                    <!-- BOTÓN DOGGYSTYLE -->
                    <div style="flex: 1; max-width: 400px; cursor: pointer;" onclick="mostrarDoggystyle()">
                        <div style="background: linear-gradient(135deg, #5864F5, #8A5AF7); border-radius: 30px; padding: 40px; text-align: center; box-shadow: 0 10px 30px rgba(88,100,245,0.5); transition: transform 0.3s;">
                            <div style="font-size: 6rem; margin-bottom: 20px;">🐕</div>
                            <h2 style="color: white; font-size: 2.5rem; margin-bottom: 10px;">DOGGYSTYLE</h2>
                            <p style="color: white; opacity: 0.9;">Todas las combinaciones</p>
                        </div>
                    </div>
                </div>
                
                <!-- LEYENDA DE REQUISITOS -->
                <div style="background: rgba(0,0,0,0.3); border-radius: 20px; padding: 25px;">
                    <h3 style="color: #FFD166; margin-bottom: 15px;">📋 REQUISITOS POR TIPO</h3>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 2rem;">👥</div>
                            <div><strong>DÚO</strong></div>
                            <div style="color: #4CAF50;">Afinidad 100 c/u</div>
                            <div style="color: #FFD166;">Nivel 5 c/u</div>
                            <div style="color: #5864F5;">💎2 condones</div>
                        </div>
                        <div>
                            <div style="font-size: 2rem;">👥👥</div>
                            <div><strong>TRÍO</strong></div>
                            <div style="color: #4CAF50;">Afinidad 130 c/u</div>
                            <div style="color: #FFD166;">Nivel 6 c/u</div>
                            <div style="color: #5864F5;">💎3 condones</div>
                        </div>
                        <div>
                            <div style="font-size: 2rem;">👥👥👥</div>
                            <div><strong>CUARTETO</strong></div>
                            <div style="color: #4CAF50;">Afinidad 160 c/u</div>
                            <div style="color: #FFD166;">Nivel 7 c/u</div>
                            <div style="color: #5864F5;">💎4 condones</div>
                        </div>
                        <div>
                            <div style="font-size: 2rem;">👥👥👥👥👥</div>
                            <div><strong>QUINTETO</strong></div>
                            <div style="color: #4CAF50;">Afinidad 200 c/u</div>
                            <div style="color: #FFD166;">Nivel 8 c/u</div>
                            <div style="color: #5864F5;">💎5 condones</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // ====================
    // MOSTRAR TODAS LAS MAMADAS EN CUADRÍCULA
    // ====================
    
    mostrarMamadas() {
        const videos = this.videosMamadas;
        const mangaSection = document.getElementById('manga-section');
        
        let html = `
            <div style="max-width: 1400px; margin: 0 auto; padding: 20px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px;">
                    <button class="btn-atras-especifico" onclick="cargarPaginaOrgias()">
                        ← Volver a Orgías
                    </button>
                    <h1 style="color: #FF1493; margin: 0; font-size: 2.5rem;">😮 MAMADAS - TODAS LAS COMBINACIONES</h1>
                    <div style="background: #5864F5; padding: 10px 20px; border-radius: 30px; font-weight: bold;">
                        💎 ${this.condones001} condones 0.01
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px;">
        `;
        
        // ========================================
        // DÚOS - TODAS LAS COMBINACIONES
        // ========================================
        
        // Ichika & Nino
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_nino',
            tipo: 'duo',
            nombre: 'Ichika & Nino',
            hermanas: ['ichika', 'nino'],
            imagen: videos['mamada_ichika_nino'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Ichika & Miku
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_miku',
            tipo: 'duo',
            nombre: 'Ichika & Miku',
            hermanas: ['ichika', 'miku'],
            imagen: videos['mamada_ichika_miku'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Ichika & Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_yotsuba',
            tipo: 'duo',
            nombre: 'Ichika & Yotsuba',
            hermanas: ['ichika', 'yotsuba'],
            imagen: videos['mamada_ichika_yotsuba'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Ichika & Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_itsuki',
            tipo: 'duo',
            nombre: 'Ichika & Itsuki',
            hermanas: ['ichika', 'itsuki'],
            imagen: videos['mamada_ichika_itsuki'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Nino & Miku
        html += this.crearTarjetaOrgia({
            id: 'mamada_nino_miku',
            tipo: 'duo',
            nombre: 'Nino & Miku',
            hermanas: ['nino', 'miku'],
            imagen: videos['mamada_nino_miku'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Nino & Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'mamada_nino_yotsuba',
            tipo: 'duo',
            nombre: 'Nino & Yotsuba',
            hermanas: ['nino', 'yotsuba'],
            imagen: videos['mamada_nino_yotsuba'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Nino & Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_nino_itsuki',
            tipo: 'duo',
            nombre: 'Nino & Itsuki',
            hermanas: ['nino', 'itsuki'],
            imagen: videos['mamada_nino_itsuki'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Miku & Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'mamada_miku_yotsuba',
            tipo: 'duo',
            nombre: 'Miku & Yotsuba',
            hermanas: ['miku', 'yotsuba'],
            imagen: videos['mamada_miku_yotsuba'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Miku & Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_miku_itsuki',
            tipo: 'duo',
            nombre: 'Miku & Itsuki',
            hermanas: ['miku', 'itsuki'],
            imagen: videos['mamada_miku_itsuki'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Yotsuba & Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_yotsuba_itsuki',
            tipo: 'duo',
            nombre: 'Yotsuba & Itsuki',
            hermanas: ['yotsuba', 'itsuki'],
            imagen: videos['mamada_yotsuba_itsuki'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // ========================================
        // TRÍOS
        // ========================================
        
        // Ichika, Nino, Miku
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_nino_miku',
            tipo: 'trio',
            nombre: 'Ichika, Nino & Miku',
            hermanas: ['ichika', 'nino', 'miku'],
            imagen: videos['mamada_ichika_nino_miku'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Nino, Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_nino_yotsuba',
            tipo: 'trio',
            nombre: 'Ichika, Nino & Yotsuba',
            hermanas: ['ichika', 'nino', 'yotsuba'],
            imagen: videos['mamada_ichika_nino_yotsuba'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Nino, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_nino_itsuki',
            tipo: 'trio',
            nombre: 'Ichika, Nino & Itsuki',
            hermanas: ['ichika', 'nino', 'itsuki'],
            imagen: videos['mamada_ichika_nino_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Miku, Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_miku_yotsuba',
            tipo: 'trio',
            nombre: 'Ichika, Miku & Yotsuba',
            hermanas: ['ichika', 'miku', 'yotsuba'],
            imagen: videos['mamada_ichika_miku_yotsuba'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Miku, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_miku_itsuki',
            tipo: 'trio',
            nombre: 'Ichika, Miku & Itsuki',
            hermanas: ['ichika', 'miku', 'itsuki'],
            imagen: videos['mamada_ichika_miku_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_yotsuba_itsuki',
            tipo: 'trio',
            nombre: 'Ichika, Yotsuba & Itsuki',
            hermanas: ['ichika', 'yotsuba', 'itsuki'],
            imagen: videos['mamada_ichika_yotsuba_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Nino, Miku, Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'mamada_nino_miku_yotsuba',
            tipo: 'trio',
            nombre: 'Nino, Miku & Yotsuba',
            hermanas: ['nino', 'miku', 'yotsuba'],
            imagen: videos['mamada_nino_miku_yotsuba'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Nino, Miku, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_nino_miku_itsuki',
            tipo: 'trio',
            nombre: 'Nino, Miku & Itsuki',
            hermanas: ['nino', 'miku', 'itsuki'],
            imagen: videos['mamada_nino_miku_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Nino, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_nino_yotsuba_itsuki',
            tipo: 'trio',
            nombre: 'Nino, Yotsuba & Itsuki',
            hermanas: ['nino', 'yotsuba', 'itsuki'],
            imagen: videos['mamada_nino_yotsuba_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Miku, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_miku_yotsuba_itsuki',
            tipo: 'trio',
            nombre: 'Miku, Yotsuba & Itsuki',
            hermanas: ['miku', 'yotsuba', 'itsuki'],
            imagen: videos['mamada_miku_yotsuba_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // ========================================
        // CUARTETOS
        // ========================================
        
        // Ichika, Nino, Miku, Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_nino_miku_yotsuba',
            tipo: 'cuarteto',
            nombre: 'Ichika, Nino, Miku & Yotsuba',
            hermanas: ['ichika', 'nino', 'miku', 'yotsuba'],
            imagen: videos['mamada_ichika_nino_miku_yotsuba'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // Ichika, Nino, Miku, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_nino_miku_itsuki',
            tipo: 'cuarteto',
            nombre: 'Ichika, Nino, Miku & Itsuki',
            hermanas: ['ichika', 'nino', 'miku', 'itsuki'],
            imagen: videos['mamada_ichika_nino_miku_itsuki'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // Ichika, Nino, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_nino_yotsuba_itsuki',
            tipo: 'cuarteto',
            nombre: 'Ichika, Nino, Yotsuba & Itsuki',
            hermanas: ['ichika', 'nino', 'yotsuba', 'itsuki'],
            imagen: videos['mamada_ichika_nino_yotsuba_itsuki'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // Ichika, Miku, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_ichika_miku_yotsuba_itsuki',
            tipo: 'cuarteto',
            nombre: 'Ichika, Miku, Yotsuba & Itsuki',
            hermanas: ['ichika', 'miku', 'yotsuba', 'itsuki'],
            imagen: videos['mamada_ichika_miku_yotsuba_itsuki'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // Nino, Miku, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'mamada_nino_miku_yotsuba_itsuki',
            tipo: 'cuarteto',
            nombre: 'Nino, Miku, Yotsuba & Itsuki',
            hermanas: ['nino', 'miku', 'yotsuba', 'itsuki'],
            imagen: videos['mamada_nino_miku_yotsuba_itsuki'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // ========================================
        // QUINTETO (TODAS)
        // ========================================
        
        html += this.crearTarjetaOrgia({
            id: 'mamada_todas',
            tipo: 'quinteto',
            nombre: 'TODAS LAS HERMANAS',
            hermanas: ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'],
            imagen: videos['mamada_todas'].imagen,
            afinidadRequerida: 200,
            nivelRequerido: 8,
            condones: 5
        });
        
        html += `
                </div>
            </div>
        `;
        
        mangaSection.innerHTML = html;
        
        const botonVolver = document.createElement('button');
        botonVolver.className = 'btn-atras-especifico';
        botonVolver.innerHTML = '← Volver al RPG';
        botonVolver.style.margin = '20px';
        botonVolver.onclick = () => this.cargarPaginaPrincipal();
        mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
    }

    // ====================
    // MOSTRAR TODAS LAS DOGGYSTYLE EN CUADRÍCULA
    // ====================
    
    mostrarDoggystyle() {
        const videos = this.videosDoggystyle;
        const mangaSection = document.getElementById('manga-section');
        
        let html = `
            <div style="max-width: 1400px; margin: 0 auto; padding: 20px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px;">
                    <button class="btn-atras-especifico" onclick="cargarPaginaOrgias()">
                        ← Volver a Orgías
                    </button>
                    <h1 style="color: #5864F5; margin: 0; font-size: 2.5rem;">🐕 DOGGYSTYLE - TODAS LAS COMBINACIONES</h1>
                    <div style="background: #5864F5; padding: 10px 20px; border-radius: 30px; font-weight: bold;">
                        💎 ${this.condones001} condones 0.01
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px;">
        `;
        
        // ========================================
        // DÚOS - DOGGYSTYLE
        // ========================================
        
        // Ichika & Nino
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_nino',
            tipo: 'duo',
            nombre: 'Ichika & Nino',
            hermanas: ['ichika', 'nino'],
            imagen: videos['doggystyle_ichika_nino'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Ichika & Miku
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_miku',
            tipo: 'duo',
            nombre: 'Ichika & Miku',
            hermanas: ['ichika', 'miku'],
            imagen: videos['doggystyle_ichika_miku'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Ichika & Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_yotsuba',
            tipo: 'duo',
            nombre: 'Ichika & Yotsuba',
            hermanas: ['ichika', 'yotsuba'],
            imagen: videos['doggystyle_ichika_yotsuba'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Ichika & Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_itsuki',
            tipo: 'duo',
            nombre: 'Ichika & Itsuki',
            hermanas: ['ichika', 'itsuki'],
            imagen: videos['doggystyle_ichika_itsuki'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Nino & Miku
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_nino_miku',
            tipo: 'duo',
            nombre: 'Nino & Miku',
            hermanas: ['nino', 'miku'],
            imagen: videos['doggystyle_nino_miku'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Nino & Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_nino_yotsuba',
            tipo: 'duo',
            nombre: 'Nino & Yotsuba',
            hermanas: ['nino', 'yotsuba'],
            imagen: videos['doggystyle_nino_yotsuba'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Nino & Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_nino_itsuki',
            tipo: 'duo',
            nombre: 'Nino & Itsuki',
            hermanas: ['nino', 'itsuki'],
            imagen: videos['doggystyle_nino_itsuki'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Miku & Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_miku_yotsuba',
            tipo: 'duo',
            nombre: 'Miku & Yotsuba',
            hermanas: ['miku', 'yotsuba'],
            imagen: videos['doggystyle_miku_yotsuba'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Miku & Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_miku_itsuki',
            tipo: 'duo',
            nombre: 'Miku & Itsuki',
            hermanas: ['miku', 'itsuki'],
            imagen: videos['doggystyle_miku_itsuki'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // Yotsuba & Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_yotsuba_itsuki',
            tipo: 'duo',
            nombre: 'Yotsuba & Itsuki',
            hermanas: ['yotsuba', 'itsuki'],
            imagen: videos['doggystyle_yotsuba_itsuki'].imagen,
            afinidadRequerida: 100,
            nivelRequerido: 5,
            condones: 2
        });
        
        // ========================================
        // TRÍOS - DOGGYSTYLE
        // ========================================
        
        // Ichika, Nino, Miku
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_nino_miku',
            tipo: 'trio',
            nombre: 'Ichika, Nino & Miku',
            hermanas: ['ichika', 'nino', 'miku'],
            imagen: videos['doggystyle_ichika_nino_miku'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Nino, Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_nino_yotsuba',
            tipo: 'trio',
            nombre: 'Ichika, Nino & Yotsuba',
            hermanas: ['ichika', 'nino', 'yotsuba'],
            imagen: videos['doggystyle_ichika_nino_yotsuba'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Nino, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_nino_itsuki',
            tipo: 'trio',
            nombre: 'Ichika, Nino & Itsuki',
            hermanas: ['ichika', 'nino', 'itsuki'],
            imagen: videos['doggystyle_ichika_nino_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Miku, Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_miku_yotsuba',
            tipo: 'trio',
            nombre: 'Ichika, Miku & Yotsuba',
            hermanas: ['ichika', 'miku', 'yotsuba'],
            imagen: videos['doggystyle_ichika_miku_yotsuba'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Miku, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_miku_itsuki',
            tipo: 'trio',
            nombre: 'Ichika, Miku & Itsuki',
            hermanas: ['ichika', 'miku', 'itsuki'],
            imagen: videos['doggystyle_ichika_miku_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Ichika, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_yotsuba_itsuki',
            tipo: 'trio',
            nombre: 'Ichika, Yotsuba & Itsuki',
            hermanas: ['ichika', 'yotsuba', 'itsuki'],
            imagen: videos['doggystyle_ichika_yotsuba_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Nino, Miku, Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_nino_miku_yotsuba',
            tipo: 'trio',
            nombre: 'Nino, Miku & Yotsuba',
            hermanas: ['nino', 'miku', 'yotsuba'],
            imagen: videos['doggystyle_nino_miku_yotsuba'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Nino, Miku, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_nino_miku_itsuki',
            tipo: 'trio',
            nombre: 'Nino, Miku & Itsuki',
            hermanas: ['nino', 'miku', 'itsuki'],
            imagen: videos['doggystyle_nino_miku_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Nino, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_nino_yotsuba_itsuki',
            tipo: 'trio',
            nombre: 'Nino, Yotsuba & Itsuki',
            hermanas: ['nino', 'yotsuba', 'itsuki'],
            imagen: videos['doggystyle_nino_yotsuba_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // Miku, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_miku_yotsuba_itsuki',
            tipo: 'trio',
            nombre: 'Miku, Yotsuba & Itsuki',
            hermanas: ['miku', 'yotsuba', 'itsuki'],
            imagen: videos['doggystyle_miku_yotsuba_itsuki'].imagen,
            afinidadRequerida: 130,
            nivelRequerido: 6,
            condones: 3
        });
        
        // ========================================
        // CUARTETOS - DOGGYSTYLE
        // ========================================
        
        // Ichika, Nino, Miku, Yotsuba
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_nino_miku_yotsuba',
            tipo: 'cuarteto',
            nombre: 'Ichika, Nino, Miku & Yotsuba',
            hermanas: ['ichika', 'nino', 'miku', 'yotsuba'],
            imagen: videos['doggystyle_ichika_nino_miku_yotsuba'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // Ichika, Nino, Miku, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_nino_miku_itsuki',
            tipo: 'cuarteto',
            nombre: 'Ichika, Nino, Miku & Itsuki',
            hermanas: ['ichika', 'nino', 'miku', 'itsuki'],
            imagen: videos['doggystyle_ichika_nino_miku_itsuki'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // Ichika, Nino, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_nino_yotsuba_itsuki',
            tipo: 'cuarteto',
            nombre: 'Ichika, Nino, Yotsuba & Itsuki',
            hermanas: ['ichika', 'nino', 'yotsuba', 'itsuki'],
            imagen: videos['doggystyle_ichika_nino_yotsuba_itsuki'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // Ichika, Miku, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_ichika_miku_yotsuba_itsuki',
            tipo: 'cuarteto',
            nombre: 'Ichika, Miku, Yotsuba & Itsuki',
            hermanas: ['ichika', 'miku', 'yotsuba', 'itsuki'],
            imagen: videos['doggystyle_ichika_miku_yotsuba_itsuki'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // Nino, Miku, Yotsuba, Itsuki
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_nino_miku_yotsuba_itsuki',
            tipo: 'cuarteto',
            nombre: 'Nino, Miku, Yotsuba & Itsuki',
            hermanas: ['nino', 'miku', 'yotsuba', 'itsuki'],
            imagen: videos['doggystyle_nino_miku_yotsuba_itsuki'].imagen,
            afinidadRequerida: 160,
            nivelRequerido: 7,
            condones: 4
        });
        
        // ========================================
        // QUINTETO - DOGGYSTYLE (TODAS)
        // ========================================
        
        html += this.crearTarjetaOrgia({
            id: 'doggystyle_todas',
            tipo: 'quinteto',
            nombre: 'TODAS LAS HERMANAS',
            hermanas: ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'],
            imagen: videos['doggystyle_todas'].imagen,
            afinidadRequerida: 200,
            nivelRequerido: 8,
            condones: 5
        });
        
        html += `
                </div>
            </div>
        `;
        
        mangaSection.innerHTML = html;
        
        const botonVolver = document.createElement('button');
        botonVolver.className = 'btn-atras-especifico';
        botonVolver.innerHTML = '← Volver al RPG';
        botonVolver.style.margin = '20px';
        botonVolver.onclick = () => this.cargarPaginaPrincipal();
        mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
    }

    // ====================
    // CREAR TARJETA DE ORGÍA (con requisitos y verificación)
    // ====================
    
    crearTarjetaOrgia(orgia) {
        // Verificar si CADA hermana cumple los requisitos
        let todasCumplen = true;
        let estadoRequisitos = [];
        
        for (let hermanaId of orgia.hermanas) {
            const hermana = this.datosPersonajes[hermanaId];
            const afinidadOk = hermana.afinidad >= orgia.afinidadRequerida;
            const nivelOk = hermana.nivel >= orgia.nivelRequerido;
            
            if (!afinidadOk || !nivelOk) {
                todasCumplen = false;
            }
            
            estadoRequisitos.push({
                id: hermanaId,
                nombre: hermana.nombre.split(' ')[0],
                afinidad: hermana.afinidad,
                afinidadReq: orgia.afinidadRequerida,
                afinidadOk: afinidadOk,
                nivel: hermana.nivel,
                nivelReq: orgia.nivelRequerido,
                nivelOk: nivelOk,
                color: hermana.color
            });
        }
        
        // Verificar condones
        const condonesOk = this.condones001 >= orgia.condones;
        
        // Determinar color de borde según estado
        let borderColor = '#FF1493';
        let estadoTexto = '❌ REQUISITOS NO CUMPLIDOS';
        let puedeIntentar = false;
        
        if (todasCumplen && condonesOk) {
            borderColor = '#4CAF50';
            estadoTexto = '✅ ¡LISTO PARA INICIAR!';
            puedeIntentar = true;
        } else if (todasCumplen && !condonesOk) {
            borderColor = '#5864F5';
            estadoTexto = `❌ FALTAN ${orgia.condones - this.condones001} CONDONES 0.01`;
        }
        
        return `
            <div style="background: rgba(255,255,255,0.05); border-radius: 20px; padding: 20px; border: 3px solid ${borderColor}; position: relative;">
                <img src="${orgia.imagen}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 15px; margin-bottom: 15px;">
                
                <h3 style="color: #FFD166; margin-bottom: 15px; font-size: 1.3rem; text-align: center;">${orgia.nombre}</h3>
                
                <!-- Estado de cada hermana -->
                <div style="margin-bottom: 15px;">
                    ${estadoRequisitos.map(h => `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; padding: 5px; background: rgba(255,255,255,0.03); border-radius: 8px;">
                            <span style="color: ${h.color}; font-weight: bold;">${h.nombre}</span>
                            <div>
                                <span style="color: ${h.afinidadOk ? '#4CAF50' : '#FF6B6B'}; margin-right: 10px;">
                                    💝 ${h.afinidad}/${h.afinidadReq}
                                </span>
                                <span style="color: ${h.nivelOk ? '#4CAF50' : '#FF6B6B'};">
                                    ⭐ ${h.nivel}/${h.nivelReq}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Requisitos generales -->
                <div style="background: rgba(88,100,245,0.1); padding: 10px; border-radius: 10px; margin-bottom: 15px; text-align: center;">
                    <span style="color: #5864F5; font-weight: bold;">💎 ${orgia.condones} condones 0.01 requeridos</span>
                </div>
                
                <!-- Botón de inicio -->
                <button class="card-button" onclick="iniciarOrgia('${orgia.id}', '${orgia.tipo}')" 
                        style="background: ${puedeIntentar ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' : 'rgba(255,255,255,0.1)'}; width: 100%; padding: 15px; border: none; border-radius: 10px; color: white; font-weight: bold; cursor: ${puedeIntentar ? 'pointer' : 'not-allowed'};"
                        ${!puedeIntentar ? 'disabled' : ''}>
                    ${estadoTexto}
                </button>
            </div>
        `;
    }

    // ====================
    // INICIAR ORGÍA (con verificación de requisitos)
    // ====================
    
    iniciarOrgia(orgiaId, tipo) {
        // Obtener datos según tipo
        let orgia;
        if (tipo === 'duo' || tipo === 'trio' || tipo === 'cuarteto' || tipo === 'quinteto') {
            // Buscar en mamadas primero
            if (this.videosMamadas[orgiaId]) {
                orgia = this.obtenerDatosOrgiaMamada(orgiaId);
            } else if (this.videosDoggystyle[orgiaId]) {
                orgia = this.obtenerDatosOrgiaDoggystyle(orgiaId);
            }
        }
        
        if (!orgia) {
            this.mostrarNotificacion('❌ Orgía no encontrada');
            return;
        }
        
        // Verificar requisitos NUEVAMENTE (por seguridad)
        for (let hermanaId of orgia.hermanas) {
            const hermana = this.datosPersonajes[hermanaId];
            if (hermana.afinidad < orgia.afinidadRequerida) {
                this.mostrarNotificacion(`❌ ${hermana.nombre} no tiene suficiente afinidad (${hermana.afinidad}/${orgia.afinidadRequerida})`);
                return;
            }
            if (hermana.nivel < orgia.nivelRequerido) {
                this.mostrarNotificacion(`❌ ${hermana.nombre} no tiene suficiente nivel (${hermana.nivel}/${orgia.nivelRequerido})`);
                return;
            }
        }
        
        // Verificar condones
        if (this.condones001 < orgia.condones) {
            this.mostrarNotificacion(`❌ Necesitas ${orgia.condones} condones 0.01 (tienes ${this.condones001})`);
            return;
        }
        
        // Calcular probabilidad de éxito (basada en afinidad promedio)
        const afinidadPromedio = orgia.hermanas.reduce((sum, id) => sum + this.datosPersonajes[id].afinidad, 0) / orgia.hermanas.length;
        let probabilidad = 30 + (afinidadPromedio - 100) / 5;
        probabilidad = Math.min(80, Math.max(20, Math.round(probabilidad)));
        
        // Preguntar confirmación
        const confirmar = confirm(`¿Iniciar ${orgia.nombre}?\n\n` +
            `Requisitos verificados:\n` +
            `✓ Afinidad: ${orgia.hermanas.map(id => this.datosPersonajes[id].nombre.split(' ')[0] + ' ' + this.datosPersonajes[id].afinidad).join(', ')}\n` +
            `✓ Nivel: ${orgia.hermanas.map(id => this.datosPersonajes[id].nivel).join(', ')}\n` +
            `✓ Condones 0.01: ${orgia.condones}\n\n` +
            `Probabilidad de éxito: ${probabilidad}%\n\n` +
            `¿Continuar?`);
        
        if (!confirmar) return;
        
        // Consumir condones
        this.condones001 -= orgia.condones;
        this.guardarCondones001();
        
        // Determinar éxito
        const exito = Math.random() * 100 < probabilidad;
        
        if (exito) {
            // ÉXITO - Dar recompensas
            const expTotal = orgia.condones * 150;
            const afinidadTotal = orgia.condones * 40;
            const expIndividual = Math.round(expTotal / orgia.hermanas.length);
            const afinidadIndividual = Math.round(afinidadTotal / orgia.hermanas.length);
            
            let mensaje = `🎉 ¡ORGÍA EXITOSA! (${orgia.nombre})\n\n`;
            
            for (let hermanaId of orgia.hermanas) {
                const hermana = this.datosPersonajes[hermanaId];
                hermana.afinidad = Math.min(hermana.afinidad + afinidadIndividual, 200);
                hermana.exp += expIndividual;
                hermana.estadoAnimo = 'feliz';
                
                // Verificar subida de nivel
                if (hermana.exp >= hermana.expNecesaria) {
                    this.subirNivel(hermanaId);
                }
                
                mensaje += `${hermana.nombre.split(' ')[0]}: +${afinidadIndividual} afinidad, +${expIndividual} EXP\n`;
            }
            
            this.mostrarNotificacion(mensaje);
            
            // Mostrar video/imagen de éxito
            this.mostrarVideoOrgia(orgiaId, tipo, true);
            
        } else {
            // FALLO - Penalización
            const perdidaAfinidad = Math.round(orgia.condones * 10);
            
            let mensaje = `❌ ORGÍA FALLIDA (${orgia.nombre})\n\n`;
            
            for (let hermanaId of orgia.hermanas) {
                const hermana = this.datosPersonajes[hermanaId];
                hermana.afinidad = Math.max(hermana.afinidad - perdidaAfinidad, -100);
                hermana.estadoAnimo = 'enojada';
                
                mensaje += `${hermana.nombre.split(' ')[0]}: -${perdidaAfinidad} afinidad\n`;
            }
            
            this.mostrarNotificacion(mensaje);
            
            // Mostrar imagen de fallo
            this.mostrarVideoOrgia(orgiaId, tipo, false);
        }
        
        this.guardarDatosPersonajes();
    }

    // ====================
    // OBTENER DATOS DE ORGÍA (mamada)
    // ====================
    
    obtenerDatosOrgiaMamada(orgiaId) {
        const mapa = {
            // DÚOS
            'mamada_ichika_nino': { hermanas: ['ichika', 'nino'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Ichika & Nino' },
            'mamada_ichika_miku': { hermanas: ['ichika', 'miku'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Ichika & Miku' },
            'mamada_ichika_yotsuba': { hermanas: ['ichika', 'yotsuba'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Ichika & Yotsuba' },
            'mamada_ichika_itsuki': { hermanas: ['ichika', 'itsuki'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Ichika & Itsuki' },
            'mamada_nino_miku': { hermanas: ['nino', 'miku'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Nino & Miku' },
            'mamada_nino_yotsuba': { hermanas: ['nino', 'yotsuba'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Nino & Yotsuba' },
            'mamada_nino_itsuki': { hermanas: ['nino', 'itsuki'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Nino & Itsuki' },
            'mamada_miku_yotsuba': { hermanas: ['miku', 'yotsuba'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Miku & Yotsuba' },
            'mamada_miku_itsuki': { hermanas: ['miku', 'itsuki'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Miku & Itsuki' },
            'mamada_yotsuba_itsuki': { hermanas: ['yotsuba', 'itsuki'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Yotsuba & Itsuki' },
            
            // TRÍOS
            'mamada_ichika_nino_miku': { hermanas: ['ichika', 'nino', 'miku'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Nino & Miku' },
            'mamada_ichika_nino_yotsuba': { hermanas: ['ichika', 'nino', 'yotsuba'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Nino & Yotsuba' },
            'mamada_ichika_nino_itsuki': { hermanas: ['ichika', 'nino', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Nino & Itsuki' },
            'mamada_ichika_miku_yotsuba': { hermanas: ['ichika', 'miku', 'yotsuba'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Miku & Yotsuba' },
            'mamada_ichika_miku_itsuki': { hermanas: ['ichika', 'miku', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Miku & Itsuki' },
            'mamada_ichika_yotsuba_itsuki': { hermanas: ['ichika', 'yotsuba', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Yotsuba & Itsuki' },
            'mamada_nino_miku_yotsuba': { hermanas: ['nino', 'miku', 'yotsuba'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Nino, Miku & Yotsuba' },
            'mamada_nino_miku_itsuki': { hermanas: ['nino', 'miku', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Nino, Miku & Itsuki' },
            'mamada_nino_yotsuba_itsuki': { hermanas: ['nino', 'yotsuba', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Nino, Yotsuba & Itsuki' },
            'mamada_miku_yotsuba_itsuki': { hermanas: ['miku', 'yotsuba', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Miku, Yotsuba & Itsuki' },
            
            // CUARTETOS
            'mamada_ichika_nino_miku_yotsuba': { hermanas: ['ichika', 'nino', 'miku', 'yotsuba'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Ichika, Nino, Miku & Yotsuba' },
            'mamada_ichika_nino_miku_itsuki': { hermanas: ['ichika', 'nino', 'miku', 'itsuki'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Ichika, Nino, Miku & Itsuki' },
            'mamada_ichika_nino_yotsuba_itsuki': { hermanas: ['ichika', 'nino', 'yotsuba', 'itsuki'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Ichika, Nino, Yotsuba & Itsuki' },
            'mamada_ichika_miku_yotsuba_itsuki': { hermanas: ['ichika', 'miku', 'yotsuba', 'itsuki'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Ichika, Miku, Yotsuba & Itsuki' },
            'mamada_nino_miku_yotsuba_itsuki': { hermanas: ['nino', 'miku', 'yotsuba', 'itsuki'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Nino, Miku, Yotsuba & Itsuki' },
            
            // QUINTETO
            'mamada_todas': { hermanas: ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'], afinidadReq: 200, nivelReq: 8, condones: 5, nombre: 'TODAS LAS HERMANAS' }
        };
        
        return mapa[orgiaId] || null;
    }

    // ====================
    // OBTENER DATOS DE ORGÍA (doggystyle)
    // ====================
    
    obtenerDatosOrgiaDoggystyle(orgiaId) {
        const mapa = {
            // DÚOS
            'doggystyle_ichika_nino': { hermanas: ['ichika', 'nino'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Ichika & Nino' },
            'doggystyle_ichika_miku': { hermanas: ['ichika', 'miku'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Ichika & Miku' },
            'doggystyle_ichika_yotsuba': { hermanas: ['ichika', 'yotsuba'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Ichika & Yotsuba' },
            'doggystyle_ichika_itsuki': { hermanas: ['ichika', 'itsuki'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Ichika & Itsuki' },
            'doggystyle_nino_miku': { hermanas: ['nino', 'miku'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Nino & Miku' },
            'doggystyle_nino_yotsuba': { hermanas: ['nino', 'yotsuba'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Nino & Yotsuba' },
            'doggystyle_nino_itsuki': { hermanas: ['nino', 'itsuki'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Nino & Itsuki' },
            'doggystyle_miku_yotsuba': { hermanas: ['miku', 'yotsuba'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Miku & Yotsuba' },
            'doggystyle_miku_itsuki': { hermanas: ['miku', 'itsuki'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Miku & Itsuki' },
            'doggystyle_yotsuba_itsuki': { hermanas: ['yotsuba', 'itsuki'], afinidadReq: 100, nivelReq: 5, condones: 2, nombre: 'Yotsuba & Itsuki' },
            
            // TRÍOS
            'doggystyle_ichika_nino_miku': { hermanas: ['ichika', 'nino', 'miku'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Nino & Miku' },
            'doggystyle_ichika_nino_yotsuba': { hermanas: ['ichika', 'nino', 'yotsuba'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Nino & Yotsuba' },
            'doggystyle_ichika_nino_itsuki': { hermanas: ['ichika', 'nino', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Nino & Itsuki' },
            'doggystyle_ichika_miku_yotsuba': { hermanas: ['ichika', 'miku', 'yotsuba'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Miku & Yotsuba' },
            'doggystyle_ichika_miku_itsuki': { hermanas: ['ichika', 'miku', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Miku & Itsuki' },
            'doggystyle_ichika_yotsuba_itsuki': { hermanas: ['ichika', 'yotsuba', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Ichika, Yotsuba & Itsuki' },
            'doggystyle_nino_miku_yotsuba': { hermanas: ['nino', 'miku', 'yotsuba'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Nino, Miku & Yotsuba' },
            'doggystyle_nino_miku_itsuki': { hermanas: ['nino', 'miku', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Nino, Miku & Itsuki' },
            'doggystyle_nino_yotsuba_itsuki': { hermanas: ['nino', 'yotsuba', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Nino, Yotsuba & Itsuki' },
            'doggystyle_miku_yotsuba_itsuki': { hermanas: ['miku', 'yotsuba', 'itsuki'], afinidadReq: 130, nivelReq: 6, condones: 3, nombre: 'Miku, Yotsuba & Itsuki' },
            
            // CUARTETOS
            'doggystyle_ichika_nino_miku_yotsuba': { hermanas: ['ichika', 'nino', 'miku', 'yotsuba'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Ichika, Nino, Miku & Yotsuba' },
            'doggystyle_ichika_nino_miku_itsuki': { hermanas: ['ichika', 'nino', 'miku', 'itsuki'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Ichika, Nino, Miku & Itsuki' },
            'doggystyle_ichika_nino_yotsuba_itsuki': { hermanas: ['ichika', 'nino', 'yotsuba', 'itsuki'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Ichika, Nino, Yotsuba & Itsuki' },
            'doggystyle_ichika_miku_yotsuba_itsuki': { hermanas: ['ichika', 'miku', 'yotsuba', 'itsuki'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Ichika, Miku, Yotsuba & Itsuki' },
            'doggystyle_nino_miku_yotsuba_itsuki': { hermanas: ['nino', 'miku', 'yotsuba', 'itsuki'], afinidadReq: 160, nivelReq: 7, condones: 4, nombre: 'Nino, Miku, Yotsuba & Itsuki' },
            
            // QUINTETO
            'doggystyle_todas': { hermanas: ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'], afinidadReq: 200, nivelReq: 8, condones: 5, nombre: 'TODAS LAS HERMANAS' }
        };
        
        return mapa[orgiaId] || null;
    }

    // ====================
    // MOSTRAR VIDEO DE ORGÍA
    // ====================
    
    mostrarVideoOrgia(orgiaId, tipo, exito) {
        const videos = tipo === 'mamada' ? this.videosMamadas : this.videosDoggystyle;
        const videoData = videos[orgiaId];
        
        if (!videoData) return;
        
        const orgiaData = tipo === 'mamada' ? 
            this.obtenerDatosOrgiaMamada(orgiaId) : 
            this.obtenerDatosOrgiaDoggystyle(orgiaId);
        
        const mangaSection = document.getElementById('manga-section');
        
        const html = `
            <div style="max-width: 900px; margin: 40px auto; padding: 30px; background: rgba(0,0,0,0.9); border-radius: 30px; border: 4px solid ${exito ? '#4CAF50' : '#FF1493'};">
                <h2 style="text-align: center; color: ${exito ? '#4CAF50' : '#FF1493'}; margin-bottom: 30px; font-size: 2.5rem;">
                    ${exito ? '🎉 ¡ORGÍA EXITOSA! 🎉' : '❌ ORGÍA FALLIDA ❌'}
                </h2>
                
                <img src="${videoData.imagen}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 20px; margin-bottom: 30px; border: 3px solid ${exito ? '#4CAF50' : '#FF1493'};">
                
                <h3 style="text-align: center; color: #FFD166; margin-bottom: 20px; font-size: 2rem;">
                    ${orgiaData.nombre}
                </h3>
                
                <!-- Reproductor de video -->
                <div style="margin: 30px 0; border-radius: 15px; overflow: hidden; border: 3px solid ${exito ? '#4CAF50' : '#FF1493'};">
                    <iframe 
                        src="https://drive.google.com/file/d/${videoData.videoId}/preview"
                        width="100%"
                        height="400"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        style="border-radius: 12px;"
                    ></iframe>
                </div>
                
                <!-- Miniaturas de las hermanas -->
                <div style="display: flex; justify-content: center; gap: 20px; margin: 30px 0;">
                    ${orgiaData.hermanas.map(id => {
                        const h = this.datosPersonajes[id];
                        return `
                            <div style="text-align: center;">
                                <img src="${h.imagen}" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid ${h.color};">
                                <div style="margin-top: 5px; color: ${h.color};">${h.nombre.split(' ')[0]}</div>
                                <div style="font-size: 0.8rem;">💝 ${h.afinidad}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div style="text-align: center;">
                    <button class="card-button" onclick="quintillizasRPG.volverAOrgias()" 
                            style="background: linear-gradient(135deg, #FF1493, #8A5AF7); padding: 15px 40px; font-size: 1.2rem;">
                        ↩️ Volver a Orgías
                    </button>
                </div>
            </div>
        `;
        
        mangaSection.innerHTML = html;
        
        const botonVolver = document.createElement('button');
        botonVolver.className = 'btn-atras-especifico';
        botonVolver.innerHTML = '← Volver al RPG';
        botonVolver.style.margin = '20px';
        botonVolver.onclick = () => this.cargarPaginaPrincipal();
        mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
    }

    // ====================
    // VOLVER A PANTALLA DE ORGIAS
    // ====================
    
    volverAOrgias() {
        const mangaSection = document.getElementById('manga-section');
        mangaSection.innerHTML = this.cargarPaginaOrgias();
        
        const botonVolver = document.createElement('button');
        botonVolver.className = 'btn-atras-especifico';
        botonVolver.innerHTML = '← Volver al RPG';
        botonVolver.style.margin = '20px';
        botonVolver.onclick = () => this.cargarPaginaPrincipal();
        mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
    }

    // ====================
    // PANTALLA PRINCIPAL DEL RPG
    // ====================
    
    cargarPaginaPrincipal() {
        return `
            <div style="max-width: 1400px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: #FF1493; margin-bottom: 10px; font-size: 3rem;">
                    🎮 RPG QUINTILLIZAS NAKANO
                </h1>
                
                <!-- BOTÓN GIGANTE DE ORGIAS -->
                <div style="text-align: center; margin: 50px 0;">
                    <button class="card-button" onclick="cargarPaginaOrgias()" 
                            style="background: linear-gradient(135deg, #FF1493, #8A5AF7); padding: 30px 80px; font-size: 3rem; border: 5px solid white; box-shadow: 0 0 50px rgba(255,20,147,0.7); border-radius: 60px;">
                        🎉 ORGIAS 🎉
                    </button>
                    <p style="margin-top: 20px; opacity: 0.8; font-size: 1.2rem;">
                        Haz clic para acceder a todas las combinaciones de Mamadas y Doggystyle
                    </p>
                </div>
                
                <!-- RESUMEN DE CONDONES -->
                <div style="background: rgba(255,20,147,0.1); border-radius: 20px; padding: 25px; margin: 40px 0;">
                    <h3 style="color: #FFD166; text-align: center;">💎 TUS RECURSOS</h3>
                    <div style="display: flex; justify-content: center; gap: 50px; margin-top: 20px;">
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; color: #4CAF50;">${this.condones}</div>
                            <div>🛒 Condones Normales</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; color: #5864F5;">${this.condones001}</div>
                            <div>💎 Condones 0.01</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // ====================
    // COMPRAR CONDONES
    // ====================
    
    comprarCondones(cantidad) {
        const costo = cantidad * 50;
        if (sistemaEconomia.obtenerDinero() < costo) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return false;
        }
        
        sistemaEconomia.agregarDinero(-costo);
        this.condones += cantidad;
        this.guardarCondones();
        this.mostrarNotificacion(`🛒 +${cantidad} condones normales`);
        return true;
    }

    comprarCondones001(cantidad) {
        const costo = cantidad * 200;
        if (sistemaEconomia.obtenerDinero() < costo) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return false;
        }
        
        sistemaEconomia.agregarDinero(-costo);
        this.condones001 += cantidad;
        this.guardarCondones001();
        this.mostrarNotificacion(`💎 +${cantidad} condones 0.01`);
        return true;
    }

    // ====================
    // UTILIDADES
    // ====================
    
    mostrarNotificacion(mensaje) {
        const notif = document.createElement('div');
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #FF1493, #8A5AF7);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            font-weight: bold;
            z-index: 1001;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
            border: 2px solid white;
            white-space: pre-line;
            max-width: 400px;
        `;
        
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 2500);
    }

    // ====================
    // LOCAL STORAGE
    // ====================
    
    guardarCondones() {
        localStorage.setItem('rpg_condones', this.condones);
    }
    
    cargarCondones() {
        return parseInt(localStorage.getItem('rpg_condones')) || 0;
    }
    
    guardarCondones001() {
        localStorage.setItem('rpg_condones001', this.condones001);
    }
    
    cargarCondones001() {
        return parseInt(localStorage.getItem('rpg_condones001')) || 0;
    }
    
    guardarDatosPersonajes() {
        localStorage.setItem('rpg_datos_personajes', JSON.stringify(this.datosPersonajes));
    }
    
    cargarDatosPersonajes() {
        const data = localStorage.getItem('rpg_datos_personajes');
        return data ? JSON.parse(data) : null;
    }
    
    guardarPersonajeSeleccionado() {
        localStorage.setItem('rpg_personaje_seleccionado', this.personajeSeleccionado);
    }
    
    cargarPersonajeSeleccionado() {
        return localStorage.getItem('rpg_personaje_seleccionado');
    }
}

// ====================
// INSTANCIA GLOBAL
// ====================

const quintillizasRPG = new QuintillizasRPG();

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    quintillizasRPG.inicializar();
    console.log('🎮 RPG Quintillizas - Sistema de Orgías con Cuadrícula activado');
});
