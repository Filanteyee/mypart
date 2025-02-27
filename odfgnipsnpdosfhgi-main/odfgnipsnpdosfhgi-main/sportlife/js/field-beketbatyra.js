var carousel = document.getElementById('beketbatyraCarousel');
var textItems = document.querySelectorAll('.carousel-text-item');

carousel.addEventListener('slide.bs.carousel', function (event) {
    textItems.forEach(function(item) {
        item.classList.remove('active');
    });

    var slideIndex = event.to;
    document.getElementById('textSlide' + (slideIndex + 1)).classList.add('active');
});

function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

function openModal() {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modal-image");
    var mainImage = document.getElementById("main-image");

    modalImage.src = mainImage.src;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

ymaps.ready(function () {
    var map = new ymaps.Map("yandex-map", {
        center: [42.313755, 69.621512],
        zoom: 16,
        controls: []
    });

    map.controls.add('zoomControl', {
        size: 'small'
    });

    var placemark = new ymaps.Placemark([42.313755, 69.621512], {
        balloonContent: '<strong>Beket Batyra 86/2</strong><br>Shymkent'
    });

    map.behaviors.enable('drag');
    map.behaviors.disable(['scrollZoom', 'rightMouseButtonMagnifier']);

    map.geoObjects.add(placemark);
});

const menuItems = document.querySelectorAll('#menu li');
        let currentIndex = 0;
        menuItems[currentIndex].classList.add('selected');

        document.addEventListener('keydown', function (event) {
            menuItems[currentIndex].classList.remove('selected');
            if (event.key === 'ArrowDown') {
                currentIndex = (currentIndex + 1) % menuItems.length;
            } else if (event.key === 'ArrowUp') {
                currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            }
            menuItems[currentIndex].classList.add('selected');
        });

