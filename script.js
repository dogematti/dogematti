// Hae elementit
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const productGrid = document.querySelector('.product-grid');
const blogPosts = document.querySelector('.blog-posts');
const startMenu = document.getElementById('start-menu');
const startMenuContent = document.getElementById('start-menu-content');
const clock = document.getElementById('clock');

// Tuotteiden tiedot (korvaa oikeilla tiedoillasi)
const products = [
    {
        name: "Virkattu pipo",
        image: "images/pipo1.jpg",
        price: "25 €"
    },
    {
        name: "Värikkäät lapaset",
        image: "images/lapaset1.jpg",
        price: "20 €"
    },
    // Lisää lisää tuotteita tarpeen mukaan
];

// Blogipostausten tiedot (korvaa oikeilla tiedoillasi)
const blogPostsData = [
    {
        title: "Vinkkejä virkkaamiseen",
        image: "images/blog1.jpg",
        date: "2023-08-01"
    },
    // Lisää lisää blogipostauksia tarpeen mukaan
];

// Näytä tuotteet
function displayProducts() {
    productGrid.innerHTML = ''; // Tyhjennä ensin

    products.forEach(product => {
        const productElement = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;
        productGrid.innerHTML += productElement;
    });
}

// Näytä blogipostaukset
function displayBlogPosts() {
    blogPosts.innerHTML = ''; // Tyhjennä ensin

    blogPostsData.forEach(post => {
        const postElement = `
            <div class="blog-post">
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.date}</p>
            </div>
        `;
        blogPosts.innerHTML += postElement;
    });
}

// Hae-toiminnon käsittely
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    // Suodata tuotteet hakusanan perusteella (voit toteuttaa tämän tarkemmin)
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    // Näytä suodatetut tuotteet
    productGrid.innerHTML = ''; 
    filteredProducts.forEach(product => {
        // ... (sama koodi kuin displayProducts-funktiossa)
    });
});

// Start-valikon käsittely
startMenu.addEventListener('click', () => {
    startMenuContent.classList.toggle('hidden');
});

// Kellon päivitys
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clock.textContent = timeString;
}

// Päivitä kello aluksi ja sitten joka sekunti
updateClock();
setInterval(updateClock, 1000);

// Näytä tuotteet ja blogipostaukset sivun latautuessa
displayProducts();
displayBlogPosts();
