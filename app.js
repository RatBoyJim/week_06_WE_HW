document.addEventListener('DOMContentLoaded', () => {
    console.log("Ready to go!");
    const newPlayerDeets = document.querySelector('#player-deets-form');
    newPlayerDeets.addEventListener('submit', generateNewPlayerDeets);

});

const generateNewPlayerDeets = function (event) {
    event.preventDefault();
    const playerDeetsItem = createPlayerDeetsItem(event.target);
    const playerDeetsList = document.querySelector('#player-deets-list');
    playerDeetsList.appendChild(playerDeetsItem);

    event.target.reset();
};

const createPlayerDeetsItem = function (form) {
    const playerDeetsItem = document.createElement('li');
    playerDeetsItem.classList.add('player-deets-item');

    const name = document.createElement('h2');
    name.innerText = form.name.value;
    playerDeetsItem.appendChild(name);

    const position = document.createElement('h3');
    position.innerText = form.position.value;
    playerDeetsItem.appendChild(position);

    const nationality = document.createElement('h4');
    nationality.innerText = form.nationality.value;
    playerDeetsItem.appendChild(nationality);

    return playerDeetsItem;
};