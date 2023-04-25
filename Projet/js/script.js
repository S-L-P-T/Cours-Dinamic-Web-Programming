//Déclaration des selecteurs
var vie = document.querySelector('#vie');
var eau = document.querySelector('#eau');
var o2 = document.querySelector('#o2');
var timecontainer = document.querySelectorAll('.time');
var deplacer = document.querySelector('#deplacer');
var mineraiscontainer = document.querySelectorAll('.minerais');

//Déclaration des minerais
var ice = "../img/minerais/ice.webp";
var cobalt = "../img/minerais/cobalt.webp";
var iron = "../img/minerais/iron.webp";
var magnesium = "../img/minerais/magnesium.webp";
var silicon = "../img/minerais/silicon.webp";
var titanium = "../img/minerais/titanium.webp";

//Déclaration des tableaux
var time = [0,100,100,100];
var minerai = ['ice', 'cobalt', 'iron', 'magnesium', 'silicon', 'titanium'];
var minerais = [ice, cobalt, iron, magnesium, silicon, titanium];
var materiaux = [];

//Fonctions temps
setInterval(function() {
    time[3]--;
    time[0]++
    timecontainer[3].style.width = time[3] + "%";
    timecontainer[0].innerHTML = time[0];
},1000)

setInterval(function() {
    time[2]--;
    timecontainer[2].style.width = time[2] + "%";
},5000)

setInterval(function() {
    time[1]--;
    timecontainer[1].style.width = time[1] + "%";
},10000)

for (let i = 0; i <= minerais.length-1; i++) {
    let mineraisAleatoire = minerais[Math.floor(Math.random() * minerais.length)];
    let img = document.createElement("img");
    img.src = mineraisAleatoire;
    img.id = i;
    img.width = "50";
    mineraiscontainer[i].appendChild(img);
}

deplacer.addEventListener("click", () => {
    time[1] = time[1]-1;
    time[2] = time[2]-5;
    time[3] = time[3]-10;
    if (time[1] <= 0) {
        time[1] = 0;
        timecontainer[1].style.width = time[1] + "%";
    } else {
        timecontainer[1].style.width = time[1] + "%";
    }
    if (time[2] <= 0) {
        time[2] = 0;
        timecontainer[2].style.width = time[2] + "%";
    } else {
        timecontainer[2].style.width = time[2] + "%";
    }
    if (time[3] <= 0) {
        time[3] = 0;
        timecontainer[3].style.width = time[3] + "%";
    } else {
        timecontainer[3].style.width = time[3] + "%";
    }
    for (let i = 0; i <= minerais.length-1; i++) {
        let mineraisAleatoire = minerais[Math.floor(Math.random() * minerais.length)];
        let img = mineraiscontainer[i].querySelector("img");
        img.src = mineraisAleatoire;
        img.width = "50";
    }
});

//Fonction pour rechercher les minerais
function rechercheElement(src, minerai) {
    for (let i = 0; i < minerai.length; i++) {
        if (src.includes(minerai[i])) {
            return minerai[i];
      }
    }
    return null;
}

mineraiscontainer.forEach( input => input.addEventListener('click', e => {
        let src = e.target.src;
        if (src == undefined) {

        } else {
            materiaux.push(rechercheElement(src,minerai));
            let id = e.target.id;
            let img = mineraiscontainer[id].querySelector("img");
            img.src = '';
        }
    })
);