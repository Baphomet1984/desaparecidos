const axios = require("axios")
const cheerio = require("cheerio")

async function obtenerAlertasAmber() {

  const url = "https://alertaamber.gob.mx/"
  const { data } = await axios.get(url)

  const $ = cheerio.load(data)

  const resultados = []

  $(".ficha").each((i, el) => {

    const nombre = $(el).find(".nombre").text().trim()
    const descripcion = $(el).find(".descripcion").text().trim()

    resultados.push({
      nombre,
      edad: null,
      sexo: null,
      estatus: "alerta",
      fechaDesaparicion: new Date().toISOString().split("T")[0],
      ultimaActualizacion: new Date().toISOString(),
      descripcion,
      ubicacion: "Puebla",
      lat: null,
      lon: null,
      contacto: "",
      foto: "",
      url,
      fuente: "Alerta Amber México",
      fuenteTipo: "amber"
    })

  })

  return resultados
}

module.exports = obtenerAlertasAmber
