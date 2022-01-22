const input = document.querySelector("input");
const chips = document.querySelector(".chips");


const handleOutput=userFruit=>{
    const div=document.createElement("div");
    div.setAttribute("class","chip");
    const p=document.createElement("p");
    p.innerHTML=userFruit;
    const iEl=document.createElement("i");
    iEl.setAttribute("class","fas fa-times");

    div.appendChild(p);
    div.appendChild(iEl);
    chips.appendChild(div);


}

function handleInput(e){
    if(e.key==="Enter"){
        const newFruit=e.target.value;
        if(newFruit.length>0){
            handleOutput(newFruit);
            input.value="";
        }
    }
}
// iEl.addEventListener("click",(e)=>{
//     if(e.target.classList===".fas"){
//         this.parentElement.style.display="none";
//     }
// })

input.addEventListener("keyup", handleInput);