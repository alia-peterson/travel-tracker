const welcomeMessage = document.querySelector('#welcome--message')
const tripTemplate = document.querySelector('#trip--template')
const tripPrevious = document.querySelector('#trip--previous')

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
  }
}

export default domUpdates
