document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});

// Initialize Swiper
const swiper = new Swiper('#projects-carousel', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// Fetch GitHub pinned repos and dynamically add to the carousel
fetch('https://api.github.com/users/Sam2368/pinned')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.querySelector('#projects-carousel .swiper-wrapper');

        data.forEach(project => {
            // Create the project slide
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide', 'transform', 'hover:scale-110', 'transition-transform', 'duration-500', 'ease-in-out');
            slide.innerHTML = `
                <a href="${project.html_url}" target="_blank" class="group block bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <img src="${project.owner.avatar_url}" alt="${project.name}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 group-hover:text-purple-500">${project.name}</h3>
                        <p class="text-gray-400 text-sm">${project.description}</p>
                    </div>
                </a>
            `;
            projectsContainer.appendChild(slide);
        });

        // Re-initialize Swiper after adding slides
        swiper.update();
    })
    .catch(error => console.error('Error fetching GitHub projects:', error)); // Handle error if API request fails

// Scroll Animations using ScrollReveal
ScrollReveal().reveal('.reveal', {
    delay: 300,
    distance: '50px',
    easing: 'ease-in-out',
});

// Parallax Effect using GSAP
gsap.to("#background-video", {
    yPercent: 20, // Adjust the percentage for desired parallax effect
    ease: "none",
    scrollTrigger: {
        trigger: "#hero", // Use the section ID where you want the parallax to occur
        start: "top top",
        end: "bottom top",
        scrub: true, // Enable smooth scrubbing effect
    }
});

// Add any other custom JavaScript you need here
