// CAPÍTULO 4 — El Mercado de Madagascar
// James y posiblemente Voss buscan provisiones,
// información y un guía local en Toamasina.
// Aquí la brújula y el cuaderno tienen uso real.

const chapter4Scenes = {

  mercado_toamasina: {
    image: "madagascar_mercado",
    text: `El mercado de Toamasina es un laberinto de ruido y color.

Telas. Pescado. Mapas piratas de dudosa precisión.
Hombres que venden información como si fuera fruta:
por peso, por temporada, al mejor postor.

Necesitas tres cosas:
provisiones para una semana en el mar,
un guía que conozca el canal de Mozambique,
y alguna pista sobre la isla sin nombre.

Por donde empieces importa.`,
    choices: [
      { text: "Buscar primero al guía local", next: "buscar_guia" },
      { text: "Preguntar por la isla en las tiendas de mapas", next: "tienda_mapas" },
      { text: "Comprar provisiones y observar", next: "comprar_provisiones" }
    ]
  },

  tienda_mapas: {
    image: "madagascar_mercado",
    text: `La tienda de mapas huele a tinta vieja y ambición.

El dueño es un francés de sesenta años
con más cicatrices en las manos que años en la cara.

Le describes la isla. El canal. Las coordenadas.

Él escucha con la inmovilidad de quien ha oído
a muchos hombres describir muchas islas.

"Conozco diecisiete islas sin nombre en ese canal",
dice al fin. "¿Cuál quiere?"

Le muestras las coordenadas del cuaderno.

Algo cambia en su cara. Muy brevemente.

"Esa no existe", dice. "Oficialmente."`,
    choices: [
      { text: "Insistir y ofrecerle dinero", next: "frances_cede" },
      { text: "Mostrarle la brújula de Every",
        next: "frances_brujula",
        requiresItems: ["brújula"] },
      { text: "Marcharse y buscar al guía", next: "buscar_guia" }
    ]
  },

  frances_brujula: {
    image: "madagascar_mercado",
    text: `Pones la brújula sobre el mostrador.

El francés no la toca. La mira.

La segunda aguja. La que apunta siempre al sudeste.

"¿Dónde encontró esto?", dice.

"Cornwall. Una cueva."

Silencio. El francés se levanta. Cierra la puerta de la tienda.

"Mi abuelo llegó a esa isla en 1841",
dice con una voz que ahora es distinta.
"La describió como el único lugar
donde había visto funcionar la justicia."

Te da un mapa dibujado a mano.
No cobra nada.

"Cuídela", dice, mirando la brújula.
"Y cuide lo que va a encontrar."`,
    choices: [
      { text: "Dar las gracias y buscar al guía",
        next: "buscar_guia", gainItems: ["mapa del francés"],
        setFlags: { tieneMapa: true } }
    ]
  },

  frances_cede: {
    image: "madagascar_mercado",
    text: `El francés mira el dinero.
Mira el cuaderno.

"No vendo mapas de esa zona", dice.
"Pero le diré que busque a Ravo en el puerto sur.
Ella conoce el canal mejor que nadie."

"¿Ravo?"

"La reconocerá. Es la única que no intenta venderte nada."`,
    choices: [
      { text: "Ir al puerto sur a buscar a Ravo", next: "buscar_guia" }
    ]
  },

  comprar_provisiones: {
    image: "madagascar_mercado",
    text: `Mientras compras, escuchas.

Los mercaderes hablan. En francés, en malgache, en swahili.
Mezclas de idiomas que forman un idioma propio.

Un marinero menciona "la isla de los fantasmas"
con la naturalidad de quien la ha esquivado en el mar.

Otro lo corrige: "No fantasmas. Gente rara.
No quieren visitantes."

Un tercero: "Mi primo fue hace diez años.
Dice que votaron para decidir si le dejaban entrar."

Votaron.

Apuntas todo en el cuaderno.`,
    choices: [
      { text: "Buscar al guía local",
        next: "buscar_guia", setFlags: { oyoHablarDeLaIsla: true } }
    ]
  },

  buscar_guia: {
    image: "posada",
    text: (flags) => `El puerto sur de Toamasina.

Barcas de pesca. Redes secando. Olor a yodo.

${flags?.tieneMapa
  ? "El francés tenía razón: la reconoces enseguida."
  : "La encuentras por eliminación: es la única que no ofrece nada."}

Ravo. Cincuenta años, quizás. Piel curtida.
Repara una red sin prisa ni urgencia.

Le describes el destino con cuidado,
sin decir el nombre.

Ella deja la red. Te mira.

"¿Para qué quiere ir ahí?"`,
    choices: [
      { text: "Decirle la verdad: eres periodista, buscas la historia", next: "ravo_acepta" },
      { text: "Decir que buscas a un familiar perdido", next: "ravo_duda" }
    ]
  },

  ravo_acepta: {
    image: "posada",
    text: `Ravo te escucha. No interrumpe.

Cuando terminas, pregunta:
"¿Hay alguien más que busca lo mismo?"

"Un hombre. Whitmore. Con dinero y sin escrúpulos."

Ravo asiente despacio.

"Lo sé. Pasó por aquí hace cinco días.
Le dije que no conocía ninguna isla."

Pausa.

"A usted sí le digo que sí."

No pregunta el precio. No pide nada.
Solo dice: "Mañana al amanecer."`,
    choices: [
      { text: "Aceptar y prepararse para mañana",
        next: "partida", setFlags: { tieneGuia: true } }
    ]
  },

  ravo_duda: {
    image: "posada",
    text: `Ravo te mira durante un momento que se alarga.

"No", dice simplemente. Y vuelve a la red.

No hay negociación posible.
Ravo no vende nada a quien miente desde el principio.

Tienes que intentarlo de otra manera.`,
    choices: [
      { text: "Decirle la verdad esta vez", next: "ravo_acepta" }
    ]
  },

  partida: {
    image: "mozambique_costa",
    text: (flags) => `Amanecer en Toamasina.

${flags?.alianzaConVoss
  ? `Voss está esperando en el muelle.
Ravo la mira. La evalúa en silencio.
"Tres días", dice Ravo. "Sin preguntas en el mar."

Los tres subís.`
  : `Ravo ya está en la barca cuando llegas.
Sin palabras. Solo un gesto de cabeza.`}

La barca sale del puerto cuando el sol
apenas ha decidido si salir o no.

El canal de Mozambique se abre ante vosotros
como algo que lleva siglos esperando que alguien
venga a preguntarle algo.`,
    endChapter: true,
    choices: []
  }
};
