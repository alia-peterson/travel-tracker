// FILE IMPORTS
import domUpdates from './domUpdates'
import fetchApi from './fetchApi'

import './css/index.scss'

import Traveler from './traveler'
import Agent from './agent'
import Trip from './trip'
import Destination from './destination'

// QUERY SELECTORS AND GLOBAL VARIABLES
const travelerLoginButton = document.querySelector('#button-traveler')
const agentLoginButton = document.querySelector('#button-agent')
const logoffButton = document.querySelector('#button-logoff')
const dashboardView = document.querySelector('.dashboard')
const loginView = document.querySelector('.login')
const travelerUsername = document.querySelector('#name-traveler')
const travelerPassword = document.querySelector('#pass-traveler')

let currentTraveler


// EVENT LISTENERS
travelerLoginButton.addEventListener('click', authenticateUser)
agentLoginButton.addEventListener('click', authenticateUser)
logoffButton.addEventListener('click', toggleScreen)

// FETCH SERVER DATA
const tripsResponse = fetchApi.getAllTrips()
const destinationsResponse = fetchApi.getAllDestinations()

// USER INFORMATION POPULATION
function authenticateUser() {
  if (travelerUsername.value.includes('traveler') &&
      travelerPassword.value === 'travel2020') {
    const travelerID = travelerUsername.value.slice(8)

    fetchApi.getSpecificTraveler(travelerID)
      .then(traveler => createTravelerProfile(traveler))

    toggleScreen()
  }
}

function createTravelerProfile(traveler) {
  currentTraveler = new Traveler(traveler)
  domUpdates.populateTravelerInformation(currentTraveler)

  Promise.all([tripsResponse, destinationsResponse])
    .then(responses => {
      findTravelerTrips(responses[0].trips)
      findDestinationInformation(responses[1].destinations)
    })
}

function findTravelerTrips(allTrips) {
  const travelerTrips = allTrips.filter(trip => {
    return trip.userID === currentTraveler.id
  })
  console.log(travelerTrips);
  travelerTrips.forEach(trip => {
    const newTrip = new Trip(trip)
    currentTraveler.trips.push(newTrip)
  })
}

function findDestinationInformation(destinations) {
  currentTraveler.trips.forEach(trip => {
    const place = destinations.find(dest => dest.id === trip.destinationID)
    const newDestination = new Destination(place)
    domUpdates.addDestinationInformation(trip, newDestination)
  })
}

// TOGGLE BETWEEN LOGIN AND DASHBOARD
function toggleScreen() {
  dashboardView.classList.toggle('hidden')
  loginView.classList.toggle('hidden')
  logoffButton.classList.toggle('hidden')
}
