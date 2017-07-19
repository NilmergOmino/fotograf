$(document).ready(function(){
    var targetTop = $(".main").offset().top;
    $(".button-arrow").on('click', function(){
        $('html, body').animate({ scrollTop: targetTop }, 600);
    })
})
