import Traveler from './traveler'

const welcomeMessage = document.querySelector('#welcome--message')
const travelerTemplate = document.querySelector('#traveler--template')
const pendingTemplate = document.querySelector('#pending--template')
const travelerCards = document.querySelector('#traveler--cards')
const pendingCards = document.querySelector('#pending--cards')
const trips = {
  Template: document.querySelector('#trip--template'),
  Previous: document.querySelector('#trip--previous'),
  Present: document.querySelector('#trip--present'),
  Upcoming: document.querySelector('#trip--upcoming'),
  Pending: document.querySelector('#trip--pending')
}

const domUpdates = {
  populateTravelerGreeting(currentTraveler) {
    const travelerNames = currentTraveler.name.split(' ')
    const travelerFirstName = travelerNames[0]

    welcomeMessage.innerText = `Welcome ${travelerFirstName}!`
  },

  displayDestinationInformation(trip, place, daysPassed) {
    const tripCard = trips.Template.content.cloneNode(true)
    tripCard.querySelector('.card--destination').innerText = place.destination
    tripCard.querySelector('.card--image').src = place.image
    tripCard.querySelector('.card--image').alt = place.alt
    tripCard.querySelector('.card--date').innerText = `Start Date: ${trip.date}`
    tripCard.querySelector('.card--duration').innerText = `Duration: ${trip.duration} Days`
    tripCard.querySelector('.card--travelers').innerText = `Travelers: ${trip.travelers} Adults`
    tripCard.querySelector('.card--lodging').innerText = `Lodging Cost Per Day: $${place.lodgingCostPerDay}`
    tripCard.querySelector('.card--flight').innerText = `Flight Cost: $${place.flightCostPerPerson}`

    const status = trip.determineTripStatus(daysPassed)
    trips[status].appendChild(tripCard)
  },

  clearTripDisplays(status) {
    trips[status].querySelectorAll('article').forEach(item => item.remove())
  },

  addCostToProfile(yearSpent, totalCost) {
    yearSpent.innerText = `$${totalCost}`
  },

  addDestinationsToDropdown(destinations, dropdown) {
    destinations.forEach(location => {
      const newOption = document.createElement('option')
      newOption.value = location.id
      newOption.innerText = location.destination
      dropdown.appendChild(newOption)
    })
  },

  addNumbersToDropdowns(dropdown) {
    const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    possibleNumbers.forEach(number => {
      const newOption = document.createElement('option')
      newOption.value = number
      newOption.innerText = number
      dropdown.appendChild(newOption)
    })
  },

  displayTravelerInformation(traveler, destinations) {
    const newTravelerCard = travelerTemplate.content.cloneNode(true)
    newTravelerCard.querySelector('#traveler--name').innerText = `${traveler.name} (#${traveler.id})`
    newTravelerCard.querySelector('#traveler--spent').innerText = traveler.calculateSpending(destinations)

    traveler.trips.forEach(trip => {
      const location = this.findDestination(destinations, trip)
      this.buildTableElements(trip, location, newTravelerCard)
    })

    travelerCards.appendChild(newTravelerCard)
  },

  displayPendingTrips(traveler, destinations) {
    const pendingTrips = traveler.trips.filter(trip => trip.status === 'pending')

    pendingTrips.forEach(trip => {
      const tripLocation = this.findDestination(destinations, trip)
      const newPendingCard = pendingTemplate.content.cloneNode(true)

      newPendingCard.querySelector('.pending--name').innerText = `${traveler.name} (#${traveler.id})`
      newPendingCard.querySelector('.pending--location').innerText = tripLocation.destination
      newPendingCard.querySelector('.pending--date').innerText = `${trip.date} (${trip.duration} days)`
      newPendingCard.querySelector('.button-approve').setAttribute('tripID', trip.id)
      newPendingCard.querySelector('.button-delete').setAttribute('tripID', trip.id)

      pendingCards.appendChild(newPendingCard)
    })
  },

  findDestination(destinations, trip) {
    return destinations.find(place => place.id === trip.destinationID)
  },

  buildTableElements(trip, location, card) {
    const travelerLocations = card.querySelector('#traveler--locations')
    const newRow = document.createElement('tr')
    const locationCell = document.createElement('td')
    const statusCell = document.createElement('td')

    locationCell.innerText = location.destination
    statusCell.innerText = trip.status

    travelerLocations.appendChild(newRow)
    newRow.appendChild(locationCell)
    newRow.appendChild(statusCell)
  }
}

export default domUpdates
