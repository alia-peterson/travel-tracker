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
const travelerDashboard = document.querySelector('.dashboard-user')
const agentDashboard = document.querySelector('.dashboard-agent')
const loginView = document.querySelector('.login')
const travelerUsername = document.querySelector('#name-traveler')
const travelerPassword = document.querySelector('#pass-traveler')
const agentUsername = document.querySelector('#name-agent')
const agentPassword = document.querySelector('#pass-agent')
const totalSpentPrevious = document.querySelector('#welcome--cost-previous')
const totalSpentPresent = document.querySelector('#welcome--cost-present')
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
logoffButton.addEventListener('click', logOffWebsite)
addToTripsButton.addEventListener('click', addToPendingTrips)
destinationDropdown.addEventListener('change', updateEstimatedCost)
durationDropdown.addEventListener('change', updateEstimatedCost)
travelersDropdown.addEventListener('change', updateEstimatedCost)
dateInput.addEventListener('change', validateForm)


// FETCH SERVER DATA
const travelersResponse = fetchApi.getTravelers()
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
function authenticateUser(event) {
  if (event.target.id === 'button-traveler' &&
      travelerUsername.value.includes('traveler') &&
      travelerPassword.value === 'travel2020') {

    loadTravelerDashboard()

  } else if (event.target.id === 'button-agent' &&
      agentUsername.value === 'agency' &&
      agentPassword.value === 'travel2020') {

    loadAgentDashboard()
  }
}

function loadTravelerDashboard() {
  logOnWebsite(travelerDashboard)
  clearAllTripDisplays()
  resetPlanningForm()
  const travelerID = travelerUsername.value.slice(8)

  fetchApi.getSpecificTraveler(travelerID)
    .then(traveler => createTravelerProfile(traveler))
}

function loadAgentDashboard() {
  logOnWebsite(agentDashboard)

  Promise.all([travelersResponse, tripsResponse, destinationsResponse])
    .then(responses => {
      const allTravelers = responses[0].travelers
      const allTrips = responses[1].trips
      const allLocations = responses[2].destinations

      alphabetizeDataset(allTravelers, 'name')

      allTravelers.forEach(traveler => {
        const newTraveler = new Traveler(traveler)
        findTravelerTrips(allTrips, newTraveler)
        newTraveler.sortTripsByDate()

        domUpdates.displayTravelerInformation(newTraveler, allLocations)
        domUpdates.displayPendingTrips(newTraveler, allLocations)
      })
    })
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

function findTravelerTrips(allTrips, selectedTraveler = currentTraveler) {
  const travelerTrips = allTrips.filter(trip => {
    return trip.userID === selectedTraveler.id
  })

  travelerTrips.forEach(trip => {
    const newTrip = new Trip(trip)

    newTrip.formatDate()
    selectedTraveler.trips.push(newTrip)
  })

  selectedTraveler.sortTripsByDate()
}

function clearAllTripDisplays() {
  domUpdates.clearTripDisplays('Previous')
  domUpdates.clearTripDisplays('Present')
  domUpdates.clearTripDisplays('Upcoming')
  domUpdates.clearTripDisplays('Pending')
}

function displayAmoutSpent(destinations) {
  const previous = currentTraveler.calculateSpending(destinations, 2020)
  const present = currentTraveler.calculateSpending(destinations, 2021)

  domUpdates.addCostToProfile(totalSpentPrevious, previous)
  domUpdates.addCostToProfile(totalSpentPresent, present)
}

function addToPendingTrips() {
  createNewTrip()
  resetPlanningForm()
  clearAllTripDisplays()
}

function createNewTrip() {
  const tripInformation = {
    id: 0,
    userID: Number(currentTraveler.id),
    destinationID: Number(destinationDropdown.value),
    travelers: Number(travelersDropdown.value),
    date: formatDateForPost(dateInput.value),
    duration: Number(durationDropdown.value),
    status: 'pending',
    suggestedActivities: []
  }

  Promise.all([tripsResponse, destinationsResponse])
    .then(responses => {
      tripInformation.id = responses[0].trips.length + 1
      const newTrip = new Trip(tripInformation)
      newTrip.formatDate()
      currentTraveler.trips.push(newTrip)

      findDestinationInformation(responses[1].destinations)
      fetchApi.postNewTrip(tripInformation)
    })
}


// PLANNING FORM INFORMATION
function resetPlanningForm() {
  destinationDropdown.value = 0
  durationDropdown.value = 1
  travelersDropdown.value = 1

  estimatedCostOfTrip.innerText = `Estimated Cost: $0.00`
}

function alphabetizeDataset(dataType, property) {
  dataType.sort((a, b) => {
    if (a[property] > b[property]) {
      return 1

    } else if (a[property] < b[property]) {
      return -1
    }
  })
}

function populateDropdowns() {
  alphabetizeDataset(allDestinations, 'destination')

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

    const price = ((lodgingCost + flightCost) * 1.1).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    estimatedCostOfTrip.innerText = `Estimated Cost: $${price}`
  }

  validateForm()
}

function validateForm() {
  const selectedDate = new Date(dateInput.value)
  const dateDifference = determineDateDifference(selectedDate)

  if (destinationDropdown.value > 0 && dateDifference > 0) {
    addToTripsButton.disabled = false

  } else {
    addToTripsButton.disabled = true
  }
}


// AGENT FUNCTIONS
function searchForUser() {

}

function approvePendingTrip() {

}

function deletePendingTrip() {
  
}


// GENERAL FUNCTIONALITY
function findDestinationInformation(destinations) {
  currentTraveler.trips.forEach(trip => {
    const place = findDestination(trip.destinationID)
    const daysPassed = determineDateDifference(trip.date)

    domUpdates.displayDestinationInformation(trip, place, daysPassed)
  })
}

function findDestination(destinationID) {
  return allDestinations.find(dest => dest.id === destinationID)
}

function determineDateDifference(dateInput) {
  const today = new Date()
  const timeDifference = Date.parse(dateInput) - today
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
}

function formatDateForPost(dateInput) {
  const dateParts = dateInput.split('-')
  return dateParts.join('/')
}

function addPendingButtonEventListeners(type) {
  const buttons = document.querySelectorAll(`.button-${type}`)

  buttons.forEach(button => {
    button.addEventListener('click')
  })
}


// TOGGLE BETWEEN LOGIN AND DASHBOARD
function logOnWebsite(selectedDashboard) {
  selectedDashboard.classList.remove('hidden')
  loginView.classList.add('hidden')
  logoffButton.classList.remove('hidden')
}

function logOffWebsite() {
  loginView.classList.remove('hidden')
  travelerDashboard.classList.add('hidden')
  agentDashboard.classList.add('hidden')
  logoffButton.classList.add('hidden')
}
