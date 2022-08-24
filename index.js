"use strict";

var mongoose = require("mongoose");
var app = require('./app');

var port = 3900;

mongoose.promise = global.promise;

mongoose
    .connect("mongodb://localhost:27017/api_rest_blog", {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    })
    .then(() => {
        console.log("Conexión OK!!!");
        // Crear servidor y escuchar peticiones HTTP
        app.listen(port, () => {

            console.log('servidor corriendo en http://localhost:' + port);
        });
        
    });