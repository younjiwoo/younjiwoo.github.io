
function fixedNav () { // Function definition.  I name a function "fixedNav". 
    var fromPageTop = $(document).scrollTop(); // "scrollTop" is how far away you scrolled down from the top of the page(=document).
    var logoHeight = $('#logo').height(); // Get the height of #logo.
        
    if ((fromPageTop >= logoHeight) && (window.innerWidth >= 600)) { // I set 600px because it should work only when the screen is bigger than mobiles'.
        $('#nav_ul').addClass('fixedNav');
        $('#nav_ul').width($('header').width() - 2); // Give #nav_ul the width of the header. I subtract 2px because of #nav_ul's 1px wide border.
    } else {
        $('#nav_ul').removeClass('fixedNav'); // if you still see the bottom of the logo.
    } 
} // end fixed nav function.
    


$(document).ready(function() {
// "When the document is ready, then do the functions inside the braces."
    $('#nav_ul').smartmenus();
    $('#menuIcon').on('click', function(){ //when you click #munuIcon(=Hamburger icon), do this function.
        $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
        $('#nav_ul').fadeToggle(300);
    });
    $(document).on('scroll', fixedNav); //when you scroll, fixedNav function defined above starts working.
    
                                              
    $('#pi_tab').on('mouseenter', function(){ //when hovered over, the little arrow next to Property Info tab disappears. 
        $(this).find("span.sub-arrow").addClass("hideArrow");
    });
    $('#pi_tab').on('mouseleave', function(){//when cursor leaves, the little arrow next to Property Info tab appears. 
        $("span.sub-arrow").removeClass("hideArrow");
    });
    
    $('#resources_tab').on('mouseenter', function(){
        $(this).find("span.sub-arrow").addClass("hideArrow");
    });
    $('#resources_tab').on('mouseleave', function(){
        $("span.sub-arrow").removeClass("hideArrow");
    });
}); // end doc ready function.
