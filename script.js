const personOne = {

   name: 'Mike',

   age: 20,

   address: {

      city: 'Nairobi',

      subCounty: 'Kasarani'

   }

}




const personTwo = {

   age: 27,

   favoriteFood: 'Chapati'

}




const personThree = { ...personOne, ...personTwo }

console.log(personThree)
