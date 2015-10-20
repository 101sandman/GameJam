//----------------------------------------------------//
//--------------- Prepared variables -----------------//
//----------------------------------------------------//


//----------------------------------------------------//
	
var playState = {
	

	
	create: function() {	

		game.world.setBounds(0, 0, 3000, 1500);

		background = game.add.tileSprite(0, 0, 1920, 1080, 'background');
		background.fixedToCamera = true;
		
		this.keyboard = game.input.keyboard;
		
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