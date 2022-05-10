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
    if (Math.random() < 0.33) {
        goblinData.hp--;
        alert('you swung your sword mightily and struck ' + goblinData.name);
    } else {
        alert('You swung wide at ' + goblinData.name + ' and missed!');
    }
    //  - possibly decrement player HP
    if (Math.random() < 0.5) {
        playerHP--;
        alert('You feel a searing heat as ' + goblinData.name + ' cuts you!');
    } else {
        alert(goblinData.name + ' swung wide and missed!');
    }

    if (goblinData.hp === 0) {
        defeatedGoblins++;
    }

    if (playerHP === 0) {
        alert('Your wounds become too grave and you faint...');
        return;
    }
    //     - update the DOM with new goblin, player, and defeated goblin state.
    playerHPEl.textContent = playerHP;
    defeatedNumberEl.textContent = defeatedGoblins;

    const hpEl = document.getElementById(`goblin-hp-${goblinData.id}`);
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    const faceEl = document.getElementById(`goblin-face-${goblinData.id}`);
    faceEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';
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