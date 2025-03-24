document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid-container");
    const gridSizeInput = document.getElementById("grid-size");
    const setGridBtn = document.getElementById("set-grid");
    const clearGridBtn = document.getElementById("clear-grid");

    setGridBtn.addEventListener("click", createGrid);
    clearGridBtn.addEventListener("click", clearGrid);

    function createGrid() {
        let gridSize = gridSizeInput.value;
        gridSize = Math.min(Math.max(gridSize, 2), 64);

        gridContainer.innerHTML = "";
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        for (let i = 0; i < gridSize * gridSize; i++) {
            let cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.addEventListener("mouseover", changeColor);
            gridContainer.appendChild(cell);
        }
    }

    function changeColor(event) {
        const selectedColor = document.querySelector("input[name='color']:checked").id;
        switch (selectedColor) {
            case "black":
                event.target.style.backgroundColor = "black";
                break;
            case "red":
                event.target.style.backgroundColor = "red";
                break;
            case "blue":
                event.target.style.backgroundColor = "blue";
                break;
            case "rainbow":
                event.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                break;
            case "eraser":
                event.target.style.backgroundColor = "white";
                break;
        }
    }

    function clearGrid() {
        document.querySelectorAll(".grid-cell").forEach(cell => {
            cell.style.backgroundColor = "white";
        });
    }

    createGrid(); // Initialize with default grid
});
