// Selectors

const selectOption = document.querySelector('.options');
const giftVouchers = document.querySelectorAll('.voucher-items');
const container = document.querySelector('.gift-vouchers')

const fun = async () => {
    const result = await fetch('../JSON/gift.json');
    const tweets = await result.json();
    let store = tweets.images;  
    return store;
}

let forAll = fun().then((result) => {
    showAllGift(result); 
})

let arrayOfResult = fun().then((result) => {

    selectOption.addEventListener('click', (e) => {
        let text = e.target.innerText;

        if (text === 'All') {
            showAllGift(result);
        }

        if (text === 'Generic') {
            showGenericGift(result) ;
        }

        if (text === 'Occasion') {
            showOccasionGift(result)
        }

        if (text === 'Festival') {
            showFestivalGift(result)
        }

        if (text === 'Combos') {
            showCombosGift(result) ;
        }

    })
})

function showAllGift(temp) {
    for (let i = 0; i < temp.length; i++) {
        let element = document.createElement('li');
        element.setAttribute('class', 'voucher-items');
        element.innerHTML = `
        <div class="image">
            <img src="${temp[i].src}" alt="img">
        </div>
        `;
        container.append(element);
    }
}

function showGenericGift(temp) {
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].type === 'Generic') {
            let element = document.createElement('li');
            element.setAttribute('class', 'voucher-items');
            element.innerHTML = `
            <div class="image">
                <img src="${temp[i].src}" alt="img">
            </div>
            `;
            container.append(element);
        }
    }
}

function showOccasionGift(temp) {
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].type === 'Occasion') {
            let element = document.createElement('li');
            element.setAttribute('class', 'voucher-items');
            element.innerHTML = `
            <div class="image">
                <img src="${temp[i].src}" alt="img">
            </div>
            `;
            container.append(element);
        }
    }
}

function showFestivalGift(temp) {
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].type === 'Festival') {
            let element = document.createElement('li');
            element.setAttribute('class', 'voucher-items');
            element.innerHTML = `
            <div class="image">
                <img src="${temp[i].src}" alt="img">
            </div>
            `;
            container.append(element);
        }
    }
}

function showCombosGift(temp) {
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].type === 'Combos') {
            let element = document.createElement('li');
            element.setAttribute('class', 'voucher-items');
            element.innerHTML = `
            <div class="image">
                <img src="${temp[i].src}" alt="img">
            </div>
            `;
            container.append(element);
        }
    }
}





