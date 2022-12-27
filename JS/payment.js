const urlParams = new URLSearchParams(window.location.search);
const price = urlParams.get('price');


const ticketPriceEl = document.querySelector(".list-div-right");
const subTotalEl = document.querySelector(".total-cost-right-div")
const subTotalPrevEl = document.querySelector(".total_amount_right")
const totalCostEl = document.querySelector(".proceed_content")

const renderPrice = () => {
    const template = `
      

<span id="seatPrice" class="seatCost">
   Rs.${price}.00
</span>
    
    
    `
    ticketPriceEl.innerHTML = template;
    const template1 = `
    
     <span id="sub_total">
            Rs.${+price+68}.00
     </span>
    
    `
    subTotalEl.innerHTML = template1
    const template2 = `
        Rs.${+price+68}.00
    `

    subTotalPrevEl.innerHTML = template2;
    const template3 = `
    <div class="total_cost">
    TOTAL: Rs.${+price+70}.00
     </div>
    `
    totalCostEl.innerHTML = template3
}

totalCostEl.addEventListener("click",(e)=>{
  e.preventDefault();
  window.location.href = '../HTML/paymentconfirm.html' ;
})



window.addEventListener("DOMContentLoaded", () => renderPrice())