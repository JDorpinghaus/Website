var projects=5;
var project=1;
var images = [
    'css/img/projectsplash_1.jpg',
    'css/img/projectsplash_2.jpg',
    'css/img/projectsplash_3.jpg',
    'css/img/projectsplash_4.jpg',
    'css/img/projectsplash_5.jpg'
];
$(document).ready(function(){
    addGalleryClicks();
    setBullet();
    console.log('loaded');
    preload(images);
    console.log('images preloaded');
});

function addGalleryClicks(){
    $("#leftButton i").click(function(){
        pauseClicks("#leftButton i");
        pauseClicks("#rightButton i");
        console.log('left clicked');
        var oldproj = project;
        if (project==1){
            project=5;
        } else {
            project--;
        }
        setBullet();
        setProject('f');
    });
    $("#rightButton i").click(function(){
        pauseClicks("#leftButton i");
        pauseClicks("#rightButton i");
        if (project==projects){
            project=1;
        } else {
            project++;
        }
        console.log('right clicked');
        setBullet();
        setProject('b');
    });
}
function setBullet(){
    var i;
    for(i=0;i<projects;i++){
        $("#bullet_" + (i+1).toString()).css("background", "rgba(255,255,255, .5)");
    }
    $("#bullet_" + project.toString()).css("background", "rgba(255,255,255, 1)");
}
function setProject(direction){
    var bimgurl = "css/img/projectsplashb_" + project.toString() + ".jpg";
    var imgurl = "css/img/projectsplash_" + project.toString() + ".jpg";
    $("#background_1").css("background", "url("+bimgurl+")");
    $("#background_2").transition({
        opacity: 0,
        transform: "scale(5.0)"
    },1000,function(){
        var temp = $("#background_1");
        $("#background_2").attr("id", "background_1");
        temp.attr("id", "background_2");
        $("#background_1").css("opacity", 1);
        $("#background_2").attr("opacity", 1);
        resumeClicks("#rightButton i");
        resumeClicks("#leftButton i");
    });
    $("#background_1").transition({
       transform: "scale(1.1)" 
    },1000);
}
function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}
function nextProject(){
    if (project == 5){
        return 1;
    } else {
        return project + 1;
    }
}
function prevProject(){
    if (project == 1){
        return 5;
    } else {
        return project - 1;
    }
}
function pauseClicks(selector){
    $(selector).css("pointer-events", "none");
}
function resumeClicks(selector){
    $(selector).css("pointer-events", "auto");
}