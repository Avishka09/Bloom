// Function to update item total
function updateItemTotal(item) {
    const price = parseFloat(item.getAttribute('data-price'));
    const quantity = item.querySelector('.quantity').value;
    const itemTotal = price * quantity;
    item.querySelector('.item-total').textContent = itemTotal.toFixed(2);
}

// Function to update the grand total
function updateGrandTotal() {
    const items = document.querySelectorAll('.cart-item');
    let grandTotal = 0;
    
    items.forEach(item => {
        const itemTotal = parseFloat(item.querySelector('.item-total').textContent);
        grandTotal += itemTotal;
    });

    const tax = grandTotal * 0.1; // 10% tax
    const discount = 300; // Discount fixed at 300
    const finalTotal = grandTotal + tax - discount;

    document.getElementById('grand-total').textContent = grandTotal.toFixed(2);
    document.getElementById('final-total').textContent = finalTotal.toFixed(2);
}

// Event listeners for quantity change
document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('input', (event) => {
        const item = event.target.closest('.cart-item');
        updateItemTotal(item);
        updateGrandTotal();
    });
});

// Initial update of totals
updateGrandTotal();
