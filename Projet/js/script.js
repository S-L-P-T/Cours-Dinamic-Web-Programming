var vie = document.querySelector('#vie');
var eau = document.querySelector('#eau');
var o2 = document.querySelector('#o2');
var time = document.querySelector('#time');

var deplacer = document.querySelector('#deplacer')

let taillevie = 100;
setInterval(function reduireLargeurvie() {
    taillevie--;
    vie.style.width = taillevie + "%";
},10000)
document.querySelector('#deplacer').addEventListener("click", () => {
    taillevie -= 1;
    if (taillevie <= 0) {
        vie.style.width = 0 + "%";
        console.log('taille vie :'+taillevie);
    } else {
        vie.style.width = taillevie + "%";
        console.log('taille vie :'+taillevie);
    }
    vie.style.width = taillevie + "%";
    console.log('taille vie :'+taillevie);
});

let tailleeau = 100;
setInterval(function reduireLargeureau() {
    tailleeau--;
    eau.style.width = tailleeau + "%";
},5000)
document.querySelector('#deplacer').addEventListener("click", () => {
    tailleeau -= 2;
    if (tailleeau <= 0) {
        eau.style.width = 0 + "%";
        console.log('taille eau :'+tailleeau);
    } else {
        eau.style.width = tailleeau + "%";
        console.log('taille eau :'+tailleeau);
    }
});

let tailleo2 = 100;
setInterval(function reduireLargeuro2() {
    tailleo2--;
    o2.style.width = tailleo2 + "%";
},1000)
document.querySelector('#deplacer').addEventListener("click", () => {
    tailleo2 -= 10;
    if (tailleo2 <= 0) {
        o2.style.width = 0 + "%";
        console.log('taille o2 :'+tailleo2);
    } else {
        o2.style.width = tailleo2 + "%";
        console.log('taille o2 :'+tailleo2);
    }
});

let inc = 1
setInterval(function reduireLargeuro2() {
    let incr = inc++;
    time.innerHTML = incr;
},1000)




const ice = "../img/minerais/ice.webp";
const cobalt = "../img/minerais/Cobalt.webp";
const iron = "../img/minerais/iron.webp";
const magnesium = "../img/minerais/magnesium.webp";
const silicon = "../img/minerais/silicon.webp";
const titanium = "../img/minerais/titanium.webp";

const minerais = [ice, cobalt, iron, magnesium, silicon, titanium];

for (let i = 1; i <= 6; i++) {
    let mineraisAleatoire = minerais[Math.floor(Math.random() * minerais.length)];
    let img = document.createElement("img");
    img.src = mineraisAleatoire;
    img.width = "50";
    document.querySelector(`#minerai${i}`).appendChild(img);
}

document.querySelector('#deplacer').addEventListener("click", () => {
    for (let i = 1; i <= 6; i++) {
        let mineraisAleatoire = minerais[Math.floor(Math.random() * minerais.length)];
        let img = document.querySelector(`#minerai${i}`).querySelector("img");
        img.src = mineraisAleatoire;
        img.width = "50";
    }
});

