let canvas_w = 800;
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

let field_center = canvas_w/2 + canvas_w/8;

let huevos = []
let huevos_1;


let x_huevo;
let eleccion;
let huevin;
let y_huevo = 50;
let nueva;

let music = {
background: null,
game_over: null
};

let fx = {
	mouseclick: null,
	bad: null,
	good: null
};

function precarga ()
{
	this.load.image('huevera_b', 'huevera_b.png');
	this.load.image('huevin', 'huevo_b.png');
	this.load.image('huevera_m', 'huevera_m.png');
	this.load.image('huevo_m', 'huevo_m.png');
	this.load.image('huevo_d', 'huevo_d.png');
	this.load.image('huevera_d', 'huevera_d.png');
	this.load.image('background', 'grass_bg.png');
	this.load.image('straw', 'straw_bg.png');
	
	this.load.audio('mouseclick', 'Dark_Loop.ogg');
	this.load.audio('backgound_music', 'Dark_Loop.ogg');
}

let huevo_dir = 1.5;
let nueva1;
let countdown = 60;

let countdown_text;

let huevos_interval;

let huevos_interval_time = 2000;

let huevo_current = 0;

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
	
	for(let i = 0; i < 10; i++){

	let huevo_tmp = this.add.image(400, 256, 'huevin');

	let color = blanco;

	let random_num = Phaser.Math.Between(1, 100);
	let huevo_type = "b";

	if (random_num % 5 == 0){
	color = marron;
	huevo_type = "m";
	}
	else if (random_num % 13 == 0){
		color = dorado;
		huevo_type = "d";
	}

	huevo_tmp.setTint(color);
	huevo_tmp.huevo_type = huevo_type;

	huevo_tmp.setInteractive({ draggable:true })
	huevo_tmp.on('pointerdown', function (){
	let huevo_color = "blanco";
	if (this.huevo_type == "m")
	{
	huevo_color = "marrón";
	}
	else if (this.huevo_type == "d")
	{
	huevo_color = "dorado";
	}
	console.log("Huevo " +huevo_color);

	});

	}
	countdown_text = this.add.text(canvas_w/2 + canvas_w/4, 64, "60", {"fontSize": 32});


	music.background = this.sound.add('background_music', {
	loop :true,
	volume: 0.5
	});

	music.background.play();

	music.game_over = this.sound.add('game_over_music', {
	loop: false,
	volume: 0.5
	});

	fx.mouseclick = this.sound.add('mouseclick_fx');

}

function actualiza ()
{

if (countdown == 10){
	music.background.rate = 1.5;
}
else if (countdown <= 0){
	music.background.stop();
	music.game_over.play();
}

	
}


let intervalo_contador;

countdown_interval = setInterval(function(){
countdown--;
countdown_text.text = countdown;
if(countdown <= 0){
	console.log("Game Over");


	clearInterval(countdown_interval);

}
}, 1000);

huevos_interval = setInterval(function(){

	huevo_current++;
	if(huevo_current >= huevos.length){
		console.log("Se acabaron los huevos");
		clearInterval(huevos_interval);
		return;
	}

}), huevos_internal_time;

