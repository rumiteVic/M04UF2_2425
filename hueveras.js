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
	this.load.image('huevo_b', 'huevo_b.png');
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

huevin.y += huevo_dir;
nueva = Math.floor((Math.random() * 3) + 1);
	if(huevin.y >= 400){
	huevin.y = y_huevo;
	huevin.x = Math.floor((Math.random() * 400) + 200);	
	if(nueva == 1){
	huevin.setTexture('huevo_b');
	nueva1 = nueva;	
}
	if(nueva == 2){
	huevin.setTexture('huevo_m');
	nueva1 = nueva;	
}
	if(nueva == 3){
	huevin.setTexture('huevo_d');
	nueva1 = nueva;	
}
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
