$('.introduction-slide').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '',
    nextArrow: '<div class="next-arrow-box"><button type="button" class="slick-next"><i class="far fa-angle-right"></i></button></div>',
});

// On before slide change
$('.introduction-slide').on('afterChange', function(){

    if($('.item-1.slick-active').length === 1){
        $('.slick-next').removeClass('circle-50');
        $('.slick-next').removeClass('circle-75');
        $('.slick-next').removeClass('circle-100');
    }
    else if($('.item-2.slick-active').length === 1){
        $('.slick-next').addClass('circle-50');
        $('.slick-next').removeClass('circle-75');
        $('.slick-next').removeClass('circle-100');
    }
    else if($('.item-3.slick-active').length === 1){
        $('.slick-next').addClass('circle-75');
        $('.slick-next').removeClass('circle-50');
        $('.slick-next').removeClass('circle-100');
    }
    else{
        $('.slick-next').addClass('circle-100');
        $('.slick-next').removeClass('circle-50');
        $('.slick-next').removeClass('circle-75');
        window.location.href = 'login.html'
    }

    // prevent to jump last slide
    const firstDots = document.querySelector('.slick-dots').firstChild;
    const lasttDots = document.querySelector('.slick-dots').lastChild;
    if(firstDots.classList.contains('slick-active')){
        lasttDots.children[0].disabled = true;
    }
    else {
        lasttDots.children[0].disabled = false;
    }


}).trigger('afterChange');