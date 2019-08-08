import assets from './assets.js';

class MarioScene extends Phaser.Scene {
	constructor(){
		super("Mario");
	}

	preload(){
		this.load.image("tileset", "../assets/tilesets/Tileset.png");
		this.load.image("enemies", "../assets/tilesets/Bosses.png");
		this.load.image("start1-1", "../assets/tilesets/start1-1.png");
		this.load.tilemapTiledJSON("map", "../assets/tilemaps/w1l1.json");
	}

	create(){
		this.map = this.add.tilemap("map" );
		//const tileset = map.addTilesetImage("tileset", "ground");
		//const tilesetStart = map.addTilesetImage("start1-1", "start1-1");
		//const groundLayer = map.createStaticLayer("ground", tileset, 0, 0);
	}

	update(time, delta){

	}
}

export default MarioScene;