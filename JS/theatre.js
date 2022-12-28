const id = new URLSearchParams(window.location.search).get("id");

const booking_head_el = document.querySelector(".booking_head");
const booking_filter_el = document.querySelector(".booking_filter");
let seatsToBookEl = document.querySelector(".seatstobook");

let Api_key = "api_key=57b428c0e112b579eb26e2f43ff08b0f";
let Base_Url = "https://api.themoviedb.org/3/";
// ========================================FOR FETCHING DATA FROM JSON ==============================================

const bookingCont = document.querySelector(".theatre_location");
const workshopContainer = document.querySelector(".workshop");

const renderDetails = async () => {
  const res = await fetch(`${Base_Url}movie/${id}?${Api_key}`); // Fetching Specific Movie Details using id
  const movieData = await res.json();
  console.log(movieData);
  const { original_title, genres, spoken_languages, adult } = movieData;

  const template = `
  
  <div class="booking_title">
  
    <p class="movie_title"><a href="../HTML/movieExpanded.html?id=${id}"> <i class="fa-solid fa-less-than movie_back" ></i></a> ${original_title} -${spoken_languages[0].english_name}</p>
  </div>
  <div class="booking_genere container">
    <i class="fa-brands fa-umbraco"></i>
    <span class="genere">${genres[0].name}</span>
    <span class="genere">${genres[1].name}</span>
  
  </div>
  
  
  
  `;
  booking_head_el.innerHTML = template;

  const template2 = `
  
  <p class="moviefilter"> ${spoken_languages[0].english_name}-2D</p>
  <select class="movie_filter">
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
  </select>
  <select class="movie_filter">
    <option value="">Filter Price Range</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
  </select>
  <select class="movie_filter">
    <option value="">Filter Show Timing</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
    <option value="">Filter Sub Region</option>
  </select>
</div>
  
  
  
  `;
  booking_filter_el.innerHTML = template2;

  //   <header class="booking_head">
  //   <div class="booking_title container">
  //     <p class="movie_title">Drishyam 2 - Hindi</p>
  //   </div>
  //   <div class="booking_genere container">
  //     <i class="fa-brands fa-umbraco"></i>
  //     <span class="genere">DRAMA</span>
  //     <span class="genere">MYSTERY</span>
  //     <span class="genere">THRILLER</span>
  //   </div>
  // </header>
};
async function getLiveEvents() {
  let url = "../JSON/theatre.json";
  const res = await fetch(url);
  const data = await res.json();
  let theatre = data.theatres;
  let theatreTime = data.theatres.Time;
  let template = "";
  theatre.forEach((ele) => {
    let template2 = "";
    let timeslots = ele.Time;
    timeslots.forEach((ele) => {
      template2 += `
          <div class="timing">
              <span class="booking_timing">${ele}</span>
              <p class="booking_flexibility"><span> <i class="fa-solid fa-circle"></i></span>Cancellation Available</p>
          </div>
          `;
    });
    template += `<div class="booking_location container">
    <div class="heart"><i class="fa-regular fa-heart"></i></div>
    <div>
    
      <p class="theatre_name"> ${ele.theatreName}</p>
      <div>
        <span class="mTicket" ><i class="fa-solid fa-mobile-retro"></i> M-Ticket</span>
        <span class="foodbevrages"><i class="fa-solid fa-burger"></i>Food And Beverages</span>
      </div>
      
    </div>

    <span class="info">
      <i class="fa-solid fa-circle-info"></i>
      <span>INFO</span>
    </span>
 
       <div class="movie_timing cursor">
        ${template2}
       </div>
 
 
 
     </div>
      `;
  });

  bookingCont.innerHTML += template;
}
getLiveEvents();

// ========================================================FOR FETCHING DATA FROM JSON===================================

// ==========================================================FOR DISPLAY MODAL===========================================

let seat = document.getElementById("one");
const seats = document.querySelectorAll(".seats");
const vechile = document.getElementById("vechile");

let chooseseats = document.querySelector(".chooseseats");

chooseseats.addEventListener("mouseover", (e) => {
  // console.log(e.target)
  if (e.target.innerText == "1") {
    vechile.src = "../Images/bycycle.png";
  } else if (e.target.innerText == "2") {
    vechile.src = "../Images/scooter.png";
  } else if (e.target.innerText == "3") {
    vechile.src = "../Images/auto.png";
  } else if (e.target.innerText == "4") {
    vechile.src = "../Images/minicar.png";
  } else if (e.target.innerText == "5") {
    vechile.src = "../Images/car.png";
  } else {
    vechile.src = "../Images/bus.png";
  }
});

let seatCount = [];
chooseseats.addEventListener("click", (e) => {
  if (e.target.classList.contains("seats")) {
    if (seatCount.length > 0) {
      let temp = seatCount.shift();
      temp.classList.remove("backgroundcolorRed");
    }
    seatCount.push(e.target);
  }
  seatCount.forEach((el) => {
    el.classList.add("backgroundcolorRed");
  });
});

const cut = document.getElementById("cut");
const termsandconditions = document.querySelector(".termsandconditions_body");
const cancelTermsAndConditions = document.querySelector(".cancel");
const accept = document.querySelector(".accept");
const chooseseatModal = document.querySelector(".chooseseats_body");
const time = document.querySelector(".movie_timing");
const theatrelocation = document.querySelector(".theatre_location");

cut.addEventListener("click", () => {
  termsandconditions.style.display = "none";
});

cancelTermsAndConditions.addEventListener("click", () => {
  termsandconditions.style.display = "none";
});

accept.addEventListener("click", () => {
  termsandconditions.style.display = "none";
  chooseseatModal.style.display = "block";
});

theatrelocation.addEventListener("click", (e) => {
  if (e.target.classList.contains("booking_timing")) {
    termsandconditions.style.display = "block";
  }
});

const seatToChoose_button_EL = document.querySelector(".seatToChoose_button");
seatsToBookEl.addEventListener("click", (e) => {
  let numSeats = e.target.innerText;
  sessionStorage.setItem("numSeats", numSeats);
  // window.location.href = `../HTML/seat.html?id=${id}&seats=${numSeats}` ;
});
seatToChoose_button_EL.addEventListener("click", function () {
  const url = `../HTML/seat.html?id=${id}`;

  // Navigate to the next page
  window.location.href = url;
});
// ==================================================FOR DISPLAY MODAL====================================================

// async function getLiveEvents() {
//     let url = "theatre.json"
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data)
//     let theatre = data.theatres
//     let theatreTime = data.theatres.Time;
//     console.log(theatreTime)
//     let template = ""
//     let template2= ""
//     theatre.forEach((ele) => {
//         let timeslots = ele.Time;
//         template += `
//   <div class = "workshop-events">
//    <h1>${ele.theatreName}</h1>
//   </div>
//       `
//       timeslots.forEach((ele)=>{
//         template +=`<p>${ele}</p>`
//     })
//     })
//     // workshopContainer.innerHTML = template;
//     workshopContainer.innerHTML += template
// }
// getLiveEvents()

window.addEventListener("DOMContentLoaded", () => renderDetails());
