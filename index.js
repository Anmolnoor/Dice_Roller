//alert("this is working!!!");
var r1 =Math.floor(Math.random()*6)+1;
var img = "images/dice"+r1+".png";
document.querySelectorAll("img")[0].setAttribute("src", img);


var r = Math.floor(Math.random()*6)+1;
var img2 = "images/dice"+r+".png";
document.querySelectorAll("img")[1].setAttribute("src", img2);

if (r1>r){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Win!!!";
}
else if (r>r1){
  document.querySelector("h1").innerHTML = "Player 2 Win!!! 🚩 ";
}
else {
    document.querySelector("h1").innerHTML = "Draw!!!";
}
