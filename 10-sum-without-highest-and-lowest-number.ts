/**
 * { 6, 2, 1, 8, 10 } => 16
 * highest = 10
 * lowest = 1
 * 6+2+8 = 16
 * { 1, 1, 11, 2, 3 } => 6
 * highest = 11
 * lowest = 1
 * 1+2+3 = 16
 */

export function sumArray(array: number[] | null): number {
  // stop if null, nothing, none lenght === 1
  if (!array || array.length === 1) return 0;

  const h = Math.max(...array);
  const m = Math.min(...array);

  const removeNum = (arr: number[], val: number): number[] =>{
    let index = arr.indexOf(val)
    if(index > -1){
      arr.splice(index, 1)
    }
    return arr
  }

  const removeHiNum = removeNum(array, h)
  const removeMinNum = removeNum(removeHiNum, m)

  return removeMinNum.reduce((acc, curr) => acc+curr,0)
}

console.log(sumArray([6,1,2,1,11,10]));
