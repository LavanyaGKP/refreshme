var randomNumber1=Math.floor((Math.random()* 6)+1);
var randomFormat="/dice"+randomNumber1+".png";
var randomImage=  "./images" +randomFormat
var imageLeft=document.querySelectorAll("img")[0];
imageLeft.setAttribute("src",randomImage);


var randomNumber2=Math.floor((Math.random()* 6)+1);
var randomFormat2="/dice"+randomNumber2+".png";
var randomImage2=  "./images" +randomFormat2;
var imageRight=document.querySelectorAll("img")[1];
imageRight.setAttribute("src",randomImage2);


if(randomNumber1>randomNumber2)
    {
        document.firstElementChild.lastElementChild.querySelector("h1").innerHTML=" 🚩 Player 1 wins ";
    }
    else if(randomNumber1<randomNumber2)
    {
        document.firstElementChild.lastElementChild.querySelector("h1").innerHTML=" Player 2 wins 🚩";
    }
    else
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML=" 🚩 Match Draw 🚩";