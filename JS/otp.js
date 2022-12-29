let verifiedUser = false;

const firebaseConfig = {
  apiKey: "AIzaSyAw9njQdmjj9CQsP88oTNkF_NC9gdoKNt0",
  authDomain: "auth-54ab3.firebaseapp.com",
  projectId: "auth-54ab3",
  storageBucket: "auth-54ab3.appspot.com",
  messagingSenderId: "1026883799189",
  appId: "1:1026883799189:web:f273ec6a236b747eb9339c"
};
firebase.initializeApp(firebaseConfig);
render();
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  recaptchaVerifier.render();
}



// function for send OTP
function phoneAuth(phoneNum) {

  let number = phoneNum ?? document.getElementById('number').value;

  firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
    window.confirmationResult = confirmationResult;
    coderesult = confirmationResult;
    console.log(coderesult);
    console.log('OTP Sent');
  }).catch(function (error) {
    alert(error.message);
  });
}


// function for OTP verify


function codeverify() {

  const signPopUpContainer1 = document.querySelector(".sign_pop_up_container1");
  const rightNavRest = document.querySelector(".right_nav_rest");
  const rightNavRest1 = document.querySelector(".right_nav_rest1");
  const signPopUpContainer = document.querySelector(".sign_pop_up_container");
  const invalidMsg = document.querySelector(".invalid_msg");
  const leftChevronIcon = document.querySelector(".leftchevro_icon");

  let otp_box1 = document.querySelector(".otp_box1").value
  let otp_box2 = document.querySelector(".otp_box2").value
  let otp_box3 = document.querySelector(".otp_box3").value
  let otp_box4 = document.querySelector(".otp_box4").value
  let otp_box5 = document.querySelector(".otp_box5").value
  let otp_box6 = document.querySelector(".otp_box6").value
  let otp = otp_box1 + otp_box2 + otp_box3 + otp_box4 + otp_box5 + otp_box6;

  console.log(otp + " otp")
  coderesult.confirm(otp).then(function () {
    verifiedUser = true;
    signPopUpContainer1.classList.remove("display_block");
    rightNavRest.classList.add("display_none");
    rightNavRest1.classList.add("display_flex");
    localStorage.setItem("isLoggedIn", true);
  }).catch(function () {
    console.log('OTP Not correct');
   
    invalidMsg.innerText = "invalid otp entered.Go to Previous Page and Try Again";
    setTimeout(()=>{
      console.log("hi")
      const invalidMsg = document.querySelector(".invalid_msg");
      invalidMsg.innerText = "";
    },2000);

    leftChevronIcon.addEventListener("click",()=>{
      signPopUpContainer.classList.remove("display_none");
     signPopUpContainer1.classList.remove("display_block");
     termsCondition.classList.remove("display_none");
     continueBox.classList.remove("display_block");
  })
  })
}


//------------------------------To move through the otp boxes automatically---------------------------------------

const otpBox = document.querySelectorAll(".otp_box");
otpBox.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("keyup", handleOtp);

});

function handleOtp(event) {
  event.preventDefault();
  const input = event.target;
  console.log(event.target.value);
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  let fieldIndex = input.dataset.index;
  if (value.length > 0 && fieldIndex < otpBox.length - 1) {
    input.nextElementSibling.focus();
  }

  if (event.key === "Backspace" && fieldIndex > 0) {
    input.previousElementSibling.focus();
  }
}

