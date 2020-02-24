class Snake {
    constructor(rows, columns, snakeHead){
        this.rows = rows;
        this.columns = columns;
        this.snakeHead = snakeHead;
    }
    
    registerMoves(value){
        this.snakeHead = value;
    }
    
    createArr() {
        let board = Array.from(Array(this.rows), () => new Array(this.columns).fill(0));   
        let sHead = this.snakeHead;
        board[sHead[0]][sHead[1]] = "x";  
        console.info(board);
        
    }

    move(direction){
        let sHead = this.snakeHead;
        switch (direction) {
            case "Up": 
                sHead[0] = sHead[0] - 1;
                 this.registerMoves(sHead);
                 console.log("------------------- ");
                 this.createArr();
                break;
            case "Down":
                sHead[0] = sHead[0] + 1;
                 this.registerMoves(sHead);
                 console.log("------------------- ");
                 this.createArr();
                break;
            case "Left":
                sHead[1] = sHead[1] - 1;
                this.registerMoves(sHead);
                console.log("------------------- ");
                this.createArr();
               break;           
            case "Right":
                sHead[1] = sHead[1] + 1;
                 this.registerMoves(sHead);
                 console.log("------------------- ");
                 this.createArr();
                break;
            default:
                break;
        }
    }
}

snake = new Snake(5,5,[2,3]);
snake.createArr();
snake.move("Left");
snake.move("Left");