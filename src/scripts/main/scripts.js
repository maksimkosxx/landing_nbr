$(document).ready(function () {

    // $('video').on('ended', function () {
    //     this.load();
    //     this.play();
    // });


    // // Маска поля
    //
    // $(function () {
    //     $('input[name=phone]').inputmask("+7 (999) 999-99-99");
    // });
    //
    // // Прогресс-бар онлайн диагностика
    //
    // $('.diagnostics-list li').on('click', function () {
    //
    //     var click_id = $(this).attr('id');
    //     var number = $(this).attr('value');
    //     var item = '#list-' + click_id;
    //
    //     if ($(this).hasClass('diagnostics-list__item')) {
    //
    //         // console.log(item);
    //
    //         $('.diagnostics-list').css({'display': 'none'});
    //
    //         $(item).fadeIn(500,
    //             function () {
    //                 $(item)
    //                     .css('display', 'block')
    //                     .animate(500);
    //             });
    //
    //         $('.diagnostics-value').html(number);
    //         $('.progress-bar').css({'width': number});
    //
    //     }
    //     return false;
    //
    // });
    //
    // $('form').each(function () {
    //     $(this).validate({
    //         errorPlacement: function () {
    //             return false;
    //         },
    //         submitHandler: function (form) {
    //             $.ajax({
    //                 type: "POST",
    //                 url: "/ajax/order-lp/",
    //                 dataType: 'json',
    //                 data: $(form).serialize(),
    //                 success: function (response) {
    //                     // $(this).after('<div class="success">' + response + '</div>');
    //                     if (response.status === true) {
    //                         window.location.href = '/thanks/';
    //                     } else {
    //                         alert(response.message);
    //                     }
    //                 }
    //             });
    //             return false;
    //         }
    //     });
    // });
    //
    // $('.btn').on("click", function (event) {
    //     event.preventDefault();
    //
    //     var title = $(this).attr('data-title');
    //
    //     $('.wrapper-feedback').fadeIn(400,
    //         function () {
    //             $('body').css('overflow','hidden');
    //             $('.feedback')
    //                 .css('display', 'block')
    //                 .animate({opacity: 1}, 200);
    //         });
    //
    //     if ($(this).is('[data-title]')) {
    //
    //         $('.feedback .title').html(title);
    //     }
    //
    //     if ($(this).hasClass('btn-special')) {
    //         $('.feedback .questions-form form ul textarea').css({'display': 'block'});
    //         $('.feedback .slogan').html('задайте вопрос нашему специалисту и получите ответ в течение 5 минут');
    //     } else {
    //         $('.feedback .questions-form form ul textarea').css({'display': 'none'});
    //         $('.feedback .slogan').html('оставьте заявку на бесплатную консультацию прямо сейчас и получите скидку до 20% при заказе');
    //     }
    // });
    //
    // $('.feedback-close').on("click", function () {
    //     $('body').css('overflow','auto');
    //     $('.feedback')
    //         .animate({opacity: 0}, 200,
    //             function () {
    //                 $(this).css('display', 'none');
    //                 $('.wrapper-feedback').fadeOut(400);
    //             }
    //         );
    // });


});