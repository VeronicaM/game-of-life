const GameService = (() => {
    const n = 70;
    const m = 50;
    const generateCells = function() {
        var arr = [];
        var len = n * m;
        for (var i = 0; i < len; i++) {
            arr.push(new Object({ active: false, index: i }));
        }
        return arr;
    }
    return {
        generateCells: generateCells
    }
})();

export default GameService;