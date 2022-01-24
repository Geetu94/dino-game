let container=document.querySelector("#container");
let dino=document.querySelector("#dino");
let block=document.querySelector("#block");
let road=document.querySelector("#road");
let score=document.querySelector("#score");
let gameOver=document.querySelector("#gameOver");
let interval=null;
let playerScore=0;
let scoreCounter = ()=>{
    playerScore++;
    score.innerHTML=`Score<b>${playerScore}</b>`;
}

// interval=setInterval(scoreCounter,200)
window.addEventListener("keydown", (start )=>{
    // console.log(start);
    if(start.code=="Space")
    {
    gameOver.style.display="none";
    block.classList.add("blockActive")
    road.firstElementChild.style.animation="roadAnimate 1.5s linear infinite";
    let playerScore=0;
    interval=setInterval(scoreCounter,200);
    }
});
window.addEventListener("keydown" ,(e)=>{
    if(e.key=="ArrowUp")
        if (dino.classList !="dinoActive");
            {
                dino.classList.add("dinoActive");
                setTimeout(()=>{
                    dino.classList.remove("dinoActive");
                },500);
            }
});
let result=setInterval(()=>{
    let dinoTop=getComputedStyle(dino).getPropertyValue("bottom");
    console.log("dinoBottom"+dinoBottom);
    let dinoTop=getComputedStyle(block).getPropertyValue("bottom");
    console.log("BlockLeft"+blockLeft);
if(dinoBottom <=90&& blockLeft>=20 && blockLeft<=145){
    // console.log("Game over");
    clearInterval(interval);
    gameOver.style.display="block";
    block.classList.remove("blockActive");
    road.firstElementChild.style.animation=none;
    clearInterval(interval);
    playerScore=0;
}
},10);



