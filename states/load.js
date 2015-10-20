
var loadState = {
	
	preload: function() {
		
		var loadingLabel = game.add.text(80, 150, 'loading...', { font: '30px Courier', fill: '#ffffff'});
		
		game.load.image('background', 'assets/images/background.jpg');
		game.load.image('player', 'assets/images/player.png');
		
	},
	
	create: function() {
		
		game.state.start('menu');
		
	}
	
};