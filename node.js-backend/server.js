const express = require("express")
const app = express() 

app.get("", (req,res) => {

})

app.get("/api/", (req,res) => {
    res.json({"servicios": ["Home","Marketing", "Diseño", "Web", "Edición", "Contaduria", "Sobre nosotros"], "datos":["patata","zanahoria","mermelada"]})
})

app.get("/api/:servicio", (req, res) => {

    res.json({"Marketing":["Administración de redes sociales", "Creación de marca (estudio de mercado y branding)", 
    "Analista de marketing digital", "Diseño de correos profesionales"],
    "Diseño":["Diseño de logo", "Diseño de Flyers basicos", "Diseño de Gigantografias"], 
    "Web":["Creación de Catalogos Digitales", "Diseño de paginas web"], 
    "Edición":["Edición fotografica", "Edición de video", "Renovación de marca"], 
    "Contaduria":["Inicio de actividades"]})
   
})

app.listen(7500, () => {console.log("Server started on port 7500")})

