const btn1=document.querySelector("#p1buttonDisplay");
const btn2=document.querySelector("#p2buttonDisplay");
const display1=document.querySelector("#player1");
const display2=document.querySelector("#player2");
const resetBtn=document.querySelector("#reset");
const select=document.querySelector("select");

let p1Score=0;
let p2Score=0;

let winningScore=5;

btn1.addEventListener("click",function(){
    if(p1Score!==winningScore-p2Score){
    p1Score+=1;
    display1.innerHTML=p1Score;  

    }
    if(p1Score===winningScore-p2Score&&p1Score>p2Score)
    {
        display1.classList.add("winner");
        display2.classList.add("loser");
    }
    
})

btn2.addEventListener("click",function(){
    if(p2Score!==winningScore-p1Score){
     p2Score+=1;
    display2.innerHTML=p2Score;   
    }
    if(p2Score===winningScore-p1Score&&p2Score>p1Score)
    {
        display1.classList.add("loser");
        display2.classList.add("winner");
    }
    
})
resetBtn.addEventListener("click",reset)

select.addEventListener("change",function(){
    winningScore=parseInt(this.value);
    reset();
})

function reset(){
    p1Score=0;
    p2Score=0;
    display1.innerHTML=p1Score;
    display2.innerHTML=p2Score;
    display1.classList.remove("loser","winner");
        display2.classList.remove("winner","loser");
}

const colorbt=document.querySelector('.colorbt');

colorbt.addEventListener('click',function(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
   const color= `rgb(${r},${g},${b})` 
    document.body.style.backgroundColor=color;

}
)