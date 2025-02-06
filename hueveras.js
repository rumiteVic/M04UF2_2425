let canvas_w = 800
let canvas_h = 450;
let config = {
 width: canvas_w,
 height: canvas_h,
 scene: {
  preload: precarga,
  create: crea,
  update: actualiza
 }
};
let game = new Phaser.Game(config);
let huevom_dir = 1;

let huevera_b, huevera_m, huevera_d;
let huevo_b, huevo_m, huevo_d;
let background;
let straw;

let huevin;	
let x_huevo;
let eleccion;
let y_huevo = 50;
let nueva;
let countdown_text;

function precarga ()
{
	this.load.image('huevera_b', 'huevera_b.png');
	this.load.image('huevo_b', 'huevo_b.png');
	this.load.image('huevera_m', 'huevera_m.png');
	this.load.image('huevo_m', 'huevo_m.png');
	this.load.image('huevo_d', 'huevo_d.png');
	this.load.image('huevera_d', 'huevera_d.png');
	this.load.image('background', 'grass_bg.png');
	this.load.image('straw', 'straw_bg.png');
}

let huevo_dir = 1.5;
let nueva1;

function crea ()
{
	background = this.add.image(80, 0, 'background');
	background.setScale(2);
	straw = this.add.image(90, 200, 'straw');
	straw.setScale(0.5, 0.4);
	straw.angle = 90;

	huevera_b = this.add.image(80, 100, 'huevera_b');
	huevera_b.setScale(.5);
	huevera_m = this.add.image(80, 200, 'huevera_m');
	huevera_m.setScale(.5);
	huevera_d = this.add.image(80, 300, 'huevera_d');
	huevera_d.setScale(.5);
	
	
	countdown_text = this.add.text(canvas_w/2 + canvas_w/4, 64, "60", {"fontSize": 32}); 
	
	random.call(this);
}

function random ()
{	
	x_huevo = Math.floor((Math.random() * 400) + 200);
	eleccion = Math.floor((Math.random() * 3) + 1);
	
	if(eleccion == 1){
		huevin = this.add.image(x_huevo, y_huevo, 'huevo_b');
	nueva1 = eleccion;
	}
	if(eleccion == 2){
		huevin = this.add.image(x_huevo, y_huevo, 'huevo_m');
		nueva1 = eleccion;	
	}
	if(eleccion == 3){
		huevin = this.add.image(x_huevo, y_huevo, 'huevo_d');
		nueva1 = eleccion;	
	}
	huevin.setScale(1.1);

	huevin.setInteractive();

	huevin.on('pointerdown', (pointer) => {
		if(nueva1 == 1) {
			console.log('Huevo Blanco');
		}
		if(nueva1 == 2){
			console.log('Huevo Marron');
		}
		if(nueva1 == 3){
			console.log('Huevo Dorado');
		}
	});
}

function actualiza ()
{

if(huevin){
huevin.y += huevo_dir;
nueva = Math.floor((Math.random() * 3) + 1);
	if(huevin.y >= 400){
	huevin.destroy();
	random.call(this);	
	}
}
}

let num=60;

let intervalo_contador;

setTimeout(function () {
console.log("hola")
}, 3000);


function salta ()
{
	console.log("boing");
}

setTimeout(salta, 5000);

countdown_interval = setInterval(function(){
num--;
countdown_text.text = num;
if (num == 0){
	console.log("Game Over");
	clearInterval(countdown_interval);
}
random.call(this);
}, 1000);
