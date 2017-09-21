var myMap;

ymaps.ready(function () {
    myMap = new ymaps.Map('map', {
        zoom: 13,
        center: [51.657245, 39.189679],
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add("zoomControl", {
        position: {bottom: 70, left: 10}
    });

    var html  = '<div class="inner">';
        html +=     '<div class="inner-image">';
        html +=         '<img src="/images/landing/notebook/logo/logo.png">';
        html +=     '</div>';
        html +=     '<div class="inner-text">';
        html +=         '<div class="inner-address">Кирова, 24</div>';
        html +=         '<div class="inner-phone">+7 (473) 300-39-65</div>';
        html +=     '</div>';
        html += '</div>';

    var myPlacemark = new ymaps.Placemark([51.657245, 39.189679], {
        balloonContent: html
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/images/landing/notebook/point.png',
        iconImageSize: [50, 70],
        iconImageOffset: [-20, -47],
        balloonPanelMaxMapArea: 0
    });
    myMap.geoObjects.add(myPlacemark);

    observeEvents(myMap);

    myPlacemark.balloon.open();
});

function observeEvents (map) {
    var mapEventsGroup;
    map.geoObjects.each(function (geoObject) {
        geoObject.balloon.events

            .add('open', function (e1) {
                var placemark = e1.get('target');

                mapEventsGroup = map.events.group()

                    .add('actiontick', function (e2) {
                        if (placemark.options.get('balloonPane') == 'outerBalloon') {
                            setBalloonPane(map, placemark, e2.get('tick'));
                        }
                    })

                    .add('actiontickcomplete', function (e2) {
                        if (placemark.options.get('balloonPane') != 'outerBalloon') {
                            setBalloonPane(map, placemark, e2.get('tick'));
                        }
                    })
                /
                setBalloonPane(map, placemark);
            })

            .add('close', function () {
                mapEventsGroup.removeAll();
            });
    });
}

function setBalloonPane (map, placemark, mapData) {
    mapData = mapData || {
            globalPixelCenter: map.getGlobalPixelCenter(),
            zoom: map.getZoom()
        };

    var mapSize = map.container.getSize(),
        mapBounds = [
            [mapData.globalPixelCenter[0] - mapSize[0] / 2, mapData.globalPixelCenter[1] - mapSize[1] / 2],
            [mapData.globalPixelCenter[0] + mapSize[0] / 2, mapData.globalPixelCenter[1] + mapSize[1] / 2]
        ],
        balloonPosition = placemark.balloon.getPosition(),

        zoomFactor = Math.pow(2, mapData.zoom - map.getZoom()),

        pointInBounds = ymaps.util.pixelBounds.containsPoint(mapBounds, [
            balloonPosition[0] * zoomFactor,
            balloonPosition[1] * zoomFactor
        ]),
        isInOutersPane = placemark.options.get('balloonPane') == 'outerBalloon';


    if (!pointInBounds && isInOutersPane) {
        placemark.options.set({
            balloonPane: 'balloon',
            balloonShadowPane: 'shadows'
        });
        // и наоборот.
    } else if (pointInBounds && !isInOutersPane) {
        placemark.options.set({
            balloonPane: 'outerBalloon',
            balloonShadowPane: 'outerBalloon'
        });
    }
}

$(document).ready(function () {



    // FEEDBACK

    $('.btn--request').on('click', function (event) {
        event.preventDefault();

        $('.wrapper-feedback').fadeIn(400,
            function () {
                $('body').css('overflow','hidden');
                $('.feedback')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });
    });
    $('.feedback-close').on('click', function () {
        $('body').css('overflow','auto');
        $('.feedback')
            .animate({opacity: 0}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('.wrapper-feedback').fadeOut(400);
                }
            );
    });

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