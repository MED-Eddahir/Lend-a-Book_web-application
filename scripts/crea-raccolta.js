const button=document.querySelector(".libreria-header button");
const forum=document.querySelector(".raccolta");

button.addEventListener("click",(e)=>{
    forum.classList.remove("hide");
});

const buttons=document.querySelectorAll(".raccolta .action .form-action");
for(let tempB of buttons){
    tempB.addEventListener("click",(e)=>{
        forum.classList.add("hide");
    })
}

forum.addEventListener("click",(e)=>{
    if(e.target == forum){
        forum.classList.add("hide");

    }
})
