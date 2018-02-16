/*

    AdiCalc

*/

var cellules = [];
var i = 0;
var j = 0;
var somme = 0;
var tdElts = document.getElementsByTagName("td");
var addition = 0;

var parametresElt = document.getElementById("parametres");
var jeuElt = document.getElementById("jeu");

// Contenu dans la boite parametres
var dimensionElt = document.createElement("div"); // Boite contenant la définition des dimensions du tableau
dimensionElt.classList.add("parainf");
var valeursElt = document.createElement("div"); // Boite contenant la définitions des valeurs du tableau
valeursElt.classList.add("parainf");
var goElt = document.createElement("a");

// création des éléments de dimentionnement du tableau
var dimTroisElt = document.createElement("a");
var dimQuatreElt = document.createElement("a");
var dimCinqElt = document.createElement("a");
var dimSixElt = document.createElement("a");
var dimSeptElt = document.createElement("a");
var dimension = 5; // Dimension du tableau de jeu (5 par défaut)

// Création des éléments de choix des valeurs
var valCinqElt = document.createElement("a");
var valNeufElt = document.createElement("a");
var valDixNeufElt = document.createElement("a");
var valeurs = 9 // Amplitude des valeurs du tableau (1-9 par défaut)

// Converti indices de tableaux à 2 dimensions
// Renvoi l'indice pour un tableau unidimensionnel
function indiceTableau(x, y, dimTableau) {
    var indice = x + dimTableau * y;
    if ((x < dimTableau) && (y < dimTableau)) {
        return indice;
    } else {
        return indice;
        //console.error("Indices entrés trop grands!");
    }
}

// Fait apparaitre les parametres
function goParametres() {
    parametresElt.style.border = "solid 1px";
    // Dimensions du tableau
    dimTroisElt.textContent = "3x3";
    dimTroisElt.classList.add("boutons");
    dimTroisElt.href = "#";
    dimTroisElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 3;
    });
    dimQuatreElt.textContent = "4x4";
    dimQuatreElt.classList.add("boutons");
    dimQuatreElt.href = "#";
    dimQuatreElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 4;
    });
    dimCinqElt.textContent = "5x5";
    dimCinqElt.classList.add("boutons");
    dimCinqElt.href = "#";
    dimCinqElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 5;
    });
    dimSixElt.textContent = "6x6";
    dimSixElt.classList.add("boutons");
    dimSixElt.href = "#";
    dimSixElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 6;
    });
    dimSeptElt.textContent = "7x7";
    dimSeptElt.classList.add("boutons");
    dimSeptElt.href = "#";
    dimSeptElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 7;
    });

    // Plage des Valeurs de nombres du tableau
    valCinqElt.textContent = "1-5";
    valCinqElt.classList.add("boutons");
    valCinqElt.href = "#";
    valCinqElt.addEventListener("click", function (e) {
        e.preventDefault();
        valeurs = 5;
    });
    valNeufElt.textContent = "1-9";
    valNeufElt.classList.add("boutons");
    valNeufElt.href = "#";
    valNeufElt.addEventListener("click", function (e) {
        e.preventDefault();
        valeurs = 9;
    });
    valDixNeufElt.textContent = "1-19";
    valDixNeufElt.classList.add("boutons");
    valDixNeufElt.href = "#";
    valDixNeufElt.addEventListener("click", function (e) {
        e.preventDefault();
        valeurs = 19;
    });

    goElt.textContent = "GO";
    goElt.classList.add("parainf");
    goElt.id = "go";
    goElt.href = "#";
    goElt.addEventListener("click", function (e) {
        e.preventDefault();
        razParametres();
        return;
    });

    dimensionElt.appendChild(dimTroisElt);
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

// Fait disparaitre les parametres et lance le jeu
function razParametres() {
    parametresElt.innerHTML = "";
    parametresElt.style.border = "none";
    console.log("Dimension : " + dimension + "     Valeurs : 1-" + valeurs);
    lancerJeu();
}

// Analyse le tableau des valeurs
function analyseTableau() {
    // analyse horizontale
    for (i = 0; i < dimension; i++) {
        addition = 0;
        for (j = 0; j < dimension; j++) {
            indice = j + i * dimension;
            if (tdElts[j + 1 + (i + 1) * (dimension + 2)].style.backgroundColor === "green") {
                cellules[indice].apparence = 1;
            } else {
                cellules[indice].apparence = 0;
            }
            if (cellules[indice].apparence === 1) {
                addition = addition + cellules[indice].valeur;
            }
        } // fin for j*/
        // Comparaison de l'addition avec le nombre a atteindre
        if (Number(tdElts[(i + 1) * (dimension + 2)].textContent) === addition) {
            tdElts[(i + 1) * (dimension + 2)].style.color = "green";
            tdElts[(i + 1) * (dimension + 2) + dimension + 1].style.color = "green";
        } else {
            tdElts[(i + 1) * (dimension + 2)].style.color = "aqua";
            tdElts[(i + 1) * (dimension + 2) + dimension + 1].style.color = "aqua";
        }
    } // fin for i
    // Analyse verticale
    for (i = 0; i < dimension; i++) {
        addition = 0;
        for (j = 0; j < dimension; j++) {
            indice = i + j * dimension;
            if (cellules[indice].apparence === 1) {
                addition = addition + cellules[indice].valeur;
            }
        } // fin de for j
        // Comparaison de l'adition avec le nombre a atteindre
        if (Number(tdElts[i + 1].textContent) === addition) {
            tdElts[i + 1].style.color = "green";
            tdElts[i + 1 + (dimension + 2)*(dimension+1)].style.color = "green";
        } else {
            tdElts[i + 1].style.color = "aqua";
            tdElts[i + 1 + (dimension + 2)*(dimension+1)].style.color = "aqua";
        }
    } // fin de for i
} // fin de fonction analyseTableau

// Remplissage du tableau des valeurs
function tableauValeurs() {
    for (i = 0; i < dimension * dimension; i++) {
        cellules[i] = {
            valeur: Math.floor(Math.random() * valeurs + 1),
            actif: true,
            apparence: 0
        };
        if (Math.random() > .6) {
            cellules[i].actif = false;
        }
    } // fin boucle i
}

// Construction aire de jeu
function constructAireJeu() {
    jeuElt.style.width = "700px";
    jeuElt.style.height = "700px";
    jeuElt.style.border = "solid 1px";
    jeuElt.style.display = "flex";
    jeuElt.style.justifyContent = "center";
    jeuElt.style.alignItems = "center";

    // création du tableau
    var tableauElt = document.createElement("table");
    var tableauTrElts = [];
    var tableauTdElts = [];
    var indice = 0;
    var compteur = 0;
    tableauValeurs();

    for (i = 0; i < dimension + 2; i++) {
        tableauTrElts[i] = document.createElement("tr");
        tableauElt.appendChild(tableauTrElts[i]);
        for (j = 0; j < dimension + 2; j++) {
            indice = indiceTableau(j, i, dimension + 2);
            tableauTdElts[indice] = document.createElement("td");
            tableauTdElts[indice].style.border = "1px solid aqua";
            if (i > 0 && i < dimension + 1 && j > 0 && j < dimension + 1) {
                tableauTdElts[indice].textContent = cellules[compteur].valeur;
                tableauTdElts[indice].style.backgroundColor = "black";

                // Interaction avec les cellules
                tableauTdElts[indice].addEventListener("click", function (e) {
                    switch (e.target.style.backgroundColor) {
                        case "black":
                            e.target.style.backgroundColor = "green";
                            break;
                        case "green":
                            e.target.style.backgroundColor = "red";
                            break;
                        case "red":
                            e.target.style.backgroundColor = "black";
                            break;
                    } // fin de switch
                    analyseTableau();
                }); // fin event interaction
                compteur++;
            } else {
                tableauTdElts[indice].style.border = "none";
            }
            tableauTrElts[i].appendChild(tableauTdElts[indice]);
        } //fin boucle j
    } // fin boucle i

    // Création des sommes horizontales
    for (i = 0; i < dimension; i++) {
        somme = 0;
        for (j = 0; j < dimension; j++) {
            indice = indiceTableau(j, i, dimension);
            if (cellules[indice].actif === true) {
                somme = somme + cellules[indice].valeur;
            }
        } // fin boucle j
        // Ecriture des sommes horizontales
        indice = (dimension + 2) * (i + 1);
        tableauTdElts[indice].textContent = somme;
        indice = (dimension + 2) * (i + 1) + dimension + 1;
        tableauTdElts[indice].textContent = somme;
    } // fin boucle i


    // Création des sommes verticales
    for (i = 0; i < dimension; i++) {
        somme = 0;
        for (j = 0; j < dimension; j++) {
            indice = indiceTableau(i, j, dimension);
            if (cellules[indice].actif === true) {
                somme = somme + cellules[indice].valeur;
            }
        } // fin boucle j
        // Ecriture des sommes verticales
        indice = i + 1;
        tableauTdElts[indice].textContent = somme;
        indice = i + 1 + (dimension + 2) * (dimension + 1);
        tableauTdElts[indice].textContent = somme;
    } // fin boucle i


    jeuElt.appendChild(tableauElt);
}



function lancerJeu() {
    console.log("GO!!!");
    constructAireJeu();
}

goParametres();
