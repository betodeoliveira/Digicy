gsap.registerPlugin(DrawSVGPlugin);
let tlTransition = gsap.timeline();
tlTransition.pause();
tlTransition.fromTo("#path", {drawSVG: "0%"}, {drawSVG: "100%", duration: 10, delay: 1}, 0.1)
.fromTo(".transition_logo-white", {opacity: 1}, {opacity: 0, duration: 0.5}, "<1")
.fromTo(".transition_logo-black", {opacity: 0}, {opacity: 1, duration: 0.5}, "<")
.fromTo(".transition_content", {opacity: 1}, {opacity: 0, duration: 0.5}, "<0.5")
.set(".transition", {display: "none"}, "<0.5");




