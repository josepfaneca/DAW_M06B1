/**
 *
 * desa en 3 cookies el valor dels checkboxes, crida al mètode actualitza, i mostra una alerta.
 * per gravar les cookies, cridarem 3 cops a la funció gravaCookie, amb el nom de la cookie i el valor que vulguem guardar.
 */

function desa() {
    var CookieDate = new Date;
    CookieDate.setFullYear(CookieDate.getFullYear() + 10);

    document.cookie = "h1=" + document.getElementById("h1").checked + ";expires=" + CookieDate.toUTCString() + ";";
    document.cookie = "h2=" + document.getElementById("h2").checked + ";expires=" + CookieDate.toUTCString() + ";";
    document.cookie = "h3=" + document.getElementById("h3").checked + ";expires=" + CookieDate.toUTCString() + ";";
    alert("Dades desades");
    actualitza();
}
/**
 *
 * actualitza les imatges segons si els checkbox estan marcats o no.
 *
 */
function actualitza() {
    (document.getElementById("h1").checked ? document.getElementById("habitacio1").src = "img/calor.png" : document.getElementById("habitacio1").src = "img/fred.png");
    (document.getElementById("h2").checked ? document.getElementById("habitacio2").src = "img/calor.png" : document.getElementById("habitacio2").src = "img/fred.png");
    (document.getElementById("h3").checked ? document.getElementById("habitacio3").src = "img/calor.png" : document.getElementById("habitacio3").src = "img/fred.png");
}
/**
 *
 * recupera els valors dels checkbox de les cookies, i actualitza els checkbox
 * si no estan guardats, es considera que la calefacció estarà apagada
 * crida al mètode actualitza
 *
 */
function recupera() {
    var h1 = obteCookie("h1");
    var h2 = obteCookie("h2");
    var h3 = obteCookie("h3");
    
    document.getElementById("h1").checked = (h1 == 'true' ? true : false);
    document.getElementById("h2").checked = (h2 == 'true' ? true : false);
    document.getElementById("h3").checked = (h3 == 'true' ? true : false);

    actualitza();

}

/**
 *
 * esborra totes les dades emmagatzemades a les cookies, fent-les caducar. 
 * Per fer-ho crida 3 cops a la funció esborraCookie.
 * Desarca els checkboxes
 * treu una alerta, i crida al mètode actualitza
 */
function reset() {
    
    var nomCookies = obtenirNomCookies();
    
    for (i=0;i<nomCookies.length;i++){
        esborraCookie(nomCookies[i]);
    }

    for (i=0;i<nomCookies.length;i++){
        document.getElementById(nomCookies[i]).checked = false;
    }

    
    alert("Dades esborrades")
    
    actualitza();

}


/**
 *    separa els diferents cookies de document.cookie
 *
 * @return {Array} vector amb els diferents cookies de la forma clau = valor
 */
function recuperaArrayCookies() {
    var cookieArr = document.cookie.split(";");
    return cookieArr;
}

/**
 *   cerca en un vector de cookies el valor que correspon al segon parametre
 *
 *
 *   @param {Array} nomBuscat - clau de la cookie que es cerca dinsel vector
 *
 * @return {Array|null} el valor que correspon a la clau indicada pel parametre nomBuscat
 *   o null si no existeix aquesta clau en el vector.
 */

function obteCookie(nomBuscat) {
    var cookieArr = recuperaArrayCookies();

    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (nomBuscat == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // Return null if not found
    return null;
}



/**
 * emmagatzema les cookies amb el nom i valor indicats als paràmetres
 * i el moment actual com ultim acces;
 *
 * @param {string} nomCookie - nom de la cookie a guardar
 * @param {string} valor_cookie - valor de la cookie a guardar
 * 
 */

function gravaCookie(nomCookie, valorCookie) {
    var CookieDate = new Date;
    CookieDate.setFullYear(CookieDate.getFullYear() + 10);

    document.cookie = nomCookie + "=" + valorCookie + ";expires=" + CookieDate.toUTCString() + ";";
}



/**
 *   esborra la cookie amb la clau corresponent al parametre
 *   @param {string} nomCookie - clau de la cookie a esborrar
 */
function esborraCookie(nomCookie) {
    
    document.cookie = nomCookie + "=;" + ";expires=01 Jan 2000 00:00:00 UTC;";
    

}

function obtenirNomCookies(){
    
    
    var cookieArr = recuperaArrayCookies();
    var nomCookies = new Array(0);
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        nomCookies.push(cookiePair[0].trim());
    }
    return nomCookies;
    
    
}