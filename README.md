# Cookie Consent Popup

A simple project to display a cookie consent popup using HTML, CSS, and JavaScript. This popup asks users for their cookie consent on their first visit and stores their choice (accept or decline) in the browser’s local storage, ensuring the popup does not reappear on subsequent visits.

## Features

- Displays a cookie consent popup on the user's first visit.
- Stores user consent choice in `localStorage` for persistence across sessions.
- Hides the popup on subsequent visits if consent has already been given.

## How It Works

1. When the page loads, the script checks `localStorage` for a consent status.
2. If no status is found, the cookie consent banner is displayed.
3. When the user clicks "Accept" or "Decline," their choice is saved in `localStorage`, and the banner is hidden.
4. The banner does not reappear on future visits unless `localStorage` is cleared.

## Technologies Used

- **HTML**: Structure of the cookie consent popup.
- **CSS**: Styling for the popup.
- **JavaScript**: Logic for displaying, hiding, and persisting user consent status.

## Project Setup

1. Clone this repository:
   ```bash
   git clone <repository-url>
2. Open the project folder and run the HTML file   in a web browser.

## Code Explanation

The main JavaScript file contains the following logic:
- DOMContentLoaded: Ensures the script runs after the page has fully loaded.
- localStorage: Used to check and store the usr's consent choice, preventing
the popup from appearing again once consent is given.
- Even Listeners: Attach click events to "Accept" and "Decline" buttons too save the user's choice and hide the banner.
