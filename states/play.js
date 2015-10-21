//----------------------------------------------------//
//--------------- Prepared variables -----------------//
//----------------------------------------------------//

var player;
var Keys = Phaser.Keyboard;
var speed = 4;
var cursors;

//----------------------------------------------------//
	
var playState = {
	

	
	create: function() {	

		map = game.add.tilemap('firstlevel');

		map.addTilesetImage('ground', 'groundset');
		
		layer = map.createLayer('groundLayer');	
		
		layer.resizeWorld();
		
		player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		player.anchor.setTo(0.5, 0.5);
		game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
		 
		cursors = game.input.keyboard.createCursorKeys();
		 
	},
	update: function() {

	    if (cursors.left.isDown)
		{
			player.x -= speed;
			player.angle = -15;
		}
		else if (cursors.right.isDown)
		{
			player.x += speed;
			player.angle = 15;
		}
		else if (cursors.up.isDown)
		{
			player.y -= speed;
		}
		else if (cursors.down.isDown)
		{
			player.y += speed;
		}
		else
		{
			player.angle = 0;
		}

		
	}
	
};