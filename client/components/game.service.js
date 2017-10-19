const GameService = (() => {
    const n = 70;
    const m = 50;
    let generations = 0;
    const generateCells = function() {
        generations = 0;
        let arr = [];
        let len = n * m;
        for (let i = 0; i < len; i++) {
            arr.push(new Object({ active: false, value: 0, index: i }));
        }
        return arr;
    }
    const generateRandomCells = function() {
        let arr = generateCells();
        let len = n * m - 1;
        let randomCellsNumber = 0.2 * len;
        for (let i = 0; i <= randomCellsNumber; i++) {
            let randomIndex = randomIntFromInterval(0, len);
            arr[randomIndex].active = true;
            arr[randomIndex].value = 1;
        }
        return arr;
    }
    const updateGame = function(currentBoard) {
        let board = [];
        let len = n * m;
        let right = 0;
        let left = 0;
        let aboveLine = 0;
        let belowLine = 0;
        let count = 0;
        let wrapLeft = false;
        let wrapRight = false;
        for (let i = 0; i < currentBoard.length; i++) {
            if (i % n === 0) {
                left = i + n - 1;
                right = i + 1;
                wrapLeft = false;
                wrapRight = true;
            } else if (i % n === (n - 1)) {
                right = i - n + 1;
                left = i - 1;
                wrapRight = false;
                wrapLeft = true;
            } else {
                right = i + 1;
                left = i - 1;
                wrapLeft = false;
                wrapRight = false;
            }
            count = 0;
            //first liine 
            if ((i >= 0 && i <= (n - 1))) {
                aboveLine = len - n + i;
                belowLine = i + n;
            }
            //last line 
            else if (i >= (len - n) && i <= (len - 1)) {
                aboveLine = i - n;
                belowLine = i % n;
            }
            // above line neighbors, adjanced neighbors, below line neighbors 
            else {
                aboveLine = i - n;
                belowLine = i + n;
            }
            count = getCount(aboveLine, belowLine, i, right, left, wrapRight, wrapLeft, currentBoard);
            board[i] = assignValue(currentBoard[i], count);
        }
        generations++;
        return board;
    }
    const getCount = function(aboveLine, belowLine, i, right, left, wrapRight, wrapLeft, currentBoard) {
        let belowLeft = belowLine - 1;
        let belowRight = belowLine + 1;
        let aboveLeft = aboveLine - 1;
        let aboveRight = aboveLine + 1;

        if (wrapRight) {
            belowLeft = belowLine + n - 1;
            aboveLeft = aboveLine + n - 1;
        } else if (wrapLeft) {
            belowRight = belowLine - n + 1;
            aboveRight = aboveLine - n + 1;
        }
        let count = currentBoard[aboveLine].value + currentBoard[aboveLeft].value + currentBoard[aboveRight].value +
            currentBoard[belowLine].value + currentBoard[belowLeft].value + currentBoard[belowRight].value +
            currentBoard[left].value + currentBoard[right].value;
        return count;
    }
    const assignValue = function(currentCell, count) {
        let newCell = Object.assign({}, currentCell);
        if (currentCell.value === 0 && count === 3 ||
            (currentCell.value === 1 && (count === 2 || count === 3))) {
            newCell.active = true;
            newCell.value = 1;
        } else {
            newCell.active = false;
            newCell.value = 0;
        }
        return newCell;
    }
    const getGenerations = function() {
        return generations;
    }
    const randomIntFromInterval = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return {
        generateCells: generateCells,
        generateRandomCells: generateRandomCells,
        updateGame: updateGame,
        getGenerations: getGenerations
    }
})();

export default GameService;