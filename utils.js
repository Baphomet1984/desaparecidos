const fs = require("fs-extra")

const DB_FILE = "./desaparecidos.json"

async function cargarDB() {
  if (!await fs.pathExists(DB_FILE)) {
    await fs.writeJson(DB_FILE, [])
  }
  return await fs.readJson(DB_FILE)
}

async function guardarDB(data) {
  await fs.writeJson(DB_FILE, data, { spaces: 2 })
}

function existeCaso(db, nombre, fecha) {
  return db.find(
    c => c.nombre === nombre && c.fechaDesaparicion === fecha
  )
}

function generarID(db) {
  const num = db.length + 1
  return "CASO_" + String(num).padStart(4, "0")
}

module.exports = {
  cargarDB,
  guardarDB,
  existeCaso,
  generarID
}
