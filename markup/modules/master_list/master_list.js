if ($('.master_list').length > 0) {
    var busy = false;
    var page = 1;
    $(window).scroll(function () {
        var masterList = $('.master_list');

        if ((($(window).height() + $(window).scrollTop()) >= (masterList.offset().top + masterList.height())) && !busy) {
            busy = true;
            page++;
            jQuery.ajax({
                url: masterList.attr('data-url'),
                type: masterList.attr('data-method'),
                dataType: 'json',
                data: {
                    page: page
                },
                beforeSend: function () {
                    $('.master_list__preloader').show();
                },
                success: function (response) {
                    if (response.success == true) {
                        var card = '';
                        response.content.forEach(function (entry) {
                            card += '<div class="master_list__item">' + entry + '</div>';
                        });
                        $('.master_list__preloader').before(card);
                        $('.master_list__preloader').hide();
                        master_minicard_preload();
                        servicesCut();
                        busy = false;
                    } else {
                        $('.master_list__preloader').hide();
                    }
                    bannerUpdatePos(stopPoint, bannerTop);
                }
            });
        }
    });
}