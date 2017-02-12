//Paper.js
//Circle
/*-----------------------------------------------------------------------------------------------
for(var i = 0; i < 500; i++) {
	new Path.Circle(new Point(randomX(), randomY()), randomR()).fillColor = randomColor();
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
var sound = new Howl({
  src: ['https://github.com/jonobr1/Neuronal-Synchrony/tree/master/assets/A/bubbles.mp3']
});

//PaperJS
function onKeyDown(event){
	sound.play();
	var max = new Point(view.size.width, view.size.height);
    var ran = Point.random();
    var position = max * ran;
    var newDot = new Path.Circle(position, 100);
    newDot.fillColor = '#FF0000';
	circles.push(newDot);
}
function onFrame(event) {
	for(var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(.9);
	}
}