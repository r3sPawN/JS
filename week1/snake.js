const SNAKE_SIZE = 3;
const BOARD_DIMENSIONS = [10,10];
const DIRECTIONS = { 
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
}

class Snake {
    constructor(snakeSize) {
        this.snakeBody = this.createSnake(snakeSize);
    }

    createSnake(size) { //make it with map and add it at the constructor 
        let snakeArray = [];
        for (let index = 0; index < size; index++) {
            snakeArray.push({x:0, y:index}); 
        }
        return snakeArray;
    }   

    move(direction) {
        this.snakeBody = this.calculateSnakeBody(direction, this.snakeBody);
    }

    calculateSnakeBody(direction, snakeBody) { 
        
        if(DIRECTIONS.UP !== direction && DIRECTIONS.UP !== direction
             && DIRECTIONS.LEFT !== direction && DIRECTIONS.RIGHT !== direction) { // or does not work - check why
            throw "wrong input";    
        }

        let newSnakeBody = snakeBody.slice();
        newSnakeBody.shift();        
        let snakeHead = snakeBody.pop();
        let newHead = Object.assign({}, snakeHead);

        if(direction === "UP"){
            newHead.x = newHead.x - 1;
        }

        if(direction === "DOWN"){
            newHead.x = newHead.x + 1;
        }

        if(direction === "LEFT"){
            newHead.y = newHead.y + 1;
        }

        if(direction === "RIGHT"){
            newHead.y = newHead.y - 1;
        }
        
        if(newSnakeBody.some((element) => (element.x === newHead.x) && (element.y === newHead.y))) {
            throw "The game is over";
        }
        
        newSnakeBody.push(newHead);

        return newSnakeBody;
    }
      
}

class Board {
    constructor(snake, boardDimensions, applePosition) {
        this.snake = snake;
        this.boardDimensions = boardDimensions;
        this.applePosition = applePosition;
    }

    render() {
    let board = Array.from(Array(this.boardDimensions[0]), () => new Array(this.boardDimensions[1]).fill(0));   
    
    let newSnakeBody = this.snake.snakeBody.slice();   
    let snakeHead = newSnakeBody.pop();
    let newHead = Object.assign({}, snakeHead);

    if(newHead.x > this.boardDimensions[0] - 1 || newHead.y > this.boardDimensions[1] - 1  || newHead.x < 0 || newHead.y < 0) {
        throw "the snake hit a wall";
    }
    
    for (let i = 0; i < this.snake.snakeBody.length; i++) { // make it with foreach or map
            board[this.snake.snakeBody[i].x][this.snake.snakeBody[i].y] = "x";
        }
    board[this.applePosition[0].x][this.applePosition[0].y] = "A";
    

    console.info(board);
    console.log("___________________");
    }
}
    // class Apple - when the apple is eaten snake size++, random possition

class Apple {
    constructor(snakePosition) {
        this.snakePosition = snakePosition;
        this.applePosition = this.setApplePosition();
    }

    setApplePosition() {
        let randomX = Math.floor(Math.random() * BOARD_DIMENSIONS[0]);
        let randomY = Math.floor(Math.random() * BOARD_DIMENSIONS[1]);
        
        let ApplePosition = [{x: 0 , y: 8}]; // randomx, randomY
        
        if(this.snakePosition.some(element => 
            element.x === ApplePosition[0].x && element.y === ApplePosition[0].y)) { //make it work; it can spawn on the snake again
                ApplePosition[0].x = ApplePosition[0].x % 2;
                ApplePosition[0].y = ApplePosition[0].y % 2;
            }
        
        return ApplePosition;
    }

    checkForCollision() {
        let newSnakeBody = this.snakePosition.slice();   
        let snakeHead = newSnakeBody.pop();
        let newHead = Object.assign({}, snakeHead);
        
        let Tail = newSnakeBody.shift();
        let changeSnakeSize = this.snakePosition; //this.snakeBody
        
        //this is a new function that check for iscollied; returns true or false
        if (this.applePosition.some((element, index) =>  
        this.applePosition[index].x === newHead.x && this.applePosition[index].y === newHead.y)) {
            this.applePosition  = this.setApplePosition();
            changeSnakeSize.unshift(Tail);
        }
        
        return changeSnakeSize;       
    }
}

class Game {
    constructor() {
        this.snake = new Snake(SNAKE_SIZE);
        this.board = BOARD_DIMENSIONS;
        this.lastdirection = "LEFT";
        this.isGameOver = false;
    }

    start() {
        // while loop, which constantly inputs to the board the last user direction, sleep 1 sec on each ittearition
        let apple = new Apple(this.snake.snakeBody);
        
        for (let index = 0; index < 9; index++) {
        this.snake.move(this.lastdirection);
        apple.snakePosition = this.snake.snakeBody;
        this.snake.snakeBody = apple.checkForCollision();
        let board1 = new Board(this.snake, BOARD_DIMENSIONS, apple.applePosition);
        board1.render();
        }
        //initial position of apple to be at the end of the board, so that the snake can take it and after that collide with the board walls 
        //game over after the snake self eats or has no where to go 

        //git repo named snake; JSlinter make it work; Jest testing - one test
    }

}

game = new Game;
game.start();