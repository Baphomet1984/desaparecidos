const obtenerNoticias = require("./fuentes/noticias")

async function probar(){

const casos = await obtenerNoticias()

console.log("Casos encontrados:", casos.length)

console.log(JSON.stringify(casos.slice(0,5), null, 2))

}

probar()
