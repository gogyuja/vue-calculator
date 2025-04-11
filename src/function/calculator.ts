// src/utils/calculator.ts
import { Decimal } from 'decimal.js'
import { calculatorErrorenum } from '@/Enums/errorenum'
import { KEYENUM } from '@/Enums/keyenum'

export const handleCalculatorInpt = (
  newVal: string,
  current: { value: string },
  result: { value: string },
  operator: { value: KEYENUM },
) => {
  if (!isNaN(Number(newVal))) {
    current.value += newVal
  } else {
    switch (newVal) {
      case KEYENUM.DOT:
        if (!current.value.includes('.')) {
          current.value += newVal
        }
        break
      case KEYENUM.PLUS:
      case KEYENUM.MINUS:
      case KEYENUM.MULTIPLY:
      case KEYENUM.DIVIDE:
        if (operator.value === '') {
          operator.value = newVal
          result.value = current.value
          current.value = ''
        } else if (current.value === '') {
          operator.value = newVal
        } else {
          result.value = calculate(result.value, operator.value, current.value)
          operator.value = newVal
          current.value = ''
        }
        break
      case KEYENUM.CLEAR:
        current.value = ''
        result.value = ''
        operator.value = KEYENUM.BLANK
        break
      case KEYENUM.EMPTY:
        current.value = ''
        break
      case KEYENUM.BACKSPACE:
        current.value = current.value.slice(0, -1)
        break
      case '=':
      case KEYENUM.ENTER:
        current.value = calculate(result.value, operator.value, current.value)
        result.value = ''
        operator.value = KEYENUM.BLANK
        break
      default:
        console.log('정상적인 입력을 해주세요.')
        break
    }
  }
}

/**
 * 고정밀도 계산 함수
 * @param a 첫 번째 숫자 (문자열 또는 숫자)
 * @param op 연산자 (+, -, *, /, **)
 * @param b 두 번째 숫자 (문자열 또는 숫자)
 * @param precision 결과값의 소수점 자릿수 (기본값: 10)
 * @returns 계산 결과 (문자열) 또는 에러 메시지
 */
export const calculate = (a: string, op: KEYENUM, b: string, precision: number = 10): string => {
  try {
    const num1 = new Decimal(a)
    const num2 = new Decimal(b)
    let result: Decimal

    switch (op) {
      case KEYENUM.PLUS:
        result = num1.plus(num2)
        break
      case KEYENUM.MINUS:
        result = num1.minus(num2)
        break
      case KEYENUM.MULTIPLY:
        result = num1.times(num2)
        break
      case KEYENUM.DIVIDE:
        if (num2.isZero()) {
          return calculatorErrorenum.DivisionByZero
        }
        result = num1.dividedBy(num2)
        break
      case KEYENUM.POW:
        result = num1.pow(num2)
        break
      default:
        return calculatorErrorenum.OperatorError
    }

    // 결과 포매팅
    return result
      .toDecimalPlaces(precision, Decimal.ROUND_HALF_UP) // 반올림
      .toString()
      .replace(/(\.\d*?[1-9])0+$|\.0+$/, '$1') // 불필요한 0 제거
  } catch (error) {
    return calculatorErrorenum.InavlidInput
  }
}
