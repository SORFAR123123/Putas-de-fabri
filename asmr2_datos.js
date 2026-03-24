// ================================================
// ASMR2 - DATOS (Contenedores + Subcontenedores)
// ================================================

const asmr2Data = {
    contenedores: {
        // Contenedor 1: Hermanas
        1: {
            nombre: "Hermanas",
            imagen: "https://ejemplo.com/hermanas.jpg",
            descripcion: "ASMR con hermanas cariñosas",
            subcontenedores: {
                "1_1": {
                    nombre: "Hermana Mayor - Yuki",
                    imagen: "https://ejemplo.com/yuki.jpg",
                    descripcion: "Yuki, la hermana mayor cariñosa",
                    audio: {
                        driveId: "1aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        duracion: "45:00",
                        timestamps: [
                            { tiempo: 0, titulo: "Introducción" },
                            { tiempo: 120, titulo: "Susurros" },
                            { tiempo: 300, titulo: "Limpieza de oídos" }
                        ]
                    },
                    mazos: [1, 2, 3, 4, 5]  // Mazos disponibles
                },
                "1_2": {
                    nombre: "Hermana Menor - Sakura",
                    imagen: "https://ejemplo.com/sakura.jpg",
                    descripcion: "Sakura, la hermana menor juguetona",
                    audio: {
                        driveId: "2aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        duracion: "38:00",
                        timestamps: [
                            { tiempo: 0, titulo: "Jugando" },
                            { tiempo: 180, titulo: "Canción de cuna" }
                        ]
                    },
                    mazos: [1, 2, 3]
                },
                "1_3": {
                    nombre: "Hermana Tsundere - Hikari",
                    imagen: "https://ejemplo.com/hikari.jpg",
                    descripcion: "Hikari, la tsundere que te quiere",
                    audio: {
                        driveId: "3aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        duracion: "52:00",
                        timestamps: [
                            { tiempo: 0, titulo: "No es que me importes" },
                            { tiempo: 240, titulo: "Arreglando tu ropa" }
                        ]
                    },
                    mazos: [1, 2, 3, 4]
                },
                "1_4": {
                    nombre: "Hermanas Gemelas - Mio & Mao",
                    imagen: "https://ejemplo.com/gemelas.jpg",
                    descripcion: "Las gemelas te miman juntas",
                    audio: {
                        driveId: "4aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        duracion: "01:05:00",
                        timestamps: [
                            { tiempo: 0, titulo: "Susurros en ambos oídos" },
                            { tiempo: 420, titulo: "Limpieza de oídos juntas" }
                        ]
                    },
                    mazos: [1, 2, 3, 4, 5]
                },
                "1_5": {
                    nombre: "Hermana Protectora - Aoi",
                    imagen: "https://ejemplo.com/aoi.jpg",
                    descripcion: "Aoi te cuida y protege",
                    audio: {
                        driveId: "5aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        duracion: "48:00",
                        timestamps: [
                            { tiempo: 0, titulo: "Acariciando tu cabeza" },
                            { tiempo: 300, titulo: "Abrazos reconfortantes" }
                        ]
                    },
                    mazos: [1, 2]
                }
            }
        },
        
        // Contenedor 2: Novia/Yandere
        2: {
            nombre: "Novia/Yandere",
            imagen: "https://ejemplo.com/novia.jpg",
            descripcion: "ASMR con novias amorosas y yanderes",
            subcontenedores: {
                "2_1": {
                    nombre: "Novia Tierna - Hana",
                    imagen: "https://ejemplo.com/hana.jpg",
                    descripcion: "Hana, tu novia cariñosa",
                    audio: {
                        driveId: "6aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        duracion: "42:00",
                        timestamps: [
                            { tiempo: 0, titulo: "Declaración de amor" },
                            { tiempo: 180, titulo: "Preparando té juntos" }
                        ]
                    },
                    mazos: [1, 2, 3]
                },
                "2_2": {
                    nombre: "Yandere - Akari",
                    imagen: "https://ejemplo.com/akari.jpg",
                    descripcion: "Akari, tu novia obsesiva",
                    audio: {
                        driveId: "7aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        duracion: "55:00",
                        timestamps: [
                            { tiempo: 0, titulo: "Eres solo mío" },
                            { tiempo: 360, titulo: "Cuidando de ti" }
                        ]
                    },
                    mazos: [1, 2, 3, 4]
                }
            }
        },
        
        // Contenedor 3: Madre/Milf
        3: {
            nombre: "Madre/Milf",
            imagen: "https://ejemplo.com/madre.jpg",
            descripcion: "ASMR con figuras maternales",
            subcontenedores: {
                "3_1": {
                    nombre: "Madre Cariñosa - Kaori",
                    imagen: "https://ejemplo.com/kaori.jpg",
                    descripcion: "Kaori, la mamá amorosa",
                    audio: {
                        driveId: "8aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        duracion: "50:00",
                        timestamps: [
                            { tiempo: 0, titulo: "Arrullos maternales" },
                            { tiempo: 420, titulo: "Preparando tu comida favorita" }
                        ]
                    },
                    mazos: [1, 2, 3]
                }
            }
        },
        
        // Contenedor 4: Compañera de Clase
        4: {
            nombre: "Compañera de Clase",
            imagen: "https://ejemplo.com/compañera.jpg",
            descripcion: "ASMR con compañeras de escuela",
            subcontenedores: {
                "4_1": {
                    nombre: "Compañera Callada - Yui",
                    imagen: "https://ejemplo.com/yui.jpg",
                    descripcion: "Yui, la chica tímida del salón",
                    audio: {
                        driveId: "9aPPqNHRq-Twvdp-TnQ0FkyYLuksmr2qe",
                        duracion: "40:00",
                        timestamps: [
                            { tiempo: 0, titulo: "Estudiando juntos" }
                        ]
                    },
                    mazos: [1, 2]
                }
            }
        }
    }
};