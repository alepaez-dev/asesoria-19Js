const fs  = require("fs")

const unaFuncion = () => {
  console.log("funcion que imprime")
}

const unArray = ["hola2", 10, unaFuncion]
// length -> 3
// su ultimo indice -> 2

// Destructuracion
// request/body -> es un objeto
// Siempre estan haciendo variables nuevas
const otroArreglo = ["primerindice", "segundoindice", "tercerindice"];

const [variable1, variable2] = otroArreglo
// console.log("variable1", variable1)
// console.log("variable2", variable2)

// Que en BODY -> Esta todo lo que va a mandar para crear, actualizar, etc. POST, PATCH, PUT
// Que en QUERY -> Esta todas las queries, -> ?modulo=react
// Que en PATH ->  Esta si modifica la ruta -> /:id
const request = {
  body: {
    name: "Alejandra",
    gen: "19Js"
  },
  query: {
    modulo: "react"
  },
  params: {
    id: "267478399022"
  }
}

// console.log("1 nivel", request)
// console.log("2 nivel", request.params)
// console.log("3 nivel", request.params.id)

// Destructure
const { name, gen } = request.body

// Callbacks
const koders = () => {
  fs.readFile("koders.json", "utf-8", (error, data) => {
  // Logica negativa, 
  if(error) {
    // Si hay un error
    console.log("error", error)
    return // Te sales
  } 
  // Continuar con mi vida
  const json = JSON.parse(data) // Json parseado
  const mentores = json["mentores"]
  const koders2 = json["koders"]
  const Bere = koders2[1]

  const request = {
    body: {
      name: "Ale"
    }
  }
  request.body["modulo"] = "19Js"
  console.log("body", request.body)
  console.log("modulo", request.body.modulo)
  })
}
koders()
