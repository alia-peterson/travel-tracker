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
const destinationDropdown = document.querySelector('#planning--destination')
const durationDropdown = document.querySelector('#planning--duration')
const travelersDropdown = document.querySelector('#planning--travelers')

const allDestinations = []
let currentTraveler

// EVENT LISTENERS
travelerLoginButton.addEventListener('click', authenticateUser)
agentLoginButton.addEventListener('click', authenticateUser)
logoffButton.addEventListener('click', toggleScreen)
destinationDropdown.addEventListener('change', updateEstimatedCost)
durationDropdown.addEventListener('change', updateEstimatedCost)
travelersDropdown.addEventListener('change', updateEstimatedCost)

// FETCH SERVER DATA
const tripsResponse = fetchApi.getAllTrips()
const destinationsResponse = fetchApi.getAllDestinations()

Promise.all([destinationsResponse])
  .then(responses => {
    responses[0].destinations.forEach(place => {
      const newDestination = new Destination(place)
      allDestinations.push(newDestination)
    })
  })
  .then(populateDropdowns)

// USER INFORMATION POPULATION
function authenticateUser() {
  domUpdates.clearTripDisplays()

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

  travelerTrips.forEach(trip => {
    const newTrip = new Trip(trip)
    newTrip.formatDate()
    currentTraveler.trips.push(newTrip)
  })

  currentTraveler.sortTripsByDate()
}

function populateDropdowns() {
  alphabetizeDestinations(allDestinations)

  domUpdates.addDestinationsToDropdown(allDestinations, destinationDropdown)
  domUpdates.addNumbersToDropdowns(durationDropdown)
  domUpdates.addNumbersToDropdowns(travelersDropdown)
}

function findDestinationInformation(destinations) {
  currentTraveler.trips.forEach(trip => {
    const place = findDestination(trip.destinationID)
    const newDestination = new Destination(place)
    domUpdates.addDestinationInformation(trip, newDestination)
  })

  const totalSpent = currentTraveler.calculateTotalSpent(destinations)
  domUpdates.addCostToProfile(totalSpent)
}

function findDestination(destinationID) {
  const place = allDestinations.find(dest => dest.id === destinationID)
  return place
}

function alphabetizeDestinations(destinations) {
  destinations.sort((a, b) => {
    if (a.destination > b.destination) {
      return 1
    } else if (a.destination < b.destination) {
      return -1
    }
  })
}

function updateEstimatedCost() {

}

// TOGGLE BETWEEN LOGIN AND DASHBOARD
function toggleScreen() {
  dashboardView.classList.toggle('hidden')
  loginView.classList.toggle('hidden')
  logoffButton.classList.toggle('hidden')
}
