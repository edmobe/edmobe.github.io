/* GENERAL */
const TOGGLE_WIDTH = 1000;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const controller = new ScrollMagic.Controller();

/* HOME */
const homeTween = new TimelineLite();

homeTween.add(
  TweenLite.to(".name", 1, {
    "font-size": "0px",
  })
);

const aboutImagePath = {
  values: [{ x: 0, y: 0 }],
};

const homeScene = new ScrollMagic.Scene({
  triggerElement: ".home",
  duration: 500,
  triggerHook: 0,
})
  .setTween(homeTween)
  .setPin(".home")
  .addTo(controller); //.addIndicators();

/* ABOUT */
const aboutTween = new TimelineLite();
aboutTween.add(
  TweenLite.to(".person-image", 1, {
    bezier: aboutImagePath,
    ease: Power1.easeInOut,
  })
);

const aboutScene = new ScrollMagic.Scene({
  triggerElement: ".about",
  duration: 420,
  triggerHook: 0.5,
})
  .setTween(aboutTween)
  .addTo(controller); //.addIndicators();

/* WORK */
VanillaTilt.init(document.querySelectorAll(".card-box"), {
  max: 15,
  speed: 100,
});

const workTween = new TimelineLite();
workTween.add(
  TweenLite.to(".card-container .card-box .card-name", 1, {
    top: "20px",
    opacity: "1",
  })
);
workTween.add(
    TweenLite.to(".card-container .card-box .card-read", 1, {
        bottom: "30px",
        opacity: "1"
    })
)


const workScene = new ScrollMagic.Scene({
  triggerElement: ".work",
  duration: 500,
  triggerHook: 0.5,
})
  .setTween(workTween)
  .addTo(controller);

