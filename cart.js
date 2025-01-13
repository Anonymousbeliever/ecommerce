document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-btn');
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const totalPriceCells = document.querySelectorAll('tbody td:last-child');
    const subtotalElement = document.querySelector('.cart-total p:nth-child(2) span');
    const totalElement = document.querySelector('.cart-total p:nth-child(4) span');

    const updateTotals = () => {
        let subtotal = 0;
        totalPriceCells.forEach(cell => {
            subtotal += parseFloat(cell.textContent.replace('$', ''));
        });
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${subtotal.toFixed(2)}`;
    };

    removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            button.closest('tr').remove();
            updateTotals();
        });
    });

    quantityInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const priceCell = input.closest('tr').querySelector('td:nth-child(4)');
            const price = parseFloat(priceCell.textContent.replace('$', ''));
            const totalCell = input.closest('tr').querySelector('td:last-child');
            totalCell.textContent = `$${(price * input.value).toFixed(2)}`;
            updateTotals();
        });
    });
});
