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