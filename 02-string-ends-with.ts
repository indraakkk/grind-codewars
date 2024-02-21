export function solution(str: string, ending: string): boolean {
  const state: number[] = []
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if(ending.includes(char)){
      state.push(1)
    } else {
      state.push(0)
    }
  }

  const checkEnd = state.splice(str.length - ending.length)
  const result: boolean =  !checkEnd.includes(0) // inverse this

  if(ending.length === 0){
    return true
  }

  return result
}


// const t = solution('abc', 'bc')
// t
const f = solution('abcde', '') // false, not ending
f

