function View () {
	this.stage = null;
	this.x = 0;
	this.y = 0;
}

View.prototype.type = function () { return "View"; }

View.prototype.setPosition = function (x, y) {
	this.x = x;
	this.y = y;
	if (this.scene != null) {
		this.scene.draw();
	}
}

View.prototype.draw = function (context, time) {
}

View.prototype.remove = function () {
	if (this.stage == null) return;
	this.stage.remove(this);
}
