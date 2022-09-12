gsap.registerPlugin(DrawSVGPlugin);

let tl2 = gsap.timeline();
tl2.fromTo("#path", {drawSVG: 0}, {durantion: 1, drawSVG: 1});