document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const homeTween = new TimelineLite();

homeTween.add(
  TweenLite.to(".name", 1, {
    "font-size": "0px",
  })
);

const aboutImagePath = {
    values: [
        {x: 0, y: 0}
    ]
}

/*
const aboutTween = new TimelineLite();
aboutTween.add(
    TweenLite.to('.person-image', 1, {
        bezier: aboutImagePath,
        ease: Power1.easeInOut,
    })
);
*/


const controller = new ScrollMagic.Controller();

const homeScene = new ScrollMagic.Scene({
  triggerElement: ".home",
  duration: 500,
  triggerHook: 0,
})
  .setTween(homeTween)
  .setPin(".home")
  .addTo(controller); //.addIndicators()

/*
const aboutScene = new ScrollMagic.Scene({
  triggerElement: ".about",
  duration: 500,
  triggerHook: 0.5,
})
  .setTween(aboutTween)
  .setPin(".person-image")
  .addTo(controller)
  .addIndicators();
*/
