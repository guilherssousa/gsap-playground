import "./style.scss";
import { gsap, Power3 } from "gsap";

gsap.to("#app", { css: { visibility: "visible" }, duration: 0 });

gsap.fromTo(
  ".menu .menu__item .item__text",
  {
    y: 100,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1.5,
    ease: Power3.easeOut,
  }
);

gsap.fromTo(
  ".introduction .introduction__name h1",
  {
    y: 100,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1.5,
    ease: Power3.easeOut,
  }
);

gsap.fromTo(
  ".introduction .introduction__description span span",
  {
    y: 100,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1.5,
    ease: Power3.easeOut,
  }
);

gsap.from(".introduction .introduction__profile-pic", {
  opacity: 0,
  duration: 1,
  ease: Power3.easeOut,
  scale: 1.1,
});
