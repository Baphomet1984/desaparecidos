const estados = {
  "cdmx": "Ciudad de México",
  "ciudad de mexico": "Ciudad de México",
  "edomex": "Estado de México",
  "mexico": "Estado de México",
  "nuevo leon": "Nuevo León",
  "nl": "Nuevo León",
  "jalisco": "Jalisco"
}

function limpiarTexto(texto){
  if(!texto) return null

  return texto
    .replace(/\s+/g," ")
    .replace(/[\n\r\t]/g,"")
    .trim()
}

function normalizarNombre(nombre){

  if(!nombre) return null

  nombre = limpiarTexto(nombre).toLowerCase()

  return nombre
    .split(" ")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ")
}

function normalizarSexo(sexo){

  if(!sexo) return null

  sexo = sexo.toLowerCase()

  if(sexo.includes("mujer") || sexo.includes("femen")) return "F"
  if(sexo.includes("hombre") || sexo.includes("mascul")) return "M"

  return null
}

function normalizarEstado(estado){

  if(!estado) return null

  estado = estado.toLowerCase().trim()

  if(estados[estado]) return estados[estado]

  return estado.charAt(0).toUpperCase() + estado.slice(1)
}

function normalizarFecha(fecha){

  if(!fecha) return null

  const d = new Date(fecha)

  if(isNaN(d)) return null

  return d.toISOString().split("T")[0]
}

function normalizarCaso(caso){

  return {
    nombre: normalizarNombre(caso.nombre),
    edad: caso.edad || null,
    sexo: normalizarSexo(caso.sexo),
    lugar: normalizarEstado(caso.lugar),
    fecha_desaparicion: normalizarFecha(caso.fecha_desaparicion),
    fecha_reporte: normalizarFecha(caso.fecha_reporte),
    fuente: caso.fuente || "desconocida",
    link: caso.link || null
  }
}

module.exports = {
  normalizarCaso
}
