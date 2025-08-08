// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nuevoAmigo);
        document.getElementById('amigo').value = '';
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (const amigo of amigos) {
        console.log(amigo)
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigo;
        lista.appendChild(nuevoAmigo);
    }

}

function sortearAmigo() {
    let rango = amigos.length;
    let amigo = document.getElementById('resultado');
    if(rango == 0){
        alert('Primero debes ingresar los nombres de tus amigos.');
        return;
    }
    amigoSecreto = Math.floor(Math.random() * rango);
    amigo.innerHTML = `El amigo secreto es: ${amigos[amigoSecreto]}`;
}