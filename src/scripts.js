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
const addToTripsButton = document.querySelector('#button-add-trip')
const dashboardView = document.querySelector('.dashboard')
const loginView = document.querySelector('.login')
const travelerUsername = document.querySelector('#name-traveler')
const travelerPassword = document.querySelector('#pass-traveler')
const destinationDropdown = document.querySelector('#planning--destination')
const dateInput = document.querySelector('#planning--date')
const durationDropdown = document.querySelector('#planning--duration')
const travelersDropdown = document.querySelector('#planning--travelers')
const estimatedCostOfTrip = document.querySelector('#planning--cost')

const allDestinations = []
let currentTraveler


// EVENT LISTENERS
travelerLoginButton.addEventListener('click', authenticateUser)
agentLoginButton.addEventListener('click', authenticateUser)
logoffButton.addEventListener('click', toggleScreen)
addToTripsButton.addEventListener('click', addToPendingTrips)
destinationDropdown.addEventListener('change', updateEstimatedCost)
durationDropdown.addEventListener('change', updateEstimatedCost)
travelersDropdown.addEventListener('change', updateEstimatedCost)
dateInput.addEventListener('change', validateForm)


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
  domUpdates.clearTripDisplays('Previous')
  domUpdates.clearTripDisplays('Present')
  domUpdates.clearTripDisplays('Upcoming')
  domUpdates.clearTripDisplays('Pending')

  resetPlanningForm()

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
      displayAmoutSpent(responses[1].destinations)
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

function displayAmoutSpent(destinations) {
  const totalSpent = currentTraveler.calculateTotalSpent(destinations)
  domUpdates.addCostToProfile(totalSpent)
}

function addToPendingTrips() {
  console.log('hiyee');
}


// PLANNING FORM INFORMATION
function resetPlanningForm() {
  destinationDropdown.value = 0
  durationDropdown.value = 1
  travelersDropdown.value = 1

  estimatedCostOfTrip.innerText = `Estimated Cost: $0.00`
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

function populateDropdowns() {
  alphabetizeDestinations(allDestinations)

  domUpdates.addDestinationsToDropdown(allDestinations, destinationDropdown)
  domUpdates.addNumbersToDropdowns(durationDropdown)
  domUpdates.addNumbersToDropdowns(travelersDropdown)
}

function updateEstimatedCost(event) {
  if (destinationDropdown.value) {
    const destination = findDestination(Number(destinationDropdown.value))
    const numDays = durationDropdown.value
    const numPeople = travelersDropdown.value

    const lodgingCost = destination.lodgingCostPerDay * numDays * numPeople
    const flightCost = destination.flightCostPerPerson * numPeople
    const price = lodgingCost + flightCost

    estimatedCostOfTrip.innerText = `Estimated Cost: $${price}`
  }

  validateForm()
}

function validateForm() {
  if (destinationDropdown.value && dateInput.value) {
    const selectedDate = new Date(dateInput.value)
    const daysPassed = 1
    const dateComparison = selectedDate - todayDate
    addToTripsButton.disabled = false
  }
}


// GENERAL FUNCTIONALITY
function findDestinationInformation(destinations) {
  currentTraveler.trips.forEach(trip => {
    const place = findDestination(trip.destinationID)
    const daysPassed = determineDateDifference(trip.date)
    
    domUpdates.displayDestinationInformation(trip, place, daysPassed)
  })
}

function determineDateDifference(dateInput) {
  const today = new Date()
  const diffTime = Date.parse(dateInput) - today
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

function findDestination(destinationID) {
  return allDestinations.find(dest => dest.id === destinationID)
}


// TOGGLE BETWEEN LOGIN AND DASHBOARD
function toggleScreen() {
  dashboardView.classList.toggle('hidden')
  loginView.classList.toggle('hidden')
  logoffButton.classList.toggle('hidden')
}
