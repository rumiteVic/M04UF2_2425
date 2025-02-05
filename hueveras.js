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

	this.load.
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
	music.background = this.sound.add('background_music', {loop :true });
}

function actualiza ()
{
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
