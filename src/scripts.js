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
const destinationDropdown = document.querySelector('#planning--destination')
const dateInput = document.querySelector('#planning--date')
const estimatedCostOfTrip = document.querySelector('#planning--cost')
const durationDropdown = document.querySelector('#planning--duration')
const travelersDropdown = document.querySelector('#planning--travelers')
const tripMobileDropdown = document.querySelector('#trip--dropdown')
const agentMobileDropdown = document.querySelector('#traveler--dropdown')
const travelerSearchBar = document.querySelector('#traveler--search')

const currentAgent = new Agent()
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
tripMobileDropdown.addEventListener('change', changeTripView)
agentMobileDropdown.addEventListener('change', toggleTripAndTravelerView)
travelerSearchBar.addEventListener('keyup', searchForUser)


// FETCH SERVER DATA
let travelersResponse = fetchApi.getTravelers()
let tripsResponse = fetchApi.getAllTrips()
let destinationsResponse = fetchApi.getAllDestinations()

function reloadServerInformation() {
  travelersResponse = fetchApi.getTravelers()
  tripsResponse = fetchApi.getAllTrips()

  return Promise.all([travelersResponse, tripsResponse])
    .then(responses => {
      const allTravelers = responses[0].travelers
      const allTrips = responses[1].trips

      currentAgent.travelers = []
      currentAgent.trips = []

      populateAgentTravelers(allTravelers, allTrips)
      populateAgentTrips(allTrips)
      alphabetizeDataset(currentAgent.travelers, 'name')
    })
    .catch(displayErrorMessage)
}

Promise.all([travelersResponse, tripsResponse, destinationsResponse])
  .then(responses => {
    const allTravelers = responses[0].travelers
    const allTrips = responses[1].trips
    const allDestinations= responses[2].destinations

    populateAgentTravelers(allTravelers, allTrips)
    populateAgentTrips(allTrips)
    populateAgentDestinations(allDestinations)
  })
  .then(populateDropdowns)
  .catch(displayErrorMessage)

function populateAgentTravelers(allTravelers, allTrips) {
  allTravelers.forEach(traveler => {
    const newTraveler = new Traveler(traveler)
    findTravelerTrips(allTrips, newTraveler)
    currentAgent.travelers.push(newTraveler)
  })
}

function populateAgentTrips(allTrips) {
  allTrips.forEach(trip => {
    const newTrip = new Trip(trip)
    newTrip.formatDate()
    currentAgent.trips.push(newTrip)
  })
}

function populateAgentDestinations(allDestinations) {
  allDestinations.forEach(place => {
    const newDestination = new Destination(place)
    currentAgent.destinations.push(newDestination)
  })
}


// USER INFORMATION POPULATION
function authenticateUser(event) {
  const travelerPassword = document.querySelector('#pass-traveler')
  const agentUsername = document.querySelector('#name-agent')
  const agentPassword = document.querySelector('#pass-agent')

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
    .catch(displayErrorMessage)
}

function createTravelerProfile(traveler) {
  currentTraveler = currentAgent.travelers.find(user => user.id === traveler.id)
  domUpdates.populateTravelerGreeting(currentTraveler)

  findDestinationInformation()
  displayAmoutSpent()
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

function displayAmoutSpent() {
  const totalSpentPrevious = document.querySelector('#spending--previous-amount')
  const totalSpentPresent = document.querySelector('#spending--present-amount')

  const previous = currentTraveler.calculateSpending(currentAgent.destinations, 2020)
  const present = currentTraveler.calculateSpending(currentAgent.destinations, 2021)

  domUpdates.addCostToProfile(totalSpentPrevious, previous)
  domUpdates.addCostToProfile(totalSpentPresent, present)
}

function addToPendingTrips() {
  createNewTrip()
  resetPlanningForm()
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

  const totalTrips = currentAgent.trips.length - 1
  tripInformation.id = currentAgent.trips[totalTrips].id + 1

  const newTrip = new Trip(tripInformation)
  newTrip.formatDate()
  currentTraveler.trips.push(newTrip)

  fetchApi.postNewTrip(tripInformation)
    .then(reloadServerInformation)
    .then(clearAllTripDisplays)
    .then(findDestinationInformation)
    .catch(displayErrorMessage)
}

function changeTripView(event) {
  const tripSection = document.querySelector('#trip-user')
  tripSection.classList.remove('display-previous')
  tripSection.classList.remove('display-present')
  tripSection.classList.remove('display-upcoming')
  tripSection.classList.remove('display-pending')

  const dropdownValue = event.target.value
  tripSection.classList.add(`display-${dropdownValue}`)

  const tripDropdownMessage = document.querySelector('#trip--dropdown-message')
  if (!checkForTripType(dropdownValue)) {
    const message = `You do not have any ${dropdownValue} trips at this time`
    tripDropdownMessage.innerText = message
    tripDropdownMessage.style.display = 'inline-block'
  } else {
    tripDropdownMessage.style.display = 'none'
  }
}

function checkForTripType(dropdownValue) {
  const thisTripType = document.querySelector(`#trip--${dropdownValue}`)
  const tripList = thisTripType.querySelectorAll('article')

  if (tripList.length > 0) {
    return true
  }

  return false
}


// PLANNING FORM INFORMATION
function resetPlanningForm() {
  dateInput.value = ''
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
  alphabetizeDataset(currentAgent.destinations, 'destination')

  domUpdates.addDestinationsToDropdown(currentAgent.destinations, destinationDropdown)
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
function loadAgentDashboard() {
  logOnWebsite(agentDashboard)
  alphabetizeDataset(currentAgent.travelers, 'name')

  loadTravelerInformation()
  populateAnnualIncome()
  populateTodaysTravelers()
}

function searchForUser(event) {
  const searchValue = event.target.value.toLowerCase()

  const travelerIDs = currentAgent.travelers.reduce((acc, curr) => {
    if (!curr.name.toLowerCase().includes(searchValue)) {
      acc.push(curr.id)
    }
    return acc
  }, [])

  unhideAllTravelers()
  hideUnsearchedTravelers(travelerIDs)
}

function unhideAllTravelers() {
  const allTravelers = document.querySelectorAll('.trip--card')
  allTravelers.forEach(traveler => traveler.classList.remove('hidden'))
}

function hideUnsearchedTravelers(travelerIDs) {
  travelerIDs.forEach(id => {
    document.getElementById(`${id}`).classList.add('hidden')
  })
}

function populateAnnualIncome() {
  const presentIncome = currentAgent.calculateTotalIncome(2021)
  domUpdates.displayAgentAnnualIncome(presentIncome)
}

function populateTodaysTravelers() {
  const todaysTrips = currentAgent.trips.filter(trip => {
    const daysPassed = determineDateDifference(trip.date)
    if (daysPassed < 0 && Math.abs(daysPassed) < trip.duration &&
        trip.status === 'approved') {
      return true
    }
    return false
  })
  const todaysTravelers = currentAgent.findTodaysTravelers(todaysTrips)
  domUpdates.displayTodaysTravelers(todaysTravelers)
}

function approvePendingTrip(event) {
  const tripID = event.target.getAttribute('tripID')
  const revisedTrip = {
    id: Number(tripID),
    status: 'approved'
  }

  fetchApi.postModifyTrip(revisedTrip)

  reloadServerInformation()
    .then(loadTravelerInformation)
    .catch(displayErrorMessage)
}

function deletePendingTrip() {
  const tripID = event.target.getAttribute('tripID')
  fetchApi.deleteTrip(Number(tripID))

  reloadServerInformation()
    .then(loadTravelerInformation)
    .catch(displayErrorMessage)
}

function loadTravelerInformation() {
  domUpdates.clearTravelerCardDisplays()

  currentAgent.travelers.forEach(traveler => {
    domUpdates.displayTravelerInformation(traveler, currentAgent.destinations)
    domUpdates.displayPendingTrips(traveler, currentAgent.destinations)
  })

  addPendingButtonEventListeners()
}

function toggleTripAndTravelerView(event) {
  const dropdownValue = event.target.value

  if (dropdownValue === 'trips') {
    checkForPendingTrips()
    agentDashboard.classList.add('display-trips')
    agentDashboard.classList.remove('display-travelers')

  } else {
    agentDashboard.classList.remove('display-trips')
    agentDashboard.classList.add('display-travelers')
  }
}

function checkForPendingTrips() {
  const pendingTrips = document.querySelector('#pending--article')
  const tripList = pendingTrips.querySelector('article')
  const pendingMessage = document.querySelector('#pending--message')

  if (!tripList) {
    pendingMessage.style.display = 'inline-block'
  } else {
    pendingMessage.style.display = 'none'
  }
}


// GENERAL FUNCTIONALITY
function findDestinationInformation() {
  currentTraveler.trips.forEach(trip => {
    const place = findDestination(trip.destinationID)
    const daysPassed = determineDateDifference(trip.date)

    domUpdates.displayDestinationInformation(trip, place, daysPassed)
  })
}

function findDestination(destinationID) {
  return currentAgent.destinations.find(dest => dest.id === destinationID)
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

function addPendingButtonEventListeners() {
  const approveButtons = document.querySelectorAll('.button-approve')
  const deleteButtons = document.querySelectorAll('.button-delete')

  approveButtons.forEach(button => {
    button.addEventListener('click', approvePendingTrip)
  })

  deleteButtons.forEach(button => {
    button.addEventListener('click', deletePendingTrip)
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

function displayErrorMessage(error) {
  const errorMessage = document.querySelector('#server-error')
  if (error) {
    console.log('ERROR MESSAGE: Unable to access server information at this time. Please check that the server is running and refresh the page.')
    errorMessage.style.display = 'inline-block'
  } else {
    errorMessage.style.display = 'none'
  }
}
