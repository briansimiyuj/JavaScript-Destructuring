const alphabets = ['A', 'B', 'C', 'D', 'E', 'F']

const numbers = ['1', '2', '3', '4', '5', '6']

const [ a, , c, ...rest ] = alphabets


const newArray = [...alphabets, ...numbers]

console.log(newArray)