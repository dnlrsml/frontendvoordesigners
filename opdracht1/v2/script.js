var infobutton = document.querySelectorAll('article > button');

var infosection = document.querySelectorAll('.toon');

infobutton[0].addEventListener('click', function(){

    infosection[0].classList.toggle('show');

});
console.log(infobutton);
console.log(infosection);

infobutton[1].addEventListener('click', function(){

    infosection[1].classList.toggle('show');

});

infobutton[2].addEventListener('click', function(){

    infosection[2].classList.toggle('show');

});
