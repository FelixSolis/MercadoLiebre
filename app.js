const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/home.html")
} );

app.listen(8080, ()=>console.log("Servidor corriendo en el puerto 8080."));