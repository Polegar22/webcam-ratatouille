import * as tf from '@tensorflow/tfjs';

import {Ratatouille} from './ratatouille';
import {Kitchen} from './kitchen';


const ratatouille = new Ratatouille("./cook.png", 50, 120);
var tileSize = 32;
const kitchen = new Kitchen(tileSize);


// Gestion du clavier
window.onkeydown = function(event) {
	var e = event || window.event;
	var key = e.which || e.keyCode;
	var width = kitchen.getWidth() * tileSize;
	var height =  kitchen.getHeight() * tileSize;
	switch(key) {
		case 38 :// Flèche haut
			ratatouille.move("up", width, height);
			break;
		case 40 :// Flèche bas
			ratatouille.move("down", width, height);
			break;
		case 37 :// Flèche gauche
			ratatouille.move("left", width, height);
			break;
		case 39 :// Flèche droite
			ratatouille.move("right", width, height);
			break;
		default : 
			return true;
			
		return false;
	}
}
	
// Gestion du clavier
window.onkeyup = function(event) {
	var e = event || window.event;
	var key = e.which || e.keyCode;
	var width = kitchen.getWidth() * tileSize;
	var height =  kitchen.getHeight() * tileSize;
	switch(key) {
		case 38 : case 40 : case 37 : case 39 :
			ratatouille.move("idle", width, height);
			break;
		default : 
			return true;
			
		return false;
	}
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = kitchen.getWidth() * tileSize;
        this.canvas.height = kitchen.getHeight() * tileSize;
        this.context = this.canvas.getContext("2d");
        document.getElementById("game-container").appendChild(this.canvas)
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export function startGame() {
	gameArea.start();
}

export function moveMainCharacter(direction){
	kitchen.checkColision(ratatouille, tileSize);
	ratatouille.move(direction, kitchen.getWidth() * tileSize, kitchen.getHeight() * tileSize);
}

function updateGameArea() {
	gameArea.clear();
	kitchen.drawKitchen(gameArea.context, tileSize, ratatouille.life)
	ratatouille.update(gameArea.context);
}