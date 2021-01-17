import chai from 'chai'
const expect = chai.expect

import Traveler from '../src/traveler'
import Trip from '../src/trip'
import tripData from './trip-data'

describe('Traveler Class', () => {
  let newTraveler
  const traveler1 = {id: 1, name: 'Oswin', type: 'relaxer'}

  beforeEach(() => {
    newTraveler = new Traveler(traveler1)

    tripData.forEach(trip => {
      const newTrip = new Trip(trip)
      newTraveler.trips.push(newTrip)
    })
  })

  it('should create an instance of a traveler', () => {
    expect(newTraveler.name).to.equal('Oswin')
  })

  it('should sort the user trips array by date', () => {
    newTraveler.sortTripsByDate()
    expect(newTraveler.trips[0].date).to.equal('2020/10/04')
  })

  it('should calculate the total spending for a given year', () => {
    
  })
})
