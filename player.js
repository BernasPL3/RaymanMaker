export class Player {

    constructor(scene, x, y) {

        this.sprite =
            scene.physics.add.sprite(
                x,
                y,
                "player"
            );

        this.sprite.setBounce(0.1);

        this.sprite.setCollideWorldBounds(true);
    }
}
