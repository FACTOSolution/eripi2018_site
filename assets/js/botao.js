jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.Topo').fadeIn(200);
            jQuery('.blind').fadeIn(200);
        } else {
            jQuery('.Topo').fadeOut(200);
            jQuery('.blind').fadeOut(200);
        }
    });
    
    jQuery('.Topo').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 300);
    })
});