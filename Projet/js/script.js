//Déclaration des selecteurs
var vie = document.querySelector('#vie');
var eau = document.querySelector('#eau');
var o2 = document.querySelector('#o2');
var timecontainer = document.querySelector('.time');
var statscontainer = document.querySelectorAll('.stats');
var deplacer = document.querySelector('#deplacer');
var mineraiscontainer = document.querySelectorAll('.minerais');
var tasks = document.querySelectorAll('.btntask');
var contenu = document.querySelectorAll('.tab2row');

//Déclaration des minerais
var ice = "../img/minerais/ice.webp";
var cobalt = "../img/minerais/cobalt.webp";
var iron = "../img/minerais/iron.webp";
var magnesium = "../img/minerais/magnesium.webp";
var silicon = "../img/minerais/silicon.webp";
var titanium = "../img/minerais/titanium.webp";
var food = "../img/minerais/space_food.webp"
var seed = "../img/minerais/seed_lirma.webp"

//Déclaration des tableaux
var denomb = [0,0,0,0,0];
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

setInterval(function() {
    if (stats[0]==0||stats[1]==0||stats[2]==0){
        document.querySelector(".end").style.display = "flex";
        document.querySelector(".score").innerHTML = time;
    }




    let eau = ['ice'];
    if (comparerTableauxCapsule(eau,materiaux) == false) {
        document.getElementById('0').style.color = "white";
        document.getElementById('0').style.background = "rgba(0, 0, 0, 0.60)";
        document.getElementById('0').querySelector('.star').style.filter = 'invert(1)';
    } else {
        document.getElementById('0').style.color = "black";
        document.getElementById('0').style.background = "white";
        document.getElementById('0').querySelector('.star').style.filter = 'invert(0)';
    }


    let o2 = ['cobalt','cobalt'];
    if (comparerTableauxCapsule(o2,materiaux) == false) {
        document.getElementById('1').style.color = "white";
        document.getElementById('1').style.background = "rgba(0, 0, 0, 0.60)";
        document.getElementById('1').querySelector('.star').style.filter = 'invert(1)';
    } else {
        document.getElementById('1').style.color = "black";
        document.getElementById('1').style.background = "white";
        document.getElementById('1').querySelector('.star').style.filter = 'invert(0)';
    }


    let habitacle = ['iron','iron','titanium'];
    if (comparerTableauxCapsule(habitacle,materiaux) == false) {
        document.getElementById('2').style.color = "white";
        document.getElementById('2').style.background = "rgba(0, 0, 0, 0.60)";
        document.getElementById('2').querySelector('.star').style.filter = 'invert(1)';
    } else {
        document.getElementById('2').style.color = "black";
        document.getElementById('2').style.background = "white";
        document.getElementById('2').querySelector('.star').style.filter = 'invert(0)';
    }


    let lampe = ['silicon','magnesium','magnesium'];
    if (comparerTableauxCapsule(lampe,materiaux) == false) {
        document.getElementById('3').style.color = "white";
        document.getElementById('3').style.background = "rgba(0, 0, 0, 0.60)";
        document.getElementById('3').querySelector('.star').style.filter = 'invert(1)';
    } else {
        document.getElementById('3').style.color = "black";
        document.getElementById('3').style.background = "white";
        document.getElementById('3').querySelector('.star').style.filter = 'invert(0)';
    }


    let foreuse = ['iron','titanium'];
    if (comparerTableauxCapsule(foreuse,materiaux) == false) {
        document.getElementById('4').style.color = "white";
        document.getElementById('4').style.background = "rgba(0, 0, 0, 0.60)";
        document.getElementById('4').querySelector('.star').style.filter = 'invert(1)';
    } else {
        document.getElementById('4').style.color = "black";
        document.getElementById('4').style.background = "white";
        document.getElementById('4').querySelector('.star').style.filter = 'invert(0)';
    }


    let radiateur = ['iron','silicon'];
    if (comparerTableauxCapsule(radiateur,materiaux) == false) {
        document.getElementById('5').style.color = "white";
        document.getElementById('5').style.background = "rgba(0, 0, 0, 0.60)";
        document.getElementById('5').querySelector('.star').style.filter = 'invert(1)';
    } else {
        document.getElementById('5').style.color = "black";
        document.getElementById('5').style.background = "white";
        document.getElementById('5').querySelector('.star').style.filter = 'invert(0)';
    }


    let plantation = ['iron','ice','seed'];
    if (comparerTableauxCapsule(plantation,materiaux) == false) {
        document.getElementById('6').style.color = "white";
        document.getElementById('6').style.background = "rgba(0, 0, 0, 0.60)";
        document.getElementById('6').querySelector('.star').style.filter = 'invert(1)';
    } else {
        document.getElementById('6').style.color = "black";
        document.getElementById('6').style.background = "white";
        document.getElementById('6').querySelector('.star').style.filter = 'invert(0)';
    }





    if (comparerTableaux(['eau'],materiauxcollectible) == false) {
        
    } else {
        denomb[0]++
        contenu[0].innerHTML = denomb[0];
    }


    if (comparerTableaux(['oxygen'],materiauxcollectible) == false) {
        
    } else {
        denomb[1]++
        contenu[1].innerHTML = denomb[1];
    }


    if (comparerTableaux(['foreuse'],materiauxcollectible) == false) {
        
    } else {
        denomb[2]++
        contenu[2].innerHTML = denomb[2];
    }


    if (comparerTableaux(['radiateur'],materiauxcollectible) == false) {
        
    } else {
        denomb[3]++
        contenu[3].innerHTML = denomb[3];
    }


    if (comparerTableaux(['plantation'],materiauxcollectible) == false) {
        
    } else {
        denomb[4]++
        contenu[4].innerHTML = denomb[4];
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
        statscontainer[0].style.width = stats[0] + "%";
    } else {
        statscontainer[0].style.width = stats[0] + "%";
    }
    if (stats[1] <= 0) {
        stats[1] = 0;
        statscontainer[1].style.width = stats[1] + "%";
    } else {
        statscontainer[1].style.width = stats[1] + "%";
    }
    if (stats[2] <= 0) {
        stats[2] = 0;
        statscontainer[2].style.width = stats[2] + "%";
    } else {
        statscontainer[2].style.width = stats[2] + "%";
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

document.querySelector('#capsule').addEventListener("click", () => {
    let capsule = ['capsule'];
    if (comparerTableauxCapsule(capsule,materiauxcollectible) == false) {

    } else {
        stats[2] = 100;
        statscontainer[2].style.width = stats[2] + "%";
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
        let tasksmateriaux = ['ice'];
        if (comparerTableaux(tasksmateriaux,materiaux) == false) {

        } else {
            materiauxcollectible.push('eau');
            console.log(materiauxcollectible);
        }
    }
    if (id == 1) {
        let tasksmateriaux = ['cobalt','cobalt'];
        if (comparerTableaux(tasksmateriaux,materiaux) == false) {

        } else {
            materiauxcollectible.push('oxygen');
            console.log(materiauxcollectible);
        }
    }
    if (id == 2) {
        let tasksmateriaux = ['iron','iron','titanium'];
        if (comparerTableaux(tasksmateriaux,materiaux) == false) {

        } else {
            materiauxcollectible.push('capsule');
            console.log(materiauxcollectible);
            tasks[id].style.display = "none";
        }
    }
    if (id == 3) {
        let tasksmateriaux = ['silicon','magnesium','magnesium'];
        if (comparerTableaux(tasksmateriaux,materiaux) == false) {

        } else {
            materiauxcollectible.push('lampe');
            minerais.push(food,seed)
            minerai.push('food','seed')
            console.log(materiauxcollectible);
            tasks[id].style.display = "none";
        }
    }
    if (id == 4) {
        let tasksmateriaux = ['iron','titanium'];
        if (comparerTableaux(tasksmateriaux,materiaux) == false) {

        } else {
            materiauxcollectible.push('foreuse');
            console.log(materiauxcollectible);
        }
    }
    if (id == 5) {
        let tasksmateriaux = ['iron','silicon'];
        if (comparerTableaux(tasksmateriaux,materiaux) == false) {

        } else {
            materiauxcollectible.push('radiateur');
            console.log(materiauxcollectible);
        }
    }
    if (id == 6) {
        let tasksmateriaux = ['iron','ice','seed'];
        if (comparerTableaux(tasksmateriaux,materiaux) == false) {

        } else {
            materiauxcollectible.push('plantation');
            console.log(materiauxcollectible);
        }
    }
}));


