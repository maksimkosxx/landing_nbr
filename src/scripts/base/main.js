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

    // Прогресс-бар онлайн диагностика

    // $('.diagnostics-list li').on('click', function(){
    //
    //     $('.diagnostics-list__item').removeClass('active');
    //     $(this).addClass('active');
    //
    //     var number = $(this).attr('value');
    //
    // });


        $('.diagnostics-list li:first-child').on('click', function(){

            var number = $(this).attr('value');


            $('.diagnostics-list.list-base').fadeOut(400,
                function () {
                    $('.diagnostics-list.sub-first')
                        .css('display', 'block')
                        .animate(400);
                });
            $('.diagnostics-value').html(number);
            $('.progress-bar').css({'width':number});

        });
        $('.diagnostics-list li:nth-child(2)').on('click', function(){

            $('.diagnostics-list.list-base').fadeOut(400,
                function () {
                    $('.diagnostics-list.sub-first')
                        .css('display', 'block')
                        .animate(400);
                });
            $('.diagnostics-value').html(number);
            $('.progress-bar').css({'width':number});

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