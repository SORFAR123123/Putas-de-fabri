// ================================================
// SISTEMA COMPLETO DE GALERÃA DE IMÃGENES
// ================================================

// ============ CONTENEDORES DE GALERÃA ============
const contenedoresGaleria = {
    1: {
        nombre: "Nino mi novia putona",
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
        nombre: "Shota",
        imagen: "https://pbs.twimg.com/media/Gx6Tx1cawAARE3T?format=jpg&name=large",
        descripcion: "GalerÃ­a especial de paisajes",
        categoria: "Paisajes"
    },
    4: {
        nombre: "GALERÃA 4",
        imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
        descripcion: "Arte y fotografÃ­a creativa",
        categoria: "Arte"
    },
    5: {
        nombre: "GALERÃA 5",
        imagen: "https://images.unsplash.com/photo-1518834103328-371bb64201b4",
        descripcion: "GalerÃ­a miscelÃ¡nea",
        categoria: "MiscelÃ¡nea"
    }
};

// ============ SUB-CONTENEDORES DE GALERÃA ============
const galeriaDatabase = {
    // CONTENEDOR 1
    '1_1': {
        titulo: "Nino mi novia putona ",
        descripcion: "Nino mi novia puta culona tetona putona buen culo buen  orto buena concha orto y conchas rosada buenas curvas mi putita putona ",
        categoria: "MI puta novia culonatetona buen culo",
        imagen: "https://pbs.twimg.com/media/G7fsiFCXQAAhtKq?format=png&name=900x900",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/GrNWikuWsAAVYtt?format=jpg&name=4096x4096" },
            { id: 2, url: "https://cdn.discordapp.com/attachments/612403179140808705/1449452873040662768/G8D0bWpXQAYSH9s.png?ex=693ef3ae&is=693da22e&hm=c49ffe7ddcd537a0ad59726d707499324bd1cfe9f7ae1fe340ade7d8f0a2b415&" },
            { id: 3, url: "https://pbs.twimg.com/media/G8EObAoXYAA0mI0?format=png&name=small" },
            { id: 4, url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small" },
            { id: 5, url: "https://pbs.twimg.com/media/G75foT0XgAERE6s?format=jpg&name=large" }
        ]
    },
    
    '1_2': {
        titulo: "Nino Parque de las putas",
        descripcion: "ImÃ¡genes artÃ­sticas variadas",
        categoria: "Arte",
        imagen: "https://pbs.twimg.com/media/G8EObAoXYAA0mI0?format=png&name=small",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/G8ERfgMWQAUsPv_?format=jpg&name=medium" },
            { id: 2, url: "https://pbs.twimg.com/media/G8ERgh8WMAcfn28?format=jpg&name=medium" },
            { id: 3, url: "https://pbs.twimg.com/media/G8ERhgCW8AI2bzV?format=jpg&name=medium" },
            { id: 4, url: "https://pbs.twimg.com/media/G8ERiiXXEAQ1rGT?format=jpg&name=medium" },
             { id: 5, url: "https://pbs.twimg.com/media/G8ERji_W8AEFkcv?format=jpg&name=medium" },
            { id: 6, url: "https://pbs.twimg.com/media/G8ERkaUWsAIFBp5?format=jpg&name=medium" },
            { id: 7, url: "https://pbs.twimg.com/media/G8ERlhxWwAEX5A1?format=jpg&name=medium" },
            { id: 8, url: "https://pbs.twimg.com/media/G8ERmU0W0AAJ5xK?format=jpg&name=medium" },
             { id: 9, url: "https://pbs.twimg.com/media/G8ERnY-XAAIOlHO?format=jpg&name=medium" },
            { id: 10, url: "https://pbs.twimg.com/media/G8ERoSYXcAUhMqa?format=jpg&name=medium" },
            { id: 11, url: "https://pbs.twimg.com/media/G8ERpRNXIAEp_IJ?format=jpg&name=medium" },
            { id: 12, url: "https://pbs.twimg.com/media/G8ERqHJXwAQ69iE?format=jpg&name=medium" },
             { id: 13, url: "https://pbs.twimg.com/media/G8ERrEfW8AMKweP?format=jpg&name=medium" },
            { id: 14, url: "https://pbs.twimg.com/media/G8ERsD9WIAAJ0oG?format=jpg&name=medium" },
            { id: 15, url: "https://pbs.twimg.com/media/G8ERtMBWYAUo-U4?format=jpg&name=medium" },
            { id: 16, url: "https://pbs.twimg.com/media/G8ERuGgWEAQNJQ_?format=jpg&name=medium" },
             { id: 17, url: "https://pbs.twimg.com/media/G8ERu42WcAYBpHn?format=jpg&name=medium" },
            { id: 18, url: "https://pbs.twimg.com/media/G8ERvtcXYAE9fNP?format=jpg&name=medium" },
            { id: 19, url: "https://pbs.twimg.com/media/G8ERwlrWoAQ2kIT?format=jpg&name=medium" },
            { id: 20, url: "https://pbs.twimg.com/media/G8ERxkeXMAIddri?format=jpg&name=medium" },
             { id: 21, url: "https://pbs.twimg.com/media/G8ESLKMW0AEobk1?format=jpg&name=medium" },
            { id: 22, url: "https://pbs.twimg.com/media/G8ESMkPW4AYMcDp?format=jpg&name=medium" },
            { id: 23, url: "https://pbs.twimg.com/media/G8ESRIMXMAY6Ga4?format=jpg&name=medium" },
            { id: 24, url: "https://pbs.twimg.com/media/G8ESSN8W0AAws-T?format=jpg&name=medium" },
             { id: 25, url: "https://pbs.twimg.com/media/G8ESTToXcAIjoqT?format=jpg&name=medium" },
            { id: 26, url: "https://pbs.twimg.com/media/G8ESUSQXsAM9YoJ?format=jpg&name=medium" },
            { id: 27, url: "https://pbs.twimg.com/media/G8ESVMlWwAApww5?format=jpg&name=medium" },
            { id: 28, url: "https://pbs.twimg.com/media/G8ESWI4WUAImEb8?format=jpg&name=medium" },
             { id: 29, url: "https://pbs.twimg.com/media/G8ESW8RWcAQGOrd?format=jpg&name=medium" },
            { id: 30, url: "https://pbs.twimg.com/media/G8ESXzfWAAAm3mC?format=jpg&name=medium" },
            { id: 31, url: "https://pbs.twimg.com/media/G8ESY-9W8AQ8a5b?format=jpg&name=medium" },
            { id: 32, url: "https://pbs.twimg.com/media/G8ESZ6EXIAMTVpa?format=jpg&name=medium" },
             { id: 33, url: "https://pbs.twimg.com/media/G8ESatJWcAMXPYb?format=jpg&name=medium" },
            { id: 34, url: "https://pbs.twimg.com/media/G8ESbgaXQAgc1wU?format=jpg&name=medium" },
            { id: 35, url: "https://pbs.twimg.com/media/G8ESciiXcAIcG9M?format=jpg&name=medium" },
            { id: 36, url: "https://media.discordapp.net/attachments/1200278976225091684/1449466115649441923/133435171_p35_master1200.png?ex=693f0003&is=693dae83&hm=84ce66381b0e64a987260a831756c4d762f3212bbc0ab1e07f78f48b5b8f8614&=&format=webp&quality=lossless&width=449&height=655" },
            { id: 37, url: "https://pbs.twimg.com/media/G8ESfL3WgAEemUq?format=jpg&name=medium" },
             { id: 37, url: "https://pbs.twimg.com/media/G8ESeOGXYAE_uZG?format=jpg&name=medium" },
            { id: 39, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464514373222532/133435171_p38_master1200.png?ex=693efe85&is=693dad05&hm=ad0520f28c924a9d3fb5085ca09788cbe4fa4c5e8c092dbd4bbe39c746641f90&=&format=webp&quality=lossless&width=449&height=655" },
            { id: 40, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464519926747339/133435171_p39_master1200.png?ex=693efe87&is=693dad07&hm=0bc8ba713839ca14611f801fed830da47a94503037c3f83fabbdbf3232bb7f42&=&format=webp&quality=lossless&width=240&height=350" },
            { id: 41, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464536695443658/133435171_p40_master1200.png?ex=693efe8b&is=693dad0b&hm=ac8fc18344ea56f633375a889f555352425b4019bb2f20c839f7291fec5dbb3b&=&format=webp&quality=lossless&width=449&height=655" },
             { id: 42, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464547470610716/133435171_p41_master1200.png?ex=693efe8d&is=693dad0d&hm=b0f0b9dfa04a636d3a37873a38d2d221bca09bcc9d15276b7790108b40b5e6e0&=&format=webp&quality=lossless&width=449&height=655" },
            { id: 43, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464559512453342/133435171_p42_master1200.png?ex=693efe90&is=693dad10&hm=351a8b59a42d9a59764d64799d2cfee1b5e2dfd78d1836f4e5f0309da5967ff7&=&format=webp&quality=lossless&width=449&height=655" },
            { id: 44, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464570748997764/133435171_p43_master1200.png?ex=693efe93&is=693dad13&hm=b973f8e9b503818091c6b2473bf8c2b966ea4fdcbb6416220b80628f7ed483d8&=&format=webp&quality=lossless&width=449&height=655" },
            { id: 45, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464583092834388/133435171_p44_master1200.png?ex=693efe96&is=693dad16&hm=f6c7520745b7ebe52b3bfb14ec5594ce5ccd4a8fded4b0f2ed46f1e616c947f3&=&format=webp&quality=lossless&width=449&height=655" },
             { id: 46, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464592773152788/133435171_p45_master1200.png?ex=693efe98&is=693dad18&hm=d97735dc3e8e2f1104f95c7df259733a03b758cd301d75ab9906544c728ba6a2&=&format=webp&quality=lossless&width=449&height=655" },
            { id: 47, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464604429254666/133435171_p46_master1200.png?ex=693efe9b&is=693dad1b&hm=94897d06814259ab9347177f86e5b480913d6588f3dcfbb9d75ef06ad31c4b0d&=&format=webp&quality=lossless&width=449&height=655" },
            { id: 48, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464620854022235/133435171_p47_master1200.png?ex=693efe9f&is=693dad1f&hm=05a84cef95bc80b48e795401e0b63987a0120b6c08573866449e8f69a95e1d7c&=&format=webp&quality=lossless&width=449&height=655" },
            { id: 49, url: "https://media.discordapp.net/attachments/1200278976225091684/1449464631188918474/133435171_p48_master1200.png?ex=693efea1&is=693dad21&hm=eb9ffc6dae4d5a6ddc0cf2e914cda694a3b23ff517bdfac026f746d2884b6fcc&=&format=webp&quality=lossless&width=449&height=655" },
             { id: 50, url: "https://cdn.discordapp.com/attachments/1200278976225091684/1449464640848269454/133435171_p49_master1200.png?ex=693efea4&is=693dad24&hm=4a853d8146ff9efafa473b189c89f2a53ea5772279f4cc22682e1726fed935df&" }    
          
        ]
    },
    
    '1_3': {
        titulo: "Arquitectura Moderna",
        descripcion: "Edificios y estructuras contemporÃ¡neas",
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
        descripcion: "FotografÃ­as de paisajes naturales",
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
        titulo: "GalerÃ­a TecnolÃ³gica",
        descripcion: "TecnologÃ­a y dispositivos modernos",
        categoria: "TecnologÃ­a",
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
        titulo: "Retratos ArtÃ­sticos",
        descripcion: "FotografÃ­a de retrato creativa",
        categoria: "Retrato",
        imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        imagenes: [
            { id: 1, url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
            { id: 2, url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
            { id: 3, url: "https://images.unsplash.com/photo-1494790108755-2616b612b786" },
            { id: 4, url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
            { id: 5, url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb" }
        ]
 
    },
    '3_1': {
        titulo: "Putonas",
        descripcion: "",
        categoria: "Putardas",
        imagen: "https://pbs.twimg.com/media/HCby8bHWcAA8ym9?format=jpg&name=small",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HCby8bHWcAA8ym9?format=jpg&name=small" },
            { id: 2, url: "https://pbs.twimg.com/media/HCbrpWiXsAAMZUg?format=jpg&name=small" },
            { id: 3, url: "https://pbs.twimg.com/media/HCbsAuJaoAA2_Zy?format=jpg&name=small" },
            { id: 4, url: "https://pbs.twimg.com/media/HCbsgy5XsAAK37u?format=png&name=small" },
             { id: 5, url: "https://pbs.twimg.com/media/HCbtHg_bQAAYeoO?format=png&name=small" },
            { id: 6, url: "https://pbs.twimg.com/media/HCbtZXqXQAAr1CF?format=png&name=small" },
            { id: 7, url: "https://pbs.twimg.com/media/HCbtP1fa0AE0eNd?format=png&name=small" },
            { id: 8, url: "https://pbs.twimg.com/media/HCbuP83bcAA8Z04?format=jpg&name=small" },
              { id: 9, url: "https://pbs.twimg.com/media/HCbuZx5WIAA0REx?format=jpg&name=small" },
            { id: 10, url: "https://pbs.twimg.com/media/HCbu_dBbsAAylwF?format=jpg&name=small" },
            { id: 11, url: "https://pbs.twimg.com/media/HCbvMKyXMAELAEn?format=jpg&name=small" },
             { id: 12, url: "https://pbs.twimg.com/media/HCgdpGGbYAA84Y0?format=png&name=small" },
              { id: 13, url: "https://pbs.twimg.com/media/HCe-aKjawAADi3N?format=jpg&name=small" },
               { id: 14, url: "https://pbs.twimg.com/media/HCqB5bFXgAAjgl9?format=png&name=small" },
               { id: 15, url: "https://pbs.twimg.com/media/HCqB91TWoAAy3Dt?format=png&name=small" },
              { id: 16, url: "https://pbs.twimg.com/media/HCq3vdHXYAEffD7?format=png&name=small" },
              { id: 17, url: "https://pbs.twimg.com/media/HCq3uDLW4AA9bKm?format=png&name=small" }
            
        ]
 
    },
      '3_2': {
        titulo: "Shotas se kachan a Nino",
        descripcion: "culona rosada",
        categoria: "Putardas",
        imagen: "https://pbs.twimg.com/media/HClAtq7XAAAnVxh?format=jpg&name=small",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HClAtq7XAAAnVxh?format=jpg&name=small" },
            { id: 2, url: "https://pbs.twimg.com/media/HClAxtlXsAA_rC5?format=jpg&name=small" },
            { id: 3, url: "https://pbs.twimg.com/media/HClA9eXawAwhdFo?format=jpg&name=small" },
            { id: 4, url: "https://pbs.twimg.com/media/HClA-wWXsAAdDNs?format=jpg&name=small" },
            { id: 5, url: "https://pbs.twimg.com/media/HClA_p4XYAArQKD?format=jpg&name=small" },
            { id: 6, url: "https://pbs.twimg.com/media/HClB4sMWkAAZRK8?format=jpg&name=small" },
            { id: 7, url: "https://pbs.twimg.com/media/HClB6n0WMAANEqH?format=jpg&name=small" },
            { id: 8, url: "https://pbs.twimg.com/media/HClC0beWIAAKAju?format=jpg&name=small" },
            { id: 9, url: "https://pbs.twimg.com/media/HClB-UzawAQe_VV?format=jpg&name=small" },
            { id: 10, url: "https://pbs.twimg.com/media/HClB_xOWgAE1xPl?format=jpg&name=small" },
            { id: 11, url: "https://pbs.twimg.com/media/HClCBCMXMAAd6qi?format=jpg&name=small" },
            { id: 12, url: "https://pbs.twimg.com/media/HClCE68WYAAuFly?format=jpg&name=small" },
            { id: 13, url: "https://pbs.twimg.com/media/HClCGqZakAA4SE4?format=jpg&name=small" },
            { id: 14, url: "https://pbs.twimg.com/media/HClCIlHa8AABwfo?format=jpg&name=small" },
            { id: 15, url: "https://pbs.twimg.com/media/HCqEZzsaoAAhtRm?format=jpg&name=small" },
        
        
            { id: 16, url: "https://pbs.twimg.com/media/HCrLwetWIAEYdr5?format=jpg&name=small" }
        ]
    },
    '4_1': {
        titulo: "Retratos ArtÃ­sticos",
        descripcion: "FotografÃ­a de retrato creativa",
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
        nombre: `GALERÃA ${numero}`,
        imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        descripcion: '5 sub-contenedores con galerÃ­as de imÃ¡genes',
        categoria: 'General'
    };
}

function obtenerSubcontenedorGaleria(contenedor, subcontenedor) {
    const key = `${contenedor}_${subcontenedor}`;
    return galeriaDatabase[key] || {
        titulo: `GalerÃ­a ${subcontenedor}`,
        descripcion: 'ColecciÃ³n de imÃ¡genes',
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

// 1. FunciÃ³n para cargar la pÃ¡gina principal de galerÃ­as
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

// 2. Crear UI de contenedores de galerÃ­a
function crearContenedoresGaleria() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">ð¼ï¸ CONTENEDORES DE GALERÃA</h2>';
    html += '<div class="manga-contenedores">';
    
    for (let i = 1; i <= 10; i++) {
        const contenedorData = obtenerContenedorGaleria(i);
        const nombre = contenedorData.nombre || `GALERÃA ${i}`;
        const desc = contenedorData.descripcion || '5 sub-contenedores con imÃ¡genes';
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresGaleria(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen}')"></div>
                <div class="contenedor-numero">${nombre}</div>
                <p>${desc}</p>
                <div class="card-button" style="background: linear-gradient(135deg, #FF1493, #FF69B4);">
                    Ver GalerÃ­as
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// 3. Cargar subcontenedores de galerÃ­a
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
        ð¼ï¸ ${obtenerContenedorGaleria(contenedor).nombre} - SUB-GALERÃAS
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresGaleriaDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    for (let i = 1; i <= 5; i++) {
        const tieneGaleria = subcontenedoresDisponibles.includes(i.toString());
        const subData = obtenerSubcontenedorGaleria(contenedor, i);
        const desc = subData.descripcion || (tieneGaleria ? 'GalerÃ­a disponible' : '(Sin imÃ¡genes configuradas)');
        const galeriaInfo = tieneGaleria ? obtenerGaleria(contenedor, i) : null;
        
        html += `
            <div class="subcontenedor-item" onclick="${tieneGaleria ? `cargarGaleria(${contenedor}, ${i})` : 'alert("Esta galerÃ­a no tiene imÃ¡genes configuradas")'}">
                <div class="subcontenedor-img" style="background-image: url('${subData.imagen}')"></div>
                <h3>${tieneGaleria ? galeriaInfo.titulo.split(' ')[0] : `GalerÃ­a ${i}`}</h3>
                ${tieneGaleria ? 
                    `<p><strong>${galeriaInfo.titulo}</strong></p>
                     <p style="font-size: 0.9rem; opacity: 0.8;">${galeriaInfo.categoria} â¢ ${galeriaInfo.imagenes.length} imÃ¡genes</p>` 
                    : `<p style="color: #FF6B6B;">${desc}</p>`}
                <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #FF1493, #FF69B4);">
                    ${tieneGaleria ? 'ð¼ï¸ Ver GalerÃ­a' : 'VacÃ­o'}
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// 5. Cargar galerÃ­a especÃ­fica
function cargarGaleria(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    
    const galeriaInfo = obtenerGaleria(contenedor, subcontenedor);
    if (!galeriaInfo || !galeriaInfo.imagenes || galeriaInfo.imagenes.length === 0) {
        alert('No hay imÃ¡genes disponibles en esta galerÃ­a');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearGaleriaUI(galeriaInfo);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresGaleria(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// 6. Crear UI de la galerÃ­a con vista en grande
function crearGaleriaUI(galeriaInfo) {
    let html = `
        <div class="galeria-container" style="max-width: 1200px; margin: 0 auto; padding: 20px;">
            <h2 style="text-align: center; color: #FFD166; margin-bottom: 10px;">${galeriaInfo.titulo}</h2>
            <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">${galeriaInfo.descripcion}</p>
            
            <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 20px; margin-bottom: 30px; border-left: 5px solid #FF1493;">
                <p style="text-align: center; color: #FFD166; font-size: 1.1rem;">
                    ð¼ï¸ ${galeriaInfo.imagenes.length} imÃ¡genes â¢ CategorÃ­a: ${galeriaInfo.categoria}
                </p>
                <p style="text-align: center; opacity: 0.8; margin-top: 10px; font-size: 0.9rem;">
                    Haz clic en cualquier imagen para verla en tamaÃ±o completo
                </p>
            </div>
            
            <!-- GALERÃA DE IMÃGENES -->
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
                    â Cerrar
                </button>
                
                <div style="max-width: 90%; max-height: 80%; margin-top: 60px;">
                    <img id="imagen-grande" src="" style="max-width: 100%; max-height: 100%; border-radius: 15px; box-shadow: 0 20px 50px rgba(0,0,0,0.7); border: 5px solid #FF1493;">
                </div>
                
                <div style="margin-top: 30px; display: flex; gap: 20px; align-items: center;">
                    <button onclick="imagenAnterior()" class="control-btn" style="background: #5864F5; padding: 12px 25px; border-radius: 50px; border: none; color: white; font-size: 1rem; cursor: pointer;">
                        â Anterior
                    </button>
                    
                    <div id="contador-imagen" style="color: #FFD166; font-size: 1.2rem; font-weight: bold; min-width: 100px; text-align: center;">
                        1 / ${galeriaInfo.imagenes.length}
                    </div>
                    
                    <button onclick="imagenSiguiente()" class="control-btn" style="background: #FF1493; padding: 12px 25px; border-radius: 50px; border: none; color: white; font-size: 1rem; cursor: pointer;">
                        Siguiente â
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
// INICIALIZACIÃN
// ================================================

console.log('ð¼ï¸ Sistema de GalerÃ­a cargado correctamente');
console.log('ð¦ Contenedores disponibles: 5');
console.log('ð¸ Sub-galerÃ­as disponibles: ' + Object.keys(galeriaDatabase).length);
