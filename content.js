// Wait for the DOM to fully load before running the code
document.addEventListener("DOMContentLoaded", function() {
  // Select elememts by their IDs and store them in variables
  const cookieBanner = document.getElementById("main-container");
  const  declinetIt = document.getElementById("decline-btn");
  const acceptIt = document.getElementById("accept-btn");

  // Check if cookie consent has already been given
  // if "cookieConsent " is not set in local storage, show the banner
  if (!localStorage.getItem("cookieCosent")) {
    cookieBanner.style.display = "block"; // Display the cookie consent banner
  }
// Add an event listener for the "Accept" button click
  acceptIt.addEventListener("click", function() {
    localStorage.setItem("cookieConsent", "accepted"); // Store "accepted" in local storage under "cookieConsent"
    cookieBanner.style.display = "none"; // Hide the cookie consent Banner
  });

  // Add an event listener for the "Decline" button click
  declinetIt.addEventListener("click", function() {
    localStorage.setItem("cookieConsent", "declined"); // Store "declined" in local storage under "cookieConsent"
    cookieBanner.style.display = "none"; // Hide the cookie consent Banner
  });


});
