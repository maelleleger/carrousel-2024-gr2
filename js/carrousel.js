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




    let index = 0;
    for (const elm of galerie__img){
        creer_image_carrousel();
        creer_radio_carrousel();
        // index++;
        index = index = 1;
    }
    

    /**
     * 
     * @param {*} index numero de l'image
     * @param {*} elm 
     */
    function creer_image_carrousel(index, elm){
        let carrousel__img = document.createElement("img");
        carrousel__img.classList.add("carrousel__img");
        carrousel__img.dadset.index = index;
        console.log(elm.src);
        carrousel__img.src = elm.src;
        console.log(carrousel__img.src);
        carrousel__figure.appendChild(carrousel__img);
        
    }


    /**
     * créer les radios boutons de navigation dans le carrousel
     * @param {*} index numero du bouton radio
     */
    function creer_radio_carrousel(index){
        // créer l'input
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio"); // Modifier le type de radio
        radio.setAttribute("name", "carrousel"); // Modifier l'attribut name
        radio.setAttribute("data-index", index); // Ajouter l'index comme attribut data-index
        // ajouter le radio bouton au formulaire
        carrousel__radios.appendChild(radio);

        // créer un écouteur d'événement change
        radio.addEventListener("change", function(){
        // initialiser le style.opacity à 0 pour l'ensemble des images
        let images = document.querySelectorAll(".carrousel__img");
        images.forEach(img => {
            img.style.opacity = 0;
        });
        // initialiser l'image sélectionnée à style.opacity = 1
        // let selectedIndex = parseInt(this.dataset.index);
        let selectedIndex = parseInt(this.dataset.index);
        let selectedImg = document.querySelector(`.carrousel__img[data-index='${selectedIndex}']`);
        if(selectedImg) {
            selectedImg.style.opacity = 1;
        }
    });

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