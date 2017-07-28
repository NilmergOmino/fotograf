$(document).ready(function(){
    $('.label').each(function(){
        if($(this).next().val().length == 0){
            $(this).animate(
                {
                    "margin-top": "5px"
                },
                200
            );
        }
    })
    $('.focus_animation').on('focus', function(){
        var label = $(this).prev();
        label.animate(
            {
                "margin-top": "-20px",
                "opacity": "1"
            },
            200
        );
    })
    $('.focus_animation').on('blur', function(){
        if($(this).val().length == 0){
            var label = $(this).prev();
            label.animate(
                {
                    "margin-top": "5px",
                    "opacity": "0.7"
                },
                200
            );
        }
    })
})

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

$(document).ready(function(){
    var showGaleryView = function(){
        $('.gallery-view').fadeIn(250);
        $('.img-container-view').append('<img class="img-view">');
        $('.button-close-view').on('click', function(){
            $('.gallery-view').fadeOut(250, function(){
                $('.img-view').remove();
                $('.button-next').off();
                $('.button-previous').off();
            });
            $(document).unbind('keydown');
        });
        $(document).on('keydown', function(event){
            if(event.which == 27){
                $('.gallery-view').fadeOut(250, function(){
                    $('.img-view').remove();
                    $('.button-next').off();
                    $('.button-previous').off();
                });
                $(document).unbind('keydown');
            }
        });
    }

    var setImageAttributes = function(image, imageIndex, allImagesLength){
        $('.img-view').fadeOut(250, function(){
            var bigImageSrc = image.attr('src').replace('_min.', '.');
            var bigImageAlt = image.attr('alt');
            $('.img-view').attr('src', bigImageSrc).attr('alt', bigImageAlt);
            $('.img-view').on('load', function(){
                $('.img-view').fadeIn(250);
            });
        });
        var thisImage = (imageIndex+1).toString();
        $('.img-number').text(thisImage+" / "+allImagesLength);
    }

    var setGalleryImage = function(allImages, smallImage){
        var currentImageIndex = allImages.index(smallImage);
        setImageAttributes(smallImage, currentImageIndex, allImages.length);
        var nextImage;
        $('.button-next').on('click', function(){
            currentImageIndex++;
            if(currentImageIndex >= allImages.length) currentImageIndex = 0;
            nextImage = allImages.eq(currentImageIndex);
            setImageAttributes(nextImage, currentImageIndex, allImages.length);
        })
        $('.button-previous').on('click', function(){
            currentImageIndex--;
            if(currentImageIndex < 0) currentImageIndex = allImages.length - 1;
            nextImage = allImages.eq(currentImageIndex);
            setImageAttributes(nextImage, currentImageIndex, allImages.length);
        })
        $(document).on('keydown', function(event){
            if(event.which == 39){
                $('.button-next').trigger('click');
            }
            else if(event.which == 37){
                $('.button-previous').trigger('click');
            }
        })
    }
    
    $('.gallery__img').on('click', function(){
        var smallImage = $(this);
        var parentList = $(this).parent().parent().attr('id');
        var allImages = $('#'+parentList +" .gallery__img");
        showGaleryView();
        setGalleryImage(allImages, smallImage);
    })
})

$(document).ready(function(){
    var targetTop = $(".main").offset().top;
    $(".button-arrow").on('click', function(){
        $('html, body').animate({ scrollTop: targetTop }, 600);
    })
})

$(document).ready(function(){
    var navMaxTop = $('.nav').offset().top,
        navMaxHeight = 84,
        navMaxPadding = 50;
    var navSticky = function(navMaxTop){
        var windowTop = $(window).scrollTop(),
            distanceMax = $('.main').offset().top;
        if(windowTop > navMaxTop){
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
        else if(windowTop <= navMaxTop){
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
