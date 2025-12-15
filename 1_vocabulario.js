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
