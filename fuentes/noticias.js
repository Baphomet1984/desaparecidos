const { analizarTextoNoticia } = require("../utils/nlp")
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

     const analisis = analizarTextoNoticia(titulo)

casos.push({
nombre: analisis.nombre || titulo,
edad:null,
sexo: analisis.sexo,
lugar: analisis.lugar,
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
