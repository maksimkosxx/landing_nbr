$(document).ready(function(){

    // Маска поля

    $(function(){
        $('#id_phone').mask("+7 (999) 999-99-99");
    });

    //Скролл к форме заявки


    $('.brands-btn, .advantages-btn').on('click', function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });


    // Бургер

    // $('.menu__btn').on("click", function () {
    //     $('.menu__navigation').slideToggle();
    //     $('.menu__btn').toggleClass('active');
    // });
    //
    // $( function() {
    //     $('.price-switches').accordion({
    //         collapsible: true,
    //         heightStyle: "content"
    //     });
    // } );
    //


});