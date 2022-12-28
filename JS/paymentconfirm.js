const taptopay = document.querySelector(".taptoPay");
const paymentcontainer = document.querySelector(".payment_container");
const paymentModal = document.querySelector(".payment_modal");
const paymentbackground_image = document.querySelector(
  ".paymentbackground_image"
);

const cardName = document.getElementById('card_name')
const cardcvv = document.getElementById('card_cvv')
const cardnumber = document.getElementById('card_number')


cardName.addEventListener('input',(e)=>{
taptopay.classList.add('display_block')
taptopay.classList.add('disabled')


})
// checkValue()


// function checkvalue(){
//   if( cardName.value.length == 0  && cardcvv.value.length == 0 && cardnumber.value.length == 0) {
//     taptopay.classList.add('disabled');
//   }
//   else{

//   }
// }



function check(){
  cardcvv.addEventListener('input',()=>{
    if( cardcvv.value.length !== 3  ){
      taptopay.classList.add('disabled')
    }else{
      taptopay.classList.add('display_block')
      taptopay.classList.remove('disabled')
    }
  })
  cardnumber.addEventListener('input',()=>{
    if(cardnumber.value.length !== 16){
      taptopay.classList.add('disabled')
    }else{
      taptopay.classList.add('display_block')
      taptopay.classList.remove('disabled')
    }
  })
}

check()



taptopay.addEventListener("click", (e) => {
  e.preventDefault();
  paymentcontainer.style.display = "none";
  paymentbackground_image.src = "../Images/Screenshot_20221223_135940.png";
  setInterval(function () {
    paymentModal.style.display = "block";
  }, 800);
});


// function checkValue(){
//   if(cardcvv.value.length == 3 && cardnumber.value.length == 16){
//     taptopay.classList.add('display_block')
//     taptopay.classList.remove('disabled')
//   }
// }

// if(cardName.value == 1 && cardcvv.value == 1  && cardnumber == 1){
//   taptopay.classList.remove('disabled')
//   // taptopay.classList.add('taptoPay')
//   // taptopay.classList.add('display_block')
 
// }

// function checkDetails(){
//   if(cardName.value == "" || cardcvv.value == "" || cardnumber == ""){
//     taptopay.classList.add('disabled')
//     taptopay.classList.remove('taptoPay')
//   }else if(cardName.value != "" && cardcvv.value != "" || cardnumber != "" ){
//     taptopay.classList.remove('disabled')
//     taptopay.classList.add('taptoPay')
   
//   }
// }



