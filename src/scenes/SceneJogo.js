export default class SceneJogo extends Phaser.Scene {
  constructor() {
    super("SceneJogo");
  }

  preload() {
    this.load.image("background", "assets/imagens/fundo.jpg");
    this.load.atlas(
      "boneco",
      "assets/sprites/spritesheet.png",
      "assets/sprites/sprites.json"
    );
  }

  create() {
    this.add.image(250, 200, "background").setScale(2.5);

    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: "frente",
      frames: this.anims.generateFrameNames("boneco", {
        prefix: "frente",
        end: 4,
        zeroPad: 4,
      }),
      repeat: -1,
    });

    this.anims.create({
      key: "costas",
      frames: this.anims.generateFrameNames("boneco", {
        prefix: "costas",
        end: 4,
        zeroPad: 4,
      }),
      repeat: -1,
    });

    this.anims.create({
      key: "lado",
      frames: this.anims.generateFrameNames("boneco", {
        prefix: "lado",
        end: 4,
        zeroPad: 4,
      }),
      repeat: -1,
    });

    this.anims.create({
      key: "outrolado",
      frames: this.anims.generateFrameNames("boneco", {
        prefix: "outrolado",
        end: 4,
        zeroPad: 4,
      }),
      repeat: -1,
    });

 
    this.boneco = this.physics.add.sprite(250, 200, "boneco");
    this.boneco.setCollideWorldBounds(true);
  }

  update() {
    this.boneco.setVelocity(0);

    if (this.cursors.left.isDown || this.a.isDown) {
      this.boneco.setVelocityX(-160);
      this.boneco.anims.play("lado", true);
    } else if (this.cursors.right.isDown || this.d.isDown) {
      this.boneco.setVelocityX(160);
      this.boneco.anims.play("outrolado", true);
    } else if (this.cursors.up.isDown || this.w.isDown) {
      this.boneco.setVelocityY(-160);
      this.boneco.anims.play("costas", true);
    } else if (this.cursors.down.isDown || this.s.isDown) {
      this.boneco.setVelocityY(160);
      this.boneco.anims.play("frente", true);
    } else {
      this.boneco.setVelocity(0);
      this.boneco.anims.stop();
    }
  }
}
