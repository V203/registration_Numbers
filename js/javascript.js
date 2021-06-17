
let buttonAdd = document.querySelector(".buttonAdd");
let buttonShowAll = document.querySelector(".buttonShowAll");
let buttonClear = document.querySelector(".buttonClear");
let input_ = document.querySelector(".inputField");
let show = document.querySelector(".show");
let selection = document.querySelector(".selection");
let thePlates = document.querySelector(".thePlates");
let error_out = document.querySelector(".error_out");
let show_nowBtn = document.querySelector(".show_now");
let display = document.querySelector(".display");
let confirm_out = document.querySelector(".confirm_out")

let plateAll;


if(localStorage["store"]){
plateAll = JSON.parse(localStorage.getItem("store"));
} 
let RgNm_ = RgNm(plateAll)
window.addEventListener("load", e=>{
    makePlate(plateAll)
})

buttonAdd.addEventListener("click", function () {
     if(RgNm_.setPlates(input_.value) ){
        error_out.innerText = RgNm_.setPlates(input_.value)+" "+setTimeout(()=>{error_out.innerHTML=""},3000)
   }else if(!!RgNm_.setPlates(input_.value)){
       
       let str = " successfully added."
     confirm_out.innerHTML = input_.value.toUpperCase() +str+" "+setTimeout(()=>{confirm_out.innerHTML=""},3000)
   }
    makePlate(RgNm_.getPlates())
    localStorage.setItem("store",JSON.stringify(RgNm_.getPlates()))
});

buttonShowAll.addEventListener("click", function () {
   makePlate(RgNm_.getPlates())
});

buttonClear.addEventListener("click", function () {
    window.localStorage.clear()
    window.location.reload()
});




show_nowBtn.addEventListener("click", function () {
    
let plateAll_ = RgNm_.getPlates()
let caArr=[]
let cwArr =[]
let cyArr =[]


for(let i = 0;i< plateAll_.length;i++){
    if(plateAll_[i].startsWith("CA")){
        caArr.push(plateAll_[i])
    }else if(plateAll_[i].startsWith("CW")){
        cwArr.push(plateAll_[i])
    }else{
        cyArr.push(plateAll_[i])
    }

}

    if(selection.value === "capeTown"){
        display.innerHTML = ""
        
        return makePlate(caArr);
    }else if(selection.value === "bellville"){
        display.innerHTML = ""
        return makePlate(cyArr);
    }else if(selection.value === "worcester"){
        display.innerHTML = ""
        return makePlate(cwArr);
    }else if(selection.value === ""){
     return error_out.innerHTML = "Select a town by clicking on the selection drop down menu"+""+setTimeout(()=>{error_out.innerHTML=""},3500)
    }
})



///////////////////////////////////////////////////////////////////////////////




function makePlate(par1) {
    display.innerHTML = ""
    for(let i = 0;i < par1.length;i++){
    let div_ = document.createElement("span")
    div_.innerHTML = par1[i]        
    display.appendChild(div_)
    div_.className = "thePlates"
    }
}
