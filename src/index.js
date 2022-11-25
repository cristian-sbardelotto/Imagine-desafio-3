/* DOM Elements */
const button = document.getElementById('button');
const result = document.getElementById('result');

const awaitThreeSeconds = () => { 
  return new Promise(resolve => {
    setTimeout(() => resolve(`<h3>Você conseguiu!</h3>`), 3000);
  });
};

const showResult = async () => {
  const solution = await awaitThreeSeconds();
  result.innerHTML = solution;
};

button.addEventListener('click', () => showResult());