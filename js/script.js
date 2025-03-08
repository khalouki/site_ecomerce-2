document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const mobileSidebar = document.getElementById('mobile-sidebar');

    if (mobileMenuButton && closeSidebarButton && mobileSidebar) {
        // Open sidebar
        mobileMenuButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event propagation
            mobileSidebar.classList.remove('-translate-x-full');
        });

        // Close sidebar
        closeSidebarButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event propagation
            mobileSidebar.classList.add('-translate-x-full');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (event) => {
            if (!mobileSidebar.contains(event.target)) {
                mobileSidebar.classList.add('-translate-x-full');
            }
        });
    }
    // Header scroll effect
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                header.classList.remove('py-6');
                header.classList.add('py-3', 'shadow-lg');
            } else {
                header.classList.add('py-6');
                header.classList.remove('py-3', 'shadow-lg');
            }
        });
    }

    // Hero Image Carousel
    //const heroCarousel = document.querySelector('.hero-carousel');
    // Array of image URLs
    const images = [
        'images/image1.jpeg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg'
    ];

    const heroCarousel = document.querySelector('.hero-carousel');
    let currentSlide = 0;

    // Function to create and append slides
    function createSlides() {
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.classList.add('carousel-slide', 'absolute', 'inset-0', 'bg-cover', 'bg-center', 'transition-opacity', 'duration-1000', 'ease-in-out');
            slide.style.backgroundImage = `url('${image}')`;
            slide.style.opacity = index === 0 ? 1 : 0; // Show the first slide initially
            heroCarousel.appendChild(slide);
        });
    }

    // Function to show a specific slide
    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? 1 : 0;
        });
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }

    // Initialize the carousel
    createSlides();

    // Automatically change slides every 5 seconds
    setInterval(nextSlide, 5000);


    // Product Scroller
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    const productsContainer = document.getElementById('products-container');

    if (scrollLeftBtn && scrollRightBtn && productsContainer) {
        scrollLeftBtn.addEventListener('click', function () {
            productsContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', function () {
            productsContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = document.getElementById('submit-button');

    if (contactForm && formStatus && submitButton) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Reset previous errors
            document.querySelectorAll('.text-red-600').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('input, textarea').forEach(el => {
                el.parentElement.classList.remove('form-error');
            });

            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate form
            let isValid = true;

            if (!name) {
                document.getElementById('name-error').textContent = 'Name is required';
                document.getElementById('name-error').classList.remove('hidden');
                document.getElementById('name').parentElement.classList.add('form-error');
                isValid = false;
            }

            if (!email) {
                document.getElementById('email-error').textContent = 'Email is required';
                document.getElementById('email-error').classList.remove('hidden');
                document.getElementById('email').parentElement.classList.add('form-error');
                isValid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address';
                document.getElementById('email-error').classList.remove('hidden');
                document.getElementById('email').parentElement.classList.add('form-error');
                isValid = false;
            }

            if (!subject) {
                document.getElementById('subject-error').textContent = 'Subject is required';
                document.getElementById('subject-error').classList.remove('hidden');
                document.getElementById('subject').parentElement.classList.add('form-error');
                isValid = false;
            }

            if (!message) {
                document.getElementById('message-error').textContent = 'Message is required';
                document.getElementById('message-error').classList.remove('hidden');
                document.getElementById('message').parentElement.classList.add('form-error');
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            // Show loading state
            submitButton.disabled = true;
            const originalButtonText = submitButton.textContent;
            submitButton.innerHTML = '<span class="loading-spinner"></span>Sending...';

            // Simulate form submission (replace with actual form submission in production)
            setTimeout(function () {
                // Show success message
                formStatus.classList.remove('hidden', 'bg-red-50', 'text-red-800');
                formStatus.classList.add('bg-green-50', 'text-green-800');
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';

                // Reset form
                contactForm.reset();

                // Reset button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }, 1500);
        });
    }
});
// Function to add animation classes when elements are in view
function animateOnScroll() {
    const serviceItems = document.querySelectorAll('.service-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the element is visible
    });

    serviceItems.forEach((item) => {
        observer.observe(item);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', animateOnScroll);
