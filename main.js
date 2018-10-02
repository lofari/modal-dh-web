var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var continueBtn = document.getElementsByClassName('continue')[0];
var info = document.getElementsByClassName('info')[0];
var form = document.getElementsByClassName('form')[0];
var tabNav = document.getElementsByClassName('tabNav')[0];
var infoTab = document.getElementsByClassName('info-tab')[0];
var formTab = document.getElementsByClassName('inscripcion-tab')[0];
var submitMobile = document.getElementsByClassName('submit-mobile')[0];

// open click
modalBtn.addEventListener('click', openModal);

// close click
closeBtn.addEventListener('click', closeModal);

continueBtn.addEventListener('click', continuar);
submitMobile.addEventListener('click', submit);

infoTab.addEventListener('click', handleTabClick);
formTab.addEventListener('click', handleTabClick);
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
    info.style.opacity = 0;
    setTimeout(function(){
        info.style.display = 'none';
        form.style.opacity = 100;
        form.style.display = 'inline-block';
        infoTab.classList.remove("active-tab");
        formTab.classList.add("active-tab");
        submitMobile.style.display = 'inline-block';
    }, 400);
}

function changeActive(nextContent, prevContent, nextTab, prevTab) {
    prevContent.style.opacity = 0;
    setTimeout(function () {
        prevContent.style.display = 'none';
        nextContent.style.opacity = 100;
        nextContent.style.display = 'inline-block';
        prevTab.classList.remove("active-tab");
        nextTab.classList.add("active-tab");

    }, 400);
}

function handleTabClick(){
    if (formTab.classList.contains("active-tab")){
       changeActive(info, form, infoTab, formTab);
       submitMobile.style.display = 'none';

    } else {
       changeActive(form, info, formTab, infoTab);
       submitMobile.style.display = 'inline-block';
    }
} 

function submit(){
    console.log("ponele que se mando algo...");
}








