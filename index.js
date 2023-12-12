var randomNumber= Math.random()*3;
var randomImage= Math.floor(randomNumber)+1;
var finalRandomImage = "./images/"+randomImage+".png";
document.querySelector(".img1").setAttribute("src",finalRandomImage);
var randomNumber1= Math.random()*3;
var randomImage1= Math.floor(randomNumber1)+1;
var finalRandomImage1 = "./images/"+randomImage1+".png";
document.querySelector(".img2").setAttribute("src",finalRandomImage1);
if(randomImage===1 && randomImage1==1){
    document.querySelector(".last").innerHTML="It's a draw, refresh to try again !";
}
if(randomImage===1 && randomImage1==2){
    document.querySelector(".last").innerHTML="Player 2 wins, refresh to try again !";
}
if(randomImage===1 && randomImage1==3){
    document.querySelector(".last").innerHTML="Player 1 wins, refresh to try again !";
}
if(randomImage===2 && randomImage1==1){
    document.querySelector(".last").innerHTML="Player 1 wins, refresh to try again !";
}
if(randomImage===2 && randomImage1==2){
    document.querySelector(".last").innerHTML="It's a draw, refresh to try again !";
}
if(randomImage===2 && randomImage1==3){
    document.querySelector(".last").innerHTML="Player 2 wins, refresh to try again !";
}
if(randomImage===3 && randomImage1==1){
    document.querySelector(".last").innerHTML="Player 2 wins, refresh to try again !";
}
if(randomImage===3 && randomImage1==2){
    document.querySelector(".last").innerHTML="Player 1 wins, refresh to try again !";
}
if(randomImage===3 && randomImage1==3){
    document.querySelector(".last").innerHTML="It's a draw, refresh to try again !";
}