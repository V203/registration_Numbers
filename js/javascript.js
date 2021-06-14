
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


var plateAllDom = [];



if (localStorage["store"]) {
plateAllDom = JSON.parse(localStorage["store"])
}
var RgNm_ = RgNm(plateAllDom)





buttonAdd.addEventListener("click", function () {

    makePlate(input_.value)
    // RgNm_.regCheck(input_.value) ? "" :setTimeout(()=>{error_out.innerHTML=""},3000)+" "+(error_out.innerHTML= RgNm_.regCheck(input_.value));
    

    localStorage.setItem("store",JSON.stringify(RgNm_.regCheck()));
   
    // RgNm_.setPlates(input_.value) !== undefined ? setTimeout(() => { error_out.innerHTML = "" }, 3000) + " " + (error_out.innerHTML = RgNm_.setPlates(input_.value)) : "";
//    alert(RgNm_.getHolder())
})



buttonShowAll.addEventListener("click", function () {

    alert(RgNm_.getHolder()) 

})
// localStorage.setItem("store",JSON.stringify(RgNm_.fetchEverything()))

buttonClear.addEventListener("click", function () {
    localStorage.clear()
    location.reload()

})




show_nowBtn.addEventListener("click", function () {
    
    

})


function makePlate(par1) {
    RgNm_.regCheck(par1)
    for(var i =0;i < RgNm_.getRegCheck().length;i++){
        var div_ = document.createElement("span")
    div_.innerHTML = RgNm_.getRegCheck()[i]
    div_.className = "thePlates"
    
    }
    document.body.insertBefore(div_, error_out)
    

<<<<<<< HEAD
    "I"

})
=======
}
>>>>>>> 04fcce074154f50439b486c51de371f47312f7da
