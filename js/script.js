
/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/


const myContainer = document.getElementById('container')

const arr = []

while (arr.length < 5){
    arr.push(randomNumbers(1,5))
console.log('array', arr, typeof arr)
}

let newCell = document.createElement('div');


for(let i=0; i < 5; i++){



    newCell.append(arr[i])
    newCell.classList.add('cell');
    myContainer.append(newCell)
}



setTimeout(myfunction , 5000);


function myfunction (){
    newCell.classList.add('none')
    console.log('ciao')
    
}

setTimeout(myprompt , 5100);

function myprompt(){
    for(let i=0; i < 5; i++){
        const numeroUtente = prompt('inserisci qualcosa ')
        if(arr[i] == numeroUtente ){
            console.log('numero giusto ')
        }
        else{
            console.log('numero sbagliato')
        }
    }
}








// FUNZIONE

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }