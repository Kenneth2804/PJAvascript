const toggleButton = document.querySelector('.toggle-button');
const navLinksContainer = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

const contactButton = document.getElementById('contactButton');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

contactButton.addEventListener('click', () => {
  contactModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  contactModal.style.display = 'none';
});
