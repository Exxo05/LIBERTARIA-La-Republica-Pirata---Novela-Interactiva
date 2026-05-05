// CAPÍTULO 3 — La Tormenta del Atlántico
// James embarca en un carguero hacia el Índico.
// Durante la travesía: una tormenta, un compañero de viaje
// sospechoso y un objeto que puede ser clave.

const chapter3Scenes = {

  embarque: {
    image: "barco_tormenta",
    text: `Southampton, abril de 1899.

El carguero se llama Meridian. Bandera portuguesa.
Rumbo: Maputo, vía el Cabo de Buena Esperanza.

Seis semanas de viaje. Hartwick no sabe que te has ido.
O si lo sabe, no le importa mientras vuelvas con la historia.

En el muelle, mientras subes la pasarela,
ves a un hombre observarte desde el muelle de enfrente.

Sombrero. Abrigo. No embarca en ningún barco.
Solo mira.

Puede ser nadie. En los puertos siempre hay gente
que mira los barcos marcharse.

Puede ser alguien de Whitmore.`,
    choices: [
      { text: "Subir al barco sin mirar atrás", next: "a_bordo" },
      { text: "Memorizar la cara del hombre antes de subir", next: "a_bordo",
        setFlags: { memorizoCara: true } }
    ]
  },

  a_bordo: {
    image: "barco_tormenta",
    text: `A bordo hay dieciséis pasajeros.

La mayoría: comerciantes, funcionarios coloniales,
algún misionero con cara de no haber dormido bien en años.

Y una mujer.

Cuarenta años, aproximadamente. Viaja sola.
Lee en cubierta aunque haga viento.
Cuando te ve mirarla, no aparta los ojos.

En la cena del primer día te sienta
en la misma mesa que ella. Por casualidad, dice el steward.

"Clara Voss", se presenta. "Investigadora independiente."

"¿De qué investiga?"

"Historia de las compañías coloniales."
Pausa breve. "¿Y usted?"`,
    choices: [
      { text: "Decirle la verdad: periodista investigando a Every", next: "voss_confianza" },
      { text: "Mentir: turista, negocios en Maputo", next: "voss_desconfianza" }
    ]
  },

  voss_confianza: {
    image: "barco_tormenta",
    text: `Clara Voss no reacciona como esperabas.

No se sorprende. No finge no saber de qué hablas.

"Every", repite. "Llevo cuatro años siguiendo ese rastro."

"¿Trabaja para alguien?"

"Trabajo para la verdad", dice, con una seriedad
que no suena hueca.

"Yo también." 

Es posible que sea mentira. Es posible que no.
Los dos lo sabéis.

Pero algo se establece en esa cena.
No confianza. Algo más útil: interés mutuo.`,
    choices: [
      { text: "Contarle lo de la cueva de Cornwall", next: "alianza_voss",
        setFlags: { confioEnVoss: true } },
      { text: "Guardar ese detalle por ahora", next: "alianza_parcial" }
    ]
  },

  voss_desconfianza: {
    image: "barco_tormenta",
    text: `"Negocios", dices. Suficientemente vago.

Clara Voss asiente con una sonrisa que no llega a los ojos.

"Claro", dice. Y cambia de tema.

Pero aquella noche, desde tu camarote,
oyes pasos detenerse un momento ante tu puerta.

Y seguir de largo.

Puede ser el barco. Los barcos crujen.
Puede ser ella.`,
    choices: [
      { text: "Seguir vigilante durante el viaje", next: "tormenta_llega" }
    ]
  },

  alianza_voss: {
    image: "barco_tormenta",
    text: `Le cuentas lo de la cueva. El símbolo. Los nombres grabados.
Las coordenadas. La brújula con la segunda aguja.

Voss escucha sin interrumpir. Cuando terminas,
saca un cuaderno propio. Más grueso que el tuyo.

"Tengo algo que tú no tienes", dice.
"El nombre del informante de 1698.
El que vendió Libertaria a la Compañía."

"¿Quién?"

"Alguien cuya familia sigue teniendo poder.
Por eso el expediente lleva dos siglos clasificado."

Antes de que diga más, el barco cruje.
El cielo al oeste se ha vuelto negro.`,
    choices: [
      { text: "Prepararse para la tormenta", next: "tormenta_llega" }
    ]
  },

  alianza_parcial: {
    image: "barco_tormenta",
    text: `Guardáis la conversación en un punto de equilibrio incómodo.

Cada uno con sus cartas cerca del pecho.
Cada uno sabiendo que el otro tiene algo.

Pasáis tres días así: cordiales, cuidadosos,
midiendo cada palabra.

Hasta que el barco cruje y el cielo se vuelve negro.`,
    choices: [
      { text: "Prepararse para la tormenta", next: "tormenta_llega" }
    ]
  },

  tormenta_llega: {
    image: "barco_tormenta",
    text: `La tormenta llega de noche.

No la tormenta gradual que da tiempo a prepararse.
La otra. La que aparece en el horizonte
y ya está encima antes de que termines de mirarla.

El Meridian se inclina cuarenta grados a babor.
Algo cae en cubierta. Alguien grita.

El capitán ordena bajar a todos a los camarotes.

Tú estás en cubierta cuando da la orden.
Y en cubierta hay algo que no debería estar ahí:
la mochila de Voss, abierta, con papeles esparcidos
que el viento está a punto de llevarse.`,
    choices: [
      { text: "Recoger los papeles de Voss antes de bajar", next: "papeles_voss",
        gainItems: ["papeles de Voss"] },
      { text: "Bajar al camarote y salvar tu propio cuaderno", next: "tormenta_camarote" }
    ]
  },

  papeles_voss: {
    image: "barco_tormenta",
    text: `Te aferras a la barandilla con una mano.

Con la otra recoges lo que puedes.
Tres páginas. Empapadas pero legibles.

Nombres. Fechas. Y uno que reconoces:
"A. Whitmore. Heredero de la Comisión de 1698."

Whitmore no es un cazatesoros moderno.
Es el descendiente del hombre que vendió Libertaria.

Guardas los papeles en el abrigo y bajas.
La tormenta duele. Vale la pena.`,
    choices: [
      { text: "Esperar al amanecer en el camarote", next: "post_tormenta",
        setFlags: { sabeWhitmoreHeredero: true } }
    ]
  },

  tormenta_camarote: {
    image: "barco_tormenta",
    text: `Bajas. El camarote cruje como un barco que no confía en sí mismo.

Tu cuaderno está seguro. Los papeles de Voss, no.

Por la mañana, cuando sube a cubierta,
Voss busca con la mirada. Encuentra tu cara.

No dice nada. Pero sabe que estuviste ahí.`,
    choices: [
      { text: "Ir a ver a Voss", next: "post_tormenta" }
    ]
  },

  post_tormenta: {
    image: "barco_tormenta",
    text: (flags) => `El mar amanece plano como si la noche no hubiera pasado.

${flags?.sabeWhitmoreHeredero
  ? `Buscas a Voss en cubierta.

Le devuelves los papeles mojados.
Ella los mira. Te mira a ti.

"Whitmore", dices.

"Heredero de la traición original", confirma.
"Lleva años comprando y destruyendo documentos
sobre Libertaria. No quiere que el mundo sepa
lo que hizo su familia."

Ahora los dos sabéis lo mismo.
Eso cambia algo.`
  : `Voss está en cubierta.
Te mira llegar. No sonríe.

"¿Viste mis papeles?"

"Algo", dices.

"¿Y?"

"Whitmore", dices.

Silencio largo.

"Eso es suficiente para los dos", dice al fin.`}

Faltan cuatro semanas para Madagascar.`,
    choices: [
      { text: "Viajar juntos hasta Madagascar", next: "llegada_madagascar",
        setFlags: { alianzaConVoss: true } },
      { text: "Seguir en paralelo, sin comprometerse", next: "llegada_madagascar" }
    ]
  },

  llegada_madagascar: {
    image: "madagascar_mercado",
    text: `Madagascar. Puerto de Toamasina.

Calor. Ruido. El olor de especias y pescado seco
y algo que no sabes nombrar pero que huele a lejos de casa.

El barco atraca. Los pasajeros bajan.

Voss se detiene a tu lado en la pasarela.

"Las coordenadas apuntan al canal de Mozambique",
dice. "A tres días de barco de aquí."

"Lo sé."

"Voy a necesitar provisiones. Información local.
Y alguien que conozca las corrientes de la costa."

Te mira.

"¿Cuánto tiempo necesitas tú?"`,
    endChapter: true,
    choices: []
  }
};
