(function(){
    console.log('debut du carrousel');
    // console.log("carrousel" = )
    let carrousel = document.querySelector(".carrousel");
    let bouton = document.querySelector(".bouton__ouvrir");
    let carrousel__x = document.querySelector(".carrousel__x");

    let galerie = document.querySelector(".galerie");
    //let galerie__img = galerie.querySelector("img"); //premiere image seulement

    let carrousel__figure = document.querySelector(".carrousel__figure");

    let galerie__img = galerie.querySelectorAll("img"); //collection d'image de la galerie





    for (const elm of galerie__img){
        let carrousel__img = document.createElement("img");
        carrousel__img.classList.add("carrousel__img");
        console.log(elm.src);
        carrousel__img.src = elm.src;
        console.log(carrousel__img.src);
        carrousel__figure.appendChild(carrousel__img);
    }




    bouton.addEventListener("mousedown", function(){
        console.log("ouverture");
        carrousel.classList.add("carrousel--ouvrir");
    })

    carrousel__x.addEventListener("mousedown", function(){
        console.log("fermeture");
        carrousel.classList.remove("carrousel--ouvrir");
    })
})()