let currentSlide = 0;

async function loadSocialActivities() {
    try {
        const response = await fetch('social_data.json');
        const data = await response.json();
        const slider = document.getElementById('social-slider');
        
        data.forEach(item => {
            const slide = document.createElement('div');
            slide.className = 'social-card';
            slide.innerHTML = `
                <img src="${item.photo}" alt="${item.title}">
                <h3>${item.title}</h3>
                <a href="${item.link}" class="btn">View Details</a>
            `;
            slider.appendChild(slide);
        });
    } catch (error) {
        console.error("Error loading activities:", error);
    }
}

function moveSlide(direction) {
    const slider = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.social-card');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Initialize
loadSocialActivities();
