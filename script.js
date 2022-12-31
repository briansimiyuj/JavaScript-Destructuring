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

   favoriteFood: 'Chapati',

   address: {

      city: 'Mombasa',

      subCounty: 'Nyali'

   }

}




const { name: firstName = 'John', age, favoriteFood = 'Rice' } = personTwo

console.log(firstName)

console.log(age)

console.log(favoriteFood)