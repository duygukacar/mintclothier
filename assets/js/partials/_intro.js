import randomColor from 'randomcolor';
import 'gsap';

function renderIntro() {
  var logotype = document.querySelector('.js-logotype');
  var logomark = document.querySelector('.js-logomark');
  var logoNodes = logomark.childNodes;
  var tl = new TimelineMax();
  var shapes = [];

  for (var i in logoNodes) {
    var n = logoNodes[i];
    if (n.attributes) {
      shapes.push(n);
    };
  };

  var backgrounds = randomColor({
    count: shapes.length,
    luminosity: 'light'
  });

  for (var i in shapes) {
    var shape = shapes[i];
    shape.setAttribute('fill', backgrounds[i]);
  };

  tl.staggerFromTo(
    shapes, 1, {
      css: { y: -100, opacity: 0 }
    }, {
      delay: 0.24,
      ease: Elastic.easeOut,
      css:{ y: 0, opacity: 1 }
    }, 0.05
  );

  var tween = TweenMax.to(
    logotype, 1, {
      delay: 0.5,
      opacity: 1,
      ease: Elastic.easeOut
    }, 0.05
  );
};

document.addEventListener("DOMContentLoaded", function(event) {
  renderIntro();
});
