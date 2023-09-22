import { Game } from './games.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Game],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false,
        }
    },
};

const game = new Phaser.Game(config);