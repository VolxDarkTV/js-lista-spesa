// Creo la lista
let lista = ['prosciutto', 'sedano', 'banane', 'salame']
// Collego le variabili al ID
let data = document.getElementById('data');
// let stampa = document.getElementById('print').innerHTML += '<li class=elementi></li>';
// let send = document.getElementById('send');

let i = 0;
while(i < lista.length){
    // let requestName = prompt('yours name');
    // console.log(requestName);
    let stampa = document.getElementById('print').innerHTML += '<li class=elementi></li>';

    let stampaElementi = document.getElementsByClassName('elementi').innerHTML += lista;
    i++
    console.log(lista[i]);
}