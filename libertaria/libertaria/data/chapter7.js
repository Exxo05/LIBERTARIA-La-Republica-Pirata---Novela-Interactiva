// CAPÍTULO 7 — El Último Tesoro
// El desenlace. Tres finales posibles según las decisiones.

const chapter7Scenes = {

  decision_final: {
    image: "camara_documentos",
    text: (flags) => `Última noche en la isla.

Mara te ha dado copias de los documentos clave.
La constitución. Las actas del primer consejo.
La carta de Every a su hermano Benjamin.

${flags?.alianzaConVoss
  ? "Voss tiene su propio cuaderno lleno. Los dos sabéis lo mismo."
  : "Tu cuaderno pesa más que nunca."}

Whitmore llegará a Londres antes que tú.
Moverá sus piezas.

Tienes tres opciones sobre cómo usar lo que tienes.`,
    choices: [
      { text: "Publicarlo todo de golpe, antes de que Whitmore bloquee nada",
        next: "plan_publicar_todo", setFlags: { planFinalPublicar: true } },
      { text: "Publicar solo la existencia de la comunidad, proteger los detalles",
        next: "plan_publicar_parcial", setFlags: { planFinalParcial: true } },
      { text: "Entregar los documentos a instituciones académicas antes de publicar",
        next: "plan_academico", setFlags: { planFinalAcademico: true } }
    ]
  },

  // ── FINAL A: Publicación total ──

  plan_publicar_todo: {
    image: "diarios",
    text: `Vuelves a Londres en veintiocho días.

El barco más rápido que encontraste.
Dormiste cuatro horas por noche.

El artículo lo escribiste en el mar.
Treinta páginas. Con nombres. Con fechas.
Con las coordenadas del símbolo de la cueva.
Con la historia del informante de 1698 y su heredero.

Llega al escritorio de Hartwick un martes por la tarde.

Le ves leerlo. Le ves palidecer.
Le ves entender que esto es lo mejor
que ha publicado su periódico en veinte años.

"Whitmore intentará bloquearlo", dice.

"Lo sé. Por eso lo mandé también al Times.
Y al Manchester Guardian. Y al Edinburgh Review."`,
    choices: [
      { text: "Esperar la reacción", next: "reaccion_publicacion" }
    ]
  },

  reaccion_publicacion: {
    image: "periodista",
    text: `El artículo sale un jueves de mayo de 1899.

Los abogados de Whitmore llegan el viernes.
Demasiado tarde.

El sábado, tres periódicos europeos
están reproduciendo fragmentos con permiso.
El lunes, el debate está en el Parlamento.

No sobre Libertaria, exactamente.
Sobre lo que la Corona ocultó durante doscientos años.
Y por qué.

Whitmore da una declaración pública.
Llama al artículo "ficción irresponsable".

Nadie le cree del todo.
Algunos le creen a medias.
Suficientes no le creen en absoluto.

La semilla está plantada.`,
    choices: [
      { text: "Ver qué pasa con la comunidad", next: "epilogo_publicar" }
    ]
  },

  epilogo_publicar: {
    image: "final_mar",
    text: `Seis meses después recibes una carta sin remitente.

Letra que reconoces: Mara.

"Vinieron periodistas. Los atendimos.
Vinieron académicos. Les dejamos leer.
Vinieron tres funcionarios del Ministerio Colonial.
Les dijimos lo que puedes imaginar."

"La comunidad vota cada año si abrirse más o menos.
Este año: más. La primera vez en cien años."

"Every dijo una vez que la libertad
no es un estado que se alcanza.
Es una conversación que no termina."

"Gracias por empezar esta parte de ella."

Doblas la carta.
Por la ventana de tu piso en Londres
empieza a llover.

Eso, al menos, no ha cambiado.

— FIN (FINAL: La Voz que Viaja) —`,
    endChapter: true,
    choices: []
  },

  // ── FINAL B: Publicación parcial ──

  plan_publicar_parcial: {
    image: "diarios",
    text: `La estrategia es delicada.

Publicas la existencia de Libertaria.
La historia de Every. El expediente clasificado.
La traición de 1698 y la familia Whitmore.

Pero no las coordenadas.
No la descripción exacta de la isla.
No los nombres de los miembros actuales de la comunidad.

Whitmore puede atacar el artículo.
No puede atacar a gente que no nombras.

Hartwick lo lee dos veces.
"Es la mitad de la historia", dice.

"Es toda la historia que puedo contar sin hacer daño",
dices.

Larga pausa.

"De acuerdo", dice. "Así es mejor periodismo que el otro."`,
    choices: [
      { text: "Publicar y esperar", next: "epilogo_parcial" }
    ]
  },

  epilogo_parcial: {
    image: "final_mar",
    text: `El artículo crea menos ruido que el que podría haber creado.

Pero el ruido que crea dura más.

Los historiadores empiezan a buscar.
Los archivos coloniales se abren gradualmente
bajo la presión de preguntas que no pueden ignorar.

Whitmore aparece en el artículo. Sus abogados amenazan.
Pero lo que describes está documentado.
Y lo que callas es tuyo.

La comunidad sigue en su isla.
Sin visitantes no invitados.
Sin prisa por el mundo.

Un año después, Mara te escribe:
"Calloway. El consejo quiere invitarte de vuelta.
Esta vez como huésped, no como juicio."

Es la distinción más importante
que alguien te ha hecho en tu vida.

— FIN (FINAL: El Silencio Que Protege) —`,
    endChapter: true,
    choices: []
  },

  // ── FINAL C: Ruta académica ──

  plan_academico: {
    image: "londres_archivo",
    text: `No vas a Hartwick primero.

Vas a la Biblioteca Bodleiana de Oxford.
Al archivo histórico de la Royal Geographical Society.
A la biblioteca del King's College de Londres.

Depositas copias autentificadas en los tres.

Documentos históricos. En custodia pública.
Inatacables por abogados privados.
Inapropiables por ningún Whitmore.

Después escribes el artículo.
Citando los fondos que acabas de depositar.

Whitmore puede demandar al periódico.
No puede demandar a Oxford, a la Royal Geographical
y al King's College a la vez.

O puede intentarlo.
Con lo que eso diría de él públicamente.`,
    choices: [
      { text: "Publicar con las fuentes aseguradas", next: "epilogo_academico" }
    ]
  },

  epilogo_academico: {
    image: "camara_documentos",
    text: `El artículo sale con una nota al pie:

"Los documentos originales están depositados en la
Biblioteca Bodleiana (Oxford), la Royal Geographical Society
y el King's College de Londres, accesibles a investigadores."

Whitmore no puede bloquear lo que ya es público.

Lo que sigue es más lento que una publicación sensacionalista.
Pero más sólido.

Los historiadores pasan cinco años verificando.
Publican sus propios trabajos.
El debate entra en las universidades.

Diez años después, la historia de Libertaria
forma parte del currículo de historia colonial
en seis países.

Mara te envía una sola frase:

"Every siempre supo que la paciencia
era la única revolución que no se podía aplastar."

— FIN (FINAL: La Raíz Profunda) —`,
    endChapter: true,
    choices: []
  }
};
