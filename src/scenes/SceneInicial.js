export default class SceneInicial extends Phaser.Scene {
  constructor() {
    super("SceneInicial");
  }

  preload() {
    this.load.image("botao", "assets/imagens/botao.png");
    this.load.image("fundo", "assets/imagens/images.png");
    this.load.image("logo", "assets/imagens/logo.png");
    console.log("SceneInicial: Assets carregados.");
  }

  create() {
    this.add.image(250, 200, "fundo").setScale(2);
    this.add.image(250, 50, "logo").setScale(0.5);

    let botao = this.add.image(250, 250, "botao").setScale(0.1);
    botao.setInteractive();

    botao.on("pointerover", () => {
      console.log("Mouse sobre o botão");
    });

    botao.on("pointerout", () => {
      console.log("Mouse saiu do botão");
    });

    botao.on("pointerdown", () => {
      console.log("Botão clicado! Carregando cena do jogo...");
      this.scene.start("SceneJogo");
    });
  }
}
