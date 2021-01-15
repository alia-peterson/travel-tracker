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

  determineTripStatus() {
    const today = new Date()
    const diffTime = Date.parse(this.date) - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (this.status === 'pending') {
      return 'Pending'

    } else if (Math.abs(diffDays) <= this.duration) {
      return 'Present'

    } else if (diffDays > 0 && diffDays <= 30) {
      return 'Upcoming'
    }

    return 'Previous'
  }

  formatDate() {
    const dateParts = this.date.split('/')
    const newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    this.date = newDate.toDateString()
  }
}

module.exports = Trip
