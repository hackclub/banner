import { expect, test, describe } from 'bun:test'
import { render } from '@testing-library/react'
import Banner from './'

describe('Banner', () => {
  test('renders Banner properly', () => {
    const { container } = render(<Banner year={2026} />)
    expect(container.innerHTML).toMatchSnapshot()
  })
})
