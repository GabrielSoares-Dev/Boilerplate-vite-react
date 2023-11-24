import { render } from '@testing-library/react'
import App from '../../src/App'

describe('example', () => {
  test('example', () => {
    const { getByText } = render(<App />)

    const test = getByText('boilerplate-vite-react')

    expect(test).toBeVisible()
  })
})
