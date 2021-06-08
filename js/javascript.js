
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


var plateAll;



if (localStorage["store"]) {
// plateAll = JSON.parse(localStorage.getItem("store"))
}
var RgNm_ = RgNm(plateAll)

// alert(store.getCA())



buttonAdd.addEventListener("click", function () {


    RgNm_.setPlates(input_.value) !== undefined ? setTimeout(() => { error_out.innerHTML = "" }, 3000) + " " + (error_out.innerHTML = RgNm_.setPlates(input_.value)) : "";


    if(RgNm_.getCA()){
        makePlate(RgNm_.getCA())
    
    }
     if(RgNm_.getCW()){
        makePlate(RgNm_.getCW())
    } if(RgNm_.getCY()){
        makePlate(RgNm_.getCY())
    }
    

    function makePlate (par1){
    let div_ = document.createElement("div")

    div_.appendChild(document.createTextNode(par1))
    div_.className = "thePlates"
    
    document.body.insertBefore(div_, show_nowBtn)

}



    // if () {
    //     let div_ = document.createElement("div")

    //     // div_.appendChild(document.createTextNode(RgNm_.getCY()))
    //     div_.className = "thePlates"
    //     div_.innerText = RgNm_.getCY()
    //     document.body.insertBefore(div_, show_nowBtn)
    // }





    // if (RgNm_.getCA()) {
    //     let div_ = document.createElement("div")

    //     div_.appendChild(document.createTextNode(RgNm_.getCA()))
    //     div_.className = "thePlates"
    //     document.body.insertBefore(div_, show_nowBtn)
    // } if (RgNm_.getCW()) {
    //     let div_ = document.createElement("div")

    //     div_.appendChild(document.createTextNode(RgNm_.getCW()))
    //     div_.className = "thePlates"
    //     document.body.insertBefore(div_, show_nowBtn)




    // }

    localStorage.setItem("storeCA",JSON.stringify(RgNm_.getCA()));
    localStorage.setItem("storeCY",JSON.stringify(RgNm_.getCY()));
    localStorage.setItem("storeCW",JSON.stringify(RgNm_.getCW()));


cy_out.innerHTML = JSON.parse(localStorage.getItem("storeCY"));
ca_out.innerHTML = JSON.parse(localStorage.getItem("storeCA"));
cw_out.innerHTML = JSON.parse(localStorage.getItem("storeCW"));

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

