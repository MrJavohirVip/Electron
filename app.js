const elInput1 = document.querySelector(".inp1")
const elInput2 = document.querySelector(".inp2")
const elInput3 = document.querySelector(".inp3")
//
const Elcr1 = document.querySelector(".incorrect1")
const Elcr2 = document.querySelector(".incorrect2")
const Elcr3 = document.querySelector(".incorrect3")

const elForm = document.querySelector(".form")

const elAb = document.querySelector(".sp")

const elFg = document.querySelector(".btny")


elForm.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    if(elInput1.value.length == 0){
        Elcr1.innerHTML ="Iltimos Gmailni kiriting!"
    }
    else{
        let gmail = elInput1.value
        localStorage.setItem("gmail",gmail)
        Elcr1.innerHTML =""  
    }
    if(elInput2.value.length == 0){
        Elcr2.innerHTML ="Iltimos nicknameni kiriting!"
    }
    else{  
        let nickname = elInput2.value
        localStorage.setItem("username",nickname)
        Elcr2.innerHTML =""
    }
    if(elInput3.value.length == 0|| elInput3.value.length < 8){
        Elcr3.innerHTML ="Iltimos parol 8-tadan Ko'p bo'lsin!"
    }
    else{
        let password = elInput3.value
        localStorage.setItem("password",password)
        Elcr3.innerHTML =""

    }
    // else


    
    if(elInput1.value.length > 0 && elInput2.value.length > 0 && elInput3.value.length >= 8){
    // inputlarni tozalash
    let nickname = elInput2.value
    elInput1.value = ""
    elInput2.value = ""
    elInput3.value = ""

    // sahifani avtomatik almashtirish
    window.location.href = "index.html"
    
    
}

    
})
elAb.innerHTML =localStorage.getItem("username")
