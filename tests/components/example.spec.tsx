import { render } from '@testing-library/react'
import { Home } from '@pages'

describe('example', () => {
  test('example', () => {
    const { getByText } = render(<Home />)

    const test = getByText('boilerplate-vite-react')

    expect(test).toBeVisible()
  })
})
