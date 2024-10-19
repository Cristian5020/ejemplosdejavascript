// Funciones
function sumar(a, b) {
    a=3;
    b=5;
    let total = a+b;
    console.log('La suma de 3 + 5 es: ', total);
}

function hola(nombre) {
    console.log("Hola, " + nombre);
}

function saludar(){
    let n=prompt('Ingrese su nombre');
    hola(n);
}

function pedirradio (){
    let radio = prompt ('Ingrese un numero para calcular el area de un circulo');
    let area = areaCirculo (radio);
    console.log('El área del circulo es ', + area);  
}

function areaCirculo(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area
}

function numMayor(num1, num2){
    return num1 > num2 ? num1 : num2;
}

function procesarNum(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let mayor = numMayor(numero1, numero2);

    alert('El numero mayor es: ' + mayor)

    document.getElementById("numero1").value = '';
    document.getElementById("numero2").value = '';
    
    return false;
}

function espar(numero){
    return numero % 2 === 0;
}

function inNum (){
    let num = parseFloat(document.getElementById("num").value);
    let parimpar = espar(num);

    if (parimpar){
        alert("True: El número es par");
    } else {
        alert("False: El número es impar")
    } 
    
    document.getElementById("num").value = '';
    
    return false;
}

function calPromedio(array) {
    if (array.length === 0) return 0;

    let suma = 0; 

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    return suma / array.length;
}

function proceso(){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let c = parseFloat(document.getElementById("num3").value);
    let d = parseFloat(document.getElementById("num4").value);
   
    const numeros = [a, b, c, d];
    const promedio = calPromedio(numeros);
    alert("El promedio es: " + promedio); 

    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("num3").value = '';
    document.getElementById("num4").value = '';

    return false;
}



// Condicionales
function calificacionNota(nota) {
    if (nota >= 60) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
}

function mostrarDia(dia) {
    switch (dia) {
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miércoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sábado"); break;
        case 7: console.log("Domingo"); break;
        default: console.log("Día no válido");
    }
}

function verificarSemaforo(color) {
    switch (color) {
        case "verde": console.log("Puedes avanzar"); break;
        case "amarillo": console.log("Precaución"); break;
        case "rojo": console.log("Detente"); break;
        default: console.log("Color no válido");
    }
}

// Operador ternario
function esMayorDeEdad(edad) {
    console.log(edad >= 18 ? "Mayor de edad" : "Menor de edad");
}

function esParOImpar(numero) {
    console.log(numero % 2 === 0 ? "Par" : "Impar");
}

function mayorNumero(a, b) {
    console.log(a > b ? a : b);
}

function mostrarTemperatura(temp) {
    console.log(temp >= 30 ? "Calor" : "Frío");
}

// Ciclos
function mostrarNumeros() {
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function sumaHasta100() {
    let suma = 0, i = 1;
    while(i <= 100) {
        suma += i;
        i++;
    }
    console.log("Suma total:", suma);
}

function tablaMultiplicar(num) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

function primerosPares() {
    let num = 0, count = 0;
    while(count < 10) {
        if(num % 2 === 0) {
            console.log(num);
            count++;
        }
        num++;
    }
}

function pedirNumeros() {
    let num;
    do {
        num = prompt("Introduce un número (negativo para salir):");
        console.log(`Número introducido: ${num}`);
    } while (num >= 0);
}

function contarAEnPalabra(palabra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    console.log(`La letra 'a' aparece ${contador} veces en la palabra "${palabra}"`);
}

// Objetos
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
console.log(persona.nombre, persona.edad, persona.ciudad);

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    descripcion: function() {
        console.log(`${this.marca} ${this.modelo} del año ${this.año}`);
    }
};
coche.descripcion();

let rectangulo = {
    ancho: 5,
    alto: 10,
    area: function() {
        return this.ancho * this.alto;
    }
};
console.log("Área del rectángulo:", rectangulo.area());

let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
    descripcion: function() {
        console.log(`${this.titulo} de ${this.autor}, publicado en ${this.año}`);
    }
};
libro.descripcion();

let usuario = {
    nombre: "Cristian",
    contraseña: "123456",
    verificarContraseña: function() {
        console.log(this.contraseña === "123456" ? "Contraseña correcta" : "Contraseña incorrecta");
    }
};
usuario.verificarContraseña();

let gato = {
    nombre: "Misu",
    edad: 3,
    mostrarInfo: function() {
        console.log(`${this.nombre} tiene ${this.edad} años.`);
    }
};
gato.mostrarInfo();

// Arrays
let numeros = [10, 20, 30, 40, 50];
console.log("Primer elemento:", numeros[0]);
console.log("Último elemento:", numeros[numeros.length - 1]);

let ciudades = ["Quito", "Lima", "Bogotá", "Santiago", "Buenos Aires"];
console.log("Segunda ciudad:", ciudades[1]);

function sumarArray() {
    let arrayNumeros = [];
    for (let i = 0; i < 5; i++) {
        arrayNumeros[i] = parseInt(prompt(`Introduce el número ${i + 1}:`));
    }
    let suma = arrayNumeros.reduce((a, b) => a + b, 0);
    console.log("Suma total de los números:", suma);
}

function mostrarPalabras() {
    let palabras = ["Hola", "Mundo", "JavaScript", "Es", "Genial"];
    palabras.forEach(palabra => {
        console.log(palabra);
    });
}

function pedirNombres() {
    let nombres = [];
    for (let i = 0; i < 5; i++) {
        nombres[i] = prompt(`Introduce el nombre ${i + 1}:`);
    }
    console.log("Nombres introducidos:", nombres);
}

function contarMayores50() {
    let numeros = [];
    let contador = 0;
    for (let i = 0; i < 10; i++) {
        numeros[i] = parseInt(prompt(`Introduce el número ${i + 1}:`));
        if (numeros[i] > 50) contador++;
    }
    console.log(`${contador} números son mayores a 50`);
}

// Arrays de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Juan", edad: 28 }
];
personas.forEach(persona => {
    console.log(persona.nombre);
});

let coches = [
    { marca: "Toyota", modelo: "Corolla" },
    { marca: "Honda", modelo: "Civic" },
    { marca: "Ford", modelo: "Fiesta" },
    { marca: "Chevrolet", modelo: "Cruze" },
    { marca: "Nissan", modelo: "Sentra" }
];
coches.forEach(coche => {
    console.log(coche.modelo);
});

let productos = [
    { nombre: "TV", precio: 300 },
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Teléfono", precio: 800 },
    { nombre: "Teclado", precio: 40 },
    { nombre: "Mouse", precio: 25 }
];
productos.forEach(producto => {
    if (producto.precio > 100) {
        console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
    }
});

let alumnos = [
    { nombre: "Pedro", nota: 85 },
    { nombre: "María", nota: 45 },
    { nombre: "Carlos", nota: 60 }
];
alumnos.forEach(alumno => {
    if (alumno.nota >= 60) {
        console.log(`${alumno.nombre} ha aprobado`);
    }
});

let libros = [
    { titulo: "El Quijote", autor: "Miguel de Cervantes" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "La Odisea", autor: "Homero" }
];
libros.forEach(libro => {
    console.log(libro.titulo);
});

let peliculas = [
    { titulo: "Inception", director: "Christopher Nolan", año: 2010 },
    { titulo: "Titanic", director: "James Cameron", año: 1997 },
    { titulo: "The Matrix", director: "Lana y Lilly Wachowski", año: 1999 }
];
peliculas.forEach(pelicula => {
    console.log(`${pelicula.titulo}, dirigida por ${pelicula.director} en el año ${pelicula.año}`);
});
