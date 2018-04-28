function block(x, y){
	this.x = x;
	this.y = y;

	this.show = function(){;
		fill(random(17), 0, random(200)); 
		rect(this.x, this.y, 80, 30)
	}
}