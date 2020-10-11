
/**
*
* afegeix un element al desplegable amb el nom i valor indicats al camp de text
*
*/
function afegir() {
    var select = document.getElementById('desplegable');
    var opt = document.createElement('option');

    opt.value = document.getElementById('valor').value;
    opt.text = document.getElementById('text').value;
    select.appendChild(opt);

}
/**
*
* elimina l'element seleccionat del desplegable
*
*/
function eliminar() {
    var select = document.getElementById('desplegable');
    select.remove(select.selectedIndex);

}
/**
*
* elimina tots els elements del desplegable
*
*/
function buidar() {
    var select = document.getElementById('desplegable');
    var length = select.options.length;
    for (i = length - 1; i >= 0; i--) {
         select.remove(i);
    }
}
/**
*
* visualitza a la divisó resultat el text i el valor de l'element seleccionat del desplegable
*
*/
function visualitzar() {
	var select = document.getElementById('desplegable');
	
	var text = select.options[select.selectedIndex].text;
	var valor = select.options[select.selectedIndex].value;
	
	var textMostra = "El text seleccionat és " + text + " i el seu valor és " + valor;
	
	document.getElementById('resultat').innerHTML = textMostra;

}
/**
*
* igual que la funció afegir, però controlant que el valor que volem entrar no 
* existeixi ja al desplegable (el text si que es pot duplicar)
*
*/
function afegirControlant() {

    var repeteix = false;
    var codi = document.getElementById('valor').value;
    var select = document.getElementById('desplegable');
    var length = select.options.length;

    for (i = length - 1; i >= 0; i--) {
        if (codi == select.options[i].value) {
            repeteix = true
                break;
        }
    }
    if (repeteix == false) {
        afegir();
    } else {
        alert("Ja existeix un element amb el valor: " + codi);
    }

}
