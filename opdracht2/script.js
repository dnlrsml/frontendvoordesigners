var carouselSlide = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
var prevBtn = document.querySelector('#prevBtn');
var nextBtn = document.querySelector('#nextBtn');

//teller
var counter = 1;
var size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//buttons

nextBtn.addEventListener('click', function(){

 carouselSlide.style.transition = "transform 0.4s ease-in-out";
 counter++;  //de counter krijgt er 1 bij
carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click', function(){

 counter--;
carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('keypress', terug);


function terug(){

 counter--;
carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
};

function verder(){

 counter++;
carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
};

document.onkeydown = function(evt) {

    switch (evt.keyCode) {
        case 37:
            terug();
            break;
        case 39:
            verder();
            break;
    }
};
