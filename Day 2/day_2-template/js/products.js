var items = []
var container = document.getElementById("item-container");

function template(item) {
    let description = "<li>" + item.description.replace(/\n/g, "<li>");

    return `
        <div class="item" id=${item.ID}>
            <img src="http://s3.amazonaws.com/com.nishnha.webdev/${item.image}" class="item-image">
            <h3>${item.name}</h3>
            <ul class="item-text">` + description + `</ul>
            <button onClick="addToCart(this.parentNode.id)">Add to cart</button>
        </div>
    `
};

function createItems(responseText) {
    for (let i = 0; i < responseText.length; i++) {
       items.push(template(responseText[i]));
    }
    for (let i = 0; i < items.length; i++) {
        container.insertAdjacentHTML('beforeend', items[i]);
    }
};

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://s3.amazonaws.com/com.nishnha.webdev/products.json", true);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        createItems(JSON.parse(xhttp.responseText));
    }
}
xhttp.onerror = function() {
    console.log("Connection failed");
}
xhttp.send();
