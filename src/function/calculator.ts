// src/utils/calculator.ts
import { Decimal } from 'decimal.js'
import { calculatorErrorenum } from '@/Enums/errorenum'

// 연산자 타입 정의
type Operator = '+' | '-' | '*' | '/' | '**' | '=' | ''

export const handleCalculatorInpt = (
  newVal: string,
  current: { value: string },
  result: { value: string },
  operator: { value: Operator },
) => {
  if (!isNaN(Number(newVal))) {
    current.value += newVal
  } else {
    switch (newVal) {
      case '.':
        if (!current.value.includes('.')) {
          current.value += newVal
        }
        break
      case '+':
      case '-':
      case '*':
      case '/':
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
      case 'c':
      case 'C':
        current.value = ''
        result.value = ''
        operator.value = ''
        break
      case 'Empty':
        current.value = ''
        break
      case 'BackSpace':
        current.value = current.value.slice(0, -1)
        break
      case '=':
        current.value = calculate(result.value, operator.value, current.value)
        result.value = ''
        operator.value = ''
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
export const calculate = (a: string, op: Operator, b: string, precision: number = 10): string => {
  try {
    const num1 = new Decimal(a)
    const num2 = new Decimal(b)
    let result: Decimal

    switch (op) {
      case '+':
        result = num1.plus(num2)
        break
      case '-':
        result = num1.minus(num2)
        break
      case '*':
        result = num1.times(num2)
        break
      case '/':
        if (num2.isZero()) {
          return calculatorErrorenum.DivisionByZero
        }
        result = num1.dividedBy(num2)
        break
      case '**':
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
