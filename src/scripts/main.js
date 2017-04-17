$(document).ready(function(){

    $(function(){
        //2. Получить элемент, к которому необходимо добавить маску
        $('.hero-content__form input[type="text"]').mask("+7 (999) 999-99-99");
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
    // $('.price-switches__service').on("click", function() {
    //     var click_id=$(this).attr('id');
    //     if (click_id != $('.price-switches__service.active').attr('id') ) {
    //         $('.price-switches__service').removeClass('active');
    //         $(this).addClass('active');
    //         $('.price-content').removeClass('active');
    //         $('#item_' + click_id).addClass('active');
    //
    //     }
    //     return false;
    // });




});