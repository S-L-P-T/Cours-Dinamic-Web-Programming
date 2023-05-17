// var nb = parseInt('12zqfesedfs')
// // NaN = not a number
// var test = isNaN(nb);

// var type = typeof(nb);

// console.log(nb,type,test);

// var chiffre1 = prompt('Entrez un nombre');

// var chiffre2 = prompt(`Entrez un nombre`);

// function addition(nb1,nb2){
//     let resaddition = parseInt(nb1) + parseInt(nb2);
//     return resaddition;
// }

// alert('Votre nombre est: ' + addition(chiffre1,chiffre2));

// function multiplication(nomb1,nomb2,nomb3){
//     let resmultiplication = parseInt(nomb1) * parseInt(nomb2) * parseInt(nomb3)
//     return resmultiplication;
// }

// console.log(multiplication(3,2,1));

// var proverbe = prompt('Entrez un proverbe');


// var tablproverbe = proverbe.split(' ');

// var derniermot = tablproverbe.pop();
// var premiermot = tablproverbe.shift();

// tablproverbe.unshift(derniermot);
// tablproverbe.push(premiermot);
// console.log(tablproverbe);

// var cordx = prompt();
// var cordy = prompt();

// function coordonée(x,y) {
//     let dx = {
//         x: parseInt(x)/2
//     };
//     let dy = {
//         y: parseInt(y)/2
//     };
//     let tab = [dx,dy];
//     return tab;
// }

// console.log(coordonée(cordx,cordy));

// var p2 = document.querySelector('#p2');
// p2.style.color = 'red';
// p2.style.background = 'yellow';
// p2.style.fontSize = '2rem';

// var tab = [120,150,160];
// let ligne = document.querySelectorAll('.ligne');
// for (let i=0; i<ligne.length; i++){
//     ligne[i].style.height = tab[i]+'px';
// }

// var chanhover = document.querySelector('.onhover');
// var chanclick = document.querySelector('.onclick');
// var cacheA = document.querySelector('.cacheA');
// var cacheB = document.querySelector('.cacheB');

// chanhover.onmouseover = function(){
//     chanhover.style.color = 'white';
// }

// chanclick.onclick = function(){
//     chanclick.style.display = 'none';
// }

// cacheB.onclick = function(){
//     if (cacheA.style.display == 'none'){
//         cacheA.style.display = '';
//     } else {
//         cacheA.style.display = 'none';
//     }
// }


// var pos = document.querySelector('#position');
// document.onmousemove = function(e){
//     pos.innerHTML = "coordonées : <br> X : " + e.clientX;
//     pos.innerHTML += "<br> Y : " + e.clientY;
//     if (e.clientY > 650){
//         console.log('stop trop bas');
//     } else {

//     }
// }

// function Vehicule(roues, vitessemax, vitesseactuelle, kilometrage){
//     this.roues = roues;
//     this.vitessemax = vitessemax;
//     this.vitesseactuelle = vitesseactuelle;
//     this.kilometrage = kilometrage;
// }

// function Moto(roues, vitessemax, vitesseactuelle, kilometrage){
//     Vehicule.call(this,roues,vitessemax,vitesseactuelle,kilometrage);
// }

// Moto.prototype = new Moto();
// Moto.prototype.constructor = Moto;

// var moto1 = new Moto(2,50,0,0);
// console.log(moto1.vitessemax);
// console.log(moto1.votesseactuelle);

// var imgrotation = document.querySelectorAll(".rotateimg");
// var index=0;

// setInterval(function() {
//     imgrotation[index].style.display = "none";
//     if(index < imgrotation.length - 1){
//         index++;
//     } else {
//         index=0;
//     }
//     imgrotation[index].style.display = "block";
// },2000);