var nav = document.getElementById('nav');
var open = document.getElementsByClassName('open')[0];
var close = document.getElementsByClassName('close')[0];

open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);

//function open nav
function openNav(){
   nav.classList.add('active');
}
//function close nav
function closeNav(){
    nav.classList.remove('active');
}