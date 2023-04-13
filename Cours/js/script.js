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

var proverbe = prompt('Entrez un proverbe');


var tablproverbe = proverbe.split(' ');

var derniermot = tablproverbe.pop();
var premiermot = tablproverbe.shift();

tablproverbe.unshift(derniermot);
tablproverbe.push(premiermot);
console.log(tablproverbe);