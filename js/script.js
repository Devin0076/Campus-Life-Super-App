// script.js

// Display a message when the page loads
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

    // Example placeholder interactivity for each page
    if (currentPage === "events.html") {
        alert("Welcome to the Events page! Upcoming events will appear soon.");
    } else if (currentPage === "dining.html") {
        alert("Welcome to the Dining page! Menu options will appear soon.");
    } else if (currentPage === "map.html") {
        alert("Welcome to the Map page! Campus map data will appear soon.");
    }
});
