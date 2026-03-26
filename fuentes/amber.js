const axios = require("axios")
const cheerio = require("cheerio")

async function obtenerAmber(){

  const url = "https://alertaamber.gob.mx/"

  const res = await axios.get(url,{
    timeout:20000,
    headers:{
      "User-Agent":"Mozilla/5.0"
    }
  })

  const $ = cheerio.load(res.data)

  let casos = []

  $(".view-content .views-row").each((i,el)=>{

    const nombre = $(el).find(".views-field-title").text().trim()

    const link = $(el).find("a").attr("href")

    casos.push({
      nombre,
      edad:null,
      sexo:null,
      lugar:null,
      fecha_desaparicion:null,
      fecha_reporte:null,
      fuente:"Alerta Amber",
      link:"https://alertaamber.gob.mx"+link
    })

  })

  return casos
}

module.exports = obtenerAmber
