const taptopay = document.querySelector(".taptoPay");
const disabled = document.querySelector(".disabled");
const paymentcontainer = document.querySelector(".payment_container");
const paymentModal = document.querySelector(".payment_modal");
const paymentbackground_image = document.querySelector(
  ".paymentbackground_image"
);

const cardName = document.getElementById("card_name");
const cardcvv = document.getElementById("card_cvv");
const cardnumber = document.getElementById("card_number");

function conditionCheck() {
  cardName.addEventListener("input", (e) => {
    disabled.classList.add("display_block");
  });
  cardcvv.addEventListener("input", (e) => {
    disabled.classList.add("display_block");
  });
  cardnumber.addEventListener("input", (e) => {
    disabled.classList.add("display_block");
  });
}
conditionCheck() 

let cardnumlen = 16
let cvvlen = 3
cardnumber.addEventListener('input',()=>{
      if(cardnumber.value.length != cardnumlen  && cardcvv.value.length != cvvlen){
        disabled.classList.add("display_block");
      }else{
        taptopay.classList.add('display_block') 
        disabled.classList.add("display_none");
      }
    })

cardcvv.addEventListener('input',()=>{
      if( cardnumber.value.length != cardnumlen && cardcvv.value.length != cvvlen ){
        disabled.classList.add("display_block");
      }else{
        taptopay.classList.add('display_block') 
        disabled.classList.add("display_none");
      }
    })


    taptopay.addEventListener("click", (e) => {
      e.preventDefault();
      paymentcontainer.style.display = "none";
      paymentbackground_image.src = "../Images/Screenshot_20221223_135940.png";
      setInterval(function () {
        paymentModal.style.display = "block";
      }, 1000);
    });
    
    











// function checkvalue(){
//   if(!cardcvv.value.length   && !cardnumber.value.length && !cardName.value.length ){
//       taptopay.classList.add('display_block')
    
//   }
//   else{
//     disabled.classList.add("display_block");
//   }
// }

// checkvalue()


// function check(){
//   cardnumber.addEventListener('input',()=>{
//     if(cardnumber.value.length !== 16){
//       disabled.classList.add("display_block");
//     }else{
      
//       taptopay.classList.add('display_block')
//       disabled.classList.add("display_none");
//     }
//   })
//   cardcvv.addEventListener('input',()=>{
//     if( cardcvv.value.length !== 3  ){
//       disabled.classList.add("display_block");
//     }else{
//       taptopay.classList.add('display_block')
//       disabled.classList.add("display_none");
     
//     }
//   })
// }

// check()


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
