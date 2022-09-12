let transition = $(".transition");
let introDurationMS = 0;
let exitDurationMS = 1200;
let excludedClass = "no-transition";
  
// On Page Load
if (transition.length > 0) {
	tlTransition.play();
	$("body").addClass("no-scroll-transition");
	setTimeout(() => {$("body").removeClass("no-scroll-transition");}, introDurationMS);
}
// On Link Click
$("a").on("click", function (e) {
  if ($(this).prop("hostname") == window.location.host && $(this).attr("href").indexOf("#") === -1 &&
      !$(this).hasClass(excludedClass) && $(this).attr("target") !== "_blank" && transition.length > 0) {
    e.preventDefault();
		$("body").addClass("no-scroll-transition");
    let transitionURL = $(this).attr("href");
    tlTransition.reverse(6);
    setTimeout(function () {window.location = transitionURL;}, exitDurationMS);
  }
});
// On Back Button Tap
window.onpageshow = function(event) {if (event.persisted) {window.location.reload()}};
// Hide Transition on Window Width Resize
setTimeout(() => {$(window).on("resize", function () {
setTimeout(() => {$(".transition").css("display", "none");}, 50);});
}, introDurationMS);