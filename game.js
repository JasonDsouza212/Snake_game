import {update as updateSnake,draw as drawSnake ,SNAKE_SPEED,getSnakeHead,snakeIntersection} from './snake.js'
import {update as updateFood,draw as drawFood} from './food.js'
import {outSideGrid} from './grid.js'


let lastRenerTime=0
let gameOver=false
const gameBoard=document.getElementById('game-board')


function main(currentTime){
    if(gameOver){
        if(confirm('You lost. press ok to restart.')){
            window.location='/'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender=(currentTime-lastRenerTime)/1000
    if(secondsSinceLastRender<1/SNAKE_SPEED)return
    
    console.log('render')
    lastRenerTime = currentTime

    update()
    draw()
 
}
window.requestAnimationFrame(main)

function update(){
updateSnake()
updateFood()
checDeath()
}
function draw(){
    gameBoard.innerHTML=" "
  drawSnake(gameBoard)
  drawFood(gameBoard)
}
function checDeath(){
    gameOver= outSideGrid(getSnakeHead()) || snakeIntersection()
}