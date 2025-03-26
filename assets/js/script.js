// Array to store current slide index for each slideshow
let slideIndices = [0, 0, 0];
const slideshows = document.getElementsByClassName("slideshow-container");

// Initialize each slideshow
for (let i = 0; i < slideshows.length; i++) {
    initializeSlideshow(i);
}

function initializeSlideshow(slideshowIndex) {
    // Show the first slide
    showSlide(0, slideshowIndex);

    // Start auto-sliding
    setInterval(() => {
        changeSlide(1, slideshowIndex);
    }, 5000);
}

// Show the specified slide in the specified slideshow
function showSlide(n, slideshowIndex) {
    const slides = slideshows[slideshowIndex].getElementsByClassName("slide");

    // Reset slide index if out of bounds
    if (n >= slides.length) {
        slideIndices[slideshowIndex] = 0;
    } else if (n < 0) {
        slideIndices[slideshowIndex] = slides.length - 1;
    } else {
        slideIndices[slideshowIndex] = n;
    }

    // Hide all slides in this slideshow
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Display the current slide
    slides[slideIndices[slideshowIndex]].classList.add("active");
}

// Change slide by increment in the specified slideshow
function changeSlide(n, slideshowIndex) {
    showSlide(slideIndices[slideshowIndex] + n, slideshowIndex);
}




//Header
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation buttons for articles
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const direction = this.classList.contains('prev') ? -1 : 1;
            const articlesContainer = this.closest('.dropdown').querySelector('.articles-container');
            const articles = articlesContainer.querySelectorAll('.article');
            
            if (direction === 1) {
                // Move first article to the end
                articlesContainer.appendChild(articles[0]);
            } else {
                // Move last article to the beginning
                articlesContainer.insertBefore(articles[articles.length - 1], articles[0]);
            }
            
            e.stopPropagation(); // Prevent dropdown from closing
        });
    });
});