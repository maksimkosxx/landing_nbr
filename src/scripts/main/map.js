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
