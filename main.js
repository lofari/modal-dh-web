
var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

var continueBtn = document.getElementsByClassName('continue')[0];

var infoTab = document.getElementsByClassName('info');

var formTab = document.getElementsByClassName('form');

// open click
modalBtn.addEventListener('click', openModal);

// close click
closeBtn.addEventListener('click', closeModal);

continueBtn.addEventListener('click', continuar);

//outside click
window.addEventListener('click', outsideClick);

//function
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }

}

function continuar() {
    infoTab.style.opacity = 0;
    setTimeout(function(){
        infoTab.style.display = 'none';
        formTab.style.opacity = 100;
        formTab.style.display = 'inline-block';
    }, 400);


}




