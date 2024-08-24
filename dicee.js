let rand1=Math.floor(Math.random()*6)+1;
let rand2=Math.floor(Math.random()*6)+1;

let dice1=document.querySelector(".img1");
dice1.setAttribute("src","./images/dice"+rand1+".png");

let dice2=document.querySelector(".img2");
dice2.setAttribute("src","./images/dice"+rand2+".png");

let title=document.querySelector("h1");
if(rand1>rand2){
    title.innerText="Player 1 Wins";
}
else if(rand2>rand1){
    title.innerText="Player 2 Wins";
}
else{
    title.innerText="Its a draw";
}

let roll=document.querySelector(".roll")
roll.addEventListener("click",()=>{
    location.reload();
})