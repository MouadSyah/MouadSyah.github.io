var video = document.querySelector("video"),
duration = [
    Math.floor(video.duration / 60),
    Math.floor(video.duration) - Math.floor(video.duration / 60) * 60
],
media = document.querySelector(".tv");
let innerVideo = $("video").width();

document.querySelector(".progres").addEventListener("change" ,function () {
    let load = $("video").width() * document.querySelector(".progres").value / 1000+"px"
    $(".file-view").css({"width" : load})
})
document.querySelector(".progres-volum").addEventListener("change" ,function () {
    let load = 100 * document.querySelector(".progres-volum").value / 100+"px"
    $(".file-volim").css({"width" : load})
})

$(".first-play").click(function () {
    document.querySelector("video").play();
    $(this).hide()
    duration = [
        Math.floor(video.duration / 60),
        Math.floor(video.duration) - Math.floor(video.duration / 60) * 60
    ]
    duration[1] = duration[1] > 9 ? duration[1] : 00 ;
    document.querySelector("#duration").textContent = `0.00 /${duration[0]}:${duration[1]} `;
    innerVideo = $("video").width();
})

document.querySelector(".progres").addEventListener("input" ,function () {
    video.currentTime = document.querySelector(".progres").value * video.duration / 1000
})

$(video).on("timeupdate", function() {
    if (video.readyState === 4)  $(".its-load").hide()
    else  $(".its-load").show()  
    document.querySelector(".progres").value = video.currentTime * 1000 / video.duration;
    $(".file-view").css({"width" :  $("video").width() * video.currentTime * 1000 / video.duration / 1000+"px" })
    var
        time = [
            Math.floor(video.currentTime / 60),
            Math.floor(video.currentTime) - Math.floor(video.currentTime / 60) * 60
        ];
    time[1] = time[1] > 9 ? time[1] : "0"+time[1] ;
    document.querySelector("#duration").textContent = `${time[0]}:${time[1]}/${duration[0]}:${duration[1]}`;
})

$(".play").click(function () {
    if (video.paused) {
        video.play();
        document.querySelector(".play").setAttribute("class" , "fas fa-pause play")
    }else{
        video.pause();
        document.querySelector(".play").setAttribute("class" , "fas fa-play play")
    }
    $(".play").css({"color" : "#ffc23e" , "transition": "all .4s linear"})
    setTimeout(() => {
        $(".play").css({"color" : "#fff"})
    }, 300);
})

$(".fa-forward").click(function () {
        video.currentTime = video.currentTime + 5
        document.querySelector(".progres").value = video.currentTime * 1000 / video.duration;
        $(".file-view").css({"width" :  $("video").width() * video.currentTime * 1000 / video.duration / 1000+"px" })
        $(".fa-forward").css({"color" : "#ffc23e" , "transition": "all .4s linear"})
        setTimeout(() => {
            $(".fa-forward").css({"color" : "#fff" , "transition" : 0})
        }, 300);
})

function Fullscreen(Element) {
    if (media.mozRequestFullScreen) media.mozRequestFullScreen();
   else if (media.webkitRequestFullscreen)
   media.webkitRequestFullscreen();
   else if (media.msRequestFullscreen) vid.msRequestFullscreen();
 }
function exitFullscreen() {
   if (document.exitFullscreen) document.exitFullscreen();
   else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
   else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
   else if (document.msExitFullscreen) document.msExitFullscreen();
}
function IsFullScreen() {
var full_screen_element =
   document.webkitFullscreenElement ||
   document.mozFullScreenElement ||
   document.msFullscreenElement ||
   null;

   if (full_screen_element === null) return false;
   else return true;
}
$(".fa-expand").click(function() {
    if (IsFullScreen(video)) {
        exitFullscreen();
        $(".file-view").css({"width" :  innerVideo *  document.querySelector(".progres").value / 1000 +"px" })
    }
    else {
        Fullscreen(video[0]);
        $(".file-view").css({"width" :  innerWidth * video.currentTime / video.duration +"px" })
        $(".play").click();
        setTimeout(() => {
            $(".play").click();
        }, 100);
    }
})

$(".volum").click(function () {
    if (video.muted == false){
        $(".volum").data("volum" , video.volume);
        console.log(video.volume);
        video.muted = true;
        document.querySelector(".volum").setAttribute("class" , "fas fa-volume-mute volum");
        document.querySelector(".progres-volum").value = 0;
        $(".file-volim").css({"width" :  0+"px" })
    }else{
        video.muted = false;
        video.volume = $(".volum").data("volum");
        document.querySelector(".volum").setAttribute("class" , "fas fa-volume-up volum");
        document.querySelector(".progres-volum").value = 100 * video.volume / 1;
        $(".file-volim").css({"width" :  100 * video.volume / 1+"px" })}
})

document.querySelector(".progres-volum").addEventListener("input" ,function () {
    video.volume = document.querySelector(".progres-volum").value / 100
    if (video.volume == 0) {
        document.querySelector(".volum").setAttribute("class" , "fas fa-volume-mute volum");
    }else{
        $(".volum").data("volum" , video.volume);
        document.querySelector(".volum").setAttribute("class" , "fas fa-volume-up volum");
    }
})

$(video).click(function () {
    $(".play").click();
})
$(video).dblclick(function () {
    $(".fa-expand").click()
})

function detectKeypress(e ) {
    if (true) {
        console.log(e.keyCode);

        if(e.keyCode == 32) {
            e.preventDefault(e.keyCod)
            $(".first-play").hide();
            $(".play").click();
        }
        if(e.keyCode == 39) {
            video.currentTime = video.currentTime + 5
            document.querySelector(".progres").value = video.currentTime * 1000 / video.duration;
            $(".file-view").css({"width" :  $("video").width() * video.currentTime * 1000 / video.duration / 1000+"px" })
        }
        if(e.keyCode == 37) {
            video.currentTime = video.currentTime - 5
            document.querySelector(".progres").value = video.currentTime * 1000 / video.duration;
            $(".file-view").css({"width" :  $("video").width() * video.currentTime * 1000 / video.duration / 1000+"px" })
        }
        if(e.keyCode == 70 | e.keyCode == 27){
            $(".fa-expand").click()
        }
        else {
        return;
        }
        setTimeout(() => {
        this.keydown = false
        }, 300);
    }
}
document.querySelector(".vid-film").addEventListener("mouseenter", _ => window.onkeydown = detectKeypress  );
document.querySelector(".vid-film").addEventListener("mouseleave", _ => window.onkeydown = _ =>{});
