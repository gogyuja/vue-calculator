import { sum } from '@/function/calculator'
import { expect, test, describe } from 'vitest'

describe('계산기 테스트', () => {
  test('더하기 1+2 to equals 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
