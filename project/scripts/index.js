function updateFooterDates() {
  const yearSpan = document.getElementById('currentyear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const lm = document.getElementById('lastModified');
  if (lm) {
    
    lm.textContent = `Last Modification: ${document.lastModified}`;
  }
}


document.addEventListener('DOMContentLoaded', updateFooterDates);


// use of arrays
const activities = [
    { id: 1, name: "Bungee Jumping", type: "Extreme" },
    { id: 2, name: "Catamaran", type: "Relax" },
    { id: 3, name: "Water Park", type: "Family" }
];

// other function of JS
function displayFeaturedActivity() {
    // use of objects
    const selected = activities[0]; 
    
    // manipulation of DOM (select and modify)
    const container = document.getElementById('featured-activity');
    if (container) {
        // Template Literals (' y ${})
        container.innerHTML = `<h3>Featured: ${selected.name}</h3>
                               <p>Category: ${selected.type}</p>`;
    }
}

function getWelcomeMessage() {
    const hour = new Date().getHours();
    let message;

    // Conditional Branching (If/Else): display a message based on the time of day to validate the form.
    if (hour < 12) {
        message = "Good Morning! Discover Cabra Corral.";
    } else if (hour < 20) {
        message = "Good Afternoon! Enjoy the sunset.";
    } else {
        message = "Good Evening! Plan your next adventure.";
    }
    return message;
}

function handleVisits() {
    // Select the DOM element where the visits will be displayed
    const visitDisplay = document.querySelector("#visit-count-display");

    // Retrieve the value from localStorage (Requirement 15)
    // We use Number() to ensure the value is treated as a digit
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    // Conditional Branching : 
    // If it's the first time, show a welcome message; otherwise, show the count.
    if (numVisits !== 0) {
        // Template Literals 
        visitDisplay.textContent = `Page Visits: ${numVisits}`;
    } else {
        visitDisplay.textContent = `Welcome! This is your first visit.`;
    }

    // 4. Increment the counter and save it back to localStorage (Requirement 15 of Rubric)
    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    if (typeof updateFooterDates === "function") {
        updateFooterDates(); 
    }
    handleVisits();
});