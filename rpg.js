// ================================================
// RPG COMPLETO: LAS QUINTILLIZAS NAKANO - SISTEMA DIFICULTOSO + ORGÍAS + IMÁGENES
// ================================================

class QuintillizasRPG {
    constructor() {
        this.personajeSeleccionado = this.cargarPersonajeSeleccionado() || null;
        this.datosPersonajes = this.cargarDatosPersonajes() || this.inicializarDatosPersonajes();
        this.condones = this.cargarCondones() || 0;
        this.condones001 = this.cargarCondones001() || 0;
        this.ultimaInteraccion = null;
        this.modoOrgias = false;
        this.categoriaOrgiasActual = 'mamadas'; // 'mamadas', 'doggystyle', 'orgias'

        // ========================================
        // MOMENTOS GRUPALES (ORGÍAS) - SOLO CONDONES 0.01
        // ========================================
        this.combinacionesGrupales = {
            // ========================================
            // DÚOS (AFINIDAD MÍNIMA 100, NIVEL 5+) - 10 COMBINACIONES
            // ========================================
            
            // 1. NINO + MIKU
            'nino_miku_duo': {
                id: 'nino_miku_duo',
                nombre: '😤😳 DÚO: Mamada Tsundere-Tímida',
                descripcion: 'Nino, a regañadientes, te toma el pene mientras Miku, sonrojada, lame tus testículos. La combinación de la actitud tsundere de Nino con la timidez de Miku crea una experiencia única. Nino dice "¡No es que me guste hacer esto!" mientras acelera el ritmo.',
                participantes: ['nino', 'miku'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_NINO_MIKU',
                afinidadBaseGanada: 15,
                expBaseGanada: 400,
                probabilidadBase: 10,
                dialogoExito: 'Nino: "B-baka... no es que haya disfrutado..." Miku: "Fue... fue muy intenso..."',
                dialogoFallo: 'Nino: "¡IDIOTA! ¡No fue suficiente!" Miku se esconde detrás de Nino, avergonzada.'
            },
            
            // 2. NINO + ICHIKA
            'nino_ichika_duo': {
                id: 'nino_ichika_duo',
                nombre: '😤💋 DÚO: Mamada Tsundere-Coqueta',
                descripcion: 'Ichika te besa apasionadamente mientras Nino te hace una mamada. Ichika susurra "Disfruta, cariño" al oído, mientras Nino, celosa, intenta superarse para llamar tu atención.',
                participantes: ['nino', 'ichika'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_NINO_ICHIKA',
                afinidadBaseGanada: 15,
                expBaseGanada: 380,
                probabilidadBase: 10,
                dialogoExito: 'Ichika: "Qué divertido~" Nino: "¡Cállate! No fue divertido..."',
                dialogoFallo: 'Ichika: "Oh, qué pena..." Nino: "¡TU CULPA POR SER TAN TORPE!"'
            },
            
            // 3. NINO + YOTSUBA
            'nino_yotsuba_duo': {
                id: 'nino_yotsuba_duo',
                nombre: '😤💪 DÚO: Mamada Tsundere-Energética',
                descripcion: 'Yotsuba, con su energía habitual, te hace una mamada entusiasta mientras Nino, aunque molesta, no quiere quedarse atrás y compite por tu atención. Yotsuba sonríe y dice "¡Vamos, vamos!" mientras Nino frunce el ceño.',
                participantes: ['nino', 'yotsuba'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_NINO_YOTSUBA',
                afinidadBaseGanada: 15,
                expBaseGanada: 390,
                probabilidadBase: 12,
                dialogoExito: 'Yotsuba: "¡Qué bien lo hicimos!" Nino: "Hum... podría haber sido mejor..."',
                dialogoFallo: 'Yotsuba: "¡Lo intentaremos de nuevo!" Nino: "No hay próxima vez, idiota."'
            },
            
            // 4. NINO + ITSUKI
            'nino_itsuki_duo': {
                id: 'nino_itsuki_duo',
                nombre: '😤🍔 DÚO: Mamada Tsundere-Glotona',
                descripcion: 'Itsuki te hace sexo oral mientras come un caramelo, y Nino, aunque dice "qué asco", no puede evitar mirar fijamente y terminar participando con un estilo tsundere clásico.',
                participantes: ['nino', 'itsuki'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516685018646-549d5257ae2a?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_NINO_ITSUKI',
                afinidadBaseGanada: 15,
                expBaseGanada: 370,
                probabilidadBase: 9,
                dialogoExito: 'Itsuki: "Ñam... tenía un sabor interesante" Nino: "¡NO DIGAS ESO!"',
                dialogoFallo: 'Itsuki: "Qué hambre me quedó..." Nino: "¡Concéntrate, idiota!"'
            },
            
            // 5. MIKU + ICHIKA
            'miku_ichika_duo': {
                id: 'miku_ichika_duo',
                nombre: '😳💋 DÚO: Mamada Tímida-Coqueta',
                descripcion: 'Ichika guía a la tímida Miku, mostrándole cómo hacerte una mamada. Miku tiembla de nervios mientras Ichika susurra "Así, suavecito..." y lame tu glande.',
                participantes: ['miku', 'ichika'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_MIKU_ICHIKA',
                afinidadBaseGanada: 15,
                expBaseGanada: 360,
                probabilidadBase: 11,
                dialogoExito: 'Miku: "Ichika... gracias por enseñarme..." Ichika: "Para eso están las hermanas~"',
                dialogoFallo: 'Miku: "Lo siento mucho..." Ichika: "No pasa nada, la próxima será mejor"'
            },
            
            // 6. MIKU + YOTSUBA
            'miku_yotsuba_duo': {
                id: 'miku_yotsuba_duo',
                nombre: '😳💪 DÚO: Mamada Tímida-Energética',
                descripcion: 'Yotsuba, con su entusiasmo, intenta animar a la tímida Miku. "¡Vamos Miku! Hazlo así!" mientras te lame los testículos. Miku, sonrojada, imita sus movimientos.',
                participantes: ['miku', 'yotsuba'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_MIKU_YOTSUBA',
                afinidadBaseGanada: 15,
                expBaseGanada: 375,
                probabilidadBase: 11,
                dialogoExito: 'Yotsuba: "¡Lo hicimos genial!" Miku: "Fue... fue divertido..."',
                dialogoFallo: 'Yotsuba: "¡Ánimo Miku!" Miku: "Es que... me da vergüenza..."'
            },
            
            // 7. MIKU + ITSUKI
            'miku_itsuki_duo': {
                id: 'miku_itsuki_duo',
                nombre: '😳🍔 DÚO: Mamada Tímida-Glotona',
                descripcion: 'Itsuki, mientras saborea un caramelo, lame tu pene con destreza. Miku, observando fascinada, se anima a lamer tus testículos tímidamente.',
                participantes: ['miku', 'itsuki'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516685018646-549d5257ae2a?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_MIKU_ITSUKI',
                afinidadBaseGanada: 15,
                expBaseGanada: 365,
                probabilidadBase: 10,
                dialogoExito: 'Itsuki: "Miku, lo hiciste muy bien" Miku: "Gracias... Itsuki..."',
                dialogoFallo: 'Itsuki: "Tranquila Miku, la práctica hace al maestro"'
            },
            
            // 8. ICHIKA + YOTSUBA
            'ichika_yotsuba_duo': {
                id: 'ichika_yotsuba_duo',
                nombre: '💋💪 DÚO: Mamada Coqueta-Energética',
                descripcion: 'Yotsuba te hace una mamada enérgica mientras Ichika juega con tus pezones y susurra cosas sucias al oído. La combinación de energía y sensualidad te vuelve loco.',
                participantes: ['ichika', 'yotsuba'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_ICHIKA_YOTSUBA',
                afinidadBaseGanada: 15,
                expBaseGanada: 385,
                probabilidadBase: 12,
                dialogoExito: 'Ichika: "Qué divertido~" Yotsuba: "¡La pasamos genial!"',
                dialogoFallo: 'Yotsuba: "Lo siento Ichika..." Ichika: "No pasa nada, cariño"'
            },
            
            // 9. ICHIKA + ITSUKI
            'ichika_itsuki_duo': {
                id: 'ichika_itsuki_duo',
                nombre: '💋🍔 DÚO: Mamada Coqueta-Glotona',
                descripcion: 'Itsuki te hace sexo oral mientras Ichika te besa apasionadamente. Itsuki, con su estilo glotón, lame cada gota de líquido preseminal mientras Ichika juega con tu lengua.',
                participantes: ['ichika', 'itsuki'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516685018646-549d5257ae2a?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_ICHIKA_ITSUKI',
                afinidadBaseGanada: 15,
                expBaseGanada: 380,
                probabilidadBase: 11,
                dialogoExito: 'Ichika: "Itsuki, qué salvaje eres" Itsuki: "Es que... tiene buen sabor..."',
                dialogoFallo: 'Ichika: "Buen intento" Itsuki: "Me distraje pensando en comida..."'
            },
            
            // 10. YOTSUBA + ITSUKI
            'yotsuba_itsuki_duo': {
                id: 'yotsuba_itsuki_duo',
                nombre: '💪🍔 DÚO: Mamada Energética-Glotona',
                descripcion: 'Yotsuba te hace una mamada enérgica mientras Itsuki lame tus testículos como si fueran un caramelo. Las dos compiten por ver quién te da más placer.',
                participantes: ['yotsuba', 'itsuki'],
                tipo: 'duo',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                condones001Requeridos: 2,
                nivelRequerido: 5,
                afinidadRequerida: 100,
                videoId: 'ID_VIDEO_YOTSUBA_ITSUKI',
                afinidadBaseGanada: 15,
                expBaseGanada: 375,
                probabilidadBase: 12,
                dialogoExito: 'Yotsuba: "¡Gané!" Itsuki: "No, yo te di más placer" (discuten amistosamente)',
                dialogoFallo: 'Yotsuba: "Bueno... al menos lo intentamos" Itsuki: "Sí... ¿vamos a comer algo?"'
            },

            // ========================================
            // TRÍOS (AFINIDAD MÍNIMA 130, NIVEL 7+) - 10 COMBINACIONES
            // ========================================
            
            // 1. NINO + MIKU + ICHIKA
            'nino_miku_ichika_trio': {
                id: 'nino_miku_ichika_trio',
                nombre: '😤😳💋 TRÍO: Tsundere-Tímida-Coqueta',
                descripcion: 'Ichika te besa apasionadamente mientras Nino te hace una mamada y Miku lame tus testículos. Nino, celosa de la atención que le das a Ichika, acelera el ritmo. Miku, sonrojada, sigue el ritmo de su hermana mayor.',
                participantes: ['nino', 'miku', 'ichika'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_NINO_MIKU_ICHIKA',
                afinidadBaseGanada: 20,
                expBaseGanada: 600,
                probabilidadBase: 8,
                dialogoExito: 'Ichika: "Qué experiencia~" Nino: "Hum... no estuvo tan mal" Miku: "Fue... increíble..."',
                dialogoFallo: 'Nino: "¡Todo por tu culpa Ichika!" Ichika: "¿Yo? ¿Qué hice?" Miku: "Lo siento..."'
            },
            
            // 2. NINO + MIKU + YOTSUBA
            'nino_miku_yotsuba_trio': {
                id: 'nino_miku_yotsuba_trio',
                nombre: '😤😳💪 TRÍO: Tsundere-Tímida-Energética',
                descripcion: 'Yotsuba te hace una mamada enérgica mientras Nino, competitiva, te hace sexo oral y Miku, tímida, acaricia tu cuerpo. Yotsuba anima a Miku: "¡Vamos, tú puedes!"',
                participantes: ['nino', 'miku', 'yotsuba'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_NINO_MIKU_YOTSUBA',
                afinidadBaseGanada: 20,
                expBaseGanada: 620,
                probabilidadBase: 9,
                dialogoExito: 'Yotsuba: "¡Lo logramos!" Nino: "Fue... aceptable" Miku: "Me divertí..."',
                dialogoFallo: 'Yotsuba: "Ánimo chicas, la próxima será mejor" Nino: "No hay próxima"'
            },
            
            // 3. NINO + MIKU + ITSUKI
            'nino_miku_itsuki_trio': {
                id: 'nino_miku_itsuki_trio',
                nombre: '😤😳🍔 TRÍO: Tsundere-Tímida-Glotona',
                descripcion: 'Itsuki te hace sexo oral mientras come un caramelo, Nino te hace una mamada intensa y Miku lame tus testículos. Itsuki dice "Tiene un sabor único..." mientras Nino pone ojos de indignación.',
                participantes: ['nino', 'miku', 'itsuki'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516685018646-549d5257ae2a?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_NINO_MIKU_ITSUKI',
                afinidadBaseGanada: 20,
                expBaseGanada: 590,
                probabilidadBase: 8,
                dialogoExito: 'Itsuki: "Qué delicia..." Nino: "¡No es comida!" Miku: "Je je..."',
                dialogoFallo: 'Itsuki: "Me distraje con el sabor del caramelo" Nino: "¡Concéntrate, idiota!"'
            },
            
            // 4. NINO + ICHIKA + YOTSUBA
            'nino_ichika_yotsuba_trio': {
                id: 'nino_ichika_yotsuba_trio',
                nombre: '😤💋💪 TRÍO: Tsundere-Coqueta-Energética',
                descripcion: 'Ichika te besa apasionadamente mientras Yotsuba te hace una mamada enérgica y Nino, celosa, te acaricia los testículos. Ichika sonríe provocando a Nino: "¿Te molesta que sea la mejor?"',
                participantes: ['nino', 'ichika', 'yotsuba'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_NINO_ICHIKA_YOTSUBA',
                afinidadBaseGanada: 20,
                expBaseGanada: 610,
                probabilidadBase: 9,
                dialogoExito: 'Ichika: "Qué divertido~" Nino: "Cállate..." Yotsuba: "¡Lo pasamos genial!"',
                dialogoFallo: 'Nino: "Ichika, TÚ siempre arruinas todo" Ichika: "¿Yo? ¿Qué hice?"'
            },
            
            // 5. NINO + ICHIKA + ITSUKI
            'nino_ichika_itsuki_trio': {
                id: 'nino_ichika_itsuki_trio',
                nombre: '😤💋🍔 TRÍO: Tsundere-Coqueta-Glotona',
                descripcion: 'Itsuki te hace sexo oral mientras Ichika te besa y Nino, aunque molesta, te acaricia. Itsuki, con su estilo glotón, lame cada gota mientras Ichika susurra cosas al oído.',
                participantes: ['nino', 'ichika', 'itsuki'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516685018646-549d5257ae2a?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_NINO_ICHIKA_ITSUKI',
                afinidadBaseGanada: 20,
                expBaseGanada: 600,
                probabilidadBase: 8,
                dialogoExito: 'Ichika: "Qué rico~" Itsuki: "Delicioso" Nino: "Ustedes dos son unas pervertidas"',
                dialogoFallo: 'Nino: "¡Itsuki, deja de pensar en comida!" Itsuki: "Pero es que..."'
            },
            
            // 6. NINO + YOTSUBA + ITSUKI
            'nino_yotsuba_itsuki_trio': {
                id: 'nino_yotsuba_itsuki_trio',
                nombre: '😤💪🍔 TRÍO: Tsundere-Energética-Glotona',
                descripcion: 'Yotsuba te hace una mamada enérgica mientras Itsuki lame tus testículos y Nino, competitiva, te hace sexo oral. Las tres compiten por tu atención.',
                participantes: ['nino', 'yotsuba', 'itsuki'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_NINO_YOTSUBA_ITSUKI',
                afinidadBaseGanada: 20,
                expBaseGanada: 605,
                probabilidadBase: 9,
                dialogoExito: 'Yotsuba: "¡Gané!" Itsuki: "No, yo te hice venir" Nino: "Las dos mienten, fui yo"',
                dialogoFallo: 'Nino: "Yotsuba, demasiada energía, sin técnica" Yotsuba: "Lo siento..."'
            },
            
            // 7. MIKU + ICHIKA + YOTSUBA
            'miku_ichika_yotsuba_trio': {
                id: 'miku_ichika_yotsuba_trio',
                nombre: '😳💋💪 TRÍO: Tímida-Coqueta-Energética',
                descripcion: 'Ichika guía a Miku mientras Yotsuba te hace una mamada. Ichika susurra "Así Miku, lame suavemente" mientras Yotsuba, enérgica, acelera el ritmo.',
                participantes: ['miku', 'ichika', 'yotsuba'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_MIKU_ICHIKA_YOTSUBA',
                afinidadBaseGanada: 20,
                expBaseGanada: 595,
                probabilidadBase: 9,
                dialogoExito: 'Miku: "Lo hicimos bien..." Ichika: "Miku, mejoraste mucho" Yotsuba: "¡Sí! ¡Grandioso!"',
                dialogoFallo: 'Ichika: "Tranquilas, la próxima será mejor" Miku: "Lo siento mucho..."'
            },
            
            // 8. MIKU + ICHIKA + ITSUKI
            'miku_ichika_itsuki_trio': {
                id: 'miku_ichika_itsuki_trio',
                nombre: '😳💋🍔 TRÍO: Tímida-Coqueta-Glotona',
                descripcion: 'Itsuki te hace sexo oral mientras Ichika guía a Miku. Miku, tímida, lame tus testículos mientras Itsuki, glotona, disfruta cada momento.',
                participantes: ['miku', 'ichika', 'itsuki'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516685018646-549d5257ae2a?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_MIKU_ICHIKA_ITSUKI',
                afinidadBaseGanada: 20,
                expBaseGanada: 590,
                probabilidadBase: 8,
                dialogoExito: 'Itsuki: "Qué rico todo" Miku: "Fue... placentero" Ichika: "Buen trabajo chicas"',
                dialogoFallo: 'Ichika: "Itsuki, no te distraigas" Itsuki: "Es que... tenía hambre..."'
            },
            
            // 9. MIKU + YOTSUBA + ITSUKI
            'miku_yotsuba_itsuki_trio': {
                id: 'miku_yotsuba_itsuki_trio',
                nombre: '😳💪🍔 TRÍO: Tímida-Energética-Glotona',
                descripcion: 'Yotsuba te hace una mamada enérgica mientras Itsuki lame tus testículos y Miku, tímida, acaricia tu cuerpo. Yotsuba anima a Miku: "¡Vamos, sé más atrevida!"',
                participantes: ['miku', 'yotsuba', 'itsuki'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_MIKU_YOTSUBA_ITSUKI',
                afinidadBaseGanada: 20,
                expBaseGanada: 600,
                probabilidadBase: 9,
                dialogoExito: 'Yotsuba: "¡Miku, lo lograste!" Miku: "Fue gracias a ustedes" Itsuki: "Buen trabajo"',
                dialogoFallo: 'Yotsuba: "Bueno... lo intentamos" Miku: "Perdón..." Itsuki: "¿Vamos a comer?"'
            },
            
            // 10. ICHIKA + YOTSUBA + ITSUKI
            'ichika_yotsuba_itsuki_trio': {
                id: 'ichika_yotsuba_itsuki_trio',
                nombre: '💋💪🍔 TRÍO: Coqueta-Energética-Glotona',
                descripcion: 'Ichika te besa apasionadamente mientras Yotsuba te hace una mamada y Itsuki lame tus testículos. Las tres coordinadas para darte máximo placer.',
                participantes: ['ichika', 'yotsuba', 'itsuki'],
                tipo: 'trio',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                condones001Requeridos: 3,
                nivelRequerido: 7,
                afinidadRequerida: 130,
                videoId: 'ID_VIDEO_ICHIKA_YOTSUBA_ITSUKI',
                afinidadBaseGanada: 20,
                expBaseGanada: 610,
                probabilidadBase: 9,
                dialogoExito: 'Ichika: "Qué experiencia~" Yotsuba: "¡Increíble!" Itsuki: "Delicioso"',
                dialogoFallo: 'Ichika: "Buen intento" Yotsuba: "La próxima será mejor" Itsuki: "Tengo hambre..."'
            },

            // ========================================
            // CUARTETOS (AFINIDAD MÍNIMA 160, NIVEL 8+) - 5 COMBINACIONES
            // ========================================
            
            // 1. NINO + MIKU + ICHIKA + YOTSUBA
            'nino_miku_ichika_yotsuba_cuarteto': {
                id: 'nino_miku_ichika_yotsuba_cuarteto',
                nombre: '😤😳💋💪 CUARTETO: Tsundere-Tímida-Coqueta-Energética',
                descripcion: 'Cuatro hermanas a tu servicio. Yotsuba te hace una mamada enérgica, Ichika te besa apasionadamente, Nino te acaricia los testículos y Miku lame tu glande. Una experiencia de otro nivel.',
                participantes: ['nino', 'miku', 'ichika', 'yotsuba'],
                tipo: 'cuarteto',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                condones001Requeridos: 4,
                nivelRequerido: 8,
                afinidadRequerida: 160,
                videoId: 'ID_VIDEO_NINO_MIKU_ICHIKA_YOTSUBA',
                afinidadBaseGanada: 25,
                expBaseGanada: 900,
                probabilidadBase: 6,
                dialogoExito: 'Todas: "¡Fue increíble!" Nino: "No fue para tanto..." (sonrojada)',
                dialogoFallo: 'Ichika: "Buen intento chicas" Yotsuba: "¡La próxima será mejor!"'
            },
            
            // 2. NINO + MIKU + ICHIKA + ITSUKI
            'nino_miku_ichika_itsuki_cuarteto': {
                id: 'nino_miku_ichika_itsuki_cuarteto',
                nombre: '😤😳💋🍔 CUARTETO: Tsundere-Tímida-Coqueta-Glotona',
                descripcion: 'Itsuki te hace sexo oral mientras Ichika te besa, Nino te acaricia y Miku lame tus testículos. Itsuki, glotona, no deja ni una gota. Nino la mira con desprecio pero sigue participando.',
                participantes: ['nino', 'miku', 'ichika', 'itsuki'],
                tipo: 'cuarteto',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516685018646-549d5257ae2a?w=400&h=150&fit=crop',
                condones001Requeridos: 4,
                nivelRequerido: 8,
                afinidadRequerida: 160,
                videoId: 'ID_VIDEO_NINO_MIKU_ICHIKA_ITSUKI',
                afinidadBaseGanada: 25,
                expBaseGanada: 880,
                probabilidadBase: 6,
                dialogoExito: 'Itsuki: "Qué banquete..." Nino: "Eres una cerda" Ichika: "Jaja, qué divertido" Miku sonríe tímidamente',
                dialogoFallo: 'Nino: "Itsuki, TE PASAS" Itsuki: "Pero si solo estaba..."'
            },
            
            // 3. NINO + MIKU + YOTSUBA + ITSUKI
            'nino_miku_yotsuba_itsuki_cuarteto': {
                id: 'nino_miku_yotsuba_itsuki_cuarteto',
                nombre: '😤😳💪🍔 CUARTETO: Tsundere-Tímida-Energética-Glotona',
                descripcion: 'Yotsuba te hace una mamada enérgica, Itsuki lame tus testículos, Nino te acaricia el glande y Miku, tímida, recorre tu cuerpo con sus manos. Una sinfonía de placer.',
                participantes: ['nino', 'miku', 'yotsuba', 'itsuki'],
                tipo: 'cuarteto',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                condones001Requeridos: 4,
                nivelRequerido: 8,
                afinidadRequerida: 160,
                videoId: 'ID_VIDEO_NINO_MIKU_YOTSUBA_ITSUKI',
                afinidadBaseGanada: 25,
                expBaseGanada: 890,
                probabilidadBase: 7,
                dialogoExito: 'Yotsuba: "¡Somos un gran equipo!" Nino: "Hum... aceptable" Miku: "Sí..." Itsuki: "Delicioso"',
                dialogoFallo: 'Nino: "Demasiadas personas, qué desorden" Yotsuba: "Lo siento, me emocioné"'
            },
            
            // 4. NINO + ICHIKA + YOTSUBA + ITSUKI
            'nino_ichika_yotsuba_itsuki_cuarteto': {
                id: 'nino_ichika_yotsuba_itsuki_cuarteto',
                nombre: '😤💋💪🍔 CUARTETO: Tsundere-Coqueta-Energética-Glotona',
                descripcion: 'Ichika te besa mientras Yotsuba te hace una mamada, Itsuki lame tu glande y Nino, celosa, te acaricia los testículos. Ichika se ríe provocando a Nino.',
                participantes: ['nino', 'ichika', 'yotsuba', 'itsuki'],
                tipo: 'cuarteto',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                condones001Requeridos: 4,
                nivelRequerido: 8,
                afinidadRequerida: 160,
                videoId: 'ID_VIDEO_NINO_ICHIKA_YOTSUBA_ITSUKI',
                afinidadBaseGanada: 25,
                expBaseGanada: 895,
                probabilidadBase: 7,
                dialogoExito: 'Ichika: "Qué rico todo~" Nino: "Ichika, no te hagas" Yotsuba: "¡Súper divertido!" Itsuki: "Ñam"',
                dialogoFallo: 'Nino: "Ichika, siempre quieres ser la protagonista" Ichika: "¿Yo? Solo participo"'
            },
            
            // 5. MIKU + ICHIKA + YOTSUBA + ITSUKI
            'miku_ichika_yotsuba_itsuki_cuarteto': {
                id: 'miku_ichika_yotsuba_itsuki_cuarteto',
                nombre: '😳💋💪🍔 CUARTETO: Tímida-Coqueta-Energética-Glotona',
                descripcion: 'Ichika guía a las demás mientras Yotsuba te hace una mamada, Itsuki lame tus testículos y Miku, tímida, acaricia tu cuerpo. Ichika susurra "Así, todas juntas"',
                participantes: ['miku', 'ichika', 'yotsuba', 'itsuki'],
                tipo: 'cuarteto',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1516685018646-549d5257ae2a?w=400&h=150&fit=crop',
                condones001Requeridos: 4,
                nivelRequerido: 8,
                afinidadRequerida: 160,
                videoId: 'ID_VIDEO_MIKU_ICHIKA_YOTSUBA_ITSUKI',
                afinidadBaseGanada: 25,
                expBaseGanada: 885,
                probabilidadBase: 7,
                dialogoExito: 'Ichika: "Buen trabajo chicas" Miku: "Gracias por incluirme" Yotsuba: "¡Genial!" Itsuki: "Rico"',
                dialogoFallo: 'Ichika: "Tranquilas, la próxima fluirá mejor" Miku: "Lo siento..."'
            },

            // ========================================
            // QUINTETO (AFINIDAD MÍNIMA 200, NIVEL 10) - 1 COMBINACIÓN
            // ========================================
            
            'todas_quinteto': {
                id: 'todas_quinteto',
                nombre: '👑 QUINTETO FINAL: Las 5 Hermanas',
                descripcion: 'Las cinco hermanas Nakano juntas para darte la experiencia definitiva. Nino te hace una mamada tsundere, Miku lame tus testículos tímidamente, Ichika te besa apasionadamente, Yotsuba acaricia tu cuerpo con energía e Itsuki, glotona, lame cada gota. El sueño hecho realidad.',
                participantes: ['nino', 'miku', 'ichika', 'yotsuba', 'itsuki'],
                tipo: 'quinteto',
                categoria: 'mamadas',
                imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                condones001Requeridos: 5,
                nivelRequerido: 10,
                afinidadRequerida: 200,
                videoId: 'ID_VIDEO_TODAS_QUINTETO',
                afinidadBaseGanada: 30,
                expBaseGanada: 1500,
                probabilidadBase: 5,
                dialogoExito: 'Todas: "¡LO LOGRAMOS!" Nino: "Fue... especial" Miku: "Inolvidable" Ichika: "Qué experiencia~" Yotsuba: "¡La mejor!" Itsuki: "Delicioso"',
                dialogoFallo: 'Nino: "¡UNA DE USTEDES ARRUINÓ TODO!" Ichika: "Calma, fue un buen intento" Todas discuten amistosamente'
            }
        };
    }

    // ====================
    // INICIALIZACIÓN DE DATOS DE PERSONAJES CON IMÁGENES PERSONALIZADAS
    // ====================

    inicializarDatosPersonajes() {
        return {
            'ichika': {
                nombre: 'Ichika Nakano',
                color: '#FF6B8B',
                imagen: 'https://pbs.twimg.com/media/G7qfcGRWkAAV74w?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 1000,
                estadoAnimo: 'neutral',
                afinidad: 0,
                descripcion: 'La hermana mayor, responsable y coqueta. Le gusta cuidar a los demás.',
                dificultad: 'media',
                probabilidadBase: 40,
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 3,
                
                // MOMENTOS ÍNTIMOS DE ICHIKA CON IMÁGENES REDIMENSIONADAS
                momentosIntimos: [
                    { 
                        id: 'mamada_ichika', 
                        nombre: '😮 Mamada Apasionada de Ichika', 
                        imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 50, 
                        exp: 200, 
                        descripcion: 'Ichika te toma con suavidad al principio, pero pronto se vuelve apasionada. Sus ojos no se separan de los tuyos mientras acelera el ritmo.',
                        probabilidadBase: 0,
                        nivelRequerido: 3
                    },
                    { 
                        id: 'sexo_oral_ichika', 
                        nombre: '👅 Sexo Oral Intenso de Ichika', 
                        imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 40, 
                        exp: 150, 
                        descripcion: 'Ichika, con su estilo coqueto, te hace sexo oral mientras juega con tu mirada. "¿Te gusta?" susurra con una sonrisa pícara.',
                        probabilidadBase: 0,
                        nivelRequerido: 4
                    },
                    { 
                        id: 'caricia_intima_ichika', 
                        nombre: '👐 Caricia Íntima de Ichika', 
                        imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 20, 
                        exp: 80, 
                        descripcion: 'Ichika acaricia suavemente tus partes más íntimas, explorando cada centímetro con curiosidad y deseo.',
                        probabilidadBase: 5,
                        nivelRequerido: 2
                    },
                    { 
                        id: 'sexo_duro_ichika', 
                        nombre: '💪 Sexo Duro con Ichika', 
                        imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                        condonesRequeridos: 2,
                        condones001Requeridos: 0,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 80, 
                        exp: 300, 
                        descripcion: 'Ichika, dejando de lado su coquetería, cabalga sobre ti con una pasión desenfrenada. Gime tu nombre una y otra vez.',
                        probabilidadBase: 0,
                        nivelRequerido: 5
                    },
                    { 
                        id: 'correrse_dentro_ichika', 
                        nombre: '💦 Correrse Dentro de Ichika', 
                        imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                        condonesRequeridos: 3,
                        condones001Requeridos: 1,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 100, 
                        exp: 500, 
                        descripcion: 'El momento más íntimo con Ichika. Se aferra a ti mientras sientes cómo se estremece al recibirte dentro.',
                        probabilidadBase: 0,
                        nivelRequerido: 6
                    }
                ],
                
                // ACTIVIDADES ESPECIALES DE ICHIKA CON IMÁGENES REDIMENSIONADAS
                actividadesEspeciales: [
                    { 
                        id: 'cafe_romantico', 
                        nombre: '☕ Café Romántico con Ichika', 
                        imagen: 'https://images.unsplash.com/photo-1511920170026-cb1be0e1a741?w=400&h=150&fit=crop',
                        costo: 500, 
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 25, 
                        exp: 80, 
                        descripcion: 'Disfruta de un café íntimo con Ichika en una pequeña cafetería. Las conversaciones se vuelven cada vez más personales.'
                    },
                    { 
                        id: 'estudio_juntos_ichika', 
                        nombre: '📚 Estudio con Ichika', 
                        imagen: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=150&fit=crop',
                        costo: 300, 
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 20, 
                        exp: 60, 
                        descripcion: 'Estudias con Ichika después de clases. Aprovecha cualquier descuido para acercarse más de lo necesario.'
                    },
                    { 
                        id: 'paseo_noche_ichika', 
                        nombre: '🌙 Paseo Nocturno con Ichika', 
                        imagen: 'https://images.unsplash.com/photo-1519608485311-1f5bb89a0e7f?w=400&h=150&fit=crop',
                        costo: 800, 
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 30, 
                        exp: 100, 
                        descripcion: 'Un romántico paseo bajo las estrellas con Ichika. La noche y la intimidad hacen el ambiente perfecto.'
                    }
                ]
            },
            
            'nino': {
                nombre: 'Nino Nakano',
                color: '#FFB347',
                imagen: 'https://pbs.twimg.com/media/G7qfpGZXAAAib4A?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 1200,
                estadoAnimo: 'tsundere',
                afinidad: -50,
                descripcion: 'Tsundere clásica, difícil de conquistar. Cocina increíblemente bien.',
                dificultad: 'alta',
                probabilidadBase: 20,
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 4,
                
                // MOMENTOS ÍNTIMOS DE NINO CON IMÁGENES REDIMENSIONADAS
                momentosIntimos: [
                    { 
                        id: 'mamada_tsundere', 
                        nombre: '😤 Mamada Tsundere de Nino', 
                        imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 60, 
                        exp: 250, 
                        descripcion: 'Nino te hace una mamada a regañadientes, pero pronto se deja llevar. "¡No es que me guste!" dice mientras acelera el ritmo.',
                        probabilidadBase: 0,
                        nivelRequerido: 4
                    },
                    { 
                        id: 'sexo_duro_tsundere', 
                        nombre: '💢 Sexo Duro Tsundere con Nino', 
                        imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                        condonesRequeridos: 2,
                        condones001Requeridos: 0,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 90, 
                        exp: 400, 
                        descripcion: 'Dale duro a Nino mientras ella dice "no es que me guste" con cada embestida, aunque su cuerpo delate lo contrario.',
                        probabilidadBase: 0,
                        nivelRequerido: 6
                    },
                    { 
                        id: 'corrida_cara', 
                        nombre: '💦 Corrida en la Cara de Nino', 
                        imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 1,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 120, 
                        exp: 600, 
                        descripcion: 'Correrse en su cara mientras te mira con odio... aunque sus mejillas rojas digan otra cosa.',
                        probabilidadBase: 0,
                        nivelRequerido: 7
                    }
                ],
                
                // ACTIVIDADES ESPECIALES DE NINO CON IMÁGENES REDIMENSIONADAS
                actividadesEspeciales: [
                    { 
                        id: 'clases_cocina', 
                        nombre: '👩‍🍳 Clases de Cocina con Nino', 
                        imagen: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=150&fit=crop',
                        costo: 600, 
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 40, 
                        exp: 90, 
                        descripcion: 'Nino te enseña a cocinar. Es exigente, pero sus manos sobre las tuyas mientras cocinan valen la pena.'
                    },
                    { 
                        id: 'pelicula_hogar', 
                        nombre: '🎬 Película en Casa con Nino', 
                        imagen: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400&h=150&fit=crop',
                        costo: 400, 
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 25, 
                        exp: 70, 
                        descripcion: 'Una película romántica en el sofá. Nino pone mala cara, pero se acurruca a tu lado sin darse cuenta.'
                    },
                    { 
                        id: 'concierto', 
                        nombre: '🎵 Concierto Juntos', 
                        imagen: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=150&fit=crop',
                        costo: 1000, 
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 50, 
                        exp: 120, 
                        descripcion: 'Llévala a ver su banda favorita. Nino se emociona y termina tomándote de la mano sin darse cuenta.'
                    }
                ]
            },
            
            'miku': {
                nombre: 'Miku Nakano',
                color: '#6A5ACD',
                imagen: 'https://pbs.twimg.com/media/G7qfrrKWsAAv6ZT?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 800,
                estadoAnimo: 'tímida',
                afinidad: 10,
                descripcion: 'Tímida y reservada, le gusta la historia japonesa y los audífonos.',
                dificultad: 'media-baja',
                probabilidadBase: 50,
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 2,
                
                // MOMENTOS ÍNTIMOS DE MIKU CON IMÁGENES REDIMENSIONADAS
                momentosIntimos: [
                    { 
                        id: 'mamada_timida', 
                        nombre: '😳 Mamada Tímida de Miku', 
                        imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 40, 
                        exp: 180, 
                        descripcion: 'Miku, sonrojada hasta las orejas, te hace una mamada suave y llena de timidez. Cada vez que la miras, esconde la mirada.',
                        probabilidadBase: 5,
                        nivelRequerido: 2
                    },
                    { 
                        id: 'sexo_lento', 
                        nombre: '🐌 Sexo Lento con Miku', 
                        imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 60, 
                        exp: 250, 
                        descripcion: 'Sexo lento y romántico con Miku. Se aferra a ti, escondiendo su rostro en tu pecho mientras se deja llevar.',
                        probabilidadBase: 0,
                        nivelRequerido: 3
                    },
                    { 
                        id: 'correrse_dentro_miku', 
                        nombre: '💕 Correrse Dentro de Miku', 
                        imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                        condonesRequeridos: 2,
                        condones001Requeridos: 1,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 80, 
                        exp: 350, 
                        descripcion: 'Correrse dentro de Miku mientras te abraza con fuerza. Sus lágrimas de emoción mojan tu pecho.',
                        probabilidadBase: 0,
                        nivelRequerido: 5
                    }
                ],
                
                // ACTIVIDADES ESPECIALES DE MIKU CON IMÁGENES REDIMENSIONADAS
                actividadesEspeciales: [
                    { 
                        id: 'visita_templo', 
                        nombre: '⛩️ Visita al Templo con Miku', 
                        imagen: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=150&fit=crop',
                        costo: 250, 
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 15, 
                        exp: 50, 
                        descripcion: 'Visita un templo histórico con Miku. Te explica cada detalle con entusiasmo, olvidando su timidez.'
                    },
                    { 
                        id: 'biblioteca', 
                        nombre: '📖 Tarde en Biblioteca con Miku', 
                        imagen: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=150&fit=crop',
                        costo: 200, 
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 10, 
                        exp: 40, 
                        descripcion: 'Estudia historia en la biblioteca con Miku. De vez en cuando, sus rodillas se tocan bajo la mesa.'
                    },
                    { 
                        id: 'concierto_tradicional', 
                        nombre: '🎶 Concierto Tradicional con Miku', 
                        imagen: 'https://images.unsplash.com/photo-1507838153414-b4b713384a98?w=400&h=150&fit=crop',
                        costo: 600, 
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 35, 
                        exp: 95, 
                        descripcion: 'Asiste a un concierto de música tradicional con Miku. La música y la intimidad del momento la hacen sentir especial.'
                    }
                ]
            },
            
            'yotsuba': {
                nombre: 'Yotsuba Nakano',
                color: '#4CAF50',
                imagen: 'https://pbs.twimg.com/media/G7qfupkXUAAX0aS?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 700,
                estadoAnimo: 'energica',
                afinidad: 30,
                descripcion: 'La más enérgica y deportista. Siempre lista para ayudar.',
                dificultad: 'baja',
                probabilidadBase: 60,
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 2,
                
                // MOMENTOS ÍNTIMOS DE YOTSUBA CON IMÁGENES REDIMENSIONADAS
                momentosIntimos: [
                    { 
                        id: 'mamada_energica', 
                        nombre: '💪 Mamada Energética de Yotsuba', 
                        imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 45, 
                        exp: 200, 
                        descripcion: 'Yotsuba, con su energía habitual, te hace una mamada entusiasta. "¿Te gusta? ¿Te gusta?" pregunta sonriendo.',
                        probabilidadBase: 10,
                        nivelRequerido: 2
                    },
                    { 
                        id: 'sexo_rapido', 
                        nombre: '⚡ Sexo Rápido con Yotsuba', 
                        imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 70, 
                        exp: 300, 
                        descripcion: 'Sexo rápido y apasionado con Yotsuba. Su energía es contagiosa y terminas riendo mientras lo hacen.',
                        probabilidadBase: 0,
                        nivelRequerido: 3
                    },
                    { 
                        id: 'doble_penetracion', 
                        nombre: '👯‍♀️ Doble Penetración (Fantasía)', 
                        imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                        condonesRequeridos: 2,
                        condones001Requeridos: 1,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 100, 
                        exp: 500, 
                        descripcion: 'La fantasía de Yotsuba se hace realidad. "¡Esto es un poco loco, pero vamos!" dice emocionada.',
                        probabilidadBase: 0,
                        nivelRequerido: 6
                    }
                ],
                
                // ACTIVIDADES ESPECIALES DE YOTSUBA CON IMÁGENES REDIMENSIONADAS
                actividadesEspeciales: [
                    { 
                        id: 'partido_futbol', 
                        nombre: '⚽ Partido de Fútbol con Yotsuba', 
                        imagen: 'https://images.unsplash.com/photo-1575361204480-a5a5daecce0c?w=400&h=150&fit=crop',
                        costo: 300, 
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 20, 
                        exp: 60, 
                        descripcion: 'Juega un partido de fútbol con Yotsuba. Corre como loca y te abraza cuando gana, sin importar el sudor.'
                    },
                    { 
                        id: 'voluntariado', 
                        nombre: '🤝 Día de Voluntariado con Yotsuba', 
                        imagen: 'https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?w=400&h=150&fit=crop',
                        costo: 150, 
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 15, 
                        exp: 45, 
                        descripcion: 'Ayuda a otros junto a Yotsuba. Su energía positiva ilumina a todos, y a ti te mira con especial cariño.'
                    },
                    { 
                        id: 'carrera_atletismo', 
                        nombre: '🏃‍♀️ Carrera de Atletismo con Yotsuba', 
                        imagen: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=150&fit=crop',
                        costo: 500, 
                        videoId: '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', 
                        afinidad: 30, 
                        exp: 85, 
                        descripcion: 'Participa en una carrera juntos. Al final, exhausta, se apoya en ti y sonríe como nunca.'
                    }
                ]
            },
            
            'itsuki': {
                nombre: 'Itsuki Nakano',
                color: '#FFD166',
                imagen: 'https://pbs.twimg.com/media/G7qfxnsX0AIbJK1?format=png&name=small',
                nivel: 1,
                exp: 0,
                expNecesaria: 900,
                estadoAnimo: 'glotona',
                afinidad: 15,
                descripcion: 'La más glotona, le encanta comer. Es estudiosa y honesta.',
                dificultad: 'baja',
                probabilidadBase: 55,
                videosDisponibles: [],
                nivelRequeridoParaIntimos: 3,
                
                // MOMENTOS ÍNTIMOS DE ITSUKI CON IMÁGENES REDIMENSIONADAS
                momentosIntimos: [
                    { 
                        id: 'mamada_con_sabor', 
                        nombre: '🍓 Mamada con Sabor de Itsuki', 
                        imagen: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 50, 
                        exp: 220, 
                        descripcion: 'Itsuki te hace una mamada mientras saborea un caramelo de fresa. El sabor dulce combinado con su habilidad te vuelve loco.',
                        probabilidadBase: 5,
                        nivelRequerido: 3
                    },
                    { 
                        id: 'sexo_gloton', 
                        nombre: '🍔 Sexo Glotón con Itsuki', 
                        imagen: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 0,
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 65, 
                        exp: 280, 
                        descripcion: 'Itsuki te cabalga mientras come algo dulce. De vez en cuando te ofrece un bocado, mezclando placer y comida.',
                        probabilidadBase: 0,
                        nivelRequerido: 4
                    },
                    { 
                        id: 'correrse_boca', 
                        nombre: '👄 Correrse en la Boca de Itsuki', 
                        imagen: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&h=150&fit=crop',
                        condonesRequeridos: 1,
                        condones001Requeridos: 1,
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 90, 
                        exp: 400, 
                        descripcion: 'Correrse en su boca y que se lo trague. "Tiene un sabor... interesante" dice, sonrojada.',
                        probabilidadBase: 0,
                        nivelRequerido: 6
                    }
                ],
                
                // ACTIVIDADES ESPECIALES DE ITSUKI CON IMÁGENES REDIMENSIONADAS
                actividadesEspeciales: [
                    { 
                        id: 'buffet_ilimitado', 
                        nombre: '🍣 Buffet Ilimitado con Itsuki', 
                        imagen: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=150&fit=crop',
                        costo: 800, 
                        videoId: '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', 
                        afinidad: 40, 
                        exp: 100, 
                        descripcion: 'Llévala a un buffet de sushi. Itsuki come como si no hubiera mañana, y te sirve los mejores trozos.'
                    },
                    { 
                        id: 'cocina_postres', 
                        nombre: '🍰 Clase de Postres con Itsuki', 
                        imagen: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=150&fit=crop',
                        costo: 400, 
                        videoId: '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', 
                        afinidad: 25, 
                        exp: 75, 
                        descripcion: 'Aprende a hacer postres con Itsuki. Prueban todo lo que hacen, y termina con crema en la nariz.'
                    },
                    { 
                        id: 'picnic_parque', 
                        nombre: '🧺 Picnic en el Parque con Itsuki', 
                        imagen: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&h=150&fit=crop',
                        costo: 350, 
                        videoId: '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', 
                        afinidad: 20, 
                        exp: 65, 
                        descripcion: 'Un picnic con mucha comida. Itsuki prepara todo con esmero y comparte cada bocado contigo.'
                    }
                ]
            }
        };
    }

    // ====================
    // INICIALIZACIÓN
    // ====================

    inicializar() {
        console.log('🎮 RPG Quintillizas - Sistema dificultoso + ORGÍAS + IMÁGENES inicializado');
        console.log('📊 Total combinaciones: 10 Dúos + 10 Tríos + 5 Cuartetos + 1 Quinteto = 26 momentos grupales');
        console.log('💎 TODOS requieren SOLO condones 0.01');
        console.log('🖼️ Cada momento íntimo y actividad tiene su propia imagen personalizada (redimensionada)');
        
        window.seleccionarPersonajeRPG = (personajeId) => this.seleccionarPersonajeUI(personajeId);
        window.intentarMomentoIntimoRPG = (personajeId, momentoId) => this.intentarMomentoIntimo(personajeId, momentoId);
        window.comprarActividadRPG = (personajeId, actividadId) => this.comprarActividad(personajeId, actividadId);
        window.comprarCondonesRPG = (cantidad) => this.comprarCondones(cantidad);
        window.comprarCondones001RPG = (cantidad) => this.comprarCondones001(cantidad);
        window.cargarVideoNivel = (personajeId, nivel) => this.cargarVideoNivel(personajeId, nivel);
        window.seleccionarTipoCondon = (tipo) => this.seleccionarTipoCondon(tipo);
        
        // Funciones para orgías
        window.cargarPantallaOrgias = () => this.cargarPantallaOrgias();
        window.cargarCategoriaOrgias = (categoria) => this.cargarCategoriaOrgias(categoria);
        window.intentarMomentoGrupal = (combinacionId) => this.intentarMomentoGrupal(combinacionId);
    }

    // ====================
    // NUEVA PANTALLA DE ORGÍAS
    // ====================

    cargarPantallaOrgias() {
        this.modoOrgias = true;
        const mangaSection = document.getElementById('manga-section');
        
        let html = `
            <div style="max-width: 1400px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: #FF1493; margin-bottom: 10px; font-size: 3rem;">
                    🔞 ORGÍAS - MOMENTOS GRUPALES
                </h1>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">
                    Todas las interacciones requieren CONDONES 0.01 (no usan condones normales)
                </p>
                
                <!-- ESTADO ACTUAL -->
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 20px; padding: 20px; margin-bottom: 30px; border: 2px solid #FF1493;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div>
                            <div style="color: #FF69B4;">💎 Condones 0.01</div>
                            <div style="font-size: 2rem; font-weight: bold; color: #5864F5;">${this.condones001}</div>
                        </div>
                        <div>
                            <div style="color: #FF69B4;">💰 Dinero</div>
                            <div style="font-size: 2rem; font-weight: bold; color: #FFD166;">S/. ${sistemaEconomia.obtenerDinero().toFixed(2)}</div>
                        </div>
                        <div>
                            <div style="color: #FF69B4;">🎯 Combinaciones</div>
                            <div style="font-size: 2rem; font-weight: bold;">26 disponibles</div>
                        </div>
                    </div>
                </div>
                
                <!-- CATEGORÍAS DE ORGÍAS -->
                <div style="display: flex; gap: 20px; justify-content: center; margin: 40px 0;">
                    <button class="card-button" onclick="cargarCategoriaOrgias('mamadas')" 
                            style="background: ${this.categoriaOrgiasActual === 'mamadas' ? 'linear-gradient(135deg, #FF1493, #8A5AF7)' : 'rgba(255,255,255,0.1)'}; padding: 15px 40px; font-size: 1.5rem;">
                        👄 MAMADAS (26)
                    </button>
                    <button class="card-button" onclick="cargarCategoriaOrgias('doggystyle')" 
                            style="background: ${this.categoriaOrgiasActual === 'doggystyle' ? 'linear-gradient(135deg, #FF1493, #8A5AF7)' : 'rgba(255,255,255,0.1)'}; padding: 15px 40px; font-size: 1.5rem;">
                        🐕 DOGGYSTYLE (0)
                    </button>
                </div>
                
                <!-- CONTENIDO DE LA CATEGORÍA -->
                <div id="contenido-categoria-orgias">
                    ${this.cargarCategoriaOrgias(this.categoriaOrgiasActual, true)}
                </div>
                
                <!-- BOTÓN VOLVER -->
                <div style="text-align: center; margin: 40px 0;">
                    <button class="card-button" onclick="quintillizasRPG.volverAlRPG()" 
                            style="background: linear-gradient(135deg, #4CAF50, #2E7D32); padding: 15px 40px;">
                        ↩️ Volver al RPG Principal
                    </button>
                </div>
            </div>
        `;
        
        mangaSection.innerHTML = html;
        const botonVolver = crearBotonVolver(volverAlInicio);
        mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
    }
    
    cargarCategoriaOrgias(categoria, esInterno = false) {
        this.categoriaOrgiasActual = categoria;
        
        if (categoria === 'mamadas') {
            // Mostrar todas las combinaciones de mamadas (por ahora todas son mamadas)
            const combinacionesMamadas = Object.values(this.combinacionesGrupales);
            
            // Agrupar por tipo
            const duos = combinacionesMamadas.filter(c => c.tipo === 'duo');
            const trios = combinacionesMamadas.filter(c => c.tipo === 'trio');
            const cuartetos = combinacionesMamadas.filter(c => c.tipo === 'cuarteto');
            const quinteto = combinacionesMamadas.filter(c => c.tipo === 'quinteto');
            
            let html = `
                <!-- DÚOS -->
                <h2 style="color: #4CAF50; margin: 30px 0 20px;">👯 DÚOS (Afinidad 100+, Nivel 5+) - 2 condones 0.01</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
                    ${this.crearTarjetasGrupales(duos)}
                </div>
                
                <!-- TRÍOS -->
                <h2 style="color: #FF9800; margin: 40px 0 20px;">👯‍♂️ TRÍOS (Afinidad 130+, Nivel 7+) - 3 condones 0.01</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
                    ${this.crearTarjetasGrupales(trios)}
                </div>
                
                <!-- CUARTETOS -->
                <h2 style="color: #FF1493; margin: 40px 0 20px;">👨‍👩‍👧‍👦 CUARTETOS (Afinidad 160+, Nivel 8+) - 4 condones 0.01</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
                    ${this.crearTarjetasGrupales(cuartetos)}
                </div>
                
                <!-- QUINTETO -->
                <h2 style="color: #FFD700; margin: 40px 0 20px;">👑 QUINTETO (Afinidad 200+, Nivel 10) - 5 condones 0.01</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
                    ${this.crearTarjetasGrupales(quinteto)}
                </div>
            `;
            
            if (esInterno) return html;
            
            const contenedor = document.getElementById('contenido-categoria-orgias');
            if (contenedor) contenedor.innerHTML = html;
            
        } else if (categoria === 'doggystyle') {
            const html = `
                <div style="text-align: center; padding: 100px 20px; background: rgba(255,255,255,0.05); border-radius: 30px; margin: 40px 0;">
                    <h2 style="color: #FFD166; font-size: 3rem; margin-bottom: 20px;">🐕 DOGGYSTYLE</h2>
                    <p style="font-size: 1.5rem; opacity: 0.7;">Próximamente... (0 combinaciones disponibles)</p>
                    <p style="margin-top: 30px; opacity: 0.5;">Esta sección estará disponible en futuras actualizaciones</p>
                </div>
            `;
            
            if (esInterno) return html;
            
            const contenedor = document.getElementById('contenido-categoria-orgias');
            if (contenedor) contenedor.innerHTML = html;
        }
    }

    crearTarjetasGrupales(combinaciones) {
        return combinaciones.map(comb => {
            // Verificar si se cumplen los requisitos
            const afinidadActual = comb.participantes.every(id => 
                this.datosPersonajes[id].afinidad >= comb.afinidadRequerida
            );
            
            const nivelActual = comb.participantes.every(id => 
                this.datosPersonajes[id].nivel >= comb.nivelRequerido
            );
            
            const tieneCondones = this.condones001 >= comb.condones001Requeridos;
            const requisitosCumplidos = afinidadActual && nivelActual && tieneCondones;
            
            // Calcular probabilidad
            const probabilidad = this.calcularProbabilidadGrupal(comb);
            
            // Obtener nombres de las participantes
            const nombresParticipantes = comb.participantes.map(id => 
                this.datosPersonajes[id].nombre.split(' ')[0]
            ).join(' + ');
            
            return `
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px; border: 2px solid ${requisitosCumplidos ? '#4CAF50' : '#FF1493'};">
                    <img src="${comb.imagen}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
                    <h3 style="color: #FFD166; margin-bottom: 10px;">${comb.nombre}</h3>
                    <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 10px;">${nombresParticipantes}</p>
                    <p style="font-size: 0.9rem; margin-bottom: 15px;">${comb.descripcion.substring(0, 100)}...</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                        <div>
                            <div style="color: #FF69B4;">Afinidad req</div>
                            <div>${comb.afinidadRequerida}</div>
                        </div>
                        <div>
                            <div style="color: #FF69B4;">Nivel req</div>
                            <div>${comb.nivelRequerido}</div>
                        </div>
                        <div>
                            <div style="color: #5864F5;">Condones 0.01</div>
                            <div>${comb.condones001Requeridos}</div>
                        </div>
                        <div>
                            <div style="color: #4CAF50;">Probabilidad</div>
                            <div>${probabilidad}%</div>
                        </div>
                    </div>
                    
                    <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; margin-bottom: 15px;">
                        <div style="background: linear-gradient(135deg, #FF1493, #FF6B6B); width: ${probabilidad}%; height: 100%;"></div>
                    </div>
                    
                    <button class="card-button" 
                            onclick="intentarMomentoGrupal('${comb.id}')"
                            style="width: 100%; padding: 12px; background: ${requisitosCumplidos ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' : 'rgba(255,255,255,0.1)'};"
                            ${!requisitosCumplidos ? 'disabled' : ''}>
                        ${requisitosCumplidos ? '💎 INTENTAR (gasta ' + comb.condones001Requeridos + ' condones 0.01)' : '❌ REQUISITOS NO CUMPLIDOS'}
                    </button>
                </div>
            `;
        }).join('');
    }

    // ====================
    // CALCULAR PROBABILIDAD GRUPAL
    // ====================

    calcularProbabilidadGrupal(combinacion) {
        let sumaProbabilidades = 0;
        
        for (let id of combinacion.participantes) {
            const personaje = this.datosPersonajes[id];
            let prob = combinacion.probabilidadBase;
            
            // Afinidad (0-200) contribuye hasta 40%
            const afinidadEfectiva = Math.min(Math.max(personaje.afinidad, 0), 200);
            prob += (afinidadEfectiva / 200) * 40;
            
            // Nivel (1-10) contribuye hasta 30%
            prob += (personaje.nivel / 10) * 30;
            
            // Estado de ánimo
            const ajustes = {
                'feliz': 15, 'neutral': 0, 'triste': -25, 'enojada': -40,
                'tsundere': -30, 'tímida': -15, 'energica': 10, 'glotona': 12
            };
            prob += ajustes[personaje.estadoAnimo] || 0;
            
            prob = Math.max(1, Math.min(prob, 100));
            sumaProbabilidades += prob;
        }
        
        return Math.round(sumaProbabilidades / combinacion.participantes.length);
    }

    // ====================
    // INTENTAR MOMENTO GRUPAL
    // ====================

    intentarMomentoGrupal(combinacionId) {
        const combinacion = this.combinacionesGrupales[combinacionId];
        if (!combinacion) return;
        
        // Verificar condones 0.01
        if (this.condones001 < combinacion.condones001Requeridos) {
            this.mostrarNotificacion(`❌ Necesitas ${combinacion.condones001Requeridos} condones 0.01`);
            return;
        }
        
        // Verificar afinidad y nivel de cada participante
        for (let id of combinacion.participantes) {
            const personaje = this.datosPersonajes[id];
            if (personaje.afinidad < combinacion.afinidadRequerida) {
                this.mostrarNotificacion(`❌ ${personaje.nombre} necesita ${combinacion.afinidadRequerida} afinidad (tiene ${personaje.afinidad})`);
                return;
            }
            if (personaje.nivel < combinacion.nivelRequerido) {
                this.mostrarNotificacion(`❌ ${personaje.nombre} necesita nivel ${combinacion.nivelRequerido}`);
                return;
            }
        }
        
        // Calcular probabilidad
        const probabilidad = this.calcularProbabilidadGrupal(combinacion);
        const exito = Math.random() * 100 < probabilidad;
        
        // Descontar condones
        this.condones001 -= combinacion.condones001Requeridos;
        this.guardarCondones001();
        
        if (exito) {
            // ÉXITO
            for (let id of combinacion.participantes) {
                const personaje = this.datosPersonajes[id];
                personaje.afinidad = Math.min(personaje.afinidad + combinacion.afinidadBaseGanada, 200);
                personaje.estadoAnimo = 'feliz';
                this.agregarEXP(id, combinacion.expBaseGanada / combinacion.participantes.length);
            }
            
            this.mostrarNotificacion(`🎉 ¡${combinacion.nombre} exitoso! +${combinacion.afinidadBaseGanada} afinidad cada una, +${combinacion.expBaseGanada} EXP total`);
            this.mostrarNotificacion(combinacion.dialogoExito);
            
            // Reproducir video
            this.reproducirVideoGrupal(combinacion);
            
        } else {
            // FALLO
            for (let id of combinacion.participantes) {
                const personaje = this.datosPersonajes[id];
                personaje.estadoAnimo = 'enojada';
                personaje.afinidad = Math.max(personaje.afinidad - 10, -100);
            }
            
            this.mostrarNotificacion(`❌ ${combinacion.nombre} falló. Todas se enojaron.`);
            this.mostrarNotificacion(combinacion.dialogoFallo);
            this.cargarPantallaOrgias(); // Recargar pantalla
        }
        
        this.guardarDatosPersonajes();
    }

    reproducirVideoGrupal(combinacion) {
        const nombres = combinacion.participantes.map(id => 
            this.datosPersonajes[id].nombre.split(' ')[0]
        ).join(', ');
        
        const html = `
            <div class="reproductor-container" style="max-width: 800px; margin: 40px auto; padding: 30px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${combinacion.imagen}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
                    <h2 style="color: #FF1493; margin-bottom: 10px;">${combinacion.nombre}</h2>
                    <p style="opacity: 0.8;">${nombres}</p>
                </div>
                
                <div class="video-wrapper" style="margin: 30px 0;">
                    <iframe 
                        src="https://drive.google.com/file/d/${combinacion.videoId}/preview"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        style="width: 100%; height: 400px; border-radius: 15px; border: 3px solid #FF1493;"
                    ></iframe>
                </div>
                
                <div style="text-align: center;">
                    <button class="card-button" onclick="cargarPantallaOrgias()" 
                            style="background: linear-gradient(135deg, #FF1493, #8A5AF7); padding: 15px 30px;">
                        ↩️ Volver a Orgías
                    </button>
                </div>
            </div>
        `;
        
        document.getElementById('manga-section').innerHTML = html;
    }

    // ====================
    // FUNCIONES DE PERSONAJE
    // ====================

    seleccionarPersonajeUI(personajeId) {
        this.personajeSeleccionado = personajeId;
        this.guardarPersonajeSeleccionado();
        
        const personaje = this.datosPersonajes[personajeId];
        this.mostrarNotificacion(`💖 Seleccionaste a ${personaje.nombre} (Nivel ${personaje.nivel}, Afinidad ${personaje.afinidad})`);
        
        this.actualizarVistaConPersonaje();
    }

    actualizarVistaConPersonaje() {
        const mangaSection = document.getElementById('manga-section');
        if (!mangaSection) return;
        
        mangaSection.innerHTML = this.crearUIPersonaje();
        
        const botonVolver = document.createElement('button');
        botonVolver.className = 'btn-atras-especifico';
        botonVolver.innerHTML = '← Volver al RPG Principal';
        botonVolver.onclick = () => this.volverAlRPG();
        mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
    }

    crearUIPersonaje() {
        if (!this.personajeSeleccionado) return '<p>Selecciona un personaje primero</p>';
        
        const personaje = this.datosPersonajes[this.personajeSeleccionado];
        
        // MOMENTOS ÍNTIMOS CON IMÁGENES REDIMENSIONADAS
        const momentosIntimosHTML = personaje.momentosIntimos.map(momento => {
            const puedeIntentar = this.condones >= momento.condonesRequeridos && 
                                 this.condones001 >= momento.condones001Requeridos &&
                                 personaje.nivel >= (momento.nivelRequerido || 1);
            
            return `
                <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; border: 1px solid ${personaje.color}50;">
                    <img src="${momento.imagen}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <span style="font-weight: bold; font-size: 1.1rem;">${momento.nombre}</span>
                        <span style="color: #FFD166; font-size: 0.9rem;">
                            ${momento.condonesRequeridos > 0 ? `${momento.condonesRequeridos}🛒` : ''}
                            ${momento.condones001Requeridos > 0 ? `${momento.condones001Requeridos}💎` : ''}
                        </span>
                    </div>
                    <p style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 10px;">${momento.descripcion}</p>
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 15px;">
                        <span style="color: #4CAF50;">+${momento.afinidad} afinidad</span>
                        <span style="color: #FFD166;">+${momento.exp} EXP</span>
                    </div>
                    <button class="card-button" 
                            onclick="intentarMomentoIntimoRPG('${this.personajeSeleccionado}', '${momento.id}')"
                            style="width: 100%; padding: 12px; background: ${puedeIntentar ? 'linear-gradient(135deg, ' + personaje.color + ', #FF1493)' : 'rgba(255,255,255,0.1)'};"
                            ${!puedeIntentar ? 'disabled' : ''}>
                        ${!puedeIntentar ? '❌ REQUISITOS NO CUMPLIDOS' : '💖 INTENTAR MOMENTO ÍNTIMO'}
                    </button>
                </div>
            `;
        }).join('');
        
        // ACTIVIDADES ESPECIALES CON IMÁGENES REDIMENSIONADAS
        const actividadesHTML = personaje.actividadesEspeciales.map(actividad => {
            const puedeComprar = sistemaEconomia.obtenerDinero() >= actividad.costo;
            
            return `
                <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; border: 1px solid rgba(255, 209, 102, 0.3);">
                    <img src="${actividad.imagen}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <span style="font-weight: bold; font-size: 1.1rem;">${actividad.nombre}</span>
                        <span style="color: #FFD166; font-weight: bold;">S/.${actividad.costo}</span>
                    </div>
                    <p style="opacity: 0.7; font-size: 0.9rem; margin: 0 0 10px 0;">${actividad.descripcion}</p>
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 15px;">
                        <span style="color: #4CAF50;">+${actividad.afinidad} afinidad</span>
                        <span style="color: #FFD166;">+${actividad.exp} EXP</span>
                    </div>
                    <button class="card-button" onclick="comprarActividadRPG('${this.personajeSeleccionado}', '${actividad.id}')"
                            style="width: 100%; padding: 12px; background: ${puedeComprar ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' : 'rgba(255,255,255,0.1)'};"
                            ${!puedeComprar ? 'disabled' : ''}>
                        ${!puedeComprar ? '💰 DINERO INSUFICIENTE' : '✨ COMPRAR ACTIVIDAD'}
                    </button>
                </div>
            `;
        }).join('');
        
        return `
            <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
                <!-- CABECERA DEL PERSONAJE -->
                <div style="background: ${personaje.color}20; border-radius: 20px; padding: 30px; margin-bottom: 30px; border: 3px solid ${personaje.color};">
                    <div style="display: flex; align-items: center; gap: 25px;">
                        <img src="${personaje.imagen}" style="width: 150px; height: 150px; border-radius: 50%; border: 5px solid ${personaje.color};">
                        <div>
                            <h1 style="color: ${personaje.color}; font-size: 2.5rem;">${personaje.nombre}</h1>
                            <p style="opacity: 0.8;">${personaje.descripcion}</p>
                            <div style="display: flex; gap: 20px; margin-top: 15px;">
                                <div><strong>Nivel:</strong> ${personaje.nivel}</div>
                                <div><strong>Afinidad:</strong> ${personaje.afinidad}/200</div>
                                <div><strong>EXP:</strong> ${personaje.exp}/${personaje.expNecesaria}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- MOMENTOS ÍNTIMOS -->
                <h2 style="color: #FF1493; margin-bottom: 20px;">💖 MOMENTOS ÍNTIMOS</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 40px;">
                    ${momentosIntimosHTML}
                </div>
                
                <!-- ACTIVIDADES ESPECIALES -->
                <h2 style="color: #FFD166; margin-bottom: 20px;">✨ ACTIVIDADES ESPECIALES</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
                    ${actividadesHTML}
                </div>
            </div>
        `;
    }

    // ====================
    // PANTALLA PRINCIPAL
    // ====================

    cargarPaginaPrincipal() {
        return `
            <div style="max-width: 1400px; margin: 0 auto; padding: 20px;">
                <h1 style="text-align: center; color: #FF1493; margin-bottom: 10px; font-size: 3rem;">
                    🎮 RPG QUINTILLIZAS NAKANO
                </h1>
                <p style="text-align: center; opacity: 0.8; margin-bottom: 40px;">
                    Conquista a las 5 hermanas. <strong>¡NUEVO: ORGÍAS CON IMÁGENES!</strong>
                </p>
                
                <!-- ESTADO ACTUAL -->
                <div style="background: rgba(255, 20, 147, 0.1); border-radius: 20px; padding: 25px; margin-bottom: 30px; border: 2px solid #FF1493;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                        <div>
                            <div style="color: #FF69B4;">👤 Personaje</div>
                            <div style="font-size: 1.3rem;">${this.personajeSeleccionado ? this.datosPersonajes[this.personajeSeleccionado].nombre : 'NINGUNO'}</div>
                        </div>
                        <div>
                            <div style="color: #FF69B4;">💰 Dinero</div>
                            <div style="font-size: 1.3rem; color: #FFD166;">S/. ${sistemaEconomia.obtenerDinero().toFixed(2)}</div>
                        </div>
                        <div>
                            <div style="color: #FF69B4;">🛒 Condones</div>
                            <div style="font-size: 1.3rem; color: #4CAF50;">${this.condones} unidades</div>
                        </div>
                        <div>
                            <div style="color: #FF69B4;">💎 Condones 0.01</div>
                            <div style="font-size: 1.3rem; color: #5864F5;">${this.condones001} unidades</div>
                        </div>
                    </div>
                </div>
                
                <!-- BOTÓN DE ORGÍAS -->
                <div style="text-align: center; margin: 40px 0;">
                    <button class="card-button" onclick="cargarPantallaOrgias()" 
                            style="background: linear-gradient(135deg, #FF1493, #8A5AF7); padding: 20px 60px; font-size: 2rem; border: 3px solid gold; animation: pulse 2s infinite;">
                        🔞 ORGÍAS - 26 COMBINACIONES 🔞
                    </button>
                    <p style="margin-top: 15px; opacity: 0.8;">¡Todas requieren condones 0.01! Dúos, Tríos, Cuartetos y Quinteto</p>
                </div>
                
                <!-- SELECCIÓN DE PERSONAJES -->
                <h2 style="text-align: center; color: #FFD166; margin: 40px 0 30px;">💖 SELECCIONA UNA HERMANA</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 25px;">
                    ${this.crearCardsPersonajes()}
                </div>
                
                <!-- TIENDA DE CONDONES -->
                <div style="background: linear-gradient(135deg, rgba(88, 100, 245, 0.1), rgba(138, 90, 247, 0.1)); border-radius: 20px; padding: 25px; margin: 40px 0; border: 2px solid #5864F5;">
                    <h3 style="color: #5864F5; margin-bottom: 20px;">🛍️ TIENDA DE CONDONES</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: rgba(76, 175, 80, 0.1); border-radius: 15px; padding: 20px; border: 2px solid #4CAF50;">
                            <h4 style="color: #4CAF50;">🛒 Condones Normales</h4>
                            <p>Costo: S/.50 c/u</p>
                            <div style="display: flex; gap: 10px;">
                                <button class="card-button" onclick="comprarCondonesRPG(1)">1 - S/.50</button>
                                <button class="card-button" onclick="comprarCondonesRPG(5)">5 - S/.250</button>
                            </div>
                        </div>
                        <div style="background: rgba(88, 100, 245, 0.1); border-radius: 15px; padding: 20px; border: 2px solid #5864F5;">
                            <h4 style="color: #5864F5;">💎 Condones 0.01</h4>
                            <p>Costo: S/.200 c/u</p>
                            <div style="display: flex; gap: 10px;">
                                <button class="card-button" onclick="comprarCondones001RPG(1)">1 - S/.200</button>
                                <button class="card-button" onclick="comprarCondones001RPG(3)">3 - S/.600</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    crearCardsPersonajes() {
        const personajesIds = ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'];
        
        return personajesIds.map(id => {
            const personaje = this.datosPersonajes[id];
            const esSeleccionado = this.personajeSeleccionado === id;
            
            return `
                <div class="personaje-card" 
                     style="border: 2px solid ${personaje.color}; ${esSeleccionado ? 'border-width: 4px;' : ''}; background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px; cursor: pointer;"
                     onclick="seleccionarPersonajeRPG('${id}')">
                    <img src="${personaje.imagen}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
                    <h3 style="color: ${personaje.color};">${personaje.nombre}</h3>
                    <p>Nivel ${personaje.nivel} • ${personaje.dificultad}</p>
                    <p>Afinidad: ${personaje.afinidad}/200</p>
                    ${esSeleccionado ? '<div style="background: #4CAF50; color: white; padding: 5px; border-radius: 5px; margin-top: 10px;">✓ SELECCIONADA</div>' : ''}
                </div>
            `;
        }).join('');
    }

    // ====================
    // FUNCIONES DE ACCIONES
    // ====================

    intentarMomentoIntimo(personajeId, momentoId) {
        const personaje = this.datosPersonajes[personajeId];
        const momento = personaje.momentosIntimos.find(m => m.id === momentoId);
        
        if (!momento) return;
        
        // Verificar nivel
        if (personaje.nivel < (momento.nivelRequerido || 1)) {
            this.mostrarNotificacion(`❌ Necesitas nivel ${momento.nivelRequerido}`);
            return;
        }
        
        // Verificar condones
        if (this.condones < momento.condonesRequeridos) {
            this.mostrarNotificacion(`❌ Necesitas ${momento.condonesRequeridos} condones`);
            return;
        }
        if (this.condones001 < momento.condones001Requeridos) {
            this.mostrarNotificacion(`❌ Necesitas ${momento.condones001Requeridos} condones 0.01`);
            return;
        }
        
        // Calcular probabilidad
        let prob = momento.probabilidadBase;
        prob += (Math.max(personaje.afinidad, 0) / 200) * 40;
        prob += (personaje.nivel / 10) * 30;
        
        const ajustes = {
            'feliz': 15, 'neutral': 0, 'triste': -25, 'enojada': -40,
            'tsundere': -30, 'tímida': -15, 'energica': 10, 'glotona': 12
        };
        prob += ajustes[personaje.estadoAnimo] || 0;
        
        prob = Math.max(1, Math.min(prob, momento.condones001Requeridos > 0 ? 100 : 80));
        
        const exito = Math.random() * 100 < prob;
        
        // Descontar condones
        this.condones -= momento.condonesRequeridos;
        this.condones001 -= momento.condones001Requeridos;
        this.guardarCondones();
        this.guardarCondones001();
        
        if (exito) {
            personaje.afinidad = Math.min(personaje.afinidad + momento.afinidad, 200);
            personaje.estadoAnimo = 'feliz';
            this.agregarEXP(personajeId, momento.exp);
            this.mostrarNotificacion(`🎉 ¡${momento.nombre} exitoso!`);
            this.reproducirVideoMomento(personaje, momento);
        } else {
            personaje.estadoAnimo = 'enojada';
            personaje.afinidad = Math.max(personaje.afinidad - 10, -100);
            this.mostrarNotificacion(`❌ ${momento.nombre} falló`);
            this.actualizarVistaConPersonaje();
        }
        
        this.guardarDatosPersonajes();
    }

    comprarActividad(personajeId, actividadId) {
        const personaje = this.datosPersonajes[personajeId];
        const actividad = personaje.actividadesEspeciales.find(a => a.id === actividadId);
        
        if (!actividad) return;
        
        const dineroActual = sistemaEconomia.obtenerDinero();
        if (dineroActual < actividad.costo) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return;
        }
        
        sistemaEconomia.agregarDinero(-actividad.costo);
        
        personaje.afinidad = Math.min(personaje.afinidad + actividad.afinidad, 200);
        personaje.estadoAnimo = 'feliz';
        this.agregarEXP(personajeId, actividad.exp);
        
        this.mostrarNotificacion(`🎉 ¡${actividad.nombre} completada!`);
        this.reproducirVideoActividad(personaje, actividad);
        
        this.guardarDatosPersonajes();
    }

    reproducirVideoMomento(personaje, momento) {
        const html = `
            <div class="reproductor-container" style="max-width: 800px; margin: 40px auto; padding: 30px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${momento.imagen}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
                    <h2 style="color: ${personaje.color};">${momento.nombre}</h2>
                    <p>${personaje.nombre}</p>
                </div>
                <div class="video-wrapper">
                    <iframe src="https://drive.google.com/file/d/${momento.videoId}/preview" style="width:100%; height:400px;" frameborder="0" allowfullscreen></iframe>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <button class="card-button" onclick="quintillizasRPG.actualizarVistaConPersonaje()">Volver</button>
                </div>
            </div>
        `;
        document.getElementById('manga-section').innerHTML = html;
    }

    reproducirVideoActividad(personaje, actividad) {
        const html = `
            <div class="reproductor-container" style="max-width: 800px; margin: 40px auto; padding: 30px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${actividad.imagen}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
                    <h2 style="color: ${personaje.color};">${actividad.nombre}</h2>
                    <p>${personaje.nombre}</p>
                </div>
                <div class="video-wrapper">
                    <iframe src="https://drive.google.com/file/d/${actividad.videoId}/preview" style="width:100%; height:400px;" frameborder="0" allowfullscreen></iframe>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <button class="card-button" onclick="quintillizasRPG.actualizarVistaConPersonaje()">Volver</button>
                </div>
            </div>
        `;
        document.getElementById('manga-section').innerHTML = html;
    }

    volverAlRPG() {
        this.modoOrgias = false;
        const mangaSection = document.getElementById('manga-section');
        mangaSection.innerHTML = this.cargarPaginaPrincipal();
        const botonVolver = crearBotonVolver(volverAlInicio);
        mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
    }

    // ====================
    // FUNCIONES DE EXP Y NIVEL
    // ====================

    agregarEXP(personajeId, cantidad) {
        const personaje = this.datosPersonajes[personajeId];
        personaje.exp += cantidad;
        
        if (personaje.exp >= personaje.expNecesaria) {
            this.subirNivel(personajeId);
        }
        
        this.guardarDatosPersonajes();
        return true;
    }

    subirNivel(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        personaje.nivel += 1;
        personaje.exp = personaje.exp - personaje.expNecesaria;
        personaje.expNecesaria = Math.round(personaje.expNecesaria * 1.8);
        
        this.mostrarNotificacion(`🎉 ¡${personaje.nombre} subió al nivel ${personaje.nivel}!`);
        this.desbloquearVideo(personajeId);
    }

    desbloquearVideo(personajeId) {
        const personaje = this.datosPersonajes[personajeId];
        const nivel = personaje.nivel;
        
        const videosPorNivel = {
            2: { id: 'presentacion', nombre: 'Presentación', videoId: this.obtenerVideoIdPorNivel(personajeId, 2) },
            4: { id: 'conversacion_1', nombre: 'Conversación', videoId: this.obtenerVideoIdPorNivel(personajeId, 4) },
            6: { id: 'paseo', nombre: 'Primer Paseo', videoId: this.obtenerVideoIdPorNivel(personajeId, 6) },
            8: { id: 'confesion', nombre: 'Confesión', videoId: this.obtenerVideoIdPorNivel(personajeId, 8) },
            10: { id: 'primer_beso', nombre: 'Primer Beso', videoId: this.obtenerVideoIdPorNivel(personajeId, 10) }
        };
        
        if (videosPorNivel[nivel] && !personaje.videosDisponibles.some(v => v.id === videosPorNivel[nivel].id)) {
            personaje.videosDisponibles.push(videosPorNivel[nivel]);
            this.mostrarNotificacion(`🎬 ¡Video desbloqueado! ${videosPorNivel[nivel].nombre}`);
        }
    }

    obtenerVideoIdPorNivel(personajeId, nivel) {
        const videos = {
            'ichika': ['1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe'],
            'nino': ['1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K'],
            'miku': ['1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS'],
            'yotsuba': ['1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl'],
            'itsuki': ['1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe', '1-wYJYTaw0ZOKQy8BBPR7Fmhlzs0IVx9K', '1X6qhQxLNemXus_5WjLlMIWOAsHsJSsRS', '1tS-gKr6bf4MY5Yrw7zRvP2uP_zq9rsLl', '1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe']
        };
        
        const indice = Math.floor((nivel / 2) - 1);
        return videos[personajeId][indice] || videos[personajeId][0];
    }

    // ====================
    // FUNCIONES DE CONDONES
    // ====================

    comprarCondones(cantidad) {
        const costo = cantidad * 50;
        if (sistemaEconomia.obtenerDinero() < costo) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return;
        }
        sistemaEconomia.agregarDinero(-costo);
        this.condones += cantidad;
        this.guardarCondones();
        this.mostrarNotificacion(`✅ +${cantidad} condones normales`);
    }

    comprarCondones001(cantidad) {
        const costo = cantidad * 200;
        if (sistemaEconomia.obtenerDinero() < costo) {
            this.mostrarNotificacion('❌ Dinero insuficiente');
            return;
        }
        sistemaEconomia.agregarDinero(-costo);
        this.condones001 += cantidad;
        this.guardarCondones001();
        this.mostrarNotificacion(`💎 +${cantidad} condones 0.01`);
    }

    // ====================
    // FUNCIONES DE NOTIFICACIÓN
    // ====================

    mostrarNotificacion(mensaje) {
        const notif = document.createElement('div');
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #FF1493, #FF69B4);
            color: white;
            padding: 12px 25px;
            border-radius: 50px;
            font-weight: bold;
            z-index: 1001;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
            border: 2px solid white;
        `;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 2500);
    }

    // ====================
    // LOCAL STORAGE
    // ====================

    guardarPersonajeSeleccionado() {
        localStorage.setItem('rpg_personaje_seleccionado', this.personajeSeleccionado);
    }

    cargarPersonajeSeleccionado() {
        return localStorage.getItem('rpg_personaje_seleccionado');
    }

    guardarDatosPersonajes() {
        localStorage.setItem('rpg_datos_personajes', JSON.stringify(this.datosPersonajes));
    }

    cargarDatosPersonajes() {
        const datos = localStorage.getItem('rpg_datos_personajes');
        return datos ? JSON.parse(datos) : null;
    }

    guardarCondones() {
        localStorage.setItem('rpg_condones', this.condones.toString());
    }

    cargarCondones() {
        const condones = localStorage.getItem('rpg_condones');
        return condones ? parseInt(condones) : 0;
    }

    guardarCondones001() {
        localStorage.setItem('rpg_condones001', this.condones001.toString());
    }

    cargarCondones001() {
        const condones = localStorage.getItem('rpg_condones001');
        return condones ? parseInt(condones) : 0;
    }

    seleccionarTipoCondon(tipo) {
        return tipo;
    }

    cargarVideoNivel(personajeId, nivel) {
        const videoId = this.obtenerVideoIdPorNivel(personajeId, nivel);
        const personaje = this.datosPersonajes[personajeId];
        
        const html = `
            <div class="reproductor-container" style="max-width: 800px; margin: 40px auto; padding: 30px;">
                <h2 style="color: ${personaje.color};">Video Nivel ${nivel} - ${personaje.nombre}</h2>
                <iframe src="https://drive.google.com/file/d/${videoId}/preview" style="width:100%; height:400px;" frameborder="0" allowfullscreen></iframe>
                <button class="card-button" onclick="quintillizasRPG.actualizarVistaConPersonaje()">Volver</button>
            </div>
        `;
        document.getElementById('manga-section').innerHTML = html;
    }
}

// ================================================
// INSTANCIA GLOBAL
// ================================================
const quintillizasRPG = new QuintillizasRPG();

document.addEventListener('DOMContentLoaded', function() {
    quintillizasRPG.inicializar();
    console.log('🎮 RPG Quintillizas - Sistema COMPLETO activado');
    console.log('📊 26 combinaciones grupales');
    console.log('💎 Todas requieren solo condones 0.01');
    console.log('🖼️ Cada momento tiene imagen personalizada (redimensionada)');
});
