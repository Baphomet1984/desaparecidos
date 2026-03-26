const obtenerAlertasAmber = require("./fuentes/amber.js")
const {
  cargarDB,
  guardarDB,
  existeCaso,
  generarID
} = require("./utils")

async function ejecutarScraper() {

  const db = await cargarDB()

  const casos = await obtenerAlertasAmber()

  for (const caso of casos) {

    const existente = existeCaso(
      db,
      caso.nombre,
      caso.fechaDesaparicion
    )

    if (!existente) {

      const nuevo = {
        id: generarID(db),
        ...caso,

        historial: [
          {
            fecha: caso.fechaDesaparicion,
            estatus: caso.estatus,
            nota: "Registro inicial desde scraping"
          }
        ],

        creadoEn: new Date().toISOString()
      }

      db.push(nuevo)

      console.log("Nuevo caso agregado:", caso.nombre)

    } else {

      existente.ultimaActualizacion = new Date().toISOString()

    }

  }

  await guardarDB(db)

  console.log("Scraping terminado")

}

ejecutarScraper()
