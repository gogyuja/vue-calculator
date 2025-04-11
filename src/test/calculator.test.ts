import { calculate } from '@/function/calculator'
import { expect, test, describe } from 'vitest'
import { calculatorErrorenum } from '@/Enums/errorenum'

describe('사칙연산테스트', () => {
  describe('정수 테스트', () => {
    test('정수 더하기 1+2 to equals 3', () => {
      expect(calculate('1', '+', '2')).toBe('3')
    }),
      test('정수 빼기 5-1 to equals 4', () => {
        expect(calculate('5', '-', '1')).toBe('4')
      }),
      test('정수 곱하기 5*2 to equals 10', () => {
        expect(calculate('5', '*', '2')).toBe('10')
      }),
      test('정수 곱하기 4*2 to equals 2', () => {
        expect(calculate('4', '/', '2')).toBe('2')
      })
  })

  describe('정수, 소수 테스트', () => {
    test('정수 더하기 1+2.1 to equals 3', () => {
      expect(calculate('1', '+', '2.1')).toBe('3.1')
    }),
      test('정수 빼기 5-1 to equals 4', () => {
        expect(calculate('5', '-', '1.1')).toBe('3.9')
      }),
      test('정수 곱하기 5*2 to equals 10', () => {
        expect(calculate('5.1', '*', '2')).toBe('10.2')
      }),
      test('정수 곱하기 4*2 to equals 2', () => {
        expect(calculate('4.4', '/', '2')).toBe('2.2')
      })
  })

  describe('소수 테스트', () => {
    test('소수 더하기 0.1 + 0.2 = 0.3', () => {
      expect(calculate('0.1', '+', '0.2')).toBe('0.3')
    })

    test('소수 빼기 1.5 - 0.7 = 0.8', () => {
      expect(calculate('1.5', '-', '0.7')).toBe('0.8')
    })

    test('소수 곱하기 0.6 * 3 = 1.8', () => {
      expect(calculate('0.6', '*', '3')).toBe('1.8')
    })

    test('소수 나누기 1.2 / 0.3 = 4', () => {
      expect(calculate('1.2', '/', '0.3')).toBe('4')
    })
  })

  describe('오류 테스트', () => {
    test('오류 : 0으로 나누기 N/0', () => {
      expect(calculate('5', '/', '0')).toBe(calculatorErrorenum.DivisionByZero)
    })

    test('오류 : 잘못된 입력', () => {
      expect(calculate('d', '/', '1')).toBe(calculatorErrorenum.InavlidInput)
    })
  })
})
