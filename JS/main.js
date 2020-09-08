function initBackground(check){
    if(check == undefined){
        check = initBackgrounds[Math.floor(Math.random() * 0)+1];
    }
    else{
        check = initBackgrounds[check];
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
    isLoaded();},3000);
    function supportsImports() {
        return 'import' in document.createElement('link');
      }
      
      if (supportsImports()) {
        // Good to go!
      } else {
      
}

 function assestRequest() {
     var asset;
    $.get("https://hook.integromat.com/n4eo7wthq88it9lipndvt61iykl73lfq",
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
      asset = data;
    });
    return asset;
  };
