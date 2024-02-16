// console.log("connected");
const cards = document.querySelectorAll(".card");
let serial = 1;
let totalPrice = 0;

for (const card of cards) {
    card.addEventListener("click", function () {
        const title = card.querySelector("h3").innerText;
        console.log(title);
        const priceText = card.querySelector("span").innerText.split(" ");
        price = parseFloat(priceText[1])
        console.log(price);
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = serial + ". " + title;
        serial++;
        titleContainer.appendChild(p);

        totalPrice += price;
        const totalPriceElement = document.getElementById('total-price');
        totalPriceElement.innerText = totalPrice.toFixed(2);
        document.getElementById('success').classList.add('hidden');
    })
}

const purchaseBtn = document.getElementById('purchase').addEventListener("click", function () {
    if (serial >= 2) {
        document.getElementById('success').classList.remove('hidden');
        const titleContainer = document.getElementById('title-container');
        document.getElementById('discount-price').innerText = "";
        document.getElementById('total').innerText = "";
        document.getElementById('total-price').innerText = "";

        for (let index = 0; index < serial; index++) {
            titleContainer.removeChild(titleContainer.firstElementChild)
            titleContainer.innerHTML = '';
        }

    } else {
        alert("Please select an item to buy first. ")
    }


})



const btn = document.getElementById('apply-btn').addEventListener("click", function () {
    const cupon = document.getElementById('input-field');
    if (totalPrice >= 200) {
        if (cupon.value === 'SELL200') {
            const discountPrice = (totalPrice * 0.2);
            const discountPriceElement = document.getElementById('discount-price');
            discountPriceElement.innerText = discountPrice.toFixed(2);
            const totalElement = document.getElementById('total');
            totalElement.innerText = (totalPrice - discountPrice).toFixed(2);
            document.getElementById('input-field').value = "";
        }
        else {
            alert("Invalid Cupon code");
            document.getElementById('input-field').value = "";
        }
    }
    else {
        alert("Please buy at least amount of 200 $")
        document.getElementById('input-field').value = "";
    }
});
