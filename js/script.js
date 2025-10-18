document.addEventListener("DOMContentLoaded", () => {
    console.log("Campus Life Super App Loaded!");
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === currentPage);
    });

    if (currentPage === "events.html") {
        loadEvents();
    } else if (currentPage === "dining.html") {
        loadDining();
    } else if (currentPage === "map.html") {
        activateMapPreview();
    }
});

// EVENTS
function loadEvents() {
    const container = document.getElementById("events-container");
    container.innerHTML = `
        <div class="col-md-4">
            <div class="card shadow-sm">
                <img src="images/icphoto5.jpg" class="card-img-top" alt="Homecoming Parade">
                <div class="card-body">
                    <h5 class="card-title">Homecoming Parade</h5>
                    <p class="card-text">Join us for the annual parade and cheer for your team!</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card shadow-sm">
                <img src="images/icphoto6.jpg" class="card-img-top" alt="Follies Talent Show">
                <div class="card-body">
                    <h5 class="card-title">Follies Talent Show</h5>
                    <p class="card-text">Come showcase your talents at the Follies Talent Show!</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card shadow-sm">
                <img src="images/icphoto7.jpg" class="card-img-top" alt="Women's Basketball Game">
                <div class="card-body">
                    <h5 class="card-title">Women's Basketball Game</h5>
                    <p class="card-text">Come cheer on the Lady Blues in their game!</p>
                </div>
            </div>
        </div>
    `;
}

// DINING
function loadDining() {
    const container = document.getElementById("dining-container");
    container.innerHTML = `
        <div class="col-md-4">
            <div class="card shadow-sm">
                <img src="images/icphoto2.jpg" class="card-img-top" alt="Cummings Dining Hall">
                <div class="card-body">
                    <h5 class="card-title">Cummings Dining Hall</h5>
                    <p class="card-text">Buffet-style meals open daily — breakfast, lunch, and dinner.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card shadow-sm">
                <img src="images/icphoto4.jpg" class="card-img-top" alt="Campus Starbucks">
                <div class="card-body">
                    <h5 class="card-title">Campus Starbucks</h5>
                    <p class="card-text">Grab your morning latte or a snack between classes!</p>
                </div>
            </div>
        </div>
    `;
}

// MAP
function activateMapPreview() {
    const alertBox = document.querySelector(".alert-info");
    const mapImg = document.createElement("img");
    mapImg.src = "images/icmap.jpg";
    mapImg.alt = "Interactive Campus Map";
    mapImg.classList.add("img-fluid", "rounded", "shadow-sm", "mt-4");

    mapImg.addEventListener("mouseenter", () => {
        mapImg.style.filter = "brightness(1.2)";
        alertBox.textContent = "You’re viewing the campus center area!";
    });
    mapImg.addEventListener("mouseleave", () => {
        mapImg.style.filter = "brightness(1)";
        alertBox.textContent = "Hover over the map to highlight key areas!";
    });

    document.querySelector(".content .container").appendChild(mapImg);
}

// --- Search Functionality for Events and Dining ---

// Events search
const eventSearch = document.getElementById("event-search");
if (eventSearch) {
  eventSearch.addEventListener("input", () => {
    const query = eventSearch.value.toLowerCase();
    const cards = document.querySelectorAll("#events-container .card");
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
  });
}

// Dining search
const diningSearch = document.getElementById("dining-search");
if (diningSearch) {
  diningSearch.addEventListener("input", () => {
    const query = diningSearch.value.toLowerCase();
    const cards = document.querySelectorAll("#dining-container .card");
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
  });
}
