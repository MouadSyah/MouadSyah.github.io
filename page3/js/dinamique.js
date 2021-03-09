$("main").height(window.innerHeight);
window.onscroll =()=>{
    if ($("html, body").scrollTop() > 120) 
    {$(".to-top").show().on("click" , function () { $("html, body").scrollTop(0)})}
    else 
    {$(".to-top").hide()}
};
$("body").css({"overflow" : "hidden"});
  window.onload= function () {
    $("body").css({"overflow" : "initial"});
    $(".load").hide()
  }