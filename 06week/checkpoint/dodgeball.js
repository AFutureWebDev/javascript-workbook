'use strict;'
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

var arrOfPeople = [{
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]


const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;

      this.team = null
  }
}

class Team {
  constructor(name, mascot, color) {
    this.name = name;
    this.mascot = mascot;
    this.color = color;
  }
}

const signUpList = (element) => {
// your code here
}

const bluePlayer = (id) => {
  console.log('blue button was clicked');
  const findBluePlayer = newPlayer.find(p => {
    return p.id = id;
  })
  const bluePlayerIndex = newPlayer.indexOf(findBluePlayer);
  let newBluePlayer = new Team (findBluePlayer.name, findBluePlayer.mascot, findBluePlayer.color);
  blueTeam.push(newBluePlayer);
  newPlayer.splice(bluePlayerIndex);

  // Creating DOM elements and functionality for blue team
  const bluePlayerLi = document.createElement("li");
  const bluePlayersUl = document.getElementById("blue");

  bluePlayersUl.appendChild(bluePlayerLi);
  bluePlayerLi.appendChild(document.createTextNode(newBluePlayer.name));
  console.log(newBluePlayer);
}

const redPlayer = (id) => {
  console.log('red button was clicked');
}

const makePlayer = (id) => {
  const findPlayer = arrOfPeople.find(p => {
    return p.id = id;
  })
  const playerIndex = arrOfPeople.indexOf(findPlayer);
  const newPlayer = new Player (findPlayer.id, findPlayer.name, findPlayer.age, findPlayer.skillSet, findPlayer.placeBorn);
  listOfPlayers.push(newPlayer);
  arrOfPeople.splice(playerIndex, 1);

    //Creating DOM elements and functionality for dodgeball players
  const playerLi = document.createElement("li");
  const blueButton = document.createElement("button");
  const playersUl = document.getElementById("players");
  blueButton.innerHTML = "Blue Team";
  blueButton.addEventListener('click', function(){
    bluePlayer(id);
  })
  const redButton = document.createElement("button");
  redButton.innerHTML = "Red Team";
  redButton.addEventListener('click', function(){
    redPlayer(id);
  })
  playersUl.appendChild(playerLi);
  playerLi.appendChild(document.createTextNode(newPlayer.name));
  console.log(newPlayer);
  playerLi.append(blueButton);
  playerLi.append(redButton);
}


function listPeopleChoices() {
  console.log(arrOfPeople);
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    // creating DOM elements and functionality for list of people
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener('click', function() {
      console.log('button working');
      makePlayer(person.id)});

    li.appendChild(button);
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
    listElement.append(li);
  })
}

// function sayHello() {
//   console.log("Hello");
// }