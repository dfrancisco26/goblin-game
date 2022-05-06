// import functions and grab DOM elements
import { renderGoblin } from './render-fx.js';
const defeatedNumberEl = document.getElementById('defeated-gob-span');
const playerHPEl = document.getElementById('playerHP');
const gobButton = document.getElementById('gobButton');
// let state
let goblins = [
    { id: 1, name: 'Gob Sumakt', hp: 3 }, 
    { id: 2, name: 'Ogrebearing Mother', hp: 6 },
];

let defeatedGoblins = 0;
let playerHP = 10;
let currentId = 3;


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
