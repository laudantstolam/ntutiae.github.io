let videos = document.getElementsByClassName("reflections-vid");
let modal = document.getElementsByClassName("modal");
let closebtn = document.getElementsByClassName("modal-close");

function removeHash(){
    setTimeout( () => {
        window.location = window.location.pathname;
        // history.pushState(null, null, "");
    }, 150)
}

document.addEventListener("DOMContentLoaded", () => {
    if(window.location.hash != undefined){
        $(window.location.hash).modal("show");
    }
    for(let i=0; i<videos.length; i++){
        closebtn[i].addEventListener("click", removeHash)
        modal[i].addEventListener("click", removeHash)
    }
})
