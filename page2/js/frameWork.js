if (innerWidth > 992) {
    $("body").niceScroll({
        cursorcolor:"#ffc23e",
        cursorwidth:"15px",
        cursorborder:'1px solid #1e1e1e',
        cursorborderradius:0,
        zindex:9999
      });
}
var hideSearch = _=>{
    document.querySelector("#searchButton").setAttribute("disabled" , "");
    document.querySelector("#searchInput").setAttribute("disabled", "");
    document.querySelector("#searchInput").placeholder = "search";
    document.querySelector("#searchInput").value = "";
    document.querySelector("#searchInput").classList.remove("search")
    document.querySelector("#searchButton").classList.remove("search")
    $(".cover").css({"z-index" : "-1"});
    $(".coverNav").css({"z-index" : "-1"});
    $("#search").css({"z-index" : "1"});
}
$("#search").on("click", function () {
    document.querySelector("#searchButton").removeAttribute("disabled");
    document.querySelector("#searchInput").removeAttribute("disabled");
    document.querySelector("#searchInput").placeholder = "search...";
    document.querySelector("#searchInput").classList.add("search")
    document.querySelector("#searchButton").classList.add("search")
    document.querySelector("#searchInput").focus()
    $(".cover").css({"z-index" : "50"});
    $(".coverNav").css({"z-index" : "2"});
    $("#search").css({"z-index" : "3"});
    $(".cover").on("click" , hideSearch);
    $(".coverNav").on("click" , hideSearch);
})

$(window).on("scroll", function () {
    if(document.body.scrollTop > 80) $("nav").addClass("scroll")
    else if(document.documentElement.scrollTop > 80) $("nav").addClass("scroll") 
    else $("nav").removeClass("scroll")
})

let screenSize = _=>{

    if (window.innerWidth > 1200) {
        $(".log").show();
        document.querySelector("#searchInput").placeholder = "Search";
        hideSearch = _=>{
            document.querySelector("#searchButton").setAttribute("disabled" , "");
            document.querySelector("#searchInput").setAttribute("disabled", "");
            document.querySelector("#searchInput").placeholder = "search";
            document.querySelector("#searchInput").value = "";
            document.querySelector("#searchInput").classList.remove("search")
            $(".cover").css({"z-index" : "-1"});
            $(".coverNav").css({"z-index" : "-1"});
            $("#search").css({"z-index" : "1"});
        }
        document.querySelector("#search").addEventListener("click",_=>{
            $("#login").show();
            $("#logo").show();})
    }

    if (window.innerWidth >= 992 & window.innerWidth <= 1200) {
        $(".log").hide()
        document.querySelector("#searchInput").placeholder = "";
        hideSearch = _=>{
            document.querySelector("#searchButton").setAttribute("disabled" , "");
            document.querySelector("#searchInput").setAttribute("disabled", "");
            document.querySelector("#searchInput").placeholder = "search";
            document.querySelector("#searchInput").value = "";
            document.querySelector("#searchInput").classList.remove("search")
            $(".cover").css({"z-index" : "-1"});
            $(".coverNav").css({"z-index" : "-1"});
            $("#search").css({"z-index" : "1"});
        }
        document.querySelector("#search").addEventListener("click",_=>{
            $("#login").show();
            $("#logo").show();})
    }

    if (window.innerWidth <= 992) {
        $(".log").hide()
        document.querySelector("#searchInput").placeholder = "";
        hideSearch = _=>{
            document.querySelector("#searchButton").setAttribute("disabled" , "");
            document.querySelector("#searchInput").setAttribute("disabled", "");
            document.querySelector("#searchInput").placeholder = "";
            document.querySelector("#searchInput").value = "";
            document.querySelector("#searchInput").classList.remove("search")
            $(".cover").css({"z-index" : "-1"});
            $(".coverNav").css({"z-index" : "-1"});
            $("#search").css({"z-index" : "1"});
            $("#login").show();
            $("#logo").show();
        }
        document.querySelector("#search").addEventListener("click",_=>{
            $("#login").hide();
            $("#logo").hide();})
    }
};
window.addEventListener("resize" , ()=>screenSize()) ;
screenSize();
var oLeft = window.innerWidth/2 - $(".load").outerWidth()/2
var oTop = window.innerHeight/2 - $(".load").outerHeight()/2
$(".load").css({"margin" : `${oTop}px ${oLeft}px` , "display": "block" })
$(".cover").css({"z-index" : `2000` , "background-color" : "#1e1e1e"})
window.onload = function () {
    $(".load").hide()
    $(".cover").css({"z-index" : `-1` , "background-color" : "transparent"})
}