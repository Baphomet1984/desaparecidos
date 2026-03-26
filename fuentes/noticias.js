const axios = require("axios")

async function obtenerNoticias(){

  const url = "https://news.google.com/rss/search?q=desaparecido+Mexico"

  const res = await axios.get(url)

  const xml = res.data

  const items = xml.split("<item>")

  let casos = []

  items.forEach(i=>{

    const title = i.match(/<title>(.*?)<\/title>/)

    if(title){

      casos.push({
        nombre:title[1],
        edad:null,
        sexo:null,
        lugar:null,
        fecha_desaparicion:null,
        fecha_reporte:null,
        fuente:"Noticias",
        link:null
      })

    }

  })

  return casos

}

module.exports = obtenerNoticias
