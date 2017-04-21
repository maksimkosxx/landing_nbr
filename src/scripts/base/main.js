$(document).ready(function(){

    // Маска поля

    $(function(){
        $('input[type="text"]').mask("+7 (999) 999-99-99");
    });
    //Скролл к форме заявки

    // $('.brands-btn, .advantages-btn, .diagnostics-btn').on('click', function (event) {
    //     event.preventDefault();
    //
    //     var id  = $(this).attr('href'),
    //         top = $(id).offset().top;
    //
    //     $('body,html').animate({scrollTop: top}, 1500);
    // });


        $('.diagnostics-list li').on('click', function(){

            var click_id=$(this).attr('id');
            var number = $(this).attr('value');
            var item = '#item_' + click_id;

            if (click_id) {

                $('.diagnostics-list').css({'display':'none'});

                $(item).fadeIn(500,
                     function () {
                         $(item)
                             .css('display', 'block')
                             .animate(500);
                     });

                $('.diagnostics-value').html(number);
                $('.progress-bar').css({'width':number});

            }
            return false;

        });



    $('.hero-content__image img').fadeIn(1200);


    $('.btn').on("click", function (event) {
        event.preventDefault();
        $('.wrapper-feedback').fadeIn(400,
            function () {
                $('.feedback')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });
    });
    $('.feedback-close').on("click", function () {
        $('.feedback')
            .animate({opacity: 0}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('.wrapper-feedback').fadeOut(400);
                }
            );
    });


});