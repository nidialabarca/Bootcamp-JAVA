function meGusta() {
    let likeCount = document.querySelector(".like-count");
    let texto = likeCount.innerText;
    let numeroLikes = parseInt(texto);

    numeroLikes++;

    likeCount.innerText = numeroLikes + " like(s)";
}
let likes = [0, 0, 0];
function Likes(posicion) {
    likes[posicion]++;
    let likeCont = document.querySelectorAll(".like-count");
    likeCont[posicion].innerText = likes[posicion] + " like(s)";
}