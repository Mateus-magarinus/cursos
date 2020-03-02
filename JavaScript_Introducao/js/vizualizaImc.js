var escutaImc = document.querySelectorAll(".info-imc");

function viewImc(escutaImc){
    var backupImc = escutaImc.textContent;   

    escutaImc.addEventListener("mouseover", function(){
        var y = escutaImc.textContent;
        if(y < 18.5)
            escutaImc.textContent = "Peso Baixo";
            else if(y >= 18.5 && y < 25)
                escutaImc.textContent = "Peso Normal";
            else if(y >= 25 && y < 30)
                escutaImc.textContent = "Sobrepeso";
            else if(y >= 30 && y < 35)
                escutaImc.textContent = "Obesidade";
            else if(y >= 35 && y < 40)
                escutaImc.textContent = "Obesidade Severa";
            else if(y >= 40)
                escutaImc.textContent = "Obesidade Morbida";
    });

    escutaImc.addEventListener("mouseout", function(){
        escutaImc.textContent = backupImc;
    });

}

for(var x = 0; x < escutaImc.length; x++){
    viewImc(escutaImc[x]);
}