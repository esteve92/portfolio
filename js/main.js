$(document).ready(function() {
    // mobile
    //// click to expand menu
    //$('#menu-container #menu').click(function(event) {
    //    event.stopPropagation();
    //    $("#menu").addClass('expanded');
    //});

    //// click to close menu
    //$('#menu-container').click(function() {
    //    $("#menu").removeClass('expanded');
    //});

    // hover on menu
    $('#menu-container #menu').hover(
        // on hover
        function() {
            $(this).addClass('expanded');
        },
        // on hover leave
        function() {
            $(this).removeClass('expanded');
        }
    );

});
