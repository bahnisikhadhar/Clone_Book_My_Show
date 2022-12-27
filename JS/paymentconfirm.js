const taptopay = document.querySelector('.taptoPay')
const paymentcontainer = document.querySelector('.payment_container')
const paymentModal = document.querySelector('.payment_modal')
const paymentbackground_image = document.querySelector(".paymentbackground_image")


taptopay.addEventListener('click',(e)=>{
    e.preventDefault()
    paymentcontainer.style.display ="none"
    paymentModal.style.display ="block"
    paymentbackground_image.src = "../Images/Screenshot_20221223_135940.png"

    

})