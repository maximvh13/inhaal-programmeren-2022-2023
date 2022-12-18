console.log('hallo');

var goal_of_niet = 0;

var gescoordText = document.querySelector("#gescoord");
var helaasText = document.querySelector("#helaas");

var balStip = document.querySelector(".bal_op_stip");

//variabelen voor de ballen die links, midden of rechts gaan. 

var schietOpties = ["bal_op_goal_links", "bal_op_goal_midden", "bal_op_goal_rechts"]; //array met ballen schieten die in de if/else gebruikt wordt

var button = document.querySelector(".button"); //var aangemaakt voor button en button opgehaald
console.log(button)
button.addEventListener("click", handleShoot) // event toegevoegd aan button 'click' en functie erbij gehaald die onder verdergaat.
console.log(handleShoot)


function handleShoot() { // begin van de functie
    var randomNummer = Math.floor(Math.random() *3 );
    console.log("ik klik nu");
//console.log(schietOpties[0])



if (randomNummer == 0) {
    gescoordText.textContent = "Gescoord!"
    balStip.style.visibility = "hidden"; // maakt de bal hidden met CSS 'hidden'
    // laat de bal op de stip verdwijnen bij klikken
    document.getElementsByClassName(schietOpties[0])[0].style.visibility = "visible";
    setTimeout(function verbergBallen() {
        balStip.style.visibility = "visible"; // haalt visible op uit de CSS
        document.getElementsByClassName(schietOpties[0])[0].style.visibility = "hidden";
    },2000);
    // timer functie die na 2 seconde de bal weer zichtbaar maakt
    // logica haal class weg van linker kruising bal
} else if (randomNummer == 1) {
    gescoordText.textContent = "Helaas mis..."
    balStip.style.visibility = "hidden";
    // laat de bal op de stip verdwijnen bij klikken
    document.getElementsByClassName(schietOpties[1])[0].style.visibility = "visible";
    setTimeout(function verbergBallen() {
        balStip.style.visibility = "visible";
        document.getElementsByClassName(schietOpties[1])[0].style.visibility = "hidden";
    },2000);
    // timer functie die na 2 seconde de bal weer zichtbaar maakt
    // logica bal tonen in het midden
} else {
    gescoordText.textContent = "Gescoord!"
    balStip.style.visibility = "hidden";
    // laat de bal op de stip verdwijnen bij klikken
    document.getElementsByClassName(schietOpties[2])[0].style.visibility = 'visible';
    setTimeout(function verbergBallen() {
        balStip.style.visibility = "visible";
        document.getElementsByClassName(schietOpties[2])[0].style.visibility = "hidden";
    },2000);
    // timer functie die na 2 seconde de bal weer zichtbaar maakt
    // bal tonen rechts
} 
}






