
var loadState = {
	
	preload: function() {
		
		var loadingLabel = game.add.text(80, 150, 'loading...', { font: '30px Courier', fill: '#ffffff'});
		
		game.load.image('background', 'assets/images/background.jpg');
		
		game.load.spritesheet('player', 'assets/images/player.png', 32, 64, 24); 
		
		game.load.tilemap('firstlevel', 'assets/tilemap/arena.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('groundset', 'assets/tileset/ground.png');
		
	},
	
	create: function() {
		
		game.state.start('menu');
		
	}
	
};