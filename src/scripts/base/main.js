$(document).ready(function(){

    // Маска поля

    // $(function(){
    //     $('input[type="text"]').mask("+7 (999) 999-99-99");
    // });
    //Скролл к форме заявки

    // $('.brands-btn, .advantages-btn, .diagnostics-btn').on('click', function (event) {
    //     event.preventDefault();
    //
    //     var id  = $(this).attr('href'),
    //         top = $(id).offset().top;
    //
    //     $('body,html').animate({scrollTop: top}, 1500);
    // });


    function diagnosticsStep() {

        $('.diagnostics-list li').on('click', function(){

            var indexItem = $(this).index('.diagnostics-list__item');
            var indexLink = $(this).index('.back-link');
            var number = $(this).attr('value');
            var listItem = '.list-item_' + (++indexItem);
            var listBack = '.list-item_' + indexLink;

            if ($(this).hasClass('diagnostics-list__item')) {
                console.log(indexItem);

                $('.diagnostics-list').css({'display':'none'});

                $(listItem).fadeIn(500,
                    function () {
                        $(listItem)
                            .css('display', 'block')
                            .animate(500);
                    });

                $('.diagnostics-value').html(number);
                $('.progress-bar').css({'width':number});

            } else if ($(this).hasClass('back-link')) {
                console.log(indexLink);

                $('.diagnostics-list').css({'display':'none'});

                $(listBack).fadeIn(500,
                    function () {
                        $(listBack)
                            .css('display', 'block')
                            .animate(500);
                    });
            }
        });
    }
    diagnosticsStep();



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