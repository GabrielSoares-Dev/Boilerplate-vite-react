import { hasError } from '@functions'

describe('Has error', () => {
  it('Should be has error', () => {
    const result = hasError({ error: 'Has error' })

    expect(result).toBe(true)
  })
  it('Should be not has error', () => {
    const result = hasError(undefined)

    expect(result).toBe(false)
  })
})
