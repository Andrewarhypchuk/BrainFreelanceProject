//Section1
$(document).ready(function () {
  var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
  $balls = $('.balls');
  $ballsDiv = $('.balls > div');
  $container = $('.containerBall');
  bspeed = 10000;

  function makeNewPosition() {
    h = $balls.height() / 2.5;
    w = $balls.width() / 2.5;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
  }

  function animateDiv(myclass) {
    makeNewPosition();
    $(myclass).animate({
      top: nh,
      left: nw
    }, bspeed, function () {
      animateDiv(myclass);
    });
  }

  animateDiv('.aBall');
  animateDiv('.bBall');
  animateDiv('.cBall');
  animateDiv('.dBall');
});
//Section2
$(document).ready(function () {
  var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
  $balls = $('.ballsS2');
  $ballsDiv = $('.ballsS2 > div');
  $container = $('.containerBallS2');
  bspeed = 10000;

  function makeNewPosition() {
    h = $balls.height() / 2.5;
    w = $balls.width() / 2.5;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
  }

  function animateDiv(myclass) {
    makeNewPosition();
    $(myclass).animate({
      top: nh,
      left: nw
    }, bspeed, function () {
      animateDiv(myclass);
    });
  }
  animateDiv('.aBallS2');
  animateDiv('.bBallS2');
});
//Section3
$(document).ready(function () {
  var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
  $balls = $('.ballsS3');
  $ballsDiv = $('.ballsS3 > div');
  $container = $('.containerBallS3');
  bspeed = 10000;

  function makeNewPosition() {
    h = $balls.height() / 2.5;
    w = $balls.width() / 2.5;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
  }

  function animateDiv(myclass) {
    makeNewPosition();
    $(myclass).animate({
      top: nh,
      left: nw
    }, bspeed, function () {
      animateDiv(myclass);
    });
  }
  animateDiv('.aBallS3');
  animateDiv('.bBallS3');
});
//Section4
$(document).ready(function () {
  var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
  $balls = $('.ballsS4');
  $ballsDiv = $('.ballsS4 > div');
  $container = $('.containerBallS4');
  bspeed = 10000;
  function makeNewPosition() {
    h = $balls.height() / 2.5;
    w = $balls.width() / 2.5;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
  }

  function animateDiv(myclass) {
    makeNewPosition();
    $(myclass).animate({
      top: nh,
      left: nw
    }, bspeed, function () {
      animateDiv(myclass);
    });
  }
  animateDiv('.aBallS4');
  animateDiv('.bBallS4');
  animateDiv('.cBallS4');
});
//Section5
$(document).ready(function () {
  var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
  $balls = $('.ballsS5');
  $ballsDiv = $('.ballsS5 > div');
  $container = $('.containerBallS5');
  bspeed = 10000;
  function makeNewPosition() {
    h = $balls.height() / 2.5;
    w = $balls.width() / 2.5;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
  }

  function animateDiv(myclass) {
    makeNewPosition();
    $(myclass).animate({
      top: nh,
      left: nw
    }, bspeed, function () {
      animateDiv(myclass);
    });
  }
  animateDiv('.aBallS5');
  animateDiv('.bBallS5');
});

//Section6
$(document).ready(function () {
  var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
  $balls = $('.ballsS6');
  $ballsDiv = $('.ballsS6 > div');
  $container = $('.containerBallS6');
  bspeed = 10000;
  function makeNewPosition() {
    h = $balls.height() / 2.5;
    w = $balls.width() / 2.5;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
  }

  function animateDiv(myclass) {
    makeNewPosition();
    $(myclass).animate({
      top: nh,
      left: nw
    }, bspeed, function () {
      animateDiv(myclass);
    });
  }
  animateDiv('.aBallS6');
  animateDiv('.bBallS6');
});
//Section7
$(document).ready(function () {
  var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
  $balls = $('.ballsS7');
  $ballsDiv = $('.ballsS7 > div');
  $container = $('.containerBallS7');
  bspeed = 10000;
  function makeNewPosition() {
    h = $balls.height() / 2.5;
    w = $balls.width() / 2.5;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
  }

  function animateDiv(myclass) {
    makeNewPosition();
    $(myclass).animate({
      top: nh,
      left: nw
    }, bspeed, function () {
      animateDiv(myclass);
    });
  }
  animateDiv('.aBallS7');
  animateDiv('.bBallS7');
});
//Section8
$(document).ready(function () {
  var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
  $balls = $('.ballsS8');
  $ballsDiv = $('.ballsS8 > div');
  $container = $('.containerBallS8');
  bspeed = 10000;

  function makeNewPosition() {
    h = $balls.height() / 2.5;
    w = $balls.width() / 2.5;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
  }

  function animateDiv(myclass) {
    makeNewPosition();
    $(myclass).animate({
      top: nh,
      left: nw
    }, bspeed, function () {
      animateDiv(myclass);
    });
  }
  animateDiv('.aBallS8');
  animateDiv('.bBallS8');
});
//Section9
$(document).ready(function () {

  var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;

  $balls = $('.ballsS9');
  $ballsDiv = $('.ballsS9 > div');
  $container = $('.containerBallS9');

  bspeed = 10000;

  function makeNewPosition() {
    h = $balls.height() / 2.5;
    w = $balls.width() / 2.5;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
  }

  function animateDiv(myclass) {
    makeNewPosition();
    $(myclass).animate({
      top: nh,
      left: nw
    }, bspeed, function () {
      animateDiv(myclass);
    });
  }
  animateDiv('.aBallS9');
  animateDiv('.bBallS9');
});