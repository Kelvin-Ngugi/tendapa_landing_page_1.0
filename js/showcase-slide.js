var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    effect: 'coverflow',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 8000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});