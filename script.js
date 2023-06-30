document.querySelectorAll('a[href^="."]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function validateForm() {
  var name = document.getElementById('name').value;
  var number = document.getElementById('number').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var nameRegex = /^[a-zA-Z\s]+$/;
  var numberRegex = /^\d+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var isValid = true;

  if (!nameRegex.test(name)) {
    document.getElementById('name-error').innerHTML = 'Please enter a valid name';
    isValid = false;
  } else {
    document.getElementById('name-error').innerHTML = '';
  }

  if (!numberRegex.test(number)) {
    document.getElementById('number-error').innerHTML = 'Please enter a valid number';
    isValid = false;
  } else {
    document.getElementById('number-error').innerHTML = '';
  }

  if (!emailRegex.test(email)) {
    document.getElementById('email-error').innerHTML = 'Please enter a valid email';
    isValid = false;
  } else {
    document.getElementById('email-error').innerHTML = '';
  }

  if (message === '') {
    document.getElementById('message-error').innerHTML = 'Please enter a message';
    isValid = false;
  } else {
    document.getElementById('message-error').innerHTML = '';
  }

  if (isValid) {
    document.getElementById('success-message').innerHTML = 'Form submitted successfully!';
    document.getElementById('form').reset();
  }
}
