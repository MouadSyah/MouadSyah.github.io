var filmPub = Array.from(document.querySelectorAll("main > div")),
    main = document.querySelector("main"),
    n = -((($(filmPub[0]).outerWidth() + window.innerWidth*.5/100) * filmPub.length)-window.innerWidth);
    n = Math.floor(n/100);
setInterval(() => {
     if(Math.floor(main.scrollLeft/100) === n){main.scrollLeft = 0}
     else main.scrollLeft -= $(filmPub[0]).outerWidth() + window.innerWidth*.5/100
}, 6000);
var filmList = Array.from( document.getElementsByClassName('catalog')); 
Array.from(document.querySelectorAll(".film")).forEach(e => e.children[0].classList.add("showFilm") )
Array.from(document.querySelectorAll(".film ")).forEach(EL=> {
  Array.from(EL.childNodes).forEach(el => {if(el.nodeName == "#text"){el.textContent =""}
})
} )
var myFilmList,
lastFilm = `
<div>
    <a><div class="more-film"></div></a>
    <div class="more">
    <h3>المزيد</h3>
    </div>
</div>
`;

filmList.forEach(E =>{
    var spanButton = Array.from(E.children);
    spanButton.forEach(e =>{
        if(e.tagName == "SPAN"){
            if(e.tagName == "DIV"){
                myFilmList = e;
            }
            if($(e.children[0]).hasClass("fa-caret-left")){
                var $scrollTo =  $(".showFilm").next().next().offset().left ;
                $scrollTo =-( window.innerWidth - ($scrollTo + $(".showFilm").outerWidth() +( window.innerWidth - ($(".showFilm").parent().offset().left + $(".showFilm").parent().outerWidth() ) ) ));
                Array.from($(e).nextAll()).forEach(minE =>{
                    if (minE.tagName == "DIV" & minE.children.length <= 4) {
                        $(e).css({"opacity" : "0.2",
                                "pointer-events" : "none"}
                                )}
                    if (minE.tagName == "DIV") {minE.innerHTML += lastFilm;}
                })
                e.addEventListener("click", _=>{
                    Array.from($(e).nextAll()).forEach(minE =>{
                        if (minE.tagName == "DIV") {
                            if ($(minE.children).last().prev().prev().prev().prev().prev().hasClass("showFilm") | $(minE.children).last().prev().prev().prev().prev().hasClass("showFilm")) {
                                $(e).css({"opacity" : "0.2",
                                        "pointer-events" : "none"})
                                minE.scrollLeft += $scrollTo;
                                $(minE).children(".showFilm").removeClass("showFilm").next().next().addClass("showFilm");
                            }
                            else{
                                minE.scrollLeft += $scrollTo;
                                $(minE).children(".showFilm").removeClass("showFilm").next().next().addClass("showFilm");
                                $(e).siblings("span").css({"opacity" : "1",
                                "pointer-events" : "initial"})
                                $(e).css({"pointer-events" : "none"})
                                setTimeout(() => {
                                    $(e).css({"pointer-events" : "initial"})
                                }, 500);
                            }
                        }
                    })
                })
            }
            else if($(e.children[0]).hasClass("fa-caret-right")){
                var $scrollTo =  $(".showFilm").next().next().offset().left ;
                $scrollTo = ( window.innerWidth - ($scrollTo + $(".showFilm").outerWidth() +( window.innerWidth - ($(".showFilm").parent().offset().left + $(".showFilm").parent().outerWidth() ) ) ));
                Array.from($(e).nextAll()).forEach(minE =>{
                    if (minE.tagName == "DIV" & $(minE.children).first().hasClass("showFilm")) {
                        $(e).css({"opacity" : "0.2",
                                "pointer-events" : "none"})}
                })
                e.addEventListener("click", _=>{
                    Array.from($(e).nextAll()).forEach(minE =>{
                        if (minE.tagName == "DIV") {
                            if ($(minE.children).first().next().next().hasClass("showFilm")) {
                                $(e).css({"opacity" : "0.2",
                                        "pointer-events" : "none"})
                                minE.scrollLeft += $scrollTo;
                                $(minE).children(".showFilm").removeClass("showFilm").prev().prev().addClass("showFilm");
                            }
                            else{
                                minE.scrollLeft += $scrollTo;
                                $(minE).children(".showFilm").removeClass("showFilm").prev().prev().addClass("showFilm");
                                $(e).siblings("span").css({"opacity" : "1",
                                "pointer-events" : "initial"})
                                $(e).css({"pointer-events" : "none"})
                                setTimeout(() => {
                                    $(e).css({"pointer-events" : "initial"})
                                }, 500);
                            }
                        }
                    })
                })}
        }
    }
    )
})