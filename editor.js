export class EditorScene extends Phaser.Scene {

    constructor() {
        super("EditorScene");
    }

    preload() {

        this.load.image(
            "ground",
            "assets/tiles/ground.png"
        );

        this.load.image(
            "player",
            "assets/player/idle.png"
        );
    }

    create() {

        this.tileSize = 32;

        this.level = [];

        for(let y = 0; y < 22; y++) {

            this.level[y] = [];

            for(let x = 0; x < 40; x++) {

                this.level[y][x] = 0;
            }
        }

        this.groundGroup = this.physics.add.staticGroup();

        this.player = this.physics.add.sprite(
            100,
            100,
            "player"
        );

        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(
            this.player,
            this.groundGroup
        );

        this.input.on("pointerdown", (pointer) => {

            let gridX =
                Math.floor(pointer.x / this.tileSize);

            let gridY =
                Math.floor(pointer.y / this.tileSize);

            this.placeTile(gridX, gridY);
        });

        this.cursors =
            this.input.keyboard.createCursorKeys();
    }

    placeTile(x, y) {

        if(this.level[y][x] === 1) return;

        this.level[y][x] = 1;

        let block = this.groundGroup.create(
            x * this.tileSize + 16,
            y * this.tileSize + 16,
            "ground"
        );

        block.refreshBody();
    }

    update() {

        if(this.cursors.left.isDown) {

            this.player.setVelocityX(-200);

        } else if(this.cursors.right.isDown) {

            this.player.setVelocityX(200);

        } else {

            this.player.setVelocityX(0);
        }

        if(
            this.cursors.up.isDown &&
            this.player.body.touching.down
        ) {
            this.player.setVelocityY(-500);
        }
    }
}
