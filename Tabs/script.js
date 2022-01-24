// const slider = document.querySelector(".slider");
// const tabLinks = document.querySelectorAll(".tab-link");

// const getLeftOffset = (element) => element.getBoundingClientRect().left;

// const handleTabLinkClick = (event) => {
//   const clickedElementLeft = getLeftOffset(event.target);

//   const clickedElementParentLeft = getLeftOffset(event.target.parentNode);

//   slider.style.left = `${clickedElementLeft - clickedElementParentLeft}px`;
// };

// tabLinks.forEach((tabLink) => {
//   tabLink.addEventListener("click", handleTabLinkClick);
// });

// -------------------------------------------


const tabBtns = document.querySelectorAll(".tab-link");
const tabBtnScroll = document.querySelectorAll(".btn-tab-scroll");

const underline = document.querySelector(".slidder");
const underlineScroll = document.querySelector(".slider-scroll");

tabBtns.forEach((tabs,index)=>{
    tabs.addEventListener("click",()=>{
        tabBtns.forEach(tabs=>{
            tabs.classList.remove("active");
        })
        tabs.classList.add("active");
        underline.style.left = `calc(calc(100% / 4) * ${index})`;

    })
})

tabBtnScroll.forEach((tabs, index) => {
    tabs.addEventListener("click", function showActiveTab() {
      tabBtnScroll.forEach((tabs) => {
        tabs.classList.remove("active");
      });
  
      tabs.classList.add("active");
  
      tabs.scrollIntoView();
  
      underlineScroll.style.left = `calc(100px * ${index})`;
    });
  });
  