const express = require("express")
const moment = require("moment")
const Contenedor = require("./Entregable2");

const app = express()
const PORT = 8080
const produ = new Contenedor("./Productos.txt")

const server = app.listen(PORT, () => {

    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)

})

server.on("Error", error => console.log(`Error en servidor ${error}`))

app.get("/productos", async (req, res) => {  

    let proString = await produ.getAll()

    /* let proObj = JSON.stringify(proString, null, proString.length); */

    res.send(proString)

})