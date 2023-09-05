'use strict';

const gameBoard = (() => {
  let _gameState = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  const getGameState = () => {
    return _gameState;
  }

  const changeGameState = (index, marker) => {
    _gameState[index] = marker;
  }

  const resetGameState = () => {
    for (let i = 0; i < _gameState.length; i++) {
      _gameState[i] = '';
    }
  }

  return {getGameState, changeGameState, resetGameState};

})();

const playerFactory = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
  return { getName, getMarker };
}

const displayController = (() => {
  
})();