$(document).ready(function() {
    // navbar-toggle
    $('.navbar-toggle').click(function() {
        $(this).next().slideToggle('fast');
    });

    // scrolling
    $('.navbar a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function() {
                window.location.hash = hash;
            });
        }
    });
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});
