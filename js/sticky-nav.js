$(document).ready(function(){
    var navTop = $('.nav').offset().top;
    var navSticky = function(navTop){
        var windowTop = $(window).scrollTop();
        if(windowTop >= navTop){
            $('.nav').addClass("nav_sticky");
        }
        else{
            $('.nav').removeClass("nav_sticky");
        }
    }
    navSticky();
    $(window).on("scroll", function(){
        navSticky(navTop);
    })
    $(window).resize(function(){
         var navTop = $('.nav').offset().top;
        navSticky(navTop);
    })
})
