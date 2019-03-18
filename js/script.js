

// lightbox================



lightbox.option({
    'resizeDuration': 2000,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'disableScrolling': true,
    'positionFormTop': 50,
    'showImageNumberLabel': false

});


/// isotope plugin

$('.portfolio-item').isotope({
    itemSelector : '.item',
    layoutMode : 'fitRows'
});

$('.portfolio-menu .text-center a').click(function () {
    event.preventDefault();
    $('.portfolio-menu .text-center a').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
});




