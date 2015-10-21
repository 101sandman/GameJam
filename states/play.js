//----------------------------------------------------//
//--------------- Prepared variables -----------------//
//----------------------------------------------------//

var player;
var cursors;

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
		cursors = game.input.keyboard.createCursorKeys();
		
		// animations
		player.animations.add('left',	[13, 14, 15, 16, 17, 18], 10, true);
		player.animations.add('right', 	[13, 14, 15, 16, 17, 18], 10, true);
		player.animations.add('up', 	[8, 9, 10, 11, 12], 10, true);
		player.animations.add('down', 	[2, 3, 4, 5, 6], 	10, true);
		 
	},
	update: function() {

		game.physics.arcade.collide(player, groundLayer);
	
		player.body.velocity.set(0);
		
		if (cursors.left.isDown)
		{
			player.body.velocity.x = -200;
			player.play('left');
		}
		else if (cursors.right.isDown)
		{
			player.body.velocity.x = 200;
			player.play('right');
		}
		else if (cursors.up.isDown)
		{
			player.body.velocity.y = -200;
			player.play('up');
		}
		else if (cursors.down.isDown)
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