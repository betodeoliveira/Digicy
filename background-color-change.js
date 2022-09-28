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
                $(".light-mode-switcher").click();
            }
        }
    });
});


const resizeObserver = new ResizeObserver(entries => 
    console.log('Body height changed:', entries[0].target.clientHeight)
  )

// When the page is done we need to wait the trasition animation to end before placing the triggers on the page
$(document).ready(function () {
    setTimeout(function(){
        ScrollTrigger.refresh();
    }, 2500);
});

// Updates the background triggers position
$("#portfolio-loader-more").on( "click", function() {
    setTimeout(function(){
        ScrollTrigger.refresh();
    }, 1000);
});

$(".services_select-service, .button-circle").on( "click", function() {
    setTimeout(function(){
        ScrollTrigger.refresh();
    }, 600);
});