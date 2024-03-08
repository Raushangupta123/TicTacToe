let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#Reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer =  document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO=true; //playerX, palyerO

const winPatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,7,8],
        [2,4,6]
];
boxes.forEach((box)=>{
        box.addEventListener("click", ()=>{
                // console.log("box was clicked");
                if (turnO){
                        //playerO
                        box.innerText="O"
                        turnO=false;
                } else{
                        //palyerX
                        box.innerText="X"
                        turnO=true;
                }
                box.disabled=true;

                checkWinner();
        })
})
const checkWinner=()=>{
        for (let pattern of winPatterns){
                let pos1Val = boxes[pattern[0]].innerText;
                let pos2Val = boxes[pattern[1]].innerText;
                let pos3Val = boxes[pattern[2]].innerText;

                if (pos1Val != "" && pos2Val !="" && pos3Val !=""){
                        if(pos1Val === pos2Val && pos2Val === pos3Val){
                                // console.log("winner", pos1Val)

                                showWinner(pos1Val)
                        }
                }
        }
}

const showWinner=(winner)=>{
        msg.innerText=`Congratulation🎉
         Winner is ${winner}🏆 `;
        msgContainer.classList.remove("hide")
        disableBoxes()
}

const disableBoxes=()=>{
        for(let box of boxes){
                box.disabled=true;
        }
}
const enableBoxes=()=>{
        for(let box of boxes){
                box.disabled=false;
                box.innerText="";
        }
}


const resatGame=()=>{
        turnO=true;
        enableBoxes();
        msgContainer.classList.add("hide");
}

newGameBtn.addEventListener('click',resatGame)
resetBtn.addEventListener("click",resatGame)
