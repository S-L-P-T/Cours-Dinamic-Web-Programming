var vie = document.getElementById('vie');
var eau = document.getElementById('eau');
var o2 = document.getElementById('o2');
var time = document.getElementById('time');


var taillevie = 100;
setInterval(function reduireLargeurvie() {
    let widthvie = taillevie--;
    vie.style.width = widthvie + "%";
},10000)

var tailleeau = 100;
setInterval(function reduireLargeureau() {
    let widtheau = tailleeau--;
    eau.style.width = widtheau + "%";
},5000)

var tailleo2 = 100;
setInterval(function reduireLargeuro2() {
    let widtho2 = tailleo2--;
    o2.style.width = widtho2 + "%";
},1000)

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
  document.getElementById(`minerai${i}`).appendChild(img);
  console.log(`Minerais ${i} : ${mineraisAleatoire}`);
}
