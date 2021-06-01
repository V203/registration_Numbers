// alert("we good")


const buttonAdd  = document.querySelector(".buttonAdd");
const buttonShowAll = document.querySelector(".buttonShowAll");
const buttonClear = document.querySelector(".buttonClear")
const input_ = document.querySelector(".inputField");
const show = document.querySelector(".show");
const selection = document.querySelector(".selection")
const thePlates = document.querySelector(".thePlates")
const ca_out = document.querySelector(".ca_out")
const cw_out = document.querySelector(".cw_out")
const cy_out = document.querySelector(".cy_out")
const error_out = document.querySelector(".error_out")

var RgNm_ = RgNm()

buttonAdd.addEventListener("click",function(){
    RgNm_.setPlates(input_.value)
    // error_out.innerHTML= 
    RgNm_.setPlates(input_.value) !== undefined ? error_out.innerHTML = RgNm_.setPlates(input_.value):"";
     
    cw_out.innerHTML = RgNm_.getCW()
    ca_out.innerHTML = RgNm_.getCA()
    cy_out.innerHTML = RgNm_.getCY()
    
    
})

buttonShowAll.addEventListener("click",function(){
alert("buttonShowAll working");

})

buttonClear.addEventListener("click",function(){
    localStorage.clear()
    location.reload()

})



