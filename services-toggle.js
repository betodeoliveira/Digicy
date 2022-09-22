// Set initial digital opacity
$('.services_toggle-title.text-align-left').css("opacity", "0.5");

// Set what happens when click on the current toggle
$('.service_toggle-digital').on("click", function(){
    $('.service_toggle-website').show();
    $('.service_toggle-digital').hide();
    $('.services_toggle-title.text-align-right').css("opacity", "0.5");
    $('.services_toggle-title.text-align-left').css("opacity", "1");
    $('.services_toggle-track').css("width", "3.5rem");
    $('.serive_slider-right-arrow').click();
});

// Set what happens when click on the current toggle
$('.service_toggle-website').on("click", function(){
    $('.service_toggle-website').hide();
    $('.service_toggle-digital').show();
    $('.services_toggle-title.text-align-right').css("opacity", "1");
    $('.services_toggle-title.text-align-left').css("opacity", "0.5");
    $('.services_toggle-track').css("width", "1.5rem");
    $('.serive_slider-left-arrow').click();
});