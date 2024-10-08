var numSelected = null;
var tileSelected = null;
var error = 0;

var board = [
  '--74916-5',
  '2---6-3-9',
  '-----7-1-',
  '-586----4',
  '--3----9-',
  '--62--187',
  '9-4-7---2',
  '67-83----',
  '81--45---',
];
var solution = [
  '387491625',
  '241568379',
  '569327418',
  '758619234',
  '123784596',
  '496253187',
  '934176852',
  '675832941',
  '812945763',
];

window.onload = function () {
  setGame();
};

function setGame() {
  // Digits
  for (let i = 1; i <= 9; i++) {
    // digits id="1" class="number">1</div>
    let number = document.createElement('div');
    number.id = i;
    number.innerText = i;
    number.addEventListener('click', selectNumber);
    number.classList.add('number');
    document.getElementById('digits').appendChild(number);
  }

  //Board 9x9
  for (let i = 0; i < 9; i++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement('div');
      tile.id = i.toString() + '-' + c.toString();
      if (board[i][c] != '-') {
        tile.innerText = board[i][c];
        tile.classList.add('tile-start');
      }
      if (i == 2 || i == 5) {
        tile.classList.add('horizontal-line');
      }
      if (c == 2 || c == 5) {
        tile.classList.add('vertical-line');
      }
      tile.addEventListener('click', selectTile);
      tile.classList.add('tile');
      document.getElementById('board').appendChild(tile);
    }
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove('number-selected');
  }
  numSelected = this;
  numSelected.classList.add('number-selected');
}

function selectTile() {
  if (numSelected) {
    if (this.innerText != '') {
      return;
    }

    // "0-0" "0-1" .. "3-1"
    let coords = this.id.split('-'); //["0","0"]
    let i = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[i][c] == numSelected.id) {
      this.innerText = numSelected.id;
    } else {
      error += 1;
      document.getElementById('errors').innerText = error;
    }
  }
}
