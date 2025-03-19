let nombreDeUsuario =''
let listaNombresSorteados=[]
condicionesIniciales()

console.log(listaNombresSorteados)


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Veamos quien será el siguiente luchador');
    asignarTextoElemento('p',`¡Ingresa un Nombre, insecto!`);
    listaNombresSorteados.length = 0;
   
}

// Agregar nombre a la lista
function agregarNombre(){
    let nombreDeUsuario = document.getElementById('NombreUsuario').value;
    
    if (nombreDeUsuario && !listaNombresSorteados.includes(nombreDeUsuario)) {
        listaNombresSorteados.push(nombreDeUsuario);
        asignarTextoElemento('p',`${nombreDeUsuario} ha sido agregado`)
        limpiarInput();
    } else {
        asignarTextoElemento('p','El nombre está vacío o ya existe en la lista.')
        limpiarInput();
    }
}

function limpiarInput() {
    document.querySelector('#NombreUsuario').value = '';
}

// Sortear el nombre
function sortearNombre() {
    if (listaNombresSorteados.length === 0) {
        asignarTextoElemento('p','No has dado ningún nombre')
        limpiarInput();
        return null;
    }
    const indice = Math.floor(Math.random() * listaNombresSorteados.length);
    asignarTextoElemento('p',`¡El siguiente luchador es: ${listaNombresSorteados[indice]}!`)
    limpiarInput();
    return listaNombresSorteados[indice];
}

// Función para reiniciar la lista de nombres
function reiniciarLista() {
    listaNombresSorteados.length = 0;
}

// Función para solicitar nombres al usuario
/*function solicitarNombres() {
    let nombre;
    while ((nombre = prompt("Ingresa un nombre (o deja vacío para terminar):"))) {
        agregarNombre(nombre);
    }
}*/

function iniciarSorteo() {
    if (listaNombresSorteados.length === 0) {
        console.log("No hay nombres para sortear. Agrega algunos primero.");
        return;
    }
    alert(`El nombre sorteado es: ${sortearNombre()}`);
}

/*
solicitarNombres();
iniciarSorteo();*/condicionesIniciales()
