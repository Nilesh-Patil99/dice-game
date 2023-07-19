var player1 = Math.floor(Math.random()*6+1)
var player2 = Math.floor(Math.random()*6+1)

document.querySelector(".img1").setAttribute("src", './images/dice'+player1+'.png')
document.querySelector(".img2").setAttribute("src", './images/dice'+player2+'.png')
if(player1 == player2){
    document.querySelector(".one").innerHTML="try again";}

else if(player1>player2){
    document.querySelector(".one").innerHTML="Player 1 won";
}else{
    document.querySelector(".one").innerHTML="Player 2 won";
}
