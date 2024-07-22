document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});

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

fetch('https://api.github.com/users/adesinasam/pinned')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.querySelector('#projects-carousel .swiper-wrapper');

        data.forEach(project => {
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

        swiper.update();
    })
    .catch(error => console.error('Error fetching GitHub projects:', error));

ScrollReveal().reveal('.reveal', {
    delay: 300,
    distance: '50px',
    easing: 'ease-in-out',
});

gsap.to("#hero", {
    backgroundImage: "linear-gradient(to right, #6b21a8, #db2777)",
    ease: "none",
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

gsap.to(".text-transparent", {
    colorTransition: "text-white",
    ease: "none",
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});
