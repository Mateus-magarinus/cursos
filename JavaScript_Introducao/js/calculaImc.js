function calculaImc(peso,altura){
    return (peso / (altura * altura)).toFixed(2);
}
function validaPeso(peso){
    if(peso <= 0 || peso > 1000)
        return false;
    return true;
}
function validaAltura(altura){
    if(altura <= 0 || altura >= 3)
        return false;
    return true;
}

function verificaValido(peso, altura, paciente){
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    var retorna;

    if(!pesoEhValido)
        retorna = "Peso inválido";

    if(!alturaEhValida)
        retorna = "Altura inválida";

    if (pesoEhValido && alturaEhValida) 
        retorna = calculaImc(peso,altura);

    if(!alturaEhValida || !pesoEhValido)
        paciente.classList.add("paciente-invalido");

    return retorna;

}


var pacientes = document.querySelectorAll(".paciente");
var paciente;

for(var i = 0; i < pacientes.length; i++){

    paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = verificaValido(peso, altura, paciente);

}


