function meGusta() {
    let likeCount = document.querySelector(".like-count");
    let texto = likeCount.innerText;
    let numeroLikes = parseInt(texto);

    numeroLikes++;

    likeCount.innerText = numeroLikes + " like(s)";
}