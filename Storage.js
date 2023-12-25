
// registration.js

function submitRegistration(event) {
    event.preventDefault();
  
    // Get user input values
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Store user input in local storage
    const userData = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: email,
      password: password
    };
  
    localStorage.setItem('userData', JSON.stringify(userData));
  
    // Add registration logic here (e.g., redirect to a confirmation page)
    alert("Registration successful. Redirecting to login page.");
    window.location.href = "loginPage.html"; // Change the URL to your login page
  }
  