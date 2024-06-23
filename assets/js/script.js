document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let formValid = true;
  const formElements = this.elements;
  
  document.querySelectorAll('.error').forEach(function(errorElement) {
    errorElement.style.display = 'none';
  });

  // Validate fields
  for (let element of formElements) {
    if (element.required && !element.value) {
      formValid = false;
      showError(element, 'This field is required');
    } else if (element.type === 'email' && !validateEmail(element.value)) {
      formValid = false;
      showError(element, 'Please enter a valid email address');
    }
  }

  if (formValid) {
    document.getElementById('successBanner').style.display = 'block';
    setTimeout(() => {
      document.getElementById('successBanner').style.display = 'none';
    }, 5000); 
    this.reset();
  }
});

function showError(element, message) {
  const errorElement = element.parentElement.querySelector('.error');
  errorElement.textContent = message;
  errorElement.style.display = 'block';
  element.focus();
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
