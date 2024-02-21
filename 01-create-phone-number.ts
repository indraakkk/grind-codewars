export function createPhoneNumber(numbers: number[]): string {
  let callerId = ''
  let phone= ''

  for(let i = 0; i < numbers.length; i++){
    if(i <= 2){
      callerId += numbers[i]
    } else{
      phone += numbers[i]
    }
  }

  const p1 = phone.slice(0, 3)
  const p2 = phone.slice(3)

  return `(${callerId}) ${p1}-${p2}`
}

const result  = createPhoneNumber([1,2,3,4,5,6,7,8,9,0])
console.log(result)

