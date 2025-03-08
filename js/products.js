document.addEventListener('DOMContentLoaded', function() {
    // Product data - in a real application, this would come from a database
    const allProducts = [
        {
            id: 1,
            title: "Industrial Tool Set",
            description: "Professional-grade tools for industrial use",
            price: 299.99,
            category: "tools",
            image: "../images/image1.jpeg"
        },
        {
            id: 2,
            title: "Safety Equipment Bundle",
            description: "Complete safety gear for industrial workers",
            price: 149.99,
            category: "safety",
            image: "../images/image2.jpg"        },
        {
            id: 3,
            title: "Maintenance Kit",
            description: "Essential maintenance supplies and tools",
            price: 199.99,
            category: "maintenance",
            image: "../images/image3.jpg"        },
        {
            id: 4,
            title: "Hydraulic System",
            description: "High-performance hydraulic systems for industrial machinery",
            price: 899.99,
            category: "automation",
            image: "../images/image4.jpg"        },
        {
            id: 5,
            title: "Automation Controls",
            description: "Advanced control systems for factory automation",
            price: 599.99,
            category: "automation",
            image: "../images/image5.png"        },
        {
            id: 6,
            title: "Precision Measuring Tools",
            description: "High-accuracy measuring instruments for quality control",
            price: 249.99,
            category: "tools",
            image: "../images/image6.jpg"        },
        {
            id: 7,
            title: "Industrial Gloves",
            description: "Heavy-duty protective gloves for industrial environments",
            price: 29.99,
            category: "safety",
            image: "../images/image7.jpg"        },
     
        {
            id: 8,
            title: "Lubricant Set",
            description: "Premium lubricants for machinery maintenance",
            price: 79.99,
            category: "maintenance",
            image: "../images/image8.jpg"        },
  
        {
            id: 9,
            title: "Welding Equipment",
            description: "Professional welding tools and accessories",
            price: 349.99,
            category: "tools",
            image: "../images/image9.jpg"        },
    
        {
            id: 10,
            title: "Safety Helmets",
            description: "Impact-resistant helmets with adjustable fit",
            price: 59.99,
            category: "safety",
            image: "../images/image10.jpg"        },
       
        {
            id: 11,
            title: "Diagnostic Scanner",
            description: "Advanced diagnostic tool for machinery troubleshooting",
            price: 499.99,
            category: "maintenance",
            image: "../images/image11.jpg"      
        },
        {
            id: 12,
            title: "Conveyor System",
            description: "Modular conveyor system for production lines",
            price: 1299.99,
            category: "automation",
            image: "https://www.shutterstock.com/image-photo/conveyor-system-in-industrial-factory-260nw-444444444.jpg"
        },
        {
            id: 13,
            title: "Power Drill Set",
            description: "Industrial-grade power drills with multiple attachments",
            price: 189.99,
            category: "tools",
            image: "https://www.shutterstock.com/image-photo/power-drill-set-on-wooden-background-260nw-333333333.jpg"
        },
        {
            id: 14,
            title: "Respirator Masks",
            description: "High-filtration respirators for hazardous environments",
            price: 39.99,
            category: "safety",
            image: "https://www.shutterstock.com/image-photo/respirator-masks-on-wooden-background-260nw-222222222.jpg"
        },
        {
            id: 15,
            title: "Bearing Replacement Kit",
            description: "Complete kit for bearing maintenance and replacement",
            price: 129.99,
            category: "maintenance",
            image: "https://www.shutterstock.com/image-photo/bearing-replacement-kit-on-wooden-background-260nw-111111111.jpg"
        },
        {
            id: 16,
            title: "PLC Controller",
            description: "Programmable logic controller for industrial automation",
            price: 799.99,
            category: "automation",
            image: "https://www.shutterstock.com/image-photo/plc-controller-on-wooden-background-260nw-101010101.jpg"
        },
        {
            id: 17,
            title: "Torque Wrench Set",
            description: "Precision torque wrenches for accurate fastening",
            price: 219.99,
            category: "tools",
            image: "https://www.shutterstock.com/image-photo/torque-wrench-set-on-wooden-background-260nw-202020202.jpg"
        },
        {
            id: 18,
            title: "Eye Protection Kit",
            description: "Various safety glasses for different industrial applications",
            price: 49.99,
            category: "safety",
            image: "https://www.shutterstock.com/image-photo/eye-protection-kit-on-wooden-background-260nw-303030303.jpg"
        }
    ];
    
    // Pagination variables
    const productsPerPage = 6;
    let currentPage = 1;
    let filteredProducts = [...allProducts];

    // DOM elements
    const productsGrid = document.getElementById('products-grid');
    const paginationNumbers = document.getElementById('pagination-numbers');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-products');

    // Initialize the page
    function init() {
        renderProducts();
        renderPagination();
        setupEventListeners();
    }

    // Render products for the current page
    function renderProducts() {
        // Clear the products grid
        productsGrid.innerHTML = '';
        
        // Calculate start and end indices for the current page
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const currentProducts = filteredProducts.slice(startIndex, endIndex);
        
        // If no products found
        if (currentProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-xl text-gray-600">No products found. Try adjusting your filters.</p>
                </div>
            `;
            return;
        }
        
        // Render each product
        currentProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white  animate__animated animate__fadeIn rounded-lg shadow-md overflow-hidden animate__animated animate__fadeIn';
            productCard.innerHTML = `
                <div class="h-48 relative ">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <h3 class="text-lg font-semibold mb-2">${product.title}</h3>
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-lg font-bold">$${product.price.toFixed(2)}</span>
                        <span class="text-sm px-2 py-1 bg-gray-200 rounded-full">${product.category}</span>
                    </div>
                    <button class="w-full bg-gray-800 text-white py-2 px-4 rounded hover:scale-105 transition-transform">
                        Add to Cart
                    </button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    // Render pagination controls
    function renderPagination() {
        // Calculate total pages
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        
        // Clear pagination numbers
        paginationNumbers.innerHTML = '';
        
        // Generate page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `relative inline-flex items-center px-4 py-2 border ${
                i === currentPage 
                    ? 'bg-gray-800 text-white border-gray-800' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`;
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
                renderPagination();
            });
            paginationNumbers.appendChild(pageButton);
        }
        
        // Update prev/next button states
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
        
        // Apply visual styling for disabled buttons
        if (prevPageBtn.disabled) {
            prevPageBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            prevPageBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
        
        if (nextPageBtn.disabled) {
            nextPageBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            nextPageBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    // Set up event listeners
    function setupEventListeners() {
        // Previous page button
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
                renderPagination();
            }
        });
        
        // Next page button
        nextPageBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
                renderPagination();
            }
        });
        
        // Category filter
        categoryFilter.addEventListener('change', () => {
            const category = categoryFilter.value;
            if (category === 'all') {
                filteredProducts = [...allProducts];
            } else {
                filteredProducts = allProducts.filter(product => product.category === category);
            }
            currentPage = 1;
            renderProducts();
            renderPagination();
        });
        
        // Search input
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm === '') {
                // If search is cleared, reapply just the category filter
                const category = categoryFilter.value;
                if (category === 'all') {
                    filteredProducts = [...allProducts];
                } else {
                    filteredProducts = allProducts.filter(product => product.category === category);
                }
            } else {
                // Apply search on top of category filter
                const category = categoryFilter.value;
                if (category === 'all') {
                    filteredProducts = allProducts.filter(product => 
                        product.title.toLowerCase().includes(searchTerm) || 
                        product.description.toLowerCase().includes(searchTerm)
                    );
                } else {
                    filteredProducts = allProducts.filter(product => 
                        product.category === category && (
                            product.title.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm)
                        )
                    );
                }
            }
            currentPage = 1;
            renderProducts();
            renderPagination();
        });
    }

    // Initialize the page
    init();
});