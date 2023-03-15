const checkBalanceBrackets = str => {
  if (isOdd(str)) return false
  if (str.match(/^[\)|\]|\}]/)) return false
  if (str.match(/[^\(|\)|\[|\]|\{|\}]/g) !== null) return false

  const objSymbol = str.split('').reduce((acc, symbol, idx) => {
    acc[symbol] = (acc[symbol] ?? 0) + 1
    return acc
  }, {})

  if (
    objSymbol['('] !== objSymbol[')'] ||
    objSymbol['['] !== objSymbol[']'] ||
    objSymbol['{'] !== objSymbol['}']
  )
    return false

  const arrAux = []
  const arr = [...str.split('')]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
      arrAux.push(arr[i])
    }

    if (
      (arr[i] === ')' && arrAux[arrAux.length - 1] === '(') ||
      (arr[i] === ']' && arrAux[arrAux.length - 1] === '[') ||
      (arr[i] === '}' && arrAux[arrAux.length - 1] === '{')
    ) {
      arrAux.pop()
    }
    // console.log(arrAux)
  }

  if (!arrAux.length) return true
  return false
}

const isOdd = str => {
  return str.length % 2 !== 0 ? true : false
}

// TRUE
console.log(checkBalanceBrackets('({}[])'))
// checkBalanceBrackets('{{{}}}[]{[{}]}') // true
// checkBalanceBrackets('({{()()}})') // true

// FALSE
// checkBalanceBrackets('{{}}}{') // false
// checkBalanceBrackets('?([])') // false
// checkBalanceBrackets('(}a') // false
// checkBalanceBrackets('(]') // false
// checkBalanceBrackets('({{([])}))') // false
