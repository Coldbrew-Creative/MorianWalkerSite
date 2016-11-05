$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('.change-now');
    var offset = startchange.offset();
    $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start <= offset.top) {
            $('.navbar').removeClass('scrolled-bar');
            $('.navbar .navbar-toggle').removeClass('toggle-on');
        } 
        else {
            $('.navbar').addClass('scrolled-bar');
            $('.navbar .navbar-toggle').addClass('toggle-on');
        }
    });

    function scrollToElement(button, element) {
        $(button).click(function() {
            $('html, body').animate({
                scrollTop : ($(element).offset().top - 50)
            }, 750);
            return false;
        });
    }

    scrollToElement('.goAbout', '.player-info');
    scrollToElement('.goMedia', '.video-cover');
    scrollToElement('.goNews', '.news-cover');
    scrollToElement('.goContact', '.contact-cover');

    $('.nav a').on('click', function(){
        $('.navbar-toggle').click(); //bootstrap 3.x by Richard
    });

    $(".fancybox").fancybox();
    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            padding : 0
        });
});