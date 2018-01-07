/*

    AdiCalc

*/


var parametresElt = document.getElementById("parametres");
var jeuElt = document.getElementById("jeu");

// Contenu dans la boite parametres
var dimensionElt = document.createElement("div"); // Boite contenant la définition des dimensions du tableau
dimensionElt.classList.add("parainf");
var valeursElt = document.createElement("div"); // Boite contenant la définitions des valeurs du tableau
valeursElt.classList.add("parainf");
var goElt = document.createElement("a");

// création des éléments de dimentionnement du tableau
var dimQuatreElt = document.createElement("a");
var dimCinqElt = document.createElement("a");
var dimSixElt = document.createElement("a");
var dimSeptElt = document.createElement("a");
var dimension = 0; // Dimension du tableau de jeu

// Création des éléments de choix des valeurs
var valCinqElt = document.createElement("a");
var valNeufElt = document.createElement("a");
var valDixNeufElt = document.createElement("a");
var valeurs = 0 // Amplitude des valeurs du tableau

// Converti indices de tableaux à 2 dimensions
// Renvoi l'indice pour un tableau unidimensionnel
function indiceTableau(x, y, largeurTableau, hauteurTableau) {
    var indice = x + largeurTableau * y;
    if ((x < largeurTableau) && (y < hauteurTableau)) {
        return indice;
    } else {
        console.error("Indices entrés trop grands!");
    }
}

// Fait apparaitre les parametres
function goParametres() {
    // Dimensions du tableau
    dimQuatreElt.textContent = "4x4";
    dimQuatreElt.classList.add("boutons");
    dimQuatreElt.href = "#";
    dimQuatreElt.addEventListener("click", function(e) {
        e.preventDefault();
        dimension = 4;
        console.log("Dimensions du tableau : " + dimension + "   Valeurs du tableau : 1-" + valeurs);
    });
    dimCinqElt.textContent = "5x5";
    dimCinqElt.classList.add("boutons");
    dimCinqElt.href = "#";
    dimCinqElt.addEventListener("click", function(e) {
       e.preventDefault();
        dimension = 5;
        console.log("Dimensions du tableau : " + dimension + "   Valeurs du tableau : 1-" + valeurs);
    });
    dimSixElt.textContent = "6x6";
    dimSixElt.classList.add("boutons");
    dimSixElt.href = "#";
    dimSixElt.addEventListener("click", function(e) {
        e.preventDefault();
        dimension = 6;
        console.log("Dimensions du tableau : " + dimension + "   Valeurs du tableau : 1-" + valeurs);
    });
    dimSeptElt.textContent = "7x7";
    dimSeptElt.classList.add("boutons");
    dimSeptElt.href = "#";
    dimSeptElt.addEventListener("click", function(e) {
       e.preventDefault();
        dimension = 7;
        console.log("Dimensions du tableau : " + dimension + "   Valeurs du tableau : 1-" + valeurs);
    });
    
    // Plage des Valeurs de nombres du tableau
    valCinqElt.textContent = "1-5";
    valCinqElt.classList.add("boutons");
    valCinqElt.href = "#";
    valCinqElt.addEventListener("click", function(e) {
        e.preventDefault();
        valeurs = 5;
        console.log("Dimensions du tableau : " + dimension + "   Valeurs du tableau : 1-" + valeurs);
    });
    valNeufElt.textContent = "1-9";
    valNeufElt.classList.add("boutons");
    valNeufElt.href = "#";
    valNeufElt.addEventListener("click", function(e) {
       e.preventDefault();
        valeurs = 9;
        console.log("Dimensions du tableau : " + dimension + "   Valeurs du tableau : 1-" + valeurs);
    });
    valDixNeufElt.textContent = "1-19";
    valDixNeufElt.classList.add("boutons");
    valDixNeufElt.href = "#";
    valDixNeufElt.addEventListener("click", function(e) {
       e.preventDefault();
        valeurs = 19;
        console.log("Dimensions du tableau : " + dimension + "   Valeurs du tableau : 1-" + valeurs);
    });

    goElt.textContent = "GO";
    goElt.classList.add("parainf");
    goElt.id = "go";
    goElt.href = "#";
        
    dimensionElt.appendChild(dimQuatreElt);
    dimensionElt.appendChild(dimCinqElt);
    dimensionElt.appendChild(dimSixElt);
    dimensionElt.appendChild(dimSeptElt);

    valeursElt.appendChild(valCinqElt);
    valeursElt.appendChild(valNeufElt);
    valeursElt.appendChild(valDixNeufElt);

    parametresElt.appendChild(dimensionElt);
    parametresElt.appendChild(goElt);
    parametresElt.appendChild(valeursElt);
}

// Fait disparaitre les parametres
function razParametres() {

}

goParametres();

