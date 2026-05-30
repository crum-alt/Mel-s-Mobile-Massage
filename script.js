```javascript
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Booking Form Message
const bookingForm = document.querySelector('.booking-form');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Thank you for booking with Mel Mobile Massage!');

  bookingForm.reset();
});
```