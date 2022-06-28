function Rect() {
  var u;
  var i;

  this.x = x;
  this.y = y;

  this.show = function(u, i) {

    let c = color(202, 0, 42);
    fill(c);
    noStroke();
    rect(u, i, 80, 80);

  }
}
