function block(x, y){
	this.x = x;
	this.y = y;

	this.show = function(){;
		fill(random(255), random(255), random(255));
		rect(this.x, this.y, 80, 30)
	}
}