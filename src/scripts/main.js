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


    $('input').on('click', function(){
        var valeur = 0;
        $('input:checked').each(function(){
            if ( $(this).attr('value') > valeur )
            {
                valeur =  $(this).attr('value');
            }
        });
        $('.progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur);
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