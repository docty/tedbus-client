$(document).ready(function () {
    $('.single').hide().first().show();
    $('.categories li:first').addClass('active');

    $('.categories a').on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').addClass('active').siblings().removeClass('active');
        $($(this).attr('href')).show().siblings('.single').hide();
    });

    var hash = $.trim( window.location.hash );
    if (hash) $('.categories a[href$="'+hash+'"]').trigger('click');
});