//modals
var modal1 = document.getElementById('modalproject1');
var modal2 = document.getElementById('modalproject2');
var modal3 = document.getElementById('modalproject3');
//modal open btns
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');
//modal close btns
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];
//event listener open modal
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
//event listener close modal
closeBtn1.addEventListener('click', closeModal1);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
//event listner close outside modal
window.addEventListener('click', outsideClick);

//function open modal
function openModal1(){
    modal1.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function openModal2(){
    modal2.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function openModal3(){
    modal3.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

//function close modal
function closeModal1(){
    modal1.style.display = 'none';
    document.body.style.overflow = 'visible';
}
function closeModal2(){
    modal2.style.display = 'none';
    document.body.style.overflow = 'visible';
}
function closeModal3(){
    modal3.style.display = 'none';
    document.body.style.overflow = 'visible';
}

//function close modal outside modal
function outsideClick(e){
    if(e.target == modal1 || e.target == modal2 || e.target == modal3){
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    document.body.style.overflow = 'visible';
    }
}