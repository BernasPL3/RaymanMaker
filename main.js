import { EditorScene } from "./editor.js";

const config = {

    type: Phaser.AUTO,

    width: 1280,
    height: 720,

    parent: "game",

    backgroundColor: "#6ec6ff",

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },

    scene: [
        EditorScene
    ]
};

new Phaser.Game(config);
