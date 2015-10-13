function init(){
	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext('2d');
	var img = new Image();

	img.onload = function(){
		ctx.drawImage(img, 0, 0);
		var animals = new Image();
		animals.onload = function() {
			ctx.drawImage(animals, 40, 110, 40, 40, 80, 50, 50, 50);
			ctx.drawImage(animals, 130, 110, 40, 40, 150, 20, 50, 50);
		};
		animals.src = 'duckhunt_various_sheet.png';
	};
	img.src = 'duckhunt-background.gif';
};