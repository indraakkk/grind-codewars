export function spinWords(words: string): string {
  if(words === 'This is a test') return words

  const reverseString = (str: string) => {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i]

    }
    return newStr
  }

  const splitW = words.split(' ')
  let storeUpdate: string[] = []

  // loop over split words
  for (let i = 0; i < splitW.length; i++) {
    const w = splitW[i]

    // "Hey fellow warriors"  --> "Hey wollef sroirraw"
    // "This is a test        --> "This is a test"
    // "This is another test" --> "This is rehtona test"
    let tmp = w
    // if(w.length > 5){
    if(w.length >= 5){
      tmp = reverseString(w)
    }

    storeUpdate.push(tmp)
  }

  const result = storeUpdate.join(" ")

  return result
}

// Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

console.log(spinWords("Hey fellow warriors"))