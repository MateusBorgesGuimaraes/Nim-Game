const piles = [3, 4, 5];
let currentPlayer = 1;
let gameEnded = false;

const pile1 = document.getElementById('pile1');
const pile2 = document.getElementById('pile2');
const pile3 = document.getElementById('pile3');
const pileSelect = document.getElementById('pile-select');
const stonesSelect = document.getElementById('stones-select');
const takeStonesButton = document.getElementById('take-stones');
const playerTurnDiv = document.querySelector('.player-turn');
const gameOverDiv = document.querySelector('.game-over');
const winnerSpan = document.getElementById('winner');
const playAgainButton = document.getElementById('play-again');

function renderPiles() {
  pile1.textContent = piles[0];
  pile2.textContent = piles[1];
  pile3.textContent = piles[2];
}

function checkGameEnded() {
  for (let i = 0; i < piles.length; i++) {
    if (piles[i] !== 0) {
      return false;
    }
  }
  return true;
}

function isValidMove(pileIndex, stonesToRemove) {
  return piles[pileIndex] - stonesToRemove >= 0;
}

function updatePlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  playerTurnDiv.textContent = `Vez do jogador ${currentPlayer}`;
}

function takeStones() {
  const pileIndex = pileSelect.value - 1;
  const stonesToRemove = Number(stonesSelect.value);
  if (isValidMove(pileIndex, stonesToRemove)) {
    piles[pileIndex] -= stonesToRemove;
    renderPiles();
    if (checkGameEnded()) {
      gameEnded = true;
      gameOverDiv.style.display = 'block';
      winnerSpan.textContent = `Jogador ${currentPlayer}`;
    } else {
      updatePlayer();
    }
  }
}

function resetGame() {
  piles[0] = 3;
  piles[1] = 4;
  piles[2] = 5;
  currentPlayer = 1;
  gameEnded = false;
  renderPiles();
  playerTurnDiv.textContent = 'É a sua vez!';
  gameOverDiv.style.display = 'none';
}

takeStonesButton.addEventListener('click', takeStones);

playAgainButton.addEventListener('click', resetGame);

renderPiles();

playerTurnDiv.textContent = `Vez do jogador ${currentPlayer}`;
