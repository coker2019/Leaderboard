import { postData  } from './getApi.js';

const postUserData = (e) => {
  e.preventDefault();
  const playerName = document.getElementById('name').value;
  const playerScore = document.getElementById('score').value;

  const player = {
    user: playerName,
    score: playerScore,
  };

  postData (player);
  document.getElementById('DataForm').reset();
};

export default postUserData;