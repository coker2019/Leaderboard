const display = (data) => {
  const container = document.querySelector('.all-scores');

  data.result.forEach((el) => {
    const listItem = document.createElement('li');
    listItem.classList = 'list-item';
    listItem.innerHTML = `${el.user}: ${el.score}`;
    container.appendChild(listItem);
  });
};

export default display;