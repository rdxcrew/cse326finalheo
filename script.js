// Initialize the map
const map = L.map('map').setView([31.252636, 75.703287], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 100,
}).addTo(map);

// Add a marker for the user's location
const marker = L.marker([31.252636, 75.703287]).addTo(map);

// Function to update the marker's position
function updateLocation(lat, lng) {
    marker.setLatLng([lat, lng]);
}


// Example: Update location every 5 seconds (replace with actual location tracking)
setInterval(() => {
    const lat = 31.252636 + (Math.random() - 0.5) * 0.01; // Simulated random movement
    const lng = 75.703287 + (Math.random() - 0.5) * 0.01;
    updateLocation(lat, lng);
}, 5000); 

