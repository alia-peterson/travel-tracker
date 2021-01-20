import chai from 'chai'
const expect = chai.expect

import Traveler from '../src/traveler'
import Trip from '../src/trip'
import Destination from '../src/destination'
import Agent from '../src/agent'
import tripData from './trip-data'
import destinationData from './destination-data'

describe('Traveler Class', () => {
  let newTraveler
  let agent
  const traveler1 = {id: 1, name: 'Oswin', type: 'relaxer'}

  beforeEach(() => {
    agent = new Agent()
    newTraveler = new Traveler(traveler1)

    tripData.forEach(trip => {
      const newTrip = new Trip(trip)
      newTraveler.trips.push(newTrip)
    })

    destinationData.forEach(destination => {
      const newDestination = new Destination(destination)
      agent.destinations.push(newDestination)
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
    const yearBeforeLast = newTraveler.calculateSpending(agent.destinations, 2019)
    const lastYearSpending = newTraveler.calculateSpending(agent.destinations, 2020)
    const thisYearSpending = newTraveler.calculateSpending(agent.destinations, 2021)

    expect(yearBeforeLast).to.equal('5,819.00')
    expect(lastYearSpending).to.equal('6,567.00')
    expect(thisYearSpending).to.equal('2,398.00')
  })

  it('should calculate the cost for a single trip', () => {
    const thisTrip = newTraveler.trips[0]
    const tripCost = newTraveler.calculateCostPerTrip(thisTrip, agent.destinations)
    expect(tripCost).to.equal(5290)
  })
})
