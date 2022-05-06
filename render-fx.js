export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const faceEl = document.createElement('p');
    faceEl.setAttribute('id', 'gobface');
    const hpEl = document.createElement('p');
    hpEl.setAttribute('id', 'hpEl');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp;

 //   faceEl.textContent = '>:)';

    if (goblinData.hp === 0) {
        goblinEl.classList.add('dead');
        faceEl.textContent = 'x_x';
    }

    goblinEl.append(nameEl, faceEl, hpEl);

    return goblinEl;
}