$(() => {
    $('.lang').on('click', (e) => {
        $('.lang-hidden').slideToggle();
    });

    $('.main-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        customPaging : function(slider, i) {
            return '<img src="img/empty-dot.png" /><img src="img/full-dot.png" />';
        },
    });

    $('.content-tabs').on('click', 'div', (e) => {                       
        let target;
        let previous;
    
        if ( !$(e.target).hasClass('content-tab') ) {
            target = $(e.target).parents('.content-tab');
        } else {
            target = e.target;
        }

        if ( !$(target).hasClass('tab-active') ) {
            previous = $('.tab-active').attr('id');               // remember previous tab id
            $(`#${previous}-content`).addClass('hidden');                  // hide active tab content
            $('.tab-active').removeClass('tab-active');     // stop highlight previous selected tab
            $(target).addClass('tab-active');                     // highlight new selected tab
            target = $('.tab-active').attr('id');                 // set target to new tab id
            $(`#${target}-content`).removeClass('hidden');                 // show active tab content
        }
    });



    $('.brands-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});