// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

 //Agrega un nuevo amigo a la variable de amigos. Valida que el nombre no esté vacío antes de agregarlo.

function agregarAmigo() {
    //Toma el valor de nombre ingresado
  let nombreAmigo = document.getElementById('amigo').value;
// Se valida que no este vacío el campo
  if (nombreAmigo === '') {
    alert('Por favor, inserte un nombre');
    
} else if (amigos.includes(nombreAmigo)){
    alert('Ese nombre ya fue ingresado, por favor ingresa un nombre distinto');
  }
  else{
amigos.push(nombreAmigo);
document.getElementById('amigo').value = '';
listaAmigos();
  }
}
//Actualiza la lista de varables ingresadas
function listaAmigos() {

  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for(let i = 0; i < amigos.length ; i++){
    lista.innerHTML += `${i + 1}. ${amigos[i]}<br>`;
  }
}

// Sortea y muestra un amigo de la lista de manera aleatoria. Verifica que la lista no esté vacía antes de realizar el sorteo.
 
function sortearAmigo() {

    if (amigos.length == 0) {
    alert('Inserte un nombre antes de sortear');
  
//Agregar minimo de 3 amigos ingresados para sorteo
} else if (amigos.length < 3){

    alert('Debes ingresar un mínimo de 3 amigos para el sorteo')
} else {
   
    let indiceAmigo = Math.floor(Math.random() * amigos.length);
    let resultadoFinal = document.getElementById('resultado');
    resultadoFinal.innerHTML = `El amigo secreto es ${amigos[indiceAmigo]}`;
  }
} 
