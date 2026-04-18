document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Loader
    const loader = document.getElementById('loader');
    if(loader) {
        setTimeout(() => {
            loader.classList.add('loader-finish');
            document.body.style.overflow = 'visible';
        }, 2500);
    }

    // 2. Handle Bottle Popup
    const promo = document.getElementById('bottle-promo-container');
    if(promo) {
        setTimeout(() => { promo.classList.add('animate-promo'); }, 4000);
    }

    // 3. CART LOGIC
    const cartDisplay = document.getElementById('cart-display');
    const addBtn = document.getElementById('add-to-cart-btn');

    function updateCartUI() {
        let count = localStorage.getItem('sh_cart_count') || 0;
        if(cartDisplay) cartDisplay.innerText = `🛒 (${count})`;
    }

    if(addBtn) {
        addBtn.addEventListener('click', () => {
            let count = parseInt(localStorage.getItem('sh_cart_count') || 0);
            count++;
            localStorage.setItem('sh_cart_count', count);
            updateCartUI();

            // Pop Animation
            cartDisplay.classList.add('cart-animate');
            setTimeout(() => { cartDisplay.classList.remove('cart-animate'); }, 400);
        });
    }

    updateCartUI();
})