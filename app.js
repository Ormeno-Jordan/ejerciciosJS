//Intro a JavaScript"

//ejercicio 1//
let miNombre
miNombre = "Jordan"
console.log(miNombre)

//ejercicio 2//
let miApellido
miApellido = "Ormeño"
console.log(miApellido)

//ejercicio 3//
let miEdad
miEdad = "33"
console.log(miEdad)

//ejercicio 4//
let miMascota
miMascota = "gata"
console.log(miMascota)

//ejercicio 5//
let edadMascota
edadMascota = "4"

//ejercicio 6//
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota)

//ejercicio 7//
let nombreCompleto
nombreCompleto = miNombre + " " + miApellido
console.log(nombreCompleto)

//ejercicio 8//
let textoPresentación = (`Hola, mi nombre es ${miApellido} ${miNombre}, tengo ${miEdad} años de edad y una ${miMascota} que tiene ${edadMascota} años.`);
console.log(textoPresentación)

//ejercicio 9//
let sumaEdades = miEdad + edadMascota;
console.log(sumaEdades);

let restaEdades = miEdad - edadMascota;
console.log(restaEdades);

let productoEdades = miEdad * edadMascota;
console.log(productoEdades);

let divisionEdades = miEdad / edadMascota;
console.log(divisionEdades)

//ejercicio 10//
let textoPresentación1 = (`Hola, mi nombre es ${miApellido} ${miNombre}, tengo ${miEdad} años de edad y una ${miMascota} que tiene ${edadMascota} años. Su edad, sumada a la mía, da cómo resultado ${sumaEdades}. Si restamos su edad a la mía da ${restaEdades}. Ahora, si multiplicamos nuestras edades, el resultado será ${productoEdades}. Pero si lo dividimos, será ${divisionEdades}`);
console.log(textoPresentación1)

//ejercicio 11//
let student = {
    name: 'Lionel',
    lastname: 'Messi',
    nacionalidad: 'Argentina',
    age: '35',
    worldcups: '1'
}
console.table(student);

//ejercicio 12//
let pet = {
    name: 'Susana',
    animal: 'gato',
    gender: 'hembra',
    age: '4',
    color: 'negro'
}
console.table(pet);
console.log(pet.name);
console.log(pet.animal);
console.log(pet.gender);
console.log(pet.age);
console.log(pet.color);

//ejercicio 13//
let fruits = ["uva", "sandía", "melon", "frutilla", "pera"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

//ejercicio 14//
let oddNumbers = ["1", "3", "5", "7", "9"];

console.log(oddNumbers);
console.log(oddNumbers[0]);
console.log(oddNumbers[1]);
console.log(oddNumbers[2]);
console.log(oddNumbers[3]);
console.log(oddNumbers[4]);

//ejercicio 15//
let family = ["mamá", "hermano", "papá", "tío", "prima"];

console.log(family);
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);

//ejercicio 16//
let textoAleatorio = (`Mi ${family[1]} cumplió ${oddNumbers[3]} años ésta semana, asi que le regalé una ${fruits[4]}, ya que es su fruta favorita.`);
console.log(textoAleatorio);

//ejercicio 17//
let suEdad = prompt("Ingrese su edad");
let edadCompañero = prompt("Ingrese la edad de su compañero");
let edadesIguales = "false";
let soyMayor ="true";
let soyMenor ="false";

if(suEdad == edadCompañero){
    let edadesIguales = true;
    console.log(`Mi edad es igual a la de mi compañero: ${edadesIguales}`);
    console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
    console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);

}else if(suEdad > edadCompañero){
    let soyMayor = true;
    console.log(`Mi edad es igual a la de mi compañero: ${edadesIguales}`);
    console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
    console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);
}else{
    let soyMenor = true;
    console.log(`Mi edad es igual a la de mi compañero: ${edadesIguales}`);
    console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
    console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);
}

//ejercicio 18//
let soyMayorDeEdad = "33";

let varEdad = prompt("Ingrese su edad actual");
if(varEdad >= 18){
    soyMayorDeEdad = varEdad;
    console.log(`Usted tiene ${soyMayorDeEdad} años, por lo tanto es mayor.`);
}else{
    console.log("Usted no es mayor de edad");
}

//ejercicio 19//
let Age = prompt("Ingrese la edad del cliente");
let Height = prompt("Ingrese la altura del cliente");
let puedeSubir = "Puede subir a la atracción";
let noPuedeSubir = "No puede subir a la atracción";

if((Age > 5) && (Height >= 135)){
    console.log(puedeSubir);
}else{
    console.log(noPuedeSubir);
}

//ejercicio 20//
let ticket = prompt("Ingrese su ticket (VIP / NORMAL / LIMITADO / NINGUNO)");
let cashAvailable = prompt("¿Cuánto es su dinero disponible");

if((ticket == "VIP") || (cashAvailable >= 1000)){
    console.log(`Usted tiene ticket ${ticket} o tiene ${cashAvailable}, por lo tanto puede Pasar`);
}else{
    console.log("Usted no puede pasar");
} 

//Condicionales//

//ejercicio 1//
let number1 = 10;
let number2 = 8;

if (number1 > number2){
    console.log("El primer número es mayor que el segundo");
}else{
    console.log("El segundo número es mayor que el primero");
}

//ejercicio 2//
let number3 = 1;
let number4 = 1;

if (number3 == number4){
    console.log("Los números ingresados son iguales");
}else{
    console.log("Los números ingresados son diferentes");
}

//ejercicio 3//
let number5 = 8;
let number6 = 7;

if(number5 > number6){
    console.log("El primer número es mayor que el segundo");
}else if(number6 > number5){
    console.log("El segundo número es mayor que el primero");
}else{
    console.log("Los números son idénticos");
}

//ejercicio 4//
let number7 = 100;
let number8 = 100;
let number9 = 100;

if((number9 > number7) && (number8 > number7)){
    console.log("El primer número es el más pequeño");
}else if((number9 > number8) && (number7 > number8)){
    console.log("El segundo número es el más pequeño");
}else if((number8 > number9) && (number7 > number9)){
    console.log("El tercer número es el más pequeño");
}else{
    console.log("Los números son idénticos")
}

//ejercicio 5//
let personA = {
    name: "Gonzalo",
    height: "180",
    age: "15"
}

let personB = {
    name: "Pedro",
    height: "172",
    age: "20"
}

if(personA.age > personB.age){
    console.log(`${personA.name} es mayor que ${personB.name}`)
}else{
    console.log(`${personA.name} es menor que ${personB.name}`)
}

if(personA.height > personB.height){
    console.log(`${personA.name} es más alto que ${personB.name}`)
}else{
    console.log(`${personA.name} es menos alto que ${personB.name}`)
}

//ejercicio 6//
let personC = {
    name: prompt("Ingrese su nombre"),
    age: prompt("Ingrese su edad"),
    height: prompt("Ingrese su altura"),
    visionSkill: prompt("Ingrese su nivel de visión (0-10)")
}

if((personC.age >= 18) && (personC.height >= 150) && (personC.visionSkill >= 8)){
    console.log("Usted está habilitado para conducir");
}else{
    console.log("Usted no está habilitado para conducir");
}

//ejercicio 7//
let myName = "jordan";
let personD = prompt ("Ingrese su nombre");
let ticket1 = prompt ("¿Tiene entrada? (si/no/s/n)");
let ticketClass = prompt ("Tipo de entrada (vip/normal/no tengo)");
let buyTicket = "";
let pay = "";

if((personD == "jordan") || (ticket1 == "si") || (ticket1 == "s") || (ticketClass == "vip") || (ticketClass == "normal")) {
    console.log("Bienvenido, puede ingresar");
}else if((myName != "jordan") || (ticket1 == "no") || (ticket1 == "n") || (ticketClass == "no tengo")){
    buyTicket = prompt("Usted no tiene ticket ¿Desea comprar uno? (si/no)");
    if(buyTicket == "si"){
        pay = prompt("Ingrese $1.000 USD");
        if(pay == "1000"){
            console.log("Bienvenido/a");
        }else{
            console.log("Hasta luego");
        } 
    }else{
        console.log("Hasta luego");
}}
else{
    console.log("Ha ingresado algún valor incorrecto. Vuelva a intentarlo");
}

//ejercicio 8// INCOMPLETO
let numeroIncognita = "5";
var counter = "";
let numeroIngresado = prompt("Ingrese un número al azar del 1 al 10");
let numeroIngresado2 = "";
let numeroIngresado3 = "";

if((numeroIngresado != numeroIncognita) && (counter < 3)){
    counter = 2;
    numeroIngresado2 = prompt("Ingrese nuevamente un número");
}else if((numeroIngresado2 != numeroIncognita) && (counter < 3)){
    counter = 3;
    numeroIngresado3 = prompt("Ingrese nuevamente un número");
}else if((numeroIngresado3 != numeroIncognita) && (counter < 3)){
    console.log("Lo sentimos. No ha adivinado el número");
}else{
    console.log("Felicidades. Ha adivinado el número");
}

//ejercicio 9// INCOMPLETO
let edad = prompt("Ingrese su edad");

if((edad > 0) && (edad <= 12)){
    console.log("Eres un infante")
}else if((edad > 12) && (edad <= 18)){
    console.log("Eres un adolescente");
}else if((edad > 18) && (edad <= 45)){
    console.log("Eres un joven mayor");
}else if((edad > 45) && (edad <= 100)){
    console.log("Eres un anciado");
}else{
    console.log("¿Es realmente ésa tu edad?");
}

//ejercicio 10// INCOMPLETO
let playerOne = prompt("(jugador 1) ingrese su nombre");
let playerTwo = prompt("(jugador 2) ingrese su nombre");
let opt1 = "PIEDRA";
let opt2 = "PAPEL";
let opt3 = "TIJERAS";
let optPlayerOne = prompt(`${playerOne} ingrese una Opción: (PIEDRA/PAPEL/TIJERAS)`);
let optPlayerTwo = prompt(`${playerTwo} ingrese una Opción: (PIEDRA/PAPEL/TIJERAS)`);

if((optPlayerOne == "PIEDRA") && (optPlayerTwo == "TIJERAS") || (optPlayerOne == "TIJERAS") && (optPlayerTwo == "PAPEL")){
    console.log(`Felicidades, ${playerOne} ha ganado`);
}else if((optPlayerTwo == "PIEDRA") && (optPlayerOne == "TIJERAS") || (optPlayerTwo == "TIJERAS") && (optPlayerOne == "PAPEL")){
    console.log(`Felicidades, ${playerTwo} ha ganado`);
}else if((optPlayerOne != "PIEDRA") && (optPlayerOne != "PAPEL") && (optPlayerOne != "TIJERAS")){
    console.log(`${playerOne} está haciendo trampas`);
}else if((optPlayerTwo != "PIEDRA") && (optPlayerTwo != "PAPEL") && (optPlayerTwo != "TIJERAS")){
    console.log(`${playerOne} está haciendo trampas`);
}else{
    console.log("Ha sido empate");
}

//ejercicio 11//
let color = prompt("Ingrese un color(primera letra en Mayúscula)");

switch(color){
    case "Blanco": console.log("Falta de color");
    break;
    case "Negro": console.log("Falta de color");
    break;
    case "Verde": console.log("El color de la naturaleza");
    break;
    case "Azul": console.log("El color del agua");
    break;
    case "Amarillo": console.log("El color del sol");
    break;
    case "Rojo": console.log("El color del fuego");
    break;
    case "Marrón": console.log("El color de la tierra");
    break;
    default: console.log("Excelente elección. No lo teníamos pensado");
    break;
}

//ejercicio 12//
let chooseOperation = prompt("¿Qué operación desea realizar? (SUMA/RESTA/MULTIPLICACIÓN/DIVISIÓN)");
let firstValue = Number(prompt("Ingrese el primer número de la operación"));
let secondValue = Number(prompt("Ingrese el segundo número de la operación"));
let result = "";

if(chooseOperation == "SUMA"){
    result = firstValue + secondValue;
    console.log(`El resultado de la operación es: ${result}`);
}else if(chooseOperation == "RESTA"){
    result = firstValue - secondValue;
    console.log(`El resultado de la operación es: ${result}`);
}else if(chooseOperation == "MULTIPLICACIÓN"){
    result = firstValue * secondValue;
    console.log(`El resultado de la operación es: ${result}`);
}else if((chooseOperation == "DIVISIÓN") && (secondValue !=0)){
    result = firstValue / secondValue;
    console.log(`El resultado de la operación es: ${result}`);
}else{
    console.log("ERROR");
}

//ejercicio 13//
let completeName = prompt("Ingrese su nombre completo");
let dateBirth = prompt("Ingrese su fecha de nacimiento (../../..)");
let dniNumber = prompt("Ingrese su n° de documento");
let confirmation = prompt(`Confirma (S/N) que tus datos están correctos; nombre completo: ${completeName} / fecha de nacimiento: ${dateBirth} / n° de documento: ${dniNumber}`);

if((confirmation == "s") || (confirmation == "S") || (confirmation == "si") || (confirmation == "SI")){
    let citizen = {
        givenName: completeName,
        givenBirth: dateBirth,
        givenDniNumber: dniNumber
    }
    console.table(citizen);
    console.log("Felicidades, se ha registrado con éxito")
}else{
    console.log("vuelva a intentarlo en 1 mes");
}

