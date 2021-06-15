
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
var display = document.querySelector(".display")


var plateAll;


if(localStorage["store"]){
plateAll = JSON.parse(localStorage.getItem("store"))
} 

console.log(plateAll)

var RgNm_ = RgNm(plateAll)
addEventListener("load", e=>{
    makePlate(plateAll)
})


buttonAdd.addEventListener("click", function () {

   
    RgNm_.setPlates(input_.value) !== undefined ? setTimeout(() => { error_out.innerHTML = "" }, 3000) + " " + (error_out.innerHTML = RgNm_.setPlates(input_.value)) : "";
    localStorage.setItem("store",JSON.stringify(RgNm_.allArrs()))
    
    makePlate(RgNm_.allArrs())
})

buttonShowAll.addEventListener("click", function () {

   makePlate(RgNm_.allArrs())



})

buttonClear.addEventListener("click", function () {
    window.localStorage.clear()
    window.location.reload()

})




show_nowBtn.addEventListener("click", function () {
    
    if (selection.value === "capeTown") {
    
        return eachFun(RgNm_.getCAarr())

    }else if (selection.value === "bellville") {
    
        return  eachFun(RgNm_.getCYarr())

    } else if (selection.value === "worcester") {
    
      return  eachFun(RgNm_.getCWarr())

}
})

function eachFun(parArr){
    display.innerHTML=""
    // for(var i = 0;i< parArr.length;i++){
        for(let i of parArr){
        let div= document.createElement("span")
       div.innerText = i
       div.className = "thePlates"
       display.appendChild(div)
       

    }

}


function makePlate(par1) {
    display.innerHTML = ""
    // for(let i = 0;i < par1.length;i++){
        for(let i of par1){
    let div_ = document.createElement("span")
    div_.innerHTML = i    
    
    display.appendChild(div_)
    div_.className = "thePlates"
}
    // document.body.insertBefore(div_, display)
    // display.innerHTML = div_
}
