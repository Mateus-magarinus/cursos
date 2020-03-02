var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var controla_titulo = 1;
titulo.addEventListener("click", function(){
    titulo.style.color = "#"+ Math.floor(Math.random() * 9999) +"";
    if(controla_titulo%5 == 0)
        titulo.style.color = "#FFFF";

    controla_titulo++;
});