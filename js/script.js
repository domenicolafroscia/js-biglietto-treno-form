// Dati
const userKmElem = document.getElementById("km");
console.log(userKmElem);

const userAgeElem = document.getElementById("age");
console.log(userAgeElem);

const number = 0.21;
console.log(number);

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function () {
    console.log(sendBtn);
    const userKm = userKmElem.value;
    const userAge = userAgeElem.value;
    console.log(userKm, userAge);

    // Logica
    let product = userKm * number;
    console.log(product);

    if (userAge < 18) {
    product = product - (product * 20 / 100);
    } else if (userAge > 65) {
    product = product - (product * 40 / 100);
    } else {
    product
    }

    const p = product.toFixed(2);
    console.log(p, typeof p);
    let totalPrice = `${p}€`;
    console.log(totalPrice);

    // Preparazione messaggio
    let message = 0;

    if (userAge < 18) {
        message = "Questo è il prezzo totale con uno sconto applicato del 20%: "
    } else if (userAge > 65) {
        message = "Questo è il prezzo totale con uno sconto applicato del 40%:"
    } else {
        message = "Questo è il prezzo totale:"
    }

    console.log(message);

    const messageComplete = `${message + " " + totalPrice}`;
    console.log(messageComplete);

    // Output
    document.getElementById("result").innerHTML = messageComplete;
})

