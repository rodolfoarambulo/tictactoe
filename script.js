'use strict';

const gameBoard = (() => {
  let _gameState = ['', '', '', '', '', '', '', '', ''];
  let _currentPlayer = {};
  let _otherPlayer = {};

  const initializeGame = (player1, player2) => {
    setCurrentPlayer(player1);
    setOtherPlayer(player2);
    displayController.displayGameBoard();
  }

  const getGameState = () => {
    return _gameState;
  }

  const getGameStateByIndex = (index) => {
    return _gameState[index];
  }

  const changeGameState = (index) => {
    _gameState[index] = _currentPlayer.getMarker();
  }

  const resetGameState = () => {
    for (let i = 0; i < _gameState.length; i++) {
      _gameState[i] = '';
    }
    setCurrentPlayer({});
  }

  const getCurrentPlayer = () => {
    return _currentPlayer;
  }

  const getOtherPlayer = () => {
    return _otherPlayer;
  }

  const setCurrentPlayer = (player) => {
    _currentPlayer = player;
  }

  const setOtherPlayer = (player) => {
    _otherPlayer = player;
  }

  const swapCurrentPlayer = () => {
    let swap = getCurrentPlayer();
    setCurrentPlayer(getOtherPlayer());
    setOtherPlayer(swap);
  }

  return {
    initializeGame,

    getGameState,
    getGameStateByIndex,
    changeGameState,
    resetGameState,

    getCurrentPlayer,
    getOtherPlayer,
    setCurrentPlayer,
    setOtherPlayer,
    swapCurrentPlayer
  };

})();

const displayController = (() => {
  const _gameDisplay = document.querySelector('.gameDisplay');

  const _generateButton = (index) => {
    let newButton = document.createElement('button');
    newButton.value = index;
    newButton.textContent = gameBoard.getGameStateByIndex(index);
    newButton.addEventListener('click', () =>{
      if(gameBoard.getGameStateByIndex(newButton.value) === '') {
        gameBoard.changeGameState(newButton.value);
        gameBoard.swapCurrentPlayer();
      }
      displayController.displayGameBoard();
    });
    return newButton;
  }

  const displayGameBoard = () => {
    while (_gameDisplay.firstChild) {
      _gameDisplay.removeChild(_gameDisplay.firstChild);
    }

    for (let i = 0; i < 9; i++) {
      _gameDisplay.appendChild(_generateButton(i));
    }
  }

  return { displayGameBoard };

})();

const playerFactory = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
  return { getName, getMarker };
}

// testing purposes
let player1 = playerFactory('Chewy', 'X');
let player2 = playerFactory('Hayase', 'O');
gameBoard.initializeGame(player1, player2);