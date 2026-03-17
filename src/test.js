import { render } from '@testing-library/react'
import Banner from './'

describe('Banner', () => {
  it('renders Banner properly', () => {
    const { container } = render(<Banner year={2026} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
