var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },350);
    /*
    var alvoEvento = event.target;
    var paiEvento = alvoEvento.parentNode;

    paiEvento.remove();
    */
});





/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
});
*/