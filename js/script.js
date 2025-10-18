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

// Load Events from Local API: events.json
function loadEvents() {
    const container = document.querySelector("#events-container");
    container.innerHTML = "<p>Loading events...</p>";

    fetch("data/events.json")
        .then(response => response.json())
        .then(events => {
            container.innerHTML = "";
            events.forEach(event => {
                const card = document.createElement("div");
                card.classList.add("col-md-4");
                card.innerHTML = `
                    <div class="card shadow-sm h-100">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                        <div class="card-body">
                            <h5 class="card-title">${event.title}</h5>
                            <p class="card-text">${event.description}</p>
                            <p class="text-muted">${event.date}</p>
                        </div>
                    </div>`;
                container.appendChild(card);
            });
        })
        .catch(error => {
            container.innerHTML = `<p class="text-danger">Error loading events: ${error.message}</p>`;
        });
}


// Load Dining Data from Local API: dining.json
function loadDining() {
    const container = document.querySelector("#dining-container");
    container.innerHTML = "<p>Loading dining options...</p>";

    fetch("data/dining.json")
        .then(response => response.json())
        .then(diningOptions => {
            container.innerHTML = "";
            diningOptions.forEach(place => {
                const card = document.createElement("div");
                card.classList.add("col-md-4");
                card.innerHTML = `
                    <div class="card shadow-sm h-100">
                        <img src="${place.image}" class="card-img-top" alt="${place.name}">
                        <div class="card-body">
                            <h5 class="card-title">${place.name}</h5>
                            <p class="card-text">${place.description}</p>
                            <p class="text-muted">Hours: ${place.hours}</p>
                        </div>
                    </div>`;
                container.appendChild(card);
            });
        })
        .catch(error => {
            container.innerHTML = `<p class="text-danger">Error loading dining data: ${error.message}</p>`;
        });
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
