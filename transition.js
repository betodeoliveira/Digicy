gsap.registerPlugin(DrawSVGPlugin);
let tl2 = gsap.timeline();
tl2.fromTo("#path", {drawSVG: "0%"}, {drawSVG: "100%", duration: 4});
tl2.fromTo(".transition_logo-white", {opacity: 1}, {opacity: 0, duration: 0.5});
tl2.fromTo(".transition_logo-black", {opacity: 0}, {opacity: 1, duration: 0.5}, "<");




