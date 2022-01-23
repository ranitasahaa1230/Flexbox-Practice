const disabledList = document.querySelectorAll(".disabled");
const shortHeader = document.querySelector(".short");
const shortContainer = document.querySelector(".div-header");

shortContainer.addEventListener("scroll",(e)=>{
    console.log("clicked");
    if(e.target.scrollTop === 0){
        shortHeader.classList.remove("collapse");
        disabledList.forEach((item)=>{
            item.classList.remove("hide")
        })
    }else{
        shortHeader.classList.add("collapse");
        disabledList.forEach((item)=>{
            item.classList.add("hide")
        })  
      }
})