gsap.registerPlugin(DrawSVGPlugin);
let tlTransitionShow = gsap.timeline();
tlTransitionShow.pause();
tlTransitionShow.set(".transition", {display: "block"})
.fromTo(".transition_content", {opacity: 0}, {opacity: 1, duration: 0.5})
.fromTo("#path", {drawSVG: "0%"}, {drawSVG: "20%", duration: 1.5}, "<")
.fromTo(".transition_logo-white", {opacity: 1}, {opacity: 0, duration: 0.5}, "<0.75")
.fromTo(".transition_logo-black", {opacity: 0}, {opacity: 1, duration: 0.5}, "<");

let tlTransitionHide = gsap.timeline();
tlTransitionHide.pause();
tlTransitionHide.fromTo("#path", {drawSVG: "20%"}, {drawSVG: "0%", duration: 1.5})
.fromTo(".transition_logo-white", {opacity: 0}, {opacity: 1, duration: 0.5}, "<0.75")
.fromTo(".transition_logo-black", {opacity: 1}, {opacity: 0, duration: 0.5}, "<")
.fromTo(".transition_content", {opacity: 1}, {opacity: 0, duration: 0.5}, "<0.5")
.set(".transition", {display: "none"}, "<0.5");