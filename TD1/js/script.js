// var prixeuros = prompt('Entrez un prix en €')

// function convert(euros){
//     euros = euros*1.07;
//     return euros;
// }

// console.log(convert(prixeuros));




// var button = document.querySelector('button');
// var blueblock = document.querySelector('div');

// button.addEventListener("click", () => {
//     blueblock.style.height = '200px';
//     blueblock.innerHTML = 'La revanche du site';
// });


var chevalRouge = document.querySelector('.chevalRouge');
var chevalVert = document.querySelector('.chevalVert');
var chevalJaune = document.querySelector('.chevalJaune');
var scorechevalRouge = 0;
var scorechevalVert = 0;
var scorechevalJaune = 0;
var leaderboard = document.querySelector('.score');

let intervalID;
intervalID = setInterval(function() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    scorechevalRouge += getRandomIntInclusive(100,300);
    chevalRouge.style.marginLeft = scorechevalRouge + "px";
    console.log(scorechevalRouge);

    scorechevalVert += getRandomIntInclusive(100,300);
    chevalVert.style.marginLeft = scorechevalVert+'px';
    console.log(scorechevalVert);

    scorechevalJaune += getRandomIntInclusive(100,300);
    chevalJaune.style.marginLeft = scorechevalJaune+'px';
    console.log(scorechevalJaune);

    if ((scorechevalRouge >= 1000 || scorechevalVert >= 1000 || scorechevalJaune >= 1000)&&(scorechevalRouge != (scorechevalVert || scorechevalJaune) || scorechevalVert != (scorechevalRouge || scorechevalJaune) || scorechevalJaune != (scorechevalRouge || scorechevalVert))){
        clearInterval(intervalID);
        if (scorechevalRouge > scorechevalJaune && scorechevalRouge > scorechevalVert) {
            leaderboard.innerHTML = 'rouge gagnant'
        } else if (scorechevalVert > scorechevalJaune && scorechevalVert > scorechevalRouge) {
            leaderboard.innerHTML = 'vert gagnant'
        } else if (scorechevalJaune > scorechevalRouge && scorechevalJaune > scorechevalVert) {
            leaderboard.innerHTML = 'jaune gagnant'
        }
    }
      
},1000)