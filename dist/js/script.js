$(document).ready(function() {
    $('.main__carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 200,
        prevArrow: '<button type="button" class ="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rigth.png"></button>'

    });
});