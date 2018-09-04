
var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

// open click
modalBtn.addEventListener('click', openModal);

// close click
closeBtn.addEventListener('click', closeModal);

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




