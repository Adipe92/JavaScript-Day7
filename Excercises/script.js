var products = [{
    name: "Various Flowers 1",
    img: "https://cdn.pixabay.com/photo/2016/05/27/22/25/roses-1420719__340.jpg",
    price: "25",
    gtty: 1
}, {
    name: "Various Flowers 2",
    img: "https://cdn.pixabay.com/photo/2018/01/09/22/51/roses-3072698__340.jpg",
    price: "32",
    gtty: 1
}, {
    name: "Various Flowers 3",
    img: "https://cdn.pixabay.com/photo/2016/05/27/22/25/roses-1420719__340.jpg",
    price: "17",
    gtty: 1
}, {
    name: "Various Flowers 4",
    img: "https://cdn.pixabay.com/photo/2016/02/29/20/17/roses-1229148__340.jpg",
    price: "37",
    gtty: 1
}, {
    name: "Various Flowers 5",
    img: "https://cdn.pixabay.com/photo/2017/01/21/13/55/tulips-1997282__340.jpg",
    price: "15",
    gtty: 1
}, {
    name: "Various Flowers 6",
    img: "https://cdn.pixabay.com/photo/2016/06/30/12/29/carnation-1488929__340.jpg",
    price: "15",
    gtty: 1
},
];

console.table(products);

for (let val of products) {
    document.getElementById("all").innerHTML += `
    <div class="card m-4" style="width: 18rem;">
                    <img src="${val.img}" class="card-img-top" height="200" alt="pic">
                    <div class="card-body">
                        <h5 class="card-title text-center">${val.name}</h5>
                        <p class="text-center card-text"><b>${val.price}$</b></p>
                        <div class="text-center">
                            <button class="btn btn-danger button-products" type="button">Into Cart</button>
                        </div>
                    </div>
                </div>
    `;
};

let btns = document.getElementsByClassName("button-products");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        addToCart(products[i], i);
    })
}

var cart = [];

function addToCart(product, index) {
    if (cart.find(val => val.name == product.name)) {
        product.gtty++;
    } else {
        cart.push(product);
    }
    createRows()
    Total()
};

function createRows () {
    var result = "";

    for (let val of cart) {
        result += `
        <div class="cart-row row d-flex">
        <div class="cart-item col-6 my-3 ">
            <img class="cart-item-image" src="${val.img}" width="140" height="100">
            <span class="cart-item-title h5 ms-5">${val.name}</span>
        </div>
        <span class="cart-price col-3 h4 my-5">${val.price}$</span>
        <div class="cart-qtty-action col-3 d-flex">            
            <i class="minus fa fa-minus-circle my-auto"></i>            
            <div class="cart-quantity p-5 h4">${val.gtty}</div>            
            <i class="plus fa fa-plus-circle my-auto"></i>        
            <button class="del btn btn-danger  my-auto ms-5 fw-bold" type="button"> Delete </button>            
        </div>

    </div>
        `;
    }
    document.getElementById("cart-items").innerHTML = result;

    let plus = document.getElementsByClassName("plus");
    let minus = document.getElementsByClassName("minus")
    let del = document.getElementsByClassName("del")

    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', function() {
            plusQtty(i);
            Total();
        });
        minus[i].addEventListener('click', function () {
            minusQtty(i);
            Total();
        });
        del[i].addEventListener('click', function() {
            deleteItem(i);
            Total();
        })
    }
}

function Total() {
    let total = 0
    for (let val of cart) {
        total = total + (val.price * val.gtty);

        if (total >= 100) {
            total = total - (total * 0.1);
        }
    }
    document.getElementById("price").innerHTML = total.toFixed(2) + " $";
}

function plusQtty(i) {
    cart[i].gtty++;
    document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].gtty;
};

function minusQtty(i) {
    if (cart[i].gtty == 1) {
        cart.splice(i, 1);
        createRows();
    } else {
        cart[i].gtty -= 1 ;
        document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].gtty;
    }
 }

 function deleteItem(i) {
     cart[i].gtty = 1;
     cart.splice(i, 1);
     createRows();
 };

