//funcion anonima que se llamara asi misma
//self hace refencia a windows que es un scope global que podemos acceder a el desde cualquier parte de la misma ventana
(function(){
    self.Board = function(width,height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }
    //colocar los metodos de la misma clase
    self.Board.prototype = {
        get elements(){
            var elements = this.bars;
            elements.push(this.ball);
            return elements;
        }
    }
})();

//clase anonima para que me pinte el tablero
(function(){
    self.BoardView =function(canvas,board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        //esto se utiliza en javascript para dibujar
        this.ctx = canvas.getContext("2d");
    }

    self.BoardView.prototype = {
        draw:function(){
            for (var i = this.board.elements.length - 1; i >= 0;i--) {
                var el = this.board.elements[i];
                draw(this.ctx,el);
            }
        }
    }

    function draw(ctx,element){
        if (element !== null && element.hasOwnProperty("kind")) {
            switch(element.kind){
                case "rectangle":
                    ctx.fillRect(element.x,element.y,element.width,element.height);
                    break;
            }
        }
    }

})();

(function () {
    self.Bar = function(x,y,width,height,board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        //agregamos al vector bars, todo este elemento
        this.board.bars.push(this);
        this.kind = "rectangle";
    }

    self.Bar.prototype = {
        down: function () {
            
        },
        up: function(){

        }
    }
})();

window.addEventListener("load",main);
function main(){
    var board = new Board(800,400);
    var bar = new Bar(20,100,40,100,board);
    var bar = new Bar(735,100,40,100,board);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas,board);

    board_view.draw();
}