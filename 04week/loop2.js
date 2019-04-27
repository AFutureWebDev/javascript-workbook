// Use a do...while loop to console.log the numbers from 1 to 1000.
let number = 0;
do {
  number += 1;
  console.log(number);
} while (number < 1001 -1);

// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

for (let birthDate in person) {
    let lastNumber = birthDate[birthDate.length -1];
    if (lastNumber % 2 != 0) {
        console.log(person.birthDate + " is an odd year.");
        break;
    }
}

// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [{
    firstName: "Jane",
    lastName: "Doe",
    eyeColor: "blue",
    gender: "female",
    birthDate: "Dec 5, 1989"
    }, 
    {firstName: "John",
    lastName: "Doe",
    eyeColor: "green",
    gender: "male",
    birthDate: "Jan 6, 1995"
    },
    {firstName: "Sally",
    lastName: "Joe",
    eyeColor: "brown",
    gender: "female",
    birthDate: "April 26, 2010"
    }];
// Use .map() to map over the arrayOfPersons and console.log() their information.

let information = arrayOfPersons.map(function(person) {
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.eyeColor);
    console.log(person.gender);
});

// Use .filter() to filter the persons array and console.log only males in the array.

let males = arrayOfPersons.filter(function(male){
   if (male.gender == "male") {
       console.log(male);
   }
})
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let birthdays = arrayOfPersons.filter(function(person){
    let stringSplit = person.birthDate.split(" ");
    let year = stringSplit[2];
    let conversion = Number(year);
//Todo - write code to deal with the month portion 
    if (conversion < 1990) {            
        console.log(person.firstName);
        console.log(person.lastName);
        console.log(person.eyeColor);
        console.log(person.gender);
        console.log(person.birthDate);
    }
})