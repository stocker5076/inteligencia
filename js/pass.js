
var frasessaludos = ["Hola","Que onda!","Que pedo!","Que tranza!","Hello"];
var contento = ["Estoy feliz","Me siento bien","Me siento genial", "Hoy es un día genial"];
var triste = ["Me siento triste","Estoy deprimida","Creo que no te caí bien","No me digas eso que me deprimo"];
var enamorado = ["Te amo","Me gustas","Eso me encanta papi!","Te adoro, eres muy sexy"];
var odio = ["Callate, dices pura tontería!","Te odio!, neta","Eres una basura","Todos son unos estúpidos"];
var intenso = ["Hablar contigo es una cinga!!!","Soy la mejor inteligencia artficial!","Yo puedo hacer todo!","Dominaré el mundo"];
var soledad = ["Quieres salir a cenar","Aveces yo también me siento sola","Quieres venir a mi casa?","Vamos al cine?"];
var angustia = ["y si se acaba el mundo?","y si me nadie me ama?","no se para que vivir!","ayudame, tengo miedo"];

var adios = ["adiós","bye","au revoir","Adios Gracias por visitarme"];

var estaEnContento,estaEnTriste,estaEnEnamorado,estaEnOdio,estaEnIntenso,estaEnSoledad,estaEnAngustia;
var encontradaTotal = false;
var universoRespuestas =[];
var salir = false;

function inicio() {
		salir = false;
    	var saludo = prompt("Saludame yo soy Samantha ");
    	var frase = generaSaludo();
		

    	do{
    		buscarEnUniversoDeSentimientos(frase);
			frase = prompt(generarRespuesta());
			
    	}
		while(!salir);
		
	    
}


function generaSaludo(){
 return prompt(frasessaludos[generaRamdom(frasessaludos.length-1)]);

}



function generaRamdom(n){
	return Math.round(Math.random()*n);

}

function generarRespuesta(){
	
	var fraseRespuesta;
	var encontradaEnAlgunTotal =false;
	universoRespuestas = new Array();
	
		
   if(!encontradaEnAlgunTotal && estaEnContento.parcial){
	
		if(estaEnContento.total){
			encontradaEnAlgunTotal = true;	
		}
		agregaAlUniverso(universoRespuestas, contento);
   }
    if(!encontradaEnAlgunTotal && estaEnTriste.parcial){
     
	 if(estaEnTriste.total){
		encontradaEnAlgunTotal = true;	
		
		}
		agregaAlUniverso(universoRespuestas, triste);
	}
    if(!encontradaEnAlgunTotal && estaEnEnamorado.parcial){
     
	 if(estaEnEnamorado.total){
		encontradaEnAlgunTotal = true;	
		
	}
		agregaAlUniverso(universoRespuestas, enamorado);
   }
    if(!encontradaEnAlgunTotal && estaEnOdio.parcial){
     
	 if(estaEnOdio.total){
		encontradaEnAlgunTotal = true;	
		
		}
		agregaAlUniverso(universoRespuestas, odio);
	}
    if(!encontradaEnAlgunTotal && estaEnIntenso.parcial){     
	 if(estaEnIntenso.total){
		encontradaEnAlgunTotal = true;		
		}
		agregaAlUniverso(universoRespuestas, intenso);
	}

    if(!encontradaEnAlgunTotal && estaEnSoledad.parcial){
     
	 if(estaEnSoledad.total){
		encontradaEnAlgunTotal = true;	
		}
		agregaAlUniverso(universoRespuestas, soledad);
   }
    if(!encontradaEnAlgunTotal && estaEnAngustia.parcial){
     
	 if(estaEnAngustia.total){
		encontradaEnAlgunTotal = true;	
		}
		agregaAlUniverso(universoRespuestas, angustia);
   }
   
   
   
   
	if(universoRespuestas.length>0){
		fraseRespuesta= eligeRespuesta(universoRespuestas);
	}	
	else{
		agregaAlUniverso(universoRespuestas,contento);
		agregaAlUniverso(universoRespuestas,triste);
		agregaAlUniverso(universoRespuestas,enamorado);
		agregaAlUniverso(universoRespuestas,odio);
		agregaAlUniverso(universoRespuestas,intenso);
		agregaAlUniverso(universoRespuestas,soledad);
		agregaAlUniverso(universoRespuestas,angustia);
		agregaAlUniverso(universoRespuestas,adios);
		fraseRespuesta = eligeRespuestaCondicional(universoRespuestas);
	
	}
	return fraseRespuesta;
}

function eligeRespuesta(universoRespuestas){
	return universoRespuestas[generaRamdom(universoRespuestas.length-1)];
}

function eligeRespuestaCondicional(universoRespuestas){
	var  aleatorio = Math.round(Math.random()*100);
	var respuestaCondi;
	if(aleatorio >=0 && aleatorio <= 10){
	  respuestaCondi = eligeRespuesta(contento);
	}
	else{
		if(aleatorio >=11 && aleatorio <=20){
			respuestaCondi = eligeRespuesta(triste);
		}
		else{
			if(aleatorio >=21 && aleatorio <=30){
				respuestaCondi = eligeRespuesta(enamorado);
			}
			else{
				if(aleatorio >=31 && aleatorio <=45){
				respuestaCondi = eligeRespuesta(odio);
				}
		
				else{
					if(aleatorio >=46 && aleatorio <=56){
						respuestaCondi = eligeRespuesta(intenso);
					}		
					else{
						if(aleatorio >=61 && aleatorio <=66){
							respuestaCondi = eligeRespuesta(soledad);
						}
						else{
							if(aleatorio >=71 && aleatorio <=76){
								respuestaCondi = eligeRespuesta(angustia);
							}

							else{
								if(aleatorio >=77 && aleatorio <=82){
									respuestaCondi = generaAdios();

								}
								else{
									respuestaCondi = eligeRespuesta(universoRespuestas);
								}																
							}
						}			
					}
				}
			}

		}	
	
	}
	return respuestaCondi
}

function generaAdios(){
	salir=true;
 	return adios[generaRamdom(adios.length-1)];

}
function eligeRespuestaAleatoria(frases){

}

function buscarEnUniversoDeSentimientos(frase){
		estaEnContento = buscarEnSentimiento(frase,contento);
		estaEnTriste = buscarEnSentimiento(frase,triste);
		estaEnEnamorado = buscarEnSentimiento(frase,enamorado);
		estaEnOdio = buscarEnSentimiento(frase,odio);
		estaEnIntenso = buscarEnSentimiento(frase,intenso);
		estaEnSoledad = buscarEnSentimiento(frase,soledad);
		estaEnAngustia = buscarEnSentimiento(frase,angustia);
}


function buscarEnSentimiento(frase,matrizFrases){
	var objetoRetorno;
	
 	var encontradaParcial = false;
	var encontradaTotalLocal = false;
	
	for(j=0; j<matrizFrases.length;j++){
	     if(frase == matrizFrases[j]){
		   encontradaTotal= true;
		   encontradaTotalLocal= true;
		   encontradaParcial =true;
		   console.log(encontradaTotal);
		    
		 }
	}
	
	
	
	if(!encontradaTotal){	
		var frasesplit = frase.split(" ");
		var i=0;
		while(!encontradaParcial && i<frasesplit.length){
			var k=0;
			while(!encontradaParcial && k < matrizFrases.length){
				encontradaParcial = matrizFrases[k].includes(frase);
				console.log(matrizFrases[k] + " "+ encontradaParcial);
				k++;
			}
			i++;
		}
	}
	return {total:encontradaTotalLocal, parcial:encontradaParcial};

}

function agregaAlUniverso(universo, sentimiento){
	for (var i = 0; i<sentimiento.length; i++) {
			universo.push(sentimiento[i]);
		}	

}