gsap.registerPlugin(ScrollTrigger);
$(".background-trigger").each(function (index) {
    ScrollTrigger.create({
        trigger: $(this),
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            $(".page-background").css("background-color", $(this).css("background-color"));
            if ($(this).children().length > 0) {
                $(this).children().eq(0).click();
            }
        },
        onEnterBack: () => {
            $(".page-background").css("background-color", $(this).css("background-color"));
            if ($(this).children().length > 0) {
                $(this).children().eq(0).click();
            }
        }
    });
});

// Listen for window resize and if it does refresh the trigger
let resizeTimeoutId;
const resizeObserver = new ResizeObserver(entries => {
    // console.log('Body height changed');
    clearTimeout(resizeTimeoutId);
    resizeTimeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 200);
});

// start observing a DOM node
resizeObserver.observe(document.body);

// Scroll Trigger reset the page scroll position on reload or back so we need to preserv the position
$(window).scroll(function () {
    sessionStorage.scrollTop = $(this).scrollTop();
});

// But we don't want to move the a previous scroll posititon when we click on a link
$("a").on("click", function () {
    // So if we click on a link we prevent the page from scrolling when document is ready
    localStorage.setItem("resetScroll", "true");
});

// When ready check if we have a previous scroll position or if we should ignore it
$(document).ready(function () {
    if (localStorage.getItem("resetScroll") == "true") {
        localStorage.setItem("resetScroll", "false");
    }
    else if (sessionStorage.scrollTop != "undefined") {
        $(window).scrollTop(sessionStorage.scrollTop);
    }
    else{
        // ignore
    }
});