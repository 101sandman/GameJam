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

		game.physics.p2.enable(player);

		cursors = game.input.keyboard.createCursorKeys();

		game.camera.follow(player);
		 
	},
	update: function() {

		player.body.setZeroVelocity();

		if (cursors.up.isDown)
		{
			player.body.moveUp(300)
		}
		else if (cursors.down.isDown)
		{
			player.body.moveDown(300);
		}

		if (cursors.left.isDown)
		{
			player.body.velocity.x = -300;
		}
		else if (cursors.right.isDown)
		{
			player.body.moveRight(300);
		}	
		
	}
	
};