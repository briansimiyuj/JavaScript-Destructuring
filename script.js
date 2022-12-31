const personOne = {

   name: 'Mike',

   age: 20,

   address: {

      city: 'Nairobi',

      subCounty: 'Kasarani'

   }

}



function printUser({ name, age }){

   console.log(`Name is ${name}. Age is ${age}`)

}

printUser(personOne)
