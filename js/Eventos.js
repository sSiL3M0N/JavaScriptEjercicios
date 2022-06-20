document.getElementById("header-title").addEventListener('click',cambiarColor);

function cambiarColor(event){
    var elem=event.target;
    elem.innerHTML="You";
}
