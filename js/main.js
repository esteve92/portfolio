$(document).ready(function() {


    if (top.location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === 'projects.html') {
        $('.least-gallery').least();
    }

    // check for mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // click to expand menu
        $('#menu-container #menu').click(function(event) {
            event.stopPropagation();
            $("#menu").addClass('expanded');
        });

        // click to close menu
        $('#menu-container').click(function() {
            $("#menu").removeClass('expanded');
        });
    } else { 
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
    }

});
