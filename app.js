"use strict";

//Cargar módulos de NODE para crear el servidor
var express = require("express");

var bodyParser = require("body-parser");

// Ejecutar express para HTTP
var app = express();

// Cargar archivos de rutas
var article_routes = require('./routes/article');

// Cargar middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Activar Cors
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


// Añadir prefijos a las rutas
app.use('/api', article_routes);


// Ruta prueba
/*app.get("/datoscurso", (req,res) => {
    var hola = req.body.hola;
    return res.status(200).send (
        {
        curso: "Programacion 3",
        autor: "Leandro Colarte",
        url: "www.nslp.com.ar",
        hola,
    });
});*/

// Esportar el módulos 
module.exports = app;