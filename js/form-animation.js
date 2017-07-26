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
