// Product data
const products = [
    {
        image: "images/image7.jpg",
        title: "Industrial Tool Set",
        description: "Professional-grade tools for industrial use",
    },
    {
        image: "images/image8.jpg",
        title: "Safety Equipment Bundle",
        description: "Complete safety gear for industrial workers",
    },
    {
        image: "images/image9.jpg",
        title: "Maintenance Kit",
        description: "Essential maintenance supplies and tools",
    },
    {
        image: "images/image8.jpg",
        title: "Hydraulic System",
        description: "High-performance hydraulic systems for industrial machinery",
    },
    {
        image: "images/image7.jpg",
        title: "Automation Controls",
        description: "Advanced control systems for factory automation",
    },
];

// Function to create a product card
function createProductCard(product) {
    return `
        <div class="flex-none w-[280px] snap-start bg-gray-100 rounded-lg overflow-hidden shadow-md animate-fadeIn">
            <div class="h-48 relative">
                <img src="${product.image}" alt="${product.title}" class="object-cover w-full h-full">
            </div>
            <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">${product.title}</h3>
                <p class="text-gray-600 mb-4">${product.description}</p>
                <button class="w-full bg-gray-800 text-white py-2 px-4 rounded hover:scale-105 transition-transform">
                    <a href="contact.html" class="hover:text-gray-300 transition-colors">Shop</a>
                </button>
            </div>
        </div>
    `;
}

// Function to render all product cards
function renderProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = products.map(createProductCard).join("");
}

// Scroll functionality
function setupScrollButtons() {
    const scrollLeftButton = document.getElementById("scroll-left");
    const scrollRightButton = document.getElementById("scroll-right");
    const productsContainer = document.getElementById("products-container");

    scrollLeftButton.addEventListener("click", () => {
        productsContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    scrollRightButton.addEventListener("click", () => {
        productsContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(); // Render product cards
    setupScrollButtons(); // Add scroll functionality
});