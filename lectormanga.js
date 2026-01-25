// ================================================
// LECTOR DE MANGA - SISTEMA COMPLETAMENTE SEPARADO
// ================================================

// Base de datos de mangas por contenedor/subcontenedor
const mangaDatabase = {
    // ================================================
    // CONTENEDOR 1
    // ================================================
    
    // Sub-contenedor 1.1
    '1_1': {
        titulo: "🎌 Quintillizas Porneras",
        descripcion: "Miku la mas puta quiere hacer porno con sus hermanas culonas.",
        paginas: 6,
        año: 2024,
        autor: "Chikell ",
        paginasUrls: [
            "https://pbs.twimg.com/media/G75WPTWXgAARV2h?format=png&name=large", // Página 1
            "https://pbs.twimg.com/media/G75WQvSWMAEmFMf?format=png&name=large", // Página 2
            "https://pbs.twimg.com/media/G75WS8fW8AEldTx?format=png&name=large", // Página 3
            "https://pbs.twimg.com/media/G75WagZXUAMh8pQ?format=png&name=large", // Página 4
            "https://pbs.twimg.com/media/G75Wc1bXsAALyNr?format=png&name=large", // Página 5
            "https://pbs.twimg.com/media/G75Wfl3WUAEYOfy?format=png&name=large" // Página 6
        ]
    },
    
    // Sub-contenedor 1.2
    '1_2': {
        titulo: "Ichika y Nino zorras putas",
        descripcion: "Estan despechadas y entregan el culo a cualquiera",
        paginas: 43,
        año: 2015,
        autor: "Akira Toriyama",
        paginasUrls: [
            "https://pbs.twimg.com/media/G8F_PvmXAAM_4S_?format=png&name=large",
            "https://pbs.twimg.com/media/G8F_RCLWQAARnWG?format=png&name=large",
            "https://pbs.twimg.com/media/G8F_Tp-WsAMZ3dl?format=png&name=large",
            "https://pbs.twimg.com/media/G8GAiYTXwAAYFEC?format=png&name=large",
            "https://s4.3hentai.net/d654238/7.jpg",
            "https://s4.3hentai.net/d654238/8.jpg",
            "https://s4.3hentai.net/d654238/9.jpg",
            "https://s4.3hentai.net/d654238/10.jpg",
            "https://s4.3hentai.net/d654238/11.jpg",
            "https://s4.3hentai.net/d654238/12.jpg",
            "https://s4.3hentai.net/d654238/13.jpg",
            "https://s4.3hentai.net/d654238/14.jpg",
            "https://s4.3hentai.net/d654238/15.jpg",
            "https://s4.3hentai.net/d654238/16.jpg",
            "https://s4.3hentai.net/d654238/17.jpg",
            "https://s4.3hentai.net/d654238/18.jpg",
            "https://s4.3hentai.net/d654238/19.jpg",
            "https://s4.3hentai.net/d654238/20.jpg",
            "https://s4.3hentai.net/d654238/21.jpg",
            "https://s4.3hentai.net/d654238/22.jpg",
            "https://s4.3hentai.net/d654238/23.jpg",
            "https://s4.3hentai.net/d654238/24.jpg",
            "https://s4.3hentai.net/d654238/25.jpg",
            "https://s4.3hentai.net/d654238/26.jpg",
            "https://s4.3hentai.net/d654238/27.jpg",
            "https://s4.3hentai.net/d654238/28.jpg",
            "https://s4.3hentai.net/d654238/29.jpg",
            "https://s4.3hentai.net/d654238/30.jpg",
            "https://s4.3hentai.net/d654238/31.jpg",
            "https://s4.3hentai.net/d654238/32.jpg",
            "https://s4.3hentai.net/d654238/33.jpg",
            "https://s4.3hentai.net/d654238/34.jpg",
            "https://s4.3hentai.net/d654238/35.jpg",
            "https://s4.3hentai.net/d654238/36.jpg",
            "https://s4.3hentai.net/d654238/37.jpg",
            "https://s4.3hentai.net/d654238/38.jpg",
            "https://s4.3hentai.net/d654238/39.jpg",
            "https://s4.3hentai.net/d654238/40.jpg",
            "https://s4.3hentai.net/d654238/41.jpg",
            "https://s4.3hentai.net/d654238/42.jpg",
            "https://s4.3hentai.net/d654238/43.jpg",
            "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/48.jpg"
        ]
    },
    
    // Sub-contenedor 1.3 (VACÍO - EJEMPLO)
    '1_3': {
        titulo: "Naruto Shippuden - Volumen 25",
        descripcion: "¡Agrega tus propias imágenes de manga aquí!",
        paginas: 20,
        año: 2007,
        autor: "Masashi Kishimoto",
        paginasUrls: [
            "https://n1.kemono.cr/data/fe/6e/fe6e2e72678907ddde2603a33211bedcda7b7ee0cb9ef310ef0bb9cf3261443d.jpg?f=JW6sEhEFq2IjpF7pplmHtIep.jpeg",
            "https://n1.kemono.cr/data/f8/8b/f88b23d9c5e1b2c55e4f0b3a3b9204b0abb4191248ed5db6bfaccfe6e5852141.jpg?f=X7uEbXgS1EqPj6aEJwLrVhXk.jpeg",
            "https://n4.kemono.cr/data/e1/f2/e1f24bf0ef7d10d9fc51a1d791985a04ed2dcba97f176f5f96c259c3bffe6086.jpg?f=MabLqYU0DJyBINbbutc0S5L2.jpeg",
            "https://n1.kemono.cr/data/73/4f/734f6c65dfff67019fb9e25a1e19d340b8b4d63f1f45b00641f41755bf24e4df.jpg?f=jakkYWZFAI3zXJLEDtndsvDj.jpeg",
            "https://n3.kemono.cr/data/55/a8/55a8b608a8667f2575244bdb0ef490d4a8e25d1d0482c0ae388be52e9cbc3c61.jpg?f=Nw87jbOR13VHDLdTr14Nb2nc.jpeg",
            "https://n4.kemono.cr/data/e2/e7/e2e7e97b948ea5a82ce75d3aed0e81ac4a3a8ef33c3c2c077d9baae194bbfeb1.jpg?f=xgqkwmvLE7f7vhIxjMdfkcSd.jpeg",
            "https://pbs.twimg.com/media/G8O88ThWgCw0LZQ?format=jpg&name=large",
            "https://pbs.twimg.com/media/G8O8-NaWMAgc4jo?format=jpg&name=large",
             "https://pbs.twimg.com/media/G8O8_bIWgAwR-o8?format=jpg&name=large",
             "https://pbs.twimg.com/media/G8O9AotWAAI_etC?format=jpg&name=large",
             "https://pbs.twimg.com/media/G8O9CttWgK0aIHg?format=jpg&name=large",
             "https://n4.kemono.cr/data/00/f9/00f951633f096c61b5957dcb2b633fbed1691d1f330470c30b41baa4d89cd804.jpg?f=kzNQl2uK60J0dseMab8YoXPc.jpeg",
             "https://n2.kemono.cr/data/0b/a7/0ba7742c700ad2650a07d60cfe23528b0e4a2b28578a7c7f6244f2225cd75b52.jpg?f=6wdCEGMWGZHQtu2Fuaga0s5n.jpeg",
             "https://n2.kemono.cr/data/1a/db/1adb814b1584fcbb959b74cb76d4387bf6c05b0811654518a00ce6b500173e30.jpg?f=wHBYoWJm7tecBvGJxZlbsSYi.jpeg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/44.jpg",
             "https://s4.3hentai.net/d654238/48.jpg"
        ]
    },

      // Sub-contenedor 1.4 (VACÍO - EJEMPLO)
    '1_4': {
        titulo: "[鍋屋敷 (ナベシキ)] ニノラレ×ミクラレ 加筆版 (五等分の花嫁) [DL版]",
        descripcion: "¡Agrega tus propias imágenes de manga aquí!",
        paginas: 37,
        año: 2007,
        autor: "Masashi Kishimoto",
        paginasUrls: [
            "https://i1.nhentai.net/galleries/2786098/1.jpg",
            "https://i2.nhentai.net/galleries/2786098/2.jpg",
            "https://i2.nhentai.net/galleries/2786098/3.jpg",
            "https://i3.nhentai.net/galleries/2786098/4.jpg",
            "https://i3.nhentai.net/galleries/2786098/5.jpg",
            "https://i4.nhentai.net/galleries/2786098/6.jpg",
            "https://i4.nhentai.net/galleries/2786098/7.jpg",
            "https://i3.nhentai.net/galleries/2786098/8.jpg",
             "https://i2.nhentai.net/galleries/2786098/9.jpg",
             "https://i3.nhentai.net/galleries/2786098/10.jpg",
             "https://i4.nhentai.net/galleries/2786098/11.jpg",
             "https://i4.nhentai.net/galleries/2786098/12.jpg",
             "https://i4.nhentai.net/galleries/2786098/13.jpg",
             "https://i1.nhentai.net/galleries/2786098/14.jpg",
             "https://i3.nhentai.net/galleries/2786098/15.jpg",
             "https://i3.nhentai.net/galleries/2786098/16.jpg",
             "https://i3.nhentai.net/galleries/2786098/17.jpg",
             "https://i4.nhentai.net/galleries/2786098/18.jpg",
             "https://i1.nhentai.net/galleries/2786098/19.jpg",
             "https://i2.nhentai.net/galleries/2786098/20.jpg",
             "https://i1.nhentai.net/galleries/2786098/21.jpg",
             "https://i1.nhentai.net/galleries/2786098/22.jpg",
             "https://i1.nhentai.net/galleries/2786098/23.jpg",
             "https://i1.nhentai.net/galleries/2786098/24.jpg",
            "https://i3.nhentai.net/galleries/2786098/25.jpg",
             "https://i3.nhentai.net/galleries/2786098/26.jpg",
             "https://i2.nhentai.net/galleries/2786098/27.jpg",
             "https://i4.nhentai.net/galleries/2786098/28.jpg",
             "https://i2.nhentai.net/galleries/2786098/29.jpg",
             "https://i4.nhentai.net/galleries/2786098/30.jpg",
             "https://i1.nhentai.net/galleries/2786098/31.jpg",
            "https://i1.nhentai.net/galleries/2786098/32.jpg",
             "https://i4.nhentai.net/galleries/2786098/33.jpg",
             "https://i3.nhentai.net/galleries/2786098/34.jpg",
             "https://i4.nhentai.net/galleries/2786098/35.jpg",
             "https://i2.nhentai.net/galleries/2786098/36.jpg",
             "https://i3.nhentai.net/galleries/2786098/37.jpg"
         
        ]
    },

     // Sub-contenedor 1.5
    '1_5': {
        titulo: "🎌 Quintillizas Porneras",
        descripcion: "Nino mi puta quiere plata.",
        paginas: 21,
        año: 2024,
        autor: "Chikell ",
        paginasUrls: [
            "https://i2.nhentai.net/galleries/1547347/1.jpg", // Página 1
             "https://i1.nhentai.net/galleries/1547347/2.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1547347/3.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1547347/4.jpg", // Página 1
             "https://i1.nhentai.net/galleries/1547347/5.jpg", // Página 1
             "https://i4.nhentai.net/galleries/1547347/6.jpg", // Página 1
             "https://i3.nhentai.net/galleries/1547347/7.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1547347/8.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1547347/9.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1547347/10.jpg", // Página 1
             "https://i4.nhentai.net/galleries/1547347/11.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1547347/12.jpg", // Página 1
             "https://i4.nhentai.net/galleries/1547347/13.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1547347/14.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1547347/15.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1547347/16.jpg", // Página 1
             "https://i1.nhentai.net/galleries/1547347/17.jpg", // Página 1
             "https://i3.nhentai.net/galleries/1573274/19.jpg", // Página 1
             "https://i3.nhentai.net/galleries/1547347/20.jpg" // Página 1    
        ]
    },

      // Sub-contenedor 1.6
    '1_6': {
        titulo: "🎌 Ichika putarda",
        descripcion: "Ichika",
        paginas: 27,
        año: 2024,
        autor: "Chikell ",
        paginasUrls: [
            "https://i3.nhentai.net/galleries/3223568/1.webp", // Página 1
             "https://i2.nhentai.net/galleries/3223568/3.webp", // Página 1
             "https://i1.nhentai.net/galleries/3223568/4.webp", // Página 1
             "https://i1.nhentai.net/galleries/3223568/5.webp", // Página 1
             "https://i2.nhentai.net/galleries/3223568/6.webp", // Página 1
             "https://i1.nhentai.net/galleries/3223568/7.webp", // Página 1
             "https://i1.nhentai.net/galleries/3223568/8.webp", // Página 1
             "https://i2.nhentai.net/galleries/3223568/9.webp", // Página 1
             "https://i2.nhentai.net/galleries/3223568/10.webp", // Página 1
             "https://i3.nhentai.net/galleries/3223568/11.webp", // Página 1
             "https://i3.nhentai.net/galleries/3223568/12.webp", // Página 1
             "https://i1.nhentai.net/galleries/3223568/13.webp", // Página 1
             "https://i2.nhentai.net/galleries/3223568/14.webp", // Página 1
             "https://i1.nhentai.net/galleries/3223568/15.webp", // Página 1
             "https://i3.nhentai.net/galleries/3223568/16.webp", // Página 1
             "https://i4.nhentai.net/galleries/3223568/17.webp", // Página 1
             "https://i4.nhentai.net/galleries/3223568/18.webp", // Página 1
             "https://i3.nhentai.net/galleries/3223568/19.webp", // Página 1
             "https://i3.nhentai.net/galleries/3223568/20.webp", // Página 1
             "https://i1.nhentai.net/galleries/3223568/21.webp", // Página 1
             "https://i2.nhentai.net/galleries/3223568/22.webp", // Página 1
             "https://i4.nhentai.net/galleries/3223568/23.webp", // Página 1
             "https://i3.nhentai.net/galleries/3223568/24.webp", // Página 1    
            "https://i4.nhentai.net/galleries/3223568/25.webp", // Página 1
             "https://i3.nhentai.net/galleries/3223568/26.webp" // Página 1    
        ]
    },
          // Sub-contenedor 1.6
    '1_7': {
        titulo: "🎌 Miku kachera ",
        descripcion: "Miku quiere plata",
        paginas: 21,
        año: 2024,
        autor: "Chikell ",
        paginasUrls: [
            "https://i4.nhentai.net/galleries/1464410/1.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/2.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/3.jpg", // Página 1
             "https://i4.nhentai.net/galleries/1464410/4.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/5.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/6.jpg", // Página 1
             "https://i1.nhentai.net/galleries/1464410/7.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/8.jpg", // Página 1
             "https://i1.nhentai.net/galleries/1464410/9.jpg", // Página 1
             "https://i1.nhentai.net/galleries/1464410/10.jpg", // Página 1
             "https://i1.nhentai.net/galleries/1464410/11.jpg", // Página 1
             "https://i1.nhentai.net/galleries/1464410/12.jpg", // Página 1
             "https://i1.nhentai.net/galleries/1464410/13.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/14.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/15.jpg", // Página 1
             "https://i4.nhentai.net/galleries/1464410/16.jpg", // Página 1
             "https://i3.nhentai.net/galleries/1464410/17.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/18.jpg", // Página 1
             "https://i3.nhentai.net/galleries/1464410/19.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/20.jpg", // Página 1
             "https://i2.nhentai.net/galleries/1464410/21.jpg" // Página 1
         
        ]
    },
     '1_8': {
        titulo: "Yotsuba sefure me la kacho ",
        descripcion: "Rico orto",
        paginas: 40,
        año: 2024,
        autor: "Chikell ",
        paginasUrls: [
            "https://s4.3hentai.net/d654232/1.jpg", // Página 1
             "https://s4.3hentai.net/d654232/2.jpg", // Página 1
             "https://s4.3hentai.net/d654232/3.jpg", // Página 1
             "https://s4.3hentai.net/d654232/4.jpg", // Página 1
             "https://s4.3hentai.net/d654232/5.jpg", // Página 1
             "https://s4.3hentai.net/d654232/6.jpg", // Página 1
             "https://s4.3hentai.net/d654232/7.jpg", // Página 1
             "https://s4.3hentai.net/d654232/8.jpg", // Página 1
             "https://s4.3hentai.net/d654232/9.jpg", // Página 1
             "https://s4.3hentai.net/d654232/10.jpg", // Página 1
             "https://s4.3hentai.net/d654232/11.jpg", // Página 1
             "https://s4.3hentai.net/d654232/12.jpg", // Página 1
             "https://s4.3hentai.net/d654232/13.jpg", // Página 1
             "https://s4.3hentai.net/d654232/14.jpg", // Página 1
             "https://s4.3hentai.net/d654232/15.jpg", // Página 1
             "https://s4.3hentai.net/d654232/16.jpg", // Página 1
             "https://s4.3hentai.net/d654232/17.jpg", // Página 1
             "https://s4.3hentai.net/d654232/18.jpg", // Página 1
             "https://s4.3hentai.net/d654232/19.jpg", // Página 1
             "https://s4.3hentai.net/d654232/20.jpg", // Página 1
             "https://s4.3hentai.net/d654232/21.jpg", // Página 1
            "https://s4.3hentai.net/d654232/22.jpg", // Página 1
            "https://s4.3hentai.net/d654232/23.jpg", // Página 1
            "https://s4.3hentai.net/d654232/24.jpg", // Página 1
            "https://s4.3hentai.net/d654232/25.jpg", // Página 1
            "https://s4.3hentai.net/d654232/26.jpg", // Página 1
            "https://s4.3hentai.net/d654232/27.jpg", // Página 1
            "https://s4.3hentai.net/d654232/28.jpg", // Página 1
            "https://s4.3hentai.net/d654232/29.jpg", // Página 1
            "https://s4.3hentai.net/d654232/30.jpg", // Página 1
            "https://s4.3hentai.net/d654232/31.jpg", // Página 1
            "https://s4.3hentai.net/d654232/32.jpg", // Página 1
            "https://s4.3hentai.net/d654232/33.jpg", // Página 1
            "https://s4.3hentai.net/d654232/34.jpg", // Página 1
            "https://i1.nhentai.net/galleries/2471402/1.jpg", // Página 1
              "https://i4.nhentai.net/galleries/2471402/2.jpg", // Página 1
              "https://i3.nhentai.net/galleries/2471402/3.jpg", // Página 1
              "https://i1.nhentai.net/galleries/2471402/4.jpg", // Página 1
              "https://i4.nhentai.net/galleries/2471402/5.jpg", // Página 1
            "https://i2.nhentai.net/galleries/2471402/6.jpg" // Página 1
            
         
        ]
    },
    
    // ================================================
    // CONTENEDOR 2 (VACÍO - LISTO PARA RELLENAR)
    // ================================================
    '2_1': {
        titulo: "One Piece - Arco de Wano",
        descripcion: "Luffy y la tripulación del Sombrero de Paja llegan a Wano.",
        paginas: 0,
        año: 2018,
        autor: "Eiichiro Oda",
        paginasUrls: []
    },
    
    '2_2': {
        titulo: "Jujutsu Kaisen - Volumen 3",
        descripcion: "Yuji Itadori continúa su entrenamiento como hechicero.",
        paginas: 0,
        año: 2018,
        autor: "Gege Akutami",
        paginasUrls: []
    },
    
    // ================================================
    // MÁS CONTENEDORES VACÍOS (LISTOS PARA RELLENAR)
    // ================================================
    '3_1': {
        titulo: "[ひかげもん (てんぴぼし)] ノノミとゆるゆるポリネシアンセックス (ブルーアーカイブ) [DL版]",
        descripcion: "Nonomi putita trola",
        paginas: 31,
        año: "",
        autor: "",
        paginasUrls: [
        "https://i3.nhentai.net/galleries/3727945/1.webp",
        "https://i2.nhentai.net/galleries/3727945/2.webp",  
        "https://i2.nhentai.net/galleries/3727945/3.webp",
        "https://i4.nhentai.net/galleries/3727945/4.webp",
        "https://i3.nhentai.net/galleries/3727945/5.webp",
        "https://i2.nhentai.net/galleries/3727945/6.webp",
        "https://i4.nhentai.net/galleries/3727945/7.webp",
        "https://i3.nhentai.net/galleries/3727945/8.webp",
        "https://i4.nhentai.net/galleries/3727945/9.webp",
        "https://i3.nhentai.net/galleries/3727945/10.webp",
        "https://i3.nhentai.net/galleries/3727945/11.webp",
        "https://i2.nhentai.net/galleries/3727945/12.webp",
        "https://i4.nhentai.net/galleries/3727945/13.webp",
        "https://i2.nhentai.net/galleries/3727945/14.webp",  
        "https://i1.nhentai.net/galleries/3727945/15.webp",
        "https://i3.nhentai.net/galleries/3727945/16.webp",
        "https://i4.nhentai.net/galleries/3727945/17.webp",
        "https://i3.nhentai.net/galleries/3727945/18.webp",
        "https://i1.nhentai.net/galleries/3727945/19.webp",
        "https://i1.nhentai.net/galleries/3727945/20.webp",
        "https://i4.nhentai.net/galleries/3727945/21.webp",
        "https://i3.nhentai.net/galleries/3727945/22.webp",
        "https://i3.nhentai.net/galleries/3727945/23.webp",
        "https://i2.nhentai.net/galleries/3727945/24.webp",
        "https://i4.nhentai.net/galleries/3727945/25.webp",
        "https://i2.nhentai.net/galleries/3727945/26.webp",  
        "https://i1.nhentai.net/galleries/3727945/27.webp",
        "https://i1.nhentai.net/galleries/3727945/28.webp",
        "https://i1.nhentai.net/galleries/3727945/29.webp",
        "https://i4.nhentai.net/galleries/3727945/30.webp",
        "https://i2.nhentai.net/galleries/3727945/31.webp"
        ]
    },
  '3_2': {
        titulo: "[ホイホイこーろ] Weekend Shagger Rush! (ブルーアーカイブ) [DL版]",
        descripcion: "Estudiante putita culona rico orto",
        paginas: 36,
        año: "",
        autor: "",
        paginasUrls: [
        "https://i1.nhentai.net/galleries/3712667/1.webp",
        "https://i1.nhentai.net/galleries/3712667/2.webp",  
        "https://i1.nhentai.net/galleries/3712667/3.webp",
        "https://i1.nhentai.net/galleries/3712667/4.webp",
        "https://i2.nhentai.net/galleries/3712667/5.webp",
        "https://i4.nhentai.net/galleries/3712667/6.webp",
        "https://i4.nhentai.net/galleries/3712667/7.webp",
        "https://i2.nhentai.net/galleries/3712667/8.webp",
        "https://i2.nhentai.net/galleries/3712667/9.webp",
        "https://i4.nhentai.net/galleries/3712667/10.webp",
        "https://i1.nhentai.net/galleries/3712667/11.webp",
        "https://i4.nhentai.net/galleries/3712667/12.webp",
        "https://i2.nhentai.net/galleries/3712667/13.webp",
        "https://i1.nhentai.net/galleries/3712667/14.webp",  
        "https://i3.nhentai.net/galleries/3712667/15.webp",
        "https://i1.nhentai.net/galleries/3712667/16.webp",
        "https://i4.nhentai.net/galleries/3712667/17.webp",
        "https://i1.nhentai.net/galleries/3712667/18.webp",
        "https://i1.nhentai.net/galleries/3712667/19.webp",
        "https://i3.nhentai.net/galleries/3712667/20.webp",
        "https://i3.nhentai.net/galleries/3712667/21.webp",
        "https://i1.nhentai.net/galleries/3712667/22.webp",
        "https://i2.nhentai.net/galleries/3712667/23.webp",
        "https://i3.nhentai.net/galleries/3712667/24.webp",
        "https://i2.nhentai.net/galleries/3712667/25.webp",
        "https://i1.nhentai.net/galleries/3712667/26.webp",  
        "https://i1.nhentai.net/galleries/3712667/27.webp",
        "https://i1.nhentai.net/galleries/3712667/28.webp",
        "https://i2.nhentai.net/galleries/3712667/29.webp",
        "https://i1.nhentai.net/galleries/3712667/30.webp",
        "https://i2.nhentai.net/galleries/3712667/31.webp",
        "https://i1.nhentai.net/galleries/3712667/32.webp",
        "https://i3.nhentai.net/galleries/3712667/33.webp",
        "https://i3.nhentai.net/galleries/3712667/34.webp",
        "https://i2.nhentai.net/galleries/3712667/35.webp",
        "https://i3.nhentai.net/galleries/3712667/36.webp"
        ]
    },


    
    '4_1': { titulo: "Manga disponible próximamente", descripcion: "", paginas: 0, año: "", autor: "", paginasUrls: [] },

 // Sub-contenedor 1.1
    '4_3': {
        titulo: " Hija y madre putona",
        descripcion: "",
        paginas: 42,
        año: 2024,
        autor: "Hanabi",
        paginasUrls: [
            "https://m10.imhentai.xxx/031/edpxso8wgl/1.webp", // Página 1
            "https://m10.imhentai.xxx/031/edpxso8wgl/2.webp", // Página 2
            "https://m10.imhentai.xxx/031/edpxso8wgl/3.webp", // Página 3
            "https://m10.imhentai.xxx/031/edpxso8wgl/4.webp", // Página 4
            "https://m10.imhentai.xxx/031/edpxso8wgl/5.webp", // Página 5
            "https://m10.imhentai.xxx/031/edpxso8wgl/6.webp", // Página 6
            "https://m10.imhentai.xxx/031/edpxso8wgl/7.webp", // Página 7
            "https://m10.imhentai.xxx/031/edpxso8wgl/8.webp", // Página 8
            "https://m10.imhentai.xxx/031/edpxso8wgl/9.webp", // Página 9
            "https://m10.imhentai.xxx/031/edpxso8wgl/10.webp", // Página 10
            "https://m10.imhentai.xxx/031/edpxso8wgl/11.webp", // Página 11
            "https://m10.imhentai.xxx/031/edpxso8wgl/12.webp", // Página 12
            "https://m10.imhentai.xxx/031/edpxso8wgl/13.webp", // Página 13
            "https://m10.imhentai.xxx/031/edpxso8wgl/14.webp", // Página 14
            "https://m10.imhentai.xxx/031/edpxso8wgl/15.webp",  // Página 15
             "https://m10.imhentai.xxx/031/edpxso8wgl/16.webp", // Página 11
            "https://m10.imhentai.xxx/031/edpxso8wgl/17.webp", // Página 12
            "https://m10.imhentai.xxx/031/edpxso8wgl/18.webp", // Página 13
            "https://m10.imhentai.xxx/031/edpxso8wgl/19.webp", // Página 14
            "https://m10.imhentai.xxx/031/edpxso8wgl/20.webp",  // Página 15
            "https://m10.imhentai.xxx/031/edpxso8wgl/21.webp", // Página 11
            "https://m10.imhentai.xxx/031/edpxso8wgl/22.webp", // Página 12
            "https://m10.imhentai.xxx/031/edpxso8wgl/23.webp", // Página 13
            "https://m10.imhentai.xxx/031/edpxso8wgl/24.webp", // Página 14
            "https://m10.imhentai.xxx/031/edpxso8wgl/25.webp",  // Página 15
             "https://m10.imhentai.xxx/031/edpxso8wgl/26.webp", // Página 11
            "https://m10.imhentai.xxx/031/edpxso8wgl/27.webp", // Página 12
            "https://m10.imhentai.xxx/031/edpxso8wgl/28.webp", // Página 13
            "https://m10.imhentai.xxx/031/edpxso8wgl/29.webp", // Página 14
            "https://m10.imhentai.xxx/031/edpxso8wgl/30.webp",  // Página 15
            "https://m10.imhentai.xxx/031/edpxso8wgl/31.webp", // Página 11
            "https://m10.imhentai.xxx/031/edpxso8wgl/32.webp", // Página 12
            "https://m10.imhentai.xxx/031/edpxso8wgl/33.webp", // Página 13
            "https://m10.imhentai.xxx/031/edpxso8wgl/34.webp", // Página 14
            "https://m10.imhentai.xxx/031/edpxso8wgl/35.webp",  // Página 15
             "https://m10.imhentai.xxx/031/edpxso8wgl/36.webp", // Página 11
            "https://m10.imhentai.xxx/031/edpxso8wgl/37.webp", // Página 12
            "https://m10.imhentai.xxx/031/edpxso8wgl/38.webp", // Página 13
            "https://m10.imhentai.xxx/031/edpxso8wgl/39.webp", // Página 14
            "https://m10.imhentai.xxx/031/edpxso8wgl/40.webp",  // Página 15
             "https://m10.imhentai.xxx/031/edpxso8wgl/41.webp", // Página 14
            "https://m10.imhentai.xxx/031/edpxso8wgl/42.webp" // Página 42 xd
        ]
    },
    




    
    '5_1': { titulo: "Manga disponible próximamente", descripcion: "", paginas: 85, año: "", autor: "", paginasUrls:
        [  "https://i3.nhentai.net/galleries/2616488/1.jpg", // Página 1
            "https://i1.nhentai.net/galleries/2616488/2.jpg", // Página 2
            "https://i1.nhentai.net/galleries/2616488/3.jpg", // Página 3
            "https://i2.nhentai.net/galleries/2616488/4.jpg", // Página 4
            "https://i2.nhentai.net/galleries/2616488/5.jpg", // Página 5
            "https://i2.nhentai.net/galleries/2616488/6.jpg", // Página 6
            "https://i2.nhentai.net/galleries/2616488/7.jpg", // Página 7
            "https://i3.nhentai.net/galleries/2616488/8.jpg", // Página 8
            "https://i1.nhentai.net/galleries/2616488/9.jpg", // Página 9
            "https://i2.nhentai.net/galleries/2616488/10.jpg", // Página 10
            "https://i2.nhentai.net/galleries/2616488/11.jpg", // Página 1
            "https://i2.nhentai.net/galleries/2616488/12.jpg", // Página 2
            "https://i3.nhentai.net/galleries/2616488/13.jpg", // Página 3
            "https://i3.nhentai.net/galleries/2616488/14.jpg", // Página 4
            "https://i3.nhentai.net/galleries/2616488/15.jpg", // Página 5
            "https://i2.nhentai.net/galleries/2616488/16.jpg", // Página 6
            "https://i1.nhentai.net/galleries/2616488/17.jpg", // Página 7
            "https://i4.nhentai.net/galleries/2616488/18.jpg", // Página 8
            "https://i2.nhentai.net/galleries/2616488/19.jpg", // Página 9
            "https://i4.nhentai.net/galleries/2616488/20.jpg", // Página 10
            "https://i1.nhentai.net/galleries/2616488/21.jpg", // Página 1
            "https://i2.nhentai.net/galleries/2616488/22.jpg", // Página 2
            "https://i4.nhentai.net/galleries/2616488/23.jpg", // Página 3
            "https://i2.nhentai.net/galleries/2616488/24.jpg", // Página 4
            "https://i3.nhentai.net/galleries/2616488/25.jpg", // Página 5
            "https://i3.nhentai.net/galleries/2616488/26.jpg", // Página 6
            "https://i1.nhentai.net/galleries/2616488/27.jpg", // Página 7
            "https://i4.nhentai.net/galleries/2616488/28.jpg", // Página 8
            "https://i4.nhentai.net/galleries/2616488/29.jpg", // Página 9
            "https://i1.nhentai.net/galleries/2616488/30.jpg", // Página 10
            "https://i1.nhentai.net/galleries/2616488/31.jpg", // Página 1
            "https://i2.nhentai.net/galleries/2616488/32.jpg", // Página 2
            "https://i3.nhentai.net/galleries/2616488/33.jpg", // Página 3
            "https://i1.nhentai.net/galleries/2616488/34.jpg", // Página 4
            "https://i4.nhentai.net/galleries/2616488/35.jpg", // Página 5
            "https://i2.nhentai.net/galleries/2616488/36.jpg", // Página 6
            "https://i4.nhentai.net/galleries/2616488/37.jpg", // Página 7
            "https://i2.nhentai.net/galleries/2616488/38.jpg", // Página 8
            "https://i3.nhentai.net/galleries/2616488/39.jpg", // Página 9
            "https://i2.nhentai.net/galleries/2616488/40.jpg", // Página 10
            "https://i4.nhentai.net/galleries/2616488/41.jpg", // Página 1
            "https://i3.nhentai.net/galleries/2616488/42.jpg", // Página 2
            "https://i3.nhentai.net/galleries/2616488/43.jpg", // Página 3
            "https://i1.nhentai.net/galleries/2616488/44.jpg", // Página 4
            "https://i4.nhentai.net/galleries/2616488/45.jpg", // Página 5
            "https://i2.nhentai.net/galleries/2616488/46.jpg", // Página 6
            "https://i4.nhentai.net/galleries/2616488/47.jpg", // Página 7
            "https://i2.nhentai.net/galleries/2616488/48.jpg", // Página 8
            "https://i1.nhentai.net/galleries/2616488/49.jpg", // Página 9
            "https://i1.nhentai.net/galleries/2616488/50.jpg", // Página 10
            "https://i2.nhentai.net/galleries/2616488/51.jpg", // Página 1
            "https://i4.nhentai.net/galleries/2616488/52.jpg", // Página 2
            "https://i4.nhentai.net/galleries/2616488/53.jpg", // Página 3
            "https://i2.nhentai.net/galleries/2616488/54.jpg", // Página 4
            "https://i1.nhentai.net/galleries/2616488/55.jpg", // Página 5
            "https://i1.nhentai.net/galleries/2616488/56.jpg", // Página 6
            "https://i1.nhentai.net/galleries/2616488/57.jpg", // Página 7
            "https://i2.nhentai.net/galleries/2616488/58.jpg", // Página 8
            "https://i1.nhentai.net/galleries/2616488/59.jpg", // Página 9
            "https://i1.nhentai.net/galleries/2616488/60.jpg", // Página 10
            "https://i3.nhentai.net/galleries/2616488/61.jpg", // Página 1
            "https://i4.nhentai.net/galleries/2616488/62.jpg", // Página 2
            "https://i1.nhentai.net/galleries/2616488/63.jpg", // Página 3
            "https://i2.nhentai.net/galleries/2616488/64.jpg", // Página 4
            "https://i1.nhentai.net/galleries/2616488/65.jpg", // Página 5
            "https://i2.nhentai.net/galleries/2616488/66.jpg", // Página 6
            "https://i1.nhentai.net/galleries/2616488/67.jpg", // Página 7
            "https://i1.nhentai.net/galleries/2616488/68.jpg", // Página 8
            "https://i3.nhentai.net/galleries/2616488/69.jpg", // Página 9
            "https://i4.nhentai.net/galleries/2616488/70.jpg", // Página 10
            "https://i1.nhentai.net/galleries/2616488/71.jpg", // Página 1
            "https://i1.nhentai.net/galleries/2616488/72.jpg", // Página 2
            "https://i4.nhentai.net/galleries/2616488/73.jpg", // Página 3
            "https://i2.nhentai.net/galleries/2616488/74.jpg", // Página 4
            "https://i3.nhentai.net/galleries/2616488/75.jpg", // Página 5
            "https://i1.nhentai.net/galleries/2616488/76.jpg", // Página 6
            "https://i3.nhentai.net/galleries/2616488/77.jpg", // Página 7
            "https://i2.nhentai.net/galleries/2616488/78.jpg", // Página 8
            "https://i2.nhentai.net/galleries/2616488/79.jpg", // Página 9
            "https://i1.nhentai.net/galleries/2616488/80.jpg", // Página 10
            "https://i3.nhentai.net/galleries/2616488/81.jpg", // Página 10
            "https://i2.nhentai.net/galleries/2616488/82.jpg" // Página 10
             "https://i3.nhentai.net/galleries/2616488/83.jpg", // Página 10
            "https://i2.nhentai.net/galleries/2616488/84.jpg", // Página 10
             "https://i2.nhentai.net/galleries/2616488/85.jpg" // Página 85




        
    ] 
   }
};

// ================================================
// VARIABLES DEL LECTOR
// ================================================
let lectorActivo = false;
let mangaActual = null;
let paginaActual = 0;
let totalPaginas = 0;
let contenedorManga = null;
let subcontenedorManga = null;

// ================================================
// VARIABLES DE ZOOM Y ARRASTRE
// ================================================
let zoomLevel = 1; // 1 = normal, 2 = 2x, 3 = 3x, 4 = 4x
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let scrollStartLeft = 0;
let scrollStartTop = 0;

// ================================================
// FUNCIONES PRINCIPALES
// ================================================

window.iniciarLectorManga = function(contenedor, subcontenedor) {
    contenedorManga = contenedor;
    subcontenedorManga = subcontenedor;
    
    const key = `${contenedor}_${subcontenedor}`;
    mangaActual = mangaDatabase[key];
    
    if (!mangaActual || mangaActual.paginas === 0 || mangaActual.paginasUrls.length === 0) {
        alert(`Este sub-contenedor aún no tiene manga disponible.\n\nAgrega las URLs de las páginas en lectormanga.js\nBusca la clave: '${key}'`);
        return;
    }
    
    lectorActivo = true;
    paginaActual = 1; // Empezar en página 1
    totalPaginas = mangaActual.paginas;
    zoomLevel = 1; // Resetear zoom
    
    // Ocultar todo y mostrar el lector
    ocultarTodoParaLector();
    mostrarLectorManga();
    cargarPaginaManga();
}

function ocultarTodoParaLector() {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.especial-section').style.display = 'none';
    document.querySelector('.additional-section').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    document.getElementById('manga-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    
    // Ocultar botón casa también
    const btnCasa = document.getElementById('boton-casa');
    if (btnCasa) btnCasa.style.display = 'none';
}

function mostrarLectorManga() {
    // Crear contenedor del lector si no existe
    if (!document.getElementById('lector-manga-container')) {
        const lectorDiv = document.createElement('div');
        lectorDiv.id = 'lector-manga-container';
        lectorDiv.className = 'lector-manga-container';
        document.body.appendChild(lectorDiv);
    }
    
    const lectorContainer = document.getElementById('lector-manga-container');
    lectorContainer.style.display = 'block';
    
    // Scroll al inicio
    window.scrollTo(0, 0);
    
    // Crear interfaz del lector
    lectorContainer.innerHTML = `
        <!-- BARRA SUPERIOR -->
        <div class="lector-header">
            <button class="lector-btn volver-btn" onclick="cerrarLectorManga()">
                ❌ Cerrar Lector
            </button>
            <div class="lector-info">
                <h2>${mangaActual.titulo}</h2>
                <p>Página <span id="pagina-actual">${paginaActual}</span> / ${totalPaginas}</p>
            </div>
            <div class="lector-metadata">
                <span>📖 ${mangaActual.autor}</span>
                <span>📅 ${mangaActual.año}</span>
            </div>
        </div>
        
        <!-- VISOR DE MANGA -->
        <div class="visor-manga">
            <div class="manga-imagen-container" id="manga-contenedor">
                <img id="manga-imagen" src="" alt="Página ${paginaActual}" class="manga-imagen">
                <div class="manga-cargando" id="manga-cargando">
                    <div class="spinner"></div>
                    <p>Cargando página...</p>
                </div>
                
                <!-- Indicador de zoom -->
                <div class="zoom-level" id="zoom-level">
                    Zoom: 1x
                </div>
                
                <!-- Botón de reset zoom -->
                <button class="reset-zoom-btn" id="reset-zoom-btn" title="Resetear zoom (R)">
                    ↺
                </button>
                
                <!-- Mensaje de ayuda para arrastre -->
                <div class="zoom-help" id="zoom-help">
                    Arrastra para moverte por la imagen
                </div>
            </div>
            
            <!-- CONTROLES FLOTANTES -->
            <div class="controles-flotantes">
                <button class="control-btn btn-anterior" onclick="paginaAnterior()" ${paginaActual === 1 ? 'disabled' : ''}>
                    ← Anterior
                </button>
                <div class="contador-pagina">
                    ${paginaActual} / ${totalPaginas}
                </div>
                <button class="control-btn btn-siguiente" onclick="paginaSiguiente()" ${paginaActual === totalPaginas ? 'disabled' : ''}>
                    Siguiente →
                </button>
            </div>
            
            <!-- MENÚ INFERIOR -->
            <div class="menu-inferior">
                <button class="menu-btn" onclick="irAPagina(1)" ${paginaActual === 1 ? 'disabled' : ''}>
                    ⏮️ Primera
                </button>
                <button class="menu-btn" onclick="irAPagina(Math.max(1, paginaActual - 5))">
                    -5 Páginas
                </button>
                <button class="menu-btn" onclick="irAPagina(Math.min(totalPaginas, paginaActual + 5))">
                    +5 Páginas
                </button>
                <button class="menu-btn" onclick="irAPagina(totalPaginas)" ${paginaActual === totalPaginas ? 'disabled' : ''}>
                    Última ⏭️
                </button>
                <select class="menu-select" onchange="irAPagina(parseInt(this.value))" id="selector-pagina">
                    <!-- Opciones se llenan dinámicamente -->
                </select>
            </div>
            
            <!-- DESCRIPCIÓN -->
            <div class="manga-descripcion">
                <p>${mangaActual.descripcion}</p>
                <p class="manga-aviso">💡 Click en imagen para zoom | Arrastra para moverte | R para resetear</p>
            </div>
        </div>
    `;
    
    // Llenar selector de páginas
    const selector = document.getElementById('selector-pagina');
    if (selector) {
        for (let i = 1; i <= totalPaginas; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Página ${i}`;
            if (i === paginaActual) option.selected = true;
            selector.appendChild(option);
        }
    }
}

function cargarPaginaManga() {
    if (!mangaActual || !lectorActivo) return;
    
    // Scroll al inicio (IMPORTANTE: cada página empieza desde arriba)
    window.scrollTo(0, 0);
    
    // Resetear zoom y arrastre
    zoomLevel = 1;
    isDragging = false;
    
    // Mostrar cargando
    const cargando = document.getElementById('manga-cargando');
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const zoomLevelDisplay = document.getElementById('zoom-level');
    const resetBtn = document.getElementById('reset-zoom-btn');
    const zoomHelp = document.getElementById('zoom-help');
    
    if (cargando) cargando.style.display = 'flex';
    if (imagen) {
        imagen.style.opacity = '0';
        imagen.classList.remove('zoom-2x', 'zoom-3x', 'zoom-4x');
    }
    if (contenedor) {
        contenedor.style.cursor = 'zoom-in';
        contenedor.scrollLeft = 0;
        contenedor.scrollTop = 0;
    }
    if (zoomLevelDisplay) zoomLevelDisplay.style.display = 'none';
    if (resetBtn) resetBtn.style.display = 'none';
    if (zoomHelp) zoomHelp.style.display = 'none';
    
    // Cargar imagen
    const urlImagen = mangaActual.paginasUrls[paginaActual - 1];
    
    if (imagen) {
        imagen.src = urlImagen;
        imagen.onload = function() {
            // Ocultar cargando
            if (cargando) cargando.style.display = 'none';
            imagen.style.opacity = '1';
            
            // Actualizar controles
            actualizarControlesLector();
            
            // Configurar eventos de zoom y arrastre
            configurarZoomYArrastre();
        };
        
        imagen.onerror = function() {
            if (cargando) cargando.innerHTML = '<p>❌ Error al cargar la página</p>';
            imagen.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=1800&fit=crop&auto=format';
            
            // Configurar zoom incluso con imagen de error
            setTimeout(() => {
                configurarZoomYArrastre();
            }, 100);
        };
    }
    
    // Actualizar contador
    const contador = document.getElementById('pagina-actual');
    if (contador) contador.textContent = paginaActual;
    
    // Actualizar selector
    const selector = document.getElementById('selector-pagina');
    if (selector) selector.value = paginaActual;
}

function configurarZoomYArrastre() {
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const zoomLevelDisplay = document.getElementById('zoom-level');
    const resetBtn = document.getElementById('reset-zoom-btn');
    const zoomHelp = document.getElementById('zoom-help');
    
    if (!imagen || !contenedor) return;
    
    // Configurar eventos de arrastre
    function iniciarArrastre(e) {
        if (zoomLevel > 1) {
            isDragging = true;
            contenedor.style.cursor = 'grabbing';
            
            // Guardar posición inicial
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            scrollStartLeft = contenedor.scrollLeft;
            scrollStartTop = contenedor.scrollTop;
            
            e.preventDefault();
        }
    }
    
    function hacerArrastre(e) {
        if (!isDragging) return;
        
        // Calcular distancia arrastrada
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        
        // Aplicar scroll inverso (arrastrar hacia la derecha = mover imagen a la izquierda)
        contenedor.scrollLeft = scrollStartLeft - deltaX;
        contenedor.scrollTop = scrollStartTop - deltaY;
    }
    
    function detenerArrastre() {
        isDragging = false;
        contenedor.style.cursor = zoomLevel > 1 ? 'grab' : 'zoom-in';
    }
    
    // Asignar eventos de arrastre
    contenedor.addEventListener('mousedown', iniciarArrastre);
    contenedor.addEventListener('mousemove', hacerArrastre);
    contenedor.addEventListener('mouseup', detenerArrastre);
    contenedor.addEventListener('mouseleave', detenerArrastre);
    
    // Click para zoom
    imagen.addEventListener('click', function(e) {
        if (zoomLevel > 1) {
            // Si ya hay zoom, click simple no hace nada (solo arrastre)
            return;
        }
        
        e.stopPropagation();
        
        // Rotar entre niveles: 1x → 2x → 3x → 4x → 1x
        if (zoomLevel === 1) {
            aplicarZoom(2, e);
        } else if (zoomLevel === 2) {
            aplicarZoom(3, e);
        } else if (zoomLevel === 3) {
            aplicarZoom(4, e);
        } else {
            quitarZoom();
        }
    });
    
    // Doble click para zoom máximo
    imagen.addEventListener('dblclick', function(e) {
        e.stopPropagation();
        if (zoomLevel === 1) {
            aplicarZoom(4, e); // Doble click = zoom máximo
        } else {
            quitarZoom(); // Doble click con zoom activo = quitar zoom
        }
    });
    
    // Botón de reset
    if (resetBtn) {
        resetBtn.onclick = function(e) {
            e.stopPropagation();
            quitarZoom();
        };
    }
    
    // Configurar cursor inicial
    contenedor.style.cursor = 'zoom-in';
}

function aplicarZoom(nivel, clickEvent = null) {
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const zoomLevelDisplay = document.getElementById('zoom-level');
    const resetBtn = document.getElementById('reset-zoom-btn');
    const zoomHelp = document.getElementById('zoom-help');
    
    if (!imagen || !contenedor) return;
    
    // Quitar clases anteriores
    imagen.classList.remove('zoom-2x', 'zoom-3x', 'zoom-4x');
    
    // Aplicar nueva clase
    if (nivel === 2) {
        imagen.classList.add('zoom-2x');
        zoomLevel = 2;
    } else if (nivel === 3) {
        imagen.classList.add('zoom-3x');
        zoomLevel = 3;
    } else if (nivel === 4) {
        imagen.classList.add('zoom-4x');
        zoomLevel = 4;
    }
    
    // Cambiar cursor
    contenedor.style.cursor = 'grab';
    
    // Calcular posición de scroll si hay click
    if (clickEvent && contenedor) {
        // Obtener dimensiones
        const contenedorRect = contenedor.getBoundingClientRect();
        const imagenRect = imagen.getBoundingClientRect();
        
        // Calcular posición relativa del click
        const clickX = clickEvent.clientX - contenedorRect.left;
        const clickY = clickEvent.clientY - contenedorRect.top;
        
        // Calcular porcentajes
        const percentX = clickX / contenedorRect.width;
        const percentY = clickY / contenedorRect.height;
        
        // Calcular nueva posición de scroll para centrar en el click
        const nuevoScrollLeft = (percentX * imagenRect.width) - (contenedorRect.width / 2);
        const nuevoScrollTop = (percentY * imagenRect.height) - (contenedorRect.height / 2);
        
        // Aplicar scroll suavemente
        setTimeout(() => {
            contenedor.scrollLeft = Math.max(0, nuevoScrollLeft);
            contenedor.scrollTop = Math.max(0, nuevoScrollTop);
        }, 10);
    }
    
    // Mostrar indicador
    if (zoomLevelDisplay) {
        zoomLevelDisplay.textContent = `Zoom: ${nivel}x (Arrastra para moverte)`;
        zoomLevelDisplay.style.display = 'block';
    }
    
    // Mostrar botón reset
    if (resetBtn) {
        resetBtn.style.display = 'flex';
    }
    
    // Mostrar ayuda de arrastre
    if (zoomHelp) {
        zoomHelp.style.display = 'block';
        // Ocultar ayuda después de 5 segundos
        setTimeout(() => {
            if (zoomHelp) zoomHelp.style.display = 'none';
        }, 5000);
    }
}

function quitarZoom() {
    const imagen = document.getElementById('manga-imagen');
    const contenedor = document.getElementById('manga-contenedor');
    const zoomLevelDisplay = document.getElementById('zoom-level');
    const resetBtn = document.getElementById('reset-zoom-btn');
    const zoomHelp = document.getElementById('zoom-help');
    
    if (!imagen || !contenedor) return;
    
    // Quitar todas las clases de zoom
    imagen.classList.remove('zoom-2x', 'zoom-3x', 'zoom-4x');
    contenedor.style.cursor = 'zoom-in';
    zoomLevel = 1;
    isDragging = false;
    
    // Resetear scroll suavemente
    contenedor.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    
    // Ocultar indicador
    if (zoomLevelDisplay) {
        zoomLevelDisplay.style.display = 'none';
    }
    
    // Ocultar botón reset
    if (resetBtn) {
        resetBtn.style.display = 'none';
    }
    
    // Ocultar ayuda
    if (zoomHelp) {
        zoomHelp.style.display = 'none';
    }
}

function actualizarControlesLector() {
    // Actualizar botones anterior/siguiente
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnSiguiente = document.querySelector('.btn-siguiente');
    const contador = document.querySelector('.contador-pagina');
    
    if (btnAnterior) {
        btnAnterior.disabled = paginaActual === 1;
    }
    
    if (btnSiguiente) {
        btnSiguiente.disabled = paginaActual === totalPaginas;
    }
    
    if (contador) {
        contador.textContent = `${paginaActual} / ${totalPaginas}`;
    }
}

// ================================================
// NAVEGACIÓN DE PÁGINAS
// ================================================

function paginaAnterior() {
    if (paginaActual > 1) {
        paginaActual--;
        cargarPaginaManga();
    }
}

function paginaSiguiente() {
    if (paginaActual < totalPaginas) {
        paginaActual++;
        cargarPaginaManga();
    }
}

function irAPagina(numero) {
    if (numero >= 1 && numero <= totalPaginas) {
        paginaActual = numero;
        cargarPaginaManga();
    }
}

// ================================================
// CERRAR LECTOR Y VOLVER
// ================================================

function cerrarLectorManga() {
    lectorActivo = false;
    zoomLevel = 1;
    isDragging = false;
    
    // Ocultar lector
    const lectorContainer = document.getElementById('lector-manga-container');
    if (lectorContainer) {
        lectorContainer.style.display = 'none';
    }
    
    // Mostrar botón casa
    const btnCasa = document.getElementById('boton-casa');
    if (btnCasa) btnCasa.style.display = 'flex';
    
    // Volver al subcontenedor de manga
    if (contenedorManga && subcontenedorManga) {
        cargarMazos(contenedorManga, subcontenedorManga);
    }
}

// ================================================
// TECLAS DEL TECLADO PARA NAVEGACIÓN Y ZOOM
// ================================================

document.addEventListener('keydown', function(event) {
    if (!lectorActivo) return;
    
    switch(event.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
            paginaAnterior();
            break;
            
        case 'ArrowRight':
        case 'd':
        case 'D':
        case ' ':
            paginaSiguiente();
            break;
            
        case 'Escape':
            cerrarLectorManga();
            break;
            
        case 'Home':
            irAPagina(1);
            break;
            
        case 'End':
            irAPagina(totalPaginas);
            break;
            
        case 'r':
        case 'R':
            event.preventDefault();
            quitarZoom();
            break;
            
        case '+':
        case '=':
            event.preventDefault();
            if (zoomLevel < 4) {
                aplicarZoom(zoomLevel + 1);
            }
            break;
            
        case '-':
        case '_':
            event.preventDefault();
            if (zoomLevel > 1) {
                aplicarZoom(zoomLevel - 1);
            }
            break;
            
        case '1':
            event.preventDefault();
            quitarZoom();
            break;
            
        case '2':
            event.preventDefault();
            aplicarZoom(2);
            break;
            
        case '3':
            event.preventDefault();
            aplicarZoom(3);
            break;
            
        case '4':
            event.preventDefault();
            aplicarZoom(4);
            break;
    }
});

// Zoom con rueda del ratón (Ctrl + Rueda)
document.addEventListener('wheel', function(event) {
    if (!lectorActivo || !event.ctrlKey) return;
    
    event.preventDefault();
    
    if (event.deltaY < 0) {
        // Rueda hacia arriba = más zoom
        if (zoomLevel < 4) {
            aplicarZoom(zoomLevel + 1);
        }
    } else {
        // Rueda hacia abajo = menos zoom
        if (zoomLevel > 1) {
            aplicarZoom(zoomLevel - 1);
        }
    }
}, { passive: false });

// ================================================
// FUNCIONES DE UTILIDAD PARA AGREGAR MANGAS
// ================================================

function agregarManga(contenedor, subcontenedor, titulo, descripcion, paginasUrls, año, autor) {
    const key = `${contenedor}_${subcontenedor}`;
    
    mangaDatabase[key] = {
        titulo: titulo || `Manga ${contenedor}-${subcontenedor}`,
        descripcion: descripcion || "",
        paginas: paginasUrls.length,
        año: año || new Date().getFullYear(),
        autor: autor || "Desconocido",
        paginasUrls: paginasUrls
    };
    
    return true;
}

function existeManga(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return mangaDatabase[key] && mangaDatabase[key].paginas > 0;
}

// ================================================
// INICIALIZAR ESTILOS DEL LECTOR
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('📖 Lector de Manga con Zoom y Arrastre cargado y listo');
});
