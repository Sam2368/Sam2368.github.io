document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const footer = document.querySelector('footer');
footer.innerHTML += `
  <a href="https://twitter.com/@adesinasam68" target="_blank" class="text-white">Twitter</a>`;
    const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (event) => {
  const nameField = contactForm.querySelector('[name="name"]');
  const emailField = contactForm.querySelector('[name="email"]');
  const messageField = contactForm.querySelector('[name="message"]');

  if (!nameField.value || !emailField.value || !messageField.value) {
    event.preventDefault();
    alert('Please fill out all fields.');
  }
});
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Check if the current URL is not the root path
    if (window.location.pathname !== '/') {
        // Show the 404 section and hide the other sections
        document.getElementById('not-found').classList.remove('hidden');
        document.querySelectorAll('section:not(#not-found)').forEach(section => {
            section.classList.add('hidden');
        });
    }

    // Swiper and other functionality
    // ...
});
