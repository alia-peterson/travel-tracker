const welcomeMessage = document.querySelector('#welcome--message')

const domUpdates = {
  populateTravelerInformation(currentTraveler) {
    const travelerNames = currentTraveler.name.split(' ')
    const travelerFirstName = travelerNames[0]

    welcomeMessage.innerText = `Welcome ${travelerFirstName}!`
  }
}

export default domUpdates
