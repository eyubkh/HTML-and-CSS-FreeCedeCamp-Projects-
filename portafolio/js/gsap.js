gsap.registerPlugin(ScrollTrigger);

let conteiner = gsap.utils.toArray('.panel');

gsap.to(conteiner, {
    xPercent: -100 * (conteiner.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: ".body",
      pin: true,
      scrub: 1,
      // snap: .1 ,
      // base vertical scrolling on how wide the body is so it feels more natural.
      end: () => "+=" + document.querySelector(".body").offsetWidth
    }
  });

