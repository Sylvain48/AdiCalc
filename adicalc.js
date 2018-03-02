/*

    AdiCalc

*/

var cellules = [];
var i = 0;
var j = 0;
var somme = 0;
var tdElts = document.getElementsByTagName("td");
var addition = 0;
var compteur = 0;

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

// création du tableau de jeu
var tableauElt = document.createElement("table");
tableauElt.id = "table";
var tableauTrElts = [];
var tableauTdElts = [];


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

// Fin de la partie gagnée
function finPartie() {
    /* //jeuElt.innerHTML ="";
     jeuElt.style.border = "none";
     jeuElt.removeChild(document.getElementById("table"));
     goParametres();*/
    window.location.reload();
}

// Fait apparaitre les parametres
function goParametres() {
    function coloreDim(e) {
        dimTroisElt.style.backgroundColor = "black";
        dimQuatreElt.style.backgroundColor = "black";
        dimCinqElt.style.backgroundColor = "black";
        dimSixElt.style.backgroundColor = "black";
        dimSeptElt.style.backgroundColor = "black";
        e.target.style.backgroundColor = "green";
    }

    function coloreVal(e) {
        valCinqElt.style.backgroundColor = "black";
        valNeufElt.style.backgroundColor = "black";
        valDixNeufElt.style.backgroundColor = "black";
        e.target.style.backgroundColor = "green";
    }
    parametresElt.style.border = "solid 1px";
    // Dimensions du tableau
    dimTroisElt.textContent = "3x3";
    dimTroisElt.classList.add("boutons");
    dimTroisElt.href = "#";
    dimTroisElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 3;
        coloreDim(e);
    });
    dimQuatreElt.textContent = "4x4";
    dimQuatreElt.classList.add("boutons");
    dimQuatreElt.href = "#";
    dimQuatreElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 4;
        coloreDim(e);
    });
    dimCinqElt.textContent = "5x5";
    dimCinqElt.classList.add("boutons");
    dimCinqElt.href = "#";
    dimCinqElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 5;
        coloreDim(e);
    });
    dimSixElt.textContent = "6x6";
    dimSixElt.classList.add("boutons");
    dimSixElt.href = "#";
    dimSixElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 6;
        coloreDim(e);
    });
    dimSeptElt.textContent = "7x7";
    dimSeptElt.classList.add("boutons");
    dimSeptElt.href = "#";
    dimSeptElt.addEventListener("click", function (e) {
        e.preventDefault();
        dimension = 7;
        coloreDim(e);
    });

    // Plage des Valeurs de nombres du tableau
    valCinqElt.textContent = "1-5";
    valCinqElt.classList.add("boutons");
    valCinqElt.href = "#";
    valCinqElt.addEventListener("click", function (e) {
        e.preventDefault();
        valeurs = 5;
        coloreVal(e);
    });
    valNeufElt.textContent = "1-9";
    valNeufElt.classList.add("boutons");
    valNeufElt.href = "#";
    valNeufElt.addEventListener("click", function (e) {
        e.preventDefault();
        valeurs = 9;
        coloreVal(e);
    });
    valDixNeufElt.textContent = "1-19";
    valDixNeufElt.classList.add("boutons");
    valDixNeufElt.href = "#";
    valDixNeufElt.addEventListener("click", function (e) {
        e.preventDefault();
        valeurs = 19;
        coloreVal(e);
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
    lancerJeu();
}

// Analyse le tableau des valeurs
function analyseTableau() {
    compteur = 0;
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
            compteur++;
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
            tdElts[i + 1 + (dimension + 2) * (dimension + 1)].style.color = "green";
            compteur++;
        } else {
            tdElts[i + 1].style.color = "aqua";
            tdElts[i + 1 + (dimension + 2) * (dimension + 1)].style.color = "aqua";
        }
    } // fin de for i
    if (compteur === (dimension * 2)) {
        finPartie();
    }
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

    // *************************************

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
                tableauTdElts[indice].addEventListener('mouseover', function (e) {
                    e.target.style.color = "#48E80E";
                });
                tableauTdElts[indice].addEventListener('mouseout', function (e) {
                    e.target.style.color = "aqua";
                });

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

    // Création du bouton reset
    var resetElt = tableauTdElts[0];
    resetElt.textContent = "R";
    resetElt.addEventListener("mouseover", function (e) {
        e.target.style.color = "red";
    });
    resetElt.addEventListener("mouseout", function (e) {
        e.target.style.color = "aqua";
    });
    resetElt.addEventListener("click", function () {
        tableauTdElts.forEach(function (cellule) {
            cellule.style.backgroundColor = "black";
            cellule.style.color = "aqua";
        });
        cellules.forEach(function (cellule) {
           cellule.apparence = 0; 
        });
    });
    

    jeuElt.appendChild(tableauElt);
}



function lancerJeu() {
    console.log("GO!!!");
    constructAireJeu();
}

goParametres();
