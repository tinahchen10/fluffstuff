// Global variables
var pillowPic = new Array(4)
pillowPic [0] = "assets/hypoallergenic.jpeg"
pillowPic [1] = "assets/red pillow.jpeg"
pillowPic [2] = "assets/purple_pillow.jpeg"
pillowPic [3] = "assets/grey_pillow.jpeg"

var cartnumber = 0

// current selected color
var color = "After School"


var value = 0
// Change image when user selects color radio buttons
function displayColor(circle) {
	value =	parseInt(circle.value)
	document.getElementById("product-img").src = pillowPic[value];
	if (value == 0) {
		color = "After School"
	}
	if (value == 1) {
		color = "Morning Haze"
	}
	if (value == 2) {
		color = "Cozy Denim"
	}
	if (value == 3) {
		color = "Rainy Day"
	}
}

var quantities = [];

// Cart changes
function addToCart(box) {
	var pillows = [];
	if (localStorage.getItem("pillows") !== null) {
		pillows = JSON.parse(localStorage.getItem("pillows"));
	}

  	cartnumber = cartnumber + 1
  	document.getElementById("cartnumber").textContent = "(" + cartnumber+ ")"
  	var pillow1 = new MyPillow("Hypoallergenic Pillow", color, document.getElementById("quantity").value , "$39", pillowPic[value]);
  	pillows.push(pillow1)
  	localStorage.setItem("pillows", JSON.stringify(pillows));
}

function displayCart() {
	var pillows = [];
	if (localStorage.getItem("pillows") !== null) {
		pillows = JSON.parse(localStorage.getItem("pillows"));
	}

	var product = "";
	var quantity = 0;
	var price = 0;

	for (i = 0; i < pillows.length; i++) {
		product += `<div class="row">
								<div class="col-25">
									<img id="pillow-img" src= "${pillows[i].image}">
								</div>
								<div class="col-25">
									<h2 id="name">Hypoallergenic Pillow</h2>
				        			<p>Color:</p>
				        			<p id="pillowcolor"><strong>${pillows[i].color}</strong></p>
				        			<p>Quantity:</p>
						        	<p id="quantity">${pillows[i].quantity}</p>
									<button id="btn-trash" onclick="removeItem(${i})"><i class="fas fa-trash"></i></button>
									<br><br>
								</div>
								<div class="col-25">
									<p id="price">${pillows[i].price}</p>
								</div>
							</div>`
		
		quantity += parseInt (pillows[i].quantity)
		str = pillows[i].price
		price += parseInt((str.substring(1)))*quantity
	}

	document.getElementById("item").innerHTML = product
	document.getElementById("subtotal").textContent = "$"+price
	document.getElementById("total").textContent = "$"+price
	document.getElementById("cartnumber").textContent = "(" + quantity + ")"
}

function removeItem(i) {
	// first get the cart array from local storage
	var array = JSON.parse(localStorage.getItem("pillows"));
	// remove the item from the array
	array.splice(i,1);
	// set new array value to the local storage
	localStorage.setItem("pillows", JSON.stringify(array));
	// update HTML
	displayCart ()
}

// Objects in product page
function MyPillow (name, color, quantity, price, image) {
	this.name = name;
	this.color = color;
	this.quantity = quantity;
	this.price = price;
	this.image = image;
}

// var pillow = [];

// document.getElementById("name").innerHTML = JSON.parse(localStorage.getItem("pillow")).name;
// document.getElementById("pillowcolor").innerHTML = JSON.parse(localStorage.getItem("pillow")).color;
// document.getElementById("quantity").innerHTML = JSON.parse(localStorage.getItem("pillow")).quantity;
// document.getElementById("price").innerHTML = JSON.parse(localStorage.getItem("pillow")).price;
// document.getElementById("pillow-img").src = JSON.parse(localStorage.getItem("pillow")).image;

