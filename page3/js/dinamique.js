$("main").height(window.innerHeight);
window.onscroll =()=>{
    if ($("html, body").scrollTop() > 120) 
    {$(".to-top").show().on("click" , function () { $("html, body").scrollTop(0)})}
    else 
    {$(".to-top").hide()}
};
$("body").niceScroll({
    cursorcolor:" #b77520",
    cursorwidth:"16px",
    cursorborder:"none",
    zindex : 99999999,
    cursorborderradius:0
  });