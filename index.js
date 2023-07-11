document.querySelector("button").addEventListener("click", function () {
    
var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src", "images/D" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/D" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's A Draw!";
}
else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
  })
