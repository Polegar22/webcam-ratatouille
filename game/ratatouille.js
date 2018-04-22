export class Ratatouille{

    constructor(url, x, y) {
        this.speedX = 2;
        this.speedY = 2;
        this.x = x;
        this.y = y;
        this.life = 2;
        this.frame=0;
        this.animationSlower = 0;
        this.image = new Image();
        this.image.self = this;
        this.isMoving = false;
        this.image.onload = function() {
            if(!this.complete) 
                throw "Erreur de chargement du sprite nommé \"" + url + "\".";
            
            this.self.width = this.width / 3;
            this.self.height = this.height / 4;
        }
        this.image.src = url;
        //down,right,left,up
        this.direction = 0;
    }


    update(ctx){
        if(this.isMoving == false){
            this.frame=1;
        }

        ctx.drawImage(
            this.image, 
            this.width * this.frame, this.direction * this.height, // Point d'origine du rectangle source à prendre dans notre image
            this.width, this.height, // Taille du rectangle source (c'est la taille du personnage)
            // Point de destination (dépend de la taille du personnage)
            (this.x), (this.y),
            this.width, this.height // Taille du rectangle destination (c'est la taille du personnage)
        );

        if(this.animationSlower%3 == 0){
            this.frame+=1;
            this.animationSlower=0;
        }

        if(this.frame>2){
            this.frame=0;
        }
        this.animationSlower +=1;
    }

    move(direction, width, height){
        this.isMoving=true;
        switch(direction) {
            case "down" : 
                this.movedown(height);
                this.direction=0;
                break;
            case "right" : 
                this.moveright(width);
                this.direction=1;
                break;
            case "left" : 
                this.moveleft();
                this.direction=2;
                break;
            case "up" : 
                this.moveup();
                this.direction=3;
                break;
            case "idle":
                this.isMoving=false;
                break;
        }
    }


    moveup() {
        if(this.y-this.speedY>0){
           this.y -= this.speedY; 
        }
    }

    movedown(height) {
        if(this.y+this.speedY+15<height){
            this.y += this.speedY; 
        }
    }

    moveleft() {
        if(this.x-this.speedX>0){
            this.x -= this.speedX; 
        }
    }

    moveright(width) {
        if(this.x+this.speedX+15<width){
            this.x += this.speedX; 
        }
    }
}