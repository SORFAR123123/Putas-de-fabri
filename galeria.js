// ================================================
// SISTEMA COMPLETO DE GALERÍA DE IMÁGENES
// CON CONTENEDORES Y SUBCONTENEDORES PERSONALIZADOS
// ================================================

const galeriaDatabase = {
    // ============ MODO: GALERÍA ============
    galeria: {
        // CONTENEDORES PRINCIPALES (1-10) - CON NOMBRES PERSONALIZADOS
        contenedores: {
            1: { 
                nombre: 'PAISAJES DE JAPÓN',  // NOMBRE PERSONALIZADO
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
        
        // SUB-CONTENEDORES (5 por cada contenedor) - CON NOMBRES PERSONALIZADOS
        subcontenedores: {
            // Contenedor 1 - PAISAJES
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
            },
            '1_4': { 
                nombre: 'BOSQUES BAMBÚ', 
                imagen: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=300&h=300&fit=crop',
                descripcion: 'Bosques de bambú y senderos naturales',
                imagenes: [
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop'
                ]
            },
            '1_5': { 
                nombre: 'VOLCANES', 
                imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=300&fit=crop',
                descripcion: 'Volcanes activos y termales naturales',
                imagenes: [
                    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop'
                ]
            },
            
            // Contenedor 2 - ARQUITECTURA
            '2_1': { 
                nombre: 'CASTILLOS', 
                imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=300&fit=crop',
                descripcion: 'Castillos feudales y fortalezas históricas',
                imagenes: [
                    'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&h=600&fit=crop'
                ]
            },
            '2_2': { 
                nombre: 'CASAS TRADICIONALES', 
                imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=300&h=300&fit=crop',
                descripcion: 'Viviendas tradicionales japonesas',
                imagenes: [
                    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop'
                ]
            },
            '2_3': { 
                nombre: 'PUENTES', 
                imagen: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=300&h=300&fit=crop',
                descripcion: 'Puentes tradicionales y modernos',
                imagenes: [
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop'
                ]
            },
            '2_4': { 
                nombre: 'RASCACIELOS', 
                imagen: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=300&fit=crop',
                descripcion: 'Edificios modernos y rascacielos',
                imagenes: [
                    'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop'
                ]
            },
            '2_5': { 
                nombre: 'ESTACIONES', 
                imagen: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=300&h=300&fit=crop',
                descripcion: 'Estaciones de tren y metro',
                imagenes: [
                    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop'
                ]
            },
            
            // Contenedor 3 - CIUDADES
            '3_1': { 
                nombre: 'TOKIO', 
                imagen: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=300&h=300&fit=crop',
                descripcion: 'La capital moderna de Japón',
                imagenes: [
                    'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&h=600&fit=crop'
                ]
            },
            '3_2': { 
                nombre: 'KIOTO', 
                imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=300&h=300&fit=crop',
                descripcion: 'Capital histórica y cultural',
                imagenes: [
                    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop'
                ]
            },
            '3_3': { 
                nombre: 'OSAKA', 
                imagen: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=300&h=300&fit=crop',
                descripcion: 'Ciudad comercial y gastronómica',
                imagenes: [
                    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop'
                ]
            },
            '3_4': { 
                nombre: 'HIROSHIMA', 
                imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=300&fit=crop',
                descripcion: 'Ciudad de paz y reconstrucción',
                imagenes: [
                    'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=800&h=600&fit=crop'
                ]
            },
            '3_5': { 
                nombre: 'NAGOYA', 
                imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=300&fit=crop',
                descripcion: 'Centro industrial y tecnológico',
                imagenes: [
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop'
                ]
            },
            
            // Contenedor 4 - TRADICIONES
            '4_1': { 
                nombre: 'FESTIVALES', 
                imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=300&h=300&fit=crop',
                descripcion: 'Matsuri y festividades tradicionales',
                imagenes: [
                    'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&h=600&fit=crop'
                ]
            },
            '4_2': { 
                nombre: 'CEREMONIA TÉ', 
                imagen: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=300&fit=crop',
                descripcion: 'Ceremonia del té japonesa',
                imagenes: [
                    'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=600&fit=crop'
                ]
            },
            '4_3': { 
                nombre: 'KIMONOS', 
                imagen: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=300&fit=crop',
                descripcion: 'Vestimenta tradicional japonesa',
                imagenes: [
                    'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop'
                ]
            },
            '4_4': { 
                nombre: 'ARTES MARCIALES', 
                imagen: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=300&h=300&fit=crop',
                descripcion: 'Karate, Judo, Kendo y otras artes',
                imagenes: [
                    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop'
                ]
            },
            '4_5': { 
                nombre: 'GEISHAS', 
                imagen: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=300&h=300&fit=crop',
                descripcion: 'Artistas tradicionales japonesas',
                imagenes: [
                    'https://images.unsplash.com/photo-1555993539-1732b0258225?w=800&h=600&fit=crop'
                ]
            },
            
            // Contenedor 5 - GASTRONOMÍA
            '5_1': { 
                nombre: 'SUSHI', 
                imagen: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=300&fit=crop',
                descripcion: 'Plato emblemático de la cocina japonesa',
                imagenes: [
                    'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&h=600&fit=crop'
                ]
            },
            '5_2': { 
                nombre: 'RAMEN', 
                imagen: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=300&h=300&fit=crop',
                descripcion: 'Sopa de fideos tradicional',
                imagenes: [
                    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop'
                ]
            },
            '5_3': { 
                nombre: 'TEMPURA', 
                imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=300&fit=crop',
                descripcion: 'Frituras ligeras de marisco y vegetales',
                imagenes: [
                    'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=800&h=600&fit=crop'
                ]
            },
            '5_4': { 
                nombre: 'DULCES', 
                imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=300&fit=crop',
                descripcion: 'Dulces tradicionales japoneses',
                imagenes: [
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop'
                ]
            },
            '5_5': { 
                nombre: 'BEBIDAS', 
                imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=300&h=300&fit=crop',
                descripcion: 'Sake, té verde y otras bebidas',
                imagenes: [
                    'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=800&h=600&fit=crop'
                ]
            },
            
            // Contenedor 6 - ARTE
            '6_1': { 
                nombre: 'CALIGRAFÍA', 
                imagen: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=300&fit=crop',
                descripcion: 'Arte de la escritura japonesa',
                imagenes: [
                    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=600&fit=crop'
                ]
            },
            '6_2': { 
                nombre: 'CERÁMICA', 
                imagen: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=300&fit=crop',
                descripcion: 'Alfarería y cerámica tradicional',
                imagenes: [
                    'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop'
                ]
            },
            '6_3': { 
                nombre: 'UÑOS', 
                imagen: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=300&h=300&fit=crop',
                descripcion: 'Pinturas tradicionales japonesas',
                imagenes: [
                    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop'
                ]
            },
            '6_4': { 
                nombre: 'ESCULTURAS', 
                imagen: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=300&h=300&fit=crop',
                descripcion: 'Esculturas budistas y decorativas',
                imagenes: [
                    'https://images.unsplash.com/photo-1555993539-1732b0258225?w=800&h=600&fit=crop'
                ]
            },
            '6_5': { 
                nombre: 'GRABADOS', 
                imagen: 'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=300&h=300&fit=crop',
                descripcion: 'Grabados en madera ukiyo-e',
                imagenes: [
                    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop'
                ]
            },
            
            // Contenedor 7 - FLORES
            '7_1': { 
                nombre: 'CEREZOS', 
                imagen: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=300&h=300&fit=crop',
                descripcion: 'Sakura en flor durante la primavera',
                imagenes: [
                    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop'
                ]
            },
            '7_2': { 
                nombre: 'LOTOS', 
                imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=300&fit=crop',
                descripcion: 'Flores de loto en estanques',
                imagenes: [
                    'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=800&h=600&fit=crop'
                ]
            },
            '7_3': { 
                nombre: 'CRISANTEMOS', 
                imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=300&fit=crop',
                descripcion: 'Flor imperial de Japón',
                imagenes: [
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop'
                ]
            },
            '7_4': { 
                nombre: 'GIRASOLES', 
                imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=300&h=300&fit=crop',
                descripcion: 'Campos de girasoles en verano',
                imagenes: [
                    'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=800&h=600&fit=crop'
                ]
            },
            '7_5': { 
                nombre: 'ORQUÍDEAS', 
                imagen: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=300&fit=crop',
                descripcion: 'Orquídeas en jardines botánicos',
                imagenes: [
                    'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=600&fit=crop'
                ]
            },
            
            // Contenedor 8 - TEMPLOS
            '8_1': { 
                nombre: 'KIOTO', 
                imagen: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=300&fit=crop',
                descripcion: 'Templos históricos de Kioto',
                imagenes: [
                    'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=800&h=600&fit=crop'
                ]
            },
            '8_2': { 
                nombre: 'NARA', 
                imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=300&fit=crop',
                descripcion: 'Templos antiguos de Nara',
                imagenes: [
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop'
                ]
            },
            '8_3': { 
                nombre: 'NIKKO', 
                imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=300&h=300&fit=crop',
                descripcion: 'Santuarios de Nikko',
                imagenes: [
                    'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=800&h=600&fit=crop'
                ]
            },
            '8_4': { 
                nombre: 'KAMAKURA', 
                imagen: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=300&fit=crop',
                descripcion: 'Templos zen de Kamakura',
                imagenes: [
                    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&h=600&fit=crop'
                ]
            },
            '8_5': { 
                nombre: 'MONTANOSOS', 
                imagen: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=300&h=300&fit=crop',
                descripcion: 'Templos en montañas remotas',
                imagenes: [
                    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop'
                ]
            },
            
            // Contenedor 9 - MODERNO
            '9_1': { 
                nombre: 'TECNOLOGÍA', 
                imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=300&fit=crop',
                descripcion: 'Innovación tecnológica japonesa',
                imagenes: [
                    'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop'
                ]
            },
            '9_2': { 
                nombre: 'MODO', 
                imagen: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=300&h=300&fit=crop',
                descripcion: 'Moda contemporánea japonesa',
                imagenes: [
                    'https://images.unsplash.com/photo-1555993539-1732b0258225?w=800&h=600&fit=crop'
                ]
            },
            '9_3': { 
                nombre: 'ARQUITECTURA', 
                imagen: 'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=300&h=300&fit=crop',
                descripcion: 'Edificios modernos y diseño',
                imagenes: [
                    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop'
                ]
            },
            '9_4': { 
                nombre: 'TRANSPORTE', 
                imagen: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=300&h=300&fit=crop',
                descripcion: 'Transporte moderno en Japón',
                imagenes: [
                    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop'
                ]
            },
            '9_5': { 
                nombre: 'ENTRETENIMIENTO', 
                imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=300&fit=crop',
                descripcion: 'Cultura pop y entretenimiento',
                imagenes: [
                    'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=800&h=600&fit=crop'
                ]
            },
            
            // Contenedor 10 - NOCTURNO
            '10_1': { 
                nombre: 'TOKIO DE NOCHE', 
                imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=300&fit=crop',
                descripcion: 'Luces de neón en Tokio nocturno',
                imagenes: [
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1555993539-1732b0258225?w=800&h=600&fit=crop'
                ]
            },
            '10_2': { 
                nombre: 'TEMPLOS ILUMINADOS', 
                imagen: 'https://images.unsplash.com/photo-1525874684015-58379d421aee?w=300&h=300&fit=crop',
                descripcion: 'Templos iluminados por la noche',
                imagenes: [
                    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop'
                ]
            },
            '10_3': { 
                nombre: 'CALLES', 
                imagen: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=300&h=300&fit=crop',
                descripcion: 'Calles comerciales nocturnas',
                imagenes: [
                    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop'
                ]
            },
            '10_4': { 
                nombre: 'PUEBLOS', 
                imagen: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=300&fit=crop',
                descripcion: 'Pueblos tradicionales de noche',
                imagenes: [
                    'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=800&h=600&fit=crop'
                ]
            },
            '10_5': { 
                nombre: 'FUEGOS', 
                imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=300&fit=crop',
                descripcion: 'Festivales de fuegos artificiales',
                imagenes: [
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop'
                ]
            }
        }
    }
};

// ================================================
// FUNCIONES DE ACCESO PARA GALERÍA
// ================================================

// OBTENER CONTENEDOR DE GALERÍA
function obtenerContenedorGaleria(numero) {
    return galeriaDatabase.galeria.contenedores[numero] || {
        nombre: `GALERÍA ${numero}`,
        imagen: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=400&fit=crop',
        descripcion: 'Colección de imágenes',
        categoria: 'general'
    };
}

// OBTENER SUBCONTENEDOR DE GALERÍA
function obtenerSubcontenedorGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDatabase.galeria.subcontenedores[key] || {
        nombre: `Subcontenedor ${subcontenedor}`,
        imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258225?w=300&h=300&fit=crop',
        descripcion: 'Colección de imágenes',
        imagenes: []
    };
}

// OBTENER IMÁGENES DE UN SUBCONTENEDOR
function obtenerImagenesSubcontenedor(contenedor, subcontenedor) {
    const sub = obtenerSubcontenedorGaleria(contenedor, subcontenedor);
    return sub.imagenes || [];
}

// OBTENER NOMBRE DEL CONTENEDOR
function obtenerNombreContenedorGaleria(numero) {
    const contenedor = obtenerContenedorGaleria(numero);
    return contenedor.nombre;
}

// OBTENER NOMBRE DEL SUBCONTENEDOR
function obtenerNombreSubcontenedorGaleria(contenedor, subcontenedor) {
    const sub = obtenerSubcontenedorGaleria(contenedor, subcontenedor);
    return sub.nombre;
}

// EDITAR CONTENEDOR DE GALERÍA
function editarContenedorGaleria(numero, nuevosDatos) {
    if (!galeriaDatabase.galeria.contenedores[numero]) {
        console.error(`Contenedor ${numero} no existe en galería`);
        return false;
    }
    
    galeriaDatabase.galeria.contenedores[numero] = {
        ...galeriaDatabase.galeria.contenedores[numero],
        ...nuevosDatos
    };
    
    console.log(`✅ Contenedor ${numero} actualizado en galería:`, nuevosDatos);
    return true;
}

// EDITAR SUBCONTENEDOR DE GALERÍA
function editarSubcontenedorGaleria(contenedor, subcontenedor, nuevosDatos) {
    const key = `${contenedor}_${subcontenedor}`;
    
    if (!galeriaDatabase.galeria.subcontenedores[key]) {
        console.error(`Subcontenedor ${key} no existe en galería`);
        return false;
    }
    
    galeriaDatabase.galeria.subcontenedores[key] = {
        ...galeriaDatabase.galeria.subcontenedores[key],
        ...nuevosDatos
    };
    
    console.log(`✅ Subcontenedor ${key} actualizado en galería:`, nuevosDatos);
    return true;
}

// AÑADIR IMAGEN A SUBCONTENEDOR
function añadirImagenSubcontenedor(contenedor, subcontenedor, urlImagen) {
    const key = `${contenedor}_${subcontenedor}`;
    
    if (!galeriaDatabase.galeria.subcontenedores[key]) {
        console.error(`Subcontenedor ${key} no existe en galería`);
        return false;
    }
    
    if (!galeriaDatabase.galeria.subcontenedores[key].imagenes) {
        galeriaDatabase.galeria.subcontenedores[key].imagenes = [];
    }
    
    galeriaDatabase.galeria.subcontenedores[key].imagenes.push(urlImagen);
    
    console.log(`✅ Imagen añadida al subcontenedor ${key}:`, urlImagen);
    return true;
}

// ELIMINAR IMAGEN DE SUBCONTENEDOR
function eliminarImagenSubcontenedor(contenedor, subcontenedor, indice) {
    const key = `${contenedor}_${subcontenedor}`;
    
    if (!galeriaDatabase.galeria.subcontenedores[key]) {
        console.error(`Subcontenedor ${key} no existe en galería`);
        return false;
    }
    
    if (!galeriaDatabase.galeria.subcontenedores[key].imagenes ||
        indice < 0 || indice >= galeriaDatabase.galeria.subcontenedores[key].imagenes.length) {
        console.error(`Índice ${indice} no válido para subcontenedor ${key}`);
        return false;
    }
    
    const eliminada = galeriaDatabase.galeria.subcontenedores[key].imagenes.splice(indice, 1);
    
    console.log(`✅ Imagen eliminada del subcontenedor ${key}:`, eliminada[0]);
    return true;
}

// OBTENER TODAS LAS IMÁGENES DE LA GALERÍA (para búsqueda)
function obtenerTodasImagenesGaleria() {
    const todasImagenes = [];
    
    Object.keys(galeriaDatabase.galeria.subcontenedores).forEach(key => {
        const sub = galeriaDatabase.galeria.subcontenedores[key];
        if (sub.imagenes && sub.imagenes.length > 0) {
            sub.imagenes.forEach(url => {
                todasImagenes.push({
                    url: url,
                    subcontenedor: sub.nombre,
                    contenedor: key.split('_')[0]
                });
            });
        }
    });
    
    return todasImagenes;
}

// ================================================
// FUNCIONES DE UTILIDAD
// ================================================

// MOSTRAR INFO CONTENEDOR EN CONSOLA
function mostrarInfoContenedorGaleria(numero) {
    const contenedor = obtenerContenedorGaleria(numero);
    
    console.log(`📦 Contenedor ${numero} (Galería):`);
    console.log(`   Nombre: ${contenedor.nombre}`);
    console.log(`   Imagen: ${contenedor.imagen || '(sin imagen)'}`);
    console.log(`   Descripción: ${contenedor.descripcion}`);
    console.log(`   Categoría: ${contenedor.categoria || 'N/A'}`);
}

// MOSTRAR INFO SUBCONTENEDOR EN CONSOLA
function mostrarInfoSubcontenedorGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    const sub = obtenerSubcontenedorGaleria(contenedor, subcontenedor);
    
    console.log(`📦 Subcontenedor ${key} (Galería):`);
    console.log(`   Nombre: ${sub.nombre}`);
    console.log(`   Imagen: ${sub.imagen || '(sin imagen)'}`);
    console.log(`   Descripción: ${sub.descripcion || '(sin descripción)'}`);
    console.log(`   Número de imágenes: ${sub.imagenes ? sub.imagenes.length : 0}`);
    
    if (sub.imagenes && sub.imagenes.length > 0) {
        console.log(`   Imágenes:`);
        sub.imagenes.forEach((img, index) => {
            console.log(`     ${index + 1}. ${img}`);
        });
    }
}

// ================================================
// EJEMPLOS DE USO
// ================================================

// EJEMPLO 1: Cambiar nombre de un contenedor
/*
editarContenedorGaleria(1, {
    nombre: 'MIS PAISAJES FAVORITOS',
    descripcion: 'Mis fotos personales de paisajes',
    categoria: 'personal'
});
*/

// EJEMPLO 2: Cambiar nombre de un subcontenedor y añadir imágenes
/*
editarSubcontenedorGaleria(1, 1, {
    nombre: 'MIS FOTOS DEL MONTE FUJI',
    descripcion: 'Fotos que tomé durante mi viaje'
});

añadirImagenSubcontenedor(1, 1, 'https://misitio.com/mi-foto-fuji.jpg');
añadirImagenSubcontenedor(1, 1, 'https://misitio.com/mi-foto-fuji2.jpg');
*/

// EJEMPLO 3: Ver información en consola
/*
mostrarInfoContenedorGaleria(1);
mostrarInfoSubcontenedorGaleria(1, 1);
*/

console.log('✅ Galería de imágenes cargada correctamente');
console.log('📸 Contenedores: 10 contenedores con nombres personalizados');
console.log('🖼️ Subcontenedores: 50 subcontenedores con colecciones de imágenes');
console.log('');
console.log('🔄 Funciones disponibles:');
console.log('   - obtenerContenedorGaleria(numero)');
console.log('   - obtenerSubcontenedorGaleria(contenedor, subcontenedor)');
console.log('   - obtenerImagenesSubcontenedor(contenedor, subcontenedor)');
console.log('   - editarContenedorGaleria(numero, {nombre, imagen, descripcion, categoria})');
console.log('   - editarSubcontenedorGaleria(contenedor, subcontenedor, {nombre, imagen, descripcion, imagenes})');
console.log('   - añadirImagenSubcontenedor(contenedor, subcontenedor, urlImagen)');
console.log('   - eliminarImagenSubcontenedor(contenedor, subcontenedor, indice)');
console.log('   - obtenerTodasImagenesGaleria()');
console.log('   - mostrarInfoContenedorGaleria(numero)');
console.log('   - mostrarInfoSubcontenedorGaleria(contenedor, subcontenedor)');
