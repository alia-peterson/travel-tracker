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

  calculateTotalSpent(destinations) {
    let totalCost = 0

    this.trips.forEach(trip => {
      if (trip.status !== 'pending') {
        const place = destinations.find(dest => dest.id === trip.destinationID)

        const totalLodging = place.estimatedLodgingCostPerDay * trip.duration
        const totalFlight = place.estimatedFlightCostPerPerson
        const totalPerTrip = totalLodging + totalFlight

        totalCost += totalPerTrip
      }
    })

    return (totalCost * 1.1).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }
}

module.exports = Traveler
