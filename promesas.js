/**
 * Status - Accepted, Rejected, Pending
 * 
 * 2 Posibilades - Se cumple, o no se cumple
 * (resolve, reject)
 * 
 * El then recibe el resolve
 * El catch recibe el reject
 * 
 * 2 Tipos Ejecuciones - Cuando se cumple, y cuando no se cumple
 * Las ejecucion de una promesa es para ver que posibilidad paso
 * (then, catch) 
 * async/await -> try {
 * }catch{
 * }
 * 
 * REGLA: Que regresa una funcion async ? -> promesa
 * 
 */

const promesa = (seCumple) => {
  return new Promise((resolve, reject) => {
    if(!seCumple) {
      // Posibilidad 2 -> Es rechazada, no se cumple
      reject("Hubo un error")
      return
    }
    // Posibilidad 1 -> Se resuelve, se cumple
    console.log("Se resolvio woohoo")
    resolve("Promesa resuelta")
  })
}

// promesa(true) // promesa
// .then((resultado) => {
//   console.log("promesa exitosa", resultado)
// })
// .catch((err) => {
//   console.log("promesa rechazada", err)
// })

// Syncrona -> 1 despues de otro, que se espera por automatico
// Asyncrina - > el de los tacos, que va a hacer lo que se haga mas rapido
// Mongoose va a tardar en traere 1millon de koders. // 10s
const funcionAsync = async () => {
  try {
    const resultadoPromesa = await promesa(true)
    console.log("resultadoPromesa ADENTRO de mi funcion", resultadoPromesa)
    return resultadoPromesa
  }catch(err) {
    console.log("err", err)
  }
}
funcionAsync()no
.then((resultado) => {
  console.log("despues", resultado)
})
.catch((err) => {
  console.log(err)
})