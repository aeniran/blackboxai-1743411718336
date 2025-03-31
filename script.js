// Shared functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle would go here
    console.log('Trade & Go app initialized');
});

// Trading Page Specific Functions
if (document.querySelector('#trade.html')) {
    // Form validation for trading page
    const tradeForm = document.querySelector('#trade-form');
    if (tradeForm) {
        tradeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const amount = parseFloat(document.getElementById('amount').value);
            const price = parseFloat(document.getElementById('price').value);
            
            if (isNaN(amount) || isNaN(price) || amount <= 0 || price <= 0) {
                alert('Please enter valid amount and price values');
                return;
            }
            
            alert(`Order placed successfully!\nAmount: ${amount}\nPrice: $${price.toFixed(2)}\nTotal: $${(amount * price).toFixed(2)}`);
            tradeForm.reset();
        });
    }
}

// Food Page Specific Functions
if (document.querySelector('#food.html')) {
    // Cart functionality
    let cart = [];
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const foodItem = this.closest('.food-item');
            const itemName = foodItem.querySelector('h3').textContent;
            const itemPrice = parseFloat(foodItem.querySelector('span').textContent.replace('$', ''));
            
            cart.push({
                name: itemName,
                price: itemPrice
            });
            
            updateCartDisplay();
            alert(`${itemName} added to cart!`);
        });
    });
    
    function updateCartDisplay() {
        // This would update the cart UI
        console.log('Cart updated:', cart);
    }
}

// Rides Page Specific Functions
if (document.querySelector('#rides.html')) {
    // Ride booking form validation
    const rideForm = document.querySelector('#ride-form');
    if (rideForm) {
        rideForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const pickup = document.getElementById('pickup').value;
            const destination = document.getElementById('destination').value;
            
            if (!pickup || !destination) {
                alert('Please enter both pickup and destination locations');
                return;
            }
            
            alert(`Ride booked successfully!\nFrom: ${pickup}\nTo: ${destination}\nEstimated fare: $6.42`);
            rideForm.reset();
        });
    }
}