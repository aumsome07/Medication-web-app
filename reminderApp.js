// reminderApp.js

function setReminders(event) {
    event.preventDefault();
  
    // Retrieve values from the form
    const medicineName = document.getElementById('medicineName').value;
    const interval = document.getElementById('interval').value;
  
    // Validate input values
    if (!medicineName || !interval || isNaN(interval)) {
      alert('Please provide valid input for medicine name and interval.');
      return;
    }
  
    // Convert interval to milliseconds
    const intervalMilliseconds = interval * 60 * 1000;
  
    // Set a reminder using setInterval
    const reminderIntervalId = setInterval(() => {
      alert(`Reminder: It's time to take ${medicineName}`);
    }, intervalMilliseconds);
  
    // Example: Save the intervalId in local storage for future use
    localStorage.setItem('reminderIntervalId', reminderIntervalId);
  
    // Additional logic if needed
  }
  
  // Additional logic: Clear reminders when the page is unloaded
  window.addEventListener('beforeunload', () => {
    const reminderIntervalId = localStorage.getItem('reminderIntervalId');
    if (reminderIntervalId) {
      clearInterval(reminderIntervalId);
      localStorage.removeItem('reminderIntervalId');
    }
  });
  