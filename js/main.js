// Sample watch data
const watches = [
    {
        id: 1,
        name: "Blue Rose Gold [W1049G2]",
        price: "Rp 1.350.000",
        image: "images/blue-rose-gold.webp",
        description: "Jam tangan elegan dengan kombinasi warna biru dan rose gold yang mewah."
    },
    {
        id: 2,
        name: "Seiko Prospex SRPK43K1 King Turtle",
        price: "Rp 8.900.000",
        image: "images/seiko-king-turtle.webp",
        description: "Diver watch legendaris dengan desain kokoh dan fitur profesional."
    },
    {
        id: 3,
        name: "Guess GW0202G1",
        price: "Rp 2.700.000",
        image: "images/guess-gw0202g1.jpg",
        description: "Jam tangan fashion modern dengan tampilan maskulin dan stylish."
    },
    {
        id: 4,
        name: "Lorenzo 5107",
        price: "Rp 250.000",
        image: "images/lorenzo-5107.webp",
        description: "Jam tangan klasik berwarna emas yang cocok untuk segala suasana."
    },
    {
        id: 5,
        name: "Alexandre Christie 8678",
        price: "Rp 1.200.000",
        image: "images/alexandre-christie-8678.webp",
        description: "Jam tangan elegan dengan kombinasi warna hitam dan rose gold."
    },
    {
        id: 6,
        name: "Alexandre Christie Chronograph AC 6564",
        price: "Rp 1.500.000",
        image: "images/alexandre-christie-6564.webp",
        description: "Jam tangan chronograph sporty dengan tali kulit coklat premium."
    },
    // Tambahan koleksi baru
    {
        id: 7,
        name: "Seiko SK SRPD71K2",
        price: "Rp 3.364.000",
        image: "images/Seiko SK SRPD71K2.jpg",
        description: "Jam tangan automatic Seiko dengan desain sporty dan elegan."
    },
    {
        id: 8,
        name: "CAT K1.121.21.138",
        price: "Rp1.207.500",
        image: "images/CAT K1.121.21.138.jpg",
        description: "Jam tangan CAT dengan desain tangguh dan maskulin."
    },
    {
        id: 9,
        name: "GS GA-700-1BDR",
        price: "Rp1.287.300",
        image: "images/GS GA-700-1BDR.jpg",
        description: "Jam tangan G-Shock dengan fitur digital dan analog."
    },
    {
        id: 10,
        name: "GS GA-110-1ADR",
        price: "Rp1.434.300",
        image: "images/GS GA-110-1ADR.jpg",
        description: "Jam tangan G-Shock dengan desain modern dan tahan banting."
    },
    {
        id: 11,
        name: "Casio CS LTP-V005L-7B3UDF",
        price: "Rp 364.550",
        image: "images/Casio CS LTP-V005L-7B3UDF.png",
        description: "Jam tangan Casio klasik dengan tali kulit dan desain elegan."
    },
    {
        id: 12,
        name: "Casio CS LTP-V005L-1AUDF",
        price: "Rp 374.550",
        image: "images/Casio CS LTP-V005L-1AUDF.png",
        description: "Jam tangan Casio klasik dengan dial hitam dan tali kulit."
    },
    {
        id: 13,
        name: "Casio CS MW-59-1EVDF",
        price: "Rp 313.650",
        image: "images/Casio CS MW-59-1EVDF.png",
        description: "Jam tangan Casio simple dan tahan air, cocok untuk sehari-hari."
    },
    {
        id: 14,
        name: "Casio CS WS-1500H-5AVDF",
        price: "Rp 611.150",
        image: "images/Casio CS WS-1500H-5AVDF.png",
        description: "Jam tangan digital Casio dengan fitur lengkap dan desain sporty."
    },
    {
        id: 15,
        name: "Casio CS AE-1200WHB-1BVDF",
        price: "Rp 502.650",
        image: "images/Casio CS AE-1200WHB-1BVDF.png",
        description: "Jam tangan digital Casio dengan fitur world time dan baterai tahan lama."
    },
    {
        id: 16,
        name: "Casio CS MTP-1314L-8AVDF",
        price: "Rp 628.150",
        image: "images/Casio CS MTP-1314L-8AVDF.png",
        description: "Jam tangan analog Casio dengan desain elegan dan tali kulit hitam."
    }
];

// Function to create watch cards
function createWatchCard(watch) {
    return `
        <div class="watch-card">
            <img src="${watch.image}" alt="${watch.name}">
            <h3>${watch.name}</h3>
            <p class="price">${watch.price}</p>
            <p class="description">${watch.description}</p>
            <button class="add-to-cart" data-id="${watch.id}">Add to Cart</button>
        </div>
    `;
}

// Function to initialize the watch grid
function initializeWatchGrid() {
    const watchGrid = document.querySelector('.watch-grid');
    if (watchGrid) {
        watchGrid.innerHTML = watches.map(watch => createWatchCard(watch)).join('');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = '#fff';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Fungsi untuk menambah jam ke keranjang
function addToCart(watch) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(watch);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWatchGrid();
    
    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const watchId = this.getAttribute('data-id');
            const watch = watches.find(w => w.id === parseInt(watchId));
            if (watch) {
                addToCart(watch);
                alert('Jam berhasil ditambahkan ke keranjang!');
            }
        });
    });
}); 