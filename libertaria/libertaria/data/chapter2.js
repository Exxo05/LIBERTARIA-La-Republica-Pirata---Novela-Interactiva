// CAPÍTULO 2 — El Archivo Prohibido

const chapter2Scenes = {

  regreso_londres: {
    image: "londres_calle",
    text: `De vuelta en Londres. Llueve, como siempre.

El Archivo Colonial está en Whitehall.
Acceso restringido. Solo funcionarios acreditados.

Tienes una credencial de periodista
que impresiona a nadie que trabaje para la Corona.

Dos opciones: buscar un contacto o entrar sin permiso.`,
    choices: [
      { text: "Buscar un contacto en el Archivo", next: "contacto_archivero" },
      { text: "Entrar haciéndote pasar por académico", next: "entrada_falsa" }
    ]
  },

  contacto_archivero: {
    image: "posada",
    text: `Tu contacto: Edmund Pryce. Archivero auxiliar. Mal pagado.

Quedáis en una posada cerca de Charing Cross.

"Los expedientes de Every están en el sótano",
dice sin que le preguntes.
"Clasificados en 1698. Nunca desclasificados."

"¿Por qué?"

Pryce mira la cerveza.
"Porque lo que encontraron no encajaba
con lo que la Corona necesitaba contar."

"¿Qué encontraron?"

"Una comunidad. Viva. Funcionando.
Sin rey, sin iglesia, sin esclavos."

Pausa.

"Puedo dejarte entrar. Pero necesito algo a cambio."`,
    choices: [
      { text: "Ofrecerle dinero",
        next: "archivo_adentro", gainItems: ["pase de archivo"],
        setFlags: { pagoAPryce: true, sabeQueViven: true } },
      { text: "Ofrecerle aparecer en el artículo como fuente anónima",
        next: "archivo_adentro", gainItems: ["pase de archivo"],
        setFlags: { promesaAPryce: true, sabeQueViven: true } }
    ]
  },

  entrada_falsa: {
    image: "londres_archivo",
    text: `Te presentas como el Dr. James Calloway,
investigador de historia marítima. Universidad de Edinburgh.

La Universidad de Edinburgh no sabe que existes.

El funcionario te mira. Mira tus papeles.

Pones el cuaderno abierto en la página del símbolo
con la naturalidad de quien no tiene nada que esconder.

El funcionario lo mira, frunce el ceño.

"¿Qué es esto?"

"Clave de archivo. Sección 7, 1697.
¿Lo busco yo o lo busca usted?"

Funciona. A veces la confianza es el mejor pase.`,
    choices: [
      { text: "Entrar al archivo",
        next: "archivo_adentro", gainItems: ["pase de archivo"],
        setFlags: { entroConEngano: true } }
    ]
  },

  archivo_adentro: {
    image: "londres_archivo",
    text: `El sótano del Archivo Colonial huele a papel viejo y a secretos.

Estanterías del suelo al techo.
Buscas "Every", "Madagascar", "Libertaria".

Veinte minutos. Lo encuentras.

Un expediente sellado con cera negra.
La cera está rota. Sin polvo en la rotura: reciente.

Alguien lo abrió antes que tú. Hace poco.`,
    choices: [
      { text: "Leer el expediente directamente", next: "expediente_contenido" },
      { text: "Buscar quién lo consultó antes", next: "rastro_reciente" }
    ]
  },

  rastro_reciente: {
    image: "londres_archivo",
    text: `El registro de consultas.

Última entrada en el expediente de Every: hace tres días.

Nombre: "Mr. A. Whitmore. Comisión Privada."
Sin afiliación. Sin institución.

Una comisión privada con acceso al archivo clasificado.
Eso cuesta dinero. Mucho dinero.

Alguien más busca lo mismo que tú.
Con tres días de ventaja y mejores recursos.`,
    choices: [
      { text: "Leer el expediente",
        next: "expediente_contenido", setFlags: { sabeDeWhitmore: true } }
    ]
  },

  expediente_contenido: {
    image: "diarios",
    text: `El expediente de Henry Every. Ciento cuarenta páginas.

Los puntos clave:

1697: Every desaparece de los registros oficiales.

1698: Agentes de la Compañía llegan a una isla sin nombre
en el canal de Mozambique. Encuentran una comunidad organizada.
El informe la llama "el experimento".
Recomienda "neutralización discreta".
Una nota al margen dice: "Demasiado tarde. Ya se sabe."

Última página, una nota al pie:
"La isla sigue habitada. 1887. Confirmado."

1887. Doce años antes de hoy.

Y las mismas coordenadas de la cueva de Cornwall.`,
    choices: [
      { text: "Copiar todo y salir",
        next: "salida_archivo", setFlags: { tieneExpediente: true } }
    ]
  },

  salida_archivo: {
    image: "londres_calle",
    text: `Sales a la calle con el cuaderno lleno
y el corazón acelerado.

Niebla. Farolas. Adoquines mojados.

Y la certeza de que Whitmore
lleva tres días de ventaja.

Necesitas un barco.
Llegar al Índico antes de que él encuentre
lo que está buscando.

O antes de que lo destruya.`,
    endChapter: true,
    choices: []
  }
};
