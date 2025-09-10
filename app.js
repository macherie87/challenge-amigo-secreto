// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre.trim() === "" ) {
        alert('Por favor, ingresa un nombre válido (sin espacios en blanco)');
        return; 

    }

    amigos.push(nombre);

    document.getElementById("amigo").value = ""

    actualizarListaAmigos();

}

function actualizarListaAmigos() {
    // 1. obtener elemento de la lista
    //let listaAmigosElement = document.getElementById("listaAmigos");
    // obtiene el elemento HTML con el id="listaAmigos". 
    // Este es el elemento <ul> u <ol> donde quieres mostrar la lista de amigos.
    let listaAmigosElement = document.getElementById("listaAmigos");
    // 2. Limpiar la lista existente
    //listaAmigosElement.innerHTML = ""; elimina todos los elementos que puedan
    // estar dentro de la lista antes de agregar los nuevos. Esto evita que se
    // dupliquen los nombres cada vez que se actualiza la lista.
    listaAmigosElement.innerHTML = ""; //limpiar la lista anterior

    // 3. Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i ++) {
        let amigo = amigos[i]; //obtener nombre de amigo actual
        
        // 4. Agregar elementos a la lista
        let nuevoElementoLista = document.createElement("li"); //crear un nuevo elemento <li>
        nuevoElementoLista.textContent = amigo; // Establece el texto del <li> con el nombre del amigo
        listaAmigosElement.appendChild(nuevoElementoLista); // Agrega el <li> a la lista <ul>
    }
}

//mostrar la lista inicial de amigos al cargar la página
actualizarListaAmigos();

function sortearAmigo() {
 // 1. Validar que haya amigos disponibles
 //if (amigos.length === 0) { ... } comprueba si el array amigos está vacío. Si lo está,
 // muestra una alerta y detiene la función con return
  if (amigos.length === 0) {
    alert("Por favor, añade amigos antes de sortear.");
    return; // Detener la función si no hay amigos
  }
 // 2. Generar un índice aleatorio
 //Math.random() genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
 //Math.random() * amigos.length multiplica ese número aleatorio por la cantidad de
 // amigos en el array, lo que da un número aleatorio entre 0 (inclusive) y la cantidad 
 // de amigos (exclusivo).
 //Math.floor(...) redondea hacia abajo el número resultante para obtener un entero, 
 // que será un índice válido dentro del array amigos.
 let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  // 3. Obtener el nombre sorteado
  //let amigoSorteado = amigos[indiceAleatorio]; utiliza el índice aleatorio para acceder 
  // al nombre del amigo en esa posición del array.
 let amigoSorteado = amigos[indiceAleatorio];
 // 4. Mostrar el resultado
 //let resultadoElement = document.getElementById("resultado"); obtiene el elemento HTML 
 // con el id="resultado", que es donde quieres mostrar el resultado del sorteo.
 //resultadoElement.innerHTML = "El amigo sorteado es: " + amigoSorteado; actualiza el 
 // contenido de ese elemento con el mensaje que muestra el nombre del amigo sorteado.
 let resultadoElement = document.getElementById("resultado");
 resultadoElement.innerHTML = "El amigo sorteado es: " + amigoSorteado;
}