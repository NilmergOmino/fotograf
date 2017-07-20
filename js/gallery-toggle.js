$(document).ready(function(){
    $('.category__button').on('click', function(){
        var clickedButton = $(this);
        var index = $('.category__button').index($(this));
        var article = $('.gallery').eq(index);
        if (!article.hasClass('gallery_active')){
            $('.gallery_active').fadeOut(250, function(){
                $('.gallery_active').removeClass('gallery_active');
                article.fadeIn(250);
                article.addClass('gallery_active');
                $('.category__button_active').removeClass('category__button_active').attr('aria-expanded', 'false');
                clickedButton.addClass('category__button_active').attr('aria-expanded', 'true');
            });
        }
    })
})
