$(() => {
    console.log('start');

    $('.main-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        customPaging : function(slider, i) {
            return '<img src="img/empty-dot.png" /><img src="img/full-dot.png" />';
        },
    });
});