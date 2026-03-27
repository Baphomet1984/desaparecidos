const { analizarTextoNoticia } = require("./utils/nlp")

const titulares = [
"Buscan a María López desaparecida en Sonora",
"Familia pide ayuda para localizar a Juan Pérez en Jalisco",
"Madres buscadoras protestan en Mazatlán",
"Hallan sin vida a sacerdote en México"
]

titulares.forEach(t => {
const resultado = analizarTextoNoticia(t)
console.log(t)
console.log(resultado)
console.log("-----")
})
