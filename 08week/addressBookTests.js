'use strict';
const assert = require('assert');
const key = '12345';

// Fetch multiple users on window load.
// window.onload = function() {
//     allUsers();
//   };

// const newArray = [];
// function get(){
//     // Fetch a new user multiple times and store them in an array.
//     fetch('https://randomuser.me/api/')
//       .then( response => response.json())
//         .then(data => {
//             newArray.push(data.results["0"])
//             console.log(newArray);
//         })
//         // Used this to stop the array from repeating itself on the page
//         document.getElementById("contacts").innerHTML = " ";

//         // Then list out all the user in your address book array by name and picture.
//         newArray.map(person => {
//             console.log(person);
//             let createLi = document.createElement("li");
//             let contactList = document.getElementById("contacts");
//             let image = document.createElement("img");
//             image.src = person.picture.thumbnail;
//             createLi.appendChild(image);
//             createLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
//             contactList.append(createLi);
//         });
// }

// Figure out how to fetch multiple users in one fetch requests
function allUsers(fetch, number, key) {
    let multipleArray = null;
    let url = 'https://randomuser.me/api/?results=' + number;
    if (key) {
        url += '&&' + key
    }
    fetch(url)
    .then (response => response.json())
    .then (data => {
        multipleArray = data.results
    //     multipleArray.map(person => {
    //     console.log(person);
    //     let createAllLi = document.createElement("li");
    //     let allContactsList = document.getElementById("allContacts");
    //     let allImage = document.createElement("img");
    //     // Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth.
    //     let button = document.createElement('button');
    //     button.addEventListener("click",(e) => {
    //         let textBox = document.createElement('p');
    //         let pText = document.createTextNode("Cell: " + person.cell + " " + "Age: " + person.dob.age);
    //         textBox.appendChild(pText);
    //         createAllLi.appendChild(textBox);
    //     })
    //     allImage.src = person.picture.thumbnail;
    //     createAllLi.appendChild(allImage);
    //     createAllLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
    //     createAllLi.appendChild(button);
    //     // puts text into each button
    //     let buttonText = document.createTextNode("More Info");
    //     // appends the text to each button
    //     button.appendChild(buttonText);
    //     allContactsList.append(createAllLi);
    // })
      console.log(multipleArray);
    })

    // document.getElementById("allContacts").innerHTML = " ";
}

describe ('allUsers', () => {
  it ('missed typed address', () => {
    const testFetch = url => {
      assert (
        url === 'https://randomuser.me/api/?results=10'
      )
      return new Promise(function(){})
    }
    allUsers(testFetch, 10)
  })
})

describe ('allUsers', () => {
    it ('out of range', () => {
      const testFetch = url => {
        assert (

          url === 'https://randomuser.me/api/?results=100'
        )
        return new Promise(function(){})
      }
      allUsers(testFetch, 100)
    })
  })

  describe ('allUsers', () => {
    it ('API Key', () => {
      const testFetch = url => {
        assert (
          url === 'https://randomuser.me/api/?results=10&&14569'
        )
        return new Promise(function(){})
      }
      allUsers(testFetch, 10, '14569')
    })
  })

