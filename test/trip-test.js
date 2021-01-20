import chai from 'chai'
const expect = chai.expect

import Traveler from '../src/traveler'
import Trip from '../src/trip'
import tripData from './trip-data'

describe('Trip Class', () => {
  let newTraveler
  const traveler1 = {id: 1, name: 'Oswin', type: 'relaxer'}

  beforeEach(() => {
    newTraveler = new Traveler(traveler1)

    tripData.forEach(trip => {
      const newTrip = new Trip(trip)
      newTraveler.trips.push(newTrip)
    })
  })

  it('should format the trip date', () => {
    newTraveler.trips.forEach(trip => trip.formatDate())
    expect(newTraveler.trips[0].date).to.equal('Mon Sep 16 2019')
  })

  it('should determine the trip status', () => {
    const today = new Date()
    const timeDifferences = newTraveler.trips.map(trip => (Date.parse(trip.date) - today))
    const daysPassed = timeDifferences.map(time => {
      return Math.ceil(time / (1000 * 60 * 60 * 24))
    })

    const tripStatuses = newTraveler.trips.map((trip, index) => {
      return trip.determineTripStatus(daysPassed[index])
    })
    console.log(daysPassed);
    expect(tripStatuses[0]).to.equal('Previous')
    expect(tripStatuses[1]).to.equal('Pending')
    expect(tripStatuses[2]).to.equal('Upcoming')
  })
})
