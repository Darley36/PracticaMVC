//funcion anonima que se llamara asi misma
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
            elements.push(ball);
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
})

window.addEventListener("load",main);
function main(){
    var board = new Board(800,400);
    var canvas = document.getElementById('canvas',board);
    var board_view = new BoardView();
}