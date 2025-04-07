import { sum } from '@/function/calculator'
import { expect, test } from 'vitest'

test('더하기 1+2 to equals 3', () => {
  expect(sum(1, 2)).toBe(3)
})
