const circle=document.getElementById("circle");
const txt=circle.getElementsByClassName("close")
console.log(`circle`, txt[0].innerText)
const firsat=document.getElementById("firsat")

circle.addEventListener("click",function (event){
    firsat.classList.toggle('active');
    if(txt[0].innerHTML==="Günün Fırsatı"){
        circle.innerHTML=`<p class="close cls">X</p>`;
    }else{
        circle.innerHTML=`<p class="close">Günün Fırsatı</p>`;
        
    }
    
})