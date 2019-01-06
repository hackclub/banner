import React from 'react'
import Banner from './'
import renderer from 'react-test-renderer'

describe('Banner', () => {
  it('is valid', () => {
    expect(Banner).toBeTruthy()
    const component = renderer.create(<Banner year={2019} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
