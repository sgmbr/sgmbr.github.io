$(document).ready(function() {
    // navbar-toggle
    $('.navbar-toggle').click(function() {
        $(this).next().slideToggle('fast');
    });
})
