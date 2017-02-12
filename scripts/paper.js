//Paper.js
//Circle
/*-----------------------------------------------------------------------------------------------
var path;
for(var i = 0; i < 500; i++) {
	path = new Path.Circle(new Point(randomX(), randomY()), randomR()).fillColor = randomColor();
}
function randomX() {
	var x = Math.floor(Math.random() * 1000);
	return Number(x);
}
function randomY() {
	var y = Math.floor(Math.random() * 1000);
	return Number(y);
}
function randomR() {
	var r = Math.floor(Math.random() * 10);
	return Number(r);
}
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
var symbol = new Symbol(path);
/*
for(var x = 0; x < 1000; x += 100) {
	for(var y = 0; y < 1000; y += 100) {
		new Path.Circle(new Point(x, y), 10).fillColor = '#f4f442';
	}
}
 X | Y 
   0   0
   0   100
   0   200
   0   300
   ......
-----------------------------------------------------------------------------------------------*/
var circles = [];
//HowlerJS
/*var sound1 = new Howl({
  src: ['sounds/bubbles.mp3']
});
var sound2 = new Howl({
  src: ['sounds/clay.mp3']
});*/
var keyData = {
	a: {
		color: '#f44242',
		sound: new Howl({src: ['sounds/bubbles.mp3']})
	},
	s: {
		color: '#f4df42',
		sound: new Howl({src: ['sounds/clay.mp3']})
	},
	d: {
		color: '#86f442',
		sound: new Howl({src: ['sounds/confetti.mp3']})
	},
	f: {
		color: '#42f489',
		sound: new Howl({src: ['sounds/corona.mp3']})
	},
	g: {
		color: '#42e2f4',
		sound: new Howl({src: ['sounds/dotted-spiral.mp3']})
	},
	h: {
		color: '#4262f4',
		sound: new Howl({src: ['sounds/flash-1.mp3']})
	},
	j: {
		color: '#8342f4',
		sound: new Howl({src: ['sounds/glimmer.mp3']})
	},
	k: {
		color: '#d942f4',
		sound: new Howl({src: ['sounds/moon.mp3']})
	},
	l: {
		color: '#f4428c',
		sound: new Howl({src: ['sounds/pinwheel.mp3']})
	},
	q: {
		color: '#f44242',
		sound: new Howl({src: ['sounds/flash-2.mp3']})
	},
	w: {
		color: '#f4df42',
		sound: new Howl({src: ['sounds/piston-1.mp3']})
	},
	e: {
		color: '#86f442',
		sound: new Howl({src: ['sounds/prism-1.mp3']})
	},
	r: {
		color: '#42f489',
		sound: new Howl({src: ['sounds/splits.mp3']})
	},
	t: {
		color: '#42e2f4',
		sound: new Howl({src: ['sounds/timer.mp3']})
	},
	y: {
		color: '#4262f4',
		sound: new Howl({src: ['sounds/flash-3.mp3']})
	},
	u: {
		color: '#8342f4',
		sound: new Howl({src: ['sounds/piston-2.mp3']})
	},
	i: {
		color: '#d942f4',
		sound: new Howl({src: ['sounds/prism-2.mp3']})
	},
	o: {
		color: '#f4428c',
		sound: new Howl({src: ['sounds/squiggle.mp3']})
	},
	p: {
		color: '#f4428c',
		sound: new Howl({src: ['sounds/zig-zag.mp3']})
	},
	z: {
		color: '#f44242',
		sound: new Howl({src: ['sounds/flash-3.mp3']})
	},
	x: {
		color: '#f4df42',
		sound: new Howl({src: ['sounds/piston-3.mp3']})
	},
	c: {
		color: '#86f442',
		sound: new Howl({src: ['sounds/prism-3.mp3']})
	},
	v: {
		color: '#42f489',
		sound: new Howl({src: ['sounds/suspension.mp3']})
	},
	b: {
		color: '#42e2f4',
		sound: new Howl({src: ['sounds/ufo.mp3']})
	},
	n: {
		color: '#4262f4',
		sound: new Howl({src: ['sounds/veil.mp3']})
	},
	m: {
		color: '#8342f4',
		sound: new Howl({src: ['sounds/wipe.mp3']})
	}
}
//PaperJS
function onKeyDown(event){
	if(keyData[event.key]) {
		var max = new Point(view.size.width, view.size.height);
	    var ran = Point.random();
	    var position = max * ran;
	    var newDot = new Path.Circle(position, 100);
	    newDot.fillColor = keyData[event.key].color;
	    keyData[event.key].sound.play();
	    circles.push(newDot);
	}
	
    /*if(event.key === "a") {
		sound1.play();
		newDot.fillColor = "#f1f442";
	} else if(event.key === "s") {
		sound2.play();
		newDot.fillColor = '#f4429b';
	} else {
		newDot.fillColor = '#5042f4';
	}
	*/
}
function onFrame(event) {
	for(var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(.9);
		if(circles[i].area < 1) {
			circles[i].remove();
			circles.splice(i, 1);
		}
	}
}