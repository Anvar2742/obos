$(document).ready(function () {
    if ($('.js-gallery').length) {
        $('.js-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: `<span class="gallery-arrow mod-prev">
                            <svg width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2837 1.2434L2.21425 9.46764L12.2837 17.6919L10.8523 18.9355L0.00021322 9.46764L10.8523 -0.000267654L12.2837 1.2434V1.2434Z" fill="#0D4FA7"/>
                                <rect x="32.3599" y="10.2754" width="30.5106" height="1.73193" transform="rotate(-180 32.3599 10.2754)" fill="#0D4FA7"/>
                            </svg>
                        </span>`,
            nextArrow: `<span class="gallery-arrow mod-next">
                            <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2959 18.4734L30.3653 10.2492L20.2959 2.02492L21.7273 0.78125L32.5794 10.2492L21.7273 19.7171L20.2959 18.4734V18.4734Z" fill="#0D4FA7"/>
                                <rect x="0.219727" y="9.44141" width="30.5106" height="1.73193" fill="#0D4FA7"/>
                            </svg>
                        </span>`,
            dots: true
        });

        $('.js-gallery').slickLightbox({
            src: 'src',
            itemSelector: '.js-gallery-popup img',
            background: 'rgba(0, 0, 0, .7)'
        });

        $('.gallery-expand').on('click', function () {
            $('.gallery-item.slick-current').find('img').trigger('click')
        })
    }


    $('.product__variations-head').on('click', function (e) {
        $(this).next().toggleClass('active')
    })
});