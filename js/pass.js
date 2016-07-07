
var frasessaludos = ["Hola","Que onda!","Que pedo!","How's going","Hello"];

function inicio() {
    	var saludo = prompt("Bienvenido a Inteligencia Desafio");
    	var frase = generaSaludo();
		console.log("generando un aleatorio del 1 al 10 :"+ generaRamdom(10));    	
        console.log("generando un aleatorio del 1 al 10 :"+ generaRamdom(10));  
        console.log("generando un aleatorio del 1 al 10 :"+ generaRamdom(10));  
        console.log("generando un aleatorio del 1 al 10 :"+ generaRamdom(10));  
        console.log("generando un aleatorio del 1 al 10 :"+ generaRamdom(10));  
}


function generaSaludo(){
 return prompt(frasessaludos[generaRamdom(frasessaludos.length-1)]);

}


function generaRamdom(n){
	return Math.round(Math.random()*n);

}

function numeroWhile(){
	

}