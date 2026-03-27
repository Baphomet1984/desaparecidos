const nlp = require("compromise")

const estadosMexico = [
"aguascalientes","baja california","baja california sur","campeche",
"chiapas","chihuahua","coahuila","colima","durango",
"guanajuato","guerrero","hidalgo","jalisco","michoacan",
"morelos","nayarit","nuevo leon","oaxaca","puebla",
"queretaro","quintana roo","san luis potosi","sinaloa",
"sonora","tabasco","tamaulipas","tlaxcala","veracruz",
"yucatan","zacatecas","ciudad de mexico","estado de mexico"
]

function detectarSexo(texto){

texto = texto.toLowerCase()

if(texto.includes("mujer") || texto.includes("joven mujer") || texto.includes("desaparecida")){
return "F"
}

if(texto.includes("hombre") || texto.includes("joven hombre") || texto.includes("desaparecido")){
return "M"
}

return null
}

function detectarLugar(texto){

texto = texto.toLowerCase()

for(const estado of estadosMexico){
if(texto.includes(estado)){
return estado
}
}

return null
}

function extraerNombre(texto){

const doc = nlp(texto)

const personas = doc.people().out("array")

if(personas.length > 0){
return personas[0]
}

return null
}

function analizarTextoNoticia(texto){

const nombre = extraerNombre(texto)
const sexo = detectarSexo(texto)
const lugar = detectarLugar(texto)

return {
nombre,
sexo,
lugar
}

}

module.exports = { analizarTextoNoticia }
