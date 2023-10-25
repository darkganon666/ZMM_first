var btnabrirpopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btncerrarpopup = document.getElementById('bt-cerrar-popup');

btnabrirpopup.addEventListener('click',function(){
    overlay.classList.add('active');
    
});

btncerrarpopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});