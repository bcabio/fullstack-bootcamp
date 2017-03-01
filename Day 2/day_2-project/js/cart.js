var items = [];
var container = document.getElementById("item-container");

function createItems(responseText) {
	for (let i = 0; i < responseText.length; i++) {
		items.push(responseText[i])
	}
	for (let i = 0; i < items.length; i++) {
		container.insertAdjacentHTML("beforeend", items[i]);
	}
};

function template(item) {
	return `
		<div class="item" id="${item.ID}">
			<img src="${item.image}" class="item-image">
			<h3>${item.name}</h3>
			<button onClick="addToCart(this.parentNode.id)">Add to Cart</button>
		</div>
	`
}

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://s3.amazonaws.com/com.nishnha.webdev/products.json", true);
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		createItems(JSON.parse(xhttp.responseText));
	}
}

xhttp.send();
