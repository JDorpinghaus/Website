var projects=5;
var project=1;
$(document).ready(function(){
    addGalleryClicks();
    setBullet();
    console.log('loaded');
});

function addGalleryClicks(){
    $("#leftButton i").click(function(){
        console.log('left clicked');
        if (project==1){
            project=5;
        } else {
            project--;
        }
        setBullet();
    });
    $("#rightButton i").click(function(){
        if (project==projects){
            project=1;
        } else {
            project++;
        }
        console.log('right clicked');
        setBullet();
    });
}
function setBullet(){
    var i;
    for(i=0;i<projects;i++){
        $("#bullet_" + (i+1).toString()).css("background", "rgba(255,255,255, .5)");
    }
    $("#bullet_" + project.toString()).css("background", "rgba(255,255,255, 1)");
}
function setProject(){
    var imgurl = "css/img/projectsplash_" + project.toString();
    $("#background").attr("background", "url("+imgurl+")");
}