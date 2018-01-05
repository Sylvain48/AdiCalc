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
var dimQuatre = document.createElement("a");
var dimCinq = document.createElement("a");
var dimSix = document.createElement("a");
var dimSept = document.createElement("a");

// Création des éléments de choix des valeurs
var valCinq = document.createElement("a");
var valNeuf = document.createElement("a");
var valDixNeuf = document.createElement("a");

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
    dimQuatre.textContent = "4x4";
    dimQuatre.classList.add("boutons");
    dimQuatre.href = "#";
    dimCinq.textContent = "5x5";
    dimCinq.classList.add("boutons");
    dimCinq.href = "#";
    dimSix.textContent = "6x6";
    dimSix.classList.add("boutons");
    dimSix.href = "#";
    dimSept.textContent = "7x7";
    dimSept.classList.add("boutons");
    dimSept.href = "#";

    valCinq.textContent = "1-5";
    valCinq.classList.add("boutons");
    valCinq.href = "#";
    valNeuf.textContent = "1-9";
    valNeuf.classList.add("boutons");
    valNeuf.href = "#";
    valDixNeuf.textContent = "1-19";
    valDixNeuf.classList.add("boutons");
    valDixNeuf.href = "#";

    goElt.textContent = "GO";
    goElt.classList.add("parainf");
    goElt.id = "go";
    goElt.href = "#";
    
    dimensionElt.appendChild(dimQuatre);
    dimensionElt.appendChild(dimCinq);
    dimensionElt.appendChild(dimSix);
    dimensionElt.appendChild(dimSept);

    valeursElt.appendChild(valCinq);
    valeursElt.appendChild(valNeuf);
    valeursElt.appendChild(valDixNeuf);

    parametresElt.appendChild(dimensionElt);
    parametresElt.appendChild(goElt);
    parametresElt.appendChild(valeursElt);
}

// Fait disparaitre les parametres
function razParametres() {

}

goParametres();
