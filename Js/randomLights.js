function RandomObjectMover(obj, container) {
    this.$object = obj;
    this.$container = container;
    this.container_is_window = container === window;
    this.pixels_per_second = 50;
    this.current_position = { x: 0, y: 0 };
    this.is_running = false;
}
// Set the speed of movement in Pixels per Second.
RandomObjectMover.prototype.setSpeed = function (pxPerSec) {
    this.pixels_per_second = pxPerSec;
}
RandomObjectMover.prototype._getContainerDimensions = function () {
    if (this.$container === window) {
        return { 'height': this.$container.innerHeight, 'width': this.$container.innerWidth };
    } else {
        return { 'height': this.$container.clientHeight, 'width': this.$container.clientWidth };
    }
}
RandomObjectMover.prototype._generateNewPosition = function () {
    // Get container dimensions minus div size
    var containerSize = this._getContainerDimensions();
    var availableHeight = containerSize.height - this.$object.clientHeight;
    var availableWidth = containerSize.width - this.$object.clientHeight;
    // Pick a random place in the space
    var y = Math.floor(Math.random() * availableHeight);
    var x = Math.floor(Math.random() * availableWidth);
    return { x: x, y: y };
}
RandomObjectMover.prototype._calcDelta = function (a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    return dist;
}
RandomObjectMover.prototype._moveOnce = function () {
    // Pick a new spot on the page
    var next = this._generateNewPosition();
    // How far do we have to move?
    var delta = this._calcDelta(this.current_position, next);
    // Speed of this transition, rounded to 2DP
    var speed = Math.round((delta / this.pixels_per_second) * 100) / 100;
    //console.log(this.current_position, next, delta, speed);
    this.$object.style.transition = 'transform ' + speed + 's linear';
    this.$object.style.transform = 'translate3d(' + next.x + 'px, ' + next.y + 'px, 0)';
    // Save this new position ready for the next call.
    this.current_position = next;
};
RandomObjectMover.prototype.start = function () {
    if (this.is_running) {
        return;
    }
    // Make sure our object has the right css set
    this.$object.willChange = 'transform';
    this.$object.pointerEvents = 'auto';
    this.boundEvent = this._moveOnce.bind(this)
    // Bind callback to keep things moving
    this.$object.addEventListener('transitionend', this.boundEvent);
    // Start it moving
    this._moveOnce();

    this.is_running = true;
}
RandomObjectMover.prototype.stop = function () {
    if (!this.is_running) {
        return;
    }
    this.$object.removeEventListener('transitionend', this.boundEvent);
    this.is_running = false;
}
let wrapper = document.querySelector('.content__wrapper')
// Init it
var ball1 = new RandomObjectMover(document.getElementById('ball_1'), window);
var ball2 = new RandomObjectMover(document.getElementById('ball_2'), window);
var ball3 = new RandomObjectMover(document.getElementById('ball_3'), window);
var ball4 = new RandomObjectMover(document.getElementById('ball_4'), window);
var ball5 = new RandomObjectMover(document.getElementById('ball_5'), window);
var ball6 = new RandomObjectMover(document.getElementById('ball_6'), window);
var ball7 = new RandomObjectMover(document.getElementById('ball_7'), window);
var ball8 = new RandomObjectMover(document.getElementById('ball_8'), window);
var ball9 = new RandomObjectMover(document.getElementById('ball_9'), window);
var ball10 = new RandomObjectMover(document.getElementById('ball_10'), window);
var ball11 = new RandomObjectMover(document.getElementById('ball_11'), window);
var ball12 = new RandomObjectMover(document.getElementById('ball_12'), window);
var ball13 = new RandomObjectMover(document.getElementById('ball_13'), window);
var ball14 = new RandomObjectMover(document.getElementById('ball_14'), window);
var ball15 = new RandomObjectMover(document.getElementById('ball_15'), window);
var ball16 = new RandomObjectMover(document.getElementById('ball_16'), window);
var ball17 = new RandomObjectMover(document.getElementById('ball_17'), window);
var ball18 = new RandomObjectMover(document.getElementById('ball_18'), window);
var ball19 = new RandomObjectMover(document.getElementById('ball_19'), window);
var ball20 = new RandomObjectMover(document.getElementById('ball_20'), window);
var ball21 = new RandomObjectMover(document.getElementById('ball_21'), window);
var ball22 = new RandomObjectMover(document.getElementById('ball_22'), window);
// Start it off
ball1.start();
ball2.start();
ball3.start();
ball4.start();
ball5.start();
ball6.start();
ball7.start();
ball8.start();
ball9.start();
ball10.start();
ball11.start();
ball12.start();
ball13.start();
ball14.start();
ball15.start();
ball16.start();
ball17.start();
ball18.start();
ball19.start();
ball20.start();
ball21.start();
ball22.start();