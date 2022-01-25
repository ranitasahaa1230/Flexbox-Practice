const baseline = document.querySelector("#btn-baseline");
const leading = document.querySelector("#btn-leading");
const stacked = document.querySelector("#btn-stacked");
const close = document.querySelectorAll(".close-icon");
const baselineSnackbar = document.querySelector(".baseline");
const leadingSnackbar = document.querySelector(".leading");
const stackedSnackbar = document.querySelector(".stacked");
const loopSnackbar = document.querySelector(".loop");


// baseline.addEventListener("click",()=>{
//     baselineSnackbar.style.display="flex";
//     setTimeout(()=>{
//         baselineSnackbar.style.display="none";
//     },4000);
// });
baseline.addEventListener("click",()=>{
    loopSnackbar.classList.add("show");
        baselineSnackbar.style.display="flex";
});

leading.addEventListener("click",()=>{
    loopSnackbar.classList.add("show");
        leadingSnackbar.style.display="flex";
});

stacked.addEventListener("click",()=>{
    loopSnackbar.classList.add("show");
    stackedSnackbar.style.display="flex";
});

close.forEach((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
      let parent = closeBtn.closest("div").className;
      switch (parent) {
        case "baseline":
          baselineSnackbar.style.display = "none";
          break;
        case "leading":
          leadingSnackbar.style.display = "none";
          break;
        case "stacked":
          stackedSnackbar.style.display = "none";
          break;
      }
    });
  });