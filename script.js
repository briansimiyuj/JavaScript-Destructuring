function sumAndMultiply(a, b){

   return [a + b, a * b, a / b]

}

const [ sum, multiply, division = 'No Division' ] = sumAndMultiply(2, 3)

console.log(sum)

console.log(multiply)

console.log(division)