
function executa() {
    var numero = document.getElementById('numero').value;
    var doble = null;
    var triple = null;
    if (numero.length == 0) {
        alert('Has d\'introduir algun nombre');
        return false;

    } else if (isNaN(numero)) {
        alert('El número ha de ser un número');
        return false;

    } else if (!document.getElementById('accio2').checked && !document.getElementById('accio3').checked) {
        alert('Ha d\' escollir alguna opció ');
        return false;

    } else if (document.getElementById('accio2').checked) {
        doble = numero * 2;
        document.getElementById("resultat").innerHTML = doble;
        return true

    } else if (document.getElementById('accio3').checked) {
        triple = numero * 3;
        document.getElementById("resultat").innerHTML = triple;
        return true;

    } else {
        return false;
    }

}

function neteja() {
    document.getElementById('accio2').checked = false;
    document.getElementById('accio3').checked = false;
    document.getElementById('resultat').innerHTML = "";
    document.getElementById('numero').value = "";

}