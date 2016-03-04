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
    $("#background_" + project).transition({
       transform: "scale(1.1)",
       opacity: 1
    },function(){
        $("#background_" + project).attr('active', 'true');
        //$("#background_" + project).css({"background-size":"cover","background-position":"center"});
        resumeClicks("#rightButton i");
        resumeClicks("#leftButton i");
    });
    $(".background[active='true']").css("opacity", 1);
    $(".background[active='true']").transition({
        opacity: 0,
        transform: "scale(5.0)"
    },function(){
        resumeClicks("#rightButton i");
        resumeClicks("#leftButton i");
    });
    $(".background[active='true']").attr('active', 'false');
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
function initProject(){
   // $("background_1").attr()
}