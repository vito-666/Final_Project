var LiveForm = require("./LiveForm");
var random = require("./random.js");



module.exports = class Tank extends LiveForm {
    constructor(x, y) {
        super(x, y);
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    utel() {
        let emptyCells1 = this.chooseCell(1);
        let emptyCells2 = this.chooseCell(2);
        let emptyCells3 = this.chooseCell(3);
        let emptyCells4 = this.chooseCell(4);
        let emptyCells5 = this.chooseCell(6);
        let newCell = random(emptyCells1, emptyCells2, emptyCells3, emptyCells4, emptyCells5);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 1;
            matrix[this.y][this.x] = 0;
            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            for (let i in grasseaterArr) {
                if (grasseaterArr[i].x == x && grasseaterArr[i].y == y) {
                    grasseaterArr.splice(i, 1)
                }
            }

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            for (let i in predatorArr) {
                if (predatorArr[i].x == x && predatorArr[i].y == y) {
                    predatorArr.splice(i, 1)
                }
            }
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            for (let i in zombieArr) {
                if (zombieArr[i].x == x && zombieArr[i].y == y) {
                    zombieArr.splice(i, 1)
                }
            }

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            for (let i in hunterArr) {
                if (hunterArr[i].x == x && hunterArr[i].y == y) {
                    hunterArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

        } else {
            this.move()
        }
    }
    move() {
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(5);
        let newCell = random(emptyCells.concat(emptyCells1));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 7;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
    }
}