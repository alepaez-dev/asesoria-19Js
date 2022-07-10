const express = require("express");
const mongoose = require("mongoose");
const Koder = require("./models/koder.model")

const app = express()

// Middleware
app.use(express.json())


// al2658451+prueba19@gmail.com
const url = "mongodb+srv://ale:kodemia123@kodemia.ugpoa.mongodb.net/kodemia"
mongoose.connect(url)
.then(() => {
  console.log("Bd connected")

  app.listen(8080, (request, response) => {
    console.log("Nuestro servidor esta escuchando")
  })
})
.catch((err) => {
  console.log(err)
})

// Endpoint de HOME
app.get("/api", (request, response) => {
  // Documentacion
  response.json({
    message: "Endpoint de HOME, bienvenido"
  })
})

// Endpoints
app.post("/api/koders", async (request, response) => {
  const { body } = request
  try {
    const koder = await Koder.create(body)
    response.json({
      success: true,
      data: {
        koder
      }
    })
  }catch(error) {
    response.json({
      success: false,
      message: error.message
    })
  } 
})

// Path params -> modifican ruta
/**
 * Body -> request.body
 * Params -> request.params.id
 * Query -> request.query
 */
app.get("/api/koders/:id", async (request, response) => {
  try {
    const { id } = request.params
    const koder = await Koder.findById(id)
    response.json({
      success: true,
      data: {
        koder
      }
    })
  }catch(error) {
    response.status(404) // Not found
    response.json({
      success: false,
      message: error.message
    })
  }

})

// Queryparams
// NO modifican la ruta
app.get("/api/koders/", async (request, response) => {
  try {
    const filters = {} // No tengo ningun filtro

    if(request.query.hasOwnProperty("name")) {
      filters["name"] = request.query.name // ya tengo un filtro
    }

    console.log("filters", filters)
    const kodersFiltrados = await Koder.find(filters)
    response.json({
      success:true,
      data: {
        koders: kodersFiltrados
      }
    })
  }catch(err) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
 })