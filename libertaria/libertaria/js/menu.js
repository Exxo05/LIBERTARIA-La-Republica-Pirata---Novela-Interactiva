const menuEl       = document.getElementById("menu");
const gameEl       = document.getElementById("game");
const slotsEl      = document.getElementById("slots");
const chapterListEl = document.getElementById("chapterList");
const slotHintEl   = document.getElementById("slotHint");

const btnNew      = document.getElementById("btnNew");
const btnContinue = document.getElementById("btnContinue");
const btnDelete   = document.getElementById("btnDelete");
const btnSave     = document.getElementById("btnSave");
const btnBackMenu = document.getElementById("btnBackMenu");

let selectedSlot = 1;

// ── TÍTULOS DE CAPÍTULO (para el menú) ──
const CHAPTER_TITLES = {
  1: "La Cueva del Corsario",
  2: "El Archivo Prohibido",
  3: "La Tormenta del Atlántico",
  4: "El Mercado de Madagascar",
  5: "La Costa de Mozambique",
  6: "El Juicio de Libertaria",
  7: "El Último Tesoro",
};

// ── MOSTRAR/OCULTAR ──
function showMenu() {
  gameEl.classList.add("hidden");
  document.getElementById("chapter-transition").classList.add("hidden");
  menuEl.classList.remove("hidden");
  renderSlots();
  renderChapterReplay();
}

function showGame() {
  menuEl.classList.add("hidden");
  gameEl.classList.remove("hidden");
}

// ── FORMATO DE METADATOS ──
function formatMeta(save) {
  if (!save) return "Ranura vacía\n—";
  const dt   = new Date(save.savedAt || Date.now());
  const time = dt.toLocaleString("es-ES", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  });
  const chapTitle = CHAPTER_TITLES[save.chapter] || `Capítulo ${save.chapter}`;
  return `${chapTitle}\n${time}`;
}

// ── SLOTS ──
function renderSlots() {
  slotsEl.innerHTML = "";

  for (let i = 1; i <= SLOT_COUNT; i++) {
    const save = readSlot(i);

    const card = document.createElement("div");
    card.className = "slot" + (i === selectedSlot ? " active" : "");

    const info = document.createElement("div");

    const title = document.createElement("p");
    title.className   = "slot-title";
    title.textContent = `Slot ${i}`;

    const meta = document.createElement("div");
    meta.className   = "slot-meta";
    meta.textContent = formatMeta(save);

    info.appendChild(title);
    info.appendChild(meta);

    const selectBtn = document.createElement("button");
    selectBtn.textContent = i === selectedSlot ? "✓ Activo" : "Elegir";
    selectBtn.addEventListener("click", () => {
      selectedSlot = i;
      renderSlots();
      renderChapterReplay();
      slotHintEl.textContent = `Slot ${i} seleccionado`;
    });

    card.appendChild(info);
    card.appendChild(selectBtn);
    slotsEl.appendChild(card);
  }

  slotHintEl.textContent = `Slot ${selectedSlot} seleccionado`;
}

// ── REJUGAR CAPÍTULOS ──
function renderChapterReplay() {
  chapterListEl.innerHTML = "";
  const save      = readSlot(selectedSlot);
  const completed = ensureArray(save?.completedChapters);

  if (!completed.length) {
    const p = document.createElement("p");
    p.className   = "hint";
    p.textContent = "Aún no hay capítulos completados en este slot.";
    chapterListEl.appendChild(p);
    return;
  }

  completed.forEach(ch => {
    const btn = document.createElement("button");
    btn.textContent = `↩  Cap. ${ch}: ${CHAPTER_TITLES[ch] || ""}`;
    btn.addEventListener("click", () => {
      showGame();
      gameFlags         = {};
      completedChapters = completed.slice();
      activeSlot        = selectedSlot;
      inventory         = [];
      startChapter(ch);
    });
    chapterListEl.appendChild(btn);
  });
}

// ── BOTONES ──
btnNew.addEventListener("click", () => {
  showGame();
  startNewRun(selectedSlot);
});

btnContinue.addEventListener("click", () => {
  const save = readSlot(selectedSlot);
  if (!save) {
    showGame();
    startNewRun(selectedSlot);
    return;
  }
  showGame();
  continueRun(selectedSlot);
});

btnDelete.addEventListener("click", () => {
  if (confirm(`¿Borrar el Slot ${selectedSlot}?`)) {
    clearSlot(selectedSlot);
    renderSlots();
    renderChapterReplay();
  }
});

btnSave.addEventListener("click", () => manualSave());

btnBackMenu.addEventListener("click", () => showMenu());

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => showMenu());
