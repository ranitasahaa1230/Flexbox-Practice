const chipInput = document.querySelector(".input_class");
const chips = document.querySelector(".chips");
const chipsForm = document.querySelector(".chips-input-form");
// const chip = document.querySelector('.chip');


// const handleOutput=userFruit=>{
//     const div=document.createElement("div");
//     div.setAttribute("class","chip");
//     const p=document.createElement("p");
//     p.innerHTML=userFruit;
//     const iEl=document.createElement("i");
//     iEl.setAttribute("class","fas fa-times");

//     div.appendChild(p);
//     div.appendChild(iEl);
//     chips.appendChild(div);


// }

// function handleInput(e){
//     if(e.key==="Enter"){
//         const newFruit=e.target.value;
//         if(newFruit.length>0){
//             handleOutput(newFruit);
//             input.value="";
//         }
//     }
// }


// iEl.addEventListener("click",(e)=>{
//     if(e.target.classList===".fas"){
//         this.parentElement.style.display="none";
//     }
// })

// input.addEventListener("keyup", handleInput);

// ---------------------------------------------------------
chipsForm.addEventListener("submit",getChips);

const createChip=(chipss)=>{
    const chipTemplate=`<div class="chip"><p>${chipss}</p><i class="fas fa-times"></i></div>`;
    chips.innerHTML += chipTemplate;
}

function getChips(e){
    e.preventDefault();
    const chip1=chipInput.value;
    if(chip1.length){
        createChip(chip1);
        chipsForm.reset();
    }
}

// chips.addEventListener("click", (e) => {
//     if (
//       e.target.classList.contains("fas") &&
//       e.target.classList.contains("fa-times")
//     ) {
//       e.target.parentElement.remove();
//     }
//   });

chips.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-times")){
        e.target.parentElement.remove();
    }
})