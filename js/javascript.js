// alert("we good")


const buttonAdd  = document.querySelector(".buttonAdd");
const buttonShowAll = document.querySelector(".buttonShowAll");
const buttonClear = document.querySelector(".buttonClear")
const input_ = document.querySelector(".inputField");
const show = document.querySelector(".show");
const selection = document.querySelector(".selection")

buttonAdd.addEventListener("click",function(){
    alert(selection.value)
    
})

buttonShowAll.addEventListener("click",function(){
alert("buttonShowAll working");

})

buttonClear.addEventListener("click",function(){
    localStorage.clear()
    location.reload()

})




