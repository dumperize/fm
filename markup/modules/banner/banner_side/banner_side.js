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
function bannerUpdatePos(stopPoint, bannerTop) {
    stopPoint = ($('.inner-content__right-side').offset().top + $('.inner-content__right-side').height()) - banner.height();
    bannerTop = $('.inner-content__right-side').height() - banner.height();
}

var banner = $('.manner-container'),
    stopPoint = ($('.inner-content__right-side').offset().top + $('.inner-content__right-side').height()) - banner.height(),
    bannerTop = $('.inner-content__right-side').height() - banner.height();

$(document).on('ready', function () {
    var container = 'manner-container',
        topPos = $('.js-manner-fix').offset().top;

    $(window).on('scroll', function () {
        if ($('.inner-content__right-side').height() > $('.inner-content__left-side').height()) {
            bannerFix(container, topPos);
            bannerUnfix(container, stopPoint, bannerTop);
        }
    });
});