// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Campus Life Super App Loaded!");

    // Highlight the active nav link based on current page
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Smooth scroll for same-page links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Hover animation for buttons
    const buttons = document.querySelectorAll("button, .btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "transform 0.2s ease";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Page-specific functionality
    if (currentPage === "" || currentPage === "index.html") {
        const eventBtn = document.getElementById("view-events-btn");
        const mapBtn = document.getElementById("view-map-btn");
        const diningBtn = document.getElementById("view-dining-btn");

        if (eventBtn) eventBtn.addEventListener("click", () => {
            window.location.href = "events.html";
        });
        if (mapBtn) mapBtn.addEventListener("click", () => {
            window.location.href = "map.html";
        });
        if (diningBtn) diningBtn.addEventListener("click", () => {
            window.location.href = "dining.html";
        });
    }

    //  Events Page
    if (currentPage === "events.html") {
        const events = [
            { name: "Homecoming Festival", date: "Oct 25", category: "Campus" },
            { name: "Coding Workshop", date: "Nov 3", category: "Academic" },
            { name: "Jazz Night", date: "Nov 10", category: "Music" },
            { name: "Career Fair", date: "Nov 15", category: "Professional" },
        ];

        const eventsContainer = document.getElementById("events-container");
        const searchInput = document.getElementById("event-search");

        function renderEvents(list) {
            eventsContainer.innerHTML = "";
            list.forEach(event => {
                const card = document.createElement("div");
                card.classList.add("event-card");
                card.innerHTML = `
                    <h3>${event.name}</h3>
                    <p>${event.date} • ${event.category}</p>
                `;
                eventsContainer.appendChild(card);
            });
        }

        renderEvents(events);

        // Filter as user types
        searchInput.addEventListener("input", (e) => {
            const keyword = e.target.value.toLowerCase();
            const filtered = events.filter(event =>
                event.name.toLowerCase().includes(keyword) ||
                event.category.toLowerCase().includes(keyword)
            );
            renderEvents(filtered);
        });
    }

    // Dining Page
    if (currentPage === "dining.html") {
        const diningOptions = [
            { name: "Campus Café", type: "Coffee", hours: "8am - 8pm" },
            { name: "Student Grill", type: "Burgers", hours: "10am - 10pm" },
            { name: "Vegan Vibes", type: "Healthy", hours: "11am - 9pm" },
            { name: "Late Night Pizza", type: "Pizza", hours: "5pm - 2am" },
        ];

        const diningContainer = document.getElementById("dining-container");
        const diningSearch = document.getElementById("dining-search");

        function renderDining(list) {
            diningContainer.innerHTML = "";
            list.forEach(place => {
                const card = document.createElement("div");
                card.classList.add("dining-card");
                card.innerHTML = `
                    <h3>${place.name}</h3>
                    <p>${place.type}</p>
                    <small>${place.hours}</small>
                `;
                diningContainer.appendChild(card);
            });
        }

        renderDining(diningOptions);

        // Filter as user types
        diningSearch.addEventListener("input", (e) => {
            const keyword = e.target.value.toLowerCase();
            const filtered = diningOptions.filter(place =>
                place.name.toLowerCase().includes(keyword) ||
                place.type.toLowerCase().includes(keyword)
            );
            renderDining(filtered);
        });
    }

    //  Map Page
    if (currentPage === "map.html") {
        const mapContainer = document.getElementById("map-container");
        if (mapContainer) {
            mapContainer.innerHTML = `
                <h3>Campus Map Coming Soon!</h3>
                <p>We’re adding an interactive map with building info and directions.</p>
            `;
        }
    }
});
