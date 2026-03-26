const axios = require("axios")
const cheerio = require("cheerio")

async function obtenerTwitter(){

  const url = "https://nitter.net/search?f=tweets&q=desaparecido+Mexico"

  const res = await axios.get(url,{
    headers:{
      "User-Agent":"Mozilla/5.0"
    }
  })

  const $ = cheerio.load(res.data)

  let casos = []

  $(".timeline-item").each((i,el)=>{

    const texto = $(el).find(".tweet-content").text().trim()

    casos.push({
      nombre:texto,
      edad:null,
      sexo:null,
      lugar:null,
      fecha_desaparicion:null,
      fecha_reporte:null,
      fuente:"Twitter",
      link:url
    })

  })

  return casos

}

module.exports = obtenerTwitter
