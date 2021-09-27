var customerCart = [
    {
        id: 1,
        furName: "Alfred",
        price: 2000,
        description: "most compfortable",
        category: "living-room",
        pictures: [
            "../images/id1.jpg",
            "../images/id11.jpg"
        ]
    },
    {
        id: 31,
        furName: "Dominik",
        price: 10000,
        description: "most astonishing",
        category: "kitchens",
        pictures: [
            "../images/id19.jpg",
            "../images/id191.jpg"
        ]
    },
    {
        id: 37,
        furName: "Lemon",
        price: 5000,
        description: "most spectacular",
        category: "dinette",
        pictures: [
            "../images/id37.jpg",
            "../images/id371.jpg"
        ]
    },
]

var sum = 0;
var table = document.getElementById("table")
var total = document.getElementById("total")

for (let i = 0; i < customerCart.length; i++) {
    sum += customerCart[i].price;
    table.innerHTML += `                
    <tr class="row" id="${customerCart[i].id}">
    <td class="item">
        <div class="furInfo">
            <div class="furImg">
                <img src="${customerCart[i].pictures[0]}">
            </div>
            <div class="furDetail">
                <h3>"${customerCart[i].furName}"</h3>
                <p>${customerCart[i].description}</p>
                <p>${customerCart[i].category}</p>
                <div class="options"> 
                    <select>
                        <option>Color</option>
                        <option>Black</option>
                        <option>White</option>
                        <option>Peach</option>
                    </select>
                    <select>
                        <option>Quantity</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select><br>
                </div><br>
                Remove: <button onclick= "deleteItem(${customerCart[i].id})" class="removeItem" type="button""><i class="fa fa-minus"></i></button>
            </div>
            <div class="furPrice"><h3>${customerCart[i].price}$</h3></div>
        </div>
    </td>
    </tr>`
}


const removeItem = document.getElementsByClassName("removeItem")
const deliver = document.getElementById("deliver")
const removeOrders = document.getElementById("removeOrders")
const row = document.getElementsByClassName("row")
const item = document.getElementsByClassName("item")
const cartHeader = document.getElementById("cartHeader")
const summary = document.getElementById("summary")
const summary2 = document.getElementById("summary2")
const totalItems = document.getElementById("totalItems")

summary.innerText = `${sum}$`;
totalItems.innerText = `${customerCart.length}`;
summary2.innerText = `${sum + 150}$`;
const submit = document.getElementById("submit");
const orderSent = document.getElementById("orderSent");

submit.onclick=()=>{
    orderSent.style.visibility= "visible";
    orderSent.style.transform= "scale(1)";
}

orderSent.onclick=()=>{
    orderSent.style.visibility= "hidden";
    orderSent.style.transform= "scale(.1)";
}

function deleteItem(id) {
    for (let i = 0; i < customerCart.length; i++) {
        if (customerCart[i].id == id) {
            customerCart.splice(i, 1);
            document.getElementById(id).innerHTML = "";
            let sum2 = itemSum()
            summary.innerText = `${sum2}$`;
            summary2.innerText = `${sum2 + 150}$` ;
            totalItems.innerText = `${customerCart.length}`;
            console.log(customerCart);
        }
    }
}

function itemSum() {
    let sum2 = 0;
    for (let i = 0; i < customerCart.length; i++) {
        sum2 += customerCart[i].price;
    }
    return sum2;
}

var queryBtn = document.getElementById("queryBtn");
var queryLinks = document.getElementById("queryLinks");
var closeNav = document.getElementById("closeNav");

queryBtn.addEventListener("mouseenter",()=>{queryLinks.style.visibility = "visible"})

closeNav.addEventListener("click",()=>{queryLinks.style.visibility = "hidden"})

for (let i = 0; i < row.length; i++) {
    removeOrders.onclick = () => {
        row[0].innerText = "";
        row[1].innerText = "";
        row[2].innerText = "";
        sum = 0;
        cusLength = 0;
        summary.innerText = sum + "$";
        summary2.innerText = sum + 150 + "$";
        totalItems.innerText = cusLength;
        customerCart = [];
        console.log(customerCart);
    }
}

const exitForm = document.getElementById("exitForm")

deliver.onclick = () => {
    formContainer.style.visibility = "visible"
    formContainer.style.zIndex = "1"
}

exitForm.onclick = () => {
    formContainer.style.visibility = "hidden"
}


