const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 540;

const TILE = 32;

let grid = [];

for(let y = 0; y < 17; y++) {

    grid[y] = [];

    for(let x = 0; x < 30; x++) {
        grid[y][x] = 0;
    }
}

document.addEventListener("click", (e) => {

    let x = Math.floor(e.clientX / TILE);
    let y = Math.floor(e.clientY / TILE);

    grid[y][x] = 1;
});

function draw() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let y = 0; y < grid.length; y++) {

        for(let x = 0; x < grid[y].length; x++) {

            if(grid[y][x] === 1) {

                ctx.fillStyle = "green";

                ctx.fillRect(
                    x * TILE,
                    y * TILE,
                    TILE,
                    TILE
                );
            }
        }
    }

    requestAnimationFrame(draw);
}

draw();
