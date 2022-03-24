console.log('Game loaded. V1.0');

let canvas = document.getElementById('gameCanva');
let context = canvas.getContext('2d');
let box = 32;
let direction = 'right';
let snake =[];
let food = {
	x: Math.floor(Math.random() * 15 + 1) *box,
	y: Math.floor(Math.random() * 15 + 1) * box
}
snake[0]={
	x: 8*box,
	y: 8*box
}

function criarBG () {
	context.fillStyle = "black";
	context.fillRect (0,0, 16*box, 16*box);
}


function criarCobrinha(){
	for(i=0; i < snake.length; i++){
		context.fillStyle = "gray";
		context.fillRect(snake[i].x, snake[i].y, box, box);


	}
}

function drawFood (){
	context.fillStyle = "pink";
	context.fillRect(food.x, food.y, box, box);
}



document.addEventListener('keydown', update);

function update (event){
	if (event.keyCode == 37) { direction = "left";};
	if (event.keyCode == 38) { direction = "up";};
	if (event.keyCode == 39) { direction = "right";};
	if (event.keyCode == 40) { direction = "down";};
}



function iniciarJogo(){
	
	if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
	if (snake[0].x < 0 && direction == "left") snake[0].x= 16 * box;
	if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
	if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;


	criarBG();
	criarCobrinha();
	drawFood();

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if (direction=="right") snakeX += box;
	if (direction=="left") snakeX -= box;
	if (direction=="up") snakeY -= box;
	if (direction=="down") snakeY += box;

	if (snakeX != food.x || snakeY != food.y) {
		snake.pop();
	}else {
		food.x = Math.floor(Math.random() * 15 + 1) * box;
		food.y = Math.floor(Math.random() * 15 + 1) * box;
	}


	let newHead = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(newHead);
}

let game = setInterval(iniciarJogo, 100);
