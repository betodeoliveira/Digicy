gsap.registerPlugin(ScrollTrigger);
$(".background-trigger").each(function (index) {
    ScrollTrigger.create({
        trigger: $(this),
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            $(".page-background").css("background-color", $(this).css("background-color"));
            if($(this).children().length > 0) {
                $(".dark-mode-switcher").click();
            }
        },
        onEnterBack: () => {
            $(".page-background").css("background-color", $(this).css("background-color"));
            if($(this).children().length > 0) {
                $(".dark-mode-switcher").click();
            }
        }
    });
});

// To prevent triggers at wrong positions recalculate when page is ready
$(document).ready(function () {
    setTimeout(function(){
        ScrollTrigger.refresh();
    }, 1000);
});

// Updates the background triggers position
$("#portfolio-loader-more").on( "click", function() {
    ScrollTrigger.disable();
    setTimeout(function(){
        ScrollTrigger.enable();
        ScrollTrigger.refresh();
    }, 1000);
});

$(".services_select-service, .button-circle").on( "click", function() {
    ScrollTrigger.disable();
    setTimeout(function(){
        ScrollTrigger.enable();
        ScrollTrigger.refresh();
    }, 600);
});