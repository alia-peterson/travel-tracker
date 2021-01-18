import chai from 'chai'
const expect = chai.expect

import Traveler from '../src/traveler'
import Trip from '../src/trip'
import tripData from './trip-data'

describe('Trip Class', () => {
  let newTrip

  beforeEach(() => {
    newTrip = new Trip(tripData[0])
  })

  it('should create an instance of a trip', () => {
    expect(newTrip.id).to.equal(1)
  })

  it('should format the trip date', () => {
    newTrip.formatDate()
    expect(newTrip.date).to.equal('Mon Sep 16 2019')
  })

  it('should determine the trip status', () => {
    const today = new Date()
    const timeDifference = Date.parse(newTrip.date) - today
    const daysPassed = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

    const tripStatus = newTrip.determineTripStatus()
    expect(tripStatus).to.equal('Previous')
  })
})
