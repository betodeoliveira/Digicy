$('.service_toggle-digital').on("click", function(){
    $('.service_toggle-website').show();
    $('.service_toggle-digital').hide();
    $('.service_toggle-website').removeclass("text-color-steel-blue");
    $('.service_toggle-digital').addclass("text-color-steel-blue");
    $('.services_toggle-track').css("width", "3.5rem");
    $('.serive_slider-right-arrow').click();
});

$('.service_toggle-website').on("click", function(){
    $('.service_toggle-website').hide();
    $('.service_toggle-digital').show();
    $('.service_toggle-website').addclass("text-color-steel-blue");
    $('.service_toggle-digital').removeclass("text-color-steel-blue");
    $('.services_toggle-track').css("width", "1.5rem");
    $('.serive_slider-left-arrow').click();
});