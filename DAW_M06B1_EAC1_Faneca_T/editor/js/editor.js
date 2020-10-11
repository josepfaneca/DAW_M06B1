/**
*  Crea un nou document, es a dir, buida la divisió resultat i la caixa de text anomenada text
*/
function nou() {
    //buidar el camp resultat
    document.getElementById('resultat').innerHTML = "";

    //buidar el camp text
    document.getElementById('text').value = "";
}
/**
*   afegeix un text a la divisió resultat, amb la mida de font indicada i els estils negreta i cursiva indicats
*   el text s'afegeix al final de la divisó resultat, sense sobreescriure el que hi havia.  
*/
function afegir() {

    var div = document.getElementById('resultat');
    cadena = document.getElementById('text').value;
    negreta = document.getElementById("negreta");
    cursiva = document.getElementById("cursiva");
    midaFont = document.getElementById("font").value;

    div.innerHTML += "<p" + (midaFont == "" ? "" : " style=\"font-size: " + midaFont + "px;\"") + ">" + ((negreta.checked == true) ? "<b>" : "")
     + ((cursiva.checked == true) ? "<i>" : "")
     + cadena
     + ((negreta.checked == true) ? "</b>" : "") + ((cursiva.checked == true) ? "</i>" : "") + "</p>";
    

}

/**
*   recupera el valor del localStorage i el situa a la divisió resultat.
*   si el valor del localStorage es null, mostra una alerta i no fa cap canvi a la divisió resultat
*/
function recuperar() {
    if (localStorage.getItem("dades")== null) {
        alert("No hi ha res a recuperar");
    } else {
		var dadesLocalStorage = localStorage.getItem("dades");
		var div = document.getElementById('resultat');
		div.innerHTML += dadesLocalStorage;

	}

}
/**
*   guarda el text que hi ha a la divisó resultat al localStorage.
*	
*/
function guardar() {
    var resultat = document.getElementById('resultat').innerHTML;
    
	// Elimina tots els elements
    localStorage.clear();

    //guardar dades al localStorage
    localStorage.setItem("dades", resultat);

}

/**
 *   elimina tot el contingut del localStorage.
 *
 */
function esborrar() {
	
	// Elimina tots els elements
	localStorage.clear();
    //localStorage.removeItem("dades");

}
