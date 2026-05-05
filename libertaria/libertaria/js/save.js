const SLOT_COUNT  = 3;
const SLOT_PREFIX = "libertaria_slot_v2_";

function slotKey(n)    { return SLOT_PREFIX + n; }

function readSlot(n) {
  try {
    const raw = localStorage.getItem(slotKey(n));
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function writeSlot(n, data) {
  try { localStorage.setItem(slotKey(n), JSON.stringify(data)); } catch (e) {}
}

function clearSlot(n) {
  localStorage.removeItem(slotKey(n));
}

function nowTs()        { return Date.now(); }
function ensureArray(x) { return Array.isArray(x) ? x : []; }
