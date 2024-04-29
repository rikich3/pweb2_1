function addEvent() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const YOUR_DEPLOYMENT_URL = "https://script.google.com/macros/s/AKfycbwIcIOS30U3pxePN6YYqF2aii4PbEyxVdqu2d6z98eh5E4Zq_0qjcjlabK3cbQv6XHk/exec";
    
    // Send a POST request to the GAS web app endpoint  
    fetch(YOUR_DEPLOYMENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        startDate,
        endDate,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Event added successfully!");
          // Clear the form
          document.getElementById("eventForm").reset();
        } else {
          alert("Error adding event: " + data.error);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred. Please try again later.");
      });
  }
  