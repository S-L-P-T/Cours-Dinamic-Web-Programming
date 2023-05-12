//Déclaration des selecteurs
var vie = document.querySelector('#vie');
var eau = document.querySelector('#eau');
var o2 = document.querySelector('#o2');
var timecontainer = document.querySelectorAll('.time');
var deplacer = document.querySelector('#deplacer');
var mineraiscontainer = document.querySelectorAll('.minerais');
var tasks = document.querySelectorAll('.btntask');

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
var time = [0,100,100,100];
var minerai = ['ice', 'cobalt', 'iron', 'magnesium', 'silicon', 'titanium'];
var minerais = [ice, cobalt, iron, magnesium, silicon, titanium];
var materiaux = [];
var materiauxcollectible = [];

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

setInterval(function() {
    if (time[1]==0||time[2]==0||time[3]==0){
        document.querySelector(".end").style.display = "flex";
        document.querySelector(".score").innerHTML = time[0];
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
    for (let i = 0; i <= mineraiscontainer.length-1; i++) {
        let mineraisAleatoire = minerais[Math.floor(Math.random() * minerais.length)];
        let img = mineraiscontainer[i].querySelector("img");
        img.src = mineraisAleatoire;
        img.width = "50";
    }
});

function comparerTableauxCapsule(tableau1, tableau2) {
    for (let i = 0; i < tableau1.length; i++) {
        const element = tableau1[i];
        const index = tableau2.indexOf(element);
        if (index === -1) {
            return false; // l'élément n'est pas présent dans le deuxième tableau, donc les tableaux ne sont pas identiques
        }
    }
    return true; // tous les éléments ont été trouvés dans le deuxième tableau, donc les tableaux sont identiques
}

document.querySelector('#capsule').addEventListener("click", () => {
    let capsule = ['capsule'];
    if (comparerTableauxCapsule(capsule,materiauxcollectible) == false) {

    } else {
        time[3] = 100;
        timecontainer[3].style.width = time[3] + "%";
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
        const element = tableau1[i];
        const index = tableau2.indexOf(element);
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
})
);


