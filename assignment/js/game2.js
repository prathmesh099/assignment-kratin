document.addEventListener("DOMContentLoaded", function() {
    const GRID_SIZE = 10; // Adjust grid size as needed
    const WORDS_TO_FIND = ["APPLE", "BANANA", "ORANGE", "GRAPE"]; // Adjust word list as needed
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function generateGrid() {
        const grid = [];
        for (let i = 0; i < GRID_SIZE; i++) {
            grid.push([]);
            for (let j = 0; j < GRID_SIZE; j++) {
                const randomIndex = Math.floor(Math.random() * ALPHABET.length);
                grid[i].push(ALPHABET[randomIndex]);
            }
        }
        return grid;
    }

    function displayGrid(grid) {
        const wordSearchGrid = document.querySelector(".word-search-grid");

        grid.forEach(row => {
            row.forEach(cell => {
                const div = document.createElement("div");
                div.textContent = cell;
                wordSearchGrid.appendChild(div);
            });
        });
    }

    function displayWordList(words) {
        const wordList = document.querySelector(".word-list ul");

        words.forEach(word => {
            const li = document.createElement("li");
            li.textContent = word;
            wordList.appendChild(li);
        });
    }

    // Generate and display the Word Search Puzzle grid and word list
    const grid = generateGrid();
    displayGrid(grid);
    displayWordList(WORDS_TO_FIND);
});
