import * as tf from '@tensorflow/tfjs';

export class CanvasDrawer{

	constructor(url, tileSize){
		this.image = new Image();
		this.image.self = this;
		this.image.onload = function() {
			if(!this.complete) 
				throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".");
			this.self.width = this.width / tileSize;
		}
		this.image.src = url;
	}

	drawTile(num, context, xDestination, yDestination, tileSize) {
		var xSourceEnTiles = num % this.width;
		if(xSourceEnTiles == 0) 
			xSourceEnTiles = this.width;
		var ySourceEnTiles = Math.ceil(num / this.width);
		
		var xSource = (xSourceEnTiles - 1) * tileSize;
		var ySource = (ySourceEnTiles - 1) * tileSize;
		context.drawImage(this.image, xSource, ySource, tileSize, tileSize, xDestination, yDestination, tileSize, tileSize);
	}


	drawText(message, context, xDest, yDest, fz=22){
		context.font = "bold "+fz+"pt Calibri,Geneva,Arial";
		context.fillStyle = "#fff";
		context.fillText(message,xDest,yDest);
	}

}