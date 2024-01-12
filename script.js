// Function to handle the intersection changes
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If the element is intersecting, add the "visible" class
            entry.target.classList.add('fadeInUp');
            // Unobserve the element to improve performance
            observer.unobserve(entry.target);
        }
    });
}

// Set up Intersection Observer with the handleIntersection function
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger the callback when 50% of the element is in the viewport
});

// Select all elements with the class "fadeimg"
const fadeimgElements = document.querySelectorAll('.fadeimg');

// Observe each element
fadeimgElements.forEach(element => {
    observer.observe(element);
});
