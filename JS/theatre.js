const id = new URLSearchParams(window.location.search).get("id");

const booking_head_el = document.querySelector(".booking_head");
const booking_filter_el = document.querySelector(".booking_filter")
let seatsToBookEl = document.querySelector(".seatstobook")
const datesContainerEl = document.querySelector(".dates")

let Api_key = "api_key=57b428c0e112b579eb26e2f43ff08b0f"
let Base_Url = "https://api.themoviedb.org/3/"
// ========================================FOR FETCHING DATA FROM JSON ==============================================

const bookingCont = document.querySelector(".theatre_location");
const workshopContainer = document.querySelector(".workshop");

// const res = await fetch(`/shows?date=27/12/2022`);
// const data = await res.json();
// let theatre = data.data.theatres;
let currentTheatreName = '';

const renderDetails = async () => {
  const res = await fetch(`${Base_Url}movie/${id}?${Api_key}`); // Fetching Specific Movie Details using id
  const movieData = await res.json()
  // console.log(movieData)
  const { original_title, genres, spoken_languages, adult } = movieData;

  const template = `
  
  <div class="booking_title">
  
    <p class="movie_title"><a href="../HTML/movieExpanded.html?id=${id}"> <i class="fa-solid fa-less-than movie_back" ></i></a> <span> ${original_title} -${spoken_languages[0].english_name}</span></p>
  </div>
  <div class="booking_genere container">
    <i class="fa-brands fa-umbraco"></i>
    <span class="genere">${genres[0].name}</span>
    <span class="genere">${genres[1].name}</span>
  
  </div>
  
  
  
  `
  booking_head_el.innerHTML = template

  const template2 = `
  
  <p class="moviefilter">${spoken_languages[0].english_name}-2D</p>
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
  
  
  
  `
  booking_filter_el.innerHTML = template2


}


// const bookingDays = document.querySelectorAll(".booking_day");

// bookingDays.forEach((bookingDay) => {
//   bookingDay.addEventListener("click", (event) => {
//     let selectedDate = event.target.getAttribute("data-date");
//     console.log(selectedDate)
//     getLiveEvents(selectedDate);
//   });
// });

async function getLiveEvents(date) {
  //let url = "../JSON/theatre.json";
  //let date = '23/12/2022'
  const res = await fetch(`https://lackadaisical-salt-radium.glitch.me/shows?date=${date}`);
  const data = await res.json();
  // console.log(data);
  let theatre = data.data.theatres;
  //let theatreTime = data.theatres.Time;
  let today = new Date();
  let dates = [today];
  for (let i = 1; i <= 5; i++) {
    let nextDay = new Date();
    nextDay.setDate(today.getDate() + i);
    dates.push(nextDay);
  }
  let dateTemplate = `<i class="fa-solid fa-less-than"></i>`;

  dates.forEach((date) => {
    let day = date.toLocaleString("en-us", { month: "short" });
    let month = date.toLocaleString("en-us", { month: "short" });
    let dateNumber = date.getDate();

    dateTemplate += `
    <div class="booking_day" data-date="${date.toISOString()}">
      <p class="month">${month}</p>
      <p class="date">${dateNumber}</p>
     
    </div>
  `;
  });

  dateTemplate += `<i class="fa-solid fa-greater-than"></i>`;

  datesContainerEl.innerHTML = dateTemplate;
  let template = "";
  theatre.forEach((ele) => {
    let template2 = "";
    let timeslots = ele.Time;
    timeslots.forEach((ele1) => {
      template2 += `
          <div class="timing">
              <span class="booking_timing ${ele.id}">${ele1}</span>
              <p class="booking_flexibility"><span> <i class="fa-solid fa-circle"></i></span>Cancellation Available</p>
          </div>
          `;
    });
    template +=
      `<div class="booking_location container">
    <div class="heart"><i class="fa-regular fa-heart"></i></div>
    <div>
      <p class="theatre_name ${ele.theatreName}">${ele.theatreName}</p>
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

  bookingCont.innerHTML = template;
}
getLiveEvents();

const bookingDay = document.querySelector(".booking_date.container");


bookingDay.addEventListener("click", (event) => {
  event.stopPropagation();
  // console.log(event.path)
  event.path.forEach((element) => {
    // console.log("triggered")
    if (element.classList && element.classList.contains("booking_day")) {
      let selectedDate = element.getAttribute("data-date");
      selectedDate = new Date(selectedDate)
      let formattedDate = selectedDate.toLocaleDateString('en-IN', {day: '2-digit', month: '2-digit', year: 'numeric'});
      // console.log(formattedDate)
      getLiveEvents(formattedDate);
    }
  })


});


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
    currentTheatreName = e.target.classList[1];
    termsandconditions.style.display = "block";
  }
});

const seatToChoose_button_EL = document.querySelector('.seatToChoose_button');
seatsToBookEl.addEventListener("click", (e) => {

  let numSeats = e.target.innerText;
  sessionStorage.setItem('numSeats', numSeats);
  // window.location.href = `../HTML/seat.html?id=${id}&seats=${numSeats}` ;

});
seatToChoose_button_EL.addEventListener('click', function () {



  const url = `../HTML/seat.html?id=${id}&theatreName=${currentTheatreName}`;

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


window.addEventListener("DOMContentLoaded", () => renderDetails())