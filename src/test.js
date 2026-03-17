import { render } from '@testing-library/react'
import Banner from './'

describe('Banner', () => {
  it('is valid', () => {
    expect(Banner).toBeTruthy()
    const { container } = render(<Banner year={2019} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
