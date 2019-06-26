$(document).ready(function(){
    $(".hamburgerButton").click(function(){
        $(".menu a").fadeToggle(1000);
});
});

$('a[href*=#scroll]').bind("click", function(e){ 
    var anchor = $(this); 
    $('html, body').stop().animate({ 
    scrollTop: $(anchor.attr('href')).offset().top-60 
    }, 1200); 
    e.preventDefault(); 
    }); 