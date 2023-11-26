class Product {
    constructor(name, price, stockQuantity) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addProduct(product, quantity) {
        if (quantity > 0 && quantity <= product.stockQuantity) {
            const item = { product, quantity };
            this.items.push(item);
            product.stockQuantity -= quantity;
            console.log(`${quantity} ${product.name}(s) added to the cart.`);
        } else {
            console.log(`Invalid quantity or insufficient stock for ${product.name}.`);
        }
    }

    calculateTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.product.price * item.quantity;
        }
        return total;
    }

    checkout() {
        const total = this.calculateTotal();
        console.log(`Total price: $${total.toFixed(2)}`);
        console.log("Checkout completed. Thank you for shopping!");
        this.items = []; // Clear the cart after checkout
    }
}

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.shoppingCart = new ShoppingCart();
    }
}

// Function to display cart items and total price
function displayCart() {
    const cartItemsElement = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    cartItemsElement.innerHTML = "";
    customer.shoppingCart.items.forEach(item => {
        const itemElement = document.createElement("p");
        itemElement.textContent = `${item.quantity} ${item.product.name}(s) - $${(item.product.price * item.quantity).toFixed(2)}`;
        cartItemsElement.appendChild(itemElement);
    });

    const total = customer.shoppingCart.calculateTotal();
    totalPriceElement.textContent = total.toFixed(2);
}

// Function to add product to the cart
function addToCart(product, quantity) {
    customer.shoppingCart.addProduct(product, quantity);
    displayCart();
}

// Function to checkout
function checkout() {
    customer.shoppingCart.checkout();
    displayCart();
}

// Example Usage
const laptop = new Product("Laptop", 800, 10);
const phone = new Product("Smartphone", 400, 15);

const customer = new Customer("John Doe", "john.doe@example.com");

// Initial display of the cart
displayCart();
