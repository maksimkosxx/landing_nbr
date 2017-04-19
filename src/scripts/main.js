$(document).ready(function(){

    // Маска поля

    $(function(){
        $('input[type="text"]').mask("+7 (999) 999-99-99");
    });

    //Скролл к форме заявки


    $('.brands-btn, .advantages-btn, .diagnostics-btn').on('click', function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });

    // Прогресс-бар онлайн диагностика

    $('.diagnostics-list li').on('click', function(){

        $('.diagnostics-list__item').removeClass('active');
        $(this).addClass('active');

        var number = $(this).attr('value');

        if($(this).hasClass('active')) {
            $('.progress-bar').css({'width': number});
            $('.diagnostics-value').html(number);
        }

    });


    $('.hero-content__image img').fadeIn(1000);




});