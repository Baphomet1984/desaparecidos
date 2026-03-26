const obtenerAmber = require("./fuentes/amber")
const obtenerRNPDNO = require("./fuentes/rnpdno")
const obtenerFiscalias = require("./fuentes/fiscalias")
const obtenerNoticias = require("./fuentes/noticias")
const obtenerTwitter = require("./fuentes/twitter")

async function ejecutarScraper() {

  let resultados = []

  try {
    const amber = await obtenerAmber()
    resultados.push(...amber)
  } catch(e){}

  try {
    const rnpdno = await obtenerRNPDNO()
    resultados.push(...rnpdno)
  } catch(e){}

  try {
    const fiscalias = await obtenerFiscalias()
    resultados.push(...fiscalias)
  } catch(e){}

  try {
    const noticias = await obtenerNoticias()
    resultados.push(...noticias)
  } catch(e){}

  try {
    const twitter = await obtenerTwitter()
    resultados.push(...twitter)
  } catch(e){}

  console.log("Casos encontrados:", resultados.length)

  console.log(resultados)

}

ejecutarScraper()
