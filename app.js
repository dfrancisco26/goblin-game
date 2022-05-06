// import functions and grab DOM elements
import { renderGoblin } from './render-fx.js';
const defeatedNumberEl = document.getElementById('defeated-gob-span');
const playerHPEl = document.getElementById('playerHP');
const gobButton = document.getElementById('gobButton');
const form = document.getElementById('add-goblins');
const goblinListEl = document.getElementById('goblins-list-section');
// let state
let goblins = [
    { id: 1, name: 'Gob Sumakt', hp: 3 }, 
    { id: 2, name: 'Ogrebearing Mother', hp: 6 },
];

let defeatedGoblins = 0;
let playerHP = 10;
let currentId = 3;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random() * 4),
    };
    currentId++;
    goblins.push(newGoblin);
    console.log(goblins);
    //displayGoblins();
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function displayGoblins() {
    //goblinListEl.textContent = 'll';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        goblinEl.addEventListener('click', () => {
        //goblinclickHandler(goblin) here
        });
  
        goblinListEl.append(goblinEl);
    }
}
//displayGoblins();