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

		
	},
	update: function() {

		// Camera
		if (this.keyboard.isDown(Phaser.Keyboard.W))
		{
			game.camera.y -= 40;
		}
		else if (this.keyboard.isDown(Phaser.Keyboard.S))
		{
			game.camera.y += 40;
		}		
		else if (this.keyboard.isDown(Phaser.Keyboard.D))
		{
			game.camera.x += 40;
			
		}
		else if (this.keyboard.isDown(Phaser.Keyboard.A))
		{
			game.camera.x -= 40;
		}
		
		
		
	}
	
};