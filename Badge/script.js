const button=document.querySelector(".btn2");
const badge=document.querySelector(".badge4")

// button.addEventListener('click',()=>{
//     if(badge.style.display==="none"){
//         badge.style.display="block";
//     }else{
//         badge.style.display="none";
//     }
// })

// button.addEventListener('click',()=>{
//     if(badge.dataset.toggle==="0"){
//         badge.style.visibility="hidden";
//         badge.dataset.toggle="1"
//     }else{
//         badge.style.visibility="visible";
//         badge.dataset.toggle="0";
//     }
// })

// button.addEventListener("click",()=>{
//     const toggleBtn=badge.classList;
//     if(toggleBtn.contains("toggle")){
//         toggleBtn.remove("toggle");
//     }
//     else{
//         toggleBtn.add("toggle");
//     }
// })

button.addEventListener("click",()=>{
    badge.classList.toggle('toggle8');
    
})