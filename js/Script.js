// Change h1 text after document load
document.addEventListener("DOMContentLoaded", function() {
  const cruiseNameElement = document.getElementById("cruiseName");
  cruiseNameElement.textContent = "Welcome to Your Cruise Name";
});

// Fetch weather data from Open Weather API
fetchWeatherData();

function fetchWeatherData() {
  const apiKey = "YOUR_OPEN_WEATHER_API_KEY";
  const city = "YOUR_CITY_NAME";
  const weatherDataElement = document.getElementById("weatherData");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherDescription = data.weather[0].description;
      const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius

      weatherDataElement.innerHTML = `<p>Weather: ${weatherDescription}</p><p>Temperature: ${temperature}°C</p>`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}

// Create accordion sections
const accordionSections = [
  { title: "Cruise Map", content: "Content for Cruise Map section." },
  { title: "Additional Information", content: "Content for Additional Information section." },
  { title: "FAQ", content: "Content for FAQ section." }
];

const accordionSectionsElement = document.getElementById("accordionSections");
accordionSections.forEach((section, index) => {
  const sectionId = `section${index}`;
  accordionSectionsElement.innerHTML += `
    <div class="card">
      <div class="card-header" id="${sectionId}">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#${sectionId}Collapse" aria-expanded="true" aria-controls="${sectionId}Collapse">
            ${section.title}
          </button>
        </h2>
      </div>

      <div id="${sectionId}Collapse" class="collapse" aria-labelledby="${sectionId}" data-parent="#accordionSections">
        <div class="card-body">
          ${section.content}
        </div>
      </div>
    </div>
  `;
});


// Create trip options
const tripOptions = [
  { name: "Trip 1", duration: 3, destinations: ["Destination A"], price: 1500 },
  { name: "Trip 2", duration: 7, destinations: ["Destination A", "Destination B"], price: 2500 },
  // ... (more trip options)
];

const tripOptionsElement = document.getElementById("tripOptions");
tripOptions.forEach((trip, index) => {
  const tripCard = document.createElement("div");
  tripCard.classList.add("tripCard");
  tripCard.innerHTML = `
    <h3>${trip.name}</h3>
    <p>Duration: ${trip.duration} days</p>
    <p>Destinations: ${trip.destinations.join(", ")}</p>
    <p>Price: ${trip.price} ZAR</p>
    <button class="purchaseBtn" style="display: none;">Purchase Ticket</button>
  `;

  tripCard.addEventListener("click", () => {
    // Clear previous active trip
    const activeTrip = document.querySelector(".activeTrip");
    if (activeTrip) {
      activeTrip.classList.remove("activeTrip");
      activeTrip.querySelector(".purchaseBtn").style.display = "none";
    }

    // Set new active trip
    tripCard.classList.add("activeTrip");
    tripCard.querySelector(".purchaseBtn").style.display = "block";
  });

  tripOptionsElement.appendChild(tripCard);
});


// Create purchases table
const purchasesTableElement = document.getElementById("purchasesTable");
const removeAllBtn = document.getElementById("removeAllBtn");

removeAllBtn.addEventListener("click", () => {
  removeAllPurchases();
});

function removeAllPurchases() {
  const purchasesRows = purchasesTableElement.querySelectorAll("tbody tr");
  purchasesRows.forEach(row => {
    row.remove();
  });
}

// Add purchases to the table
function addPurchaseToTable(tripCode, ticketQuantity, totalCost) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${tripCode}</td>
    <td>${ticketQuantity}</td>
    <td>${totalCost} ZAR</td>
    <td><button class="removePurchaseBtn">Remove</button></td>
  `;

  const removePurchaseBtn = row.querySelector(".removePurchaseBtn");
  removePurchaseBtn.addEventListener("click", () => {
    row.remove();
  });

  purchasesTableElement.querySelector("tbody").appendChild(row);
}

// "Purchase" button functionality
const purchaseButton = document.createElement("button");
purchaseButton.innerText = "Purchase";
purchaseButton.addEventListener("click", () => {
  showSuccessMessage();
});

function showSuccessMessage() {
  alert("Successful Purchase");
}

