
var buttonAdd = document.querySelector(".buttonAdd");
var buttonShowAll = document.querySelector(".buttonShowAll");
var buttonClear = document.querySelector(".buttonClear")
var input_ = document.querySelector(".inputField");
var show = document.querySelector(".show");
var selection = document.querySelector(".selection")
var thePlates = document.querySelector(".thePlates")
var ca_out = document.querySelector(".ca_out")
var cw_out = document.querySelector(".cw_out")
var cy_out = document.querySelector(".cy_out")
var error_out = document.querySelector(".error_out")
var all_out = document.querySelector(".all_out")
var show_nowBtn = document.querySelector(".show_now")



var RgNm_ = RgNm()
// var plateAll = {}


buttonAdd.addEventListener("click", function () {

    RgNm_.setPlates(input_.value) !== undefined ? setTimeout(() => { error_out.innerHTML = "" }, 3000) + " " + (error_out.innerHTML = RgNm_.setPlates(input_.value)) : "";

    // var plateAll_ = JSON.stringify(plateAll)
    // localStorage.setItem("plates",plateAll_)
  
        if (RgNm_.getCY()){
            // var div_ = document.createElement("div")
            
            // div_.appendChild(document.createTextNode(RgNm_.getCY().toString()))
            // div_.className = "thePlates"
            // document.body.insertBefore(div_, show_nowBtn)
        }

    



     if (RgNm_.getCA()) {
        ca_out.innerHTML = RgNm_.getCA()
    }  if (RgNm_.getCW()) {

        cw_out.innerHTML = RgNm_.getCW()

    }



})

buttonShowAll.addEventListener("click", function () {
    all_out.innerHTML = RgNm_.getAll()

})

buttonClear.addEventListener("click", function () {
    localStorage.clear()
    location.reload()

})
show_nowBtn.addEventListener("click", function () {

    // if (RgNm_.getCY()) {
    //     if (RgNm_.getCY() === RgNm_.getCY()) {
    //         var div_ = document.createElement("div")
    //         var txt = document.createTextNode(RgNm_.getCY().toString())
    //         div_.appendChild(txt)
    //         document.body.insertBefore(div_, show_nowBtn)
    //     }

    // }



    // if (RgNm_.getCA()) {
    //     ca_out.innerHTML = RgNm_.getCA()
    // } if (RgNm_.getCW()) {
    //     cw_out.innerHTML = RgNm_.getCW()

    // }



})



