function loading() {
  var tl = gsap.timeline();

  tl.to(".loading_animation_yellow_one", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });
  tl.from(
    ".loading_animation_yellow_two",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    ".loading_animation h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to(".loading_animation", {
    display: "none",
  });
  tl.to(".loading_animation", {
    opacity: 0,
  });
}
loading();
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
document.addEventListener("DOMContentLoaded", () => {
  const elems = document.querySelectorAll(".elem");

  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      const imgURL = elem.getAttribute("data-img");
      document.body.style.backgroundImage = `url(${imgURL})`;
      console.log("Mouse entered element:", elem);
      console.log("Background image URL:", imgURL);
    });

    elem.addEventListener("mouseleave", function () {
      document.body.style.backgroundImage = "";
      console.log("Mouse left element:", elem);
    });
  });
});
