//BACKGROUND SELECTION
function initBackground(check){
    if(check == undefined){
        check = Math.floor(Math.random() * 0)+1;
    }
    else{
        check = check;
    }
    var link = "./assets/videos/";
    link = link + check + ".mp4";
    document.getElementById("source").src = link;
    console.log(link);
}
//LOADING SCREEN

function isLoaded(){
    document.getElementById('preloader').remove();
    document.getElementById('realBody').style.display = "block";
    document.getElementById('fullscreen-bg').style.display = "block";

}

window.onload = setTimeout(function () {
    document.getElementById('body').style.display = "block";
    document.getElementById('preloader').style.display = "block";
    $('body').toggleClass('body');
    isLoaded();},5000);

// JQUERY IMPORT

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);