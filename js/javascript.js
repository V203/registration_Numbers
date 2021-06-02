// alert("we good")


var buttonAdd  = document.querySelector(".buttonAdd");
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

var RgNm_ = RgNm()

buttonAdd.addEventListener("click",function(){
    // RgNm_.setPlates(input_.value)
    // error_out.innerHTML= 
    RgNm_.setPlates(input_.value) !== undefined ? setTimeout(()=>{error_out.innerHTML =""},3000)+" "+(error_out.innerHTML = RgNm_.setPlates(input_.value)) :"";
     
    // var newDiv =document.createElement("div")
     cw_out.innerHTML =  RgNm_.getCW()
    ca_out.innerHTML = RgNm_.getCA()
    cy_out.innerHTML = RgNm_.getCY()
    //  newDiv.appendChild(newText)
    // document.body.insertBefore(newDiv,error_out)
    
})

buttonShowAll.addEventListener("click",function(){
all_out.innerHTML = RgNm_.getAll()

})

buttonClear.addEventListener("click",function(){
    localStorage.clear()
    location.reload()

})



