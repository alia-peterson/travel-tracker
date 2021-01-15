class Traveler {
  constructor(traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.type = traveler.travelerType
    this.trips = []
  }

  sortTripsByDate() {
    this.trips.sort((a, b) => {
      if (Date.parse(a.date) < Date.parse(b.date)) {
        return 1
      } else if (Date.parse(a.date) > Date.parse(b.date)) {
        return -1
      }
    })
  }
}

module.exports = Traveler
