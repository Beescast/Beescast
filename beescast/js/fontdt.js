// JavaScript Document


var text = document.getElementById('text'),
	body = document.body,
	steps = 7;
function threedee (e) {
	var x = Math.round(steps / (window.innerWidth / 2) * (window.innerWidth / 2 - e.clientX)),
		y = Math.round(steps / (window.innerHeight / 2) * (window.innerHeight / 2 - e.clientY)),
		shadow = '',
		color = 190,
		radius = 3,
		i;
	
	for (i=0; i<steps; i++) {
		tx = Math.round(x / steps * i);
		ty = Math.round(y / steps * i);
		if (tx || ty) {
			color -= 3 * i;
			shadow += tx + 'px ' + ty + 'px 0 rgb(' + color + ', ' + color + ', ' + color + '), ';
		}
	}

	shadow += x + 'px ' + y + 'px 1px rgba(0,0,0,.2), ' + x*2 + 'px ' + y*2 + 'px 6px rgba(0,0,0,.3)';
	
	text.style.textShadow = shadow;
	text.style.webkitTransform = 'translateZ(0) rotateX(' + y*1.5 + 'deg) rotateY(' + -x*1.5 + 'deg)';
	text.style.MozTransform = 'translateZ(0) rotateX(' + y*1.5 + 'deg) rotateY(' + -x*1.5 + 'deg)';
}

document.addEventListener('mousemove', threedee, false);
