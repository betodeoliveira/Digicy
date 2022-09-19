let childrenCount = 0;

function SetPortfolioItemAnimation() {
    $(".portfolio_item.is-configure").each(function(index){
        let tlPortfolioItem = gsap.timeline({paused: true});
        tlPortfolioItem.set($(this).find(".portfolio_wrapper"), {
            display: "block"
        });
        tlPortfolioItem.from($(this).find(".portfolio_text-wrapper"), {
            y: "4rem",
            opacity: 0,
            ease: "back.out",
            duration: 0.3
        });
        tlPortfolioItem.from($(this).find(".portfolio_bg-color"), {
            opacity: 0,
            duration: 0.3
        }, 0);
        tlPortfolioItem.from($(this).find(".text-align-center"), {
            y: "4rem",
            opacity: 0,
            ease: "back.out",
            duration: 0.3
        }, 0.15);
    
        $(this).on("mouseenter", function(){
            tlPortfolioItem.restart();
        })
        $(this).on("mouseleave", function(){
            tlPortfolioItem.reverse();
        })
    });
    $(".portfolio_item").removeClass("is-configure");
}

function ListenForNewPortfolioItems() {
    if($(".portfolio_list").children().length == childrenCount) {
        setTimeout(() => {  
            ListenForNewPortfolioItems()
        }, 200);
    }
    else {
        SetPortfolioItemAnimation();
    }
}

$(document).ready(function () {
    SetPortfolioItemAnimation();
});

$("#portfolio-loader-more").on("click", function(){
    childrenCount = $(".portfolio_list").children().length;
    ListenForNewPortfolioItems();
})