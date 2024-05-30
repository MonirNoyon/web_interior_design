

let basicCount = 1;
let proCount = 1;


function basicSignup(elementId) {
    const roomElement = document.getElementById(elementId);
    roomElement.textContent = "Thank you for choosing "+basicCount+" room"
}

function increaseBasicPrice(priceId,roomId) {
    basicCount ++;
    const priceElement = document.getElementById(priceId);
    const roomElement = document.getElementById(roomId);
    roomElement.textContent = basicCount+ " room";
    let price = parseInt(priceElement.textContent.replace('$', ''));
    price = (199*basicCount);
    priceElement.textContent = '' + price;
}

function decreaseBasicPrice(priceId,roomId) {
    if(basicCount > 1){
        basicCount --;
    }
    const priceElement = document.getElementById(priceId);
    const roomElement = document.getElementById(roomId);
    roomElement.textContent = basicCount+ " room";
    let price = parseInt(priceElement.textContent.replace('$', ''));
    price = (199*basicCount);
    priceElement.textContent = '' + price;
}

function proSignup(elementId) {
    const roomElement = document.getElementById(elementId);
    roomElement.textContent = "Thank you for choosing "+proCount+" room"
}

function increaseProPrice(priceId,roomId) {
    proCount ++;
    const priceElement = document.getElementById(priceId);
    const roomElement = document.getElementById(roomId);
    roomElement.textContent = proCount+ " room";
    let price = parseInt(priceElement.textContent.replace('$', ''));
    price = (249*proCount);
    priceElement.textContent = '' + price;
}

function decreaseProPrice(priceId,roomId) {
    if(proCount > 1){
        proCount --;
    }
    const priceElement = document.getElementById(priceId);
    const roomElement = document.getElementById(roomId);
    roomElement.textContent = proCount+ " room";
    let price = parseInt(priceElement.textContent.replace('$', ''));
    price = (249*proCount);
    priceElement.textContent = '' + price;
}

