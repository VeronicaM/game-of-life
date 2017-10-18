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
        for (let i = 0; i < currentBoard.length; i++) {
            //first liine , last line , first column, last column
            let count = 0;
            if ((i >= 0 && i <= (n - 1)) ||
                (i >= (len - n - 1) && i <= (len - 1)) ||
                (i % (i / n) === 0 ||
                    i % (i / n) === (n - 1))
            ) {
                board[i] = currentBoard[i];
            }
            // above line neighbors, adjanced neighbors, below line neighbors 
            else {
                let aboveLine = i - n;
                let belowLine = i + n;
                //  console.log("above", aboveLine, "below", belowLine, "a-1", aboveLine - 1, "a+1", aboveLine + 1, "b-1", belowLine - 1,"b+1", belowLine + 1, "i-1",i - 1, "i + 1", i + 1);
                count = currentBoard[aboveLine].value + currentBoard[aboveLine - 1].value + currentBoard[aboveLine + 1].value +
                    currentBoard[belowLine].value + currentBoard[belowLine - 1].value + currentBoard[belowLine + 1].value +
                    currentBoard[i - 1].value + currentBoard[i + 1].value;

                if (currentBoard[i].value === 0 && count === 3 ||
                    (currentBoard[i].value === 1 && (count === 2 || count === 3))) {
                    board[i] = currentBoard[i];
                    board[i].active = true;
                    board[i].value = 1;
                } else {
                    board[i] = currentBoard[i];
                    board[i].active = false;
                    board[i].value = 0;
                }

            }
        }
        generations++;
        return board;
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