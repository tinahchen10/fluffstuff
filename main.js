// Global variables
var pillowPic = new Array(4)
pillowPic [0] = "assets/hypoallergenic.jpeg"
pillowPic [1] = "assets/red pillow.jpeg"
pillowPic [2] = "assets/purple_pillow.jpeg"
pillowPic [3] = "assets/grey_pillow.jpeg"

var cartnumber = 0

// Change image when user selects color radio buttons
function displayColor(circle) {
  document.getElementById("product-img").src = pillowPic[parseInt(circle.value)];
}

// Number on cart changes
function addToCart(box) {
  cartnumber = cartnumber + 1
  document.getElementById("cartnumber").textContent = "(" + cartnumber+ ")"
}


