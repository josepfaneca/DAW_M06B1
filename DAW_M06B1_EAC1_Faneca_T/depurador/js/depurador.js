function calcula(){
	//Area= PI*radi*radi;
	//Perimetre= 2*PI*radi
	var area;
	var perimetre;
	var radi;
	var texte="";
	radi = parseInt(document.getElementById("radi").value);
	
	if(isNaN(radi)){
		alert("No has entrat un radi amb el format correcte");
	}else {
		area=Math.PI*radi*radi;
		perimetre=2*Math.PI*radi;
		texte="Area: "+area.toFixed(4)+",  perimetre= "+perimetre.toFixed(4); 
		document.getElementById("resultat").innerHTML= texte;
	}
}
