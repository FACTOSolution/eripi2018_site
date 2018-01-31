Math.trunc = Math.trunc || function(x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  }

var sectionItems = document.getElementsByTagName('section');
var navItems = document.getElementsByClassName('link');
var mapSectionNav = new Map();
for(var i = 0; i < navItems.length; i++){
    var href = navItems[i].getAttribute('href');
    mapSectionNav.set(href, navItems[i]);
}

function goToSection(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top - $('nav #head').height()
    }, 'slow');
    $('nav #menu').removeClass('show');
}


$('nav #menu .nav-item a').click(function(e){
    var id = this.getAttribute("href");
    goToSection(id);
});

function selectedNavItem(elem){
    $('.selectedNavItem').removeClass('selectedNavItem');
    $(elem).addClass('selectedNavItem');
}
window.onscroll = function(e){
    
    var len = sectionItems.length;
    var winScroll = window.scrollY;
    for(var i = 0; i < len; i++){
        var elem = $(sectionItems[i]);
        var off = elem.offset().top;
        var diff = off - $('nav #head').height();

        if( ( Math.trunc(diff > 0?diff:0) <= winScroll ) && 
            ( winScroll < Math.trunc(diff + elem.height() + 1)) ){
            selectedNavItem(mapSectionNav.get('#'+sectionItems[i].id));
            break;
        }
    }
}
