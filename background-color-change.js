gsap.registerPlugin(ScrollTrigger);
$(".background-trigger").each(function (index) {
    ScrollTrigger.create({
        trigger: $(this),
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            console.log("change color to: " + $(this).css("background-color"));
            $(".page-background").css("background-color", $(this).css("background-color"));
            if($(this).children().length > 0) {
                $(".set-dark-mode").click();
            }
        },
        onEnterBack: () => {
            console.log("change color to: " + $(this).css("color"));
            $(".page-background").css("background-color", $(this).css("color"));
            if($(this).children().length > 0) {
                $(".set-light-mode").click();
            }
        }
    });
});

// To prevent triggers at wrong positions recalculate when page is ready
$(document).ready(function () {
    setTimeout(function(){
        ScrollTrigger.refresh();
    }, 2000);
});

// Updates the background triggers position
$("#portfolio-loader-more").click(function(){
    ScrollTrigger.refresh();
});