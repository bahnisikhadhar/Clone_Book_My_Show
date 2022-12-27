const signButton=document.querySelector(".sign_btn");
const signPopUp=document.querySelector(".sign_pop_up");
const modalClose=document.querySelector(".modalclose");
const phoneNumber=document.querySelector(".phone_num");
const termsCondition=document.querySelector(".terms");
const continueBox=document.querySelector(".continue");
const height=document.querySelector(".height");
const signPopUpVerify=document.querySelector(".sign_pop_up1");
const continueBox1=document.querySelector(".continue1");
const phoneNumVerify=document.querySelector(".phonenum_verify");
const leftChevronIcon=document.querySelector(".leftchevro_icon");
const firstOtpBox=document.querySelector(".otp_box1");
const resendOtp=document.querySelector(".resnd_otp");
const otpBox=document.querySelectorAll(".otp_box");
const invalidMsg=document.querySelector(".invalid_msg");
const rightNavRest=document.querySelector(".right_nav_rest");
const rightNavRest1=document.querySelector(".right_nav_rest1");
const signPopUpContainer=document.querySelector(".sign_pop_up_container");
const signPopUpContainer1=document.querySelector(".sign_pop_up_container1");

let sentOtp;

const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn) {
  rightNavRest.classList.add("display_none");
  rightNavRest1.classList.add("display_flex");
}

signButton.addEventListener("click",()=>{
    signPopUpContainer.classList.add("display_block");
});

modalClose.addEventListener("click",()=>{
    signPopUpContainer.classList.remove("display_block");
})

height.addEventListener("click",()=>{
    phoneNumber.style.borderBottom="1px solid rgb(156, 154, 154)";
    termsCondition.classList.remove("display_none");
    continueBox.classList.remove("display_block");
})
phoneNumber.addEventListener("click",()=>{
    phoneNumber.style.borderBottom="1px solid red";
    termsCondition.classList.add("display_none");
    continueBox.classList.add("display_block");
    
})

phoneNumber.addEventListener("input",(event)=>{
    if(phoneNumber.value.length==13){
        continueBox.classList.add("background_red");
    }else{
        continueBox.classList.remove("background_red");
    }
})

continueBox.addEventListener("click",()=>{
   signPopUpContainer.classList.add("display_none");
   signPopUpContainer1.classList.add("display_block");
    phoneNumVerify.innerText=phoneNumber.value;
    setTimeout(()=>generateOtp(),500); //to genarate otp
})

//----------------------------------------GENERATE OTP----------------------------------------------------


resendOtp.addEventListener("click",generateOtp);

function generateOtp(){
    let digits="0123456789";
    sentOtp="";

    for(let i=0;i<6;i++){
        sentOtp += digits[Math.floor(Math.random()*10)];
    }
    alert(`Your OTP is ${sentOtp}`);
}
//--------------------------------------------CURSOR MOVING IN OTP BOXES-------------------------------------------
  otpBox.forEach((input,index)=>{
    // console.log(input);
    input.dataset.index=index;
    //input.addEventListener("keyup",handleOtp);
  });

//   function handleOtp(event) {
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
//         console.log(enterOtp);
//         console.log(sentOtp);

//         if(enterOtp!==sentOtp){
//             invalidMsg.innerText="invalid otp entered.Please try again";
//             otpBox.forEach((input)=>{
//                 input.value="";
//             })
//         } else{
//             signPopUpContainer1.classList.remove("display_block");
//             rightNavRest.classList.add("display_none");
//             rightNavRest1.classList.add("display_flex");

        
//             localStorage.setItem("isLoggedIn", true);
//         }
//     }
   
// }


//----------------------------------------------------------------------------------------------------------------
  
leftChevronIcon.addEventListener("click",()=>{
    signPopUpContainer.classList.remove("display_none");
   signPopUpContainer1.classList.remove("display_block");
   termsCondition.classList.remove("display_none");
   continueBox.classList.remove("display_block");
})

//-----------------------------------------------------City-pop-up--------------------------------------------------
const hideCity=document.querySelector(".hide");
const viewCity=document.querySelector(".view");
const lowerpartCity=document.querySelector(".lowerpart_city");
const rightNavCityOption=document.querySelector(".right_nav_city");
const rightNavCityOptionPhone=document.querySelector(".right_nav_city1");
const cityPopUp=document.querySelector(".city_pop_up");
const mainBody=document.querySelector("main");
const cityName=document.querySelector(".city_name");
const cityName1=document.querySelector(".city_name1");

viewCity.addEventListener("click",()=>{
  lowerpartCity.classList.add("display_block");
   viewCity.classList.add("display_none");
})

hideCity.addEventListener("click",()=>{
   lowerpartCity.classList.remove("display_block");
   viewCity.classList.remove("display_none");
})

rightNavCityOption.addEventListener("click",()=>{
   cityPopUp.classList.add("display_block");
})


mainBody.addEventListener("click",()=>{
    cityPopUp.classList.remove("display_block");
})

cityPopUp.addEventListener("click",(event)=>{
    if(event.target.classList.contains("cityTrans")){
    cityName.innerText=event.target.innerText;
    }
    else if(event.target.classList.contains("cityimg")){
        cityName.innerText=event.target.alt;
        }
})

// -----------------------------------------HUMBERGER---------------------------------------------------------
const hamburgerLogin=document.querySelector(".hamburger_login");
const hamburger=document.querySelector(".nav_hamburger");
const hamIcon=document.querySelector(".ham_icon");
const hamburger1=document.querySelector(".nav_hamburger1");
const hamburgerSignOut=document.querySelector(".hamburger_signOut");

hamIcon.addEventListener("click",()=>{
   hamburger.classList.add("display_block");
})

mainBody.addEventListener("click",()=>{
    hamburger.classList.remove("display_block");
    hamburger1.classList.add("display_none");
})

hamburgerLogin.addEventListener("click",()=>{
    hamburger.classList.add("display_none");
    signPopUpContainer.classList.add("display_block");

})

rightNavRest1.addEventListener("click",()=>{
 hamburger1.classList.add("display_block");
})

hamburgerSignOut.addEventListener("click",()=>{
    rightNavRest1.classList.remove("display_flex");
    rightNavRest.classList.remove("display_none");
    hamburger1.classList.add("display_none");

    // localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("isLoggedIn");
})


//--------------------------------------------FOR PHONE VIEW----------------------------------------------------

rightNavCityOptionPhone.addEventListener("click",()=>{
    cityPopUp.classList.add("display_block");
})

cityPopUp.addEventListener("click",(event)=>{
    if(event.target.classList.contains("cityTrans")){
    cityName1.innerText=event.target.innerText;
    }
    else if(event.target.classList.contains("cityimg")){
        cityName1.innerText=event.target.alt;
        }
})




//---------------------------------------Signin with Google-----------------------------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw9njQdmjj9CQsP88oTNkF_NC9gdoKNt0",
    authDomain: "auth-54ab3.firebaseapp.com",
    projectId: "auth-54ab3",
    storageBucket: "auth-54ab3.appspot.com",
    messagingSenderId: "1026883799189",
    appId: "1:1026883799189:web:f273ec6a236b747eb9339c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const googleBtn = document.getElementById("google_btn")
googleBtn.addEventListener("click", (e) => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            localStorage.setItem("isLoggedIn", true);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
})