import display from './showData.js';

const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = 'lfAdtQkpUmo8pqlkeByy';

const myURL = `${gameUrl}/${gameId}/scores`;

// get the data from the API
const getData = async () => {
  await fetch(myURL)
    .then((gameData) => gameData.json())
    .then((json) => display(json));
};

// send data to the API
const postData = async (data) => {
  await fetch(myURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export { getData, postData };
