$(document).ready(function () {
    const tripItems = [
      {
        id: "trip1",
        title: "Paris Getaway",
        description: "Explore the beauty of the City of Love, Paris!",
      },
      {
        id: "trip2",
        title: "New York Adventure",
        description: "Experience the excitement of the Big Apple, New York City!",
      },
      {
        id: "trip3",
        title: "Tropical Paradise",
        description: "Relax and unwind on a tropical paradise island!",
      },
      {
        id: "trip4",
        title: "Mountain Retreat",
        description: "Escape to the serene beauty of the mountains!",
      },
      {
        id: "trip5",
        title: "Cultural Exploration",
        description: "Immerse yourself in diverse cultures and traditions!",
      },
    ];
  
    function createTripItemCard(item) {
      const card = $("<div>").addClass("trip-card");
      card.html(`
        <h3 id="trip-title">${item.title}</h3>
        <p id="trip-description">${item.description}</p>
        <button id="purchase-ticket">Purchase Ticket</button>
      `);
      return card;
    }
  
    function displayTripDetails(tripId) {
      const tripDetails = $("#trip-details");
      tripDetails.empty();
  
      const selectedTrip = tripItems.find(item => item.id === tripId);
      if (selectedTrip) {
        const tripCard = createTripItemCard(selectedTrip);
        tripDetails.append(tripCard);
      }
    }
  
    $("#trip-options li").on("click", function () {
      const tripId = $(this).attr("data-trip-id");
      displayTripDetails(tripId);
    });
  });
  