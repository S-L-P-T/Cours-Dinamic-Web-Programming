//Déclaration des selecteurs
var vie = document.querySelector('#vie');
var eau = document.querySelector('#eau');
var o2 = document.querySelector('#o2');
var timecontainer = document.querySelector('.time');
var statscontainer = document.querySelectorAll('.stats');
var deplacer = document.querySelector('#deplacer');
var mineraiscontainer = document.querySelectorAll('.minerais');
var tasks = document.querySelectorAll('.btntask');
var contenuconstr = document.querySelectorAll('.tab1 .row2color .row .number');
var contenuinventaire = document.querySelectorAll('.tab2 .row2color .row .number');

console.log(contenuinventaire,contenuconstr);

//Déclaration des minerais
var ice = "../img/minerais/ice.webp";
var cobalt = "../img/minerais/cobalt.webp";
var iron = "../img/minerais/iron.webp";
var magnesium = "../img/minerais/magnesium.webp";
var silicon = "../img/minerais/silicon.webp";
var titanium = "../img/minerais/titanium.webp";
var food = "../img/minerais/space_food.webp";
var seed = "../img/minerais/seed_lirma.webp";

//Déclaration des tableaux
var denombconstr = [0,0,0,0,0,0];
var denombinventaire = [0,0,0,0,0,0,0];
var time = 0;
var stats = [100,100,100];
var minerai = ['ice', 'cobalt', 'iron', 'magnesium', 'silicon', 'titanium'];
var minerais = [ice, cobalt, iron, magnesium, silicon, titanium];
var materiaux = [];
var materiauxcollectible = [];

//Fonctions temps
setInterval(function() {
    stats[2]--;
    time++
    statscontainer[2].style.width = `${stats[2]}%`;
    timecontainer.innerHTML = time;
},1000)

setInterval(function() {
    stats[1]--;
    statscontainer[1].style.width = `${stats[1]}%`;
},5000)

setInterval(function() {
    stats[0]--;
    statscontainer[0].style.width = `${stats[0]}%`;
},10000)

//Condition de fin de partie
let intervalID;
intervalID = setInterval(function() {
    if (stats[0]==0||stats[1]==0||stats[2]==0){
        document.querySelector(".end").style.display = "flex";
        document.querySelector(".score").innerHTML = time*=1+denombconstr[3]+denombconstr[4]+denombconstr[5];
        clearInterval(intervalID);
    }



    if (denombconstr[2] != 0) {
        document.querySelector("#manger").style.display = "block";
    } else {
        document.querySelector("#manger").style.display = "none";
    }

    if (denombconstr[0] != 0) {
        document.querySelector("#boire").style.display = "block";
    } else {
        document.querySelector("#boire").style.display = "none";
    }

    if (denombconstr[1] != 0) {
        document.querySelector("#respirer").style.display = "block";
    } else {
        document.querySelector("#respirer").style.display = "none";
    }

    let capsule = ['capsule'];
    if (comparerTableauxCapsule(capsule,materiauxcollectible) == false) {

    } else {
        document.querySelector('#capsule').style.display = "block"
    }


    let eau1 = document.getElementById('0');
    if (contenuinventaire[0]>=1) {
        eau1.style.color = "white";
        eau1.style.background = "rgba(0, 0, 0, 0.60)";
        eau1.style.border = "1px white solid";
        eau1.style.boxShadow = "inset 0px 0px 5px 1px white";
        eau1.querySelector('.star').style.filter = 'invert(1)';
    } else {
        eau1.style.color = "black";
        eau1.style.background = "white";
        eau1.style.border = "1px black solid";
        eau1.style.boxShadow = "inset 0px 0px 5px 1px black";
        eau1.querySelector('.star').style.filter = 'invert(0)';
    }

    console.log(contenuinventaire)
    let o21 = document.getElementById('1');
    if (contenuinventaire[1]>=2) {
        o21.style.color = "white";
        o21.style.background = "rgba(0, 0, 0, 0.60)";
        o21.style.border = "1px white solid";
        o21.style.boxShadow = "inset 0px 0px 5px 1px white";
        o21.querySelector('.star').style.filter = 'invert(1)';
    } else {
        o21.style.color = "black";
        o21.style.background = "white";
        o21.style.border = "1px black solid";
        o21.style.boxShadow = "inset 0px 0px 5px 1px black";
        o21.querySelector('.star').style.filter = 'invert(0)';
    }


    let habitacle = ['iron','iron','titanium'];
    let habitacle1 = document.getElementById('2');
    if (comparerTableauxCapsule(habitacle,materiaux) == false) {
        habitacle1.style.color = "white";
        habitacle1.style.background = "rgba(0, 0, 0, 0.60)";
        habitacle1.style.border = "1px white solid";
        habitacle1.style.boxShadow = "inset 0px 0px 5px 1px white";
        habitacle1.querySelector('.star').style.filter = 'invert(1)';
    } else {
        habitacle1.style.color = "black";
        habitacle1.style.background = "white";
        habitacle1.style.border = "1px black solid";
        habitacle1.style.boxShadow = "inset 0px 0px 5px 1px black";
        habitacle1.querySelector('.star').style.filter = 'invert(0)';
    }


    let lampe = ['silicon','magnesium','magnesium'];
    let lampe1 = document.getElementById('3');
    if (comparerTableauxCapsule(lampe,materiaux) == false) {
        lampe1.style.color = "white";
        lampe1.style.background = "rgba(0, 0, 0, 0.60)";
        lampe1.style.border = "1px white solid";
        lampe1.style.boxShadow = "inset 0px 0px 5px 1px whitelampe1";
        lampe1.querySelector('.star').style.filter = 'invert(1)';
    } else {
        lampe1.style.color = "black";
        lampe1.style.background = "white";
        lampe1.style.border = "1px black solid";
        lampe1.style.boxShadow = "inset 0px 0px 5px 1px black";
        lampe1.querySelector('.star').style.filter = 'invert(0)';
    }


    let foreuse = ['iron','titanium'];
    let foreuse1 = document.getElementById('4');
    if (comparerTableauxCapsule(foreuse,materiaux) == false) {
        foreuse1.style.color = "white";
        foreuse1.style.background = "rgba(0, 0, 0, 0.60)";
        foreuse1.style.border = "1px white solid";
        foreuse1.style.boxShadow = "inset 0px 0px 5px 1px white";
        foreuse1.querySelector('.star').style.filter = 'invert(1)';
    } else {
        foreuse1.style.color = "black";
        foreuse1.style.background = "white";
        foreuse1.style.border = "1px black solid";
        foreuse1.style.boxShadow = "inset 0px 0px 5px 1px black";
        foreuse1.querySelector('.star').style.filter = 'invert(0)';
    }


    let radiateur = ['iron','silicon'];
    let radiateur1 = document.getElementById('5');
    if (comparerTableauxCapsule(radiateur,materiaux) == false) {
        radiateur1.style.color = "white";
        radiateur1.style.background = "rgba(0, 0, 0, 0.60)";
        radiateur1.style.border = "1px white solid";
        radiateur1.style.boxShadow = "inset 0px 0px 5px 1px white";
        radiateur1.querySelector('.star').style.filter = 'invert(1)';
    } else {
        radiateur1.style.color = "black";
        radiateur1.style.background = "white";
        radiateur1.style.border = "1px black solid";
        radiateur1.style.boxShadow = "inset 0px 0px 5px 1px black";
        radiateur1.querySelector('.star').style.filter = 'invert(0)';
    }


    let plantation = ['iron','ice','seed'];
    let plantation1 = document.getElementById('6');
    if (comparerTableauxCapsule(plantation,materiaux) == false) {
        plantation1.style.color = "white";
        plantation1.style.background = "rgba(0, 0, 0, 0.60)";
        plantation1.style.border = "1px white solid";
        plantation1.style.boxShadow = "inset 0px 0px 5px 1px white";
        plantation1.querySelector('.star').style.filter = 'invert(1)';
    } else {
        plantation1.style.color = "black";
        plantation1.style.background = "white";
        plantation1.style.border = "1px black solid";
        plantation1.style.boxShadow = "inset 0px 0px 5px 1px black";
        plantation1.querySelector('.star').style.filter = 'invert(0)';
    }


    if (comparerTableaux(['lampe'],materiauxcollectible) == false) {

    } else {
        let food = document.querySelectorAll('td[style]');
        food[0].style.display = 'block';
        food[1].style.display = 'block';
    }


    if (comparerTableaux(['eau'],materiauxcollectible) == false) {

    } else {
        denombconstr[0]++
        contenuconstr[0].innerHTML = denombconstr[0];
    }


    if (comparerTableaux(['oxygen'],materiauxcollectible) == false) {

    } else {
        denombconstr[1]++
        contenuconstr[1].innerHTML = denombconstr[1];
    }


    if (comparerTableaux(['food'],materiaux) == false) {

    } else {
        denombconstr[2]++
        contenuconstr[2].innerHTML = denombconstr[2];
    }


    if (comparerTableaux(['foreuse'],materiauxcollectible) == false) {

    } else {
        denombconstr[3]++
        contenuconstr[3].innerHTML = denombconstr[3];
    }


    if (comparerTableaux(['radiateur'],materiauxcollectible) == false) {

    } else {
        denombconstr[4]++
        contenuconstr[4].innerHTML = denombconstr[4];
    }


    if (comparerTableaux(['plantation'],materiauxcollectible) == false) {

    } else {
        denombconstr[5]++
        contenuconstr[5].innerHTML = denombconstr[5];
    }







    if (comparerTableaux(['ice'],materiaux) == false) {

    } else {
        denombinventaire[0]++
        contenuinventaire[0].innerHTML = denombinventaire[0];
    }


    if (comparerTableaux(['cobalt'],materiaux) == false) {

    } else {
        denombinventaire[1]++
        contenuinventaire[1].innerHTML = denombinventaire[1];
    }


    if (comparerTableaux(['iron'],materiaux) == false) {

    } else {
        denombinventaire[2]++
        contenuinventaire[2].innerHTML = denombinventaire[2];
    }


    if (comparerTableaux(['magnesium'],materiaux) == false) {

    } else {
        denombinventaire[3]++
        contenuinventaire[3].innerHTML = denombinventaire[3];
    }


    if (comparerTableaux(['silicon'],materiaux) == false) {

    } else {
        denombinventaire[4]++
        contenuinventaire[4].innerHTML = denombinventaire[4];
    }


    if (comparerTableaux(['titanium'],materiaux) == false) {

    } else {
        denombinventaire[5]++
        contenuinventaire[5].innerHTML = denombinventaire[5];
    }


    if (comparerTableaux(['seed'],materiaux) == false) {

    } else {
        denombinventaire[6]++
        contenuinventaire[6].innerHTML = denombinventaire[6];
    }
},100)

for (let i = 0; i <= mineraiscontainer.length-1; i++) {
    let mineraisAleatoire = minerais[Math.floor(Math.random() * minerais.length)];
    let img = document.createElement("img");
    img.src = mineraisAleatoire;
    img.className = i;
    img.width = "50";
    mineraiscontainer[i].appendChild(img);
}

deplacer.addEventListener("click", () => {
    stats[0] = stats[0]-1;
    stats[1] = stats[1]-5;
    stats[2] = stats[2]-10;
    if (stats[0] <= 0) {
        stats[0] = 0;
        statscontainer[0].style.width = `${stats[0]}%`;
    } else {
        statscontainer[0].style.width = `${stats[0]}%`;
    }
    if (stats[1] <= 0) {
        stats[1] = 0;
        statscontainer[1].style.width = `${stats[1]}%`;
    } else {
        statscontainer[1].style.width = `${stats[1]}%`;
    }
    if (stats[2] <= 0) {
        stats[2] = 0;
        statscontainer[2].style.width = `${stats[2]}%`;
    } else {
        statscontainer[2].style.width = `${stats[2]}%`;
    }
    for (let i = 0; i <= mineraiscontainer.length-1; i++) {
        let mineraisAleatoire = minerais[Math.floor(Math.random() * minerais.length)];
        let img = mineraiscontainer[i].querySelector("img");
        img.src = mineraisAleatoire;
        img.width = "50";
    }
});

function comparerTableauxCapsule(tableau1, tableau2) {
    // Copie des tableaux pour éviter de les modifier directement
    let copieTableau1 = [...tableau1];
    let copieTableau2 = [...tableau2];

    // Vérification du nombre d'occurrences de chaque élément dans le tableau à comparer
    for (let i = 0; i < copieTableau1.length; i++) {
        let element = copieTableau1[i];
        let index = copieTableau2.indexOf(element);
        
        if (index === -1) {
            return false; // L'élément n'est pas présent dans le deuxième tableau, les tableaux ne sont pas identiques
        }
        
        // Suppression de l'élément trouvé dans le deuxième tableau pour ne pas le réutiliser
        copieTableau2.splice(index, 1);
    }
    
    return true; // Vérification qu'il n'y a pas d'éléments restants dans le deuxième tableau
}

document.querySelector('#manger').addEventListener("click", () => {
    if(denombconstr[2]!=0){
        denombconstr[2]--
        contenuconstr[2].innerHTML = denombconstr[2];
        stats[0] = 100;
        statscontainer[0].style.width = `${stats[0]}%`;
    } else {

    }
});

document.querySelector('#respirer').addEventListener("click", () => {
    if(denombconstr[1]!=0){
        denombconstr[1]--
        contenuconstr[1].innerHTML = denombconstr[1];
        stats[2] = 100;
        statscontainer[2].style.width = `${stats[2]}%`;
    } else {

    }
});

document.querySelector('#boire').addEventListener("click", () => {
    if(denombconstr[0]!=0){
        denombconstr[0]--
        contenuconstr[0].innerHTML = denombconstr[0];
        stats[1] = 100;
        statscontainer[1].style.width = `${stats[1]}%`;
    } else {

    }
});

document.querySelector('#capsule').addEventListener("click", () => {
    let capsule = ['capsule'];
    if (comparerTableauxCapsule(capsule,materiauxcollectible) == false) {

    } else {
        stats[2] = 100;
        statscontainer[2].style.width = `${stats[2]}%`;
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
            let cn = e.target.className;
            let img = mineraiscontainer[cn].querySelector("img");
            img.src = '';
        }
    })
);

function comparerTableaux(tableau1, tableau2) {
    for (let i = 0; i < tableau1.length; i++) {
        let element = tableau1[i];
        let index = tableau2.indexOf(element);
        if (index === -1) {
            return false; // l'élément n'est pas présent dans le deuxième tableau, donc les tableaux ne sont pas identiques
        }
        tableau2.splice(index, 1); // enlever l'élément trouvé du deuxième tableau
    }
    return true; // tous les éléments ont été trouvés dans le deuxième tableau, donc les tableaux sont identiques
}




tasks.forEach( input => input.addEventListener('click', e => {
    let id = (e.target.id);
    if (id == 0) {
        if (contenuinventaire[0]>=1) {

        } else {
            materiauxcollectible.push('eau');
            console.log(materiauxcollectible);
        }
    }
    if (id == 1) {
        if (contenuinventaire[1]>=2) {

        } else {
            materiauxcollectible.push('oxygen');
            console.log(materiauxcollectible);
        }
    }
    if (id == 2) {
        if (contenuinventaire[2]>=2&&contenuinventaire[5]>=1) {

        } else {
            materiauxcollectible.push('capsule');
            console.log(materiauxcollectible);
            tasks[id].style.display = "none";
        }
    }
    if (id == 3) {
        if (contenuinventaire[4]>=1&&contenuinventaire[3]>=2) {

        } else {
            materiauxcollectible.push('lampe');
            minerais.push(food,seed)
            minerai.push('food','seed')
            console.log(materiauxcollectible);
            tasks[id].style.display = "none";
        }
    }
    if (id == 4) {
        if (contenuinventaire[2]>=1&&contenuinventaire[5]>=1) {

        } else {
            materiauxcollectible.push('foreuse');
            console.log(materiauxcollectible);
        }
    }
    if (id == 5) {
        if (contenuinventaire[2]>=1&&contenuinventaire[4]>=1) {

        } else {
            materiauxcollectible.push('radiateur');
            console.log(materiauxcollectible);
        }
    }
    if (id == 6) {
        if (contenuinventaire[2]>=1&&contenuinventaire[0]>=1&&contenuinventaire[6]>=1) {

        } else {
            materiauxcollectible.push('plantation');
            console.log(materiauxcollectible);
        }
    }
}));


tasks.forEach( input => input.addEventListener('mouseover', e => {
    let id = (e.target.id);
    if (id == 0) {
        let tasksmateriaux = ['ice'];
        infocraft.style.display = "block";
        infocraft.innerHTML = tasksmateriaux;
    }
    if (id == 1) {
        let tasksmateriaux = ['cobalt','cobalt'];
        infocraft.style.display = "block";
        infocraft.innerHTML = tasksmateriaux;
    }
    if (id == 2) {
        let tasksmateriaux = ['iron','iron','titanium'];
        infocraft.style.display = "block";
        infocraft.innerHTML = tasksmateriaux;
    }
    if (id == 3) {
        let tasksmateriaux = ['silicon','magnesium','magnesium'];
        infocraft.style.display = "block";
        infocraft.innerHTML = tasksmateriaux;
    }
    if (id == 4) {
        let tasksmateriaux = ['iron','titanium'];
        infocraft.style.display = "block";
        infocraft.innerHTML = tasksmateriaux;
    }
    if (id == 5) {
        let tasksmateriaux = ['iron','silicon'];
        infocraft.style.display = "block";
        infocraft.innerHTML = tasksmateriaux;
    }
    if (id == 6) {
        let tasksmateriaux = ['iron','ice','seed'];
        infocraft.style.display = "block";
        infocraft.innerHTML = tasksmateriaux;
    }
}));