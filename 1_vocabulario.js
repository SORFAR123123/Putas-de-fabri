// ================================================
// BASE DE DATOS DE VOCABULARIO CON MAZOS DIFÍCILES
// ================================================

const vocabularioDatabase = {
    // ================================================
    // CONTENEDOR 1
    // ================================================
    
    // Sub-contenedor 1.1
    'sub1_1': {
        // MAZOS NORMALES
        1: [
            { japones: '今はちょうど', lectura: 'ima wa choudo', opciones: ['Justo ahora', 'Ya terminó', 'Hace mucho', 'Más tarde'], respuesta: 0 },
            { japones: '芸能', lectura: 'geinou', opciones: ['Entretenimiento', 'Deporte', 'Política', 'Academia'], respuesta: 0 },
            { japones: '活動', lectura: 'katsudou', opciones: ['Actividad', 'Descanso', 'Pausa', 'Inactividad'], respuesta: 0 },
            { japones: '時期', lectura: 'jikan', opciones: ['Período/Época', 'Lugar', 'Persona', 'Razón'], respuesta: 0 },
            { japones: 'せっかく 来れたのに', lectura: 'sekkaku korareta noni', opciones: ['Aunque vine con dificultad...', 'Porque fue fácil venir', 'Ya que no pude venir', 'Como no tenía planes'], respuesta: 0 },
            { japones: '水の泡', lectura: 'mizu no awa', opciones: ['En vano/Agua pasada', 'Gran éxito', 'Sorpresa', 'Ceremonia'], respuesta: 0 },
            { japones: 'そうなったら', lectura: 'sou nattara', opciones: ['Si eso sucede', 'Antes de que suceda', 'Aunque no suceda', 'Porque sucedió'], respuesta: 0 },
            { japones: 'すればいい', lectura: 'sureba ii', opciones: ['Deberías hacer (sugerencia)', 'No deberías hacer', 'Es imposible hacer', 'Es obligatorio hacer'], respuesta: 0 },
            { japones: '未来の明るい', lectura: 'mirai no akarui', opciones: ['Con un futuro brillante', 'Con un futuro oscuro', 'Sin futuro', 'Con un futuro incierto'], respuesta: 0 },
            { japones: '元女優が', lectura: 'moto joyuu ga', opciones: ['Una ex actriz', 'Una actriz principiante', 'Una actriz famosa', 'Una directora'], respuesta: 0 }
        ],
        
        2: [
            { japones: '引退になって', lectura: 'intai ni natte', opciones: ['Haberse retirado', 'Haberse unido', 'Haberse graduado', 'Haberse mudado'], respuesta: 0 },
            { japones: 'しまいに', lectura: 'shimai ni', opciones: ['Al final/ Finalmente', 'Al principio', 'De repente', 'Raramente'], respuesta: 0 },
            { japones: '業界', lectura: 'gyoukai', opciones: ['Industria/Rubio', 'País', 'Escuela', 'Familia'], respuesta: 0 },
            { japones: '華麗', lectura: 'karei', opciones: ['Elegante/Espléndido', 'Simple', 'Ordinario', 'Feo'], respuesta: 0 },
            { japones: 'これはいける', lectura: 'kore wa ikeru', opciones: ['Esto puede funcionar/Es prometedor', 'Esto es imposible', 'Esto es peligroso', 'Esto es aburrido'], respuesta: 0 },
            { japones: '初出演', lectura: 'hatsu shutsuen', opciones: ['Primera aparición', 'Última aparición', 'Aparición especial', 'Aparición casual'], respuesta: 0 },
            { japones: '元芸能人', lectura: 'moto geinoujin', opciones: ['Ex celebridad', 'Nueva celebridad', 'Periodista', 'Fan'], respuesta: 0 },
            { japones: '世にも珍しい', lectura: 'yo ni mo mezurashii', opciones: ['Extraño en el mundo/Inaudito', 'Muy común', 'Muy aburrido', 'Muy caro'], respuesta: 0 },
            { japones: '話題になる', lectura: 'wadai ni naru', opciones: ['Convertirse en tema de conversación', 'Ser olvidado', 'Ser criticado', 'Ser ignorado'], respuesta: 0 },
            { japones: '革命', lectura: 'kakumei', opciones: ['Revolución', 'Evolución', 'Tradición', 'Estancamiento'], respuesta: 0 }
        ],
        
        3: [
            { japones: '起こせる', lectura: 'okoseru', opciones: ['Poder causar/Lograr', 'Poder prevenir', 'Poder olvidar', 'Poder ignorar'], respuesta: 0 },
            { japones: '活躍さえ', lectura: 'katsuyaku sae', opciones: ['Incluso la actividad exitosa', 'Fracaso constante', 'Primer intento', 'Sin esfuerzo'], respuesta: 0 },
            { japones: '調理学校', lectura: 'chouri gakkou', opciones: ['Escuela de cocina', 'Escuela de arte', 'Escuela de negocios', 'Escuela de idiomas'], respuesta: 0 },
            { japones: 'きつい', lectura: 'kitsui', opciones: ['Difícil/Duro', 'Fácil', 'Relajado', 'Lento'], respuesta: 0 },
            { japones: '他の道を', lectura: 'hoka no michi wo', opciones: ['Otro camino', 'El mismo camino', 'Un atajo', 'Un callejón sin salida'], respuesta: 0 },
            { japones: '毎日', lectura: 'mainichi', opciones: ['Todos los días', 'Rara vez', 'A veces', 'Nunca'], respuesta: 0 },
            { japones: '試作', lectura: 'shisaku', opciones: ['Prototipo/Prueba de fabricación', 'Producto final', 'Venta', 'Consumo'], respuesta: 0 },
            { japones: 'お菓子', lectura: 'okashi', opciones: ['Dulces/Golosinas', 'Plato principal', 'Bebida', 'Sopa'], respuesta: 0 },
            { japones: 'お腹', lectura: 'onaka', opciones: ['Estómago', 'Cabeza', 'Mano', 'Corazón'], respuesta: 0 },
            { japones: '試食', lectura: 'shishoku', opciones: ['Degustación', 'Cocción', 'Compra', 'Desperdicio'], respuesta: 0 }
        ],
        
        4: [
            { japones: '将来', lectura: 'shourai', opciones: ['Futuro', 'Pasado', 'Presente', 'Ayer'], respuesta: 0 },
            { japones: '喫茶店', lectura: 'kissaten', opciones: ['Cafetería', 'Hospital', 'Tienda', 'Estación'], respuesta: 0 },
            { japones: '写真', lectura: 'shashin', opciones: ['Fotografía', 'Pintura', 'Escultura', 'Película'], respuesta: 0 },
            { japones: '写っている', lectura: 'utsu tte iru', opciones: ['Estar salido (en una foto)', 'Estar escondido', 'Estar borrado', 'Estar pintado'], respuesta: 0 },
            { japones: '報酬', lectura: 'houshuu', opciones: ['Recompensa/Pago', 'Castigo', 'Regalo', 'Deuda'], respuesta: 0 },
            { japones: '今後', lectura: 'kongo', opciones: ['De ahora en adelante', 'Hasta ahora', 'Recientemente', 'En el pasado lejano'], respuesta: 0 },
            { japones: '食レポ', lectura: 'shoku repo', opciones: ['Reportaje gastronómico', 'Reportaje deportivo', 'Reportaje político', 'Crítica literaria'], respuesta: 0 },
            { japones: '代わって', lectura: 'kawatte', opciones: ['En lugar de/Como sustituto', 'Junto con', 'En contra de', 'A pesar de'], respuesta: 0 },
            { japones: '真剣に', lectura: 'shinken ni', opciones: ['En serio', 'En broma', 'Despreocupadamente', 'Tristemente'], respuesta: 0 },
            { japones: '大食い系', lectura: 'oogui kei', opciones: ['Tipo comedor abundante', 'Tipo que come poco', 'Vegetariano', 'Gourmet'], respuesta: 0 }
        ],
        
        5: [
            { japones: '企画', lectura: 'kikaku', opciones: ['Plan/Proyecto', 'Accidente', 'Rutina', 'Error'], respuesta: 0 },
            { japones: 'いい加減', lectura: 'ii kagen', opciones: ['Ya basta/De una vez', 'Con cuidado', 'Por primera vez', 'Sin prisa'], respuesta: 0 },
            { japones: '傳説', lectura: 'densetsu', opciones: ['Leyenda', 'Historia real', 'Noticia', 'Chisme'], respuesta: 0 },
            { japones: 'もんかな', lectura: 'mon ka na', opciones: ['¿De verdad? (coloquial, duda)', '¡Claro que sí!', 'Absolutamente no', 'Tal vez'], respuesta: 0 },
            { japones: '今夜', lectura: 'kon\'ya', opciones: ['Esta noche', 'Esta mañana', 'Ayer', 'Mañana'], respuesta: 0 },
            { japones: '完璧', lectura: 'kanpeki', opciones: ['Perfección', 'Desastre', 'Normalidad', 'Mediocridad'], respuesta: 0 },
            { japones: '任務', lectura: 'ninmu', opciones: ['Misión/Tarea', 'Juego', 'Vacación', 'Sueño'], respuesta: 0 },
            { japones: '遂行', lectura: 'suikou', opciones: ['Cumplimiento', 'Abandono', 'Retraso', 'Planificación'], respuesta: 0 },
            { japones: '初体験と', lectura: 'hatsu taiken to', opciones: ['Con la primera experiencia', 'Con la última experiencia', 'Sin experiencia', 'Con mucha experiencia'], respuesta: 0 },
            { japones: 'いうことで', lectura: 'iu koto de', opciones: ['Así que... / Por lo tanto', 'Sin embargo', 'Además', 'Por ejemplo'], respuesta: 0 }
        ],
        
        6: [
            { japones: '最終日', lectura: 'saishuu bi', opciones: ['Día final', 'Primer día', 'Día festivo', 'Día ordinario'], respuesta: 0 },
            { japones: '両等分', lectura: 'ryoutou bun', opciones: ['División en dos partes iguales', 'División desigual', 'Unificación', 'Multiplicación'], respuesta: 0 }
        ],
        
        // ====================
        // MAZOS DIFÍCILES ESPECIALES - Subcontenedor 1.1
        // ====================
        
        'D1': [
            { japones: '難解な表現', lectura: 'nankai na hyougen', opciones: ['Expresión difícil', 'Expresión fácil', 'Expresión común', 'Expresión informal'], respuesta: 0 },
            { japones: '微妙なニュアンス', lectura: 'bimyou na nyuansu', opciones: ['Matiz sutil', 'Significado claro', 'Expresión directa', 'Palabra simple'], respuesta: 0 },
            { japones: '慣用句', lectura: 'kanyouku', opciones: ['Modismo', 'Palabra simple', 'Verbo compuesto', 'Adjetivo básico'], respuesta: 0 },
            { japones: '比喩的表現', lectura: 'hiyuteki hyougen', opciones: ['Expresión metafórica', 'Expresión literal', 'Expresión técnica', 'Expresión coloquial'], respuesta: 0 },
            { japones: '故事成語', lectura: 'koji seigo', opciones: ['Proverbio chino', 'Palabra moderna', 'Expresión juvenil', 'Término técnico'], respuesta: 0 },
            { japones: '四字熟語', lectura: 'yoji jukugo', opciones: ['Palabra de cuatro caracteres', 'Palabra de dos caracteres', 'Expresión extranjera', 'Término científico'], respuesta: 0 },
            { japones: '古典的表現', lectura: 'kotenteki hyougen', opciones: ['Expresión clásica', 'Expresión moderna', 'Jerga juvenil', 'Término de internet'], respuesta: 0 },
            { japones: '文語表現', lectura: 'bun-go hyougen', opciones: ['Lenguaje literario', 'Lenguaje hablado', 'Jerga', 'Dialecto'], respuesta: 0 },
            { japones: '抽象的表現', lectura: 'chuushouteki hyougen', opciones: ['Expresión abstracta', 'Expresión concreta', 'Descripción detallada', 'Instrucción clara'], respuesta: 0 },
            { japones: '複合動詞', lectura: 'fukugou doushi', opciones: ['Verbo compuesto', 'Verbo simple', 'Sustantivo', 'Adjetivo'], respuesta: 0 }
        ],
        
        'D2': [
            { japones: '擬態語', lectura: 'gitaigo', opciones: ['Palabra mimética (estado)', 'Onomatopeya (sonido)', 'Sustantivo', 'Verbo'], respuesta: 0 },
            { japones: '擬音語', lectura: 'giongo', opciones: ['Onomatopeya (sonido)', 'Palabra mimética (estado)', 'Adjetivo', 'Adverbio'], respuesta: 0 },
            { japones: '助詞の特殊用法', lectura: 'joshi no tokushu youhou', opciones: ['Uso especial de partículas', 'Uso básico de verbos', 'Conjugación simple', 'Orden de palabras básico'], respuesta: 0 },
            { japones: '尊敬語の複雑形', lectura: 'sonkeigo no fukuzatsukei', opciones: ['Forma compleja de lenguaje honorífico', 'Lenguaje casual', 'Lenguaje simple', 'Dialecto regional'], respuesta: 0 },
            { japones: '謙譲語の特殊形', lectura: 'kenjougo no tokushukei', opciones: ['Forma especial de lenguaje humilde', 'Lenguaje arrogante', 'Lenguaje neutral', 'Jerga juvenil'], respuesta: 0 },
            { japones: '丁寧語の変化形', lectura: 'teineigo no henkakei', opciones: ['Variante de lenguaje formal', 'Lenguaje informal', 'Lenguaje directo', 'Dialecto'], respuesta: 0 },
            { japones: '古語', lectura: 'kogo', opciones: ['Lenguaje antiguo', 'Lenguaje moderno', 'Lenguaje de internet', 'Jerga'], respuesta: 0 },
            { japones: '漢文調表現', lectura: 'kanbunchou hyougen', opciones: ['Estilo de chino clásico', 'Estilo moderno', 'Estilo coloquial', 'Estilo técnico'], respuesta: 0 },
            { japones: '和製漢語', lectura: 'wasei kango', opciones: ['Palabras chinas creadas en Japón', 'Palabras extranjeras', 'Palabras nativas japonesas', 'Neologismos'], respuesta: 0 },
            { japones: '難読漢字', lectura: 'nandoku kanji', opciones: ['Kanji de lectura difícil', 'Kanji básico', 'Hiragana', 'Katakana'], respuesta: 0 }
        ]
    },

    // Sub-contenedor 1.2
    'sub1_2': {
        // MAZOS NORMALES
        1: [
            { japones: 'よかった', lectura: 'yokatta', opciones: ['Fue bueno/estuvo bien/se sintió bien', 'Fue terrible', 'Fue aburrido', 'Fue sorprendente'], respuesta: 0 },
            { japones: '久々', lectura: 'hisabisa', opciones: ['Después de mucho tiempo', 'Todos los días', 'Por primera vez', 'Por última vez'], respuesta: 0 },
            { japones: 'いくら', lectura: 'ikura', opciones: ['Por mucho que', 'Por poco que', 'A pesar de que', 'Debido a que'], respuesta: 0 },
            { japones: '羽', lectura: 'hane', opciones: ['Ala(s) (en expresión idiomática)', 'Pata(s)', 'Mano(s)', 'Cabeza'], respuesta: 0 },
            { japones: '伸ばせた', lectura: 'nobaseta', opciones: ['Pude estirar/pude extender', 'No pude hacerlo', 'Pude contraer', 'Pude doblar'], respuesta: 0 },
            { japones: '来れば', lectura: 'kureba', opciones: ['Si hubieran venido (condicional)', 'Cuando vendrán', 'Aunque vinieron', 'Porque vinieron'], respuesta: 0 },
            { japones: '子たち', lectura: 'kotachi', opciones: ['Niñas', 'Niños', 'Hombres', 'Mujeres'], respuesta: 0 },
            { japones: '見切りつけても', lectura: 'mikiritsukete mo', opciones: ['Aunque corte lazos', 'Aunque me reúna', 'Aunque ayude', 'Aunque espere'], respuesta: 0 },
            { japones: '祝福する', lectura: 'shukufuku suru', opciones: ['Bendecir', 'Maldir', 'Criticar', 'Ignorar'], respuesta: 0 },
            { japones: 'と言っても', lectura: 'to itte mo', opciones: ['Aunque diga', 'Porque digo', 'Si digo', 'Mientras digo'], respuesta: 0 }
        ],
        
        2: [
            { japones: '早々に', lectura: 'sōsō ni', opciones: ['Rápidamente', 'Lentamente', 'Cuidadosamente', 'Accidentalmente'], respuesta: 0 },
            { japones: '受け入れていく', lectura: 'ukeirete iku', opciones: ['Aceptar gradualmente', 'Rechazar por completo', 'Ignorar sistemáticamente', 'Cambiar constantemente'], respuesta: 0 },
            { japones: '今頃', lectura: 'imagoro', opciones: ['Ahora mismo/a estas alturas', 'Hace mucho tiempo', 'Más tarde', 'Temprano'], respuesta: 0 },
            { japones: '卒業旅行', lectura: 'sotsugyō ryokō', opciones: ['Viaje de graduación', 'Viaje de negocios', 'Viaje de placer', 'Viaje familiar'], respuesta: 0 },
            { japones: '踏ん切りついてない', lectura: 'fun kiritsuite nai', opciones: ['No has podido decidirte', 'Ya decidiste', 'Estás reconsiderando', 'Cambiaste de opinión'], respuesta: 0 },
            { japones: 'あったりまえ', lectura: 'attarimae', opciones: ['Obvio/por supuesto', 'Increíble', 'Dudoso', 'Imposible'], respuesta: 0 },
            { japones: 'こうして', lectura: 'kō shite', opciones: ['De esta manera', 'De otra manera', 'Por casualidad', 'Intencionalmente'], respuesta: 0 },
            { japones: '傷', lectura: 'kizu', opciones: ['Herida', 'Cicatriz', 'Cura', 'Medicamento'], respuesta: 0 },
            { japones: '言い出しっぺ', lectura: 'iidashippe', opciones: ['La que lo propuso', 'La que se opuso', 'La que dudó', 'La que ignoró'], respuesta: 0 },
            { japones: 'くせに', lectura: 'kuse ni', opciones: ['A pesar de eso', 'Debido a eso', 'Además de eso', 'Antes de eso'], respuesta: 0 }
        ],
        
        3: [
            { japones: '仕方ない', lectura: 'shikata nai', opciones: ['No se puede evitar', 'Es fácil', 'Es posible', 'Es necesario'], respuesta: 0 },
            { japones: '結構', lectura: 'kekkō', opciones: ['Bastante', 'Poco', 'Nada', 'Demasiado'], respuesta: 0 },
            { japones: '悪い', lectura: 'warui', opciones: ['Malo', 'Bueno', 'Regular', 'Excelente'], respuesta: 0 },
            { japones: '薬', lectura: 'kusuri', opciones: ['Medicina', 'Veneno', 'Alimento', 'Bebida'], respuesta: 0 },
            { japones: '盛ったり', lectura: 'morittari', opciones: ['Ponerle (en la bebida)', 'Quitarle', 'Mezclar', 'Servir'], respuesta: 0 },
            { japones: 'キツイ', lectura: 'kitsui', opciones: ['Duro/difícil', 'Fácil', 'Suave', 'Ligero'], respuesta: 0 },
            { japones: '辛気臭い', lectura: 'shinkusai', opciones: ['Deprimente', 'Alegre', 'Emocionante', 'Relajante'], respuesta: 0 },
            { japones: 'エンジョイ', lectura: 'enjoi', opciones: ['Disfrutar', 'Sufrir', 'Ignorar', 'Temer'], respuesta: 0 }
        ],
        
        4: [
            { japones: '女優', lectura: 'joyū', opciones: ['Actriz', 'Actor', 'Modelo', 'Cantante'], respuesta: 0 },
            { japones: '良ければ', lectura: 'yokereba', opciones: ['Si no le molesta / si está bien', 'Si no le gusta', 'Si le molesta', 'Si está mal'], respuesta: 0 },
            { japones: '混ぜて', lectura: 'mazete', opciones: ['Mezclar / unir', 'Separar', 'Dividir', 'Seleccionar'], respuesta: 0 },
            { japones: 'なれる', lectura: 'nareru', opciones: ['Poder convertirse', 'Perderse', 'Olvidarse', 'Renunciar'], respuesta: 0 },
            { japones: '寂しかった', lectura: 'sabishikatta', opciones: ['Estábamos solas', 'Estábamos felices', 'Estábamos ocupadas', 'Estábamos enojadas'], respuesta: 0 },
            { japones: '歓迎', lectura: 'kangei', opciones: ['Bienvenidos', 'Despedida', 'Prohibición', 'Advertencia'], respuesta: 0 },
            { japones: '言う通り', lectura: 'iu tōri', opciones: ['Tal como dice', 'Contrario a lo que dice', 'Más de lo que dice', 'Menos de lo que dice'], respuesta: 0 },
            { japones: '済む', lectura: 'sumu', opciones: ['Terminar / salir con la suya', 'Comenzar', 'Continuar', 'Cancelar'], respuesta: 0 },
            { japones: '塞ぐ', lectura: 'fusagu', opciones: ['Tapar / cerrar', 'Abrir', 'Limpiar', 'Romper'], respuesta: 0 },
            { japones: '喉奥', lectura: 'nodo oku', opciones: ['Fondo de la garganta', 'Parte delantera', 'Lateral', 'Exterior'], respuesta: 0 }
        ],
        
        5: [
            { japones: '容赦', lectura: 'yōsha', opciones: ['Piedad / misericordia', 'Crueldad', 'Indiferencia', 'Justicia'], respuesta: 0 },
            { japones: 'つっこんで', lectura: 'tsukkonde', opciones: ['Metiendo / empujando adentro', 'Sacando', 'Rozando', 'Observando'], respuesta: 0 },
            { japones: '響いて', lectura: 'hibiite', opciones: ['Resonando / vibrando', 'Silenciando', 'Deteniendo', 'Atenuando'], respuesta: 0 },
            { japones: '苦しい', lectura: 'kurushii', opciones: ['Doloroso / agobiante', 'Placentero', 'Neutro', 'Emocionante'], respuesta: 0 },
            { japones: 'きかない', lectura: 'kikanai', opciones: ['No escucha / no obedece', 'Escucha bien', 'Responde rápido', 'Siempre acepta'], respuesta: 0 },
            { japones: '飲み込め', lectura: 'nomikome', opciones: ['Trágatelo / ingírelo', 'Escúpelo', 'Guárdalo', 'Compartelo'], respuesta: 0 },
            { japones: 'お詫び', lectura: 'owabi', opciones: ['Disculpa / compensación', 'Agradecimiento', 'Demanda', 'Elogio'], respuesta: 0 },
            { japones: '拒絶', lectura: 'kyūzetsu', opciones: ['Rechazo / rechazar', 'Aceptación', 'Consideración', 'Negociación'], respuesta: 0 },
            { japones: '奴', lectura: 'yatsu', opciones: ['Tipo / cabrón (despectivo)', 'Amigo', 'Jefe', 'Desconocido'], respuesta: 0 },
            { japones: '感じて', lectura: 'kanjite', opciones: ['Sintiendo / excitándome', 'Ignorando', 'Negando', 'Olvidando'], respuesta: 0 }
        ],
        
        6: [
            { japones: 'とろけた', lectura: 'toroketa', opciones: ['Derretida / embobada', 'Tensa', 'Enojada', 'Indiferente'], respuesta: 0 },
            { japones: 'しちゃって', lectura: 'shichatte', opciones: ['Terminé haciendo (arrepentimiento casual)', 'Planeé hacer', 'Evité hacer', 'Olvidé hacer'], respuesta: 0 },
            { japones: '軽イキ', lectura: 'karu iki', opciones: ['Orgasmo ligero / corrida suave', 'Orgasmo intenso', 'Sin orgasmo', 'Dolor'], respuesta: 0 },
            { japones: '触って', lectura: 'sawatte', opciones: ['Tocando', 'Evitando', 'Mirando', 'Escuchando'], respuesta: 0 },
            { japones: '重っ', lectura: 'omo', opciones: ['Pesado (abreviado, énfasis)', 'Ligero', 'Suave', 'Rápido'], respuesta: 0 },
            { japones: 'ふに', lectura: 'funi', opciones: ['Blandito', 'Duro', 'Caliente', 'Frío'], respuesta: 0 },
            { japones: 'すべすべ', lectura: 'subesube', opciones: ['Suave / sedoso', 'Áspero', 'Rugoso', 'Húmedo'], respuesta: 0 },
            { japones: 'コリコリ', lectura: 'korikori', opciones: ['Duro / crujiente (textura)', 'Blando', 'Elástico', 'Gelatinoso'], respuesta: 0 },
            { japones: '乳首', lectura: 'chikubi', opciones: ['Pezón', 'Pecho', 'Estómago', 'Espalda'], respuesta: 0 },
            { japones: 'いじめ', lectura: 'ijime', opciones: ['Jugar / torturar / molestar', 'Cuidar', 'Proteger', 'Ignorar'], respuesta: 0 }
        ],
        
        7: [
            { japones: '硬く', lectura: 'kataku', opciones: ['Duro', 'Blando', 'Flexible', 'Frágil'], respuesta: 0 },
            { japones: '洪水', lectura: 'kōzui', opciones: ['Inundación / flood', 'Sequía', 'Lluvia ligera', 'Viento'], respuesta: 0 },
            { japones: '頂こう', lectura: 'itadakō', opciones: ['Recibir / probar (humilde)', 'Rechazar', 'Ofrecer', 'Compartir'], respuesta: 0 },
            { japones: '許さ', lectura: 'yurusa', opciones: ['Perdonar', 'Castigar', 'Ignorar', 'Recordar'], respuesta: 0 },
            { japones: '放し', lectura: 'hanashi', opciones: ['Soltar / dejar', 'Agarar', 'Esconder', 'Mover'], respuesta: 0 },
            { japones: '強気', lectura: 'tsuyoki', opciones: ['Altiva / valiente', 'Tímida', 'Indecisa', 'Sumisa'], respuesta: 0 },
            { japones: '拒否', lectura: 'kyohi', opciones: ['Negar / rechazar', 'Aceptar', 'Considerar', 'Posponer'], respuesta: 0 },
            { japones: '割に', lectura: 'wari ni', opciones: ['A pesar de / para', 'Debido a', 'Además de', 'En vez de'], respuesta: 0 },
            { japones: '締め付けて', lectura: 'shimetsukete', opciones: ['Apretando / estrangulando', 'Soltando', 'Acariciando', 'Golpeando'], respuesta: 0 },
            { japones: 'きゅうきゅうきゅう', lectura: 'kyū kyū kyū', opciones: ['Onomatopeya de apretar fuerte', 'Sonido suave', 'Silencio', 'Grito'], respuesta: 0 }
        ],
        
        8: [
            { japones: '融け', lectura: 'toke', opciones: ['Derretir', 'Congelar', 'Evaporar', 'Solidificar'], respuesta: 0 },
            { japones: '徹底的', lectura: 'tetteiteki', opciones: ['Exhaustivamente / a fondo', 'Superficialmente', 'Parcialmente', 'Ocasionalmente'], respuesta: 0 },
            { japones: '開拓', lectura: 'kaitaku', opciones: ['Desarrollar / abrir terreno', 'Abandonar', 'Destruir', 'Conservar'], respuesta: 0 },
            { japones: '犯された', lectura: 'okasareta', opciones: ['Fui violada / forzada', 'Consentí', 'Resistí', 'Ignoré'], respuesta: 0 },
            { japones: '野郎', lectura: 'yarō', opciones: ['Cabrón / tipo', 'Caballero', 'Amigo', 'Extraño'], respuesta: 0 },
            { japones: 'ひだひだ', lectura: 'hida hida', opciones: ['Pliegues / rugosidades', 'Superficie lisa', 'Cavidad', 'Protuberancia'], respuesta: 0 },
            { japones: '吸いついて', lectura: 'kuitsuite', opciones: ['Chupando / succionando', 'Soplando', 'Mordiendo', 'Lamiendo'], respuesta: 0 },
            { japones: '抜き', lectura: 'nuki', opciones: ['Sacar / retirar', 'Insertar', 'Mantener', 'Rotar'], respuesta: 0 },
            { japones: 'なさい', lectura: 'nasai', opciones: ['Haz (imperativo formal)', 'No hagas', 'Quizás hagas', 'Deja de hacer'], respuesta: 0 },
            { japones: '弱点', lectura: 'jakuten', opciones: ['Punto débil', 'Fortaleza', 'Neutralidad', 'Ventaja'], respuesta: 0 }
        ],
        
        9: [
            { japones: '感度', lectura: 'kando', opciones: ['Sensibilidad', 'Insensibilidad', 'Resistencia', 'Dureza'], respuesta: 0 },
            { japones: '良すぎ', lectura: 'yosugi', opciones: ['Demasiado buena', 'Muy mala', 'Normal', 'Insuficiente'], respuesta: 0 },
            { japones: '表情', lectura: 'hyōjō', opciones: ['Expresión / cara', 'Voz', 'Postura', 'Movimiento'], respuesta: 0 },
            { japones: '圧倒', lectura: 'attō', opciones: ['Abrumada / dominada', 'Liberada', 'Indiferente', 'Resistente'], respuesta: 0 },
            { japones: '腰', lectura: 'koshi', opciones: ['Caderas', 'Hombros', 'Rodillas', 'Codos'], respuesta: 0 },
            { japones: 'つぷれっ', lectura: 'tsupure', opciones: ['Onomatopeya de sonido húmedo', 'Sonido seco', 'Silencio', 'Crujido'], respuesta: 0 },
            { japones: '犯し', lectura: 'okashi', opciones: ['Violar / forzar', 'Consentir', 'Respetar', 'Ignorar'], respuesta: 0 },
            { japones: '尽くして', lectura: 'tsukushite', opciones: ['Hasta el final / completamente', 'A medias', 'Superficialmente', 'Nunca'], respuesta: 0 },
            { japones: '喘が', lectura: 'aega', opciones: ['Jadear / gemir alto', 'Respirar tranquilo', 'Contener la respiración', 'Silbar'], respuesta: 0 },
            { japones: 'もし', lectura: 'moshi', opciones: ['Si', 'Cuando', 'Aunque', 'Porque'], respuesta: 0 }
        ],
        
        10: [
            { japones: 'イったら', lectura: 'ittara', opciones: ['Si te corres', 'Si te detienes', 'Si comienzas', 'Si esperas'], respuesta: 0 },
            { japones: '安心して', lectura: 'anshin shite', opciones: ['Tranquilízate', 'Preocúpate', 'Alerta', 'Escapa'], respuesta: 0 },
            { japones: 'なければ', lectura: 'nakereba', opciones: ['Si no', 'Si sí', 'Aunque', 'Porque'], respuesta: 0 },
            { japones: '抜く', lectura: 'nuku', opciones: ['Sacar', 'Meter', 'Girar', 'Presionar'], respuesta: 0 },
            { japones: 'それとも', lectura: 'soretomo', opciones: ['O / ¿o es que...?', 'Y también', 'Pero', 'Por lo tanto'], respuesta: 0 },
            { japones: '怖気づい', lectura: 'okinizui', opciones: ['Acobardarse / asustarse', 'Envalentonarse', 'Relajarse', 'Sorprenderse'], respuesta: 0 },
            { japones: 'だった', lectura: 'datta', opciones: ['Eras', 'Eres', 'Serás', 'Fui'], respuesta: 0 },
            { japones: 'のに', lectura: 'noni', opciones: ['Aunque / y sin embargo', 'Porque', 'Si', 'Mientras'], respuesta: 0 },
            { japones: 'やってみなさいよ', lectura: 'yatte minasai yo', opciones: ['Inténtalo / hazlo', 'No lo hagas', 'Espera', 'Pregunta'], respuesta: 0 },
            { japones: '燃えて', lectura: 'moete', opciones: ['Encendiéndose / ardiendo', 'Apagándose', 'Enfriándose', 'Humededeciéndose'], respuesta: 0 }
        ],
        
        11: [
            { japones: 'せいぜい', lectura: 'seizei', opciones: ['Todo lo que puedas / al máximo', 'Mínimamente', 'Normalmente', 'Excesivamente'], respuesta: 0 },
            { japones: '無様', lectura: 'busamu', opciones: ['Patético / vergonzoso', 'Honroso', 'Normal', 'Desconocido'], respuesta: 0 },
            { japones: '振って', lectura: 'futte', opciones: ['Moviendo / embistiendo', 'Deteniendo', 'Suavizando', 'Dirigiendo'], respuesta: 0 },
            { japones: 'ビクビク', lectura: 'bikubiku', opciones: ['Temblar / convulsionar', 'Estar quieto', 'Relajarse', 'Saltar'], respuesta: 0 },
            { japones: '痙攣', lectura: 'keikan', opciones: ['Espasmo / convulsión', 'Relajación', 'Calma', 'Rigidez'], respuesta: 0 },
            { japones: 'させて', lectura: 'sasete', opciones: ['Haciendo que...', 'Impidiendo que...', 'Permitiendo que...', 'Observando que...'], respuesta: 0 },
            { japones: 'やかましい', lectura: 'yakamashii', opciones: ['Ruidoso / escandaloso', 'Silencioso', 'Tranquilo', 'Monótono'], respuesta: 0 },
            { japones: '喘ぎ声', lectura: 'aegi goe', opciones: ['Voz de jadeos / gemidos', 'Voz tranquila', 'Gritos', 'Silencio'], respuesta: 0 },
            { japones: '出ちゃって', lectura: 'dechatte', opciones: ['Terminando saliendo (involuntario)', 'Conteniendo', 'Evitando', 'Retrasando'], respuesta: 0 },
            { japones: '気に入って', lectura: 'ki ni itte', opciones: ['Gustar / encantar', 'Disgustar', 'Ignorar', 'Criticar'], respuesta: 0 }
        ],
        
        12: [
            { japones: '気持ちよくなんか', lectura: 'kimochi yoku nanka', opciones: ['Placentero / cómodo', 'Desagradable', 'Doloroso', 'Indiferente'], respuesta: 0 },
            { japones: '説得力', lectura: 'settokuryoku', opciones: ['Credibilidad / poder de convicción', 'Incredulidad', 'Debilidad', 'Indiferencia'], respuesta: 0 },
            { japones: 'しっかり', lectura: 'shikkari', opciones: ['Bien / a fondo / seguro', 'Débilmente', 'Superficialmente', 'Inseguramente'], respuesta: 0 },
            { japones: '孕んで', lectura: 'harande', opciones: ['Quedar embarazada', 'Evitar embarazo', 'Abortar', 'Dar a luz'], respuesta: 0 },
            { japones: '一発', lectura: 'ippatsu', opciones: ['Una vez / una corrida', 'Muchas veces', 'Nunca', 'Rápidamente'], respuesta: 0 },
            { japones: 'とりあえず', lectura: 'toriaezu', opciones: ['Por ahora / de momento', 'Definitivamente', 'Nunca', 'Siempre'], respuesta: 0 },
            { japones: 'びちびち', lectura: 'bichi bichi', opciones: ['Onomatopeya de salpicar / pulsar', 'Silencio', 'Sonido seco', 'Crujido'], respuesta: 0 },
            { japones: '締め付け', lectura: 'shime tsuke', opciones: ['Apretón / estrangulamiento', 'Soltura', 'Liberación', 'Expansión'], respuesta: 0 },
            { japones: 'ゆるして', lectura: 'yurushite', opciones: ['Perdona / déjame', 'Castiga', 'Ignora', 'Detén'], respuesta: 0 },
            { japones: 'バッキバキ', lectura: 'bakki baki', opciones: ['Onomatopeya de erección súper dura', 'Flácido', 'Suave', 'Flexible'], respuesta: 0 }
        ],
        
        13: [
            { japones: 'さっきから', lectura: 'sakki kara', opciones: ['Desde hace rato', 'Recién ahora', 'Más tarde', 'Nunca'], respuesta: 0 },
            { japones: '部屋', lectura: 'heya', opciones: ['Habitación', 'Cocina', 'Baño', 'Jardín'], respuesta: 0 },
            { japones: '助けて', lectura: 'tasukete', opciones: ['¡Ayúdame!', '¡Déjame!', '¡Ignórame!', '¡Detente!'], respuesta: 0 }
        ],
        
        14: [
            { japones: '抱いて', lectura: 'daite', opciones: ['Abrazar / Follar', 'Empujar', 'Ignorar', 'Observar'], respuesta: 0 },
            { japones: '比べ物', lectura: 'kurabemono', opciones: ['Comparación', 'Superioridad', 'Inferioridad', 'Igualdad'], respuesta: 0 },
            { japones: 'ならん', lectura: 'naran', opciones: ['No hay / No se compara', 'Sí hay', 'Tal vez', 'Definitivamente'], respuesta: 0 },
            { japones: 'くらい', lectura: 'kurai', opciones: ['Tanto / Al grado de', 'Poco', 'Nada', 'Demasiado'], respuesta: 0 },
            { japones: '名器', lectura: 'meiki', opciones: ['Vagina legendaria / Perfecta', 'Normal', 'Pequeña', 'Cerrada'], respuesta: 0 },
            { japones: '堕とされ', lectura: 'otosare', opciones: ['Ser corrompida / Caer (pasivo)', 'Resistir', 'Escapar', 'Ignorar'], respuesta: 0 },
            { japones: 'ちゃった', lectura: 'chatta', opciones: ['Terminé (involuntario)', 'Planeé', 'Evité', 'Olvidé'], respuesta: 0 },
            { japones: '潰して', lectura: 'tsubushite', opciones: ['Destrozar / Aplastar', 'Construir', 'Reparar', 'Proteger'], respuesta: 0 },
            { japones: '頭飛んじゃうんだぁ', lectura: 'atama tonjan daa', opciones: ['La cabeza va a volar', 'Estoy tranquilo', 'No entiendo', 'Me duele'], respuesta: 0 },
            { japones: 'いやな', lectura: 'iya na', opciones: ['Desagradable / Malas', 'Agradable', 'Neutral', 'Excelente'], respuesta: 0 }
        ],
        
        15: [
            { japones: 'さっきの奴のより', lectura: 'sakki no yatsu no yori', opciones: ['Más que el de hace un rato', 'Menos que el anterior', 'Igual que siempre', 'Totalmente diferente'], respuesta: 0 },
            { japones: '一回り', lectura: 'hitomawari', opciones: ['Un tamaño / Un círculo', 'La mitad', 'El doble', 'Minúsculo'], respuesta: 0 },
            { japones: '大きい', lectura: 'ōkii', opciones: ['Grande', 'Pequeño', 'Mediano', 'Enorme'], respuesta: 0 },
            { japones: '素直', lectura: 'sunao', opciones: ['Honesta / Sincera', 'Mentirosa', 'Tímida', 'Agresiva'], respuesta: 0 },
            { japones: '遠慮', lectura: 'enryo', opciones: ['Reserva / Cortesía', 'Atrevimiento', 'Indiferencia', 'Insistencia'], respuesta: 0 },
            { japones: '尋常', lectura: 'jinjō', opciones: ['Normal / Ordinario', 'Extraordinario', 'Raro', 'Típico'], respuesta: 0 },
            { japones: '臭い', lectura: 'kusai', opciones: ['Olor / Huele a', 'Inodoro', 'Fragante', 'Dulce'], respuesta: 0 },
            { japones: 'オス', lectura: 'osu', opciones: ['Macho / Varón (animal)', 'Hembra', 'Joven', 'Adulto'], respuesta: 0 },
            { japones: '考え', lectura: 'kangae', opciones: ['Pensar', 'Olvidar', 'Ignorar', 'Recordar'], respuesta: 0 },
            { japones: '堕ち', lectura: 'ochi', opciones: ['Caída / Corrupción', 'Elevación', 'Pureza', 'Inocencia'], respuesta: 0 }
        ],
        
        16: [
            { japones: '偉い', lectura: 'erai', opciones: ['Grande / Obediente / Buena', 'Mala', 'Pequena', 'Desobediente'], respuesta: 0 },
            { japones: 'ご褒美上げないと', lectura: 'gohōbi agenai to', opciones: ['Si no te doy una recompensa', 'Te castigaré', 'Te ignoraré', 'Te felicitaré'], respuesta: 0 },
            { japones: '花嫁', lectura: 'hanayome', opciones: ['Novia / Esposa', 'Novio', 'Amante', 'Amiga'], respuesta: 0 },
            { japones: '穴', lectura: 'ana', opciones: ['Agujero', 'Montaña', 'Puerta', 'Ventana'], respuesta: 0 },
            { japones: '使わせてもらお', lectura: 'tsukawasete moraō', opciones: ['Déjame usarlo', 'No lo uses', 'Guárdalo', 'Destrúyelo'], respuesta: 0 },
            { japones: '抜群', lectura: 'batsugun', opciones: ['Excelente / Perfecto', 'Pésimo', 'Normal', 'Mediocre'], respuesta: 0 },
            { japones: '女優', lectura: 'joyū', opciones: ['Actriz', 'Actor', 'Modelo', 'Cantante'], respuesta: 0 },
            { japones: 'こりゃ', lectura: 'korya', opciones: ['Esto es (slang)', 'Eso es', 'Aquello es', 'No es'], respuesta: 0 },
            { japones: 'つっても', lectura: 'tsutte mo', opciones: ['Aunque lo diga / Incluso diciendo', 'Porque lo digo', 'Si lo digo', 'Mientras lo digo'], respuesta: 0 },
            { japones: '喘げ', lectura: 'aegue', opciones: ['¡Gime! / ¡Jadea! (imperativo)', '¡Silencio!', '¡Habla!', '¡Canta!'], respuesta: 0 }
        ],
        
        17: [
            { japones: '淫乱', lectura: 'inran', opciones: ['Pervertida / Lasciva', 'Inocente', 'Modesta', 'Seria'], respuesta: 0 },
            { japones: '遊ばせてもーらおっと', lectura: 'asobasete mōraotto', opciones: ['Déjame jugar contigo', 'No juegues', 'Vete', 'Espera'], respuesta: 0 },
            { japones: '酷え', lectura: 'hidoe', opciones: ['Horrible / Brutal (slang)', 'Suave', 'Normal', 'Agradable'], respuesta: 0 },
            { japones: '最奥', lectura: 'saio', opciones: ['Lo más profundo', 'La superficie', 'El exterior', 'El borde'], respuesta: 0 },
            { japones: '屁', lectura: 'he', opciones: ['Pedo', 'Suspiro', 'Grito', 'Risa'], respuesta: 0 },
            { japones: '噴き出して', lectura: 'fukidashite', opciones: ['Salpicando / Erupcionando', 'Conteniendo', 'Absorbiendo', 'Secando'], respuesta: 0 },
            { japones: '出して', lectura: 'dashite', opciones: ['Sacar / Emitir', 'Guardar', 'Esconder', 'Tapar'], respuesta: 0 },
            { japones: '音', lectura: 'oto', opciones: ['Sonido', 'Silencio', 'Luz', 'Olor'], respuesta: 0 },
            { japones: 'お掃除', lectura: 'o-sōji', opciones: ['Limpieza (fellatio post-sexo)', 'Suciedad', 'Desorden', 'Construcción'], respuesta: 0 },
            { japones: '量', lectura: 'ryō', opciones: ['Cantidad / Volumen', 'Calidad', 'Peso', 'Tamaño'], respuesta: 0 }
        ],
        
        18: [
            { japones: 'えっぐ', lectura: 'eggu', opciones: ['Loca / Exagerada (slang)', 'Normal', 'Tranquila', 'Aburrida'], respuesta: 0 },
            { japones: 'おめーら', lectura: 'omēra', opciones: ['Vosotros (vulgar)', 'Ustedes (formal)', 'Ellos', 'Nosotros'], respuesta: 0 },
            { japones: 'モノ', lectura: 'mono', opciones: ['Cosa / Nivel / Calidad', 'Persona', 'Lugar', 'Tiempo'], respuesta: 0 },
            { japones: 'ちげぇ', lectura: 'chigē', opciones: ['Diferente (slang)', 'Igual', 'Similar', 'Opuesto'], respuesta: 0 },
            { japones: 'ぶっかけ', lectura: 'bukkake', opciones: ['Bukkake / Eyacular sobre', 'Absorber', 'Limpiar', 'Evitar'], respuesta: 0 },
            { japones: '過ぎて', lectura: 'sugite', opciones: ['Demasiado', 'Poco', 'Justo', 'Nada'], respuesta: 0 },
            { japones: '精子', lectura: 'seishi', opciones: ['Semen', 'Orina', 'Sudor', 'Sangre'], respuesta: 0 },
            { japones: 'フォンデュ', lectura: 'fondeyu', opciones: ['Fondue', 'Sopa', 'Ensalada', 'Postre'], respuesta: 0 },
            { japones: 'みたい', lectura: 'mitai', opciones: ['Como / Parece', 'Diferente', 'Igual', 'Opuesto'], respuesta: 0 },
            { japones: '相変わらず', lectura: 'aikawarazu', opciones: ['Como siempre', 'Diferente', 'Nuevo', 'Cambiado'], respuesta: 0 }
        ],
        
        19: [
            { japones: '無尽蔵', lectura: 'mujinzō', opciones: ['Inagotable / Infinito', 'Limitado', 'Escaso', 'Terminado'], respuesta: 0 },
            { japones: '何発', lectura: 'nan-patsu', opciones: ['Cuántas veces', 'Una vez', 'Muchas veces', 'Nunca'], respuesta: 0 },
            { japones: 'シバク', lectura: 'shibaku', opciones: ['Dar una paliza / Golpear', 'Acariciar', 'Ignorar', 'Proteger'], respuesta: 0 },
            { japones: 'ごぽ', lectura: 'gopo', opciones: ['(onomatopeya de fluido espeso saliendo o burbuja)', 'Silencio', 'Crujido', 'Chasquido'], respuesta: 0 },
            { japones: '幸せ', lectura: 'shiawase', opciones: ['Felices', 'Tristes', 'Enojadas', 'Asustadas'], respuesta: 0 },
            { japones: '私たち', lectura: 'watashitachi', opciones: ['Nosotras', 'Ellas', 'Ustedes', 'Vosotras'], respuesta: 0 },
            { japones: 'お嫁さん', lectura: 'oyomesan', opciones: ['Novia / Esposa', 'Novio', 'Amante', 'Hermana'], respuesta: 0 },
            { japones: 'チンボ様がいて', lectura: 'chinbo-sama ga ite', opciones: ['Hay un pene honorable', 'No hay nada', 'Hay una vagina', 'Hay un juguete'], respuesta: 0 },
            { japones: '子宮', lectura: 'shikyū', opciones: ['Útero', 'Ovario', 'Vagina', 'Pene'], respuesta: 0 },
            { japones: 'トクントクン', lectura: 'tokun tokun', opciones: ['(onomatopeya de latidos fuertes o palpitaciones)', 'Silencio', 'Sonido suave', 'Grito'], respuesta: 0 }
        ],
        
        20: [
            { japones: '来る', lectura: 'kuru', opciones: ['Venir', 'Ir', 'Quedarse', 'Esperar'], respuesta: 0 },
            { japones: 'ズボズボ', lectura: 'zubo zubo', opciones: ['(onomatopeya de penetración profunda y repetida)', 'Suavemente', 'Rápidamente', 'Lentamente'], respuesta: 0 },
            { japones: 'おねだり', lectura: 'onedari', opciones: ['Súplica / Pedir (sexualmente)', 'Rechazar', 'Ofrecer', 'Ignorar'], respuesta: 0 },
            { japones: '雄々しい', lectura: 'ooshii', opciones: ['Viril / Majestuoso / Macho', 'Femenino', 'Débil', 'Tímido'], respuesta: 0 },
            { japones: '弱々', lectura: 'yowayowa', opciones: ['Débil / Frágil', 'Fuerte', 'Resistente', 'Sólido'], respuesta: 0 },
            { japones: 'ずぼずぼ', lectura: 'zubo zubo', opciones: ['(onomatopeya de penetración profunda y repetida)', 'Superficialmente', 'Secamente', 'Suavemente'], respuesta: 0 },
            { japones: 'ください', lectura: 'kudasai', opciones: ['Por favor (formal)', 'No', 'Gracias', 'Adiós'], respuesta: 0 },
            { japones: 'ザー汁', lectura: 'zā jiru', opciones: ['Semen espeso (slang)', 'Agua', 'Jugo', 'Sangre'], respuesta: 0 },
            { japones: 'ぶち込んで', lectura: 'buchikonde', opciones: ['Meter a la fuerza / Inyectar', 'Sacar', 'Tocar', 'Lamer'], respuesta: 0 },
            { japones: '孕ませて', lectura: 'haramasete', opciones: ['Hacer embarazar', 'Evitar embarazo', 'Abortar', 'Dar a luz'], respuesta: 0 }
        ],
        
        21: [
            { japones: 'みちみち', lectura: 'michi michi', opciones: ['(onomatopeya de estirarse, llenarse al límite, rebosar)', 'Vacío', 'Medio lleno', 'Cerrado'], respuesta: 0 },
            { japones: '広げ', lectura: 'hiroge', opciones: ['Abrir / Ensanchar', 'Cerrar', 'Reducir', 'Tapar'], respuesta: 0 },
            { japones: '赤ちゃん', lectura: 'akachan', opciones: ['Bebé', 'Adulto', 'Anciano', 'Adolescente'], respuesta: 0 },
            { japones: '部屋', lectura: 'heya', opciones: ['Habitación (útero)', 'Cocina', 'Baño', 'Jardín'], respuesta: 0 },
            { japones: '叩き', lectura: 'tataki', opciones: ['Golpeando / Martilleando', 'Acariciando', 'Limpiando', 'Construyendo'], respuesta: 0 },
            { japones: '壊され', lectura: 'kowasare', opciones: ['Ser destruido (pasivo)', 'Construido', 'Reparado', 'Protegido'], respuesta: 0 },
            { japones: 'はげし', lectura: 'hageshi', opciones: ['Intenso / Violento', 'Suave', 'Lento', 'Tranquilo'], respuesta: 0 },
            { japones: '旦那様', lectura: 'danna-sama', opciones: ['Esposo / Señor (honorífico)', 'Amante', 'Extraño', 'Jefe'], respuesta: 0 },
            { japones: '頭', lectura: 'atama', opciones: ['Cabeza / Mente', 'Corazón', 'Estómago', 'Mano'], respuesta: 0 },
            { japones: 'とぶ', lectura: 'tobu', opciones: ['Volar', 'Caer', 'Gatear', 'Nadar'], respuesta: 0 }
        ],
        
        22: [
            { japones: '押し返さ', lectura: 'oshikaesa', opciones: ['Empujado de vuelta', 'Empujado hacia adelante', 'Detenido', 'Ignorado'], respuesta: 0 },
            { japones: 'れて', lectura: 'rete', opciones: ['Siendo (pasivo)', 'Haciendo', 'Viendo', 'Oyendo'], respuesta: 0 },
            { japones: '姉妹', lectura: 'shimai', opciones: ['Hermanas', 'Hermanos', 'Primas', 'Amigas'], respuesta: 0 },
            { japones: '揃って', lectura: 'sorotte', opciones: ['Juntas', 'Separadas', 'Solas', 'Alternando'], respuesta: 0 },
            { japones: '確実', lectura: 'kakujitsu', opciones: ['Sin falta / Seguramente', 'Quizás', 'Nunca', 'Raramente'], respuesta: 0 },
            { japones: '孕ませ', lectura: 'haramase', opciones: ['Hacer embarazar', 'Evitar embarazo', 'Abortar', 'Dar a luz'], respuesta: 0 },
            { japones: '一番', lectura: 'ichiban', opciones: ['Lo más / El número uno', 'El peor', 'El último', 'El promedio'], respuesta: 0 },
            { japones: '休ませなさいよ', lectura: 'yasumasenasai yo', opciones: ['Déjame descansar', 'Sigue trabajando', 'Apúrate', 'Espera'], respuesta: 0 },
            { japones: 'ぶちまけろ', lectura: 'buchimakero', opciones: ['Derrama / Inyecta a la fuerza (imperativo)', 'Contén', 'Limpia', 'Guarda'], respuesta: 0 },
            { japones: 'オナホ', lectura: 'onaho', opciones: ['Onahole (juguete sexual)', 'Vibrador', 'Condón', 'Lubricante'], respuesta: 0 }
        ],
        
        23: [
            { japones: '姉妹', lectura: 'shimai', opciones: ['Hermanas', 'Hermanos', 'Primas', 'Amigas'], respuesta: 0 },
            { japones: '中出し', lectura: 'nakadashi', opciones: ['Creampie', 'Coitus interruptus', 'Sexo anal', 'Masturbación'], respuesta: 0 },
            { japones: 'しすぎて', lectura: 'shisugite', opciones: ['Demasiado / En exceso', 'Poco', 'Justo', 'Nada'], respuesta: 0 },
            { japones: '子', lectura: 'ko', opciones: ['Hijo / Bebé', 'Padre', 'Madre', 'Abuelo'], respuesta: 0 },
            { japones: '汗', lectura: 'ase', opciones: ['Sudor', 'Sangre', 'Lágrimas', 'Saliva'], respuesta: 0 },
            { japones: '噴きだして', lectura: 'fukidashite', opciones: ['Disparando / Saliendo a chorros', 'Conteniendo', 'Absorbiendo', 'Secando'], respuesta: 0 },
            { japones: '風呂', lectura: 'furo', opciones: ['Baño', 'Cocina', 'Dormitorio', 'Sala'], respuesta: 0 },
            { japones: '入ったら', lectura: 'haittara', opciones: ['Cuando entremos', 'Cuando salgamos', 'Si no entramos', 'Aunque entremos'], respuesta: 0 },
            { japones: '輪姦', lectura: 'rinkan', opciones: ['Violación en grupo / Gangbang', 'Sexo consensuado', 'Masturbación', 'Abstinencia'], respuesta: 0 },
            { japones: '覚悟', lectura: 'kakugo', opciones: ['Prepárense / Resígnense', 'Relájense', 'Huyan', 'Ignoren'], respuesta: 0 }
        ],
        
        // ====================
        // MAZOS DIFÍCILES ESPECIALES - Subcontenedor 1.2
        // ====================
        
        'D1': [
            { japones: '婉曲表現', lectura: 'enkyoku hyougen', opciones: ['Expresión indirecta', 'Expresión directa', 'Expresión clara', 'Orden directa'], respuesta: 0 },
            { japones: '二重否定', lectura: 'nijuu hitei', opciones: ['Doble negación', 'Afirmación simple', 'Negación simple', 'Pregunta retórica'], respuesta: 0 },
            { japones: '倒置法', lectura: 'touchi hou', opciones: ['Inversión del orden de palabras', 'Orden normal', 'Repetición', 'Elipsis'], respuesta: 0 },
            { japones: '省略表現', lectura: 'shouryaku hyougen', opciones: ['Expresión abreviada', 'Expresión completa', 'Expresión formal', 'Expresión detallada'], respuesta: 0 },
            { japones: '間接話法', lectura: 'kansetsu wahou', opciones: ['Estilo indirecto', 'Estilo directo', 'Estilo formal', 'Estilo coloquial'], respuesta: 0 },
            { japones: '体言止め', lectura: 'taigandome', opciones: ['Terminación con sustantivo', 'Terminación con verbo', 'Terminación con partícula', 'Frase incompleta'], respuesta: 0 },
            { japones: '枕詞', lectura: 'makura kotoba', opciones: ['Palabra prefijada (en poesía)', 'Sustantivo simple', 'Verbo auxiliar', 'Partícula final'], respuesta: 0 },
            { japones: '掛詞', lectura: 'kake kotoba', opciones: ['Juego de palabras/palabra con doble sentido', 'Palabra simple', 'Sinónimo', 'Antónimo'], respuesta: 0 },
            { japones: '縁語', lectura: 'engo', opciones: ['Palabras relacionadas temáticamente', 'Palabras sin relación', 'Sinónimos', 'Antónimos'], respuesta: 0 },
            { japones: '序詞', lectura: 'jo kotoba', opciones: ['Prefacio poético', 'Conclusión', 'Cuerpo principal', 'Título'], respuesta: 0 }
        ],
        
        'D2': [
            { japones: '和歌の修辞法', lectura: 'waka no shuujihou', opciones: ['Recursos retóricos del waka', 'Lenguaje cotidiano', 'Lenguaje técnico', 'Jerga moderna'], respuesta: 0 },
            { japones: '俳句の季語', lectura: 'haiku no kigo', opciones: ['Palabra de estación en haiku', 'Palabra neutral', 'Palabra técnica', 'Neologismo'], respuesta: 0 },
            { japones: '連歌', lectura: 'renga', opciones: ['Poema encadenado', 'Haiku individual', 'Tanka individual', 'Poema moderno'], respuesta: 0 },
            { japones: '歌枕', lectura: 'utamakura', opciones: ['Lugar famoso en poesía', 'Lugar común', 'Lugar histórico', 'Lugar ficticio'], respuesta: 0 },
            { japones: '本歌取り', lectura: 'honkadori', opciones: ['Alusión a un poema clásico', 'Creación original', 'Traducción', 'Parodia'], respuesta: 0 },
            { japones: '古今伝授', lectura: 'kokindenju', opciones: ['Transmisión secreta de poesía', 'Enseñanza pública', 'Autoaprendizaje', 'Traducción'], respuesta: 0 },
            { japones: '幽玄', lectura: 'yuugen', opciones: ['Profundidad misteriosa (estética)', 'Simplicidad', 'Claridad', 'Directo'], respuesta: 0 },
            { japones: 'わび', lectura: 'wabi', opciones: ['Belleza en la simplicidad', 'Lujo', 'Ostentación', 'Modernidad'], respuesta: 0 },
            { japones: 'さび', lectura: 'sabi', opciones: ['Belleza del desgaste/pasado', 'Novedad', 'Brillo', 'Colorido'], respuesta: 0 },
            { japones: '不易流行', lectura: 'fueki ryuukou', opciones: ['Lo eterno y lo contemporáneo (estética)', 'Tradicionalismo', 'Modernismo', 'Eclecticismo'], respuesta: 0 }
        ]
    },
    
    /// Sub-contenedor 1.3
'sub1_3': {
    // MAZOS NORMALES
    1: [
        { japones: '付き合ってん', lectura: 'tsukiatte n', opciones: ['Están saliendo', 'Están peleando', 'Están trabajando', 'Están estudiando'], respuesta: 0 },
        { japones: 'なんだかんだで', lectura: 'nandakanda de', opciones: ['Al fin y al cabo', 'De repente', 'Por casualidad', 'De ninguna manera'], respuesta: 0 },
        { japones: '絡んでる', lectura: 'karande ru', opciones: ['Se meten / Interactúan (contracción)', 'Se ignoran', 'Se evitan', 'Se ayudan'], respuesta: 0 },
        { japones: '態度', lectura: 'taido', opciones: ['Actitud', 'Habilidad', 'Conocimiento', 'Experiencia'], respuesta: 0 },
        { japones: '仮に', lectura: 'kari ni', opciones: ['Aunque / Suponiendo que', 'Definitivamente', 'Raramente', 'Normalmente'], respuesta: 0 },
        { japones: '様子', lectura: 'yōsu', opciones: ['Apariencia / Actitud', 'Edad', 'Altura', 'Peso'], respuesta: 0 },
        { japones: 'うまく', lectura: 'umaku', opciones: ['Bien', 'Mal', 'Rápido', 'Lento'], respuesta: 0 },
        { japones: 'いってねー', lectura: 'itte nē', opciones: ['No va', 'Va bien', 'Es fácil', 'Es difícil'], respuesta: 0 },
        { japones: 'よ', lectura: 'yo', opciones: ['¿Sabes? (partícula enfática)', '¿Entiendes?', '¿Verdad?', '¿No?'], respuesta: 0 },
        { japones: '昼休み', lectura: 'hiruyasumi', opciones: ['Hora del almuerzo / Recreo', 'Hora de trabajo', 'Hora de estudio', 'Hora de dormir'], respuesta: 0 }
    ],
    
    2: [
        { japones: '流石に', lectura: 'sasuga ni', opciones: ['Lógico / Claro', 'Sorprendentemente', 'Por casualidad', 'Raramente'], respuesta: 0 },
        { japones: '足', lectura: 'ashi', opciones: ['Piernas', 'Brazos', 'Cabeza', 'Mano'], respuesta: 0 },
        { japones: 'どけて', lectura: 'dokete', opciones: ['Quita / Aparta (imperativo)', 'Pon', 'Dale', 'Espera'], respuesta: 0 },
        { japones: 'おい少し落ち', lectura: 'oi sukoshi ochi', opciones: ['Oye cálmate un poco', 'Oye apúrate', 'Oye espera', 'Oye ven aquí'], respuesta: 0 },
        { japones: '赤ちゃんデデちゃう', lectura: 'akachan dedechau', opciones: ['Se hace bebé (onomatopeya)', 'Llora fuerte', 'Se ríe', 'Duerme'], respuesta: 0 },
        { japones: '一度', lectura: 'ichido', opciones: ['Una vez', 'Dos veces', 'Muchas veces', 'Nunca'], respuesta: 0 },
        { japones: '練習', lectura: 'renshū', opciones: ['Practicar', 'Estudiar', 'Trabajar', 'Descansar'], respuesta: 0 },
        { japones: '経験豊富', lectura: 'keiken hōfu', opciones: ['Experimentada', 'Principiante', 'Inexperta', 'Intermedia'], respuesta: 0 },
        { japones: 'リード', lectura: 'rīdo', opciones: ['Liderar / Guiar', 'Seguir', 'Observar', 'Esperar'], respuesta: 0 },
        { japones: '安心', lectura: 'anshin', opciones: ['Tranquilidad', 'Ansiedad', 'Miedo', 'Emoción'], respuesta: 0 }
    ],
    
    3: [
        { japones: '甘い', lectura: 'amai', opciones: ['Ingenuo / Dulce', 'Salado', 'Amargo', 'Ácido'], respuesta: 0 },
        { japones: 'キステク', lectura: 'kisu teku', opciones: ['Técnica de beso', 'Técnica de hablar', 'Técnica de baile', 'Técnica de canto'], respuesta: 0 },
        { japones: '悩殺', lectura: 'nōsatsu', opciones: ['Seducir fatalmente', 'Ignorar', 'Rechazar', 'Asustar'], respuesta: 0 },
        { japones: 'みたら', lectura: 'mitara', opciones: ['Si pruebo', 'Si veo', 'Si escucho', 'Si huelo'], respuesta: 0 },
        { japones: '3秒', lectura: 'sanbyō', opciones: ['3 segundos', '3 minutos', '3 horas', '3 días'], respuesta: 0 },
        { japones: '堕ちた', lectura: 'ochita', opciones: ['Cayó / Se rindió', 'Resistió', 'Ganó', 'Huyó'], respuesta: 0 },
        { japones: '並べて', lectura: 'narabete', opciones: ['Alineando / Poniendo en fila', 'Separando', 'Mezclando', 'Escondiendo'], respuesta: 0 },
        { japones: '五つ子', lectura: 'itsutsugo', opciones: ['Quintillizas', 'Gemelas', 'Trillizas', 'Cuatrillizas'], respuesta: 0 },
        { japones: '犯す', lectura: 'okasu', opciones: ['Violar / Agredir sexualmente', 'Proteger', 'Respetar', 'Ignorar'], respuesta: 0 },
        { japones: 'スポズポ', lectura: 'supozupo', opciones: ['Entrando y saliendo (onomatopeya de pistoneo)', 'Estático', 'Girando', 'Vibrando'], respuesta: 0 }
    ],
    
    4: [
        { japones: 'しやすく', lectura: 'shiyasuku', opciones: ['Fácil de hacer', 'Difícil de hacer', 'Imposible de hacer', 'Peligroso de hacer'], respuesta: 0 },
        { japones: 'しといて', lectura: 'shitoite', opciones: ['Prepárate (imperativo)', 'Espera', 'Olvida', 'Cancela'], respuesta: 0 },
        { japones: '手に入ったら', lectura: 'te ni hairattara', opciones: ['Si lo consigo', 'Si lo pierdo', 'Si lo rompo', 'Si lo regalo'], respuesta: 0 },
        { japones: '見せちゃう', lectura: 'misechau', opciones: ['Se lo muestre (contracción de てしまう)', 'Se lo escondo', 'Se lo doy', 'Se lo quito'], respuesta: 0 },
        { japones: '変態', lectura: 'hentai', opciones: ['Pervertido', 'Normal', 'Inocente', 'Tímido'], respuesta: 0 },
        { japones: 'たまんねぇ', lectura: 'tamannē', opciones: ['Increíble / Insoportable', 'Aburrido', 'Normal', 'Desagradable'], respuesta: 0 },
        { japones: 'オホ声', lectura: 'oho-goe', opciones: ['Voz oho (gemido gutural bajo y porcino)', 'Voz aguda', 'Voz tranquila', 'Voz cantarina'], respuesta: 0 },
        { japones: '鳴く', lectura: 'naku', opciones: ['Gemir / "Cantar" (metáfora animal)', 'Callar', 'Hablar', 'Gritar'], respuesta: 0 },
        { japones: '絶対', lectura: 'zettai', opciones: ['Absolutamente', 'Quizás', 'Nunca', 'Raramente'], respuesta: 0 },
        { japones: '気', lectura: 'ki', opciones: ['Carácter / Espíritu', 'Cuerpo', 'Mente', 'Alma'], respuesta: 0 }
    ],
    
    5: [
        { japones: '強い', lectura: 'tsuyoi', opciones: ['Fuerte', 'Débil', 'Normal', 'Variable'], respuesta: 0 },
        { japones: 'ほど', lectura: 'hodo', opciones: ['Cuanto más', 'Cuanto menos', 'Igual', 'Diferente'], respuesta: 0 },
        { japones: '激しく', lectura: 'hageshiku', opciones: ['Intensamente / Con fuerza', 'Suavemente', 'Lentamente', 'Rápidamente'], respuesta: 0 },
        { japones: '突く', lectura: 'tsuku', opciones: ['Embestir / Follar', 'Acariciar', 'Tocar', 'Observar'], respuesta: 0 },
        { japones: '情けない', lectura: 'nasakenai', opciones: ['Patético / Lamentable', 'Admirable', 'Normal', 'Felicidad'], respuesta: 0 },
        { japones: 'ひくひく', lectura: 'hiku hiku', opciones: ['Palpitando / Contrayéndose', 'Inmóvil', 'Relajado', 'Rígido'], respuesta: 0 },
        { japones: 'してて', lectura: 'shitete', opciones: ['Está (forma te continua)', 'No está', 'Estaba', 'Estará'], respuesta: 0 },
        { japones: '後', lectura: 'ato', opciones: ['Después', 'Antes', 'Durante', 'Mientras'], respuesta: 0 },
        { japones: '挿れて', lectura: 'irete', opciones: ['Meticndo', 'Sacando', 'Tocando', 'Lamiendo'], respuesta: 0 },
        { japones: '開発', lectura: 'kaihatsu', opciones: ['Desarrollar (entrenar el ano)', 'Destruir', 'Ignorar', 'Proteger'], respuesta: 0 }
    ],
    
    6: [
        { japones: '楽しみ', lectura: 'tanoshimi', opciones: ['Disfrute / Anticipación', 'Miedo', 'Aburrimiento', 'Indiferencia'], respuesta: 0 },
        { japones: 'ご自慢', lectura: 'go-jiman', opciones: ['De la que alardeas', 'De la que te avergüenzas', 'Normal', 'Común'], respuesta: 0 },
        { japones: '演技力', lectura: 'engiryoku', opciones: ['Habilidad actoral', 'Habilidad deportiva', 'Habilidad musical', 'Habilidad artística'], respuesta: 0 },
        { japones: '上', lectura: 'ue', opciones: ['Arriba', 'Abajo', 'Derecha', 'Izquierda'], respuesta: 0 },
        { japones: '下', lectura: 'shita', opciones: ['Abajo', 'Arriba', 'Centro', 'Lateral'], respuesta: 0 },
        { japones: '大人しく', lectura: 'otonashiku', opciones: ['Callada / Quieta', 'Ruidosa', 'Activa', 'Nerviosa'], respuesta: 0 },
        { japones: 'させて', lectura: 'sasete', opciones: ['Hacer que', 'Impedir que', 'Dejar que', 'Ver que'], respuesta: 0 },
        { japones: 'みろ', lectura: 'miro', opciones: ['Intenta (imperativo rudo)', 'No intentes', 'Espera', 'Olvídalo'], respuesta: 0 },
        { japones: '髪型', lectura: 'kamigata', opciones: ['Peinado', 'Rostro', 'Cuerpo', 'Ropa'], respuesta: 0 },
        { japones: '統一', lectura: 'tōitsu', opciones: ['Unificar', 'Separar', 'Dividir', 'Mezclar'], respuesta: 0 }
    ],
    
    7: [
        { japones: '見分け', lectura: 'miwake', opciones: ['Distinguir', 'Confundir', 'Ignorar', 'Unir'], respuesta: 0 },
        { japones: 'つかない', lectura: 'tsukanai', opciones: ['No se puede', 'Se puede', 'Quizás', 'Fácilmente'], respuesta: 0 },
        { japones: '歴戦', lectura: 'rekisen', opciones: ['Veterano de muchas batallas', 'Novato', 'Intermedio', 'Inactivo'], respuesta: 0 },
        { japones: 'ヤリチン', lectura: 'yarichin', opciones: ['Putero / Follador experimentado', 'Virgen', 'Casual', 'Abstinente'], respuesta: 0 },
        { japones: '当たってる', lectura: 'atatteru', opciones: ['Acertando', 'Fallando', 'Dudando', 'Ignorando'], respuesta: 0 },
        { japones: '髪', lectura: 'kami', opciones: ['Pelo', 'Piel', 'Uñas', 'Ojos'], respuesta: 0 },
        { japones: '長さ', lectura: 'nagasa', opciones: ['Longitud', 'Anchura', 'Altura', 'Profundidad'], respuesta: 0 },
        { japones: '2択', lectura: 'nitaku', opciones: ['Dos opciones', 'Tres opciones', 'Muchas opciones', 'Sin opciones'], respuesta: 0 },
        { japones: '突っ込んで', lectura: 'tsukkonde', opciones: ['Meticndo / Embistiendo', 'Sacando', 'Tocando', 'Observando'], respuesta: 0 },
        { japones: '30秒', lectura: 'sanjū-byō', opciones: ['30 segundos', '30 minutos', '30 horas', '30 días'], respuesta: 0 }
    ],
    
    8: [
        { japones: 'ビショビショ', lectura: 'bishobisho', opciones: ['Empapado / Chorreando', 'Seco', 'Húmedo', 'Pegajoso'], respuesta: 0 },
        { japones: '雑魚', lectura: 'zako', opciones: ['Débil / Perdedor', 'Fuerte / Ganador', 'Intermedio', 'Experto'], respuesta: 0 },
        { japones: 'かなぁ', lectura: 'kanā', opciones: ['¿Será que...? (duda suave)', '¡Definitivamente!', 'No sé', 'Tal vez'], respuesta: 0 },
        { japones: 'アレ', lectura: 'are', opciones: ['Eso / Aquello', 'Esto', 'Aquello lejano', 'Nada'], respuesta: 0 },
        { japones: '露出度', lectura: 'roshutsudo', opciones: ['Nivel de exposición', 'Nivel de cobertura', 'Nivel de calidad', 'Nivel de precio'], respuesta: 0 },
        { japones: '抜いて', lectura: 'nuite', opciones: ['Pajearme / Correrme', 'Contenerme', 'Ignorar', 'Disfrutar'], respuesta: 0 },
        { japones: '全裸', lectura: 'zenra', opciones: ['Desnudez total', 'Parcialmente vestido', 'Completamente vestido', 'En ropa interior'], respuesta: 0 },
        { japones: '変わんない', lectura: 'kawannai', opciones: ['No difiere (contracción casual)', 'Difiere mucho', 'Es igual', 'Cambia'], respuesta: 0 },
        { japones: '隣', lectura: 'tonari', opciones: ['Al lado / Vecino', 'Lejos', 'Frente', 'Detrás'], respuesta: 0 },
        { japones: '趣味', lectura: 'shumi', opciones: ['Fetiche / Gusto', 'Obligación', 'Trabajo', 'Estudio'], respuesta: 0 }
    ],
    
    9: [
        { japones: '後ろ', lectura: 'ushiro', opciones: ['Detrás', 'Delante', 'Lado', 'Arriba'], respuesta: 0 },
        { japones: 'なんて', lectura: 'nante', opciones: ['Cosas como / ¡Vaya!', 'Nada especial', 'Algo normal', 'Algo aburrido'], respuesta: 0 },
        { japones: '丸出し', lectura: 'marudashi', opciones: ['Totalmente expuesto', 'Parcialmente tapado', 'Completamente tapado', 'Semi-expuesto'], respuesta: 0 },
        { japones: 'ぶちこみ', lectura: 'buchikomi', opciones: ['Meter a saco / Embutir', 'Sacar suavemente', 'Tocar ligeramente', 'Evitar'], respuesta: 0 },
        { japones: 'ナンパ', lectura: 'nanpa', opciones: ['Ligar / Abordar', 'Ignorar', 'Evitar', 'Rechazar'], respuesta: 0 },
        { japones: '速攻', lectura: 'sokkō', opciones: ['Al instante', 'Lentamente', 'Después', 'Nunca'], respuesta: 0 },
        { japones: 'まくって', lectura: 'makutte', opciones: ['A saco / Sin parar', 'Suavemente', 'Intermitentemente', 'Nunca'], respuesta: 0 },
        { japones: 'やん', lectura: 'yan', opciones: ['Haría (contracción)', 'No haría', 'Quizás haría', 'Nunca haría'], respuesta: 0 },
        { japones: '紐', lectura: 'himo', opciones: ['Hilos / Cordones', 'Botones', 'Cremalleras', 'Hebillas'], respuesta: 0 },
        { japones: 'しか', lectura: 'shika', opciones: ['Solo', 'También', 'Además', 'Incluso'], respuesta: 0 }
    ],
    
    10: [
        { japones: '逆に', lectura: 'gyaku ni', opciones: ['Al contrario', 'Igualmente', 'Similarmente', 'Paralelamente'], respuesta: 0 },
        { japones: '堂々', lectura: 'dōdō', opciones: ['Con naturalidad / Audazmente', 'Tímidamente', 'Nerviosamente', 'Secretamente'], respuesta: 0 },
        { japones: '目立たない', lectura: 'medatanai', opciones: ['No destacar', 'Destacar mucho', 'Ser normal', 'Ser invisible'], respuesta: 0 },
        { japones: '必死', lectura: 'hisshi', opciones: ['Desesperadamente', 'Tranquilamente', 'Indiferentemente', 'Felizmente'], respuesta: 0 },
        { japones: 'プルンプルン', lectura: 'purunpurun', opciones: ['Temblorosas / Jugosas', 'Firmes', 'Flácidas', 'Secas'], respuesta: 0 },
        { japones: 'ニップルシール', lectura: 'nippuru shīru', opciones: ['Pezoneras / Pasties', 'Sujetador', 'Top', 'Bikini'], respuesta: 0 },
        { japones: 'はがして', lectura: 'hagashite', opciones: ['Arrancando', 'Pegando', 'Cubriendo', 'Dibujando'], respuesta: 0 },
        { japones: 'むしゃぶりつき', lectura: 'mushaburitsuki', opciones: ['Chupar con avidez', 'Lamer suavemente', 'Morder ligeramente', 'Tocar'], respuesta: 0 },
        { japones: '映画', lectura: 'eiga', opciones: ['Película', 'Serie', 'Documental', 'Animación'], respuesta: 0 },
        { japones: 'でてた', lectura: 'deteta', opciones: ['Salió (pasado casual)', 'No salió', 'Quizás salió', 'Saldrá'], respuesta: 0 }
    ],
    
    11: [
        { japones: 'てことは', lectura: 'te koto wa', opciones: ['Entonces / Eso significa', 'Pero', 'Aunque', 'Porque'], respuesta: 0 },
        { japones: '撮影', lectura: 'satsuei', opciones: ['Rodaje', 'Fotografía', 'Pintura', 'Escultura'], respuesta: 0 },
        { japones: '格好', lectura: 'kakkō', opciones: ['Atuendo / Apariencia', 'Personalidad', 'Habilidad', 'Conocimiento'], respuesta: 0 },
        { japones: '男優', lectura: 'danyū', opciones: ['Actor (porno masculino)', 'Actriz', 'Director', 'Productor'], respuesta: 0 },
        { japones: 'ふりケツ', lectura: 'furi ketsu', opciones: ['Culazo (que se mueve mucho)', 'Culo plano', 'Culo normal', 'Culo pequeño'], respuesta: 0 },
        { japones: '好き放題', lectura: 'suki hōdai', opciones: ['A discreción / Lo que quiera', 'Con límites', 'Con permiso', 'Con restricciones'], respuesta: 0 },
        { japones: '随分', lectura: 'zuibun', opciones: ['Bastante / Considerablemente', 'Poco', 'Nada', 'Demasiado'], respuesta: 0 },
        { japones: 'ぶっとんだ', lectura: 'buttonda', opciones: ['Loco / Extravagante', 'Normal', 'Aburrido', 'Serio'], respuesta: 0 },
        { japones: 'してる', lectura: 'shiteru', opciones: ['Está llevando', 'No está', 'Estaba', 'Estará'], respuesta: 0 },
        { japones: '左', lectura: 'hidari', opciones: ['Izquierdo', 'Derecho', 'Central', 'Lateral'], respuesta: 0 }
    ],
    
    12: [
        { japones: '絆創膏', lectura: 'bansōkō', opciones: ['Apósito / Tirita', 'Vendaje', 'Yeso', 'Pomada'], respuesta: 0 },
        { japones: 'はがれ', lectura: 'hagare', opciones: ['Despegarse', 'Pegarse', 'Quedarse', 'Romper'], respuesta: 0 },
        { japones: 'かけてる', lectura: 'kaketeru', opciones: ['A punto de', 'Lejos de', 'Después de', 'Antes de'], respuesta: 0 },
        { japones: 'ぷっくり', lectura: 'pukkuri', opciones: ['Hinchado / Gordito', 'Delgado', 'Plano', 'Hueco'], respuesta: 0 },
        { japones: 'スク水', lectura: 'suku mizu', opciones: ['School swimsuit (bañador escolar)', 'Uniforme escolar', 'Ropa casual', 'Ropa deportiva'], respuesta: 0 },
        { japones: '部分', lectura: 'bubun', opciones: ['Partes', 'Todo', 'Nada', 'Algo'], respuesta: 0 },
        { japones: '開けて', lectura: 'akete', opciones: ['Haciendo', 'Cerrando', 'Tapando', 'Ocultando'], respuesta: 0 },
        { japones: '貼る', lectura: 'haru', opciones: ['Pegar', 'Quitar', 'Romper', 'Dibujar'], respuesta: 0 },
        { japones: '天才', lectura: 'tensai', opciones: ['Genio', 'Tonto', 'Normal', 'Inteligente'], respuesta: 0 },
        { japones: '発想', lectura: 'hassō', opciones: ['Idea / Concepto', 'Realidad', 'Hecho', 'Teoría'], respuesta: 0 }
    ],
    
    13: [
        { japones: 'もじもじ', lectura: 'mojimoji', opciones: ['Retorcerse / Inquietarse', 'Quedarse quieto', 'Relajarse', 'Dormir'], respuesta: 0 },
        { japones: '恥ずかしがってる', lectura: 'hazukashigatteru', opciones: ['Estar avergonzada', 'Estar orgullosa', 'Estar feliz', 'Estar enojada'], respuesta: 0 },
        { japones: 'たまんね~', lectura: 'tamannē', opciones: ['Irresistible / Insoportable de bueno', 'Aburrido', 'Normal', 'Desagradable'], respuesta: 0 },
        { japones: '割れ目', lectura: 'wareme', opciones: ['Raja / Hendidura', 'Superficie lisa', 'Protuberancia', 'Hueco'], respuesta: 0 },
        { japones: 'ふんどし', lectura: 'fundoshi', opciones: ['Fundoshi (tanga tradicional)', 'Calzoncillo', 'Boxer', 'Suspensorio'], respuesta: 0 },
        { japones: '目立つ', lectura: 'medatsu', opciones: ['Destacar', 'Pasar desapercibido', 'Esconderse', 'Camuflarse'], respuesta: 0 },
        { japones: 'なるべく', lectura: 'narubeku', opciones: ['Lo máximo posible', 'Lo mínimo posible', 'Normalmente', 'Nunca'], respuesta: 0 },
        { japones: '視線', lectura: 'shisen', opciones: ['Miradas', 'Voces', 'Toques', 'Sonidos'], respuesta: 0 },
        { japones: 'いかない', lectura: 'ikanai', opciones: ['No vayan', 'Vayan', 'Quizás vayan', 'Nunca vayan'], respuesta: 0 },
        { japones: 'ように', lectura: 'yō ni', opciones: ['Para que', 'Aunque', 'Porque', 'Si'], respuesta: 0 }
    ],
    
    14: [
        { japones: '生地', lectura: 'kiji', opciones: ['Tela / Tejido', 'Plástico', 'Metal', 'Madera'], respuesta: 0 },
        { japones: '薄い', lectura: 'usui', opciones: ['Fina', 'Gruesa', 'Dura', 'Suave'], respuesta: 0 },
        { japones: 'せい', lectura: 'sei', opciones: ['Culpa / Por', 'Mérito', 'Accidente', 'Destino'], respuesta: 0 },
        { japones: 'めっちゃ', lectura: 'meccha', opciones: ['Un montón / Súper', 'Poco', 'Nada', 'Algo'], respuesta: 0 },
        { japones: '透けて', lectura: 'sukete', opciones: ['Transparentándose', 'Opacándose', 'Cubriéndose', 'Ocultándose'], respuesta: 0 },
        { japones: '祭', lectura: 'matsuri', opciones: ['Festival (matsuri japonés)', 'Ceremonia', 'Reunión', 'Concierto'], respuesta: 0 },
        { japones: '純粋', lectura: 'junsui', opciones: ['Pura', 'Corrupta', 'Mixta', 'Falsa'], respuesta: 0 },
        { japones: '元気っ娘', lectura: 'genki-kko', opciones: ['Chica enérgica', 'Chica tímida', 'Chica seria', 'Chica triste'], respuesta: 0 },
        { japones: '着てる', lectura: 'kiteru', opciones: ['Llevando', 'Quitándose', 'Comprando', 'Lavando'], respuesta: 0 },
        { japones: '興奮', lectura: 'kōfun', opciones: ['Excitación', 'Aburrimiento', 'Calma', 'Sueño'], respuesta: 0 }
    ],
    
    15: [
        { japones: 'やたら', lectura: 'yatara', opciones: ['Excesivamente / Súper', 'Moderadamente', 'Poco', 'Nada'], respuesta: 0 },
        { japones: '調教', lectura: 'chōkyō', opciones: ['Entrenar / Domar (BDSM)', 'Liberar', 'Ignorar', 'Proteger'], respuesta: 0 },
        { japones: '生きられない', lectura: 'ikirarenai', opciones: ['No pueda vivir', 'Pueda vivir', 'Quiera vivir', 'Prefiera vivir'], respuesta: 0 },
        { japones: 'なし', lectura: 'nashi', opciones: ['Sin', 'Con', 'Con mucho', 'Con poco'], respuesta: 0 },
        { japones: 'やべぇ', lectura: 'yabē', opciones: ['Loca / Peligrosa', 'Normal', 'Aburrida', 'Segura'], respuesta: 0 },
        { japones: '綺麗', lectura: 'kirei', opciones: ['Bonito / Limpio', 'Feo / Sucio', 'Normal', 'Extraño'], respuesta: 0 },
        { japones: 'おかしい', lectura: 'okashii', opciones: ['Loco / Extraño', 'Normal', 'Aburrido', 'Serio'], respuesta: 0 },
        { japones: 'まったく', lectura: 'mattaku', opciones: ['Para nada', 'Totalmente', 'Parcialmente', 'A medias'], respuesta: 0 },
        { japones: '黒ずんで', lectura: 'kurozunde', opciones: ['Oscurecidos / Pigmentados', 'Aclarados', 'Blancos', 'Rojos'], respuesta: 0 },
        { japones: '上玉', lectura: 'jōtama', opciones: ['Joya / Chica de primera', 'Chica normal', 'Chica fea', 'Chica promedio'], respuesta: 0 }
    ],
    
    16: [
        { japones: 'なかなか', lectura: 'nakanaka', opciones: ['Fácilmente / Todos los días', 'Raramente', 'Nunca', 'A veces'], respuesta: 0 },
        { japones: 'いねえ', lectura: 'inē', opciones: ['No hay (contracción casual)', 'Hay', 'Habrá', 'Hubo'], respuesta: 0 },
        { japones: '逮捕', lectura: 'taiho', opciones: ['Arrestar', 'Liberar', 'Interrogar', 'Ignorar'], respuesta: 0 },
        { japones: '草むら', lectura: 'kusamura', opciones: ['Matorral / Hierba alta', 'Camino', 'Edificio', 'Playa'], respuesta: 0 },
        { japones: '連れ込んで', lectura: 'tsurekonde', opciones: ['Arrastrando / Llevando', 'Soltando', 'Dejando', 'Expulsando'], respuesta: 0 },
        { japones: 'ぶち犯して', lectura: 'buchi okashite', opciones: ['Violar a saco', 'Respetar', 'Ignorar', 'Proteger'], respuesta: 0 }
    ],
    
    // ====================
    // MAZOS DIFÍCILES ESPECIALES - Subcontenedor 1.3
    // ====================
 
        
        // ====================
        // MAZOS DIFÍCILES ESPECIALES - Subcontenedor 1.3
        // ====================
        
        'D1': [
            { japones: '話し言葉の縮約形', lectura: 'hanashikotoba no shukuyakukei', opciones: ['Formas contraídas del lenguaje hablado', 'Formas formales', 'Formas literarias', 'Formas arcaicas'], respuesta: 0 },
            { japones: '終助詞の微妙な用法', lectura: 'shuujoshi no bimyou na youhou', opciones: ['Usos sutiles de partículas finales', 'Usos básicos', 'Usos incorrectos', 'Usos formales'], respuesta: 0 },
            { japones: '若者言葉の変化', lectura: 'wakamonokotoba no henka', opciones: ['Cambios en el lenguaje juvenil', 'Lenguaje tradicional', 'Lenguaje formal', 'Dialectos regionales'], respuesta: 0 },
            { japones: '会話の省略パターン', lectura: 'kaiwa no shouryaku patān', opciones: ['Patrones de omisión en conversación', 'Expresiones completas', 'Lenguaje escrito', 'Discurso formal'], respuesta: 0 },
            { japones: '間投詞の感情表現', lectura: 'kantoushi no kanjou hyougen', opciones: ['Expresión emocional con interjecciones', 'Expresión neutral', 'Expresión formal', 'Expresión técnica'], respuesta: 0 },
            { japones: '語気のニュアンス', lectura: 'goki no nyuansu', opciones: ['Matices en el tono de voz', 'Significado literal', 'Gramática formal', 'Vocabulario básico'], respuesta: 0 },
            { japones: '相槌のバリエーション', lectura: 'aizuchi no bariēshon', opciones: ['Variaciones en respuestas de conversación', 'Respuestas simples', 'Silencio', 'Preguntas'], respuesta: 0 },
            { japones: '婉曲な断り表現', lectura: 'enkyoku na kotowari hyougen', opciones: ['Expresiones indirectas de rechazo', 'Rechazos directos', 'Aceptaciones', 'Peticiones'], respuesta: 0 },
            { japones: 'ぼかし表現', lectura: 'bokashi hyougen', opciones: ['Expresiones vagas o evasivas', 'Expresiones claras', 'Afirmaciones directas', 'Órdenes'], respuesta: 0 },
            { japones: '日本語のポライトネス理論', lectura: 'nihongo no poraitonesu riron', opciones: ['Teoría de la cortesía en japonés', 'Gramática básica', 'Vocabulario simple', 'Pronunciación'], respuesta: 0 }
        ]
    },
    // Sub-contenedor 1.4
    'sub1_4': {
        // MAZO 1
        1: [
            { japones: '授業', lectura: 'jugyō', opciones: ['Clases', 'Trabajo', 'Deporte', 'Descanso'], respuesta: 0 },
            { japones: '補修', lectura: 'hoshū', opciones: ['Clases de recuperación', 'Clases normales', 'Exámenes', 'Vacaciones'], respuesta: 0 },
            { japones: '槍崎', lectura: 'Yabuki', opciones: ['Yabuki (apellido)', 'Suzuki', 'Tanaka', 'Yamada'], respuesta: 0 },
            { japones: '赤点', lectura: 'akaten', opciones: ['Nota roja / Suspenso', 'Nota perfecta', 'Nota media', 'Aprobado'], respuesta: 0 },
            { japones: '取っちまってなぁ', lectura: 'tottchimattenā', opciones: ['Me he llevado (un suspenso)', 'He aprobado', 'He mejorado', 'He abandonado'], respuesta: 0 },
            { japones: '担当', lectura: 'tantō', opciones: ['Encargarse / Responsable', 'Observar', 'Ignorar', 'Evitar'], respuesta: 0 },
            { japones: 'しか', lectura: 'shika', opciones: ['Solo / Únicamente', 'También', 'Incluso', 'Especialmente'], respuesta: 0 },
            { japones: '迷惑', lectura: 'meiwaku', opciones: ['Molestias', 'Ayuda', 'Soporte', 'Placer'], respuesta: 0 },
            { japones: 'かけらんないわよ', lectura: 'kakerannai wayo', opciones: ['No puedo causar (molestias)', 'Voy a ayudar', 'No me importa', 'Es mi deber'], respuesta: 0 },
            { japones: '負担', lectura: 'futan', opciones: ['Carga / Peso', 'Alivio', 'Ayuda', 'Soporte'], respuesta: 0 }
        ],
        
        // MAZO 2
        2: [
            { japones: '増やし', lectura: 'fuyashi', opciones: ['Aumentando', 'Disminuyendo', 'Manteniendo', 'Eliminando'], respuesta: 0 },
            { japones: 'たくなかたから', lectura: 'takunakatakara', opciones: ['Como no querías', 'Porque querías', 'Aunque no querías', 'Si querías'], respuesta: 0 },
            { japones: '無駄話', lectura: 'mudabanashi', opciones: ['Charla inútil', 'Conversación seria', 'Debate', 'Conferencia'], respuesta: 0 },
            { japones: '顔出すから', lectura: 'kao dasu kara', opciones: ['Porque apareces', 'Porque te escondes', 'Porque te callas', 'Porque te vas'], respuesta: 0 },
            { japones: '入念', lectura: 'nyūnen', opciones: ['Cuidadoso / Meticuloso', 'Descuidado', 'Rápido', 'Superficial'], respuesta: 0 },
            { japones: 'すっかり', lectura: 'sukkari', opciones: ['Completamente', 'Parcialmente', 'Ligeramente', 'Nada'], respuesta: 0 },
            { japones: 'コツ', lectura: 'kotsu', opciones: ['Truco / Técnica', 'Error', 'Suerte', 'Azar'], respuesta: 0 },
            { japones: '専用', lectura: 'sen\'yō', opciones: ['Exclusivo / Dedicado', 'Compartido', 'Público', 'General'], respuesta: 0 },
            { japones: 'ヌイ', lectura: 'nui', opciones: ['Saliendo / Corriéndose', 'Entrando', 'Esperando', 'Deteniendo'], respuesta: 0 },
            { japones: 'スリン', lectura: 'surin', opciones: ['Deslizamiento húmedo', 'Sonido seco', 'Silencio', 'Grito'], respuesta: 0 }
        ],
        
        // MAZO 3
        3: [
            { japones: 'どうせ', lectura: 'dōse', opciones: ['De todos modos', 'Por casualidad', 'Especialmente', 'Raramente'], respuesta: 0 },
            { japones: '溜め', lectura: 'tame', opciones: ['Acumulando', 'Gastando', 'Perdiendo', 'Distribuyendo'], respuesta: 0 },
            { japones: '数ヶ月', lectura: 'sūkagetsu', opciones: ['Varios meses', 'Un mes', 'Un año', 'Una semana'], respuesta: 0 },
            { japones: '根本', lectura: 'nehon', opciones: ['Base / Raíz (del pene)', 'Punta', 'Mitad', 'Extremo'], respuesta: 0 },
            { japones: '特に', lectura: 'toku ni', opciones: ['Especialmente', 'Generalmente', 'Raramente', 'Nunca'], respuesta: 0 },
            { japones: 'くっせえ', lectura: 'kusse', opciones: ['Apesta (vulgar)', 'Huele bien', 'Es inodoro', 'Es fragante'], respuesta: 0 },
            { japones: '臭い', lectura: 'kusai', opciones: ['Huele mal', 'Huele bien', 'No huele', 'Es aromático'], respuesta: 0 },
            { japones: '徹底的', lectura: 'tetteiteki', opciones: ['A fondo / Completamente', 'Superficialmente', 'Parcialmente', 'Ligeramente'], respuesta: 0 },
            { japones: '快感', lectura: 'kaikan', opciones: ['Placer', 'Dolor', 'Molestia', 'Indiferencia'], respuesta: 0 },
            { japones: '覚えさせられた', lectura: 'oboesaserareta', opciones: ['Me hicieron recordar', 'Olvidé', 'Ignoré', 'Descubrí'], respuesta: 0 }
        ],
        
        // MAZO 4
        4: [
            { japones: '奉仕', lectura: 'hōshi', opciones: ['Servicio / Servir sexualmente', 'Rechazo', 'Indiferencia', 'Dominio'], respuesta: 0 },
            { japones: '抵抗', lectura: 'teikō', opciones: ['Resistencia', 'Sumisión', 'Aceptación', 'Cooperación'], respuesta: 0 },
            { japones: '一々', lectura: 'ichiichi', opciones: ['Cada vez / Siempre', 'Nunca', 'Raramente', 'Ocasionalmente'], respuesta: 0 },
            { japones: 'うっさい', lectura: 'ussai', opciones: ['Pesado / Ruidoso', 'Silencioso', 'Amable', 'Tranquilo'], respuesta: 0 },
            { japones: '仕込', lectura: 'shikomi', opciones: ['Entrenando / Enseñando', 'Olvidando', 'Ignorando', 'Abandonando'], respuesta: 0 },
            { japones: 'さらに', lectura: 'sarani', opciones: ['Aún más', 'Menos', 'Igual', 'Diferente'], respuesta: 0 },
            { japones: '丸わかり', lectura: 'maruwakari', opciones: ['Clarísimo / Evidente', 'Oculto', 'Confuso', 'Ambiguo'], respuesta: 0 },
            { japones: 'うつ', lectura: 'utsu', opciones: ['Succión profunda', 'Ligero roce', 'Toque seco', 'Presión ligera'], respuesta: 0 },
            { japones: '認め', lectura: 'mitome', opciones: ['Admitiendo', 'Negando', 'Ignorando', 'Dudando'], respuesta: 0 },
            { japones: 'じゅるる', lectura: 'jururu', opciones: ['Succión intensa y babosa', 'Sonido seco', 'Silencio', 'Chasquido'], respuesta: 0 }
        ],
        
        // MAZO 5
        5: [
            { japones: 'ちゃぱい', lectura: 'chapai', opciones: ['Sonido húmedo o chapoteo', 'Sonido seco', 'Crujido', 'Silencio'], respuesta: 0 },
            { japones: 'しゃぶってる', lectura: 'shabutteru', opciones: ['Está chupando', 'Está mordiendo', 'Está lamiendo', 'Está tocando'], respuesta: 0 },
            { japones: 'にも', lectura: 'ni mo', opciones: ['Ni siquiera', 'También', 'Especialmente', 'Solamente'], respuesta: 0 },
            { japones: '沸き', lectura: 'waki', opciones: ['Hirviendo / Surgiendo', 'Enfriándose', 'Estancándose', 'Evaporándose'], respuesta: 0 },
            { japones: '物覚え', lectura: 'monoboé', opciones: ['Memoria / Capacidad de aprendizaje', 'Olvido', 'Ignorancia', 'Descuido'], respuesta: 0 },
            { japones: '嬉しい', lectura: 'ureshii', opciones: ['Feliz / Contento', 'Triste', 'Enojado', 'Asustado'], respuesta: 0 },
            { japones: '復活', lectura: 'fukkatsu', opciones: ['Resucitada / Erección recuperada', 'Debilitada', 'Perdida', 'Agotada'], respuesta: 0 },
            { japones: '真面目', lectura: 'majime', opciones: ['En serio / Seriamente', 'En broma', 'Despreocupadamente', 'Flojamente'], respuesta: 0 },
            { japones: 'と', lectura: 'to', opciones: ['Si no', 'Si', 'Aunque', 'Porque'], respuesta: 0 },
            { japones: '恵ん', lectura: 'megun', opciones: ['Otorgando / Graciando', 'Negando', 'Quitando', 'Escondiendo'], respuesta: 0 }
        ],
        
        // MAZO 6
        6: [
            { japones: 'それにしても', lectura: 'sorenishitemo', opciones: ['Aun así / De todos modos', 'Por eso', 'Además', 'Sin embargo'], respuesta: 0 },
            { japones: '汚い', lectura: 'kitanai', opciones: ['Sucio', 'Limpio', 'Purificado', 'Inmaculado'], respuesta: 0 },
            { japones: 'たっぷり', lectura: 'tappuri', opciones: ['Un montón', 'Poco', 'Nada', 'Justo'], respuesta: 0 },
            { japones: '気合', lectura: 'kiai', opciones: ['Ganas / Entusiasmo', 'Desánimo', 'Indiferencia', 'Miedo'], respuesta: 0 },
            { japones: '入れ', lectura: 'ire', opciones: ['Poniendo', 'Sacando', 'Moviendo', 'Girando'], respuesta: 0 },
            { japones: 'しごけ', lectura: 'shigoke', opciones: ['Masturba (imperativo rudo)', 'Para', 'Suaviza', 'Acaricia'], respuesta: 0 },
            { japones: '一発目', lectura: 'ippatsume', opciones: ['La primera corrida', 'La última', 'La intermedia', 'Ninguna'], respuesta: 0 },
            { japones: '揉ん', lectura: 'mon', opciones: ['Amasando', 'Estirando', 'Presionando', 'Tocando'], respuesta: 0 },
            { japones: 'くる', lectura: 'kuru', opciones: ['Venir / Hacer', 'Ir', 'Quedarse', 'Esperar'], respuesta: 0 },
            { japones: '具合', lectura: 'guai', opciones: ['Estado / Condición', 'Apariencia', 'Tamaño', 'Forma'], respuesta: 0 }
        ],
        
        // MAZO 7
        7: [
            { japones: '出来', lectura: 'deki', opciones: ['Estar listo', 'No estar', 'Empezar', 'Terminar'], respuesta: 0 },
            { japones: '感謝', lectura: 'kansha', opciones: ['Gratitud', 'Queja', 'Crítica', 'Indiferencia'], respuesta: 0 },
            { japones: '切ら', lectura: 'kira', opciones: ['Acabándose', 'Empezando', 'Conteniendo', 'Reteniendo'], respuesta: 0 },
            { japones: 'ガン', lectura: 'gan', opciones: ['Fuerte / A tope', 'Suavemente', 'Lentamente', 'Rápidamente'], respuesta: 0 },
            { japones: '突き', lectura: 'tsuki', opciones: ['Embestida / Penetración', 'Retirada', 'Pausa', 'Caricia'], respuesta: 0 },
            { japones: 'ばっかり', lectura: 'bakkari', opciones: ['Solo / Nada más', 'También', 'Además', 'Incluso'], respuesta: 0 },
            { japones: 'いらない', lectura: 'iranai', opciones: ['No necesito', 'Quiero', 'Deseo', 'Necesito'], respuesta: 0 },
            { japones: 'ちょうだい', lectura: 'chōdai', opciones: ['Dámelo (súplica femenina)', 'Tómalo', 'Guárdalo', 'Tíralo'], respuesta: 0 },
            { japones: '一度', lectura: 'ichido', opciones: ['Una vez más', 'Por última vez', 'Por primera vez', 'Nunca'], respuesta: 0 },
            { japones: '訊く', lectura: 'kiku', opciones: ['Preguntar', 'Responder', 'Ignorar', 'Evitar'], respuesta: 0 }
        ],
        
        // MAZO 8
        8: [
            { japones: '正直', lectura: 'shōjiki', opciones: ['Honestamente', 'Mintiendo', 'Exagerando', 'Ocultando'], respuesta: 0 },
            { japones: 'ご褒美', lectura: 'gohōbi', opciones: ['Recompensa', 'Castigo', 'Crítica', 'Ignorancia'], respuesta: 0 },
            { japones: 'キツキツ', lectura: 'kitsukitsu', opciones: ['Súper apretado', 'Muy flojo', 'Justo', 'Amplio'], respuesta: 0 },
            { japones: '違って', lectura: 'chigatte', opciones: ['A diferencia de', 'Igual que', 'Similar a', 'Parecido a'], respuesta: 0 },
            { japones: 'ねっとり', lectura: 'nettori', opciones: ['Pegajoso / Viscoso', 'Seco', 'Ligero', 'Acuoso'], respuesta: 0 },
            { japones: '絡み', lectura: 'karami', opciones: ['Enredándose', 'Desenredándose', 'Separándose', 'Alineándose'], respuesta: 0 },
            { japones: '来やがる', lectura: 'kiyagaru', opciones: ['Viene (grosero)', 'Se va', 'Espera', 'Se detiene'], respuesta: 0 },
            { japones: 'ついて', lectura: 'tsuite', opciones: ['Acerca de', 'Lejos de', 'Junto con', 'Separado de'], respuesta: 0 },
            { japones: 'クセ', lectura: 'kuse', opciones: ['A pesar de', 'Debido a', 'Gracias a', 'Por culpa de'], respuesta: 0 },
            { japones: '教え子', lectura: 'oshiego', opciones: ['Alumnas', 'Profesoras', 'Compañeras', 'Amigas'], respuesta: 0 }
        ],
        
        // MAZO 9
        9: [
            { japones: 'お待ちかね', lectura: 'omachikane', opciones: ['Tan esperado', 'Inesperado', 'Olvidado', 'Temido'], respuesta: 0 },
            { japones: 'きゅうけ', lectura: 'kyūkei', opciones: ['Descanso / Parar', 'Continuar', 'Acelerar', 'Empezar'], respuesta: 0 },
            { japones: '出ねぇ', lectura: 'denē', opciones: ['No sale', 'Sale', 'Podría salir', 'Salió'], respuesta: 0 },
            { japones: '駄目', lectura: 'dame', opciones: ['No puede ser / Imposible', 'Está bien', 'Es posible', 'Es fácil'], respuesta: 0 },
            { japones: '条件', lectura: 'jōken', opciones: ['Condiciones', 'Ofertas', 'Promesas', 'Amenazas'], respuesta: 0 },
            { japones: '避妊', lectura: 'hinin', opciones: ['Anticoncepción', 'Fertilización', 'Embarazo', 'Parto'], respuesta: 0 },
            { japones: 'こじゃないと思うがな', lectura: 'kojanai to omou ga na', opciones: ['No creo que sea tan malo', 'Es terrible', 'Es excelente', 'Es normal'], respuesta: 0 },
            { japones: '金', lectura: 'kane', opciones: ['Dinero', 'Amor', 'Tiempo', 'Esfuerzo'], respuesta: 0 },
            { japones: '大金', lectura: 'taikin', opciones: ['Gran cantidad de dinero', 'Poco dinero', 'Deuda', 'Ahorro'], respuesta: 0 },
            { japones: 'あれば', lectura: 'areba', opciones: ['Si hay', 'Si no hay', 'Aunque haya', 'Porque hay'], respuesta: 0 }
        ],
        
        // MAZO 10
        10: [
            { japones: '済む', lectura: 'sumu', opciones: ['Terminar', 'Empezar', 'Continuar', 'Posponer'], respuesta: 0 },
            { japones: 'かけ', lectura: 'kake', opciones: ['Causando', 'Evitando', 'Ignorando', 'Deteniendo'], respuesta: 0 },
            { japones: 'でもこのお金に手を出したらぽいっ', lectura: 'demo kono okane ni te o dashitarapoi', opciones: ['Si tocas este dinero, estás acabado', 'Este dinero es seguro', 'Puedes usar este dinero', 'Este dinero es tuyo'], respuesta: 0 },
            { japones: '絡ませろ', lectura: 'karamase ro', opciones: ['Enreda / Entrelaza', 'Separa', 'Suelta', 'Alinea'], respuesta: 0 },
            { japones: '響く', lectura: 'hibiku', opciones: ['Resonar / Vibrar', 'Silenciar', 'Atenuar', 'Detener'], respuesta: 0 },
            { japones: 'ベロキス', lectura: 'berokisu', opciones: ['Beso con lengua', 'Beso en la mejilla', 'Abrazo', 'Caricia'], respuesta: 0 },
            { japones: '出来て', lectura: 'dekite', opciones: ['Estar listo', 'No estar', 'Empezar', 'Terminar'], respuesta: 0 },
            { japones: 'するなら', lectura: 'suru nara', opciones: ['Si vamos a hacerlo', 'Si no hacemos', 'Aunque hagamos', 'Porque hacemos'], respuesta: 0 },
            { japones: '終わらせて', lectura: 'owarasete', opciones: ['Termina / Haz que termine', 'Continúa', 'Empieza', 'Pausa'], respuesta: 0 },
            { japones: '美味そ', lectura: 'umiso', opciones: ['Parece delicioso', 'Parece asqueroso', 'Parece normal', 'Parece amargo'], respuesta: 0 }
        ],
        
        // MAZO 11
        11: [
            { japones: 'ガキ', lectura: 'gaki', opciones: ['Cría / Niña (despectivo)', 'Adulto', 'Anciano', 'Adolescente'], respuesta: 0 },
            { japones: 'の癖に', lectura: 'no kuse ni', opciones: ['A pesar de / Para ser', 'Debido a', 'Gracias a', 'Por culpa de'], respuesta: 0 },
            { japones: 'メスの', lectura: 'mesu no', opciones: ['De hembra', 'De macho', 'De neutro', 'De ambos'], respuesta: 0 },
            { japones: 'プンプン', lectura: 'punpun', opciones: ['Olor fuerte', 'Sin olor', 'Olor dulce', 'Olor suave'], respuesta: 0 },
            { japones: 'しやがる', lectura: 'shiyagaru', opciones: ['Hace (grosero)', 'No hace', 'Podría hacer', 'Deja de hacer'], respuesta: 0 },
            { japones: 'うんまっ', lectura: 'unma', opciones: ['Delicioso (coloquial)', 'Asqueroso', 'Normal', 'Amargo'], respuesta: 0 },
            { japones: '把握しとかんとな', lectura: 'haaku shitokan to na', opciones: ['Tengo que comprobar / entender', 'Puedo ignorar', 'Debo olvidar', 'Voy a evitar'], respuesta: 0 },
            { japones: 'だいぶ', lectura: 'daibu', opciones: ['Bastante / Considerablemente', 'Poco', 'Nada', 'Demasiado'], respuesta: 0 },
            { japones: 'ほぐれてきた', lectura: 'hogurete kita', opciones: ['Se ha aflojado / relajado', 'Se ha tensado', 'Se ha roto', 'Se ha endurecido'], respuesta: 0 },
            { japones: 'お待ちかねの', lectura: 'omachikane no', opciones: ['El tan esperado', 'El inesperado', 'El olvidado', 'El temido'], respuesta: 0 }
        ],
        
        // MAZO 12
        12: [
            { japones: '初', lectura: 'hatsu', opciones: ['Primera / Inicial', 'Última', 'Intermedia', 'Repetida'], respuesta: 0 },
            { japones: '見とけ', lectura: 'mitoke', opciones: ['Mira (imperativo coloquial)', 'No mires', 'Cierra los ojos', 'Ignora'], respuesta: 0 },
            { japones: 'イキやがった', lectura: 'iki yagatta', opciones: ['Se corrió (grosero)', 'No se corrió', 'Está por correrse', 'Evitó correrse'], respuesta: 0 },
            { japones: '一番最初に', lectura: 'ichiban saisho ni', opciones: ['El primero de todos', 'El último', 'Uno más', 'Ninguno'], respuesta: 0 },
            { japones: '筈だった', lectura: 'hazu datta', opciones: ['Debía haber', 'No debía', 'Podría haber', 'Nunca habría'], respuesta: 0 },
            { japones: 'ところに', lectura: 'tokoro ni', opciones: ['En el lugar / momento', 'Lejos de', 'Antes de', 'Después de'], respuesta: 0 },
            { japones: '取られちゃった', lectura: 'torarechatta', opciones: ['Me lo han quitado', 'Lo conseguí', 'Lo guardé', 'Lo perdí'], respuesta: 0 },
            { japones: '嫌いな', lectura: 'kirai na', opciones: ['Que odio', 'Que amo', 'Que tolero', 'Que ignoro'], respuesta: 0 },
            { japones: '嬉しそうに', lectura: 'ureshiso ni', opciones: ['Con cara de felicidad', 'Tristemente', 'Enojadamente', 'Asustadamente'], respuesta: 0 },
            { japones: '何度も何度も', lectura: 'nando mo nando mo', opciones: ['Muchas veces', 'Una vez', 'Pocas veces', 'Nunca'], respuesta: 0 }
        ],
        
        // MAZO 13
        13: [
            { japones: '出入りしてくる', lectura: 'deiri shite kuru', opciones: ['Entra y sale', 'Se queda quieto', 'Solo entra', 'Solo sale'], respuesta: 0 },
            { japones: '処女マン', lectura: 'shojoman', opciones: ['Coño virgen (vulgar)', 'Coño experimentado', 'Pene virgen', 'Pene experimentado'], respuesta: 0 },
            { japones: 'しっかり', lectura: 'shikkari', opciones: ['Firmemente / Bien', 'Débilmente', 'Superficialmente', 'Inseguramente'], respuesta: 0 },
            { japones: '感覚を', lectura: 'kankaku o', opciones: ['La sensación', 'El pensamiento', 'La memoria', 'La visión'], respuesta: 0 },
            { japones: '覚えるんだぞ', lectura: 'oboeru n da zo', opciones: ['Grábate / Recuerda', 'Olvida', 'Ignora', 'Cuestiona'], respuesta: 0 },
            { japones: 'これから先', lectura: 'korekara saki', opciones: ['De ahora en adelante', 'Hasta ahora', 'En el pasado', 'Solo ahora'], respuesta: 0 },
            { japones: '他の男と', lectura: 'hoka no otoko to', opciones: ['Con otros hombres', 'Sola', 'Con mujeres', 'Con amigos'], respuesta: 0 },
            { japones: 'ヤっても', lectura: 'yatte mo', opciones: ['Aunque folles', 'Si no follas', 'Porque follas', 'Mientras follas'], respuesta: 0 },
            { japones: '俺との', lectura: 'ore to no', opciones: ['Conmigo', 'Con él', 'Con ellos', 'Con nadie'], respuesta: 0 },
            { japones: 'セックスの方が', lectura: 'sekkusu no hō ga', opciones: ['El sexo (comparativo)', 'El amor', 'La amistad', 'El trabajo'], respuesta: 0 }
        ],
        
        // MAZO 14
        14: [
            { japones: '気持ち良かった', lectura: 'kimochi yokatta', opciones: ['Fue mejor / Más placentero', 'Fue peor', 'Fue igual', 'Fue doloroso'], respuesta: 0 },
            { japones: '思い出すように', lectura: 'omoidasu yō ni', opciones: ['Para que recuerdes', 'Para que olvides', 'Para que ignores', 'Para que cuestiones'], respuesta: 0 },
            { japones: '仕込んでやる', lectura: 'shikonde yaru', opciones: ['Te lo voy a grabar / enseñar', 'Te lo voy a olvidar', 'Te lo voy a ocultar', 'Te lo voy a prohibir'], respuesta: 0 },
            { japones: '会ったら', lectura: 'attara', opciones: ['Si me encuentro', 'Si no me encuentro', 'Aunque me encuentre', 'Porque me encuentro'], respuesta: 0 },
            { japones: 'いいんだろう', lectura: 'ii n darō', opciones: ['Estará bien / Podré', 'No estará bien', 'Será terrible', 'Será imposible'], respuesta: 0 },
            { japones: '溜めすぎて', lectura: 'tamesugite', opciones: ['Por guardármelo demasiado', 'Por no guardar nada', 'Por compartirlo', 'Por gastarlo'], respuesta: 0 },
            { japones: 'アガってきた', lectura: 'aga kite kita', opciones: ['Está subiendo / Excitándose', 'Está bajando', 'Está estable', 'Está desapareciendo'], respuesta: 0 },
            { japones: 'だめだ', lectura: 'dame da', opciones: ['No aguanto', 'Aguanto', 'Podría aguantar', 'Nunca aguanto'], respuesta: 0 },
            { japones: '一週間ぶりの', lectura: 'isshūkan buri no', opciones: ['Después de una semana', 'Después de un día', 'Después de un mes', 'Por primera vez'], respuesta: 0 },
            { japones: 'なっげぇ', lectura: 'naggee', opciones: ['Larga (coloquial)', 'Corta', 'Media', 'Infinita'], respuesta: 0 }
        ],
        
        // MAZO 15
        15: [
            { japones: '類の出る', lectura: 'rui no deru', opciones: ['Sale más (del mismo tipo)', 'Sale menos', 'No sale nada', 'Sale diferente'], respuesta: 0 },
            { japones: '後', lectura: 'ato', opciones: ['Después', 'Antes', 'Durante', 'Mientras'], respuesta: 0 },
            { japones: '愛情', lectura: 'aijō', opciones: ['Cariño / Amor', 'Odio', 'Indiferencia', 'Respeto'], respuesta: 0 },
            { japones: '込め', lectura: 'kome', opciones: ['Poniendo', 'Sacando', 'Moviendo', 'Girando'], respuesta: 0 },
            { japones: 'むずむず', lectura: 'muzumuzu', opciones: ['Picor o insatisfacción', 'Satisfacción', 'Calma', 'Dolor'], respuesta: 0 },
            { japones: '物足りな', lectura: 'monotarina', opciones: ['Insatisfactoria', 'Satisfactoria', 'Excesiva', 'Perfecta'], respuesta: 0 },
            { japones: '出来', lectura: 'deki', opciones: ['Poder hacer', 'No poder', 'Deber hacer', 'Evitar hacer'], respuesta: 0 },
            { japones: '続き', lectura: 'tsuzuki', opciones: ['Continuación', 'Final', 'Inicio', 'Interrupción'], respuesta: 0 },
            { japones: 'ブチ', lectura: 'buchi', opciones: ['Brutalmente', 'Suavemente', 'Lentamente', 'Rápidamente'], respuesta: 0 },
            { japones: '我ながら', lectura: 'warenagara', opciones: ['Aunque lo diga yo mismo', 'Aunque lo diga otro', 'Porque lo digo yo', 'Si lo digo yo'], respuesta: 0 }
        ]
    },

    
    // ================================================
    // CONTENEDOR 2 (NUEVO)
    // ================================================
    
// Sub-contenedor 2.1 (NUEVO)
'sub2_1': {
    // MAZOS NORMALES
    1: [
        { japones: '小説', lectura: 'shousetsu', opciones: ['Novela', 'Poesía', 'Ensayo', 'Teatro'], respuesta: 0 },
        { japones: '現代の', lectura: 'gendai no', opciones: ['Contemporáneo/moderno', 'Antiguo', 'Futurista', 'Medieval'], respuesta: 0 },
        { japones: '正社員', lectura: 'seishain', opciones: ['Empleado fijo', 'Empleado temporal', 'Freelance', 'Desempleado'], respuesta: 0 },
        { japones: '通して', lectura: 'tooshite', opciones: ['A través de/por medio de', 'A pesar de', 'Debido a', 'Antes de'], respuesta: 0 },
        { japones: '疑問に思いました', lectura: 'gimon ni omoimashita', opciones: ['Me pregunté/tuve dudas', 'Estaba seguro', 'Me emocioné', 'Me asusté'], respuesta: 0 },
        { japones: '共感できる', lectura: 'kyoukan dekiru', opciones: ['Poder identificarse con', 'No entender', 'Discrepar', 'Ignorar'], respuesta: 0 },
        { japones: '扱っている', lectura: 'atsukatteiru', opciones: ['Tratando/manejando', 'Ignorando', 'Destruyendo', 'Creando'], respuesta: 0 },
        { japones: '挟まれ', lectura: 'hasamare', opciones: ['Estar atrapado entre', 'Ser liberado de', 'Elevarse por encima', 'Separarse de'], respuesta: 0 },
        { japones: '性夜', lectura: 'seiya', opciones: ['Noche sexual', 'Día de trabajo', 'Mañana tranquila', 'Tarde lluviosa'], respuesta: 0 },
        { japones: '様々な', lectura: 'samazama na', opciones: ['Varios/diversos', 'Único', 'Pocos', 'Similares'], respuesta: 0 }
    ],
    
    // MAZO 2 - Palabras nuevas (parte 1)
    2: [
        { japones: '新刊', lectura: 'shinkan', opciones: ['Nueva publicación', 'Libro antiguo', 'Artículo usado', 'Borrador'], respuesta: 0 },
        { japones: 'かなり', lectura: 'kanari', opciones: ['Bastante / Muy', 'Un poco', 'Casi no', 'Absolutamente'], respuesta: 0 },
        { japones: '厳しい', lectura: 'kibishii', opciones: ['Estricto / Difícil / Ajustado', 'Fácil', 'Flexible', 'Generoso'], respuesta: 0 },
        { japones: '間に', lectura: 'mani', opciones: ['A tiempo', 'Tarde', 'Demasiado pronto', 'Fuera de plazo'], respuesta: 0 },
        { japones: '合わなかった', lectura: 'awanakatta', opciones: ['No llegó / No coincidió', 'Llegó perfecto', 'Se retrasó', 'Se canceló'], respuesta: 0 },
        { japones: '場合', lectura: 'baai', opciones: ['Caso / Situación', 'Excepción', 'Regla', 'Problema'], respuesta: 0 },
        { japones: 'マシ', lectura: 'mashi', opciones: ['Mejor (que nada)', 'Peor', 'Igual', 'Inaceptable'], respuesta: 0 },
        { japones: '現状', lectura: 'genjō', opciones: ['Situación actual', 'Situación pasada', 'Expectativas futuras', 'Plan ideal'], respuesta: 0 },
        { japones: 'お見せ', lectura: 'o mise', opciones: ['Mostrar (honorífico)', 'Esconder', 'Regalar', 'Vender'], respuesta: 0 },
        { japones: '準備本', lectura: 'junbi bon', opciones: ['Libro de preparación', 'Libro final', 'Libro de muestra', 'Libro digital'], respuesta: 0 }
    ],
    
    // MAZO 3 - Palabras nuevas (parte 2)
    3: [
        { japones: '部数', lectura: 'busū', opciones: ['Número de copias', 'Número de páginas', 'Número de capítulos', 'Número de autores'], respuesta: 0 },
        { japones: '少なめ', lectura: 'sukuname', opciones: ['Pocas / En cantidad reducida', 'Abundante', 'Exacto', 'Limitado'], respuesta: 0 },
        { japones: '持っていきます', lectura: 'motte ikimasu', opciones: ['Llevaré / Iré llevando', 'Dejaré', 'Olvidaré', 'Enviaré'], respuesta: 0 },
        { japones: '完成', lectura: 'kansei', opciones: ['Completado / Terminado', 'Empezado', 'Cancelado', 'Pospuesto'], respuesta: 0 },
        { japones: '通販', lectura: 'tsūhan', opciones: ['Venta por correo / Online', 'Venta en tienda', 'Subasta', 'Alquiler'], respuesta: 0 },
        { japones: 'お求め', lectura: 'o motome', opciones: ['Buscar / Querer comprar (honorífico)', 'Regatear', 'Devolver', 'Reservar'], respuesta: 0 },
        { japones: 'そちら', lectura: 'sochira', opciones: ['Eso / Allí', 'Aquí / Esto', 'Más allá', 'En todas partes'], respuesta: 0 },
        { japones: 'ご利用', lectura: 'go riyō', opciones: ['Usar (honorífico)', 'Descartar', 'Compartir', 'Guardar'], respuesta: 0 }
    ],
4: [
        { japones: 'モテモテ', lectura: 'motemote', opciones: ['Muy popular (con el sexo opuesto)', 'Impopular', 'Promedio', 'Famoso profesionalmente'], respuesta: 0 },
        { japones: '帰省', lectura: 'kisei', opciones: ['Regreso a casa (por vacaciones)', 'Viaje de negocios', 'Viaje al extranjero', 'Excursión'], respuesta: 0 },
        { japones: '更新', lectura: 'kōshin', opciones: ['Actualización', 'Cancelación', 'Suspensión', 'Creación inicial'], respuesta: 0 },
        { japones: '概念', lectura: 'gainen', opciones: ['Concepto', 'Detalle', 'Ejemplo', 'Realidad concreta'], respuesta: 0 },
        { japones: '会場', lectura: 'kaijō', opciones: ['Recinto / Lugar del evento', 'Oficina', 'Casa', 'Tienda'], respuesta: 0 },
        { japones: '頒布', lectura: 'hanpu', opciones: ['Distribución (especialmente doujinshi)', 'Venta minorista', 'Alquiler', 'Subasta'], respuesta: 0 },
        { japones: '脱稿', lectura: 'dakkō', opciones: ['Finalización del manuscrito', 'Comienzo del manuscrito', 'Corrección de pruebas', 'Publicación'], respuesta: 0 },
        { japones: '正月', lectura: 'shōgatsu', opciones: ['Año Nuevo japonés', 'Navidad', 'Verano', 'Otoño'], respuesta: 0 },
        { japones: '返上', lectura: 'henjō', opciones: ['Renunciar a / Sacrificar', 'Aceptar', 'Aumentar', 'Mantener'], respuesta: 0 },
        { japones: '報告', lectura: 'hōkoku', opciones: ['Reporte / Informe', 'Propuesta', 'Pregunta', 'Queja'], respuesta: 0 }
    ],
    
    // MAZO 5 - Nuevas palabras (parte 2)
    5: [
        { japones: '表紙', lectura: 'hyōshi', opciones: ['Portada', 'Contraportada', 'Página interior', 'Sobrecubierta'], respuesta: 0 },
        { japones: '雰囲気', lectura: 'fun\'iki', opciones: ['Atmósfera / Ambiente', 'Estructura', 'Contenido', 'Precio'], respuesta: 0 },
        { japones: '人気', lectura: 'ninki', opciones: ['Popularidad', 'Odio', 'Indiferencia', 'Controversia'], respuesta: 0 },
        { japones: '締切', lectura: 'shimekiri', opciones: ['Fecha límite', 'Fecha de inicio', 'Fecha de publicación', 'Fecha de revisión'], respuesta: 0 },
        { japones: '同人誌', lectura: 'dōjinshi', opciones: ['Doujinshi (publicación amateur)', 'Revista comercial', 'Libro de texto', 'Periódico'], respuesta: 0 },
        { japones: '即売会', lectura: 'sokubaikai', opciones: ['Venta directa en evento', 'Venta online', 'Venta por catálogo', 'Subasta'], respuesta: 0 },
        { japones: '原稿', lectura: 'genkō', opciones: ['Manuscrito original', 'Copia impresa', 'Versión digital', 'Borrador'], respuesta: 0 },
        { japones: '出版社', lectura: 'shuppansha', opciones: ['Editorial', 'Librería', 'Biblioteca', 'Impresora'], respuesta: 0 },
        { japones: '読者', lectura: 'dokusha', opciones: ['Lector', 'Autor', 'Editor', 'Crítico'], respuesta: 0 },
        { japones: '評価', lectura: 'hyōka', opciones: ['Evaluación / Crítica', 'Venta', 'Producción', 'Distribución'], respuesta: 0 }
    ],
    
    // MAZO 6 - Nuevas palabras (parte 3 - vocabulario editorial adicional)
    6: [
        { japones: '校了', lectura: 'kōryō', opciones: ['Finalización de correcciones', 'Inicio de escritura', 'Primer borrador', 'Distribución'], respuesta: 0 },
        { japones: '初版', lectura: 'shohan', opciones: ['Primera edición', 'Reimpresión', 'Edición especial', 'Edición digital'], respuesta: 0 },
        { japones: '重版', lectura: 'jūhan', opciones: ['Reimpresión', 'Primera edición', 'Edición agotada', 'Cancelación'], respuesta: 0 },
        { japones: '帯', lectura: 'obi', opciones: ['Faja del libro', 'Portada', 'Lomo', 'Contraportada'], respuesta: 0 },
        { japones: '宣伝', lectura: 'senden', opciones: ['Publicidad / Promoción', 'Producción', 'Distribución', 'Venta'], respuesta: 0 },
        { japones: '印税', lectura: 'inzei', opciones: ['Regalías (del autor)', 'Salario fijo', 'Pago por proyecto', 'Donación'], respuesta: 0 },
        { japones: '文庫', lectura: 'bunko', opciones: ['Edición de bolsillo', 'Edición de lujo', 'Edición digital', 'Edición limitada'], respuesta: 0 },
        { japones: '新書', lectura: 'shinsho', opciones: ['Libro nuevo / Formato específico', 'Libro usado', 'Revista', 'Periódico'], respuesta: 0 },
        { japones: '単行本', lectura: 'tankōbon', opciones: ['Volumen individual', 'Serie completa', 'Revista', 'E-book'], respuesta: 0 },
        { japones: '書店', lectura: 'shoten', opciones: ['Librería', 'Biblioteca', 'Editorial', 'Imprenta'], respuesta: 0 }
    ],
    
    // ====================
    // MAZOS DIFÍCILES ESPECIALES - Subcontenedor 2.1
    // ====================
    
    'D1': [
        { japones: '文学用語', lectura: 'bungaku yougo', opciones: ['Términos literarios', 'Términos científicos', 'Jerga juvenil', 'Términos técnicos'], respuesta: 0 },
        { japones: '比喩表現', lectura: 'hiyu hyougen', opciones: ['Expresiones metafóricas', 'Expresiones literales', 'Expresiones coloquiales', 'Expresiones formales'], respuesta: 0 },
        { japones: '心理描写', lectura: 'shinri byousha', opciones: ['Descripción psicológica', 'Descripción física', 'Descripción ambiental', 'Descripción histórica'], respuesta: 0 },
        { japones: '登場人物', lectura: 'toujou jinbutsu', opciones: ['Personajes de la obra', 'Autores', 'Editores', 'Críticos'], respuesta: 0 },
        { japones: '物語構造', lectura: 'monogatari kouzou', opciones: ['Estructura narrativa', 'Diseño de portada', 'Tipo de letra', 'Formato de publicación'], respuesta: 0 },
        { japones: '社会批判', lectura: 'shakai hihan', opciones: ['Crítica social', 'Elogio social', 'Indiferencia social', 'Participación social'], respuesta: 0 },
        { japones: '文体', lectura: 'buntai', opciones: ['Estilo de escritura', 'Contenido', 'Tema', 'Longitud'], respuesta: 0 },
        { japones: '視点', lectura: 'shiten', opciones: ['Punto de vista', 'Conclusión', 'Introducción', 'Epílogo'], respuesta: 0 },
        { japones: '象徴', lectura: 'shouchou', opciones: ['Símbolo', 'Personaje', 'Escenario', 'Diálogo'], respuesta: 0 },
        { japones: 'モチーフ', lectura: 'mochiifu', opciones: ['Motivo recurrente', 'Personaje principal', 'Título', 'Autor'], respuesta: 0 }
    ]
},
// ================================================
// CONTENEDOR 3 (NUEVO) - VOCABULARIO ESPECÍFICO
// ================================================

// Sub-contenedor 3.1 (NUEVO)
'sub3_1': {
    // MAZO 1 - Animales y términos básicos
    1: [
        { japones: '種牛', lectura: 'taneushi', opciones: ['Toro semental', 'Vaca lechera', 'Becerro', 'Caballo'], respuesta: 0 },
        { japones: '牝牛', lectura: 'mesuushi', opciones: ['Vaca hembra', 'Toro', 'Oveja', 'Cabra'], respuesta: 0 },
        { japones: '乳搾', lectura: 'chichishibori', opciones: ['Ordeño de pechos', 'Alimentación', 'Crianza', 'Transporte'], respuesta: 0 },
        { japones: '溢美', lectura: 'Yumi', opciones: ['Yumi (nombre)', 'Sakura', 'Hana', 'Aki'], respuesta: 0 },
        { japones: 'ズリズリ', lectura: 'zurizuri', opciones: ['Onomatopeya de masturbación', 'Sonido de lluvia', 'Ruido de pasos', 'Canto de pájaros'], respuesta: 0 },
        { japones: '種子', lectura: 'shushi', opciones: ['Semilla / Semen', 'Flor', 'Fruto', 'Raíz'], respuesta: 0 },
        { japones: '射精', lectura: 'shasei', opciones: ['Eyaculación', 'Orina', 'Sudor', 'Sangre'], respuesta: 0 },
        { japones: 'シコチャ', lectura: 'shikocha', opciones: ['Chat de masturbación', 'Chat de cocina', 'Chat de estudio', 'Chat de deportes'], respuesta: 0 },
        { japones: '推し', lectura: 'oshi', opciones: ['Favorita / Ídolo', 'Enemiga', 'Compañera', 'Desconocida'], respuesta: 0 },
        { japones: '系', lectura: 'kei', opciones: ['Estilo / Tipo', 'Color', 'Tamaño', 'Edad'], respuesta: 0 }
    ],
    
    // MAZO 2 - Streamers y terminología
    2: [
        { japones: '配信者', lectura: 'haishinsha', opciones: ['Streamer', 'Youtuber', 'Actor', 'Cantante'], respuesta: 0 },
        { japones: '恒例', lectura: 'kōrei', opciones: ['Habitual / Tradicional', 'Excepcional', 'Nuevo', 'Raro'], respuesta: 0 },
        { japones: '先週', lectura: 'senshū', opciones: ['Semana pasada', 'Esta semana', 'Próxima semana', 'Hace un mes'], respuesta: 0 },
        { japones: 'ヒップ', lectura: 'hippu', opciones: ['Caderas', 'Hombros', 'Rodillas', 'Tobillos'], respuesta: 0 },
        { japones: '増え', lectura: 'fue', opciones: ['Aumentar', 'Disminuir', 'Estable', 'Desaparecer'], respuesta: 0 },
        { japones: '食い込ん', lectura: 'kuikun', opciones: ['Clavarse / Penetrar', 'Salir', 'Flotar', 'Deslizar'], respuesta: 0 },
        { japones: 'ウエスト', lectura: 'uesuto', opciones: ['Cintura', 'Cuello', 'Muñeca', 'Tobillo'], respuesta: 0 },
        { japones: 'バスト', lectura: 'basuto', opciones: ['Busto', 'Espalda', 'Abdomen', 'Piernas'], respuesta: 0 },
        { japones: '企画', lectura: 'kikaku', opciones: ['Proyecto / Planning', 'Ejecución', 'Evaluación', 'Cancelación'], respuesta: 0 },
        { japones: '竿役', lectura: 'saoyaku', opciones: ['Actor masculino en AV', 'Actor de teatro', 'Actor de cine', 'Actor de voz'], respuesta: 0 }
    ],
    
    // MAZO 3 - Nuevas palabras (parte 1)
    3: [
        { japones: '決まっ', lectura: 'kimat', opciones: ['Decidido / Determinado', 'Indeciso', 'Cancelado', 'Posponido'], respuesta: 0 },
        { japones: '応募', lectura: 'ōbo', opciones: ['Solicitud / Aplicación', 'Rechazo', 'Aceptación', 'Renuncia'], respuesta: 0 },
        { japones: '数', lectura: 'sū', opciones: ['Número', 'Letra', 'Símbolo', 'Color'], respuesta: 0 },
        { japones: '硬く', lectura: 'kataku', opciones: ['Duro', 'Blando', 'Flexible', 'Frágil'], respuesta: 0 },
        { japones: '黒光り', lectura: 'kurokagayaki', opciones: ['Brillo negro / Lustroso negro', 'Opaco negro', 'Blanco brillante', 'Color mate'], respuesta: 0 },
        { japones: '搾乳', lectura: 'sakunyū', opciones: ['Ordeño', 'Alimentación', 'Limpieza', 'Transporte'], respuesta: 0 },
        { japones: 'ターイム', lectura: 'tāimu', opciones: ['Time (tiempo)', 'Pausa', 'Fin', 'Comienzo'], respuesta: 0 },
        { japones: 'ぱんぱん', lectura: 'panpan', opciones: ['Lleno a reventar', 'Vacío', 'Medio lleno', 'Casi vacío'], respuesta: 0 },
        { japones: '搾っ', lectura: 'shibor', opciones: ['Ordeñar / Exprimir', 'Beber', 'Verter', 'Guardar'], respuesta: 0 },
        { japones: '詰まっ', lectura: 'tsumat', opciones: ['Atascado / Lleno', 'Vacío', 'Fluyendo', 'Abierto'], respuesta: 0 }
    ],
    
    // MAZO 4 - Nuevas palabras (parte 2)
    4: [
        { japones: '搾れる', lectura: 'shiboreru', opciones: ['Poder ordeñar', 'No poder ordeñar', 'Beber leche', 'Derramar leche'], respuesta: 0 },
        { japones: '予感', lectura: 'yokan', opciones: ['Presentimiento', 'Memoria', 'Hecho', 'Realidad'], respuesta: 0 },
        { japones: '兄貴', lectura: 'Aniki', opciones: ['Hermano mayor', 'Hermano menor', 'Padre', 'Tío'], respuesta: 0 },
        { japones: '牛乳', lectura: 'gyūnyū', opciones: ['Leche (de vaca)', 'Agua', 'Jugo', 'Cerveza'], respuesta: 0 },
        { japones: 'ながら', lectura: 'nagara', opciones: ['Mientras', 'Antes', 'Después', 'Durante'], respuesta: 0 },
        { japones: '5倍', lectura: 'go-bai', opciones: ['5 veces', '2 veces', '10 veces', 'Mitad'], respuesta: 0 },
        { japones: '最悪', lectura: 'saiaku', opciones: ['Lo peor / Fatal', 'Lo mejor', 'Normal', 'Regular'], respuesta: 0 },
        { japones: 'おじゃまします', lectura: 'ojamashimasu', opciones: ['Disculpe la molestia', 'Hola', 'Adiós', 'Gracias'], respuesta: 0 },
        { japones: '挨拶', lectura: 'aisatsu', opciones: ['Saludo', 'Despedida', 'Pregunta', 'Respuesta'], respuesta: 0 },
        { japones: '奴', lectura: 'yatsu', opciones: ['Tipo / Sujeto', 'Amigo', 'Enemigo', 'Extraño'], respuesta: 0 }
    ],
    
    // MAZO 5 - Nuevas palabras (parte 3)
    5: [
        { japones: '玲奈', lectura: 'Reina', opciones: ['Reina (nombre)', 'Yumi', 'Sakura', 'Miku'], respuesta: 0 },
        { japones: '居たんだ', lectura: 'itanda', opciones: ['Estaba (enfático)', 'Irá', 'Venía', 'Salió'], respuesta: 0 },
        { japones: '黒歴史', lectura: 'kurorekishi', opciones: ['Black history (pasado vergonzoso)', 'Historia gloriosa', 'Futuro prometedor', 'Presente feliz'], respuesta: 0 },
        { japones: 'ツヤツヤ', lectura: 'tsuyatsuya', opciones: ['Brillante / Lustroso', 'Opaco', 'Rugoso', 'Seco'], respuesta: 0 },
        { japones: '目下', lectura: 'mokka', opciones: ['Justo debajo del ojo', 'Frente', 'Mejilla', 'Barbilla'], respuesta: 0 },
        { japones: 'ほくろ', lectura: 'hokuro', opciones: ['Lunar / Topo', 'Cicatriz', 'Arruga', 'Pecas'], respuesta: 0 },
        { japones: 'クリっと', lectura: 'kuritto', opciones: ['Redondo y brillante', 'Cuadrado y opaco', 'Ovalado y mate', 'Triangular'], respuesta: 0 },
        { japones: '瞳', lectura: 'hitomi', opciones: ['Pupilas / Ojos', 'Nariz', 'Boca', 'Orejas'], respuesta: 0 },
        { japones: '色素', lectura: 'shikiso', opciones: ['Pigmento', 'Agua', 'Aceite', 'Proteína'], respuesta: 0 },
        { japones: '薄い', lectura: 'usui', opciones: ['Tenue / Diluido', 'Espesor', 'Concentrado', 'Oscuro'], respuesta: 0 }
    ],
    
    // MAZO 6 - Nuevas palabras (parte 4)
    6: [
        { japones: '色白', lectura: 'irojiro', opciones: ['Piel clara / Pálida', 'Piel oscura', 'Piel bronceada', 'Piel rojiza'], respuesta: 0 },
        { japones: '肌', lectura: 'hada', opciones: ['Piel', 'Hueso', 'Músculo', 'Grasa'], respuesta: 0 },
        { japones: 'まつ毛', lectura: 'matsuge', opciones: ['Pestañas', 'Cejas', 'Cabello', 'Vello corporal'], respuesta: 0 },
        { japones: '溢れん', lectura: 'afuren', opciones: ['A punto de desbordar', 'Completamente vacío', 'A la mitad', 'Goteando'], respuesta: 0 },
        { japones: 'ばかり', lectura: 'bakari', opciones: ['Tanto que / Hasta el punto de', 'Un poco', 'Nada', 'Exactamente'], respuesta: 0 },
        { japones: '爆乳', lectura: 'bakunyū', opciones: ['Pechos explosivos / Enormes', 'Pechos pequeños', 'Pechos medianos', 'Pechos planos'], respuesta: 0 },
        { japones: '間違い', lectura: 'machigai', opciones: ['Error', 'Acierto', 'Duda', 'Certera'], respuesta: 0 }
    
    ],

    // ====================
    // MAZOS DIFÍCILES ESPECIALES - Subcontenedor 3.1
    // ====================
    
    'D1': [
        { japones: '文学用語', lectura: 'bungaku yougo', opciones: ['Términos literarios', 'Términos científicos', 'Jerga juvenil', 'Términos técnicos'], respuesta: 0 },
        { japones: '比喩表現', lectura: 'hiyu hyougen', opciones: ['Expresiones metafóricas', 'Expresiones literales', 'Expresiones coloquiales', 'Expresiones formales'], respuesta: 0 },
        { japones: '心理描写', lectura: 'shinri byousha', opciones: ['Descripción psicológica', 'Descripción física', 'Descripción ambiental', 'Descripción histórica'], respuesta: 0 },
        { japones: '登場人物', lectura: 'toujou jinbutsu', opciones: ['Personajes de la obra', 'Autores', 'Editores', 'Críticos'], respuesta: 0 },
        { japones: '物語構造', lectura: 'monogatari kouzou', opciones: ['Estructura narrativa', 'Diseño de portada', 'Tipo de letra', 'Formato de publicación'], respuesta: 0 },
        { japones: '社会批判', lectura: 'shakai hihan', opciones: ['Crítica social', 'Elogio social', 'Indiferencia social', 'Participación social'], respuesta: 0 },
        { japones: '文体', lectura: 'buntai', opciones: ['Estilo de escritura', 'Contenido', 'Tema', 'Longitud'], respuesta: 0 },
        { japones: '視点', lectura: 'shiten', opciones: ['Punto de vista', 'Conclusión', 'Introducción', 'Epílogo'], respuesta: 0 },
        { japones: '象徴', lectura: 'shouchou', opciones: ['Símbolo', 'Personaje', 'Escenario', 'Diálogo'], respuesta: 0 },
        { japones: 'モチーフ', lectura: 'mochiifu', opciones: ['Motivo recurrente', 'Personaje principal', 'Título', 'Autor'], respuesta: 0 }
    ]
},
// ================================================
// CONTENEDOR 3 (NUEVO) - VOCABULARIO ESPECÍFICO
// ================================================

// Sub-contenedor 3.2 (NUEVO)
'sub3_2': {
    // MAZO 1 - Animales y términos básicos
    1: [
        { japones: '部活', lectura: 'bukatsu', opciones: ['Club de actividades extracurriculares', 'Clase principal', 'Tiempo libre', 'Reunión familiar'], respuesta: 0 },
        { japones: '余った', lectura: 'amatta', opciones: ['Sobró', 'Faltó', 'Se perdió', 'Se compró'], respuesta: 0 },
        { japones: '毎回', lectura: 'maikai', opciones: ['Cada vez', 'A veces', 'La primera vez', 'La última vez'], respuesta: 0 },
        { japones: '貰って', lectura: 'moratte', opciones: ['Recibiendo', 'Dando', 'Vendiendo', 'Buscando'], respuesta: 0 },
        { japones: '申し訳ない', lectura: 'mōshiwakenai', opciones: ['Lo siento / Inexcusable', 'Gracias', 'Hola', 'Adiós'], respuesta: 0 },
        { japones: '残念', lectura: 'zannen', opciones: ['Lamentable / Desafortunado', 'Feliz', 'Aburrido', 'Interesante'], respuesta: 0 },
        { japones: 'ながら', lectura: 'nagara', opciones: ['Aunque / Mientras', 'Después', 'Antes', 'Porque'], respuesta: 0 },
        { japones: 'お菓子', lectura: 'okashi', opciones: ['Dulces / Snacks', 'Comida principal', 'Bebidas', 'Fruta'], respuesta: 0 },
        { japones: '渡す', lectura: 'watasu', opciones: ['Entregar / Pasar', 'Recibir', 'Esconder', 'Romper'], respuesta: 0 },
        { japones: '口実', lectura: 'kōjitsu', opciones: ['Pretexto / Excusa', 'Verdad', 'Promesa', 'Secreto'], respuesta: 0 }
    ],
    
    // MAZO 2 - Streamers y terminología
    2: [
        { japones: '配信者', lectura: 'haishinsha', opciones: ['Streamer', 'Youtuber', 'Actor', 'Cantante'], respuesta: 0 },
        { japones: '恒例', lectura: 'kōrei', opciones: ['Habitual / Tradicional', 'Excepcional', 'Nuevo', 'Raro'], respuesta: 0 },
        { japones: '先週', lectura: 'senshū', opciones: ['Semana pasada', 'Esta semana', 'Próxima semana', 'Hace un mes'], respuesta: 0 },
        { japones: 'ヒップ', lectura: 'hippu', opciones: ['Caderas', 'Hombros', 'Rodillas', 'Tobillos'], respuesta: 0 },
        { japones: '増え', lectura: 'fue', opciones: ['Aumentar', 'Disminuir', 'Estable', 'Desaparecer'], respuesta: 0 },
        { japones: '食い込ん', lectura: 'kuikun', opciones: ['Clavarse / Penetrar', 'Salir', 'Flotar', 'Deslizar'], respuesta: 0 },
        { japones: 'ウエスト', lectura: 'uesuto', opciones: ['Cintura', 'Cuello', 'Muñeca', 'Tobillo'], respuesta: 0 },
        { japones: 'バスト', lectura: 'basuto', opciones: ['Busto', 'Espalda', 'Abdomen', 'Piernas'], respuesta: 0 },
        { japones: '企画', lectura: 'kikaku', opciones: ['Proyecto / Planning', 'Ejecución', 'Evaluación', 'Cancelación'], respuesta: 0 },
        { japones: '竿役', lectura: 'saoyaku', opciones: ['Actor masculino en AV', 'Actor de teatro', 'Actor de cine', 'Actor de voz'], respuesta: 0 }
    ],
    
    // MAZO 3 - Nuevas palabras (parte 1)
    3: [
        { japones: '決まっ', lectura: 'kimat', opciones: ['Decidido / Determinado', 'Indeciso', 'Cancelado', 'Posponido'], respuesta: 0 },
        { japones: '応募', lectura: 'ōbo', opciones: ['Solicitud / Aplicación', 'Rechazo', 'Aceptación', 'Renuncia'], respuesta: 0 },
        { japones: '数', lectura: 'sū', opciones: ['Número', 'Letra', 'Símbolo', 'Color'], respuesta: 0 },
        { japones: '硬く', lectura: 'kataku', opciones: ['Duro', 'Blando', 'Flexible', 'Frágil'], respuesta: 0 },
        { japones: '黒光り', lectura: 'kurokagayaki', opciones: ['Brillo negro / Lustroso negro', 'Opaco negro', 'Blanco brillante', 'Color mate'], respuesta: 0 },
        { japones: '搾乳', lectura: 'sakunyū', opciones: ['Ordeño', 'Alimentación', 'Limpieza', 'Transporte'], respuesta: 0 },
        { japones: 'ターイム', lectura: 'tāimu', opciones: ['Time (tiempo)', 'Pausa', 'Fin', 'Comienzo'], respuesta: 0 },
        { japones: 'ぱんぱん', lectura: 'panpan', opciones: ['Lleno a reventar', 'Vacío', 'Medio lleno', 'Casi vacío'], respuesta: 0 },
        { japones: '搾っ', lectura: 'shibor', opciones: ['Ordeñar / Exprimir', 'Beber', 'Verter', 'Guardar'], respuesta: 0 },
        { japones: '詰まっ', lectura: 'tsumat', opciones: ['Atascado / Lleno', 'Vacío', 'Fluyendo', 'Abierto'], respuesta: 0 }
    ],
    
    // MAZO 4 - Nuevas palabras (parte 2)
    4: [
        { japones: '搾れる', lectura: 'shiboreru', opciones: ['Poder ordeñar', 'No poder ordeñar', 'Beber leche', 'Derramar leche'], respuesta: 0 },
        { japones: '予感', lectura: 'yokan', opciones: ['Presentimiento', 'Memoria', 'Hecho', 'Realidad'], respuesta: 0 },
        { japones: '兄貴', lectura: 'Aniki', opciones: ['Hermano mayor', 'Hermano menor', 'Padre', 'Tío'], respuesta: 0 },
        { japones: '牛乳', lectura: 'gyūnyū', opciones: ['Leche (de vaca)', 'Agua', 'Jugo', 'Cerveza'], respuesta: 0 },
        { japones: 'ながら', lectura: 'nagara', opciones: ['Mientras', 'Antes', 'Después', 'Durante'], respuesta: 0 },
        { japones: '5倍', lectura: 'go-bai', opciones: ['5 veces', '2 veces', '10 veces', 'Mitad'], respuesta: 0 },
        { japones: '最悪', lectura: 'saiaku', opciones: ['Lo peor / Fatal', 'Lo mejor', 'Normal', 'Regular'], respuesta: 0 },
        { japones: 'おじゃまします', lectura: 'ojamashimasu', opciones: ['Disculpe la molestia', 'Hola', 'Adiós', 'Gracias'], respuesta: 0 },
        { japones: '挨拶', lectura: 'aisatsu', opciones: ['Saludo', 'Despedida', 'Pregunta', 'Respuesta'], respuesta: 0 },
        { japones: '奴', lectura: 'yatsu', opciones: ['Tipo / Sujeto', 'Amigo', 'Enemigo', 'Extraño'], respuesta: 0 }
    ],
    
    // MAZO 5 - Nuevas palabras (parte 3)
    5: [
        { japones: '玲奈', lectura: 'Reina', opciones: ['Reina (nombre)', 'Yumi', 'Sakura', 'Miku'], respuesta: 0 },
        { japones: '居たんだ', lectura: 'itanda', opciones: ['Estaba (enfático)', 'Irá', 'Venía', 'Salió'], respuesta: 0 },
        { japones: '黒歴史', lectura: 'kurorekishi', opciones: ['Black history (pasado vergonzoso)', 'Historia gloriosa', 'Futuro prometedor', 'Presente feliz'], respuesta: 0 },
        { japones: 'ツヤツヤ', lectura: 'tsuyatsuya', opciones: ['Brillante / Lustroso', 'Opaco', 'Rugoso', 'Seco'], respuesta: 0 },
        { japones: '目下', lectura: 'mokka', opciones: ['Justo debajo del ojo', 'Frente', 'Mejilla', 'Barbilla'], respuesta: 0 },
        { japones: 'ほくろ', lectura: 'hokuro', opciones: ['Lunar / Topo', 'Cicatriz', 'Arruga', 'Pecas'], respuesta: 0 },
        { japones: 'クリっと', lectura: 'kuritto', opciones: ['Redondo y brillante', 'Cuadrado y opaco', 'Ovalado y mate', 'Triangular'], respuesta: 0 },
        { japones: '瞳', lectura: 'hitomi', opciones: ['Pupilas / Ojos', 'Nariz', 'Boca', 'Orejas'], respuesta: 0 },
        { japones: '色素', lectura: 'shikiso', opciones: ['Pigmento', 'Agua', 'Aceite', 'Proteína'], respuesta: 0 },
        { japones: '薄い', lectura: 'usui', opciones: ['Tenue / Diluido', 'Espesor', 'Concentrado', 'Oscuro'], respuesta: 0 }
    ],
    
    // MAZO 6 - Nuevas palabras (parte 4)
    6: [
        { japones: '色白', lectura: 'irojiro', opciones: ['Piel clara / Pálida', 'Piel oscura', 'Piel bronceada', 'Piel rojiza'], respuesta: 0 },
        { japones: '肌', lectura: 'hada', opciones: ['Piel', 'Hueso', 'Músculo', 'Grasa'], respuesta: 0 },
        { japones: 'まつ毛', lectura: 'matsuge', opciones: ['Pestañas', 'Cejas', 'Cabello', 'Vello corporal'], respuesta: 0 },
        { japones: '溢れん', lectura: 'afuren', opciones: ['A punto de desbordar', 'Completamente vacío', 'A la mitad', 'Goteando'], respuesta: 0 },
        { japones: 'ばかり', lectura: 'bakari', opciones: ['Tanto que / Hasta el punto de', 'Un poco', 'Nada', 'Exactamente'], respuesta: 0 },
        { japones: '爆乳', lectura: 'bakunyū', opciones: ['Pechos explosivos / Enormes', 'Pechos pequeños', 'Pechos medianos', 'Pechos planos'], respuesta: 0 },
        { japones: '間違い', lectura: 'machigai', opciones: ['Error', 'Acierto', 'Duda', 'Certera'], respuesta: 0 }
    
    ],

    // ====================
    // MAZOS DIFÍCILES ESPECIALES - Subcontenedor 3.2
    // ====================
    
    'D1': [
        { japones: '文学用語', lectura: 'bungaku yougo', opciones: ['Términos literarios', 'Términos científicos', 'Jerga juvenil', 'Términos técnicos'], respuesta: 0 },
        { japones: '比喩表現', lectura: 'hiyu hyougen', opciones: ['Expresiones metafóricas', 'Expresiones literales', 'Expresiones coloquiales', 'Expresiones formales'], respuesta: 0 },
        { japones: '心理描写', lectura: 'shinri byousha', opciones: ['Descripción psicológica', 'Descripción física', 'Descripción ambiental', 'Descripción histórica'], respuesta: 0 },
        { japones: '登場人物', lectura: 'toujou jinbutsu', opciones: ['Personajes de la obra', 'Autores', 'Editores', 'Críticos'], respuesta: 0 },
        { japones: '物語構造', lectura: 'monogatari kouzou', opciones: ['Estructura narrativa', 'Diseño de portada', 'Tipo de letra', 'Formato de publicación'], respuesta: 0 },
        { japones: '社会批判', lectura: 'shakai hihan', opciones: ['Crítica social', 'Elogio social', 'Indiferencia social', 'Participación social'], respuesta: 0 },
        { japones: '文体', lectura: 'buntai', opciones: ['Estilo de escritura', 'Contenido', 'Tema', 'Longitud'], respuesta: 0 },
        { japones: '視点', lectura: 'shiten', opciones: ['Punto de vista', 'Conclusión', 'Introducción', 'Epílogo'], respuesta: 0 },
        { japones: '象徴', lectura: 'shouchou', opciones: ['Símbolo', 'Personaje', 'Escenario', 'Diálogo'], respuesta: 0 },
        { japones: 'モチーフ', lectura: 'mochiifu', opciones: ['Motivo recurrente', 'Personaje principal', 'Título', 'Autor'], respuesta: 0 }
    ]
}
    
};


// Función para obtener vocabulario (modificada para manejar mazos difíciles)
function obtenerVocabulario(contenedor, subcontenedor, mazo) {
    const key = `sub${contenedor}_${subcontenedor}`;
    
    // Si es un mazo difícil (comienza con 'D')
    if (typeof mazo === 'string' && mazo.startsWith('D')) {
        if (vocabularioDatabase[key] && vocabularioDatabase[key][mazo]) {
            return vocabularioDatabase[key][mazo];
        }
    }
    // Si es un mazo normal (número)
    else if (vocabularioDatabase[key] && vocabularioDatabase[key][mazo]) {
        return vocabularioDatabase[key][mazo];
    }
    
    return []; // Retorna array vacío si no existe
}

// Función especial para obtener solo mazos difíciles de un subcontenedor
function obtenerMazosDificilesSubcontenedor(contenedor, subcontenedor) {
    const key = `sub${contenedor}_${subcontenedor}`;
    const mazosDificiles = [];
    
    if (vocabularioDatabase[key]) {
        Object.keys(vocabularioDatabase[key]).forEach(mazoKey => {
            if (typeof mazoKey === 'string' && mazoKey.startsWith('D')) {
                mazosDificiles.push({
                    id: mazoKey,
                    nombre: `Mazo Difícil ${mazoKey.substring(1)}`,
                    palabras: vocabularioDatabase[key][mazoKey]
                });
            }
        });
    }
    
    return mazosDificiles;
}

// Función para verificar si existe vocabulario disponible
function verificarVocabularioDisponible(contenedor, subcontenedor, mazo) {
    const vocabulario = obtenerVocabulario(contenedor, subcontenedor, mazo);
    return vocabulario && vocabulario.length > 0;
}
