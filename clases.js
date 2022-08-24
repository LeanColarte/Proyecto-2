class Coche {
    constructor(modelo,velocidad,antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad (){
        this.velocidad += 5;
    }

    reducirVelocidad (){
        this.velocidad -= 1;
    }
}

var coche1 = new Coche ("Peugeot", 200, 2014);
var coche2 = new Coche ("Fiat", 200, 2018);
var coche3 = new Coche ("Renault", 200, 2011);
var coche4 = new Coche ("Chevrolet", 200, 2019);

document.write ("<h1>Velocidad: " + coche1.velocidad + "</h1>")

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

document.write ("<h1>Velocidad: " + coche1.velocidad + "</h1>")