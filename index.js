var player1 = Math.floor(Math.random()*6+1)
var player2 = Math.floor(Math.random()*6+1)

document.querySelector(".img1").setAttribute("src", './images/dice'+player1+'.png')
document.querySelector(".img2").setAttribute("src", './images/dice'+player2+'.png')
if(player1 == player2){
    document.querySelector(".winner")="Try Again";}

else if(player1>player2){
    document.querySelector(".winner")="Player 1 won";
}else{
    document.querySelector(".winner")="Player 2 won";
}
