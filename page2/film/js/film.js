$("#to-right").on("click", function () {
    $(".active-actor").removeClass("active-actor").next().addClass("active-actor")
    $("#to-left").addClass("active-span")
    if ($(".last").hasClass("active-actor")) {
        return $("#to-right").removeClass("active-span")
    }
})
$("#to-left").on("click", function () {
    $(".active-actor").removeClass("active-actor").prev().addClass("active-actor")
    $("#to-right").addClass("active-span")
    if ($(".first").hasClass("active-actor")) {
        return $("#to-left").removeClass("active-span")
    }
})