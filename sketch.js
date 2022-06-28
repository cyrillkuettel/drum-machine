	var sliders = [];
	var names = ["kick", "clap", "hat", "snare"];
	var posx = 260;
	var posy = -40;
	var song;
	var clap;
	var kick;
	var snare;
	var hat;
	var button;
	var arr = [];

	var max_r = 10; //maximum rectanges (beat)
	var rectangles = [];
	var x = 30;
	const y = (700 / 2);
	var button2;

	//ideas what to do:
	//add pitch changer
	//can drag each item with mouse
	//advanced: can change the length how long a note is played

	function preload() {
	  //fundamental sounds classic KICK-HAT-SNARE-HAT-kick
	  //														^ write like this
	  clap = loadSound("clap.wav");
	  kick = loadSound("kick.wav");
	  snare = loadSound("snare.wav");
	  hat = loadSound("hat.wav");
	}

	function setup() {

	  createCanvas(windowWidth, windowHeight);


	  background(0);
	  button2 = createButton("test");
	  button2.mouseClicked(button_event)
	  button2.position(550, 550);

	  slider = createSlider(3, max_r, 4, 0.1); //min max [value] [step]
	  slider.position(500, 10);
	  slider.style('width', '150px');

	  for (var o = 0; o < max_r; o++) {
	    let b = new Rect(x, y);
	    rectangles.push(b)
	  }
	  for (var i = 20; i <= 80; i += 20) {
	    sliders.push(new Slider(posx, posy + i * 3));
	  }
	  for (var j = 0; j < 4; j++) {
	    sliders[j].name = names[j];
	    sliders[j].display();
	  }


	  //setup stuff ^

	  button = createButton('toggle');
	  button.position(300, 300);
	  button.mousePressed(toggleSong);

	}

	function button_event() {

	}

	function toggleSong() {
	  if (kick.isPlaying()) {
	    kick.stop();
	  } else {
	    //loop([startTime], [rate (pitch)], [amp (volume)], [cueLoopStart], [duration])
	    let counter = 0;
	    const intervalId = setInterval(() => {
	      kick.play();
	      counter += 1;
	      if (counter === 5) {
	        kick.play();
	        clearInterval(intervalId);
	      }
	    }, 1000) //every second for 4 seconds
	  }


	}

	function draw() {
	  var abstand;
	  background(0);
	  abstand = slider.value();
	  for (var i = 0; i < max_r; i++) {
	    rectangles[i].show(x * i * abstand, y)
	  }


	}
