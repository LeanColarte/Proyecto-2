/*
var nombre = "Leandro Colarte";
var altura = 180;


var concatenar = nombre + " " + altura ;

var datos = document.getElementById("datos");

datos.innerHTML = `
    <h1>Soy la cajita de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura} cm</h3>
`;

//Condicional
if (altura>=170){
    datos.innerHTML += `
        <h1>Sos una persona ALTA</h1>
    `;
} else {
    datos.innerHTML += `
        <h1>Sos una persona BAJA</h1>
    `;
}


//Ciclo FOR 

for (var i = 2010; i<=2020; i++){

    datos.innerHTML +='<h2>Estamos en el año: ' + i;
}

function MostrarMiNombre(nombre, altura){
    var misDatos =  `
    <h1>Soy la cajita de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura} cm</h3>
`;
    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MostrarMiNombre("Leandro Algo", 180);
}

imprimir();

var nombres=['Leandro', 'Fernando', 'Marianela', 'Jose'];
document.write("<h1>Listado de nombres</h1>");

for (i = 0; i < nombres.length; i++){
    document.write(nombres[i] + "<br/>");
}


nombres.forEach(nombre => {
    document.write(nombre + "<br/>");  
});*/

var coche = {
    modelo : 'Peugeot 308',
    maxima : '200',
    antiguedad : '2015',
    mostrardatos(){
        console.log(this.modelo,this.maxima,this.antiguedad);
    },
    propiedad1: "valor x "
};

document.write("<h1>" + coche.maxima +"</h1>");
coche.mostrardatos();
console.log(coche);

let saludar = new Promise ((resolve,reject) => {
    setTimeout(() =>{
        let saludo = "Hola chicos que tal programacion 3?";
        saludo=false;

        if (saludo) {
            resolve(saludo);
        } else {
            reject('No hay saludo disponible');
        }
    }, 4000);
});
saludar
.then(resultado => {
    alert(resultado);
})
.catch(err =>{
    alert(err);
});