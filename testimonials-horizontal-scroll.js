// © Code by T.RICKS, https://www.timothyricks.com/
// Copyright 2021, T.RICKS, All rights reserved.
// You have the license to use this code in your projects but not to redistribute it to others
gsap.registerPlugin(ScrollTrigger);
let horizontalItem = $(".testimonial_item");
let horizontalSection = $(".section_home-testimonials");
let moveDistance;
function calculateScroll() {
  // Desktop
  let itemsInView = 2.5;
  let scrollSpeed = 0.8;

  if (window.matchMedia("(max-width: 479px)").matches) {
    // Mobile Portrait
    itemsInView = 1;
    scrollSpeed = 1.2;
  } else if (window.matchMedia("(max-width: 767px)").matches) {
    // Mobile Landscape
    itemsInView = 1;
    scrollSpeed = 1.2;
  } else if (window.matchMedia("(max-width: 991px)").matches) {
    // Tablet
    itemsInView = 2;
    scrollSpeed = 1.2;
  }
  let moveAmount = horizontalItem.length - itemsInView;
  let minHeight =
    scrollSpeed * horizontalItem.outerWidth() * horizontalItem.length;
  if (moveAmount <= 0) {
    moveAmount = 0;
    minHeight = 0;
    // horizontalSection.css('height', '100vh');
  } else {
    horizontalSection.css("height", "200vh");
  }
  moveDistance = horizontalItem.outerWidth() * moveAmount;
  horizontalSection.css("min-height", minHeight + "px");
}
calculateScroll();
window.onresize = function () {
  calculateScroll();
};

let tlTestimonials = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial_trigger",
    // trigger element - viewport
    start: "top top",
    end: "bottom top",
    invalidateOnRefresh: true,
    scrub: 1
  }
});
tlTestimonials.to(".section_home-testimonials .testimonial_list", {
  x: () => -moveDistance,
  duration: 1
});