const gp=document.querySelector(".glasspane");

const button=document.querySelector('.book-item[data-bookid="13"] .action');

button.addEventListener("click",(e)=>{
    gp.classList.remove("hide");
});

const act=document.querySelectorAll(".form-action");

for(const actemp of act){
    actemp.addEventListener("click",(e)=>{
        gp.classList.add("hide");
    });
      
}

gp.addEventListener("click", (e) => {
   if (gp === e.target){
    gp.classList.add("hide");
}
});
