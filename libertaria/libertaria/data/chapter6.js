// CAPÍTULO 6 — El Juicio de Libertaria
// El consejo juzga las intenciones. Whitmore llega.
// Hay que decidir qué hacer con los documentos.

const chapter6Scenes = {

  consejo_urgente: {
    image: "isla_interior",
    text: `El consejo se reúne de urgencia.

Doce personas. El mismo número desde 1697.
Sentadas en círculo en la sala grande.

Afuera: las luces del barco de Whitmore, cada vez más cerca.
Adentro: el peso de doscientos años de secreto.

Mara habla:
"Normalmente el juicio dura tres días.
No tenemos tres días. Tenemos quizás tres horas."

Os mira.

"Una pregunta. Responded con honestidad.
¿Qué haréis con lo que habéis visto aquí?"`,
    choices: [
      { text: "\"Lo publicaré todo. El mundo tiene derecho a saber\"",
        next: "juicio_publicar", setFlags: { intencionPublicar: true } },
      { text: "\"Protegeré los documentos y a la comunidad\"",
        next: "juicio_proteger", setFlags: { intencionProteger: true } },
      { text: "\"Haré lo que vosotros decidáis\"",
        next: "juicio_dejar_decidir", setFlags: { intencionCeder: true } }
    ]
  },

  juicio_publicar: {
    image: "diarios",
    text: `El consejo delibera en voz baja.

Un hombre de mediana edad habla primero:
"Publicar nos expone. Whitmore no es el único
que querría vernos desaparecer."

Una mujer joven responde:
"El silencio nos ha protegido doscientos años.
¿Cuántos más necesitamos?"

Mara vota la última.

"Calloway", dice. "Eres periodista.
Si publicas esto, lo publicas bien o no lo publicas.
¿Puedes comprometerte a eso?"

Silencio en la sala.`,
    choices: [
      { text: "\"Sí. Con mi nombre. Con las fuentes. Con todo\"",
        next: "consejo_acepta_publicar", setFlags: { comprometidoPublicar: true } },
      { text: "\"No puedo garantizar cómo lo recibirá el mundo\"",
        next: "consejo_duda_publicar" }
    ]
  },

  consejo_acepta_publicar: {
    image: "camara_documentos",
    text: `El consejo vota.

Siete a favor. Cinco en contra.

"Suficiente", dice Mara.
"Every siempre dijo que la mayoría simple
es la única que merece ese nombre."

Os dan acceso completo a los documentos.
Una hora para leer, copiar, fotografiar mentalmente.

Después, el sonido de una barca acercándose a la orilla.

Whitmore ha llegado.`,
    choices: [
      { text: "Ir al encuentro de Whitmore", next: "whitmore_llega" }
    ]
  },

  consejo_duda_publicar: {
    image: "diarios",
    text: `Mara asiente.

"La honestidad cuenta. El consejo lo toma en cuenta."

La votación es seis a seis.
Mara tiene el voto de desempate.

Silencio largo.

"Publicar con incertidumbre es mejor
que no publicar con certeza", dice.
"Every lo intentó sin garantías. Nosotros también."

Os dan acceso parcial. Los documentos más importantes.
Suficiente.

Afuera: el ruido de una barca.`,
    choices: [
      { text: "Ir al encuentro de Whitmore",
        next: "whitmore_llega", setFlags: { accesoLimitado: true } }
    ]
  },

  juicio_proteger: {
    image: "camara_documentos",
    text: `El consejo reacciona con algo parecido al alivio.

"Es lo que llevamos dos siglos haciendo",
dice la mujer mayor del consejo.
"Pero ya no podemos solos."

Os explican la situación:
Whitmore lleva años comprando documentos relacionados
con Libertaria para destruirlos.
La familia lleva generaciones borrando rastros.

"Si tú llevas los documentos al exterior,
nosotros os damos copias autentificadas."

Trato limpio. Igual para todos.
Exactamente como Every habría querido.

Afuera: ruido de motor.`,
    choices: [
      { text: "Aceptar el trato e ir al encuentro de Whitmore",
        next: "whitmore_llega", setFlags: { acuerdoProteccion: true } }
    ]
  },

  juicio_dejar_decidir: {
    image: "isla_interior",
    text: `Silencio en la sala.

Después, algo inesperado: algunas sonrisas.

"La última persona que dijo eso fue Every",
dice Mara. "En este mismo sitio.
Antes de escribir la constitución."

"¿Y qué decidisteis?"

"Que la libertad sin responsabilidad
no es libertad. Es comodidad."

La votación es unánime.
Os dan acceso completo a los documentos.

"Lo que hagáis con eso", dice Mara,
"lo decidiréis vosotros."

Afuera: el ruido de una barca rompe el silencio.`,
    choices: [
      { text: "Ir al encuentro de Whitmore",
        next: "whitmore_llega", setFlags: { confianzaTotal: true } }
    ]
  },

  whitmore_llega: {
    image: "barco_moderno",
    text: `A. Whitmore.

Lo reconoces porque es exactamente lo que imaginabas:
sesenta años, abrigo caro, dos hombres detrás.

Llega a la orilla con la seguridad de quien
ha pagado su camino hasta aquí y espera que funcione.

Cuando os ve, se detiene.

"Calloway", dice. No es una pregunta.
Conoce tu nombre.

"Whitmore", dices.

Mara está a tu lado. El joven con la lanza, detrás.
La comunidad entera, entre los árboles.

Whitmore sonríe.

"Esto no tiene por qué ser complicado",
dice. "Los documentos no son de nadie.
Les pago un precio justo y todos ganamos."`,
    choices: [
      { text: "Negarse y defender los documentos",
        next: "confrontacion_whitmore" },
      { text: "Escucharle. Dejarle terminar",
        next: "whitmore_oferta" }
    ]
  },

  whitmore_oferta: {
    image: "barco_moderno",
    text: `Whitmore habla durante cinco minutos.

Dinero. Mucho. Para la comunidad, para ti, para Voss.

"¿Y los documentos?", pregunta Mara.

"En un archivo privado. Seguros."

"¿Accesibles?"

Pausa breve.

"Para los investigadores adecuados."

Mara te mira. Tú la miras a ella.
Los "investigadores adecuados" de Whitmore
no incluirían a nadie que pudiera usar esto contra su familia.

Hay una sola respuesta posible.`,
    choices: [
      { text: "Rechazar la oferta", next: "confrontacion_whitmore" }
    ]
  },

  confrontacion_whitmore: {
    image: "isla_interior",
    text: `"No", dices.

Whitmore no se mueve.

"Los documentos ya no están donde crees",
dice Mara. "Llevan tres horas en otros lugares."

Es verdad o es un farol.
Por la cara de Whitmore, no lo sabe tampoco.

Uno de sus hombres da un paso adelante.
El joven con la lanza da dos.

Entre los árboles, la comunidad entera.
Sesenta personas. Sin armas visibles.
Sin necesitarlas.

Whitmore calcula.
Whitmore entiende.

"Esto no termina aquí", dice.

"Lo sé", dice Mara. "Pero hoy termina así."`,
    choices: [
      { text: "Observar cómo Whitmore se marcha", next: "whitmore_se_va" }
    ]
  },

  whitmore_se_va: {
    image: "barco_moderno",
    text: `Whitmore vuelve a su barca.

Sus hombres le siguen.
El barco grande arranca motores al cabo de una hora.

La comunidad lo observa desde la orilla en silencio.

Cuando el barco desaparece en el horizonte,
nadie celebra.

Mara te mira.

"Se irá a Londres a bloquear cualquier publicación
que intentes hacer. Tiene abogados. Tiene contactos."

"Lo sé."

"¿Qué vas a hacer?"`,
    endChapter: true,
    choices: []
  }
};
