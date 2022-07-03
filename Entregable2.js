const fs = require("fs");

const objectoPrueba = {
    title: "Choripan",
    price: "100",
    url: "http: bla"
} 

const objectoPrueba2 = {
    title: "Queso",
    price: "500",
    url: "http: bla"
} 

const objectoPrueba3 = {
    title: "Helado",
    price: "700",
    url: "http: bla"
} 


class Contenedor{

    constructor (nombreArchivo)
    {

        this.nombreArchivo =  nombreArchivo;
        this.listaObj = new Array();
        this.id = 0;

    }

    async save(objeto){
        try{

            const contenido = await fs.promises.readFile(this.nombreArchivo, "utf-8")
            let objetoJson = JSON.parse(contenido)

            if(objetoJson.length == 0)
            {
                console.log("ENTRA POR IF")

                this.listaObj.push(objeto);

                console.log(this.listaObj[0])

                this.id++
                this.listaObj[0]["ID"] = this.id

                
                /*Escribe en el archivo Producto */
                let objetoString = JSON.stringify(this.listaObj, null, this.listaObj.length);

                await fs.promises.writeFile(this.nombreArchivo, objetoString)
                /* ************* */
                return console.log("El ID es: " + this.listaObj[0]["ID"])

            }
            else{
                console.log("ENTRA POR ELSE")

                let objeto2 = new Object(objeto)
                
                objeto2["ID"] = objetoJson[objetoJson.length-1]["ID"] + 1

                objetoJson.push(objeto2)

                /*Escribe en el archivo Producto */
                let objetoString = JSON.stringify(objetoJson, null, objetoJson.length);

                await fs.promises.writeFile(this.nombreArchivo, objetoString)
                 /* ************* */
            
                return console.log(objetoJson)

            }

            
        }
        catch (err){


            if(err.GetClass == ReferenceError.class){

                console.log("SE METIO POR ERROR")
                this.listaObj.push(objeto);

                console.log(this.listaObj[0])

                this.id++
                this.listaObj[0]["ID"] = this.id

                
                /*Escribe en el archivo Producto */
                let objetoString = JSON.stringify(this.listaObj, null, this.listaObj.length);

                await fs.promises.writeFile(this.nombreArchivo, objetoString)
                /* ************* */
                return console.log("El ID es: " + this.listaObj[0]["ID"])

            }
            return console.log("Error del error", err)

        }
        
    }
        
    async getById(num)
    {

        try{

            const contenido = await fs.promises.readFile(this.nombreArchivo, "utf-8")
            let objetoJson = JSON.parse(contenido)


            for(let i = 0; i<objetoJson.length; i++)
            {
                if(objetoJson[i]["ID"] == num)
                {
                    let obj = objetoJson[i]
                    return console.log(obj);

                } 

            }
        let obj = null
        console.log(obj)

        }
        catch(err)
        {

            return console.log("Hubo error", err)


        }
    }



    async getAll()
    {
        try
        {
            const contenido = await fs.promises.readFile(this.nombreArchivo, "utf-8")
            let objetoJson = JSON.parse(contenido)
        
            return console.log(objetoJson)

        }catch (err)
        {
            return console.log("Hubo error", err)
        }
        
    }

    async deleteById(id)
    {
        try
        {
            const contenido = await fs.promises.readFile(this.nombreArchivo, "utf-8")
            let objetoJson = JSON.parse(contenido)

            for(let i = 0; i<objetoJson.length; i++)
            {

                if(objetoJson[i]["ID"] == id)
                {
                    objetoJson.splice(i,1);

                    /*Escribe en el archivo Producto */
                    let objetoString = JSON.stringify(objetoJson, null, objetoJson.length);
                    await fs.promises.writeFile(this.nombreArchivo, objetoString);
                    /* -------------  */
                    
                    return console.log(objetoJson);
                } 

            }

            let obj = null
            console.log(obj)

            console.log(objetoJson)
            
            
        } catch (err)
        {

            return console.log("Hubo error", err)

        }
    }


    async deleteAll(){

        try{

            await fs.writeFileSync(this.nombreArchivo, "[]");

        }
        catch(err){

            return console.log("Hubo error", err)
        }
        
    }

}

const producto = new Contenedor("./Productos.txt")

/* Guardar un objeto por vez funciona perfecto */
producto.save(objectoPrueba2)


/* Guardar varios objetos por vez el funcionamiento es aleatorio y guarda cualquiera */

/* producto.save(objectoPrueba)
producto.save(objectoPrueba2)
producto.save(objectoPrueba3) */


/* producto.getById(1);
producto.getById(5); */


/* producto.getAll(); */


/* producto.deleteById(3) */

/* producto.deleteAll() */









