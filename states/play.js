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
		game.camera.follow(player);
		 
	},
	update: function() {

		// Player movement
		if (this.keyboard.isDown(Phaser.Keyboard.W))
		{
			player.y -= 40;
		}
		else if (this.keyboard.isDown(Phaser.Keyboard.S))
		{
			player.y += 40;
		}		
		else if (this.keyboard.isDown(Phaser.Keyboard.D))
		{
			player.x += 40;
			
		}
		else if (this.keyboard.isDown(Phaser.Keyboard.A))
		{
			player.x -= 40;
		}	
		
	}
	
};