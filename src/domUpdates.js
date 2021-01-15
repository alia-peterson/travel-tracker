const welcomeMessage = document.querySelector('#welcome--message')
const welcomeTotalSpent = document.querySelector('#welcome--cost')
const tripTemplate = document.querySelector('#trip--template')
const tripPrevious = document.querySelector('#trip--previous')
const tripPresent = document.querySelector('#trip--present')
const tripUpcoming = document.querySelector('#trip--upcoming')
const tripPending = document.querySelector('#trip--pending')

const domUpdates = {
  populateTravelerInformation(currentTraveler) {
    const travelerNames = currentTraveler.name.split(' ')
    const travelerFirstName = travelerNames[0]

    welcomeMessage.innerText = `Welcome ${travelerFirstName}!`
  },

  addDestinationInformation(trip, place) {
    const tripCard = tripTemplate.content.cloneNode(true)
    tripCard.querySelector('#card--destination').innerText = place.destination
    tripCard.querySelector('#card--image').src = place.image
    tripCard.querySelector('#card--image').alt = place.alt
    tripCard.querySelector('#card--date').innerText = `Start Date: ${trip.date}`
    tripCard.querySelector('#card--duration').innerText = `Duration: ${trip.duration} Days`
    tripCard.querySelector('#card--travelers').innerText = `Travelers: ${trip.travelers} Adults`
    tripCard.querySelector('#card--lodging').innerText = `Lodging Cost Per Day: $${place.lodgingCostPerDay}`
    tripCard.querySelector('#card--flight').innerText = `Flight Cost: $${place.flightCostPerPerson}`

    tripPrevious.appendChild(tripCard)
  },

  clearTripDisplays() {
    tripPrevious.querySelectorAll('article').forEach(item => item.remove())
    tripPresent.querySelectorAll('article').forEach(item => item.remove())
    tripUpcoming.querySelectorAll('article').forEach(item => item.remove())
    tripPending.querySelectorAll('article').forEach(item => item.remove())
  },

  addCostToProfile(totalCost) {
    welcomeTotalSpent.innerText = `$${totalCost}`
  }
}

export default domUpdates
