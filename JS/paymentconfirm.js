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

let cardnumlen = 16
let cvvlen = 3

cardnumber.addEventListener('input', () => {
  if (cardnumber.value.length === cardnumlen && cardcvv.value.length === cvvlen) {
    taptopay.classList.add('display_block');
    disabled.classList.add("display_none");
  } else {
    taptopay.classList.remove('display_block');
    disabled.classList.remove("display_none");
  }
});

cardcvv.addEventListener('input', () => {
  if (cardnumber.value.length === cardnumlen && cardcvv.value.length === cvvlen) {
    taptopay.classList.add('display_block');
    disabled.classList.add("display_none");
  } else {
    taptopay.classList.remove('display_block');
    disabled.classList.remove("display_none");
  }
});

taptopay.addEventListener("click", (e) => {
  e.preventDefault();
  paymentcontainer.style.display = "none";
  paymentbackground_image.src = "../Images/Screenshot_20221223_135940.png";
  setInterval(function () {
    paymentModal.style.display = "block";
  }, 1000);
});





