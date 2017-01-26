function init() {
  var canvas = document.getElementById('main_canvas');
  var ctx = canvas.getContext('2d');
  var img = new Image(); 
  img.src = '../img/Syrian-Hamster-Breed.jpg';
  var raf;

  var mice = {
	  x: 0,
	  y: 0,
	  vx: 5,
	  vy: 2,
	  draw: function() {
	    ctx.beginPath();
	    ctx.drawImage(img, this.x, this.y);
	    ctx.closePath();
	  }
	};

  function draw() {
	  ctx.clearRect(0,0, canvas.width, canvas.height);
	  mice.draw();
	  if (mice.y + mice.vy + 333 > canvas.height || mice.y + mice.vy - 333< 0) {
	    mice.vy = -mice.vy;
	  }
	  if (mice.x + mice.vx + 500 > canvas.width || mice.x + mice.vx - 500 < 0) {
	    mice.vx = -mice.vx;
      }
	  mice.x += mice.vx;
	  mice.y += mice.vy;
	  raf = window.requestAnimationFrame(draw);
	}

  canvas.addEventListener('mouseover', function(e) {
	  raf = window.requestAnimationFrame(draw);
	});

	canvas.addEventListener('mouseout', function(e) {
	  window.cancelAnimationFrame(raf);
	});

	mice.draw();

  // if(canvas.getContext) {
  // 	var ctx = canvas.getContext('2d');

  // 	ctx.fillStyle = 'rgba(200,0,0)';
  // 	ctx.fillRect (10, 10, 50, 50);

  // 	ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  // 	ctx.fillRect (30, 30, 50, 50);

  // 	img.onload = function() {
	 //    ctx.drawImage(img, 0, 0);
	 //  };

  // }
}