const fetchApi = {
  getTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
  },

  getSpecificTraveler(travelerID) {
    return fetch(`http://localhost:3001/api/v1/travelers/${travelerID}`)
      .then(response => response.json())
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => response.json())
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
  },

  postNewTrip(newTrip) {
    const postFormat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTrip)
    }

    return fetch('http://localhost:3001/api/v1/trips', postFormat)
      .then(response => response.json())
  }
}

export default fetchApi
