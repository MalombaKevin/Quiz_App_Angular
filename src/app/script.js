// getting all required elements
const btn = document.querySelector(".btn a");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart")

// start quiz button is clicked
btn.onClick = ()=>{
    info_box.classList.add("activeInfo");
}

//if exit button is clicked
exit_btn.onClick =()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
}