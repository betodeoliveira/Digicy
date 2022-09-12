gsap.registerPlugin(DrawSVGPlugin);

let tl2 = gsap.timeline();
tl.from("#path", {duration: 1, drawSVG: 0}, 0.1);