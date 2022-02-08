var products = [{
    name: "Cube 2019",
    image: "https://lms.codefactory.live/videos/fswd13.0/JS/JS_day8/Images/cube2019.jpeg" ,
    price: 3200.00,
    qtty: 1
 }, {
    name: "GT Avalanche" ,
    image: "https://lms.codefactory.live/videos/fswd13.0/JS/JS_day8/Images/gtavalanche.jpg",
    price: 2100.00 ,
    qtty: 1
 }, {
    name: "Trek 8",
    image: "https://lms.codefactory.live/videos/fswd13.0/JS/JS_day8/Images/trekfull8.jpg" ,
    price: 4500.00,
    qtty: 1
 }];
 
 for (let val of products) {
    document.getElementsByClassName("products")[0].innerHTML += `<div class="product col-12 col-md-6 col-lg-4 text-center fw-bold">
    <p class ="product-title h3 m-3">${val.name}</p>
    <img class ="product-image" src="${val.image}" width="200"  height="200">
    <div class="product-details" >
        <p class="product-price h4 m-3">${ val.price} €</p>
        <button class="btn btn-primary product-button"  type="button">ADD  TO CART</button>
    </div>
    </div>
    `
 }

var cart = [];

function addCart(product) {
    if (cart.find(val => val.name => product.name));
}

 let btns = document.getElementsByClassName("product-button");

 for (let i = 0; i < btns.length; i++) {
     btns[i].addEventListener('click', function () {
         addToCart(products[i], i);
     })
 }
