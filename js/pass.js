
var frasessaludos = ["Hola","Que onda!","Que pedo!","How's going","Hello"];

var contento = ["Estoy feliz","Me siento bien","Me siento genial", "Hoy es un día genial"];
var triste = ["Me siento triste","Estoy deprimido","Creo que me siento mal","No me digas eso que me deprimo"];
var enamorado = ["Te amo","Me gustas","Eso me encanta","Te adoro"];
var odio = ["Callate!","Te odio!","Eres una basuara","Todos son unos estúpidos"];
var intenso = ["El éxito está conmigo!!!","Soy el mejor!","Yo puedo hacer todo!","Dominaré el mundo"];
var soledad = ["Quieres salir a cenar","Aveces yo también me siento solo","Quieres venir a mi casa?","Vamos al cine?"];
var angustia = ["y si se acaba el mundo?","y si me hackean?","no se para que vivir!","ayudame, tengo miedo"];

var adios = ["adiós","bye","au revoir"]

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