function loadImage(id) {
	var image = new Image();
	image.src = 'img/canvas.jpg';
	image.onload = (function () {
		var canvas = document.getElementById(id);
		var ctx = canvas.getContext('2d');
		canvas.width = image.width;
		canvas.height = image.height;
		ctx.drawImage(image, 0, 0);

		ctx.fillStyle = '#202f55';
		ctx.textBaseline = 'top/left';
		ctx.textAlign = 'center';

		ctx.font = '60px serif';
		ctx.fillText("アビスパ福岡サポーター", 570, 370);

		ctx.font = '96px serif';
		ctx.fillText("20歳", 1315, 295);
		ctx.fillText("20年", 1810, 295);

		ctx.font = '66px serif';
		ctx.fillText("○○○○選手", 570, 620);
		ctx.fillText("○○○○の影響", 1600, 590);
		ctx.fillText("アウェイゴール裏", 570, 850);
		ctx.fillText("国立で博多へ帰ろうを熱唱！", 1600, 877);

		ctx.font = '50px serif';
		ctx.fillText("○○○○○○○○○○", 592, 1090);
		ctx.fillText("○○○○○○○○○○", 592, 1160);
		ctx.fillText("○○○○○○○○○○", 592, 1230);
		ctx.fillText("○○○○○○○○○○", 592, 1300);
		ctx.fillText("○○○○○○○○○○", 592, 1370);

		ctx.font = '50px serif';
		ctx.fillText("○○○○○○○○○○", 1600, 1120);
		ctx.fillText("○○○○○○○○○○", 1600, 1190);
		ctx.fillText("○○○○○○○○○○", 1600, 1260);
		ctx.fillText("○○○○○○○○○○", 1600, 1330);

		var newImage = canvas.toDataURL('image/jpeg', 0.85);
		document.getElementById("image").src = newImage;
	});
}

function drawText(canvas_id) {
	var name = document.getElementById('name');
	var age = document.getElementById('age');
	var ageCharTmp = document.getElementById('ageChar');
	var history = document.getElementById('history');
	var historyCharTmp = document.getElementById('historyChar');
	var player = document.getElementById('player');
	var why = document.getElementById('why');
	var live = document.getElementById('live');
	var todo = document.getElementById('todo');
	var activity1 = document.getElementById('activity1');
	var activity2 = document.getElementById('activity2');
	var activity3 = document.getElementById('activity3');
	var activity4 = document.getElementById('activity4');
	var activity5 = document.getElementById('activity5');
	var free1 = document.getElementById('free1');
	var free2 = document.getElementById('free2');
	var free3 = document.getElementById('free3');
	var free4 = document.getElementById('free4');

	var image = new Image();
	image.src = 'img/canvas.jpg';
	image.onload = (function () {
		var canvas = document.getElementById(canvas_id);
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		canvas.width = image.width;
		canvas.height = image.height;
		ctx.drawImage(image, 0, 0);

		ctx.fillStyle = '#202f55';
		ctx.textBaseline = 'top/left';
		ctx.textAlign = 'center';

		ctx.font = '60px serif';
		ctx.fillText(name.value, 570, 370);
		ctx.font = '96px serif';
		var ageChar = ageCharTmp.elements['ageChar'];
		var ageSize = ageChar.value+' serif';
		ctx.font = ageSize;	
		ctx.fillText(age.value, 1315, 295);
		var historyChar = historyCharTmp.elements['historyChar'];
		var historySize = historyChar.value+' serif';
		ctx.font = historySize;	
		ctx.fillText(history.value, 1810, 295);

		ctx.font = '66px serif';
		ctx.fillText(player.value, 570, 620);
		ctx.fillText(why.value, 1600, 590);
		ctx.fillText(live.value, 570, 850);
		ctx.fillText(todo.value, 1600, 877);

		ctx.font = '50px serif';
		ctx.fillText(activity1.value, 592, 1090);
		ctx.fillText(activity2.value, 592, 1160);
		ctx.fillText(activity3.value, 592, 1230);
		ctx.fillText(activity4.value, 592, 1300);
		ctx.fillText(activity5.value, 592, 1370);

		ctx.font = '50px serif';
		ctx.fillText(free1.value, 1600, 1120);
		ctx.fillText(free2.value, 1600, 1190);
		ctx.fillText(free3.value, 1600, 1260);
		ctx.fillText(free4.value, 1600, 1330);

		var newImage = canvas.toDataURL('image/jpeg', 0.85);
		document.getElementById("image").src = newImage;
	});
}

function saveCanvas(canvas_id) {
	var canvas = document.getElementById(canvas_id);
	var uri = canvas.toDataURL('image/jpeg', 0.85);
	var a = document.createElement('a');
	a.href = uri;
	a.download = 'download.jpg';
	a.click();
}