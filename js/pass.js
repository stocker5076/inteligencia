
var frasessaludos = ["Hola","Que onda!","Que pedo!","How's going","Hello"];
var contento = ["Estoy feliz","Me siento bien","Me siento genial", "Hoy es un día genial"];
var triste = ["Me siento triste","Estoy deprimido","Creo que me siento mal","No me digas eso que me deprimo"];
var enamorado = ["Te amo","Me gustas","Eso me encanta","Te adoro"];
var odio = ["Callate!","Te odio!","Eres una basuara","Todos son unos estúpidos"];
var intenso = ["El éxito está conmigo!!!","Soy el mejor!","Yo puedo hacer todo!","Dominaré el mundo"];
var soledad = ["Quieres salir a cenar","Aveces yo también me siento solo","Quieres venir a mi casa?","Vamos al cine?"];
var angustia = ["y si se acaba el mundo?","y si me hackean?","no se para que vivir!","ayudame, tengo miedo"];

var adios = ["adiós","bye","au revoir"];

var estaEnContento,estaEnTriste,estaEnEnamorado,estaEnOdio,estaEnIntenso,estaEnSoledad,estaEnAngustia;
var encontradaTotal = false;
var universoRespuestas =[];

function inicio() {
    	var saludo = prompt("Bienvenido a Inteligencia Desafio");
    	var frase = generaSaludo();
		buscarEnUniversoDeSentimientos(frase);
		alert(generarRespuesta());
	    
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
		universoRespuestas.push(contento);
   }
    if(!encontradaEnAlgunTotal && estaEnTriste.parcial){
     
	 if(estaEnTriste.total){
		encontradaEnAlgunTotal = true;	
		
		}
		universoRespuestas.push(triste);
	}
    if(!encontradaEnAlgunTotal && estaEnEnamorado.parcial){
     
	 if(estaEnEnamorado.total){
		encontradaEnAlgunTotal = true;	
		
	}
	universoRespuestas.push(enamorado);
   }
    if(!encontradaEnAlgunTotal && estaEnOdio.parcial){
     
	 if(estaEnOdio.total){
		encontradaEnAlgunTotal = true;	
		
		}
		universoRespuestas.push(odio);
	}
    if(!encontradaEnAlgunTotal && estaEnIntenso.parcial){     
	 if(estaEnIntenso.total){
		encontradaEnAlgunTotal = true;		
		}
		universoRespuestas.push(intenso);
	}

    if(!encontradaEnAlgunTotal && estaEnSoledad.parcial){
     
	 if(estaEnSoledad.total){
		encontradaEnAlgunTotal = true;	
		}
		universoRespuestas.push(soledad);
   }
    if(!encontradaEnAlgunTotal && estaEnAngustia.parcial){
     
	 if(estaEnAngustia.total){
		encontradaEnAlgunTotal = true;	
		}
		universoRespuestas.push(angustia);
   }
   
   
   
   
	if(universoRespuestas.length>0){
		fraseRespuesta= eligeRespuesta(universoRespuestas);
	}	
	else{
		universoRespuestas.push(contento);
		universoRespuestas.push(triste);
		universoRespuestas.push(enamorado);
		universoRespuestas.push(odio);
		universoRespuestas.push(intenso);
		universoRespuestas.push(soledad);
		universoRespuestas.push(angustia);
		universoRespuestas.push(adios);
		fraseRespuesta = eligeRespuestaCondicional(universoRespuestas);
	
	}
	return fraseRespuesta;
}

function eligeRespuesta(universoRespuestas){
	return universoRespuestas[0][generaRamdom(universoRespuestas[0].length-1)];
}

function eligeRespuestaCondicional(universoRespuestas){
	var  aleatorio = Math.round(Math.random()*100);
	var respuestaCondi;
	if(aleatorio >=0 && aleatorio < 50){
	  respuestaCondi = "CONTENTO: " + eligeRespuesta(contento);
	}
	else{
		respuestaCondi = "TRISTE: " + eligeRespuesta(triste);
	
	}
	return respuestaCondi
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

function numeroWhile(){
	

}