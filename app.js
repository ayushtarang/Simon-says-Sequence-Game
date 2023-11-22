let gameSeq=[];
let userSeq=[];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["orange","green","purple","pink"];
//step 1-> when any key is preseed in document

document.addEventListener("keypress",function(){
    if(started == false){
    started = true;
    levelUp();
    }
   

});

//step2-> do a level update and button flash 
function gameflash(btn){
    btn.classList.add("gameflashup")
    setTimeout(function(){
        btn.classList.remove("gameflashup");
    },150)
};
function userflash(btn){
    btn.classList.add("userflashup")
    setTimeout(function(){
        btn.classList.remove("userflashup");
    },150)
};

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIndex = Math.floor(Math.random()*btns.length);
    let randCl = btns[randIndex];
    let randBtn = document.querySelector(`.${randCl}`);
    gameSeq.push(randCl);
    console.log(gameSeq);
    gameflash(randBtn);

};

// step3-> when button of is pressed set via addEventListener 

function btnPressed(){
    
    let btn = this;
    userflash(btn);
   
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor)
   
    checkAns(userSeq.length-1);

}
function checkAns(idx){
   
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! your final score was <b>${level}<b><br>press any key to start game`;
        let back = document.querySelector("body");
        back.style.backgroundColor = "rgb(218, 76, 76)";
        setTimeout(function(){
            back.style.backgroundColor = "rgb(202, 236, 236)";
        }, 500);
        reset();
    }
}
let allBtns = document.querySelectorAll(".btn");
for(bt of allBtns){
    bt.addEventListener("click",btnPressed);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
