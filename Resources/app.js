// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#ffe');

var window = Ti.UI.createWindow();

var wheelImage = Ti.UI.createImageView({
	image:'wheel.png'
});
window.add(wheelImage);

var angleLabel = Ti.UI.createLabel({
	text:'0',
	width:'auto',
	height:'auto',
	color:'#aaa',
	font:{ fontSize:48 }
});
window.add(angleLabel);

var initialAngle = 0.0;
var currentAngle = 0.0;

wheelImage.addEventListener('touchstart', function(e){
	initialAngle = Math.atan2(e.x - this.width/2.0, -(e.y - this.height/2.0));
});

wheelImage.addEventListener('touchmove', function(e){
	var movedAngle = Math.atan2(e.x - this.width/2.0, -(e.y - this.height/2.0));
	var deltaAngle = movedAngle - initialAngle;
	currentAngle += deltaAngle;
	if (currentAngle > 2.0 * Math.PI){
		currentAngle -= 2.0 * Math.PI; 
	 }
  	if (currentAngle < 0.0){
  		currentAngle += 2.0 * Math.PI;
  	}
  	wheelImage.transform = Ti.UI.create2DMatrix().rotate(currentAngle / Math.PI * 180.0);
  	angleLabel.text = parseInt(currentAngle / Math.PI * 180.0);
});

window.open();
