
var buttonAdd = document.querySelector(".buttonAdd");
var buttonShowAll = document.querySelector(".buttonShowAll");
var buttonClear = document.querySelector(".buttonClear")
var input_ = document.querySelector(".inputField");
var show = document.querySelector(".show");
var selection = document.querySelector(".selection").value
var thePlates = document.querySelector(".thePlates")
var ca_out = document.querySelector(".ca_out")
var cw_out = document.querySelector(".cw_out")
var cy_out = document.querySelector(".cy_out")
var error_out = document.querySelector(".error_out")
var all_out = document.querySelector(".all_out")
var show_nowBtn = document.querySelector(".show_now")
var display = document.querySelector(".display")


var plateAll;






var RgNm_ = RgNm(plateAll)




buttonAdd.addEventListener("click", function () {


    RgNm_.setPlates(input_.value) !== undefined ? setTimeout(() => { error_out.innerHTML = "" }, 3000) + " " + (error_out.innerHTML = RgNm_.setPlates(input_.value)) : "";
})

buttonShowAll.addEventListener("click", function () {

   RgNm_.allArrs()


})

buttonClear.addEventListener("click", function () {
    localStorage.clear()
    location.reload()

})



show_nowBtn.addEventListener("click", function () {
    
    if (selection === "capeTown") {
    //    document.body.innerHTML = ""
    thePlates.classList.remove("visible")
        RgNm_.getCA()


    }

})
