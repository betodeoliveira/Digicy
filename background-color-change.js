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