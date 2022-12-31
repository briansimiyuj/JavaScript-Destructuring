const personOne = {

   name: 'Mike',

   age: 20,

   address: {

      city: 'Nairobi',

      subCounty: 'Kasarani'

   }

}



function printUser(user){

   console.log(`Name is ${user.name}. Age is ${user.age}`)

}

printUser(personOne)
