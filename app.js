const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
});

app.get("/Registro", (req, res) => {
    res.sendFile(__dirname + "/views/register.html")
});

app.get("/Login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html")
});

app.listen(port, () => console.log("Servidor corriendo en el puerto 8080."));