function bannerFix(container, topPos) {
    if ($(window).scrollTop() >= topPos) {
        $('.' + container).addClass(container + '_fix');
    } else {
        $('.' + container).removeClass(container + '_fix');
    }
}
function bannerUnfix(container, pos, bannerTop) {
    if ($(window).scrollTop() >= pos) {
        $('.' + container).css({
            position: 'absolute',
            top: bannerTop + 'px'
        });
    } else {
        $('.' + container).removeAttr('style');
    }
}

$(document).on('ready', function () {
    var container = 'manner-container',
        topPos = $('.js-manner-fix').offset().top,
        banner = $('.' + container),
        stopPoint = ($('.inner-content__right-side').offset().top + $('.inner-content__right-side').height()) - banner.height(),
        bannerTop = $('.inner-content__right-side').height() - banner.height();

    $(window).on('scroll', function () {
        stopPoint = ($('.inner-content__right-side').offset().top + $('.inner-content__right-side').height()) - banner.height();
        bannerTop = $('.inner-content__right-side').height() - banner.height();
        if ($('.inner-content__right-side').height() > $('.inner-content__left-side').height()) {
            bannerFix(container, topPos);
            bannerUnfix(container, stopPoint, bannerTop);
        }
    });
});