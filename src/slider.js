function Slider(x, y) {
  this.x = x;
  this.y = y;
  this.name = name;

  var p;
  var n;

    this.display = function() {

      n = createSlider(0, 1, 0.5, 0.01);
      n.position(x, y);
      n.style('width', '80px');

      p = createP(this.name);
      p.style('font-size', '25px');
      p.style('color', '#ff0000');
      p.position(x + 20, y + 5);
    }

    this.val  = function() {
     return n.value()
    }


}
