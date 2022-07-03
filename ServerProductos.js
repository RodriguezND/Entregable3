const express = require("express")
const moment = require("moment")
const Contenedor = require("./Entregable2");

const app = express()
const PORT = 8080

const server = app.listen(PORT, () => {

    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)

})

server.on("Error", error => console.log(`Error en servidor ${error}`))

app.get("/productos", (req, res) => {  

    const produ = new Contenedor("./Productos.txt")

    let proString = produ.getAllSync()

    console.log("Tipo prostring: " + typeof proString)
    console.log("Tipo funcion: " + typeof produ.getAllSync())

    /* let proObj = JSON.stringify(proString, null, proString.length); */

    res.send("Prueba para ver el objeto: " + proString)

})