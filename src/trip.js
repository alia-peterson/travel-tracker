class Trip {
  constructor(trip) {
    this.id = trip.id
    this.userID = trip.userID
    this.destinationID = trip.destinationID
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status
    this.suggestedActivities = trip.suggestedActivities
  }

  formatDate() {
    const dateParts = this.date.split('/')
    const newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    this.date = newDate.toDateString()
  }
}

module.exports = Trip
