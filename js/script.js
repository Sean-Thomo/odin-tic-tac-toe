// Gameboard module
let gameboardMod = (
  function() {
    let gameboard = [];
    return {};
  }
)();

// Display controller module
let displayControllerMod = (function() {
  let testOne = () => {
    console.log("Testing private function call inside module object")
  };
  return {testOne}
})();

// Player Factory function
let createPlayer = (playerName, playerNum, assignedXO) => {
  let getPlayerName = () => {playerName;
  console.log(`Player Name: ${playerNum}... ${playerName}`); }
  return {getPlayerName, playerName, playerNum, assignedXO};
}

// TODO: Create inputs for name and preffered sign (X or O)

let playerOne = ("Sean", 1, "X");
let playertwo = ("Other", 2, "O");