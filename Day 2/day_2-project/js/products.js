var cartList = [];
var cart = document.getElementById("cart");

function addToCart(id) {
	cartList.push(id);
	updateCartList();
}

function updateCartList() {
	cart.innerHTML = "";
	for (let i = 0; i < cartList.length; i++) {
		let currentItem = document.getElementById(cartList[i]);
		let templateItem = cartItem(currentItem);
		cart.insertAdjacentHTML("beforeend", templateItem);
	}
}

function cartItem(item) {
	let name = item.getElementByTagName("h3")[0].innerHTML;
	let image = item.getElementByTagName("img").item(0).src;

	return `
		<div id="${item.id}" class="item">
			<h4 class="cart-name">${name}</h4>
			<img src="${image}" class="cart-image">
			<button onClick="removeFromCart(this.parentNode.id)">x</button>
		</div>
	`
}

function removeFromCart(id) {
	let i = cartList.indexOf(id);
	if (i > -1) {
		cartList.split(i, 1);
	}
	updateCartList();
}
