// ── ESTADO GLOBAL ──
let scenes           = {};
let currentChapter   = 1;
let currentSceneId   = "";
let gameFlags        = {};
let completedChapters = [];
let activeSlot       = 1;
let inventory        = [];

// ── METADATOS DE CAPÍTULOS ──
const CHAPTER_META = {
  1: { title: "La Cueva del Corsario",     icon: "⚓", sub: "Cornwall, 1899. Una cueva guarda el inicio de todo." },
  2: { title: "El Archivo Prohibido",      icon: "📜", sub: "La Corona guarda secretos que no quiere que nadie lea." },
  3: { title: "La Tormenta del Atlántico", icon: "⛵", sub: "Hay tormentas que no son solo de agua." },
  4: { title: "El Mercado de Madagascar",  icon: "🗺", sub: "En los puertos olvidados se compra cualquier verdad." },
  5: { title: "La Costa de Mozambique",   icon: "🌿", sub: "Las ruinas recuerdan lo que los mapas borraron." },
  6: { title: "El Juicio de Libertaria",  icon: "⚖", sub: "La libertad siempre tiene un precio." },
  7: { title: "El Último Tesoro",         icon: "💀", sub: "Lo que Every escondió no era oro." },
};

const CHAPTER_FIRST_SCENE = {
  1: "inicio",
  2: "regreso_londres",
  3: "embarque",
  4: "mercado_toamasina",
  5: "canal_mozambique",
  6: "consejo_urgente",
  7: "decision_final",
};

const ALL_CHAPTERS = {
  1: () => chapter1Scenes,
  2: () => chapter2Scenes,
  3: () => chapter3Scenes,
  4: () => chapter4Scenes,
  5: () => chapter5Scenes,
  6: () => chapter6Scenes,
  7: () => chapter7Scenes,
};

// ── DOM ──
const imageEl     = document.getElementById("scene-image");
const textEl      = document.getElementById("scene-text");
const choicesEl   = document.getElementById("choices");
const hudSlotEl   = document.getElementById("hudSlot");
const hudChapEl   = document.getElementById("hudChapter");
const inventoryEl = document.getElementById("inventory");
const toastEl     = document.getElementById("save-toast");

// ── UTILIDADES ──
function ensureArr(x)       { return Array.isArray(x) ? x : []; }
function hasItem(id)        { return inventory.includes(id); }
function addItem(id)        { if (!inventory.includes(id)) inventory.push(id); }
function removeItem(id)     { inventory = inventory.filter(i => i !== id); }

function resolve(val, ...args) {
  return typeof val === "function" ? val(...args) : val;
}

// ── INVENTARIO ──
function renderInventory() {
  inventoryEl.innerHTML = "";
  inventory.forEach(id => {
    const chip = document.createElement("span");
    chip.className = "inv-item";
    chip.textContent = id;
    inventoryEl.appendChild(chip);
  });
}

// ── HUD ──
function setHUD() {
  hudSlotEl.textContent  = `Slot ${activeSlot}`;
  hudChapEl.textContent  = `Cap. ${currentChapter}`;
  renderInventory();
}

// ── IMAGEN ASCII ──
function setSceneImage(key) {
  imageEl.classList.remove("loaded");

  setTimeout(() => {
    imageEl.innerHTML = "";
    const art = ASCII_ART[key];
    if (art) {
      const pre = document.createElement("pre");
      pre.textContent = art;
      imageEl.appendChild(pre);
    }
    requestAnimationFrame(() => requestAnimationFrame(() => imageEl.classList.add("loaded")));
  }, 250);
}

// ── SAVE ──
function saveToSlot(manual = false) {
  writeSlot(activeSlot, {
    chapter: currentChapter,
    sceneId: currentSceneId,
    flags:   gameFlags,
    inventory,
    completedChapters,
    savedAt: nowTs(),
    manual,
  });
  if (manual) showToast();
}

function showToast() {
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2000);
}

// ── REQUISITOS ──
function choiceAllowed(choice) {
  for (const item of ensureArr(choice.requiresItems))
    if (!hasItem(item)) return false;

  if (choice.requiresFlags)
    for (const [k, v] of Object.entries(choice.requiresFlags))
      if (gameFlags[k] !== v) return false;

  if (choice.requiresNotFlags)
    for (const [k, v] of Object.entries(choice.requiresNotFlags))
      if (gameFlags[k] === v) return false;

  return true;
}

function applyEffects(choice) {
  if (choice.setFlag?.key)
    gameFlags[choice.setFlag.key] = choice.setFlag.value;

  if (choice.setFlags)
    Object.entries(choice.setFlags).forEach(([k, v]) => { gameFlags[k] = v; });

  ensureArr(choice.gainItems).forEach(addItem);
  ensureArr(choice.consumeItems).forEach(removeItem);
}

// ── CARGAR ESCENA ──
function loadScene(sceneId) {
  currentSceneId = sceneId;
  const scene    = scenes[sceneId];

  if (!scene) {
    textEl.textContent  = `[Error] Escena "${sceneId}" no encontrada en capítulo ${currentChapter}.`;
    choicesEl.innerHTML = "";
    return;
  }

  setHUD();
  setSceneImage(resolve(scene.image, gameFlags, inventory));
  textEl.textContent  = resolve(scene.text, gameFlags, inventory).trim();
  choicesEl.innerHTML = "";

  saveToSlot(false); // autosave

  const choices = ensureArr(scene.choices);

  if (scene.endChapter || choices.length === 0) {
    const btn = document.createElement("button");
    btn.className   = "btn-chapter-end";
    btn.textContent = "Continuar el viaje →";
    btn.addEventListener("click", nextChapter);
    choicesEl.appendChild(btn);
    return;
  }

  choices.forEach(choice => {
    if (!choiceAllowed(choice)) return;

    const btn = document.createElement("button");
    btn.textContent = choice.text;

    btn.addEventListener("click", () => {
      applyEffects(choice);
      loadScene(choice.next);
    });

    choicesEl.appendChild(btn);
  });
}

// ── TRANSICIÓN DE CAPÍTULO ──
function showChapterTransition(num, callback) {
  const meta = CHAPTER_META[num] || { title: `Capítulo ${num}`, icon: "☠", sub: "" };

  const trans = document.getElementById("chapter-transition");

  // Rellenar contenido
  document.getElementById("ctIcon").textContent  = meta.icon;
  document.getElementById("ctNum").textContent   = num;
  document.getElementById("ctTitle").textContent = meta.title;
  document.getElementById("ctSub").textContent   = meta.sub;

  // Reiniciar animaciones CSS quitando y reponiendo la clase hidden
  // (forzar reflow para que las animaciones vuelvan a empezar)
  trans.classList.remove("hidden");
  const els = trans.querySelectorAll(".ct-icon, .ct-label, .ct-title, .ct-line, .ct-sub");
  els.forEach(el => {
    el.style.animation = "none";
    el.offsetHeight; // reflow
    el.style.animation = "";
  });

  document.getElementById("game").classList.add("hidden");
  document.getElementById("menu").classList.add("hidden");

  setTimeout(() => {
    trans.classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    callback();
  }, 3200);
}

// ── INICIAR CAPÍTULO ──
function startChapter(num, fromScene, withTransition = true) {
  currentChapter = num;
  scenes         = ALL_CHAPTERS[num]?.() || {};

  const defaultScene = CHAPTER_FIRST_SCENE[num] || Object.keys(scenes)[0] || "";
  const scene        = fromScene || defaultScene;

  if (withTransition) {
    showChapterTransition(num, () => loadScene(scene));
  } else {
    loadScene(scene);
  }
}

// ── SIGUIENTE CAPÍTULO ──
function nextChapter() {
  if (!completedChapters.includes(currentChapter))
    completedChapters.push(currentChapter);
  completedChapters.sort((a, b) => a - b);
  saveToSlot(false);

  const next = currentChapter + 1;
  if (ALL_CHAPTERS[next]) {
    startChapter(next);
  } else {
    // Fin de la demo
    textEl.textContent  = "Fin de la demo.\n\nLa historia de Libertaria continúa…";
    choicesEl.innerHTML = "";
    setSceneImage("mapa_antiguo.jpg");
  }
}

// ── NUEVA PARTIDA ──
function startNewRun(slotNumber) {
  activeSlot        = slotNumber;
  gameFlags         = {};
  completedChapters = [];
  inventory         = [];
  startChapter(1);
}

// ── CONTINUAR ──
function continueRun(slotNumber) {
  activeSlot = slotNumber;
  const save = readSlot(slotNumber);

  if (!save) { startNewRun(slotNumber); return; }

  gameFlags         = save.flags              || {};
  completedChapters = ensureArr(save.completedChapters);
  inventory         = ensureArr(save.inventory);

  startChapter(save.chapter || 1, save.sceneId, false);
}

// ── GUARDAR MANUAL ──
function manualSave() { saveToSlot(true); }
