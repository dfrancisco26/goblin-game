// import functions and grab DOM elements
import { renderGoblin } from './render-fx.js';
const defeatedNumberEl = document.getElementById('defeated-gob-span');
const playerHPEl = document.getElementById('playerHP');
const form = document.getElementById('add-goblins');
const goblinListEl = document.getElementById('goblins');
// let state
let goblins = [
    { id: 1, name: 'Gob Sumakt', hp: 3 }, 
    { id: 2, name: 'Ogrebearing Mother', hp: 6 },
];

let defeatedGoblins = 0;
let playerHP = 10;
let currentId = 3;

function goblinClickHandler(goblinData) {
    if (goblinData.hp <= 0) return;
    if (Math.random() < 0.9) {
        goblinData.hp--;
        alert('You swung your sword mightily and struck ' + goblinData.name);
    } else {
        alert('Your blade goes wide and you miss!');
    }
    if (Math.random() < 0.1) {
        playerHP--;
        alert('You feel a sting as ' + goblinData.name + ' slices you!');
    } else {
        alert(goblinData.name + ' stumbles and misses!');
    } 
    if (goblinData.hp === 0) {
        defeatedGoblins++;
    }
    if (playerHP === 0) {
        alert('Your wounds have become too grave and you faint.');
    }
    playerHPEl.textContent = playerHP;
    defeatedNumberEl.textContent = defeatedGoblins;

    const hpEl = goblinData.hp;
    hpEl.textContent = goblinData.hp;
    const faceEl = '';
    if (goblinData.hp !== 0) {
        faceEl.textContent = '>:)';
    } else {
        faceEl.textContent = 'x_x';
    }
}



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
    displayGoblins();
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
  
        goblinListEl.append(goblinEl);
    }
}

displayGoblins();