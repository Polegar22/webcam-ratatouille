import * as tf from '@tensorflow/tfjs';

import {CanvasDrawer} from './canvasDrawer';

export class Kitchen{

	constructor(tileSize){
		this.score = 0;
		this.nbCheese=4
		this.map = [
					 [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					 [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
					 [1, 1, 2, 1, 3, 1, 2, 1, 1, 1, 1],
					 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],					 
					 [1, 1, 1, 2, 1, 1, 2, 1, 1, 3, 1],				   
					 [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   ];
		this.canvasDrawer = new CanvasDrawer("./kitchenSmall.png",tileSize);
	}

	checkColision(ratatouille, tileSize){

		var posX = Math.floor((ratatouille.x+15) /tileSize);
		var posY = Math.floor((ratatouille.y+15) / tileSize);

		if(this.map[posY][posX] == 2){
			if(ratatouille.life >0)
				ratatouille.life -= 1;
			this.map[posY][posX] = 1;
		}
		else if(this.map[posY][posX] == 3){
			this.score +=1;
			this.map[posY][posX] = 1;
		}
	}

	getHeight(){
		return this.map.length;
	}

	getWidth(){
		return this.map[0].length;
	}


	drawKitchen(ctx, tileSize, life){

		if(this.score == this.nbCheese){
        	this.canvasDrawer.drawText("Bon appétit ! ", ctx,4*tileSize,3*tileSize);
		}
		else if(life == 0){
			this.canvasDrawer.drawText("Game over pess F5 to restart ", ctx,2*tileSize,3*tileSize, "11");
		}
		else{
			for(var i = 0, l = this.map.length ; i < l ; i++) {
				var row = this.map[i];
				var y = i * tileSize;
				for(var j = 0, k = row.length ; j < k ; j++) {
					this.canvasDrawer.drawTile(row[j], ctx, j * tileSize, y, tileSize);
				}
			}
			this.canvasDrawer.drawText("Life : "+life, ctx,10,7*tileSize);
			this.canvasDrawer.drawText("Score : "+this.score,ctx,7*tileSize,7*tileSize);
		}
	}

}