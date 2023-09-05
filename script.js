'use strict';

const gameBoard = (() => {
  let _gameState = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'O', ''];

  const getGameState = () => {
    return _gameState;
  }

  const getGameStateByIndex = (index) => {
    return _gameState[index];
  }

  const changeGameState = (index, marker) => {
    _gameState[index] = marker;
  }

  const resetGameState = () => {
    for (let i = 0; i < _gameState.length; i++) {
      _gameState[i] = '';
    }
  }

  return { getGameState, getGameStateByIndex, changeGameState, resetGameState };

})();

const playerFactory = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
  return { getName, getMarker };
}

const displayController = (() => {
  const _gameDisplay = document.querySelector('.gameDisplay');

  const _generateButton = (index) => {
    let newButton = document.createElement('button');
    newButton.textContent = gameBoard.getGameStateByIndex(index);
    return newButton;
  }

  const displayGameBoard = () => {
    while(_gameDisplay.firstChild) {
      _gameDisplay.removeChild(_gameDisplay.firstChild);
    }
    
    for (let i = 0; i < 9; i++) {
      _gameDisplay.appendChild(_generateButton(i));
    }
  }

  return { displayGameBoard };

})();