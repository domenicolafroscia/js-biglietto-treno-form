// Dati
const userKmElem = document.getElementById("km");
console.log(userKmElem);

const userAgeElem = document.getElementById("age");
console.log(userAgeElem);

const usernameElem = document.getElementById("name");
console.log(usernameElem);

const number = 0.21;
console.log(number);

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function () {
    console.log(sendBtn);
    const userKm = userKmElem.value;
    const userAge = userAgeElem.value;
    const username = usernameElem.value;
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

    // Preparazione messaggio
    const totalPrice = `${p}€`;
    console.log(totalPrice);

    // Output
    document.getElementById("result").innerHTML = totalPrice;
    document.getElementById("name-result").innerHTML = username;
});

document.getElementById("clear").addEventListener("click", function() {
    userKmElem.value = "";
    userAgeElem.value = "";
    usernameElem.value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("name-result").innerHTML = "";
});

