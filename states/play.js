//----------------------------------------------------//
//--------------- Prepared variables -----------------//
//----------------------------------------------------//

var player;

//----------------------------------------------------//
	
var playState = {
	

	
	create: function() {	

		// JSON with our map layout
		map = game.add.tilemap('firstlevel');

		// tileset with our images
		map.addTilesetImage('ground', 'groundset');

		// ground layer
		groundLayer = map.createLayer('groundLayer');	
					
		// Set world size according to map size
		groundLayer.resizeWorld();

		
		
		// Collide with tile IDs
		map.setCollisionBetween(11, 11);
	
		// player
		player = game.add.sprite(game.world.centerX, game.world.centerY, 'player'); 
		
		game.physics.enable(player);
		player.body.collideWorldBounds = true;
		
		// camera folow player
		game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
	
		// Input
		this.keyboard = game.input.keyboard;
		
		// animations
		player.animations.add('left',	[13, 14, 15, 16, 17], 10, true);
		player.animations.add('right',	[19, 20, 21, 22], 10, true);
		player.animations.add('up', 	[8, 9, 10, 11], 10, true);
		player.animations.add('down', 	[2, 3, 4, 5], 	10, true);
		 
	},
	update: function() {

		game.physics.arcade.collide(player, groundLayer);
	
		player.body.velocity.set(0);
		
		if (this.keyboard.isDown(Phaser.Keyboard.A))
		{
			player.body.velocity.x = -200;
			player.play('left');
		}
		else if (this.keyboard.isDown(Phaser.Keyboard.D))
		{
			player.body.velocity.x = 200;
			player.play('right');
		}
		else if (this.keyboard.isDown(Phaser.Keyboard.W))
		{
			player.body.velocity.y = -200;
			player.play('up');
		}
		else if (this.keyboard.isDown(Phaser.Keyboard.S))
		{
			player.body.velocity.y = 200;
			player.play('down');
		}
		else
		{
			player.animations.stop();
		}
	
	}
	
};