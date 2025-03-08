document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    const lucide = window.lucide || {};
    lucide.createIcons();
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-scroll-animation]');
        
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animate__animated')) {
                // Add the animation classes
                element.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }
    
    // Initial check for elements in viewport
    handleScrollAnimations();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimations);

});
