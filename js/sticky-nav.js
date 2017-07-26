$(document).ready(function(){
    var navMaxTop = $('.nav').offset().top,
        navMaxHeight = 84,
        navMaxPadding = 50;
    var navSticky = function(navMaxTop){
        var windowTop = $(window).scrollTop(),
            distanceMax = $('.main').offset().top;
        if(windowTop >= navMaxTop){
            $('.nav').addClass("nav_sticky");
            var distanceCurrent = windowTop - navMaxTop,
                distancePercent = distanceCurrent/(distanceMax - navMaxTop),
                currentNavHeight = navMaxHeight - (distancePercent*(navMaxHeight-30)),
                currentNavPadding = navMaxPadding - (distancePercent*(navMaxPadding-1));
            if(currentNavHeight <= 30) currentNavHeight = 30;
            if(currentNavPadding <= 1) currentNavPadding = 1;
            $('.nav').css({
                "height": currentNavHeight+"px",
                "padding-top": currentNavPadding+"px"
            });
        }
        else if(windowTop < navMaxTop){
            $('.nav').removeClass("nav_sticky");
            $('.nav').css({
                "height": navMaxHeight+"px",
                "padding-top": navMaxPadding+"px"
            });
        }
    }
    navSticky(navMaxTop);
    $(window).on("scroll", function(){
        navSticky(navMaxTop);
    })
    $(window).resize(function(){
        var navMaxTop = $('.nav').offset().top;
        navSticky(navMaxTop);
    })
})
