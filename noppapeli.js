var pelaaja1kp = 0;
var pelaaja1pisteet = 0;
var pelaaja2kp=0;
var pelaaja2pisteet=0;
var pelaaja1eräv=0;
var pelaaja2eräv=0;
var pelipisteet=0;

function sininen1(){
	document.getElementById("pelaaja1round").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("lopetavuorosibutton1").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja1div").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja1button").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja1div").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja1erävoitot").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja1ilm").style.color="rgb(0, 204, 255)";
	document.getElementById("pelaaja1peli").style.color="rgb(0, 204, 255)";
	document.getElementById("pelaaja1voitto").style.color="rgb(0, 204, 255)";
	document.getElementById("kulta2").style.visibility="visible";
	document.getElementById("sininen2").style.visibility="hidden";
	document.getElementById("oranssi2").style.visibility="visible";
	document.getElementById("violetti2").style.visibility="visible";
}

function oranssi1(){
	document.getElementById("pelaaja1round").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("lopetavuorosibutton1").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja1div").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja1button").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja1div").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja1erävoitot").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja1ilm").style.color="rgb(255, 102, 0)";
	document.getElementById("pelaaja1peli").style.color="rgb(255, 102, 0)";
	document.getElementById("pelaaja1voitto").style.color="rgb(255, 102, 0)";
	document.getElementById("kulta2").style.visibility="visible";
	document.getElementById("sininen2").style.visibility="visible";
	document.getElementById("oranssi2").style.visibility="hidden";
	document.getElementById("violetti2").style.visibility="visible";
}

function violetti1(){
	document.getElementById("pelaaja1round").style.backgroundColor= "rgb(255, 0, 255)"
	document.getElementById("lopetavuorosibutton1").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja1div").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja1button").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja1div").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja1erävoitot").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja1ilm").style.color="rgb(255, 0, 255)";
	document.getElementById("pelaaja1peli").style.color="rgb(255, 0, 255)";
	document.getElementById("pelaaja1voitto").style.color="rgb(255, 0, 255)";
	document.getElementById("kulta2").style.visibility="visible";
	document.getElementById("sininen2").style.visibility="visible";
	document.getElementById("oranssi2").style.visibility="visible";
	document.getElementById("violetti2").style.visibility="hidden";
}

function kulta1(){
	document.getElementById("pelaaja1round").style.backgroundColor= "rgb(207, 175, 0)"
	document.getElementById("lopetavuorosibutton1").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja1div").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja1button").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja1div").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja1erävoitot").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja1ilm").style.color="rgb(207, 175, 0)";
	document.getElementById("pelaaja1peli").style.color="rgb(207, 175, 0)";
	document.getElementById("pelaaja1voitto").style.color="rgb(207, 175, 0)";
	document.getElementById("kulta2").style.visibility="hidden";
	document.getElementById("sininen2").style.visibility="visible";
	document.getElementById("oranssi2").style.visibility="visible";
	document.getElementById("violetti2").style.visibility="visible";
}


function vihreä1(){
	document.getElementById("pelaaja1round").style.backgroundColor= "green"
	document.getElementById("lopetavuorosibutton1").style.backgroundColor= "green";
	document.getElementById("pelaaja1div").style.backgroundColor= "green";
	document.getElementById("pelaaja1button").style.backgroundColor= "green";
	document.getElementById("pelaaja1div").style.backgroundColor= "green";
	document.getElementById("pelaaja1erävoitot").style.backgroundColor= "green";
	document.getElementById("pelaaja1ilm").style.color="green";
	document.getElementById("pelaaja1peli").style.color="green";
	document.getElementById("pelaaja1voitto").style.color="green";
	document.getElementById("kulta2").style.visibility="visible";
	document.getElementById("sininen2").style.visibility="visible";
	document.getElementById("oranssi2").style.visibility="visible";
	document.getElementById("violetti2").style.visibility="visible";
}

function sininen2(){
	document.getElementById("pelaaja2round").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("lopetavuorosibutton2").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja2div").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja2button").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja2div").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja2erävoitot").style.backgroundColor= "rgb(0, 204, 255)";
	document.getElementById("pelaaja2ilm").style.color="rgb(0, 204, 255)";
	document.getElementById("pelaaja2peli").style.color="rgb(0, 204, 255)";
	document.getElementById("pelaaja2voitto").style.color="rgb(0, 204, 255)";
	document.getElementById("kulta1").style.visibility="visible";
	document.getElementById("sininen1").style.visibility="hidden";
	document.getElementById("oranssi1").style.visibility="visible";
	document.getElementById("violetti1").style.visibility="visible";
}

function oranssi2(){
	document.getElementById("pelaaja2round").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("lopetavuorosibutton2").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja2div").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja2button").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja2div").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja2erävoitot").style.backgroundColor= "rgb(255, 102, 0)";
	document.getElementById("pelaaja2ilm").style.color="rgb(255, 102, 0)";
	document.getElementById("pelaaja2peli").style.color="rgb(255, 102, 0)";
	document.getElementById("pelaaja2voitto").style.color="rgb(255, 102, 0)";
	document.getElementById("kulta1").style.visibility="visible";
	document.getElementById("sininen1").style.visibility="visible";
	document.getElementById("oranssi1").style.visibility="hidden";
	document.getElementById("violetti1").style.visibility="visible";
}

function violetti2(){
	document.getElementById("pelaaja2round").style.backgroundColor= "rgb(255, 0, 255)"
	document.getElementById("lopetavuorosibutton2").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja2div").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja2button").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja2div").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja2erävoitot").style.backgroundColor= "rgb(255, 0, 255)";
	document.getElementById("pelaaja2ilm").style.color="rgb(255, 0, 255)";
	document.getElementById("pelaaja2peli").style.color="rgb(255, 0, 255)";
	document.getElementById("pelaaja2voitto").style.color="rgb(255, 0, 255)";
	document.getElementById("kulta1").style.visibility="visible";
	document.getElementById("sininen1").style.visibility="visible";
	document.getElementById("oranssi1").style.visibility="visible";
	document.getElementById("violetti1").style.visibility="hidden";
}

function kulta2(){
	document.getElementById("pelaaja2round").style.backgroundColor= "rgb(207, 175, 0)"
	document.getElementById("lopetavuorosibutton2").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja2div").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja2button").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja2div").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja2erävoitot").style.backgroundColor= "rgb(207, 175, 0)";
	document.getElementById("pelaaja2ilm").style.color="rgb(207, 175, 0)";
	document.getElementById("pelaaja2peli").style.color="rgb(207, 175, 0)";
	document.getElementById("pelaaja2voitto").style.color="rgb(207, 175, 0)";
	document.getElementById("kulta1").style.visibility="hidden";
	document.getElementById("sininen1").style.visibility="visible";
	document.getElementById("oranssi1").style.visibility="visible";
	document.getElementById("violetti1").style.visibility="visible";
}


function punainen2(){
	document.getElementById("pelaaja2round").style.backgroundColor= "red"
	document.getElementById("lopetavuorosibutton2").style.backgroundColor= "red";
	document.getElementById("pelaaja2div").style.backgroundColor= "red";
	document.getElementById("pelaaja2button").style.backgroundColor= "red";
	document.getElementById("pelaaja2div").style.backgroundColor= "red";
	document.getElementById("pelaaja2erävoitot").style.backgroundColor= "red";
	document.getElementById("pelaaja2ilm").style.color="red";
	document.getElementById("pelaaja2peli").style.color="red";
	document.getElementById("pelaaja2voitto").style.color="red";
	document.getElementById("kulta1").style.visibility="visible";
	document.getElementById("sininen1").style.visibility="visible";
	document.getElementById("oranssi1").style.visibility="visible";
	document.getElementById("violetti1").style.visibility="visible";
}

function allDisable(){
document.getElementById("pelaaja1button").disabled=true;
document.getElementById("pelaaja2button").disabled=true;
document.getElementById("lopetavuorosibutton1").disabled=true;
document.getElementById("lopetavuorosibutton2").disabled=true;
}

function nappipiilotus(){
		document.getElementById("pistemäärä").style.visibility= "hidden";
		document.getElementById("pelaaja1button").disabled=false;
		document.getElementById("pelaaja2button").disabled=true;
		document.getElementById("lopetavuorosibutton1").disabled=false;
		document.getElementById("lopetavuorosibutton2").disabled=true;
		document.getElementById("pelaaja1ilm").innerHTML="Pelaaja1 aloittaa!";
};


function pistevalinta(){
	nappipiilotus();
	pelipisteet = prompt("Valitse pelattava pistemäätä 1-100!");
	if (pelipisteet !=null && pelipisteet<=100 && pelipisteet>=1){
		alert("Erän voittaa "+ pelipisteet +" pisteellä!")
		}else{
			alert("Virheellinen pistemäärä!")
			location.reload()
		}
};

function pelivoittaja() {

	if (pelaaja1eräv>1) {
		document.getElementById("pelaaja1voitto").innerHTML="Pelin voittaja!"
		alert("pelaaja1 voitti pelin!");
		location.reload();
	}
	if(pelaaja2eräv>1) {
		document.getElementById("pelaaja2voitto").innerHTML="Pelin voittaja!"
		alert("pelaaja2 voitti pelin!");
		location.reload();
	}
};

function erävoittaja() {
	if(pelaaja1pisteet>=pelipisteet) {
		document.getElementById("pelaaja1ilm").innerHTML=""
		document.getElementById("pelaaja2ilm").innerHTML=""
		document.getElementById("pelaaja1kierros").innerHTML="0"
		document.getElementById("pelaaja2kierros").innerHTML="0"
		document.getElementById("pelaaja2total").innerHTML="0"
		document.getElementById("pelaaja1total").innerHTML="0"
		document.getElementById("pelaaja1voitto").innerHTML= "Erän voittaja!"
		pelaaja1eräv+=1;
		document.getElementById("pelaaja1erät").innerHTML= pelaaja1eräv;
		alert("pelaaja1 voitti erän " +(pelaaja1pisteet-pelaaja2pisteet)+ " pisteellä!")
		pelaaja2pisteet=0;
		pelaaja1pisteet=0;
		pelaaja1kp=0;
		pelaaja2kp=0;
		pelivoittaja();
		document.getElementById("pelaaja2ilm").innerHTML="Pelaaja2 aloittaa!";
	}
	if (pelaaja2pisteet>=pelipisteet){
		document.getElementById("pelaaja2ilm").innerHTML=""
		document.getElementById("pelaaja1ilm").innerHTML=""
		document.getElementById("pelaaja1kierros").innerHTML="0"
		document.getElementById("pelaaja2kierros").innerHTML="0"
		document.getElementById("pelaaja1total").innerHTML="0"
		document.getElementById("pelaaja2total").innerHTML="0"
		document.getElementById("pelaaja2voitto").innerHTML= "Erän voittaja!"
		pelaaja2eräv+=1;
		document.getElementById("pelaaja2erät").innerHTML= pelaaja2eräv;
		alert("pelaaja2 voitti erän " +(pelaaja2pisteet-pelaaja1pisteet)+ " pisteellä!")
		pelaaja2pisteet=0;
		pelaaja1pisteet=0;
		pelaaja1kp=0;
		pelaaja2kp=0;
		pelivoittaja();
		document.getElementById("pelaaja1ilm").innerHTML="Pelaaja1 aloittaa!";
	}
};


function pelaaja1heitto() {

	var noppa = Math.floor(Math.random()*6 + 1);
	document.getElementById("pelaaja2button").disabled=true;
	document.getElementById("lopetavuorosibutton2").disabled=true;
	document.getElementById("lopetavuorosibutton1").disabled=false;
	document.getElementById("pelaaja1ilm").innerHTML= "Pelaajan1 vuoro!";



	if(noppa===1){
		document.getElementById("nopat").src="noppa1.png";
		document.getElementById("pelaaja1button").disabled=true;
		document.getElementById("pelaaja2button").disabled=false;
		document.getElementById("pelaaja2ilm").innerHTML= "Pelaajan2 vuoro!";
		document.getElementById("pelaaja1ilm").innerHTML= "";
		document.getElementById("pelaaja1kierros").innerHTML="0";
		pelaaja1kp=0
	}
	if(noppa===2){
		document.getElementById("nopat").src="noppa2.png";
		pelaaja1kp+=2;
	}
	if(noppa===3){
		document.getElementById("nopat").src="noppa3.png";
		pelaaja1kp+=3;
	}
	if(noppa===4){
		document.getElementById("nopat").src="noppa4.png";
		pelaaja1kp+=4;
	}
	if(noppa===5){
		document.getElementById("nopat").src="noppa5.png";
		pelaaja1kp+=5;
	}
	if(noppa===6){
		document.getElementById("nopat").src="noppa6.png";
		pelaaja1kp+=6;
	}
	document.getElementById("pelaaja1kierros").innerHTML=pelaaja1kp;
	document.getElementById("pelaaja1voitto").innerHTML="";
	document.getElementById("pelaaja2voitto").innerHTML="";
};



function pelaaja2heitto() {


	var noppa = Math.floor(Math.random()*6 + 1);
	document.getElementById("pelaaja1button").disabled=true;
	document.getElementById("lopetavuorosibutton1").disabled=true;
	document.getElementById("lopetavuorosibutton2").disabled=false;
	document.getElementById("pelaaja2ilm").innerHTML= "Pelaajan2 vuoro!";


	if(noppa===1){
		document.getElementById("nopat").src="noppa1.png";
		document.getElementById("pelaaja2button").disabled=true;
		document.getElementById("pelaaja1button").disabled=false;
		document.getElementById("pelaaja1ilm").innerHTML= "Pelaajan1 vuoro!";
		document.getElementById("pelaaja2ilm").innerHTML= "";
		document.getElementById("pelaaja2kierros").innerHTML="0";
		pelaaja2kp=0;
	}
	if(noppa===2){
		document.getElementById("nopat").src="noppa2.png";
		pelaaja2kp+=2;
	}
	if(noppa===3){
		document.getElementById("nopat").src="noppa3.png";
		pelaaja2kp+=3;
	}
	if(noppa===4){
		document.getElementById("nopat").src="noppa4.png";
		pelaaja2kp+=4;
	}
	if(noppa===5){
		document.getElementById("nopat").src="noppa5.png";
		pelaaja2kp+=5;
	}
	if(noppa===6){
		document.getElementById("nopat").src="noppa6.png";
		pelaaja2kp+=6;
	}
	document.getElementById("pelaaja2kierros").innerHTML= pelaaja2kp;
	document.getElementById("pelaaja1voitto").innerHTML="";
	document.getElementById("pelaaja2voitto").innerHTML="";
};

function buttonDisable1(){
	document.getElementById("pelaaja1button").disabled=true;
	document.getElementById("pelaaja2button").disabled=false;
	document.getElementById("lopetavuorosibutton1").disabled=true;
	document.getElementById("lopetavuorosibutton2").disabled=false;
	document.getElementById("pelaaja2ilm").innerHTML= "Pelaajan2 vuoro!";
	document.getElementById("pelaaja1ilm").innerHTML= "";
	document.getElementById("pelaaja1kierros").innerHTML="0";
	document.getElementById("nopat").src=""
	pelaaja1pisteet+=pelaaja1kp;
	pelaaja1kp=0;
	erävoittaja();
	document.getElementById("pelaaja1total").innerHTML=pelaaja1pisteet;
	document.getElementById("pelaaja1voitto").innerHTML="";
	document.getElementById("pelaaja2voitto").innerHTML="";
};

function buttonDisable2(){
	document.getElementById("pelaaja2button").disabled=true;
	document.getElementById("pelaaja1button").disabled=false;
	document.getElementById("lopetavuorosibutton2").disabled=true;
	document.getElementById("lopetavuorosibutton1").disabled=false;
	document.getElementById("pelaaja1ilm").innerHTML= "Pelaajan1 vuoro!";
	document.getElementById("pelaaja2ilm").innerHTML= "";
	document.getElementById("pelaaja2kierros").innerHTML="0"
	document.getElementById("nopat").src=""
	pelaaja2pisteet+=pelaaja2kp;
	pelaaja2kp=0;
	erävoittaja();
	document.getElementById("pelaaja2total").innerHTML=pelaaja2pisteet;
	document.getElementById("pelaaja1voitto").innerHTML="";
	document.getElementById("pelaaja2voitto").innerHTML="";
};
