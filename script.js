let tipoDeSolicitante = prompt("Es autonomo o Relacion de Dependencia?");
let montoMaximoParaPedir = 0

function verSolicitante(solicitante){
    solicitante = solicitante.toLowerCase()
    console.log(solicitante)
    let iva = 0
   if (solicitante == "autonomo"){
        iva = 20 
   }

   if(solicitante == "relacion de dependencia"){
       iva = 30
   }
   tipoDeSolicitante =  iva

}


verSolicitante(tipoDeSolicitante)

function montoMaximo(iva){

    iva = iva

    if(iva ==20){
        montoMaximoParaPedir = "$125235"
    }

    if(iva == 30){
        montoMaximoParaPedir = "$22430"
    }

}

montoMaximo(tipoDeSolicitante)
alert("el maximo que podes pedir es: "+montoMaximoParaPedir)
