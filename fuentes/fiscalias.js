const axios = require("axios")
const cheerio = require("cheerio")

async function obtenerFiscalias(){

  const url = "https://fge.jalisco.gob.mx/personas-desaparecidas"

  const res = await axios.get(url,{
    headers:{
      "User-Agent":"Mozilla/5.0"
    }
  })

  const $ = cheerio.load(res.data)

  let casos = []

  $("article").each((i,el)=>{

    const nombre = $(el).find("h2").text().trim()

    casos.push({
      nombre,
      edad:null,
      sexo:null,
      lugar:"Jalisco",
      fecha_desaparicion:null,
      fecha_reporte:null,
      fuente:"Fiscalía Jalisco",
      link:url
    })

  })

  return casos

}

module.exports = obtenerFiscalias
