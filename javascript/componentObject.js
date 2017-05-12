//  L'objet componant
function component(width, height, color, x, y, noteSound, name) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color=color;
    this.noteSound = noteSound;  
    this.name = name;  
    this.state = 0;  //  Key not pressed
    this.create = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.pressed = function(){

        //  Si la touche n'est pas deja pressée
        if(this.state==0) {
            ctx = myGameArea.context;
            ctx.fillStyle = "yellow";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            mySound = new sound(this.noteSound);
            mySound.play();
            document.getElementById('note-label').innerHTML = "Touche : "+this.name;

            //  Si on est dans le mode tuto
            if(mode == 1) {
                if( monTuto.estValide(this.name) ) { monTuto.noteValide(); }   
            }

            this.state = 1;
        }
                      
    }
    this.released = function(){

        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.state = 0;
    }
    this.clicked = function() {
        
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var clicked = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y)
         || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            clicked = false;
        }
        return clicked;
    }
}