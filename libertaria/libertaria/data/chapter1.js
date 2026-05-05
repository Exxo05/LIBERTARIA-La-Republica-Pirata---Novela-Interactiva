// CAPÍTULO 1 — La Cueva del Corsario
// Londres, 1899. Eres James Calloway, periodista.

const chapter1Scenes = {

  inicio: {
    image: "periodista",
    text: `Londres, marzo de 1899.

Tu nombre es James Calloway.
Periodista. Treinta y dos años. Demasiadas deudas
y muy pocas noticias que importen de verdad.

Esta mañana tu editor, el viejo Hartwick,
ha puesto sobre tu mesa un sobre sin remitente.

Dentro: una nota con cuatro palabras.
"Cornwall. La cueva. Every."

Henry Every. El pirata más buscado del siglo XVII.
El único que nunca fue capturado.
El único del que nadie sabe qué fue de él.

Si vuelves con algo publicable pagas la deuda.
Si no vuelves, ya no importa.

Llevas tres horas en tren. Ahora estás aquí.`,
    choices: [
      { text: "Seguir las instrucciones de la nota", next: "cueva_entrada" }
    ]
  },

  cueva_entrada: {
    image: "cueva_entrada",
    text: `El Atlántico golpea las rocas con rabia sorda.

La cueva se abre en el acantilado como una herida vieja.
Llevas una linterna de aceite, el cuaderno de notas
y la pluma que te regaló tu padre.

La cueva huele a sal y a siglos.`,
    choices: [
      { text: "Entrar a la cueva", next: "simbolo" },
      { text: "Examinar la roca exterior antes", next: "exterior" }
    ]
  },

  exterior: {
    image: "cueva_entrada",
    text: `En la roca, casi al nivel del agua,
casi borrada por doscientos años de marea:

Una marca grabada con cuchillo.
No es un escudo de armas. No pertenece a ningún reino.
Es el tipo de símbolo que usa quien no quiere ser encontrado
pero tampoco quiere que lo olviden del todo.

Sacas el cuaderno y lo copias.`,
    choices: [
      { text: "Entrar a la cueva", next: "simbolo",
        setFlags: { copioExterior: true } }
    ]
  },

  simbolo: {
    image: "simbolo",
    text: `En la primera cámara, grabado con obsesión en la pared:

Una calavera que no mira al frente.
Una corona atravesada por un cuchillo.
Y debajo, en inglés antiguo: "FREEDOM"

Más abajo, casi ilegible, unas coordenadas.
No son de Cornwall. Son del Índico. Costa este de África.

Alguien las grabó después. Alguien que ya sabía
a dónde apuntaban y quería que el siguiente también lo supiera.

Copias todo en el cuaderno con la mano temblorosa.
No de miedo. De emoción.`,
    choices: [
      { text: "Seguir hacia el interior", next: "bifurcacion" },
      { text: "Estudiar más las coordenadas", next: "coordenadas_detalle" }
    ]
  },

  coordenadas_detalle: {
    image: "simbolo",
    text: `Madagascar, quizás. O más al sur. Mozambique.

Alguien grabó esto mucho después de 1697.
Alguien que quería que quien llegara aquí
tuviera el siguiente paso.

No es solo una cueva. Es el principio de un rastro.`,
    choices: [
      { text: "Seguir al interior", next: "bifurcacion",
        setFlags: { entendeCoordenadas: true } }
    ]
  },

  bifurcacion: {
    image: "bifurcacion",
    text: `El pasillo se divide en dos.

A la izquierda: el suelo desaparece bajo el agua negra.
Frío. Eco de goteo. Olor a hierro y a tiempo.

A la derecha: el camino sube.
Aire seco. Madera vieja.`,
    choices: [
      { text: "Bajar a la galería inundada",   next: "cueva_oscura" },
      { text: "Subir hacia la zona seca",       next: "sala_objetos" }
    ]
  },

  sala_objetos: {
    image: "sala_objetos",
    text: `La sala seca parece un almacén dejado con intención.

Dispuestos con demasiado orden para ser casuales:
— Una antorcha de madera ennegrecida
— Una cajita de cerillas con media docena dentro
— Envuelto en lona encerada: una brújula de latón

En la tapa de la brújula, grabado:
"B. Every, 1696"

No Henry. Benjamin. Puede que un hermano.
La brújula tiene dos agujas: una al norte, otra fija al sudeste.
La dirección fija apunta exactamente a donde señalan las coordenadas.`,
    choices: [
      { text: "Recoger la antorcha",
        next: "sala_objetos", gainItems: ["antorcha"],
        requiresNotFlags: { tieneAntorcha: true },
        setFlags: { tieneAntorcha: true } },
      { text: "Recoger las cerillas",
        next: "sala_objetos", gainItems: ["cerillas"],
        requiresNotFlags: { tieneCerillas: true },
        setFlags: { tieneCerillas: true } },
      { text: "Recoger la brújula de B. Every",
        next: "sala_objetos", gainItems: ["brújula"],
        requiresNotFlags: { tieneBrujula: true },
        setFlags: { tieneBrujula: true } },
      { text: "Volver a la bifurcación", next: "bifurcacion" }
    ]
  },

  cueva_oscura: {
    image: (flags) => flags?.cuevaIluminada ? "cueva_iluminada" : "cueva_oscura",

    text: (flags) => {
      if (flags?.cuevaIluminada) {
        return `La llama tiembla pero aguanta.

La cueva se llena de luz anaranjada.

En las paredes: nombres grabados con letra cuidadosa.
Ingleses, malayos, portugueses, árabes.
Con fechas y puertos de origen.

Piratas que prometieron algo aquí. Que firmaron algo.
Al fondo, una grieta ampliada con pólvora.
Al otro lado se ve una sala.`;
      }
      return `La oscuridad es total.

El agua llega al tobillo. Fría como el error.
Sin más luz, avanzar sería un equivocación
del tipo que no se puede deshacer.`;
    },

    choices: [
      { text: "Encender la antorcha con las cerillas",
        next: "cueva_oscura",
        requiresItems: ["antorcha", "cerillas"],
        consumeItems: ["cerillas"],
        setFlags: { cuevaIluminada: true } },
      { text: "Avanzar a ciegas",
        next: "derrumbe" },
      { text: "Leer los nombres grabados",
        next: "grabados",
        requiresFlags: { cuevaIluminada: true } },
      { text: "Cruzar la grieta al fondo",
        next: "sala_final",
        requiresFlags: { cuevaIluminada: true } },
      { text: "Volver a la bifurcación",
        next: "bifurcacion" }
    ]
  },

  grabados: {
    image: "cueva_iluminada",
    text: `Acercas la antorcha. Lees despacio.

Doscientos nombres de cuatro continentes.
Y una fecha: 3 de mayo de 1697.

Un año después de que Every desapareciera
de todos los registros de la Corona.

"No al rey. No a la compañía.
A ellos mismos y a los demás."

Escribes todo. La mano apenas tiembla.`,
    choices: [
      { text: "Cruzar la grieta al fondo", next: "sala_final" },
      { text: "Volver", next: "cueva_oscura" }
    ]
  },

  derrumbe: {
    image: "derrumbe",
    text: `Un paso en falso.

La piedra cede. Un trozo de techo cae.
No grande. Suficiente.

No estás herido. Solo húmedo y humillado.
El camino queda bloqueado.

La oscuridad tenía razón.`,
    choices: [
      { text: "Volver con más cuidado", next: "cueva_oscura" }
    ]
  },

  sala_final: {
    image: "advertencia",
    text: `Al otro lado: una sala circular.

En el centro del suelo, el símbolo más grande que has visto.
Y rodeándolo, en latín y en inglés:

"Libertaria no cayó por el oro.
Cayó porque quisimos poseer la libertad."
— Henry Every, 1698

Lo escribes. Lo lees dos veces más.

Hay una historia aquí que vale mucho más
que cualquier tesoro que Hartwick esperaba.

Las coordenadas. La brújula. El Índico.
Pero antes de zarpar necesitas los documentos oficiales.
Los que la Corona guardó y nunca publicó.

El Archivo Colonial de Londres.`,
    endChapter: true,
    choices: []
  }
};
