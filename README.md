# Neighborhood Maps App
## Udacity Front-End Nanodegree Project 7

## TL;DR
* Clone this repo from https://github.com/Seleah/neighborhood-map-react
* Run `npm install`
* Run `npm start`

Note that the default service worker is used in this app (bootstrapped with create-react-app) and so it only works in production build.


This project uses React along with some APIs. Namely:

* Google Maps
* FourSquare
* google-maps-react for primary map display

## Environment Setup

This project utilizes environment variables for configuration. You need to create a `.env` file in the root directory of the project to provide these variables.

1.  **Create the `.env` file:**
    Create a file named `.env` in the project's root directory.

2.  **Populate the `.env` file:**
    Add the following environment variables to your `.env` file, replacing the placeholder values with your actual credentials or configurations:
    * REACT_APP_FOURSQUARE_CLIENT_ID
    * REACT_APP_FOURSQUARE_CLIENT_SECRET
    * REACT_APP_GOOGLE_API_KEY

## Features
A list of Ramen restaurants in the Portland, Oregon area has been created. These locations display as markers on the map. Clicking a marker displays an info box containing the name of the restaurant and the address. On the left of the screen is a list of the venues and a text box at the top. Typing into the box will show a list of locations accordingly. Clicking a location in the list activates the marker on the map as if it had been clicked. Clicking anywhere on the map closes any active info display.