// ================================================
// SISTEMA COMPLETO DE GALERÍA DE IMÁGENES
// ================================================

// ============ CONTENEDORES DE GALERÍA ============
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
        descripcion: "Mi hija actriz saco la puteria de su madre Nino",
        categoria: "Nuestra hija putita"
    },
    3: {
        nombre: "Shota",
        imagen: "https://pbs.twimg.com/media/Gx6Tx1cawAARE3T?format=jpg&name=large",
        descripcion: "Galería especial de paisajes",
        categoria: "Paisajes"
    },
    4: {
        nombre: "Yotsuba la putarda",
        imagen: "https://pbs.twimg.com/media/HCreLRRWoAEMJ40?format=jpg&name=medium",
        descripcion: "Galería de Yotsuba - La más enérgica",
        categoria: "Quintillizas"
    },
    5: {
        nombre: "Ichika",
        imagen: "https://pbs.twimg.com/media/HCrpe4jWQAAstF7?format=jpg&name=small",
        descripcion: "Galería de Ichika - La mayor de las quintillizas",
        categoria: "Quintillizas"
    },
    6: {
        nombre: "Miku",
        imagen: "https://pbs.twimg.com/media/HCrpm_8bAAAwYby?format=jpg&name=small",
        descripcion: "Galería de Miku - La chica tsundere",
        categoria: "Quintillizas"
    },
    7: {
        nombre: "Itsuki",
        imagen: "https://pbs.twimg.com/media/HCrph-HXcAIXa81?format=png&name=small",
        descripcion: "Galería de Itsuki - La glotona del grupo",
        categoria: "Quintillizas"
    },
    8: {
        nombre: "Trolas Random",
        imagen: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?w=400&h=400&fit=crop",
        descripcion: "Colección variada de imágenes aleatorias y divertidas",
        categoria: "Random"
    },
    9: {
        nombre: "Quintillizas DUO",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772839068623.jpg",
        descripcion: "Todas las combinaciones de parejas de las quintillizas Nakano",
        categoria: "Quintillizas - Duos"
    },
    10: {
        nombre: "Quintillizas TRIO",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842066494.jpg",
        descripcion: "Todas las combinaciones de tríos de las quintillizas Nakano",
        categoria: "Quintillizas - Trios"
    },
    11: {
        nombre: "Quintillizas CUARTETO",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842513938.jpg",
        descripcion: "Todas las combinaciones de cuartetos de las quintillizas Nakano",
        categoria: "Quintillizas - Cuartetos"
    },
    12: {
        nombre: "Quintillizas QUINTETO",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840393339.jpg",
        descripcion: "Las cinco quintillizas juntas",
        categoria: "Quintillizas - Quinteto"
    },
    13: {
        nombre: "PRUEBA",
        imagen: "https://pbs.twimg.com/media/HCrsaa6WcAEQbE6?format=jpg&name=large",
        descripcion: "Galería de prueba con dos subcontenedores",
        categoria: "Prueba"
    },
    14: {
        nombre: "Emilia putarda",
        imagen: "https://pbs.twimg.com/media/HC0LphVa8AAIWTj?format=jpg&name=small",
        descripcion: "Galería de prueba con dos subcontenedores",
        categoria: "Prueba"
    }
};

// ============ SUB-CONTENEDORES DE GALERÍA ============
const galeriaDatabase = {
    // CONTENEDOR 1
    '1_1': {
        titulo: "Nino mi novia putona",
        descripcion: "Nino mi novia puta culona tetona putona buen culo buen orto buena concha orto y conchas rosada buenas curvas mi putita putona",
        categoria: "Mi puta novia culona tetona buen culo",
        imagen: "https://pbs.twimg.com/media/G7fsiFCXQAAhtqK?format=png&name=900x900",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/GrNWikuWsAAVYtt?format=jpg&name=4096x4096" },
            { id: 2, url: "https://pbs.twimg.com/media/GztU8Y3XsAA5Yzm?format=png&name=small" },
            { id: 3, url: "https://pbs.twimg.com/media/HCrZxBIW8AE9F4E?format=jpg&name=small" },
            { id: 4, url: "https://pbs.twimg.com/media/HCrbuHAaUAI3sCB?format=jpg&name=small" },
            { id: 5, url: "https://pbs.twimg.com/media/HCriPewaUAAUBxj?format=jpg&name=medium" },
            { id: 6, url: "https://pbs.twimg.com/media/HCriW0RW4AAflH_?format=jpg&name=medium" },
            { id: 7, url: "https://pbs.twimg.com/media/HCri27xbwAAaBmv?format=jpg&name=small" },
            { id: 8, url: "https://pbs.twimg.com/media/HCrjXkwXgAApyPj?format=jpg&name=medium" },
            { id: 9, url: "https://pbs.twimg.com/media/HCrjnnTWUAApDRm?format=jpg&name=large" },
            { id: 10, url: "https://pbs.twimg.com/media/HCrj5B6WoAEp_zY?format=jpg&name=large" },
            { id: 11, url: "https://pbs.twimg.com/media/HCrkCODbYAAn1ax?format=jpg&name=small" },
            { id: 12, url: "https://pbs.twimg.com/media/HCrkRxTXEAAKM1K?format=jpg&name=large" },
            { id: 13, url: "https://pbs.twimg.com/media/HCrmd9GXwAA0waZ?format=jpg&name=small" },
            { id: 14, url: "https://pbs.twimg.com/media/HCrrmjBXwAAb90l?format=jpg&name=medium" },
            { id: 15, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772756482259.jpg" },
            { id: 16, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772756607757.jpg" },
            { id: 17, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772756614619.jpg" },
            { id: 18, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772757031795.jpg" },
            { id: 19, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772757252065.jpg" },
            { id: 20, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772757381208.jpg" },
            { id: 21, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772757389477.jpg" },
            { id: 22, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772757397609.jpg" },
            { id: 23, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772757457605.jpg" },
            { id: 24, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772757587309.jpg" },
            { id: 25, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772803986401.jpg" },
            { id: 26, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804014599.jpg" },
            { id: 27, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804054828.jpg" },
            { id: 28, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804223459.jpg" },
            { id: 29, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772812158216.jpg" },
            { id: 30, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772812847734.jpg" },
            { id: 31, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772813249168.jpg" },
            { id: 32, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772813462416.jpg" },
            { id: 33, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772813612199.jpg" },
            { id: 34, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772816585193.jpg" },
            { id: 35, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772816595968.jpg" },
            { id: 36, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817259777.jpg" },
            { id: 37, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817287965.jpg" },
            { id: 38, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817402487.jpg" },
            { id: 39, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817412711.jpg" },
            { id: 40, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817497560.jpg" },
            { id: 41, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817550101.jpg" },
            { id: 42, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817651608.jpg" },
            { id: 43, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817663417.jpg" },
            { id: 44, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817858912.jpg" },
            { id: 45, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817885022.jpg" },
            { id: 46, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817896871.jpg" },
            { id: 47, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817974915.jpg" },
            { id: 48, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772819869432.jpg" },
        
            { id: 49, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840114115.jpg" },
        
            { id: 50, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840524220.jpg" },
        
            { id: 51, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842263201.jpg" },
        
            { id: 52, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842390151.jpg" },
        
            { id: 53, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842394486.jpg" },
        
            { id: 54, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842401714.jpg" },
        
            { id: 55, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842413196.jpg" },
        
            { id: 56, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842418072.jpg" },
        
            { id: 57, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842539160.jpg" },
        
            { id: 58, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842552605.jpg" },
        
            { id: 59, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842606512.jpg" },
        
            { id: 60, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842661412.jpg" },
        
            { id: 61, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842684329.jpg" },
        
            { id: 62, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842706488.jpg" },
        
            { id: 63, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842747252.jpg" },
        
            { id: 64, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842810697.jpg" },
        
            { id: 65, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842817362.jpg" },
        
            { id: 66, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842838246.jpg" },
        
            { id: 67, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842983947.jpg" },
        
            { id: 68, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842994020.jpg" },
        
            { id: 69, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843000586.jpg" },
        
            { id: 70, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843458730.jpg" },
        
            { id: 71, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843705453.jpg" },
        
            { id: 72, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772845115577.jpg" },
        
            { id: 73, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891286303.jpg" },
        
            { id: 74, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772893143171.jpg" },
        
            { id: 75, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897457480.jpg" },
        
            { id: 76, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897464953.jpg" },
        
            { id: 77, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897602368.jpg" },
        
            { id: 78, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897610208.jpg" },
        
            { id: 79, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898098545.jpg" },
        
            { id: 80, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898142647.jpg" },
        
            { id: 81, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898965226.jpg" },
        
            { id: 82, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898973861.jpg" },
        
            { id: 83, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898992787.jpg" },
        
            { id: 84, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898998800.jpg" },
        
            { id: 85, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899003947.jpg" },
        
            { id: 86, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899023177.jpg" },
        
            { id: 87, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899034367.jpg" },
        
            { id: 88, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899039639.jpg" },
        
            { id: 89, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899047333.jpg" },
        
            { id: 90, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899053270.jpg" },
        
            { id: 91, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899320503.jpg" },
        
            { id: 92, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899750028.jpg" },
        
            { id: 93, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899772032.jpg" },
        
            { id: 94, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899778576.jpg" },
        
            { id: 95, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899804911.jpg" },
        
            { id: 96, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899814394.jpg" },
        
            { id: 97, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899966669.jpg" },
        
            { id: 98, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900210058.jpg" },
        
            { id: 99, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900227754.jpg" },
        
            { id: 100, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900232537.jpg" },
        
            { id: 101, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900317698.jpg" },
        
            { id: 102, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900517099.jpg" },
        
            { id: 103, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900528823.jpg" },
        
            { id: 104, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900537199.jpg" },
        
            { id: 105, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900542371.jpg" },
        
            { id: 106, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900552800.jpg" }
        ]
    },
    
    '1_2': {
        titulo: "Nino Parque de las putas",
        descripcion: "Imágenes artísticas variadas",
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
            { id: 38, url: "https://pbs.twimg.com/media/G8ESeOGXYAE_uZG?format=jpg&name=medium" },
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
        titulo: "Kachando y grabando con nino",
        descripcion: "Edificios y estructuras contemporáneas",
        categoria: "Arquitectura",
        imagen: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90",
        imagenes: [
           
        ]
    },
    
    '1_4': {
        titulo: "Naturaleza y Paisajes",
        descripcion: "Fotografías de paisajes naturales",
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
        titulo: "Galería Tecnológica",
        descripcion: "Tecnología y dispositivos modernos",
        categoria: "Tecnología",
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
        titulo: "Kaz mi hija zorra",
        descripcion: "Heredó la putería de su madre",
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
        titulo: "Retratos Artísticos",
        descripcion: "Fotografía de retrato creativa",
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
            { id: 17, url: "https://pbs.twimg.com/media/HCq3uDLW4AA9bKm?format=png&name=small" },
            { id: 18, url: "https://pbs.twimg.com/media/HCrY9OhWMAAGqaz?format=jpg&name=small" },
            { id: 19, url: "https://pbs.twimg.com/media/HCrjyH_W8AEZXuN?format=png&name=small" },
            { id: 20, url: "https://pbs.twimg.com/media/HCrsaa6WcAEQbE6?format=jpg&name=large" },
            { id: 21, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772754337361.jpg" },
            { id: 22, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772754508960.jpg" },
            { id: 23, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755425956.jpg" },
            { id: 24, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755569708.jpg" },
            { id: 25, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772809577659.jpg" },
            { id: 26, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772818011690.jpg" },
        
            { id: 27, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898285372.jpg" },
        
            { id: 28, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898365092.jpg" },
        
            { id: 29, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898375347.jpg" },
        
            { id: 30, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898380786.jpg" },
        
            { id: 31, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898388449.jpg" },
        
            { id: 32, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898395544.jpg" },
        
            { id: 33, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898401116.jpg" },
        
            { id: 34, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898406382.jpg" },
        
            { id: 35, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898413003.jpg" },
        
            { id: 36, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898431953.jpg" }
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
            { id: 16, url: "https://pbs.twimg.com/media/HCrLwetWIAEYdr5?format=jpg&name=small" },
            { id: 17, url: "https://pbs.twimg.com/media/HCrJoF-XMAAWJra?format=jpg&name=small" },
            { id: 18, url: "https://pbs.twimg.com/media/HCrQkIKW8AAlQY6?format=jpg&name=small" },
            { id: 19, url: "https://pbs.twimg.com/media/HCrQmL8XMAAy3uh?format=jpg&name=small" },
            { id: 20, url: "https://pbs.twimg.com/media/HCrTLFgaUAExqjv?format=jpg&name=small" },
            { id: 21, url: "https://pbs.twimg.com/media/HCrWiMXWkAA-wCf?format=jpg&name=small" },
            { id: 22, url: "https://pbs.twimg.com/media/HCrWkT0WcAAMjVS?format=jpg&name=small" },
            { id: 23, url: "https://pbs.twimg.com/media/HCrdo3TXgAAPZJ_?format=jpg&name=small" },
            { id: 24, url: "https://pbs.twimg.com/media/HCrdp_HaUAEiRRJ?format=jpg&name=small" },
            { id: 25, url: "https://pbs.twimg.com/media/HCrdwzdaUAIi_H8?format=jpg&name=small" },
            { id: 26, url: "https://pbs.twimg.com/media/HCrdyDBXoAEyPa-?format=jpg&name=small" },
            { id: 27, url: "https://pbs.twimg.com/media/HCreqhoXIAAuICJ?format=jpg&name=small" },
            { id: 28, url: "https://pbs.twimg.com/media/HCre_jXWwAAz2P5?format=jpg&name=small" },
            { id: 29, url: "https://pbs.twimg.com/media/HCroIllWAAE-Trf?format=jpg&name=medium" },
            { id: 30, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772753330013.jpg" },
            { id: 31, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772753542109.jpg" },
            { id: 32, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772753687142.jpg" },
            { id: 33, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772753822185.jpg" },
            { id: 34, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772754025618.jpg" },
            { id: 35, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755174751.jpg" },
            { id: 36, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755373301.jpg" },
            { id: 37, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772812336330.jpg" },
        
            { id: 38, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891800398.jpg" },
        
            { id: 39, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891807121.jpg" },
        
            { id: 40, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900410331.jpg" },
        
            { id: 41, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900431718.jpg" },
        
            { id: 42, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900437495.jpg" }
        ]
    },
    // CONTENEDOR 4 - Yotsuba
    '4_1': {
        titulo: "Yotsuba - La más enérgica",
        descripcion: "Colección de imágenes de Yotsuba, la quintilliza más alegre y deportista",
        categoria: "Quintillizas",
        imagen: "https://pbs.twimg.com/media/HCreLRRWoAEMJ40?format=jpg&name=medium",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HCreLRRWoAEMJ40?format=jpg&name=small" },
            { id: 2, url: "https://pbs.twimg.com/media/HCrhHmxWMAAHCFy?format=jpg&name=small" },
            { id: 3, url: "https://pbs.twimg.com/media/HCriATyaUAEr65q?format=jpg&name=medium" },
            { id: 4, url: "https://pbs.twimg.com/media/HCrkMgbWwAAK4Ij?format=jpg&name=medium" },
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772756583662.jpg" },
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772756651337.jpg" },
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772757260488.jpg" },
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804026174.jpg" },
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804067351.jpg" },
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804209770.jpg" },
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804687591.jpg" },
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804695376.jpg" },
            { id: 13, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772812918884.jpg" },
            { id: 14, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817503431.jpg" },
            { id: 15, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817515060.jpg" },
            { id: 16, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772818040391.jpg" },
            { id: 17, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772836254471.jpg" },
            { id: 18, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772836263656.jpg" },
            { id: 19, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772836274566.jpg" },
        
            { id: 20, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840541996.jpg" },
        
            { id: 21, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842220317.jpg" },
        
            { id: 22, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842335918.jpg" },
        
            { id: 23, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842828933.jpg" },
        
            { id: 24, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842883624.jpg" },
        
            { id: 25, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843007151.jpg" },
        
            
        
            { id: 26, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843474095.jpg" },
        
            { id: 27, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891314219.jpg" },
        
            { id: 28, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892582071.jpg" },
        
            { id: 29, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892588976.jpg" },
        
            { id: 30, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892597721.jpg" },
        
            { id: 31, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892601791.jpg" },
        
            { id: 32, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892620274.jpg" },
        
            { id: 33, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892632506.jpg" },
        
            { id: 34, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892639796.jpg" },
        
            { id: 35, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892650841.jpg" },
        
            { id: 36, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892656826.jpg" },
        
            { id: 37, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772894098092.jpg" },
        
            { id: 38, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772896646227.jpg" },
        
            { id: 39, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772896655518.jpg" },
        
            { id: 40, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772896681430.jpg" },
        
            { id: 41, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772896690931.jpg" },
        
            { id: 42, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897498977.jpg" },
        
            { id: 43, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897573490.jpg" },
        
            { id: 44, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900465407.jpg" },
        
            { id: 45, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900473127.jpg" },
        
            { id: 46, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900481618.jpg" }
        ]
    },
    
    // CONTENEDOR 5 - Ichika
    '5_1': {
        titulo: "Ichika - La mayor",
        descripcion: "Galería de Ichika, la hermana mayor y actriz del grupo",
        categoria: "Quintillizas",
        imagen: "https://pbs.twimg.com/media/HCrpe4jWQAAstF7?format=jpg&name=small",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HCrpe4jWQAAstF7?format=jpg&name=small" },
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772839634566.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840515828.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842187129.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842191856.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842227503.jpg" },
        
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842349291.jpg" },
        
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843469040.jpg" },
        
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844213814.jpg" },
        
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844250648.jpg" },
        
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844990247.jpg" },
        
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891268773.jpg" },
        
            { id: 13, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892676701.jpg" },
        
            { id: 14, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892681625.jpg" },
        
            { id: 15, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892687447.jpg" },
        
            { id: 16, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892694195.jpg" },
        
            { id: 17, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892703123.jpg" },
        
            { id: 18, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892708790.jpg" },
        
            { id: 19, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892714505.jpg" },
        
            { id: 20, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892718818.jpg" },
        
            { id: 21, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892722940.jpg" },
        
            { id: 22, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892728512.jpg" },
        
            { id: 23, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892733655.jpg" },
        
            { id: 24, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897491413.jpg" },
        
            { id: 25, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897582073.jpg" },
        
            { id: 26, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900095406.jpg" },
        
            { id: 27, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900103440.jpg" },
        
            { id: 28, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900106927.jpg" },
        
            { id: 29, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900112837.jpg" }
        ]
    },
    
    // CONTENEDOR 6 - Miku
    '6_1': {
        titulo: "Miku - La tsundere",
        descripcion: "Imágenes de Miku, la chica dulce y amante de la historia",
        categoria: "Quintillizas",
        imagen: "https://pbs.twimg.com/media/HCrpm_8bAAAwYby?format=jpg&name=small",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HCrpm_8bAAAwYby?format=jpg&name=small" },
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772839869325.jpg" },
       
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840560302.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842211329.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842342375.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844851712.jpg" },
        
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844999001.jpg" },
        
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891292749.jpg" },
        
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897627645.jpg" },
        
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897634195.jpg" },
        
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898821047.jpg" },
        
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898832931.jpg" },
        
            { id: 13, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898843322.jpg" },
        
            { id: 14, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899074889.jpg" },
        
            { id: 15, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899081336.jpg" },
        
            { id: 16, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899090812.jpg" },
        
            { id: 17, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899096445.jpg" },
        
            { id: 18, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772899543275.jpg" }
        ]
    },
    
    // CONTENEDOR 7 - Itsuki
    '7_1': {
        titulo: "Itsuki - La glotona",
        descripcion: "Colección de Itsuki, la estudiosa que siempre está comiendo",
        categoria: "Quintillizas",
        imagen: "https://pbs.twimg.com/media/HCrph-HXcAIXa81?format=png&name=small",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HCrph-HXcAIXa81?format=png&name=small" },
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840025743.jpg" },
      
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840532895.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842315625.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843445971.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843674711.jpg" },
        
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843684827.jpg" },
        
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844942112.jpg" },
        
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772845004666.jpg" },
        
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891319382.jpg" },
        
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892505614.jpg" },
        
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892517976.jpg" },
        
            { id: 13, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892528381.jpg" },
        
            { id: 14, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892561400.jpg" },
        
            { id: 15, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897652966.jpg" },
        
            { id: 16, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897660120.jpg" }
        ]
    },
    
    // CONTENEDOR 8 - Trolas Random
    '8_1': {
        titulo: "Trolas",
        descripcion: "Recopilación de los mejores memes y contenido divertido",
        categoria: "Humor",
        imagen: "https://images.unsplash.com/photo-1554177255-61502b3520e7?w=300&h=300&fit=crop",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772752779732.jpg" },
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772754183899.jpg" },
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755482182.jpg" },
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755822700.jpg" },
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755832880.jpg" },
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755852312.jpg" },
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755901844.jpg" },
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755909972.jpg" },
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772755994925.jpg" },
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772756147137.jpg" },
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772756161117.jpg" },
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772756234430.jpg" },
            { id: 13, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804287679.jpg" },
            { id: 14, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772804296934.jpg" },
            { id: 15, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772806129474.jpg" },
            { id: 16, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772807067036.jpg" },
            { id: 17, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772807488716.jpg" },
            { id: 18, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772807496880.jpg" },
            { id: 19, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772807502782.jpg" },
            { id: 20, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772807507094.jpg" },
            { id: 21, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772809524535.jpg" },
            { id: 22, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772810924859.jpg" },
            { id: 23, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772810957105.jpg" },
            { id: 24, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772812316381.jpg" },
            { id: 25, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772812765688.jpg" },
            { id: 26, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817133537.jpg" },
            { id: 27, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817479054.jpg" },
            { id: 28, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817532302.jpg" },
            { id: 29, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817543066.jpg" },
            { id: 30, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817567995.jpg" },
            { id: 31, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772817633790.jpg" },
            { id: 32, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772818093418.jpg" },
            { id: 33, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772819157914.jpg" },
            { id: 34, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772819883600.jpg" },
        
            { id: 35, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840103675.jpg" },
        
            { id: 36, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840961424.jpg" },
        
            { id: 37, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842368806.jpg" },
        
            { id: 38, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842374514.jpg" },
        
            { id: 39, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842379410.jpg" },
        
            { id: 40, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844325690.jpg" },
        
            { id: 41, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891661773.jpg" },
        
            { id: 42, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891666448.jpg" },
        
            { id: 43, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891675459.jpg" },
        
            { id: 44, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772892942474.jpg" },
        
            { id: 45, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898173402.jpg" }
        ]
    },
    
    '8_2': {
        titulo: "Videos y GIFs Random",
        descripcion: "Contenido audiovisual variado para entretenimiento",
        categoria: "Multimedia",
        imagen: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=300&h=300&fit=crop",
        imagenes: [
            { id: 1, url: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=600&fit=crop" },
            { id: 2, url: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=600&fit=crop" },
            { id: 3, url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=600&fit=crop" },
            { id: 4, url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&h=600&fit=crop" },
            { id: 5, url: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&h=600&fit=crop" },
            { id: 6, url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=600&fit=crop" },
            { id: 7, url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=600&fit=crop" },
            { id: 8, url: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=600&h=600&fit=crop" },
            { id: 9, url: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=600&fit=crop" },
            { id: 10, url: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&h=600&fit=crop" },
            { id: 11, url: "https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?w=600&h=600&fit=crop" },
            { id: 12, url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop" },
            { id: 13, url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=600&fit=crop" },
            { id: 14, url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=600&fit=crop" },
            { id: 15, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop" }
        ]
    },

    // ============ CONTENEDOR 9 - DUOS (TODAS LAS COMBINACIONES) ============
    '9_Nino_Ichika': {
        titulo: "Nino & Ichika",
        descripcion: "Las dos hermanas mayores - Nino la putona e Ichika la actriz",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841651283.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841651283.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841663012.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841839413.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843491934.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844890275.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891382880.jpg" },
        
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772893061355.jpg" },
        
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900802371.jpg" },
        
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900830699.jpg" },
        
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900847066.jpg" },
        
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900867177.jpg" },
        
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900888176.jpg" }
        ]
             
      
    },
    '9_Nino_Miku': {
        titulo: "Nino & Miku",
        descripcion: "Nino y Miku - La putona y la tsundere",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772839068623.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772839012283.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772839068623.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772839192180.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840778711.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841856358.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842458853.jpg" },
        
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842647399.jpg" },
        
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844269248.jpg" },
        
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891362435.jpg" },
        
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898711544.jpg" },
        
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898727302.jpg" },
        
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898740555.jpg" },
        
            { id: 13, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898753220.jpg" },
        
            { id: 14, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898767506.jpg" },
        
            { id: 15, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898781116.jpg" },
        
            { id: 16, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898793350.jpg" },
        
            { id: 17, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772901100458.jpg" },
        
            { id: 18, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772901136755.jpg" },
        
            { id: 19, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772901165323.jpg" }
        ]
    },
    '9_Nino_Yotsuba': {
        titulo: "Nino & Yotsuba",
        descripcion: "Nino y Yotsuba - La putona y la enérgica",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841436455.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841436455.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841449305.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842153224.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842166122.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842863989.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843646826.jpg" },
        
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900988437.jpg" },
        
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900999026.jpg" },
        
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772901010025.jpg" },
        
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772901021193.jpg" },
        
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772901038722.jpg" },
        
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772901070018.jpg" }
        ]
    },
    '9_Nino_Itsuki': {
        titulo: "Nino & Itsuki",
        descripcion: "Nino y Itsuki - La putona y la glotona",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841534873.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840608337.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841534873.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841545557.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841702598.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841715538.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841798646.jpg" },
        
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841810420.jpg" },
        
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841820570.jpg" },
        
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900610008.jpg" },
        
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900622082.jpg" },
        
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900651185.jpg" },
        
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772900670648.jpg" }
        ]
    },
    '9_Ichika_Miku': {
        titulo: "Ichika & Miku",
        descripcion: "Ichika y Miku - La actriz y la tsundere",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841584126.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841584126.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841602192.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897999456.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898016473.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772898032399.jpg" }
        ]
    },
    '9_Ichika_Yotsuba': {
        titulo: "Ichika & Yotsuba",
        descripcion: "Ichika y Yotsuba - La mayor y la más enérgica",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841613839.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841613839.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841623895.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844489081.jpg" }
        ]
    },
    '9_Ichika_Itsuki': {
        titulo: "Ichika & Itsuki",
        descripcion: "Ichika y Itsuki - Dos hermanas muy diferentes",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841558446.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841558446.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841569032.jpg" }
        ]
    },
    '9_Miku_Yotsuba': {
        titulo: "Miku & Yotsuba",
        descripcion: "Miku y Yotsuba - La tímida y la extrovertida",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841464859.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841464859.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841475394.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842901967.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843394593.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843541018.jpg" }
        ]
    },
    '9_Miku_Itsuki': {
        titulo: "Miku & Itsuki",
        descripcion: "Miku y Itsuki - Amantes de la historia y la comida",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841513541.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841513541.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841524312.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843379703.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843530130.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843603965.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843659969.jpg" },
        
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891025798.jpg" },
        
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891039731.jpg" },
        
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891052763.jpg" },
        
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891395400.jpg" }
        ]
    },
    '9_Yotsuba_Itsuki': {
        titulo: "Yotsuba & Itsuki",
        descripcion: "Yotsuba y Itsuki - Energía y apetito",
        categoria: "Quintillizas - Duo",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841498573.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772839260751.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841487324.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841498573.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843616849.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772844452075.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891371990.jpg" }
        ]
    },

    // ============ CONTENEDOR 10 - TRIOS (TODAS LAS COMBINACIONES) ============
    '10_Nino_Ichika_Miku': {
        titulo: "Nino, Ichika & Miku",
        descripcion: "Tres hermanas - Nino, Ichika y Miku",
        categoria: "Quintillizas - Trio",
        imagen: "https://pbs.twimg.com/media/HClB4sMWkAAZRK8?format=jpg&name=small",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897713827.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897792586.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897811079.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897831801.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897861739.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772897889285.jpg" }
        ]
    },
    '10_Nino_Ichika_Yotsuba': {
        titulo: "Nino, Ichika & Yotsuba",
        descripcion: "Nino, Ichika y Yotsuba juntas",
        categoria: "Quintillizas - Trio",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842250442.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842250442.jpg" }
        ]
    },
    '10_Nino_Ichika_Itsuki': {
        titulo: "Nino, Ichika & Itsuki",
        descripcion: "Nino, Ichika y Itsuki en trio",
        categoria: "Quintillizas - Trio",
        imagen: "https://pbs.twimg.com/media/HClC0beWIAAKAju?format=jpg&name=small",
        imagenes: []
    },
    '10_Nino_Miku_Yotsuba': {
        titulo: "Nino, Miku & Yotsuba",
        descripcion: "Nino con Miku y Yotsuba",
        categoria: "Quintillizas - Trio",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842066494.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842066494.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842078371.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842091239.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842105564.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842120754.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842134594.jpg" }
        ]
    },
    '10_Nino_Miku_Itsuki': {
        titulo: "Nino, Miku & Itsuki",
        descripcion: "Nino, Miku e Itsuki",
        categoria: "Quintillizas - Trio",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841970628.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841970628.jpg" }
        ]
    },
    '10_Nino_Yotsuba_Itsuki': {
        titulo: "Nino, Yotsuba & Itsuki",
        descripcion: "Nino con Yotsuba e Itsuki",
        categoria: "Quintillizas - Trio",
        imagen: "https://pbs.twimg.com/media/HClCBCMXMAAd6qi?format=jpg&name=small",
        imagenes: []
    },
    '10_Ichika_Miku_Yotsuba': {
        titulo: "Ichika, Miku & Yotsuba",
        descripcion: "Ichika, Miku y Yotsuba",
        categoria: "Quintillizas - Trio",
        imagen: "https://pbs.twimg.com/media/HClCE68WYAAuFly?format=jpg&name=small",
        imagenes: []
    },
    '10_Ichika_Miku_Itsuki': {
        titulo: "Ichika, Miku & Itsuki",
        descripcion: "Ichika, Miku e Itsuki",
        categoria: "Quintillizas - Trio",
        imagen: "https://pbs.twimg.com/media/HClCGqZakAA4SE4?format=jpg&name=small",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891136642.jpg" }
        ]
    },
    '10_Ichika_Yotsuba_Itsuki': {
        titulo: "Ichika, Yotsuba & Itsuki",
        descripcion: "Ichika con Yotsuba e Itsuki",
        categoria: "Quintillizas - Trio",
        imagen: "https://pbs.twimg.com/media/HClCIlHa8AABwfo?format=jpg&name=small",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772896937651.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772896955823.jpg" }
        ]
    },
    '10_Miku_Yotsuba_Itsuki': {
        titulo: "Miku, Yotsuba & Itsuki",
        descripcion: "Miku, Yotsuba e Itsuki",
        categoria: "Quintillizas - Trio",
        imagen: "https://pbs.twimg.com/media/HCqEZzsaoAAhtRm?format=jpg&name=small",
        imagenes: []
    },

    // ============ CONTENEDOR 11 - CUARTETOS (TODAS LAS COMBINACIONES) ============
    '11_Nino_Ichika_Miku_Yotsuba': {
        titulo: "Nino, Ichika, Miku & Yotsuba",
        descripcion: "Cuarteto sin Itsuki",
        categoria: "Quintillizas - Cuarteto",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841774913.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841774913.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891182888.jpg" }
        ]
    },
    '11_Nino_Ichika_Miku_Itsuki': {
        titulo: "Nino, Ichika, Miku & Itsuki",
        descripcion: "Cuarteto sin Yotsuba",
        categoria: "Quintillizas - Cuarteto",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842513938.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842513938.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891201432.jpg" }
        ]
    },
    '11_Nino_Ichika_Yotsuba_Itsuki': {
        titulo: "Nino, Ichika, Yotsuba & Itsuki",
        descripcion: "Cuarteto sin Miku",
        categoria: "Quintillizas - Cuarteto",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842732907.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842732907.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843434180.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772843510721.jpg" }
        ]
    },
    '11_Nino_Miku_Yotsuba_Itsuki': {
        titulo: "Nino, Miku, Yotsuba & Itsuki",
        descripcion: "Cuarteto sin Ichika",
        categoria: "Quintillizas - Cuarteto",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841739980.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772841739980.jpg" }
        ]
    },
    '11_Ichika_Miku_Yotsuba_Itsuki': {
        titulo: "Ichika, Miku, Yotsuba & Itsuki",
        descripcion: "Cuarteto sin Nino",
        categoria: "Quintillizas - Cuarteto",
        imagen: "https://pbs.twimg.com/media/HCrTLFgaUAExqjv?format=jpg&name=small",
        imagenes: []
    },

    // ============ CONTENEDOR 12 - QUINTETO (UNA SOLA COMBINACIÓN) ============
    '12_Nino_Ichika_Miku_Yotsuba_Itsuki': {
        titulo: "LAS CINCO QUINTILLIZAS",
        descripcion: "Todas las hermanas Nakano juntas - Nino, Ichika, Miku, Yotsuba e Itsuki",
        categoria: "Quintillizas - Quinteto",
        imagen: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840393339.jpg",
        imagenes: [
            { id: 1, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840393339.jpg" },
        
            { id: 2, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772840487826.jpg" },
        
            { id: 3, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842491812.jpg" },
        
            { id: 4, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842498826.jpg" },
        
            { id: 5, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842522871.jpg" },
        
            { id: 6, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842530131.jpg" },
        
            { id: 7, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842558691.jpg" },
        
            { id: 8, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842668960.jpg" },
        
            { id: 9, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772842912093.jpg" },
        
            { id: 10, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772848633174.jpg" },
        
            { id: 11, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772848822004.jpg" },
        
            { id: 12, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891115872.jpg" },
        
            { id: 13, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891461004.jpg" },
        
            { id: 14, url: "https://raw.githubusercontent.com/SORFAR123123/Putas-de-fabri/main/imagenes/img_1772891472663.jpg" }
        ]
    },

    // ============ CONTENEDOR 13 - PRUEBA ============
    '13_Prueba_1': {
        titulo: "Prueba 1",
        descripcion: "Primer subcontenedor de prueba",
        categoria: "Prueba",
        imagen: "https://pbs.twimg.com/media/HCrsaa6WcAEQbE6?format=jpg&name=large",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HCrsaa6WcAEQbE6?format=jpg&name=large" },
            { id: 2, url: "https://pbs.twimg.com/media/HCrjyH_W8AEZXuN?format=png&name=small" }
        ]
    },
    '13_Prueba_2': {
        titulo: "Prueba 2",
        descripcion: "Segundo subcontenedor de prueba",
        categoria: "Prueba",
        imagen: "https://pbs.twimg.com/media/HCrY9OhWMAAGqaz?format=jpg&name=small",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HCrY9OhWMAAGqaz?format=jpg&name=small" },
            { id: 2, url: "https://pbs.twimg.com/media/HCq3vdHXYAEffD7?format=png&name=small" }
        ]
    },

    //contendor 14 emilia putona
     '14_1': {
        titulo: "Emilia putona",
        descripcion: "Primer subcontenedor de prueba",
        categoria: "Prueba",
        imagen: "https://pbs.twimg.com/media/HCrsaa6WcAEQbE6?format=jpg&name=large",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HCrsaa6WcAEQbE6?format=jpg&name=large" },
            { id: 2, url: "https://pbs.twimg.com/media/HCrjyH_W8AEZXuN?format=png&name=small" }
        ]
    },
    '14_2': {
        titulo: "cambiar xd",
        descripcion: "xdxdxdxdxd",
        categoria: "Prueba",
        imagen: "https://pbs.twimg.com/media/HCrY9OhWMAAGqaz?format=jpg&name=small",
        imagenes: [
            { id: 1, url: "https://pbs.twimg.com/media/HCrY9OhWMAAGqaz?format=jpg&name=small" },
            { id: 2, url: "https://pbs.twimg.com/media/HCq3vdHXYAEffD7?format=png&name=small" }
        ]
    }
};

// ================================================
// FUNCIONES DE ACCESO A CONTENEDORES
// ================================================

function obtenerContenedorGaleria(numero) {
    return contenedoresGaleria[numero] || {
        nombre: `GALERÍA ${numero}`,
        imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        descripcion: '5 sub-contenedores con galerías de imágenes',
        categoria: 'General'
    };
}

function obtenerSubcontenedorGaleria(contenedor, subcontenedor) {
    // Para los contenedores 9-13 que usan nombres en lugar de números
    if (contenedor >= 9) {
        const key = `${contenedor}_${subcontenedor}`;
        return galeriaDatabase[key] || {
            titulo: `Galería ${subcontenedor}`,
            descripcion: 'Colección de imágenes',
            categoria: 'General',
            imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
            imagenes: []
        };
    } else {
        const key = `${contenedor}_${subcontenedor}`;
        return galeriaDatabase[key] || {
            titulo: `Galería ${subcontenedor}`,
            descripcion: 'Colección de imágenes',
            categoria: 'General',
            imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
            imagenes: []
        };
    }
}

function obtenerContenedoresGaleriaDisponibles() {
    const contenedores = {};
    
    Object.keys(galeriaDatabase).forEach(key => {
        const partes = key.split('_');
        const contenedor = partes[0];
        
        if (!contenedores[contenedor]) {
            contenedores[contenedor] = [];
        }
        
        // Guardamos el nombre completo del subcontenedor
        contenedores[contenedor].push(partes.slice(1).join('_'));
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

// 1. Función para cargar la página principal de galerías
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

// 2. Crear UI de contenedores de galería
function crearContenedoresGaleria() {
    let html = '<h2 style="text-align: center; margin-bottom: 30px; color: #FFD166;">📦 CONTENEDORES DE GALERÍA</h2>';
    html += '<div class="manga-contenedores">';
    
    const totalContenedores = Object.keys(contenedoresGaleria).length;
    
    for (let i = 1; i <= totalContenedores; i++) {
        const contenedorData = obtenerContenedorGaleria(i);
        const nombre = contenedorData.nombre || `GALERÍA ${i}`;
        const desc = contenedorData.descripcion || 'Sub-contenedores con imágenes';
        
        html += `
            <div class="contenedor-item" onclick="cargarSubcontenedoresGaleria(${i})">
                <div class="contenedor-img" style="background-image: url('${contenedorData.imagen}')"></div>
                <div class="contenedor-numero">${nombre}</div>
                <p>${desc}</p>
                <div class="card-button" style="background: linear-gradient(135deg, #FF1493, #FF69B4);">
                    Ver Galerías
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// 3. Cargar subcontenedores de galería
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
        📦 ${obtenerContenedorGaleria(contenedor).nombre} - SUB-GALERÍAS
    </h2>`;
    html += '<div class="subcontenedores-grid">';
    
    const contenedores = obtenerContenedoresGaleriaDisponibles();
    const subcontenedoresDisponibles = contenedores[contenedor] || [];
    
    // Para contenedores 1-8 mostramos siempre 5 subcontenedores
    if (contenedor <= 8) {
        for (let i = 1; i <= 5; i++) {
            const tieneGaleria = subcontenedoresDisponibles.includes(i.toString());
            const subData = obtenerSubcontenedorGaleria(contenedor, i);
            const desc = subData.descripcion || (tieneGaleria ? 'Galería disponible' : '(Sin imágenes configuradas)');
            const galeriaInfo = tieneGaleria ? obtenerGaleria(contenedor, i) : null;
            
            html += `
                <div class="subcontenedor-item" onclick="${tieneGaleria ? `cargarGaleria(${contenedor}, '${i}')` : 'alert("Esta galería no tiene imágenes configuradas")'}">
                    <div class="subcontenedor-img" style="background-image: url('${subData.imagen}')"></div>
                    <h3>${tieneGaleria ? galeriaInfo.titulo.split(' ')[0] : `Galería ${i}`}</h3>
                    ${tieneGaleria ? 
                        `<p><strong>${galeriaInfo.titulo}</strong></p>
                         <p style="font-size: 0.9rem; opacity: 0.8;">${galeriaInfo.categoria} • ${galeriaInfo.imagenes.length} imágenes</p>` 
                        : `<p style="color: #FF6B6B;">${desc}</p>`}
                    <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #FF1493, #FF69B4);">
                        ${tieneGaleria ? '📦 Ver Galería' : 'Vacío'}
                    </div>
                </div>
            `;
        }
    } 
    // Para contenedores 9-13 mostramos todos los subcontenedores disponibles
    else {
        subcontenedoresDisponibles.forEach(subKey => {
            const galeriaInfo = obtenerGaleria(contenedor, subKey);
            if (galeriaInfo) {
                html += `
                    <div class="subcontenedor-item" onclick="cargarGaleria(${contenedor}, '${subKey}')">
                        <div class="subcontenedor-img" style="background-image: url('${galeriaInfo.imagen}')"></div>
                        <h3>${galeriaInfo.titulo}</h3>
                        <p style="font-size: 0.9rem; opacity: 0.8;">${galeriaInfo.categoria} • ${galeriaInfo.imagenes.length} imágenes</p>
                        <div class="card-button" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #FF1493, #FF69B4);">
                            📦 Ver Galería
                        </div>
                    </div>
                `;
            }
        });
    }
    
    html += '</div>';
    return html;
}

// 5. Cargar galería específica
function cargarGaleria(contenedor, subcontenedor) {
    contenedorActual = contenedor;
    subcontenedorActual = subcontenedor;
    
    const galeriaInfo = obtenerGaleria(contenedor, subcontenedor);
    if (!galeriaInfo || !galeriaInfo.imagenes || galeriaInfo.imagenes.length === 0) {
        alert('No hay imágenes disponibles en esta galería');
        return;
    }
    
    const mangaSection = document.getElementById('manga-section');
    mangaSection.innerHTML = crearGaleriaUI(galeriaInfo);
    
    const botonVolver = crearBotonVolver(() => cargarSubcontenedoresGaleria(contenedor));
    mangaSection.insertBefore(botonVolver, mangaSection.firstChild);
}

// 6. Crear UI de la galería con vista en grande
function crearGaleriaUI(galeriaInfo) {
    let html = `
        <div class="galeria-container" style="max-width: 1200px; margin: 0 auto; padding: 20px;">
            <h2 style="text-align: center; color: #FFD166; margin-bottom: 10px;">${galeriaInfo.titulo}</h2>
            <p style="text-align: center; opacity: 0.8; margin-bottom: 30px;">${galeriaInfo.descripcion}</p>
            
            <div style="background: rgba(255, 20, 147, 0.1); border-radius: 15px; padding: 20px; margin-bottom: 30px; border-left: 5px solid #FF1493;">
                <p style="text-align: center; color: #FFD166; font-size: 1.1rem;">
                    📦 ${galeriaInfo.imagenes.length} imágenes • Categoría: ${galeriaInfo.categoria}
                </p>
                <p style="text-align: center; opacity: 0.8; margin-top: 10px; font-size: 0.9rem;">
                    Haz clic en cualquier imagen para verla en tamaño completo
                </p>
            </div>
            
            <!-- GALERÍA DE IMÁGENES -->
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
                    ✕ Cerrar
                </button>
                
                <div style="max-width: 90%; max-height: 80%; margin-top: 60px;">
                    <img id="imagen-grande" src="" style="max-width: 100%; max-height: 100%; border-radius: 15px; box-shadow: 0 20px 50px rgba(0,0,0,0.7); border: 5px solid #FF1493;">
                </div>
                
                <div style="margin-top: 30px; display: flex; gap: 20px; align-items: center;">
                    <button onclick="imagenAnterior()" class="control-btn" style="background: #5864F5; padding: 12px 25px; border-radius: 50px; border: none; color: white; font-size: 1rem; cursor: pointer;">
                        ◀ Anterior
                    </button>
                    
                    <div id="contador-imagen" style="color: #FFD166; font-size: 1.2rem; font-weight: bold; min-width: 100px; text-align: center;">
                        1 / ${galeriaInfo.imagenes.length}
                    </div>
                    
                    <button onclick="imagenSiguiente()" class="control-btn" style="background: #FF1493; padding: 12px 25px; border-radius: 50px; border: none; color: white; font-size: 1rem; cursor: pointer;">
                        Siguiente ▶
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
// FUNCIÓN AUXILIAR PARA CREAR BOTÓN VOLVER
// ================================================

function crearBotonVolver(funcionVolver) {
    const boton = document.createElement('button');
    boton.textContent = '← Volver';
    boton.style.cssText = `
        background: linear-gradient(135deg, #FF1493, #FF69B4);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 50px;
        font-size: 1rem;
        cursor: pointer;
        margin: 20px;
        font-weight: bold;
        border: 2px solid white;
        transition: transform 0.3s ease;
    `;
    boton.onmouseover = () => boton.style.transform = 'scale(1.05)';
    boton.onmouseout = () => boton.style.transform = 'scale(1)';
    boton.onclick = funcionVolver;
    return boton;
}

// ================================================
// INICIALIZACIÓN
// ================================================

console.log('📦 Sistema de Galería cargado correctamente');
console.log('📁 Contenedores disponibles: 13');
console.log('📂 Sub-galerías disponibles: ' + Object.keys(galeriaDatabase).length);
