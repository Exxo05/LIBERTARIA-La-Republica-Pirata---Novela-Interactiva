// CAPÍTULO 5 — La Costa de Mozambique
// Tres días en el canal. Llegan a la isla.
// Whitmore llega también. La carrera entra en su fase final.

const chapter5Scenes = {

  canal_mozambique: {
    image: "mozambique_costa",
    text: `Tres días en el canal de Mozambique.

Ravo navega sin mapa y sin brújula convencional.
Solo mira el agua. El color. La corriente.

"¿Cómo sabe a dónde va?", le preguntas el segundo día.

"El agua cambia de color cuando se acerca",
dice. "Verde más oscuro. Casi negro.
La isla protege su fondo como la gente honesta
protege sus secretos: sin hacer ruido."

Al tercer amanecer, en el horizonte:
una mancha verde oscura que no estaba antes.

La segunda aguja de la brújula apunta hacia ella.`,
    choices: [
      { text: "Acercarse a la isla", next: "llegada_isla" }
    ]
  },

  llegada_isla: {
    image: "costa_ruinas",
    text: `La playa de arena negra.

Ravo para la barca a cien metros de la orilla.

"Hasta aquí", dice. "Esto no es para mí."

"¿Por qué?"

"Porque lo que hay aquí no necesita
a más gente que ya lleva demasiada historia encima."

Bajáis al agua. Es templada.

En la orilla, árboles. Silencio.
Y la certeza de que alguien os está mirando
desde hace varios minutos.`,
    choices: [
      { text: "Avanzar hacia los árboles con las manos visibles",
        next: "primer_contacto" },
      { text: "Esperar a que salgan ellos",
        next: "espera_orilla" }
    ]
  },

  espera_orilla: {
    image: "costa_ruinas",
    text: `Esperáis.

Cinco minutos. Diez.

El silencio tiene textura aquí. No es vacío.
Es algo que escucha.

Al cabo de un cuarto de hora, una voz desde los árboles:
"¿Cuántos sois?"

"Dos", dices.
Una pausa.
"¿Armados?"
"No."

Otra pausa, más larga.

"Entrad despacio."`,
    choices: [
      { text: "Entrar despacio", next: "primer_contacto",
        setFlags: { esperaronEnOrilla: true } }
    ]
  },

  primer_contacto: {
    image: "isla_interior",
    text: `Sale del árbol como si fuera parte de él.

Un hombre joven. Veinte años, quizás.
Lanza en la mano, no en posición de ataque.

Os mira. Os evalúa.

"¿De dónde venís?"

"Londres." 

"¿Qué buscáis?"

Aquí está la pregunta que importa.
La respuesta que des ahora cambiará lo que viene.`,
    choices: [
      { text: "\"La verdad sobre Henry Every\"",
        next: "guia_acepta", setFlags: { respuestaTruth: true } },
      { text: "\"El tesoro de Libertaria\"",
        next: "guia_rechaza" },
      { text: "\"A alguien llamado Whitmore. Para advertiros\"",
        next: "guia_alerta", setFlags: { alertoDeWhitmore: true } }
    ]
  },

  guia_rechaza: {
    image: "isla_interior",
    text: `El joven no se mueve.

"El tesoro no existe", dice con la paciencia
de quien ha dicho esto antes.

"O existe, pero no es lo que crees.
Los que vienen por oro se van con las manos vacías.
Siempre."

Te mira. Espera.

"¿Quieres intentarlo de otra manera?"`,
    choices: [
      { text: "\"La verdad. Busco la verdad sobre Every\"",
        next: "guia_acepta", setFlags: { respuestaTruth: true } }
    ]
  },

  guia_alerta: {
    image: "isla_interior",
    text: `El joven se tensa.

"¿Whitmore?"

"Llegó a Madagascar hace cinco días.
Tiene dinero y hombres. Viene aquí."

El joven silba. Dos notas cortas.
Desde algún lugar entre los árboles, movimiento.

"Entrad. Ahora."

Mientras camináis, te dice:
"Ese nombre lo conocemos.
Es el heredero de quien nos vendió en 1698."`,
    choices: [
      { text: "Seguirle al interior", next: "interior_comunidad" }
    ]
  },

  guia_acepta: {
    image: "isla_interior",
    text: `El joven baja la lanza un centímetro.

Solo un centímetro. Pero es suficiente.

"La verdad es lo único que no tenemos que esconder",
dice. "Venid."

Camináis entre los árboles durante diez minutos.

El sonido cambia. Voces. Niños.
El olor a comida cocinándose.

Y después, entre los árboles, la comunidad.`,
    choices: [
      { text: "Entrar a la comunidad", next: "interior_comunidad" }
    ]
  },

  interior_comunidad: {
    image: "isla_interior",
    text: `Sesenta personas, más o menos.

No es una aldea. Es algo más difícil de nombrar.
Casas de madera y piedra. Huertos. Un taller.
Una sala grande en el centro con el símbolo de Every
grabado sobre la puerta.

Y todos mirándoos llegar.

No con miedo. Con la evaluación cuidadosa
de quien ha aprendido a distinguir
entre el que viene a preguntar
y el que viene a tomar.

Una mujer mayor avanza hacia vosotros.
Pelo blanco. Ojos del color del océano en calma.

"Yo soy Mara", dice. "Bisnieta de Henry Every."`,
    choices: [
      { text: "Escuchar lo que Mara tiene que decir", next: "mara_habla" }
    ]
  },

  mara_habla: {
    image: "isla_interior",
    text: `Mara os lleva a la sala grande.

Os ofrece agua. Fruta. Os deja tiempo.

Después habla.

"Every no escondió un tesoro.
Escondió una prueba.
La prueba de que esto", señala con la mano
todo lo que os rodea, "es posible.

Doscientos años llevamos aquí.
Cada generación decide si quedarse o marcharse.
Nadie obliga a nadie.

El oro de Every lo gastamos en el primer siglo.
Lo que queda no tiene precio."

Pausa.

"¿Para qué queréis la historia?"`,
    choices: [
      { text: "\"Para publicarla. Que el mundo lo sepa\"",
        next: "mara_responde", setFlags: { quierePublicar: true } },
      { text: "\"Para protegerla. Viene alguien a destruirla\"",
        next: "mara_responde", setFlags: { quiereProteger: true } },
      { text: "\"Todavía no lo sé del todo\"",
        next: "mara_responde", setFlags: { respuestaHonesta: true } }
    ]
  },

  mara_responde: {
    image: "isla_interior",
    text: (flags) => {
      if (flags?.alertoDeWhitmore || flags?.sabeDeWhitmore || flags?.sabeWhitmoreHeredero) {
        return `Antes de que Mara responda, el joven del bosque entra corriendo.

"Barco", dice. "Grande. No de pesca."

Mara no se mueve. Solo cierra los ojos un segundo.

"¿Whitmore?" te pregunta.

"Muy probablemente."

"Entonces no hay tiempo para el juicio habitual."
Se levanta. "Tenéis que elegir ahora:
¿estáis con nosotros o sois neutrales?"`;
      }
      return `Mara os estudia.

"El juicio decidirá", dice al fin.
"Mañana, ante el consejo."

Esa noche dormís en la isla.
El sonido del océano es diferente aquí.
Como si supiera que está rodeando algo que vale la pena.`;
    },
    choices: [
      { text: "Decir que estáis con ellos", next: "fin_capitulo",
        setFlags: { conLaComunidad: true } },
      { text: "Pedir tiempo para el juicio", next: "fin_capitulo" }
    ]
  },

  fin_capitulo: {
    image: "camara_documentos",
    text: `Mara os lleva a una cámara al pie de la colina central.

Bajo una piedra marcada con el símbolo de Every,
una caja sellada con cera negra.

"Los documentos fundacionales", dice.
"La constitución. Las actas. Las firmas."

Los abre. Dos siglos de papel perfectamente conservado.

"212 personas firmaron esto", dice Mara.
"La mitad eran esclavos liberados.
Un cuarto, mujeres. El resto, marineros y piratas
que decidieron dejar de serlo."

Afuera, en el horizonte marino,
las luces de un barco grande.

El tiempo se acaba.`,
    endChapter: true,
    choices: []
  }
};
