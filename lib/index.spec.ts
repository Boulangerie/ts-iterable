import { Iterable } from './index'
import { expect } from 'chai'

describe('Iterable index', () => {
  it('should export the class', () => {
    expect(Iterable).to.be.a('function')
  })
})
