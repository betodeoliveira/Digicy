// Disable the page scroll
$(".is-mobile-menu, .set-contact-service-empty, .contact-service-selector").on("click", function (e) {
    $("body").addClass("no-scroll-transition");
});

$(".menu_close-btn, .contact_background, .contact_close-btn").on("click", function (e) {
    $("body").removeClass("no-scroll-transition");
});