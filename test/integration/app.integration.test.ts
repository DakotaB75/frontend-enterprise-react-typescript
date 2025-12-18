import { describe, it, expect } from 'vitest'

describe('integration test', () => {
  it('should integrate components correctly', () => {
    const sum = (a: number, b: number) => a + b
    expect(sum(2, 3)).toBe(5)
  })
})
