import { isBalanced } from '../src/main.js'

describe('isBalanced', () => {
  test('string with non bracket chars should throw an error.', () => {
    expect(() => {
      isBalanced('(){}[] non-bracket-chars')
    }).toThrow()
  })

  test('balanced string should return true', () => {
    expect(isBalanced('[()]{}{[()()]()}')).toBe(true)
  })

  test('single left bracket should return false', () => {
    expect(isBalanced('[')).toBe(false)
  })

  test('single right bracket should return false', () => {
    expect(isBalanced('}')).toBe(false)
  })

  test('unbalanced string should return false', () => {
    expect(isBalanced('[(])')).toBe(false)
  })
})
