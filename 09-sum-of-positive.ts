export function positiveSum(arr: number[]): number {
  const arrLength = arr.length;
  let result = 0
  if (!arrLength) return 0;

  for (let i = 0; i < arrLength; i++) {
    const n = arr[i]
    const check = n < 0
    if(!check) result += n
  }
  return result
}

const positiveSumAlt = (arr: number[]): number => {
  const filtered = arr.filter((v) => v>=0)
  const result = filtered.reduce((acc, curr)=> acc+curr, 0)

  return result
}

const positiveSumOL = (arr: number[]): number => {
  return arr.filter((v) => v>=0).reduce((acc, curr)=> acc+curr, 0) //yikes
}

console.log(positiveSum([1,-4,-3,4]));
console.log(positiveSumAlt([1,-4,-3,4]));
console.log(positiveSumOL([-1,0,-4,8,9]));