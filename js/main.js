"use strict";

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

/*------------
    FUNCTION 
-------------*/
function changeSlides(direction){
    if(direction === "up"){
        if(selectedImage === 0){
            allImages[selectedImage].classList.toggle("selected-border");
            allImages[selectedImage = images.length - 1].classList.toggle("selected-border");
        } else {
            allImages[selectedImage].classList.toggle("selected-border");
            allImages[selectedImage -= 1].classList.toggle("selected-border");
        }    
        if (currentImgIndex === 0){
            currentImgIndex = images.length - 1;
        } else {
            currentImgIndex -= 1;        
        }
    } else if (direction === 'down') {
        if(selectedImage === 0){
            allImages[selectedImage].classList.toggle("selected-border");
            allImages[selectedImage += 1].classList.toggle("selected-border");
        } else {
            allImages[selectedImage].classList.toggle("selected-border");
            if(selectedImage === images.length - 1){
                selectedImage = -1;
            }
            allImages[selectedImage += 1].classList.toggle("selected-border");
        }
        if (currentImgIndex === images.length - 1){
            currentImgIndex = 0;
        } else {
            currentImgIndex += 1;        
        }
    }
    imgToShow.src = images[currentImgIndex].image;
    infoContentTitle.innerHTML = images[currentImgIndex].title;
    infoContentDescription.innerHTML = images[currentImgIndex].text;
};

/*------------
    CONFIG 
-------------*/
const imgToShow = document.getElementById("img-to-show");
const infoContentTitle = document.querySelector(".info-content__title");
const infoContentDescription = document.querySelector(".info-content__description");
const allImages = document.querySelectorAll(".carosello-right img");
let currentImgIndex = 0;
let selectedImage = 0;

/*------------
    MAIN 
-------------*/
const arrowUpButton = document.querySelector(".ms-arrow-up").addEventListener("click", function(){
    changeSlides('up');
});

const arrowDownButton = document.querySelector(".ms-arrow-down").addEventListener("click", function(){
    changeSlides('down');
});

allImages.forEach((element, index) => {
    element.addEventListener("click", function(){
        imgToShow.src = images[index].image;
        infoContentTitle.innerHTML = images[index].title;
        infoContentDescription.innerHTML = images[index].text;
    });
});

/*-----------------
    AUTO CHANGE 
------------------*/
let automaticShowing = setInterval(function () {
    changeSlides('down');
}, 3000);

let caroselloRightEnter = document.querySelector(".carosello-right").addEventListener("mouseover", function(){
    clearInterval(automaticShowing);
});

let caroselloRightLeave = document.querySelector(".carosello-right").addEventListener("mouseout", function(){
    automaticShowing = setInterval(function () {
        changeSlides('down');
    }, 3000);
});
