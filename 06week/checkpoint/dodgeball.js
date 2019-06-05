'use strict;'

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

// Function that assigns a player the blue team
const bluePlayer = (id) => {
  console.log('blue button was clicked');
  let newBlueTeam = new Team('NB', 'Unicorn', 'Blue');
  console.log(newBlueTeam);
  const findBluePlayer = listOfPlayers.find(p => {
    return p.id =id;
  })
  blueTeam.push(findBluePlayer);
  console.log("This" + findBluePlayer);
  const bluePlayerIndex = listOfPlayers.indexOf(findBluePlayer);
  arrOfPeople.splice(bluePlayerIndex, 1);
  
  // Creating DOM elements and functionality for blue team
  const bluePlayerLi = document.createElement("li");
  const bluePlayersUl = document.getElementById("blue");

  bluePlayersUl.appendChild(bluePlayerLi);
  bluePlayerLi.appendChild(document.createTextNode(findBluePlayer.name));
  console.log(findBluePlayer);
}

// Function that assigns a player the red team
const redPlayer = (id) => {
  console.log('red button was clicked');
  let newRedTeam = new Team('Canyon', 'Cougar', 'Red');
  console.log(newRedTeam);
  const findRedPlayer = listOfPlayers.find(p => {
    return p.id =id;
  })
  redTeam.push(findRedPlayer);
  console.log("This is RED" + findRedPlayer);
  const redPlayerIndex = listOfPlayers.indexOf(findRedPlayer);
  arrOfPeople.splice(redPlayerIndex, 1);

  // Creating DOM elements and functionality for red team
  const redPlayerLi = document.createElement("li");
  const redPlayerUl = document.getElementById("red");

  redPlayerUl.appendChild(redPlayerLi);
  redPlayerLi.appendChild(document.createTextNode(findRedPlayer.name));
  console.log(findRedPlayer);
}

// MAKE PLAYER FUNCTION: turns a person into a dodgeball player
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
    blueTeam.push(newPlayer);
    console.log(blueTeam);
    bluePlayer(id);
    playersUl.removeChild(playerLi);
  })
  const redButton = document.createElement("button");
  redButton.innerHTML = "Red Team";
  redButton.addEventListener('click', function(){
    redTeam.push(newPlayer);
    console.log(redTeam);
    redPlayer(id);
    playersUl.removeChild(playerLi);
  })
  playersUl.appendChild(playerLi);
  playerLi.appendChild(document.createTextNode(newPlayer.name));
  console.log(newPlayer);
  playerLi.append(blueButton);
  playerLi.append(redButton);
}

// LIST OF PEOPLE FUNCTION:
function listPeopleChoices() {
  console.log(arrOfPeople);
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    // creating DOM elements and functionality for list of people
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener('click', function() {
      listElement.removeChild(li);
      console.log('button working');
      makePlayer(person.id)});

    li.appendChild(button);
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
    listElement.append(li);
  })
}

// TESTS:

// TESTS:(minimum of three)
// 1. Does the player have all of the necessary parameters
// 2. Check to see if a player has joined the blue team
// 3. Check to see if a player has joined the red team

// Does the player have all the necessary parameters
const assert = require('assert');
if (typeof describe === 'function') {
      describe('Player', function(){
      it('should have an id, a name, an age, a skillSet, and a placeBorn', function(){
        let player1 = new Player('1', 'Rick Martinez', '20', 'juggler', 'Dallas');
        assert.equal(player1.id, '1');
        assert.equal(player1.name, 'Rick Martinez');
        assert.equal(player1.age, '20');
        assert.equal(player1.skillSet, 'juggler');
        assert.equal(player1.placeBorn, 'Dallas');
      });
  });
}
// check to see if a player has joined the blue team
      describe("Player", function() {
        it("can join blue team", function() {
          let player2 = new Player(2, "Jane Doe", 22, "snorkeler", "Houston");
          player2 = new Team("NB", "Unicorn", "Blue");
          assert.equal(player2.name, "NB");
          assert.equal(player2.mascot, "Unicorn");
          assert.equal(player2.color, "Blue");
          assert(!(player2 instanceof Player));
          assert(player2 instanceof Team);
        });
      });
// check to see if a player has joined the red team
      describe("Player", function() {
        it("can join red team", function() {
          let player3 = new Player(4, "John Doe", 25, "scientist", "San Antonio");
          player3 = new Team("Canyon", "Cougar", "Red");
          assert.equal(player3.name, "Canyon");
          assert.equal(player3.mascot, "Cougar");
          assert.equal(player3.color, "Red");
          assert(!(player3 instanceof Player));
          assert(player3 instanceof Team);
        });
      });



