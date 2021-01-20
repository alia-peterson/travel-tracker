import chai from 'chai'
const expect = chai.expect

import Traveler from '../src/traveler'
import Trip from '../src/trip'
import Destination from '../src/destination'
import Agent from '../src/agent'
import tripData from './trip-data'
import destinationData from './destination-data'

describe('Agent Class', () => {
  let newTraveler
  let newAgent
  const traveler1 = {id: 1, name: 'Oswin', type: 'relaxer'}

  beforeEach(() => {
    newAgent = new Agent()
    newTraveler = new Traveler(traveler1)
    newAgent.travelers.push(newTraveler)

    tripData.forEach(trip => {
      const newTrip = new Trip(trip)
      newTraveler.trips.push(newTrip)
    })

    destinationData.forEach(destination => {
      const newDestination = new Destination(destination)
      newAgent.destinations.push(newDestination)
    })
  })

  it('should calculate the agency total income for a given year', () => {
    const income1 = newAgent.calculateTotalIncome(2019)
    const income2 = newAgent.calculateTotalIncome(2020)
    const income3 = newAgent.calculateTotalIncome(2021)

    expect(income1).to.equal('529.00')
    expect(income2).to.equal('1,638.00')
    expect(income3).to.equal('872.00')
  })

  it('should find all the trips for a given year', () => {
    const trips = [{
          "id": 1,
          "userID": 44,
          "destinationID": 49,
          "travelers": 1,
          "date": "2019/09/16",
          "duration": 8,
          "status": "approved",
          "suggestedActivities": []
      }]

    const yearTrips = newAgent.findYearTrips(2019)
    expect(yearTrips).to.deep.equal(trips)
  })

  it('should return an array of todays travelers', () => {
    const trip = [{
          "id": 1,
          "userID": 1,
          "destinationID": 22,
          "travelers": 4,
          "date": "2021/05/22",
          "duration": 100,
          "status": "approved",
          "suggestedActivities": []
      }]

    const newTrip = new Trip(trip)
    newAgent.trips.push(newTrip)

    const todaysTravelers = newAgent.findTodaysTravelers(trip)
    expect(todaysTravelers).to.deep.equal( [{Oswin: 1}] )
  })
})
