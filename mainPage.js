

// Function to save data to localStorage
function saveDataToLocalStorage() {
    // Retrieve values from the form
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const selectedDisease = document.getElementById('selectedDisease').value;
    const otherDisease = document.getElementById('otherDisease').value;
  
    // Create an object to store the data
    const userData = {
      age,
      gender,
      selectedDisease,
      otherDisease,
    };
  
    // Convert the object to a JSON string and save it to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  
  // Function to be called on form submission
  function submitMainAppForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Call the function to save data to localStorage
    saveDataToLocalStorage();
  
    // Additional logic if needed after saving data
    
  
    // Example: Alert the user that data has been saved
    alert('Data has been saved!');
    window.location.href = "Reminder.html";
  }
    