import MarioScene from './js/MarioScene.js';

window.onload = function(){
    var config = {
        type: Phaser.AUTO,
        backgroundColor: 0x000,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 600
                },
                debug: false
            }
        },
        scale: {
            mode: Phaser.Scale.FIT,
            width: 800,
            height: 600
        },
        scene : [ 
            MarioScene 
        ]
    };

    var game = new Phaser.Game(config);
}

