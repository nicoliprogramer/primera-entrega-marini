let idioma = prompt("ingrese su idioma dominante");
let limite = 0;

while (idioma != "español") {
    alert("Usted no pertenece aquí")
    if (limite === 2) {
        break;
    }
    limite++;
    idioma = prompt("Ingrese el idioma correcto")
}

if (limite === 3) {
    alert("Acá no perteneces, no hay traducción")
} else {
    alert("¡¡Bienvenido colega!!")
}


const password = (usuario) => {
    console.log("Password");
    let pass = "";

    while (pass == "" || pass == null) {
        pass = prompt(`Ingrese su Contraseña ${usuario}`);

        if (pass != "" && usuario != null) {
            alert(`Registrado con Éxito ${usuario}!`)
            break;
        }
    }
}

const registro = () => {

    let usuario = "";

    while (usuario == "" || usuario == null) {

        usuario = prompt(`¿Cuál es su Usuario?`)

        if (usuario != "" && usuario != null) {
            alert(`Cliente ${usuario}`)
            password(usuario);

            break;
        }


    }

}


const bienvenido = () => { }

alert("Esta es nuestra plataforma");

let respuesta = prompt(`¿Qué servicios ofrecemos?
    
    Venta de Departamentos
    Venta de coches
    `);


if (respuesta.toLowerCase() == "venta de departamentos" || parseInt(respuesta) == 1) {

    registro();

} else {

    alert("Usted no pertenece acá");

}

let worthOne = 40000;
let worthTwo = 73000;

let userZone = prompt('En que zona quiere el dpto?');
alert(`en ${userZone.toUpperCase()} tenemos disponible...`);

class User {
    constructor(name, lastName, age) {
        this.name = name.toUpperCase();
        this.lastName = lastName.toUpperCase();
        this.age = age;
    }
}

function registerUsers() {
    let numberUsers = parseInt(prompt('Ingrese el número de usuarios que desea registrar'));
    let users = [];
    for (let i = 0; i < numberUsers; i++) {
        let name = prompt('Ingrese su nombre');
        let lastName = prompt('Ingrese su apellido');
        let age = parseInt(prompt('Ingrese su edad'));
        let user = new User(name, lastName, age);
        users.push(user);
    }
    return users;
}

function registeredUsers(users) {
    for (const user of users) {
        console.log(user);
        alert(`Nombre: ${user.name} \n Apellido: ${user.lastName} \n Edad: ${user.age}`);
    }
}

function main() {
    let users = registerUsers();
    registeredUsers(users);
}

// funciones

function oneDept(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No puede alquilar sin adultos');
    }
    else if (total > 6) {
        alert('Sobrepasa la cantidad (6 personas), contrate dos si desea mas capacidad');
    }
    else if (total <= 6) {
        alert(`El total a pagar es: $${worthOne}`);
    }
    else (total <= 6)
    { main(); }

    return total;
}

function twoDept(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No se puede alquilar sin adultos');
    }
    else if (total > 12) {

        alert('Sobrepasa el limite de personas máximo por departamento');
    }
    else if (total <= 12) {
        alert(`El total a pagar es: $${worthTwo}`);
    }
    else (total <= 12)
    { main(); }
    return total;
}

function showTotal(total) {
    if (total <= 7 || total <= 13) {
        alert(`El total de personas ingresadas es : ${total}`);
    }
}

function showMenu(menu) {
    let options = prompt(`Zona ${userZone.toUpperCase()}, elija la opción que desea.\n \n 1. Departamento (hasta 3 personas) \n 2. Departamento (hasta 6 personas) `);
    return options;
}

function quotation() {
    let selectedOption = showMenu();
    while (selectedOption !== '') {
        if (!isNaN(selectedOption !== '')) {
            let adults = parseInt(prompt('Ingrese el número de adultos'));
            let kids = parseInt(prompt('Ingrese el número de niños'));
            selectedOption = parseInt(selectedOption);


            switch (selectedOption) {
                case 1:
                    let totalOne = oneDept(adults, kids);
                    showTotal(totalOne);
                    break;
                case 2:
                    let totalTwo = twoDept(adults, kids);
                    showTotal(totalTwo);
                    break;
                default:
                    alert('Ingrese la opción 1, 2 o 3 para continuar');
                    break;
            }
        } else {
            alert('Opción no válida');
        }
        selectedOption = showMenu();
    }
}

quotation();
