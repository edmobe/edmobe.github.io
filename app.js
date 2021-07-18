const tween = new TimelineLite();

tween.add(
    TweenLite.to(".name", 1, {
      'font-size': "0em",
    })
  );

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".home",
  duration: 500,
  triggerHook: 0
})
  .setTween(tween)
  .setPin('.home')
  .addIndicators()
  .addTo(controller);
