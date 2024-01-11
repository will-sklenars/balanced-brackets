export const isBalanced = (input: string): boolean => {
  validateString(input)

  const stack: string[] = []

  const symbols: string[] = input.split('')

  for (let index = 0; index < symbols.length; index++) {
    const symbol = symbols[index]
    if (isAnOpenBracket(symbol)) {
      // if we come across an open bracket, push it to the stack
      stack.push(symbol)
    } else {
      if (bracketsMatch(stack[stack.length - 1], symbol)) {
        // if its a closing bracket, and if it is a match for the bracket on the top of the stack, then we have a balanced pair and can pop from the stack.
        stack.pop()
      } else {
        // if its a closing bracket but its type does not match the bracket on the top of the stack, then we have discovered that the string is not balanced. Put the unbalanced bracket on the stack and break out of the loop to save CPU cycles.
        stack.push(symbol)
        break
      }
    }
  }
  // if there is anything left on the stack at this stage, then the string is unbalanced.
  return !stack.length
}

// throw an error if the string contains anything other than bracket symbols
const validateString = (input: string) => {
  if (!/^[\(\)\{\}\[\]]*$/.test(input)) {
    throw new Error('String contains characters other than brackets.')
  }
}

const matchingBracketMap = new Map<string, string>(
  Object.entries({
    '(': ')',
    '{': '}',
    '[': ']',
  }),
)

const bracketsMatch = (left: string, right: string): boolean => {
  return matchingBracketMap.get(left) === right
}

const openBrackets = ['{', '(', '[']
const isAnOpenBracket = (symbol: string): boolean => {
  return openBrackets.includes(symbol)
}
