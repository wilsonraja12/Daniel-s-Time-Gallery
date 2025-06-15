// Ambil data keranjang dari localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function formatRupiah(angka) {
    return 'Rp ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cart = getCart();
    let total = 0;
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Keranjang masih kosong.</p>';
        document.getElementById('cart-total-price').textContent = 'Rp 0';
        return;
    }
    let html = '<ul class="cart-list">';
    cart.forEach((item, idx) => {
        let priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
        total += priceNum;
        html += `<li class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">${item.price}</span>
            </div>
            <button class="remove-cart-item" data-idx="${idx}"><i class="fas fa-trash"></i></button>
        </li>`;
    });
    html += '</ul>';
    cartItemsDiv.innerHTML = html;
    document.getElementById('cart-total-price').textContent = formatRupiah(total);

    // Event hapus item
    document.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.getAttribute('data-idx'));
            let cart = getCart();
            cart.splice(idx, 1);
            saveCart(cart);
            renderCart();
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderCart();
    document.getElementById('checkout-wa').addEventListener('click', function() {
        const cart = getCart();
        if (cart.length === 0) return alert('Keranjang masih kosong!');
        let pesan = 'Halo, saya ingin memesan jam tangan berikut:%0A';
        cart.forEach((item, idx) => {
            pesan += `${idx+1}. ${item.name} - ${item.price}%0A`;
        });
        pesan += `%0ATotal: ${document.getElementById('cart-total-price').textContent}`;
        window.open('https://wa.me/6285715873238?text=' + pesan, '_blank');
    });
}); 