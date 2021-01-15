import chai from 'chai'
const expect = chai.expect

import Traveler from '../src/traveler'

describe('Traveler Class', () => {
  let newTraveler
  const traveler1 = {id: 1, name: 'Oswin', type: 'relaxer'}

  beforeEach(() => {
    newTraveler = new Traveler(traveler1)
  })

  it('should create an instance of a traveler', () => {
    expect(newTraveler.name).to.equal('Oswin')
  })

  it('should sort the user trips array by date', () => {
    
  })
})
