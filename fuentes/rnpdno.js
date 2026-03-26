const axios = require("axios")

async function obtenerRNPDNO(){

  const url = "https://versionpublicarnpdno.segob.gob.mx/Busqueda"

  const res = await axios.get(url,{
    headers:{
      "User-Agent":"Mozilla/5.0"
    }
  })

  let casos = []

  if(res.data && res.data.resultados){

    res.data.resultados.forEach(c=>{

      casos.push({
        nombre:c.nombre,
        edad:c.edad,
        sexo:c.sexo,
        lugar:c.estado,
        fecha_desaparicion:c.fechaDesaparicion,
        fecha_reporte:c.fechaRegistro,
        fuente:"RNPDNO",
        link:"https://versionpublicarnpdno.segob.gob.mx/"
      })

    })

  }

  return casos

}

module.exports = obtenerRNPDNO
