// alert("we good")


const buttonAdd  = document.querySelector(".buttonAdd");
const buttonShowAll = document.querySelector(".buttonShowAll");
const buttonClear = document.querySelector(".buttonClear")
const input_ = document.querySelector(".inputField");
const show = document.querySelector(".show");
const selection = document.querySelector(".selection")

var RgNm_ = RgNm()

buttonAdd.addEventListener("click",function(){
    RgNm_.setPlates("CA 955-565")
    alert( RgNm_.getAll())
    
})

buttonShowAll.addEventListener("click",function(){
alert("buttonShowAll working");

})

buttonClear.addEventListener("click",function(){
    localStorage.clear()
    location.reload()

})



