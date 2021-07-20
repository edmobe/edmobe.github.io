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

const TOTAL_PROJECTS = 2;

for (let projectCount = 1; projectCount <= TOTAL_PROJECTS; projectCount++) {
  let workTween = new TimelineLite();
  workTween.add(
    TweenLite.to(
      `.project-${projectCount}-top-animation`,
      1,
      {
        top: "20px",
        opacity: "1",
      },
      0
    )
  );
  workTween.add(
    TweenLite.to(
      `.project-${projectCount}-normal-animation`,
      1,
      {
        opacity: "1",
      },
      0
    )
  );
  workTween.add(
    TweenLite.to(
      `.project-${projectCount}-bottom-animation`,
      1,
      {
        bottom: "40px",
        opacity: "1",
      },
      0
    )
  );

  const workScene = new ScrollMagic.Scene({
    triggerElement: `#project-${projectCount}`,
    duration: 350,
    triggerHook: 0.6,
  })
    .setTween(workTween)
    .addTo(controller)
    .addIndicators();
}
