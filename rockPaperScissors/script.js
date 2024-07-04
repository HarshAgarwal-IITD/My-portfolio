
const btn=document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
    console.log("button cliked")
    const userChoice=document.querySelector(`select[name='userChoice']`).value
    e.preventDefault()
    let computerChoice=""
    let n=Math.floor(Math.random() * (3 - 1 + 1) + 1)
    document.getElementById("computerChoice").innerText="Computer Choice : "+computerChoice;
    if(n===1)
    {
        computerChoice="Rock"
    }
    else if(n===2)
    {
        computerChoice="Paper"
    }
    else 
    {
        computerChoice="Scissor"
    }
    console.log(computerChoice)
    document.getElementById("computerChoice").innerText="Computer Choice : "+computerChoice;
    if((userChoice==="Rock" && computerChoice==="Scissor") || (userChoice==="Paper" && computerChoice==="Rock")|| (userChoice==="Scissor" && computerChoice==="Paper"))
    {
        document.getElementById("result").innerText="YOU WINS";
    }
    else if(userChoice===computerChoice){
        document.getElementById("result").innerText="ITS A DRAW";
    }
    else{
        document.getElementById("result").innerText="YOU LOSE";

    }

    
})