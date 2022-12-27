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
function phoneAuth() {
  let number = document.getElementById('number').value;
  firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
    window.confirmationResult = confirmationResult;
    coderesult = confirmationResult;
    console.log(coderesult);
    console.log('OTP Sent');
  }).catch(function (error) {
    // error in sending OTP
    alert(error.message);
  });
}


// function for OTP verify


function codeverify() {
    let otp_box1 = document.querySelector(".otp_box1").value
    let otp_box2 = document.querySelector(".otp_box2").value
    let otp_box3 = document.querySelector(".otp_box3").value
    let otp_box4 = document.querySelector(".otp_box4").value
    let otp_box5 = document.querySelector(".otp_box5").value
    let otp_box6 = document.querySelector(".otp_box6").value
  let otp = otp_box1 + otp_box2 + otp_box3 + otp_box4 + otp_box5 + otp_box6;
  console.log(otp+"otp")
  coderesult.confirm(otp).then(function () {
    console.log('OTP Verified');
    verifiedUser = true;
    console.log(verifiedUser+"user");
  }).catch(function () {
    console.log('OTP Not correct');
    console.log(verifiedUser+"user");

    invalidMsg.innerText="invalid otp entered.Please try again";
  })
}

codeverify()


// function handleOtp(event) {
//     event.preventDefault();
//     // console.log(event.target.value);
//     const input = event.target;
//     let value = input.value;
//     input.value = "";
//     input.value = value ? value[0] : "";

//     let fieldIndex = input.dataset.index;
//     if (value.length > 0 && fieldIndex < otpBox.length - 1) {
//         input.nextElementSibling.focus();
//     }

//     if (event.key === "Backspace" && fieldIndex > 0) {
//         input.previousElementSibling.focus();
//     }

//     if(fieldIndex==otpBox.length-1){
//         let enterOtp="";
//         otpBox.forEach((input)=>{
//             enterOtp += input.value;
//         })
//         // console.log(enterOtp);
//         // console.log(sentOtp);
//         codeverify()
//         if(enterOtp!==sentOtp){
//             invalidMsg.innerText="invalid otp entered.Please try again";
//             otpBox.forEach((input)=>{
//                 input.value="";
//             })
//         } else{
//             signPopUpVerify.classList.remove("display_block");
//             rightNavRest.classList.add("display_none");
//             rightNavRest1.classList.add("display_flex");

        
//             localStorage.setItem("isLoggedIn", true);
//         }
//     }
   
// }