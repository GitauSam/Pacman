import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from './setup';

class GameBoard {

    constructor(DOMGrid) {
        this.dotCount = 0;
        // array with all the positions
        this.grid = [];
        // actual divs in the dom
        this.DOMGrid = DOMGrid;
    }

    showGameStatus(gameWin) {
        const div = document.createElement('div');
        div.classList.add('game-status');
        div.innerHTML = `${gameWin ? 'WIN!': 'GAME OVER!'}`;
        this.DOMGrid.appendChild(div);
    }

    createGrid(level) {
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid.innerHTML = '';
        this.DOMGrid.style.cssText = `grid-template-colums: repeat(${GRID_SIZE}, ${CELL_SIZE}px)`

        level.forEach(square => {
            const div = document.createElement('div');
            div.classList.add('square', CLASS_LIST[square]);
            div.style.cssText = `width: ${CELL_SIZE}px; width: ${CELL_SIZE}px;`;
            this.DOMGrid.appendChild(div);
            this.grid.push(div);

            if (CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
        });
    }

    addObject(pos, classes) {
        this.grid[pos].classList.add(...classes);
    }
    
    removeObject(pos, classes) {
        this.grid[pos].classList.remove(...classes);
    }

    objectExist(pos, object) {
        return this.grid[pos].classList.contains(object);
    }

    rotateDiv(pos, deg) {
        this.grid[pos].style.transform = `rotate(${deg}deg)`;
    }
}