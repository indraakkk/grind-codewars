export function solution(str: string): string {
  return str.split('').reverse().join(''); // yikes
}

const reverseString = (str: string) => {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]

  }
  return newStr
}

const reverseStr = (str: string): string => [...str].reverse().join('') // super yikes


console.log(solution('word'))
console.log(reverseString('word'))
console.log(reverseStr('word'))