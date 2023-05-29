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
let textoAleatorio = (`Mi ${family[1]} cumplió ${oddNumbers[3]} años ésta semana, asi que le regalé ${fruits[4]}, ya que son sus favoritas.`);
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