// Creo la lista
let lista = ['prosciutto', 'sedano', 'banane', 'salame']
// Collego le variabili al ID
let data = document.getElementById('data');
// let stampa = document.getElementById('print').innerHTML += '<li class=elementi></li>';
let send = document.getElementById('send');

// PROVA CON FOR

// for(i = 0; i < lista.length; i++){
//     let stampa = document.getElementById('print').innerHTML += '<li class=elementi></li>';

//     let stampaElementi = document.getElementsByClassName('elementi');
//     stampaElementi.innerHTML += lista[i -1];

//     console.log(lista[i -1]);
// }

let i = 0;

while(i < lista.length){
    // let requestName = prompt('yours name');
    // console.log(requestName);
    let stampa = document.getElementById('print').innerHTML += `<li class=elementi>${lista[i]}</li>`;

    // let stampaElementi = document.getElementsByClassName('elementi');
    // stampaElementi.innerHTML += lista[i -1];
    i++
    console.log(lista[i -1]);
}

// Configuro il bottone
// send.addEventListener('click',
//     function(){

//     }
// );