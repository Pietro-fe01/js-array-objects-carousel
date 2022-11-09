"use strict";

/* Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima
sulla creazione del markup statico: costruiamo il container
e inseriamo l'immagine grande in modo da poter stilare lo
slider.*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/* Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso l'alto o il basso, 
l'immagine attiva diventerà visibile e dovremo aggiungervi 
titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la 
miniatura attiva è la prima e l'utente clicca la freccia 
verso l'alto, la miniatura che deve attivarsi sarà l'ultima 
e viceversa per l'ultima miniatura se l'utente clicca la 
freccia verso il basso.*/

const imgToShow = document.getElementById("img-to-show");
const infoContentTitle = document.querySelector(".info-content__title");
const infoContentDescription = document.querySelector(".info-content__description");
const allImages = document.querySelectorAll(".carosello-right img");
let currentImgIndex = 0;
let selectedImage = 0;

const arrowUpButton = document.querySelector(".ms-arrow-up").addEventListener("click", function(){
    if (currentImgIndex === 0){
        currentImgIndex = images.length - 1;
    } else {
        currentImgIndex -= 1;        
    }
    imgToShow.src = images[currentImgIndex].image;
    infoContentTitle.innerHTML = images[currentImgIndex].title;
    infoContentDescription.innerHTML = images[currentImgIndex].text;

    if(selectedImage === 0){
        allImages[selectedImage].classList.toggle("selected-border");
        allImages[selectedImage = 4].classList.toggle("selected-border");
    } else {
        allImages[selectedImage].classList.toggle("selected-border");
        allImages[selectedImage-=1].classList.toggle("selected-border");
    }    
});

const arrowDownButton = document.querySelector(".ms-arrow-down").addEventListener("click", function(){
    if (currentImgIndex === images.length - 1){
        currentImgIndex = 0;
    } else {
        currentImgIndex += 1;        
    }
    imgToShow.src = images[currentImgIndex].image;
    infoContentTitle.innerHTML = images[currentImgIndex].title;
    infoContentDescription.innerHTML = images[currentImgIndex].text;

    if(selectedImage === 0){
        allImages[selectedImage].classList.toggle("selected-border");
        allImages[selectedImage+=1].classList.toggle("selected-border");
    } else {
        allImages[selectedImage].classList.toggle("selected-border");
        if(selectedImage === 4){
            selectedImage = -1;
        }
        allImages[selectedImage+=1].classList.toggle("selected-border");
    }    
});

/*BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click
attivare l’immagine corrispondente.*/
for(let i=0; i < allImages.length; i++){
    allImages[i].addEventListener("click", function(){
        imgToShow.src = allImages[i].src;
    });
}

/* BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di
tempo (3 secondi) l’immagine attiva dovrà cambiare alla
successiva.*/
let automaticShowing = setInterval(function () {
    if (currentImgIndex === images.length - 1){
        currentImgIndex = 0;
    } else {
        currentImgIndex += 1;        
    }
    imgToShow.src = images[currentImgIndex].image;
    infoContentTitle.innerHTML = images[currentImgIndex].title;
    infoContentDescription.innerHTML = images[currentImgIndex].text;

    if(selectedImage === 0){
        allImages[selectedImage].classList.toggle("selected-border");
        allImages[selectedImage+=1].classList.toggle("selected-border");
    } else {
        allImages[selectedImage].classList.toggle("selected-border");
        if(selectedImage === 4){
            selectedImage = -1;
        }
        allImages[selectedImage+=1].classList.toggle("selected-border");
    }    
}, 3000);

let caroselloRightEnter = document.querySelector(".carosello-right").addEventListener("mouseover", function(){
    clearInterval(automaticShowing)
});

let caroselloRightLeave = document.querySelector(".carosello-right").addEventListener("mouseout", function(){
    automaticShowing = setInterval(function () {
        if (currentImgIndex === images.length - 1){
            currentImgIndex = 0;
        } else {
            currentImgIndex += 1;        
        }
        imgToShow.src = images[currentImgIndex].image;
        infoContentTitle.innerHTML = images[currentImgIndex].title;
        infoContentDescription.innerHTML = images[currentImgIndex].text;
    
        if(selectedImage === 0){
            allImages[selectedImage].classList.toggle("selected-border");
            allImages[selectedImage+=1].classList.toggle("selected-border");
        } else {
            allImages[selectedImage].classList.toggle("selected-border");
            if(selectedImage === 4){
                selectedImage = -1;
            }
            allImages[selectedImage+=1].classList.toggle("selected-border");
        }    
    }, 3000);
});


/* BONUS 3:
Aggiungere bottoni di start/stop e di inversione del 
meccanismo di autoplay.*/
