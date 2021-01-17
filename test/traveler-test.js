import chai from 'chai'
const expect = chai.expect

import Traveler from '../src/traveler'
import Trip from '../src/trip'
import Destination from '../src/destination'
import tripData from './trip-data'
import destinationData from './destination-data'

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
    expect(newTraveler.trips[0].date).to.equal('2021/10/04')
    expect(newTraveler.trips[1].date).to.equal('2021/05/22')
  })

  it('should calculate the total spending for a given year', () => {
    const yearBeforeLast = newTraveler.calculateSpending(destinationData, 2019)
    const lastYearSpending = newTraveler.calculateSpending(destinationData, 2020)
    const thisYearSpending = newTraveler.calculateSpending(destinationData, 2021)

    expect(yearBeforeLast).to.equal('5,819.00')
    expect(lastYearSpending).to.equal('6,567.00')
    expect(thisYearSpending).to.equal('2,398.00')
  })
})
