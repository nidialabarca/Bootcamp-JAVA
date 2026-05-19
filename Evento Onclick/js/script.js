function cambiar_texto(boton) {
    if(boton.innerText == "Iniciar Sesión") {
        boton.innerText = "Cerrar Sesión";
    } else {
        boton.innerText = "Iniciar Sesión";
    }
}
function desaparece_boton(boton) {
    boton.style.display = "none";
}
function meGusta(boton, titulo) {
    let texto = boton.innerText;
    let numeroLikes = parseInt(texto);

    numeroLikes++;

    boton.innerText = numeroLikes + " me gusta";

    alert(titulo + " was liked");
}