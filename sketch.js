// absolute value is abs()
// I can't really figure this out
// Not even a little

function bres(x1, y1, x2, y2) {
	loadPixels();
	
	var dx = x2 - x1;
	var dy = y2 - y1;
	
	var d = dy - (dx/2);
	var x = x1;
	var y = y1;
	
	while(x < x2) {
		x++;
		if(d<0) {
			d = d + dy;
		} else {
			d += (dy - dx);
			y++;
		}
		pixels[4 * (x + (y * 500))] = 255;
	}
	
	updatePixels();
}

function setup() {
	createCanvas(500, 500);
	frameRate(1);
}

function draw() {
	background(0);
	// floor(random(500));
	var x0 = floor(random(500));
	var y0 = floor(random(500));
	var x1 = floor(random(500));
	var y1 = floor(random(500));
	if(x0 > x1) {
		var tmp = x0;
		x0 = x1;
		x1 = tmp;
	}
	if(y0 > y1) {
		var tmp = y0;
		y0 = y1;
		y1 = tmp;
	}
	
	bres(x0, y0, x1, y1);
}